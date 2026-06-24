import { RouterProvider, StoreProvider } from './providers';

export function App() {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
}
