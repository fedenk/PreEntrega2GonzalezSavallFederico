const descuento = x => x * 0.85;

let id = 0;
let producto;
let preciototal = 0;

const productos = [];

let compra = prompt("¿Desea iniciar su compra? Si/No")

while(compra.toLowerCase() === "si"){
    let nombre = prompt("Ingrese nombre del producto");
    let precio = parseInt(prompt("Ingrese precio del producto"));
    id = id + 1;
    if(precio >= 10000){
        precio = descuento(precio);
    }else{
        precio = precio;
    }
    producto = {
        id,
        nombre,
        precio,
      };
    preciototal = preciototal+precio;
    productos.push(producto);
    compra = prompt("¿Desea agregar un nuevo producto? Si/No")
    
}

productos.forEach((item) => {
    alert(`   Nro: ${item.id} 
           Nombre: ${item.nombre}
           Precio $: ${item.precio}`);
})

alert(`El precio total de la compra es de ${preciototal}`);

