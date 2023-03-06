import React from 'react';
import './index.css'
import './App.css';
import FirstScreen from './components/FirstScreen/FirstScreen';
import SecondScreen from './components/SecondSreen/SecondScreen';
import ThirdScreen from './components/ThirdScreen/ThirdScreen';
import FourScreen from './components/FourScreen/FourScreen';
import FiveScreen from './components/FiveScreen/FiveScreen';

function App () {
  return (
    <div className="body_wrapper">
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourScreen />
      <FiveScreen />
    </div>
  );
}

export default App;