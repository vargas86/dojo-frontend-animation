import React from 'react';
import CardChannels from '../cards/cardchannel'; 

export default function teachers() {
    return (
        <div className="row w-100 m-0">
            <h2 className="section-title pl-5 pr-5">Popular Channels</h2> 
            <div className="scrollwrapper card-index col-sm-12 d-flex d-lg-flex d-xl-flex pt-2 pb-5  pl-2 pr-5">

                <CardChannels />
                <CardChannels />
                <CardChannels />
                <CardChannels />
                <CardChannels />
                <CardChannels />
                <CardChannels />
                <CardChannels />
                <CardChannels />
                <CardChannels />

            </div>           
        </div>
    );
}
