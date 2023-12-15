
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import Register from './auth/Register'
import Mentor from './auth/Mentor'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>

    </Router>
  )
}

export default App
