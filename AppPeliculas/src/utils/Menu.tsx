import {NavLink} from 'react-router-dom';

export default function Menu(){
    const claseActiva = "active";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className={`${claseActiva} navbar-brand`}>Catalogo películas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink  
                                className={`${claseActiva} nav-link`}  
                                to="/generos">Géneros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  
                                className={`${claseActiva} nav-link`}  
                                to="/peliculas/filtrar">Filtrar Películas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  
                                className={`${claseActiva} nav-link`}  
                                to="/actores">Actores
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  
                                className={`${claseActiva} nav-link`}  
                                to="/cines">Cines
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  
                                className={`${claseActiva} nav-link`}  
                                to="/peliculas/crear">Crear Películas
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}