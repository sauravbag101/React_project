// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



// let name = "saurav";
function App() {
  const[mode,setmode] = useState('light') //whether dark mode is enabled or not
  const[alert,setalert] = useState(null);
  const showAlert =(message,type)=>{
    setalert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const togglemode = ()=>{
    if(mode=== 'light'){
    setmode('dark');
    document.body.style.backgroundColor= 'grey'
    showAlert("dark mode is enable","success")
    document.title = 'formation dark mode'
    // setInterval(() => {
    //   document.title = 'formation mode is on'
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'not working install it right now'
    // }, 3000);
    }else{
      setmode('light');
      document.body.style.backgroundColor='LightGray'
      showAlert("light mode is enable","success")
    document.title = 'formation light mode'

    }
  }
  return (
    <>
    
{/* <Navbar title = "full stack" home = "mongo db"/> */}
<Router>
<Navbar title = "formation" mode ={mode} togglemode ={togglemode}/>
<Alert  alert= {alert}/>
<div className="container">
  
<Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter here your value " mode={mode} />} />
        </Routes>  
        
  {/* <About/> */}
</div>
</Router>
    </>
    // <div className="blank">good</div>
    // <li className="name"></li>
  );
}

export default App;
