/* import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import CommentsModal from "./CommentsModal";
import CommentsArea from "./CommentsArea";
import '../main/Card.css';



const SingleBook = ({ img, asin, title, price, category }) => {
  //const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false)
  const [selected, setSelected] = useState(false);

  //const toggleCommentsModal = () => setIsCommentsModalOpen(!isCommentsModalOpen);
  const toggleSelected = () => setSelected(!selected);

  return (
    <>
      <Card style={{ width: '14rem', height: '32rem', cursor: 'pointer' }}
        onClick={toggleSelected}
        className={selected ? 'selected' : ''}
      >

        <Card.Img variant="top" src={img} height={280} style={{}} />
        <Card.Body>
          <Card.Title className="titleEllips">{title}</Card.Title>
          <Card.Title className="categoryText">Genere: {category}</Card.Title>
          <Card.Title className="priceStyle">€ {price}</Card.Title>
          <Card.Title>Cod. {asin}</Card.Title>
          <div className="d-flex flex-wrap gap-1">
            <Button
              onClick={CommentsArea}
              variant="warning">Commenti</Button>
            <Button
              onClick={''}
              variant="success">Dettagli</Button>
          </div>
        </Card.Body>

      </Card>
      /* {isCommentsModalOpen && (
        <CommentsModal asin={asin} close={toggleCommentsModal} />)} */
  //  </>
  //);
//};

// export default SingleBook; */

import React, { useState } from "react";
//import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../main/Card.css';

const SingleBook = ({ img, asin, title, price, category, onClick, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
    onClick(asin);
  };

  return (
    <Card
      style={{ width: '14rem', height: '31rem', cursor: 'pointer' }}
      onClick={toggleSelected}
      className={`single-book-card ${isSelected ? 'selected' : ''}`}
    >
      <Card.Img variant="top" src={img} height={270} />
      <Card.Body>
        <Card.Title className="titleEllips">{title}</Card.Title>
        <Card.Title className="categoryText">Genere: {category}</Card.Title>
        <Card.Title className="priceStyle">€ {price}</Card.Title>
        <Card.Title>Cod. {asin}</Card.Title>
        <div className="d-flex flex-wrap gap-1">
          <Button variant="warning">Commenti</Button>
          <Button variant="success">Dettagli</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;