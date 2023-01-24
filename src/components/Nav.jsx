import React from 'react';
import SearchBar from './SearchBar.jsx';
import '../components/Nav.css';
//importo Link
import { Link } from "react-router-dom"
//dentro del componente hago los linkeos necesarios.


function Nav({onSearch}) {
  return (
    <nav class="seccion-oscura navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
       <a class="navbar-brand" href='/'>
         Weather App
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        
      </ul>
      {/* <Link to='/about'>
        <span>About</span>
      </Link> */}
        <SearchBar onSearch={onSearch}/>
        </div>
        </div>
    </nav>
  );
};

export default Nav;
