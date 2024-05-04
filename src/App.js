import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import {DarkModeContext} from './context/darkModeContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Article from './components/article/Article';
import Quests from './pages/quests/Quest';
import Maps from './pages/maps/Maps';
import './style/style.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark" : "light"}>
       <Router>
        <Header />
        <Routes> 
          <Route path="/quests" element={<Quests/>} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/" element={<Article />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
