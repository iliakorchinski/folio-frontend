import { useTranslation } from 'react-i18next';
import { FileRow } from '../FileRow/FileRow';
import type { PdfFile } from '@/shared/types/file';
import * as S from './styles.js';

interface FileListProps {
  files: PdfFile[];
  addedId: string | null;
  onOpen: (id: string) => void;
  onMenu: (id: string, x: number, y: number) => void;
}

export function FileList({ files, addedId, onOpen, onMenu }: FileListProps) {
  const { t } = useTranslation();

  return (
    <div>
      <div style={S.header}>
        <div style={S.colDocument}>{t('files.col.document')}</div>
        <div style={S.colPages}>{t('files.col.pages')}</div>
        <div style={S.colSize}>{t('files.col.size')}</div>
        <div style={S.colModified}>{t('files.col.modified')}</div>
        <div style={S.colActions} />
      </div>

      {files.map(file => (
        <FileRow
          key={file.id}
          file={file}
          isNew={file.id === addedId}
          onOpen={onOpen}
          onMenu={onMenu}
        />
      ))}
    </div>
  );
}
