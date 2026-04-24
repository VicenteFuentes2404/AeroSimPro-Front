import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Simulador from './pages/simulador';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/acceder" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/simulador" element={<Simulador />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}