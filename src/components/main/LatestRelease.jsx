import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from "./SingleBook";
import CommentsArea from "./CommentsArea";
import Spinner from 'react-bootstrap/Spinner';


//const LatestRelease = () => {
const LatestRelease = ({ query }) => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const getBooksFromApi = async () => {
        try{
            const data = await fetch("https://epibooks.onrender.com/");
            const response = await data.json();
            setBooks(response);
        } catch (error) {
            console.log(error);
        }
        
    };

useEffect(() => {
    getBooksFromApi();
}, []);

const handleBookClick = (book) => {
    setSelectedBook(book);
  };

const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );
        return (
           <>
           {/* <SearchBar books = {books} setBooks = {setBooks} getBooks = {getBooksFromApi} /> */}
            <Container>
                <Row>
                    <Col xs = {8} className="d-flex flex-wrap gap-3"> {/* colonna di sinistra */}
                        
                    {filteredBooks &&
                        filteredBooks.map((book) => (
                                <SingleBook
                                key = {book.asin}
                                img = {book.img}
                                asin = {book.asin}
                                category = {book.category}
                                title = {book.title}
                                price = {book.price}
                                onClick={() => handleBookClick(book)}
                                    selected={book === selectedBook}
                                />
                        ))};
                    
                    </Col>
                    <Col xs = {4}> {/* colonna di destra */}
                    <h3>Comment Area</h3>
                    <Spinner animation="border" variant="danger">
          
        </Spinner><span className='visuallly-hidden'>Loading...</span>
                    <CommentsArea />
            {selectedBook && (
              <CommentsArea selectedBookAsin={selectedBook.asin} />
              )}
              
          </Col> 
                </Row>
            </Container>
         </>
        );
    
};
export default LatestRelease;