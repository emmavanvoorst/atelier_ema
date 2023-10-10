import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import GlobalStyles from './GlobalStyles';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import BlogNavBar from './components/BlogNavBar';
import OneBlogPost from './components/OneBlogPost';



function RenderNavBar() {
  const location = useLocation();

  if (location.pathname === '/blog') {
    return <BlogNavBar />;
  } else {
    return <NavBar />;
  }
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<RenderNavBar />} />
        <Route path="/about" element={<RenderNavBar />} />
        <Route path="/blog" element={<RenderNavBar />} />
        <Route path="/login" element={<RenderNavBar />} />
        <Route path="/blog/:blogId" element={<RenderNavBar />}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/blog/:blogId" element={<OneBlogPost/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;