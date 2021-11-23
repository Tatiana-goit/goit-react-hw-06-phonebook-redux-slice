import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contactArray, filterValue) => {
    let normalizeFilter = filterValue.toLowerCase();
    return contactArray.filter(contactObject => {
      return contactObject.name.toLowerCase().includes(normalizeFilter)
    });
  },
);