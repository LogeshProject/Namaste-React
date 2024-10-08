
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

import { Link } from "react-router-dom";

import '../styles/header.css'

const Heading = () => {
    const [btnName, setBtnName] = useState('Login');

    const toggleLogin = () => {
        setBtnName((prev) => (prev === 'Login' ? 'Logout' : 'Login'));
        console.log(btnName === 'Login' ? 'Logging in...' : 'Logging out...');
    };

    return (
        <>
            <header className='header'>
                <div className='logo-container'>
                    <img className='logo' src={LOGO_URL} alt='Website Logo' />
                </div>
                <nav className='nav-items'>
                    <ul className='nav-list'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/food">Food</Link></li>
                        <li><Link to="/offers">Offers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <button className="btn-login" onClick={toggleLogin}>
                        {btnName}
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Heading;