// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as bookController from '../controllers/book.server.controller';

// get an instance of express router
const router = express.Router();

console.log('From book route');

router.get('/',bookController.getBooks)
router.post('/',bookController.addBook)
router.put(bookController.updateBook);

router.route('/:id')
      .get(bookController.getBook)
      .delete(bookController.deleteBook);


export default router;
