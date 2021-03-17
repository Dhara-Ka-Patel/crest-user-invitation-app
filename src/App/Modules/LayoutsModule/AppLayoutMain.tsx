import * as React from 'react';
import { Segment, Sidebar, Header, Grid } from 'semantic-ui-react';
import { AppHeader } from './AppHeader';
import { PageWrapper } from './PageWrapper';
import { Box } from './Box';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ContentBlockFlex = styled.div`
  height: calc(100% - 60px);

  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ContentBlock = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

interface IAppLayoutMainProps {
  [propName: string]: any;
}

export class AppLayoutMain extends React.Component<IAppLayoutMainProps, any> {
  public render() {
    return (
      <MainContainer>
        <ContentBlock>
          <AppHeader />
          <ContentBlockFlex>
            <ContentBlock>
              <PageWrapper>{this.props.children}</PageWrapper>
            </ContentBlock>
          </ContentBlockFlex>
        </ContentBlock>
      </MainContainer>
    );
  }
}
