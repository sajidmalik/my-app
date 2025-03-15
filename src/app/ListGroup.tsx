"use client";
import { useState } from "react";

interface Props {
  books: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ books, heading, onSelectItem }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {books.length === 0 && <p>No books available</p>}
      <ul className="list-group">
        {books.map((book, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={book}
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(book);
            }}
          >
            {book}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
