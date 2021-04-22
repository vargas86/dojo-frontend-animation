import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

import Login from './elements/login';
import Signup from './elements/signup';
import Footer from '../footer/footer'; 

export default function Auth() {

    const [auth, setAuth] = useState('loggin')

    const handleSwitch = () => {
       return auth === 'loggin' ? setAuth('signup') : setAuth('loggin');    
    }

    const showForm = () => {
        return auth === 'loggin' ? <Login /> : <Signup /> ;        
    }

    useEffect(() => {
        console.log('render');
    }, [])


    return (
    
            <div className="bg-darker">
                <div className="container-fluid m-0 p-0">


                        <div className="paralaxauth col-12 switch-light-dark p-0 p-lg-5">

                        <div className="container-fluid col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                            
                        <img src="https://cdn.shopify.com/s/files/1/0461/4861/6346/files/doio-shadow.png?v=1618883587" className="logo mx-auto d-block" />

                            
                        </div>    
                            
                        <div className="d-flex justify-content-center">
                            <div className="d-flex mostrounded px-4">
                                <div className="d-block gx-5 ">
                                    
                                    LOGIN
                                
                                </div>   
                                
                                <div className="d-block gx-5 px-4">
                                    
                                    <Form.Group controlId="formBasicEmail"> 
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                onClick={() => handleSwitch()}
                                            />
                                    </Form.Group>
                                </div> 
                                
                                <div className="d-block gx-5">
                                
                                    SIGN UP
                                
                                </div>  
                                
                            </div>
                        </div> 
                            
                            {showForm()}

                            
                        </div>

                </div>

                        <Footer className="fixer">
                            <Footer />
                        </Footer>


            </div>
            
       
            
 
    );
}




