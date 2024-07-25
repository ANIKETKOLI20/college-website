import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Footer from '../Footer';
import Header from '../Header';
import './index.css';

const Physics = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay or fetch data here
  setTimeout(() => {
    setIsLoading(false);
  }, 2000); // Adjust the delay time as needed

  const renderLoadingView = () => (
    <div className="loading-container">
      <ThreeDots color="#0b69ff" height="50" width="50" />
    </div>
  );

  const renderContent = () => (
      <div className='code-of-conduct-container'>
      <Header />
        <h1 className='colllege-development-heading' >Department Of Physics</h1>
        <div className='principal-container'>
          <h1 className='principal-name'>Dr. Pramod Kumar Singh</h1>
          <img
            src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
            alt="principal"
            className='principal'
          />
          <div className="pocket-of-container">
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Designation</p>
                <h1 className="each-principal-container-heading">Assistant Professor of Physics & Head</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Qualification</p>
                <h1 className="each-principal-container-heading">M. Sc., Ph.D.</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Teaching Experience</p>
                <h1 className="each-principal-container-heading">5 Years</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Publications</p>
                <h1 className="each-principal-container-heading">Publication in National & International Conferences</h1>
                <h1 className="each-principal-container-heading">More than twelve research papers published in National and International Journals</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Positions</p>
                <h1 className="each-principal-container-heading">NAAC-IQAC Coordinator</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='principal-container'>
          <h1 className='principal-name'>Mrs. Jaya V. Rokade</h1>
          <img
            src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
            alt="principal"
            className='principal'
          />
          <div className="pocket-of-container">
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Designation</p>
                <h1 className="each-principal-container-heading">Assistant Professor of Physics</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Qualification</p>
                <h1 className="each-principal-container-heading">M.Sc., B.Ed., SET</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Teaching Experience</p>
                <h1 className="each-principal-container-heading">9 Years</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='principal-container'>
          <h1 className='principal-name'>Dr. Dipak Ramdas Nagapure</h1>
          <img
            src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
            alt="principal"
            className='principal'
          />
          <div className="pocket-of-container">
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Designation</p>
                <h1 className="each-principal-container-heading">Assistant Professor of Physics</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Qualification</p>
                <h1 className="each-principal-container-heading">M.Sc. (Physics), GATE, M.Tech, Ph.D.</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Teaching Experience</p>
                <h1 className="each-principal-container-heading">1 Year</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Publications</p>
                <h1 className="each-principal-container-heading">06 Publications in International Journals </h1>
                <h1 className="each-principal-container-heading">02 International Conferences, 04 National Conferences, 02 Workshops</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Awards</p>
                <h1 className="each-principal-container-heading">JRF (DST-SERB)</h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default Physics;
