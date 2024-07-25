import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaLongArrowAltRight } from "react-icons/fa";
import Footer from '../Footer';
import Header from '../Header';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const Zoology = () => {
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
        <h1 className='colllege-development-heading'>Department of Zoology</h1>
        <div className='principal-container'>
            <h1 className='principal-name'>Dr. Pankaj R Chavhan</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="small-container-in-principal-botany">
                        <p className="teacher-para">Designation</p>
                        <h1 className="each-principal-container-heading">Assistant Professor of Zoology & Head</h1>
                        <h1 className="each-principal-container-heading">Officiating Principal</h1>
                    </div>
            </div>
            <div className="small-container-in-principal">
                    <div className="small-container-in-principal-botany">
                    <p className="teacher-para">Qualification</p>
                        <h1 className="each-principal-container-heading">M. Sc., Ph.D.</h1>
                    </div>
            </div>
            <div className="small-container-in-principal">
                    <div className="small-container-in-principal-botany">
                    <p className="teacher-para">Teaching Experience</p>
                    <h1 className="each-principal-container-heading">10 Years</h1>

                    </div>
            </div>
            <div className="small-container-in-principal">
                    <div className="small-container-in-principal-botany">
                    <p className="teacher-para">Publications</p>
                        <h1 className="each-principal-container-heading">Publications in National & International Conferences</h1>
                        <h1 className="each-principal-container-heading">More than twenty five research papers published in National and International Journals</h1>
                        <h1 className="each-principal-container-heading">More than five books published on CBCS Pattern</h1>
                    
                    </div>
            </div>
            <div className="botany-small-container">
                    <div className="small-container-in-principal-botany">
                    <p className="teacher-para">Positions</p>
                    <h1 className="each-principal-container-heading">NAAC-IQAC Chairman</h1>
                    <h1 className="each-principal-container-heading">Deputy Chief</h1>
                    </div>
            </div>
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Mr. Sachin G Murkute</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Designation</p>
                        <h1 className="each-principal-container-heading">Assistant Professor of Zoology</h1>
                    </div>
            </div>
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                    <p className="teacher-para">Qualification</p>
                        <h1 className="each-principal-container-heading">M.Sc., M.Phil., B.Ed.</h1>
                    </div>
            </div>
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                    <p className="teacher-para">Teaching Experience</p>
                    <h1 className="each-principal-container-heading"> 9 Years</h1>

                    </div>
            </div>
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Mr Maheshkumar S. Seelamwar</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Designation</p>
                        <h1 className="each-principal-container-heading">Assistant Professor of Zoology</h1>
                    </div>
            </div>
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                    <p className="teacher-para">Qualification</p>
                        <h1 className="each-principal-container-heading">M. Sc. B.Ed , SET</h1>
                    </div>
            </div>
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                    <p className="teacher-para">Teaching Experience</p>
                    <h1 className="each-principal-container-heading">8 Years</h1>

                    </div>
            </div>
            </div>
           
        </div>
        <Footer/>
    </div>
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default Zoology;




