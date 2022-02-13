import ServerFactory from './factories/ServerFactory';

import db from './services/MysqlServer';

db.authenticate().then(() => {
  const server = ServerFactory.create();
  server.init();
  console.log('Server has started...');
}).catch((error) => {
  console.log(error);
});