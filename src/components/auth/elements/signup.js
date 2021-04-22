import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button} from 'react-bootstrap';



export default function Signup() {
    return (
    


        <div className="d-flex justify-content-center">
            <Form className="cardform no-shadow px-0 px-lg-5 py-3 py-lg-5 mostrounded bg-form">
                <Form.Group controlId="formBasicEmail">     
                    <Form.Control type="email" placeholder="FIRST NAME" className="mostrounded py-4 shadow"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="LAST NAME" className="mostrounded py-4 shadow"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="EMAIL ADRESS" className="mostrounded py-4 shadow"/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="PASSWORD" className="mostrounded py-4 shadow"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="CONFIRM PASSWORD" className="mostrounded py-4 shadow"/>
                </Form.Group>

                <div className="d-flex justify-content-center px-4">
                    <Button type="submit" className="mr-2 light-btn mostrounded px-5 py-3 shadow">
                        REGISTER
                    </Button>

                </div>
            </Form>
        </div>        

                   
        
            
 
    );
}

