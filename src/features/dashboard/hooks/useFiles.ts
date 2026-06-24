import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetFilesQuery, useDeleteFileMutation, filesApi } from '@/shared/api/filesApi';
import type { FileDto } from '@/shared/api/filesApi';
import type { AppDispatch, RootState } from '@/app/store';
import type { PdfFile } from '@/shared/types/file';

const API_BASE = 'http://localhost:3000';

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

interface UploadingState {
  name: string;
  progress: number;
}

export function useFiles() {
  const [q, setQ] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [addedId, setAddedId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [menuState, setMenuState] = useState<MenuState | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [uploadingState, setUploadingState] = useState<UploadingState | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { data = [] } = useGetFilesQuery(undefined, { skip: !token });
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

  const uploadingPhantom: PdfFile | null = uploadingState
    ? {
        id: '__uploading__',
        name: uploadingState.name,
        size: '—',
        modified: '—',
        pages: 0,
        badge: '',
        uploading: true,
        progress: uploadingState.progress,
      }
    : null;

  const filteredWithUploading = uploadingPhantom
    ? [uploadingPhantom, ...filtered]
    : filtered;

  const open = useCallback((id: string) => {
    navigate(`/editor/${id}`);
  }, [navigate]);

  const handleUpload = useCallback(
    (file: File) => {
      setUploadingState({ name: file.name, progress: 0 });

      const xhr = new XMLHttpRequest();

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          setUploadingState({ name: file.name, progress: Math.round((e.loaded / e.total) * 100) });
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const result: FileDto = JSON.parse(xhr.responseText);
          setUploadingState(null);
          setAddedId(result.id);
          setToast(result.name);
          setTimeout(() => { setAddedId(null); setToast(null); }, 3000);
          dispatch(filesApi.util.invalidateTags(['Files']));
        } else {
          setUploadingState(null);
          console.error('Upload failed', xhr.status);
        }
      };

      xhr.onerror = () => {
        setUploadingState(null);
        console.error('Upload failed');
      };

      const formData = new FormData();
      formData.append('file', file);
      xhr.open('POST', `${API_BASE}/files/upload`);
      if (token) xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send(formData);
    },
    [token, dispatch],
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
    filtered: filteredWithUploading,
    filteredEmpty: filteredWithUploading.length === 0,
    totalCount: files.length,
    open, handleUpload,
    menuState, openMenu, closeMenu,
    confirmFile, requestDelete, confirmDelete, cancelDelete,
  };
}
