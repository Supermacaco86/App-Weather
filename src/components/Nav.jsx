import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
//importo Link
import { Link } from "react-router-dom"
//dentro del componente hago los linkeos necesarios.


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
