import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import * as S from './styles.js';

interface ConfirmModalProps {
  title: string;
  description: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({ title, description, confirmLabel, onConfirm, onCancel }: ConfirmModalProps) {
  const { t } = useTranslation();
  const [cancelHovered, setCancelHovered] = useState(false);
  const [confirmHovered, setConfirmHovered] = useState(false);

  return createPortal(
    <div style={S.overlay} onMouseDown={onCancel}>
      <div style={S.dialog} onMouseDown={e => e.stopPropagation()}>
        <div style={S.title}>{title}</div>
        <div style={S.body}>{description}</div>
        <div style={S.actions}>
          <button
            style={S.cancelBtn(cancelHovered)}
            onMouseEnter={() => setCancelHovered(true)}
            onMouseLeave={() => setCancelHovered(false)}
            onClick={onCancel}
          >
            {t('confirmModal.cancel')}
          </button>
          <button
            style={S.deleteBtn(confirmHovered)}
            onMouseEnter={() => setConfirmHovered(true)}
            onMouseLeave={() => setConfirmHovered(false)}
            onClick={onConfirm}
          >
            {confirmLabel ?? t('confirmModal.delete')}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
