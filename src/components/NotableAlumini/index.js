import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { FaLongArrowAltLeft } from "react-icons/fa";
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const NotableAlumini = () => {
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
      <div className='notable-alumini'>
      <Header />
        <h1 className='colllege-development-heading'>Notable Alumni</h1>
        <div className="alumini-container">
          <div className="each-left">
            <div>
              <h1>Name</h1>
              <img
                src="https://img.freepik.com/free-photo/portrait-young-student-with-globe-education-day_23-2150980078.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph"
                alt="alumni"
                className="alumini-photo"
              />
            </div>
            <div>
              <h1>Achievement</h1>
              <p className="alumini-para">1. msdfikjaskifjdlaskijikasjf</p>
              <p className="alumini-para">2. msdfikjaskifjdlaskijikasjf</p>
              <p className="alumini-para">3. msdfikjaskifjdlaskijikasjf</p>
            </div>
          </div>
          <div className="each-right">
            <div>
              <h1>Name</h1>
              <img
                src="https://img.freepik.com/free-photo/portrait-young-student-with-globe-education-day_23-2150980078.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph"
                alt="alumni"
                className="alumini-photo"
              />
            </div>
            <div>
              <h1>Achievement</h1>
              <p className="alumini-para">1. msdfikjaskifjdlaskijikasjf</p>
              <p className="alumini-para">2. msdfikjaskifjdlaskijikasjf</p>
              <p className="alumini-para">3. msdfikjaskifjdlaskijikasjf</p>
            </div>
          </div>
          <p className="alumini-para">See alumni association Telegram Group or WhatsApp group</p>
        </div>
        <Footer />
      </div>
    
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default NotableAlumini;
