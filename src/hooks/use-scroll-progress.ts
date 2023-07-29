import { useEffect, useState } from 'react';

export const useElementScrollProgress = (
  ref: React.RefObject<HTMLDivElement>,
  factor = 2.7
) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;

    const handleScroll = () => {
      if (!element) {
        return;
      }
      const winScroll = document.documentElement.scrollTop;
      const { scrollHeight } = element;
      const height = winScroll / (scrollHeight / factor);

      setProgress(height);
    };

    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, [factor, ref]);

  return progress;
};
