import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
  type: null,
  users: [],  
  isFetchingUsers: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.type = action.payload.type;
      state.isLoggedIn = true;
      state.error = null;  
    },
    loginFailure: (state, action) => {
      state.token = null;
      state.type = null;
      state.isLoggedIn = false;
      state.error = action.payload.error;  
    },
    logout: (state) => {
      state.token = null;
      state.type = null;
      state.isLoggedIn = false;
      state.users = [];
      state.error = null;
    },
    
    
    fetchUsersStart: (state) => {
      state.isFetchingUsers = true;
      state.error = null;  
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isFetchingUsers = false;
    },
    fetchUsersFailure: (state, action) => {
      state.error = action.payload;
      state.isFetchingUsers = false;
    },
  },
});

export const { 
  loginSuccess, 
  loginFailure, 
  logout,
  fetchUsersStart, 
  fetchUsersSuccess, 
  fetchUsersFailure 
} = authSlice.actions;

export default authSlice.reducer;
