import React from "react";

const ContactListItem = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" id={id} onClick={deleteContact}>
        DELETE
      </button>
    </li>
  );
};

export default ContactListItem;
