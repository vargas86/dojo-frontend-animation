import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlusSquare,
    faBars,
    faColumns,
    faTv
} from '@fortawesome/free-solid-svg-icons';

export default function CardChannel() {
    return (

        

        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 d-block">
            <div className="card card-snippet bg-0">
                <img src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/img-teacher.jpg?v=1617129471" className="cover fadeIn" alt="Name Class " />
                <a href="#">
                    <h2 className="card-title text-light">
                        Jason Bukich
                    </h2>
                </a>
                <a href="#">
                    <div className="avatar d-flex">
                        <div className="icon-play w-25">
                            <img src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/play.png?v=1617064405" className="mx-auto" alt=""/>
                        </div>
                        <div className="suscribe-channel w-75">
                            <h3 className="text-light suscribe pl-2">
                                View channel
                            </h3>
                            <h4 className="text-light suscribe pl-2">
                                Suscribe 
                                <span className="text-light ml-2">
                                <FontAwesomeIcon icon={faPlusSquare} />
                                    
                                    </span>

                            </h4>
                        </div>
                    </div>
                </a>
            </div>                    
        </div>


    );
}
