import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import Contact from './pages/Contact';
import Error from './pages/Error';
import './App.css'

function App() {

  return (
    <>
    <Router>
    <div >
      <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/about" element={<About/> } />
      <Route path="/contact" element={<Contact/> } />
      <Route path="/list" element={<ArticleList/> } />
      <Route path="/article/:name" element={<Article/> } />
      <Route path="*" element={<Error/> } />
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
