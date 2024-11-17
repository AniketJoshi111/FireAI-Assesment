import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [50, 75, 60, 90, 80, 70, 100],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Data (2024)",
      },
    },
  };

  return (
    <div className="p-6  min-h-screen bg-indigo-100">
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent bg-transparent">
        Analytics
      </h1>
      <div
        className="bg-white p-4 rounded-lg shadow-md"
        style={{ height: "400px" }}
      >
        <Bar data={chartData} options={chartOptions} />
      </div>
      <footer className="flex justify-center items-center py-4 bg- text-gray-800">
        Made by{" "}
        <div className="ml-1 font-semibold hover:underline">@FireAI</div>
      </footer>
    </div>
  );
};

export default Analytics;
