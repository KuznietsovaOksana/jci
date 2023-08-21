import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from './Portal.props';
import s from './Portal.module.css';

export const Portal = (props: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#modal');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className={s.overlay}>{props.children}</div>,
        ref.current
      )
    : null;
};
