
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import Register from './auth/Register'
import Mentor from './auth/Mentor'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentor" element={<Mentor />} />
      </Routes>
    </Router>
  )
}

export default App
