import * as React from 'react';
import { Container } from '@modules/LayoutsModule/Container';

import styled from 'styled-components';
import { AppLayoutMain } from '@modules/LayoutsModule/AppLayoutMain';
import { ILoggerService } from '@ifaces/ILoggerService';
import { NotificationsContainer } from '@modules/Invites/NotificationsContainer';
import Flex from '@libs/Flex';

const Heading = styled.h2`
  // color: dodgerblue;
  color: #53575b;
`;

const Count = styled(Flex)`
  width: 20px;
  height: 20px;

  marginn: 10px;
  justify-content: center;
  align-items: center;

  background: #007e7e;

  color: white;
`;

interface IHomePageProps {
  logger: ILoggerService;
  [propName: string]: any;
}

export const HomePage = (props: IHomePageProps) => {
  return (
    <AppLayoutMain>
      <Container style={{ height: '100%' }}>
        <Flex>
          <Heading>Invitations</Heading>
        </Flex>

        <NotificationsContainer />
      </Container>
    </AppLayoutMain>
  );
};
