import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import CreateEssay from './components/pages/CreateEssay';
import Profile from './components/pages/Profile';
import Logout from './components/pages/Logout';
import { auth } from "./firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import ProtectedRoute from './ProtectedRoute';

import "./styles.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('loading');
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setIsLoggedIn(currentUser ? 'logged' : 'notLogged');
    setUser(currentUser);
  });

  return (
    <BrowserRouter>
      <nav className="siteNavBar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        { user && (
          <>
            <Link to="/create">CreateEssay</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/logout">SignOut</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={ isLoggedIn === 'logged' ? <Navigate to="/profile" /> : <Login user={user} />} />
        <Route path="/profile"
          element={
          <ProtectedRoute isLoggedIn={isLoggedIn} >
            <Profile user={user} />
          </ProtectedRoute>
          }
        />
        <Route path="/create"
          element={
          <ProtectedRoute isLoggedIn={isLoggedIn} >
            <CreateEssay user={user} />
          </ProtectedRoute>
          }
        />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
