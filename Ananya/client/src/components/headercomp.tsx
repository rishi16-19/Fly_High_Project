import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header: React.FC = () => {
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
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
    };

    const signupButtonStyle: React.CSSProperties = {
        padding: '0.5rem 1rem',
        backgroundColor: '#28a745',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
    };

    return (
        <header style={headerStyle}>
            <div style={logoContainerStyle}>
                <img src="https://w7.pngwing.com/pngs/773/201/png-transparent-airplane-aircraft-flight-logo-airplane-blue-logo-flight-thumbnail.png" alt="Company Logo" style={logoStyle} />
            </div>
            <div style={companyNameStyle}>
                <Link to="/" style={{ textDecoration: 'none', color: '#000' }}> {/* Link to homepage */}
                    <b>Fly High</b>
                    <img src="https://cdn-icons-png.flaticon.com/128/1350/1350222.png" alt="Airplane Icon" style={iconStyle} />
                </Link>
            </div>
            <div style={loginContainerStyle}>
                <Link to="/login" style={{ textDecoration: 'none' }}> {/* Link to login page */}
                    <button style={loginButtonStyle}>Login</button>
                </Link>
                <Link to="/signup" style={{textDecoration: 'none'}}>
                     <button style={signupButtonStyle}>Sign Up</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;

