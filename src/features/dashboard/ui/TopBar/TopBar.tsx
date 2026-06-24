import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useHover } from '@/shared/hooks/useHover';
import * as S from './styles.js';

interface TopBarProps {
  q: string;
  setQ: (v: string) => void;
  onUpload: (file: File) => void;
}

export function TopBar({ q, setQ, onUpload }: TopBarProps) {
  const { t } = useTranslation();
  const { hovered, hoverProps } = useHover();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
    e.target.value = '';
  };

  return (
    <div style={S.root}>
      <div style={S.searchBox}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 14, color: '#8C887F', flexShrink: 0 }} />
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder={t('topBar.searchPlaceholder')}
          style={S.searchInput}
        />
      </div>

      <div style={S.spacer} />

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <button onClick={() => inputRef.current?.click()} {...hoverProps} style={S.uploadButton(hovered)}>
        <FontAwesomeIcon icon={faArrowUpFromBracket} style={{ fontSize: 14 }} />
        {t('topBar.upload')}
      </button>
    </div>
  );
}
