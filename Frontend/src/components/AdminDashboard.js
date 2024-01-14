// src/components/AdminDashboard.js
import React, { useState } from 'react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin User 1', email: 'adminuser1@example.com' },
    { id: 2, name: 'Admin User 2', email: 'adminuser2@example.com' },
    // Add more user data as needed
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">User Management</h2>
        <div className="overflow-x-auto">
          <div className="min-w-full bg-white border border-gray-300">
            <div className="grid grid-cols-3 text-center font-bold border-b p-2">
              <div>ID</div>
              <div>Name</div>
              <div>Email</div>
            </div>
            <div className="flex flex-col">
              {users.map((user) => (
                <div key={user.id} className="grid grid-cols-3 border-b p-2">
                  <div>{user.id}</div>
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
