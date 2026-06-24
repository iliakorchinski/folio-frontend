// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {(hovered: boolean) => S} */
export const root = (hovered) => ({
  border: `2px dashed ${hovered ? '#E8502E' : '#DCD7CB'}`,
  borderRadius: 16, padding: 26,
  display: 'flex', alignItems: 'center', gap: 18,
  cursor: 'pointer', marginBottom: 30,
  background: hovered ? '#FCF0EC' : '#FCFBF8',
  transition: 'border-color .15s, background .15s',
});

/** @type {S} */
export const iconWrap = {
  width: 52, height: 52, borderRadius: 14, background: '#FBE9E3',
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
};

/** @type {S} */
export const title = {
  fontSize: 16, fontWeight: 600, color: '#1F1D1A', marginBottom: 3,
};

/** @type {S} */
export const hint = {
  fontSize: 13.5, color: '#8C887F',
};
