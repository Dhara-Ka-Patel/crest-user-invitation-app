// tslint:disable-next-line:import-name
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { LoginUI } from './LoginUI';
import { RootStore } from '../../Store/RootStore';
import { ILoggerService } from '@ifaces/ILoggerService';
import { INotificationService } from '@ifaces/INotificationService';

interface ILoginComponentProps {
  rootStore?: RootStore;
  mutate?: any;
  logger: ILoggerService;
  notificationService: INotificationService;
}

@inject('rootStore')
@observer
class LoginComponent extends React.Component<ILoginComponentProps> {
  /**
   *
   * @param props any
   *
   */
  constructor(props: any) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  /**
   *
   * @param values values of controlls used in web-rx form
   * @param actions form actions
   */
  public async handleLogin(values: any) {
    try {

      await this.props.rootStore.authStore.login(values.email, values.password);

      this.props.notificationService.successMessage({
        msg: 'LoggedIn successfully!',
      });
    } catch(error) {
      this.props.notificationService.errorMessage({
        msg: 'Username or Password is invalid!',
      });
    }
    
  }

  /**
   *
   * @param title Title of Error
   * @param description Description of error
   * @param time Time of error occured
   */
  public showError(title: any, description: any, time: number) {
    // const notification = CreateNotification({ title, description, type: 'error', actions: [], isDismissAllowed: true, time });
    // this.props.rootStore.commonStore.showNotifications([notification]);
  }

  /**
   * for rendering of DOM
   *
   */
  public render() {
    return (
      <div>
        <LoginUI onSubmit={this.handleLogin} />
      </div>
    );
  }
}

// export const Login = graphql(userLoginMutaion)(LoginComponent);
export const Login = LoginComponent;
