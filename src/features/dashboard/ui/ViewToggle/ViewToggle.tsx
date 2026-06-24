import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import * as S from './styles.js';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onChange: (v: 'grid' | 'list') => void;
}

export function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div style={S.container}>
      {(['grid', 'list'] as const).map(v => (
        <button key={v} onClick={() => onChange(v)} style={S.button(view === v)}>
          {v === 'grid'
            ? <GridViewIcon sx={{ fontSize: 16 }} />
            : <ViewListIcon sx={{ fontSize: 16 }} />
          }
        </button>
      ))}
    </div>
  );
}
