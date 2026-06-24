import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as S from './styles.js';

export interface ContextMenuItem {
  icon: IconDefinition;
  label: string;
  danger?: boolean;
  onClick: () => void;
}

interface ContextMenuProps {
  x: number;
  y: number;
  items: ContextMenuItem[];
  onClose: () => void;
}

export function ContextMenu({ x, y, items, onClose }: ContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x, y });

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    const adjX = x + width > window.innerWidth ? x - width : x;
    const adjY = y + height > window.innerHeight ? y - height : y;
    setPos({ x: adjX, y: adjY });
  }, [x, y]);

  return createPortal(
    <div ref={ref} style={S.root(pos.x, pos.y)}>
      {items.map((item, i) => (
        <ItemButton key={i} item={item} onClose={onClose} />
      ))}
    </div>,
    document.body,
  );
}

function ItemButton({ item, onClose }: { item: ContextMenuItem; onClose: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      style={{
        ...S.item,
        background: hovered ? (item.danger ? '#FFF4F2' : '#F7F5F0') : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { item.onClick(); onClose(); }}
    >
      <FontAwesomeIcon
        icon={item.icon}
        style={{ fontSize: 14, color: item.danger ? '#E8502E' : '#57544E', width: 16 }}
      />
      <span style={S.label(item.danger)}>{item.label}</span>
    </button>
  );
}

export function useDeleteMenuItem(onDelete: () => void): ContextMenuItem {
  const { t } = useTranslation();
  return {
    icon: faTrashCan,
    label: t('contextMenu.delete'),
    danger: true,
    onClick: onDelete,
  };
}
