import ServerFactory from './factories/ServerFactory';
import db from './services/MysqlServer';
import log from './services/Logger';
import ElasticServer from './services/ElasticServer';

db.authenticate().then(() => {
  const elasticServer = new ElasticServer();
  elasticServer.init().then(() => {
    const server = ServerFactory.create();
    server.init();
    log.info(`Server listening on port ${process.env.PORT}...`);
  }).catch((error) => {
    log.error(error.stack);
  });
}).catch((error) => {
  log.error(error.stack);
});