import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen,
    faPlus
} from '@fortawesome/free-solid-svg-icons';

import OwnLessons from './ownLessons';
import UploadCourse from './uploadCourse';

export default function OwnChannel({ panel }) {

    const [editMode, SetEditMode] = useState(false);

    return (
        <div className='channel-wrapper'>
            <div className='dashboard-dashboard'>
                <h4>{panel}</h4>
                <div className='dashboard-dashboard__buttons'>
                    <div onClick={() => console.log('activate api call for CRUD action')}>
                        <FontAwesomeIcon className='edit-pen' icon={faPen} />
                    </div>
                    <div onClick={() => SetEditMode(!editMode)}>
                        <FontAwesomeIcon className='edit-pen' icon={faPlus} />
                    </div>
                </div>
            </div>

            { editMode ? <UploadCourse /> :  <OwnLessons />}

        </div>
    );
}
