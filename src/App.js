import './App.css';
import Education from './components/Education/Education';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';
import Experience from './components/Experience/Experience';
import Activities from './components/Activities/Activities';
import Skills from './components/Skills/Skills';
import Awards from './components/Awards/Awards';
import Certifications from './components/Certifications/Certifications';
import Interests from './components/Interests/Interests';
import ContactInfo from './components/ContactInfo/ContactInfo';

function App() {
  return (
    <div className="App">
      <Header name="JEREMY TORRES" role="GRAPHIC DESIGNER" />
      <Summary />
      <ContactInfo />

      <div className="userDetails">
        <div className='section1'>
          <div><Education /></div>
          <div><Experience /></div>
          <div><Activities /></div>
        </div>
        <div className='section2'>
          <div><Skills /></div>
          <div><Awards /></div>
          <div><Certifications /></div>
          <div><Interests /></div>




        </div>
      </div>
    </div>
  );
}

export default App;
