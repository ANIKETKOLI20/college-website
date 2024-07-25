import React, { Component } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';
import { ThreeDots } from 'react-loader-spinner'; // Import the Loader component
import './index.css';


class AboutInstitute extends Component {
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
  
    renderAboutInstituteContent = () => (
    
        <div className="hostel-container">
        <Header />
          <h1>About Institute</h1>
          <div className="circle-container">
            <a href="/convert/jajRrA0/about-trust.html" download="downloaded-svg-file.svg">
              Download SVG
            </a>
          </div>
          <Footer />
        </div>
       
      
    );
  
    render() {
      const { isLoading } = this.state;
  
      return isLoading ? this.renderLoadingView() : this.renderAboutInstituteContent();
    }
  }
  
  export default AboutInstitute;