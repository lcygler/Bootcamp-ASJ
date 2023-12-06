document.addEventListener("DOMContentLoaded", function () {
  // Inicializar productos
  let products = JSON.parse(localStorage.getItem("products"));

  if (!products) {
    products = [
      { id: 1, name: "Yellow scarf and shoes", price: 120.0 },
      { id: 2, name: "White Glasses", price: 49.0 },
      { id: 3, name: "Wooden Airplane", price: 49.0 },
      { id: 4, name: "Colorful Teacups", price: 9.0 },
      { id: 5, name: "Elegant handbag", price: 49.0 },
      { id: 6, name: "Mini iTablet", price: 79.0 },
      { id: 7, name: "Dried Pasta", price: 16.0 },
      { id: 8, name: "Essential Oils", price: 159.0 },
    ];

    localStorage.setItem("products", JSON.stringify(products));
  }

  // Inicializar carrito
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
