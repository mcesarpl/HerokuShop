/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express';
import { Database } from '../interfaces/Idatabase';
import Movie from '../classes/Movie';

export default class MovieController {

  database: Database<Movie, any>;

  constructor(DatabaseClient: Database<Movie, any>) {
    this.database = DatabaseClient;
  }

  async create(req: Request, res: Response) {
    const newMovie = new Movie(req.body);

    try {
      const result = await this.database.create(newMovie);

      return res.status(200).json(result);

    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
      
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await this.database.destroy({ id });

      return res.status(201).send();

    } catch (error) {
      return res.status(500).send();
    }
  }

  async update(req: Request, res: Response) {
    const body = req.body;

    try {
      const oldInstance = await this.database.findOne({ id: body.id });

      let result = {};

      if (oldInstance) {
        const newMovie = new Movie(req.body);
        result = await oldInstance.update(newMovie);
      }

      return res.status(200).json(result);

    } catch (error) {
      console.log(error);
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