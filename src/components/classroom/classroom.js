import React from 'react';
import CardVideo from './cards/cardvideo';
import CardCoursename from './cards/cardcourse';
import CardComments from './cards/cardcomment';
import CardLessons from './cards/cardlesson';

export  default function Classroom() {
    return (
        <div className="container-fluid bg-darker d-flex">
            <div className="col-9"> 
            
                <CardVideo /> 
                <CardCoursename />  
                <CardComments />   

            </div>
            <div className="col-3">
                <CardLessons />
            </div>



        </div>
    );
}
