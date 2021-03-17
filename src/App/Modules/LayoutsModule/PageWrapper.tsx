import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  flex: 1;
  display: flex;
`;

export const PageWrapper = (props: any) => (
  <Box>
    <Inner>{props.children}</Inner>
  </Box>
);
