import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { PostDetailPage } from './pages/PostDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<PostDetailPage />} />
          <Route path="/category/:slug" element={<HomePage />} />
          <Route path="/tag/:slug" element={<HomePage />} />
          <Route path="/about" element={<div className="page-container"><h1>About Page</h1><p>Coming soon...</p></div>} />
          <Route path="/contact" element={<div className="page-container"><h1>Contact Page</h1><p>Coming soon...</p></div>} />
          <Route path="/categories" element={<div className="page-container"><h1>Categories Page</h1><p>Coming soon...</p></div>} />
          <Route path="/search" element={<div className="page-container"><h1>Search Page</h1><p>Coming soon...</p></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
