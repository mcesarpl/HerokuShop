/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express';
import { Database } from '../interfaces/Idatabase';
import Game from '../classes/Game';
import log from '../services/Logger';

export default class GameController {

  database: Database<Game, any>;

  constructor(DatabaseClient: Database<Game, any>) {
    this.database = DatabaseClient;
  }

  async create(req: Request, res: Response) {
    const newGame = new Game(req.body);

    try {
      const result = await this.database.create(newGame);

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
        const newGame = new Game(req.body);
        result = await oldInstance.update(newGame);
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
      return res.status(500).json({ message: 'Internal Server Error' });
      
    }
  }
}