import styled from 'styled-components';
import { theme } from '../../styles/theme'; 
import { CheckIcon, StyledCheckbox } from '../Checkbox/Checkbox.styles'; 

export const ListItemContainer = styled.li<{ checked: boolean }>`
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.listItemBackground};
  display: flex;
  min-height: 42px;
  padding: 4px 15px 4px 21px;
  cursor: pointer;
  position: relative;

  ${CheckIcon} {
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    transition: opacity 150ms, visibility 150ms;
    stroke: ${({ checked }) => (checked ? 'white' : 'grey')}; /* Default stroke color */
  }

  &:hover ${StyledCheckbox}{
    background-color: ${({ checked }) => (checked ? theme.colors.checkboxHover : theme.colors.checkboxHoverBackgroundUnchecked)};
    border-color: ${({ checked }) => (checked ? theme.colors.checkboxBorderChecked : theme.colors.checkboxBorderUncheckedHover)};

    ${CheckIcon} {
      opacity: ${({ checked }) => (checked ? 1 : 0.3)}; /* Darker checkmark when hovering */
      visibility: ${({ checked }) => (checked ? 'visible' : 'visible')}; /* Ensure it is visible on hover */
      stroke: ${({ checked }) => (checked ? 'white' : 'grey')}; /* Grey stroke for hover when unchecked */
    }
  }

  &:active ${StyledCheckbox}{
    background-color: ${({ checked }) => (checked ? theme.colors.checkboxPrimary : theme.colors.checkboxHoverBackgroundUnchecked)};
    border-color: ${({ checked }) => (checked ? theme.colors.checkboxBorderChecked : theme.colors.checkboxActive)}; 
    box-shadow: 0 0 4px ${theme.colors.checkboxActiveBorder};
    
  }
`;

export const Title = styled.span`
  color: ${theme.colors.listItemText};
  font: 400 14px/1.3 Montserrat, sans-serif;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
