import React, { Component } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class GenderEquity extends Component {
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
    
    <div className='hostel-container'>
      <Header/>
      <h1 className='code-heading'>Gender Equity</h1>
      <div className='prospective-container'>
        <div className='prospective-section-center'>
          <h1>Measures initiated by the institution for the promotion of gender equity during the year</h1>
          <p className='prespective-para'>The institution has taken several measures to enhance safety and security on campus, including establishing a Mahila Takrar Niwaran Samity and installing CCTV cameras. Faculty are expected to leave the lecture hall door open while classes are in session. The college also built a separate women's common room and women's restroom. Also available were feminine hygiene products and a main medical package. The college also hosted training sessions, seminars, and workshops on gender equity and sensitization. The college recognizes both female teachers and non-teaching staff on March 8th as World Women's Day and other activity which promotes gender equity like Rashtramata Jijau Jayanti and Krntijyoti Savitribai Phule Jayanti. A number of activities, including a debate competition and a performance, took place on this day.</p>
        </div>
      </div>
      <div className="review-bottom-section">
        <button type="button" className="see-more">See More in Full PDF</button>
        <FaLongArrowAltRight className="arrow" />
      </div>
      <Footer />
    </div>
    
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default GenderEquity;
