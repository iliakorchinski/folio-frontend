import { useTranslation } from 'react-i18next';
import { useHover } from '@/shared/hooks/useHover';
import { PdfPreview } from '../PdfPreview/PdfPreview';
import type { PdfFile } from '@/shared/types/file';
import * as S from './styles.js';

interface FileCardProps {
  file: PdfFile;
  isNew: boolean;
  onOpen: (name: string) => void;
}

export function FileCard({ file, isNew, onOpen }: FileCardProps) {
  const { t } = useTranslation();
  const { hovered, hoverProps } = useHover();

  return (
    <div onClick={() => onOpen(file.name)} {...hoverProps} style={S.root(hovered)}>
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
