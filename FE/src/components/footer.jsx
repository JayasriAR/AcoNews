import React from 'react';

import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaXing } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-center mt-4 pt-5 py-3 text-white bg_nav">
  
      <Container>
        <Row className="text-center text-md-left">
          {/* Static Map */}
          <Col md={4} className="mb-4">
            <h5 className="poppins-semibold">Contact Us</h5>
            <ul className='list-unstyled'>
              <li className='poppins-light links_format'>support@acowale.com</li>
            </ul>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093646!2d144.95565131548414!3d-37.81732797975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e6bcb23f%3A0x58f6d5b40e93fb4e!2sVictoria!5e0!3m2!1sen!2sau!4v1637842914821!5m2!1sen!2sau"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </Col>

          {/* Links Section */}
          <Col md={4} className="mb-4">
       
          <h5 className="poppins-semibold">Quick Links</h5>
          <ul className="list-unstyled poppins-light links_format">
              <li><a href="/404error" className="text-white">Advertise with us</a></li>
             
              <li><a href="https://acowale.com/story/" className="text-white">About Us</a></li>
              
              <li><a href="/404error" className="text-white">Feedback</a></li>
              <li><a href="/404error" className="text-white">ePaper</a></li>
              <li><a href="/404error" className="text-white">Sitemap</a></li>
            </ul>
         
          
           
          
          </Col>

          <Col md={4} className="mb-4">
          <h5 className="poppins-semibold">Privacy</h5>

            <ul className="list-unstyled poppins-light links_format">
            <li><a href="https://acowale.com/privacy-policy/" className="text-white">Privacy Policy</a></li>
            <li><a href="https://acowale.com/refund-policy/" className="text-white">Refund Policy</a></li>
            </ul>
            </Col>
          
        </Row>
    

        <Row className='footer_news d-flex flex-row justify-content-center'>
        <Col lg={5} xs={10} className="py-2 d-flex flex-column align-items-center">
          <h4 className="py-1 fw-bold text-center poppins-semibold">Newsletter Sign Up</h4>
          <p className='poppins-light links_format' style={{ fontSize: '14px' }}>
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>

          {/* Desktop and larger screen form */}
          <InputGroup className="d-none d-md-flex flex-row justify-content-center">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 bg-transparent input_mail"
            />
            <Button variant="light" className="py-2 px-4 rounded-0 btn_style poppins-light">
              Submit
            </Button>
          </InputGroup>

          {/* Mobile form */}
          <Row className="my-2 d-md-none d-flex">
            <Col xs={12} className="d-flex flex-column align-items-center justify-content-center">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-transparent my-2 input_mail"
              />
            </Col>
            <Col xs={12} className="d-flex flex-column align-items-center justify-content-center my-2">
              <Button variant="light" className="py-2 px-4 rounded-0 btn_style">
                SUBMIT
              </Button>
            </Col>
          </Row>

          {/* Social media icons */}
          <Row className="d-flex align-items-center flex-wrap justify-content-center pt-4">
            <ul className="list-unstyled col-12 d-flex flex-row flex-wrap align-items-center">
              <li className="d-inline-block me-2">
              <div class="icon_li">
                <a href="/404error" className="text-white text-decoration-none foot_icon">
                  <FaFacebookF />
                </a>
                </div>
              </li>
              <li className="d-inline-block me-2">
              <div class="icon_li">
                <a href="/404error" className="text-white text-decoration-none foot_icon">
                  <FaInstagram />
                </a>
                </div>
              </li>
              <li className="d-inline-block me-2">
              <div class="icon_li">
                <a href="/404error" className="text-white text-decoration-none foot_icon">
                  <FaPinterestP />
                </a>
                </div>
              </li>
              <li className="d-inline-block me-2">
              <div class="icon_li">
                <a href="/404error" className="text-white text-decoration-none foot_icon">
                  <FaYoutube />
                </a>
                </div>
              </li>
              <li className="d-inline-block">
              <div class="icon_li">
                <a href="/404error" className="text-white text-decoration-none foot_icon">
                  <FaXing />
                </a>
                </div>
              </li>
            </ul>
          </Row>
        </Col>
      </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0 poppins-light">&copy; {new Date().getFullYear()} Acowale News. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
