import * as React from 'react';
import { List, Input } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import Flex from '@libs/Flex';
import Box from '@libs/Box';
import styled from 'styled-components';
import * as FeatherIcon from 'react-feather';
import { NotificationComponent } from './NotificationComponent';
import { RootStore } from '@store/RootStore';
import { get } from 'lodash';

const Card = styled(Box)`
  width: 100%;
  padding: 24px;
  margin-bottom: 24px;
  margin-top: 24px;

  background: rgb(255, 255, 255);
  border: 1px solid rgb(240, 241, 242);
  box-shadow: rgb(25 42 70 / 15%) 0px 0px 18px;
  border-radius: 4px;
`;

interface IProps {
  rootStore?: RootStore;
  [name: string]: any;
}

@inject('rootStore')
@observer
export class NotificationsContainer extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    console.log('--->', this.props.rootStore.authStore.notifications);

    const { notifications } = this.props.rootStore.authStore;
    return (
      <Card>
        {notifications && notifications.length > 0 ? (
          <React.Fragment>
            {notifications.map((invites: any) => (
              <NotificationComponent
                name={`${get(invites, 'vector', '')} Invite`}
                date={get(invites, 'invite_time', '')}
                description={get(invites, 'invite', '')}
                hasRead={get(invites, 'status', '') === 'read' ? true : false}
                icon={get(invites, 'vector', '')}
              />
            ))}
          </React.Fragment>
        ) : (
          <Flex py={100} justifyContent={'center'} alignItems="center">
            No Invites to show
          </Flex>
        )}
      </Card>
    );
  }
}
