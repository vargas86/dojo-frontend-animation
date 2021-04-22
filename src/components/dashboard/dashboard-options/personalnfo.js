import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen,
    faPlus
} from '@fortawesome/free-solid-svg-icons';
import PersonalInfoData from './personalInfoData';
import UpdateInfo from './updateInfo';

export default function PersonalInfo({ panel }) {

    const [editMode, SetEditMode] = useState(false);

    return (
        
        <>
            <div className='dashboard-dashboard'>
                <h4>{panel}</h4>
                <div className='dashboard-dashboard__buttons'>
                    <div onClick={() => SetEditMode(!editMode)}>
                        <FontAwesomeIcon className='edit-pen' icon={faPen} />
                    </div>
                </div>
            </div>

            {
              editMode ? <UpdateInfo/> : <PersonalInfoData/>   
            }

        </>
    );
}
