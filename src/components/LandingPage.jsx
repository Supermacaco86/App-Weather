import React from "react";
import {Link} from "react-router-dom";


export default function LandingPage (){
    return(
        
        <div className="posicion" >

            <h1 className="posicion">Bienvenido al clima mundial!</h1>
            <Link to = "/home">
                <button className="button">Ingresar</button>
            </Link>
        </div>
        
    )
}