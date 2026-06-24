import { SignUp } from '@clerk/clerk-react';

export function SignUpPage() {
  return (
    <div style={centerStyle}>
      <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
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
