import * as dotenv from 'dotenv';
import { ServerFactory } from './factories/ServerFactory';

const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./config/${env}.env` });

const server = ServerFactory.create();
server.init();