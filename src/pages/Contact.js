import React from "react";
import { Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Contact(){
    const [goToHome, setGoToHome] = React.useState(false);

    if (goToHome){
        return <Navigate to="/" />;
    }


    return (
        <div>
            <h1 class="mt-2">Contact</h1>
            <Button onClick={() => {
                setGoToHome(true);
            }}
                > {""}Go to the home page</Button>
        </div>
    );
}

export default Contact;