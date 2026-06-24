// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {(hovered: boolean, uploading: boolean) => S} */
export const root = (hovered, uploading) => ({
  display: 'flex', alignItems: 'center', padding: '12px 14px',
  borderRadius: 12, cursor: uploading ? 'default' : 'pointer',
  borderBottom: '1px solid #F1EEE7',
  background: hovered && !uploading ? '#FBFAF6' : 'transparent',
  transition: 'background .12s',
  opacity: uploading ? 0.75 : 1,
});

/** @type {S} */
export const info = {
  flex: 1, display: 'flex', alignItems: 'center', gap: 14, minWidth: 0,
};

/** @type {S} */
export const nameGroup = { minWidth: 0, flex: 1 };

/** @type {S} */
export const nameLine = {
  display: 'flex', alignItems: 'center', gap: 8,
};

/** @type {S} */
export const name = {
  fontSize: 15, fontWeight: 600, color: '#1F1D1A',
  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
};

/** @type {S} */
export const newBadge = {
  fontSize: 10, fontWeight: 700, letterSpacing: '.04em',
  color: '#fff', background: '#E8502E',
  borderRadius: 5, padding: '2px 6px', flexShrink: 0,
};

/** @type {S} */
export const badge = {
  fontSize: 12.5, color: '#A29D92', marginTop: 2,
};

/** @type {S} */
export const progressBar = {
  marginTop: 5,
  height: 3,
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

/** @type {S} */
export const colPages = {
  width: 90, textAlign: 'right', fontSize: 14, color: '#57544E',
};

/** @type {S} */
export const colSize = {
  width: 110, textAlign: 'right', fontSize: 14, color: '#57544E',
};

/** @type {S} */
export const colModified = {
  width: 160, textAlign: 'right', fontSize: 14, color: '#57544E',
};

/** @type {S} */
export const colActions = {
  width: 48, display: 'flex', justifyContent: 'flex-end',
};

/** @type {(hovered: boolean) => S} */
export const dotsButton = (hovered) => ({
  width: 30, height: 30, borderRadius: 8,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: hovered ? '#EDE9E0' : 'transparent',
  transition: 'background .12s', cursor: 'pointer',
});
