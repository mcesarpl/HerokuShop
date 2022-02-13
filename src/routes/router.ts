import express from 'express';
import BookControllerFactory from '../factories/Controllers/BookControllerFactory';

const router = express.Router();
const bookController = BookControllerFactory.create();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'App listening' });
});

router.post('/insertBook', (req, res) => bookController.create(req, res));

router.delete('/deleteBook/:id', (req, res) => bookController.delete(req, res));

router.put('/updateBook', (req, res) => bookController.update(req, res));

router.get('/findBooks', (req, res) => bookController.find(req, res));

export default router;
