import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import CodeOfConduct from './components/CodeOfConduct';
import CodeOfEthics from './components/CodeOfEthics';
import AboutInstiude from './components/AboutInstiude'
import ManagementCommittee from './components/ManagementCommittee'
import CollegeDevelopment from './components/CollegeDevelopment'
import LocalCommittee from './components/LocalCommittee'
import PrincipalDesk from './components/PrincipalDesk'
import VicePrincipal from './components/VicePrincipal'
import UniversityAct from './components/UniversityAct'
import StudentGreivances from './components/StudentGreivances'
import Hostel from './components/Hostel'
import FeeStructure from './components/FeeStructure'
import StudentScholarship from './components/StudentScholarship'
import IndianBrouchers from './components/IndianBrouchers'
import AcademicProgram from './components/AcademicProgram'
import StructureSyllabi from './components/StructureSyllabi'
import LearningOutcome from './components/LearningOutcome'
import AdmissionBsc from './components/AdmissionBsc'
import AdmissionJunior from './components/AdmissionJunior'
import AcademicCalender from './components/AcademicCalender'
import ProspectivePlan from './components/ProspectivePlan';
import BestPractices from './components/BestPractices'
import GenderEquity from './components/GenderEquity'
import StudentFeedback from './components/StudentFeedback'
import RtiAct from './components/RtiAct'
import Physics from './components/Physics'
import Chemistry from './components/Chemistry'
import Mathematics from './components/Mathematics'
import Botany from './components/Botany'
import Zoology from './components/Zoology'
import Library from './components/Library'
import Sport from './components/Sport'
import NonTeaching from './components/NonTeaching'
import Iqac from './components/Iqac'
import Aqar from './components/Aqar'
import SelfStudy from './components/SelfStudy'
import ENote from './components/ENote'
import Institute from './components/Institute'
import ResultAnalysis from './components/ResultAnalysis'
import PostApproval from './components/PostApproval'
import UnderTaking from './components/UnderTaking'
import NotableAlumini from './components/NotableAlumini'
import IqacMinute from './components/IqacMinute'
import AluminiMeet from './components/AluminiMeet'
import Yuva from './components/Yuva'
import Naac from './components/Naac'
import './App.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/code-of-conduct" component={CodeOfConduct} />
          <Route exact path="/code-of-ethics" component={CodeOfEthics} />
          <Route exact path="/about-institute" component={AboutInstiude} />
          <Route exact path="/management-committee" component={ManagementCommittee} />
          <Route exact path="/college-development" component={CollegeDevelopment} />
          <Route exact path="/local-committee" component={LocalCommittee} />
          <Route exact path="/principal-desk" component={PrincipalDesk} />
          <Route exact path="/vice-principal-desk" component={VicePrincipal} />
          <Route exact path="/university-act" component={UniversityAct} />
          <Route exact path="/student-greivances" component={StudentGreivances} />
          <Route exact path="/hostel" component={Hostel} />
          <Route exact path="/fee-structure" component={FeeStructure} />
          <Route exact path="/student-scholarship" component={StudentScholarship} />
          <Route exact path="/indian-brouchers" component={IndianBrouchers} />
          <Route exact path="/academic-program" component={AcademicProgram} />
          <Route exact path="/structure-syllabi" component={StructureSyllabi} />
          <Route exact path="/learning-outcome" component={LearningOutcome} />
          <Route exact path="/admission-bsc" component={AdmissionBsc} />
          <Route exact path="/admission-junior" component={AdmissionJunior} />
          <Route exact path="/academic-calender" component={AcademicCalender} />
          <Route exact path="/prospective-plan" component={ProspectivePlan} />
          <Route exact path="/best-practices" component={BestPractices} />
          <Route exact path="/gender-equity" component={GenderEquity} />
          <Route exact path="/student-feedback" component={StudentFeedback} />
          <Route exact path="/rti-act" component={RtiAct} />
          <Route exact path="/physics" component={Physics} />
          <Route exact path="/chemistry" component={Chemistry} />
          <Route exact path="/mathematics" component={Mathematics} />
          <Route exact path="/botany" component={Botany} />
          <Route exact path="/zoology" component={Zoology} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/sport" component={Sport} />
          <Route exact path="/non-teaching" component={NonTeaching} />
          <Route exact path="/aqar" component={Aqar} />
          <Route exact path="/self-study" component={SelfStudy} />
          <Route exact path="/e-note" component={ENote} />
          <Route exact path="/institute" component={Institute} />
          <Route exact path="/result-analysis" component={ResultAnalysis} />
          <Route exact path="/post-approval" component={PostApproval} />
          <Route exact path="/undertaking" component={UnderTaking} />
          <Route exact path="/alumini" component={NotableAlumini} />
          <Route exact path="/iqac-minute" component={IqacMinute} />
          <Route exact path="/alumini-meet" component={AluminiMeet} />
          <Route exact path="/yuva" component={Yuva} />
          <Route exact path="/nacc" component={Naac} />
          isOpenNav={isNavOpen}
        isOpenNav={(value) => setIsNavOpen(value)}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
