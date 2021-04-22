import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';


export default function Logaccount() {
    return (

        <div className="d-flex justify-content-center">

            <Form className="cardform no-shadow p-5 mostrounded bg-gloom d-block px-5">

                <h1>Welcome to the Dojo</h1>
                <p>The best Place to learn martial arts online</p>
                <NavLink to="/home">
                <Button type="submit" className="light-btn mostrounded mt-3 mx-1 py-3 ">
                    HOME
                </Button>
                </NavLink>
                <NavLink to="/dashboard">
                <Button type="submit" className="light-btn mostrounded mt-3 mx-1 py-3" >
                    DASHBOARD
                </Button>
                </NavLink>

            </Form>

    </div>        

                    


            
       
            
 
    );
}
