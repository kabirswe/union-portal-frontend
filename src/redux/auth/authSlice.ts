// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Define a type for the slice state
interface AuthState {
  userInfo: {
    employeeCode: string;
  };
  // NOTE: for Testing
  noScroll: boolean;
}

// Define the initial state as const
const initialState: AuthState = {
  userInfo: {
    employeeCode: '9999',
  },
  noScroll: false,
};
/**
 ** Create a Redux "slice" reducer with createSlice
 * 1. Call createSlice with a string name, an initial state, and named reducer functions
 * 2. Reducer functions may "mutate" the state using Immer
 * 3. Export the generated slice reducer and action creators
 */
const authSlice = createSlice({
  name: 'auth', // Creating a slice requires a string name to identify the slice,
  initialState, // initial state value,
  reducers: {
    // one or more reducer functions to define how the state can be updated.
    // TODO: implement
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateUserInfo(
      state,
      action: PayloadAction<{
        employeeCode?: string;
      }>
    ) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const { employeeCode } = action.payload;
      if (employeeCode) {
        state.userInfo.employeeCode = employeeCode;
      }
    },

    setNoScroll(
      state,
      action: PayloadAction<{
        noScroll?: boolean;
      }>
    ) {
      const { noScroll } = action.payload;
      if (noScroll) {
        state.noScroll = noScroll;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserInfo, setNoScroll } = authSlice.actions;
export default authSlice;
