// commentDAO.js
let commentsCollection;


export default class CommentDAO {

  static async injectDB(conn) {
    if (commentsCollection) {
      return;
    }
    try {
      commentsCollection = await conn.db(process.env.MOVIEREVIEWS_COLLECTION)
        .collection('comments');
    } catch(e) {
      console.error(`Unable to connect in CommentDAO: ${e}`);
    }
  }


}