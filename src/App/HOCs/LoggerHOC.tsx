import * as React from 'react';
import { LoggerService } from '../Libs/LoggerService';

export function loggerHOC(ComponentToWrap: any, name: string = null) {
  return class LoggerWrapperComponent extends React.Component {
    public logger = new LoggerService(name);
    public render() {
      return <ComponentToWrap {...this.props} logger={this.logger} />;
    }
  };
}

/*
export class LoggerHOC {
  public static setLoggerService(service: ILoggerService) {
    LoggerHOC.LOGGER = service;
  }

  public static build(ComponentToWrap: any, name: string = null) {
    const logger = new LoggerService(name);
    // tslint:disable-next-line: max-classes-per-file
    return class LoggerWrapperComponent extends React.Component {
      public render() {
        return <ComponentToWrap {...this.props} logger={logger} />;
      }
    };
  }
  private static LOGGER: ILoggerService;

}
*/
