import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useHover } from '@/shared/hooks/useHover';
import { PdfPreview } from '../PdfPreview/PdfPreview';
import type { PdfFile } from '@/shared/types/file';
import * as S from './styles.js';

interface FileRowProps {
  file: PdfFile;
  isNew: boolean;
  onOpen: (id: string) => void;
  onMenu: (id: string, x: number, y: number) => void;
}

export function FileRow({ file, isNew, onOpen, onMenu }: FileRowProps) {
  const { t } = useTranslation();
  const { hovered, hoverProps } = useHover();
  const { hovered: dotsHovered, hoverProps: dotsHoverProps } = useHover();

  function handleDotsClick(e: React.MouseEvent) {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    onMenu(file.id, rect.left, rect.bottom + 4);
  }

  return (
    <div onClick={() => onOpen(file.id)} {...hoverProps} style={S.root(hovered)}>
      <div style={S.info}>
        <PdfPreview variant="list" />
        <div style={S.nameGroup}>
          <div style={S.nameLine}>
            <span style={S.name}>{file.name}</span>
            {isNew && <span style={S.newBadge}>{t('files.newBadge')}</span>}
          </div>
          <div style={S.badge}>{file.badge}</div>
        </div>
      </div>

      <div style={S.colPages}>{file.pages}</div>
      <div style={S.colSize}>{file.size}</div>
      <div style={S.colModified}>{file.modified}</div>
      <div style={S.colActions}>
        <div
          onClick={handleDotsClick}
          {...dotsHoverProps}
          style={S.dotsButton(dotsHovered)}
        >
          <FontAwesomeIcon icon={faEllipsis} style={{ fontSize: 16, color: '#A29D92' }} />
        </div>
      </div>
    </div>
  );
}
