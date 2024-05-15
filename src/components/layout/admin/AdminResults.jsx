import './AdminResults.css'


const AdminResults = () => {
    return (
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
    );
}
export default AdminResults;