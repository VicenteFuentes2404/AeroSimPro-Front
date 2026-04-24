import { Link, useLocation } from 'react-router-dom';
import '../assets/css/navbarDashboard.css';

export default function NavbarDashboard() {
  const location = useLocation();

  return (
    <nav className="nav-dash">
      <Link to="/dashboard" className="nav-dash-brand">
        <span className="nav-dash-brand-box">AERO</span>
        <div className="nav-dash-brand-text">
          <strong>SIM PRO</strong>
          <small>Área de Entrenamiento</small>
        </div>
      </Link>

      <div className="nav-dash-actions">
        <Link
          to="/simulador"
          className={`nav-dash-terminal-btn ${
            location.pathname === '/simulador' ? 'active' : ''
          }`}
        >
          INGRESA A LA TERMINAL
        </Link>

        <div className="nav-dash-profile" title="Perfil">
          <span className="nav-dash-avatar">👤</span>
        </div>
      </div>
    </nav>
  );
}