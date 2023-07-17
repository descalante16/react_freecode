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
            


        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
             <img src={twitterIcon} alt="Twitter Icon" width="30" height="30" className="social-icon align-items-center mb-1 me-4" />
        </a>
        <a href="https://facebook.com/desiriezinm" target="_blank" rel="noopener noreferrer">
            <img src={fbIcon} alt="Facebook Icon" width="30" height="30" className="social-icon align-items-center mb-1 me-4" />
        </a>
        <a href="https://www.instagram.com/desca_rie" target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Instagram Icon" width="30" height="30" className="social-icon align-items-center mb-1 me-4" />
        </a>
        <a href="https://github.com/descalante16" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github Icon" width="30" height="30" className="social-icon align-items-center mb-1" />
        </a>
            </div>
            
        </div>
    );
};

export default AFooter;