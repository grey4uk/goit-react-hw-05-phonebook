import React from "react";

const Filter = ({ getFilteredContacts }) => {
  return (
    <div>
      <h2>Find contact by name</h2>
      <input type="text" onChange={getFilteredContacts} />
    </div>
  );
};

export default Filter;
