import { useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { cart, vaciarCart, total, cantidadTotal } = useContext(CartContext);
    if (cantidadTotal === 0) {
        return (
            <div className="contenedor-noproductos">
                <h2 className="no-productos">No hay productos seleccionados en el carrito</h2>
                <Link className="link-verproductos" to="/"> Ver productos </Link>
            </div>
        )
    }
    return (
        <>
            <div className="contenedor-cart">
                {cart.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            </div>
            <hr />
            <div className="total-flex">
                <h4 className="cantidad-total" >Cantidad Total : {cantidadTotal}</h4>
                <h2 className="total"> Total : $ {total}</h2>
                <Link className="link-finalizar" to="/checkout"> Finalizar Compra </Link>
                <button className="btn-vaciar" onClick={() => vaciarCart()}> Vaciar Carrito </button>
            </div>
        </>

    )
}

export default Cart