document.addEventListener("DOMContentLoaded", function () {
  // Obtener carrito
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Seleccionar elementos
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalContainer = document.getElementById("total-container");
  const emptyButton = document.querySelector(".empty-button");
  const checkoutButton = document.querySelector(".checkout-button");

  // Renderizar productos
  renderCartItems();

  function renderCartItems() {
    // Limpiar contenedor
    cartItemsContainer.innerHTML = "";

    // Iterar carrito
    cart.forEach((product, index) => {
      // Crear elementos del producto
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;

      const productDetails = document.createElement("div");
      productDetails.classList.add("product-details");

      const productName = document.createElement("h3");
      productName.textContent = product.name;

      const productPrice = document.createElement("p");
      productPrice.innerHTML = `<strong>$</strong>${product.price.toFixed(2)}`;

      const subtotal = document.createElement("p");
      subtotal.innerHTML = `<strong>Subtotal:</strong> $${(
        product.price * product.quantity
      ).toFixed(2)}`;

      const quantityControls = document.createElement("div");
      quantityControls.classList.add("quantity-controls");

      const decreaseButton = document.createElement("button");
      decreaseButton.classList.add("quantity-button");
      decreaseButton.textContent = "-";
      decreaseButton.addEventListener("click", () => decreaseQuantity(index));

      const quantityInput = document.createElement("input");
      quantityInput.classList.add("quantity-input");
      quantityInput.type = "number";
      quantityInput.value = product.quantity;
      quantityInput.min = "1";
      quantityInput.addEventListener("input", () => updateQuantity(index, quantityInput.value));

      const increaseButton = document.createElement("button");
      increaseButton.classList.add("quantity-button");
      increaseButton.textContent = "+";
      increaseButton.addEventListener("click", () => increaseQuantity(index));

      const removeButton = document.createElement("button");
      removeButton.classList.add("remove-button");
      removeButton.textContent = "x";
      removeButton.addEventListener("click", () => removeProduct(index));

      // Agregar elementos al DOM
      cartItem.appendChild(productImage);
      productDetails.appendChild(productName);
      productDetails.appendChild(productPrice);
      productDetails.appendChild(subtotal);
      quantityControls.appendChild(decreaseButton);
      quantityControls.appendChild(quantityInput);
      quantityControls.appendChild(increaseButton);
      quantityControls.appendChild(removeButton);
      productDetails.appendChild(quantityControls);
      cartItem.appendChild(productDetails);

      // Agregar producto al contenedor
      cartItemsContainer.appendChild(cartItem);
    });

    // Actualizar total
    updateTotal();

    // Mostrar/ocultar botones
    if (cart.length > 0) {
      emptyButton.style.display = "inline-block";
      checkoutButton.style.display = "inline-block";
    } else {
      emptyButton.style.display = "none";
      checkoutButton.style.display = "none";
    }
  }

  // Decrementar cantidad
  function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
      updateCart();
      renderCartItems();
    }
  }

  // Incrementar cantidad
  function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCart();
    renderCartItems();
  }

  // Actualizar cantidad
  function updateQuantity(index, inputValue) {
    const newQuantity = parseInt(inputValue);

    if (!isNaN(newQuantity) && newQuantity > 0) {
      cart[index].quantity = newQuantity;
      updateCart();
      renderCartItems();
    }
  }

  // Eliminar producto
  function removeProduct(index) {
    const confirmed = window.confirm("¿Seguro que quieres eliminar este producto del carrito?");

    if (confirmed) {
      cart.splice(index, 1);
      updateCart();
      renderCartItems();
    }
  }

  // Actualizar carrito
  function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Actualizar total
  function updateTotal() {
    const total = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    if (total > 0) {
      totalContainer.innerHTML = `<p><strong>Total:</strong> $${total.toFixed(2)}</p>`;
    } else {
      totalContainer.innerHTML = `<p>Tu carrito está vacío</p>`;
    }
  }

  // Vaciar carrito
  emptyButton.addEventListener("click", () => {
    if (cart.length > 0) {
      const confirmed = window.confirm("¿Seguro que quieres vaciar el carrito?");

      if (confirmed) {
        cart = [];
        updateCart();
        renderCartItems();
      }
    }
  });

  // Realizar compra
  checkoutButton.addEventListener("click", () => {
    if (cart.length > 0) {
      cart = [];
      updateCart();
      renderCartItems();
      alert("Su compra se realizó con éxito. ¡Que la disfrutes!");
      window.location.href = "index.html";
    }
  });
});
