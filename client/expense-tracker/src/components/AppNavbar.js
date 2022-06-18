import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './AppNavbar.css';

function AppNavbar() {
    const [click] = useState(false);
 
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        ExpenseTracker
                    </Link>
                    <div className='menu-icon'>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/About' className='nav-links'>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Calculator' className='nav-links'>
                                Calculator
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default AppNavbar