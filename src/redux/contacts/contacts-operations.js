import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://620f5989ec8b2ee2833c78cf.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contats/fetchContacts",
  async () => {
    const response = await axios.get("/contacts");
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data) => {
    const contact = {
      name: data.name,
      number: data.number,
      completed: false,
    };
    const response = await axios.post("/contacts", contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  }
);
