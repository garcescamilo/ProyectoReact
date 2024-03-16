//Analisis de datos
import './DataAnalysis.css'

const DataAnalysis = () => {
  return (
    <div>
        <div>
          <h2>Análisis de Datos - Filtros</h2>
        </div>
        <div>
          <form action="">
            <label htmlFor="fehca">Fecha: </label>
            <input type="text" id="fecha" name="fecha" placeholder="Ingrese la fecha..." />

            <label htmlFor="areas">Area: </label>
            <input type="text" id="areas" name="areas" placeholder="Ingrese las áreas..." />

            <label htmlFor="departamento">Departamento: </label>
            <input type="text" id="departamento" name="departamento" placeholder="Ingrese el departamento..." />

            <label htmlFor="completo">Completo: </label>
            <input type="text" id="completo" name="completo" placeholder="Ingrese el estado completo..." />

            <button className='btnAnaly'>Enviar</button>
          </form>
        </div>
    </div>
  );
}

export default DataAnalysis;
