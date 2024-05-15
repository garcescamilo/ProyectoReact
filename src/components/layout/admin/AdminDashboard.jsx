import './AdminDashboard.css'
import './AdminResults.css'

//Administración de empleados
const AdminDashboard = () => {
  return (
    <div className='dashboardFilter'>
      {/* Admin Dashboard
      Voy a necesitar : agregar , editar , liquidar 
      id, nombre 
      para el buscar : nombre : identificacion: departamento: : puesto de trabajo: tipo de contrato
       */}
      <h2>Consultar empleados</h2>
      <div className="box-filter">
        <div className='filter filterName'>
          <input className='inputFilter' type="text" placeholder="Nombre" />
        </div>

        <div className='filter filterId'>
          <input className='inputFilter' type="number" placeholder="Identificacion" />
        </div>

        <div className='filter filterDepart'>
          <input className='inputFilter' type="text" placeholder="Ciudad" />
        </div>

        <div className='filter filterArea'>
          <input className='inputFilter' type="text" placeholder="Area" />
        </div>

        <div className='filter filterContrato'>
          <input className='inputFilter' type="text" placeholder="Contrato" />
        </div>

        <div>
          <button className='btnFilter'>Filtrar</button>
        </div>
      </div>

      <div className='boxResults'>
        <table className='tableResults'>
          <thead>
            <tr>
              <th className='tdResults tdNombre'>Acciones</th>
              <th className='tdResults tdNombre'>Nombre</th>
              <th className='tdResults tdId'>Identificacion</th>
              <th className='tdResults tdCiudad'>Ciudad</th>
              <th className='tdResults tdArea'>Area</th>
              <th className='tdResults tdFechaI'>Fecha Ingreso</th>
              <th className='tdResults tdFechaL'>Fecha Liquidacion</th>
              <th className='tdResults tdSalario'>Salario Base</th>
              <th className='tdResults tdHoras'>Horas trabajadas</th>
              <th className='tdResults tdDedu'>Deducciones</th>
              <th className='tdResults tdEstado'>Estado Liquidacion</th>
            </tr>
          </thead>
          <tbody className='tbodyResults'>
            <tr>
              <td className='tdResults tdNombre'>Edita/Borrar</td>
              <td className='tdResults tdNombre'>Juan Pérez</td>
              <td className='tdResults tdId'>123456789</td>
              <td className='tdResults tdCiudad'>Bogotá</td>
              <td className='tdResults tdArea'>Ventas</td>
              <td className='tdResults tdFechaI'>2023-01-15</td>
              <td className='tdResults tdFechaL'>2023-06-30</td>
              <td className='tdResults tdSalario'>$2000</td>
              <td className='tdResults tdHoras'>160</td>
              <td className='tdResults tdDedu'>$200</td>
              <td className='tdResults tdEstado'>Pagado</td>
            </tr>
            <tr>
              <td className='tdResults tdNombre'>Edita/Borrar</td>
              <td className='tdResults tdNombre'>María Rodríguez</td>
              <td className='tdResults tdId'>987654321</td>
              <td className='tdResults tdCiudad'>Medellín</td>
              <td className='tdResults tdArea'>Administración</td>
              <td className='tdResults tdFechaI'>2022-11-01</td>
              <td className='tdResults tdFechaL'>2023-07-15</td>
              <td className='tdResults tdSalario'>$2500</td>
              <td className='tdResults tdHoras'>150</td>
              <td className='tdResults tdDedu'>$300</td>
              <td className='tdResults tdEstado'>Pendiente</td>
            </tr>
          </tbody>
        </table>


      </div>

    </div>



  );
}


export default AdminDashboard;
