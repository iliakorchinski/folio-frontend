import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useHover } from '@/shared/hooks/useHover';
import * as S from './styles.js';

type NavKey = 'allFiles' | 'recent' | 'favorites' | 'trash';

const NAV_ITEMS: { key: NavKey; icon: IconDefinition }[] = [
  { key: 'allFiles', icon: faBars },
  { key: 'recent', icon: faClock },
  { key: 'favorites', icon: faStar },
  { key: 'trash', icon: faTrashCan },
];

function NavItem({ label, active, onActivate, icon }: {
  label: string;
  active: boolean;
  onActivate: () => void;
  icon: IconDefinition;
}) {
  const { hovered, hoverProps } = useHover();

  return (
    <div onClick={onActivate} {...hoverProps} style={S.navItem(active, hovered)}>
      <FontAwesomeIcon icon={icon} style={{ fontSize: 15, width: 16 }} />
      {label}
    </div>
  );
}

export function Sidebar() {
  const { t } = useTranslation();
  const [active, setActive] = useState<NavKey>('allFiles');

  return (
    <div style={S.container}>
      <div style={S.logoArea}>
        <div style={S.logoBadge}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 3h8l4 4v14H6z" fill="#fff" />
            <path d="M14 3v4h4" fill="#FBE9E3" />
          </svg>
        </div>
        <span style={S.logoText}>Folio</span>
      </div>

      <div style={S.nav}>
        {NAV_ITEMS.map(item => (
          <NavItem
            key={item.key}
            label={t(`nav.${item.key}`)}
            active={active === item.key}
            onActivate={() => setActive(item.key)}
            icon={item.icon}
          />
        ))}
      </div>

      <div style={S.spacer} />

      <div style={S.storageWidget}>
        <div style={S.storageHeader}>
          <span>{t('sidebar.storage')}</span>
          <span style={S.storageLabel}>{t('sidebar.storageUsed')}</span>
        </div>
        <div style={S.storageBar}>
          <div style={S.storageBarFill} />
        </div>
      </div>

      <div style={S.profileRow}>
        <div style={S.avatar}>АК</div>
        <div style={S.profileInfo}>
          <div style={S.profileName}>Анна Котова</div>
          <div style={S.profilePlan}>{t('sidebar.freePlan')}</div>
        </div>
      </div>
    </div>
  );
}
