//Creación de empleados
import './Create.css'
const CreateAdmin = () => {
    return (
      <div>
            <h1>CALCULADORA DE LIQUIDACIÓN</h1>
            <div>
                <button className='btnCreate'>Ir al siguiente formulario</button>
            </div>
            <div className="container">
                <div className="section">
                    <h2>EMPLEADO</h2>
                    <div className="form-group">
                        <label htmlFor="nombres">Nombres y Apellidos:</label><br />
                        <input type="text" id="nombres" name="nombres" /><br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipo_documento">Tipo de Documento:</label><br />
                        <select id="tipo_documento" name="tipo_documento">
                            <option value="CC">Cédula de Ciudadanía</option>
                            <option value="CE">Cédula de Extranjería</option>
                            <option value="P">Pasaporte</option>
                            <option value="RC">Registro Civil</option>
                        </select><br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numero_documento">Número de Documento:</label><br />
                        <input type="text" id="numero_documento" name="numero_documento" /><br />
                    </div>
                </div>
                <div className="section">
                    <h2>EMPLEADOR</h2>
                    <div className="form-group">
                        <label htmlFor="razon_social">Razón Social:</label><br />
                        <input type="text" id="razon_social" name="razon_social" /><br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipo_documento_empleador">Tipo de Documento:</label><br />
                        <select id="tipo_documento_empleador" name="tipo_documento_empleador">
                            <option value="NIT">NIT</option>
                            <option value="CC">Cédula de Ciudadanía</option>
                        </select><br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numero_documento_empleador">Número de Documento:</label><br />
                        <input type="text" id="numero_documento_empleador" name="numero_documento_empleador" /><br />
                    </div>
                </div>
            </div>
            <div>
                <div className="section">
                    <h2>LIQUIDACIÓN</h2>
                    <div className="form-group">
                        <label htmlFor="motivo_liquidacion">Motivo de Liquidación:</label><br />
                        <input type="text" id="motivo_liquidacion" name="motivo_liquidacion" /><br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="periodo_prueba">Período de Prueba:</label><br />
                        <select id="periodo_prueba" name="periodo_prueba">
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select><br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="indemnizacion_despido">Indemnización por Despido:</label><br />
                        <select id="indemnizacion_despido" name="indemnizacion_despido">
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select><br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipo_contrato">Tipo de Contrato:</label><br />
                        <select id="tipo_contrato" name="tipo_contrato">
                            <option value="Indefinido">Indefinido</option>
                            <option value="Fijo">Fijo</option>
                        </select><br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salario_integral">Salario Integral:</label><br />
                        <select id="salario_integral" name="salario_integral">
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select><br />
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="section">
                        <h2>PERIODO DE LIQUIDACIÓN</h2>
                        <div className="form-group">
                            <label htmlFor="fecha_contratacion">Fecha de Contratación:</label><br />
                            <input type="date" id="fecha_contratacion" name="fecha_contratacion" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha_liquidacion">Fecha de Liquidación:</label><br />
                            <input type="date" id="fecha_liquidacion" name="fecha_liquidacion" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dias_liquidar">Días a Liquidar:</label><br />
                            <input type="number" id="dias_liquidar" name="dias_liquidar" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dias_vacaciones_pendientes">Días de Vacaciones Pendientes de Pago:</label><br />
                            <input type="number" id="dias_vacaciones_pendientes" name="dias_vacaciones_pendientes" /><br />
                        </div>
                    </div>
                    <div className="section">
                        <div>
                            <h2>SALARIO BASE DE LIQUIDACIÓN</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="salario_base">Salario Base:</label><br />
                            <input type="number" id="salario_base" name="salario_base" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="otros_ingresos">Otros Ingresos Mensuales:</label><br />
                            <input type="number" id="otros_ingresos" name="otros_ingresos" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="base_liquidacion">Base de Liquidación:</label><br />
                            <input type="number" id="base_liquidacion" name="base_liquidacion" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prestamo_pendiente">Préstamo Pendiente:</label><br />
                            <input type="number" id="prestamo_pendiente" name="prestamo_pendiente" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deducciones_pendientes">Deducciones Pendientes:</label><br />
                            <input type="number" id="deducciones_pendientes" name="deducciones_pendientes" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bonificacion_pendiente">Bonificación Pendiente:</label><br />
                            <input type="number" id="bonificacion_pendiente" name="bonificacion_pendiente" /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default CreateAdmin;
  