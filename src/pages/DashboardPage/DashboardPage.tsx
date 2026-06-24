import { useTranslation } from 'react-i18next';
import {
  useFiles,
  Sidebar,
  TopBar,
  Dropzone,
  SectionHeader,
  FileGrid,
  FileList,
  Toast,
} from '@/features/dashboard';
import * as S from './styles.js';

export function DashboardPage() {
  const { t } = useTranslation();
  const {
    q, setQ,
    view, setView,
    addedId, toast,
    filtered, filteredEmpty,
    totalCount,
    open, handleUpload,
  } = useFiles();

  return (
    <div style={S.root}>
      <Sidebar />

      <div style={S.main}>
        <TopBar q={q} setQ={setQ} onUpload={handleUpload} />

        <div style={S.content}>
          <Dropzone onUpload={handleUpload} />
          <SectionHeader count={totalCount} view={view} onViewChange={setView} />

          {!filteredEmpty && view === 'grid' && (
            <FileGrid files={filtered} addedId={addedId} onOpen={open} />
          )}
          {!filteredEmpty && view === 'list' && (
            <FileList files={filtered} addedId={addedId} onOpen={open} />
          )}
          {filteredEmpty && (
            <div style={S.emptyState}>{t('files.empty')}</div>
          )}
        </div>
      </div>

      <Toast message={toast} />
    </div>
  );
}
