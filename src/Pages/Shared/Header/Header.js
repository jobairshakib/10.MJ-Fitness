import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='website-title'>
                    <h3>MJ Fitness.</h3>
                </div>
                <div className='link-container'>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>HOME</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>BLOGS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/about'>ABOUT</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/login'>LOGIN</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;