// ----- 1. Classe Produit -----
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ----- 2. Classe Élément du panier -----
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ----- 3. Classe Panier d'achat -----
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem);
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    showCart() {
      if (this.items.length === 0) {
        console.log("🛒 Le panier est vide.");
        return;
      }
  
      console.log("🛍️ Contenu du panier:");
      this.items.forEach(item => {
        console.log(`- ${item.product.name} x${item.quantity} = ${item.getTotalPrice().toFixed(2)} DA`);
      });
      console.log(`✅ Total: ${this.getTotalPrice().toFixed(2)} DA`);
    }
  }
  
  // ----- 4. Tester le système -----
  // Créer quelques produits
  const p1 = new Product(1, "Chaussures", 5000);
  const p2 = new Product(2, "T-shirt", 2000);
  const p3 = new Product(3, "Casquette", 1500);
  
  // Créer un panier
  const cart = new ShoppingCart();
  
  // Ajouter des articles
  cart.addItem(p1, 2);
  cart.addItem(p2, 3);
  cart.addItem(p1, 1);
  
  // Afficher le panier
  cart.showCart();
  
  // Supprimer un article
  cart.removeItem(2);
  
  // Afficher le panier après suppression
  cart.showCart();
  