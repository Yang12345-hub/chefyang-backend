// storeDAO.js
let storesCollection;

export default class StoreDAO {
  static async injectDB(conn) {
    if (storesCollection) {
      return;
    }
    try {
      storesCollection = await conn.db(process.env.MOVIEREVIEWS_COLLECTION)
        .collection('stores');
    } catch(e) {
      console.error(`Unable to connect in StoreDAO: ${e}`);
    }
  }
}
