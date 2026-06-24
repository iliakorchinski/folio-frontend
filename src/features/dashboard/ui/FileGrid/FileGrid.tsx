import { FileCard } from '../FileCard/FileCard';
import type { PdfFile } from '@/shared/types/file';
import * as S from './styles.js';

interface FileGridProps {
  files: PdfFile[];
  addedId: string | null;
  onOpen: (name: string) => void;
}

export function FileGrid({ files, addedId, onOpen }: FileGridProps) {
  return (
    <div style={S.grid}>
      {files.map(file => (
        <FileCard
          key={file.id}
          file={file}
          isNew={file.id === addedId}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}
