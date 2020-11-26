import React, { useState, useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import axios from 'axios';

const ServerHealthIndicator = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get<string>('http://localhost:5000/health');
        setMessage(response.data);
      } catch (e) {
        setError(true);
      }
    };
    fetchMessage();
  });
  return (
    <div>
      server:
      <Badge variant={error ? 'danger' : 'success'}>
        {error ? 'server down' : message }
      </Badge>
    </div>
  );
};

export default ServerHealthIndicator;
