import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import { NavLink } from 'react-router-dom';

function HeadNav() {
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

            </div>

        </>
    );
}

export default HeadNav;