import React from 'react';

export default function LessonCard({lessonImageUrl, lessonTitle}) {
    return (
        <div style={ {backgroundImage:`url(${lessonImageUrl})`} } className='lesson'>
            <h2>{lessonTitle}</h2>
        </div>
    );
}
