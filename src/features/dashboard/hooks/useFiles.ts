import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetFilesQuery, useUploadFileMutation, useDeleteFileMutation } from '@/shared/api/filesApi';
import type { PdfFile } from '@/shared/types/file';

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} КБ`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('ru-RU');
}

export interface MenuState {
  id: string;
  x: number;
  y: number;
}

export function useFiles() {
  const [q, setQ] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [addedId, setAddedId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [menuState, setMenuState] = useState<MenuState | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const navigate = useNavigate();
  const { data = [] } = useGetFilesQuery();
  const [uploadFile] = useUploadFileMutation();
  const [deleteFile] = useDeleteFileMutation();

  const files: PdfFile[] = data.map((f) => ({
    id: f.id,
    name: f.name,
    size: formatSize(f.size),
    modified: formatDate(f.createdAt),
    pages: 0,
    badge: '',
  }));

  const filtered = files.filter((f) =>
    f.name.toLowerCase().includes(q.trim().toLowerCase()),
  );

  const open = useCallback((id: string) => {
    navigate(`/editor/${id}`);
  }, [navigate]);

  const handleUpload = useCallback(
    async (file: File) => {
      try {
        const result = await uploadFile(file).unwrap();
        setAddedId(result.id);
        setToast(result.name);
        setTimeout(() => {
          setAddedId(null);
          setToast(null);
        }, 3000);
      } catch {
        console.error('Upload failed');
      }
    },
    [uploadFile],
  );

  const openMenu = useCallback((id: string, x: number, y: number) => {
    setMenuState({ id, x, y });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuState(null);
  }, []);

  const requestDelete = useCallback((id: string) => {
    setConfirmId(id);
  }, []);

  const confirmDelete = useCallback(async () => {
    if (!confirmId) return;
    try {
      await deleteFile(confirmId).unwrap();
    } catch {
      console.error('Delete failed');
    } finally {
      setConfirmId(null);
    }
  }, [confirmId, deleteFile]);

  const cancelDelete = useCallback(() => {
    setConfirmId(null);
  }, []);

  const confirmFile = files.find(f => f.id === confirmId) ?? null;

  return {
    q, setQ,
    view, setView,
    addedId, toast,
    filtered,
    filteredEmpty: filtered.length === 0,
    totalCount: files.length,
    open, handleUpload,
    menuState, openMenu, closeMenu,
    confirmFile, requestDelete, confirmDelete, cancelDelete,
  };
}
