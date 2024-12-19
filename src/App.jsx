import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import ArticlePage from './components/ArticlePage';
import TopicsList from './components/TopicsList';
import TopicPage from './components/TopicPage';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/all-articles" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/topics/:topic" element={<TopicPage  />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
