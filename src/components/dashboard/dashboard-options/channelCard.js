import React from 'react';

export default function ChannelCard({channelImageUrl, channelTitle}) {
    return (
        <div style={ {backgroundImage:`url(${channelImageUrl})`} } className='channel'>
            <h2>{channelTitle}</h2>
        </div>
    );
}
