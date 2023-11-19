import {configureStore} from '@reduxjs/toolkit';
import TravelersSlice from './reducers/TravelersSlice';

const store = configureStore({
  reducer: {
    travelers: TravelersSlice,
  },
});

export default store;
