import { ClerkProvider as BaseClerkProvider } from '@clerk/clerk-react';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('VITE_CLERK_PUBLISHABLE_KEY is not set in .env');
}

export function ClerkProvider({ children }: { children: React.ReactNode }) {
  return (
    <BaseClerkProvider publishableKey={publishableKey}>
      {children}
    </BaseClerkProvider>
  );
}
