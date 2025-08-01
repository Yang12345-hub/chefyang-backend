// dishesDAO.js
// Fake database logic for dish items

let dishes = [
  { id: 1, name: 'Beef Pho', price: 12.99 },
  { id: 2, name: 'Spring Rolls', price: 6.99 }
]

export default class DishesDAO {
  // Get all dishes
  static async getAllDishes() {
    return dishes
  }

  // Get one dish by id
  static async getDishById(id) {
    return dishes.find(d => d.id === id)
  }

  // Add a new dish
  static async addDish(newDish) {
    newDish.id = dishes.length + 1
    dishes.push(newDish)
    return newDish
  }

  // Delete a dish by id
  static async deleteDish(id) {
    const index = dishes.findIndex(d => d.id === id)
    if (index !== -1) {
      return dishes.splice(index, 1)[0]
    }
    return null
  }

  // Update a dish
  static async updateDish(id, updatedData) {
    const dish = dishes.find(d => d.id === id)
    if (dish) {
      Object.assign(dish, updatedData)
      return dish
    }
    return null
  }
}
