import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class CodeOfConduct extends Component {
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
      <h1 className='code-heading'>Code Of Conduct</h1>
      <p>For Principal, Teacher, Students & non-technical staff</p>
      <div className='sections-of-conduct'>
        <h1>Codes of Conduct for Principal</h1>
        <p className='code-para'>The Principal of an Institution should always be honest, fair, objective, supportive, protective and law-abiding. Besides, the following traits are expected from the Principal. He has to</p>
        <p className='code-decription'>Carry himself with the highest integrity and he has to exhibit outstanding and strong leadership skills.</p>
        <p className='code-decription'>Chalk out a policy and plan to execute the vision and mission.</p>
        <p className='code-decription'>Promote industry institution interaction and inculcate research development activities.</p>
        <p className='code-decription'>Ensure that the staff and students aware of rules, policies and procedures laid down by the college and enforce them fittingly.</p>
        <p className='code-decription'>Recommend and forward communication to the authorities.</p>
        <p className='code-decription'>Monitor, manage and educate the administration of the institution and take remedial measures/actions based on the stakeholder's feedback.</p>
        <p className='code-decription'>Execute any other qualitative and quantitative work for the welfare of the institution.</p>
        <p className='code-decription'>Listen to the student's ideas and set a supportive tone.</p>
        <p className='code-decription'>Be fair in his disciplinary actions for all the members of faculty, non-teaching staff and students.</p>
        <p className='code-decription'>Empower all his staff and students to reach their maximum potential.</p>
      </div>
      <div className='sections-of-conduct'>
        <h1>Codes of Conduct for Teacher</h1>
        <p className='code-para'>Teaching is a noble profession. It shapes the character, caliber and future of an individual. He/She can inspire, hope, ignite them and instil a love of learning among the students. Besides, the teachers have to</p>
        <p className='code-decription'>Uphold the honour and dignity of the teaching profession.</p>
        <p className='code-decription'>Provide innovative and quality education to pupils.</p>
        <p className='code-decription'>Be impartial and discriminative against students.</p>
        <p className='code-decription'>Ensure that the staff and students aware of rules, policies and procedures laid down by the college and enforce them fittingly.</p>
        <p className='code-decription'>Abide by the rules and regulations of the institution.</p>
        <p className='code-decription'>Abide by the procedures to ensure student's safety.</p>
        <p className='code-decription'>Collaborate with fellow teachers.</p>
        <p className='code-decription'>Be responsible and interact positively with parents and other stakeholders in educating the students.</p>
        <p className='code-decription'>Be good counsellors and facilitators.</p>
        <p className='code-decription'>Help, guide, encourage and assist students in their learning.</p>
      </div>
      <div className='sections-of-conduct'>
        <h1>Codes of Conduct for Students</h1>
        <p className='code-para'>Every student shall wear clean, neat and formal dress, fitted to our culture and tradition. Casual wear such as T-Shirts, shorts and jeans must be avoided.</p>
        <p className='code-decription'>During class hours a student cannot go out of the classroom without the permission of the teacher concerned. The use of mobile phones is strictly prohibited on the college campus. Students who violate this rule will have to face disciplinary action.</p>
        <p className='code-decription'>The college expects students of both sexes to foster a healthy and decent relationship both on campus and off-campus. The very spirit of co-education lies in facilitating such a relationship. Any behaviour contrary to this spirit is deemed unlawful and punishable.</p>
        <p className='code-decription'>During leisure hours, students are advised to use the library, and internet browsing centre.</p>
        <p className='code-decription'>When a teacher enters the classrooms, the students should raise and keep standing until they are asked to sit or until the teacher takes his/her seat.</p>
        <p className='code-decription'>Latecomers are forbidden from entering the classrooms.</p>
        <p className='code-decription'>Students shall move from one classroom to another or get out of the classroom in an orderly manner, without making any noise.</p>
        <p className='code-decription'>Students should bring prescribed textbooks to the classes every day. Failing which they will be sent out of the classroom.</p>
        <p className='code-decription'>Students should handle the furniture and other properties with care. Damage to the furniture will lead to penalty or suspension from college.</p>
        <p className='code-decription'>Students should stay away from any anti-social activities.</p>
        <p className='code-decription'>Students should wear their identity cards inside the campus daily.</p>
        <p className='code-decription'>Defacing the blackboards or walls will be severely dealt with.</p>
        <p className='code-decription'>Without the permission of the Principal, Students are not permitted to circulate any printed materials or pamphlets.</p>
        <p className='code-decription'>Ragging in any form is a serious offence and it will be dealt with severely.</p>
        <p className='code-decription'>Damage fee will be collected for any damage caused by them knowingly or unknowingly.</p>
        <p className='code-decription'>Visitors are not allowed to meet the students in the classrooms.</p>
        <p className='code-decription'>Students should take care of their belongings. The institution will not be responsible for any loss.</p>
      </div>
      <div className='sections-of-conduct'>
        <h1>Codes of Conduct for Non-Teaching Staff</h1>
        <p className='code-para'>The following traits are expected from the Non-teaching staff. He/She must</p>
        <p className='code-decription'>Report to duty at least 30 minutes in advance.</p>
        <p className='code-decription'>Remain on duty during college hours.</p>
        <p className='code-decription'>Adhere strictly to the laws and regulations of the college.</p>
        <p className='code-decription'>Respect and maintain the hierarchy in the Administration.</p>
        <p className='code-decription'>Maintain honesty, integrity, fairness in all activities.</p>
        <p className='code-decription'>Exercise self-discipline and restrain at all times and deal positively with staff, students and the general public</p>
        <p className='code-decription'>Must not divulge official secrets, mutilate, expunge, conceal, alter or forge official documents / receipts.</p>
        <p className='code-decription'>Must not intercept or misappropriate college money.</p>
        <p className='code-decription'>Must not be absent from duty without official approval or approved sick leave.</p>
        <p className='code-decription'>Avoid social networking sites such as Facebook, Whatsapp, etc during working hours.</p>
      </div>
      <Footer />
    </div>
    
    
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoadingView() : this.renderContent();
  }
}

export default CodeOfConduct;
