import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
