import ExpressServer from '../services/ExpressServer';

export default class ServerFactory {
  public static create() {
    return new ExpressServer();
  }
}