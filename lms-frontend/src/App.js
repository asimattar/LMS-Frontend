import logo from './logo.svg';
import './App.css';
import './Components/About.js'
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";


function App() {
  return (
    <div >
      <Routes>
        <Route path='/about'>
        </Route>
      </Routes>
        <LoginSignup/>
    </div>
  );
}

export default App;
