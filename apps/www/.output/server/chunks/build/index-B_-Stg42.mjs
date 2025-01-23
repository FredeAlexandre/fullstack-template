import * as c from 'react';
import { h } from './index-DJ3tN8qV.mjs';

function n(r) {
  const [d, e] = c.useState(void 0);
  return h(() => {
    if (r) {
      e({ width: r.offsetWidth, height: r.offsetHeight });
      const f = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length) return;
        const b = i[0];
        let o, t;
        if ("borderBoxSize" in b) {
          const s = b.borderBoxSize, a = Array.isArray(s) ? s[0] : s;
          o = a.inlineSize, t = a.blockSize;
        } else o = r.offsetWidth, t = r.offsetHeight;
        e({ width: o, height: t });
      });
      return f.observe(r, { box: "border-box" }), () => f.unobserve(r);
    } else e(void 0);
  }, [r]), d;
}

export { n };
//# sourceMappingURL=index-B_-Stg42.mjs.map
