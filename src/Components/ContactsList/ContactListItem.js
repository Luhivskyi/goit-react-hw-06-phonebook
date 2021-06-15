import React from "react";
import s from "./ContactListItem.module.css";
import PropTypes from "prop-types";

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.item_contact}>
      {name}: {number}{" "}
      <button className={s.item_button} onClick={() => onRemove(id)}>
        delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
