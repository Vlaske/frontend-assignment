import styled from 'styled-components';
import { theme } from '../../styles/theme'; 

export const SelectorContainer = styled.main`
  border-radius: 6px;
  border: 1px solid ${theme.colors.selectorBorder};
  box-shadow: ${theme.colors.selectorBoxShadow};
  background-color: ${theme.colors.selectorBackground};
  display: flex;
  max-width: 370px;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Divider = styled.hr`
  background-color: ${theme.colors.dividerBackground};
  height: 1px;
  width: 340px;
  border: none;
  margin: ${theme.colors.pageListMargin};
`;

export const PageList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ScrollableContainer = styled.div`
  max-height: ${theme.colors.scrollableMaxHeight};
  overflow-y: scroll;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`;
