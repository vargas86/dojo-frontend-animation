import React, { useState, useEffect } from 'react';

import Navbar from '../navigation/navbar';
import DashboardSelector from '../dashboard/dashboard-elements/dashboardSelector';
import PersonalInfoData from '../dashboard/dashboard-options/personalInfoData';
import SchoolMap from '../dashboard/dashboard-options/schoolMap';

export default function Profile() {

    const [dashboard, setDashboard] = useState('ChannelProfile')



    useEffect(() => {
        console.log('dashboard:', dashboard);

    }, [dashboard])

    return (
        <div className='app-wrapper'>
            <div className='dashboard-wrapper'>
                <img className='background-logo' src='https://www.thedojo.com/images/logo_2.png' />
                <img className='background-img-profile' src='https://images.unsplash.com/photo-1550759774-a027cb60b309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80' />
                <Navbar />
                <div className='dashboard sticker'>
                    <div className='dashboard-top'>
                        <div className='dashboard-top__username'>
                            <h4>The Dojo</h4>
                        </div>
                        <PersonalInfoData />
                    </div>
                    <div className='dash-bottom'>

                        <div className='dashboard-dash'>

                            <div className='panel'>

                                <DashboardSelector
                                    dashboard={dashboard}
                                />
                                {/* <SchoolMap /> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

}

