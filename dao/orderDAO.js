import { ObjectId } from "mongodb";
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

  static async getCart(userId) {
    try {
      return await ordersCollection.find({userId}) || { itemIds: [] };
    } catch (e) {
      console.error(`Unable to get cart by ID: ${e}`);
      throw e;
    }
  }

  static async upsertCart(userId, data) {
    try {
      const filter = { userId }; 
      if (data.cartId) {
        filter[_id] = ObjectId(data.cartId);
      }
      const update = {
        $set: {
          itemIds: data.itemIds,
        },
        $setOnInsert: {
          userId
        },
      };

      // returns a result summary
      const result = await this.ordersCollection.updateOne(filter, update, { upsert: true });
      return result;
    } catch (e) {
      console.error(`Unable to upsert cart: ${e}`);
      throw e;
    }
  }
}