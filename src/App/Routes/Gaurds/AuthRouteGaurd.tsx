import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { LoggerService } from '@libs/LoggerService';
import { PageLoader } from '@shared/Loader';

interface IAuthRouteGaurd {
  component: any;
  rootStore?: any;
  redirectTo?: string;
  [propName: string]: any;
}

@inject('rootStore')
@observer
export class AuthRouteGaurd extends React.Component<IAuthRouteGaurd, any> {
  public static defaultProps = {
    redirectTo: '/login',
  };

  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  public componentDidMount() {
    this.isUserLoggedIn();
  }

  public async isUserLoggedIn() {
    try {
      const res = await this.props.rootStore.authStore.isLoggedin();
    } catch (err) {
      const logger = new LoggerService();
      logger.error('AuthRouteGaurd.isUserLoggedIn() ', err);
    } finally {

      setTimeout(() => {
        this.setState({
          isLoading: false,
        });
      }, 500);

    }
  }

  public render() {
    if (this.state.isLoading) {
      return <PageLoader />;
    }
    return (
      <PrivateRoute
        component={this.props.component}
        isAuthenticated={this.props.rootStore.authStore.isAuthenticated}
        redirectTo={this.props.redirectTo}
        {...this.props}
      />
    );
  }
}

interface IPrivateRoute {
  component: any;
  isAuthenticated: boolean;
  redirectTo: string;
  [propsName: string]: any;
}

const PrivateRoute = ({
  component,
  isAuthenticated,
  redirectTo,
  ...rest
}: IPrivateRoute) => {
  const Comp = component;
  return (
    <Route
      {...rest}
      // tslint:disable-next-line: jsx-no-lambda
      render={props =>
        isAuthenticated ? <Comp {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};
