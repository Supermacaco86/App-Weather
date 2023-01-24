import React from "react";
import './Footer.css'



export default function footer (){
    return(
        
        <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center">
        {/* <img class="footer-logo" src="almuerzo-cohete.png" alt="logo de portafolio"/> */}
        {/* <p class="footer-texto text-center">Aprendo y creo todos los días.<br/>Creemos un proyecto juntos.</p> */}
        <div class="iconos-redes-sociales d-flex flex-wrap align-items-center jutify-content-center">
          <a href="https://twitter.com/supermacaco86" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="https://github.com/Supermacaco86" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/martin--figueroa" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/arte_cabeza/" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="mailto:martinfigueroa2103@hotmail.com" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-envelope"></i>
          </a>
        </div>
        <div class="derechos-de-autor">Creado por Martin Figueroa (2023) &#169;</div>
      </footer>
        
    )
}