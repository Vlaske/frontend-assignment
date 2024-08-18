import React from 'react';
import { StyledCheckbox, HiddenCheckbox, CheckIcon, CheckboxContainer } from './Checkbox.styles';

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked}>
        <CheckIcon>
          <polyline points="20 6 9 17 4 12" />
        </CheckIcon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
