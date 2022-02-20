/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express';
import { Database } from '../interfaces/Idatabase';
import Cart from '../classes/Cart';
import log from '../services/Logger';
import ValidateCart from '../utils/ValidateCart';

export default class CartController {

  database: Database<Cart, any>;

  constructor(DatabaseClient: Database<Cart, any>) {
    this.database = DatabaseClient;
  }

  async create(req: Request, res: Response) {
    const newCart = new Cart(req.body);
    const isValid = await ValidateCart.validate(newCart);

    if (!isValid) {
      log.error('Invalid cart');
      return res.status(422).json({ message: 'Unprocessable Entity' });
    }

    try {
      const result = await this.database.create(newCart);

      return res.status(200).json(result);

    } catch (error) {
      log.error(error.stack);
      return res.status(500).json({ message: 'Internal Server Error' });  
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await this.database.destroy({ id });

      return res.status(201).send();

    } catch (error) {
      log.error(error.stack);
      return res.status(500).send();
    }
  }

  async update(req: Request, res: Response) {
    const body = req.body;

    try {
      const oldInstance = await this.database.findOne({ id: body.id });

      let result = {};

      if (oldInstance) {
        const newCart = new Cart(req.body);
        result = await oldInstance.update(newCart);
      }

      return res.status(200).json(result);

    } catch (error) {
      log.error(error.stack);
      return res.status(500).json({ message: 'Internal Server Error' });
      
    }
  }

  async find(req: Request, res: Response) {
    let query = {};

    if (req.query) {
      query = req.query;
    }

    try {
      const result = await this.database.findAll(query);

      return res.status(200).json(result);

    } catch (error) {
      log.error(error.stack);
      return res.status(500).json({ message: 'Internal Server Error' });
      
    }
  }
}