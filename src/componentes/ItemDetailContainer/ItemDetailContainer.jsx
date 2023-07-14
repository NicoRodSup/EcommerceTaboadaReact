import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "Almacen", idItem);
        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = { id: res.id, ...data }
                setProducto(nuevoProducto);
            })
            .catch(error => console.log(error))
    }, [idItem])

    return (
        <div>
            < ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer