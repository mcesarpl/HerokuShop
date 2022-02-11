import * as dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./config/${env}.env` });

import { Sequelize } from 'sequelize';

export default new Sequelize(
  process.env.MYSQL_NAME || '',
  process.env.MYSQL_USER || '',
  process.env.MYSQL_PASS || '',
  {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
  },
);
