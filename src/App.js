
import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const colorChannels = () => {

    const colorInput = document.getElementById('ColorInput');
    document.body.style.backgroundColor = colorInput.value;

  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#180449';
      showAlert('Dark Mode is enabled', 'success');
      setTimeout(() => {
        document.title = 'Text Modification';
      }, 1500);
      document.title = 'Dark Mode is enabled';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is enabled', 'success');
      setTimeout(() => {
        document.title = 'Text Modification';
      }, 1500);
      document.title = 'Light Mode is enabled';
    }

  }

  return (

    <>
      <Router>
        <Navbar title='Text Modification' mode={mode} toggleMode={toggleMode} colorChannels={colorChannels} />

        <Alert alert={alert} />

        <Routes>
          <Route path='/' element={<TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert} />} />

          <Route path='/about' element={<About mode={mode} />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
