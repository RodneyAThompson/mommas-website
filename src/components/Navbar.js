import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Nav(props) {
    return(
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='navbar-selection-container'>
                    <ul className='navbar-selection'>
                        <li className='nav-item'>Home</li>
                        <li className='nav-item'>About</li>
                        <li className='nav-item'>Services</li>
                        <li className='nav-item'>Booking</li>
                        <li className='nav-item'>Sign in</li>
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default Nav;