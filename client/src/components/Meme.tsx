import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IMeme from '../types/meme.interface';

type ParamType = {id: string};

const Meme: React.FC = () => {
  const [meme, setMeme] = useState<IMeme>({
    id: '', name: '', description: '', tags: [''], url: '', date: new Date(),
  });
  const [error, setError] = useState<boolean>(false);
  const { id } = useParams<ParamType>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/meme/${id}`);
        setMeme(response.data);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {
        error ? 'response error'
          : (
            <div>
              <Image src={meme.url} thumbnail />
              <div>{ meme.name }</div>
              <div>{ meme.description }</div>
              {
                meme.tags.map((tag, i) => <div key={i.toString()}>{ tag }</div>)
              }
              <div>{ meme.date.toString() }</div>
            </div>
          )
      }
    </>
  );
};

export default Meme;
