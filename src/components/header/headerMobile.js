import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeaderMobile() {
    return (
        <div className='mobile-header-wrapper'>
            <div className='mobile-header'>

                <div className="mobile-header">
                    <div className="mobile-header__logo">
                        <NavLink to={'/home'} >
                        <img src="https://www.thedojo.com/images/logo_2.png" />
                        </NavLink>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}
