import React, {useState, useEffect} from 'react';

import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get<string>("http://localhost:5000")
        setMessage(response.data)
      }  catch(e)  {
        setMessage("server response error")
      }
    }
    fetchMessage()
  })
  return (
    <div>
      server: {message}
    </div>
  );
}

export default App;
