import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsContainer from '../components/newsContainer.jsx';
import NotFound from '../components/notFound.jsx';  // Import the NotFound component

const AppRoutes = ({ 
  allArticles, 
  displayedArticles, 
  currentPage, 
  handlePageChange, 
  articlesPerPage, 
  loading
}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          
            <NewsContainer
              displayedArticles={displayedArticles}
              allArticles={allArticles}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              articlesPerPage={articlesPerPage}
              loading={loading}
            />
          
        } />
        <Route path="/404error" element={<NotFound />} /> {/* Catch-all route for 404 errors */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
