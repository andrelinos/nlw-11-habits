import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './modules/rootReducer';

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});
