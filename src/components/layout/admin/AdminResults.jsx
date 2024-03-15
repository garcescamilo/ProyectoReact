import './AdminResults.css'
const AdminResults = ()=>{
    return(
        <div className='boxResults'>
            <table className='tableResults' >
                <tbody className='tbodyResults'>
                    <tr>
                        <td className='tdResults tdNombre'>Nombre</td>
                        <td className='tdResults tdId'>Identificacion</td>
                        <td className='tdResults tdCiudad'>Ciudad</td>
                        <td className='tdResults tdArea'>Area</td>
                        <td className='tdResults tdFechaI'>Fecha Ingreso</td>
                        <td className='tdResults tdFechaL'>Fecha Liquidacion</td>
                        <td className='tdResults tdSalario'>Salario Base</td>
                        <td className='tdResults tdHoras'>Horas trabajadas</td>
                        <td className='tdResults tdDedu'>Deducciones</td>
                        <td className='tdResults tdEstado'>Estado Liquidacion</td>
                        <td className='tdResults tdBorrar'>Borrar</td>
                        <td className='tdResults tdEditar'>Editar</td>
                    </tr>
                </tbody>
            </table>
           
</div>
    );
}
export default AdminResults;