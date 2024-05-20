import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import logo from '../../../assets/react.svg'
import { NavLink, useNavigate } from 'react-router-dom';


function HeadNav(props) {

    const navigate = useNavigate(); // Importa useNavigate desde react-router-dom

    const handleLogout = () => {
        props.setIsAuthenticated(false);
        navigate('/'); // Usa navigate para redirigir a la página de inicio de sesión
    };

    return (
        <>
            <div className='padre-nav'>
                <div><img src={logo} alt="" /></div>
                <nav>
                    <div className='nav'>
                        <NavLink to={"/liquidacion"} className='navlink'>Liquidar</NavLink>
                        <NavLink to={"/admindash"} className='navlink'>DashBoard</NavLink>
                        <NavLink to={"/analisis"} className='navlink'>Analisis</NavLink>
                        <NavLink to={"/administrar"} className='navlink'>Administrar</NavLink>
                    </div>
                </nav>
                <div className='salir'>
                    <button className='boton-salir' onClick={handleLogout}>Salir</button>
                </div>
            </div>
        </>
    );
}



export default HeadNav;