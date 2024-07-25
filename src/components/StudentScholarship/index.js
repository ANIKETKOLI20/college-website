import React, { useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const StudentScholarship = () => {
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
        <h1 className='colllege-development-heading'>Student Scholarship/Support</h1>
        <div className="review-bottom-section-university">
          <FaLongArrowAltLeft className="arrow" />
          <button type="button" className="see-more">
            See More in Full PDF
          </button>
        </div>
        <Footer />
      </div>
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default StudentScholarship;
