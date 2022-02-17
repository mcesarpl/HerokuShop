import { createLogger, format, transports } from 'winston';
import moment from 'moment';

class Logger {
  create() {
    const { combine, colorize, printf } = format;
 
    const { Console } = transports;
     
    const myFormat = printf(({ level, message }) => {
      return `${moment()
        .format('YYYY-MM-DD HH:mm:ss')
        .trim()} [${level}] - ${message}`;
    });
     
    const wintstonLogger = createLogger({
      level: 'debug',
    });

    const errorStackFormat = format((info) => {
      if (info.stack) {
        return false;
      }
      return info;
    });

    const consoleTransport = new Console({
      format: combine(colorize(), errorStackFormat(), myFormat),
    });

    wintstonLogger.add(consoleTransport);

    return wintstonLogger;
  }
}
 
export default new Logger().create();