import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import MemeLI from './MemeLI';
import IMeme from '../types/meme.interface';

type MemeArray = Array<IMeme>;
const MemeList: React.FC = () => {
  const history = useHistory();
  const [memes, setMemes] = useState<MemeArray>([]);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/meme/list');
        setMemes(response.data);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  const clickHandler = (id: string) => {
    history.push(`/meme/${id}`);
  };
  return (
    <Container>
      <Row>
        {
          error ? 'response error'
            : memes.map((meme) => (
              <MemeLI
                meme={meme}
                onClick={clickHandler}
                key={meme.id}
              />
            ))
        }
      </Row>
    </Container>
  );
};
export default MemeList;
