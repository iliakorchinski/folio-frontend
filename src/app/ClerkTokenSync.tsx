import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useDispatch } from 'react-redux';
import { setToken } from '@/shared/store/authSlice';

export function ClerkTokenSync() {
  const { getToken, isSignedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(setToken(null));
      return;
    }

    let cancelled = false;

    async function sync() {
      const token = await getToken();
      if (!cancelled) dispatch(setToken(token));
    }

    sync();
    // Refresh every 55s — Clerk tokens expire in 60s
    const interval = setInterval(sync, 55_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [isSignedIn, getToken, dispatch]);

  return null;
}
