import * as dotenv from 'dotenv';

export default class InitEnvt {
  static init() {
    const env = process.env.NODE_ENV || 'dev';
    if (env === 'dev') {
      dotenv.config({ path: `./config/${env}.env` });
    }
  }
}