import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../../data.json';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
