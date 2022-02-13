import express from 'express';
import GameControllerFactory from '../factories/Controllers/GameControllerFactory';

const router = express.Router();
const gameController = GameControllerFactory.create();

router.post('/insert', (req, res) => gameController.create(req, res));

router.delete('/delete/:id', (req, res) => gameController.delete(req, res));

router.put('/update', (req, res) => gameController.update(req, res));

router.get('/find', (req, res) => gameController.find(req, res));

export default router;
