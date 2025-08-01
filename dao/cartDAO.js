// cartDAO.js
// Fake database logic for shopping cart

// We'll store cart per user
let carts = {
  // Example: userId: [{ dishId, quantity }]
  101: [
    { dishId: 1, quantity: 2 },
    { dishId: 2, quantity: 1 }
  ]
}

export default class CartDAO {
  // Get cart for a user
  static async getCartByUser(userId) {
    return carts[userId] || []
  }

  // Add item to cart
  static async addItemToCart(userId, dishId, quantity) {
    if (!carts[userId]) {
      carts[userId] = []
    }

    const existingItem = carts[userId].find(item => item.dishId === dishId)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      carts[userId].push({ dishId, quantity })
    }

    return carts[userId]
  }

  // Remove item from cart
  static async removeItemFromCart(userId, dishId) {
    if (!carts[userId]) return []

    carts[userId] = carts[userId].filter(item => item.dishId !== dishId)
    return carts[userId]
  }

  // Clear cart
  static async clearCart(userId) {
    carts[userId] = []
    return []
  }
}
