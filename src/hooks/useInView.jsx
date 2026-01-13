import { useEffect, useRef, useState } from 'react';

export default function useInView({ threshold = 0.15, root = null, rootMargin = '0px', triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (triggerOnce) observer.unobserve(el);
          } else {
            if (!triggerOnce) setInView(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, triggerOnce]);

  return [ref, inView];
}
