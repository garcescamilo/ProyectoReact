//Login personal de nómina

import { useState } from "react";
import './login.css';

const Login = () => {
  const [getUser, setUser] = useState("");
  const [getPass, setPass] = useState("");
  const [error, setError] = useState("");

  function validarInicioSesion(event) {
    event.preventDefault(); // Evitar recarga en página

    if (getUser === "jaime" && getPass === "123") {
      console.log("Inicio de sesión correcta");
    } else {
      setError("Credenciales incorrectas");
    }
  }

  return (
    <form onSubmit={validarInicioSesion}>
    <h1>Inicio sesión resposables nomina</h1>
      <section>
        <input
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuario"
          type="text"
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="Contraseña"
          type="password"
        />
      </section>
      <button type="submit" className="btnLogin">Iniciar sesión</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default Login;
