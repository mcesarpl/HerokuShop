import ExpressServer from '../services/ExpressServer';

export class ServerFactory {
  public static create() {
    return new ExpressServer();
  }
}