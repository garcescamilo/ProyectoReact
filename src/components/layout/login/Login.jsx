//Login personal de nómina

import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth/cordova";
import appFirebase from "../../../../back/credenciales";
import './login.css';
const auth = getAuth(appFirebase)

const Login = () => {

  const [registrando, setRegistrando] = useState(false);

  const funcAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registrando) {
      await createUserWithEmailAndPassword(auth, correo, contraseña)
    } else {
      await signInWithEmailAndPassword(auth, correo, contraseña)
    }
  }

  return (
    <div className="caja-padre-login">
      <div className="loginCont">
        <form onSubmit={funcAutenticacion} className="loginForm">
          <h1>Login</h1>
          <section>
            <input
              id="email"
              placeholder="Correo Electronico"
              type="email"
              className="inputSession"
            />
            <input
              id="password"
              placeholder="Contraseña"
              type="password"
              className="inputSession"
            />
            <button className="btnform">{registrando ? "Registrate" : "Inicia Sesion"}</button>
          </section>

          <hr></hr>
          <h4 className="cuenta-no">{registrando ? "Ya tengo cuenta" : "No tengo cuenta"}
            <button className="btnLogin" onClick={() => { setRegistrando(!registrando) }}>{registrando ? " inicia sesion" : "Registrate"}</button>
          </h4>
        </form>


      </div>
    </div>
  );
};
export default Login;
