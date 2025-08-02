import mongodb from 'mongodb';
import dotenv from 'dotenv';
import app from './server.js';
import CartDAO from './dao/cartDAO.js';
import CommentDao from './dao/commentDAO.js';
import DishDAO from './dao/dishDAO.js';
import OrderDAO from './dao/orderDAO.js';
import StoreDAO from './dao/storeDAO.js';


async function main() {
  dotenv.config();

  const client = new mongodb.MongoClient(
    process.env.MOVIEREVIEWS_DB_URI
  );
  const port = process.env.PORT || 8000;

  try {
    // Connect to MongoDB server
    await client.connect();
    await CartDAO.injectDB(client);
    await CommentDao.injectDB(client);
    await DishDAO.injectDB(client);
    await OrderDAO.injectDB(client);
    await StoreDAO.injectDB(client);


    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main().catch(console.error);

export default app;