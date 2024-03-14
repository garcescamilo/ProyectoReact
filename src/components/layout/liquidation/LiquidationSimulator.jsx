//Simulador de liquidación

import { useState } from 'react';
import './liquidationSimulator.css';


const LiquidationSimulator = () => {

  return (
    <div className='simuladorContainer'>
      <div>
        <h2>Simulador De Liquidación</h2>
        <div className='simuladorContent'>
          <div>
            <label htmlFor="fechaInicial">Tipo de contrato:</label>
            <input type="date" id='fechaInicial'/>  
            </div>
          
          <div>
            <label htmlFor="fechaInicial">Fecha de inicio del periodo a liquidar:</label>
            <input type="date" id='fechaInicial'/>
            </div>

          <div>
            <label htmlFor="fechaFinal">Fecha de finalización del periodo a liquidar:</label>
            <input type="date" id='fechaFinal'/>
            </div>

          <div>
            <label htmlFor="salarioMensual">Salario Mensual:</label>
            <input type="number" />
          </div>

            <label>¿Tienes derecho a un auxilio de transporte? </label>  
            <div className='checkTranport'>
              <div>
                <input type="checkbox" id="auxilioTransporte" className="auxilioTransporte" value="si" /> 
                <label htmlFor="">Sí</label> 
              </div>
              <div>
                <input type="checkbox" id="auxilioTransporte" className="auxilioTransporte" value="no"/>  
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
                <input type="checkbox" id="auxilioTransporte" className="auxilioTransporte" value="no"/>  
                <label htmlFor="">No</label>
              </div>
            </div>

            <div>
                <button className='btnLiquida'>Calcula tu liquidación</button>
            </div>
        </div>
      </div>

      <div className='dataLiqSection'>
        <h2>Liquidación laboral</h2>
          <div className='dataLiquidatorHead'> 
            <table className='tableDataLiquidator'>
              <tbody>
                <tr>
                  <td>Fecha inicio de contrato</td>
                  <td>01/01/2023</td>
                </tr>
                <tr>
                  <td>Fecha final de contrato</td>
                  <td>12/31/2023</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Días a liquidar</td>
                  <td>360</td>
                </tr>
                <tr>
                  <td>Tipo de contrato</td>
                  <td>Indefinido</td>
                </tr>
              </tbody>
            </table>
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
                <button className='btnLiquida'>Descargar</button>
            </div>
          </div>
      </div>
    </div>
     
  );
};

export default LiquidationSimulator;
