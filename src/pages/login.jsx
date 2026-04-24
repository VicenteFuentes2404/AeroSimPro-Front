import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../assets/css/login.css';

const FEATURES = [
  'Simulación de reservas en tiempo real',
  'Módulos de tarifas y disponibilidad',
  'Entrenamiento certificado SABRE',
  'Historial de prácticas y progreso',
];

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.username.trim()) e.username = 'El correo es requerido';
    if (!form.password) e.password = 'La contraseña es requerida';
    return e;
  };

  const handleChange = ({ target: { name, value, type, checked } }) => {
    setForm((f) => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((e) => ({
      ...e,
      [name]: '',
    }));
  };

  const handleSubmit = () => {
    const e = validate();

    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div className="login-page">
      <Navbar />

      <div className="login-card">
        <div className="login-left">
          <div>
            <span className="tag">Acceso de Agentes</span>
          </div>

          <h2 className="login-left-title">
            Bienvenido a
            <br />
            AeroSim
            <br />
            Pro
          </h2>

          <p className="login-left-desc">
            Ingresa tus credenciales para acceder al área de entrenamiento de formatos de reserva.
          </p>

          <ul className="feature-list">
            {FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="login-right">
          <h3 className="login-form-title">Iniciar Sesión</h3>
          <p className="login-form-sub">Complete los campos y acceda a su cuenta</p>

          <div className="login-field-gap">
            <div className="field-group">
              <label className="field-label">Correo Electrónico</label>
              <input
                className={`field-input ${errors.username ? 'error' : ''}`}
                name="username"
                type="email"
                placeholder="ej. usuario@correo.com"
                value={form.username}
                onChange={handleChange}
              />
              {errors.username && <span className="field-error">{errors.username}</span>}
            </div>

            <div className="field-group">
              <label className="field-label">Contraseña</label>
              <input
                className={`field-input ${errors.password ? 'error' : ''}`}
                name="password"
                type="password"
                placeholder="••••••••••"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            <div className="login-remember-row">
              <label className="remember-label">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                Recordarme
              </label>

              <Link to="/acceder" className="forgot-link">
                ¿Ha olvidado su contraseña?
              </Link>
            </div>

            <button className="btn-red login-submit-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Ingresando...' : 'INGRESAR →'}
            </button>

            <div className="register-link">
              ¿No se encuentra registrado? <Link to="/registro">Registrarme</Link>
            </div>
          </div>

          <div className="login-powered">POWERED BY AEROSIM PRO</div>
        </div>
      </div>
    </div>
  );
}