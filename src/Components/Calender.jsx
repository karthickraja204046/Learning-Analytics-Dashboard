import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";

const Calender = () => {
    const [district, setDistrict] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const { darkMode } = useTheme();

    const inputStyle = {
        padding: "8px",
        borderRadius: "6px",
        border: `1px solid ${darkMode ? "#fff" : "#000"}`,
        outline: "none",
        cursor: "pointer",
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
    };

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px", padding: "20px", width: "400px", }}>
                <div style={inputStyle}> Monthly</div>
                <div style={inputStyle}>Quarterly</div>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} style={inputStyle} />
                <select value={district} onChange={(e) => setDistrict(e.target.value)} style={inputStyle}>
                    <option value="">Select District</option>
                    <option value="Ariyulur">Ariyulur</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Cuddolore">Cuddolore</option>
                    <option value="Dharmapuri">Dharmapuri</option>
                </select>
            </div>


            {selectedDate && (
                <p style={{ marginLeft: 20 }}>
                    Selected Date: <b>{selectedDate}</b>
                </p>
            )}
        </div>
    );
};

export default Calender;
