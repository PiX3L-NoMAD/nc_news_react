import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import ArticlePage from './components/ArticlePage';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/all-articles" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
