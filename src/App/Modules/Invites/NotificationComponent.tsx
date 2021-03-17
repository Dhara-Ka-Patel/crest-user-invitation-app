import * as React from 'react';
import { List, Input } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import Flex from '@libs/Flex';
import Box from '@libs/Box';
import styled from 'styled-components';
import * as FeatherIcon from 'react-feather';
import * as moment from "moment";

const WrapperDiv = styled(Flex)`
  padding: 8px 0px;

  border-bottom: 1px solid rgb(222, 222, 223);
  background: ${(props: any) =>
    props.isSelected ? 'rgb(234, 246, 246)' : '#ffffff'};

    :last-child {

  border-bottom: none;
    }
`;

const ImageDiv = styled(Flex)`
  padding: 15px;

  border-radius: 50%;

  align-items: center;
  justify-content: center;

  // background: rgb(234 234 234 / 80%);
  background: rgb(236 232 232);

  color: ${(props: any) => (props.isSelected ? '#007777' : 'rgb(0, 28, 28)')};
`;

const NameText = styled(Box)`
  font-weight: ${(props: any) => (props.isSelected ? 'normal' : 'bold')};
  font-size: 18px;
  line-height: 18px;
  color: ${(props: any) => (props.isSelected ? '#007e7e' : 'rgb(0, 28, 28)')};
  padding: 5px 0px;
`;

const DescriptionText = styled(Box)`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-right: 20px;
  color: rgb(121, 127, 130);
`;

const TimeText = styled(Box)`
  color: rgb(0, 28, 28);
  font-weight: bold;
  font-size: 12px;
  min-width: 120px;
`;

interface IProps {
  name: string;
  date: string;
  description: string;
  hasRead: boolean;
  icon: string;

  [name: string]: any;
}

@inject('rootStore')
@observer
export class NotificationComponent extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  public renderIcon = (icon: string) => {
    if (icon === 'Twitter') {
      return <FeatherIcon.Twitter size={30} strokeWidth={'2.5px'} />;
    }

    if (icon === 'Email') {
      return <FeatherIcon.Mail size={30} strokeWidth={'2.5px'} />;
    }

    if (icon === 'Internal') {
      return <FeatherIcon.Settings size={30} strokeWidth={'2.5px'} />;
    }
  };

  public viewDate = (timeStamp :any) => {

    // var d = new Date(timeStamp);

    const now = moment(new Date()).format('DD/MM/YYYY HH:mm:ss');

    const then = moment(timeStamp).format('DD/MM/YYYY HH:mm:ss');


    const res1 = moment(now, 'DD/MM/YYYY HH:mm:ss').diff(
      moment(then, 'DD/MM/YYYY HH:mm:ss')
    );

    const res2 = moment.duration(res1);

    const res3 = res2.humanize();

    return <div>{res3} ago</div>;
  }

  public render() {
    return (
      <WrapperDiv
        alignItems="flex-start"
        justifyContent="space-between"
        isSelected={this.props.hasRead}
      >
        <Flex alignItems="center" justifyContent="space-between" pl={10}>
          <ImageDiv isSelected={this.props.hasRead}>
            {this.renderIcon(this.props.icon)}
          </ImageDiv>

          <Box pl={20}>
            <NameText isSelected={this.props.hasRead}>
              {this.props.name}
            </NameText>
            {this.props.description && (
              <DescriptionText>{this.props.description}</DescriptionText>
            )}
          </Box>
        </Flex>

        <TimeText pr={10}>{this.props.date ? this.viewDate(this.props.date) : ""} </TimeText>
      </WrapperDiv>
    );
  }
}
