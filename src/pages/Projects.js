import React from 'react';
import '../App.css';
import Header from '../components/homepage components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='page'>
            <Header/>
            <div className=' d-flex mx-5 my-5 grid gap-3'>

                <Card className='bg-dark g-col-6'>
                <Card.Header as="h5" className='text-white'>Project 1</Card.Header>
                <Card.Body>
                    <Card.Title className='text-white'>React Info Site</Card.Title>
                    <Card.Text className='text-white'>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Link to="/facts">
                    <Button variant="primary">VIEW</Button>
                    </Link>
                </Card.Body>

                </Card>
                <Card className='bg-dark g-col-6'>
                <Card.Header as="h5" className='text-white'>Project 2</Card.Header>
                <Card.Body>
                    <Card.Title className='text-white'>Digital Business Card</Card.Title>
                    <Card.Text className='text-white'>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Link to="/about">
                    <Button variant="primary">VIEW</Button>
                    </Link>
                </Card.Body>
                </Card>

                <Card className='bg-dark g-col-6'>
                <Card.Header as="h5" className='text-white'>Project 3</Card.Header>
                <Card.Body>
                    <Card.Title className='text-white'>AirBnb Experiences Clone</Card.Title>
                    <Card.Text className='text-white'>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">VIEW</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Projects;