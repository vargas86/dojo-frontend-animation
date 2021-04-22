import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckSquare,
    faShareAltSquare,
    faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons';

import ChannelCard from './channelCard';
import LessonCard from './lessonCard';

export default function ChannelProfile({ panel }) {
    return (
        <div className='channel-profile-wrapper'>
            <div className='dashboard-dashboard'>
                <h4>{panel}</h4>
                <div className='dashboard-dashboard__buttons'>
                    <div onClick={() => console.log('activate api call for CRUD action')}>
                        <FontAwesomeIcon className='edit-pen' icon={faCheckSquare} />
                    </div>
                    <div onClick={() => console.log('activate api call for CRUD action')}>
                        <FontAwesomeIcon className='edit-pen' icon={faShareAltSquare} />
                    </div>
                    <div onClick={() => console.log('activate api call for CRUD action')}>
                        <FontAwesomeIcon className='edit-pen' icon={faGlobeAmericas} />
                    </div>
                </div>
            </div>
            <div className='profile-channel-content'>
                <div className='channel-set'>
                    <ChannelCard
                        channelImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                        channelTitle={`First Jiu-Jitsu Class`}
                    />
                </div>
                <div className='lesson-set'>
                    <LessonCard
                        lessonImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                        lessonTitle={`First Jiu-Jitsu Class`}
                    />
                    <LessonCard
                        lessonImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                        lessonTitle={`First Jiu-Jitsu Class`}
                    />
                    <LessonCard
                        lessonImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                        lessonTitle={`First Jiu-Jitsu Class`}
                    />
                    <LessonCard
                        lessonImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                        lessonTitle={`First Jiu-Jitsu Class`}
                    />
                    <LessonCard
                        lessonImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                        lessonTitle={`First Jiu-Jitsu Class`}
                    />
                    <LessonCard
                        lessonImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                        lessonTitle={`First Jiu-Jitsu Class`}
                    />
                    <LessonCard
                        lessonImageUrl={`https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                        lessonTitle={`First Jiu-Jitsu Class`}
                    />
                </div>
            </div>

        </div>
    )
}
