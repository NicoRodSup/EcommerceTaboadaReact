import { useState} from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import { useContext } from "react";


const CheckOut = () => {
    const [nombre, setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error,setError] = useState("");
    const [ordenId,setOrdenId] = useState("");

    const {cart,vaciarCart,total,cantidadTotal} = useContext(CartContext);

    const manejadorFormulario = (event) =>{
        event.preventDefault();

    

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion){
        setError("Por favor completa todos los campos");
        return;
    }

    if (email !== emailConfirmacion){
        setError("Los campos del email no coinciden");
        return;
    }

    const orden = {
        items: cart.map(producto => ({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad : producto.cantidad

        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email
    };

    addDoc(collection(db,"ordenes"),orden)
        .then( docRef => {
            setOrdenId (docRef.id);
            vaciarCart();
        })
        .catch(error => {
            console.log("Error al crear la orden",error);
            setError ("Se produjo un error")
        })

    }

    return (
        <div>
            <h2>CheckOut</h2>
            <form  onSubmit={manejadorFormulario}>
                {
                    cart.map (producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad}</p>
                            <p> {producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <hr />
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                    <label htmlFor=""> Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="">Email Confirmacion</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}/>


                </div>
                {
                    error && <p> {error}</p>
                }

                <button type="submit"> Finalizar Compra</button>
            </form>
            {
                ordenId && <strong> Gracias por tu nombre tu nro de orden es {ordenId} </strong>
                
            }
        </div>
    )
}

export default CheckOut