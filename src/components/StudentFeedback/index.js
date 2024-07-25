import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaLongArrowAltRight } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const StudentFeedback = () => {
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
      <div className="student-feedback-container">
      <Header />
        <div className="review-section">
          <div className="review-top-section">
            <FaQuoteLeft className="first-quote" />
            <img
              src="https://img.freepik.com/free-photo/portrait-young-student-with-globe-education-day_23-2150980078.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph"
              className="reviewer-photo"
              alt="reviewer"
            />
            <div className="reviewer-container">
              <h1>
                I've been able to develop my Bsc graduate skills and learned how to
                work independently and on a team. With the support of my professor,
                I've been able to gain valuable career experience on and off campus.
                Ultimately, I've become a strong leader.
              </h1>
              <p className="reviewer-name">- Aditya</p>
            </div>
            <FaQuoteRight className="second-quote" />
          </div>
        </div>
        <div className="review-section">
          <div className="review-top-section">
            <FaQuoteLeft className="first-quote" />
            <img
              src="https://img.freepik.com/free-photo/portrait-young-student-with-globe-education-day_23-2150980078.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph"
              className="reviewer-photo"
              alt="reviewer"
            />
            <div className="reviewer-container">
              <h1>
                I've been able to develop my Bsc graduate skills and learned how to
                work independently and on a team. With the support of my professor,
                I've been able to gain valuable career experience on and off campus.
                Ultimately, I've become a strong leader.
              </h1>
              <p className="reviewer-name">- Aditya</p>
            </div>
            <FaQuoteRight className="second-quote" />
          </div>
        </div>
        <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1l-BpWZlExNY1SK0wiVkL19xeH1UDlHZI/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1l-BpWZlExNY1SK0wiVkL19xeH1UDlHZI/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
        <Footer />
      </div>
   
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default StudentFeedback;
