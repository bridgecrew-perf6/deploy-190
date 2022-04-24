
import './App.css';
import Contact from './ProfileContainer/Contact/Contact';
import Home from './ProfileContainer/Home/Home';
import AboutMe from './ProfileContainer/AboutMe/AboutMe';
import Portfolio from './ProfileContainer/Portfolio/Portfolio';
import Topbar from './ProfileContainer/Topbar/Topbar';

function App() {
  return (
    <div className="App">
    <div className='section'>
      <Topbar/>
      <Home/>
      <Portfolio/>
      <AboutMe/>
      <Contact/>
    
      </div>
    </div>
  );
}

export default App;
