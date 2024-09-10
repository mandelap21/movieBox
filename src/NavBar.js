import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can style your navbar here

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">MovieApp</Link>
            </div>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/reviews">Reviews</Link>
            </div>

            <div className="navbar-search">
                <input type="text" placeholder="What do you want to watch?" />
                <button>Search</button>
            </div>

            <div className="navbar-auth">
                <Link to="/signup">Sign In</Link>
            </div>
        </nav>
    );
};

export default Navbar;