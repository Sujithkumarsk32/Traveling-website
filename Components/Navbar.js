import React from 'react';
import style from './Navbar.module.css';

import logo from '../assets/logo.png';
import {Link} from "react-router-dom";

 function Header(){
  return(<><nav className={style.nav}>
    <div className={style.brand}>
        <div className={style.container}>
<img className={style.img} src={logo} alt=""/>
EXPLORE WORLD
</div>
<div className="toggle"></div>
    </div>
    <ul>
    <Link to="App" className={style.a}>
                <li >Home</li>
                </Link>
       <Link to="Image" className={style.a}>
                <li >Booking</li>
                </Link>
             <Link to="Services" className={style.a}>
                <li >Services</li>
                </Link>
             <Link to="Recommend" className={style.a}>
                <li >Destination</li>
                </Link>
             <Link to="Testimonials" className={style.a}><li >Review</li></Link>
            
             <Link to="Footer" className={style.a}><li >Contact</li></Link>
    </ul>
    <button>Search</button>
</nav>

  </>);
}

export default Header;