import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import './App.css'

function App() {
  const isAuthenticated = localStorage.getItem('authToken') !== null;

  return (
    <Router>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/profile/*" element={<Profile isAuthenticated={isAuthenticated}/>} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h2>Home</h2>} />
      </Routes>
    </Router>
  )
}

export default App
