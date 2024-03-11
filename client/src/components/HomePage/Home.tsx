import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cityData } from '../../appconstants';
const Home: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [destinationDate, setDestinationDate] = useState(0);
    const navigate = useNavigate();
    const [date , setDate] = useState('')
    
    const handleSearch = () => {
        navigate("./list/"+cityData.flights[fromLocation.toLowerCase()]+"/"+cityData.flights[toLocation.toLowerCase()]+"/"+destinationDate)
    };
    // Styles
    const headerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        color: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        backgroundImage: 'url(https://i.gifer.com/GIWH.gif)', // Background image link
        backgroundSize: 'cover',
    };
    const logoContainerStyle: React.CSSProperties = {
        width: '50px',
        height: '50px',
    };
    const logoStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };
    const companyNameStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontFamily: 'cursive',
        cursor: 'pointer',
        transition: 'color 0.3s',
        color: '#000', // Text color changed to black
        display: 'flex', // Display as flex to align the emoji and text
        alignItems: 'center', // Align items to center vertically
    };
    const iconStyle: React.CSSProperties = {
        width: '25px',
        height: '25px',
        marginLeft: '0.5rem', // Add space between the text and the icon
    };
    const loginContainerStyle: React.CSSProperties = {
        display: 'flex',
    };
    const loginButtonStyle: React.CSSProperties = {
        marginRight: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#0000FF', // Dark blue background color
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
    };
    const signupButtonStyle: React.CSSProperties = {
        padding: '0.5rem 1rem',
        backgroundColor: '#0000FF', // Dark blue background color
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
    };
    const centerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Set height to 100% of viewport height
        padding: '20px',
        backgroundImage: 'url(https://th.bing.com/th/id/R.0b43a57a751b3d9d585a922f913930d0?rik=l1ZjmHLkSxtj%2fQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fiv5DLYI.jpg&ehk=HL7UQ2o8a8eAd%2byxTOEBoNFU8RymESHN7qEVv331TGY%3d&risl=&pid=ImgRaw&r=0)',
        backgroundSize: 'cover',
    };
    const sectionStyle: React.CSSProperties = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Box shadow
    };


    function setDatee(value: string): void {
        setDate(value)
        const dt = new Date(value);
          let year = dt.getFullYear();
          let month = dt.getMonth()+1;
          let day = dt.getDate();
          setDestinationDate(day)
        
    }

    return (
        <div>
            <div style={centerStyle}>
                <div style={sectionStyle}>
                    <h1 style={{ margin: '0', fontFamily: 'cursive', fontSize: '2rem' }}>Welcome to Fly High! Where dreams become destinations</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <input type="text" placeholder="Onboarding" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} style={{ marginRight: '10px', padding: '5px' }} />
                        <input type="text" placeholder="Destination" value={toLocation} onChange={(e) => setToLocation(e.target.value)} style={{ marginRight: '10px', padding: '5px' }} />
                        <input type="date" placeholder="Date of travel" value={date} min={new Date().toISOString().split('T')[0]} onChange={(e) => setDatee(e.target.value)} style={{ marginRight: '10px', padding: '5px' }} />
                        <button onClick={handleSearch} style={{ padding: '0px', backgroundColor: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer' }}>
                            <img src="https://cdn-icons-png.flaticon.com/128/10947/10947920.png" alt="Search Icon" style={{ width: '30px', height: '32px' }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;