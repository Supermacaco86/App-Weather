import React from "react";
import {Link} from "react-router-dom";
//creo el componente funcional About que se mostrará en la ruta /about
export default function About(){
    return(
        <div>
            <h4>Algunos datos tuyos</h4>
            <p>Aquí irían datos tuyos, completalos a tu gusto!</p>
            <Link to = "/home">
                <button className="button">Volver</button>
            </Link>
        </div>
    )
}