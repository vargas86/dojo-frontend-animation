import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileHomeHeader() {
    return (
        <div className='home-header-wrapper'>
            <div className='home-header'>

                <div className="home-header">
                    <div className="home-header__logo">
                        <NavLink to={'/home'}>
                            <img src="https://www.thedojo.com/images/logo_2.png" />
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}
