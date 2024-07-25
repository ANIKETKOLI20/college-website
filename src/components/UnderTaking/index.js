import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './index.css';

const UnderTaking = () => {
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
      <div className="hostel-container">
      <Header />
        <h1 className='colllege-development-heading'>Undertaking</h1>
        <div className="principal-container">
          <img
            src="https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph"
            alt="principal"
            className="principal"
          />
        </div>
        <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/16oSMvxTi5RPtgaHPDIBV8DgkAsJYx_XW/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/16oSMvxTi5RPtgaHPDIBV8DgkAsJYx_XW/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
        <Footer />
      </div>
   
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default UnderTaking;
