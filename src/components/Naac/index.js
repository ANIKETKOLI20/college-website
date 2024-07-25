import React, { Component } from 'react';
import { FaQuoteLeft, FaQuoteRight ,FaLongArrowAltRight} from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class Naac extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    // Simulate a delay or fetch data here
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000); // Adjust the delay time as needed
  }
  
  renderLoadingView = () => (
    <div className="loading-container">
      <ThreeDots color="#0b69ff" height="50" width="50" />
    </div>
  );

  renderContent = () => (

      <div className='code-of-conduct-container'>
        <Header />
        <h1 className="colllege-development-heading">NAAC Visit</h1>
        <h1 className="al-heading-year">2019</h1>
        <div className="top-box">
        <div className='boxes-of-images'>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='top-1'
            />
            <div className="vertical-column">
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='top-2'
            /> 
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='top-2'
            />
            </div>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='top-3'
            />
           
        </div>
        <div className='boxes-of-images'>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='bottom-1'
            />
            <div className="vertical-column">
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='bottom-first-2'
            /> 
           <div>
           <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='bottom-2'
            />
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='last-bottom'
/>
           </div>
            </div>
            
    
        </div>
        </div >
        <h1 className="al-heading-year">2016</h1>
        <div className="top-box">
        <div className='boxes-of-images'>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='top-1'
            />
            <div className="vertical-column">
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='top-2'
            /> 
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='top-2'
            />
            </div>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='top-3'
            />
           
        </div>
        <div className='boxes-of-images'>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='bottom-1'
            />
            <div className="vertical-column">
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='bottom-first-2'
            /> 
           <div>
           <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='bottom-2'
            />
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='last-bottom'
/>
           </div>
            </div>
            
           
        </div>
        </div>
        <div className="review-bottom-section-university">
                <button type="button" className="see-more">See More in Full PDF</button>
                <FaLongArrowAltRight className="arrow" />
        </div>
        <Footer/>
    </div>
   
  );

  render() {
    const { isLoading } = this.state;
    
    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default Naac;




