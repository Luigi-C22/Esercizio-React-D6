import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import CommentsModal from "./CommentsModal";
import '../main/Card.css';
import CommentsArea from "./CommentsArea";


const SingleBook = ({ img, asin, title, price, category}) => {
 const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false)
const [selected, setSlected] = useState(false);

 const toggleCommentsModal = () => setIsCommentsModalOpen(!isCommentsModalOpen);
 const toggleSelected = () => setSlected(!selected);

  return (
    <>
      <Card  style={{ width: '13rem', height: '35rem' }}
         onClick={toggleSelected} 
         className={selected ? 'selected' : '' }
         >

        <Card.Img variant="top" src={img} height={2200}  style={{cursor: 'pointer'}}/>
        <Card.Body>
          <Card.Title className="titleEllips">{title}</Card.Title>
          <Card.Title className="categoryText">{category}</Card.Title>
          <Card.Title className="priceStyle">€ {price}</Card.Title>
          <Card.Title>Cod. {asin}</Card.Title>
          <Button 
          onClick={CommentsArea}
          variant="primary">Commenti</Button>
        </Card.Body>
      </Card>
      {/* {isCommentsModalOpen && (
        <CommentsModal asin={asin} close={toggleCommentsModal} />)} */}
    </>
  );
};

export default SingleBook;