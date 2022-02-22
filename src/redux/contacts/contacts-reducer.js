import { combineReducers } from "@reduxjs/toolkit";
import { onContactSearch } from "./conacts-actions";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    let includesName = false;
    for (const item of state) {
      if (payload.name === item.name) {
        includesName = true;
      }
    }
    if (!includesName) {
      return [...state, payload];
    } else {
      alert(`${payload.name} is already in contacts!!!`);
    }
  },

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});
/*
const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});*/
const filter = createReducer("", {
  [onContactSearch]: (_, { payload }) => payload,
});
const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});
export default combineReducers({
  items,
  filter,
  //loading,
  error,
});
