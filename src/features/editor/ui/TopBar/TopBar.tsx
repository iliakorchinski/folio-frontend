import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faDownload } from '@fortawesome/free-solid-svg-icons';

interface EditorTopBarProps {
  fileName: string;
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onDownload: () => void;
}

export function EditorTopBar({ fileName, zoom, onZoomIn, onZoomOut, onUndo, onRedo, onDownload }: EditorTopBarProps) {
  const navigate = useNavigate();

  return (
    <div style={{ height: 58, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 14, padding: '0 18px', borderBottom: '1px solid #EAE7DF', background: '#fff', zIndex: 20 }}>
      <button
        onClick={() => navigate('/')}
        style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'transparent', border: 'none', color: '#57544E', padding: '7px 10px', borderRadius: 9, cursor: 'pointer', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600, fontSize: 13.5 }}
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: 14 }} />
        Файлы
      </button>

      <div style={{ width: 1, height: 24, background: '#EAE7DF' }} />

      <div style={{ width: 24, height: 24, borderRadius: 7, background: '#E8502E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 3h8l4 4v14H6z" fill="#fff" /><path d="M14 3v4h4" fill="#FBE9E3" /></svg>
      </div>

      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 14.5, fontWeight: 600, color: '#1F1D1A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{fileName}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#A29D92', marginTop: 1 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1F8A5B', display: 'inline-block' }} />
          Все изменения сохранены
        </div>
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 3, background: '#FBFAF6', border: '1px solid #EAE7DF', borderRadius: 10, padding: 3 }}>
        <button onClick={onUndo} title="Отменить" style={toolBtn}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#57544E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14L4 9l5-5" /><path d="M4 9h11a5 5 0 0 1 5 5v1" /></svg>
        </button>
        <button onClick={onRedo} title="Повторить" style={toolBtn}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#57544E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14l5-5-5-5" /><path d="M20 9H9a5 5 0 0 0-5 5v1" /></svg>
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: '#FBFAF6', border: '1px solid #EAE7DF', borderRadius: 10, padding: 3 }}>
        <button onClick={onZoomOut} style={toolBtn}>−</button>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#57544E', width: 46, textAlign: 'center' }}>{Math.round(zoom * 100)}%</span>
        <button onClick={onZoomIn} style={toolBtn}>+</button>
      </div>

      <button onClick={onDownload} style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#E8502E', color: '#fff', border: 'none', borderRadius: 10, padding: '9px 16px', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
        <FontAwesomeIcon icon={faDownload} style={{ fontSize: 14 }} />
        Скачать PDF
      </button>
    </div>
  );
}

const toolBtn: React.CSSProperties = { width: 32, height: 30, border: 'none', background: 'transparent', borderRadius: 7, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#57544E' };
