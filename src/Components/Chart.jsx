// import React from 'react'
// import ReactECharts from 'echarts-for-react';
// import Ranking from './Ranking'
// import MainDashboard from './MainDashboard';
// import AllDistrictChart from './AllDistrictChart';
// import LearnersChart from './LearnersChart';
// import PassPercentageChart from './PassPercentageChart';
// import DistrictRankingChart from './DistrictRankingChart';

// const Chart = () => {
//     const option = {
//         title: {
//             text: 'Course progress rate',
//             left: 'left',
//             textStyle: {
//                 color: '#000'
//             }
//         },

//         legend: {
//             top: 10,
//             right: 10,
//             textStyle: {
//                 color: '#000'
//             },
//             data: ['Below', 'Average', 'Good']
//         },

//         tooltip: {
//             trigger: 'axis'
//         },

//         grid: {
//             left: '5%',
//             right: '5%',
//             bottom: '10%',
//             containLabel: true
//         },

//         xAxis: {
//             type: 'category',
//             data: [
//                 'Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore',
//                 'Dharmapuri', 'Dindigul', 'Erode',
//                 'Kallakurichi', 'Karur', 'Madurai'
//             ],
//             axisLabel: {
//                 color: '#000',
//                 rotate: 30
//             }
//         },

//         yAxis: {
//             type: 'value',
//             max: 100,
//             axisLabel: {
//                 color: '#000'
//             }
//         },

//         series: [
//             {
//                 name: 'Below',
//                 type: 'bar',
//                 barWidth: 18,
//                 data: [30, 40, 0, 30, 0, 40, 0, 10, 0, 20]
//             },
//             {
//                 name: 'Average',
//                 type: 'bar',
//                 barWidth: 18,
//                 data: [55, 0, 70, 0, 0, 0, 0, 0, 68, 0]
//             },
//             {
//                 name: 'Good',
//                 type: 'bar',
//                 barWidth: 18,
//                 data: [0, 0, 0, 0, 90, 0, 78, 0, 0, 0]
//             }
//         ],

//         backgroundColor: 'transparent'
//     };


//     const chartStyle = { width: '100%', height: '280px' }
//     return (
//         <div style={{ width: '100%', minHeight: '100vh', display: "flex", flexDirection: "column", gap: "20px", backgroundColor: "#f5f5f5", padding: "20px", }}>

//             <MainDashboard />

//             <div style={{ display: 'flex', flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
//                 <div style={{ flex: 1, minWidth: "320px" }}>
//                     <ReactECharts option={option} style={chartStyle} />
//                 </div>
//                 <div style={{ flex: 1, minWidth: "320px" }}>
//                     <PassPercentageChart option={option} style={chartStyle} />
//                 </div>
//             </div>

//             <div style={{ display: 'flex', gap: "20px", flexWrap: "wrap", justifyContent: "space-between" }}>
//                 <div style={{ flex: 1, minWidth: "320px" }} >
//                     <AllDistrictChart option={option} style={chartStyle} />
//                 </div>
//                 <div style={{ flex: 1, minWidth: "320px" }}>
//                     <LearnersChart option={option} style={chartStyle} />
//                 </div>
//             </div>

//             <Ranking />
        
//         </div>
//     )
// }

// export default Chart

import React from 'react'
import ReactECharts from 'echarts-for-react';
import Ranking from './Ranking'
import MainDashboard from './MainDashboard';
import AllDistrictChart from './AllDistrictChart';
import LearnersChart from './LearnersChart';
import PassPercentageChart from './PassPercentageChart';
import DistrictRankingChart from './DistrictRankingChart';
import { useTheme } from './ThemeProvider';  

const Chart = () => {
  const { darkMode } = useTheme(); 

  const textColor = darkMode ? '#fff' : '#000';
  const bgColor = darkMode ? '#000' : '#ffffff';  

  const option = {
    title: {
      text: 'Course progress rate',
      left: 'left',
      textStyle: {
        color: textColor
      }
    },

    legend: {
      top: 10,
      right: 10,
      textStyle: {
        color: textColor
      },
      data: ['Below', 'Average', 'Good']
    },

    tooltip: {
      trigger: 'axis'
    },

    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
      containLabel: true
    },

    xAxis: {
      type: 'category',
      data: [
        'Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore',
        'Dharmapuri', 'Dindigul', 'Erode',
        'Kallakurichi', 'Karur', 'Madurai'
      ],
      axisLabel: {
        color: textColor,
        rotate: 30
      }
    },

    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        color: textColor
      }
    },

    series: [
      {
        name: 'Below',
        type: 'bar',
        barWidth: 18,
        data: [30, 40, 0, 30, 0, 40, 0, 10, 0, 20]
      },
      {
        name: 'Average',
        type: 'bar',
        barWidth: 18,
        data: [55, 0, 70, 0, 0, 0, 0, 0, 68, 0]
      },
      {
        name: 'Good',
        type: 'bar',
        barWidth: 18,
        data: [0, 0, 0, 0, 90, 0, 78, 0, 0, 0]
      }
    ],

    backgroundColor: 'transparent'
  };

  const chartStyle = { width: '100%', height: '280px' };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: bgColor,   // ✅ AUTO SWITCH
        padding: "20px",
        transition: "0.3s"
      }}
    >

      <MainDashboard />

      <div style={{ display: 'flex', flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
        <div style={{ flex: 1, minWidth: "320px" }}>
          <ReactECharts option={option} style={chartStyle} />
        </div>
        <div style={{ flex: 1, minWidth: "320px" }}>
          <PassPercentageChart option={option} style={chartStyle} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: "20px", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div style={{ flex: 1, minWidth: "320px" }}>
          <AllDistrictChart option={option} style={chartStyle} />
        </div>
        <div style={{ flex: 1, minWidth: "320px" }}>
          <LearnersChart option={option} style={chartStyle} />
        </div>
      </div>

      <Ranking />
    </div>
  );
};

export default Chart;

