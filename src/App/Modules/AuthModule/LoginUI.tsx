// import { Formik, Form, Field } from 'formik';
import * as React from 'react';
import styled from 'styled-components';
import {
  Button,
  Input,
  Segment,
  Icon,
  Message,
  Label,
} from 'semantic-ui-react';

import { ThemeButton } from '@shared/ThemeButton';

import { BasicStyledInput, BasicStyledIcon } from '@shared/BasicStyledInput';
import Flex from '@libs/Flex';
import Box from '@libs/Box';
import { PasswordInput } from '@shared/PasswordInput';
import * as FeatherIcon from 'react-feather';
import { Formik } from 'formik';
import { ErrorMessage } from '@shared/ErrorMessage';

export const BasicTitle = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;

  color: #005578;
  margin-bottom: 20px;
`;

export const BasicDetails = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;

  color: #2d373c;
  margin: 0px;
`;

export const StyledLink = styled.a`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  color: #2185d0;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const MediumButton = styled(Button)`
  min-width: 180px !important;
  // height: 48px;
  border-radius: 4px !important;
`;

const ActiveTag = styled(Flex)`
  border-radius: 4px;
  border: 1px solid #007e7e;
  color: #007e7e;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  width: fit-content;

  padding: 2px 5px;
`;

const DeactiveTag = styled(Flex)`
  border-radius: 4px;
  border: 1px solid #f2711c;
  color: #f2711c;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  width: fit-content;

  padding: 2px 5px;
`;

const FormContainer = styled(Segment)`
  background: #ffffff;
  box-shadow: 0px 8px 25px rgba(0, 153, 153, 0.15) !important;
  border-radius: 5px;
  border: none !important;
  width: 450px;
  height: fit-content;
  padding: 50px !important;
`;

const BottomContainer = styled(Flex)`
  padding-top: 15px;
  justify-content: center;
  align-items: baseline;
`;

const StyledBox = styled(Box)`
  width: 100%;
  margin-top: 30px;

  & .ui.form input {
    border-size: 1px;
    border-type: solid;
    box-sizing: border-box;
    border-radius: 3px !important;

    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #2d373c !important;
    background: #ffffff !important;
    margin-bottom: 10px;

    // border-color: yellow !important;
  }
`;

const StyledIconUser = styled(FeatherIcon.User)`
  position: absolute;
  top: 6px;
  left: 6px;
`;

const EmailInput = (props: any) => {
  return (
    <BasicStyledInput
      size="large"
      {...props}
      errorMessage={props.messages}
      iconPosition="left"
    >
      <StyledIconUser color="#797f82" size={24} />
      <input />
    </BasicStyledInput>
  );
};

interface ILoginUIProps {
  onSubmit: any;
}

interface IFormValues {
  email: string;
  password: string;
}

interface IRenderFormikForm {
  values: IFormValues;
  errors: any;
  touched: any;
  handleChange: any;
  handleBlur: any;
  handleSubmit: any;
  isSubmitting: any;
}

export class LoginUI extends React.Component<ILoginUIProps, {}> {
  constructor(props: any) {
    super(props);

    // this.validateForm = this.validateForm.bind(this);

    this.state = {
      status: false,
      errorMessage: '',
    };
  }

  public handleSubmit = (response: any) => {
    console.log('Response:', response);
    this.props.onSubmit(response);
  };

  public validateForm(values: IFormValues) {
    const errors: any = {};
    if (!values.email) {
      errors.email = 'Email address is Required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email address is Invalid!';
    }

    if (!values.password) {
      errors.password = 'Password is Required!';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be of minimum 8 characters!';
    }
    return errors;
  }

  public onError = (err: any) => {
    // do something
  };

  public onChange(e: any) {
    // do something
  }

  public render() {
    return (
      <FormContainer className="row start-xs">
        <BasicTitle>Hi, please login to access your account</BasicTitle>
        <StyledBox>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={this.validateForm}
            onSubmit={this.handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }: IRenderFormikForm) => {
              return (
                <form style={{ width: '100%' }}>
                  <Box py={10}>
                    <BasicStyledInput
                      placeholder="Enter Email"
                      type="email"
                      name="email"
                      error={errors.email && touched.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      icon="user circle outline"
                      iconPosition="left"
                    />
                    <ErrorMessage
                      errMsg={errors.email && touched.email && errors.email}
                    />
                  </Box>
                  <Box py={10}>
                    <BasicStyledInput
                      size="large"
                      placeholder="Enter Email"
                      type="password"
                      name="password"
                      error={errors.password && touched.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      icon="key"
                      iconPosition="left"
                    />
                    <ErrorMessage
                      errMsg={
                        errors.password && touched.password && errors.password
                      }
                    />
                  </Box>

                  <BottomContainer className="row between-xs middle-xs">
                    <ThemeButton
                      sizeType="medium"
                      primary={true}
                      // disabled={isSubmitting}
                      onClick={handleSubmit}
                    >
                      Login
                    </ThemeButton>
                  </BottomContainer>
                </form>
              );
            }}
          </Formik>
        </StyledBox>
      </FormContainer>
    );
  }
}
