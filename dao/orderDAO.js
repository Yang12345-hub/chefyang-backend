// orderDAO.js
let ordersCollection;


export default class OrderDAO {

  static async injectDB(conn) {
    if (ordersCollection) {
      return;
    }
    try {
      ordersCollection = await conn.db(process.env.MOVIEREVIEWS_COLLECTION)
        .collection('orders');
    } catch(e) {
      console.error(`Unable to connect in OrderDAO: ${e}`);
    }
  }


}