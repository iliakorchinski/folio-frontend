// @ts-check
/** @typedef {import('react').CSSProperties} S */

/** @type {S} */
export const container = {
  width: 248, flexShrink: 0, background: '#FBFAF6',
  borderRight: '1px solid #EAE7DF',
  display: 'flex', flexDirection: 'column',
  padding: '24px 16px',
};

/** @type {S} */
export const logoArea = {
  display: 'flex', alignItems: 'center', gap: 9, padding: '0 8px 24px',
};

/** @type {S} */
export const logoBadge = {
  width: 30, height: 30, borderRadius: 9, background: '#E8502E',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

/** @type {S} */
export const logoText = {
  fontFamily: "'Bricolage Grotesque', sans-serif",
  fontWeight: 700, fontSize: 18, color: '#1F1D1A', letterSpacing: '-.01em',
};

/** @type {S} */
export const nav = {
  display: 'flex', flexDirection: 'column', gap: 3,
};

/** @type {(active: boolean, hovered: boolean) => S} */
export const navItem = (active, hovered) => ({
  display: 'flex', alignItems: 'center', gap: 11,
  padding: '10px 12px', borderRadius: 10, cursor: 'pointer',
  background: active ? '#FBE9E3' : hovered ? '#F2EFE8' : 'transparent',
  color: active ? '#C13E20' : '#57544E',
  fontWeight: active ? 600 : 500, fontSize: 14,
  transition: 'background .12s',
});

/** @type {S} */
export const spacer = { flex: 1 };

/** @type {S} */
export const storageWidget = {
  background: '#fff', border: '1px solid #EAE7DF',
  borderRadius: 12, padding: '13px 14px', marginBottom: 14,
};

/** @type {S} */
export const storageHeader = {
  display: 'flex', justifyContent: 'space-between',
  fontSize: 12, color: '#8C887F', marginBottom: 8,
};

/** @type {S} */
export const storageLabel = {
  fontWeight: 600, color: '#57544E',
};

/** @type {S} */
export const storageBar = {
  height: 6, background: '#EDE9E0', borderRadius: 4, overflow: 'hidden',
};

/** @type {S} */
export const storageBarFill = {
  width: '64%', height: '100%', background: '#E8502E', borderRadius: 4,
};

/** @type {S} */
export const profileRow = {
  display: 'flex', alignItems: 'center', gap: 10, padding: '6px 8px',
};

/** @type {S} */
export const avatar = {
  width: 32, height: 32, borderRadius: '50%', background: '#EDE9E0',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 13, fontWeight: 600, color: '#57544E', flexShrink: 0,
};

/** @type {S} */
export const profileInfo = { minWidth: 0 };

/** @type {S} */
export const profileName = {
  fontSize: 13.5, fontWeight: 600, color: '#1F1D1A',
};

/** @type {S} */
export const profilePlan = {
  fontSize: 12, color: '#A29D92',
};
