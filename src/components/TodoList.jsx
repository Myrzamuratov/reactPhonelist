import React from "react";
import "./todolist.css";
const TodoList = (props) => {
  return (
    <div>
      <ul className="names">
        <li className="names-list">Name, Surname</li>
        <li className="names-list">Phone number</li>
        <li className="names-list">email</li>
        <li className="names-list">
          <button onClick={props.handleShowModal}>Create a new contact</button>
        </li>
      </ul>

      {props.contact.map((item) => (
        <ul className="contact-list">
          <li className="contact-list-item">
            {item.name} {item.surname}
          </li>
          <li className="contact-list-item">{item.phone}</li>
          <li className="contact-list-item">{item.email}</li>
          <li className="contact-list-item" id="buttons">
            <button onClick={() => props.handleEdit(item)}>Change</button>
            <button onClick={() => props.handleDelete(item.id)}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
