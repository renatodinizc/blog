import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import CreatePost from './components/pages/CreatePost';
import "./styles.css"

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
    <nav className="siteNavBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/create">Create Post</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
