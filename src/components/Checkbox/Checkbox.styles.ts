import styled from 'styled-components';
import { theme } from '../../styles/theme'; // Adjust the path if necessary

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckIcon = styled.svg.attrs({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'white',  
  strokeWidth: 2,
})`
  width: 20px;
  height: 20px;
  margin: 2px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: ${({ checked }) => (checked ? theme.colors.checkboxPrimary : theme.colors.checkboxBackground)};
  border: 1px solid ${({ checked }) => (checked ? theme.colors.checkboxBorderChecked : theme.colors.checkboxBorder)}; 
  border-radius: 6px;
  transition: background-color 150ms, box-shadow 150ms, transform 100ms;
  cursor: pointer;
  position: relative;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${theme.colors.checkboxFocusOutline};
  }

  ${CheckIcon} {
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    transition: opacity 150ms, visibility 150ms;
    stroke: ${({ checked }) => (checked ? 'white' : 'grey')}; /* Default stroke color */
  }

  
`;



export default StyledCheckbox;
