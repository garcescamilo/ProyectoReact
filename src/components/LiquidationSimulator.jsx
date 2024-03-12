//Simulador de liquidación

import { useState } from 'react';

const LiquidationSimulator = () => {
  const [employeeData, setEmployeeData] = useState({
    salary: 0,
    startDate: '',
    endDate: '',
  });

  const [liquidationResult, setLiquidationResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCalculateLiquidation = () => {
    //implementar lógica de cálculo de liquidación
  
    setLiquidationResult('El cálculo de liquidación se mostraría aquí.');
  };

  return (
    <div>
      <h2>Simulador de Liquidación</h2>
      <form>
        <label>
          Salario:
          <input
            type="number"
            name="salary"
            value={employeeData.salary}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Fecha de Inicio:
          <input
            type="date"
            name="startDate"
            value={employeeData.startDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Fecha de Finalización:
          <input
            type="date"
            name="endDate"
            value={employeeData.endDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleCalculateLiquidation}>
          Calcular Liquidación
        </button>
      </form>
      {liquidationResult && <p>{liquidationResult}</p>}
    </div>
  );
};

export default LiquidationSimulator;
