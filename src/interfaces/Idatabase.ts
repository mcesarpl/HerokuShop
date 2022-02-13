export interface Database<I, T> {
  create(instance: I): Promise<T>;
  update(instance: I): Promise<T>;
  findOne(param: object): Promise<T | null>;
  findAll(param: object): Promise<T[]>;
  destroy(param: object): Promise<number>;
}
