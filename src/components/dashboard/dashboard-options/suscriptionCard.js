import React from 'react';

export default function SuscriptionCard({channelImageUrl, channelTitle}) {
    return (
        <div style={ {backgroundImage:`url(${channelImageUrl})`} } className='suscription'>
            <h2>{channelTitle}</h2>
            
        </div>
    );
}
