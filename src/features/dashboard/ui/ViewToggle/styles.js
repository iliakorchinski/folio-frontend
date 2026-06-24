// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {S} */
export const container = {
  display: 'flex', background: '#FBFAF6', border: '1px solid #EAE7DF',
  borderRadius: 10, padding: 3, gap: 2,
};

/** @type {(active: boolean) => S} */
export const button = (active) => ({
  border: 'none', cursor: 'pointer', borderRadius: 8,
  width: 36, height: 32, display: 'flex', alignItems: 'center',
  justifyContent: 'center', transition: 'background .12s',
  background: active ? '#fff' : 'transparent',
  color: active ? '#1F1D1A' : '#A29D92',
});
