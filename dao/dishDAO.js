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
}
