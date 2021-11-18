import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

// export const getFiltredContacts = state => {
//   const normalizeFilter = getFilter(state).toLowerCase();
//   const filteredContact = getContacts(state).filter(({ name }) =>
//     name.toLowerCase().includes(normalizeFilter),
//   );
//   return filteredContact;}


export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contactArray, filterValue) => {
    let normalizeFilter = filterValue.toLowerCase();
    return contactArray.filter(contactObject => {
      return contactObject.name.toLowerCase().includes(normalizeFilter)
    });
  },
);

// const contacts = getContacts(state);
// const filter = getFilter (state);
// return contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter))

// return getContacts(state).filter(contact =>
//   contact.name.toLowerCase().includes(getFilter(state)))

// const normalizeFilter = getFilter(state).toLowerCase();
// const filteredContact = getContacts(state).filter(({ name }) =>
//   name.toLowerCase().includes(normalizeFilter),
// );
// return filteredContact;

// const contacts = getContacts(state);
// const filter = getFilter(state);
// const normalizeFilter = filter.toLowerCase();
// return contacts.filter(({ name }) =>
//   name.toLowerCase().includes(normalizeFilter),
// );
