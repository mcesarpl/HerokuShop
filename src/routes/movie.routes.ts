import express from 'express';
import MovieControllerFactory from '../factories/Controllers/MovieControllerFactory';

const router = express.Router();
const movieController = MovieControllerFactory.create();

router.post('/insert', (req, res) => movieController.create(req, res));

router.delete('/delete/:id', (req, res) => movieController.delete(req, res));

router.put('/update', (req, res) => movieController.update(req, res));

router.get('/find', (req, res) => movieController.find(req, res));

export default router;
