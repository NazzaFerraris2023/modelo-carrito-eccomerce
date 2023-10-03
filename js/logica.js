const contenedor_productos=document.getElementById("contenedor_productos")
const ver_carrito= document.getElementById("emoji")
const modal_container= document.getElementById("modal_container")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito=JSON.parse(localStorage.getItem("carrito"))||[]

// agarrando los productos del  JSON
const getProductos = async()=>{
    //con el fetch() capturo el archivo.json
    const response = await fetch("./productos.json")
    //productos pasados a json
    const data =  await response.json()


data.forEach((product)=>{
    let content= document.createElement("div")
    content.className="contenedor_productos"
    content.innerHTML=`
    <img class="img_producto" src="${product.Imagen}">
    <h3 class="nombre_producto">${product.Nombre}</h3>
    <h4 class="precio_producto">$${product.Precio}</h4>
    `
contenedor_productos.append(content)

//Creando boton para comprar productos:
let btn = document.createElement("button")
btn.innerText="comprar"
btn.className="btn"
content.append(btn)

//Dandole funcionalidad al boton comprar:
btn.addEventListener("click",()=>{
//metodo some: me devuelve valor booleano
     // Buscar si el producto ya está en el carrito por su Id
    const existingProduct = carrito.find((prod) => prod.Id === product.Id);

    if (existingProduct) {
        // Si el producto ya está en el carrito, aumentar la cantidad en 1
        existingProduct.Cantidad++;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        carrito.push({
            Id: product.Id,
            Imagen: product.Imagen,
            Nombre: product.Nombre,
            precio: product.Precio,
            Cantidad: 1,
        })};

    console.log(carrito)
    contadorCarrito()
    saveLocal()
})

})
}
getProductos()




//Seccion que trabaja con el LocalStorage:
/*
Set item:
    Su funcion es la de enviar y guardar algo al storage:

Get item:
    Su funcion es la de obtener ese algo que guardamos anteriormente.

*/
const saveLocal = ()=>{
localStorage.setItem("carrito",JSON.stringify(carrito))
}


