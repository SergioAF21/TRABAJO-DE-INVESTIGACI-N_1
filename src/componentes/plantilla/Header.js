import React ,{useState} from 'react'
import { Link } from "react-router-dom"

const Heater = () => {
    const [user, setUser] = useState(null)
    const login = () => {
        setUser({id:1, nombre: "saucaquispef"})
    }
    const logout = () => {
        setUser(null)
    }
    return(
        <header className="d-flex justify-content-between p-4 bg-success">

            <nav>
            <span className=" navbar-brand mb-0 fs-4 text-white">User: {user ? user.nombre : "No autentificado"}</span>
           {user 
           ? (   <button 
                     type="button" 
                     className="btn btn-outline-light"
                     onClick = {logout}>
                     Cerrar Cesion
                </button>) 
           : (   <button 
                     type="button" 
                     className="btn btn-outline-light"
                     onClick = {login}>
                     Iniciar Cesion
                </button>)
           } 
           {/* <Link to={'/'}  >
                <input type="submit" className="btn btn-outline-light btn-gradient" value="Cerrar Sesión" />
            </Link> */}
            </nav>
        </header>
    )
}

export default Heater

