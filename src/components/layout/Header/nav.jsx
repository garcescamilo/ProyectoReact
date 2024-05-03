import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import { NavLink } from 'react-router-dom';

function HeadNav() {
    return (

        <nav>
            <NavLink to={"/liquidacion"}>liquidar</NavLink>
            <NavLink to={"/admindash"}>admindash</NavLink>

        </nav>

    );
}

export default HeadNav;