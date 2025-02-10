import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

type ListGroupProps = {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
};

export const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>Empty List</p>;
  };

  return (
    <>
      <h1>Country List</h1>
      {getMessage()}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};
