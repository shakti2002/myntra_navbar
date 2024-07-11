


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        // setDropdownOpen(!dropdownOpen); 
        
    };

    const sections = ['Sarees', 'Beauty', 'Dresses', 'Mens Wear', 'Jeans Pants'];

    return (
        <nav className="navbar">
            <div className="navbar-logo">Myntra</div>
            <div className="navbar-item" onClick={toggleDropdown}>
                <Link to='/'>Forum</Link>
                {/* {dropdownOpen && (
                    <div className="dropdown-menu">
                        {sections.map((section) => (
                            <div key={section} className="dropdown-item">
                                <a
                                    href={`/join/${section.toLowerCase().replace(/\s+/g, '-')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="join-link"
                                >
                                    Join Now - {section}
                                </a>
                            </div>
                        ))}
                    </div>
                )} */}
            </div>
            <div className="navbar-menu">
                <Link to="/login" className="login-link">Login/Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
