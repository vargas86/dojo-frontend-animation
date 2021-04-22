import React, { useState } from 'react';

export default function PersonalInfoData() {

    const [userName, setName] = useState('Helio Gracie');
    const [email, setEmail] = useState('email@email.com');
    const [phone, setPhone] = useState('55 5555 5555');
    const [adress, setAdress] = useState('This Adress Av. S/N Long Beach Blvd.')

    return (
        <div className='personal-info-wrapper'>
            <ul>
                <div>
                    {userName}
                </div>
                <div>
                    {email}
                </div>
                <div>
                    {phone}
                </div>
                <div>
                    {adress}
                </div>

            </ul>
        </div>
    );
}
