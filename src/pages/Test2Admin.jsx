import React, { useState, useEffect, useRef } from "react";

// Komponen Sidebar dengan animasi
const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "🏠", color: "from-blue-500 to-cyan-500" },
    { id: "users", label: "Pengguna", icon: "👥", color: "from-purple-500 to-pink-500" },
    { id: "analytics", label: "Analitik", icon: "📊", color: "from-green-500 to-emerald-500" },
    { id: "reports", label: "Laporan", icon: "📋", color: "from-yellow-500 to-orange-500" },
    { id: "settings", label: "Pengaturan", icon: "⚙️", color: "from-gray-500 to-slate-500" },
  ];

  return (
    <div className={`bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen shadow-2xl transition-all duration-300 ${isExpanded ? "w-64" : "w-16"} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute bottom-20 right-5 w-16 h-16 bg-white rounded-full opacity-5 animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className={`transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">HAMIM</h1>
            <p className="text-purple-200 text-sm mt-1">Dashboard Admin</p>
          </div>
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-white hover:text-orange-400 transition-colors duration-200">
            {isExpanded ? "←" : "→"}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="mt-8 space-y-2 px-3 relative z-10">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center px-3 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
              activeSection === item.id ? `bg-gradient-to-r ${item.color} shadow-lg transform scale-105` : "text-purple-200 hover:bg-white hover:bg-opacity-10 hover:transform hover:scale-105"
            }`}
          >
            {/* Animated background for active item */}
            {activeSection === item.id && <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10 animate-pulse"></div>}

            <span className="text-2xl mr-3 transform group-hover:scale-110 transition-transform duration-200">{item.icon}</span>

            {isExpanded && <span className={`font-medium transition-all duration-300 ${activeSection === item.id ? "text-white" : "text-purple-200"}`}>{item.label}</span>}

            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
          </button>
        ))}
      </nav>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </div>
  );
};

// Komponen Profil Muhammad Rizal
const ProfileCard = ({ isExpanded = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 p-6 mb-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 opacity-30"></div>

      <div className="relative z-10">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
              <span className="text-white font-bold text-2xl">MR</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              Muhammad Rizal
              <span className="ml-2 text-sm">👑</span>
            </h3>
            <p className="text-purple-600 font-medium">Super Administrator</p>
            <p className="text-gray-500 text-sm">📧 rizal@hamim.com</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">🟢 Online</span>
              <span className="text-xs text-gray-500">📍 Bandung, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-purple-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">156</p>
            <p className="text-xs text-gray-500">Total Login</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">47</p>
            <p className="text-xs text-gray-500">Laporan</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-pink-600">99%</p>
            <p className="text-xs text-gray-500">Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header dengan animasi
const Header = () => {
  const [time, setTime] = useState(new Date());
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-purple-100 sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="animate-pulse">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Dashboard</h2>
            <p className="text-gray-600 text-sm">Selamat datang kembali, Muhammad Rizal! 🎉</p>
          </div>
          <div className="hidden md:block text-sm text-gray-500">{time.toLocaleTimeString("id-ID")}</div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Notification Bell */}
          <div className="relative group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer transform group-hover:scale-110 transition-all duration-200 shadow-lg">
              <span className="text-white text-lg">🔔</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white text-xs font-bold">3</span>
            </div>
          </div>

          {/* Profile */}
          <div className="relative">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setShowProfileMenu(!showProfileMenu)}>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-200 shadow-lg relative">
                <span className="text-white font-bold text-lg">MR</span>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-gray-800">Muhammad Rizal</p>
                <p className="text-xs text-purple-600">Super Admin ⭐</p>
              </div>
              <span className="text-gray-400 hidden md:block">▼</span>
            </div>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-100 overflow-hidden z-50">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">MR</span>
                    </div>
                    <div>
                      <p className="font-bold">Muhammad Rizal</p>
                      <p className="text-sm text-purple-100">Super Administrator</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors flex items-center space-x-3">
                    <span>👤</span>
                    <span>Profil Saya</span>
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors flex items-center space-x-3">
                    <span>⚙️</span>
                    <span>Pengaturan</span>
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors flex items-center space-x-3">
                    <span>🔐</span>
                    <span>Keamanan</span>
                  </button>
                  <hr className="my-2 border-purple-100" />
                  <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors flex items-center space-x-3">
                    <span>🚪</span>
                    <span>Keluar</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Komponen Kartu Metrik dengan animasi
const MetricCard = ({ title, value, icon, color, change, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (isVisible) {
      const numValue = parseInt(value.replace(/[^0-9]/g, ""));
      const increment = numValue / 50;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= numValue) {
          setCount(numValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(counter);
    }
  }, [isVisible, value]);

  return (
    <div
      className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-purple-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } relative overflow-hidden group`}
    >
      {/* Background Animation */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

      {/* Floating Particles */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>

      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{title.includes("Pendapatan") ? `Rp. ${count.toLocaleString()}` : count.toLocaleString()}</p>
          {change && (
            <p className={`text-sm mt-2 flex items-center ${change.positive ? "text-green-600" : "text-red-600"}`}>
              <span className="mr-1">{change.positive ? "↗️" : "↘️"}</span>
              {change.value}
            </p>
          )}
        </div>
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${color} shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
          <span className="text-white text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

// Komponen Grafik dengan animasi
const ChartComponent = () => {
  const [chartData] = useState([
    { month: "Jan", value: 50088 },
    { month: "Feb", value: 45000 },
    { month: "Mar", value: 55000 },
    { month: "Apr", value: 48000 },
    { month: "May", value: 63108 },
    { month: "Jun", value: 58000 },
  ]);

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-purple-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-30"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">📈</span>
          Grafik Aktivitas Pengguna
        </h3>

        <div className="h-64 flex items-end justify-between space-x-2">
          {chartData.map((item, index) => (
            <div key={item.month} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-gray-200 rounded-t-lg relative overflow-hidden">
                <div
                  className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-1000 ease-out relative"
                  style={{
                    height: `${(item.value / maxValue) * 200}px`,
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-shimmer"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">{item.month}</p>
              <p className="text-xs text-purple-600 font-bold">{item.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Komponen Dashboard dengan animasi
const Dashboard = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Loading Bar */}
      {loadingProgress < 100 && (
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-100" style={{ width: `${loadingProgress}%` }}></div>
        </div>
      )}

      {/* Profile Card */}
      <ProfileCard />

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Pengguna" value="50088" icon="👥" color="from-blue-500 to-cyan-500" change={{ positive: true, value: "+12.5%" }} index={0} />
        <MetricCard title="Pengguna Aktif" value="63108" icon="✅" color="from-green-500 to-emerald-500" change={{ positive: true, value: "+8.2%" }} index={1} />
        <MetricCard title="Pendapatan" value="11889000" icon="💰" color="from-yellow-500 to-orange-500" change={{ positive: false, value: "-2.1%" }} index={2} />
        <MetricCard title="Laporan" value="1234" icon="📊" color="from-purple-500 to-pink-500" change={{ positive: true, value: "+15.3%" }} index={3} />
      </div>

      {/* Chart and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartComponent />

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-purple-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-2">🎯</span>
              Aktivitas Terbaru
            </h3>

            <div className="space-y-4">
              {[
                { icon: "🆕", title: "Pengguna baru mendaftar", time: "2 menit yang lalu", color: "from-blue-500 to-cyan-500" },
                { icon: "📋", title: "Laporan bulanan dibuat", time: "5 menit yang lalu", color: "from-green-500 to-emerald-500" },
                { icon: "⚠️", title: "Peringatan sistem", time: "10 menit yang lalu", color: "from-yellow-500 to-orange-500" },
                { icon: "🔐", title: "Login administrator", time: "15 menit yang lalu", color: "from-purple-500 to-pink-500" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-200 transform hover:scale-105">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-lg">{activity.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Tabel Pengguna dengan animasi
const UserTable = () => {
  const [users] = useState([
    { id: 1, name: "Muhammad Rizal", role: "Admin", email: "rizal@hamim.com", status: "Active", lastLogin: "2024-07-08", avatar: "MR" },
    { id: 2, name: "Sarah Johnson", role: "Editor", email: "sarah@hamim.com", status: "Active", lastLogin: "2024-07-07", avatar: "SJ" },
    { id: 3, name: "Ahmad Fauzi", role: "User", email: "ahmad@hamim.com", status: "Inactive", lastLogin: "2024-07-05", avatar: "AF" },
    { id: 4, name: "Lisa Chen", role: "Editor", email: "lisa@hamim.com", status: "Active", lastLogin: "2024-07-08", avatar: "LC" },
    { id: 5, name: "David Wilson", role: "User", email: "david@hamim.com", status: "Active", lastLogin: "2024-07-06", avatar: "DW" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role.toLowerCase() === filterRole.toLowerCase();
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-2xl font-bold flex items-center">
                <span className="mr-2">👥</span>
                Manajemen Pengguna
              </h3>
              <p className="text-purple-100 mt-1">Total: {users.length} pengguna</p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari pengguna..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-all duration-200"
                />
                <span className="absolute left-3 top-2.5 text-white/70">🔍</span>
              </div>

              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/50 transition-all duration-200"
              >
                <option value="all">Semua Peran</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="user">User</option>
              </select>

              <button className="px-6 py-2 bg-white text-purple-600 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <span className="mr-2">➕</span>
                Tambah Pengguna
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Pengguna</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Peran</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Login Terakhir</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user, index) => (
                <tr key={user.id} className="hover:bg-purple-50 transition-all duration-200 transform hover:scale-[1.01]">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-gray-900">#{user.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">{user.avatar}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">ID: {user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        user.role === "Admin"
                          ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                          : user.role === "Editor"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                          : "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${user.status === "Active" ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" : "bg-gradient-to-r from-gray-500 to-slate-500 text-white"}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastLogin}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-200 shadow-lg">✏️</button>
                      <button className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-200 shadow-lg">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Komponen Utama
const Test2Admin = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <UserTable />;
      case "analytics":
        return <Dashboard />;
      case "reports":
        return <Dashboard />;
      case "settings":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-5 animate-bounce"></div>
      </div>

      <div className="flex relative z-10">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="flex-1">
          <Header />
          <main className="p-6">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default Test2Admin;
