import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner'; // Import the Loader component
import './index.css';

class AdmissionJunior extends Component {
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

  renderAdmissionJuniorContent = () => (
    <div className='hostel-container'>
      <Header/>
      <h1 className='colllege-development-heading'>Courses Offered For Junior College</h1>
      <div className="review-bottom-section-university">
        <div className="group-section-xi">
          <div className="minimise-maximise">
            <h1 className="group-title-junior">11th Science</h1>
            <h1 className="group-title-junior">12th Science</h1>
          </div>
          <div className="subject">
            <div>
              <p className="subject-para">Physics, Chemistry, Mathematics, Biology</p>
              <p className="subject-para">2-year regular program</p>
            </div>
            <div>
              <button type="button" className="group-apply-button-3">Apply For 11th</button>
              <button type="button" className="group-apply-button-3">Apply For 12th</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderAdmissionJuniorContent();
  }
}

export default AdmissionJunior;
