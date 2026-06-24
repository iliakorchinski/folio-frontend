import { useTranslation } from 'react-i18next';
import { useHover } from '@/shared/hooks/useHover';
import { PdfPreview } from '../PdfPreview/PdfPreview';
import type { PdfFile } from '@/shared/types/file';
import * as S from './styles.js';

interface FileCardProps {
  file: PdfFile;
  isNew: boolean;
  onOpen: (id: string) => void;
  onContextMenu: (id: string, x: number, y: number) => void;
}

export function FileCard({ file, isNew, onOpen, onContextMenu }: FileCardProps) {
  const { t } = useTranslation();
  const { hovered, hoverProps } = useHover();

  function handleContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    onContextMenu(file.id, e.clientX, e.clientY);
  }

  return (
    <div
      onClick={() => onOpen(file.id)}
      onContextMenu={handleContextMenu}
      {...hoverProps}
      style={S.root(hovered)}
    >
      <div style={S.preview}>
        {isNew && <span style={S.newBadge}>{t('files.newBadge')}</span>}
        <PdfPreview variant="grid" />
      </div>

      <div style={S.body}>
        <div style={S.name}>{file.name}</div>
        <div style={S.meta}>
          <span>{t('files.pages', { count: file.pages })}</span>
          <span>·</span>
          <span>{file.modified}</span>
        </div>
      </div>
    </div>
  );
}
