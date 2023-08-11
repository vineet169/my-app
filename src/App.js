import Aleart from './designhelp/Aleart';
import Nav from './designhelp/Nav';
import Textform from './designhelp/Textform';
import About from './designhelp/About';

import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
import Home from './Home';
 function App() {
const [mode, setMode] = useState('light');
const [aleart, setaleart]= useState(null);
const showaleart = (message, type)=>{
  setaleart({
    msg: message,
    type:type 
  })
  setTimeout(() => {
    setaleart(null);
  }, 1500 );
}
const toggleMode = ()=>{
  if( mode=== 'light'){
  setMode  ('dark');
  document.body.style.backgroundColor = '#230653';
  showaleart("dark mode enabled","success");
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showaleart("light mode enabled","success");
  }
  
}  
return (
    
    //  <Router>
    //  {/* <Nav tittle="Vineet"  mode= { mode } toggleMode={toggleMode}/> */}
    //  {/* <Nav title="Vineet" /> */}
    //  {/* <Aleart aleart ={aleart}/> */}
    //  <div>
    //  <Routes>
    //       {/* <Route path="./designhelp/About">
    //         <About/>
    //       </Route> */}
    //       <Route exact path="/designhelp/About" component={About} />
         
    //       {/* <Route path="/"> */}
    //       {/* <Route path="/" element= {<Textform showaleart= {showaleart} heading= "Enter text" mode={mode}/>}/> */}
          
    //       {/* </Route> */}
    //       </Routes>
    //  </div>
    //  </Router>



<div className="App">
<Nav tittle="Vineet"  mode= { mode } toggleMode={toggleMode}/> 
<Aleart aleart ={aleart}/> 
{/* <Routes> */}
  {/* <Route path="/" element={ <Home/> } /> */}
{/* <Route path="/" element= {<Textform showaleart= {showaleart} heading= "Enter text" mode={mode}/>}/> 
          
   <Route path="/About" element={ <About/> } />
  
</Routes> */}
<Textform showaleart= {showaleart} heading= "Enter text" mode={mode}/>
</div>
       
    
       
   );
}

export default App;
