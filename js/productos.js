//Creamos la clase Producto
class Producto{
    constructor(idProductoValue, nombreProductoValue, precioProductoValue, descripcionProductoValue){
        this.idProducto = idProductoValue;
        this.nombreProducto = nombreProductoValue;
        this.precioProducto = precioProductoValue;  
        this.descripcionProdcuto = descripcionProductoValue;    
    }
}

//Definimos los productos que hay en stock y se mostraran en la pagina de mandera dinamica
producto1 = new Producto(1, 'Oleo para Masajes', '$1000', 'Para masajes en todo el cuerpo');
producto2 = new Producto(2, 'Aceite de Canabis', '$1500', 'Para calmar dolores articulares');
producto3 = new Producto(3, 'Mascarilla facial de carbon', '$2700', 'Para evitar las arrugas');
producto4 = new Producto(4, 'Aceite de Magnesio', '$3000', 'Para nutrir la piel');
producto5 = new Producto(5, 'Blanqueador dental ecologico', '$1500', 'Para tener los dientes bien blancos y limpios');
producto6 = new Producto(6, 'Crema Facial AntiAge', '$5000', 'Atrada el envejecimiento de la piel');


const productos = [producto1, producto2, producto3, producto4, producto5, producto6];

function mostrarProductos(productos) {
    const tablaProductos = document.getElementById('tabla-de-productos').getElementsByTagName('tbody')[0];
    productos.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.idProducto}</td>
            <td>${producto.nombreProducto}</td>
            <td>${producto.precioProducto}</td>
            <td>${producto.descripcionProducto}</td>
        `;
        tablaProductos.appendChild(fila);
    });
}

// Hacemos el llamado a la funcion para que muestre el contenido dinamicamente
mostrarProductos(productos);
