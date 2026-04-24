import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../assets/css/home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Navbar />

      <div className="home-map" aria-hidden="true" />

      <div className="home-content">
        <span className="badge">✦ Plataforma Profesional</span>

        <h1 className="home-title">
          Bienvenido a
          <br />
          <span className="home-title-accent">AeroSim Pro</span>
        </h1>

        <p className="home-sub">
          La plataforma de entrenamiento líder para agentes de turismo.
          Domina los sistemas GDS y la reserva de vuelos con simulaciones 100% reales.
        </p>

        <button
          className="btn-red home-cta"
          onClick={() => navigate('/acceder')}
        >
          ▶ Iniciar Simulación
        </button>
      </div>
    </div>
  );
}