// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {S} */
export const root = {
  height: '100vh', display: 'flex',
  background: '#fff',
  fontFamily: "'Hanken Grotesk', sans-serif",
};

/** @type {S} */
export const main = {
  flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0,
};

/** @type {S} */
export const content = {
  flex: 1, overflowY: 'auto', padding: '28px 36px 40px',
};

/** @type {S} */
export const emptyState = {
  padding: 70, textAlign: 'center', color: '#A29D92', fontSize: 14,
};
