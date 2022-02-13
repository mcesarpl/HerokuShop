import express from 'express';
import BookControllerFactory from '../factories/Controllers/BookControllerFactory';

const router = express.Router();
const bookController = BookControllerFactory.create();

router.post('/insert', (req, res) => bookController.create(req, res));

router.delete('/delete/:id', (req, res) => bookController.delete(req, res));

router.put('/update', (req, res) => bookController.update(req, res));

router.get('/find', (req, res) => bookController.find(req, res));

export default router;
