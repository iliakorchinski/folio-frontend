import { useState, useCallback } from 'react';
import { useGetFilesQuery, useUploadFileMutation } from '@/shared/api/filesApi';
import type { PdfFile } from '@/shared/types/file';

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} КБ`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('ru-RU');
}

export function useFiles() {
  const [q, setQ] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [addedId, setAddedId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const { data = [] } = useGetFilesQuery();
  console.log('Fetched files:', data); // Debugging line
  const [uploadFile] = useUploadFileMutation();

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

  const open = useCallback((name: string) => {
    console.log(`Opening file: ${name}`);
  }, []);

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

  return {
    q,
    setQ,
    view,
    setView,
    addedId,
    toast,
    filtered,
    filteredEmpty: filtered.length === 0,
    totalCount: files.length,
    open,
    handleUpload,
  };
}
