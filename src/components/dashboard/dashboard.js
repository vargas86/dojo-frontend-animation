import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEdit,
    faIdCard,
    faWallet,
    faMapMarkedAlt,
    faGripHorizontal,
    faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navigation/navbar';
import NavbarMobile from '../navigation/navbarMobile';
import HeaderMobile from '../header/headerMobile';
import DashNav from '../navigation/dashNav';
import DashboardSelector from './dashboard-elements/dashboardSelector';

export default function Dashboard() {

    const [dashboard, setDashboard] = useState('Suscriptions')


    useEffect(() => {
        console.log('dashboard:', dashboard);

    }, [dashboard])

    return (
        <div className='app-wrapper'>
            <HeaderMobile />
            <div className='dashboard-wrapper'>
                <img className='background-logo' src='https://www.thedojo.com/images/logo_2.png'/>
                <Navbar />
                <div className='dashboard sticker'>
                    <div className='dashboard-top'>
                        <div className='dashboard-top__username'>
                            <h4>Helio Gracie</h4>
                        </div>
                        <div className='dashboard-top__menu'>
                            <div className='dashboard-top__menu-title'>
                                <h4>Personal Menu</h4>
                                {/* <FontAwesomeIcon icon={faEdit} /> */}
                            </div>
                            <div className='dashnav'>
                                <button onClick={() => setDashboard('Suscriptions')}>
                                    <DashNav
                                        icon={faChalkboardTeacher}
                                    />
                                </button>

                                <button onClick={() => { setDashboard('Channel') }}>
                                    <DashNav
                                        icon={faGripHorizontal}
                                    />
                                </button>

                                <button onClick={() => { setDashboard('Information') }}>
                                    <DashNav
                                        icon={faIdCard}
                                    />
                                </button>

                                <button onClick={() => { setDashboard('Adress') }}>
                                    <DashNav
                                        icon={faMapMarkedAlt}
                                    />
                                </button>

                                <button onClick={() => { setDashboard('Payment') }}>
                                    <DashNav
                                        icon={faWallet}
                                    />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className='dash-bottom'>

                        <div className='dashboard-dash'>

                            <div className='panel'>
                                <DashboardSelector 
                                dashboard={dashboard}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <NavbarMobile />
        </div>
    );

}

