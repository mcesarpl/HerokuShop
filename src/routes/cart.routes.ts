import express from 'express';
import CartControllerFactory from '../factories/Controllers/CartControllerFactory';

const router = express.Router();
const cartController = CartControllerFactory.create();

router.post('/insert', (req, res) => cartController.create(req, res));

router.delete('/delete/:id', (req, res) => cartController.delete(req, res));

router.put('/update', (req, res) => cartController.update(req, res));

router.get('/find', (req, res) => cartController.find(req, res));

export default router;
