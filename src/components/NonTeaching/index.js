import React, { Component } from 'react';
import { FaQuoteLeft, FaQuoteRight ,FaLongArrowAltRight} from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class NonTeaching extends Component {
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
        <Header />
        <h1 className='colllege-development-heading'>Non-Teaching Staff</h1>
        <div className='principal-container'>
            <h1 className='principal-name'>Arvind M. Thute</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Head Clerk</h1>
                    </div>
            </div>
            
            </div>
            <div className='principal-container'>
            <h1 className='principal-name'>Ravindra G. Zade</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Junior Clerk</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Sandip K. Manapure</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Junior Clerk</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Rakesh M. Borginwar</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Laboratory Assistant</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Shubhangi B. Dongre</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Library Attendant</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Avinash R. Jivtode</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Laboratory Attendant</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Vijay A. Khobragade</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Laboratory Attendant</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Ramesh M. Wagaonkar</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Peon</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Devidas B. Kive</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Peon</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Usha G. Mahurpawar</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Peon</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
    
        <Footer/>
    </div>
    
  );

  render() {
    const { isLoading } = this.state;
    
    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default NonTeaching;




/* 
        <div className='code-of-conduct-container'>
        <h1>Non-Teaching Staff</h1>
        <div className='principal-container'>
            <h1 className='principal-name'>Arvind M. Thute</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Head Clerk</h1>
                    </div>
            </div>
            
            </div>
            <div className='principal-container'>
            <h1 className='principal-name'>Ravindra G. Zade</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Junior Clerk</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Sandip K. Manapure</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Junior Clerk</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Rakesh M. Borginwar</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Laboratory Assistant</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Shubhangi B. Dongre</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Library Attendant</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Avinash R. Jivtode</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Laboratory Attendant</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Vijay A. Khobragade</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Laboratory Attendant</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Ramesh M. Wagaonkar</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Peon</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Devidas B. Kive</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Peon</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
        <div className='principal-container'>
            <h1 className='principal-name'>Usha G. Mahurpawar</h1>
            <img
                src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
                alt="principal"
                className='principal'
            />
            <div className="pocket-of-container">
            <div className="small-container-in-principal">
                    <div className="each-principal-container">
                        <p className="teacher-para">Position</p>
                        <h1 className="each-principal-container-heading">Peon</h1>
                    </div>
            </div>
            
            </div>
           
        </div>
    
        <Footer/>
    </div>
*/