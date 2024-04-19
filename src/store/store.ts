import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your reducers

const store = configureStore({
  reducer: rootReducer,
  // Other middleware or options can be configured here if needed
});

export default store;