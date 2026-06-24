import { useTranslation } from 'react-i18next';
import { ViewToggle } from '../ViewToggle/ViewToggle';
import * as S from './styles.js';

interface SectionHeaderProps {
  count: number;
  view: 'grid' | 'list';
  onViewChange: (v: 'grid' | 'list') => void;
}

export function SectionHeader({ count, view, onViewChange }: SectionHeaderProps) {
  const { t } = useTranslation();

  return (
    <div style={S.root}>
      <div style={S.headingRow}>
        <h2 style={S.heading}>{t('files.allFiles')}</h2>
        <span style={S.count}>{count}</span>
      </div>
      <ViewToggle view={view} onChange={onViewChange} />
    </div>
  );
}
