import styled from 'styled-components';
import { theme } from '../../styles/theme'; 

export const StyledButton = styled.button`
  border-radius: 4px;
  background-color: ${theme.colors.buttonPrimary};
  min-height: 40px;
  width: calc(100% - 30px);
  max-width: 340px;
  padding: 11px 20px;
  border: none;
  color: ${theme.colors.text};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  margin: 10px 15px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${theme.colors.buttonHover};
  }

 

  &:active {
    background-color: ${theme.colors.buttonActive};
  }
`;
