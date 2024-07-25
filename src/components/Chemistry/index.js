import React, { Component } from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';
import Footer from '../Footer';
import Header from '../Header';
import { ThreeDots } from 'react-loader-spinner'; // Import the Loader component
import './index.css';

class Chemistry extends Component {
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

  renderChemistryContent = () => (
    <div className='code-of-conduct-container'>
    <Header/>
      <h1 className='colllege-development-heading'>Department Of Chemistry</h1>
      <div className='principal-container'>
        <h1 className='principal-name'>Dr. Mahendra Pratap Singh</h1>
        <img
          src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
          alt="principal"
          className='principal'
        />
        <div className="pocket-of-container">
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Designation</p>
            <h1 className="each-principal-container-heading">Assistant Professor of Chemistry & Head</h1>
          </div>
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Qualification</p>
            <h1 className="each-principal-container-heading">M. Sc., Ph.D.</h1>
          </div>
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Teaching Experience</p>
            <h1 className="each-principal-container-heading">5 Years</h1>
          </div>
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Publications</p>
            <h1 className="each-principal-container-heading">Five Publication in National & International Conferences</h1>
            <h1 className="each-principal-container-heading">More than five research papers published in National and International Journals</h1>
            <h1 className="each-principal-container-heading">More than Three books published on CBCS Pattern</h1>
          </div>
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Positions</p>
            <h1 className="each-principal-container-heading">Head, College Internal Examination (CIE)</h1>
            <h1 className="each-principal-container-heading">Member of IQAC</h1>
          </div>
        </div>
      </div>
      <div className='principal-container'>
        <h1 className='principal-name'>Dr. Prakash Baburao Rathod</h1>
        <img
          src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
          alt="principal"
          className='principal'
        />
        <div className="pocket-of-container">
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Designation</p>
            <h1 className="each-principal-container-heading">Assistant Professor of Chemistry</h1>
          </div>
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Qualification</p>
            <h1 className="each-principal-container-heading">M.Sc. SET Ph.D.</h1>
          </div>
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Teaching Experience</p>
            <h1 className="each-principal-container-heading">2 Years</h1>
          </div>
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Publications</p>
            <h1 className="each-principal-container-heading">08 research paper published in International journals</h1>
          </div>
        </div>
      </div>
      <div className='principal-container'>
        <h1 className='principal-name'>Mr. Subodh Sakkare</h1>
        <img
          src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
          alt="principal"
          className='principal'
        />
        <div className="pocket-of-container">
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Designation</p>
            <h1 className="each-principal-container-heading">Assistant Professor of Chemistry</h1>
          </div>
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Qualification</p>
            <h1 className="each-principal-container-heading">M.Sc., NET.</h1>
          </div>
          <div className="each-principal-container-chemistry">
            <p className="teacher-para">Teaching Experience</p>
            <h1 className="each-principal-container-heading">4 Years</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderChemistryContent();
  }
}

export default Chemistry;
