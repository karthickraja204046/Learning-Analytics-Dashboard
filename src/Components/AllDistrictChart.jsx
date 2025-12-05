import React from 'react'
import ReactECharts from 'echarts-for-react';
import { useTheme } from './ThemeProvider';

const AllDistrictChart = () => {
    const { darkMode } = useTheme();
    
      const textColor = darkMode ? '#fff' : '#000';
      const bgColor = darkMode ? '#000' : '#fff'; 
    const option = {
         backgroundColor: bgColor,
        title: {
            text: "Average assessment score",
            left: "left",
            top: 10,
            textStyle: {
                color: textColor,
                fontSize: 14,
                fontWeight: "bold",
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}%",
        },
        series: [
            {
                name: 'Assessment',
                type: 'pie',
                radius: ["55%", "75%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },

             

                data: [
                    {
                        value: 68,
                        name: "Assessment completed",
                        itemStyle: { color: "#6ec1ff" },
                    },
                    {
                        value: 32,
                        name: "Assessment not completed",
                        itemStyle: { color: "#ffb677" },
                    },
                ],
            },
        ], 
        graphic: {
            type: "text",
            left: "center",
            top: "58%",
            style: {
                text: "All Districts",
                fill: "#fff",
                fontSize: 14,
                fontWeight: "500",
                textAlign: "center",
            },
        },
    }

    return (
        <div> <ReactECharts option={option} /> </div>
    )
}

export default AllDistrictChart

