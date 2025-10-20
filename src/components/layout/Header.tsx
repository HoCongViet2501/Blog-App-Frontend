import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <span className="logo-text">MyBlog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/categories" className="nav-link">
              Categories
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <Link to="/search" className="icon-button" aria-label="Search">
              <Search size={20} />
            </Link>
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/categories" className="mobile-nav-link" onClick={toggleMobileMenu}>
              Categories
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link to="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
