import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import './App.css'

function App() {

  return (
    <>
    <Router>
    <div className=' max-auto pt-30'>
      <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="about" element={<About/> } />
      <Route path="/list" element={<ArticleList/> } />
      <Route path="article" element={<Article/> } />
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
