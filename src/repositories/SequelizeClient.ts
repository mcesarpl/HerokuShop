import Sequelize, { Model } from 'sequelize';
import { Database } from '../interfaces';

export default class SequelizeClient<T>
implements Database<T, Model<T>> {
  constructor(private readonly model: Sequelize.ModelStatic<Model<T>>) {}

  async create(instance: T): Promise<Model<T>> {
    return this.model.create(instance);
  }

  async update(instance: T): Promise<Model<T>> {
    return this.model.create(instance);
  }

  async findOne(param: object): Promise<Model<T> | null> {
    return this.model.findOne({ where: { ...param } });
  }

  async destroy(param: object): Promise<number> {
    return this.model.destroy({ where: { ...param } });
  }

  async findAll(param: object): Promise<Model<T>[]> {
    return this.model.findAll({ where: { ...param } });
  }
}
