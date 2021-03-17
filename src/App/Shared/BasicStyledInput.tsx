import * as React from 'react';
import styled from 'styled-components';
import { Input, Button, Icon } from 'semantic-ui-react';
import { ErrorMessage } from '@shared/ErrorMessage';
import Flex from "@libs/Flex";
import Box from "@libs/Box";
import * as FeatherIcon from 'react-feather';

const StyledInput = styled(Input)`
  & .ui input {
    /*If error message then red border otherwise gray*/
    & input {
      border-color: ${props =>
        props.errorMessage && props.errorMessage.length > 0
          ? '#db2828'
          : '#c5c8c9'} !important;
  
      border-size: 1px;
      border-type: solid;
      box-sizing: border-box;
      border-radius: 3px !important;
  
      font-family: Muli;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #2d373c !important;
      background: #ffffff !important;
      margin-bottom: 15px;
  }

  // height: 44px;
  width: 100%;
  margin-bottom: 15px;

`;

export const BasicStyledIcon = styled(Icon)`
  margin-left: -8px !important;
  color: #797f82 !important;
  margin-top: -8px;
`;

const StyledIconKey = styled(FeatherIcon.Search)`
  position: absolute;
  top: 6px;
  left: 6px;
`;

export interface IBasicStyledInputProps {
  errorMessage?: string;
  [name: string]: any;
}

export class BasicStyledInput extends React.Component<IBasicStyledInputProps> {
  public static defaultProps = {
    errorMessage: '',
  };

  public render() {
    return (
      <Box style={{ width: '100%' }}>
        <StyledInput
          {...this.props}
          // iconPosition="left"
          style={{ width: '100%', marginBottom: "10px" }}
          className="basic-styled-input"
          errorMessage={this.props.errorMessage}
        />

        <ErrorMessage
          errMsg={
            this.props.errorMessage &&
            this.props.errorMessage.length > 0 &&
            this.props.errorMessage[0]
          }
        />
      </Box>
    );
  }
}
