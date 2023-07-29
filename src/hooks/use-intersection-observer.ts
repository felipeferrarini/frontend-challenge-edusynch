import { useEffect, useState } from 'react';

export const useIntersectionObserver = (
  element: React.RefObject<HTMLDivElement>
) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return isVisible;
};
