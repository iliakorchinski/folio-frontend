import CheckIcon from '@mui/icons-material/Check';
import * as S from './styles.js';

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div style={S.root}>
      <CheckIcon sx={{ fontSize: 16, color: '#E8502E' }} />
      {message}
    </div>
  );
}
