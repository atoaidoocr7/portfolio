import './App.css';

// import About from './components/about/About';
import Intro from '../intro/Intro';
import ProjectList from '../projectList/ProjectList';
import TimeLine from '../timeline/TimeLine';
import Contact from '../contact/Contact';
import Toggle from '../modes/Toggle';
import {ThemeContext, ThemeProvider} from '../modes/context'
import { useContext } from 'react';
// import Parent from './components/skills/parent/Parent';
function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div 
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
    className="App">


      <Toggle />
      <Intro />
      {/* <About /> */}
      <ProjectList />
      <TimeLine />
      <Contact />
    </div>
  );
}

export default App;
