import React, { useState } from 'react';
import ListItem from '../ListItem/ListItem';
import Button from '../Button/Button';
import { SelectorContainer, PageList, Divider, ScrollableContainer } from './PageSelector.styles';

interface Page {
  id: number;
  title: string;
  checked: boolean;
}

const PageSelector: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([
    { id: 0, title: 'All pages', checked: false },
    { id: 1, title: 'Page 1', checked: false },
    { id: 2, title: 'Page 2', checked: false },
    { id: 3, title: 'Page 3', checked: false },
    { id: 4, title: 'Page 4', checked: false },
    { id: 5, title: 'Page 5', checked: false },
    { id: 6, title: 'Page 6', checked: false },
    { id: 7, title: 'Page 7', checked: false },
  ]);

  const handleCheckboxChange = (id: number) => {
    const updatedPages = pages.map(page =>
      page.id === id ? { ...page, checked: !page.checked } : page
    );
    setPages(updatedPages); // Update state with the new pages array
    // console.log('Updated pages:', updatedPages); // Log the updated state to verify
  };

  const handleDoneClick = () => {
    console.log('Selected pages:', pages.filter(page => page.checked));
  };

  return (
    <SelectorContainer>
      <PageList>
        <ListItem
          title="All pages"
          checked={pages[0].checked}
          onChange={() => handleCheckboxChange(pages[0].id)}
        />
        <Divider />
        <ScrollableContainer>
          {pages.slice(1).map(page => (
            <ListItem
              key={page.id}
              title={page.title}
              checked={page.checked}
              onChange={() => handleCheckboxChange(page.id)}
            />
          ))}
        </ScrollableContainer>
        <Divider />
      </PageList>
      <Button onClick={handleDoneClick}>Done</Button>
    </SelectorContainer>
  );
};

export default PageSelector;
