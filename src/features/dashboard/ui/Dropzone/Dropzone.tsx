import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useHover } from '@/shared/hooks/useHover';
import * as S from './styles.js';

interface DropzoneProps {
  onUpload: (file: File) => void;
}

export function Dropzone({ onUpload }: DropzoneProps) {
  const { t } = useTranslation();
  const { hovered, hoverProps } = useHover();
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file?.type === 'application/pdf') onUpload(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
    e.target.value = '';
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      {...hoverProps}
      style={S.root(hovered || dragging)}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <div style={S.iconWrap}>
        <FontAwesomeIcon icon={faArrowUpFromBracket} style={{ fontSize: 22, color: '#E8502E' }} />
      </div>
      <div>
        <div style={S.title}>{t('dropzone.title')}</div>
        <div style={S.hint}>{t('dropzone.hint')}</div>
      </div>
    </div>
  );
}
