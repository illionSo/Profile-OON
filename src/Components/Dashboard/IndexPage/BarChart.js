import React, { useState, useEffect } from "react";
import { Pie, Chart } from "react-chartjs-2";

const style = {
  width: "600px",
  margin: "20px auto",
  height: "400px",
};
Chart.defaults.global.legend.display = false;
const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        "Tourism",
        "Informatiion Technology",
        "Politics ",
        "Experience ",
        "Agriculture",
      ],
      datasets: [
        {
          data: [80, 45, 32, 56, 5],
          backgroundColor: "#1895DE",
          hoverOffset: 4,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div style={style}>
      <Pie
        options={{
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            animateScale: true,
          },
          title: {
            display: false,
            text: "Your favorite games",
          },
          plugins: {
            labels: {
              display: true,
              color: "white",
              position: "outside",
            },
          },
        }}
        data={chartData}
      />
    </div>
  );
};

export default BarChart;
