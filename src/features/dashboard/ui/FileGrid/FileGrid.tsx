import { FileCard } from '../FileCard/FileCard';
import type { PdfFile } from '@/shared/types/file';
import * as S from './styles.js';

interface FileGridProps {
  files: PdfFile[];
  addedId: string | null;
  onOpen: (id: string) => void;
  onContextMenu: (id: string, x: number, y: number) => void;
}

export function FileGrid({ files, addedId, onOpen, onContextMenu }: FileGridProps) {
  return (
    <div style={S.grid}>
      {files.map(file => (
        <FileCard
          key={file.id}
          file={file}
          isNew={file.id === addedId}
          onOpen={onOpen}
          onContextMenu={onContextMenu}
        />
      ))}
    </div>
  );
}
