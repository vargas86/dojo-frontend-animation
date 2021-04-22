import React from 'react';

export default function CardLesson() {
    return (
        <div className="cardlesson d-flex bg-light w-100 p-2 border-right-0 mt-2"> 
            <div className="col-2 align-self-center"> 
                <img src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/lessonnavbar.png?v=1617738212" className="navbar-lessons"></img>
            </div>
            
            <div className="col-7 offset-1 "> 
                
                    <div>
                        <ul>Unit 1
                            <li>Lesson 1</li>
                            <li>Lesson 2</li>
                            <li>Lesson 3</li>
                        </ul> 

                        <ul>Unit 2
                            <li>Lesson 1</li>
                            <li>Lesson 2</li>
                            <li>Lesson 3</li>
                            <li>Lesson 4</li>
                            <li>Lesson 5</li>
                        </ul> 

                        <ul>Unit 3
                            <li>Lesson 1</li>
                            <li>Lesson 2</li>
                            <li>Lesson 3</li>
                        </ul> 

                        <ul>Unit 4
                            <li>Lesson 1</li>
                            <li>Lesson 2</li>
                            <li>Lesson 3</li>
                            <li>Lesson 4</li>
                            <li>Lesson 5</li>
                        </ul> 
                      
                    </div> 
                  
            </div>
        </div>
       

    );
}

