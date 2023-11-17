import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  notifcationBoostId: undefined,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    setNotifcationBoostId(state, action) {
      state.notifcationBoostId = action?.payload.notificationBoostId;
    },
  },
});

export const {setUser, setNotifcationBoostId} = AuthSlice.actions;

export default AuthSlice.reducer;
