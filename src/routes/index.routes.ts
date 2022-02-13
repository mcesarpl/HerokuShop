import express from 'express';
import BookRoutes from './book.routes';
import MovieRoutes from './movie.routes';
import GameRoutes from './game.routes';
import CartRoutes from './cart.routes';

const router = express.Router();

router.get('/check', (req, res) => {
  res.status(200).json({ message: 'App listening...' });
});

router
  .use('/book', BookRoutes)
  .use('/movie', MovieRoutes)
  .use('/game', GameRoutes)
  .use('/cart', CartRoutes);

export default router;
