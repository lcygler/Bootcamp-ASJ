document.addEventListener("DOMContentLoaded", function () {
  // Obtener productos
  let products = JSON.parse(localStorage.getItem("products")) || [];

  // Obtener carrito
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Seleccionar botones con "changuito"
  const cartButtons = document.querySelectorAll(".cart-button");

  cartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  function addToCart(event) {
    // Obtener ID del producto
    const productId = parseInt(event.currentTarget.id.replace("cart-button", ""));
    console.log(`Se agregó producto ${productId} al carrito.`);

    const product = products.find((item) => item.id == productId);

    if (product) {
      // Obtener datos del producto
      const productName = product.name;
      const productPrice = product.price;
      const productImage = `img/product-${productId}.png`;

      // Verificar si existe en carrito
      const existingIndex = cart.findIndex((item) => item.id == productId);

      if (existingIndex !== -1) {
        // Si existe actualizar cantidad
        cart[existingIndex].quantity += 1;
      } else {
        // Sino agregar al carrito
        const newProduct = {
          id: productId,
          name: productName,
          price: productPrice,
          quantity: 1,
          image: productImage,
        };

        cart.push(newProduct);
      }

      // Actualizar carrito en localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("¡Producto agregado al carrito!");
    }
  }
});
