import React, { useState } from 'react'
import { useTheme } from './ThemeProvider';

const Calender = () => {
    const [district, setDistrict] = useState("");
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: "10px", marginBottom: "15px" ,padding: "20px", width: "300px"}}>
                <div style={{ border: "1px solid black", borderRadius: 6, padding: "6px 12px", cursor: "pointer" }}>Monthly</div>
                <div style={{ border: "1px solid black", borderRadius: 6,  padding: "6px 12px", cursor: "pointer" }}>Quarterly</div>
                <div>
                    <select value={district} onChange={(e) => setDistrict(e.target.value)}
                        style={{  padding: "8px", borderRadius: "6px", border: "1px solid #000", outline: "none", cursor: "pointer" }}>
                        <option value="">Select District</option>
                        <option value="Ariyulur">Ariyulur</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Cuddolore">Cuddolore</option>
                        <option value="Dharmapuri">Dharmapuri</option>
                    </select>
                </div>
            </div>


        </div>
    )
}

export default Calender