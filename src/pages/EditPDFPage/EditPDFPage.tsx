import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetFileQuery } from '@/shared/api/filesApi';
import type { RootState } from '@/app/store';
import { EditorTopBar } from '@/features/editor/ui/TopBar/TopBar';
import { ToolRail } from '@/features/editor/ui/ToolRail/ToolRail';
import { FormatBar } from '@/features/editor/ui/FormatBar/FormatBar';
import { EditorCanvas } from '@/features/editor/ui/Canvas/Canvas';
import { RightPanel } from '@/features/editor/ui/RightPanel/RightPanel';

type Tool = 'select' | 'add' | 'sign' | 'erase';

export function EditPDFPage() {
  const { id } = useParams<{ id: string }>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { data: file } = useGetFileQuery(id!, { skip: !token });

  const [tool, setTool] = useState<Tool>('select');
  const [zoom, setZoom] = useState(1);
  const [numPages, setNumPages] = useState(0);

  if (!file) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Hanken Grotesk, sans-serif', color: '#8C887F' }}>
        Загрузка...
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: '#fff', fontFamily: 'Hanken Grotesk, sans-serif', WebkitFontSmoothing: 'antialiased', overflow: 'hidden' }}>
      <EditorTopBar
        fileName={file.name}
        zoom={zoom}
        onZoomIn={() => setZoom(z => Math.min(z + 0.1, 2))}
        onZoomOut={() => setZoom(z => Math.max(z - 0.1, 0.5))}
        onUndo={() => console.log('undo')}
        onRedo={() => console.log('redo')}
        onDownload={() => console.log('download')}
      />

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <ToolRail tool={tool} onToolChange={setTool} />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <FormatBar visible={tool === 'add'} />
          <EditorCanvas url={file.url} zoom={zoom} onNumPages={setNumPages} />
        </div>

        <RightPanel fileName={file.name} size={file.size} numPages={numPages} />
      </div>
    </div>
  );
}
