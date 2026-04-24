import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../assets/css/register.css';

const STEPS = ['Datos personales', 'Verificación'];

const pwStrength = (pw) => {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
};

const STRENGTH_COLORS = ['#e01b2f', '#e07b1b', '#e0c01b', '#22c55e'];
const STRENGTH_LABELS = ['Muy débil', 'Débil', 'Buena', 'Fuerte'];

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirm: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const strength = pwStrength(form.password);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const e = {};

    if (!form.nombre.trim()) e.nombre = 'Requerido';
    if (!form.apellido.trim()) e.apellido = 'Requerido';

    if (!form.email.trim()) {
      e.email = 'Requerido';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = 'Email inválido';
    }

    if (!form.password) {
      e.password = 'Requerido';
    } else if (strength < 2) {
      e.password = 'La contraseña es muy débil';
    }

    if (!form.confirm) {
      e.confirm = 'Requerido';
    } else if (form.password !== form.confirm) {
      e.confirm = 'Las contraseñas no coinciden';
    }

    if (!form.terms) {
      e.terms = 'Debes aceptar los términos';
    }

    return e;
  };

  const handleSubmit = () => {
    const e = validateForm();

    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 700);
  };

  return (
    <div className="reg-page">
      <Navbar />

      <div className="reg-card">
        <div className="reg-header">
          <span className="badge">Nueva Cuenta</span>
          <h2 className="reg-title">Crear Cuenta de Agente</h2>
          <p className="reg-sub">
            Completa tus datos para acceder al simulador profesional
          </p>

          <div className="stepper">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const done = n < step;
              const current = n === step;

              return (
                <div key={label} className="step-item">
                  <div
                    className={`step-circle ${done ? 'done' : ''} ${current ? 'current' : ''}`}
                  >
                    {done ? '✔' : n}
                  </div>

                  <span
                    className={`step-label ${current ? 'current' : ''} ${done ? 'done' : ''}`}
                  >
                    {label}
                  </span>

                  {i < STEPS.length - 1 && (
                    <div className={`step-line ${done ? 'done' : ''}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="reg-body">
          {step === 1 && (
            <div className="reg-grid">
              <div className="field-group">
                <label className="field-label">Nombre</label>
                <input
                  className={`field-input ${errors.nombre ? 'error' : ''}`}
                  name="nombre"
                  placeholder="Ana"
                  value={form.nombre}
                  onChange={handleChange}
                />
                {errors.nombre && <span className="field-error">{errors.nombre}</span>}
              </div>

              <div className="field-group">
                <label className="field-label">Apellido</label>
                <input
                  className={`field-input ${errors.apellido ? 'error' : ''}`}
                  name="apellido"
                  placeholder="Pérez Muñoz"
                  value={form.apellido}
                  onChange={handleChange}
                />
                {errors.apellido && <span className="field-error">{errors.apellido}</span>}
              </div>

              <div className="field-group" style={{ gridColumn: '1/-1' }}>
                <label className="field-label">Correo Electrónico</label>
                <input
                  className={`field-input ${errors.email ? 'error' : ''}`}
                  name="email"
                  type="email"
                  placeholder="agente@agencia.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="field-group">
                <label className="field-label">Contraseña</label>
                <input
                  className={`field-input ${errors.password ? 'error' : ''}`}
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                />

                <div className="strength-bar">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="strength-seg"
                      style={{
                        background:
                          n <= strength && strength > 0
                            ? STRENGTH_COLORS[strength - 1]
                            : '#e2e8f0',
                      }}
                    />
                  ))}
                </div>

                {form.password && strength > 0 && (
                  <span
                    style={{
                      fontSize: '.75rem',
                      color: STRENGTH_COLORS[strength - 1],
                    }}
                  >
                    {STRENGTH_LABELS[strength - 1]}
                  </span>
                )}

                {errors.password && <span className="field-error">{errors.password}</span>}
              </div>

              <div className="field-group">
                <label className="field-label">Confirmar Contraseña</label>
                <input
                  className={`field-input ${errors.confirm ? 'error' : ''}`}
                  name="confirm"
                  type="password"
                  placeholder="••••••••"
                  value={form.confirm}
                  onChange={handleChange}
                />
                {errors.confirm && <span className="field-error">{errors.confirm}</span>}
              </div>

              <div className="field-group" style={{ gridColumn: '1/-1' }}>
                <label
                  className="remember-label"
                  style={{ color: '#4a5578', fontSize: '.84rem' }}
                >
                  <input
                    type="checkbox"
                    name="terms"
                    checked={form.terms}
                    onChange={handleChange}
                  />
                  Acepto los{' '}
                  <Link to="/registro" style={{ color: 'var(--red)' }}>
                    Términos y Condiciones
                  </Link>{' '}
                  y la{' '}
                  <Link to="/registro" style={{ color: 'var(--red)' }}>
                    Política de Privacidad
                  </Link>{' '}
                  de AeroSim Pro.
                </label>

                {errors.terms && <span className="field-error">{errors.terms}</span>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="verify-screen">
              <div className="verify-icon">✔</div>
              <h3>¡Cuenta creada!</h3>
              <p>
                Esta cuenta fue creada como parte de la maqueta visual del sistema.
                <br />
                Ahora ya puedes iniciar sesión.
              </p>

              <button
                className="btn-red"
                onClick={() => navigate('/acceder')}
                style={{ marginTop: 24 }}
              >
                Ir a Iniciar Sesión
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="reg-footer">
              <Link to="/acceder" className="back-link">
                ← Volver al inicio de sesión
              </Link>

              <button className="btn-red" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Creando cuenta...' : 'CREAR CUENTA →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}