document.addEventListener("DOMContentLoaded", function () {
  // Obtener productos
  let products = JSON.parse(localStorage.getItem("products")) || [];

  // Obtener carrito
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Seleccionar botones de incremento y decremento
  const decreaseButton = document.getElementById("decrease");
  const increaseButton = document.getElementById("increase");
  const quantityInput = document.querySelector(".quantity-input");
  const addToCartButton = document.querySelector(".add-to-cart-button");

  decreaseButton.addEventListener("click", decreaseQuantity);
  increaseButton.addEventListener("click", increaseQuantity);
  addToCartButton.addEventListener("click", addToCart);

  function decreaseQuantity() {
    // Obtener valor actuat
    let currentValue = parseInt(quantityInput.value);

    // Decrementar valor
    if (currentValue > 1) {
      currentValue -= 1;
    }

    // Actualizar valor
    quantityInput.value = currentValue;
  }

  function increaseQuantity() {
    // Obtener valor actuat
    let currentValue = parseInt(quantityInput.value);

    // Incrementar valor
    currentValue += 1;

    // Actualizar valor
    quantityInput.value = currentValue;
  }

  function addToCart() {
    // Obtener ID del producto (en este caso el ID es 2, ya que tengo una única página de producto)
    const productId = 2;
    console.log(`Se agregó producto ${productId} al carrito.`);

    // Obtener datos del producto
    const product = products.find((item) => item.id == productId);

    if (product) {
      // Obtener datos del producto
      const productName = product.name;
      const productPrice = product.price;
      const productImage = `img/product-${productId}.png`;

      // Obtener cantidad del input
      const quantity = parseInt(quantityInput.value);

      // Verificar si existe en carrito
      const existingIndex = cart.findIndex((item) => item.id == productId);

      if (existingIndex !== -1) {
        // Si existe actualizar cantidad
        cart[existingIndex].quantity += quantity;
      } else {
        // Sino agregar al carrito
        const newProduct = {
          id: productId,
          name: productName,
          price: productPrice,
          quantity: quantity,
          image: productImage,
        };

        cart.push(newProduct);
      }

      // Actualizar carrito en localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("¡Se agregó el producto al carrito!");
    }
  }
});
