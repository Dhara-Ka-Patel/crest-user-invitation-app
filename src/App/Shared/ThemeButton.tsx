import * as React from 'react';

import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const BUTTON_SIZES: any = {
  mini: {
    minWidth: '150px',
    height: '28px',
  },
  small: {
    minWidth: '150px',
    height: '36px',
  },
  medium: {
    minWidth: '180px',
    height: '48px',
  },
  large: {
    minWidth: '200px',
    height: '52px',
  },
};

const StyledButton = styled(Button)`
  font-family: Muli !important;
  font-size: 16px !important;
  background-color: red;
`;

type size = 'medium' | 'large' | 'small' | 'mini';

export interface IThemeButtonProps {
  sizeType: size;
  [name: string]: any;
}

export class ThemeButton extends React.Component<IThemeButtonProps> {
  public static defaultProps = {
    sizeType: 'medium',
  };

  public render() {
    return (
      <>
        <StyledButton
          {...this.props}
          style={{ ...BUTTON_SIZES[this.props.sizeType] }}
        >
          {this.props.children}
        </StyledButton>
      </>
    );
  }
}
