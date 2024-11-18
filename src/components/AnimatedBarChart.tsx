import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AnimatedBarChart = () => {
  const [progress, setProgress] = useState([0, 0]); // Initial heights

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        const [before, during] = prev;
        if (before < 125 || during < 250) {
          return [Math.min(before + 5, 125), Math.min(during + 10, 250)];
        }
        clearInterval(interval);
        return prev;
      });
    }, 100); // Adjust interval speed for smooth animation
  }, []);

  const data = {
    labels: ["Before Pandemic", "During Pandemic"],
    datasets: [
      {
        label: "Player Count (Millions)",
        data: progress, // Use the animated progress data
        backgroundColor: ["blue", "orange"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 300,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default AnimatedBarChart;
