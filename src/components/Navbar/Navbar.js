import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar__container'>
            <div className="container">
                <nav className="nav__menu">
                    <Link className='logo' to="/">Resla Motors</Link>
                    <ul className="nav__items">
                        <li className="nav__item"><Link className='nav__link active' to="/home">Home</Link></li>
                        <li className="nav__item"><Link className='nav__link' to="/reviews">Reviews</Link></li>
                        <li className="nav__item"><Link className='nav__link' to="/dashboard">Dashboard</Link></li>
                        <li className="nav__item"><Link className='nav__link' to="/blogs">Blogs</Link></li>
                        <li className="nav__item"><Link className='nav__link' to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;