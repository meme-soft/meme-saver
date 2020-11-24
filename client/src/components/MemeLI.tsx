import React from 'react';
import Image from 'react-bootstrap/Image';
//  import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from 'react-bootstrap';

interface IMemeProp{
  id: string,
  name: string,
  //    description: string,
  tags: string[],
  url: string,
  //    date: Date,
  onClick(i: string):void
}

const MemeLI: React.FC<IMemeProp> = (props: IMemeProp) => {
  const {
    id,
    url,
    tags,
    name,
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
