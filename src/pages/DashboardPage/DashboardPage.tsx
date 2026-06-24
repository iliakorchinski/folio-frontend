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
import { ContextMenu, useDeleteMenuItem } from '@/shared/ui/ContextMenu/ContextMenu';
import { ConfirmModal } from '@/shared/ui/ConfirmModal/ConfirmModal';
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
    menuState, openMenu, closeMenu,
    confirmFile, requestDelete, confirmDelete, cancelDelete,
  } = useFiles();

  const deleteMenuItem = useDeleteMenuItem(() => {
    if (menuState) requestDelete(menuState.id);
  });

  return (
    <div style={S.root}>
      <Sidebar />

      <div style={S.main}>
        <TopBar q={q} setQ={setQ} onUpload={handleUpload} />

        <div style={S.content}>
          <Dropzone onUpload={handleUpload} />
          <SectionHeader count={totalCount} view={view} onViewChange={setView} />

          {!filteredEmpty && view === 'grid' && (
            <FileGrid files={filtered} addedId={addedId} onOpen={open} onContextMenu={openMenu} />
          )}
          {!filteredEmpty && view === 'list' && (
            <FileList files={filtered} addedId={addedId} onOpen={open} onMenu={openMenu} />
          )}
          {filteredEmpty && (
            <div style={S.emptyState}>{t('files.empty')}</div>
          )}
        </div>
      </div>

      <Toast message={toast} />

      {menuState && (
        <ContextMenu
          x={menuState.x}
          y={menuState.y}
          items={[deleteMenuItem]}
          onClose={closeMenu}
        />
      )}

      {confirmFile && (
        <ConfirmModal
          title={t('confirmModal.deleteTitle')}
          description={t('confirmModal.deleteBody', { name: confirmFile.name })}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}
