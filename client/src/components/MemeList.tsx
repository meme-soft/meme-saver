import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import MemeLI from './MemeLI';
/* eslint no-underscore-dangle: 0 */

interface IMeme{
  _id: string,
  name: string,
  description: string,
  tags: string[],
  url: string,
  date: Date,
}
type MemeArray = Array<IMeme>;
const MemeList: React.FC = () => {
  const history = useHistory();
  const [memes, setMemes] = useState<MemeArray>([]);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/memes/');
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
          error ? 'response error' : memes.map((meme) => <MemeLI tags={meme.tags} url={meme.url} name={meme.name} onClick={clickHandler} key={meme._id} id={meme._id} />)
        }
      </Row>
    </Container>
  );
};
export default MemeList;
