import { createSlice } from '@reduxjs/toolkit';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contacts,
  },
  reducers: {
    addContact(state, action) {
      state.items.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },

    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;
const selectContacts = state => state.contacts.items;

export { addContact, deleteContact, contactsReducer, selectContacts };
