import {Component} from 'react';
import { MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import './index.css';

class Footer extends Component {

  state = {isButtonMenu:false,isButtonLinks:false,isOpening:false ,address:false}

  miximiseButton = () => {
    const {isButtonClick} = this.state
    this.setState(prevState =>({isButtonClick:!prevState.isButtonClick}))
    console.log(isButtonClick)
  }

  miximiseButtonLinks = () => {
    const {isButtonLinks} = this.state
    this.setState(prevState =>({isButtonLinks:!prevState.isButtonLinks}))
    console.log(isButtonLinks)
  }

  miximiseButtonOpening  = () => {
    const {isOpening} = this.state
    this.setState(prevState =>({isOpening:!prevState.isOpening}))
    console.log(isOpening)
  }

  addressClicked  = () => {
    const {address} = this.state
    this.setState(prevState =>({address:!prevState.address}))
    console.log(address)
  }

  render(){
    const {isButtonClick,isButtonLinks,isOpening,address} = this.state
    return(
      <div className='footer-section'>
      <div className="footer-container">
      <div className='individual'>
        <h1>Menu</h1>
        <ul className='footer-ul'>
          <li>
            <p className='footer-para'>About</p>
          </li>
          <li>
            <p className='footer-para'>Administration</p>
          </li>
          <li>
            <p className='footer-para'>Admissions</p>
          </li>
          <li>
            <p className='footer-para'>Acadmics</p>
          </li>
          <li>
            <p className='footer-para'>Departments</p>
          </li>
          <li>
            <p className='footer-para'>NAAC</p>
          </li>
          <li>
            <p className='footer-para'>Alumini</p>
          </li>
          <li>
            <p className='footer-para'>Gallery</p>
          </li>
          <li>
            <p className='footer-para'>Student Resources</p>
          </li>
        </ul>
      </div>
      <div className='individual'>
          <h1>Quick Links</h1>
          <ul className='footer-ul'>
              <li>
              <p className='footer-para'>Vision</p>
              </li>
              <li>
              <p className='footer-para'>Mission</p>
              </li>
              <li>
              <p className='footer-para'>Acadmic Calender</p>
              </li>
              
          </ul>
      </div>
      <div className='individual'>
        <h1>Opening Hours</h1>
        <ul className='footer-ul'>
              <li>
              <p className='footer-para'>Monday-Saturday (10AM-5PM)</p>
              </li>
              <div className='address'>
                <MdLocationPin className='loco-icon' /> 
                <p className='address-para'>Ashti , Tah Chamorshi , Dist Gadchiroli Maharashtra , India - 442707</p>
              </div>
              <div className='address'>
                <IoMdCall className='call-icon' /> 
                <p className='address-para'>For Admission contact us-</p><br/>
              </div>
              <div className='contact-container'>
              <p className='contact-para'>+91 - 9421721741</p>
              <p className='contact-para'>+91 - 9421721741</p>
              <p className='contact-para'>+91 - 9421721741(Fax)</p>
              <p className='contact-para'>sadguru@gmail.com</p>
              </div>
              <div className='social-platform'>
              <AiFillFacebook className='social-icon' />
              <AiFillFacebook className='social-icon' />
              <FaYoutube className='social-icon' />
              <MdEmail className='social-icon' />
              </div>
          </ul>
        
      </div>
      <div className='last-footer'>
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-schonbrunn-palace-vienna-austria-with-cloudy-blue-sky_181624-9096.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph"
          alt="college-logo"
          className="footer-college-logo"
        />
      </div>
    </div>
    <div className='footer-for-small'>
          <div className='footer-bar' onClick={this.miximiseButton}>
            <button type='button' className='footer-button'>
              Menu
            </button>
           {isButtonClick ? <IoIosArrowUp /> : <IoIosArrowDown /> }
          </div>
          {isButtonClick && 
              <div className='footer-sub-bar'>
                   <ul className='footer-ul'>
          <li>
            <p className='footer-para-small'>About</p>
          </li>
          <li>
            <p className='footer-para-small'>Administration</p>
          </li>
          <li>
            <p className='footer-para-small'>Admissions</p>
          </li>
          <li>
            <p className='footer-para-small'>Acadmics</p>
          </li>
          <li>
            <p className='footer-para-small'>Departments</p>
          </li>
          <li>
            <p className='footer-para-small'>NAAC</p>
          </li>
          <li>
            <p className='footer-para-small'>Alumini</p>
          </li>
          <li>
            <p className='footer-para-small'>Gallery</p>
          </li>
          <li>
            <p className='footer-para-small'>Student Resources</p>
          </li>
        </ul>
              </div>  
            
            }

<div className='footer-bar' onClick={this.miximiseButtonLinks}>
            <button type='button' className='footer-button'>
              Quick Links
            </button>
           {isButtonLinks ? <IoIosArrowUp /> : <IoIosArrowDown /> }
          </div>
          {isButtonLinks && 
              <div className='footer-sub-bar'>
                   <ul className='footer-ul'>
          <li>
            <p className='footer-para-small'>Vision</p>
          </li>
          <li>
            <p className='footer-para-small'>Mission</p>
          </li>
          <li>
            <p className='footer-para-small'>Academic Calender</p>
          </li>
        </ul>
              </div>  
            
            }
             <div className='footer-bar' onClick={this.miximiseButtonOpening}>
            <button type='button' className='footer-button'>
              Opening Hours
            </button>
           {isOpening ? <IoIosArrowUp /> : <IoIosArrowDown /> }
          </div>
          {isOpening && 
              <div className='footer-sub-bar'>
                   <ul className='footer-ul'>
          <li>
            <p className='footer-para-small'>Monday-Saturday (10AM-5PM)</p>
          </li>
         
        </ul>
              </div>  
            
            }
            <div className='footer-bar' onClick={this.addressClicked}>
            <button type='button' className='footer-button'>
              Address and Contact
            </button>
           {isOpening ? <IoIosArrowUp /> : <IoIosArrowDown /> }
          </div>
          {address && 
              <div className='footer-sub-bar'>
                   <ul className='footer-ul'>
                    <li>
                    <p className='footer-para-small'>Ashti , Tah Chamorshi , Dist Gadchiroli Maharashtra , India - 442707</p>
                      <p className='footer-para-small'>91 - 9421721741</p>
                      <p className='footer-para-small'>91 - 9421721741</p>
                      <p className='footer-para-small'>91 - 9421721741(Fax)</p>
                      <p className='footer-para-small'>sadguru@gmail.com</p>
    
                    </li>
         
                  </ul>
              </div>  
            
            }

      
      
      </div>
    </div>
    )
  }
} 

export default Footer;
