"use client";
import Message from "./Message";
import ListGroup from "./ListGroup";
import Countries from "./Countries";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  let books = [
    "The power of Now",
    "Deep work",
    "The one thing",
    "Extreme ownership",
    "The magic of thinking big",
    "This is marketing",
    "Masters of scale",
    "The innovator's dilemma",
    "Trillion dollar coach",
    "Built to last",
    "Zero to one",
  ];

  function handleEvent(item: string) {
    console.log("Selected book: ", item);
  }

  return (
    <>
      <h1>
        <Message />
      </h1>
      <div>
        <ListGroup
          books={books}
          heading={"Books (Kitabain)"}
          onSelectItem={handleEvent}
        />
      </div>
      <div>
        <Countries />
      </div>
    </>
  );
}
