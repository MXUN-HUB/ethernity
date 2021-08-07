import './App.css';
import React, { useState, useEffect} from 'react';
import Preloader from './Components/Preloader/Preloader';
import Main from './Main';

function App() {
  useEffect(()=>{
    document.title="Ethernity";
  })
  return (
    <div className="App">
      <Preloader/>  
       
    </div>
  );
}

export default App;