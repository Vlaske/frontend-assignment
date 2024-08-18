import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { ListItemContainer, Title } from './ListItem.styles';

interface ListItemProps {
  title: string;
  checked: boolean;
  onChange: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ title, checked, onChange }) => {
  const handleClick = () => {
    onChange(); // Trigger the change event to toggle checkbox state
  };

  return (
    <ListItemContainer onClick={handleClick} checked={checked}>
      <Title>{title}</Title>
      <Checkbox checked={checked} onChange={handleClick} />
    </ListItemContainer>
  );
};

export default ListItem;
