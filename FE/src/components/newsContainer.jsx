import React from 'react';
import { Row, Col, Card, Button, Pagination, Spinner } from 'react-bootstrap';
import '../App.css';
import altImage from '../Images/altImage.jpg'

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const NewsContainer = ({ displayedArticles, allArticles, currentPage, handlePageChange, articlesPerPage, loading }) => {
 
  return (
    <>
    

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          {displayedArticles.length === 0 ? (
           <>
            <div className="text-center my-5 d-none d-md-block">
               <div className="text-center mt-2 error_gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBrdm9wM25wb3FmMnE0M2c2NTgzODZyNDFvNWJwdGUwajdwd2RwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kfip9Rs16TIsZKsEI4/giphy.gif" className='' alt="error"/></div>
             
            </div>
             <h4 className='poppins-semibold mt-4 text-center'>Error in loading news..Try again after few minutes</h4>
           </>
          ) : (
            <Row>
              {displayedArticles.map((article, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card className="news-item">
                  <Card.Img 
  variant="top" 
  src={article.image || altImage}  // Use a default image if article.image is null or undefined
  alt='Cannot load image'
  onError={(e) => { 
    e.target.onerror = null; // Prevents infinite loop in case the fallback image also fails
    e.target.src = {altImage}; // Fallback image if the main one fails to load
  }}
/>
                    <Card.Body>
                      <Card.Title className="poppins-semibold">{article.title}</Card.Title>
                      <Card.Text className="poppins-regular">{truncateText(article.description, 20)}</Card.Text>
                      <Button className="primary_btn mt-2 poppins-medium" href={article.url} target="_blank" rel="noopener noreferrer">
                        Read more
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          <footer className="my-4">
            <Pagination>
              <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
              {[...Array(Math.ceil(allArticles.length / articlesPerPage))].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                  className="poppins-medium"
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
            </Pagination>
          </footer>
        </>
      )}
    </>
  );
};

export default NewsContainer;
