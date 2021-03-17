import * as Logger from 'js-logger';
import { ILoggerService } from '@ifaces/ILoggerService';

export const LoggerLevels = {
  TRACE: Logger.TRACE,
  DEBUG: Logger.DEBUG,
  INFO: Logger.INFO,
  TIME: Logger.TIME,
  WARN: Logger.WARN,
  ERROR: Logger.ERROR,
  OFF: Logger.OFF,
};

Logger.useDefaults();

export class LoggerService implements ILoggerService {
  /**
   * Global Logger
   */
  private static LOGGER = Logger;

  /**
   * Local logger object
   * named logger
   */
  private logger: any;

  constructor(name?: string) {
    if (name) {
      this.logger = Logger.get(name);
    }
  }

  /**
   * Setlevel for logger
   * @param level LoggerLevels
   * @param logger Logger
   * Provide logger to set level of named logger
   * Else it will set level of global logger
   */
  public setLevel(level: { value: number; name: string }) {
    if (this.logger) {
      this.logger.setLevel(level);
      this.info('Local log level set to ', level.name);
    } else {
      LoggerService.LOGGER.setLevel(level);
      this.info('Global log level set to ', level.name);
    }
  }

  public error(...msg: any) {
    this.log(msg, 'error');
  }

  public warn(...msg: any) {
    this.log(msg, 'warn');
  }

  public info(...msg: any) {
    this.log(msg, 'info');
  }

  public debug(...msg: any) {
    this.log(msg, 'debug');
  }

  public trace(...msg: any) {
    this.log(msg, 'trace');
  }

  private log(msg: any, ky: string) {
    const logger = this.logger || LoggerService.LOGGER;
    logger[ky](...msg);
  }
}
