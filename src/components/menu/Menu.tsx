import React from 'react';
import "./menu.css";
import logo from "../../Img/logo.png"
import { Link } from "react-router-dom";
export const Menu = () =>{
    return(
       <>
       <header>
       <div >
       <img className='lologo' src={logo} alt="" />
       </div>
       <nav className="Menu">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/sobre'>Sobre</Link>
                        <Link to='/contatos'>Contatos</Link>
                    </li>
                </ul>
            </nav>
       </header>
       </>
    )
}