// dishesDAO.js
import { ObjectId } from 'mongodb';

let dishesCollection;

export default class DishesDAO {
  static async injectDB(conn) {
    if (dishesCollection) {
      return;
    }
    try {
      dishesCollection = await conn.db(process.env.MOVIEREVIEWS_COLLECTION)
        .collection('dishes');
    } catch(e) {
      console.error(`Unable to connect in DishDAO: ${e}`);
    }
  }

  static async getDishes({ dishId } = {}) {
    let cursor;
    try {
      const query = {
        ...(dishId && { _id: new ObjectId(dishId) })
      };

      cursor = await dishesCollection.find(query)
      const dishesList = await cursor.toArray();
      return { dishesList };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { dishesList: [] };
    }
  }

}
