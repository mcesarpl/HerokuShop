/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express';
import { Database } from '../interfaces/Idatabase';
import Book from '../classes/Book';
import log from '../services/Logger';

export default class BookController {

  database: Database<Book, any>;

  constructor(DatabaseClient: Database<Book, any>) {
    this.database = DatabaseClient;
  }

  async create(req: Request, res: Response) {
    const newBook = new Book(req.body);

    try {
      const result = await this.database.create(newBook);

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
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  }

  async update(req: Request, res: Response) {
    const body = req.body;

    try {
      const oldInstance = await this.database.findOne({ id: body.id });

      let result = {};

      if (oldInstance) {
        const newBook = new Book(req.body);
        result = await oldInstance.update(newBook);
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