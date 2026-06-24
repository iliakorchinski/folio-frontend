import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faList } from '@fortawesome/free-solid-svg-icons';
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
            ? <FontAwesomeIcon icon={faGrip} style={{ fontSize: 15 }} />
            : <FontAwesomeIcon icon={faList} style={{ fontSize: 15 }} />
          }
        </button>
      ))}
    </div>
  );
}
