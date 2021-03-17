import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { flow } from 'lodash';

import { AuthRouteGaurd } from 'src/App/Routes/Gaurds/AuthRouteGaurd';
import { UnauthRouteGaurd } from 'src/App/Routes/Gaurds/UnauthRouteGaurd';

import { HomePage } from '../Pages/Home';
import { LoginPage } from '../Pages/Login';

import { Box } from '@modules/LayoutsModule/Box';
import { loggerHOC } from '@hoc/LoggerHOC';

const HomePageExtra = flow(loggerHOC)(HomePage);

export default () => (
  <BrowserRouter>
    <Box>
      <Switch>
        <AuthRouteGaurd path="/" component={HomePageExtra} exact={true} />
      
        <UnauthRouteGaurd path="/login" component={LoginPage} />
        
      </Switch>
    </Box>
  </BrowserRouter>
);
