

import React from 'react'
import ReactECharts from 'echarts-for-react'
import { useTheme } from './ThemeProvider';

const LearnersChart = () => {
  const { darkMode } = useTheme();

  const textColor = darkMode ? '#fff' : '#000';
  const bgColor = darkMode ? '#000' : '#fff';
  const option = {
    backgroundColor: bgColor,

    title: {
      text: "Learners Details Breakdown",
      left: "left",
      top: 10,
      textStyle: {
        color: textColor,
        fontSize: 14,
        fontWeight: "bold",
      },
    },

    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}%",
    },

    legend: {
      orient: "vertical",
      right: 10,
      top: "center",
      textStyle: {
        color: textColor,
        fontSize: 12,
      },
      itemWidth: 12,
      itemHeight: 12,
      data: [
        "A - Grade (>80)",
        "B - Grade (>60)",
        "C - Grade (>50)",
        "D - Grade (>30)",
        "E - Grade (0)",
      ],
    },

    series: [
      {
        name: "Grades",
        type: "pie",
        radius: ["0%", "65%"],
        center: ["40%", "55%"],
        label: {
          show: true,
          formatter: "{c}%",
          color: textColor,
          fontSize: 12,
        },
        labelLine: {
          show: true,
          length: 10,
          length2: 10,
        },

        data: [
          { value: 48, name: "A - Grade (>80)", itemStyle: { color: "#7cc0ff" } },
          { value: 32, name: "B - Grade (>60)", itemStyle: { color: "#00d1a0" } },
          { value: 35, name: "C - Grade (>50)", itemStyle: { color: "#ffb677" } },
          { value: 13, name: "D - Grade (>30)", itemStyle: { color: "#ff7b7b" } },
          { value: 12, name: "E - Grade (0)", itemStyle: { color: "#e6eef7" } },
        ],
      },
    ],
  }

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <ReactECharts option={option} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}

export default LearnersChart
