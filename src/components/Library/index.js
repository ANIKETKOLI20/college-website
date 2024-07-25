import React, { Component } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class Library extends Component {
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
        <h1 className='colllege-development-heading'>Library</h1>
        <div className='principal-container'>
          <h1 className='principal-name'>Dr. Ramesh H. Sontakke</h1>
          <img
            src='https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph'
            alt="principal"
            className='principal'
          />
          <div className="pocket-of-container">
            <div className="small-container-in-principal">
              <div className="each-principal-container">
                <p className="teacher-para">Pastions</p>
                <h1 className="each-principal-container-heading">Librarian</h1>
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

export default Library;