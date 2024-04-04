import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { BrowserRouter as  Router,Routes,Route } from "react-router-dom";
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import About from './Components/About.js'
import ContactUS from './Components/ContactUS.js';




function App() {
  return (
    <>
       <LoginSignup/>
       <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUS />} />
        </Routes>  
      </div>
    </Router>
   </>
    
  );
}

export default App;
