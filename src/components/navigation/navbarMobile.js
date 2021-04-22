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

export default function NavbarMobile() {
    return (
        <div className='mobile-fixed-navigation d-sm-block d-md-block d-lg-none d-xl-none'>

            <div className="mobile-navbar-wrapper">

                <div className="mobile-main-menu">
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <NavLink className="mobile-navbar__element" to="/home">
                    <FontAwesomeIcon icon={faHome} />
                    <h5>Home</h5>
                </NavLink>

                <NavLink className="mobile-navbar__element" to="/dashboard">
                    <FontAwesomeIcon icon={faColumns} />
                    <h5>Dashboard</h5>
                </NavLink>

                <NavLink className="mobile-navbar__element" to="/channels">
                    <FontAwesomeIcon icon={faTv} />
                    <h5>Channels</h5>
                </NavLink>

                <NavLink className="mobile-navbar__element" to="/Forum">
                    <FontAwesomeIcon icon={faUsers} />
                    <h5>Forum</h5>
                </NavLink>

            </div>

        </div>
    );
}
