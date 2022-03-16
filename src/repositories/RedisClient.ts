import { Database, Item } from '../interfaces';

import { RedisClientType, RedisDefaultModules, RedisModules, RedisScripts } from 'redis';

interface RedisInstance {
  key: string;
  type: string;
  instance: Item;
}

interface RedisKey {
  key: string;
  type: string;
}

interface FindAllQuery {
  type: string;
}

export default class RedisClient
implements Database<RedisInstance, Item | null> {
  constructor(private readonly client:  RedisClientType<RedisDefaultModules & RedisModules, RedisScripts>) {}

  private generateKey(key: string, type: string): string {
    return type + '-' + key;
  }

  private stringifyInstance(instance: Item): string {
    return JSON.stringify(instance);
  }

  private parseInstance(instance: string | null): Item | null {
    if (!instance) {
      return null;
    }
    return JSON.parse(instance);
  }

  async create(inputInstance: RedisInstance) {
    const { key, type, instance } = inputInstance;
    const generatedKey = this.generateKey(key, type);
    const stringified = this.stringifyInstance(instance || {});

    const result = await this.client.set(generatedKey, stringified);

    if (result !== 'OK') {
      return null;
    }

    return instance;
  }

  async update(inputInstance: RedisInstance) {
    const { key, type, instance } = inputInstance;
    const generatedKey = this.generateKey(key, type);
    const stringified = this.stringifyInstance(instance || {});
    const result = await this.client.set(generatedKey, stringified);

    if (result !== 'OK') {
      return null;
    }

    return instance;
  }

  async findOne(inputInstance: RedisKey) {
    const { key, type } = inputInstance;
    const generatedKey = this.generateKey(key, type);
    const instance = await this.client.get(generatedKey);
    const parsedInstance = this.parseInstance(instance);
    return parsedInstance;
  }

  async destroy(inputInstance: RedisKey) {
    const { key, type } = inputInstance;
    const generatedKey = this.generateKey(key, type);
    return this.client.del(generatedKey);
  }

  async findAll(query: FindAllQuery) {
    const { type } = query;
    const keys = await this.client.keys(`${type}-*`);

    if (!keys) {
      return [];
    }

    const values = Promise.all(
      keys.map(async (key) => {
        const instance = await this.client.get(key);
        return this.parseInstance(instance);
      }),
    );

    return values;
  }
}
