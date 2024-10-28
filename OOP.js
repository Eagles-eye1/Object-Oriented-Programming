// Product Class to store product properties
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem Class to represent an item in the cart, with a product and quantity
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item based on quantity
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart Class to represent the shopping cart with an array of ShoppingCartItem instances
  class ShoppingCart {
    constructor() {
      this.items = []; // Array to hold ShoppingCartItem instances
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      const existingItemIndex = this.items.findIndex(
        (item) => item.product.id === product.id
      );
  
      if (existingItemIndex !== -1) {
        // Update quantity if product already exists in the cart
        this.items[existingItemIndex].quantity += quantity;
      } else {
        // Otherwise, add a new ShoppingCartItem
        const cartItem = new ShoppingCartItem(product, quantity);
        this.items.push(cartItem);
      }
      renderCart();
    }
  
    // Method to remove an item from the cart by product ID
    removeItem(productId) {
      this.items = this.items.filter((item) => item.product.id !== productId);
      renderCart();
    }
  
    // Method to calculate the total cost of all items in the cart
    getTotalCost() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  }
  
  // Initialize Products
  const products = [
    new Product(1, 'Laptop', 1200),
    new Product(2, 'Headphones', 100),
    new Product(3, 'Keyboard', 50)
  ];
  
  // Initialize Shopping Cart
  const cart = new ShoppingCart();
  
  // Function to render products
  function renderProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
  
    products.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item');
      productDiv.innerHTML = `
        <span>${product.name} - $${product.price}</span>
        <button onclick="cart.addItem(products[${product.id - 1}], 1)">Add to Cart</button>
      `;
      productsDiv.appendChild(productDiv);
    });
  }
  
  // Function to render cart items
  function renderCart() {
    const cartItemsUl = document.getElementById('cart-items');
    cartItemsUl.innerHTML = '';
  
    cart.items.forEach((item) => {
      const cartItemLi = document.createElement('li');
      cartItemLi.classList.add('cart-item');
      cartItemLi.innerHTML = `
        <span>${item.product.name} (x${item.quantity}) - $${item.getTotalPrice()}</span>
        <button onclick="cart.removeItem(${item.product.id})">Remove</button>
      `;
      cartItemsUl.appendChild(cartItemLi);
    });
  
    // Display the total cost
    document.getElementById('total-cost').innerText = `Total Cost: $${cart.getTotalCost()}`;
  }
  
  // Initial render of products and cart
  renderProducts();
  renderCart();
  