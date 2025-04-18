import { RefObject } from 'react';

export type UseResizeObserverProps = {
  onResize: (width: number) => void;
  elementRef: RefObject<HTMLElement | null | undefined>;
}
