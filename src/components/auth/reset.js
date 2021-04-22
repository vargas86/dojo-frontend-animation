import React from 'react';

import Resetpassword from './elements/forgotpassword';
import Footer from '../footer/footer'; 

export default function Reset() {
    return (
    
            <div className="container-fluid bg-darker m-0 p-0">
                <div className="paralaxpassword col-12 text-light p-5">
                    
                <Resetpassword />
                        
                    </div>
          
                <Footer className="fixer">
                    <Footer />
                </Footer>
            </div>
            
       
            
 
    );
}


