import React from "react";

const countrie = [
  "Kuwait",
  "Qatar",
  "Egypt",
  "Kenya",
  "Ethiopia",
  "Morocco",
  "Turkey",
  "Saudi Arabia",
  "Iran",
  "Iraq",
];

function Countries() {
  return (
    <>
      <div>
        <h1>Countries</h1>

        <ul className="list-group">
          {countrie.map((country, index) => (
            <li className="list-group-item" key={country}>
              {country}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Countries;
