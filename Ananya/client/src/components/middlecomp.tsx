import React, { useState, useEffect, CSSProperties } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MiddlePage: React.FC = () => {
    const [flightType, setFlightType] = useState('One Way');
    const [fromLocation, setFromLocation] = useState('Delhi');
    const [toLocation, setToLocation] = useState('Mumbai');
    const [departureDate, setDepartureDate] = useState('');

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching flights...');
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
        marginTop: '5rem',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '100px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        marginLeft: '-10px', // Adjust according to your design
        marginRight: '1px', // Adjust according to your design
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6-ceROk5lHEz8CZEnb6WcXKkL4HtZXV52g&usqp=CAU)',
        backgroundSize: 'cover',
        overflow: 'hidden',
    };

    const contentContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '350px',
        marginRight: '350px',
        marginBottom: '160px',
        overflow: 'hidden',
        padding:'100px'
    };

    const inputContainerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    };

    const inputStyle: CSSProperties = {
        margin: '20px',
        padding: '30px', // Increase input box height
        width: '50%', // Adjust width to fit two inputs side by side
        borderRadius: '20px', // Add border radius
        border: '1px solid #ccc',
    };

    const buttonStyle: CSSProperties = {
        padding: '15px 30px', // Increase button padding
        backgroundColor: '#007bff',
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
                    <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} style={inputStyle as React.CSSProperties} />
                </div>
                <div>
                    <button onClick={handleSearch} style={buttonStyle as React.CSSProperties}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default MiddlePage;
