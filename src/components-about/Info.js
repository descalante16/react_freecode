import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import emailIcon from '../envelope-solid.svg';
import linkedinIcon from '../linkedin.svg';
import AboutSec from './AboutSec';
import Interests from './Interests';
import AFooter from './AFooter';


const Info = () => {
  return (
    <div className=''>
      <div className=" d-flex justify-content-center ">
        <div className="card  mb-5 mt-5 text-bg-dark rounded-3">
          <img
            src="/picture-des.jpg"
            width={400}
            alt="Desirie"
            className="card-img-top rounded-top mx-auto d-block"
          />
          <div className="card-body">
            <h1 className="card-title text-center fs-2 px-5 mt-3">Desirie Escalante</h1>
            <h2 className="card-subtitle mb-2 fs-5 mb-3 text-center job">Frontend Developer</h2>
            <h6 className="text-center mb-4">descalante16.website</h6>

            <div className="d-flex justify-content-evenly">
              <Button className=" btn-lg fw-semibold" variant="light">
              <img src={emailIcon} alt="Email Icon" width="22" height="22" className="align-items-center mb-1 me-3 " />

                Email
              </Button>{' '}
              <Button className="text-white btn-lg fw-semibold" variant="info">
              <img src={linkedinIcon} alt="Email Icon" width="24" height="24" className="align-items-center mb-1 me-3  custom-icon-linked" />

                LinkedIn
              </Button>{' '}

            </div>
            <AboutSec/>
            <Interests />
           
          </div>
          <AFooter/>
        </div>
      </div>
    </div>
  );
};

export default Info;
