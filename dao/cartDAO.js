// cartDAO.js
let cartsCollection;


export default class CartDAO {

  static async injectDB(conn) {
    if (cartsCollection) {
      return;
    }
    try {
      cartsCollection = await conn.db(process.env.MOVIEREVIEWS_COLLECTION)
        .collection('carts');
    } catch(e) {
      console.error(`Unable to connect in CartDAO: ${e}`);
    }
  }


}
