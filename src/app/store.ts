import { configureStore } from '@reduxjs/toolkit';
import { filesApi } from '@/shared/api/filesApi';
import { authReducer } from '@/shared/store/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [filesApi.reducerPath]: filesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
