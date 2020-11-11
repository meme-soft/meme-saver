import { useEffect, useState } from 'react';

import axios from 'axios';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');
  useEffect(() => {
    const fetchHello = async () => {
      try {
        const resp = await axios.get("http://localhost:5000")
        setServerMessage(resp.data);
      } catch(e) {
        setServerMessage("error from server");
      }
    }
    fetchHello()
  }, []);

  return (
    <div>
      server message: {serverMessage}
    </div>
  );
}

export default App;
