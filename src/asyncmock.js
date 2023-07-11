const misProductos = [
    {id:"1",nombre:"Aromatizante de Ambiente",precio:1300,stock:10,img:"../img/aromatizantes.jpg",idCat:"1"},
    {id:"2",nombre:"Jabon para Manos X 1 Lt",precio:1100,stock:5,img:"../img/jabonmanoss.jpg",idCat:"1"},
    {id:"3",nombre:"Jabon liquido X 5 Lts",precio:1600,stock:10,img:"../img/jabonliquidos.jpg",idCat:"2"},
    {id:"4",nombre:"Papel Higienico Elite ",precio:8500,stock:30,img:"../img/elite.jpeg",idCat:"1"},
    {id:"5",nombre:"Lavandina Linea Celeste X 5 Lts",precio:1200,stock:40,img:"../img/lavandina.jpeg",idCat:"1"},
    {id:"6",nombre:"Papel Higienico Higienol X 50 Mts",precio:900,stock:100,img:"../img/higienol.jpeg",idCat:"1"},
    {id:"7",nombre:"Hipoclorito Al 100% X 5 Lts",precio:3250,stock:12,img:"../img/hipoclorito.jpg",idCat:"3"},
    {id:"8",nombre:"Suavizante Querubin X 1 Lt",precio:455,stock:50,img:"../img/querubin.jpg",idCat:"2"},
    {id:"9",nombre:"Canasto para Ropa Sucia",precio:1900,stock:6,img:"../img/canasto.jpg",idCat:"2"},

]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (misProductos);
        },100)
    })
}

//Creamos una funcion similar a la anterior pero que retorne 1 solo item

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => { 
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        },100)
    })

}

// Creamos una funcion que retorna un array de una determinada categoria de producto:

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter (prod => prod.idCat === idCategoria);
            resolve (productosCategoria);
        },100)
    })
}

