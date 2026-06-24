import { SignIn } from '@clerk/clerk-react';

export function SignInPage() {
  return (
    <div style={centerStyle}>
      <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
}

const centerStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#F7F5F0',
};
