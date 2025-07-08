# 💻 TestCode_MAQDIS_Academy – React Frontend Challenge

Proyek ini dibuat untuk menyelesaikan 3 tantangan frontend dari MAQDIS Academy menggunakan React.js.  
Semua halaman dikembangkan dalam **satu project React** dengan sistem **routing** menggunakan **React Router**, sehingga setiap tantangan bisa diakses melalui URL berbeda.

---

## 🛠️ Cara Menjalankan Proyek Ini di Laptop Anda

Ikuti langkah-langkah berikut:

### ✅ 1. Clone Repository dari GitHub

```bash
git clone https://github.com/sonibedaongololong/TestCode_MAQDIS_Academy.git
cd TestCode_MAQDIS_Academy
✅ 2. Install Dependency
Pastikan Node.js sudah terpasang di laptop Anda.
Jika belum, unduh dari: https://nodejs.org

Lalu jalankan perintah:

bash

npm install
✅ 3. Jalankan Aplikasi
bash

npm start
Setelah itu, aplikasi akan terbuka secara otomatis di browser:

http://localhost:3000
📄 Apa yang Bisa Diuji Setelah npm start
Aplikasi React ini terdiri dari 3 halaman berbeda, masing-masing merepresentasikan soal tes yang diminta oleh MAQDIS Academy.

No	Halaman	Deskripsi	URL Akses
1	Layout Responsif	Halaman utama dengan header, gambar, deskripsi, dan footer yang responsif	http://localhost:3000/
2	Admin Page	Versi modifikasi dari halaman admin yang menampilkan data tabel pengguna	http://localhost:3000/admin
3	Produk Dinamis	Halaman yang menampilkan detail produk berdasarkan ID pada URL	http://localhost:3000/product/1

🧪 Contoh Uji Tes 3 (Halaman Dinamis)
Untuk halaman produk dinamis, coba akses beberapa contoh berikut di browser:

http://localhost:3000/product/1 → Menampilkan detail Produk 1

http://localhost:3000/product/2 → Menampilkan detail Produk 2

http://localhost:3000/product/99 → Menampilkan pesan “produk tidak ditemukan”

📂 Kenapa Proyek Ini Dipisah Menjadi 3 Halaman?
Setiap tantangan MAQDIS memiliki fokus dan tujuan yang berbeda:

Test 1 – Layout Responsif:
Menunjukkan kemampuan membuat halaman HTML/CSS responsif dengan struktur umum (header, section, footer).

Test 2 – Halaman Admin (versi sendiri):
Menunjukkan kemampuan menampilkan data dinamis (tabel) yang bisa dikembangkan menjadi dashboard.

Test 3 – Halaman Dinamis Berdasarkan URL:
Menunjukkan pemahaman tentang routing dinamis dan kemampuan mengambil data berdasarkan parameter (id) di URL.

Dengan memisahkan menjadi 3 route berbeda, reviewer dapat langsung menguji tiap tugas secara terpisah tanpa mengganggu halaman lainnya. Ini juga menunjukkan pemahaman tentang komponen modular dan arsitektur proyek skala kecil.

📦 Teknologi yang Digunakan
⚛️ React.js (Create React App)

🧭 React Router DOM

💡 JSX (JavaScript XML)

🎨 CSS (Responsive Design)

👤 Developer
Nama: Yohanes Soni Beda Ongololong
Posisi: Frontend Developer – Test Magang MAQDIS
Email: ybedaongololong@gmail.com

📌 Catatan Tambahan
✅ Tidak perlu setup database — ini frontend-only project

✅ Tidak perlu konfigurasi tambahan — cukup npm install dan npm start

✅ Diuji di browser modern (Chrome & Firefox)

✅ Tampilan 100% responsif di desktop dan mobile
