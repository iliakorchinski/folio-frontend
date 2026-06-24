import { ClerkProvider, RouterProvider, StoreProvider } from './providers';
import { ClerkTokenSync } from './ClerkTokenSync';

export function App() {
  return (
    <ClerkProvider>
      <StoreProvider>
        <ClerkTokenSync />
        <RouterProvider />
      </StoreProvider>
    </ClerkProvider>
  );
}
