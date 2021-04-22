import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DashNav(props) {
    // console.log('icon:', props.icon);
    return (
        <div className='dashnav-btn-wrapper'>
            <div className='dashnav__btn'>
                <FontAwesomeIcon icon={props.icon}/>
            </div>
        </div>
    );
}
