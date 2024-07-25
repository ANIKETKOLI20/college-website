import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner'; // Import the Loader component
import './index.css';

class BestPractices extends Component {
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

  renderBestPracticesContent = () => (
    
      
    <div className='code-of-conduct-container'>
    <Header/>
      <h1 className='code-heading'>Best Practices</h1>
      <div className='prospective-container'>
        <div className='prospective-section-left'>
          <h1>The Practice</h1>
          <p className='prespective-para'>Since 2009, arranging a monthly visit to the student's home for advice on knowledge of the future in basic sciences is routine practice at the college. The practice helps to attract and inspire rural students to be admitted to the basic sciences UG program, Two or more college teachers & non-teaching faculty go to another village across the college's 15-20 km area and are conscious of a student and their parents taking up the science sector with knowledge of carrier prospects in both the present and future era. This practice is regularly taken by selected faculty members each year starting in the session for two months.</p>
        </div>
      </div>
      <div className='prospective-container'>
        <div className='prospective-section-right'>
          <h1>Impact of the practice</h1>
          <p className='prespective-para'>Which process is successful in creating interest in the science stream for students and their parents. Because of this practice, the percentage of basic science stream students in the institute is increasing regularly. Beginning in 2015, the admission was complete and full for each year.</p>
        </div>
      </div>
      <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1B9Eob6L647o7ZQ-Yx8R47t_mu3wmjNLa/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1B9Eob6L647o7ZQ-Yx8R47t_mu3wmjNLa/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
      <Footer />
    </div>
    
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderBestPracticesContent();
  }
}

export default BestPractices;
