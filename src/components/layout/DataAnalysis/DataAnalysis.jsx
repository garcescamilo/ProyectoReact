//Analisis de datos
import './DataAnalysis.css'

const DataAnalysis = () => {
  return (
    <div className='dataContainer'>
      <div>
        <h2>Análisis de Datos - Filtros</h2>
      </div>
      <div className='dataSection'>
        <form action="">
          <div>
            <label htmlFor="fehca">Fecha inicio: </label>
            <input type="date" id="fecha" name="fecha" />
          </div>
          <div>
            <label htmlFor="fehca">Fecha fin: </label>
            <input type="date" id="fecha" name="fecha" />
          </div>
          <div>
            <label htmlFor="areas">Área: </label>
            <input type="text" id="areas" name="areas" placeholder="Ingrese las áreas" />
          </div>
          <div>
            <label htmlFor="departamento">Departamento: </label>
            <input type="text" id="departamento" name="departamento" placeholder="Ingrese el departamento" />
          </div>
          <div>
            <label htmlFor="completo">Estado: </label>
            <input type="text" id="completo" name="completo" placeholder="Ingrese el estado completo" />
          </div>
        </form>
      </div>
      <button className='btnAnaly'>Consultar</button>
      <div className='analysisResult'>
        {/* Seccion de data analisis - resultado */}
        <h2>Resultado DataAnalysis</h2>
        <div className='graphicContainer'>
          <img src="../src/assets/imgs/Grafica1.png" alt="" />
          <img src="../src/assets/imgs/grafica2.png" alt="" />
          <img src="../src/assets/imgs/grafica3.png" alt="" />
        </div>

      </div>
    </div>
  );
}

export default DataAnalysis;
