import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const PrincipalDesk = () => {
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
      <div className='principal-section-container'>
      <Header />
        <h1 className='colllege-development-heading'>Principal's Desk</h1>
        <div className='principal-container'>
          <h1 className='principal-name'>DR. PRAMOD KUMAR SINGH</h1>
          <img
            src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
            alt="principal"
            className='principal'
          />
          <div>
            <div className="principal-quote">
              <FaQuoteLeft className="principal-first-quote"/>
              <h1 className="principal-quote-heading">"Education", is the most powerful weapon which you can use to change the world.</h1>
              <FaQuoteRight className="principal-second-quote" />
            </div>
          </div>
          <div className="pocket-of-container">
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <h1 className="each-principal-container-heading">Currently <span className="degree">Assistant Professor of Physics & Head</span></h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <h1 className="each-principal-container-heading">Qualified in <span className="degree"> M. Sc., Ph.D.</span></h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <h1 className="each-principal-container-heading">With teaching experience of over <span className="degree">5 Years</span></h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <h1 className="each-principal-container-heading">Has Publication in National & International Conferences</h1>
                <h1 className="each-principal-container-heading">He Published More than <span className="degree">Twelve Research Papers</span> in National and International Journals</h1>
              </div>
            </div>
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <h1 className="each-principal-container-heading">Moreover He is a <span className="degree">NAAC-IQAC Coordinator</span></h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default PrincipalDesk;
