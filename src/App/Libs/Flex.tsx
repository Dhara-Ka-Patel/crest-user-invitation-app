import styled from "styled-components";
import {
  space,
  height,
  width,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  alignContent,
} from "styled-system";

const Flex: any = styled.div`
  display: flex;
  flex-direction: row;
  ${space}
  ${height}
  ${width}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${alignContent}
`;

export default Flex;
