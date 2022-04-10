
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './componets/Navbar';
import Header from './componets/Header';
import About from './componets/About';
import Project from './componets/Project';
import Skills from './componets/Skills';
import Contact from './componets/Contact';
// import Resume from './componets/Resume';
// import {Route} from "react-router-dom";
function App() {
  return (
    <>

       <Navbar/>
       <Header/>
       <About/>
       <Project/>
       <Skills/>
       <Contact/>

       {/* <Resume/> */}
       {/* <Route exact path="/" component={Home}/>
       <Route path="/resume" component={Resume}/> */}
    </>
 
  );
}

export default App;
