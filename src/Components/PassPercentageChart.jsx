
import React from "react";
import ReactECharts from "echarts-for-react";
import { useTheme } from './ThemeProvider';

const PassPercentageChart = () => {
  const { darkMode } = useTheme();

  const textColor = darkMode ? '#fff' : '#000';
  const bgColor = darkMode ? '#000' : '#fff'; 

  const option = {
    backgroundColor: bgColor, // remove or set as needed

    title: {
      text: "Pass Percentage",
      left: "left",
      top: 10,
      textStyle: {
        color: textColor, // dynamic text color
        fontSize: 14,
        fontWeight: "bold",
      },
    },

    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: "{b} : {c}%",
    },

    grid: {
      left: 90,
      right: 30,
      top: 60,
      bottom: 30,
    },

    xAxis: {
      type: "value",
      max: 100,
      axisLabel: { color: textColor, formatter: "{value}%" },
      splitLine: { lineStyle: { color: darkMode ? '#444' : '#ddd' } },
    },

    yAxis: {
      type: "category",
      data: ["Overall Learners", "Assessment taken", "Passed", "Failed"],
      axisLabel: { color: textColor },
    },

    series: [
      {
        type: "bar",
        data: [92, 78, 65, 26],
        barWidth: 22,
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          color: textColor,
        },
        itemStyle: {
          borderRadius: [6, 6, 6, 6],
          color: (params) => {
            const colors = ["#8cc9ff", "#2ad1e3", "#00e5a8", "#ff7b7b"];
            return colors[params.dataIndex];
          },
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <ReactECharts option={option} style={{ height: "100%" }} />
    </div>
  );
};

export default PassPercentageChart;

