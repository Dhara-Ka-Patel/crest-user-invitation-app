import { AuthStore } from './AuthStore';
import { ILoggerService } from '@ifaces/ILoggerService';

export class RootStore {
  public authStore: AuthStore;
  private logger: ILoggerService;

  constructor(logger: ILoggerService) {
    this.logger = logger;
    this.authStore = new AuthStore(this, logger);
  }
}
