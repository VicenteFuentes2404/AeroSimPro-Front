import { Link, useLocation } from 'react-router-dom';
import '../assets/css/navbar.css';

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === '/' || location.pathname === '/home';
  const isRegister = location.pathname === '/registro';
  const isLogin = location.pathname === '/acceder';

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-brand">
        <span className="brand-box">AERO</span>
        <div className="brand-text">
          <strong>SIM PRO</strong>
          <small>Simulador de Reservas</small>
        </div>
      </Link>

      <div className="navbar-links">
        <Link to="/home" className={`nav-link ${isHome ? 'active' : ''}`}>
          Inicio
        </Link>

        <Link to="/registro" className={`nav-link ${isRegister ? 'active' : ''}`}>
          Registro
        </Link>

        <Link
          to="/acceder"
          className={`btn-red ${isLogin ? 'active-btn' : ''}`}
          style={{ padding: '10px 22px', fontSize: '.85rem' }}
        >
          ACCEDER
        </Link>
      </div>
    </nav>
  );
}