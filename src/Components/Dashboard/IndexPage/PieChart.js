import React, { useState, useEffect } from "react";
import { Pie, Chart } from "react-chartjs-2";

const style = {
  width: "400px",
  margin: "20px auto",
  height: "200px",
};
Chart.defaults.global.legend.display = false;
const PieChart = () => {
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

          plugins: {
            labels: {
              render: "label",
              display: true,
              fontSize: 12,
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

export default PieChart;
