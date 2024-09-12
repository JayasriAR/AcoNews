import React, { useState,useEffect,useContext } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import '../App.css';
import { FaSearch } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { SearchErrorContext } from '../context/searchErrorContext'; 

const NavBar = ({ handleCategoryChange, handleLangChange, lang,country, handleCountryChange, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('general'); // Add state for active category
  const [currentTime, setCurrentTime] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState(''); 
  const [searchError] = useContext(SearchErrorContext);
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (errorMessage) {
      setErrorMessage('');  // Clear error message when the user starts typing
    }
  };

  const handleSearchClick = () => {
    if (!searchQuery.trim()) {
      setErrorMessage('Please enter a search term.');
    } else if (/[^a-zA-Z0-9\s]/.test(searchQuery)) {
      setErrorMessage('Special characters are not allowed.');

    } else {
      if(searchError!==''){
        setErrorMessage(searchError)
      }
      
      handleSearch(searchQuery);
      console.log(searchQuery);
      setErrorMessage('');
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent Enter key from triggering form submission
      if (!searchQuery.trim()) {
        setErrorMessage('Please enter a search term.');
      
      } else {
        setErrorMessage('');
        handleSearch(searchQuery);
      }
    }
  };


  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update active category
    handleCategoryChange(category);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };
  return (
    <>
      <div className='poppins-bold poppins-bold-size'>aco news</div>
      <Navbar expand="lg" className="mb-4 bg_nav">
        <Navbar.Brand href="#home" className="poppins-bold mx-4 nav_brand">an</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form className='d-md-inline d-none'>
              <Form.Control
                type="text"
                placeholder="Search for articles"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="mr-2 custom-input"
              />
              {errorMessage  &&<span className="error-message poppins-light"><p>Search news by language, region</p></span>}
             
            </Form>
            <Button variant="light" className='d-md-inline d-none search_btn' onClick={handleSearchClick}>
              <FaSearch />
            </Button>
            <Form className='d-md-none d-inline'>
              <Form.Control
                type="text"
                placeholder="Search for articles"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="custom-input d-inline"
              />
              {errorMessage  &&<span className="error-message poppins-light"><p>Search news by language, region</p></span>}
              <Button variant="light" className='d-md-none d-inline search_btn ml-2' onClick={handleSearchClick}>
              <FaSearch />
            </Button>
            </Form>
            
            <Nav.Link
              onClick={() => handleCategoryClick('general')}
              className={`nav_link poppins-medium ${activeCategory === 'general' ? 'active' : ''}`}
            >
              General
            </Nav.Link>
            <Nav.Link
              onClick={() => handleCategoryClick('business')}
              className={`nav_link poppins-medium ${activeCategory === 'business' ? 'active' : ''}`}
            >
              Business
            </Nav.Link>
            <Nav.Link
              onClick={() => handleCategoryClick('technology')}
              className={`nav_link poppins-medium ${activeCategory === 'technology' ? 'active' : ''}`}
            >
              Technology
            </Nav.Link>
            <Nav.Link
              onClick={() => handleCategoryClick('entertainment')}
              className={`nav_link poppins-medium ${activeCategory === 'entertainment' ? 'active' : ''}`}
            >
              Entertainment
            </Nav.Link>
            <Nav.Link
              onClick={() => handleCategoryClick('sports')}
              className={`nav_link poppins-medium ${activeCategory === 'sports' ? 'active' : ''}`}
            >
              Sports
            </Nav.Link>
            <Nav.Link
              onClick={() => handleCategoryClick('science')}
              className={`nav_link poppins-medium ${activeCategory === 'science' ? 'active' : ''}`}
            >
              Science
            </Nav.Link>
            <Nav.Link
              onClick={() => handleCategoryClick('health')}
              className={`nav_link poppins-medium ${activeCategory === 'health' ? 'active' : ''}`}
            >
              Health
            </Nav.Link>
            <Form inline className="ml-2">
              <Form.Control
                as="select"
                value={lang}
                onChange={(e) => handleLangChange(e.target.value)}
                className="mr-sm-2 poppins-regular lang_drop"
              >
                <option value="ar">Arabic</option>
                <option value="zh">Chinese</option>
                <option value="nl">Dutch</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="he">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="ml">Malayalam</option>
                <option value="mr">Marathi</option>
                <option value="no">Norwegian</option>
                <option value="pt">Portuguese</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="es">Spanish</option>
                <option value="sv">Swedish</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="uk">Ukrainian</option>
              </Form.Control>
            
            </Form>
            
            <Form className='ml-3'>
            <div className="location-container">
            <FiMapPin className="location-icon" /> {/* Location Icon */}
            <Form.Control as="select" value={country} onChange={(e) => handleCountryChange(e.target.value)} className='form_control poppins-light country_drop'>
              
            <option value="us">United States</option>
            <option value="au">Australia</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="in">India</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="nl">Netherlands</option>
            <option value="no">Norway</option>
            <option value="pk">Pakistan</option>
            <option value="pe">Peru</option>
            <option value="ph">Philippines</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="ru">Russian Federation</option>
            <option value="sg">Singapore</option>
            <option value="es">🇪🇸 Spain</option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland</option>
            <option value="tw">Taiwan</option>
            <option value="ua">Ukraine</option>
            <option value="gb">United Kingdom</option>
          </Form.Control></div>
            </Form>
        
            <Nav.Link
              
              className={`poppins-light`}
            >
             {formatTime(currentTime)}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
