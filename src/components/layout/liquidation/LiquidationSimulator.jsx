import './liquidationSimulator.css';

const LiquidationSimulator = () => {
  return (<>

    <div className="simulador-container">
      <header className="simulador-header">
        <h1>Simulador de Liquidación</h1>
      </header>

      <main className="simulador-content">
        <div className="simulador-form">
          <form className='formulario-li'>
            <div className="form-group">
              <label htmlFor="tipoContrato">Tipo de contrato</label>
              <select id="tipoContrato" className="form-control">
                <option value="indefinido">Indefinido</option>
                <option value="fijo">Fijo</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fechaInicio">Fecha de inicio</label>
              <input type="date" id="fechaInicio" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="fechaFin">Fecha de fin</label>
              <input type="date" id="fechaFin" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="salarioMensual">Salario Mensual</label>
              <input type="number" id="salarioMensual" className="form-control" />
            </div>

            <div className="form-group">
              <label>Auxilio de transporte</label>
              <div className="radio-group">
                <div className="radio-option">
                  <input type="radio" id="auxilioTransporteSi" name="auxilioTransporte" value="si" />
                  <label htmlFor="auxilioTransporteSi">Sí</label>
                </div>
                <div className="radio-option">
                  <input type="radio" id="auxilioTransporteNo" name="auxilioTransporte" value="no" />
                  <label htmlFor="auxilioTransporteNo">No</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Indemnización por despido</label>
              <div className="radio-group">
                <div className="radio-option">
                  <input type="radio" id="indemnizacionSi" name="indemnizacion" value="si" />
                  <label htmlFor="indemnizacionSi">Sí</label>
                </div>
                <div className="radio-option">
                  <input type="radio" id="indemnizacionNo" name="indemnizacion" value="no" />
                  <label htmlFor="indemnizacionNo">No</label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Calcular Liquidación
            </button>
          </form>
        </div>

        <div className="simulador-resultado">
          <h2 className="result-title">Liquidación Laboral</h2>
          <div className="resultado-header">
            <div className="header-item">
              <h3>Inicio de Contrato</h3>
              <p className="header -value">01/01/2023</p>
            </div>
            <div className="header-item">
              <h3>Fin de Contrato</h3>
              <p className="header-value">12/31/2023</p>
            </div>
            <div className="header-item">
              <h3>Días a Liquidar</h3>
              <p className="header-value">360</p>
            </div>
            <div className="header-item">
              <h3>Tipo de Contrato</h3>
              <p className="header-value">Indefinido</p>
            </div>
          </div>

          <div className="resultado-body">
            <table>
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Salario</td>
                  <td>$1.000.000</td>
                </tr>
                <tr>
                  <td>Auxilio de transporte</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Cesantías</td>
                  <td>$1.000.000</td>
                </tr>
                <tr>
                  <td>Intereses sobre cesantías</td>
                  <td>$120.000</td>
                </tr>
                <tr>
                  <td>Prima</td>
                  <td>$1.000.000</td>
                </tr>
                <tr>
                  <td>Vacaciones</td>
                  <td>$500.000</td>
                </tr>
                <tr>
                  <td>Indemnización</td>
                  <td>$0</td>
                </tr>
                <tr className="total-row">
                  <th>Total a Liquidar</th>
                  <th>$3.620.000</th>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-secondary">Descargar</button>
          </div>
        </div>
      </main>
    </div>
  </>
  );
};

export default LiquidationSimulator;
