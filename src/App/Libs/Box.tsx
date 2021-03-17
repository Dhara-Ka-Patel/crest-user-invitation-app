import styled from "styled-components";
import {
  space,
  maxWidth,
  minWidth,
  height,
  width,
  color,
  ratio,
  size,
  display,
  position,
  hover,
  focus,
  active,
  disabled,
  flex,
  justifySelf,
  alignSelf,
  flexBasis,
  order,
  gridRow,
  gridColumn,
  zIndex,
} from "styled-system";

const Box: any = styled.div`
  ${space}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${width}
  ${color}
  ${ratio}
  ${size}
  ${display}
  ${position}
  ${hover}
  ${focus}
  ${active}
  ${disabled}
  ${zIndex}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${flexBasis}
  ${order}
  ${gridRow}
  ${gridColumn}
`;

export default Box;
