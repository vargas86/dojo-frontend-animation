import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import { Button} from 'react-bootstrap';



export default function Login() {
    return (
    


        <div className="d-flex justify-content-center">
            <Form className="cardform no-shadow px-0 px-lg-5 py-3 py-lg-5 mostrounded bg-form">
                <Form.Group controlId="formBasicEmail">     
                    <Form.Control type="email" placeholder="USER" className="mostrounded py-4 shadow"/>

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    
                    <Form.Control type="password" placeholder="PASSWORD" className="mostrounded py-4 shadow"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <div className="d-block d-lg-flex justify-content-center px-0 px-lg-4">
                    <Button type="submit" id="login" className="mr-0 mr-lg-2 mx-auto my-3 my-lg-0 d-block light-btn mostrounded px-5 py-3 shadow btn btn-primary btn btn-primary">
                        LOGIN
                    </Button>
                    <NavLink to="/forgotpassword">
                    <Button type="submit" id="forgetpassword" className="ml-0 ml-lg-2 mr-lg-2 mr-3 mx-auto my-3 my-lg-0 d-block light-btn mostrounded px-3 px-lg-1 py-3 shadow btn btn-primary btn btn-primary">
                        FORGET PASSWORD
                    </Button>
                    </NavLink>
                </div>
            </Form>
        </div>        

                   
        
            
 
    );
}


