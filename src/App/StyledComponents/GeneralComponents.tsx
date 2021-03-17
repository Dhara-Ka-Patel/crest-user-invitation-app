import * as React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react';
import Flex from "@libs/Flex";
import Box from "@libs/Box";

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
  border-radius: 3px;
  background: #acfafb;
  color: #009999;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  width: fit-content;

  padding: 4px 8px;
`;

const DeactiveTag = styled(Flex)`
  border-radius: 3px;
  background: #ff9f9f;
  color: #db2828;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  width: fit-content;

  padding: 4px 8px;
`;

export const userStatus = (suspended: string) => {
  return (
    <>
      {!suspended ? (
        <ActiveTag alignItems="center" textAlign="center">
          Active
        </ActiveTag>
      ) : (
        <DeactiveTag alignItems="center" textAlign="center">
          Deactive
        </DeactiveTag>
      )}
    </>
  );
};

/*
export const BasicStyledInput = styled(Input)`
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
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #2d373c !important;
    background: #ffffff !important;
  }

  & i {
    font-size: 16px !important;
    color: #797f82 !important;
  }

  // height: 44px;
  width: 100%;
  margin-bottom: 15px;
`;
*/
