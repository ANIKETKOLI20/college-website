import React, { Component } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class LocalCommittee extends Component {
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
        <h1 className='colllege-development-heading'>Local Management Committee</h1>
        <p>Local Management Committee consist of</p>
        <div className='management-container'>
          <p className='who-is-he'>CHAIRMAN</p>
          <h1 className='his-name'>SHRI. SAURABH RAMESHCHANDRA MUNGHATE</h1>
          <p className='who-is-he'>SECRETARY</p>
          <h1 className='his-name'>SHRI. PRABHAKARRAO DHAKROJI WASEKAR</h1>
          <p className='who-is-he'>MEMBER/SECRETARY</p>
          <h1 className='his-name'>DR. MANDANJIT KULDIPSINGH SURI</h1>
          <p className='who-is-he'>MEMBER</p>
          <h1 className='his-name'>SHRI. BABURAO JASUJI KOHLE</h1>
          <p className='who-is-he'>MEMBER</p>
          <h1 className='his-name'>SHRI. SUDHAKARRAO N. MARGONWAR</h1>
          <p className='who-is-he'>MEMBER</p>
          <h1 className='his-name'>SHRI. BHAGIRATH PATIL YELMULE</h1>
          <p className='who-is-he'>MEMBER</p>
          <h1 className='his-name'>DR. JAGDISH JIVANRAO MUNGHATE</h1>
          <p className='who-is-he'>REACHING REPRESENTATIVE</p>
          <h1 className='his-name'>KU. APARNA S. MARGONWAR</h1>
          <p className='who-is-he'>REACHING REPRESENTATIVE </p>
          <h1 className='his-name'>SHRI. PANKAJ RASHIKKUMAR CHAVHAN</h1>
          <p className='who-is-he'>REACHING REPRESENTATIVE </p>
          <h1 className='his-name'>SHRI. PRAVIN BANDOPANTH GOHANE</h1>
          <p className='who-is-he'>NON-TEACHING REPRESENTATIVE</p>
          <h1 className='his-name'>SHRI. RAVINDRA G. ZADE</h1>
        </div>
        <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1QXKZsuczDSr6OU9ALm178RF_z4oSDhZ-/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1QXKZsuczDSr6OU9ALm178RF_z4oSDhZ-/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
        <Footer />
      </div>
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default LocalCommittee;
