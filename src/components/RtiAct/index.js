import React, { useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const RtiAct = () => {
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
      <div className='hostel-container'>
      <Header />
        <h1 className='colllege-development-heading'>Statutory Declaration of RTI Act</h1>
        <div className="rti-column">
          <p>Column 1</p>
          <p>Column 2</p>
        </div>
        <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1-yYAQi4Slk25lT0J4uxaYLSCmpea509R/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1-yYAQi4Slk25lT0J4uxaYLSCmpea509R/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
        <div className="rti-column">
          <p>Column 1</p>
          <p>Column 2</p>
        </div>
        <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1d8u5Kycy6TfMtQFKo_x5EilwVmO32P1g/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1d8u5Kycy6TfMtQFKo_x5EilwVmO32P1g/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
        <Footer />
      </div>
    
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default RtiAct;
