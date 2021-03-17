import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import 'semantic-ui-css/semantic.min.css';

import { RootStore } from './App/Store/RootStore';
import { App } from './App';

import Theme from '@styled/Theme';

import { ThemeProvider } from 'styled-components';
import { LoggerService, LoggerLevels } from '@libs/LoggerService';

const logger = new LoggerService();
logger.setLevel(LoggerLevels.DEBUG);

ReactDOM.render(
  <Provider
    rootStore={new RootStore(logger)}
  >
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
