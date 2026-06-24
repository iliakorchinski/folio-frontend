// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {(hovered: boolean, uploading: boolean) => S} */
export const root = (hovered, uploading) => ({
  background: '#fff',
  border: `1px solid ${hovered && !uploading ? '#E0DBCF' : '#EAE7DF'}`,
  borderRadius: 16,
  overflow: 'hidden',
  cursor: uploading ? 'default' : 'pointer',
  transform: hovered && !uploading ? 'translateY(-3px)' : 'translateY(0)',
  boxShadow: hovered && !uploading ? '0 10px 24px rgba(31,29,26,.1)' : 'none',
  transition: 'transform .18s ease, box-shadow .18s ease, border-color .18s ease',
  opacity: uploading ? 0.75 : 1,
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

/** @type {S} */
export const progressBar = {
  marginTop: 10,
  height: 4,
  background: '#EAE7DF',
  borderRadius: 2,
  overflow: 'hidden',
};

/** @type {(progress: number) => S} */
export const progressFill = (progress) => ({
  height: '100%',
  width: `${progress}%`,
  background: '#E8502E',
  borderRadius: 2,
  transition: 'width 0.2s ease',
});
