import * as React from 'react';
import { NotificationService } from '../Libs/NotificationService';

export function notificationHOC(ComponentToWrap: any) {
  return class LoggerWrapperComponent extends React.Component {
    public notificationService = new NotificationService();
    public render() {
      return (
        <ComponentToWrap
          {...this.props}
          notificationService={this.notificationService}
        />
      );
    }
  };
}
