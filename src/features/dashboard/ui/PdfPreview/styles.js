// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {S} */
export const gridRoot = {
  width: 98, height: 124, background: '#fff', borderRadius: 5,
  boxShadow: '0 4px 12px rgba(31,29,26,.1)', position: 'relative', overflow: 'hidden',
};

/** @type {S} */
export const gridLines = {
  position: 'absolute', top: 16, left: 13, right: 13,
  display: 'flex', flexDirection: 'column', gap: 5,
};

/** @type {S[]} */
export const gridLineItems = [
  { height: 4, width: '85%', background: '#DEDAD1', borderRadius: 2 },
  { height: 4, width: '65%', background: '#E7E3DB', borderRadius: 2 },
  { height: 4, width: '78%', background: '#E7E3DB', borderRadius: 2 },
  { height: 4, width: '55%', background: '#E7E3DB', borderRadius: 2 },
  { height: 4, width: '70%', background: '#E7E3DB', borderRadius: 2 },
];

/** @type {S} */
export const gridFooter = {
  position: 'absolute', bottom: 0, left: 0, right: 0, height: 18,
  background: '#E8502E', color: '#fff', fontSize: 8, fontWeight: 700,
  letterSpacing: '.5px', display: 'flex', alignItems: 'center', justifyContent: 'center',
};

/** @type {S} */
export const listRoot = {
  width: 40, height: 52, borderRadius: 6, border: '1px solid #EAE7DF',
  background: '#fff', position: 'relative', overflow: 'hidden', flexShrink: 0,
  boxShadow: '0 1px 2px rgba(0,0,0,.04)',
};

/** @type {S} */
export const listLines = {
  position: 'absolute', top: 7, left: 6, right: 6,
  display: 'flex', flexDirection: 'column', gap: 3,
};

/** @type {S[]} */
export const listLineItems = [
  { height: 2.5, width: '88%', background: '#DEDAD1', borderRadius: 2 },
  { height: 2.5, width: '66%', background: '#E7E3DB', borderRadius: 2 },
  { height: 2.5, width: '78%', background: '#E7E3DB', borderRadius: 2 },
];

/** @type {S} */
export const listFooter = {
  position: 'absolute', bottom: 0, left: 0, right: 0, height: 11,
  background: '#E8502E', color: '#fff', fontSize: 6, fontWeight: 700,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};
