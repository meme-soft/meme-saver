import React from 'react';
import Image from 'react-bootstrap/Image';
import { Col } from 'react-bootstrap';
import IMeme from '../types/meme.interface';

type MemeLIProps = {meme: IMeme, onClick(id: string):void};

const MemeLI: React.FC<MemeLIProps> = (props: MemeLIProps) => {
  const {
    meme: {
      id,
      url,
      tags,
      name,
    },
    onClick,
  } = props;
  return (
    <Col style={{ minWidth: 200, maxWidth: 300 }}>
      <Image src={url} onClick={() => onClick(id)} thumbnail />
      {name}
      {
        tags.map((tag, i) => <div key={i.toString()}>{tag}</div>)
      }
    </Col>
  );
};

export default MemeLI;
