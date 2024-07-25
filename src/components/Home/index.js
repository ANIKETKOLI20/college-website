import { Component } from "react"
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { FiMinusCircle } from "react-icons/fi";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Home extends Component {
    state = {isMaximisePcm:false, isMaximiseCbz:true}

    toogleButtonFirst = () => {
        const {isMaximisePcm} = this.state
        this.setState(prevState =>({isMaximisePcm:!prevState.isMaximisePcm}))
        console.log(isMaximisePcm)
    }

    toogleButtonSecond = () => {
        this.setState(prevState =>({isMaximiseCbz:!prevState.isMaximiseCbz}))
    }
    render(){
        const settings = {
            dots: true,
            slidesToShow: 1, 
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        const {isMaximisePcm,isMaximiseCbz} = this.state
        return(
               
                <div className="home-container">
                <Header/>
                <div className="home-banner">
                    <div className="banner-image">
                    <img 
                        src="https://img.freepik.com/free-photo/wide-angle-shot-schonbrunn-palace-vienna-austria-with-cloudy-blue-sky_181624-9096.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph"
                        alt="college-logo"
                        className="college-logo"
                    />
                    </div>
                    <div className="home-college-heading">
                        <p>Shri Saibaba Gramin Vikas Sanshta, Gadchiroli </p>
                        <h1 className="college-heading">SHRI SADGURU SAIBABA SCIENCE & COMMERCE COLLEGE, ASHTI-MS</h1>
                        <p>(Affilated with Gondawana University, Gadciroli , Maharashtra )</p>
                    </div>
                    <div className="num-email">
                        <p className="num-para">+91 (942)-172-1741 | </p>
                        <p className="num-para">sadguru@gmail.com</p>
                    </div>
                </div>
                <div className="home-course-info">
                    <h1 className="poster-heading">Premier Science College For Your Higher Studier </h1>
                    <p>(Accredited Grade "B" by NAAC)</p>
                    <button type="button" className="check-course-button">Check Course</button>
                </div>
                <div className="latest-update">
                    <h1 className="latest-heading">LATEST UPDATES</h1>
                    <div className="latest-container">
                        <div className="latest-top">
                        <p className="latest-para">Admission Open 20023-24 B.Sc I/B.Sc II/B.Sc III(PCM &CBZ)</p>
                        <p className="date">Date open - from dd/mm/yyyy - dd/mm/yyyy</p>
                        </div>
                        <button type="button" className="check-button">Check</button>
                    </div>
                    <div className="latest-bottom">
                    <p className="latest-para">Admission Open 20023-24(XI and XII Science)</p>
                    <p className="latest-para">Advertisement for Vacant Post March 2019</p>
                    </div>
        
                </div>
                <div className="review-section">
                   <div className="review-top-section">
                   <FaQuoteLeft  className="first-quote"/>
                    <img 
                    src="https://img.freepik.com/free-photo/portrait-young-student-with-globe-education-day_23-2150980078.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph"
                    className="reviewer-photo"
                    alt="reviewer"
                    />
                    <div className="reviewer-container">
                        <h1>I've been able to develope my Bsc graduate skills and learned how to well independently and on a team. with the support of my professor, I've been able to gain valuable career experience on and off campus.Ultimately I've becoming a strong Leader </h1>
                        <p className="reviewer-name">- Aditya</p>
                    </div>
                    <FaQuoteRight  className="second-quote" />
                   </div>
                  <div className="review-bottom-section">
                  <button type="button" className="see-more">See More</button>
                  <FaLongArrowAltRight className="arrow" />
                  </div>
                </div>
                <div className="course-offered">
                    <h1>COURSE OFFERED</h1>
                    <div className="senior-college-section-desktop">
                        <div>
                        <h1>Senior College Courses-UC</h1>
                        <p className="stream-heading">Science Streams</p>
                        <div className="group-section">
                            <div className="minimise-maximise">
                            <h1 className="group-title">Bachelors of Science in PCM </h1>
                            {isMaximisePcm ? <FiMinusCircle  className="add-minus-icon" onClick={this.toogleButtonFirst}/>: < IoAddCircle className="add-minus-icon" onClick={this.toogleButtonFirst}/>}
                            </div>
                           <div className="subject">
                            {isMaximisePcm && 
                                <div>
                                    <p  className="subject-para">Physics , Chemistry , Mathematics</p>
                                    <p className="subject-para">3 year regular program</p>
                                </div>
    }
                            <div>
                                {isMaximisePcm && 
                                <div>
                                    <button type="button" className="group-apply-button-1">Learn More</button>
                                    <button type="button" className="group-apply-button-2">Apply</button>
                                </div>
                                }
                            </div>
                           </div>
                        </div>
                        <div className="group-section">
                            <div  className="minimise-maximise">
                                <h1 className="group-title">Bachelors of Science in CBZ </h1>
                                {isMaximiseCbz ? < FiMinusCircle className="add-minus-icon" onClick={this.toogleButtonSecond}/> : < IoAddCircle FiMinusCircle className="add-minus-icon" onClick={this.toogleButtonSecond}/> }
                            </div>
                           <div className="subject">
                            {isMaximiseCbz && 
                            <div>
                                <p  className="subject-para">Chhemistry , Botany , Zoology</p>
                                <p className="subject-para">3 year regular program</p>
                            </div>
                                }
                            {isMaximiseCbz &&
                            <div>
                                <button type="button" className="group-apply-button-1">Learn More</button>
                                <button type="button" className="group-apply-button-2">Apply</button>
                            </div>
                            }
                           </div>
                        </div>
                        </div>
                        <div className="carousal-container">
          <Slider {...settings}>
            <div>
              <img
                src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                alt="Promotion 1"
                className="caro-image"
              />
            </div>
            <div >
              <img
                src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                alt="Promotion 2"
                className="caro-image"
              />
            </div>
            <div >
              <img
                src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                alt="Promotion 3"
                className="caro-image"
              />
            </div>
             </Slider>
            </div>
        </div>
        <div className="senior-college-section-mobile">
                        <div>
                        <h1>Senior College Courses-UC</h1>
                        <p className="stream-heading">Science Streams</p>
                        <Slider {...settings}>
            <div className="pic-rotate">
            <img
                src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                alt="Promotion 1"
                className="caro-image-mobile"
            />
            </div>
            <div  className="pic-rotate">
            <img
                src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                alt="Promotion 2"
                className="caro-image-mobile"
            />
            </div>
            <div  className="pic-rotate" >
              <img
                src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                alt="Promotion 3"
                className="caro-image-mobile"
              />
            </div>
             </Slider>
                <div className="group-section">
                    <div className="minimise-maximise">
                        <h1 className="group-title">Bachelors of Science in PCM </h1>
                        {isMaximisePcm ? <FiMinusCircle  className="add-minus-icon" onClick={this.toogleButtonFirst}/>: < IoAddCircle className="add-minus-icon" onClick={this.toogleButtonFirst}/>}
                    </div>
                    <div className="subject">
                    {isMaximisePcm && 
                        <div>
                            <p  className="subject-para">Physics , Chemistry , Mathematics</p>
                            <p className="subject-para">3 year regular program</p>
                        </div>
                    }
                            <div>
                                {isMaximisePcm && 
                                <div>
                                    <button type="button" className="group-apply-button-1">Learn More</button>
                                    <button type="button" className="group-apply-button-2">Apply</button>
                                </div>
                                }
                            </div>
                           </div>
                        </div>
                        <div className="group-section">
                            <div  className="minimise-maximise">
                                <h1 className="group-title">Bachelors of Science in CBZ </h1>
                                {isMaximiseCbz ? < FiMinusCircle className="add-minus-icon" onClick={this.toogleButtonSecond}/> : < IoAddCircle FiMinusCircle className="add-minus-icon" onClick={this.toogleButtonSecond}/> }
                            </div>
                           <div className="subject">
                            {isMaximiseCbz && 
                            <div>
                                <p  className="subject-para">Chhemistry , Botany , Zoology</p>
                                <p className="subject-para">3 year regular program</p>
                            </div>
                                }
                            {isMaximiseCbz &&
                            <div>
                                <button type="button" className="group-apply-button-1">Learn More</button>
                                <button type="button" className="group-apply-button-2">Apply</button>
                            </div>
                            }
                           </div>
                        </div>
                        </div>
                        <div className="carousal-container">
          
            </div>
        </div>
        <div className="senior-college-section-desktop">
                        <div>
                        <h1>Junior College Courses</h1>
                        <p className="stream-heading">Science Streams</p>
                        <div className="group-section">
                            <div className="minimise-maximise">
                            <h1 className="group-title-junior"><h1>11th Science</h1> </h1>
                            <h1 className="group-title-junior"><h1>12th Science</h1> </h1>
                            </div>
                           <div className="subject">
    
                            <div>
                                <p  className="subject-para">Physics , Chemistry , Mathematics, Biology</p>
                                <p className="subject-para">2 year regular program</p>
                            </div>
                            <div>
                                <button type="button" className="group-apply-button-3">Apply For 11th</button>
                                <button type="button" className="group-apply-button-3">Apply For 12th</button>
                            </div>
        
                           </div>
                        </div>
                        
                        </div>
                        <div className="carousal-container">
                            
                            <Slider {...settings}>
                                <div>
                                <img
                                    src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                                    alt="Promotion 1"
                                    className="caro-image"
                                />
                                </div>
                                <div >
                                <img
                                    src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                                    alt="Promotion 2"
                                    className="caro-image"
                                />
                                </div>
                                <div >
                                <img
                                    src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                                    alt="Promotion 3"
                                    className="caro-image"
                                />
                                </div>
                            </Slider>
        </div>
                    </div>
                    <div className="senior-college-section-mobile">
                        <div>
                        <h1>Junior College Courses</h1>
                        <p className="stream-heading">Science Streams</p>
                        <Slider {...settings}>
            <div className="pic-rotate">
            <img
                src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                alt="Promotion 1"
                className="caro-image-mobile"
            />
            </div>
            <div  className="pic-rotate">
            <img
                src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                alt="Promotion 2"
                className="caro-image-mobile"
            />
            </div>
            <div  className="pic-rotate" >
              <img
                src="https://img.freepik.com/free-vector/flat-prom-background_23-2149370326.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=ais"
                alt="Promotion 3"
                className="caro-image-mobile"
              />
            </div>
             </Slider>
             <div className="group-section">
                            <div className="minimise-maximise">
                            <h1 className="group-title-junior"><h1>11th Science</h1> </h1>
                            <h1 className="group-title-junior"><h1>12th Science</h1> </h1>
                            </div>
                           <div className="subject">
    
                            <div>
                                <p  className="subject-para">Physics , Chemistry , Mathematics, Biology</p>
                                <p className="subject-para">2 year regular program</p>
                            </div>
                            <div>
                                <button type="button" className="group-apply-button-3">Apply For 11th</button>
                                <button type="button" className="group-apply-button-3">Apply For 12th</button>
                            </div>
        
                           </div>
                        </div>
                        </div>
                        <div className="carousal-container">
          
            </div>
        </div>
    </div>
    <div className="review-section">
                   <div className="review-top-section">
                   <FaQuoteLeft  className="first-quote"/>
                    <img 
                    src="https://img.freepik.com/free-photo/portrait-young-student-with-globe-education-day_23-2150980078.jpg?size=626&ext=jpg&ga=GA1.1.176961903.1661757094&semt=sph"
                    className="reviewer-photo"
                    alt="reviewer"
                    />
                    <div className="reviewer-container">
                        <h1>I've been able to develope my Bsc graduate skills and learned how to well independently and on a team. with the support of my professor, I've been able to gain valuable career experience on and off campus.Ultimately I've becoming a strong Leader </h1>
                        <p className="reviewer-name">- Aditya</p>
                    </div>
                    <FaQuoteRight  className="second-quote" />
                   </div>
                  <div className="review-bottom-section">
                  <button type="button" className="see-more">See More</button>
                  <FaLongArrowAltRight className="arrow" />
                  </div>
                </div>
                <Footer/>
                
</div>
           
        )
    }
}



export default Home