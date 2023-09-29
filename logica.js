const contenedor_productos=document.getElementById("contenedor_productos")
const ver_carrito= document.getElementById("emoji")
const modal_container= document.getElementById("modal_container")

let carrito=[]
lista_productos.forEach((product)=>{
    let content= document.createElement("div")
    content.className="contenedor_productos"
    content.innerHTML=`
    <img class="img_producto" src="${product.img}">
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
    carrito.push({
        Id:product.Id,
        Imagen:product.img,
        Nombre:product.Nombre,
        precio:product.Precio,

    })
    console.log(carrito)
})

})
//Modal para ver el carrito:
ver_carrito.addEventListener("click",()=>{
    const modalHeader=document.createElement("div")
    modalHeader.className="modal_header"
    modalHeader.innerHTML=`
    <h1 class="modal-header-title">Carrito</h1>

    `
    modal_container.append(modalHeader)

    const modalButton= document.createElement("button")
    modalButton.innerText="X"
    modalButton.className="modal-header-button"

    modalHeader.append(modalButton)


    carrito.forEach((product)=>{
        let contenidoCarrito=document.createElement("div")
        contenidoCarrito.className="modal-content"
        contenidoCarrito.innerHTML=`
        <img src="${product.img}">
        <h3>${product.Nombre}</h3>
        <h4>$${product.Precio}</h4>
        `
        modal_container.append(contenidoCarrito)
    })


})