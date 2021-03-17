import * as React from 'react';
import { Login } from '@modules/AuthModule/Login';
import { loggerHOC } from '@hoc/LoggerHOC';
import { notificationHOC } from '@hoc/NotificationHOC';
import { flow } from 'lodash';
import { AuthPageLayout } from '@modules/AuthModule/AuthLayout';

const LoginWithLogger = flow(
  loggerHOC,
  notificationHOC
)(Login);

export const LoginPage = () => {
  return (

    <AuthPageLayout renderRightContent={renderRightContent} />
  );
};

function renderRightContent(props: any) {
  return <LoginWithLogger />;
}
