import * as React from 'react';
import styled from 'styled-components';
import { Icon, Label, Button } from 'semantic-ui-react';
// import { BasicTitle, BasicStyledInput } from '@styled/GeneralComponents.tsx';
import { BasicStyledInput, BasicStyledIcon } from '@shared/BasicStyledInput';
import * as FeatherIcon from 'react-feather';

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

// const EyeIcon = styled(Icon)`
//   position: absolute;
//   right: 17px;
//   padding-top: 10px;

//   color: #2d373c;
//   z-index: 10;
// `;

const StyledIconKey = styled(FeatherIcon.Key)`
  position: absolute;
  top: 6px;
  left: 6px;
`;

const StyledIconEye = styled(FeatherIcon.Eye)`
  position: absolute;
  margin-top: 11px;
  right: 17px;
  z-index: 10;
`;

const StyledIconEyeOff = styled(FeatherIcon.EyeOff)`
  position: absolute;
  margin-top: 11px;
  right: 17px;
  z-index: 10;
`;

export class PasswordInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      passwordVisible: false,
    };
  }

  public toggleVisibility = () => {
    this.setState({
      passwordVisible: !this.state.passwordVisible,
    });
  };

  public render() {
    const { passwordVisible } = this.state;
    const { placeholder } = this.props;

    return (
      <div style={{ width: '100%' }}>
        {passwordVisible ? (
          <StyledIconEye
            onClick={this.toggleVisibility}
            color="#2D373C"
            size={18}
          />
        ) : (
          <StyledIconEyeOff
            onClick={this.toggleVisibility}
            color="#2D373C"
            size={18}
          />
        )}

        <BasicStyledInput
          size="large"
          {...this.props}
         
          type={passwordVisible ? 'text' : 'password'}
          iconPosition="left"
          errorMessage={this.props.messages}
          style={{ width: '100%', marginBottom: "10px" }}

        >
          <StyledIconKey color="#797f82" size={24} />
          <input />
        </BasicStyledInput>
      </div>
    );
  }
}

/*
<BasicStyledInput
  size="large"
  placeholder = {placeholder}
  type={passwordVisible ? 'text' : 'password'}
  iconPosition="left"
  labelPosition="right"
>
  <Icon name="key" />
  <input />
  <EyeLabel basic={true} onClick={this.toggleVisibility} error={true}>
    {passwordVisible ? (
      <Icon name="eye slash" />
    ) : (
      <Icon name="eye" />
    )}
  </EyeLabel>
</BasicStyledInput>
*/
