import * as React from 'react';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';
import styled from 'styled-components';

interface IPageLoaderProps {
  style?: any;
}

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageLoader = (props: IPageLoaderProps) => (
  <LoaderContainer {...props.style}>
    <Loader active={true} />
  </LoaderContainer>
);
