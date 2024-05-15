import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import { NavLink, useNavigate } from 'react-router-dom';
import appFirebase from '../../../../back/credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

function HeadNav() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <>
            <div className='padre-nav'>
                <nav>
                    <div className='nav'>
                        <NavLink to={"/liquidacion"}>Liquidar</NavLink>
                        <NavLink to={"/admindash"}>DashBoard</NavLink>
                        <NavLink to={"/analisis"}>Analisis</NavLink>
                    </div>
                </nav>
                <button onClick={handleLogout}>Salir</button>
            </div>
        </>
    );
}



export default HeadNav;