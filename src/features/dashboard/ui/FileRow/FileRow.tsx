import { useTranslation } from 'react-i18next';
import { useHover } from '@/shared/hooks/useHover';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { PdfPreview } from '../PdfPreview/PdfPreview';
import type { PdfFile } from '@/shared/types/file';
import * as S from './styles.js';

interface FileRowProps {
  file: PdfFile;
  isNew: boolean;
  onOpen: (name: string) => void;
}

export function FileRow({ file, isNew, onOpen }: FileRowProps) {
  const { t } = useTranslation();
  const { hovered, hoverProps } = useHover();
  const { hovered: dotsHovered, hoverProps: dotsHoverProps } = useHover();

  return (
    <div onClick={() => onOpen(file.name)} {...hoverProps} style={S.root(hovered)}>
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
          onClick={e => e.stopPropagation()}
          {...dotsHoverProps}
          style={S.dotsButton(dotsHovered)}
        >
          <MoreHorizIcon sx={{ fontSize: 18, color: '#A29D92' }} />
        </div>
      </div>
    </div>
  );
}
