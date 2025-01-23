import * as c from 'react';
import * as f from 'react-dom';
import { s as se } from './button-U5Omqg_X.mjs';
import { jsx } from 'react/jsx-runtime';

var u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"], v = u.reduce((r, i) => {
  const t = c.forwardRef((o, e) => {
    const { asChild: a, ...s } = o, m = a ? se : i;
    return jsx(m, { ...s, ref: e });
  });
  return t.displayName = `Primitive.${i}`, { ...r, [i]: t };
}, {});
function h(r, i) {
  r && f.flushSync(() => r.dispatchEvent(i));
}

export { h, v };
//# sourceMappingURL=index-DXPxg-Qg.mjs.map
