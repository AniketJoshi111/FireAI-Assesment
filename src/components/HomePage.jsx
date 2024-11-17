import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { salesData } from "./data/salesData"; // Import sales data (assuming it's in a separate file)
import { categoryData } from "./data/categoryData"; // Import category data
import { userData } from "./data/userData"; // Import user data

const HomePage = () => {
  return (
    <div className="p-4 md:p-6 min-h-screen bg-indigo-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent text-center md:text-left">
        Welcome to Sales Dashboard !!!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Sales Overview */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
            Sales Overview
          </h2>
          <Bar data={salesData} />
        </div>

        {/* Category Distribution */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
            Category Distribution
          </h2>
          <Pie data={categoryData} />
        </div>

        {/* User Data */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
            User Data
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-sm md:text-base">Name</th>
                  <th className="text-left py-2 text-sm md:text-base">Email</th>
                  <th className="text-left py-2 text-sm md:text-base">Status</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-2 text-sm md:text-base">{user.name}</td>
                    <td className="py-2 text-sm md:text-base">{user.email}</td>
                    <td className="py-2 text-sm md:text-base">
                      <span
                        className={`px-2 py-1 rounded-full text-xs md:text-sm ${
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

      {/* Footer */}
      <footer className="flex justify-center items-center py-4 mt-6 bg-transparent text-gray-800 text-sm md:text-base">
        Made by{" "}
        <span className="ml-1 font-semibold hover:underline">@FireAI</span>
      </footer>
    </div>
  );
};

export default HomePage;
