import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import { FaLongArrowAltRight } from "react-icons/fa";
import './index.css';

class CollegeDevelopment extends Component {
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
      <h1 className='colllege-development-heading'>College Development Committee</h1>
      <p>College Development Committee consists of</p>
      <div className='management-container'>
        <p className='who-is-he'>CHAIRMAN</p>
        <h1 className='his-name'>HONORABLE SHRI. SOURABHDADA R. MUNGHATE</h1>
        <p className='who-is-he'>SECRETARY</p>
        <h1 className='his-name'>HONORABLE MS. SHALINITAI R. MUNGHATE</h1>
        <p className='who-is-he'>PRINCIPAL NOMINATED HEAD</p>
        <h1 className='his-name'>DR. GOPAL S. TOMAR</h1>
        <p className='who-is-he'>ASST PROF TEACHER REPRESENTATIVE</p>
        <h1 className='his-name'>DR. APARNA S. MARGONWAR</h1>
        <p className='who-is-he'>ASST PROF TEACHER REPRESENTATIVE</p>
        <h1 className='his-name'>MR.RAMESH H. SONTAKKE</h1>
        <p className='who-is-he'>ASST PROF TEACHER REPRESENTATIVE</p>
        <h1 className='his-name'>DR.MAHENDRAPRATAP SINGH TOMAR</h1>
        <p className='who-is-he'>NON-TEACHING EMPLOYEE</p>
        <h1 className='his-name'>MR.ARVIND M. THUTE</h1>
        <p className='who-is-he'>SOCIAL FIELD REPRESENTATIVE</p>
        <h1 className='his-name'>HONORABLE BHAGIRATH PATIL YELMULE</h1>
        <p className='who-is-he'>EDUCATION REPRESENTATIVE</p>
        <h1 className='his-name'>HONORABLE SUDHAKARRAO N. MARGONWAR</h1>
        <p className='who-is-he'>BUSINESS FIELD REPRESENTATIVE</p>
        <h1 className='his-name'>HONORABLE BABARAOJI J. KOHALE</h1>
        <p className='who-is-he'>EX STUDENT</p>
        <h1 className='his-name'>MR. BHASKAR R. URADE</h1>
        <p className='who-is-he'>PRINCIPAL & SECRETARY</p>
        <h1 className='his-name'>DR. APARNA S. MARGONWAR</h1>
        <p className='who-is-he'>PRESIDENT STUDENT COUNCIL</p>
        <h1 className='his-name'>----</h1>
        <p className='who-is-he'>SECRETARY STUDENT COUNCIL</p>
        <h1 className='his-name'>----</h1>
      </div>
      <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1h-z7A1PQmrys0iQAwe1PDku9iX6vcSni/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1h-z7A1PQmrys0iQAwe1PDku9iX6vcSni/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
      <Footer />
    </div>
  
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default CollegeDevelopment;
