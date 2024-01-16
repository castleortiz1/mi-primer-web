// Función para agregar un producto al carrito

function agregarProducto(producto) {
    // Obtener el elemento del carrito
    const carrito = document.querySelector(".carrito");
  
    // Crear un nuevo elemento para el producto
    const productoElement = document.createElement("li");
    productoElement.classList.add("producto-carrito");
  
    // Agregar la información del producto al elemento
    productoElement.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button onclick="eliminarProducto(this)">Eliminar</button>
    `;
  
    // Agregar el elemento al carrito
    carrito.appendChild(productoElement);
  }
  
  // Función para eliminar un producto del carrito
  
  function eliminarProducto(productoElement) {
    // Eliminar el elemento del carrito
    productoElement.parentNode.removeChild(productoElement);
  }
  
  // Agregar eventos a los botones de "Agregar al carrito"
  
  const botonesAgregar = document.querySelectorAll(".productos li a");
  for (const boton of botonesAgregar) {
    boton.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Obtener la información del producto
      const producto = {
        imagen: this.parentNode.querySelector("img").src,
        nombre: this.parentNode.querySelector("h3").textContent,
        precio: this.parentNode.querySelector(".precio").textContent,
      };
  
      // Agregar el producto al carrito
      agregarProducto(producto);
    });
  }
  