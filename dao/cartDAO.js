// cartDAO.js
import { ObjectId } from 'mongodb';

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

  static async getCart(userId) {
    try {
      let cart = await cartsCollection.findOne({userId});
      return cart || { userId };
    } catch (e) {
      console.error(`Unable to get cart by ID: ${e}`);
      throw e;
    }
  }

  static async upsertCart(userId, data) {
    try {
      const filter = { userId }; 
      if (data.cartId) {
        filter._id = new ObjectId(data.cartId);
      }
      const update = {
        $set: {
          items: data.items,
        },
        $setOnInsert: {
          userId,
        },
      };

      // returns a result summary
      const result = await cartsCollection.updateOne(filter, update, { upsert: true });
      return result;
    } catch (e) {
      console.error(`Unable to upsert cart: ${e}`);
      throw e;
    }
  }
}
