import React, {useState, useEffect} from 'react';

import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<String>('')
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get<String>("http://localhost:5000")
        setMessage(response.data)
      }  catch(e)  {
        setMessage(e)
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
