import React from 'react';
import CardLessons from '../cards/cardcourse';

export default function Popular() {

    return (
        <div className="row w-100 m-0">
            <h2 className="section-title pl-5 pr-5 mt-5">Popular Courses</h2>
            <div className="scrollwrapper card-index col-sm-12 d-flex d-lg-flex d-xl-flex pt-2 pb-5  pl-2 pr-5">

                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />

            </div>
        </div>
    );
}

