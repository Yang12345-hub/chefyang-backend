// store.controller.js
// Handles store-related APIs like getting and adding stores

export default class StoreController {
  static async apiGetStores(req, res, next) {
   const response = [
    { id: 1, name: 'San Jose Store' },
    { id: 2, name: 'Sunnyvale Store' }
   ]
   res.json(response);
  }
}


