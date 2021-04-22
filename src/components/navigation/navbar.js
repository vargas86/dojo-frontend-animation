import React from 'react';
import Header from '../header/header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome,
    faBars,
    faColumns,
    faTv,
    faUsers,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='fixed-navigation fixer d-sm-none d-md-none d-lg-block d-xl-block'>
            <Header />
            <div className="navbar-wrapper">
                <div className="navbar-left">

                    <div className="main-menu">
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                    <NavLink className="navbar-left__element" to="/home">
                        <FontAwesomeIcon icon={faHome} />
                        <h5>Home</h5>
                    </NavLink>

                    <NavLink className="navbar-left__element" to="/dashboard">
                    <FontAwesomeIcon icon={faColumns} />
                        <h5>Dashboard</h5>
                    </NavLink>

                    <NavLink className="navbar-left__element" to="/channels">
                    <FontAwesomeIcon icon={faTv} />
                        <h5>Channels</h5>
                    </NavLink>

                    <NavLink className="navbar-left__element" to="/forum">
                    <FontAwesomeIcon icon={faUsers} />
                        <h5>Forum</h5>
                    </NavLink>

                    <NavLink className="navbar-left__element" to="/profile">
                    <FontAwesomeIcon icon={faUser} />
                        <h5>Profile</h5>
                    </NavLink>

                </div>
            </div>

        </div>
    );
}
