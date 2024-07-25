import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class ENote extends Component {
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
      <h1 className='code-heading'>AQAR</h1>

      <div className='e-note-container'>
        <h1>Department of Botany</h1>
        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Dr A.S. Margonwar</h1>
          <button type="button" className="open-button">Open</button>
        </div>

        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Dr A.S. Margonwar</h1>
          <button type="button" className="open-button">Open</button>
        </div>

        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Dr A.S. Margonwar</h1>
          <button type="button" className="open-button">Open</button>
        </div>
      </div>

      <div className='e-note-container'>
        <h1>Department of Chemistry</h1>
        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Mr.S.K. Sakhare</h1>
          <button type="button" className="open-button">Open</button>
        </div>

        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Dr. M.P. Singh</h1>
          <button type="button" className="open-button">Open</button>
        </div>

        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Mr Prakesh B. Rathod</h1>
          <button type="button" className="open-button">Open</button>
        </div>
      </div>

      <div className='e-note-container'>
        <h1>Department of Physics</h1>
        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Dr. Dipak Nagapure</h1>
          <button type="button" className="open-button">Open</button>
        </div>

        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Dr. P.K. Singh</h1>
          <button type="button" className="open-button">Open</button>
        </div>
      </div>

      <div className='e-note-container'>
        <h1>Department of Zoology</h1>
        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Dr.PR. Chavhan</h1>
          <button type="button" className="open-button">Open</button>
        </div>

        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Mr. M.S. Seelamwar</h1>
          <button type="button" className="open-button">Open</button>
        </div>
      </div>

      <div className='e-note-container'>
        <h1>Department of Mathematics</h1>
        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Dr. Pradip Kashyap</h1>
          <button type="button" className="open-button">Open</button>
        </div>

        <div className="review-bottom-section-academics">
          <h1 className='academic-heading'>Mr M.S Seelamwar</h1>
          <button type="button" className="open-button">Open</button>
        </div>
      </div>

      <Footer />
    </div>
    
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default ENote;
