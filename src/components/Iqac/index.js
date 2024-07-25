import React, { Component } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';


    

class Iqac extends Component {
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
      <h1>IQAC Committee</h1>
      <p>The composition of IQAC is as follows:</p>
      <div className='intro-of-management'>
        <p className='who-is-he'>CHAIRMAN</p>
        <h1 className='his-name'>DR. P. R. CHAVHAN</h1>
        <p className='quali-para'>Off Primcipal Shri Saoguru Saibatia Silence College Ashti</p>

        <p className='who-is-he'>MEMBER FROM THE MANAGEMENT</p>
        <h1 className='his-name'>SHRI. SAURABH R. MUNGHATE</h1>
        <p className='quali-para'>President, Shri Salbaba Gramin Samiha Gadchiras</p>

        <p className='who-is-he'>MEMBERS FROM THE COLLEGE</p>
        <h1 className='his-name'>DR. G. S. TOMAR</h1>
        <p className='quali-para'>Director of Physical Education</p>

        <h1 className='his-name'>PROF. R. H. SONTAKKE</h1>
        <p className='quali-para'>Librarian</p>

        <h1 className='his-name'>DR. A. S. MARGONWAR</h1>
        <p className='quali-para'>Asst. Prof of Botany</p>

        <h1 className='his-name'>DR. M. P. SINGH </h1>
        <p className='quali-para'>Asst. Prof of Chemistry</p>

        <p className='who-is-he'>MEMBERS FROM LOCAL SOCIETY/ALUMNI</p>
        <h1 className='his-name'>DR. P. R. CHAVHAN</h1>
        <p className='quali-para'>Off Principal. Stvi Sadguru Salbaha Science College Ashti</p>

        <h1 className='his-name'>DR. M. P. SINGH</h1>
        <p className='quali-para'>Alumni Head</p>

        <h1 className='his-name'>KU. LAXMI YEGGEWAR</h1>
        <p className='quali-para'>Ex Student</p>

        <h1 className='his-name'>SHRI SWAPNIL CHELLIYALWAR</h1>
        <p className='quali-para'>Ex Student</p>

        <h1 className='his-name'>KU. YOGITA NAGRALE</h1>
        <p className='quali-para'>Ex Student</p>

        <p className='who-is-he'>MEMBER FROM EMPLOYER</p>
        <h1 className='his-name'>SHRI. SAURABH R. MUNGHATE</h1>
        <p className='quali-para'>President, Shri Saibatia Gramin Vikas Sanstha Gadchiroli</p>

        <p className='who-is-he'>CO-ORDINATOR OF IQAC</p>
        <h1 className='his-name'>DR. P. K. SINGH</h1>
        <p className='quali-para'>Asst. Prof of Physics</p>
      </div>
      <Footer />
    </div>
   
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default Iqac;

