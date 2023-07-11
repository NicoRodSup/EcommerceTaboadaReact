import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import tabo from '/img/taboadita.png'
const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <img src={tabo} alt="" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink className="navlink"to="/categoria/1"> HOGAR </NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="categoria/2"> ROPA </NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="categoria/3"> PILETAS </NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar