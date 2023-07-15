import React from 'react';
import '../App.css'
import Navbar from '../components/homepage components/Facts page/Navbar';
import Main from '../components/homepage components/Facts page/Main';
import Footer from '../components/homepage components/Footer';

const Facts = () => {
    
    return (
        <div className='page'>
            <Navbar />
            <Main />
            <Footer />
           
        </div>
    );
};

export default Facts;