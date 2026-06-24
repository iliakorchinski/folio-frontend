import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null } as AuthState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
