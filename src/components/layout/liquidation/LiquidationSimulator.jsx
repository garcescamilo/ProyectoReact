//Simulador de liquidación
import './liquidationSimulator.css';
import appFirebase from '../../../../back/credenciales';
import { getAuth, signOut } from 'firebase/auth/cordova';

const auth = getAuth(appFirebase)
const LiquidationSimulator = () => {

  return (
    <div className='simuladorContainer'>
      <div>
        <button onClick={() => signOut(auth)}>salir</button>
        <h2>Simulador De Liquidación</h2>
        <div className='simuladorContent'>
          <div>
            <label htmlFor="fechaInicial">Tipo de contrato:</label>
            <input type="date" className='simuInput' id='fechaInicial' />
          </div>

          <div>
            <label htmlFor="fechaInicial">Fecha de inicio periodo a liquidar:</label>
            <input type="date" className='simuInput' id='fechaInicial' />
          </div>

          <div>
            <label htmlFor="fechaFinal">Fecha de fin periodo a liquidar:</label>
            <input type="date" className='simuInput' id='fechaFinal' />
          </div>

          <div>
            <label htmlFor="salarioMensual">Salario Mensual:</label>
            <input type="number" className='simuInput' />
          </div>

          <label>¿Tienes derecho a un auxilio de transporte? </label>
          <div className='checkTranport'>
            <div>
              <input type="checkbox" id="auxilioTransporte" className="auxilioTransporte" value="si" />
              <label htmlFor="">Sí</label>
            </div>
            <div>
              <input type="checkbox" id="auxilioTransporte" className="auxilioTransporte" value="no" />
              <label htmlFor="">No</label>
            </div>
          </div>

          <label>¿Se incluye indemnización por despido? </label>
          <div className='checkTranport'>
            <div>
              <input type="checkbox" id="auxilioTransporte" className="auxilioTransporte" value="si" />
              <label htmlFor="">Sí</label>
            </div>

            <div>
              <input type="checkbox" id="auxilioTransporte" className="auxilioTransporte" value="no" />
              <label htmlFor="">No</label>
            </div>
          </div>

          <div className='cont_btnLiquida'>
            <button className='btnLiquida'>Calcula tu liquidación</button>
          </div>
        </div>
      </div>

      <div className='dataLiqSection'>
        <h2>Liquidación laboral <span style={{ fontSize: '.7em' }}>(Resultado)</span></h2>
        <div className='dataLiquiHeadCont'>
          <div className='dataLiquidatorHead'>
            <table>
              <thead>
                <tr>
                  <th>Fecha inicio contrato</th>
                  <th>Fecha final de contrato</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/01/2023</td>
                  <td>12/31/2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='dataLiquidatorHead'>
            <table>
              <thead>
                <tr>
                  <th>Días a liquidar</th>
                  <th>Tipo de contrato</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>360</td>
                  <td>Indefinido</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='dataLiquidatorBody'>
          <table className='tableDataLiquidator'>
            <tbody>
              <tr>
                <th>CONCEPTO</th>
                <th>TOTAL</th>
              </tr>
              <tr>
                <td>Salario</td>
                <td>$1.000.000</td>
              </tr>
              <tr>
                <td>Auxiliop de transporte</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Cesantías</td>
                <td>$1.000.000</td>
              </tr>
              <tr>
                <td>Intereses sobre las cesantías</td>
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
              <tr>
                <td>TOTAL A LIQUIDAR</td>
                <td>$3.620.000</td>
              </tr>
            </tbody>
          </table>
          <div>
            <button className='btnDescargaLiquida'>Descargar</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LiquidationSimulator;
