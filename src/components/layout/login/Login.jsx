import { useEffect, useState } from "react";
import './login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

let urlUsuarios = "http://localhost:3500/users";

const Login = ({ setIsAuthenticated }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioIngresado, setUsuarioIngresado] = useState("");
  const [contraseñaIngresada, setContraseñaIngresada] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const resultado = await axios.get(urlUsuarios);
        console.log(resultado.data);
        setUsuarios(resultado.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };
    getUsuarios();
  }, []);

  const capUsuario = (e) => {
    setUsuarioIngresado(e.target.value);
  };

  const capContraseña = (e) => {
    setContraseñaIngresada(e.target.value);
  };

  const validarUsuario = (e) => {
    e.preventDefault();
    const usuarioEncontrado = usuarios.find(user => user.name === usuarioIngresado && user.password === contraseñaIngresada);
    if (usuarioEncontrado) {
      setIsAuthenticated(true);
      navigate('/liquidacion');
    } else {
      console.log("Usuario o contraseña incorrectos", usuarioIngresado, contraseñaIngresada);
    }
  };

  return (
    <div className="caja-padre-login">
      <div className="loginCont">
        <form className="loginForm" onSubmit={validarUsuario}>
          <h1>Login</h1>
          <section>
            <input
              onChange={capUsuario}
              id="email"
              value={usuarioIngresado}
              placeholder="Usuario"
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
              <button type="submit" className="btnLogin">Inicia sesión</button>
            </h4>
          </section>
          <hr />
          <button type="button" className="btnform">Regístrate</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
