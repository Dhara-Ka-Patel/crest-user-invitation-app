import * as React from 'react';
import styled from 'styled-components';
import Flex from "@libs/Flex";
import Box from "@libs/Box";

const MainWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  // background: #eaf6f6;
  background: #f3f2f1;
`;

const HeaderContainer = styled.div`
  padding: 90px 100px 10px 110px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content:center;
  font-size: 32px;
    font-weight: bold;
    color: #007e7e;

  // 1900 * 1080 - wide screen
  @media only screen and (min-width: 1900px) {
    padding-left: 150px;
  }
`;

const FormContainer = styled(Flex)`
  padding: 120px 140px 0px 140px;

  height: calc(100vh - 124px);
  width: 100%

  display: flex;
  justify-content: center;
  align-items: flex-start;

`;

interface IAuthPageLayoutProps {
  bgSrc?: string;
  [name: string]: any;
  renderRightContent: (props: any) => any;
}

export class AuthPageLayout extends React.Component<IAuthPageLayoutProps, any> {

  public render() {
    return (
      <MainWrapper>
        <HeaderContainer className="row start-xs">
          User Notification App
        </HeaderContainer>
        <FormContainer className="row end-xs middle-xs" src={this.props.bgSrc}>
          {/* <img src={backgroundEngineer} /> */}
          {this.props.renderRightContent(this.props)}
        </FormContainer>
      </MainWrapper>
    );
  }
}
