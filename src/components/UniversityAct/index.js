import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const UniversityAct = () => {
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
        <h1 className='colllege-development-heading'>University Act</h1>
        <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1asPdt5iebHP2j34p8Mfad_VFs43QJDMf/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1asPdt5iebHP2j34p8Mfad_VFs43QJDMf/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
        <Footer />
      </div>
    
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default UniversityAct;
