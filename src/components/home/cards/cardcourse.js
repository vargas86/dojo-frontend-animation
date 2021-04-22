import React from 'react';

export default function CardCourse() {
    return (

        <div className="scrollchildren col-sm-12 col-md-6 col-lg-3 col-xl-3 d-block">
                    <div className="card bg-0 border-0">
                        <img src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/img-card.jpg?v=1617127583" className="cover fadeIn" alt="" />
                        {/* {this.props.classroom_img} */}
                        <a href="#">
                            <h2 className="card-title text-light">
                                $CourseName 
                                {/* {this.props.classroom_name} */}
                            </h2>
                        </a>
                        <div className="avatar d-flex">
                            <div className="icon-play">
                                <img src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/avatar.jpg?v=1619046037" className="mx-auto avatarrounded" alt="" />
                                {/* {this.props.classroom_icon} */}
                            </div>
                            <div className="suscribe-channel w-75">
                                <h4 className="text-light suscribe pl-2">
                                    $Teacher
                                    {/* {this.props.teacher} */}
                                </h4>
                                <h3 className="cat-subtitle pl-2">
                                    $Category
                                    {/* {this.props.category} */}
                                </h3>
                            </div>
                        </div>
                    </div>                    
                </div>

    );
}
