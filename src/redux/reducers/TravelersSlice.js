import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  travelers: null,
  fieldValue: '',
  flightDetails: null,
};

const TravelersSlice = createSlice({
  name: 'Travelers',
  initialState,
  reducers: {
    setFlightTravelers(state, action) {
      const travel = action.payload;
      state.fieldValue = '';
      if (travel?.adults > 0) {
        state.fieldValue += `${travel?.adults} adults, `;
      }
      if (travel?.childs > 0) {
        state.fieldValue += `${travel?.childs} children, `;
      }
      if (travel?.infants > 0) {
        state.fieldValue += `${travel?.infants} infants`;
      }
      state.travelers = action.payload;
    },
    setFlightDetail(state, action) {
      state.flightDetails = action.payload;
    },
  },
});

export const {setFlightTravelers, setFlightDetail} = TravelersSlice.actions;

export default TravelersSlice.reducer;
