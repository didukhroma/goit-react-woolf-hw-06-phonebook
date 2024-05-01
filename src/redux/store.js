// import storage from 'redux-persist/lib/storage';

import { configureStore } from '@reduxjs/toolkit';
//REDUCERS
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// const persistConfig = {
//   key: LOCAL_STORAGE_KEY, //! import
//   storage,
// };

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
