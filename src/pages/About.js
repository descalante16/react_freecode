import React from "react";
import { Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function About(){
    const [goToContact, setGoToContact] = React.useState(false);

    if (goToContact){
        return <Navigate to="/contact" />;
    }
    return (
        <div>
            <h1 className="mt-2">About</h1>
            <Button className="btn btn-primary" onClick={() => {
                setGoToContact(true);
            }}
                > {""}Go to the contact page</Button>
        </div>
    );
}

export default About;