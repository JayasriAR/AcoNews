import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import '../index.css'; // Optional: for custom styling

const NotFound = () => {
  return (
    <div className="not-found-container">
        <div>
                <iframe
                  src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXV6bnJidWZ3b29uajhoNmcyZ21tczNiNGxjZ2p1c3Bza2JnbTBidSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aYpmlCXgX9dc09dbpl/giphy.gif"
                  width="480"
                  height="100%"
                  style={{ border: 'none' }}
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                  title="Giphy Embed"
                ></iframe>
              </div>
      <h1 className="error-title poppins-bold">404</h1>
      <p className="error-message popping-light">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link poppin-semibold">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
