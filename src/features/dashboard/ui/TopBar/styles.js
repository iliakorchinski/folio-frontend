// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {S} */
export const root = {
  display: 'flex', alignItems: 'center', gap: 14,
  padding: '22px 36px', borderBottom: '1px solid #F1EEE7',
};

/** @type {S} */
export const searchBox = {
  flex: 1, display: 'flex', alignItems: 'center', gap: 10,
  maxWidth: 480, background: '#FBFAF6',
  border: '1px solid #EAE7DF', borderRadius: 11, padding: '11px 15px',
};

/** @type {S} */
export const searchInput = {
  border: 'none', background: 'none', outline: 'none',
  fontFamily: "'Hanken Grotesk', sans-serif",
  fontSize: 14, color: '#1F1D1A', width: '100%',
};

/** @type {S} */
export const spacer = { flex: 1 };

/** @type {(hovered: boolean) => S} */
export const uploadButton = (hovered) => ({
  display: 'flex', alignItems: 'center', gap: 7,
  background: hovered ? '#C13E20' : '#E8502E',
  color: '#fff', border: 'none', borderRadius: 11,
  padding: '11px 18px', fontWeight: 600, fontSize: 14,
  cursor: 'pointer', transition: 'background .15s',
});
