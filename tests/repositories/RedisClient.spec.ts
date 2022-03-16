import RedisClient from '../../src/repositories/RedisClient';

import { createClient } from 'redis';

describe('Redis Client methods test', () => {

  const instance = {
    key: 'klmdfs98u',
    type: 'book',
    instance: {
      name: '1984',
      price: 45,
      discount: 0.5,
      writer: 'string',
      genre: 'drama',
    },
  };

  const secontInstance = {
    key: 's5f84e84f5s',
    type: 'book',
    instance: {
      name: '1984',
      price: 45,
      discount: 0.5,
      writer: 'string',
      genre: 'drama',
    },
  };

  const client = createClient();

  beforeAll( async () => {
    client.get = jest.fn();
    client.set = jest.fn();
    client.del = jest.fn();
  });

  it('Should create a redis instance and return', async () => {

    client.set = jest.fn().mockImplementation( () => 'OK');

    const redisClient = new RedisClient(client);

    const result = await redisClient.create(instance);

    expect(result).toEqual(instance.instance);

    await redisClient.destroy({ key: instance.key, type: instance.type });

  });

  it('Should destroy a redis instance and return', async () => {

    client.del = jest.fn().mockImplementation( () => 1);
  
    const redisClient = new RedisClient(client);

    await redisClient.create(instance);

    const result = await redisClient.destroy({ key: instance.key, type: instance.type });

    expect(result).toEqual(1);

  });

  it('Should find one instance and return it', async () => {
    
    const stringFiedInstance = JSON.stringify(instance.instance);

    client.get = jest.fn().mockImplementation( () => stringFiedInstance);
  
    const redisClient = new RedisClient(client);

    await redisClient.create(instance);

    const result = await redisClient.findOne({ key: instance.key, type: instance.type });

    expect(result).toEqual(instance.instance);

    await redisClient.destroy({ key: instance.key, type: instance.type });

  });

  it('Should find all instances of one type and return then', async () => {

    const keysArray = ['book-klmdfs98u', 'book-s5f84e84f5s'];

    const firstInstanceStringfied = JSON.stringify(instance.instance);

    const secondInstanceStringfied = JSON.stringify(secontInstance.instance);

    client.keys = jest.fn().mockImplementation( () => keysArray);

    client.get = jest.fn().mockImplementationOnce( () => firstInstanceStringfied)
      .mockImplementationOnce( () => secondInstanceStringfied);
  
    const redisClient = new RedisClient(client);

    await redisClient.create(instance);

    await redisClient.create(secontInstance);

    const result = await redisClient.findAll({ type: instance.type });

    expect(result).toEqual([instance.instance, secontInstance.instance]);

    await redisClient.destroy({ key: instance.key, type: instance.type });

    await redisClient.destroy({ key: secontInstance.key, type: secontInstance.type });

  });

  it('Should update a instance if exist, or create a new one if not', async () => {

    client.set = jest.fn().mockImplementation( () => 'OK');
  
    const redisClient = new RedisClient(client);

    const result = await redisClient.update(instance);

    expect(result).toEqual(instance.instance);

    await redisClient.destroy({ key: instance.key, type: instance.type });

  });

});