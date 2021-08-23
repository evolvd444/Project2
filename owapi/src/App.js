import React, {useState, useEffect} from 'react';
import './App.css';
import Firstprofile from './components/Firstprofile';
import Finalresult from './components/Finalresult';
import Secondprofile from './components/Secondprofile';
import Header from './components/Header';


function App() {
  const [firstProfile, setFirstProfile] = useState()
  const [secondProfile, setSecondProfile] = useState()
  const [firstResult, setFirstResult] = useState()
  const [secondResult, setSecondResult] = useState()
  return (

    // <div id='topback' style = {{ backgroundimage: `url(https://cdn.wallpapersafari.com/46/34/l9FsHO.jpg)`}}>
    <div className="App">
    <div>
    <Header />
    <div/>
    <Firstprofile  firstProfile = {firstProfile} setFirstProfile= {setFirstProfile}/>
    <Secondprofile id= "second" secondProfile = {secondProfile} setSecondProfile = {setSecondProfile}/>
    <div id="first" style = {{backgroundImage: `url(https://images7.alphacoders.com/104/1046956.jpg)`}} > </div>
    </div>
   </div>
  );
}

export default App;
