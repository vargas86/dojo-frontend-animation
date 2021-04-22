import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen,
    faPlus
} from '@fortawesome/free-solid-svg-icons';

import SuscriptionCard from './suscriptionCard';

export default function Suscriptions({panel}) {

    return (
        <>
            <div className='dashboard-dashboard'>
                <h4>{panel}</h4>
                <div className='dashboard-dashboard__buttons'>
                    <div onClick={() => console.log('activate api call for CRUD action')}>
                        <FontAwesomeIcon className='edit-pen' icon={faPen} />
                    </div>
                    <div onClick={() => console.log('activate api call for CRUD action')}>
                        <FontAwesomeIcon className='edit-pen' icon={faPlus} />
                    </div>

                </div>
            </div>
            <div className='suscriptions-wrapper'>
                <SuscriptionCard
                    channelImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                    channelTitle={`First Jiu-Jitsu Class`}
                />
                <SuscriptionCard
                    channelImageUrl={`https://images.unsplash.com/photo-1599677099972-a36c34a72343?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                    channelTitle={`First Jiu-Jitsu Class`}
                />
                <SuscriptionCard
                    channelImageUrl={`https://images.unsplash.com/photo-1602827115160-a9e732f05533?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                    channelTitle={`First Jiu-Jitsu Class`}
                />
                <SuscriptionCard
                    channelImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                    channelTitle={`First Jiu-Jitsu Class`}
                />
                <SuscriptionCard
                    channelImageUrl={`https://images.unsplash.com/photo-1599677099972-a36c34a72343?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                    channelTitle={`First Jiu-Jitsu Class`}
                />
                <SuscriptionCard
                    channelImageUrl={`https://images.unsplash.com/photo-1602827115160-a9e732f05533?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                    channelTitle={`First Jiu-Jitsu Class`}
                />

            </div>
        </>

    );
}
