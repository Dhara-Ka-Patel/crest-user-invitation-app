import * as React from 'react';
import { List, Input } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import Flex from "@libs/Flex";
import Box from "@libs/Box";
import styled from 'styled-components';
import * as FeatherIcon from 'react-feather';
import {get} from "lodash";
import { RootStore } from '@store/RootStore';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #f6f6f6;
  border-bottom: 1px solid #e0e1e2;
`;

const MainContainer = styled(Box)`
  align-items: center;
  justify-content: space-between;
  display: flex;

  height: 100%;
`;

const PlainInput = styled(Input)`
  & input {
    border: none !important;
    background: #f6f6f6 !important;
  }

  & input:selected {
    border: none !important;
  }
`;

const SubContainer1 = styled(Box)`
  align-items: center;
  justify-content: flex-start;
  display: flex;

  padding-left: 20px;

  font-size: 18px;
  font-weight: 600;
  color: #007e7e;
`;

const SubContainer2 = styled(Box)`
  align-items: center;
  justify-content: flex-end;
  display: flex;

  padding-right: 24px;
`;

export const LabelDiv = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  color: #2d373c;
  padding-left: 10px;
`;

interface IAppHeaderProps {
  [name: string]: any;
  rootStore?:RootStore;
}

@inject('rootStore')
@observer
export class AppHeader extends React.Component<IAppHeaderProps, any> {
  constructor(props: any) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  public render() {
    return (
      <HeaderWrapper>
        {/* this is header<Button onClick={this.handleLogout}>Logout</Button> */}

        <MainContainer>
          <SubContainer1>
            {get(this.props.rootStore.authStore.me, "first_name", "-") }&nbsp;{get(this.props.rootStore.authStore.me, "last_name", "-")} 
          </SubContainer1>

          <SubContainer2>
            <Flex
              alignItems="center"
              justifyContent="flex-end"
              onClick={this.handleLogout}
              style={{ cursor: 'pointer' }}
            >
              <FeatherIcon.LogOut color="#2D373C" size={16} />
              <LabelDiv>Logout</LabelDiv>
            </Flex>
          </SubContainer2>
        </MainContainer>
      </HeaderWrapper>
    );
  }

  private handleLogout() {
    this.props.rootStore.authStore.logout();
  }
}
