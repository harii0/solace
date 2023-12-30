import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./pages/Dashboard";
import Gpt from "./pages/Gpt";
import Resource from "./pages/Resources";
import Profile from "./pages/Profile";
import Layout from "./layout/Layout";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Forget from "./auth/Forget";
import ResetPassword from "./auth/ResetPassword";


const googleapi = (import.meta.env.VITE_GOOGLE_PUBLIC_API);

function App() {
  return (
    <GoogleOAuthProvider clientId={googleapi}>
      <Router>
        <Routes>
          <Route path="/login" element={<PublicRoute>
            <Layout showSidebar={false} showNavbar={false}>
              <Login />
            </Layout>
          </PublicRoute>} />
          <Route path="/register" element={<PublicRoute>
            <Layout showSidebar={false} showNavbar={false}>
              <Register />
            </Layout>
          </PublicRoute>} />
          <Route path="/forgetpassword" element={<PublicRoute>
            <Layout showSidebar={false} showNavbar={false}>
              <Forget />
            </Layout>
          </PublicRoute>} />
          <Route path="/resetpassword/:token" element={<PublicRoute>
            <Layout showSidebar={false} showNavbar={false}>
              <ResetPassword />
            </Layout>
          </PublicRoute>} />

          <Route path="/dashboard" element={<ProtectedRoute>
            <Layout showSidebar={true} >
              <Dashboard />
            </Layout>
          </ProtectedRoute>} />

          <Route path="/chat" element={<ProtectedRoute>
            <Layout showSidebar={true}>
              <Gpt />
            </Layout>
          </ProtectedRoute>} />

          <Route path="/resource" element={<ProtectedRoute>
            <Layout showSidebar={true}>
              <Resource />
            </Layout>
          </ProtectedRoute>} />

          <Route path="/profile" element={<ProtectedRoute>
            <Layout showSidebar={true}>
              <Profile />
            </Layout>
          </ProtectedRoute>} />

          <Route path="/doctor" element={<ProtectedRoute>
            <Layout showSidebar={true}>

            </Layout>
          </ProtectedRoute>} />
          <Route path="*" element={<ProtectedRoute><Layout showSidebar={true}><Navigate to="/dashboard" /></Layout></ProtectedRoute>} />
          <Route path="*" element={<PublicRoute><Layout showSidebar={false}><Navigate to="/login" /></Layout></PublicRoute>} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
