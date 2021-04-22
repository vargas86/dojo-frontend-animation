import React, { useState, useEffect } from 'react';
import Suscriptions from '../dashboard-options/suscriptions';
import Adress from '../dashboard-options/address';
import OwnChannel from '../dashboard-options/ownChannel';
import PersonalInfo from '../dashboard-options/personalnfo';
import UpdateInfo from '../dashboard-options/updateInfo';
import UploadCourse from '../dashboard-options/uploadCourse';
import ChannelProfile from '../dashboard-options/channelProfile';

export default function DashboardSelector({ dashboard }) {
    
    const selectedDashboard = () => {
        if (dashboard === 'Suscriptions') {
            return <Suscriptions panel={dashboard} />
        } else if (dashboard === 'Information') {
            return <PersonalInfo panel={dashboard} />
        } else if (dashboard === 'Adress') {
            return <Adress panel={dashboard} />
        } else if (dashboard === 'Channel') {
            return <OwnChannel panel={dashboard} />
        } else if (dashboard === 'UpdateInfo') {
            return <UpdateInfo panel={dashboard} />
        } else if (dashboard === 'Upload') {
            return <UploadCourse panel={dashboard} />
        }else if (dashboard === 'ChannelProfile') {
            return <ChannelProfile panel={dashboard} />
        } else {
            return <Suscriptions panel={dashboard} />
        }
    }

    return (
        <div className='dashboard-selected'>       
            {selectedDashboard()}
        </div>
    );
}
