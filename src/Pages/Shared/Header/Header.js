import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
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
                    { 
                        user ?
                        <button className='signout-btn' onClick={handleSignOut}>SIGN OUT</button>
                        :
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/login'>LOGIN</NavLink>}
                </div>
            </nav>
        </header>
    );
};

export default Header;