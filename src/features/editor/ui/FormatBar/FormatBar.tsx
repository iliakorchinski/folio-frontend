interface FormatBarProps {
  visible: boolean;
}

const COLORS = [
  { value: '#1A1A17', title: 'Чёрный' },
  { value: '#E8502E', title: 'Коралл' },
  { value: '#2C6FD6', title: 'Синий' },
  { value: '#1F8A5B', title: 'Зелёный' },
];

export function FormatBar({ visible }: FormatBarProps) {
  if (!visible) return <div style={{ height: 48, flexShrink: 0, borderBottom: '1px solid #EAE7DF', background: '#fff', opacity: 0.4, pointerEvents: 'none' }} />;

  return (
    <div style={{ height: 48, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4, padding: '0 16px', background: '#fff', borderBottom: '1px solid #EAE7DF' }}>
      <FmtBtn onClick={() => console.log('toggle bold')} style={{ fontWeight: 700, fontSize: 15 }}>B</FmtBtn>
      <FmtBtn onClick={() => console.log('toggle italic')} style={{ fontStyle: 'italic', fontWeight: 600, fontSize: 15 }}>I</FmtBtn>

      <Divider />

      <FmtBtn onClick={() => console.log('decrease size')}>A−</FmtBtn>
      <span style={{ fontSize: 13, fontWeight: 600, color: '#1F1D1A', width: 34, textAlign: 'center' }}>16</span>
      <FmtBtn onClick={() => console.log('increase size')}>A+</FmtBtn>

      <Divider />

      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {COLORS.map(c => (
          <button
            key={c.value}
            title={c.title}
            onClick={() => console.log('color', c.value)}
            style={{ width: 20, height: 20, borderRadius: '50%', border: '1.5px solid #fff', boxShadow: '0 0 0 1px #DAD5CA', background: c.value, cursor: 'pointer' }}
          />
        ))}
      </div>

      <Divider />

      <FmtBtn onClick={() => console.log('toggle highlight')}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F1D1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16" /><path d="M14 4l6 6-9 9H7l-3-3z" fill="#FFE69A" stroke="#1F1D1A" /></svg>
      </FmtBtn>
      <FmtBtn onClick={() => console.log('cycle align')}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#57544E" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h10M4 18h14" /></svg>
      </FmtBtn>

      <div style={{ flex: 1 }} />

      <FmtBtn onClick={() => console.log('delete selection')}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C13E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" /></svg>
      </FmtBtn>
    </div>
  );
}

function FmtBtn({ onClick, children, style }: { onClick: () => void; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <button onClick={onClick} style={{ width: 32, height: 32, border: 'none', borderRadius: 8, cursor: 'pointer', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Hanken Grotesk, sans-serif', color: '#1F1D1A', ...style }}>
      {children}
    </button>
  );
}

function Divider() {
  return <div style={{ width: 1, height: 22, background: '#EAE7DF', margin: '0 6px' }} />;
}
