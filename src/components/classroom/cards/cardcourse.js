import React from 'react';

export default function CardCoursename() {
    return (

        <div className="row"> 
            <div className="cardnotes col-12 text-light p-1"> 
                <div className="card border border-white p-3">
            
                <div className="avatar d-flex mb-3">
                    <div className="teacher d-flex border-right align-items-center pr-2">
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/icon-avatar.png?v=1617649191" className="avatar-teacher-img d-block mx-auto"></img>
                        </div>
                                                                        <div className="teacher-data d-flex align-items-start flex-column">
                                                                            <span>Teacher</span>
                                                                            <span className="teachername">$TeacherName</span>
                                                                        </div>
                                                            </div>

                                                            <div className="pl-2 align-items-center">
                                                                    <h1>INTRO TO THE DOJO</h1>
                                                                    <h2>Welcome to thedojo.com</h2>
                                                            </div>

                                                            <div className="student ml-auto align-items-center d-flex">
                                                                        <div>
                                                                        <img src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/icon-student.png?v=1617649228" className="avatar-student-img d-block mx-auto"></img>
                                                                        </div>
                                                                        <div className="student-data">
 
                                                                            <span className="studentnumber">41 Students</span>
                                                                        </div>
                                                            </div>

                                                    </div>
                                
                                                    <div id="accordion">
                                                        <div class="card border-0">
                                                            <div class="card-header" id="headingOne">
                                                            <h5 class="mb-0">
                                                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                About 
                                                                </button>
                                                            </h5>
                                                            </div>

                                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                            <div class="card-body">
                                                                <small>
                                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                                </small>
                                                            </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                            </div>
                                    
                                </div>
                    </div>

    );
}