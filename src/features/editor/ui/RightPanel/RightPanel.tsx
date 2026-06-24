interface RightPanelProps {
  fileName: string;
  size: number;
  numPages: number;
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} КБ`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
}

export function RightPanel({ fileName: _fileName, size, numPages }: RightPanelProps) {
  return (
    <div style={{ width: 288, flexShrink: 0, background: '#FBFAF6', borderLeft: '1px solid #EAE7DF', display: 'flex', flexDirection: 'column', padding: '22px 20px', gap: 24, overflowY: 'auto' }}>
      <div>
        <div style={sectionLabel}>Страницы</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {Array.from({ length: numPages || 1 }, (_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 8, borderRadius: 12, background: '#fff', border: i === 0 ? '1.5px solid #E8502E' : '1.5px solid #EAE7DF' }}>
              <div style={{ width: 46, height: 60, background: '#fff', border: '1px solid #EAE7DF', borderRadius: 4, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, padding: 6, boxShadow: '0 1px 3px rgba(0,0,0,.06)' }}>
                {[80, 90, 75, 85].map((w, j) => (
                  <div key={j} style={{ height: 2, width: `${w}%`, background: '#E7E3DB', borderRadius: 2 }} />
                ))}
              </div>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: '#1F1D1A' }}>Страница {i + 1}</div>
                <div style={{ fontSize: 12, color: '#A29D92', marginTop: 2 }}>{i === 0 ? 'Просмотр' : ''}</div>
              </div>
            </div>
          ))}
          <button onClick={() => console.log('add page')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: 11, border: '1.5px dashed #DCD7CB', borderRadius: 12, background: 'transparent', cursor: 'pointer', color: '#8C887F', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600, fontSize: 13 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            Добавить страницу
          </button>
        </div>
      </div>

      <div>
        <div style={sectionLabel}>Документ</div>
        <div style={{ background: '#fff', border: '1px solid #EAE7DF', borderRadius: 12, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <InfoRow label="Страниц" value={String(numPages || '—')} />
          <InfoRow label="Формат" value="A4 · PDF" />
          <InfoRow label="Размер" value={formatSize(size)} />
        </div>
      </div>

      <div style={{ background: '#FBE9E3', borderRadius: 12, padding: '14px 16px' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#C13E20', marginBottom: 4 }}>Подсказка</div>
        <div style={{ fontSize: 12.5, lineHeight: 1.5, color: '#9A4530' }}>Используйте инструменты слева для работы с документом.</div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
      <span style={{ color: '#8C887F' }}>{label}</span>
      <span style={{ fontWeight: 600, color: '#1F1D1A' }}>{value}</span>
    </div>
  );
}

const sectionLabel: React.CSSProperties = { fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#A29D92', marginBottom: 12 };
