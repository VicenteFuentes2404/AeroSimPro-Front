import NavbarDashboard from '../components/navbarDashboard';
import '../assets/css/panel.css';

export default function Simulador() {
  return (
    <div className="sim-page">
      <NavbarDashboard />

      <main className="sim-layout">
        <section className="sim-terminal-panel">
          <div className="sim-terminal-window">
            <div className="sim-terminal-header">
              <div className="sim-terminal-left">
                <span className="sim-dot red"></span>
                <span className="sim-dot yellow"></span>
                <span className="sim-dot green"></span>
              </div>
              <div className="sim-terminal-title">AeroSim Pro — Terminal GDS / SABRE</div>
            </div>

            <div className="sim-terminal-body">
              <div className="sim-line sim-welcome">
                BIENVENIDO AL ENTRENAMIENTO DE RESERVAS Y FORMATOS SABRE
              </div>

              <div className="sim-line sim-system">TRAINING MODE ENABLED...</div>
              <div className="sim-line sim-system">SESSION STATUS: ACTIVE</div>
              <div className="sim-line sim-system">AGENT PROFILE: STUDENT MODE</div>

              <br />

              <div className="sim-line sim-command">{`> 1 15MAY SCL MIA`}</div>
              <div className="sim-line sim-result">AVAILABILITY SCL MIA 15MAY-A</div>
              <div className="sim-line sim-result">1 LA503 Y 15MAY SCLMIA 00:45 07:30+1</div>
              <div className="sim-line sim-result">2 AA1234 B 15MAY SCLMIA 01:20 09:00+1</div>
              <div className="sim-line sim-result">3 IB6789 Y 15MAY SCLMIA 02:30 10:10+1</div>

              <br />

              <div className="sim-line sim-command">{`> 01Y1`}</div>
              <div className="sim-line sim-result">SELL FROM AVAILABILITY COMPLETED</div>

              <br />

              <div className="sim-line sim-command">{`> NM1ABREU/MARLONMR`}</div>
              <div className="sim-line sim-result">NAME FIELD ADDED</div>

              <br />

              <div className="sim-line sim-command">{`> AP 998877665`}</div>
              <div className="sim-line sim-result">PHONE FIELD ADDED</div>
            </div>

            <div className="sim-terminal-inputbar">
              <span className="sim-prompt">{`>`}</span>
              <input
                type="text"
                placeholder="Escribe un comando de práctica..."
                disabled
              />
            </div>
          </div>
        </section>

        <aside className="sim-side-panel">
          <div className="sim-card">
            <h3>Objetivo de la práctica</h3>
            <p>
              Simular una búsqueda de disponibilidad, selección de vuelo
              y creación inicial de una reserva aérea en entorno de entrenamiento.
            </p>
          </div>

          <div className="sim-card">
            <h3>Comandos rápidos</h3>
            <ul className="sim-help-list">
              <li><strong>1 15MAY SCL MIA</strong> — Disponibilidad</li>
              <li><strong>01Y1</strong> — Selección de vuelo</li>
              <li><strong>NM1APELLIDO/NOMBRE</strong> — Nombre</li>
              <li><strong>AP 998877665</strong> — Teléfono</li>
              <li><strong>ER</strong> — Guardar registro</li>
            </ul>
          </div>

          <div className="sim-card">
            <h3>Estado</h3>
            <div className="sim-status-row">
              <span>Modo</span>
              <strong>Entrenamiento</strong>
            </div>
            <div className="sim-status-row">
              <span>Módulo</span>
              <strong>Reservas Aéreas</strong>
            </div>
            <div className="sim-status-row">
              <span>Terminal</span>
              <strong>Disponible</strong>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}