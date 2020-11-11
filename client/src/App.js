import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const App = (props) => {
  const [serverMessage, setServerMessage] = useState('');
  useEffect(async () => {
    try{
      const resp = await axios.get("http://localhost:5000")
      setServerMessage(resp.data);
    } catch(e) {
      setServerMessage("error from server");
    }
  }, [props]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        server message: {serverMessage}
      </div>
    </div>
  );
}

export default App;
