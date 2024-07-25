import React, { Component } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner'; // Import the Loader component
import './index.css';

class AcademicCalender extends Component {
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

  renderAcademicCalenderContent = () => (

      <div className='code-of-conduct-container'>
        <Header/>
      <h1 className='code-heading'>Academic Calendar</h1>
      <div className="review-bottom-section-academics">
        <h1 className='academic-heading'>Academic Calendar 2023-24</h1>
        <button type="button" className="open-button">Open</button>
      </div>
      <div className="review-bottom-section-academics">
        <h1 className='academic-heading'>Academic Calendar 2023-24</h1>
        <button type="button" className="open-button">Open</button>
      </div>
      <div className="review-bottom-section-academics">
        <h1 className='academic-heading'>Academic Calendar 2023-24</h1>
        <button type="button" className="open-button">Open</button>
      </div>
      <div className="review-bottom-section-academics">
        <h1 className='academic-heading'>Academic Calendar 2023-24</h1>
        <button type="button" className="open-button">Open</button>
      </div>
      <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1K_q_ymJEmaP2915WbvZZ-ZXdeDUhmk6j/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1K_q_ymJEmaP2915WbvZZ-ZXdeDUhmk6j/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
      <Footer />
    </div>
        
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderAcademicCalenderContent();
  }
}

export default AcademicCalender;
