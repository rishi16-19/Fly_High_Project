import React, { useState, useEffect, CSSProperties } from 'react';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import '../App.css'
const MiddlePage: React.FC = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          key: "selection",
        },
      ]);
    
      const [openDate, setOpenDate] = useState(false);
    const [flightType, setFlightType] = useState('One Way');
    const [fromLocation, setFromLocation] = useState('Delhi');
    const [toLocation, setToLocation] = useState('Mumbai');
    const [departureDate, setDepartureDate] = useState('');
    const handleSearch = () => {
        console.log('Searching flights...');
        axios.get(`http://localhost:8080/flight/${fromLocation}/${toLocation}/${departureDate}`)
            .then(response => {
                console.log('Flight search successful:', response.data);
            })
            .catch(error => {
                console.error('Error searching flights:', error);
            });
    };
    useEffect(() => {
        // Prevent scrolling when the component mounts
        document.body.style.overflow = 'hidden';
        // Re-enable scrolling when the component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount
    const containerStyle: CSSProperties = {
       
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
       
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6-ceROk5lHEz8CZEnb6WcXKkL4HtZXV52g&usqp=CAU)',
        backgroundSize: 'cover',
        overflow: 'hidden',
    };
    const contentContainerStyle: CSSProperties = {
        display: 'flex',
        
        alignItems: 'center',
        justifyContent: 'center',
        
        overflow: 'hidden',
       
    };
    const inputContainerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    };
    const inputStyle: CSSProperties = {
       
        padding: '30px', // Increase input box height
        width: '50%', // Adjust width to fit two inputs side by side
        borderRadius: '20px', // Add border radius
        border: '1px solid #ccc',
    };
    const buttonStyle: CSSProperties = {
        padding: '15px 30px', // Increase button padding
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '20px', // Add border radius
        color: '#fff',
        cursor: 'pointer',
    };
    return (
        <div style={containerStyle as React.CSSProperties}>
            <div style={contentContainerStyle as React.CSSProperties}>
                <div>
                    <label>
                        <input type="radio" value="One Way" checked={flightType === 'One Way'} onChange={() => setFlightType('One Way')} />
                        One Way
                    </label>
                    <label>
                        <input type="radio" value="Round Trip" checked={flightType === 'Round Trip'} onChange={() => setFlightType('Round Trip')} />
                        Round Trip
                    </label>
                    <label>
                        <input type="radio" value="Multi City" checked={flightType === 'Multi City'} onChange={() => setFlightType('Multi City')} />
                        Multi City
                    </label>
                </div>
                <div style={inputContainerStyle as React.CSSProperties}>
                    <input type="text" placeholder="From" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} style={inputStyle as React.CSSProperties} />
                    <input type="text" placeholder="To" value={toLocation} onChange={(e) => setToLocation(e.target.value)} style={inputStyle as React.CSSProperties} />
                </div>
                <div>
                <span
            onClick={() => (openDate ? setOpenDate(false) : setOpenDate(true))}
            className="headerSearchText"
          >{`${format(date[0].startDate, "dd/MM/yyyy")}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(items) => setDate([items.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            ></DateRange>
          )}</div>
                <div>
                    <button onClick={handleSearch} style={buttonStyle as React.CSSProperties}>Search</button>
                </div>
            </div>
        </div>
    );
};
export default MiddlePage;