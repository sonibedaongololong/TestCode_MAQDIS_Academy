import React from "react";

export default function Test2Admin() {
  const data = [
    { id: 1, name: "User A", role: "Admin" },
    { id: 2, name: "User B", role: "Editor" },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Admin Dashboard</h2>
      <table border="1" cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
