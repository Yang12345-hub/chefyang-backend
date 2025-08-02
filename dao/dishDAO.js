// dishesDAO.js
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

  static async getDishes({} = {}) {
    let cursor;
    try {
      cursor = await dishesCollection.find({})
      const dishesList = await cursor.toArray();
      return { dishesList };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { dishesList: [] };
    }
  }

}
