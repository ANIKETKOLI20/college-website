import React, { Component } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class ManagementCommittee extends Component {
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
      <Header/>
        <h1 className='colllege-development-heading'>Management Committee</h1>
        <p>Institute Management Committee consist of</p>
        <div className='management-container'>
          <p className='who-is-he'>PRESIDENT</p>
          <h1 className='his-name'>SHRI. SAURABH RAMESHCHANDRA MUNGHATE</h1>
          <p className='who-is-he'>VICE-PRECIDENT</p>
          <h1 className='his-name'>SAU. UHAKIRAN ARUN THUTE</h1>
          <p className='who-is-he'>SECRETARTY</p>
          <h1 className='his-name'>SMT. SHALINITAI RAMESHCHANDRA MUNGHATE</h1>
          <p className='who-is-he'>JOINT-SECRETARY</p>
          <h1 className='his-name'>SAU. MINAL RUSHI SAHANI</h1>
          <p className='who-is-he'>ACTING PRECIDENT</p>
          <h1 className='his-name'>SAU. AASHI ASHISH ROHANKAR</h1>
          <p className='who-is-he'>TREASURER</p>
          <h1 className='his-name'>SHRI. DAMODHAR SHANKARRAO MORE</h1>
        </div>
        <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1gEuk_S4qLdCYdVQJqKcri3ayTJNgAwO_/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1gEuk_S4qLdCYdVQJqKcri3ayTJNgAwO_/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
        <Footer />
      </div>
    
  );
  
  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default ManagementCommittee;
