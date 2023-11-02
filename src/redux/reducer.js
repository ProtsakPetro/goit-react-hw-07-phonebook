import { combineReducers } from '@reduxjs/toolkit';
import { reducerContact } from './contact/slice';
import { reducerFilter } from './filter/filterSlice';
import { reducerApp } from './app/slice';

export const rootReducer = combineReducers({
  contacts: reducerContact,
  filter: reducerFilter,
  app: reducerApp,
});