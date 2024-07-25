import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const Sport = () => {
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
        <h1 className='colllege-development-heading'>Physical Education and Sports</h1>
        <div className='principal-container'>
          <h1 className='principal-name'>Dr. Gopalsingh S. Tomar</h1>
          <img
            src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
            alt="principal"
            className='principal'
          />
        </div>
        <Footer />
      </div>
    
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default Sport;
