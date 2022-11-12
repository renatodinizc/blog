import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import CreateEssay from './components/pages/CreateEssay';
import "./styles.css"

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
    <nav className="siteNavBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      { isAuth && (
        <>
          <Link to="/create">Create Essay</Link>
          <Link to="/profile">Profile</Link>
        </>
      )}
      
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile isAuth={isAuth} setIsAuth={setIsAuth} />} />
      <Route path="/create" element={<CreateEssay />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
