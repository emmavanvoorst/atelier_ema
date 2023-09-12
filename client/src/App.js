import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/blog" element = {<Blog/>}/>
        <Route path= "/about" element = {<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
