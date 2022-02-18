import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  Name,
  Number,
  DeleteButton,
} from "./ContactsList.styled";
import contactsOperations from "../../redux/contacts/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const getVisibleContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
  return visibleContacts;
};

const ContactsList = () => {
  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();
  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Name>{name}</Name>
          <Number>{number}</Number>
          <DeleteButton onClick={() => onDeleteContact(id)} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactsList;
ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};