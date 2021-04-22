import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button} from 'react-bootstrap';
import Footer from '../footer/footer'; 



export default function Login() {
    return (
    
            <div className="container-fluid bg-darker m-0 p-0">



                    <div className="paralax2 col-12 text-light p-5">

                        <div className="d-flex justify-content-center">
                            <div className="d-flex mostrounded px-4">
                                <div className="d-block gx-5">
                                    LOGIN
                                </div>   
                                <div className="d-block gx-5 px-4">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                            />
                                        </Form.Group>
                                </div> 
                                <div className="d-block gx-5">
                                    SIGN UP
                                </div>  
                            </div>
                        </div>          

                        <div className="d-flex justify-content-center">
                            <Form className="bg-darker p-5 mostrounded fixerr bg-gloom">
                                <Form.Group controlId="formBasicEmail">     
                                    <Form.Control type="email" placeholder="USER" className="mostrounded innershadow"/>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    
                                    <Form.Control type="password" placeholder="PASSWORD" className="mostrounded innershadow"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <div className="d-flex justify-content-center px-4">
                                    <Button type="submit" className="mr-2 light-btn mostrounded">
                                        LOGIN
                                    </Button>
                                    <Button type="submit" className="ml-2 light-btn mostrounded">
                                        FORGET PASSWORD
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <section className="paralax3 m-0"></section>
                    
    

            </div>
       
            
 
    );
}


