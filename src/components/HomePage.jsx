import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { salesData } from "./data/salesData"; // Import sales data (assuming it's in a separate file)
import { categoryData } from "./data/categoryData"; // Import category data
import { userData } from "./data/userData"; // Import user data

const HomePage = () => {
  return (
    <div className="p-6 min-h-screen bg-indigo-100">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
        Welcome to Sales Dashboard !!!
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
            Sales Overview
          </h2>
          <Bar data={salesData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
            Category Distribution
          </h2>
          <Pie data={categoryData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
            User Data
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Email</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-2">{user.name}</td>
                    <td className="py-2">{user.email}</td>
                    <td className="py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="flex justify-center items-center py-4 bg- text-gray-800">
        Made by{" "}
        <div className="ml-1 font-semibold hover:underline">@FireAI</div>
      </footer>
    </div>
  );
};

export default HomePage;
