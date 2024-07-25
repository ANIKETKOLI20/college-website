import React, { Component } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class IqacMinute extends Component {
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
      <h1 className='colllege-development-heading'>IQAC - Minutes of Meeting</h1>
      <h1 className='iqac-description'>IQAC - Minutes of Meeting 2021-22</h1>

      <div className='iqac-container'>
        <h1 className='his-name-heading'>Date - 28/06/2021</h1>
        <h1 className='his-name-heading'>Agenda Of Meeting</h1>
        <p>1. To discuss accepting the last meeting proposal.</p>
        <p >2. Reconstruction of IQAC</p>
        <p >3. To discuss & Planning of Session 2021-2022.</p>
        <p >4. To discuss the submission of AQAR session 2019-20 & Preparation of AQAR 2020-21.</p>
        <p >5. To discuss & Planning of Tree Plantation 2021.</p>
        <p >6. To discuss the submission of PBAS last academic session.</p>

        <h1 className='his-name-heading'>Members Present</h1>
        <p >1. Dr. GS Tomar</p>
        <p >2. Dr. R H Sontakke</p>
        <p>3. Dr. AS Margonwar marguar</p>
        <p >4. Dr. M P Singh</p>
        <p >5. Dr. Pradeep Kashyap</p>
        <p >6. Dr. Sonali Dhawas</p>
        <p >7. Dr. Dipak Nagapure</p>
        <p >8. Dr. Prakash Rathode P</p>
        <p >9. Mr. Subodh Sakhare</p>
        <p >10. Mr. Mahesh Seelamwar</p>

        <h1 className='his-name'>Resolutions</h1>

        <div className='row-container'>
          <div className="small-container-in-principal">
            <div className="small-container-in-iqac">
              <p className="teacher-para">Agenda 1</p>
              <h1 className="each-principal-container-heading">To confirm the minutes of last IQAC meeting</h1>
            </div>
          </div>
          <div className="small-container-in-principal">
            <div className="large-container-in-iqac">
              <p className="teacher-para">Resolution 1</p>
              <h1 className="each-principal-container-heading">Dr. PK Singh, Coordinator, IQAC Coordinator welcomed all the members for the meeting and presented the minutes of the last IQAC meeting. All members unanimously confirmed the minutes of the last meeting held on 12/12/2020</h1>
            </div>
          </div>
        </div>

        {/* Placeholder for Agenda 2 and Resolution 2 */}
        <div className='row-container'>
          <div className="small-container-in-principal">
            <div className="small-container-in-iqac">
              <p className="teacher-para">Agenda 2</p>
              <h1 className="each-principal-container-heading">Reconstruction of IQAC</h1>
            </div>
          </div>
          <div className="small-container-in-principal">
            <div className="large-container-in-iqac">
              <p className="teacher-para">Resolution 2</p>
              <h1 className="each-principal-container-heading">Discussion was carried out on the composition of IQAC and necessary steps are taken</h1>
            </div>
          </div>
        </div>

        {/* Placeholder for Agenda 3 and Resolution 3 */}
        <div className='row-container'>
          <div className="small-container-in-principal">
            <div className="small-container-in-iqac">
              <p className="teacher-para">Agenda 3</p>
              <h1 className="each-principal-container-heading">To discuss & Planning of Session 2021-2022.</h1>
            </div>
          </div>
          <div className="small-container-in-principal">
            <div className="large-container-in-iqac">
              <p className="teacher-para">Resolution 3</p>
              <h1 className="each-principal-container-heading">The discussion was carried out on the planning of session 2021-22 with reference to the recommendations by 'NAAC 2019.</h1>
            </div>
          </div>
        </div>

        {/* Placeholder for Agenda 4 and Resolution 4 */}
        <div className='row-container'>
          <div className="small-container-in-principal">
            <div className="small-container-in-iqac">
              <p className="teacher-para">Agenda 4</p>
              <h1 className="each-principal-container-heading">To discuss the submission of AQAR session 2019-20 & Preparation of AQAR 2020-21.</h1>
            </div>
          </div>
          <div className="small-container-in-principal">
            <div className="large-container-in-iqac">
              <p className="teacher-para">Resolution 4</p>
              <h1 className="each-principal-container-heading">All the faculty members were informed to submit the AQAR of session 2019-20 and instruction were given to them regarding preparation of AQAR of session 2021-22</h1>
            </div>
          </div>
        </div>

        {/* Placeholder for Agenda 5 and Resolution 5 */}
        <div className='row-container'>
          <div className="small-container-in-principal">
            <div className="small-container-in-iqac">
              <p className="teacher-para">Agenda 5</p>
              <h1 className="each-principal-container-heading">To discuss & Planning of Tree Plantation 2021.</h1>
            </div>
          </div>
          <div className="small-container-in-principal">
            <div className="large-container-in-iqac">
              <p className="teacher-para">Resolution 5</p>
              <h1 className="each-principal-container-heading">Discussion was held on planning of tree plantation and same has been decided to be carried by the end of July month.</h1>
            </div>
          </div>
        </div>

        {/* Placeholder for Agenda 6 and Resolution 6 */}
        <div className='row-container'>
          <div className="small-container-in-principal">
            <div className="small-container-in-iqac">
              <p className="teacher-para">Agenda 6</p>
              <h1 className="each-principal-container-heading">To discuss the submission of PBAS last academic session.</h1>
            </div>
          </div>
          <div className="small-container-in-principal">
            <div className="large-container-in-iqac">
              <p className="teacher-para">Resolution 6</p>
              <h1 className="each-principal-container-heading">The faculty members were advised to submit the PBAS as soon as possible.</h1>
            </div>
          </div>
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

export default IqacMinute;
