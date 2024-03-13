//Simulador de liquidación

import { useState } from 'react';
import './liquidationSimulator.css';


const LiquidationSimulator = () => {

  return (
    <div>
      <hr />
        <h1>Simulador De Liquidación</h1>
        <div>
            <label htmlFor="fechaInicial">Fecha de inicio del periodo a liquidar:</label>
            <input type="date" id='fechaInicial'/>
            
            <label htmlFor="fechaFinal">Fecha de finalización del periodo a liquidar:</label>
            <input type="date" id='fechaFinal'/>
            
            <label htmlFor="salarioMensual">Salario Mensual:</label>
            <input type="number" />

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

            <div>
                <button className='btnLiquida'>Calcula tu liquidación</button>
            </div>
        </div>
    </div>
     
  );
};

export default LiquidationSimulator;
