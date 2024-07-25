import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner'; // Import the Loader component
import './index.css';

class AdmissionBsc extends Component {
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

  renderAdmissionBscContent = () => (
    <div className='hostel-container'>
    <Header/>
      <h1 className='colllege-development-heading'>Courses Offered For Bsc</h1>
      <div className="review-bottom-section-university">
        <div className="group-section">
          <div className="minimise-maximise">
            <h1 className="group-title">Bachelors of Science in PCM</h1>
          </div>
          <div className="subject">
            <div>
              <p className="subject-para">Physics, Chemistry, Mathematics</p>
              <p className="subject-para">3-year regular program</p>
            </div>
            <div>
              <div>
                <button type="button" className="group-apply-button-1">Learn More</button>
                <button type="button" className="group-apply-button-2">Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div className="group-section">
          <div className="minimise-maximise">
            <h1 className="group-title">Bachelors of Science in CBZ</h1>
          </div>
          <div className="subject">
            <div>
              <p className="subject-para">Chemistry, Botany, Zoology</p>
              <p className="subject-para">3-year regular program</p>
            </div>
            <div>
              <div>
                <button type="button" className="group-apply-button-1">Learn More</button>
                <button type="button" className="group-apply-button-2">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderAdmissionBscContent();
  }
}

export default AdmissionBsc;
