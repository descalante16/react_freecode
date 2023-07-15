import React from 'react';
import '../App.css';

import twitterIcon from '../social svg/twitter.svg';
import fbIcon from '../social svg/square-facebook.svg';
import instaIcon from '../social svg/square-instagram.svg';
import githubIcon from '../social svg/square-github.svg';


const AFooter = () => {
    return (
        <div className='about-footer rounded-bottom'>
            <div className='my-3 d-flex justify-content-center'>
            


            <img src={twitterIcon} alt="Email Icon" width="35" height="35" className=" white-icon align-items-center mb-1 me-4" />
            <img src={fbIcon} alt="Email Icon" width="35" height="35" className="white-icon align-items-center mb-1 me-4" />
            <img src={instaIcon} alt="Email Icon" width="35" height="35" className="white-icon align-items-center mb-1 me-4" />
            <img src={githubIcon} alt="Email Icon" width="35" height="35" className="white-icon align-items-center mb-1" />

            </div>
            
        </div>
    );
};

export default AFooter;