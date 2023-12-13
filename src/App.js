
import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textAreaBg, setTextAreaBg] = useState("#ffffff");

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

    setBgColor(colorInput.value);
    setTextAreaBg(colorInput.value);
    document.body.style.backgroundColor = colorInput.value;

  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      setBgColor('#180449');

      setTextAreaBg('#180449');

      showAlert('Dark Mode is enabled', 'success');
      setTimeout(() => {
        document.title = 'Text Modification';
      }, 1500);
      document.title = 'Dark Mode is enabled';
    }
    else {
      setMode('light');
      setBgColor('#ffffff');
      setTextAreaBg('#ffffff');

      showAlert('Light Mode is enabled', 'success');
      setTimeout(() => {
        document.title = 'Text Modification';
      }, 1500);
      document.title = 'Light Mode is enabled';
    }

  }
  document.body.style.backgroundColor = bgColor;

  return (

    <>

      <Navbar title='Text Modification' mode={mode} toggleMode={toggleMode} colorChannels={colorChannels} />

      <Alert alert={alert} />
      <TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert} bgColor={textAreaBg} />

    </>
  );
}

export default App;
