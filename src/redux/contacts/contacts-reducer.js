import { combineReducers } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  onContactSearch,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./conacts-actions";
import { createReducer } from "@reduxjs/toolkit";

/*const items = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [actions.formSubmitHandler]: (state, action) => {
      let includesName = false;
      for (const item of state) {
        if (action.payload.name === item.name) {
          includesName = true;
        }
      }
      if (!includesName) {
        return [...state, action.payload];
      } else {
        alert(`${action.payload.name} is already in contacts!!!`);
      }
    },
    [actions.deleteContact]: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  }
);
*/
const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => {
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

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
const filter = createReducer("", {
  [onContactSearch]: (_, { payload }) => payload,
});
const error = createReducer(null, {});
export default combineReducers({
  items,
  filter,
  loading,
  error,
});
