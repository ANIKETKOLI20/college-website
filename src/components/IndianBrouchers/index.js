import React, { Component } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class IndianBrouchers extends Component {
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
      <h1 className='colllege-development-heading'>Institute Brochure</h1>
      <div className="review-bottom-section-university">
        <FaLongArrowAltLeft className="arrow" />
        <button type="button" className="see-more">See More in Full PDF</button>
      </div>
      <Footer />
    </div>
  
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default IndianBrouchers;
