

import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';



const districtData = [
  { name: "Ariyalur", rank: "1st" },
  { name: "Coimbatore", rank: "2nd" },
  { name: "Erode", rank: "3rd" },
  { name: "Kallakurichi", rank: "4th" },
  { name: "Madurai", rank: "5th" },
  { name: "Dharmapuri", rank: "6th" },
  { name: "Dindigul", rank: "7th" },
  { name: "Chennai", rank: "8th" },
];

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

const Ranking = () => {

  const [chart, setChart] = useState('')
  const handleChange = () => {
    setChart(!chart)
  }
  return (


    <div style={{ backgroundColor: "#1a1a1a", padding: "20px", borderRadius: "10px" }}>
      <button onClick={handleChange}>Switch</button>
      {!chart ? (
        <>
          <div style={{ backgroundColor: "#1a1a1a", color: "#fff", fontWeight: "bold", marginBottom: "12px" }}>
            District Ranking
          </div>

          <div style={{  backgroundColor: "#1a1a1a",display: "flex", gap: "14px", overflowX: "auto", paddingBottom: "10px" }}>
            {districtData.map((item, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#1a1a1a",
                  minWidth: "140px",
                  background: "linear-gradient(180deg, #3e4a5e, #0b0f14)",
                  borderRadius: "10px",
                  padding: "14px",
                  color: "#fff",
                  textAlign: "left",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                }}
              >
                <div style={{ backgroundColor: "#1a1a1a", fontSize: "12px", opacity: 0.9 }}>{item.name}</div>
                <div style={{ backgroundColor: "#1a1a1a", marginTop: "14px" }}>
                  <div style={{ backgroundColor: "#1a1a1a", fontSize: "26px", fontWeight: "bold" }}>{item.rank}</div>
                  <div style={{ backgroundColor: "#1a1a1a", fontSize: "11px", opacity: 0.8 }}>Rank</div>
                </div>
              </div>
            ))}
          </div>

        </>
      ) : (
        <div style={{ height: "400px" , backgroundColor: "#ffffff"}}>
          <ReactECharts option={option} style={{ height: '100%' }} />
        </div>
      )
      }
    </div>
  );
};

export default Ranking;
