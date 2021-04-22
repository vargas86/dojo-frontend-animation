import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap';



export default function Resetpassword() {
    return (

        <div className="d-flex justify-content-center">
        <Form className="cardform p-5 mostrounded bg-gloom">
            <Form.Group controlId="formBasicEmail">
                <Form.Text className="formtext pb-3">
                    <h1>Recupera tu cuenta</h1>
                    <h2>Ingresa tu correo electrónico o número de teléfono para buscar tu cuenta.</h2> 
                </Form.Text>        
                <Form.Control type="email" placeholder="EMAIL" className="mostrounded py-4"/>
            </Form.Group>

            <div className="d-flex justify-content-center px-4">
                <Button type="submit" className="light-btn mostrounded mt-3 px-5 py-3">
                    RESTORE PASSWORD
                </Button>

            </div>
        </Form>
    </div>        

                    


            
       
            
 
    );
}
