import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles.js';

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div style={S.root}>
      <FontAwesomeIcon icon={faCheck} style={{ fontSize: 14, color: '#E8502E' }} />
      {message}
    </div>
  );
}
