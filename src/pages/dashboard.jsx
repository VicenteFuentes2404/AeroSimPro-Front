import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../assets/css/dashboard.css';

export default function Dashboard() {
  const userName = 'nombre';

  return (
    <div className="dashboard-shell">
      <Navbar />

      <main className="dashboard-main">
        <section className="dashboard-hero">
          <div className="dashboard-badge">Panel de Agente</div>

          <p className="dashboard-welcome">BIENVENIDO/A</p>
          <h1 className="dashboard-name">{userName}</h1>

          <p className="dashboard-desc">
            Accede a la terminal de simulación para practicar formatos de reserva,
            disponibilidad, tarifas y flujos de atención aérea.
          </p>

          <div className="dashboard-actions">
            <Link to="/simulador" className="btn-red dashboard-terminal-btn">
              INGRESAR A LA TERMINAL →
            </Link>
          </div>

          <div className="dashboard-cards">
            <article className="dashboard-card">
              <span className="dashboard-card-icon">✈</span>
              <h3>Reservas</h3>
              <p>Practica la creación y consulta de reservas simuladas.</p>
            </article>

            <article className="dashboard-card">
              <span className="dashboard-card-icon">📋</span>
              <h3>Formatos SABRE</h3>
              <p>Entrena comandos y estructuras usadas en agencias aéreas.</p>
            </article>

            <article className="dashboard-card">
              <span className="dashboard-card-icon">📈</span>
              <h3>Progreso</h3>
              <p>Visualiza tu avance dentro del simulador de entrenamiento.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}