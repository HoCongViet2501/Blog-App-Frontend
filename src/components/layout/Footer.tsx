import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">About MyBlog</h3>
            <p className="footer-description">
              A personal blog sharing insights about technology, web development,
              design, and more. Join me on this journey of learning and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <nav className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/categories" className="footer-link">Categories</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3 className="footer-title">Categories</h3>
            <nav className="footer-links">
              <Link to="/category/technology" className="footer-link">Technology</Link>
              <Link to="/category/web-development" className="footer-link">Web Development</Link>
              <Link to="/category/design" className="footer-link">Design</Link>
              <Link to="/category/lifestyle" className="footer-link">Lifestyle</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} MyBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
