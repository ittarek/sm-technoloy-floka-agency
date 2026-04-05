import { useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export function Counter({ target = 25 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    let timer;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 90%', // 🔥 easier trigger
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;

        let start = 0;
        const duration = 2000;
        const step = target / (duration / 16);

        timer = setInterval(() => {
          start += step;

          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
    });

    return () => {
      trigger.kill();
      clearInterval(timer);
    };
  }, [target]);

  return <span ref={ref}>{count}</span>;
}
