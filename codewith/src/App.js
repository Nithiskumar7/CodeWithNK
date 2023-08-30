
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


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
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'NK COLLEGE - Dark Mode';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'NK COLLEGE - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="NK COLLEGE" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>} />       */}
          {/* <Route exact path="/" element={ } /> */}
        {/* </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

