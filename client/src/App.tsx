import React, {useState, useEffect} from 'react';

import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>()
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/memes/")
        console.log(response.data)
        setMessage(JSON.stringify(response.data))
      }  catch(e)  {
        setMessage(e.message)
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
