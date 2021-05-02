import React, { useState, useEffect } from "react";
import { Bar, Chart } from "react-chartjs-2";

const style = {
  width: "300px",
  margin: "20px auto",
  height: "200px",
};
Chart.defaults.global.legend.display = false;
const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["Politics ", "Experience "],
      datasets: [
        {
          data: [80, 72],
          backgroundColor: ["#1895DE", "#B222FA"],
              hoverOffset: 4,
              barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
               },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div style={style}>
      <Bar
        options={{
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            animateScale: true,
          },
        }}
        data={chartData}
      />
    </div>
  );
};

export default BarChart;
