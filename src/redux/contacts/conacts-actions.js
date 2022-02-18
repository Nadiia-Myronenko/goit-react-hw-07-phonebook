//import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";
/*
const formSubmitHandler = createAction("contats/add", (data) => ({
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));
const deleteContact = createAction("contacts/delete");
const onContactSearch = createAction("contacts/changeFilter");
const actions = { formSubmitHandler, deleteContact, onContactSearch };
*/
export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const onContactSearch = createAction("contacts/changeFilter");