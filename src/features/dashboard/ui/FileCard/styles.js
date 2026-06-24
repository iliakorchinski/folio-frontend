// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {(hovered: boolean) => S} */
export const root = (hovered) => ({
  background: '#fff',
  border: `1px solid ${hovered ? '#E0DBCF' : '#EAE7DF'}`,
  borderRadius: 16,
  overflow: 'hidden',
  cursor: 'pointer',
  transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
  boxShadow: hovered ? '0 10px 24px rgba(31,29,26,.1)' : 'none',
  transition: 'transform .18s ease, box-shadow .18s ease, border-color .18s ease',
});

/** @type {S} */
export const preview = {
  height: 152, background: '#F4F2EC',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  position: 'relative',
};

/** @type {S} */
export const newBadge = {
  position: 'absolute', top: 12, left: 12,
  fontSize: 10, fontWeight: 700, letterSpacing: '.04em',
  color: '#fff', background: '#E8502E', borderRadius: 6,
  padding: '3px 7px', zIndex: 2,
};

/** @type {S} */
export const body = {
  padding: '14px 16px 16px',
};

/** @type {S} */
export const name = {
  fontSize: 15, fontWeight: 600, color: '#1F1D1A',
  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
};

/** @type {S} */
export const meta = {
  display: 'flex', alignItems: 'center', gap: 8,
  marginTop: 7, fontSize: 12.5, color: '#A29D92',
};
