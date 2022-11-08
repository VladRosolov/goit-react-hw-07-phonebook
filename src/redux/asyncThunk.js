import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchApiContacts,
  addApiContact,
  deleteApiContact,
} from './contacts/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchApiContacts();
      return contacts;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addApiContact(data);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const result = await deleteApiContact(id);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
