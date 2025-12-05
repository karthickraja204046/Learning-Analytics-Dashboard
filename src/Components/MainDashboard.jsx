

import React from 'react'
import Calender from './Calender';
import { FaUser, FaMale, FaFemale } from "react-icons/fa";
import { useTheme } from './ThemeProvider';  

const StartItems = (icon, title, value, color, textColor) => (
  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
    <div style={{ fontSize: "30px", color }}>{icon}</div>
    <div>
      <div style={{ fontSize: "10px", fontWeight: "bold", color: textColor }}>
        {title}
      </div>
      <div style={{ fontSize: "30px", fontWeight: "bold", color: textColor }}>
        {value}
      </div>
    </div>
  </div>
)

const divider = (color) => (
  <div
    style={{
      width: "2px",
      height: "45px",
      backgroundColor: color,
      margin: "0 25px",
    }}
  />
);

const MainDashboard = () => {
  const { darkMode } = useTheme(); 

  const textColor = darkMode ? '#fff' : '#000';
  const bgColor = darkMode ? '#000' : '#ffffff';

  return (
    <div style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
      <Calender />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: "wrap",
          padding: "20px 30px",
          gap: "20px",
          backgroundColor: bgColor,
          borderRadius: "12px",
          transition: "0.3s"
        }}
      >
        {StartItems(null, "Total Learner enrolled", "23,100", "#ffffff", textColor)}
        {divider("#00c8ff")}

        {StartItems(<FaMale />, "Male", "23,100", "#00c8ff", textColor)}
        {divider("#ff2fa1")}

        {StartItems(<FaFemale />, "Female", "23,100", "#ff2fa1", textColor)}
        {divider("#d57bff")}

        {StartItems(<FaUser />, "Others", "23,100", "#d57bff", textColor)}
        {divider("#00ff9d")}

        {StartItems(null, "Active learners", "23,100", "#ff9f1c", textColor)}
        {divider("#ff9f1c")}

        {StartItems(null, "Engaged Learners", "23,100", "#ff9f1c", textColor)}
      </div>
    </div>
  )
}

export default MainDashboard
