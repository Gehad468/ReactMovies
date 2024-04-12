import React from 'react';
import { Link } from 'react-router-dom';
import logo from './png-logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(to right, #BED7DC, #aa398f)' }}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" style={{ width: '100px', height: 'auto' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" style={{ color: 'white' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" style={{ color: 'white' }}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register" style={{ color: 'white' }}>Register</Link>
                        </li>
                    
                   
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies" style={{ color: 'white' }}>Movies</Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
