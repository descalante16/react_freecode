import React from "react";
import'../App.css';

import Header from "../components/homepage components/Header";
import MainContent from "../components/homepage components/MainContent";
import Footer from "../components/homepage components/Footer";

function Home(){
    return (
        <div className="page">
            <Header />
            <MainContent/>
            <Footer />
        </div>
    );
}

export default Home;