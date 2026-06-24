// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {S} */
export const overlay = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(31,29,26,.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10000,
};

/** @type {S} */
export const dialog = {
  background: '#fff',
  border: '1px solid #EAE7DF',
  borderRadius: 20,
  boxShadow: '0 24px 60px rgba(31,29,26,.18)',
  padding: '32px 32px 28px',
  width: 380,
  maxWidth: 'calc(100vw - 40px)',
};

/** @type {S} */
export const title = {
  fontSize: 18,
  fontWeight: 700,
  color: '#1F1D1A',
  marginBottom: 10,
};

/** @type {S} */
export const body = {
  fontSize: 14,
  color: '#57544E',
  lineHeight: 1.55,
  marginBottom: 28,
};

/** @type {S} */
export const actions = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 10,
};

/** @type {(hovered: boolean) => S} */
export const cancelBtn = (hovered) => ({
  height: 40,
  padding: '0 18px',
  borderRadius: 10,
  border: '1px solid #D9D5CD',
  background: hovered ? '#F7F5F0' : '#fff',
  fontSize: 14,
  fontWeight: 500,
  color: '#1F1D1A',
  cursor: 'pointer',
  transition: 'background .12s',
});

/** @type {(hovered: boolean) => S} */
export const deleteBtn = (hovered) => ({
  height: 40,
  padding: '0 18px',
  borderRadius: 10,
  border: 'none',
  background: hovered ? '#c94224' : '#E8502E',
  fontSize: 14,
  fontWeight: 600,
  color: '#fff',
  cursor: 'pointer',
  transition: 'background .12s',
});
