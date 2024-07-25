import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const SelfStudy = () => {
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
        <h1 className='code-heading'> Self Study Report</h1>
        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>SSR March 2019</h1>
          <button type="button" className="open-button">Open</button>
        </div>
        <Footer />
      </div>
    
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default SelfStudy;
