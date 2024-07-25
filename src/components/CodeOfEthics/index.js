import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import { FaLongArrowAltRight } from "react-icons/fa";
import './index.css';

class CodeOfEthics extends Component {
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
      <h1 className='code-heading'>Code Of Ethics</h1>
      <p>Institute adheres to the following Code of Conduct and Code of Professional Ethics in accordance with the University Grant Commission and Gondwana University, Gadchiroli</p>
      <div className='sections-of-conduct'>
        <h1>Teachers And Their Responsibility</h1>
        <p className='code-para'>Whoever adopts teaching as a profession assumes the obligation to conduct himself/herself in accordance with the ideal of the profession. A teacher is constantly under the scrutiny of his students and the society at large. Therefore, every teacher should see that there is no incompatibility between his precepts and practice. The national ideals of education which have already been set forth and which he/she should seek to inculcate among students must be his/her own ideals. The profession further requires that the teachers should be calm, patient and communicative by temperament and amiable in disposition. Teachers should:</p>
        <p className='code-decription'>Adhere to a responsible pattern of conduct and demeanor expected of them by the community;</p>
        <p className='code-decription'>Manage their private affairs in a manner consistent with the dignity of the profession;</p>
        <p className='code-decription'>Express free and frank opinion by participation at professional meetings, seminars, conferences, etc. towards the contribution of knowledge;</p>
        <p className='code-decription'>Seek to make professional growth continuous through study and research;</p>
        <p className='code-decription'>Maintain active membership of professional organizations and strive to improve education and profession through them;</p>
        <p className='code-decription'>Perform their duties in the form of teaching, tutorial, practical, seminar and research work conscientiously and with dedication;</p>
        <p className='code-decription'>Co-operate and assist in carrying out functions relating to the educational responsibilities of the college and the university such as: assisting in appraising applications for admission, advising and counseling students as well as assisting the conduct of university and college examinations, including supervision, invigilation and evaluation; and</p>
        <p className='code-decription'>Participate in extension, co-curricular and extra-curricular activities including community service.</p>
      </div>
      <div className='sections-of-conduct'>
        <h1>Teachers And The Students</h1>
        <p className='code-para'>Teachers should:</p>
        <p className='code-decription'>Respect the right and dignity of the student in expressing his/her opinion;</p>
        <p className='code-decription'>Recognize the difference in aptitude and capabilities among students and strive to meet their individual needs;</p>
        <p className='code-decription'>Encourage students to improve their attainments, develop their personalities and at the same time contribute to community welfare;</p>
        <p className='code-decription'>Inculcate among students a scientific outlook and respect for physical labor and ideals of democracy, patriotism and peace;</p>
        <p className='code-decription'>Pay attention to only the attainment of the student in the assessment of merit;</p>
        <p className='code-decription'>Make themselves available to the students even beyond their class hours and help and guide students without any remuneration or reward;</p>
        <p className='code-decription'>Aid students to develop an understanding of our national heritage and national goals, and</p>
        <p className='code-decription'>Refrain from inciting students against other students, colleagues or administration.</p>
      </div>
      <div className="review-bottom-section">
          <a href='https://drive.google.com/file/d/1WlCLSZ5wxSh9q7QNf2ZDdtTs-FHwcB4T/view?usp=drive_link' className="see-more" >See More in Full PDF</a>
          <a href='https://drive.google.com/file/d/1WlCLSZ5wxSh9q7QNf2ZDdtTs-FHwcB4T/view?usp=drive_link' className="see-more" ><FaLongArrowAltRight className="arrow" /></a>
          
        </div>
      <Footer />
    </div>
    
    
  );
  
  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default CodeOfEthics;
