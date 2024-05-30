import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
  const elementsRef = useRef<Element[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    elementsRef.current.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      elementsRef.current.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, [callback, options]);

  return elementsRef;
};

export default useIntersectionObserver;
