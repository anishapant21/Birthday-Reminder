import React from "react";
import ListItem from "./ListItem";

const ListFilter = ({ people }) => {
  const result = people.filter((person) => {
    let dateMy = new Date(person.dob);
    let dateToday = new Date();
    return dateMy.getMonth() > dateToday.getMonth();
  });

  const renderedList = result.map((person) => {
    const { id, name, dayRem, image, wishOn } = person;

    return (
      <ListItem
        key={id}
        name={name}
        dayRem={dayRem}
        image={image}
        wishOn={wishOn}
      />
    );
  });

  return (
    <div>
      <div>
        <h3> {result.length} birthdays left</h3>
      </div>

      {renderedList}
    </div>
  );
};

export default ListFilter;
