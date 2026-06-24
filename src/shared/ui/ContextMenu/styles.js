// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {(x: number, y: number) => S} */
export const root = (x, y) => ({
  position: 'fixed',
  left: x,
  top: y,
  background: '#fff',
  border: '1px solid #EAE7DF',
  borderRadius: 12,
  boxShadow: '0 8px 24px rgba(31,29,26,.13)',
  padding: 6,
  zIndex: 9999,
  minWidth: 168,
});

/** @type {S} */
export const item = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  width: '100%',
  padding: '9px 12px',
  borderRadius: 8,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'background .1s',
};

/** @type {(danger?: boolean) => S} */
export const label = (danger = false) => ({
  fontSize: 14,
  fontWeight: 500,
  color: danger ? '#E8502E' : '#1F1D1A',
});
