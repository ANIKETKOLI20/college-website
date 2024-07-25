import React, { Component } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import Footer from '../Footer';
import Header from '../Header';
import { ThreeDots } from 'react-loader-spinner'; // Import the Loader component
import './index.css';

class Botany extends Component {
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

  renderBotanyContent = () => (
    
    <div className='code-of-conduct-container'>
      <Header/>
      <h1 className='colllege-development-heading'>Department of Botany</h1>
      <div className='principal-container'>
        <h1 className='principal-name'>Dr. Apama S Margonwar</h1>
        <img
          src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
          alt="principal"
          className='principal'
        />
        <div className="pocket-of-container">
          <div className="small-container-in-principal-botany">
            <p className="teacher-para">Designation</p>
            <h1 className="each-principal-container-heading">Assistant Professor of Botany & Head</h1>
          </div>
          <div className="small-container-in-principal-botany">
            <p className="teacher-para">Qualification</p>
            <h1 className="each-principal-container-heading">M. Sc., M.Phil., Ph.D.</h1>
          </div>
          <div className="small-container-in-principal-botany">
            <p className="teacher-para">Teaching Experience</p>
            <h1 className="each-principal-container-heading">10 Years</h1>
          </div>
          <div className="small-container-in-principal-botany">
            <p className="teacher-para">Publications</p>
            <h1 className="each-principal-container-heading">To attend and publish research papers in International Conferences More than four research papers published in National and International Journals</h1>
            <h1 className="each-principal-container-heading">One book published in International Publication(LAMBA RT)</h1>
            <h1 className="each-principal-container-heading">Four books published on CBCS Pattern</h1>
          </div>
          <div className="small-container-in-principal-botany">
            <p className="teacher-para">Positions</p>
            <h1 className="each-principal-container-heading">Officiating Principal</h1>
            <h1 className="each-principal-container-heading">As a member of Juvenile Justices Board Gadchiroli</h1>
            <h1 className="each-principal-container-heading">LMC Member</h1>
            <h1 className="each-principal-container-heading">Chairman of OBC/ Minority Committee</h1>
            <h1 className="each-principal-container-heading">Member of IQAC</h1>
          </div>
        </div>
      </div>
      <div className='principal-container'>
        <h1 className='principal-name'>Mrs. Vaishali Borkute</h1>
        <img
          src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
          alt="principal"
          className='principal'
        />
        <div className="pocket-of-container">
          <div className="each-principal-container-botany">
            <p className="teacher-para">Designation</p>
            <h1 className="each-principal-container-heading">Assistant Professor of Botany(CHB)</h1>
          </div>
          <div className="each-principal-container-botany">
            <p className="teacher-para">Qualification</p>
            <h1 className="each-principal-container-heading">M. Sc.</h1>
          </div>
          <div className="each-principal-container-botany">
            <p className="teacher-para">Teaching Experience</p>
            <h1 className="each-principal-container-heading">2 Years</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
   
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderBotanyContent();
  }
}

export default Botany;
