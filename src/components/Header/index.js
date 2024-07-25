
import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import "react-hamburger-menus/dist/style.css";
import "./index.css";

const Header = () => {
    const history = useHistory();
    
    return (
        <div className="navbar-wrapper" style={{ display: "flex", flexDirection: 'row',width: '100vw' }}>
            <Menu
                onClick={({ key }) => {
                    history.push(key);
                }}
                mode="horizontal"
                defaultSelectedKeys={[window.location.pathname]}
                className="full-width-menu"
                items={[

                  { label: 'Home', key: '/', },
                  
                    { label: 'About', key: 'about', 
                    children:[
                      {label: 'Code of Conduct', key: '/code-of-conduct'},
                      {label: 'Code of Ethics', key: '/code-of-ethics'},
                      {label: 'About Institute', key: '/about-institute'},
                    ]

                  },
                    { label: 'Administration', key: 'administration' ,
                    children:[
                      {label: 'Management Committee', key: '/management-committee'},
                      {label: 'College Development', key: '/college-development'},
                      {label: 'Local Committee', key: '/local-committee'},
                      {label: 'Principal Desk', key: '/principal-desk'},
                      {label: 'Vice Principal', key: '/vice-principal-desk'},
                      {label: 'University Act', key: '/university-act'},
                      {label: 'Student Greivances', key: '/student-greivances'},
                    ]                  
                  

                  },
                    { label: 'Admissions', key: 'admissions',
                    children:[
                      {label: 'Hostel', key: '/hostel'},
                      {label: 'Fee Structure', key: '/fee-structure'},
                      {label: 'Student Scholarship', key: '/student-scholarship'},
                      {label: 'Indian Brouchers', key: '/indian-brouchers'},
                      {label: 'Admission Bsc', key: '/admission-bsc'},
                      {label: 'Admission Junior', key: '/admission-junior'},
                    ]   
                  
                  
                  },
                    { label: 'Academics', key: 'academics',
                  
                    children:[
                      {label: 'Academic Program', key: '/academic-program'},
                      {label: 'Structure Syllabi', key: '/structure-syllabi'},
                      {label: 'Learning Outcome', key: '/learning-outcome'},
                      {label: 'Academic Calender', key: '/academic-calender'},
                      {label: 'Prospective Plan', key: '/prospective-plan'},
                      {label: 'Best Practices', key: '/best-practices'},
                      {label: 'Gender Equity', key: '/gender-equity'},
                      {label: 'Student Feedback', key: '/student-feedback'},
                      {label: 'RTI Act', key: '/rti-act'},

                    ]   
                  },
                    { label: 'Departments', key: 'department',
                  
                    children:[
                      {label: 'Physics', key: '/physics'},
                      {label: 'Chemistry', key: '/chemistry'},
                      {label: 'Mathematics', key: '/mathematics'},
                      {label: 'botany', key: '/Botany'},
                      {label: 'Zoology', key: '/zoology'},
                      {label: 'Library', key: '/library'},
                      {label: 'Physical Education', key: '/sport'},
                      {label: 'Non Teaching Staff', key: '/non-teaching'},
                    ]   
                  
                  },
                    { label: 'NAAC', key: 'naac',
                  
                    children:[
                      {label: 'Aqar', key: '/aqar'},
                      {label: 'Self Study', key: '/self-study'},
                      {label: 'Institute', key: '/institute'},
                      {label: 'Result Analysis', key: '/result-analysis'},
                      {label: 'Post Approval', key: '/post-approval'},
                      {label: 'Undertaking', key: '/undertaking'},
                      {label: 'IQAC Minute', key: '/iqac-minute'},
                    ]   
                  
                  },
                    { label: 'Alumni', key: 'alumni',
                  
                    children:[
                      {label: 'Notable Alumini', key: '/alumini'},
                      {label: 'Alumini Meet', key: '/alumini-meet'},
                
                    ]   
                  
                  },

                  { label: 'Gallery', key: 'gallery',
                  
                    children:[
                      {label: 'Yuva', key: '/yuva'},
                      {label: 'Naac Visit', key: '/nacc'},
                      {label: 'Alumini Meet', key: '/alumini-meet'},
                
                    ]   
                  
                  },
                    { label: 'Student Resources', key: 'student-resources',
                  
                    children:[
                      {label: 'E Note', key: '/e-note'},
                    
                    ]   
                  },
                ]}
            ></Menu>
        </div>
    );
};

export default Header;



/*
import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import "react-hamburger-menus/dist/style.css";
import "./index.css";

const Header = () => {
    const history = useHistory();
    
    return (
        <div className="navbar-wrapper" style={{ display: "flex", flexDirection: 'row' }}>
            <Menu
                onClick={({ key }) => {
                    history.push(key);
                }}

                defaultSelectedKeys={[window.location.pathname]}
                items={[

                  { label: 'Home', key: '/', },
                  
                    { label: 'About', key: 'about', 
                    children:[
                      {label: 'Code of Conduct', key: '/code-of-conduct'},
                      {label: 'Code of Ethics', key: '/code-of-ethics'},
                      {label: 'About Institute', key: '/about-institute'},
                    ]

                  },
                    { label: 'Administration', key: 'administration' ,
                    children:[
                      {label: 'Management Committee', key: '/management-committee'},
                      {label: 'College Development', key: '/college-development'},
                      {label: 'Local Committee', key: '/local-committee'},
                      {label: 'Principal Desk', key: '/principal-desk'},
                      {label: 'Vice Principal', key: '/vice-principal-desk'},
                      {label: 'University Act', key: '/university-act'},
                      {label: 'Student Greivances', key: '/student-greivances'},
                    ]                  
                  

                  },
                    { label: 'Admissions', key: 'admissions',
                    children:[
                      {label: 'Hostel', key: '/hostel'},
                      {label: 'Fee Structure', key: '/fee-structure'},
                      {label: 'Student Scholarship', key: '/student-scholarship'},
                      {label: 'Indian Brouchers', key: '/indian-brouchers'},
                      {label: 'Admission Bsc', key: '/admission-bsc'},
                      {label: 'Admission Junior', key: '/admission-junior'},
                    ]   
                  
                  
                  },
                    { label: 'Academics', key: 'academics',
                  
                    children:[
                      {label: 'Academic Program', key: '/academic-program'},
                      {label: 'Structure Syllabi', key: '/structure-syllabi'},
                      {label: 'Learning Outcome', key: '/learning-outcome'},
                      {label: 'Academic Calender', key: '/academic-calender'},
                      {label: 'Prospective Plan', key: '/prospective-plan'},
                      {label: 'Best Practices', key: '/best-practices'},
                      {label: 'Gender Equity', key: '/gender-equity'},
                      {label: 'Student Feedback', key: '/student-feedback'},
                      {label: 'RTI Act', key: '/rti-act'},

                    ]   
                  },
                    { label: 'Departments', key: 'department',
                  
                    children:[
                      {label: 'Physics', key: '/physics'},
                      {label: 'Chemistry', key: '/chemistry'},
                      {label: 'Mathematics', key: '/mathematics'},
                      {label: 'botany', key: '/Botany'},
                      {label: 'Zoology', key: '/zoology'},
                      {label: 'Library', key: '/library'},
                      {label: 'Physical Education', key: '/sport'},
                      {label: 'Non Teaching Staff', key: '/non-teaching'},
                    ]   
                  
                  },
                    { label: 'NAAC', key: 'naac',
                  
                    children:[
                      {label: 'Aqar', key: '/aqar'},
                      {label: 'Self Study', key: '/self-study'},
                      {label: 'Institute', key: '/institute'},
                      {label: 'Result Analysis', key: '/result-analysis'},
                      {label: 'Post Approval', key: '/post-approval'},
                      {label: 'Undertaking', key: '/undertaking'},
                      {label: 'IQAC Minute', key: '/iqac-minute'},
                    ]   
                  
                  },
                    { label: 'Alumni', key: 'alumni',
                  
                    children:[
                      {label: 'Notable Alumini', key: '/alumini'},
                      {label: 'Alumini Meet', key: '/alumini-meet'},
                
                    ]   
                  
                  },

                  { label: 'Gallery', key: 'gallery',
                  
                    children:[
                      {label: 'Yuva', key: '/yuva'},
                      {label: 'Naac Visit', key: '/nacc'},
                      {label: 'Alumini Meet', key: '/alumini-meet'},
                
                    ]   
                  
                  },
                    { label: 'Student Resources', key: 'student-resources',
                  
                    children:[
                      {label: 'E Note', key: '/e-note'},
                    
                    ]   
                  },
                ]}
            ></Menu>
        </div>
    );
};

export default Header;

/*
<ul className="columned-list">
          <li className="header-link">
          <Link to="/about">About</Link>
          <ul>
            <li><Link to="/about/code-of-conduct">Code of Conduct</Link></li>
            <li><Link to="/about/code-of-ethics">Code of Ethics</Link></li>
          </ul>
        </li>
          <li className="header-link">
          <Link href="/"> Administration </Link></li>
          <li className="header-link">
          <Link href="/"> Admissions </Link></li>
          <li className="header-link">
          <Link href="/"> Acadmics </Link></li>
          <li className="header-link">
          <Link href="/"> Departments </Link></li>
          <li className="header-link">
          <Link href="/"> NAAC </Link></li>
          <li className="header-link">
          <Link href="/"> Alumini </Link></li>
          <li className="header-link">
          <Link href="/"> Gallery </Link></li>
          <li className="header-link">
          <Link href="/"> Student Resources </Link></li>
        </ul>
        <Menu
                onClick={({ key }) => {
                    history.push(key);
                }}
                items={[
                    { label: 'About', key: '/code-of-conduct' },
                    { label: 'Administration', key: 'administration' },
                    { label: 'Admissions', key: 'admissions' },
                    { label: 'Academics', key: 'academics' },
                    { label: 'Departments', key: 'home' },
                    { label: 'NAAC', key: 'naac' },
                    { label: 'Alumni', key: 'alumni' },
                    { label: 'Student Resources', key: 'student-resources' },
                ]}
            ></Menu>
        */