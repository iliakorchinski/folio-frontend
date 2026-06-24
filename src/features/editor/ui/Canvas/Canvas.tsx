import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface EditorCanvasProps {
  url: string;
  zoom: number;
  onNumPages: (n: number) => void;
}

export function EditorCanvas({ url, zoom, onNumPages }: EditorCanvasProps) {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div style={{ flex: 1, overflow: 'auto', padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, background: '#E7E5DF' }}>
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => { setNumPages(numPages); onNumPages(numPages); }}
        loading={<div style={{ color: '#8C887F', fontSize: 14 }}>Загрузка...</div>}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <div key={i} style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', flexShrink: 0, boxShadow: '0 4px 24px rgba(31,29,26,.16)', borderRadius: 2 }}>
            <Page pageNumber={i + 1} width={816} renderTextLayer renderAnnotationLayer />
          </div>
        ))}
      </Document>
    </div>
  );
}
