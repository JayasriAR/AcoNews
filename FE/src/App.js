import React, { useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/navbar.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import Footer from './components/footer.jsx';
import callApiService from './services/service.js'; // Import the service
import { SearchErrorContext } from './context/searchErrorContext.js'; 
import './App.css';

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('general');
  const [lang, setLang] = useState('en');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // For general errors (like fetching top headlines)
  const [searchError, setSearchError] = useState(''); // Separate state for search errors
  const [noResults, setNoResults] = useState(false);
  const [country, setCountry] = useState('in');
  const articlesPerPage = 6;

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError('');
    setNoResults(false);
    try {
      const data = { q: searchTerm, category, lang, country };
      const response = await callApiService('get', '/aconews/top-headlines', data);

      if (response.articles.length > 0) {
        setAllArticles(response.articles);
        setCurrentPage(1);
      } else {
        setNoResults(true);
      }
    } catch (error) {
      setError('An error occurred while fetching news.');
    } finally {
      setLoading(false);
    }
  }, [searchTerm, category, lang, country]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    setDisplayedArticles(allArticles.slice(startIndex, endIndex));
  }, [allArticles, currentPage]);

  
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(allArticles.length / articlesPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    fetchNews();
  };

  const handleLangChange = (lang) => {
    setLang(lang);
    fetchNews();
  };

  const handleCountryChange = (country) => {
    setCountry(country);  // Update country
    fetchNews();
  };

  const handleSearch = async (searchQuery) => {
    setSearchTerm(searchQuery);
    setLoading(true);
    setSearchError(''); // Reset search error before new search
    try {
      const response = await callApiService('get', '/aconews/search', { q: searchQuery, lang, country });

      if (response.articles.length > 0) {
        setAllArticles(response.articles);
        setCurrentPage(1);
        setNoResults(false);
      } else if (response.message) {
       
        setSearchError('Search by valid keywords');
        setAllArticles([]); // Clear articles
      } else {
        console.log(noResults);
        console.log(error);
        
        setNoResults(true);
        setSearchError('No articles found..loading general news')
        fetchNews(); // Load top headlines if search has no results
      }
    } catch (error) {
      setSearchError('An error occurred while searching for news.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <SearchErrorContext.Provider value={searchError}>
      <Container fluid className="App">
        <NavBar
          handleCategoryChange={handleCategoryChange}
          handleLangChange={handleLangChange}
          handleCountryChange={handleCountryChange}
          lang={lang}
          country={country}
          handleSearch={handleSearch}
        />
        
        <AppRoutes
          allArticles={allArticles}
          displayedArticles={displayedArticles}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          articlesPerPage={articlesPerPage}
          loading={loading}
          handleSearch={handleSearch}
          handleCategoryChange={handleCategoryChange}
          handleLangChange={handleLangChange}
          handleCountryChange={handleCountryChange}
        />
        
        <Footer />
      </Container>
    </SearchErrorContext.Provider>
  );
}

export default App;
