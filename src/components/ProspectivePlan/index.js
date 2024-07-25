import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaLongArrowAltRight } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const ProspectivePlan = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay or fetch data here
  setTimeout(() => {
    setIsLoading(false);
  }, 2000); // Adjust the delay time as needed

  const renderLoadingView = () => (
    <div className="loading-container">
      <ThreeDots color="#0b69ff" height="50" width="50" />
    </div>
  );

  const renderContent = () => (
      <div className='code-of-conduct-container'>
      <Header />
        <h1 className='code-heading'>Prospective Plan</h1>
        <div className='prospective-container'>
          <div className='prospective-section-left'>
            <h1>Academic Plan</h1>
            <p className='prespective-para'>Our college has endeavor to strive continually towards good in academics to further creative, ethical, and social development.</p>
          </div>
        </div>
        <div className='prospective-container'>
          <div className='prospective-section-right'>
            <h1>Student Centred Approach</h1>
            <p className='prespective-para'>To enhance the existing student-friendly system, Modernization of teaching methods to synchronize with technology will ensure upgrading to new methods of teaching-learning. The emphasis will be more on experiential learning and introduction of a large number of skill-based and vocational courses.</p>
          </div>
        </div>
        <div className='prospective-container'>
          <div className='prospective-section-left'>
            <h1>Digitization of Administration</h1>
            <p className='prespective-para'>Major processes are already digitized. However, the plan is total digitization in the coming years.</p>
          </div>
        </div>
        <div className='prospective-container'>
          <div className='prospective-section-right'>
            <h1>Scholarships</h1>
            <p className='prespective-para'>The college assists students to avail of many scholarships. Efforts are underway to enable the students, particularly from the economically underprivileged sections of society, to get the maximum benefit of government scholarships.</p>
          </div>
        </div>
        <div className='prospective-container'>
          <div className='prospective-section-left'>
            <h1>Establish and Promote a Vibrant Campus Atmosphere</h1>
            <p className='prespective-para'>To ensure that students have a positive academic and campus-life experience, the College embraces a holistic approach to providing co-curricular and extracurricular activities that support the academic mission.</p>
          </div>
        </div>
        <div className='prospective-container'>
          <div className='prospective-section-right'>
            <h1>Provide Up-To-Date Facilities and Infrastructure to Enhance Academic, Co-Curricular and Extra-Curricular Programmes</h1>
            <p className='prespective-para'>To build, renovate and maintain classrooms and laboratories that allow for a variety of class sizes and teaching and learning styles. To promote, wherever possible, future growth of College infrastructure.</p>
          </div>
        </div>
        <Footer />
      </div>
    
  );

  return isLoading ? renderLoadingView() : renderContent();
};

export default ProspectivePlan;
