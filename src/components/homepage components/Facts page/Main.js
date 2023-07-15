import React from 'react';
import './facts.css'
const Main = () => {
    return (
        <div className='main mt-5 m-5 '>
            <h1 className='main-title fw-bold mb-4 text-white'>Fun Facts about React</h1>
            <ul className='fw-medium fs-5 me-5 text-white'>
                <li className='mb-3'>Was first released in 2013</li>
                <li className='mb-3'>Was originally created by Jordan Walke</li>
                <li className='mb-3'>Has well over 100k stars on Github</li>
                <li className='mb-3'>Is maintained by Facebook</li>
                <li className='mb-3'>Powers thousands of enterprise apps, including mobile apps</li>

            </ul>
        </div>
    );
};

export default Main;