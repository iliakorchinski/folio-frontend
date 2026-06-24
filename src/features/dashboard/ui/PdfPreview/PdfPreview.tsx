import * as S from './styles.js';

interface PdfPreviewProps {
  variant?: 'grid' | 'list';
}

export function PdfPreview({ variant = 'grid' }: PdfPreviewProps) {
  if (variant === 'list') {
    return (
      <div style={S.listRoot}>
        <div style={S.listLines}>
          {S.listLineItems.map((s, i) => <div key={i} style={s} />)}
        </div>
        <div style={S.listFooter}>PDF</div>
      </div>
    );
  }

  return (
    <div style={S.gridRoot}>
      <div style={S.gridLines}>
        {S.gridLineItems.map((s, i) => <div key={i} style={s} />)}
      </div>
      <div style={S.gridFooter}>PDF</div>
    </div>
  );
}
