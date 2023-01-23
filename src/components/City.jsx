import React from "react";
import {Link} from "react-router-dom";
//creo el componente funcional City que mostrará los detalles de una ciudad
//recibida por props en la ruta /ciudad/{ciudadId}
export default function City({ city }){
    return(
        <div>
            <h2>{city.name}</h2>
            <div>
                <div>Temperatura: {city.temp}</div>
                <div>Clima: {city.weather}</div>
                <div>Viento: {city.wind}</div>
                <div>Nubosidad: {city.clouds}</div>
            </div>
            <Link to = "/home">
                <button className="button">Volver</button>
            </Link>
        </div>
    )
}