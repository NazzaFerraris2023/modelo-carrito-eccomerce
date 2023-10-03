//Modal para ver el carrito:

const logicaCarrito = ()=>{

    modal_container.innerHTML=""
    modal_container.style.display="flex"
    const modalHeader=document.createElement("div")
    modalHeader.className="modal_header"
    modalHeader.innerHTML=`
    <h1 class="modal-header-title">Carrito</h1>

    `
    modal_container.append(modalHeader)
//boton de carrito (modal):

    const modalButton= document.createElement("button")
    modalButton.innerText="X"
    modalButton.className="modal-header-button"

    modalButton.addEventListener("click",()=>{
        modal_container.style.display="none"
    })
    modalHeader.append(modalButton)


    carrito.forEach((product)=>{
        let contenidoCarrito=document.createElement("div")
        contenidoCarrito.className="modal-content"
        contenidoCarrito.innerHTML=`
        <img src="${product.Imagen}">
        <h3>${product.Nombre}</h3>
        <h4>$${product.precio}</h4>
        <span class="restar"> - </span>
        <p>Cantidad:${product.Cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total por producto:$${product.Cantidad * product.precio}</p>
        <span class="btn-delete"> X </span>
        `
        modal_container.append(contenidoCarrito)

        let btnRestar = contenidoCarrito.querySelector(".restar")
            
        btnRestar.addEventListener("click",()=>{
            if (product.Cantidad!==1){
                product.Cantidad--
            }
            saveLocal()
            
        logicaCarrito()
    })


        let btnSumar = contenidoCarrito.querySelector(".sumar")
        btnSumar.addEventListener("click",()=>{
            product.Cantidad++
            saveLocal()
            logicaCarrito()
        })
        
        let eliminar=contenidoCarrito.querySelector(".btn-delete")
        eliminar.addEventListener("click",()=>{
            eliminarProducto(product.Id)
        })

        // let eliminar = document.createElement("button")
        // eliminar.className="btn-delete"
        // eliminar.innerText="X"
        // contenidoCarrito.append(eliminar)
        // eliminar.addEventListener("click",eliminarProducto)
    })

    const total = carrito.reduce((acc,el)=>acc+el.precio *el.Cantidad,0)

    const totalBuying=document.createElement("div")
    totalBuying.className="total-content"
    totalBuying.innerHTML=`total a pagar: $${total}`
    modal_container.append(totalBuying)

}

ver_carrito.addEventListener("click",logicaCarrito)

//funcion para el boton de eliminar el producto:
const eliminarProducto = (id)=>{
    const foundId = carrito.find((element)=>element.Id===id)

    carrito=carrito.filter((carritoId)=>{
        return carritoId !== foundId
    })
    contadorCarrito()
    saveLocal()
    logicaCarrito()
}

//funcion para que dibuje el numero de productos que hay en el carrito:

const contadorCarrito = ()=>{
    cantidadCarrito.style.display="block"

    const carritoLength = carrito.length
    localStorage.setItem("carritolength",JSON.stringify(carritoLength))

    cantidadCarrito.innerText=JSON.parse(localStorage.getItem("carritolength"))

}
contadorCarrito()

