import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/all-articles" element={<ArticlesList />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
