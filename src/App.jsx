import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import ArticlePage from './components/ArticlePage';
import TopicsList from './components/TopicsList';
import TopicPage from './components/TopicPage';
// import BadPath from './components/errors/BadPath';

const App = () => {
  return (
    <div id="App-1" className="font-nunito bg-blue-200 md:flex-row min-h-screen w-full absolute">
      <Header />
      <div id="App-2" className="p-8 px-[3%] grid grid-cols-1 min-h-max">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/topics/:topic" element={<TopicPage  />} />
          {/* <Route path="/*" element={<BadPath />}/> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;

{/* <div className="font-sans bg-[#e6a37c] flex items-center leading-relaxed w-screen overflow-y-scroll overflow-x-hidden">
  <Header />
  <NavBar />
  <main>Your main content here</main>
</div> */}