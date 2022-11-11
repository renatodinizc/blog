import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import CreatePost from './components/pages/CreatePost';
import "./styles.css"

function App() {
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
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
