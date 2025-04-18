import { useEffect, useState } from 'react';

import { UseResizeObserverProps } from '@/lib/types/use-resize-observer-props';


const useResizeObserver = ({ onResize, elementRef }: UseResizeObserverProps) => {
  const [widthElement, setWidthElement] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setWidthElement(width);
        onResize(width);
      }
    });

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [elementRef, onResize]);

  return {
    widthElement,
  };
};

export default useResizeObserver;
