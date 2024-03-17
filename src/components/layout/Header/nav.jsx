import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'

function HeadNav() {
    return (
        <div className='headNav'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Simulador de liquidación</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Consulta empleados</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Analitica de datos</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                                <button className="btn btn-outline-success btnLogin" type="submit">Iniciar Sesion</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
  
  export default HeadNav;