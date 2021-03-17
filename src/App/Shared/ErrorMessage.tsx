import * as React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const ErrorDiv = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #db2828;

  display: flex;
  align-items: center;

  & i {
    padding-right: 5px;
    font-size: 16px;
  }
`;

export interface IErrorMessageProps {
  errMsg?: string;
  [name: string]: any;
}

export class ErrorMessage extends React.Component<IErrorMessageProps> {
  public static defaultProps = {
    errMsg: '',
  };

  public render() {
    return (
      <>
        {this.props.errMsg && this.props.errMsg !== '' && (
          <ErrorDiv>
            <Icon name="info circle" />
            <span>{this.props.errMsg}</span>
          </ErrorDiv>
        )}
      </>
    );
  }
}
