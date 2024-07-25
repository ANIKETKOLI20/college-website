import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner'; // Import the Loader component
import './index.css';

class Aqar extends Component {
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

  renderAqarContent = () => (
        <div className='hostel-container'>
          <Header/>
      <h1 className='code-heading'>AQAR</h1>
      <div className="review-bottom-section-academics">
        <h1 className='academic-heading'>AQAR 2020-21</h1>
        <button type="button" className="open-button">Open</button>
      </div>
      <div className="review-bottom-section-academics">
        <h1 className='academic-heading'>AQAR 2019-20</h1>
        <button type="button" className="open-button">Open</button>
      </div>
      <div className="review-bottom-section-academics">
        <h1 className='academic-heading'>AQAR 2018-19</h1>
        <button type="button" className="open-button">Open</button>
      </div>
      <Footer />
    </div>
  
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderAqarContent();
  }
}

export default Aqar;
