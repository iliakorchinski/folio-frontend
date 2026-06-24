type Tool = 'select' | 'add' | 'sign' | 'erase';

interface ToolRailProps {
  tool: Tool;
  onToolChange: (t: Tool) => void;
}

export function ToolRail({ tool, onToolChange }: ToolRailProps) {
  return (
    <div style={{ width: 66, flexShrink: 0, background: '#FBFAF6', borderRight: '1px solid #EAE7DF', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '14px 0', gap: 6 }}>
      <ToolBtn active={tool === 'select'} title="Курсор" onClick={() => onToolChange('select')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3l7 17 2.5-6.5L20 11z" /></svg>
      </ToolBtn>
      <ToolBtn active={tool === 'add'} title="Добавить текст" onClick={() => onToolChange('add')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7V5h14v2" /><path d="M12 5v14" /><path d="M9 19h6" /></svg>
      </ToolBtn>
      <ToolBtn active={tool === 'sign'} title="Подпись" onClick={() => onToolChange('sign')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 19c3 0 4-9 6-9s1 6 3 6 2-4 4-4 2 2 4 2" /><path d="M3 21h18" /></svg>
      </ToolBtn>
      <ToolBtn active={tool === 'erase'} title="Ластик" onClick={() => onToolChange('erase')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21h13" /><path d="M16 5l3 3L9 18H6v-3z" /></svg>
      </ToolBtn>
    </div>
  );
}

function ToolBtn({ active, title, onClick, children }: { active: boolean; title: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      title={title}
      onClick={onClick}
      style={{ width: 44, height: 44, border: 'none', borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? '#FBE9E3' : 'transparent', color: active ? '#C13E20' : '#57544E', transition: 'background .12s' }}
    >
      {children}
    </button>
  );
}
