import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import tabo from '/img/taboadita.png';
import { useState } from 'react';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [botonVisible, setBotonVisible] = useState(true);

    const AbrirMenu = () => {
        setMenuVisible(true);
        setBotonVisible(false);
    };

    const CerrarMenu = () => {
        setMenuVisible(false);
        setBotonVisible(true);
    };

    return (
        <header>
            <Link to="/">
                <img src={tabo} alt="" />
            </Link>
            {botonVisible && (
                <button id="abrir" className={`btn-abrir ${menuVisible ? 'oculto' : ''}`} onClick={AbrirMenu}>
                <AiOutlineMenu/>
                </button>
            )}
            <nav id="nav" className={menuVisible ? 'visible' : ''}>
                <button id="cerrar" className="btn-cerrar" onClick={CerrarMenu}>
                <AiOutlineClose/>
                </button>
                <ul>
                    <li>
                        <NavLink className="navlink" to="/categoria/1">
                            HOGAR
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/categoria/2">
                            ROPA
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/categoria/3">
                            PILETAS
                        </NavLink>
                    </li>
                </ul>
                </nav>
            <CartWidget />
        </header>
    );
};

export default NavBar;


