import React from 'react';
import ReactECharts from 'echarts-for-react';

const DistrictRankingChart = () => {
  const option = {
    title: {
      text: 'District Ranking',
      left: 10
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },

    legend: {
      top: 30,
      right: 10,
      data: ['Male', 'Female', 'Others', 'Passed', 'Assessment completed']
    },

    grid: {
      left: '5%',
      right: '6%',
      bottom: '10%',
      containLabel: true
    },

    xAxis: {
      type: 'category',
      data: [
        'Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri',
        'Dindigul', 'Erode', 'Kallakurichi', 'Karur', 'Madurai'
      ],
      axisLabel: { rotate: 30 }
    },

    yAxis: [
      {
        type: 'value',
        name: 'Number of users'
      },
      {
        type: 'value',
        name: 'Percentage',
        max: 100
      }
    ],

    series: [
      {
        name: 'Male',
        type: 'bar',
        data: [12000, 15000, 18000, 17000, 16000, 14000, 12000, 10000, 9000, 8000]
      },
      {
        name: 'Female',
        type: 'bar',
        data: [10000, 12000, 15000, 14000, 13000, 12000, 14000, 11000, 13000, 7000]
      },
      {
        name: 'Others',
        type: 'bar',
        data: [500, 600, 550, 580, 520, 510, 530, 490, 500, 480]
      },
      {
        name: 'Passed',
        type: 'bar',
        yAxisIndex: 1,
        data: [35, 40, 45, 38, 42, 36, 30, 32, 28, 25]
      },
      {
        name: 'Assessment completed',
        type: 'bar',
        yAxisIndex: 1,
        data: [28, 34, 38, 31, 36, 29, 24, 26, 22, 20]
      }
    ],

    backgroundColor: 'transparent'
  };

  return (
    <div style={{ width: '100%', height: '420px' }}>
      <ReactECharts option={option} style={{ height: '100%' }} />
    </div>
  );
};

export default DistrictRankingChart;
