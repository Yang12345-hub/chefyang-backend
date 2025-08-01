// storeDAO.js
// Fake database logic for store data

let stores = [
  { id: 1, name: 'San Jose Store', location: 'San Jose' },
  { id: 2, name: 'Sunnyvale Store', location: 'Sunnyvale' }
]

export default class StoreDAO {
  // Get all stores
  static async getAllStores() {
    return stores
  }

  // Get one store by id
  static async getStoreById(id) {
    return stores.find(s => s.id === id)
  }

  // Add a new store
  static async addStore(newStore) {
    newStore.id = stores.length + 1
    stores.push(newStore)
    return newStore
  }

  // Delete a store by id
  static async deleteStore(id) {
    const index = stores.findIndex(s => s.id === id)
    if (index !== -1) {
      return stores.splice(index, 1)[0]
    }
    return null
  }

  // Update a store
  static async updateStore(id, updatedData) {
    const store = stores.find(s => s.id === id)
    if (store) {
      Object.assign(store, updatedData)
      return store
    }
    return null
  }
}
