import * as React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.less';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import { Box } from '@modules/LayoutsModule/Box';

export const App: any = (props: any) => (
  <Box>
    <Routes />
    <ToastContainer />
  </Box>
);
