import './AdminDashboard.css'
//Administración de empleados
const AdminDashboard = () => {
  return (
    <div>
      {/* Admin Dashboard
      Voy a necesitar : agregar , editar , liquidar 
      id, nombre 
      para el buscar : nombre : identificacion: departamento: : puesto de trabajo: tipo de contrato
       */}
       <h1>FILTRO</h1>
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
       
    </div>
    
    

  );
}


export default AdminDashboard;
