import styled from 'styled-components';

type LayoutContainerType = {
  backgroundColor: string;
  $paddingBottom?: string;
};

export const LayoutContainer = styled.div<LayoutContainerType>`
  min-height: 100%;
  background-color: ${props => props.backgroundColor};
  padding-bottom: ${props => props.$paddingBottom};
`;
