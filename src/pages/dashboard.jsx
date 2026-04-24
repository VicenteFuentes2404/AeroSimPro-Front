import { Link } from 'react-router-dom';
import NavbarDashboard from '../components/navbarDashboard';
import '../assets/css/dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-shell">
      <NavbarDashboard />

      <main className="dashboard-main-centered">
        <section className="dashboard-hero-centered">
          <p className="dashboard-welcome-centered">BIENVENIDO/A</p>
          <h1 className="dashboard-name-centered">nombre</h1>

          <div className="dashboard-terminal-wrap-centered">
            <Link to="/simulador" className="dashboard-terminal-big-btn-centered">
              INGRESA A LA TERMINAL
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}