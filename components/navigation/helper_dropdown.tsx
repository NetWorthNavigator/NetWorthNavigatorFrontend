'use client'
import React, { useState } from 'react';

const Dropdown_helper = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <div 
            className="dropdown" 
            style={dropdownStyles}
            onMouseEnter={() => setMenuVisible(true)}
            onMouseLeave={() => setMenuVisible(false)}
        >
            <button className="dropdown-toggle" style={dropdownToggleStyles}>
                Account
            </button>
            <ul 
                className="dropdown-menu" 
                style={{ ...dropdownMenuStyles, display: menuVisible ? 'block' : 'none' }}
            >
                <li>
                    <a 
                        href="/authenticator" 
                        style={hoveredLink === 0 ? {...dropdownLinkStyles, ...dropdownLinkHoverStyles} : dropdownLinkStyles}
                        onMouseEnter={() => setHoveredLink(0)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Sign up / Login
                    </a>
                </li>
                <li>
                    <a 
                        href="/authenticator" 
                        style={hoveredLink === 1 ? {...dropdownLinkStyles, ...dropdownLinkHoverStyles} : dropdownLinkStyles}
                        onMouseEnter={() => setHoveredLink(1)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Profile
                    </a>
                </li>
                <li>
                    <a 
                        href="/authenticator" 
                        style={hoveredLink === 2 ? {...dropdownLinkStyles, ...dropdownLinkHoverStyles} : dropdownLinkStyles}
                        onMouseEnter={() => setHoveredLink(2)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    );
}

const dropdownStyles = {
    position: 'relative',
    display: 'inline-block', /* Align with other navbar items */
};

const dropdownToggleStyles = {
    backgroundColor: ' bg-emerald-800', /* Example button color */
    color: 'white',
    padding: '16px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
};

const dropdownMenuStyles = {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
};

const dropdownLinkStyles = {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
};

const dropdownLinkHoverStyles = {
    backgroundColor: '#ddd',
};

export default Dropdown_helper;
