import { useEffect, useState } from "react";
import './login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

// variable para guardar los datos de la bd en la carpet aback
let urlUsuarios = "http://localhost:3500/users";

//atenticado es una prop traida de app para gestionar las vistas para usuarios logeados
const Login = ({ setIsAuthenticated }) => {
  // aca estamos guardando los estados de los diferentes campos en el login y registro
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioIngresado, setUsuarioIngresado] = useState("");
  const [contraseñaIngresada, setContraseñaIngresada] = useState("");
  const [showRegistro, setShowRegistro] = useState(false);
  const navigate = useNavigate();

  //estamos haciendo la peticion get a la base de datos que guardamos en la url 
  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const resultado = await axios.get(urlUsuarios);
        setUsuarios(resultado.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };
    getUsuarios();
  }, []);
  //cap usuario y contraseña es para capturar los datos que estamos ingresnando 
  const capUsuario = (e) => {
    setUsuarioIngresado(e.target.value);
  };

  const capContraseña = (e) => {
    setContraseñaIngresada(e.target.value);
  };

  // este codigo es para validar , osea cuando se le de click el va a tomar los datos capturados
  // y los va a buscar en la base de datos 
  const validarUsuario = (e) => {
    e.preventDefault();
    const usuarioEncontrado = usuarios.find(
      (user) =>
        user.name === usuarioIngresado && user.password === contraseñaIngresada
    );
    //si es verdadero , va a usar la props y lo va autenticar y lo navega hacia liquidacion
    if (usuarioEncontrado) {
      setIsAuthenticated(true);
      navigate('/liquidacion');
    } else {
      console.log("Usuario o contraseña incorrectos", usuarioIngresado, contraseñaIngresada);
    }
  };


  const registrarUsuario = async (e) => {
    // Prevenimos el comportamiento predeterminado del formulario, por que cuando se da enviar 
    //este hace una carga y no es lo que queremos
    e.preventDefault();
    try {
      // vamos a crear un nuevo objeto , que tenga el name y el password que son las claves de la bd 
      const nuevoUsuarioObj = {
        //el id se genera automaticamente por lo que no necesitamos ponerlo directamente
        //esto ya lo hace el json server para usuarios nuevos
        name: usuarioIngresado,
        password: contraseñaIngresada
      };
      //Enviamos una solicitud POST a la API para registrar el nuevo usuario
      //se le pasa la bd a cual consultar y el nuevo objeto que debe ingresar
      await axios.post(urlUsuarios, nuevoUsuarioObj);
      alert("Usuario registrado con éxito");
      // Aquí puedes realizar acciones adicionales después del registro exitoso
    } catch (error) {
      //aca un error si esto no funciona
      console.error("Error al registrar el usuario:", error);
    }
  };

  return (
    <div className="caja-padre-login">
      <div className="loginCont">
        {/* Se utiliza un operador ternario para renderizar diferentes elementos según el valor de showRegistro */}
        <form className="loginForm" onSubmit={showRegistro ? registrarUsuario : validarUsuario}>
          {/* Si showRegistro es true, se muestra Registro, de lo contrario, se muestra Login */}
          <h1>{showRegistro ? "Registro" : "Login"}</h1>
          <section>
            {/* El valor del placeholder cambia según el valor de showRegistro ose asi es nuevo usuario , va a 
            hacer un registro , si no es un login , asi que los campos navegan diferente */}
            <input
              onChange={capUsuario}
              id="email"
              value={usuarioIngresado}
              placeholder={showRegistro ? "Nuevo usuario" : "Usuario"}
              className="inputSession"
            />
            <input
              onChange={capContraseña}
              id="password"
              value={contraseñaIngresada}
              placeholder="Contraseña"
              type="password"
              className="inputSession"
            />
            <h4 className="cuenta-no">
              {/* El texto del botón de envío cambia según el valor de showRegistro */}
              <button type="submit" className="btnLogin">
                {showRegistro ? "Regístrate" : "Inicia sesión"}
              </button>
            </h4>
          </section>
          <hr />
          {/* Este botón alterna el valor de showRegistro al hacer clic */}
          <button type="button" className="btnform" onClick={() => setShowRegistro(!showRegistro)}>
            {/* El texto del botón cambia según el valor de showRegistro */}
            {showRegistro ? "Iniciar sesión" : "Regístrate"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;