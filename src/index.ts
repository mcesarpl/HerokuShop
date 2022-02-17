import ServerFactory from './factories/ServerFactory';
import db from './services/MysqlServer';
import log from './services/Logger';

db.authenticate().then(() => {
  const server = ServerFactory.create();
  server.init();
  log.info(`Server listening on port ${process.env.PORT}...`);
}).catch((error) => {
  log.error(error.stack);
});