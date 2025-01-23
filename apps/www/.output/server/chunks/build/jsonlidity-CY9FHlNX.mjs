import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import require$$7 from 'url';
import Qn from 'module';
import { Q as Qe, D as De } from './button-U5Omqg_X.mjs';
import * as c from 'react';
import c__default from 'react';
import { RefreshCwIcon, PlayIcon, EraserIcon } from 'lucide-react';

var bi, Cr;
function s1() {
  if (Cr) return bi;
  Cr = 1;
  const U = require$$7.pathToFileURL(__filename);
  var I = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, it = Object.getOwnPropertyNames, Nt = Object.prototype.hasOwnProperty, It = (t, e) => {
    for (var i in e) I(t, i, { get: e[i], enumerable: true });
  }, qt = (t, e, i, s) => {
    if (e && typeof e == "object" || typeof e == "function") for (let r of it(e)) !Nt.call(t, r) && r !== i && I(t, r, { get: () => e[r], enumerable: !(s = $(e, r)) || s.enumerable });
    return t;
  }, jr = (t) => qt(I({}, "__esModule", { value: true }), t), Pi = {};
  It(Pi, { ParserError: () => Ci, default: () => $n, parse: () => Er, tokenize: () => Tr, visit: () => xe }), bi = jr(Pi);
  var qr = Qn, Re = { d: (t, e) => {
    for (var i in e) Re.o(e, i) && !Re.o(t, i) && Object.defineProperty(t, i, { enumerable: true, get: e[i] });
  }, o: (t, e) => Object.prototype.hasOwnProperty.call(t, e) }, b = {};
  Re.d(b, { dx: () => N, q2: () => He, FO: () => hs, xf: () => Vt, Gy: () => cs, s4: () => Ht, c7: () => ps, _7: () => ns, tx: () => te, gp: () => ls, cK: () => Ft, zs: () => qe, Rh: () => ee, AV: () => Vt, Xp: () => S, VS: () => q, ul: () => $t, hW: () => F, x1: () => Lt, z5: () => Qt, oN: () => je, TB: () => as, u1: () => Zt, _b: () => We, $F: () => is, _T: () => Ye, db: () => ss, Zx: () => D, _x: () => ft, r8: () => pt, JI: () => kt, TP: () => Q, WU: () => x, Nj: () => st, ZP: () => Sn });
  var x = class {
    constructor() {
      this.source = null, this.type = null, this.channel = null, this.start = null, this.stop = null, this.tokenIndex = null, this.line = null, this.column = null, this._text = null;
    }
    getTokenSource() {
      return this.source[0];
    }
    getInputStream() {
      return this.source[1];
    }
    get text() {
      return this._text;
    }
    set text(t) {
      this._text = t;
    }
  };
  function Et(t, e) {
    if (!Array.isArray(t) || !Array.isArray(e)) return false;
    if (t === e) return true;
    if (t.length !== e.length) return false;
    for (let i = 0; i < t.length; i++) if (!(t[i] === e[i] || t[i].equals && t[i].equals(e[i]))) return false;
    return true;
  }
  x.INVALID_TYPE = 0, x.EPSILON = -2, x.MIN_USER_TOKEN_TYPE = 1, x.EOF = -1, x.DEFAULT_CHANNEL = 0, x.HIDDEN_CHANNEL = 1;
  var Wr = Math.round(Math.random() * Math.pow(2, 32));
  function Ui(t) {
    if (!t) return 0;
    const e = typeof t, i = e === "string" ? t : !(e !== "object" || !t.toString) && t.toString();
    if (!i) return 0;
    let s, r;
    const n = 3 & i.length, l = i.length - n;
    let h = Wr;
    const u = 3432918353, p = 461845907;
    let m = 0;
    for (; m < l; ) r = 255 & i.charCodeAt(m) | (255 & i.charCodeAt(++m)) << 8 | (255 & i.charCodeAt(++m)) << 16 | (255 & i.charCodeAt(++m)) << 24, ++m, r = (65535 & r) * u + (((r >>> 16) * u & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, r = (65535 & r) * p + (((r >>> 16) * p & 65535) << 16) & 4294967295, h ^= r, h = h << 13 | h >>> 19, s = 5 * (65535 & h) + ((5 * (h >>> 16) & 65535) << 16) & 4294967295, h = 27492 + (65535 & s) + ((58964 + (s >>> 16) & 65535) << 16);
    switch (r = 0, n) {
      case 3:
        r ^= (255 & i.charCodeAt(m + 2)) << 16;
      case 2:
        r ^= (255 & i.charCodeAt(m + 1)) << 8;
      case 1:
        r ^= 255 & i.charCodeAt(m), r = (65535 & r) * u + (((r >>> 16) * u & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, r = (65535 & r) * p + (((r >>> 16) * p & 65535) << 16) & 4294967295, h ^= r;
    }
    return h ^= i.length, h ^= h >>> 16, h = 2246822507 * (65535 & h) + ((2246822507 * (h >>> 16) & 65535) << 16) & 4294967295, h ^= h >>> 13, h = 3266489909 * (65535 & h) + ((3266489909 * (h >>> 16) & 65535) << 16) & 4294967295, h ^= h >>> 16, h >>> 0;
  }
  var J = class Lr {
    constructor() {
      this.count = 0, this.hash = 0;
    }
    update() {
      for (let e = 0; e < arguments.length; e++) {
        const i = arguments[e];
        if (i != null) if (Array.isArray(i)) this.update.apply(this, i);
        else {
          let s = 0;
          switch (typeof i) {
            case "undefined":
            case "function":
              continue;
            case "number":
            case "boolean":
              s = i;
              break;
            case "string":
              s = Ui(i);
              break;
            default:
              i.updateHashCode ? i.updateHashCode(this) : console.log("No updateHashCode for " + i.toString());
              continue;
          }
          s *= 3432918353, s = s << 15 | s >>> 17, s *= 461845907, this.count = this.count + 1;
          let r = this.hash ^ s;
          r = r << 13 | r >>> 19, r = 5 * r + 3864292196, this.hash = r;
        }
      }
    }
    finish() {
      let e = this.hash ^ 4 * this.count;
      return e ^= e >>> 16, e *= 2246822507, e ^= e >>> 13, e *= 3266489909, e ^= e >>> 16, e;
    }
    static hashStuff() {
      const e = new Lr();
      return e.update.apply(e, arguments), e.finish();
    }
  };
  function Fi(t) {
    return t ? typeof t == "string" ? Ui(t) : t.hashCode() : -1;
  }
  function Hi(t, e) {
    return t ? t.equals(e) : t === e;
  }
  function Yr(t) {
    return t === null ? "null" : t;
  }
  function st(t) {
    return Array.isArray(t) ? "[" + t.map(Yr).join(", ") + "]" : "null";
  }
  var Wt = "h-", B = class {
    constructor(t, e) {
      this.data = {}, this.hashFunction = t || Fi, this.equalsFunction = e || Hi;
    }
    add(t) {
      const e = Wt + this.hashFunction(t);
      if (e in this.data) {
        const i = this.data[e];
        for (let s = 0; s < i.length; s++) if (this.equalsFunction(t, i[s])) return i[s];
        return i.push(t), t;
      }
      return this.data[e] = [t], t;
    }
    has(t) {
      return this.get(t) != null;
    }
    get(t) {
      const e = Wt + this.hashFunction(t);
      if (e in this.data) {
        const i = this.data[e];
        for (let s = 0; s < i.length; s++) if (this.equalsFunction(t, i[s])) return i[s];
      }
      return null;
    }
    values() {
      return Object.keys(this.data).filter((t) => t.startsWith(Wt)).flatMap((t) => this.data[t], this);
    }
    toString() {
      return st(this.values());
    }
    get length() {
      return Object.keys(this.data).filter((t) => t.startsWith(Wt)).map((t) => this.data[t].length, this).reduce((t, e) => t + e, 0);
    }
  }, w = class wt {
    hashCode() {
      const e = new J();
      return this.updateHashCode(e), e.finish();
    }
    evaluate(e, i) {
    }
    evalPrecedence(e, i) {
      return this;
    }
    static andContext(e, i) {
      if (e === null || e === wt.NONE) return i;
      if (i === null || i === wt.NONE) return e;
      const s = new Gr(e, i);
      return s.opnds.length === 1 ? s.opnds[0] : s;
    }
    static orContext(e, i) {
      if (e === null) return i;
      if (i === null) return e;
      if (e === wt.NONE || i === wt.NONE) return wt.NONE;
      const s = new $r(e, i);
      return s.opnds.length === 1 ? s.opnds[0] : s;
    }
  }, Gr = class ge extends w {
    constructor(e, i) {
      super();
      const s = new B();
      e instanceof ge ? e.opnds.map(function(n) {
        s.add(n);
      }) : s.add(e), i instanceof ge ? i.opnds.map(function(n) {
        s.add(n);
      }) : s.add(i);
      const r = Mi(s);
      if (r.length > 0) {
        let n = null;
        r.map(function(l) {
          (n === null || l.precedence < n.precedence) && (n = l);
        }), s.add(n);
      }
      this.opnds = Array.from(s.values());
    }
    equals(e) {
      return this === e || e instanceof ge && Et(this.opnds, e.opnds);
    }
    updateHashCode(e) {
      e.update(this.opnds, "AND");
    }
    evaluate(e, i) {
      for (let s = 0; s < this.opnds.length; s++) if (!this.opnds[s].evaluate(e, i)) return false;
      return true;
    }
    evalPrecedence(e, i) {
      let s = false;
      const r = [];
      for (let l = 0; l < this.opnds.length; l++) {
        const h = this.opnds[l], u = h.evalPrecedence(e, i);
        if (s |= u !== h, u === null) return null;
        u !== w.NONE && r.push(u);
      }
      if (!s) return this;
      if (r.length === 0) return w.NONE;
      let n = null;
      return r.map(function(l) {
        n = n === null ? l : w.andContext(n, l);
      }), n;
    }
    toString() {
      const e = this.opnds.map((i) => i.toString());
      return (e.length > 3 ? e.slice(3) : e).join("&&");
    }
  }, $r = class Te extends w {
    constructor(e, i) {
      super();
      const s = new B();
      e instanceof Te ? e.opnds.map(function(n) {
        s.add(n);
      }) : s.add(e), i instanceof Te ? i.opnds.map(function(n) {
        s.add(n);
      }) : s.add(i);
      const r = Mi(s);
      if (r.length > 0) {
        const n = r.sort(function(h, u) {
          return h.compareTo(u);
        }), l = n[n.length - 1];
        s.add(l);
      }
      this.opnds = Array.from(s.values());
    }
    equals(e) {
      return this === e || e instanceof Te && Et(this.opnds, e.opnds);
    }
    updateHashCode(e) {
      e.update(this.opnds, "OR");
    }
    evaluate(e, i) {
      for (let s = 0; s < this.opnds.length; s++) if (this.opnds[s].evaluate(e, i)) return true;
      return false;
    }
    evalPrecedence(e, i) {
      let s = false;
      for (let n = 0; n < this.opnds.length; n++) {
        const l = this.opnds[n], h = l.evalPrecedence(e, i);
        if (s |= h !== l, h === w.NONE) return w.NONE;
      }
      return s ? (null) : this;
    }
    toString() {
      const e = this.opnds.map((i) => i.toString());
      return (e.length > 3 ? e.slice(3) : e).join("||");
    }
  };
  function Mi(t) {
    const e = [];
    return t.values().map(function(i) {
      i instanceof w.PrecedencePredicate && e.push(i);
    }), e;
  }
  function Ki(t, e) {
    if (t === null) {
      const i = { state: null, alt: null, context: null, semanticContext: null };
      return e && (i.reachesIntoOuterContext = 0), i;
    }
    {
      const i = {};
      return i.state = t.state || null, i.alt = t.alt === void 0 ? null : t.alt, i.context = t.context || null, i.semanticContext = t.semanticContext || null, e && (i.reachesIntoOuterContext = t.reachesIntoOuterContext || 0, i.precedenceFilterSuppressed = t.precedenceFilterSuppressed || false), i;
    }
  }
  var k = class Ai {
    constructor(e, i) {
      this.checkContext(e, i), e = Ki(e), i = Ki(i, true), this.state = e.state !== null ? e.state : i.state, this.alt = e.alt !== null ? e.alt : i.alt, this.context = e.context !== null ? e.context : i.context, this.semanticContext = e.semanticContext !== null ? e.semanticContext : i.semanticContext !== null ? i.semanticContext : w.NONE, this.reachesIntoOuterContext = i.reachesIntoOuterContext, this.precedenceFilterSuppressed = i.precedenceFilterSuppressed;
    }
    checkContext(e, i) {
      e.context !== null && e.context !== void 0 || i !== null && i.context !== null && i.context !== void 0 || (this.context = null);
    }
    hashCode() {
      const e = new J();
      return this.updateHashCode(e), e.finish();
    }
    updateHashCode(e) {
      e.update(this.state.stateNumber, this.alt, this.context, this.semanticContext);
    }
    equals(e) {
      return this === e || e instanceof Ai && this.state.stateNumber === e.state.stateNumber && this.alt === e.alt && (this.context === null ? e.context === null : this.context.equals(e.context)) && this.semanticContext.equals(e.semanticContext) && this.precedenceFilterSuppressed === e.precedenceFilterSuppressed;
    }
    hashCodeForConfigSet() {
      const e = new J();
      return e.update(this.state.stateNumber, this.alt, this.semanticContext), e.finish();
    }
    equalsForConfigSet(e) {
      return this === e || e instanceof Ai && this.state.stateNumber === e.state.stateNumber && this.alt === e.alt && this.semanticContext.equals(e.semanticContext);
    }
    toString() {
      return "(" + this.state + "," + this.alt + (this.context !== null ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== w.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")";
    }
  }, S = class br {
    constructor(e, i) {
      this.start = e, this.stop = i;
    }
    clone() {
      return new br(this.start, this.stop);
    }
    contains(e) {
      return e >= this.start && e < this.stop;
    }
    toString() {
      return this.start === this.stop - 1 ? this.start.toString() : this.start.toString() + ".." + (this.stop - 1).toString();
    }
    get length() {
      return this.stop - this.start;
    }
  };
  S.INVALID_INTERVAL = new S(-1, -2);
  var q = class Sr {
    constructor() {
      this.intervals = null, this.readOnly = false;
    }
    first(e) {
      return this.intervals === null || this.intervals.length === 0 ? x.INVALID_TYPE : this.intervals[0].start;
    }
    addOne(e) {
      this.addInterval(new S(e, e + 1));
    }
    addRange(e, i) {
      this.addInterval(new S(e, i + 1));
    }
    addInterval(e) {
      if (this.intervals === null) this.intervals = [], this.intervals.push(e.clone());
      else {
        for (let i = 0; i < this.intervals.length; i++) {
          const s = this.intervals[i];
          if (e.stop < s.start) return void this.intervals.splice(i, 0, e);
          if (e.stop === s.start) return void (this.intervals[i] = new S(e.start, s.stop));
          if (e.start <= s.stop) return this.intervals[i] = new S(Math.min(s.start, e.start), Math.max(s.stop, e.stop)), void this.reduce(i);
        }
        this.intervals.push(e.clone());
      }
    }
    addSet(e) {
      return e.intervals !== null && e.intervals.forEach((i) => this.addInterval(i), this), this;
    }
    reduce(e) {
      if (e < this.intervals.length - 1) {
        const i = this.intervals[e], s = this.intervals[e + 1];
        i.stop >= s.stop ? (this.intervals.splice(e + 1, 1), this.reduce(e)) : i.stop >= s.start && (this.intervals[e] = new S(i.start, s.stop), this.intervals.splice(e + 1, 1));
      }
    }
    complement(e, i) {
      const s = new Sr();
      return s.addInterval(new S(e, i + 1)), this.intervals !== null && this.intervals.forEach((r) => s.removeRange(r)), s;
    }
    contains(e) {
      if (this.intervals === null) return false;
      for (let i = 0; i < this.intervals.length; i++) if (this.intervals[i].contains(e)) return true;
      return false;
    }
    removeRange(e) {
      if (e.start === e.stop - 1) this.removeOne(e.start);
      else if (this.intervals !== null) {
        let i = 0;
        for (let s = 0; s < this.intervals.length; s++) {
          const r = this.intervals[i];
          if (e.stop <= r.start) return;
          if (e.start > r.start && e.stop < r.stop) {
            this.intervals[i] = new S(r.start, e.start);
            const n = new S(e.stop, r.stop);
            return void this.intervals.splice(i, 0, n);
          }
          e.start <= r.start && e.stop >= r.stop ? (this.intervals.splice(i, 1), i -= 1) : e.start < r.stop ? this.intervals[i] = new S(r.start, e.start) : e.stop < r.stop && (this.intervals[i] = new S(e.stop, r.stop)), i += 1;
        }
      }
    }
    removeOne(e) {
      if (this.intervals !== null) for (let i = 0; i < this.intervals.length; i++) {
        const s = this.intervals[i];
        if (e < s.start) return;
        if (e === s.start && e === s.stop - 1) return void this.intervals.splice(i, 1);
        if (e === s.start) return void (this.intervals[i] = new S(s.start + 1, s.stop));
        if (e === s.stop - 1) return void (this.intervals[i] = new S(s.start, s.stop - 1));
        if (e < s.stop - 1) {
          const r = new S(s.start, e);
          return s.start = e + 1, void this.intervals.splice(i, 0, r);
        }
      }
    }
    toString(e, i, s) {
      return e = e || null, i = i || null, s = s || false, this.intervals === null ? "{}" : e !== null || i !== null ? this.toTokenString(e, i) : s ? this.toCharString() : this.toIndexString();
    }
    toCharString() {
      const e = [];
      for (let i = 0; i < this.intervals.length; i++) {
        const s = this.intervals[i];
        s.stop === s.start + 1 ? s.start === x.EOF ? e.push("<EOF>") : e.push("'" + String.fromCharCode(s.start) + "'") : e.push("'" + String.fromCharCode(s.start) + "'..'" + String.fromCharCode(s.stop - 1) + "'");
      }
      return e.length > 1 ? "{" + e.join(", ") + "}" : e[0];
    }
    toIndexString() {
      const e = [];
      for (let i = 0; i < this.intervals.length; i++) {
        const s = this.intervals[i];
        s.stop === s.start + 1 ? s.start === x.EOF ? e.push("<EOF>") : e.push(s.start.toString()) : e.push(s.start.toString() + ".." + (s.stop - 1).toString());
      }
      return e.length > 1 ? "{" + e.join(", ") + "}" : e[0];
    }
    toTokenString(e, i) {
      const s = [];
      for (let r = 0; r < this.intervals.length; r++) {
        const n = this.intervals[r];
        for (let l = n.start; l < n.stop; l++) s.push(this.elementName(e, i, l));
      }
      return s.length > 1 ? "{" + s.join(", ") + "}" : s[0];
    }
    elementName(e, i, s) {
      return s === x.EOF ? "<EOF>" : s === x.EPSILON ? "<EPSILON>" : e[s] || i[s];
    }
    get length() {
      return this.intervals.map((e) => e.length).reduce((e, i) => e + i);
    }
  }, T = class wi {
    constructor() {
      this.atn = null, this.stateNumber = wi.INVALID_STATE_NUMBER, this.stateType = null, this.ruleIndex = 0, this.epsilonOnlyTransitions = false, this.transitions = [], this.nextTokenWithinRule = null;
    }
    toString() {
      return this.stateNumber;
    }
    equals(e) {
      return e instanceof wi && this.stateNumber === e.stateNumber;
    }
    isNonGreedyExitState() {
      return false;
    }
    addTransition(e, i) {
      i === void 0 && (i = -1), this.transitions.length === 0 ? this.epsilonOnlyTransitions = e.isEpsilon : this.epsilonOnlyTransitions !== e.isEpsilon && (this.epsilonOnlyTransitions = false), i === -1 ? this.transitions.push(e) : this.transitions.splice(i, 1, e);
    }
  };
  T.INVALID_TYPE = 0, T.BASIC = 1, T.RULE_START = 2, T.BLOCK_START = 3, T.PLUS_BLOCK_START = 4, T.STAR_BLOCK_START = 5, T.TOKEN_START = 6, T.RULE_STOP = 7, T.BLOCK_END = 8, T.STAR_LOOP_BACK = 9, T.STAR_LOOP_ENTRY = 10, T.PLUS_LOOP_BACK = 11, T.LOOP_END = 12, T.serializationNames = ["INVALID", "BASIC", "RULE_START", "BLOCK_START", "PLUS_BLOCK_START", "STAR_BLOCK_START", "TOKEN_START", "RULE_STOP", "BLOCK_END", "STAR_LOOP_BACK", "STAR_LOOP_ENTRY", "PLUS_LOOP_BACK", "LOOP_END"], T.INVALID_STATE_NUMBER = -1;
  var M = class extends T {
    constructor() {
      return super(), this.stateType = T.RULE_STOP, this;
    }
  }, g = class {
    constructor(t) {
      if (t == null) throw "target cannot be null.";
      this.target = t, this.isEpsilon = false, this.label = null;
    }
  };
  g.EPSILON = 1, g.RANGE = 2, g.RULE = 3, g.PREDICATE = 4, g.ATOM = 5, g.ACTION = 6, g.SET = 7, g.NOT_SET = 8, g.WILDCARD = 9, g.PRECEDENCE = 10, g.serializationNames = ["INVALID", "EPSILON", "RANGE", "RULE", "PREDICATE", "ATOM", "ACTION", "SET", "NOT_SET", "WILDCARD", "PRECEDENCE"], g.serializationTypes = { EpsilonTransition: g.EPSILON, RangeTransition: g.RANGE, RuleTransition: g.RULE, PredicateTransition: g.PREDICATE, AtomTransition: g.ATOM, ActionTransition: g.ACTION, SetTransition: g.SET, NotSetTransition: g.NOT_SET, WildcardTransition: g.WILDCARD, PrecedencePredicateTransition: g.PRECEDENCE };
  var Yt = class extends g {
    constructor(t, e, i, s) {
      super(t), this.ruleIndex = e, this.precedence = i, this.followState = s, this.serializationType = g.RULE, this.isEpsilon = true;
    }
    matches(t, e, i) {
      return false;
    }
  }, Ce = class extends g {
    constructor(t, e) {
      super(t), this.serializationType = g.SET, e != null ? this.label = e : (this.label = new q(), this.label.addOne(x.INVALID_TYPE));
    }
    matches(t, e, i) {
      return this.label.contains(t);
    }
    toString() {
      return this.label.toString();
    }
  }, Le = class extends Ce {
    constructor(t, e) {
      super(t, e), this.serializationType = g.NOT_SET;
    }
    matches(t, e, i) {
      return t >= e && t <= i && !super.matches(t, e, i);
    }
    toString() {
      return "~" + super.toString();
    }
  }, Vi = class extends g {
    constructor(t) {
      super(t), this.serializationType = g.WILDCARD;
    }
    matches(t, e, i) {
      return t >= e && t <= i;
    }
    toString() {
      return ".";
    }
  }, be = class extends g {
    constructor(t) {
      super(t);
    }
  }, Jr = class {
  }, Xr = class extends Jr {
  }, Bi = class extends Xr {
  }, kt = class extends Bi {
    get ruleContext() {
      throw new Error("missing interface implementation");
    }
  }, Q = class extends Bi {
  }, Gt = class extends Q {
  }, rt = { toStringTree: function(t, e, i) {
    e = e || null, (i = i || null) !== null && (e = i.ruleNames);
    let s = rt.getNodeText(t, e);
    s = function(l, h) {
      return l = l.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
    }(s);
    const r = t.getChildCount();
    if (r === 0) return s;
    let n = "(" + s + " ";
    r > 0 && (s = rt.toStringTree(t.getChild(0), e), n = n.concat(s));
    for (let l = 1; l < r; l++) s = rt.toStringTree(t.getChild(l), e), n = n.concat(" " + s);
    return n = n.concat(")"), n;
  }, getNodeText: function(t, e, i) {
    if (e = e || null, (i = i || null) !== null && (e = i.ruleNames), e !== null) {
      if (t instanceof kt) {
        const r = t.ruleContext.getAltNumber();
        return r != 0 ? e[t.ruleIndex] + ":" + r : e[t.ruleIndex];
      }
      if (t instanceof Gt) return t.toString();
      if (t instanceof Q && t.symbol !== null) return t.symbol.text;
    }
    const s = t.getPayload();
    return s instanceof x ? s.text : t.getPayload().toString();
  }, getChildren: function(t) {
    const e = [];
    for (let i = 0; i < t.getChildCount(); i++) e.push(t.getChild(i));
    return e;
  }, getAncestors: function(t) {
    let e = [];
    for (t = t.getParent(); t !== null; ) e = [t].concat(e), t = t.getParent();
    return e;
  }, findAllTokenNodes: function(t, e) {
    return rt.findAllNodes(t, e, true);
  }, findAllRuleNodes: function(t, e) {
    return rt.findAllNodes(t, e, false);
  }, findAllNodes: function(t, e, i) {
    const s = [];
    return rt._findAllNodes(t, e, i, s), s;
  }, _findAllNodes: function(t, e, i, s) {
    i && t instanceof Q ? t.symbol.type === e && s.push(t) : !i && t instanceof kt && t.ruleIndex === e && s.push(t);
    for (let r = 0; r < t.getChildCount(); r++) rt._findAllNodes(t.getChild(r), e, i, s);
  }, descendants: function(t) {
    let e = [t];
    for (let i = 0; i < t.getChildCount(); i++) e = e.concat(rt.descendants(t.getChild(i)));
    return e;
  } }, zi = rt, pt = class extends kt {
    constructor(t, e) {
      super(), this.parentCtx = t || null, this.invokingState = e || -1;
    }
    depth() {
      let t = 0, e = this;
      for (; e !== null; ) e = e.parentCtx, t += 1;
      return t;
    }
    isEmpty() {
      return this.invokingState === -1;
    }
    getSourceInterval() {
      return S.INVALID_INTERVAL;
    }
    get ruleContext() {
      return this;
    }
    getPayload() {
      return this;
    }
    getText() {
      return this.getChildCount() === 0 ? "" : this.children.map(function(t) {
        return t.getText();
      }).join("");
    }
    getAltNumber() {
      return 0;
    }
    setAltNumber(t) {
    }
    getChild(t) {
      return null;
    }
    getChildCount() {
      return 0;
    }
    accept(t) {
      return t.visitChildren(this);
    }
    toStringTree(t, e) {
      return zi.toStringTree(this, t, e);
    }
    toString(t, e) {
      t = t || null, e = e || null;
      let i = this, s = "[";
      for (; i !== null && i !== e; ) {
        if (t === null) i.isEmpty() || (s += i.invokingState);
        else {
          const r = i.ruleIndex;
          s += r >= 0 && r < t.length ? t[r] : "" + r;
        }
        i.parentCtx === null || t === null && i.parentCtx.isEmpty() || (s += " "), i = i.parentCtx;
      }
      return s += "]", s;
    }
  }, R = class Ni {
    constructor(e) {
      this.cachedHashCode = e;
    }
    isEmpty() {
      return this === Ni.EMPTY;
    }
    hasEmptyPath() {
      return this.getReturnState(this.length - 1) === Ni.EMPTY_RETURN_STATE;
    }
    hashCode() {
      return this.cachedHashCode;
    }
    updateHashCode(e) {
      e.update(this.cachedHashCode);
    }
  };
  R.EMPTY = null, R.EMPTY_RETURN_STATE = 2147483647, R.globalNodeCount = 1, R.id = R.globalNodeCount, R.trace_atn_sim = false;
  var at = class Ar extends R {
    constructor(e, i) {
      const s = new J();
      return s.update(e, i), super(s.finish()), this.parents = e, this.returnStates = i, this;
    }
    isEmpty() {
      return this.returnStates[0] === R.EMPTY_RETURN_STATE;
    }
    getParent(e) {
      return this.parents[e];
    }
    getReturnState(e) {
      return this.returnStates[e];
    }
    equals(e) {
      return this === e || e instanceof Ar && this.hashCode() === e.hashCode() && Et(this.returnStates, e.returnStates) && Et(this.parents, e.parents);
    }
    toString() {
      if (this.isEmpty()) return "[]";
      {
        let e = "[";
        for (let i = 0; i < this.returnStates.length; i++) i > 0 && (e += ", "), this.returnStates[i] !== R.EMPTY_RETURN_STATE ? (e += this.returnStates[i], this.parents[i] !== null ? e = e + " " + this.parents[i] : e += "null") : e += "$";
        return e + "]";
      }
    }
    get length() {
      return this.returnStates.length;
    }
  }, W = class Ii extends R {
    constructor(e, i) {
      let s = 0;
      const r = new J();
      e !== null ? r.update(e, i) : r.update(1), s = r.finish(), super(s), this.parentCtx = e, this.returnState = i;
    }
    getParent(e) {
      return this.parentCtx;
    }
    getReturnState(e) {
      return this.returnState;
    }
    equals(e) {
      return this === e || e instanceof Ii && this.hashCode() === e.hashCode() && this.returnState === e.returnState && (this.parentCtx == null ? e.parentCtx == null : this.parentCtx.equals(e.parentCtx));
    }
    toString() {
      const e = this.parentCtx === null ? "" : this.parentCtx.toString();
      return e.length === 0 ? this.returnState === R.EMPTY_RETURN_STATE ? "$" : "" + this.returnState : this.returnState + " " + e;
    }
    get length() {
      return 1;
    }
    static create(e, i) {
      return i === R.EMPTY_RETURN_STATE && e === null ? R.EMPTY : new Ii(e, i);
    }
  }, Se = class extends W {
    constructor() {
      super(null, R.EMPTY_RETURN_STATE);
    }
    isEmpty() {
      return true;
    }
    getParent(t) {
      return null;
    }
    getReturnState(t) {
      return this.returnState;
    }
    equals(t) {
      return this === t;
    }
    toString() {
      return "$";
    }
  };
  R.EMPTY = new Se();
  var Dt = "h-", Ot = class {
    constructor(t, e) {
      this.data = {}, this.hashFunction = t || Fi, this.equalsFunction = e || Hi;
    }
    set(t, e) {
      const i = Dt + this.hashFunction(t);
      if (i in this.data) {
        const s = this.data[i];
        for (let r = 0; r < s.length; r++) {
          const n = s[r];
          if (this.equalsFunction(t, n.key)) {
            const l = n.value;
            return n.value = e, l;
          }
        }
        return s.push({ key: t, value: e }), e;
      }
      return this.data[i] = [{ key: t, value: e }], e;
    }
    containsKey(t) {
      const e = Dt + this.hashFunction(t);
      if (e in this.data) {
        const i = this.data[e];
        for (let s = 0; s < i.length; s++) {
          const r = i[s];
          if (this.equalsFunction(t, r.key)) return true;
        }
      }
      return false;
    }
    get(t) {
      const e = Dt + this.hashFunction(t);
      if (e in this.data) {
        const i = this.data[e];
        for (let s = 0; s < i.length; s++) {
          const r = i[s];
          if (this.equalsFunction(t, r.key)) return r.value;
        }
      }
      return null;
    }
    entries() {
      return Object.keys(this.data).filter((t) => t.startsWith(Dt)).flatMap((t) => this.data[t], this);
    }
    getKeys() {
      return this.entries().map((t) => t.key);
    }
    getValues() {
      return this.entries().map((t) => t.value);
    }
    toString() {
      return "[" + this.entries().map((t) => "{" + t.key + ":" + t.value + "}").join(", ") + "]";
    }
    get length() {
      return Object.keys(this.data).filter((t) => t.startsWith(Dt)).map((t) => this.data[t].length, this).reduce((t, e) => t + e, 0);
    }
  };
  function Ae(t, e) {
    if (e == null && (e = pt.EMPTY), e.parentCtx === null || e === pt.EMPTY) return R.EMPTY;
    const i = Ae(t, e.parentCtx), s = t.states[e.invokingState].transitions[0];
    return W.create(i, s.followState.stateNumber);
  }
  function ji(t, e, i) {
    if (t.isEmpty()) return t;
    let s = i.get(t) || null;
    if (s !== null) return s;
    if (s = e.get(t), s !== null) return i.set(t, s), s;
    let r = false, n = [];
    for (let h = 0; h < n.length; h++) {
      const u = ji(t.getParent(h), e, i);
      if (r || u !== t.getParent(h)) {
        if (!r) {
          n = [];
          for (let p = 0; p < t.length; p++) n[p] = t.getParent(p);
          r = true;
        }
        n[h] = u;
      }
    }
    if (!r) return e.add(t), i.set(t, t), t;
    let l = null;
    return l = n.length === 0 ? R.EMPTY : n.length === 1 ? W.create(n[0], t.getReturnState(0)) : new at(n, t.returnStates), e.add(l), i.set(l, l), i.set(t, l), l;
  }
  function we(t, e, i, s) {
    if (t === e) return t;
    if (t instanceof W && e instanceof W) return function(r, n, l, h) {
      if (h !== null) {
        let p = h.get(r, n);
        if (p !== null || (p = h.get(n, r), p !== null)) return p;
      }
      const u = function(p, m, y) {
        if (y) {
          if (p === R.EMPTY || m === R.EMPTY) return R.EMPTY;
        } else {
          if (p === R.EMPTY && m === R.EMPTY) return R.EMPTY;
          if (p === R.EMPTY) {
            const E = [m.returnState, R.EMPTY_RETURN_STATE], A = [m.parentCtx, null];
            return new at(A, E);
          }
          if (m === R.EMPTY) {
            const E = [p.returnState, R.EMPTY_RETURN_STATE], A = [p.parentCtx, null];
            return new at(A, E);
          }
        }
        return null;
      }(r, n, l);
      if (u !== null) return h !== null && h.set(r, n, u), u;
      if (r.returnState === n.returnState) {
        const p = we(r.parentCtx, n.parentCtx, l, h);
        if (p === r.parentCtx) return r;
        if (p === n.parentCtx) return n;
        const m = W.create(p, r.returnState);
        return h !== null && h.set(r, n, m), m;
      }
      {
        let p = null;
        if ((r === n || r.parentCtx !== null && r.parentCtx === n.parentCtx) && (p = r.parentCtx), p !== null) {
          const A = [r.returnState, n.returnState];
          r.returnState > n.returnState && (A[0] = n.returnState, A[1] = r.returnState);
          const v = new at([p, p], A);
          return h !== null && h.set(r, n, v), v;
        }
        const m = [r.returnState, n.returnState];
        let y = [r.parentCtx, n.parentCtx];
        r.returnState > n.returnState && (m[0] = n.returnState, m[1] = r.returnState, y = [n.parentCtx, r.parentCtx]);
        const E = new at(y, m);
        return h !== null && h.set(r, n, E), E;
      }
    }(t, e, i, s);
    if (i) {
      if (t instanceof Se) return t;
      if (e instanceof Se) return e;
    }
    return t instanceof W && (t = new at([t.getParent()], [t.returnState])), e instanceof W && (e = new at([e.getParent()], [e.returnState])), function(r, n, l, h) {
      if (h !== null) {
        let v = h.get(r, n);
        if (v !== null || (v = h.get(n, r), v !== null)) return R.trace_atn_sim && console.log("mergeArrays a=" + r + ",b=" + n + " -> previous"), v;
      }
      let u = 0, p = 0, m = 0, y = new Array(r.returnStates.length + n.returnStates.length).fill(0), E = new Array(r.returnStates.length + n.returnStates.length).fill(null);
      for (; u < r.returnStates.length && p < n.returnStates.length; ) {
        const v = r.parents[u], G = n.parents[p];
        if (r.returnStates[u] === n.returnStates[p]) {
          const K = r.returnStates[u];
          K === R.EMPTY_RETURN_STATE && v === null && G === null || v !== null && G !== null && v === G ? (E[m] = v, y[m] = K) : (E[m] = we(v, G, l, h), y[m] = K), u += 1, p += 1;
        } else r.returnStates[u] < n.returnStates[p] ? (E[m] = v, y[m] = r.returnStates[u], u += 1) : (E[m] = G, y[m] = n.returnStates[p], p += 1);
        m += 1;
      }
      if (u < r.returnStates.length) for (let v = u; v < r.returnStates.length; v++) E[m] = r.parents[v], y[m] = r.returnStates[v], m += 1;
      else for (let v = p; v < n.returnStates.length; v++) E[m] = n.parents[v], y[m] = n.returnStates[v], m += 1;
      if (m < E.length) {
        if (m === 1) {
          const v = W.create(E[0], y[0]);
          return h !== null && h.set(r, n, v), v;
        }
        E = E.slice(0, m), y = y.slice(0, m);
      }
      const A = new at(E, y);
      return A.equals(r) ? (h !== null && h.set(r, n, r), R.trace_atn_sim && console.log("mergeArrays a=" + r + ",b=" + n + " -> a"), r) : A.equals(n) ? (h !== null && h.set(r, n, n), R.trace_atn_sim && console.log("mergeArrays a=" + r + ",b=" + n + " -> b"), n) : (function(v) {
        const G = new Ot();
        for (let K = 0; K < v.length; K++) {
          const V = v[K];
          G.containsKey(V) || G.set(V, V);
        }
        for (let K = 0; K < v.length; K++) v[K] = G.get(v[K]);
      }(E), h !== null && h.set(r, n, A), R.trace_atn_sim && console.log("mergeArrays a=" + r + ",b=" + n + " -> " + A), A);
    }(t, e, i, s);
  }
  var lt = class wr {
    constructor() {
      this.data = [];
    }
    add(e) {
      this.data[e] = true;
    }
    or(e) {
      Object.keys(e.data).map((i) => this.add(i), this);
    }
    remove(e) {
      delete this.data[e];
    }
    has(e) {
      return this.data[e] === true;
    }
    values() {
      return Object.keys(this.data);
    }
    minValue() {
      return Math.min.apply(null, this.values());
    }
    hashCode() {
      return J.hashStuff(this.values());
    }
    equals(e) {
      return e instanceof wr && Et(this.data, e.data);
    }
    toString() {
      return "{" + this.values().join(", ") + "}";
    }
    get length() {
      return this.values().length;
    }
  }, $t = class ki {
    constructor(e) {
      this.atn = e;
    }
    getDecisionLookahead(e) {
      if (e === null) return null;
      const i = e.transitions.length, s = [];
      for (let r = 0; r < i; r++) {
        s[r] = new q();
        const n = new B();
        this._LOOK(e.transition(r).target, null, R.EMPTY, s[r], n, new lt(), false, false), (s[r].length === 0 || s[r].contains(ki.HIT_PRED)) && (s[r] = null);
      }
      return s;
    }
    LOOK(e, i, s) {
      const r = new q(), n = (s = s || null) !== null ? Ae(e.atn, s) : null;
      return this._LOOK(e, i, n, r, new B(), new lt(), true, true), r;
    }
    _LOOK(e, i, s, r, n, l, h, u) {
      const p = new k({ state: e, alt: 0, context: s }, null);
      if (!n.has(p)) {
        if (n.add(p), e === i) {
          if (s === null) return void r.addOne(x.EPSILON);
          if (s.isEmpty() && u) return void r.addOne(x.EOF);
        }
        if (e instanceof M) {
          if (s === null) return void r.addOne(x.EPSILON);
          if (s.isEmpty() && u) return void r.addOne(x.EOF);
          if (s !== R.EMPTY) {
            const m = l.has(e.ruleIndex);
            try {
              l.remove(e.ruleIndex);
              for (let y = 0; y < s.length; y++) {
                const E = this.atn.states[s.getReturnState(y)];
                this._LOOK(E, i, s.getParent(y), r, n, l, h, u);
              }
            } finally {
              m && l.add(e.ruleIndex);
            }
            return;
          }
        }
        for (let m = 0; m < e.transitions.length; m++) {
          const y = e.transitions[m];
          if (y.constructor === Yt) {
            if (l.has(y.target.ruleIndex)) continue;
            const E = W.create(s, y.followState.stateNumber);
            try {
              l.add(y.target.ruleIndex), this._LOOK(y.target, i, E, r, n, l, h, u);
            } finally {
              l.remove(y.target.ruleIndex);
            }
          } else if (y instanceof be) h ? this._LOOK(y.target, i, s, r, n, l, h, u) : r.addOne(ki.HIT_PRED);
          else if (y.isEpsilon) this._LOOK(y.target, i, s, r, n, l, h, u);
          else if (y.constructor === Vi) r.addRange(x.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
          else {
            let E = y.label;
            E !== null && (y instanceof Le && (E = E.complement(x.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)), r.addSet(E));
          }
        }
      }
    }
  };
  $t.HIT_PRED = x.INVALID_TYPE;
  var N = class {
    constructor(t, e) {
      this.grammarType = t, this.maxTokenType = e, this.states = [], this.decisionToState = [], this.ruleToStartState = [], this.ruleToStopState = null, this.modeNameToStartState = {}, this.ruleToTokenType = null, this.lexerActions = null, this.modeToStartState = [];
    }
    nextTokensInContext(t, e) {
      return new $t(this).LOOK(t, null, e);
    }
    nextTokensNoContext(t) {
      return t.nextTokenWithinRule !== null || (t.nextTokenWithinRule = this.nextTokensInContext(t, null), t.nextTokenWithinRule.readOnly = true), t.nextTokenWithinRule;
    }
    nextTokens(t, e) {
      return e === void 0 ? this.nextTokensNoContext(t) : this.nextTokensInContext(t, e);
    }
    addState(t) {
      t !== null && (t.atn = this, t.stateNumber = this.states.length), this.states.push(t);
    }
    removeState(t) {
      this.states[t.stateNumber] = null;
    }
    defineDecisionState(t) {
      return this.decisionToState.push(t), t.decision = this.decisionToState.length - 1, t.decision;
    }
    getDecisionState(t) {
      return this.decisionToState.length === 0 ? null : this.decisionToState[t];
    }
    getExpectedTokens(t, e) {
      if (t < 0 || t >= this.states.length) throw "Invalid state number.";
      const i = this.states[t];
      let s = this.nextTokens(i);
      if (!s.contains(x.EPSILON)) return s;
      const r = new q();
      for (r.addSet(s), r.removeOne(x.EPSILON); e !== null && e.invokingState >= 0 && s.contains(x.EPSILON); ) {
        const n = this.states[e.invokingState].transitions[0];
        s = this.nextTokens(n.followState), r.addSet(s), r.removeOne(x.EPSILON), e = e.parentCtx;
      }
      return s.contains(x.EPSILON) && r.addOne(x.EOF), r;
    }
  };
  N.INVALID_ALT_NUMBER = 0;
  var qi = class extends T {
    constructor() {
      super(), this.stateType = T.BASIC;
    }
  }, vt = class extends T {
    constructor() {
      return super(), this.decision = -1, this.nonGreedy = false, this;
    }
  }, Rt = class extends vt {
    constructor() {
      return super(), this.endState = null, this;
    }
  }, Ne = class extends T {
    constructor() {
      return super(), this.stateType = T.BLOCK_END, this.startState = null, this;
    }
  }, Ct = class extends T {
    constructor() {
      return super(), this.stateType = T.LOOP_END, this.loopBackState = null, this;
    }
  }, Wi = class extends T {
    constructor() {
      return super(), this.stateType = T.RULE_START, this.stopState = null, this.isPrecedenceRule = false, this;
    }
  }, Qr = class extends vt {
    constructor() {
      return super(), this.stateType = T.TOKEN_START, this;
    }
  }, Yi = class extends vt {
    constructor() {
      return super(), this.stateType = T.PLUS_LOOP_BACK, this;
    }
  }, Ie = class extends T {
    constructor() {
      return super(), this.stateType = T.STAR_LOOP_BACK, this;
    }
  }, mt = class extends vt {
    constructor() {
      return super(), this.stateType = T.STAR_LOOP_ENTRY, this.loopBackState = null, this.isPrecedenceDecision = null, this;
    }
  }, ke = class extends Rt {
    constructor() {
      return super(), this.stateType = T.PLUS_BLOCK_START, this.loopBackState = null, this;
    }
  }, De = class extends Rt {
    constructor() {
      return super(), this.stateType = T.STAR_BLOCK_START, this;
    }
  }, Gi = class extends Rt {
    constructor() {
      return super(), this.stateType = T.BLOCK_START, this;
    }
  }, Oe = class extends g {
    constructor(t, e) {
      super(t), this.label_ = e, this.label = this.makeLabel(), this.serializationType = g.ATOM;
    }
    makeLabel() {
      const t = new q();
      return t.addOne(this.label_), t;
    }
    matches(t, e, i) {
      return this.label_ === t;
    }
    toString() {
      return this.label_;
    }
  }, Zr = class extends g {
    constructor(t, e, i) {
      super(t), this.serializationType = g.RANGE, this.start = e, this.stop = i, this.label = this.makeLabel();
    }
    makeLabel() {
      const t = new q();
      return t.addRange(this.start, this.stop), t;
    }
    matches(t, e, i) {
      return t >= this.start && t <= this.stop;
    }
    toString() {
      return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'";
    }
  }, $i = class extends g {
    constructor(t, e, i, s) {
      super(t), this.serializationType = g.ACTION, this.ruleIndex = e, this.actionIndex = i === void 0 ? -1 : i, this.isCtxDependent = s !== void 0 && s, this.isEpsilon = true;
    }
    matches(t, e, i) {
      return false;
    }
    toString() {
      return "action_" + this.ruleIndex + ":" + this.actionIndex;
    }
  }, Pt = class extends g {
    constructor(t, e) {
      super(t), this.serializationType = g.EPSILON, this.isEpsilon = true, this.outermostPrecedenceReturn = e;
    }
    matches(t, e, i) {
      return false;
    }
    toString() {
      return "epsilon";
    }
  }, Ji = class Nr extends w {
    constructor(e, i, s) {
      super(), this.ruleIndex = e === void 0 ? -1 : e, this.predIndex = i === void 0 ? -1 : i, this.isCtxDependent = s !== void 0 && s;
    }
    evaluate(e, i) {
      const s = this.isCtxDependent ? i : null;
      return e.sempred(s, this.ruleIndex, this.predIndex);
    }
    updateHashCode(e) {
      e.update(this.ruleIndex, this.predIndex, this.isCtxDependent);
    }
    equals(e) {
      return this === e || e instanceof Nr && this.ruleIndex === e.ruleIndex && this.predIndex === e.predIndex && this.isCtxDependent === e.isCtxDependent;
    }
    toString() {
      return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
    }
  };
  w.NONE = new Ji();
  var Xi = class extends be {
    constructor(t, e, i, s) {
      super(t), this.serializationType = g.PREDICATE, this.ruleIndex = e, this.predIndex = i, this.isCtxDependent = s, this.isEpsilon = true;
    }
    matches(t, e, i) {
      return false;
    }
    getPredicate() {
      return new Ji(this.ruleIndex, this.predIndex, this.isCtxDependent);
    }
    toString() {
      return "pred_" + this.ruleIndex + ":" + this.predIndex;
    }
  }, Qi = class Ir extends w {
    constructor(e) {
      super(), this.precedence = e === void 0 ? 0 : e;
    }
    evaluate(e, i) {
      return e.precpred(i, this.precedence);
    }
    evalPrecedence(e, i) {
      return e.precpred(i, this.precedence) ? w.NONE : null;
    }
    compareTo(e) {
      return this.precedence - e.precedence;
    }
    updateHashCode(e) {
      e.update(this.precedence);
    }
    equals(e) {
      return this === e || e instanceof Ir && this.precedence === e.precedence;
    }
    toString() {
      return "{" + this.precedence + ">=prec}?";
    }
  };
  w.PrecedencePredicate = Qi;
  var tn = class extends be {
    constructor(t, e) {
      super(t), this.serializationType = g.PRECEDENCE, this.precedence = e, this.isEpsilon = true;
    }
    matches(t, e, i) {
      return false;
    }
    getPredicate() {
      return new Qi(this.precedence);
    }
    toString() {
      return this.precedence + " >= _p";
    }
  }, Ut = class {
    constructor(t) {
      t === void 0 && (t = null), this.readOnly = false, this.verifyATN = t === null || t.verifyATN, this.generateRuleBypassTransitions = t !== null && t.generateRuleBypassTransitions;
    }
  };
  Ut.defaultOptions = new Ut(), Ut.defaultOptions.readOnly = true;
  var nt = class {
    constructor(t) {
      this.actionType = t, this.isPositionDependent = false;
    }
    hashCode() {
      const t = new J();
      return this.updateHashCode(t), t.finish();
    }
    updateHashCode(t) {
      t.update(this.actionType);
    }
    equals(t) {
      return this === t;
    }
  }, Pe = class extends nt {
    constructor() {
      super(6);
    }
    execute(t) {
      t.skip();
    }
    toString() {
      return "skip";
    }
  };
  Pe.INSTANCE = new Pe();
  var en = class kr extends nt {
    constructor(e) {
      super(0), this.channel = e;
    }
    execute(e) {
      e._channel = this.channel;
    }
    updateHashCode(e) {
      e.update(this.actionType, this.channel);
    }
    equals(e) {
      return this === e || e instanceof kr && this.channel === e.channel;
    }
    toString() {
      return "channel(" + this.channel + ")";
    }
  }, sn = class Dr extends nt {
    constructor(e, i) {
      super(1), this.ruleIndex = e, this.actionIndex = i, this.isPositionDependent = true;
    }
    execute(e) {
      e.action(null, this.ruleIndex, this.actionIndex);
    }
    updateHashCode(e) {
      e.update(this.actionType, this.ruleIndex, this.actionIndex);
    }
    equals(e) {
      return this === e || e instanceof Dr && this.ruleIndex === e.ruleIndex && this.actionIndex === e.actionIndex;
    }
  }, Ue = class extends nt {
    constructor() {
      super(3);
    }
    execute(t) {
      t.more();
    }
    toString() {
      return "more";
    }
  };
  Ue.INSTANCE = new Ue();
  var rn = class Or extends nt {
    constructor(e) {
      super(7), this.type = e;
    }
    execute(e) {
      e.type = this.type;
    }
    updateHashCode(e) {
      e.update(this.actionType, this.type);
    }
    equals(e) {
      return this === e || e instanceof Or && this.type === e.type;
    }
    toString() {
      return "type(" + this.type + ")";
    }
  }, nn = class Pr extends nt {
    constructor(e) {
      super(5), this.mode = e;
    }
    execute(e) {
      e.pushMode(this.mode);
    }
    updateHashCode(e) {
      e.update(this.actionType, this.mode);
    }
    equals(e) {
      return this === e || e instanceof Pr && this.mode === e.mode;
    }
    toString() {
      return "pushMode(" + this.mode + ")";
    }
  }, Fe = class extends nt {
    constructor() {
      super(4);
    }
    execute(t) {
      t.popMode();
    }
    toString() {
      return "popMode";
    }
  };
  Fe.INSTANCE = new Fe();
  var an = class Ur extends nt {
    constructor(e) {
      super(2), this.mode = e;
    }
    execute(e) {
      e.mode(this.mode);
    }
    updateHashCode(e) {
      e.update(this.actionType, this.mode);
    }
    equals(e) {
      return this === e || e instanceof Ur && this.mode === e.mode;
    }
    toString() {
      return "mode(" + this.mode + ")";
    }
  };
  function Jt(t, e) {
    const i = [];
    return i[t - 1] = e, i.map(function(s) {
      return e;
    });
  }
  var He = class {
    constructor(t) {
      t == null && (t = Ut.defaultOptions), this.deserializationOptions = t, this.stateFactories = null, this.actionFactories = null;
    }
    deserialize(t) {
      const e = this.reset(t);
      this.checkVersion(e), e && this.skipUUID();
      const i = this.readATN();
      this.readStates(i, e), this.readRules(i, e), this.readModes(i);
      const s = [];
      return this.readSets(i, s, this.readInt.bind(this)), e && this.readSets(i, s, this.readInt32.bind(this)), this.readEdges(i, s), this.readDecisions(i), this.readLexerActions(i, e), this.markPrecedenceDecisions(i), this.verifyATN(i), this.deserializationOptions.generateRuleBypassTransitions && i.grammarType === 1 && (this.generateRuleBypassTransitions(i), this.verifyATN(i)), i;
    }
    reset(t) {
      if ((t.charCodeAt ? t.charCodeAt(0) : t[0]) === 3) {
        const e = function(s) {
          const r = s.charCodeAt(0);
          return r > 1 ? r - 2 : r + 65534;
        }, i = t.split("").map(e);
        return i[0] = t.charCodeAt(0), this.data = i, this.pos = 0, true;
      }
      return this.data = t, this.pos = 0, false;
    }
    skipUUID() {
      let t = 0;
      for (; t++ < 8; ) this.readInt();
    }
    checkVersion(t) {
      const e = this.readInt();
      if (!t && e !== 4) throw "Could not deserialize ATN with version " + e + " (expected 4).";
    }
    readATN() {
      const t = this.readInt(), e = this.readInt();
      return new N(t, e);
    }
    readStates(t, e) {
      let i, s, r;
      const n = [], l = [], h = this.readInt();
      for (let m = 0; m < h; m++) {
        const y = this.readInt();
        if (y === T.INVALID_TYPE) {
          t.addState(null);
          continue;
        }
        let E = this.readInt();
        e && E === 65535 && (E = -1);
        const A = this.stateFactory(y, E);
        if (y === T.LOOP_END) {
          const v = this.readInt();
          n.push([A, v]);
        } else if (A instanceof Rt) {
          const v = this.readInt();
          l.push([A, v]);
        }
        t.addState(A);
      }
      for (i = 0; i < n.length; i++) s = n[i], s[0].loopBackState = t.states[s[1]];
      for (i = 0; i < l.length; i++) s = l[i], s[0].endState = t.states[s[1]];
      let u = this.readInt();
      for (i = 0; i < u; i++) r = this.readInt(), t.states[r].nonGreedy = true;
      let p = this.readInt();
      for (i = 0; i < p; i++) r = this.readInt(), t.states[r].isPrecedenceRule = true;
    }
    readRules(t, e) {
      let i;
      const s = this.readInt();
      for (t.grammarType === 0 && (t.ruleToTokenType = Jt(s, 0)), t.ruleToStartState = Jt(s, 0), i = 0; i < s; i++) {
        const r = this.readInt();
        if (t.ruleToStartState[i] = t.states[r], t.grammarType === 0) {
          let n = this.readInt();
          e && n === 65535 && (n = x.EOF), t.ruleToTokenType[i] = n;
        }
      }
      for (t.ruleToStopState = Jt(s, 0), i = 0; i < t.states.length; i++) {
        const r = t.states[i];
        r instanceof M && (t.ruleToStopState[r.ruleIndex] = r, t.ruleToStartState[r.ruleIndex].stopState = r);
      }
    }
    readModes(t) {
      const e = this.readInt();
      for (let i = 0; i < e; i++) {
        let s = this.readInt();
        t.modeToStartState.push(t.states[s]);
      }
    }
    readSets(t, e, i) {
      const s = this.readInt();
      for (let r = 0; r < s; r++) {
        const n = new q();
        e.push(n);
        const l = this.readInt();
        this.readInt() !== 0 && n.addOne(-1);
        for (let h = 0; h < l; h++) {
          const u = i(), p = i();
          n.addRange(u, p);
        }
      }
    }
    readEdges(t, e) {
      let i, s, r, n, l;
      const h = this.readInt();
      for (i = 0; i < h; i++) {
        const u = this.readInt(), p = this.readInt(), m = this.readInt(), y = this.readInt(), E = this.readInt(), A = this.readInt();
        n = this.edgeFactory(t, m, u, p, y, E, A, e), t.states[u].addTransition(n);
      }
      for (i = 0; i < t.states.length; i++) for (r = t.states[i], s = 0; s < r.transitions.length; s++) {
        const u = r.transitions[s];
        if (!(u instanceof Yt)) continue;
        let p = -1;
        t.ruleToStartState[u.target.ruleIndex].isPrecedenceRule && u.precedence === 0 && (p = u.target.ruleIndex), n = new Pt(u.followState, p), t.ruleToStopState[u.target.ruleIndex].addTransition(n);
      }
      for (i = 0; i < t.states.length; i++) {
        if (r = t.states[i], r instanceof Rt) {
          if (r.endState === null || r.endState.startState !== null) throw "IllegalState";
          r.endState.startState = r;
        }
        if (r instanceof Yi) for (s = 0; s < r.transitions.length; s++) l = r.transitions[s].target, l instanceof ke && (l.loopBackState = r);
        else if (r instanceof Ie) for (s = 0; s < r.transitions.length; s++) l = r.transitions[s].target, l instanceof mt && (l.loopBackState = r);
      }
    }
    readDecisions(t) {
      const e = this.readInt();
      for (let i = 0; i < e; i++) {
        const s = this.readInt(), r = t.states[s];
        t.decisionToState.push(r), r.decision = i;
      }
    }
    readLexerActions(t, e) {
      if (t.grammarType === 0) {
        const i = this.readInt();
        t.lexerActions = Jt(i, null);
        for (let s = 0; s < i; s++) {
          const r = this.readInt();
          let n = this.readInt();
          e && n === 65535 && (n = -1);
          let l = this.readInt();
          e && l === 65535 && (l = -1), t.lexerActions[s] = this.lexerActionFactory(r, n, l);
        }
      }
    }
    generateRuleBypassTransitions(t) {
      let e;
      const i = t.ruleToStartState.length;
      for (e = 0; e < i; e++) t.ruleToTokenType[e] = t.maxTokenType + e + 1;
      for (e = 0; e < i; e++) this.generateRuleBypassTransition(t, e);
    }
    generateRuleBypassTransition(t, e) {
      let i, s;
      const r = new Gi();
      r.ruleIndex = e, t.addState(r);
      const n = new Ne();
      n.ruleIndex = e, t.addState(n), r.endState = n, t.defineDecisionState(r), n.startState = r;
      let l = null, h = null;
      if (t.ruleToStartState[e].isPrecedenceRule) {
        for (h = null, i = 0; i < t.states.length; i++) if (s = t.states[i], this.stateIsEndStateFor(s, e)) {
          h = s, l = s.loopBackState.transitions[0];
          break;
        }
        if (l === null) throw "Couldn't identify final state of the precedence rule prefix section.";
      } else h = t.ruleToStopState[e];
      for (i = 0; i < t.states.length; i++) {
        s = t.states[i];
        for (let y = 0; y < s.transitions.length; y++) {
          const E = s.transitions[y];
          E !== l && E.target === h && (E.target = n);
        }
      }
      const u = t.ruleToStartState[e], p = u.transitions.length;
      for (; p > 0; ) r.addTransition(u.transitions[p - 1]), u.transitions = u.transitions.slice(-1);
      t.ruleToStartState[e].addTransition(new Pt(r)), n.addTransition(new Pt(h));
      const m = new qi();
      t.addState(m), m.addTransition(new Oe(n, t.ruleToTokenType[e])), r.addTransition(new Pt(m));
    }
    stateIsEndStateFor(t, e) {
      if (t.ruleIndex !== e || !(t instanceof mt)) return null;
      const i = t.transitions[t.transitions.length - 1].target;
      return i instanceof Ct && i.epsilonOnlyTransitions && i.transitions[0].target instanceof M ? t : null;
    }
    markPrecedenceDecisions(t) {
      for (let e = 0; e < t.states.length; e++) {
        const i = t.states[e];
        if (i instanceof mt && t.ruleToStartState[i.ruleIndex].isPrecedenceRule) {
          const s = i.transitions[i.transitions.length - 1].target;
          s instanceof Ct && s.epsilonOnlyTransitions && s.transitions[0].target instanceof M && (i.isPrecedenceDecision = true);
        }
      }
    }
    verifyATN(t) {
      if (this.deserializationOptions.verifyATN) for (let e = 0; e < t.states.length; e++) {
        const i = t.states[e];
        if (i !== null) if (this.checkCondition(i.epsilonOnlyTransitions || i.transitions.length <= 1), i instanceof ke) this.checkCondition(i.loopBackState !== null);
        else if (i instanceof mt) if (this.checkCondition(i.loopBackState !== null), this.checkCondition(i.transitions.length === 2), i.transitions[0].target instanceof De) this.checkCondition(i.transitions[1].target instanceof Ct), this.checkCondition(!i.nonGreedy);
        else {
          if (!(i.transitions[0].target instanceof Ct)) throw "IllegalState";
          this.checkCondition(i.transitions[1].target instanceof De), this.checkCondition(i.nonGreedy);
        }
        else i instanceof Ie ? (this.checkCondition(i.transitions.length === 1), this.checkCondition(i.transitions[0].target instanceof mt)) : i instanceof Ct ? this.checkCondition(i.loopBackState !== null) : i instanceof Wi ? this.checkCondition(i.stopState !== null) : i instanceof Rt ? this.checkCondition(i.endState !== null) : i instanceof Ne ? this.checkCondition(i.startState !== null) : i instanceof vt ? this.checkCondition(i.transitions.length <= 1 || i.decision >= 0) : this.checkCondition(i.transitions.length <= 1 || i instanceof M);
      }
    }
    checkCondition(t, e) {
      if (!t) throw e == null && (e = "IllegalState"), e;
    }
    readInt() {
      return this.data[this.pos++];
    }
    readInt32() {
      return this.readInt() | this.readInt() << 16;
    }
    edgeFactory(t, e, i, s, r, n, l, h) {
      const u = t.states[s];
      switch (e) {
        case g.EPSILON:
          return new Pt(u);
        case g.RANGE:
          return new Zr(u, l !== 0 ? x.EOF : r, n);
        case g.RULE:
          return new Yt(t.states[r], n, l, u);
        case g.PREDICATE:
          return new Xi(u, r, n, l !== 0);
        case g.PRECEDENCE:
          return new tn(u, r);
        case g.ATOM:
          return new Oe(u, l !== 0 ? x.EOF : r);
        case g.ACTION:
          return new $i(u, r, n, l !== 0);
        case g.SET:
          return new Ce(u, h[r]);
        case g.NOT_SET:
          return new Le(u, h[r]);
        case g.WILDCARD:
          return new Vi(u);
        default:
          throw "The specified transition type: " + e + " is not valid.";
      }
    }
    stateFactory(t, e) {
      if (this.stateFactories === null) {
        const i = [];
        i[T.INVALID_TYPE] = null, i[T.BASIC] = () => new qi(), i[T.RULE_START] = () => new Wi(), i[T.BLOCK_START] = () => new Gi(), i[T.PLUS_BLOCK_START] = () => new ke(), i[T.STAR_BLOCK_START] = () => new De(), i[T.TOKEN_START] = () => new Qr(), i[T.RULE_STOP] = () => new M(), i[T.BLOCK_END] = () => new Ne(), i[T.STAR_LOOP_BACK] = () => new Ie(), i[T.STAR_LOOP_ENTRY] = () => new mt(), i[T.PLUS_LOOP_BACK] = () => new Yi(), i[T.LOOP_END] = () => new Ct(), this.stateFactories = i;
      }
      if (t > this.stateFactories.length || this.stateFactories[t] === null) throw "The specified state type " + t + " is not valid.";
      {
        const i = this.stateFactories[t]();
        if (i !== null) return i.ruleIndex = e, i;
      }
    }
    lexerActionFactory(t, e, i) {
      if (this.actionFactories === null) {
        const s = [];
        s[0] = (r, n) => new en(r), s[1] = (r, n) => new sn(r, n), s[2] = (r, n) => new an(r), s[3] = (r, n) => Ue.INSTANCE, s[4] = (r, n) => Fe.INSTANCE, s[5] = (r, n) => new nn(r), s[6] = (r, n) => Pe.INSTANCE, s[7] = (r, n) => new rn(r), this.actionFactories = s;
      }
      if (t > this.actionFactories.length || this.actionFactories[t] === null) throw "The specified lexer action type " + t + " is not valid.";
      return this.actionFactories[t](e, i);
    }
  }, Ft = class {
    syntaxError(t, e, i, s, r, n) {
    }
    reportAmbiguity(t, e, i, s, r, n, l) {
    }
    reportAttemptingFullContext(t, e, i, s, r, n) {
    }
    reportContextSensitivity(t, e, i, s, r, n) {
    }
  }, Me = class extends Ft {
    constructor() {
      super();
    }
    syntaxError(t, e, i, s, r, n) {
      console.error("line " + i + ":" + s + " " + r);
    }
  };
  Me.INSTANCE = new Me();
  var ln = class extends Ft {
    constructor(t) {
      if (super(), t === null) throw "delegates";
      return this.delegates = t, this;
    }
    syntaxError(t, e, i, s, r, n) {
      this.delegates.map((l) => l.syntaxError(t, e, i, s, r, n));
    }
    reportAmbiguity(t, e, i, s, r, n, l) {
      this.delegates.map((h) => h.reportAmbiguity(t, e, i, s, r, n, l));
    }
    reportAttemptingFullContext(t, e, i, s, r, n) {
      this.delegates.map((l) => l.reportAttemptingFullContext(t, e, i, s, r, n));
    }
    reportContextSensitivity(t, e, i, s, r, n) {
      this.delegates.map((l) => l.reportContextSensitivity(t, e, i, s, r, n));
    }
  }, Xt = class {
    constructor() {
      this._listeners = [Me.INSTANCE], this._interp = null, this._stateNumber = -1;
    }
    checkVersion(t) {
      const e = "4.13.1";
      e !== t && console.log("ANTLR runtime and generated code versions disagree: " + e + "!=" + t);
    }
    addErrorListener(t) {
      this._listeners.push(t);
    }
    removeErrorListeners() {
      this._listeners = [];
    }
    getLiteralNames() {
      return Object.getPrototypeOf(this).constructor.literalNames || [];
    }
    getSymbolicNames() {
      return Object.getPrototypeOf(this).constructor.symbolicNames || [];
    }
    getTokenNames() {
      if (!this.tokenNames) {
        const t = this.getLiteralNames(), e = this.getSymbolicNames(), i = t.length > e.length ? t.length : e.length;
        this.tokenNames = [];
        for (let s = 0; s < i; s++) this.tokenNames[s] = t[s] || e[s] || "<INVALID";
      }
      return this.tokenNames;
    }
    getTokenTypeMap() {
      const t = this.getTokenNames();
      if (t === null) throw "The current recognizer does not provide a list of token names.";
      let e = this.tokenTypeMapCache[t];
      return e === void 0 && (e = t.reduce(function(i, s, r) {
        i[s] = r;
      }), e.EOF = x.EOF, this.tokenTypeMapCache[t] = e), e;
    }
    getRuleIndexMap() {
      const t = this.ruleNames;
      if (t === null) throw "The current recognizer does not provide a list of rule names.";
      let e = this.ruleIndexMapCache[t];
      return e === void 0 && (e = t.reduce(function(i, s, r) {
        i[s] = r;
      }), this.ruleIndexMapCache[t] = e), e;
    }
    getTokenType(t) {
      const e = this.getTokenTypeMap()[t];
      return e !== void 0 ? e : x.INVALID_TYPE;
    }
    getErrorHeader(t) {
      return "line " + t.getOffendingToken().line + ":" + t.getOffendingToken().column;
    }
    getTokenErrorDisplay(t) {
      if (t === null) return "<no token>";
      let e = t.text;
      return e === null && (e = t.type === x.EOF ? "<EOF>" : "<" + t.type + ">"), e = e.replace(`
`, "\\n").replace("\r", "\\r").replace("	", "\\t"), "'" + e + "'";
    }
    getErrorListenerDispatch() {
      return new ln(this._listeners);
    }
    sempred(t, e, i) {
      return true;
    }
    precpred(t, e) {
      return true;
    }
    get atn() {
      return this._interp.atn;
    }
    get state() {
      return this._stateNumber;
    }
    set state(t) {
      this._stateNumber = t;
    }
  };
  Xt.tokenTypeMapCache = {}, Xt.ruleIndexMapCache = {};
  var Ht = class Ee extends x {
    constructor(e, i, s, r, n) {
      super(), this.source = e !== void 0 ? e : Ee.EMPTY_SOURCE, this.type = i !== void 0 ? i : null, this.channel = s !== void 0 ? s : x.DEFAULT_CHANNEL, this.start = r !== void 0 ? r : -1, this.stop = n !== void 0 ? n : -1, this.tokenIndex = -1, this.source[0] !== null ? (this.line = e[0].line, this.column = e[0].column) : this.column = -1;
    }
    clone() {
      const e = new Ee(this.source, this.type, this.channel, this.start, this.stop);
      return e.tokenIndex = this.tokenIndex, e.line = this.line, e.column = this.column, e.text = this.text, e;
    }
    cloneWithType(e) {
      const i = new Ee(this.source, e, this.channel, this.start, this.stop);
      return i.tokenIndex = this.tokenIndex, i.line = this.line, i.column = this.column, e === x.EOF && (i.text = ""), i;
    }
    toString() {
      let e = this.text;
      return e = e !== null ? e.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "<no text>", "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + e + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]";
    }
    get text() {
      if (this._text !== null) return this._text;
      const e = this.getInputStream();
      if (e === null) return null;
      const i = e.size;
      return this.start < i && this.stop < i ? e.getText(this.start, this.stop) : "<EOF>";
    }
    set text(e) {
      this._text = e;
    }
  };
  Ht.EMPTY_SOURCE = [null, null];
  var hn = class {
  }, Ke = class extends hn {
    constructor(t) {
      super(), this.copyText = t !== void 0 && t;
    }
    create(t, e, i, s, r, n, l, h) {
      const u = new Ht(t, e, s, r, n);
      return u.line = l, u.column = h, i !== null ? u.text = i : this.copyText && t[1] !== null && (u.text = t[1].getText(r, n)), u;
    }
    createThin(t, e) {
      const i = new Ht(null, t);
      return i.text = e, i;
    }
  };
  Ke.DEFAULT = new Ke();
  var ft = class Fr extends Error {
    constructor(e) {
      super(e.message), Error.captureStackTrace && Error.captureStackTrace(this, Fr), this.message = e.message, this.recognizer = e.recognizer, this.input = e.input, this.ctx = e.ctx, this.offendingToken = null, this.offendingState = -1, this.recognizer !== null && (this.offendingState = this.recognizer.state);
    }
    getExpectedTokens() {
      return this.recognizer !== null ? this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx) : null;
    }
    toString() {
      return this.message;
    }
  }, Ve = class extends ft {
    constructor(t, e, i, s) {
      super({ message: "", recognizer: t, input: e, ctx: null }), this.startIndex = i, this.deadEndConfigs = s;
    }
    toString() {
      let t = "";
      return this.startIndex >= 0 && this.startIndex < this.input.size && (t = this.input.getText(new S(this.startIndex, this.startIndex))), "LexerNoViableAltException" + t;
    }
  }, F = class dt extends Xt {
    constructor(e) {
      super(), this._input = e, this._factory = Ke.DEFAULT, this._tokenFactorySourcePair = [this, e], this._interp = null, this._token = null, this._tokenStartCharIndex = -1, this._tokenStartLine = -1, this._tokenStartColumn = -1, this._hitEOF = false, this._channel = x.DEFAULT_CHANNEL, this._type = x.INVALID_TYPE, this._modeStack = [], this._mode = dt.DEFAULT_MODE, this._text = null;
    }
    reset() {
      this._input !== null && this._input.seek(0), this._token = null, this._type = x.INVALID_TYPE, this._channel = x.DEFAULT_CHANNEL, this._tokenStartCharIndex = -1, this._tokenStartColumn = -1, this._tokenStartLine = -1, this._text = null, this._hitEOF = false, this._mode = dt.DEFAULT_MODE, this._modeStack = [], this._interp.reset();
    }
    nextToken() {
      if (this._input === null) throw "nextToken requires a non-null input stream.";
      const e = this._input.mark();
      try {
        for (; ; ) {
          if (this._hitEOF) return this.emitEOF(), this._token;
          this._token = null, this._channel = x.DEFAULT_CHANNEL, this._tokenStartCharIndex = this._input.index, this._tokenStartColumn = this._interp.column, this._tokenStartLine = this._interp.line, this._text = null;
          let i = false;
          for (; ; ) {
            this._type = x.INVALID_TYPE;
            let s = dt.SKIP;
            try {
              s = this._interp.match(this._input, this._mode);
            } catch (r) {
              if (!(r instanceof ft)) throw console.log(r.stack), r;
              this.notifyListeners(r), this.recover(r);
            }
            if (this._input.LA(1) === x.EOF && (this._hitEOF = true), this._type === x.INVALID_TYPE && (this._type = s), this._type === dt.SKIP) {
              i = true;
              break;
            }
            if (this._type !== dt.MORE) break;
          }
          if (!i) return this._token === null && this.emit(), this._token;
        }
      } finally {
        this._input.release(e);
      }
    }
    skip() {
      this._type = dt.SKIP;
    }
    more() {
      this._type = dt.MORE;
    }
    mode(e) {
      this._mode = e;
    }
    pushMode(e) {
      this._interp.debug && console.log("pushMode " + e), this._modeStack.push(this._mode), this.mode(e);
    }
    popMode() {
      if (this._modeStack.length === 0) throw "Empty Stack";
      return this._interp.debug && console.log("popMode back to " + this._modeStack.slice(0, -1)), this.mode(this._modeStack.pop()), this._mode;
    }
    emitToken(e) {
      this._token = e;
    }
    emit() {
      const e = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.getCharIndex() - 1, this._tokenStartLine, this._tokenStartColumn);
      return this.emitToken(e), e;
    }
    emitEOF() {
      const e = this.column, i = this.line, s = this._factory.create(this._tokenFactorySourcePair, x.EOF, null, x.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, i, e);
      return this.emitToken(s), s;
    }
    getCharIndex() {
      return this._input.index;
    }
    getAllTokens() {
      const e = [];
      let i = this.nextToken();
      for (; i.type !== x.EOF; ) e.push(i), i = this.nextToken();
      return e;
    }
    notifyListeners(e) {
      const i = this._tokenStartCharIndex, s = this._input.index, r = this._input.getText(i, s), n = "token recognition error at: '" + this.getErrorDisplay(r) + "'";
      this.getErrorListenerDispatch().syntaxError(this, null, this._tokenStartLine, this._tokenStartColumn, n, e);
    }
    getErrorDisplay(e) {
      const i = [];
      for (let s = 0; s < e.length; s++) i.push(e[s]);
      return i.join("");
    }
    getErrorDisplayForChar(e) {
      return e.charCodeAt(0) === x.EOF ? "<EOF>" : e === `
` ? "\\n" : e === "	" ? "\\t" : e === "\r" ? "\\r" : e;
    }
    getCharErrorDisplay(e) {
      return "'" + this.getErrorDisplayForChar(e) + "'";
    }
    recover(e) {
      this._input.LA(1) !== x.EOF && (e instanceof Ve ? this._interp.consume(this._input) : this._input.consume());
    }
    get inputStream() {
      return this._input;
    }
    set inputStream(e) {
      this._input = null, this._tokenFactorySourcePair = [this, this._input], this.reset(), this._input = e, this._tokenFactorySourcePair = [this, this._input];
    }
    get sourceName() {
      return this._input.sourceName;
    }
    get type() {
      return this._type;
    }
    set type(e) {
      this._type = e;
    }
    get line() {
      return this._interp.line;
    }
    set line(e) {
      this._interp.line = e;
    }
    get column() {
      return this._interp.column;
    }
    set column(e) {
      this._interp.column = e;
    }
    get text() {
      return this._text !== null ? this._text : this._interp.getText(this._input);
    }
    set text(e) {
      this._text = e;
    }
  };
  function on(t) {
    return t.hashCodeForConfigSet();
  }
  function un(t, e) {
    return t === e || t !== null && e !== null && t.equalsForConfigSet(e);
  }
  F.DEFAULT_MODE = 0, F.MORE = -2, F.SKIP = -3, F.DEFAULT_TOKEN_CHANNEL = x.DEFAULT_CHANNEL, F.HIDDEN = x.HIDDEN_CHANNEL, F.MIN_CHAR_VALUE = 0, F.MAX_CHAR_VALUE = 1114111;
  var z = class Hr {
    constructor(e) {
      this.configLookup = new B(on, un), this.fullCtx = e === void 0 || e, this.readOnly = false, this.configs = [], this.uniqueAlt = 0, this.conflictingAlts = null, this.hasSemanticContext = false, this.dipsIntoOuterContext = false, this.cachedHashCode = -1;
    }
    add(e, i) {
      if (i === void 0 && (i = null), this.readOnly) throw "This set is readonly";
      e.semanticContext !== w.NONE && (this.hasSemanticContext = true), e.reachesIntoOuterContext > 0 && (this.dipsIntoOuterContext = true);
      const s = this.configLookup.add(e);
      if (s === e) return this.cachedHashCode = -1, this.configs.push(e), true;
      const r = !this.fullCtx, n = we(s.context, e.context, r, i);
      return s.reachesIntoOuterContext = Math.max(s.reachesIntoOuterContext, e.reachesIntoOuterContext), e.precedenceFilterSuppressed && (s.precedenceFilterSuppressed = true), s.context = n, true;
    }
    getStates() {
      const e = new B();
      for (let i = 0; i < this.configs.length; i++) e.add(this.configs[i].state);
      return e;
    }
    getPredicates() {
      const e = [];
      for (let i = 0; i < this.configs.length; i++) {
        const s = this.configs[i].semanticContext;
        s !== w.NONE && e.push(s.semanticContext);
      }
      return e;
    }
    optimizeConfigs(e) {
      if (this.readOnly) throw "This set is readonly";
      if (this.configLookup.length !== 0) for (let i = 0; i < this.configs.length; i++) {
        const s = this.configs[i];
        s.context = e.getCachedContext(s.context);
      }
    }
    addAll(e) {
      for (let i = 0; i < e.length; i++) this.add(e[i]);
      return false;
    }
    equals(e) {
      return this === e || e instanceof Hr && Et(this.configs, e.configs) && this.fullCtx === e.fullCtx && this.uniqueAlt === e.uniqueAlt && this.conflictingAlts === e.conflictingAlts && this.hasSemanticContext === e.hasSemanticContext && this.dipsIntoOuterContext === e.dipsIntoOuterContext;
    }
    hashCode() {
      const e = new J();
      return e.update(this.configs), e.finish();
    }
    updateHashCode(e) {
      this.readOnly ? (this.cachedHashCode === -1 && (this.cachedHashCode = this.hashCode()), e.update(this.cachedHashCode)) : e.update(this.hashCode());
    }
    isEmpty() {
      return this.configs.length === 0;
    }
    contains(e) {
      if (this.configLookup === null) throw "This method is not implemented for readonly sets.";
      return this.configLookup.contains(e);
    }
    containsFast(e) {
      if (this.configLookup === null) throw "This method is not implemented for readonly sets.";
      return this.configLookup.containsFast(e);
    }
    clear() {
      if (this.readOnly) throw "This set is readonly";
      this.configs = [], this.cachedHashCode = -1, this.configLookup = new B();
    }
    setReadonly(e) {
      this.readOnly = e, e && (this.configLookup = null);
    }
    toString() {
      return st(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== N.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (this.conflictingAlts !== null ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : "");
    }
    get items() {
      return this.configs;
    }
    get length() {
      return this.configs.length;
    }
  }, _t = class Mr {
    constructor(e, i) {
      return e === null && (e = -1), i === null && (i = new z()), this.stateNumber = e, this.configs = i, this.edges = null, this.isAcceptState = false, this.prediction = 0, this.lexerActionExecutor = null, this.requiresFullContext = false, this.predicates = null, this;
    }
    getAltSet() {
      const e = new B();
      if (this.configs !== null) for (let i = 0; i < this.configs.length; i++) {
        const s = this.configs[i];
        e.add(s.alt);
      }
      return e.length === 0 ? null : e;
    }
    equals(e) {
      return this === e || e instanceof Mr && this.configs.equals(e.configs);
    }
    toString() {
      let e = this.stateNumber + ":" + this.configs;
      return this.isAcceptState && (e += "=>", this.predicates !== null ? e += this.predicates : e += this.prediction), e;
    }
    hashCode() {
      const e = new J();
      return e.update(this.configs), e.finish();
    }
  }, Z = class {
    constructor(t, e) {
      return this.atn = t, this.sharedContextCache = e, this;
    }
    getCachedContext(t) {
      if (this.sharedContextCache === null) return t;
      const e = new Ot();
      return ji(t, this.sharedContextCache, e);
    }
  };
  Z.ERROR = new _t(2147483647, new z());
  var Zi = class extends z {
    constructor() {
      super(), this.configLookup = new B();
    }
  }, tt = class ve extends k {
    constructor(e, i) {
      super(e, i);
      const s = e.lexerActionExecutor || null;
      return this.lexerActionExecutor = s || (i !== null ? i.lexerActionExecutor : null), this.passedThroughNonGreedyDecision = i !== null && this.checkNonGreedyDecision(i, this.state), this.hashCodeForConfigSet = ve.prototype.hashCode, this.equalsForConfigSet = ve.prototype.equals, this;
    }
    updateHashCode(e) {
      e.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor);
    }
    equals(e) {
      return this === e || e instanceof ve && this.passedThroughNonGreedyDecision === e.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(e.lexerActionExecutor) : !e.lexerActionExecutor) && super.equals(e);
    }
    checkNonGreedyDecision(e, i) {
      return e.passedThroughNonGreedyDecision || i instanceof vt && i.nonGreedy;
    }
  }, Be = class Kr extends nt {
    constructor(e, i) {
      super(i.actionType), this.offset = e, this.action = i, this.isPositionDependent = true;
    }
    execute(e) {
      this.action.execute(e);
    }
    updateHashCode(e) {
      e.update(this.actionType, this.offset, this.action);
    }
    equals(e) {
      return this === e || e instanceof Kr && this.offset === e.offset && this.action === e.action;
    }
  }, cn = class jt {
    constructor(e) {
      return this.lexerActions = e === null ? [] : e, this.cachedHashCode = J.hashStuff(e), this;
    }
    fixOffsetBeforeMatch(e) {
      let i = null;
      for (let s = 0; s < this.lexerActions.length; s++) !this.lexerActions[s].isPositionDependent || this.lexerActions[s] instanceof Be || (i === null && (i = this.lexerActions.concat([])), i[s] = new Be(e, this.lexerActions[s]));
      return i === null ? this : new jt(i);
    }
    execute(e, i, s) {
      let r = false;
      const n = i.index;
      try {
        for (let l = 0; l < this.lexerActions.length; l++) {
          let h = this.lexerActions[l];
          if (h instanceof Be) {
            const u = h.offset;
            i.seek(s + u), h = h.action, r = s + u !== n;
          } else h.isPositionDependent && (i.seek(n), r = false);
          h.execute(e);
        }
      } finally {
        r && i.seek(n);
      }
    }
    hashCode() {
      return this.cachedHashCode;
    }
    updateHashCode(e) {
      e.update(this.cachedHashCode);
    }
    equals(e) {
      if (this === e) return true;
      if (e instanceof jt) {
        if (this.cachedHashCode != e.cachedHashCode || this.lexerActions.length != e.lexerActions.length) return false;
        {
          const i = this.lexerActions.length;
          for (let s = 0; s < i; ++s) if (!this.lexerActions[s].equals(e.lexerActions[s])) return false;
          return true;
        }
      }
      return false;
    }
    static append(e, i) {
      if (e === null) return new jt([i]);
      const s = e.lexerActions.concat([i]);
      return new jt(s);
    }
  };
  function ts(t) {
    t.index = -1, t.line = 0, t.column = -1, t.dfaState = null;
  }
  var dn = class {
    constructor() {
      ts(this);
    }
    reset() {
      ts(this);
    }
  }, Lt = class P extends Z {
    constructor(e, i, s, r) {
      super(i, r), this.decisionToDFA = s, this.recog = e, this.startIndex = -1, this.line = 1, this.column = 0, this.mode = F.DEFAULT_MODE, this.prevAccept = new dn();
    }
    copyState(e) {
      this.column = e.column, this.line = e.line, this.mode = e.mode, this.startIndex = e.startIndex;
    }
    match(e, i) {
      this.mode = i;
      const s = e.mark();
      try {
        this.startIndex = e.index, this.prevAccept.reset();
        const r = this.decisionToDFA[i];
        return r.s0 === null ? this.matchATN(e) : this.execATN(e, r.s0);
      } finally {
        e.release(s);
      }
    }
    reset() {
      this.prevAccept.reset(), this.startIndex = -1, this.line = 1, this.column = 0, this.mode = F.DEFAULT_MODE;
    }
    matchATN(e) {
      const i = this.atn.modeToStartState[this.mode];
      P.debug && console.log("matchATN mode " + this.mode + " start: " + i);
      const s = this.mode, r = this.computeStartState(e, i), n = r.hasSemanticContext;
      r.hasSemanticContext = false;
      const l = this.addDFAState(r);
      n || (this.decisionToDFA[this.mode].s0 = l);
      const h = this.execATN(e, l);
      return P.debug && console.log("DFA after matchATN: " + this.decisionToDFA[s].toLexerString()), h;
    }
    execATN(e, i) {
      P.debug && console.log("start state closure=" + i.configs), i.isAcceptState && this.captureSimState(this.prevAccept, e, i);
      let s = e.LA(1), r = i;
      for (; ; ) {
        P.debug && console.log("execATN loop starting closure: " + r.configs);
        let n = this.getExistingTargetState(r, s);
        if (n === null && (n = this.computeTargetState(e, r, s)), n === Z.ERROR || (s !== x.EOF && this.consume(e), n.isAcceptState && (this.captureSimState(this.prevAccept, e, n), s === x.EOF))) break;
        s = e.LA(1), r = n;
      }
      return this.failOrAccept(this.prevAccept, e, r.configs, s);
    }
    getExistingTargetState(e, i) {
      if (e.edges === null || i < P.MIN_DFA_EDGE || i > P.MAX_DFA_EDGE) return null;
      let s = e.edges[i - P.MIN_DFA_EDGE];
      return s === void 0 && (s = null), P.debug && s !== null && console.log("reuse state " + e.stateNumber + " edge to " + s.stateNumber), s;
    }
    computeTargetState(e, i, s) {
      const r = new Zi();
      return this.getReachableConfigSet(e, i.configs, r, s), r.items.length === 0 ? (r.hasSemanticContext || this.addDFAEdge(i, s, Z.ERROR), Z.ERROR) : this.addDFAEdge(i, s, null, r);
    }
    failOrAccept(e, i, s, r) {
      if (this.prevAccept.dfaState !== null) {
        const n = e.dfaState.lexerActionExecutor;
        return this.accept(i, n, this.startIndex, e.index, e.line, e.column), e.dfaState.prediction;
      }
      if (r === x.EOF && i.index === this.startIndex) return x.EOF;
      throw new Ve(this.recog, i, this.startIndex, s);
    }
    getReachableConfigSet(e, i, s, r) {
      let n = N.INVALID_ALT_NUMBER;
      for (let l = 0; l < i.items.length; l++) {
        const h = i.items[l], u = h.alt === n;
        if (!u || !h.passedThroughNonGreedyDecision) {
          P.debug && console.log(`testing %s at %s
`, this.getTokenName(r), h.toString(this.recog, true));
          for (let p = 0; p < h.state.transitions.length; p++) {
            const m = h.state.transitions[p], y = this.getReachableTarget(m, r);
            if (y !== null) {
              let E = h.lexerActionExecutor;
              E !== null && (E = E.fixOffsetBeforeMatch(e.index - this.startIndex));
              const A = r === x.EOF, v = new tt({ state: y, lexerActionExecutor: E }, h);
              this.closure(e, v, s, u, true, A) && (n = h.alt);
            }
          }
        }
      }
    }
    accept(e, i, s, r, n, l) {
      P.debug && console.log(`ACTION %s
`, i), e.seek(r), this.line = n, this.column = l, i !== null && this.recog !== null && i.execute(this.recog, e, s);
    }
    getReachableTarget(e, i) {
      return e.matches(i, 0, F.MAX_CHAR_VALUE) ? e.target : null;
    }
    computeStartState(e, i) {
      const s = R.EMPTY, r = new Zi();
      for (let n = 0; n < i.transitions.length; n++) {
        const l = i.transitions[n].target, h = new tt({ state: l, alt: n + 1, context: s }, null);
        this.closure(e, h, r, false, false, false);
      }
      return r;
    }
    closure(e, i, s, r, n, l) {
      let h = null;
      if (P.debug && console.log("closure(" + i.toString(this.recog, true) + ")"), i.state instanceof M) {
        if (P.debug && (this.recog !== null ? console.log(`closure at %s rule stop %s
`, this.recog.ruleNames[i.state.ruleIndex], i) : console.log(`closure at rule stop %s
`, i)), i.context === null || i.context.hasEmptyPath()) {
          if (i.context === null || i.context.isEmpty()) return s.add(i), true;
          s.add(new tt({ state: i.state, context: R.EMPTY }, i)), r = true;
        }
        if (i.context !== null && !i.context.isEmpty()) {
          for (let u = 0; u < i.context.length; u++) if (i.context.getReturnState(u) !== R.EMPTY_RETURN_STATE) {
            const p = i.context.getParent(u), m = this.atn.states[i.context.getReturnState(u)];
            h = new tt({ state: m, context: p }, i), r = this.closure(e, h, s, r, n, l);
          }
        }
        return r;
      }
      i.state.epsilonOnlyTransitions || r && i.passedThroughNonGreedyDecision || s.add(i);
      for (let u = 0; u < i.state.transitions.length; u++) {
        const p = i.state.transitions[u];
        h = this.getEpsilonTarget(e, i, p, s, n, l), h !== null && (r = this.closure(e, h, s, r, n, l));
      }
      return r;
    }
    getEpsilonTarget(e, i, s, r, n, l) {
      let h = null;
      if (s.serializationType === g.RULE) {
        const u = W.create(i.context, s.followState.stateNumber);
        h = new tt({ state: s.target, context: u }, i);
      } else {
        if (s.serializationType === g.PRECEDENCE) throw "Precedence predicates are not supported in lexers.";
        if (s.serializationType === g.PREDICATE) P.debug && console.log("EVAL rule " + s.ruleIndex + ":" + s.predIndex), r.hasSemanticContext = true, this.evaluatePredicate(e, s.ruleIndex, s.predIndex, n) && (h = new tt({ state: s.target }, i));
        else if (s.serializationType === g.ACTION) if (i.context === null || i.context.hasEmptyPath()) {
          const u = cn.append(i.lexerActionExecutor, this.atn.lexerActions[s.actionIndex]);
          h = new tt({ state: s.target, lexerActionExecutor: u }, i);
        } else h = new tt({ state: s.target }, i);
        else s.serializationType === g.EPSILON ? h = new tt({ state: s.target }, i) : s.serializationType !== g.ATOM && s.serializationType !== g.RANGE && s.serializationType !== g.SET || l && s.matches(x.EOF, 0, F.MAX_CHAR_VALUE) && (h = new tt({ state: s.target }, i));
      }
      return h;
    }
    evaluatePredicate(e, i, s, r) {
      if (this.recog === null) return true;
      if (!r) return this.recog.sempred(null, i, s);
      const n = this.column, l = this.line, h = e.index, u = e.mark();
      try {
        return this.consume(e), this.recog.sempred(null, i, s);
      } finally {
        this.column = n, this.line = l, e.seek(h), e.release(u);
      }
    }
    captureSimState(e, i, s) {
      e.index = i.index, e.line = this.line, e.column = this.column, e.dfaState = s;
    }
    addDFAEdge(e, i, s, r) {
      if (s === void 0 && (s = null), r === void 0 && (r = null), s === null && r !== null) {
        const n = r.hasSemanticContext;
        if (r.hasSemanticContext = false, s = this.addDFAState(r), n) return s;
      }
      return i < P.MIN_DFA_EDGE || i > P.MAX_DFA_EDGE || (P.debug && console.log("EDGE " + e + " -> " + s + " upon " + i), e.edges === null && (e.edges = []), e.edges[i - P.MIN_DFA_EDGE] = s), s;
    }
    addDFAState(e) {
      const i = new _t(null, e);
      let s = null;
      for (let h = 0; h < e.items.length; h++) {
        const u = e.items[h];
        if (u.state instanceof M) {
          s = u;
          break;
        }
      }
      s !== null && (i.isAcceptState = true, i.lexerActionExecutor = s.lexerActionExecutor, i.prediction = this.atn.ruleToTokenType[s.state.ruleIndex]);
      const r = this.decisionToDFA[this.mode], n = r.states.get(i);
      if (n !== null) return n;
      const l = i;
      return l.stateNumber = r.states.length, e.setReadonly(true), l.configs = e, r.states.add(l), l;
    }
    getDFA(e) {
      return this.decisionToDFA[e];
    }
    getText(e) {
      return e.getText(this.startIndex, e.index - 1);
    }
    consume(e) {
      e.LA(1) === 10 ? (this.line += 1, this.column = 0) : this.column += 1, e.consume();
    }
    getTokenName(e) {
      return e === -1 ? "EOF" : "'" + String.fromCharCode(e) + "'";
    }
  };
  Lt.debug = false, Lt.dfa_debug = false, Lt.MIN_DFA_EDGE = 0, Lt.MAX_DFA_EDGE = 127;
  var es = class {
    constructor(t, e) {
      this.alt = e, this.pred = t;
    }
    toString() {
      return "(" + this.pred + ", " + this.alt + ")";
    }
  }, pn = class {
    constructor() {
      this.data = {};
    }
    get(t) {
      return this.data["k-" + t] || null;
    }
    set(t, e) {
      this.data["k-" + t] = e;
    }
    values() {
      return Object.keys(this.data).filter((t) => t.startsWith("k-")).map((t) => this.data[t], this);
    }
  }, et = { SLL: 0, LL: 1, LL_EXACT_AMBIG_DETECTION: 2, hasSLLConflictTerminatingPrediction: function(t, e) {
    if (et.allConfigsInRuleStopStates(e)) return true;
    if (t === et.SLL && e.hasSemanticContext) {
      const s = new z();
      for (let r = 0; r < e.items.length; r++) {
        let n = e.items[r];
        n = new k({ semanticContext: w.NONE }, n), s.add(n);
      }
      e = s;
    }
    const i = et.getConflictingAltSubsets(e);
    return et.hasConflictingAltSet(i) && !et.hasStateAssociatedWithOneAlt(e);
  }, hasConfigInRuleStopState: function(t) {
    for (let e = 0; e < t.items.length; e++) if (t.items[e].state instanceof M) return true;
    return false;
  }, allConfigsInRuleStopStates: function(t) {
    for (let e = 0; e < t.items.length; e++) if (!(t.items[e].state instanceof M)) return false;
    return true;
  }, resolvesToJustOneViableAlt: function(t) {
    return et.getSingleViableAlt(t);
  }, allSubsetsConflict: function(t) {
    return !et.hasNonConflictingAltSet(t);
  }, hasNonConflictingAltSet: function(t) {
    for (let e = 0; e < t.length; e++) if (t[e].length === 1) return true;
    return false;
  }, hasConflictingAltSet: function(t) {
    for (let e = 0; e < t.length; e++) if (t[e].length > 1) return true;
    return false;
  }, allSubsetsEqual: function(t) {
    let e = null;
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      if (e === null) e = s;
      else if (s !== e) return false;
    }
    return true;
  }, getUniqueAlt: function(t) {
    const e = et.getAlts(t);
    return e.length === 1 ? e.minValue() : N.INVALID_ALT_NUMBER;
  }, getAlts: function(t) {
    const e = new lt();
    return t.map(function(i) {
      e.or(i);
    }), e;
  }, getConflictingAltSubsets: function(t) {
    const e = new Ot();
    return e.hashFunction = function(i) {
      J.hashStuff(i.state.stateNumber, i.context);
    }, e.equalsFunction = function(i, s) {
      return i.state.stateNumber === s.state.stateNumber && i.context.equals(s.context);
    }, t.items.map(function(i) {
      let s = e.get(i);
      s === null && (s = new lt(), e.set(i, s)), s.add(i.alt);
    }), e.getValues();
  }, getStateToAltMap: function(t) {
    const e = new pn();
    return t.items.map(function(i) {
      let s = e.get(i.state);
      s === null && (s = new lt(), e.set(i.state, s)), s.add(i.alt);
    }), e;
  }, hasStateAssociatedWithOneAlt: function(t) {
    const e = et.getStateToAltMap(t).values();
    for (let i = 0; i < e.length; i++) if (e[i].length === 1) return true;
    return false;
  }, getSingleViableAlt: function(t) {
    let e = null;
    for (let i = 0; i < t.length; i++) {
      const s = t[i].minValue();
      if (e === null) e = s;
      else if (e !== s) return N.INVALID_ALT_NUMBER;
    }
    return e;
  } }, D = et, Qt = class extends ft {
    constructor(t, e, i, s, r, n) {
      n = n || t._ctx, s = s || t.getCurrentToken(), i = i || t.getCurrentToken(), e = e || t.getInputStream(), super({ message: "", recognizer: t, input: e, ctx: n }), this.deadEndConfigs = r, this.startToken = i, this.offendingToken = s;
    }
  }, mn = class {
    constructor(t) {
      this.defaultMapCtor = t || Ot, this.cacheMap = new this.defaultMapCtor();
    }
    get(t, e) {
      const i = this.cacheMap.get(t) || null;
      return i === null ? null : i.get(e) || null;
    }
    set(t, e, i) {
      let s = this.cacheMap.get(t) || null;
      s === null && (s = new this.defaultMapCtor(), this.cacheMap.set(t, s)), s.set(e, i);
    }
  }, is = class extends Z {
    constructor(t, e, i, s) {
      super(e, s), this.parser = t, this.decisionToDFA = i, this.predictionMode = D.LL, this._input = null, this._startIndex = 0, this._outerContext = null, this._dfa = null, this.mergeCache = null, this.debug = false, this.debug_closure = false, this.debug_add = false, this.trace_atn_sim = false, this.dfa_debug = false, this.retry_debug = false;
    }
    reset() {
    }
    adaptivePredict(t, e, i) {
      (this.debug || this.trace_atn_sim) && console.log("adaptivePredict decision " + e + " exec LA(1)==" + this.getLookaheadName(t) + " line " + t.LT(1).line + ":" + t.LT(1).column), this._input = t, this._startIndex = t.index, this._outerContext = i;
      const s = this.decisionToDFA[e];
      this._dfa = s;
      const r = t.mark(), n = t.index;
      try {
        let l;
        if (l = s.precedenceDfa ? s.getPrecedenceStartState(this.parser.getPrecedence()) : s.s0, l === null) {
          i === null && (i = pt.EMPTY), this.debug && console.log("predictATN decision " + s.decision + " exec LA(1)==" + this.getLookaheadName(t) + ", outerContext=" + i.toString(this.parser.ruleNames));
          let p = this.computeStartState(s.atnStartState, pt.EMPTY, false);
          s.precedenceDfa ? (s.s0.configs = p, p = this.applyPrecedenceFilter(p), l = this.addDFAState(s, new _t(null, p)), s.setPrecedenceStartState(this.parser.getPrecedence(), l)) : (l = this.addDFAState(s, new _t(null, p)), s.s0 = l);
        }
        const h = this.execATN(s, l, t, n, i);
        return this.debug && console.log("DFA after predictATN: " + s.toString(this.parser.literalNames, this.parser.symbolicNames)), h;
      } finally {
        this._dfa = null, this.mergeCache = null, t.seek(n), t.release(r);
      }
    }
    execATN(t, e, i, s, r) {
      let n;
      (this.debug || this.trace_atn_sim) && console.log("execATN decision " + t.decision + ", DFA state " + e + ", LA(1)==" + this.getLookaheadName(i) + " line " + i.LT(1).line + ":" + i.LT(1).column);
      let l = e;
      this.debug && console.log("s0 = " + e);
      let h = i.LA(1);
      for (; ; ) {
        let u = this.getExistingTargetState(l, h);
        if (u === null && (u = this.computeTargetState(t, l, h)), u === Z.ERROR) {
          const p = this.noViableAlt(i, r, l.configs, s);
          if (i.seek(s), n = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(l.configs, r), n !== N.INVALID_ALT_NUMBER) return n;
          throw p;
        }
        if (u.requiresFullContext && this.predictionMode !== D.SLL) {
          let p = null;
          if (u.predicates !== null) {
            this.debug && console.log("DFA state has preds in DFA sim LL failover");
            const E = i.index;
            if (E !== s && i.seek(s), p = this.evalSemanticContext(u.predicates, r, true), p.length === 1) return this.debug && console.log("Full LL avoided"), p.minValue();
            E !== s && i.seek(E);
          }
          this.dfa_debug && console.log("ctx sensitive state " + r + " in " + u);
          const m = true, y = this.computeStartState(t.atnStartState, r, m);
          return this.reportAttemptingFullContext(t, p, u.configs, s, i.index), n = this.execATNWithFullContext(t, u, y, i, s, r), n;
        }
        if (u.isAcceptState) {
          if (u.predicates === null) return u.prediction;
          const p = i.index;
          i.seek(s);
          const m = this.evalSemanticContext(u.predicates, r, true);
          if (m.length === 0) throw this.noViableAlt(i, r, u.configs, s);
          return m.length === 1 || this.reportAmbiguity(t, u, s, p, false, m, u.configs), m.minValue();
        }
        l = u, h !== x.EOF && (i.consume(), h = i.LA(1));
      }
    }
    getExistingTargetState(t, e) {
      const i = t.edges;
      return i === null ? null : i[e + 1] || null;
    }
    computeTargetState(t, e, i) {
      const s = this.computeReachSet(e.configs, i, false);
      if (s === null) return this.addDFAEdge(t, e, i, Z.ERROR), Z.ERROR;
      let r = new _t(null, s);
      const n = this.getUniqueAlt(s);
      if (this.debug) {
        const l = D.getConflictingAltSubsets(s);
        console.log("SLL altSubSets=" + st(l) + ", configs=" + s + ", predict=" + n + ", allSubsetsConflict=" + D.allSubsetsConflict(l) + ", conflictingAlts=" + this.getConflictingAlts(s));
      }
      return n !== N.INVALID_ALT_NUMBER ? (r.isAcceptState = true, r.configs.uniqueAlt = n, r.prediction = n) : D.hasSLLConflictTerminatingPrediction(this.predictionMode, s) && (r.configs.conflictingAlts = this.getConflictingAlts(s), r.requiresFullContext = true, r.isAcceptState = true, r.prediction = r.configs.conflictingAlts.minValue()), r.isAcceptState && r.configs.hasSemanticContext && (this.predicateDFAState(r, this.atn.getDecisionState(t.decision)), r.predicates !== null && (r.prediction = N.INVALID_ALT_NUMBER)), r = this.addDFAEdge(t, e, i, r), r;
    }
    predicateDFAState(t, e) {
      const i = e.transitions.length, s = this.getConflictingAltsOrUniqueAlt(t.configs), r = this.getPredsForAmbigAlts(s, t.configs, i);
      r !== null ? (t.predicates = this.getPredicatePredictions(s, r), t.prediction = N.INVALID_ALT_NUMBER) : t.prediction = s.minValue();
    }
    execATNWithFullContext(t, e, i, s, r, n) {
      (this.debug || this.trace_atn_sim) && console.log("execATNWithFullContext " + i);
      let l, h = false, u = i;
      s.seek(r);
      let p = s.LA(1), m = -1;
      for (; ; ) {
        if (l = this.computeReachSet(u, p, true), l === null) {
          const E = this.noViableAlt(s, n, u, r);
          s.seek(r);
          const A = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(u, n);
          if (A !== N.INVALID_ALT_NUMBER) return A;
          throw E;
        }
        const y = D.getConflictingAltSubsets(l);
        if (this.debug && console.log("LL altSubSets=" + y + ", predict=" + D.getUniqueAlt(y) + ", resolvesToJustOneViableAlt=" + D.resolvesToJustOneViableAlt(y)), l.uniqueAlt = this.getUniqueAlt(l), l.uniqueAlt !== N.INVALID_ALT_NUMBER) {
          m = l.uniqueAlt;
          break;
        }
        if (this.predictionMode !== D.LL_EXACT_AMBIG_DETECTION) {
          if (m = D.resolvesToJustOneViableAlt(y), m !== N.INVALID_ALT_NUMBER) break;
        } else if (D.allSubsetsConflict(y) && D.allSubsetsEqual(y)) {
          h = true, m = D.getSingleViableAlt(y);
          break;
        }
        u = l, p !== x.EOF && (s.consume(), p = s.LA(1));
      }
      return l.uniqueAlt !== N.INVALID_ALT_NUMBER ? (this.reportContextSensitivity(t, m, l, r, s.index), m) : (this.reportAmbiguity(t, e, r, s.index, h, null, l), m);
    }
    computeReachSet(t, e, i) {
      this.debug && console.log("in computeReachSet, starting closure: " + t), this.mergeCache === null && (this.mergeCache = new mn());
      const s = new z(i);
      let r = null;
      for (let l = 0; l < t.items.length; l++) {
        const h = t.items[l];
        if (this.debug && console.log("testing " + this.getTokenName(e) + " at " + h), h.state instanceof M) (i || e === x.EOF) && (r === null && (r = []), r.push(h), this.debug_add && console.log("added " + h + " to skippedStopStates"));
        else for (let u = 0; u < h.state.transitions.length; u++) {
          const p = h.state.transitions[u], m = this.getReachableTarget(p, e);
          if (m !== null) {
            const y = new k({ state: m }, h);
            s.add(y, this.mergeCache), this.debug_add && console.log("added " + y + " to intermediate");
          }
        }
      }
      let n = null;
      if (r === null && e !== x.EOF && (s.items.length === 1 || this.getUniqueAlt(s) !== N.INVALID_ALT_NUMBER) && (n = s), n === null) {
        n = new z(i);
        const l = new B(), h = e === x.EOF;
        for (let u = 0; u < s.items.length; u++) this.closure(s.items[u], n, l, false, i, h);
      }
      if (e === x.EOF && (n = this.removeAllConfigsNotInRuleStopState(n, n === s)), !(r === null || i && D.hasConfigInRuleStopState(n))) for (let l = 0; l < r.length; l++) n.add(r[l], this.mergeCache);
      return this.trace_atn_sim && console.log("computeReachSet " + t + " -> " + n), n.items.length === 0 ? null : n;
    }
    removeAllConfigsNotInRuleStopState(t, e) {
      if (D.allConfigsInRuleStopStates(t)) return t;
      const i = new z(t.fullCtx);
      for (let s = 0; s < t.items.length; s++) {
        const r = t.items[s];
        if (r.state instanceof M) i.add(r, this.mergeCache);
        else if (e && r.state.epsilonOnlyTransitions && this.atn.nextTokens(r.state).contains(x.EPSILON)) {
          const n = this.atn.ruleToStopState[r.state.ruleIndex];
          i.add(new k({ state: n }, r), this.mergeCache);
        }
      }
      return i;
    }
    computeStartState(t, e, i) {
      const s = Ae(this.atn, e), r = new z(i);
      this.trace_atn_sim && console.log("computeStartState from ATN state " + t + " initialContext=" + s.toString(this.parser));
      for (let n = 0; n < t.transitions.length; n++) {
        const l = t.transitions[n].target, h = new k({ state: l, alt: n + 1, context: s }, null), u = new B();
        this.closure(h, r, u, true, i, false);
      }
      return r;
    }
    applyPrecedenceFilter(t) {
      let e;
      const i = [], s = new z(t.fullCtx);
      for (let r = 0; r < t.items.length; r++) {
        if (e = t.items[r], e.alt !== 1) continue;
        const n = e.semanticContext.evalPrecedence(this.parser, this._outerContext);
        n !== null && (i[e.state.stateNumber] = e.context, n !== e.semanticContext ? s.add(new k({ semanticContext: n }, e), this.mergeCache) : s.add(e, this.mergeCache));
      }
      for (let r = 0; r < t.items.length; r++) if (e = t.items[r], e.alt !== 1) {
        if (!e.precedenceFilterSuppressed) {
          const n = i[e.state.stateNumber] || null;
          if (n !== null && n.equals(e.context)) continue;
        }
        s.add(e, this.mergeCache);
      }
      return s;
    }
    getReachableTarget(t, e) {
      return t.matches(e, 0, this.atn.maxTokenType) ? t.target : null;
    }
    getPredsForAmbigAlts(t, e, i) {
      let s = [];
      for (let n = 0; n < e.items.length; n++) {
        const l = e.items[n];
        t.has(l.alt) && (s[l.alt] = w.orContext(s[l.alt] || null, l.semanticContext));
      }
      let r = 0;
      for (let n = 1; n < i + 1; n++) {
        const l = s[n] || null;
        l === null ? s[n] = w.NONE : l !== w.NONE && (r += 1);
      }
      return r === 0 && (s = null), this.debug && console.log("getPredsForAmbigAlts result " + st(s)), s;
    }
    getPredicatePredictions(t, e) {
      const i = [];
      let s = false;
      for (let r = 1; r < e.length; r++) {
        const n = e[r];
        t !== null && t.has(r) && i.push(new es(n, r)), n !== w.NONE && (s = true);
      }
      return s ? i : null;
    }
    getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(t, e) {
      const i = this.splitAccordingToSemanticValidity(t, e), s = i[0], r = i[1];
      let n = this.getAltThatFinishedDecisionEntryRule(s);
      return n !== N.INVALID_ALT_NUMBER || r.items.length > 0 && (n = this.getAltThatFinishedDecisionEntryRule(r), n !== N.INVALID_ALT_NUMBER) ? n : N.INVALID_ALT_NUMBER;
    }
    getAltThatFinishedDecisionEntryRule(t) {
      const e = [];
      for (let i = 0; i < t.items.length; i++) {
        const s = t.items[i];
        (s.reachesIntoOuterContext > 0 || s.state instanceof M && s.context.hasEmptyPath()) && e.indexOf(s.alt) < 0 && e.push(s.alt);
      }
      return e.length === 0 ? N.INVALID_ALT_NUMBER : Math.min.apply(null, e);
    }
    splitAccordingToSemanticValidity(t, e) {
      const i = new z(t.fullCtx), s = new z(t.fullCtx);
      for (let r = 0; r < t.items.length; r++) {
        const n = t.items[r];
        n.semanticContext !== w.NONE ? n.semanticContext.evaluate(this.parser, e) ? i.add(n) : s.add(n) : i.add(n);
      }
      return [i, s];
    }
    evalSemanticContext(t, e, i) {
      const s = new lt();
      for (let r = 0; r < t.length; r++) {
        const n = t[r];
        if (n.pred === w.NONE) {
          if (s.add(n.alt), !i) break;
          continue;
        }
        const l = n.pred.evaluate(this.parser, e);
        if ((this.debug || this.dfa_debug) && console.log("eval pred " + n + "=" + l), l && ((this.debug || this.dfa_debug) && console.log("PREDICT " + n.alt), s.add(n.alt), !i)) break;
      }
      return s;
    }
    closure(t, e, i, s, r, n) {
      this.closureCheckingStopState(t, e, i, s, r, 0, n);
    }
    closureCheckingStopState(t, e, i, s, r, n, l) {
      if ((this.trace_atn_sim || this.debug_closure) && console.log("closure(" + t.toString(this.parser, true) + ")"), t.state instanceof M) {
        if (!t.context.isEmpty()) {
          for (let h = 0; h < t.context.length; h++) {
            if (t.context.getReturnState(h) === R.EMPTY_RETURN_STATE) {
              if (r) {
                e.add(new k({ state: t.state, context: R.EMPTY }, t), this.mergeCache);
                continue;
              }
              this.debug && console.log("FALLING off rule " + this.getRuleName(t.state.ruleIndex)), this.closure_(t, e, i, s, r, n, l);
              continue;
            }
            const u = this.atn.states[t.context.getReturnState(h)], p = t.context.getParent(h), m = { state: u, alt: t.alt, context: p, semanticContext: t.semanticContext }, y = new k(m, null);
            y.reachesIntoOuterContext = t.reachesIntoOuterContext, this.closureCheckingStopState(y, e, i, s, r, n - 1, l);
          }
          return;
        }
        if (r) return void e.add(t, this.mergeCache);
        this.debug && console.log("FALLING off rule " + this.getRuleName(t.state.ruleIndex));
      }
      this.closure_(t, e, i, s, r, n, l);
    }
    closure_(t, e, i, s, r, n, l) {
      const h = t.state;
      h.epsilonOnlyTransitions || e.add(t, this.mergeCache);
      for (let u = 0; u < h.transitions.length; u++) {
        if (u === 0 && this.canDropLoopEntryEdgeInLeftRecursiveRule(t)) continue;
        const p = h.transitions[u], m = s && !(p instanceof $i), y = this.getEpsilonTarget(t, p, m, n === 0, r, l);
        if (y !== null) {
          let E = n;
          if (t.state instanceof M) {
            if (this._dfa !== null && this._dfa.precedenceDfa && p.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex && (y.precedenceFilterSuppressed = true), y.reachesIntoOuterContext += 1, i.add(y) !== y) continue;
            e.dipsIntoOuterContext = true, E -= 1, this.debug && console.log("dips into outer ctx: " + y);
          } else {
            if (!p.isEpsilon && i.add(y) !== y) continue;
            p instanceof Yt && E >= 0 && (E += 1);
          }
          this.closureCheckingStopState(y, e, i, m, r, E, l);
        }
      }
    }
    canDropLoopEntryEdgeInLeftRecursiveRule(t) {
      const e = t.state;
      if (e.stateType !== T.STAR_LOOP_ENTRY || e.stateType !== T.STAR_LOOP_ENTRY || !e.isPrecedenceDecision || t.context.isEmpty() || t.context.hasEmptyPath()) return false;
      const i = t.context.length;
      for (let n = 0; n < i; n++) if (this.atn.states[t.context.getReturnState(n)].ruleIndex !== e.ruleIndex) return false;
      const s = e.transitions[0].target.endState.stateNumber, r = this.atn.states[s];
      for (let n = 0; n < i; n++) {
        const l = t.context.getReturnState(n), h = this.atn.states[l];
        if (h.transitions.length !== 1 || !h.transitions[0].isEpsilon) return false;
        const u = h.transitions[0].target;
        if (!(h.stateType === T.BLOCK_END && u === e || h === r || u === r || u.stateType === T.BLOCK_END && u.transitions.length === 1 && u.transitions[0].isEpsilon && u.transitions[0].target === e)) return false;
      }
      return true;
    }
    getRuleName(t) {
      return this.parser !== null && t >= 0 ? this.parser.ruleNames[t] : "<rule " + t + ">";
    }
    getEpsilonTarget(t, e, i, s, r, n) {
      switch (e.serializationType) {
        case g.RULE:
          return this.ruleTransition(t, e);
        case g.PRECEDENCE:
          return this.precedenceTransition(t, e, i, s, r);
        case g.PREDICATE:
          return this.predTransition(t, e, i, s, r);
        case g.ACTION:
          return this.actionTransition(t, e);
        case g.EPSILON:
          return new k({ state: e.target }, t);
        case g.ATOM:
        case g.RANGE:
        case g.SET:
          return n && e.matches(x.EOF, 0, 1) ? new k({ state: e.target }, t) : null;
        default:
          return null;
      }
    }
    actionTransition(t, e) {
      if (this.debug) {
        const i = e.actionIndex === -1 ? 65535 : e.actionIndex;
        console.log("ACTION edge " + e.ruleIndex + ":" + i);
      }
      return new k({ state: e.target }, t);
    }
    precedenceTransition(t, e, i, s, r) {
      this.debug && (console.log("PRED (collectPredicates=" + i + ") " + e.precedence + ">=_p, ctx dependent=true"), this.parser !== null && console.log("context surrounding pred is " + st(this.parser.getRuleInvocationStack())));
      let n = null;
      if (i && s) if (r) {
        const l = this._input.index;
        this._input.seek(this._startIndex);
        const h = e.getPredicate().evaluate(this.parser, this._outerContext);
        this._input.seek(l), h && (n = new k({ state: e.target }, t));
      } else {
        const l = w.andContext(t.semanticContext, e.getPredicate());
        n = new k({ state: e.target, semanticContext: l }, t);
      }
      else n = new k({ state: e.target }, t);
      return this.debug && console.log("config from pred transition=" + n), n;
    }
    predTransition(t, e, i, s, r) {
      this.debug && (console.log("PRED (collectPredicates=" + i + ") " + e.ruleIndex + ":" + e.predIndex + ", ctx dependent=" + e.isCtxDependent), this.parser !== null && console.log("context surrounding pred is " + st(this.parser.getRuleInvocationStack())));
      let n = null;
      if (i && (e.isCtxDependent && s || !e.isCtxDependent)) if (r) {
        const l = this._input.index;
        this._input.seek(this._startIndex);
        const h = e.getPredicate().evaluate(this.parser, this._outerContext);
        this._input.seek(l), h && (n = new k({ state: e.target }, t));
      } else {
        const l = w.andContext(t.semanticContext, e.getPredicate());
        n = new k({ state: e.target, semanticContext: l }, t);
      }
      else n = new k({ state: e.target }, t);
      return this.debug && console.log("config from pred transition=" + n), n;
    }
    ruleTransition(t, e) {
      this.debug && console.log("CALL rule " + this.getRuleName(e.target.ruleIndex) + ", ctx=" + t.context);
      const i = e.followState, s = W.create(t.context, i.stateNumber);
      return new k({ state: e.target, context: s }, t);
    }
    getConflictingAlts(t) {
      const e = D.getConflictingAltSubsets(t);
      return D.getAlts(e);
    }
    getConflictingAltsOrUniqueAlt(t) {
      let e = null;
      return t.uniqueAlt !== N.INVALID_ALT_NUMBER ? (e = new lt(), e.add(t.uniqueAlt)) : e = t.conflictingAlts, e;
    }
    getTokenName(t) {
      if (t === x.EOF) return "EOF";
      if (this.parser !== null && this.parser.literalNames !== null) {
        if (!(t >= this.parser.literalNames.length && t >= this.parser.symbolicNames.length)) return (this.parser.literalNames[t] || this.parser.symbolicNames[t]) + "<" + t + ">";
        console.log(t + " ttype out of range: " + this.parser.literalNames), console.log("" + this.parser.getInputStream().getTokens());
      }
      return "" + t;
    }
    getLookaheadName(t) {
      return this.getTokenName(t.LA(1));
    }
    dumpDeadEndConfigs(t) {
      console.log("dead end configs: ");
      const e = t.getDeadEndConfigs();
      for (let i = 0; i < e.length; i++) {
        const s = e[i];
        let r = "no edges";
        if (s.state.transitions.length > 0) {
          const n = s.state.transitions[0];
          n instanceof Oe ? r = "Atom " + this.getTokenName(n.label) : n instanceof Ce && (r = (n instanceof Le ? "~" : "") + "Set " + n.set);
        }
        console.error(s.toString(this.parser, true) + ":" + r);
      }
    }
    noViableAlt(t, e, i, s) {
      return new Qt(this.parser, t, t.get(s), t.LT(1), i, e);
    }
    getUniqueAlt(t) {
      let e = N.INVALID_ALT_NUMBER;
      for (let i = 0; i < t.items.length; i++) {
        const s = t.items[i];
        if (e === N.INVALID_ALT_NUMBER) e = s.alt;
        else if (s.alt !== e) return N.INVALID_ALT_NUMBER;
      }
      return e;
    }
    addDFAEdge(t, e, i, s) {
      if (this.debug && console.log("EDGE " + e + " -> " + s + " upon " + this.getTokenName(i)), s === null) return null;
      if (s = this.addDFAState(t, s), e === null || i < -1 || i > this.atn.maxTokenType) return s;
      if (e.edges === null && (e.edges = []), e.edges[i + 1] = s, this.debug) {
        const r = this.parser === null ? null : this.parser.literalNames, n = this.parser === null ? null : this.parser.symbolicNames;
        console.log(`DFA=
` + t.toString(r, n));
      }
      return s;
    }
    addDFAState(t, e) {
      if (e === Z.ERROR) return e;
      const i = t.states.get(e);
      return i !== null ? (this.trace_atn_sim && console.log("addDFAState " + e + " exists"), i) : (e.stateNumber = t.states.length, e.configs.readOnly || (e.configs.optimizeConfigs(this), e.configs.setReadonly(true)), this.trace_atn_sim && console.log("addDFAState new " + e), t.states.add(e), this.debug && console.log("adding new DFA state: " + e), e);
    }
    reportAttemptingFullContext(t, e, i, s, r) {
      if (this.debug || this.retry_debug) {
        const n = new S(s, r + 1);
        console.log("reportAttemptingFullContext decision=" + t.decision + ":" + i + ", input=" + this.parser.getTokenStream().getText(n));
      }
      this.parser !== null && this.parser.getErrorListenerDispatch().reportAttemptingFullContext(this.parser, t, s, r, e, i);
    }
    reportContextSensitivity(t, e, i, s, r) {
      if (this.debug || this.retry_debug) {
        const n = new S(s, r + 1);
        console.log("reportContextSensitivity decision=" + t.decision + ":" + i + ", input=" + this.parser.getTokenStream().getText(n));
      }
      this.parser !== null && this.parser.getErrorListenerDispatch().reportContextSensitivity(this.parser, t, s, r, e, i);
    }
    reportAmbiguity(t, e, i, s, r, n, l) {
      if (this.debug || this.retry_debug) {
        const h = new S(i, s + 1);
        console.log("reportAmbiguity " + n + ":" + l + ", input=" + this.parser.getTokenStream().getText(h));
      }
      this.parser !== null && this.parser.getErrorListenerDispatch().reportAmbiguity(this.parser, t, i, s, r, n, l);
    }
  }, ss = class {
    constructor() {
      this.cache = new Ot();
    }
    add(t) {
      if (t === R.EMPTY) return R.EMPTY;
      const e = this.cache.get(t) || null;
      return e !== null ? e : (this.cache.set(t, t), t);
    }
    get(t) {
      return this.cache.get(t) || null;
    }
    get length() {
      return this.cache.length;
    }
  }, fn = { ATN: N, ATNDeserializer: He, LexerATNSimulator: Lt, ParserATNSimulator: is, PredictionMode: D, PredictionContextCache: ss }, ze = class {
    constructor(t, e, i) {
      this.dfa = t, this.literalNames = e || [], this.symbolicNames = i || [];
    }
    toString() {
      if (this.dfa.s0 === null) return null;
      let t = "";
      const e = this.dfa.sortedStates();
      for (let i = 0; i < e.length; i++) {
        const s = e[i];
        if (s.edges !== null) {
          const r = s.edges.length;
          for (let n = 0; n < r; n++) {
            const l = s.edges[n] || null;
            l !== null && l.stateNumber !== 2147483647 && (t = t.concat(this.getStateString(s)), t = t.concat("-"), t = t.concat(this.getEdgeLabel(n)), t = t.concat("->"), t = t.concat(this.getStateString(l)), t = t.concat(`
`));
          }
        }
      }
      return t.length === 0 ? null : t;
    }
    getEdgeLabel(t) {
      return t === 0 ? "EOF" : this.literalNames !== null || this.symbolicNames !== null ? this.literalNames[t - 1] || this.symbolicNames[t - 1] : String.fromCharCode(t - 1);
    }
    getStateString(t) {
      const e = (t.isAcceptState ? ":" : "") + "s" + t.stateNumber + (t.requiresFullContext ? "^" : "");
      return t.isAcceptState ? t.predicates !== null ? e + "=>" + st(t.predicates) : e + "=>" + t.prediction.toString() : e;
    }
  }, rs = class extends ze {
    constructor(t) {
      super(t, null);
    }
    getEdgeLabel(t) {
      return "'" + String.fromCharCode(t) + "'";
    }
  }, ns = class {
    constructor(t, e) {
      if (e === void 0 && (e = 0), this.atnStartState = t, this.decision = e, this._states = new B(), this.s0 = null, this.precedenceDfa = false, t instanceof mt && t.isPrecedenceDecision) {
        this.precedenceDfa = true;
        const i = new _t(null, new z());
        i.edges = [], i.isAcceptState = false, i.requiresFullContext = false, this.s0 = i;
      }
    }
    getPrecedenceStartState(t) {
      if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
      return t < 0 || t >= this.s0.edges.length ? null : this.s0.edges[t] || null;
    }
    setPrecedenceStartState(t, e) {
      if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
      t < 0 || (this.s0.edges[t] = e);
    }
    setPrecedenceDfa(t) {
      if (this.precedenceDfa !== t) {
        if (this._states = new B(), t) {
          const e = new _t(null, new z());
          e.edges = [], e.isAcceptState = false, e.requiresFullContext = false, this.s0 = e;
        } else this.s0 = null;
        this.precedenceDfa = t;
      }
    }
    sortedStates() {
      return this._states.values().sort(function(t, e) {
        return t.stateNumber - e.stateNumber;
      });
    }
    toString(t, e) {
      return t = t || null, e = e || null, this.s0 === null ? "" : new ze(this, t, e).toString();
    }
    toLexerString() {
      return this.s0 === null ? "" : new rs(this).toString();
    }
    get states() {
      return this._states;
    }
  }, _n = { DFA: ns, DFASerializer: ze, LexerDFASerializer: rs, PredPrediction: es }, xn = { PredictionContext: R }, yn = { Interval: S, IntervalSet: q }, je = class {
    visitTerminal(t) {
    }
    visitErrorNode(t) {
    }
    enterEveryRule(t) {
    }
    exitEveryRule(t) {
    }
  }, as = class {
    visit(t) {
      return Array.isArray(t) ? t.map(function(e) {
        return e.accept(this);
      }, this) : t.accept(this);
    }
    visitChildren(t) {
      return t.children ? this.visit(t.children) : null;
    }
    visitTerminal(t) {
    }
    visitErrorNode(t) {
    }
  }, Zt = class {
    walk(t, e) {
      if (e instanceof Gt || e.isErrorNode !== void 0 && e.isErrorNode()) t.visitErrorNode(e);
      else if (e instanceof Q) t.visitTerminal(e);
      else {
        this.enterRule(t, e);
        for (let i = 0; i < e.getChildCount(); i++) {
          const s = e.getChild(i);
          this.walk(t, s);
        }
        this.exitRule(t, e);
      }
    }
    enterRule(t, e) {
      const i = e.ruleContext;
      t.enterEveryRule(i), i.enterRule(t);
    }
    exitRule(t, e) {
      const i = e.ruleContext;
      i.exitRule(t), t.exitEveryRule(i);
    }
  };
  Zt.DEFAULT = new Zt();
  var gn = { Trees: zi, RuleNode: kt, ErrorNode: Gt, TerminalNode: Q, ParseTreeListener: je, ParseTreeVisitor: as, ParseTreeWalker: Zt }, Mt = class extends ft {
    constructor(t) {
      super({ message: "", recognizer: t, input: t.getInputStream(), ctx: t._ctx }), this.offendingToken = t.getCurrentToken();
    }
  }, qe = class extends ft {
    constructor(t, e, i) {
      super({ message: Tn(e, i || null), recognizer: t, input: t.getInputStream(), ctx: t._ctx });
      const s = t._interp.atn.states[t.state].transitions[0];
      s instanceof Xi ? (this.ruleIndex = s.ruleIndex, this.predicateIndex = s.predIndex) : (this.ruleIndex = 0, this.predicateIndex = 0), this.predicate = e, this.offendingToken = t.getCurrentToken();
    }
  };
  function Tn(t, e) {
    return e !== null ? e : "failed predicate: {" + t + "}?";
  }
  var ls = class extends Ft {
    constructor(t) {
      super(), t = t || true, this.exactOnly = t;
    }
    reportAmbiguity(t, e, i, s, r, n, l) {
      if (this.exactOnly && !r) return;
      const h = "reportAmbiguity d=" + this.getDecisionDescription(t, e) + ": ambigAlts=" + this.getConflictingAlts(n, l) + ", input='" + t.getTokenStream().getText(new S(i, s)) + "'";
      t.notifyErrorListeners(h);
    }
    reportAttemptingFullContext(t, e, i, s, r, n) {
      const l = "reportAttemptingFullContext d=" + this.getDecisionDescription(t, e) + ", input='" + t.getTokenStream().getText(new S(i, s)) + "'";
      t.notifyErrorListeners(l);
    }
    reportContextSensitivity(t, e, i, s, r, n) {
      const l = "reportContextSensitivity d=" + this.getDecisionDescription(t, e) + ", input='" + t.getTokenStream().getText(new S(i, s)) + "'";
      t.notifyErrorListeners(l);
    }
    getDecisionDescription(t, e) {
      const i = e.decision, s = e.atnStartState.ruleIndex, r = t.ruleNames;
      if (s < 0 || s >= r.length) return "" + i;
      const n = r[s] || null;
      return n === null || n.length === 0 ? "" + i : `${i} (${n})`;
    }
    getConflictingAlts(t, e) {
      if (t !== null) return t;
      const i = new lt();
      for (let s = 0; s < e.items.length; s++) i.add(e.items[s].alt);
      return `{${i.values().join(", ")}}`;
    }
  }, En = class Vr extends Error {
    constructor() {
      super(), Error.captureStackTrace(this, Vr);
    }
  }, vn = class {
    reset(t) {
    }
    recoverInline(t) {
    }
    recover(t, e) {
    }
    sync(t) {
    }
    inErrorRecoveryMode(t) {
    }
    reportError(t) {
    }
  }, te = class extends vn {
    constructor() {
      super(), this.errorRecoveryMode = false, this.lastErrorIndex = -1, this.lastErrorStates = null, this.nextTokensContext = null, this.nextTokenState = 0;
    }
    reset(t) {
      this.endErrorCondition(t);
    }
    beginErrorCondition(t) {
      this.errorRecoveryMode = true;
    }
    inErrorRecoveryMode(t) {
      return this.errorRecoveryMode;
    }
    endErrorCondition(t) {
      this.errorRecoveryMode = false, this.lastErrorStates = null, this.lastErrorIndex = -1;
    }
    reportMatch(t) {
      this.endErrorCondition(t);
    }
    reportError(t, e) {
      this.inErrorRecoveryMode(t) || (this.beginErrorCondition(t), e instanceof Qt ? this.reportNoViableAlternative(t, e) : e instanceof Mt ? this.reportInputMismatch(t, e) : e instanceof qe ? this.reportFailedPredicate(t, e) : (console.log("unknown recognition error type: " + e.constructor.name), console.log(e.stack), t.notifyErrorListeners(e.getOffendingToken(), e.getMessage(), e)));
    }
    recover(t, e) {
      this.lastErrorIndex === t.getInputStream().index && this.lastErrorStates !== null && this.lastErrorStates.indexOf(t.state) >= 0 && t.consume(), this.lastErrorIndex = t._input.index, this.lastErrorStates === null && (this.lastErrorStates = []), this.lastErrorStates.push(t.state);
      const i = this.getErrorRecoverySet(t);
      this.consumeUntil(t, i);
    }
    sync(t) {
      if (this.inErrorRecoveryMode(t)) return;
      const e = t._interp.atn.states[t.state], i = t.getTokenStream().LA(1), s = t.atn.nextTokens(e);
      if (s.contains(i)) return this.nextTokensContext = null, void (this.nextTokenState = T.INVALID_STATE_NUMBER);
      if (s.contains(x.EPSILON)) this.nextTokensContext === null && (this.nextTokensContext = t._ctx, this.nextTokensState = t._stateNumber);
      else switch (e.stateType) {
        case T.BLOCK_START:
        case T.STAR_BLOCK_START:
        case T.PLUS_BLOCK_START:
        case T.STAR_LOOP_ENTRY:
          if (this.singleTokenDeletion(t) !== null) return;
          throw new Mt(t);
        case T.PLUS_LOOP_BACK:
        case T.STAR_LOOP_BACK: {
          this.reportUnwantedToken(t);
          const r = new q();
          r.addSet(t.getExpectedTokens());
          const n = r.addSet(this.getErrorRecoverySet(t));
          this.consumeUntil(t, n);
        }
      }
    }
    reportNoViableAlternative(t, e) {
      const i = t.getTokenStream();
      let s;
      s = i !== null ? e.startToken.type === x.EOF ? "<EOF>" : i.getText(new S(e.startToken.tokenIndex, e.offendingToken.tokenIndex)) : "<unknown input>";
      const r = "no viable alternative at input " + this.escapeWSAndQuote(s);
      t.notifyErrorListeners(r, e.offendingToken, e);
    }
    reportInputMismatch(t, e) {
      const i = "mismatched input " + this.getTokenErrorDisplay(e.offendingToken) + " expecting " + e.getExpectedTokens().toString(t.literalNames, t.symbolicNames);
      t.notifyErrorListeners(i, e.offendingToken, e);
    }
    reportFailedPredicate(t, e) {
      const i = "rule " + t.ruleNames[t._ctx.ruleIndex] + " " + e.message;
      t.notifyErrorListeners(i, e.offendingToken, e);
    }
    reportUnwantedToken(t) {
      if (this.inErrorRecoveryMode(t)) return;
      this.beginErrorCondition(t);
      const e = t.getCurrentToken(), i = "extraneous input " + this.getTokenErrorDisplay(e) + " expecting " + this.getExpectedTokens(t).toString(t.literalNames, t.symbolicNames);
      t.notifyErrorListeners(i, e, null);
    }
    reportMissingToken(t) {
      if (this.inErrorRecoveryMode(t)) return;
      this.beginErrorCondition(t);
      const e = t.getCurrentToken(), i = "missing " + this.getExpectedTokens(t).toString(t.literalNames, t.symbolicNames) + " at " + this.getTokenErrorDisplay(e);
      t.notifyErrorListeners(i, e, null);
    }
    recoverInline(t) {
      const e = this.singleTokenDeletion(t);
      if (e !== null) return t.consume(), e;
      if (this.singleTokenInsertion(t)) return this.getMissingSymbol(t);
      throw new Mt(t);
    }
    singleTokenInsertion(t) {
      const e = t.getTokenStream().LA(1), i = t._interp.atn, s = i.states[t.state].transitions[0].target;
      return !!i.nextTokens(s, t._ctx).contains(e) && (this.reportMissingToken(t), true);
    }
    singleTokenDeletion(t) {
      const e = t.getTokenStream().LA(2);
      if (this.getExpectedTokens(t).contains(e)) {
        this.reportUnwantedToken(t), t.consume();
        const i = t.getCurrentToken();
        return this.reportMatch(t), i;
      }
      return null;
    }
    getMissingSymbol(t) {
      const e = t.getCurrentToken(), i = this.getExpectedTokens(t).first();
      let s;
      s = i === x.EOF ? "<missing EOF>" : "<missing " + t.literalNames[i] + ">";
      let r = e;
      const n = t.getTokenStream().LT(-1);
      return r.type === x.EOF && n !== null && (r = n), t.getTokenFactory().create(r.source, i, s, x.DEFAULT_CHANNEL, -1, -1, r.line, r.column);
    }
    getExpectedTokens(t) {
      return t.getExpectedTokens();
    }
    getTokenErrorDisplay(t) {
      if (t === null) return "<no token>";
      let e = t.text;
      return e === null && (e = t.type === x.EOF ? "<EOF>" : "<" + t.type + ">"), this.escapeWSAndQuote(e);
    }
    escapeWSAndQuote(t) {
      return "'" + (t = (t = (t = t.replace(/\n/g, "\\n")).replace(/\r/g, "\\r")).replace(/\t/g, "\\t")) + "'";
    }
    getErrorRecoverySet(t) {
      const e = t._interp.atn;
      let i = t._ctx;
      const s = new q();
      for (; i !== null && i.invokingState >= 0; ) {
        const r = e.states[i.invokingState].transitions[0], n = e.nextTokens(r.followState);
        s.addSet(n), i = i.parentCtx;
      }
      return s.removeOne(x.EPSILON), s;
    }
    consumeUntil(t, e) {
      let i = t.getTokenStream().LA(1);
      for (; i !== x.EOF && !e.contains(i); ) t.consume(), i = t.getTokenStream().LA(1);
    }
  }, hs = class extends te {
    constructor() {
      super();
    }
    recover(t, e) {
      let i = t._ctx;
      for (; i !== null; ) i.exception = e, i = i.parentCtx;
      throw new En(e);
    }
    recoverInline(t) {
      this.recover(t, new Mt(t));
    }
    sync(t) {
    }
  }, Rn = { RecognitionException: ft, NoViableAltException: Qt, LexerNoViableAltException: Ve, InputMismatchException: Mt, FailedPredicateException: qe, DiagnosticErrorListener: ls, BailErrorStrategy: hs, DefaultErrorStrategy: te, ErrorListener: Ft }, Kt = class {
    constructor(t, e) {
      if (this.name = "<empty>", this.strdata = t, this.decodeToUnicodeCodePoints = e || false, this._index = 0, this.data = [], this.decodeToUnicodeCodePoints) for (let i = 0; i < this.strdata.length; ) {
        const s = this.strdata.codePointAt(i);
        this.data.push(s), i += s <= 65535 ? 1 : 2;
      }
      else {
        this.data = new Array(this.strdata.length);
        for (let i = 0; i < this.strdata.length; i++) this.data[i] = this.strdata.charCodeAt(i);
      }
      this._size = this.data.length;
    }
    reset() {
      this._index = 0;
    }
    consume() {
      if (this._index >= this._size) throw "cannot consume EOF";
      this._index += 1;
    }
    LA(t) {
      if (t === 0) return 0;
      t < 0 && (t += 1);
      const e = this._index + t - 1;
      return e < 0 || e >= this._size ? x.EOF : this.data[e];
    }
    LT(t) {
      return this.LA(t);
    }
    mark() {
      return -1;
    }
    release(t) {
    }
    seek(t) {
      t <= this._index ? this._index = t : this._index = Math.min(t, this._size);
    }
    getText(t, e) {
      if (e >= this._size && (e = this._size - 1), t >= this._size) return "";
      if (this.decodeToUnicodeCodePoints) {
        let i = "";
        for (let s = t; s <= e; s++) i += String.fromCodePoint(this.data[s]);
        return i;
      }
      return this.strdata.slice(t, e + 1);
    }
    toString() {
      return this.strdata;
    }
    get index() {
      return this._index;
    }
    get size() {
      return this._size;
    }
  }, Vt = class extends Kt {
    constructor(t, e) {
      super(t, e);
    }
  }, os = (0, qr.createRequire)(U)("fs"), us = typeof process < "u" && process.versions != null && process.versions.node != null, ee = class extends Vt {
    static fromPath(t, e, i) {
      if (!us) throw new Error("FileStream is only available when running in Node!");
      os.readFile(t, e, function(s, r) {
        let n = null;
        r !== null && (n = new Kt(r, true)), i(s, n);
      });
    }
    constructor(t, e, i) {
      if (!us) throw new Error("FileStream is only available when running in Node!");
      super(os.readFileSync(t, e || "utf-8"), i), this.fileName = t;
    }
  }, cs = { fromString: function(t) {
    return new Kt(t, true);
  }, fromBlob: function(t, e, i, s) {
    const r = new window.FileReader();
    r.onload = function(n) {
      const l = new Kt(n.target.result, true);
      i(l);
    }, r.onerror = s, r.readAsText(t, e);
  }, fromBuffer: function(t, e) {
    return new Kt(t.toString(e), true);
  }, fromPath: function(t, e, i) {
    ee.fromPath(t, e, i);
  }, fromPathSync: function(t, e) {
    return new ee(t, e);
  } }, Cn = { arrayToString: st, stringToCharArray: function(t) {
    let e = new Uint16Array(t.length);
    for (let i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
    return e;
  } }, Ln = class {
  }, ds = class extends Ln {
    constructor(t) {
      super(), this.tokenSource = t, this.tokens = [], this.index = -1, this.fetchedEOF = false;
    }
    mark() {
      return 0;
    }
    release(t) {
    }
    reset() {
      this.seek(0);
    }
    seek(t) {
      this.lazyInit(), this.index = this.adjustSeekIndex(t);
    }
    get size() {
      return this.tokens.length;
    }
    get(t) {
      return this.lazyInit(), this.tokens[t];
    }
    consume() {
      let t = false;
      if (t = this.index >= 0 && (this.fetchedEOF ? this.index < this.tokens.length - 1 : this.index < this.tokens.length), !t && this.LA(1) === x.EOF) throw "cannot consume EOF";
      this.sync(this.index + 1) && (this.index = this.adjustSeekIndex(this.index + 1));
    }
    sync(t) {
      const e = t - this.tokens.length + 1;
      return !(e > 0) || this.fetch(e) >= e;
    }
    fetch(t) {
      if (this.fetchedEOF) return 0;
      for (let e = 0; e < t; e++) {
        const i = this.tokenSource.nextToken();
        if (i.tokenIndex = this.tokens.length, this.tokens.push(i), i.type === x.EOF) return this.fetchedEOF = true, e + 1;
      }
      return t;
    }
    getTokens(t, e, i) {
      if (i === void 0 && (i = null), t < 0 || e < 0) return null;
      this.lazyInit();
      const s = [];
      e >= this.tokens.length && (e = this.tokens.length - 1);
      for (let r = t; r < e; r++) {
        const n = this.tokens[r];
        if (n.type === x.EOF) break;
        (i === null || i.contains(n.type)) && s.push(n);
      }
      return s;
    }
    LA(t) {
      return this.LT(t).type;
    }
    LB(t) {
      return this.index - t < 0 ? null : this.tokens[this.index - t];
    }
    LT(t) {
      if (this.lazyInit(), t === 0) return null;
      if (t < 0) return this.LB(-t);
      const e = this.index + t - 1;
      return this.sync(e), e >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[e];
    }
    adjustSeekIndex(t) {
      return t;
    }
    lazyInit() {
      this.index === -1 && this.setup();
    }
    setup() {
      this.sync(0), this.index = this.adjustSeekIndex(0);
    }
    setTokenSource(t) {
      this.tokenSource = t, this.tokens = [], this.index = -1, this.fetchedEOF = false;
    }
    nextTokenOnChannel(t, e) {
      if (this.sync(t), t >= this.tokens.length) return -1;
      let i = this.tokens[t];
      for (; i.channel !== this.channel; ) {
        if (i.type === x.EOF) return -1;
        t += 1, this.sync(t), i = this.tokens[t];
      }
      return t;
    }
    previousTokenOnChannel(t, e) {
      for (; t >= 0 && this.tokens[t].channel !== e; ) t -= 1;
      return t;
    }
    getHiddenTokensToRight(t, e) {
      if (e === void 0 && (e = -1), this.lazyInit(), t < 0 || t >= this.tokens.length) throw t + " not in 0.." + this.tokens.length - 1;
      const i = this.nextTokenOnChannel(t + 1, F.DEFAULT_TOKEN_CHANNEL), s = t + 1, r = i === -1 ? this.tokens.length - 1 : i;
      return this.filterForChannel(s, r, e);
    }
    getHiddenTokensToLeft(t, e) {
      if (e === void 0 && (e = -1), this.lazyInit(), t < 0 || t >= this.tokens.length) throw t + " not in 0.." + this.tokens.length - 1;
      const i = this.previousTokenOnChannel(t - 1, F.DEFAULT_TOKEN_CHANNEL);
      if (i === t - 1) return null;
      const s = i + 1, r = t - 1;
      return this.filterForChannel(s, r, e);
    }
    filterForChannel(t, e, i) {
      const s = [];
      for (let r = t; r < e + 1; r++) {
        const n = this.tokens[r];
        i === -1 ? n.channel !== F.DEFAULT_TOKEN_CHANNEL && s.push(n) : n.channel === i && s.push(n);
      }
      return s.length === 0 ? null : s;
    }
    getSourceName() {
      return this.tokenSource.getSourceName();
    }
    getText(t) {
      this.lazyInit(), this.fill(), t || (t = new S(0, this.tokens.length - 1));
      let e = t.start;
      e instanceof x && (e = e.tokenIndex);
      let i = t.stop;
      if (i instanceof x && (i = i.tokenIndex), e === null || i === null || e < 0 || i < 0) return "";
      i >= this.tokens.length && (i = this.tokens.length - 1);
      let s = "";
      for (let r = e; r < i + 1; r++) {
        const n = this.tokens[r];
        if (n.type === x.EOF) break;
        s += n.text;
      }
      return s;
    }
    fill() {
      for (this.lazyInit(); this.fetch(1e3) === 1e3; ) ;
    }
  };
  Object.defineProperty(ds, "size", { get: function() {
    return this.tokens.length;
  } });
  var ps = class extends ds {
    constructor(t, e) {
      super(t), this.channel = e === void 0 ? x.DEFAULT_CHANNEL : e;
    }
    adjustSeekIndex(t) {
      return this.nextTokenOnChannel(t, this.channel);
    }
    LB(t) {
      if (t === 0 || this.index - t < 0) return null;
      let e = this.index, i = 1;
      for (; i <= t; ) e = this.previousTokenOnChannel(e - 1, this.channel), i += 1;
      return e < 0 ? null : this.tokens[e];
    }
    LT(t) {
      if (this.lazyInit(), t === 0) return null;
      if (t < 0) return this.LB(-t);
      let e = this.index, i = 1;
      for (; i < t; ) this.sync(e + 1) && (e = this.nextTokenOnChannel(e + 1, this.channel)), i += 1;
      return this.tokens[e];
    }
    getNumberOfOnChannelTokens() {
      let t = 0;
      this.fill();
      for (let e = 0; e < this.tokens.length; e++) {
        const i = this.tokens[e];
        if (i.channel === this.channel && (t += 1), i.type === x.EOF) break;
      }
      return t;
    }
  }, bn = class extends je {
    constructor(t) {
      super(), this.parser = t;
    }
    enterEveryRule(t) {
      console.log("enter   " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
    }
    visitTerminal(t) {
      console.log("consume " + t.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]);
    }
    exitEveryRule(t) {
      console.log("exit    " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
    }
  }, We = class extends Xt {
    constructor(t) {
      super(), this._input = null, this._errHandler = new te(), this._precedenceStack = [], this._precedenceStack.push(0), this._ctx = null, this.buildParseTrees = true, this._tracer = null, this._parseListeners = null, this._syntaxErrors = 0, this.setInputStream(t);
    }
    reset() {
      this._input !== null && this._input.seek(0), this._errHandler.reset(this), this._ctx = null, this._syntaxErrors = 0, this.setTrace(false), this._precedenceStack = [], this._precedenceStack.push(0), this._interp !== null && this._interp.reset();
    }
    match(t) {
      let e = this.getCurrentToken();
      return e.type === t ? (this._errHandler.reportMatch(this), this.consume()) : (e = this._errHandler.recoverInline(this), this.buildParseTrees && e.tokenIndex === -1 && this._ctx.addErrorNode(e)), e;
    }
    matchWildcard() {
      let t = this.getCurrentToken();
      return t.type > 0 ? (this._errHandler.reportMatch(this), this.consume()) : (t = this._errHandler.recoverInline(this), this.buildParseTrees && t.tokenIndex === -1 && this._ctx.addErrorNode(t)), t;
    }
    getParseListeners() {
      return this._parseListeners || [];
    }
    addParseListener(t) {
      if (t === null) throw "listener";
      this._parseListeners === null && (this._parseListeners = []), this._parseListeners.push(t);
    }
    removeParseListener(t) {
      if (this._parseListeners !== null) {
        const e = this._parseListeners.indexOf(t);
        e >= 0 && this._parseListeners.splice(e, 1), this._parseListeners.length === 0 && (this._parseListeners = null);
      }
    }
    removeParseListeners() {
      this._parseListeners = null;
    }
    triggerEnterRuleEvent() {
      if (this._parseListeners !== null) {
        const t = this._ctx;
        this._parseListeners.forEach(function(e) {
          e.enterEveryRule(t), t.enterRule(e);
        });
      }
    }
    triggerExitRuleEvent() {
      if (this._parseListeners !== null) {
        const t = this._ctx;
        this._parseListeners.slice(0).reverse().forEach(function(e) {
          t.exitRule(e), e.exitEveryRule(t);
        });
      }
    }
    getTokenFactory() {
      return this._input.tokenSource._factory;
    }
    setTokenFactory(t) {
      this._input.tokenSource._factory = t;
    }
    getATNWithBypassAlts() {
      const t = this.getSerializedATN();
      if (t === null) throw "The current parser does not support an ATN with bypass alternatives.";
      let e = this.bypassAltsAtnCache[t];
      if (e === null) {
        const i = new Ut();
        i.generateRuleBypassTransitions = true, e = new He(i).deserialize(t), this.bypassAltsAtnCache[t] = e;
      }
      return e;
    }
    getInputStream() {
      return this.getTokenStream();
    }
    setInputStream(t) {
      this.setTokenStream(t);
    }
    getTokenStream() {
      return this._input;
    }
    setTokenStream(t) {
      this._input = null, this.reset(), this._input = t;
    }
    get syntaxErrorsCount() {
      return this._syntaxErrors;
    }
    getCurrentToken() {
      return this._input.LT(1);
    }
    notifyErrorListeners(t, e, i) {
      i = i || null, (e = e || null) === null && (e = this.getCurrentToken()), this._syntaxErrors += 1;
      const s = e.line, r = e.column;
      this.getErrorListenerDispatch().syntaxError(this, e, s, r, t, i);
    }
    consume() {
      const t = this.getCurrentToken();
      t.type !== x.EOF && this.getInputStream().consume();
      const e = this._parseListeners !== null && this._parseListeners.length > 0;
      if (this.buildParseTrees || e) {
        let i;
        i = this._errHandler.inErrorRecoveryMode(this) ? this._ctx.addErrorNode(t) : this._ctx.addTokenNode(t), i.invokingState = this.state, e && this._parseListeners.forEach(function(s) {
          i instanceof Gt || i.isErrorNode !== void 0 && i.isErrorNode() ? s.visitErrorNode(i) : i instanceof Q && s.visitTerminal(i);
        });
      }
      return t;
    }
    addContextToParseTree() {
      this._ctx.parentCtx !== null && this._ctx.parentCtx.addChild(this._ctx);
    }
    enterRule(t, e, i) {
      this.state = e, this._ctx = t, this._ctx.start = this._input.LT(1), this.buildParseTrees && this.addContextToParseTree(), this.triggerEnterRuleEvent();
    }
    exitRule() {
      this._ctx.stop = this._input.LT(-1), this.triggerExitRuleEvent(), this.state = this._ctx.invokingState, this._ctx = this._ctx.parentCtx;
    }
    enterOuterAlt(t, e) {
      t.setAltNumber(e), this.buildParseTrees && this._ctx !== t && this._ctx.parentCtx !== null && (this._ctx.parentCtx.removeLastChild(), this._ctx.parentCtx.addChild(t)), this._ctx = t;
    }
    getPrecedence() {
      return this._precedenceStack.length === 0 ? -1 : this._precedenceStack[this._precedenceStack.length - 1];
    }
    enterRecursionRule(t, e, i, s) {
      this.state = e, this._precedenceStack.push(s), this._ctx = t, this._ctx.start = this._input.LT(1), this.triggerEnterRuleEvent();
    }
    pushNewRecursionContext(t, e, i) {
      const s = this._ctx;
      s.parentCtx = t, s.invokingState = e, s.stop = this._input.LT(-1), this._ctx = t, this._ctx.start = s.start, this.buildParseTrees && this._ctx.addChild(s), this.triggerEnterRuleEvent();
    }
    unrollRecursionContexts(t) {
      this._precedenceStack.pop(), this._ctx.stop = this._input.LT(-1);
      const e = this._ctx, i = this.getParseListeners();
      if (i !== null && i.length > 0) for (; this._ctx !== t; ) this.triggerExitRuleEvent(), this._ctx = this._ctx.parentCtx;
      else this._ctx = t;
      e.parentCtx = t, this.buildParseTrees && t !== null && t.addChild(e);
    }
    getInvokingContext(t) {
      let e = this._ctx;
      for (; e !== null; ) {
        if (e.ruleIndex === t) return e;
        e = e.parentCtx;
      }
      return null;
    }
    precpred(t, e) {
      return e >= this._precedenceStack[this._precedenceStack.length - 1];
    }
    inContext(t) {
      return false;
    }
    isExpectedToken(t) {
      const e = this._interp.atn;
      let i = this._ctx;
      const s = e.states[this.state];
      let r = e.nextTokens(s);
      if (r.contains(t)) return true;
      if (!r.contains(x.EPSILON)) return false;
      for (; i !== null && i.invokingState >= 0 && r.contains(x.EPSILON); ) {
        const n = e.states[i.invokingState].transitions[0];
        if (r = e.nextTokens(n.followState), r.contains(t)) return true;
        i = i.parentCtx;
      }
      return !(!r.contains(x.EPSILON) || t !== x.EOF);
    }
    getExpectedTokens() {
      return this._interp.atn.getExpectedTokens(this.state, this._ctx);
    }
    getExpectedTokensWithinCurrentRule() {
      const t = this._interp.atn, e = t.states[this.state];
      return t.nextTokens(e);
    }
    getRuleIndex(t) {
      const e = this.getRuleIndexMap()[t];
      return e !== null ? e : -1;
    }
    getRuleInvocationStack(t) {
      (t = t || null) === null && (t = this._ctx);
      const e = [];
      for (; t !== null; ) {
        const i = t.ruleIndex;
        i < 0 ? e.push("n/a") : e.push(this.ruleNames[i]), t = t.parentCtx;
      }
      return e;
    }
    getDFAStrings() {
      return this._interp.decisionToDFA.toString();
    }
    dumpDFA() {
      let t = false;
      for (let e = 0; e < this._interp.decisionToDFA.length; e++) {
        const i = this._interp.decisionToDFA[e];
        i.states.length > 0 && (t && console.log(), this.printer.println("Decision " + i.decision + ":"), this.printer.print(i.toString(this.literalNames, this.symbolicNames)), t = true);
      }
    }
    getSourceName() {
      return this._input.sourceName;
    }
    setTrace(t) {
      t ? (this._tracer !== null && this.removeParseListener(this._tracer), this._tracer = new bn(this), this.addParseListener(this._tracer)) : (this.removeParseListener(this._tracer), this._tracer = null);
    }
  };
  We.bypassAltsAtnCache = {};
  var ms = class extends Q {
    constructor(t) {
      super(), this.parentCtx = null, this.symbol = t;
    }
    getChild(t) {
      return null;
    }
    getSymbol() {
      return this.symbol;
    }
    getParent() {
      return this.parentCtx;
    }
    getPayload() {
      return this.symbol;
    }
    getSourceInterval() {
      if (this.symbol === null) return S.INVALID_INTERVAL;
      const t = this.symbol.tokenIndex;
      return new S(t, t);
    }
    getChildCount() {
      return 0;
    }
    accept(t) {
      return t.visitTerminal(this);
    }
    getText() {
      return this.symbol.text;
    }
    toString() {
      return this.symbol.type === x.EOF ? "<EOF>" : this.symbol.text;
    }
  }, fs = class extends ms {
    constructor(t) {
      super(t);
    }
    isErrorNode() {
      return true;
    }
    accept(t) {
      return t.visitErrorNode(this);
    }
  }, Ye = class extends pt {
    constructor(t, e) {
      super(t, e), this.children = null, this.start = null, this.stop = null, this.exception = null;
    }
    copyFrom(t) {
      this.parentCtx = t.parentCtx, this.invokingState = t.invokingState, this.children = null, this.start = t.start, this.stop = t.stop, t.children && (this.children = [], t.children.map(function(e) {
        e instanceof fs && (this.children.push(e), e.parentCtx = this);
      }, this));
    }
    enterRule(t) {
    }
    exitRule(t) {
    }
    addChild(t) {
      return this.children === null && (this.children = []), this.children.push(t), t;
    }
    removeLastChild() {
      this.children !== null && this.children.pop();
    }
    addTokenNode(t) {
      const e = new ms(t);
      return this.addChild(e), e.parentCtx = this, e;
    }
    addErrorNode(t) {
      const e = new fs(t);
      return this.addChild(e), e.parentCtx = this, e;
    }
    getChild(t, e) {
      if (e = e || null, this.children === null || t < 0 || t >= this.children.length) return null;
      if (e === null) return this.children[t];
      for (let i = 0; i < this.children.length; i++) {
        const s = this.children[i];
        if (s instanceof e) {
          if (t === 0) return s;
          t -= 1;
        }
      }
      return null;
    }
    getToken(t, e) {
      if (this.children === null || e < 0 || e >= this.children.length) return null;
      for (let i = 0; i < this.children.length; i++) {
        const s = this.children[i];
        if (s instanceof Q && s.symbol.type === t) {
          if (e === 0) return s;
          e -= 1;
        }
      }
      return null;
    }
    getTokens(t) {
      if (this.children === null) return [];
      {
        const e = [];
        for (let i = 0; i < this.children.length; i++) {
          const s = this.children[i];
          s instanceof Q && s.symbol.type === t && e.push(s);
        }
        return e;
      }
    }
    getTypedRuleContext(t, e) {
      return this.getChild(e, t);
    }
    getTypedRuleContexts(t) {
      if (this.children === null) return [];
      {
        const e = [];
        for (let i = 0; i < this.children.length; i++) {
          const s = this.children[i];
          s instanceof t && e.push(s);
        }
        return e;
      }
    }
    getChildCount() {
      return this.children === null ? 0 : this.children.length;
    }
    getSourceInterval() {
      return this.start === null || this.stop === null ? S.INVALID_INTERVAL : new S(this.start.tokenIndex, this.stop.tokenIndex);
    }
  };
  pt.EMPTY = new Ye();
  var _s = class gt {
    constructor(e) {
      this.tokens = e, this.programs = /* @__PURE__ */ new Map();
    }
    getTokenStream() {
      return this.tokens;
    }
    insertAfter(e, i) {
      let s, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gt.DEFAULT_PROGRAM_NAME;
      s = typeof e == "number" ? e : e.tokenIndex;
      let n = this.getProgram(r), l = new ys(this.tokens, s, n.length, i);
      n.push(l);
    }
    insertBefore(e, i) {
      let s, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gt.DEFAULT_PROGRAM_NAME;
      s = typeof e == "number" ? e : e.tokenIndex;
      const n = this.getProgram(r), l = new bt(this.tokens, s, n.length, i);
      n.push(l);
    }
    replaceSingle(e, i) {
      let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gt.DEFAULT_PROGRAM_NAME;
      this.replace(e, e, i, s);
    }
    replace(e, i, s) {
      let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : gt.DEFAULT_PROGRAM_NAME;
      if (typeof e != "number" && (e = e.tokenIndex), typeof i != "number" && (i = i.tokenIndex), e > i || e < 0 || i < 0 || i >= this.tokens.size) throw new RangeError(`replace: range invalid: ${e}..${i}(size=${this.tokens.size})`);
      let n = this.getProgram(r), l = new re(this.tokens, e, i, n.length, s);
      n.push(l);
    }
    delete(e, i) {
      let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gt.DEFAULT_PROGRAM_NAME;
      i === void 0 && (i = e), this.replace(e, i, null, s);
    }
    getProgram(e) {
      let i = this.programs.get(e);
      return i == null && (i = this.initializeProgram(e)), i;
    }
    initializeProgram(e) {
      const i = [];
      return this.programs.set(e, i), i;
    }
    getText(e) {
      let i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : gt.DEFAULT_PROGRAM_NAME;
      i = e instanceof S ? e : new S(0, this.tokens.size - 1), typeof e == "string" && (s = e);
      const r = this.programs.get(s);
      let n = i.start, l = i.stop;
      if (l > this.tokens.size - 1 && (l = this.tokens.size - 1), n < 0 && (n = 0), r == null || r.length === 0) return this.tokens.getText(new S(n, l));
      let h = [], u = this.reduceToSingleOperationPerIndex(r), p = n;
      for (; p <= l && p < this.tokens.size; ) {
        let m = u.get(p);
        u.delete(p);
        let y = this.tokens.get(p);
        m == null ? (y.type !== x.EOF && h.push(String(y.text)), p++) : p = m.execute(h);
      }
      if (l === this.tokens.size - 1) for (const m of u.values()) m.index >= this.tokens.size - 1 && h.push(m.text.toString());
      return h.join("");
    }
    reduceToSingleOperationPerIndex(e) {
      for (let s = 0; s < e.length; s++) {
        let r = e[s];
        if (r == null || !(r instanceof re)) continue;
        let n = r, l = this.getKindOfOps(e, bt, s);
        for (let u of l) u.index === n.index ? (e[u.instructionIndex] = void 0, n.text = u.text.toString() + (n.text != null ? n.text.toString() : "")) : u.index > n.index && u.index <= n.lastIndex && (e[u.instructionIndex] = void 0);
        let h = this.getKindOfOps(e, re, s);
        for (let u of h) {
          if (u.index >= n.index && u.lastIndex <= n.lastIndex) {
            e[u.instructionIndex] = void 0;
            continue;
          }
          let p = u.lastIndex < n.index || u.index > n.lastIndex;
          if (u.text != null || n.text != null || p) {
            if (!p) throw new Error(`replace op boundaries of ${n} overlap with previous ${u}`);
          } else e[u.instructionIndex] = void 0, n.index = Math.min(u.index, n.index), n.lastIndex = Math.max(u.lastIndex, n.lastIndex);
        }
      }
      for (let s = 0; s < e.length; s++) {
        let r = e[s];
        if (r == null || !(r instanceof bt)) continue;
        let n = r, l = this.getKindOfOps(e, bt, s);
        for (let u of l) u.index === n.index && (u instanceof ys ? (n.text = this.catOpText(u.text, n.text), e[u.instructionIndex] = void 0) : u instanceof bt && (n.text = this.catOpText(n.text, u.text), e[u.instructionIndex] = void 0));
        let h = this.getKindOfOps(e, re, s);
        for (let u of h) if (n.index !== u.index) {
          if (n.index >= u.index && n.index <= u.lastIndex) throw new Error(`insert op ${n} within boundaries of previous ${u}`);
        } else u.text = this.catOpText(n.text, u.text), e[s] = void 0;
      }
      let i = /* @__PURE__ */ new Map();
      for (let s of e) if (s != null) {
        if (i.get(s.index) != null) throw new Error("should only be one op per index");
        i.set(s.index, s);
      }
      return i;
    }
    catOpText(e, i) {
      let s = "", r = "";
      return e != null && (s = e.toString()), i != null && (r = i.toString()), s + r;
    }
    getKindOfOps(e, i, s) {
      return e.slice(0, s).filter((r) => r && r instanceof i);
    }
  }, ie, se, Ge;
  ie = _s, Ge = "default", (se = function(t) {
    var e = function(i, s) {
      if (typeof i != "object" || i === null) return i;
      var r = i[Symbol.toPrimitive];
      if (r !== void 0) {
        var n = r.call(i, "string");
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(i);
    }(t);
    return typeof e == "symbol" ? e : String(e);
  }(se = "DEFAULT_PROGRAM_NAME")) in ie ? Object.defineProperty(ie, se, { value: Ge, enumerable: true, configurable: true, writable: true }) : ie[se] = Ge;
  var xs = class {
    constructor(t, e, i, s) {
      this.tokens = t, this.instructionIndex = i, this.index = e, this.text = s === void 0 ? "" : s;
    }
    toString() {
      let t = this.constructor.name;
      const e = t.indexOf("$");
      return t = t.substring(e + 1, t.length), "<" + t + "@" + this.tokens.get(this.index) + ':"' + this.text + '">';
    }
  }, bt = class extends xs {
    constructor(t, e, i, s) {
      super(t, e, i, s);
    }
    execute(t) {
      return this.text && t.push(this.text.toString()), this.tokens.get(this.index).type !== x.EOF && t.push(String(this.tokens.get(this.index).text)), this.index + 1;
    }
  }, ys = class extends bt {
    constructor(t, e, i, s) {
      super(t, e + 1, i, s);
    }
  }, re = class extends xs {
    constructor(t, e, i, s, r) {
      super(t, e, s, r), this.lastIndex = i;
    }
    execute(t) {
      return this.text && t.push(this.text.toString()), this.lastIndex + 1;
    }
    toString() {
      return this.text == null ? "<DeleteOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ">" : "<ReplaceOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ':"' + this.text + '">';
    }
  }, Sn = { atn: fn, dfa: _n, context: xn, misc: yn, tree: gn, error: Rn, Token: x, CommonToken: Ht, CharStreams: cs, CharStream: Vt, InputStream: Vt, FileStream: ee, CommonTokenStream: ps, Lexer: F, Parser: We, ParserRuleContext: Ye, Interval: S, IntervalSet: q, LL1Analyzer: $t, Utils: Cn, TokenStreamRewriter: _s }, ht = b.dx, gs = b.q2;
  b.FO;
  var Ts = b.xf;
  b.Gy, b.s4;
  var An = b.c7, Es = b._7;
  b.tx, b.gp;
  var wn = b.cK, Nn = b.zs;
  b.Rh, b.AV, b.Xp, b.VS, b.ul;
  var In = b.hW, kn = b.x1, O = b.z5;
  b.oN;
  var Dn = b.TB;
  b.u1;
  var On = b._b, Pn = b.$F, f = b._T, vs = b.db;
  b.Zx;
  var _ = b._x;
  b.r8, b.JI, b.TP;
  var Rs = b.WU;
  b.Nj, b.ZP;
  var d = class j extends In {
    constructor(e) {
      super(e), this._interp = new kn(this, j._ATN, j.DecisionsToDFA, new vs());
    }
    get grammarFileName() {
      return "Solidity.g4";
    }
    get literalNames() {
      return j.literalNames;
    }
    get symbolicNames() {
      return j.symbolicNames;
    }
    get ruleNames() {
      return j.ruleNames;
    }
    get serializedATN() {
      return j._serializedATN;
    }
    get channelNames() {
      return j.channelNames;
    }
    get modeNames() {
      return j.modeNames;
    }
    static get _ATN() {
      return j.__ATN || (j.__ATN = new gs().deserialize(j._serializedATN)), j.__ATN;
    }
  };
  d.T__0 = 1, d.T__1 = 2, d.T__2 = 3, d.T__3 = 4, d.T__4 = 5, d.T__5 = 6, d.T__6 = 7, d.T__7 = 8, d.T__8 = 9, d.T__9 = 10, d.T__10 = 11, d.T__11 = 12, d.T__12 = 13, d.T__13 = 14, d.T__14 = 15, d.T__15 = 16, d.T__16 = 17, d.T__17 = 18, d.T__18 = 19, d.T__19 = 20, d.T__20 = 21, d.T__21 = 22, d.T__22 = 23, d.T__23 = 24, d.T__24 = 25, d.T__25 = 26, d.T__26 = 27, d.T__27 = 28, d.T__28 = 29, d.T__29 = 30, d.T__30 = 31, d.T__31 = 32, d.T__32 = 33, d.T__33 = 34, d.T__34 = 35, d.T__35 = 36, d.T__36 = 37, d.T__37 = 38, d.T__38 = 39, d.T__39 = 40, d.T__40 = 41, d.T__41 = 42, d.T__42 = 43, d.T__43 = 44, d.T__44 = 45, d.T__45 = 46, d.T__46 = 47, d.T__47 = 48, d.T__48 = 49, d.T__49 = 50, d.T__50 = 51, d.T__51 = 52, d.T__52 = 53, d.T__53 = 54, d.T__54 = 55, d.T__55 = 56, d.T__56 = 57, d.T__57 = 58, d.T__58 = 59, d.T__59 = 60, d.T__60 = 61, d.T__61 = 62, d.T__62 = 63, d.T__63 = 64, d.T__64 = 65, d.T__65 = 66, d.T__66 = 67, d.T__67 = 68, d.T__68 = 69, d.T__69 = 70, d.T__70 = 71, d.T__71 = 72, d.T__72 = 73, d.T__73 = 74, d.T__74 = 75, d.T__75 = 76, d.T__76 = 77, d.T__77 = 78, d.T__78 = 79, d.T__79 = 80, d.T__80 = 81, d.T__81 = 82, d.T__82 = 83, d.T__83 = 84, d.T__84 = 85, d.T__85 = 86, d.T__86 = 87, d.T__87 = 88, d.T__88 = 89, d.T__89 = 90, d.T__90 = 91, d.T__91 = 92, d.T__92 = 93, d.T__93 = 94, d.T__94 = 95, d.T__95 = 96, d.Int = 97, d.Uint = 98, d.Byte = 99, d.Fixed = 100, d.Ufixed = 101, d.BooleanLiteral = 102, d.DecimalNumber = 103, d.HexNumber = 104, d.NumberUnit = 105, d.HexLiteralFragment = 106, d.ReservedKeyword = 107, d.AnonymousKeyword = 108, d.BreakKeyword = 109, d.ConstantKeyword = 110, d.TransientKeyword = 111, d.ImmutableKeyword = 112, d.ContinueKeyword = 113, d.LeaveKeyword = 114, d.ExternalKeyword = 115, d.IndexedKeyword = 116, d.InternalKeyword = 117, d.PayableKeyword = 118, d.PrivateKeyword = 119, d.PublicKeyword = 120, d.VirtualKeyword = 121, d.PureKeyword = 122, d.TypeKeyword = 123, d.ViewKeyword = 124, d.GlobalKeyword = 125, d.ConstructorKeyword = 126, d.FallbackKeyword = 127, d.ReceiveKeyword = 128, d.Identifier = 129, d.StringLiteralFragment = 130, d.VersionLiteral = 131, d.WS = 132, d.COMMENT = 133, d.LINE_COMMENT = 134, d.EOF = Rs.EOF, d.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"], d.literalNames = [null, "'pragma'", "';'", "'*'", "'||'", "'^'", "'~'", "'>='", "'>'", "'<'", "'<='", "'='", "'as'", "'import'", "'from'", "'{'", "','", "'}'", "'abstract'", "'contract'", "'interface'", "'library'", "'is'", "'('", "')'", "'error'", "'using'", "'for'", "'|'", "'&'", "'+'", "'-'", "'/'", "'%'", "'=='", "'!='", "'struct'", "'modifier'", "'function'", "'returns'", "'event'", "'enum'", "'['", "']'", "'address'", "'.'", "'mapping'", "'=>'", "'memory'", "'storage'", "'calldata'", "'if'", "'else'", "'try'", "'catch'", "'while'", "'unchecked'", "'assembly'", "'do'", "'return'", "'throw'", "'emit'", "'revert'", "'var'", "'bool'", "'string'", "'byte'", "'++'", "'--'", "'new'", "':'", "'delete'", "'!'", "'**'", "'<<'", "'>>'", "'&&'", "'?'", "'|='", "'^='", "'&='", "'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'let'", "':='", "'=:'", "'switch'", "'case'", "'default'", "'->'", "'callback'", "'override'", null, null, null, null, null, null, null, null, null, null, null, "'anonymous'", "'break'", "'constant'", "'transient'", "'immutable'", "'continue'", "'leave'", "'external'", "'indexed'", "'internal'", "'payable'", "'private'", "'public'", "'virtual'", "'pure'", "'type'", "'view'", "'global'", "'constructor'", "'fallback'", "'receive'"], d.symbolicNames = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Int", "Uint", "Byte", "Fixed", "Ufixed", "BooleanLiteral", "DecimalNumber", "HexNumber", "NumberUnit", "HexLiteralFragment", "ReservedKeyword", "AnonymousKeyword", "BreakKeyword", "ConstantKeyword", "TransientKeyword", "ImmutableKeyword", "ContinueKeyword", "LeaveKeyword", "ExternalKeyword", "IndexedKeyword", "InternalKeyword", "PayableKeyword", "PrivateKeyword", "PublicKeyword", "VirtualKeyword", "PureKeyword", "TypeKeyword", "ViewKeyword", "GlobalKeyword", "ConstructorKeyword", "FallbackKeyword", "ReceiveKeyword", "Identifier", "StringLiteralFragment", "VersionLiteral", "WS", "COMMENT", "LINE_COMMENT"], d.modeNames = ["DEFAULT_MODE"], d.ruleNames = ["T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", "T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", "T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", "T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "T__56", "T__57", "T__58", "T__59", "T__60", "T__61", "T__62", "T__63", "T__64", "T__65", "T__66", "T__67", "T__68", "T__69", "T__70", "T__71", "T__72", "T__73", "T__74", "T__75", "T__76", "T__77", "T__78", "T__79", "T__80", "T__81", "T__82", "T__83", "T__84", "T__85", "T__86", "T__87", "T__88", "T__89", "T__90", "T__91", "T__92", "T__93", "T__94", "T__95", "Int", "Uint", "Byte", "Fixed", "Ufixed", "NumberOfBits", "NumberOfBytes", "BooleanLiteral", "DecimalNumber", "DecimalDigits", "HexNumber", "HexDigits", "NumberUnit", "HexLiteralFragment", "HexCharacter", "ReservedKeyword", "AnonymousKeyword", "BreakKeyword", "ConstantKeyword", "TransientKeyword", "ImmutableKeyword", "ContinueKeyword", "LeaveKeyword", "ExternalKeyword", "IndexedKeyword", "InternalKeyword", "PayableKeyword", "PrivateKeyword", "PublicKeyword", "VirtualKeyword", "PureKeyword", "TypeKeyword", "ViewKeyword", "GlobalKeyword", "ConstructorKeyword", "FallbackKeyword", "ReceiveKeyword", "Identifier", "IdentifierStart", "IdentifierPart", "StringLiteralFragment", "DoubleQuotedStringCharacter", "SingleQuotedStringCharacter", "VersionLiteral", "WS", "COMMENT", "LINE_COMMENT"], d._serializedATN = [4, 0, 134, 1348, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7, 103, 2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109, 7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7, 113, 2, 114, 7, 114, 2, 115, 7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 2, 120, 7, 120, 2, 121, 7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2, 125, 7, 125, 2, 126, 7, 126, 2, 127, 7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130, 7, 130, 2, 131, 7, 131, 2, 132, 7, 132, 2, 133, 7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136, 7, 136, 2, 137, 7, 137, 2, 138, 7, 138, 2, 139, 7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142, 7, 142, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 28, 1, 28, 1, 29, 1, 29, 1, 30, 1, 30, 1, 31, 1, 31, 1, 32, 1, 32, 1, 33, 1, 33, 1, 33, 1, 34, 1, 34, 1, 34, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 41, 1, 41, 1, 42, 1, 42, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 44, 1, 44, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 46, 1, 46, 1, 46, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 50, 1, 50, 1, 50, 1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 52, 1, 52, 1, 52, 1, 52, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 57, 1, 57, 1, 57, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 62, 1, 62, 1, 62, 1, 62, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 64, 1, 64, 1, 64, 1, 64, 1, 64, 1, 64, 1, 64, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 1, 66, 1, 66, 1, 66, 1, 67, 1, 67, 1, 67, 1, 68, 1, 68, 1, 68, 1, 68, 1, 69, 1, 69, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 71, 1, 71, 1, 72, 1, 72, 1, 72, 1, 73, 1, 73, 1, 73, 1, 74, 1, 74, 1, 74, 1, 75, 1, 75, 1, 75, 1, 76, 1, 76, 1, 77, 1, 77, 1, 77, 1, 78, 1, 78, 1, 78, 1, 79, 1, 79, 1, 79, 1, 80, 1, 80, 1, 80, 1, 80, 1, 81, 1, 81, 1, 81, 1, 81, 1, 82, 1, 82, 1, 82, 1, 83, 1, 83, 1, 83, 1, 84, 1, 84, 1, 84, 1, 85, 1, 85, 1, 85, 1, 86, 1, 86, 1, 86, 1, 87, 1, 87, 1, 87, 1, 87, 1, 88, 1, 88, 1, 88, 1, 89, 1, 89, 1, 89, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 93, 1, 93, 1, 93, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 96, 1, 96, 1, 96, 1, 96, 1, 96, 3, 96, 724, 8, 96, 1, 97, 1, 97, 1, 97, 1, 97, 1, 97, 1, 97, 3, 97, 732, 8, 97, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 741, 8, 98, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 4, 99, 752, 8, 99, 11, 99, 12, 99, 753, 3, 99, 756, 8, 99, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 4, 100, 768, 8, 100, 11, 100, 12, 100, 769, 3, 100, 772, 8, 100, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 3, 101, 857, 8, 101, 1, 102, 1, 102, 1, 102, 1, 102, 1, 102, 3, 102, 864, 8, 102, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 3, 103, 875, 8, 103, 1, 104, 1, 104, 3, 104, 879, 8, 104, 1, 104, 1, 104, 3, 104, 883, 8, 104, 1, 104, 1, 104, 3, 104, 887, 8, 104, 1, 104, 3, 104, 890, 8, 104, 1, 105, 1, 105, 3, 105, 894, 8, 105, 1, 105, 5, 105, 897, 8, 105, 10, 105, 12, 105, 900, 9, 105, 1, 106, 1, 106, 1, 106, 1, 106, 1, 107, 1, 107, 3, 107, 908, 8, 107, 1, 107, 5, 107, 911, 8, 107, 10, 107, 12, 107, 914, 9, 107, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 3, 108, 972, 8, 108, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 3, 109, 980, 8, 109, 1, 109, 1, 109, 1, 109, 3, 109, 985, 8, 109, 1, 109, 3, 109, 988, 8, 109, 1, 110, 1, 110, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 3, 111, 1080, 8, 111, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 114, 1, 114, 1, 114, 1, 114, 1, 114, 1, 114, 1, 114, 1, 114, 1, 114, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 117, 1, 117, 1, 117, 1, 117, 1, 117, 1, 117, 1, 117, 1, 117, 1, 117, 1, 118, 1, 118, 1, 118, 1, 118, 1, 118, 1, 118, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 122, 1, 122, 1, 122, 1, 122, 1, 122, 1, 122, 1, 122, 1, 122, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 126, 1, 126, 1, 126, 1, 126, 1, 126, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 133, 1, 133, 5, 133, 1252, 8, 133, 10, 133, 12, 133, 1255, 9, 133, 1, 134, 1, 134, 1, 135, 1, 135, 1, 136, 1, 136, 1, 136, 1, 136, 1, 136, 1, 136, 1, 136, 3, 136, 1268, 8, 136, 1, 136, 1, 136, 5, 136, 1272, 8, 136, 10, 136, 12, 136, 1275, 9, 136, 1, 136, 1, 136, 1, 136, 5, 136, 1280, 8, 136, 10, 136, 12, 136, 1283, 9, 136, 1, 136, 3, 136, 1286, 8, 136, 1, 137, 1, 137, 1, 137, 3, 137, 1291, 8, 137, 1, 138, 1, 138, 1, 138, 3, 138, 1296, 8, 138, 1, 139, 4, 139, 1299, 8, 139, 11, 139, 12, 139, 1300, 1, 139, 1, 139, 4, 139, 1305, 8, 139, 11, 139, 12, 139, 1306, 1, 139, 1, 139, 4, 139, 1311, 8, 139, 11, 139, 12, 139, 1312, 3, 139, 1315, 8, 139, 1, 140, 4, 140, 1318, 8, 140, 11, 140, 12, 140, 1319, 1, 140, 1, 140, 1, 141, 1, 141, 1, 141, 1, 141, 5, 141, 1328, 8, 141, 10, 141, 12, 141, 1331, 9, 141, 1, 141, 1, 141, 1, 141, 1, 141, 1, 141, 1, 142, 1, 142, 1, 142, 1, 142, 5, 142, 1342, 8, 142, 10, 142, 12, 142, 1345, 9, 142, 1, 142, 1, 142, 1, 1329, 0, 143, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22, 45, 23, 47, 24, 49, 25, 51, 26, 53, 27, 55, 28, 57, 29, 59, 30, 61, 31, 63, 32, 65, 33, 67, 34, 69, 35, 71, 36, 73, 37, 75, 38, 77, 39, 79, 40, 81, 41, 83, 42, 85, 43, 87, 44, 89, 45, 91, 46, 93, 47, 95, 48, 97, 49, 99, 50, 101, 51, 103, 52, 105, 53, 107, 54, 109, 55, 111, 56, 113, 57, 115, 58, 117, 59, 119, 60, 121, 61, 123, 62, 125, 63, 127, 64, 129, 65, 131, 66, 133, 67, 135, 68, 137, 69, 139, 70, 141, 71, 143, 72, 145, 73, 147, 74, 149, 75, 151, 76, 153, 77, 155, 78, 157, 79, 159, 80, 161, 81, 163, 82, 165, 83, 167, 84, 169, 85, 171, 86, 173, 87, 175, 88, 177, 89, 179, 90, 181, 91, 183, 92, 185, 93, 187, 94, 189, 95, 191, 96, 193, 97, 195, 98, 197, 99, 199, 100, 201, 101, 203, 0, 205, 0, 207, 102, 209, 103, 211, 0, 213, 104, 215, 0, 217, 105, 219, 106, 221, 0, 223, 107, 225, 108, 227, 109, 229, 110, 231, 111, 233, 112, 235, 113, 237, 114, 239, 115, 241, 116, 243, 117, 245, 118, 247, 119, 249, 120, 251, 121, 253, 122, 255, 123, 257, 124, 259, 125, 261, 126, 263, 127, 265, 128, 267, 129, 269, 0, 271, 0, 273, 130, 275, 0, 277, 0, 279, 131, 281, 132, 283, 133, 285, 134, 1, 0, 13, 1, 0, 48, 57, 1, 0, 49, 57, 1, 0, 49, 50, 1, 0, 48, 50, 2, 0, 69, 69, 101, 101, 2, 0, 88, 88, 120, 120, 3, 0, 48, 57, 65, 70, 97, 102, 4, 0, 36, 36, 65, 90, 95, 95, 97, 122, 5, 0, 36, 36, 48, 57, 65, 90, 95, 95, 97, 122, 4, 0, 10, 10, 13, 13, 34, 34, 92, 92, 4, 0, 10, 10, 13, 13, 39, 39, 92, 92, 3, 0, 9, 10, 12, 13, 32, 32, 2, 0, 10, 10, 13, 13, 1430, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 0, 45, 1, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 49, 1, 0, 0, 0, 0, 51, 1, 0, 0, 0, 0, 53, 1, 0, 0, 0, 0, 55, 1, 0, 0, 0, 0, 57, 1, 0, 0, 0, 0, 59, 1, 0, 0, 0, 0, 61, 1, 0, 0, 0, 0, 63, 1, 0, 0, 0, 0, 65, 1, 0, 0, 0, 0, 67, 1, 0, 0, 0, 0, 69, 1, 0, 0, 0, 0, 71, 1, 0, 0, 0, 0, 73, 1, 0, 0, 0, 0, 75, 1, 0, 0, 0, 0, 77, 1, 0, 0, 0, 0, 79, 1, 0, 0, 0, 0, 81, 1, 0, 0, 0, 0, 83, 1, 0, 0, 0, 0, 85, 1, 0, 0, 0, 0, 87, 1, 0, 0, 0, 0, 89, 1, 0, 0, 0, 0, 91, 1, 0, 0, 0, 0, 93, 1, 0, 0, 0, 0, 95, 1, 0, 0, 0, 0, 97, 1, 0, 0, 0, 0, 99, 1, 0, 0, 0, 0, 101, 1, 0, 0, 0, 0, 103, 1, 0, 0, 0, 0, 105, 1, 0, 0, 0, 0, 107, 1, 0, 0, 0, 0, 109, 1, 0, 0, 0, 0, 111, 1, 0, 0, 0, 0, 113, 1, 0, 0, 0, 0, 115, 1, 0, 0, 0, 0, 117, 1, 0, 0, 0, 0, 119, 1, 0, 0, 0, 0, 121, 1, 0, 0, 0, 0, 123, 1, 0, 0, 0, 0, 125, 1, 0, 0, 0, 0, 127, 1, 0, 0, 0, 0, 129, 1, 0, 0, 0, 0, 131, 1, 0, 0, 0, 0, 133, 1, 0, 0, 0, 0, 135, 1, 0, 0, 0, 0, 137, 1, 0, 0, 0, 0, 139, 1, 0, 0, 0, 0, 141, 1, 0, 0, 0, 0, 143, 1, 0, 0, 0, 0, 145, 1, 0, 0, 0, 0, 147, 1, 0, 0, 0, 0, 149, 1, 0, 0, 0, 0, 151, 1, 0, 0, 0, 0, 153, 1, 0, 0, 0, 0, 155, 1, 0, 0, 0, 0, 157, 1, 0, 0, 0, 0, 159, 1, 0, 0, 0, 0, 161, 1, 0, 0, 0, 0, 163, 1, 0, 0, 0, 0, 165, 1, 0, 0, 0, 0, 167, 1, 0, 0, 0, 0, 169, 1, 0, 0, 0, 0, 171, 1, 0, 0, 0, 0, 173, 1, 0, 0, 0, 0, 175, 1, 0, 0, 0, 0, 177, 1, 0, 0, 0, 0, 179, 1, 0, 0, 0, 0, 181, 1, 0, 0, 0, 0, 183, 1, 0, 0, 0, 0, 185, 1, 0, 0, 0, 0, 187, 1, 0, 0, 0, 0, 189, 1, 0, 0, 0, 0, 191, 1, 0, 0, 0, 0, 193, 1, 0, 0, 0, 0, 195, 1, 0, 0, 0, 0, 197, 1, 0, 0, 0, 0, 199, 1, 0, 0, 0, 0, 201, 1, 0, 0, 0, 0, 207, 1, 0, 0, 0, 0, 209, 1, 0, 0, 0, 0, 213, 1, 0, 0, 0, 0, 217, 1, 0, 0, 0, 0, 219, 1, 0, 0, 0, 0, 223, 1, 0, 0, 0, 0, 225, 1, 0, 0, 0, 0, 227, 1, 0, 0, 0, 0, 229, 1, 0, 0, 0, 0, 231, 1, 0, 0, 0, 0, 233, 1, 0, 0, 0, 0, 235, 1, 0, 0, 0, 0, 237, 1, 0, 0, 0, 0, 239, 1, 0, 0, 0, 0, 241, 1, 0, 0, 0, 0, 243, 1, 0, 0, 0, 0, 245, 1, 0, 0, 0, 0, 247, 1, 0, 0, 0, 0, 249, 1, 0, 0, 0, 0, 251, 1, 0, 0, 0, 0, 253, 1, 0, 0, 0, 0, 255, 1, 0, 0, 0, 0, 257, 1, 0, 0, 0, 0, 259, 1, 0, 0, 0, 0, 261, 1, 0, 0, 0, 0, 263, 1, 0, 0, 0, 0, 265, 1, 0, 0, 0, 0, 267, 1, 0, 0, 0, 0, 273, 1, 0, 0, 0, 0, 279, 1, 0, 0, 0, 0, 281, 1, 0, 0, 0, 0, 283, 1, 0, 0, 0, 0, 285, 1, 0, 0, 0, 1, 287, 1, 0, 0, 0, 3, 294, 1, 0, 0, 0, 5, 296, 1, 0, 0, 0, 7, 298, 1, 0, 0, 0, 9, 301, 1, 0, 0, 0, 11, 303, 1, 0, 0, 0, 13, 305, 1, 0, 0, 0, 15, 308, 1, 0, 0, 0, 17, 310, 1, 0, 0, 0, 19, 312, 1, 0, 0, 0, 21, 315, 1, 0, 0, 0, 23, 317, 1, 0, 0, 0, 25, 320, 1, 0, 0, 0, 27, 327, 1, 0, 0, 0, 29, 332, 1, 0, 0, 0, 31, 334, 1, 0, 0, 0, 33, 336, 1, 0, 0, 0, 35, 338, 1, 0, 0, 0, 37, 347, 1, 0, 0, 0, 39, 356, 1, 0, 0, 0, 41, 366, 1, 0, 0, 0, 43, 374, 1, 0, 0, 0, 45, 377, 1, 0, 0, 0, 47, 379, 1, 0, 0, 0, 49, 381, 1, 0, 0, 0, 51, 387, 1, 0, 0, 0, 53, 393, 1, 0, 0, 0, 55, 397, 1, 0, 0, 0, 57, 399, 1, 0, 0, 0, 59, 401, 1, 0, 0, 0, 61, 403, 1, 0, 0, 0, 63, 405, 1, 0, 0, 0, 65, 407, 1, 0, 0, 0, 67, 409, 1, 0, 0, 0, 69, 412, 1, 0, 0, 0, 71, 415, 1, 0, 0, 0, 73, 422, 1, 0, 0, 0, 75, 431, 1, 0, 0, 0, 77, 440, 1, 0, 0, 0, 79, 448, 1, 0, 0, 0, 81, 454, 1, 0, 0, 0, 83, 459, 1, 0, 0, 0, 85, 461, 1, 0, 0, 0, 87, 463, 1, 0, 0, 0, 89, 471, 1, 0, 0, 0, 91, 473, 1, 0, 0, 0, 93, 481, 1, 0, 0, 0, 95, 484, 1, 0, 0, 0, 97, 491, 1, 0, 0, 0, 99, 499, 1, 0, 0, 0, 101, 508, 1, 0, 0, 0, 103, 511, 1, 0, 0, 0, 105, 516, 1, 0, 0, 0, 107, 520, 1, 0, 0, 0, 109, 526, 1, 0, 0, 0, 111, 532, 1, 0, 0, 0, 113, 542, 1, 0, 0, 0, 115, 551, 1, 0, 0, 0, 117, 554, 1, 0, 0, 0, 119, 561, 1, 0, 0, 0, 121, 567, 1, 0, 0, 0, 123, 572, 1, 0, 0, 0, 125, 579, 1, 0, 0, 0, 127, 583, 1, 0, 0, 0, 129, 588, 1, 0, 0, 0, 131, 595, 1, 0, 0, 0, 133, 600, 1, 0, 0, 0, 135, 603, 1, 0, 0, 0, 137, 606, 1, 0, 0, 0, 139, 610, 1, 0, 0, 0, 141, 612, 1, 0, 0, 0, 143, 619, 1, 0, 0, 0, 145, 621, 1, 0, 0, 0, 147, 624, 1, 0, 0, 0, 149, 627, 1, 0, 0, 0, 151, 630, 1, 0, 0, 0, 153, 633, 1, 0, 0, 0, 155, 635, 1, 0, 0, 0, 157, 638, 1, 0, 0, 0, 159, 641, 1, 0, 0, 0, 161, 644, 1, 0, 0, 0, 163, 648, 1, 0, 0, 0, 165, 652, 1, 0, 0, 0, 167, 655, 1, 0, 0, 0, 169, 658, 1, 0, 0, 0, 171, 661, 1, 0, 0, 0, 173, 664, 1, 0, 0, 0, 175, 667, 1, 0, 0, 0, 177, 671, 1, 0, 0, 0, 179, 674, 1, 0, 0, 0, 181, 677, 1, 0, 0, 0, 183, 684, 1, 0, 0, 0, 185, 689, 1, 0, 0, 0, 187, 697, 1, 0, 0, 0, 189, 700, 1, 0, 0, 0, 191, 709, 1, 0, 0, 0, 193, 718, 1, 0, 0, 0, 195, 725, 1, 0, 0, 0, 197, 733, 1, 0, 0, 0, 199, 742, 1, 0, 0, 0, 201, 757, 1, 0, 0, 0, 203, 856, 1, 0, 0, 0, 205, 863, 1, 0, 0, 0, 207, 874, 1, 0, 0, 0, 209, 882, 1, 0, 0, 0, 211, 891, 1, 0, 0, 0, 213, 901, 1, 0, 0, 0, 215, 905, 1, 0, 0, 0, 217, 971, 1, 0, 0, 0, 219, 973, 1, 0, 0, 0, 221, 989, 1, 0, 0, 0, 223, 1079, 1, 0, 0, 0, 225, 1081, 1, 0, 0, 0, 227, 1091, 1, 0, 0, 0, 229, 1097, 1, 0, 0, 0, 231, 1106, 1, 0, 0, 0, 233, 1116, 1, 0, 0, 0, 235, 1126, 1, 0, 0, 0, 237, 1135, 1, 0, 0, 0, 239, 1141, 1, 0, 0, 0, 241, 1150, 1, 0, 0, 0, 243, 1158, 1, 0, 0, 0, 245, 1167, 1, 0, 0, 0, 247, 1175, 1, 0, 0, 0, 249, 1183, 1, 0, 0, 0, 251, 1190, 1, 0, 0, 0, 253, 1198, 1, 0, 0, 0, 255, 1203, 1, 0, 0, 0, 257, 1208, 1, 0, 0, 0, 259, 1213, 1, 0, 0, 0, 261, 1220, 1, 0, 0, 0, 263, 1232, 1, 0, 0, 0, 265, 1241, 1, 0, 0, 0, 267, 1249, 1, 0, 0, 0, 269, 1256, 1, 0, 0, 0, 271, 1258, 1, 0, 0, 0, 273, 1267, 1, 0, 0, 0, 275, 1290, 1, 0, 0, 0, 277, 1295, 1, 0, 0, 0, 279, 1298, 1, 0, 0, 0, 281, 1317, 1, 0, 0, 0, 283, 1323, 1, 0, 0, 0, 285, 1337, 1, 0, 0, 0, 287, 288, 5, 112, 0, 0, 288, 289, 5, 114, 0, 0, 289, 290, 5, 97, 0, 0, 290, 291, 5, 103, 0, 0, 291, 292, 5, 109, 0, 0, 292, 293, 5, 97, 0, 0, 293, 2, 1, 0, 0, 0, 294, 295, 5, 59, 0, 0, 295, 4, 1, 0, 0, 0, 296, 297, 5, 42, 0, 0, 297, 6, 1, 0, 0, 0, 298, 299, 5, 124, 0, 0, 299, 300, 5, 124, 0, 0, 300, 8, 1, 0, 0, 0, 301, 302, 5, 94, 0, 0, 302, 10, 1, 0, 0, 0, 303, 304, 5, 126, 0, 0, 304, 12, 1, 0, 0, 0, 305, 306, 5, 62, 0, 0, 306, 307, 5, 61, 0, 0, 307, 14, 1, 0, 0, 0, 308, 309, 5, 62, 0, 0, 309, 16, 1, 0, 0, 0, 310, 311, 5, 60, 0, 0, 311, 18, 1, 0, 0, 0, 312, 313, 5, 60, 0, 0, 313, 314, 5, 61, 0, 0, 314, 20, 1, 0, 0, 0, 315, 316, 5, 61, 0, 0, 316, 22, 1, 0, 0, 0, 317, 318, 5, 97, 0, 0, 318, 319, 5, 115, 0, 0, 319, 24, 1, 0, 0, 0, 320, 321, 5, 105, 0, 0, 321, 322, 5, 109, 0, 0, 322, 323, 5, 112, 0, 0, 323, 324, 5, 111, 0, 0, 324, 325, 5, 114, 0, 0, 325, 326, 5, 116, 0, 0, 326, 26, 1, 0, 0, 0, 327, 328, 5, 102, 0, 0, 328, 329, 5, 114, 0, 0, 329, 330, 5, 111, 0, 0, 330, 331, 5, 109, 0, 0, 331, 28, 1, 0, 0, 0, 332, 333, 5, 123, 0, 0, 333, 30, 1, 0, 0, 0, 334, 335, 5, 44, 0, 0, 335, 32, 1, 0, 0, 0, 336, 337, 5, 125, 0, 0, 337, 34, 1, 0, 0, 0, 338, 339, 5, 97, 0, 0, 339, 340, 5, 98, 0, 0, 340, 341, 5, 115, 0, 0, 341, 342, 5, 116, 0, 0, 342, 343, 5, 114, 0, 0, 343, 344, 5, 97, 0, 0, 344, 345, 5, 99, 0, 0, 345, 346, 5, 116, 0, 0, 346, 36, 1, 0, 0, 0, 347, 348, 5, 99, 0, 0, 348, 349, 5, 111, 0, 0, 349, 350, 5, 110, 0, 0, 350, 351, 5, 116, 0, 0, 351, 352, 5, 114, 0, 0, 352, 353, 5, 97, 0, 0, 353, 354, 5, 99, 0, 0, 354, 355, 5, 116, 0, 0, 355, 38, 1, 0, 0, 0, 356, 357, 5, 105, 0, 0, 357, 358, 5, 110, 0, 0, 358, 359, 5, 116, 0, 0, 359, 360, 5, 101, 0, 0, 360, 361, 5, 114, 0, 0, 361, 362, 5, 102, 0, 0, 362, 363, 5, 97, 0, 0, 363, 364, 5, 99, 0, 0, 364, 365, 5, 101, 0, 0, 365, 40, 1, 0, 0, 0, 366, 367, 5, 108, 0, 0, 367, 368, 5, 105, 0, 0, 368, 369, 5, 98, 0, 0, 369, 370, 5, 114, 0, 0, 370, 371, 5, 97, 0, 0, 371, 372, 5, 114, 0, 0, 372, 373, 5, 121, 0, 0, 373, 42, 1, 0, 0, 0, 374, 375, 5, 105, 0, 0, 375, 376, 5, 115, 0, 0, 376, 44, 1, 0, 0, 0, 377, 378, 5, 40, 0, 0, 378, 46, 1, 0, 0, 0, 379, 380, 5, 41, 0, 0, 380, 48, 1, 0, 0, 0, 381, 382, 5, 101, 0, 0, 382, 383, 5, 114, 0, 0, 383, 384, 5, 114, 0, 0, 384, 385, 5, 111, 0, 0, 385, 386, 5, 114, 0, 0, 386, 50, 1, 0, 0, 0, 387, 388, 5, 117, 0, 0, 388, 389, 5, 115, 0, 0, 389, 390, 5, 105, 0, 0, 390, 391, 5, 110, 0, 0, 391, 392, 5, 103, 0, 0, 392, 52, 1, 0, 0, 0, 393, 394, 5, 102, 0, 0, 394, 395, 5, 111, 0, 0, 395, 396, 5, 114, 0, 0, 396, 54, 1, 0, 0, 0, 397, 398, 5, 124, 0, 0, 398, 56, 1, 0, 0, 0, 399, 400, 5, 38, 0, 0, 400, 58, 1, 0, 0, 0, 401, 402, 5, 43, 0, 0, 402, 60, 1, 0, 0, 0, 403, 404, 5, 45, 0, 0, 404, 62, 1, 0, 0, 0, 405, 406, 5, 47, 0, 0, 406, 64, 1, 0, 0, 0, 407, 408, 5, 37, 0, 0, 408, 66, 1, 0, 0, 0, 409, 410, 5, 61, 0, 0, 410, 411, 5, 61, 0, 0, 411, 68, 1, 0, 0, 0, 412, 413, 5, 33, 0, 0, 413, 414, 5, 61, 0, 0, 414, 70, 1, 0, 0, 0, 415, 416, 5, 115, 0, 0, 416, 417, 5, 116, 0, 0, 417, 418, 5, 114, 0, 0, 418, 419, 5, 117, 0, 0, 419, 420, 5, 99, 0, 0, 420, 421, 5, 116, 0, 0, 421, 72, 1, 0, 0, 0, 422, 423, 5, 109, 0, 0, 423, 424, 5, 111, 0, 0, 424, 425, 5, 100, 0, 0, 425, 426, 5, 105, 0, 0, 426, 427, 5, 102, 0, 0, 427, 428, 5, 105, 0, 0, 428, 429, 5, 101, 0, 0, 429, 430, 5, 114, 0, 0, 430, 74, 1, 0, 0, 0, 431, 432, 5, 102, 0, 0, 432, 433, 5, 117, 0, 0, 433, 434, 5, 110, 0, 0, 434, 435, 5, 99, 0, 0, 435, 436, 5, 116, 0, 0, 436, 437, 5, 105, 0, 0, 437, 438, 5, 111, 0, 0, 438, 439, 5, 110, 0, 0, 439, 76, 1, 0, 0, 0, 440, 441, 5, 114, 0, 0, 441, 442, 5, 101, 0, 0, 442, 443, 5, 116, 0, 0, 443, 444, 5, 117, 0, 0, 444, 445, 5, 114, 0, 0, 445, 446, 5, 110, 0, 0, 446, 447, 5, 115, 0, 0, 447, 78, 1, 0, 0, 0, 448, 449, 5, 101, 0, 0, 449, 450, 5, 118, 0, 0, 450, 451, 5, 101, 0, 0, 451, 452, 5, 110, 0, 0, 452, 453, 5, 116, 0, 0, 453, 80, 1, 0, 0, 0, 454, 455, 5, 101, 0, 0, 455, 456, 5, 110, 0, 0, 456, 457, 5, 117, 0, 0, 457, 458, 5, 109, 0, 0, 458, 82, 1, 0, 0, 0, 459, 460, 5, 91, 0, 0, 460, 84, 1, 0, 0, 0, 461, 462, 5, 93, 0, 0, 462, 86, 1, 0, 0, 0, 463, 464, 5, 97, 0, 0, 464, 465, 5, 100, 0, 0, 465, 466, 5, 100, 0, 0, 466, 467, 5, 114, 0, 0, 467, 468, 5, 101, 0, 0, 468, 469, 5, 115, 0, 0, 469, 470, 5, 115, 0, 0, 470, 88, 1, 0, 0, 0, 471, 472, 5, 46, 0, 0, 472, 90, 1, 0, 0, 0, 473, 474, 5, 109, 0, 0, 474, 475, 5, 97, 0, 0, 475, 476, 5, 112, 0, 0, 476, 477, 5, 112, 0, 0, 477, 478, 5, 105, 0, 0, 478, 479, 5, 110, 0, 0, 479, 480, 5, 103, 0, 0, 480, 92, 1, 0, 0, 0, 481, 482, 5, 61, 0, 0, 482, 483, 5, 62, 0, 0, 483, 94, 1, 0, 0, 0, 484, 485, 5, 109, 0, 0, 485, 486, 5, 101, 0, 0, 486, 487, 5, 109, 0, 0, 487, 488, 5, 111, 0, 0, 488, 489, 5, 114, 0, 0, 489, 490, 5, 121, 0, 0, 490, 96, 1, 0, 0, 0, 491, 492, 5, 115, 0, 0, 492, 493, 5, 116, 0, 0, 493, 494, 5, 111, 0, 0, 494, 495, 5, 114, 0, 0, 495, 496, 5, 97, 0, 0, 496, 497, 5, 103, 0, 0, 497, 498, 5, 101, 0, 0, 498, 98, 1, 0, 0, 0, 499, 500, 5, 99, 0, 0, 500, 501, 5, 97, 0, 0, 501, 502, 5, 108, 0, 0, 502, 503, 5, 108, 0, 0, 503, 504, 5, 100, 0, 0, 504, 505, 5, 97, 0, 0, 505, 506, 5, 116, 0, 0, 506, 507, 5, 97, 0, 0, 507, 100, 1, 0, 0, 0, 508, 509, 5, 105, 0, 0, 509, 510, 5, 102, 0, 0, 510, 102, 1, 0, 0, 0, 511, 512, 5, 101, 0, 0, 512, 513, 5, 108, 0, 0, 513, 514, 5, 115, 0, 0, 514, 515, 5, 101, 0, 0, 515, 104, 1, 0, 0, 0, 516, 517, 5, 116, 0, 0, 517, 518, 5, 114, 0, 0, 518, 519, 5, 121, 0, 0, 519, 106, 1, 0, 0, 0, 520, 521, 5, 99, 0, 0, 521, 522, 5, 97, 0, 0, 522, 523, 5, 116, 0, 0, 523, 524, 5, 99, 0, 0, 524, 525, 5, 104, 0, 0, 525, 108, 1, 0, 0, 0, 526, 527, 5, 119, 0, 0, 527, 528, 5, 104, 0, 0, 528, 529, 5, 105, 0, 0, 529, 530, 5, 108, 0, 0, 530, 531, 5, 101, 0, 0, 531, 110, 1, 0, 0, 0, 532, 533, 5, 117, 0, 0, 533, 534, 5, 110, 0, 0, 534, 535, 5, 99, 0, 0, 535, 536, 5, 104, 0, 0, 536, 537, 5, 101, 0, 0, 537, 538, 5, 99, 0, 0, 538, 539, 5, 107, 0, 0, 539, 540, 5, 101, 0, 0, 540, 541, 5, 100, 0, 0, 541, 112, 1, 0, 0, 0, 542, 543, 5, 97, 0, 0, 543, 544, 5, 115, 0, 0, 544, 545, 5, 115, 0, 0, 545, 546, 5, 101, 0, 0, 546, 547, 5, 109, 0, 0, 547, 548, 5, 98, 0, 0, 548, 549, 5, 108, 0, 0, 549, 550, 5, 121, 0, 0, 550, 114, 1, 0, 0, 0, 551, 552, 5, 100, 0, 0, 552, 553, 5, 111, 0, 0, 553, 116, 1, 0, 0, 0, 554, 555, 5, 114, 0, 0, 555, 556, 5, 101, 0, 0, 556, 557, 5, 116, 0, 0, 557, 558, 5, 117, 0, 0, 558, 559, 5, 114, 0, 0, 559, 560, 5, 110, 0, 0, 560, 118, 1, 0, 0, 0, 561, 562, 5, 116, 0, 0, 562, 563, 5, 104, 0, 0, 563, 564, 5, 114, 0, 0, 564, 565, 5, 111, 0, 0, 565, 566, 5, 119, 0, 0, 566, 120, 1, 0, 0, 0, 567, 568, 5, 101, 0, 0, 568, 569, 5, 109, 0, 0, 569, 570, 5, 105, 0, 0, 570, 571, 5, 116, 0, 0, 571, 122, 1, 0, 0, 0, 572, 573, 5, 114, 0, 0, 573, 574, 5, 101, 0, 0, 574, 575, 5, 118, 0, 0, 575, 576, 5, 101, 0, 0, 576, 577, 5, 114, 0, 0, 577, 578, 5, 116, 0, 0, 578, 124, 1, 0, 0, 0, 579, 580, 5, 118, 0, 0, 580, 581, 5, 97, 0, 0, 581, 582, 5, 114, 0, 0, 582, 126, 1, 0, 0, 0, 583, 584, 5, 98, 0, 0, 584, 585, 5, 111, 0, 0, 585, 586, 5, 111, 0, 0, 586, 587, 5, 108, 0, 0, 587, 128, 1, 0, 0, 0, 588, 589, 5, 115, 0, 0, 589, 590, 5, 116, 0, 0, 590, 591, 5, 114, 0, 0, 591, 592, 5, 105, 0, 0, 592, 593, 5, 110, 0, 0, 593, 594, 5, 103, 0, 0, 594, 130, 1, 0, 0, 0, 595, 596, 5, 98, 0, 0, 596, 597, 5, 121, 0, 0, 597, 598, 5, 116, 0, 0, 598, 599, 5, 101, 0, 0, 599, 132, 1, 0, 0, 0, 600, 601, 5, 43, 0, 0, 601, 602, 5, 43, 0, 0, 602, 134, 1, 0, 0, 0, 603, 604, 5, 45, 0, 0, 604, 605, 5, 45, 0, 0, 605, 136, 1, 0, 0, 0, 606, 607, 5, 110, 0, 0, 607, 608, 5, 101, 0, 0, 608, 609, 5, 119, 0, 0, 609, 138, 1, 0, 0, 0, 610, 611, 5, 58, 0, 0, 611, 140, 1, 0, 0, 0, 612, 613, 5, 100, 0, 0, 613, 614, 5, 101, 0, 0, 614, 615, 5, 108, 0, 0, 615, 616, 5, 101, 0, 0, 616, 617, 5, 116, 0, 0, 617, 618, 5, 101, 0, 0, 618, 142, 1, 0, 0, 0, 619, 620, 5, 33, 0, 0, 620, 144, 1, 0, 0, 0, 621, 622, 5, 42, 0, 0, 622, 623, 5, 42, 0, 0, 623, 146, 1, 0, 0, 0, 624, 625, 5, 60, 0, 0, 625, 626, 5, 60, 0, 0, 626, 148, 1, 0, 0, 0, 627, 628, 5, 62, 0, 0, 628, 629, 5, 62, 0, 0, 629, 150, 1, 0, 0, 0, 630, 631, 5, 38, 0, 0, 631, 632, 5, 38, 0, 0, 632, 152, 1, 0, 0, 0, 633, 634, 5, 63, 0, 0, 634, 154, 1, 0, 0, 0, 635, 636, 5, 124, 0, 0, 636, 637, 5, 61, 0, 0, 637, 156, 1, 0, 0, 0, 638, 639, 5, 94, 0, 0, 639, 640, 5, 61, 0, 0, 640, 158, 1, 0, 0, 0, 641, 642, 5, 38, 0, 0, 642, 643, 5, 61, 0, 0, 643, 160, 1, 0, 0, 0, 644, 645, 5, 60, 0, 0, 645, 646, 5, 60, 0, 0, 646, 647, 5, 61, 0, 0, 647, 162, 1, 0, 0, 0, 648, 649, 5, 62, 0, 0, 649, 650, 5, 62, 0, 0, 650, 651, 5, 61, 0, 0, 651, 164, 1, 0, 0, 0, 652, 653, 5, 43, 0, 0, 653, 654, 5, 61, 0, 0, 654, 166, 1, 0, 0, 0, 655, 656, 5, 45, 0, 0, 656, 657, 5, 61, 0, 0, 657, 168, 1, 0, 0, 0, 658, 659, 5, 42, 0, 0, 659, 660, 5, 61, 0, 0, 660, 170, 1, 0, 0, 0, 661, 662, 5, 47, 0, 0, 662, 663, 5, 61, 0, 0, 663, 172, 1, 0, 0, 0, 664, 665, 5, 37, 0, 0, 665, 666, 5, 61, 0, 0, 666, 174, 1, 0, 0, 0, 667, 668, 5, 108, 0, 0, 668, 669, 5, 101, 0, 0, 669, 670, 5, 116, 0, 0, 670, 176, 1, 0, 0, 0, 671, 672, 5, 58, 0, 0, 672, 673, 5, 61, 0, 0, 673, 178, 1, 0, 0, 0, 674, 675, 5, 61, 0, 0, 675, 676, 5, 58, 0, 0, 676, 180, 1, 0, 0, 0, 677, 678, 5, 115, 0, 0, 678, 679, 5, 119, 0, 0, 679, 680, 5, 105, 0, 0, 680, 681, 5, 116, 0, 0, 681, 682, 5, 99, 0, 0, 682, 683, 5, 104, 0, 0, 683, 182, 1, 0, 0, 0, 684, 685, 5, 99, 0, 0, 685, 686, 5, 97, 0, 0, 686, 687, 5, 115, 0, 0, 687, 688, 5, 101, 0, 0, 688, 184, 1, 0, 0, 0, 689, 690, 5, 100, 0, 0, 690, 691, 5, 101, 0, 0, 691, 692, 5, 102, 0, 0, 692, 693, 5, 97, 0, 0, 693, 694, 5, 117, 0, 0, 694, 695, 5, 108, 0, 0, 695, 696, 5, 116, 0, 0, 696, 186, 1, 0, 0, 0, 697, 698, 5, 45, 0, 0, 698, 699, 5, 62, 0, 0, 699, 188, 1, 0, 0, 0, 700, 701, 5, 99, 0, 0, 701, 702, 5, 97, 0, 0, 702, 703, 5, 108, 0, 0, 703, 704, 5, 108, 0, 0, 704, 705, 5, 98, 0, 0, 705, 706, 5, 97, 0, 0, 706, 707, 5, 99, 0, 0, 707, 708, 5, 107, 0, 0, 708, 190, 1, 0, 0, 0, 709, 710, 5, 111, 0, 0, 710, 711, 5, 118, 0, 0, 711, 712, 5, 101, 0, 0, 712, 713, 5, 114, 0, 0, 713, 714, 5, 114, 0, 0, 714, 715, 5, 105, 0, 0, 715, 716, 5, 100, 0, 0, 716, 717, 5, 101, 0, 0, 717, 192, 1, 0, 0, 0, 718, 719, 5, 105, 0, 0, 719, 720, 5, 110, 0, 0, 720, 721, 5, 116, 0, 0, 721, 723, 1, 0, 0, 0, 722, 724, 3, 203, 101, 0, 723, 722, 1, 0, 0, 0, 723, 724, 1, 0, 0, 0, 724, 194, 1, 0, 0, 0, 725, 726, 5, 117, 0, 0, 726, 727, 5, 105, 0, 0, 727, 728, 5, 110, 0, 0, 728, 729, 5, 116, 0, 0, 729, 731, 1, 0, 0, 0, 730, 732, 3, 203, 101, 0, 731, 730, 1, 0, 0, 0, 731, 732, 1, 0, 0, 0, 732, 196, 1, 0, 0, 0, 733, 734, 5, 98, 0, 0, 734, 735, 5, 121, 0, 0, 735, 736, 5, 116, 0, 0, 736, 737, 5, 101, 0, 0, 737, 738, 5, 115, 0, 0, 738, 740, 1, 0, 0, 0, 739, 741, 3, 205, 102, 0, 740, 739, 1, 0, 0, 0, 740, 741, 1, 0, 0, 0, 741, 198, 1, 0, 0, 0, 742, 743, 5, 102, 0, 0, 743, 744, 5, 105, 0, 0, 744, 745, 5, 120, 0, 0, 745, 746, 5, 101, 0, 0, 746, 747, 5, 100, 0, 0, 747, 755, 1, 0, 0, 0, 748, 749, 3, 203, 101, 0, 749, 751, 5, 120, 0, 0, 750, 752, 7, 0, 0, 0, 751, 750, 1, 0, 0, 0, 752, 753, 1, 0, 0, 0, 753, 751, 1, 0, 0, 0, 753, 754, 1, 0, 0, 0, 754, 756, 1, 0, 0, 0, 755, 748, 1, 0, 0, 0, 755, 756, 1, 0, 0, 0, 756, 200, 1, 0, 0, 0, 757, 758, 5, 117, 0, 0, 758, 759, 5, 102, 0, 0, 759, 760, 5, 105, 0, 0, 760, 761, 5, 120, 0, 0, 761, 762, 5, 101, 0, 0, 762, 763, 5, 100, 0, 0, 763, 771, 1, 0, 0, 0, 764, 765, 3, 203, 101, 0, 765, 767, 5, 120, 0, 0, 766, 768, 7, 0, 0, 0, 767, 766, 1, 0, 0, 0, 768, 769, 1, 0, 0, 0, 769, 767, 1, 0, 0, 0, 769, 770, 1, 0, 0, 0, 770, 772, 1, 0, 0, 0, 771, 764, 1, 0, 0, 0, 771, 772, 1, 0, 0, 0, 772, 202, 1, 0, 0, 0, 773, 857, 5, 56, 0, 0, 774, 775, 5, 49, 0, 0, 775, 857, 5, 54, 0, 0, 776, 777, 5, 50, 0, 0, 777, 857, 5, 52, 0, 0, 778, 779, 5, 51, 0, 0, 779, 857, 5, 50, 0, 0, 780, 781, 5, 52, 0, 0, 781, 857, 5, 48, 0, 0, 782, 783, 5, 52, 0, 0, 783, 857, 5, 56, 0, 0, 784, 785, 5, 53, 0, 0, 785, 857, 5, 54, 0, 0, 786, 787, 5, 54, 0, 0, 787, 857, 5, 52, 0, 0, 788, 789, 5, 55, 0, 0, 789, 857, 5, 50, 0, 0, 790, 791, 5, 56, 0, 0, 791, 857, 5, 48, 0, 0, 792, 793, 5, 56, 0, 0, 793, 857, 5, 56, 0, 0, 794, 795, 5, 57, 0, 0, 795, 857, 5, 54, 0, 0, 796, 797, 5, 49, 0, 0, 797, 798, 5, 48, 0, 0, 798, 857, 5, 52, 0, 0, 799, 800, 5, 49, 0, 0, 800, 801, 5, 49, 0, 0, 801, 857, 5, 50, 0, 0, 802, 803, 5, 49, 0, 0, 803, 804, 5, 50, 0, 0, 804, 857, 5, 48, 0, 0, 805, 806, 5, 49, 0, 0, 806, 807, 5, 50, 0, 0, 807, 857, 5, 56, 0, 0, 808, 809, 5, 49, 0, 0, 809, 810, 5, 51, 0, 0, 810, 857, 5, 54, 0, 0, 811, 812, 5, 49, 0, 0, 812, 813, 5, 52, 0, 0, 813, 857, 5, 52, 0, 0, 814, 815, 5, 49, 0, 0, 815, 816, 5, 53, 0, 0, 816, 857, 5, 50, 0, 0, 817, 818, 5, 49, 0, 0, 818, 819, 5, 54, 0, 0, 819, 857, 5, 48, 0, 0, 820, 821, 5, 49, 0, 0, 821, 822, 5, 54, 0, 0, 822, 857, 5, 56, 0, 0, 823, 824, 5, 49, 0, 0, 824, 825, 5, 55, 0, 0, 825, 857, 5, 54, 0, 0, 826, 827, 5, 49, 0, 0, 827, 828, 5, 56, 0, 0, 828, 857, 5, 52, 0, 0, 829, 830, 5, 49, 0, 0, 830, 831, 5, 57, 0, 0, 831, 857, 5, 50, 0, 0, 832, 833, 5, 50, 0, 0, 833, 834, 5, 48, 0, 0, 834, 857, 5, 48, 0, 0, 835, 836, 5, 50, 0, 0, 836, 837, 5, 48, 0, 0, 837, 857, 5, 56, 0, 0, 838, 839, 5, 50, 0, 0, 839, 840, 5, 49, 0, 0, 840, 857, 5, 54, 0, 0, 841, 842, 5, 50, 0, 0, 842, 843, 5, 50, 0, 0, 843, 857, 5, 52, 0, 0, 844, 845, 5, 50, 0, 0, 845, 846, 5, 51, 0, 0, 846, 857, 5, 50, 0, 0, 847, 848, 5, 50, 0, 0, 848, 849, 5, 52, 0, 0, 849, 857, 5, 48, 0, 0, 850, 851, 5, 50, 0, 0, 851, 852, 5, 52, 0, 0, 852, 857, 5, 56, 0, 0, 853, 854, 5, 50, 0, 0, 854, 855, 5, 53, 0, 0, 855, 857, 5, 54, 0, 0, 856, 773, 1, 0, 0, 0, 856, 774, 1, 0, 0, 0, 856, 776, 1, 0, 0, 0, 856, 778, 1, 0, 0, 0, 856, 780, 1, 0, 0, 0, 856, 782, 1, 0, 0, 0, 856, 784, 1, 0, 0, 0, 856, 786, 1, 0, 0, 0, 856, 788, 1, 0, 0, 0, 856, 790, 1, 0, 0, 0, 856, 792, 1, 0, 0, 0, 856, 794, 1, 0, 0, 0, 856, 796, 1, 0, 0, 0, 856, 799, 1, 0, 0, 0, 856, 802, 1, 0, 0, 0, 856, 805, 1, 0, 0, 0, 856, 808, 1, 0, 0, 0, 856, 811, 1, 0, 0, 0, 856, 814, 1, 0, 0, 0, 856, 817, 1, 0, 0, 0, 856, 820, 1, 0, 0, 0, 856, 823, 1, 0, 0, 0, 856, 826, 1, 0, 0, 0, 856, 829, 1, 0, 0, 0, 856, 832, 1, 0, 0, 0, 856, 835, 1, 0, 0, 0, 856, 838, 1, 0, 0, 0, 856, 841, 1, 0, 0, 0, 856, 844, 1, 0, 0, 0, 856, 847, 1, 0, 0, 0, 856, 850, 1, 0, 0, 0, 856, 853, 1, 0, 0, 0, 857, 204, 1, 0, 0, 0, 858, 864, 7, 1, 0, 0, 859, 860, 7, 2, 0, 0, 860, 864, 7, 0, 0, 0, 861, 862, 5, 51, 0, 0, 862, 864, 7, 3, 0, 0, 863, 858, 1, 0, 0, 0, 863, 859, 1, 0, 0, 0, 863, 861, 1, 0, 0, 0, 864, 206, 1, 0, 0, 0, 865, 866, 5, 116, 0, 0, 866, 867, 5, 114, 0, 0, 867, 868, 5, 117, 0, 0, 868, 875, 5, 101, 0, 0, 869, 870, 5, 102, 0, 0, 870, 871, 5, 97, 0, 0, 871, 872, 5, 108, 0, 0, 872, 873, 5, 115, 0, 0, 873, 875, 5, 101, 0, 0, 874, 865, 1, 0, 0, 0, 874, 869, 1, 0, 0, 0, 875, 208, 1, 0, 0, 0, 876, 883, 3, 211, 105, 0, 877, 879, 3, 211, 105, 0, 878, 877, 1, 0, 0, 0, 878, 879, 1, 0, 0, 0, 879, 880, 1, 0, 0, 0, 880, 881, 5, 46, 0, 0, 881, 883, 3, 211, 105, 0, 882, 876, 1, 0, 0, 0, 882, 878, 1, 0, 0, 0, 883, 889, 1, 0, 0, 0, 884, 886, 7, 4, 0, 0, 885, 887, 5, 45, 0, 0, 886, 885, 1, 0, 0, 0, 886, 887, 1, 0, 0, 0, 887, 888, 1, 0, 0, 0, 888, 890, 3, 211, 105, 0, 889, 884, 1, 0, 0, 0, 889, 890, 1, 0, 0, 0, 890, 210, 1, 0, 0, 0, 891, 898, 7, 0, 0, 0, 892, 894, 5, 95, 0, 0, 893, 892, 1, 0, 0, 0, 893, 894, 1, 0, 0, 0, 894, 895, 1, 0, 0, 0, 895, 897, 7, 0, 0, 0, 896, 893, 1, 0, 0, 0, 897, 900, 1, 0, 0, 0, 898, 896, 1, 0, 0, 0, 898, 899, 1, 0, 0, 0, 899, 212, 1, 0, 0, 0, 900, 898, 1, 0, 0, 0, 901, 902, 5, 48, 0, 0, 902, 903, 7, 5, 0, 0, 903, 904, 3, 215, 107, 0, 904, 214, 1, 0, 0, 0, 905, 912, 3, 221, 110, 0, 906, 908, 5, 95, 0, 0, 907, 906, 1, 0, 0, 0, 907, 908, 1, 0, 0, 0, 908, 909, 1, 0, 0, 0, 909, 911, 3, 221, 110, 0, 910, 907, 1, 0, 0, 0, 911, 914, 1, 0, 0, 0, 912, 910, 1, 0, 0, 0, 912, 913, 1, 0, 0, 0, 913, 216, 1, 0, 0, 0, 914, 912, 1, 0, 0, 0, 915, 916, 5, 119, 0, 0, 916, 917, 5, 101, 0, 0, 917, 972, 5, 105, 0, 0, 918, 919, 5, 103, 0, 0, 919, 920, 5, 119, 0, 0, 920, 921, 5, 101, 0, 0, 921, 972, 5, 105, 0, 0, 922, 923, 5, 115, 0, 0, 923, 924, 5, 122, 0, 0, 924, 925, 5, 97, 0, 0, 925, 926, 5, 98, 0, 0, 926, 972, 5, 111, 0, 0, 927, 928, 5, 102, 0, 0, 928, 929, 5, 105, 0, 0, 929, 930, 5, 110, 0, 0, 930, 931, 5, 110, 0, 0, 931, 932, 5, 101, 0, 0, 932, 972, 5, 121, 0, 0, 933, 934, 5, 101, 0, 0, 934, 935, 5, 116, 0, 0, 935, 936, 5, 104, 0, 0, 936, 937, 5, 101, 0, 0, 937, 972, 5, 114, 0, 0, 938, 939, 5, 115, 0, 0, 939, 940, 5, 101, 0, 0, 940, 941, 5, 99, 0, 0, 941, 942, 5, 111, 0, 0, 942, 943, 5, 110, 0, 0, 943, 944, 5, 100, 0, 0, 944, 972, 5, 115, 0, 0, 945, 946, 5, 109, 0, 0, 946, 947, 5, 105, 0, 0, 947, 948, 5, 110, 0, 0, 948, 949, 5, 117, 0, 0, 949, 950, 5, 116, 0, 0, 950, 951, 5, 101, 0, 0, 951, 972, 5, 115, 0, 0, 952, 953, 5, 104, 0, 0, 953, 954, 5, 111, 0, 0, 954, 955, 5, 117, 0, 0, 955, 956, 5, 114, 0, 0, 956, 972, 5, 115, 0, 0, 957, 958, 5, 100, 0, 0, 958, 959, 5, 97, 0, 0, 959, 960, 5, 121, 0, 0, 960, 972, 5, 115, 0, 0, 961, 962, 5, 119, 0, 0, 962, 963, 5, 101, 0, 0, 963, 964, 5, 101, 0, 0, 964, 965, 5, 107, 0, 0, 965, 972, 5, 115, 0, 0, 966, 967, 5, 121, 0, 0, 967, 968, 5, 101, 0, 0, 968, 969, 5, 97, 0, 0, 969, 970, 5, 114, 0, 0, 970, 972, 5, 115, 0, 0, 971, 915, 1, 0, 0, 0, 971, 918, 1, 0, 0, 0, 971, 922, 1, 0, 0, 0, 971, 927, 1, 0, 0, 0, 971, 933, 1, 0, 0, 0, 971, 938, 1, 0, 0, 0, 971, 945, 1, 0, 0, 0, 971, 952, 1, 0, 0, 0, 971, 957, 1, 0, 0, 0, 971, 961, 1, 0, 0, 0, 971, 966, 1, 0, 0, 0, 972, 218, 1, 0, 0, 0, 973, 974, 5, 104, 0, 0, 974, 975, 5, 101, 0, 0, 975, 976, 5, 120, 0, 0, 976, 987, 1, 0, 0, 0, 977, 979, 5, 34, 0, 0, 978, 980, 3, 215, 107, 0, 979, 978, 1, 0, 0, 0, 979, 980, 1, 0, 0, 0, 980, 981, 1, 0, 0, 0, 981, 988, 5, 34, 0, 0, 982, 984, 5, 39, 0, 0, 983, 985, 3, 215, 107, 0, 984, 983, 1, 0, 0, 0, 984, 985, 1, 0, 0, 0, 985, 986, 1, 0, 0, 0, 986, 988, 5, 39, 0, 0, 987, 977, 1, 0, 0, 0, 987, 982, 1, 0, 0, 0, 988, 220, 1, 0, 0, 0, 989, 990, 7, 6, 0, 0, 990, 222, 1, 0, 0, 0, 991, 992, 5, 97, 0, 0, 992, 993, 5, 98, 0, 0, 993, 994, 5, 115, 0, 0, 994, 995, 5, 116, 0, 0, 995, 996, 5, 114, 0, 0, 996, 997, 5, 97, 0, 0, 997, 998, 5, 99, 0, 0, 998, 1080, 5, 116, 0, 0, 999, 1e3, 5, 97, 0, 0, 1e3, 1001, 5, 102, 0, 0, 1001, 1002, 5, 116, 0, 0, 1002, 1003, 5, 101, 0, 0, 1003, 1080, 5, 114, 0, 0, 1004, 1005, 5, 99, 0, 0, 1005, 1006, 5, 97, 0, 0, 1006, 1007, 5, 115, 0, 0, 1007, 1080, 5, 101, 0, 0, 1008, 1009, 5, 99, 0, 0, 1009, 1010, 5, 97, 0, 0, 1010, 1011, 5, 116, 0, 0, 1011, 1012, 5, 99, 0, 0, 1012, 1080, 5, 104, 0, 0, 1013, 1014, 5, 100, 0, 0, 1014, 1015, 5, 101, 0, 0, 1015, 1016, 5, 102, 0, 0, 1016, 1017, 5, 97, 0, 0, 1017, 1018, 5, 117, 0, 0, 1018, 1019, 5, 108, 0, 0, 1019, 1080, 5, 116, 0, 0, 1020, 1021, 5, 102, 0, 0, 1021, 1022, 5, 105, 0, 0, 1022, 1023, 5, 110, 0, 0, 1023, 1024, 5, 97, 0, 0, 1024, 1080, 5, 108, 0, 0, 1025, 1026, 5, 105, 0, 0, 1026, 1080, 5, 110, 0, 0, 1027, 1028, 5, 105, 0, 0, 1028, 1029, 5, 110, 0, 0, 1029, 1030, 5, 108, 0, 0, 1030, 1031, 5, 105, 0, 0, 1031, 1032, 5, 110, 0, 0, 1032, 1080, 5, 101, 0, 0, 1033, 1034, 5, 108, 0, 0, 1034, 1035, 5, 101, 0, 0, 1035, 1080, 5, 116, 0, 0, 1036, 1037, 5, 109, 0, 0, 1037, 1038, 5, 97, 0, 0, 1038, 1039, 5, 116, 0, 0, 1039, 1040, 5, 99, 0, 0, 1040, 1080, 5, 104, 0, 0, 1041, 1042, 5, 110, 0, 0, 1042, 1043, 5, 117, 0, 0, 1043, 1044, 5, 108, 0, 0, 1044, 1080, 5, 108, 0, 0, 1045, 1046, 5, 111, 0, 0, 1046, 1080, 5, 102, 0, 0, 1047, 1048, 5, 114, 0, 0, 1048, 1049, 5, 101, 0, 0, 1049, 1050, 5, 108, 0, 0, 1050, 1051, 5, 111, 0, 0, 1051, 1052, 5, 99, 0, 0, 1052, 1053, 5, 97, 0, 0, 1053, 1054, 5, 116, 0, 0, 1054, 1055, 5, 97, 0, 0, 1055, 1056, 5, 98, 0, 0, 1056, 1057, 5, 108, 0, 0, 1057, 1080, 5, 101, 0, 0, 1058, 1059, 5, 115, 0, 0, 1059, 1060, 5, 116, 0, 0, 1060, 1061, 5, 97, 0, 0, 1061, 1062, 5, 116, 0, 0, 1062, 1063, 5, 105, 0, 0, 1063, 1080, 5, 99, 0, 0, 1064, 1065, 5, 115, 0, 0, 1065, 1066, 5, 119, 0, 0, 1066, 1067, 5, 105, 0, 0, 1067, 1068, 5, 116, 0, 0, 1068, 1069, 5, 99, 0, 0, 1069, 1080, 5, 104, 0, 0, 1070, 1071, 5, 116, 0, 0, 1071, 1072, 5, 114, 0, 0, 1072, 1080, 5, 121, 0, 0, 1073, 1074, 5, 116, 0, 0, 1074, 1075, 5, 121, 0, 0, 1075, 1076, 5, 112, 0, 0, 1076, 1077, 5, 101, 0, 0, 1077, 1078, 5, 111, 0, 0, 1078, 1080, 5, 102, 0, 0, 1079, 991, 1, 0, 0, 0, 1079, 999, 1, 0, 0, 0, 1079, 1004, 1, 0, 0, 0, 1079, 1008, 1, 0, 0, 0, 1079, 1013, 1, 0, 0, 0, 1079, 1020, 1, 0, 0, 0, 1079, 1025, 1, 0, 0, 0, 1079, 1027, 1, 0, 0, 0, 1079, 1033, 1, 0, 0, 0, 1079, 1036, 1, 0, 0, 0, 1079, 1041, 1, 0, 0, 0, 1079, 1045, 1, 0, 0, 0, 1079, 1047, 1, 0, 0, 0, 1079, 1058, 1, 0, 0, 0, 1079, 1064, 1, 0, 0, 0, 1079, 1070, 1, 0, 0, 0, 1079, 1073, 1, 0, 0, 0, 1080, 224, 1, 0, 0, 0, 1081, 1082, 5, 97, 0, 0, 1082, 1083, 5, 110, 0, 0, 1083, 1084, 5, 111, 0, 0, 1084, 1085, 5, 110, 0, 0, 1085, 1086, 5, 121, 0, 0, 1086, 1087, 5, 109, 0, 0, 1087, 1088, 5, 111, 0, 0, 1088, 1089, 5, 117, 0, 0, 1089, 1090, 5, 115, 0, 0, 1090, 226, 1, 0, 0, 0, 1091, 1092, 5, 98, 0, 0, 1092, 1093, 5, 114, 0, 0, 1093, 1094, 5, 101, 0, 0, 1094, 1095, 5, 97, 0, 0, 1095, 1096, 5, 107, 0, 0, 1096, 228, 1, 0, 0, 0, 1097, 1098, 5, 99, 0, 0, 1098, 1099, 5, 111, 0, 0, 1099, 1100, 5, 110, 0, 0, 1100, 1101, 5, 115, 0, 0, 1101, 1102, 5, 116, 0, 0, 1102, 1103, 5, 97, 0, 0, 1103, 1104, 5, 110, 0, 0, 1104, 1105, 5, 116, 0, 0, 1105, 230, 1, 0, 0, 0, 1106, 1107, 5, 116, 0, 0, 1107, 1108, 5, 114, 0, 0, 1108, 1109, 5, 97, 0, 0, 1109, 1110, 5, 110, 0, 0, 1110, 1111, 5, 115, 0, 0, 1111, 1112, 5, 105, 0, 0, 1112, 1113, 5, 101, 0, 0, 1113, 1114, 5, 110, 0, 0, 1114, 1115, 5, 116, 0, 0, 1115, 232, 1, 0, 0, 0, 1116, 1117, 5, 105, 0, 0, 1117, 1118, 5, 109, 0, 0, 1118, 1119, 5, 109, 0, 0, 1119, 1120, 5, 117, 0, 0, 1120, 1121, 5, 116, 0, 0, 1121, 1122, 5, 97, 0, 0, 1122, 1123, 5, 98, 0, 0, 1123, 1124, 5, 108, 0, 0, 1124, 1125, 5, 101, 0, 0, 1125, 234, 1, 0, 0, 0, 1126, 1127, 5, 99, 0, 0, 1127, 1128, 5, 111, 0, 0, 1128, 1129, 5, 110, 0, 0, 1129, 1130, 5, 116, 0, 0, 1130, 1131, 5, 105, 0, 0, 1131, 1132, 5, 110, 0, 0, 1132, 1133, 5, 117, 0, 0, 1133, 1134, 5, 101, 0, 0, 1134, 236, 1, 0, 0, 0, 1135, 1136, 5, 108, 0, 0, 1136, 1137, 5, 101, 0, 0, 1137, 1138, 5, 97, 0, 0, 1138, 1139, 5, 118, 0, 0, 1139, 1140, 5, 101, 0, 0, 1140, 238, 1, 0, 0, 0, 1141, 1142, 5, 101, 0, 0, 1142, 1143, 5, 120, 0, 0, 1143, 1144, 5, 116, 0, 0, 1144, 1145, 5, 101, 0, 0, 1145, 1146, 5, 114, 0, 0, 1146, 1147, 5, 110, 0, 0, 1147, 1148, 5, 97, 0, 0, 1148, 1149, 5, 108, 0, 0, 1149, 240, 1, 0, 0, 0, 1150, 1151, 5, 105, 0, 0, 1151, 1152, 5, 110, 0, 0, 1152, 1153, 5, 100, 0, 0, 1153, 1154, 5, 101, 0, 0, 1154, 1155, 5, 120, 0, 0, 1155, 1156, 5, 101, 0, 0, 1156, 1157, 5, 100, 0, 0, 1157, 242, 1, 0, 0, 0, 1158, 1159, 5, 105, 0, 0, 1159, 1160, 5, 110, 0, 0, 1160, 1161, 5, 116, 0, 0, 1161, 1162, 5, 101, 0, 0, 1162, 1163, 5, 114, 0, 0, 1163, 1164, 5, 110, 0, 0, 1164, 1165, 5, 97, 0, 0, 1165, 1166, 5, 108, 0, 0, 1166, 244, 1, 0, 0, 0, 1167, 1168, 5, 112, 0, 0, 1168, 1169, 5, 97, 0, 0, 1169, 1170, 5, 121, 0, 0, 1170, 1171, 5, 97, 0, 0, 1171, 1172, 5, 98, 0, 0, 1172, 1173, 5, 108, 0, 0, 1173, 1174, 5, 101, 0, 0, 1174, 246, 1, 0, 0, 0, 1175, 1176, 5, 112, 0, 0, 1176, 1177, 5, 114, 0, 0, 1177, 1178, 5, 105, 0, 0, 1178, 1179, 5, 118, 0, 0, 1179, 1180, 5, 97, 0, 0, 1180, 1181, 5, 116, 0, 0, 1181, 1182, 5, 101, 0, 0, 1182, 248, 1, 0, 0, 0, 1183, 1184, 5, 112, 0, 0, 1184, 1185, 5, 117, 0, 0, 1185, 1186, 5, 98, 0, 0, 1186, 1187, 5, 108, 0, 0, 1187, 1188, 5, 105, 0, 0, 1188, 1189, 5, 99, 0, 0, 1189, 250, 1, 0, 0, 0, 1190, 1191, 5, 118, 0, 0, 1191, 1192, 5, 105, 0, 0, 1192, 1193, 5, 114, 0, 0, 1193, 1194, 5, 116, 0, 0, 1194, 1195, 5, 117, 0, 0, 1195, 1196, 5, 97, 0, 0, 1196, 1197, 5, 108, 0, 0, 1197, 252, 1, 0, 0, 0, 1198, 1199, 5, 112, 0, 0, 1199, 1200, 5, 117, 0, 0, 1200, 1201, 5, 114, 0, 0, 1201, 1202, 5, 101, 0, 0, 1202, 254, 1, 0, 0, 0, 1203, 1204, 5, 116, 0, 0, 1204, 1205, 5, 121, 0, 0, 1205, 1206, 5, 112, 0, 0, 1206, 1207, 5, 101, 0, 0, 1207, 256, 1, 0, 0, 0, 1208, 1209, 5, 118, 0, 0, 1209, 1210, 5, 105, 0, 0, 1210, 1211, 5, 101, 0, 0, 1211, 1212, 5, 119, 0, 0, 1212, 258, 1, 0, 0, 0, 1213, 1214, 5, 103, 0, 0, 1214, 1215, 5, 108, 0, 0, 1215, 1216, 5, 111, 0, 0, 1216, 1217, 5, 98, 0, 0, 1217, 1218, 5, 97, 0, 0, 1218, 1219, 5, 108, 0, 0, 1219, 260, 1, 0, 0, 0, 1220, 1221, 5, 99, 0, 0, 1221, 1222, 5, 111, 0, 0, 1222, 1223, 5, 110, 0, 0, 1223, 1224, 5, 115, 0, 0, 1224, 1225, 5, 116, 0, 0, 1225, 1226, 5, 114, 0, 0, 1226, 1227, 5, 117, 0, 0, 1227, 1228, 5, 99, 0, 0, 1228, 1229, 5, 116, 0, 0, 1229, 1230, 5, 111, 0, 0, 1230, 1231, 5, 114, 0, 0, 1231, 262, 1, 0, 0, 0, 1232, 1233, 5, 102, 0, 0, 1233, 1234, 5, 97, 0, 0, 1234, 1235, 5, 108, 0, 0, 1235, 1236, 5, 108, 0, 0, 1236, 1237, 5, 98, 0, 0, 1237, 1238, 5, 97, 0, 0, 1238, 1239, 5, 99, 0, 0, 1239, 1240, 5, 107, 0, 0, 1240, 264, 1, 0, 0, 0, 1241, 1242, 5, 114, 0, 0, 1242, 1243, 5, 101, 0, 0, 1243, 1244, 5, 99, 0, 0, 1244, 1245, 5, 101, 0, 0, 1245, 1246, 5, 105, 0, 0, 1246, 1247, 5, 118, 0, 0, 1247, 1248, 5, 101, 0, 0, 1248, 266, 1, 0, 0, 0, 1249, 1253, 3, 269, 134, 0, 1250, 1252, 3, 271, 135, 0, 1251, 1250, 1, 0, 0, 0, 1252, 1255, 1, 0, 0, 0, 1253, 1251, 1, 0, 0, 0, 1253, 1254, 1, 0, 0, 0, 1254, 268, 1, 0, 0, 0, 1255, 1253, 1, 0, 0, 0, 1256, 1257, 7, 7, 0, 0, 1257, 270, 1, 0, 0, 0, 1258, 1259, 7, 8, 0, 0, 1259, 272, 1, 0, 0, 0, 1260, 1261, 5, 117, 0, 0, 1261, 1262, 5, 110, 0, 0, 1262, 1263, 5, 105, 0, 0, 1263, 1264, 5, 99, 0, 0, 1264, 1265, 5, 111, 0, 0, 1265, 1266, 5, 100, 0, 0, 1266, 1268, 5, 101, 0, 0, 1267, 1260, 1, 0, 0, 0, 1267, 1268, 1, 0, 0, 0, 1268, 1285, 1, 0, 0, 0, 1269, 1273, 5, 34, 0, 0, 1270, 1272, 3, 275, 137, 0, 1271, 1270, 1, 0, 0, 0, 1272, 1275, 1, 0, 0, 0, 1273, 1271, 1, 0, 0, 0, 1273, 1274, 1, 0, 0, 0, 1274, 1276, 1, 0, 0, 0, 1275, 1273, 1, 0, 0, 0, 1276, 1286, 5, 34, 0, 0, 1277, 1281, 5, 39, 0, 0, 1278, 1280, 3, 277, 138, 0, 1279, 1278, 1, 0, 0, 0, 1280, 1283, 1, 0, 0, 0, 1281, 1279, 1, 0, 0, 0, 1281, 1282, 1, 0, 0, 0, 1282, 1284, 1, 0, 0, 0, 1283, 1281, 1, 0, 0, 0, 1284, 1286, 5, 39, 0, 0, 1285, 1269, 1, 0, 0, 0, 1285, 1277, 1, 0, 0, 0, 1286, 274, 1, 0, 0, 0, 1287, 1291, 8, 9, 0, 0, 1288, 1289, 5, 92, 0, 0, 1289, 1291, 9, 0, 0, 0, 1290, 1287, 1, 0, 0, 0, 1290, 1288, 1, 0, 0, 0, 1291, 276, 1, 0, 0, 0, 1292, 1296, 8, 10, 0, 0, 1293, 1294, 5, 92, 0, 0, 1294, 1296, 9, 0, 0, 0, 1295, 1292, 1, 0, 0, 0, 1295, 1293, 1, 0, 0, 0, 1296, 278, 1, 0, 0, 0, 1297, 1299, 7, 0, 0, 0, 1298, 1297, 1, 0, 0, 0, 1299, 1300, 1, 0, 0, 0, 1300, 1298, 1, 0, 0, 0, 1300, 1301, 1, 0, 0, 0, 1301, 1302, 1, 0, 0, 0, 1302, 1304, 5, 46, 0, 0, 1303, 1305, 7, 0, 0, 0, 1304, 1303, 1, 0, 0, 0, 1305, 1306, 1, 0, 0, 0, 1306, 1304, 1, 0, 0, 0, 1306, 1307, 1, 0, 0, 0, 1307, 1314, 1, 0, 0, 0, 1308, 1310, 5, 46, 0, 0, 1309, 1311, 7, 0, 0, 0, 1310, 1309, 1, 0, 0, 0, 1311, 1312, 1, 0, 0, 0, 1312, 1310, 1, 0, 0, 0, 1312, 1313, 1, 0, 0, 0, 1313, 1315, 1, 0, 0, 0, 1314, 1308, 1, 0, 0, 0, 1314, 1315, 1, 0, 0, 0, 1315, 280, 1, 0, 0, 0, 1316, 1318, 7, 11, 0, 0, 1317, 1316, 1, 0, 0, 0, 1318, 1319, 1, 0, 0, 0, 1319, 1317, 1, 0, 0, 0, 1319, 1320, 1, 0, 0, 0, 1320, 1321, 1, 0, 0, 0, 1321, 1322, 6, 140, 0, 0, 1322, 282, 1, 0, 0, 0, 1323, 1324, 5, 47, 0, 0, 1324, 1325, 5, 42, 0, 0, 1325, 1329, 1, 0, 0, 0, 1326, 1328, 9, 0, 0, 0, 1327, 1326, 1, 0, 0, 0, 1328, 1331, 1, 0, 0, 0, 1329, 1330, 1, 0, 0, 0, 1329, 1327, 1, 0, 0, 0, 1330, 1332, 1, 0, 0, 0, 1331, 1329, 1, 0, 0, 0, 1332, 1333, 5, 42, 0, 0, 1333, 1334, 5, 47, 0, 0, 1334, 1335, 1, 0, 0, 0, 1335, 1336, 6, 141, 1, 0, 1336, 284, 1, 0, 0, 0, 1337, 1338, 5, 47, 0, 0, 1338, 1339, 5, 47, 0, 0, 1339, 1343, 1, 0, 0, 0, 1340, 1342, 8, 12, 0, 0, 1341, 1340, 1, 0, 0, 0, 1342, 1345, 1, 0, 0, 0, 1343, 1341, 1, 0, 0, 0, 1343, 1344, 1, 0, 0, 0, 1344, 1346, 1, 0, 0, 0, 1345, 1343, 1, 0, 0, 0, 1346, 1347, 6, 142, 1, 0, 1347, 286, 1, 0, 0, 0, 38, 0, 723, 731, 740, 753, 755, 769, 771, 856, 863, 874, 878, 882, 886, 889, 893, 898, 907, 912, 971, 979, 984, 987, 1079, 1253, 1267, 1273, 1281, 1285, 1290, 1295, 1300, 1306, 1312, 1314, 1319, 1329, 1343, 2, 6, 0, 0, 0, 1, 0], d.DecisionsToDFA = d._ATN.decisionToState.map((t, e) => new Es(t, e));
  var Cs = d, o = class a extends On {
    get grammarFileName() {
      return "Solidity.g4";
    }
    get literalNames() {
      return a.literalNames;
    }
    get symbolicNames() {
      return a.symbolicNames;
    }
    get ruleNames() {
      return a.ruleNames;
    }
    get serializedATN() {
      return a._serializedATN;
    }
    createFailedPredicateException(e, i) {
      return new Nn(this, e, i);
    }
    constructor(e) {
      super(e), this._interp = new Pn(this, a._ATN, a.DecisionsToDFA, new vs());
    }
    sourceUnit() {
      let e = new Un(this, this._ctx, this.state);
      this.enterRule(e, 0, a.RULE_sourceUnit);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          for (this.state = 215, this._errHandler.sync(this), i = this._input.LA(1); !(i & -32) && 1 << i & 104620034 || !(i - 36 & -32) && 1 << i - 36 & 2080392501 || !(i - 95 & -32) && 1 << i - 95 & 3498573949 || !(i - 127 & -32) && 1 << i - 127 & 7; ) {
            switch (this.state = 213, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 0, this._ctx)) {
              case 1:
                this.state = 202, this.pragmaDirective();
                break;
              case 2:
                this.state = 203, this.importDirective();
                break;
              case 3:
                this.state = 204, this.contractDefinition();
                break;
              case 4:
                this.state = 205, this.enumDefinition();
                break;
              case 5:
                this.state = 206, this.eventDefinition();
                break;
              case 6:
                this.state = 207, this.structDefinition();
                break;
              case 7:
                this.state = 208, this.functionDefinition();
                break;
              case 8:
                this.state = 209, this.fileLevelConstant();
                break;
              case 9:
                this.state = 210, this.customErrorDefinition();
                break;
              case 10:
                this.state = 211, this.typeDefinition();
                break;
              case 11:
                this.state = 212, this.usingForDeclaration();
                break;
            }
            this.state = 217, this._errHandler.sync(this), i = this._input.LA(1);
          }
          this.state = 218, this.match(a.EOF);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    pragmaDirective() {
      let e = new $e(this, this._ctx, this.state);
      this.enterRule(e, 2, a.RULE_pragmaDirective);
      try {
        this.enterOuterAlt(e, 1), this.state = 220, this.match(a.T__0), this.state = 221, this.pragmaName(), this.state = 222, this.pragmaValue(), this.state = 223, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    pragmaName() {
      let e = new Ls(this, this._ctx, this.state);
      this.enterRule(e, 4, a.RULE_pragmaName);
      try {
        this.enterOuterAlt(e, 1), this.state = 225, this.identifier();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    pragmaValue() {
      let e = new bs(this, this._ctx, this.state);
      this.enterRule(e, 6, a.RULE_pragmaValue);
      try {
        switch (this.state = 230, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 2, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 227, this.match(a.T__2);
            break;
          case 2:
            this.enterOuterAlt(e, 2), this.state = 228, this.version();
            break;
          case 3:
            this.enterOuterAlt(e, 3), this.state = 229, this.expression(0);
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    version() {
      let e = new Ss(this, this._ctx, this.state);
      this.enterRule(e, 8, a.RULE_version);
      let i;
      try {
        for (this.enterOuterAlt(e, 1), this.state = 232, this.versionConstraint(), this.state = 239, this._errHandler.sync(this), i = this._input.LA(1); !(i & -32) && 1 << i & 4080 || i === 103 || i === 131; ) this.state = 234, this._errHandler.sync(this), i = this._input.LA(1), i === 4 && (this.state = 233, this.match(a.T__3)), this.state = 236, this.versionConstraint(), this.state = 241, this._errHandler.sync(this), i = this._input.LA(1);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    versionOperator() {
      let e = new As(this, this._ctx, this.state);
      this.enterRule(e, 10, a.RULE_versionOperator);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 242, i = this._input.LA(1), !(i & -32) && 1 << i & 4064 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    versionConstraint() {
      let e = new Je(this, this._ctx, this.state);
      this.enterRule(e, 12, a.RULE_versionConstraint);
      let i;
      try {
        switch (this.state = 252, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 7, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 245, this._errHandler.sync(this), i = this._input.LA(1), !(i & -32) && 1 << i & 4064 && (this.state = 244, this.versionOperator()), this.state = 247, this.match(a.VersionLiteral);
            break;
          case 2:
            this.enterOuterAlt(e, 2), this.state = 249, this._errHandler.sync(this), i = this._input.LA(1), !(i & -32) && 1 << i & 4064 && (this.state = 248, this.versionOperator()), this.state = 251, this.match(a.DecimalNumber);
            break;
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    importDeclaration() {
      let e = new Xe(this, this._ctx, this.state);
      this.enterRule(e, 14, a.RULE_importDeclaration);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 254, this.identifier(), this.state = 257, this._errHandler.sync(this), i = this._input.LA(1), i === 12 && (this.state = 255, this.match(a.T__11), this.state = 256, this.identifier());
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    importDirective() {
      let e = new Qe(this, this._ctx, this.state);
      this.enterRule(e, 16, a.RULE_importDirective);
      let i;
      try {
        switch (this.state = 295, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 13, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 259, this.match(a.T__12), this.state = 260, this.importPath(), this.state = 263, this._errHandler.sync(this), i = this._input.LA(1), i === 12 && (this.state = 261, this.match(a.T__11), this.state = 262, this.identifier()), this.state = 265, this.match(a.T__1);
            break;
          case 2:
            this.enterOuterAlt(e, 2);
            {
              switch (this.state = 267, this.match(a.T__12), this.state = 270, this._errHandler.sync(this), this._input.LA(1)) {
                case 3:
                  this.state = 268, this.match(a.T__2);
                  break;
                case 14:
                case 25:
                case 44:
                case 50:
                case 62:
                case 95:
                case 114:
                case 118:
                case 125:
                case 126:
                case 128:
                case 129:
                  this.state = 269, this.identifier();
                  break;
                default:
                  throw new O(this);
              }
              this.state = 274, this._errHandler.sync(this), i = this._input.LA(1), i === 12 && (this.state = 272, this.match(a.T__11), this.state = 273, this.identifier()), this.state = 276, this.match(a.T__13), this.state = 277, this.importPath(), this.state = 278, this.match(a.T__1);
            }
            break;
          case 3:
            this.enterOuterAlt(e, 3);
            {
              for (this.state = 280, this.match(a.T__12), this.state = 281, this.match(a.T__14), this.state = 282, this.importDeclaration(), this.state = 287, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 283, this.match(a.T__15), this.state = 284, this.importDeclaration(), this.state = 289, this._errHandler.sync(this), i = this._input.LA(1);
              this.state = 290, this.match(a.T__16), this.state = 291, this.match(a.T__13), this.state = 292, this.importPath(), this.state = 293, this.match(a.T__1);
            }
            break;
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    importPath() {
      let e = new ws(this, this._ctx, this.state);
      this.enterRule(e, 18, a.RULE_importPath);
      try {
        this.enterOuterAlt(e, 1), this.state = 297, this.match(a.StringLiteralFragment);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    contractDefinition() {
      let e = new Ze(this, this._ctx, this.state);
      this.enterRule(e, 20, a.RULE_contractDefinition);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          if (this.state = 300, this._errHandler.sync(this), i = this._input.LA(1), i === 18 && (this.state = 299, this.match(a.T__17)), this.state = 302, i = this._input.LA(1), !(i & -32) && 1 << i & 3670016 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 303, this.identifier(), this.state = 313, this._errHandler.sync(this), i = this._input.LA(1), i === 22) for (this.state = 304, this.match(a.T__21), this.state = 305, this.inheritanceSpecifier(), this.state = 310, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 306, this.match(a.T__15), this.state = 307, this.inheritanceSpecifier(), this.state = 312, this._errHandler.sync(this), i = this._input.LA(1);
          for (this.state = 315, this.match(a.T__14), this.state = 319, this._errHandler.sync(this), i = this._input.LA(1); !(i & -32) && 1 << i & 100679680 || !(i - 36 & -32) && 1 << i - 36 & 2080392503 || !(i - 95 & -32) && 1 << i - 95 & 3498573949 || !(i - 127 & -32) && 1 << i - 127 & 7; ) this.state = 316, this.contractPart(), this.state = 321, this._errHandler.sync(this), i = this._input.LA(1);
          this.state = 322, this.match(a.T__16);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    inheritanceSpecifier() {
      let e = new ti(this, this._ctx, this.state);
      this.enterRule(e, 22, a.RULE_inheritanceSpecifier);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 324, this.userDefinedTypeName(), this.state = 330, this._errHandler.sync(this), i = this._input.LA(1), i === 23 && (this.state = 325, this.match(a.T__22), this.state = 327, this._errHandler.sync(this), i = this._input.LA(1), (!(i & -32) && 1 << i & 3263184960 || !(i - 38 & -32) && 1 << i - 38 & 4278194513 || !(i - 71 & -32) && 1 << i - 71 & 4244635651 || !(i - 103 & -32) && 1 << i - 103 & 248547339) && (this.state = 326, this.expressionList()), this.state = 329, this.match(a.T__23));
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    contractPart() {
      let e = new ei(this, this._ctx, this.state);
      this.enterRule(e, 24, a.RULE_contractPart);
      try {
        switch (this.state = 341, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 20, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 332, this.stateVariableDeclaration();
            break;
          case 2:
            this.enterOuterAlt(e, 2), this.state = 333, this.usingForDeclaration();
            break;
          case 3:
            this.enterOuterAlt(e, 3), this.state = 334, this.structDefinition();
            break;
          case 4:
            this.enterOuterAlt(e, 4), this.state = 335, this.modifierDefinition();
            break;
          case 5:
            this.enterOuterAlt(e, 5), this.state = 336, this.functionDefinition();
            break;
          case 6:
            this.enterOuterAlt(e, 6), this.state = 337, this.eventDefinition();
            break;
          case 7:
            this.enterOuterAlt(e, 7), this.state = 338, this.enumDefinition();
            break;
          case 8:
            this.enterOuterAlt(e, 8), this.state = 339, this.customErrorDefinition();
            break;
          case 9:
            this.enterOuterAlt(e, 9), this.state = 340, this.typeDefinition();
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    stateVariableDeclaration() {
      let e = new Ns(this, this._ctx, this.state);
      this.enterRule(e, 26, a.RULE_stateVariableDeclaration);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          for (this.state = 343, this.typeName(0), this.state = 353, this._errHandler.sync(this), i = this._input.LA(1); !(i - 96 & -32) && 1 << i - 96 & 27377665; ) {
            switch (this.state = 351, this._errHandler.sync(this), this._input.LA(1)) {
              case 120:
                this.state = 344, this.match(a.PublicKeyword);
                break;
              case 117:
                this.state = 345, this.match(a.InternalKeyword);
                break;
              case 119:
                this.state = 346, this.match(a.PrivateKeyword);
                break;
              case 110:
                this.state = 347, this.match(a.ConstantKeyword);
                break;
              case 111:
                this.state = 348, this.match(a.TransientKeyword);
                break;
              case 112:
                this.state = 349, this.match(a.ImmutableKeyword);
                break;
              case 96:
                this.state = 350, this.overrideSpecifier();
                break;
              default:
                throw new O(this);
            }
            this.state = 355, this._errHandler.sync(this), i = this._input.LA(1);
          }
          this.state = 356, this.identifier(), this.state = 359, this._errHandler.sync(this), i = this._input.LA(1), i === 11 && (this.state = 357, this.match(a.T__10), this.state = 358, this.expression(0)), this.state = 361, this.match(a.T__1);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    fileLevelConstant() {
      let e = new ii(this, this._ctx, this.state);
      this.enterRule(e, 28, a.RULE_fileLevelConstant);
      try {
        this.enterOuterAlt(e, 1), this.state = 363, this.typeName(0), this.state = 364, this.match(a.ConstantKeyword), this.state = 365, this.identifier(), this.state = 366, this.match(a.T__10), this.state = 367, this.expression(0), this.state = 368, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    customErrorDefinition() {
      let e = new ne(this, this._ctx, this.state);
      this.enterRule(e, 30, a.RULE_customErrorDefinition);
      try {
        this.enterOuterAlt(e, 1), this.state = 370, this.match(a.T__24), this.state = 371, this.identifier(), this.state = 372, this.parameterList(), this.state = 373, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    typeDefinition() {
      let e = new ae(this, this._ctx, this.state);
      this.enterRule(e, 32, a.RULE_typeDefinition);
      try {
        this.enterOuterAlt(e, 1), this.state = 375, this.match(a.TypeKeyword), this.state = 376, this.identifier(), this.state = 377, this.match(a.T__21), this.state = 378, this.elementaryTypeName(), this.state = 379, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    usingForDeclaration() {
      let e = new le(this, this._ctx, this.state);
      this.enterRule(e, 34, a.RULE_usingForDeclaration);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          switch (this.state = 381, this.match(a.T__25), this.state = 382, this.usingForObject(), this.state = 383, this.match(a.T__26), this.state = 386, this._errHandler.sync(this), this._input.LA(1)) {
            case 3:
              this.state = 384, this.match(a.T__2);
              break;
            case 14:
            case 25:
            case 38:
            case 44:
            case 46:
            case 50:
            case 62:
            case 63:
            case 64:
            case 65:
            case 66:
            case 95:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 114:
            case 118:
            case 125:
            case 126:
            case 128:
            case 129:
              this.state = 385, this.typeName(0);
              break;
            default:
              throw new O(this);
          }
          this.state = 389, this._errHandler.sync(this), i = this._input.LA(1), i === 125 && (this.state = 388, this.match(a.GlobalKeyword)), this.state = 391, this.match(a.T__1);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    usingForObject() {
      let e = new Is(this, this._ctx, this.state);
      this.enterRule(e, 36, a.RULE_usingForObject);
      let i;
      try {
        switch (this.state = 405, this._errHandler.sync(this), this._input.LA(1)) {
          case 14:
          case 25:
          case 44:
          case 50:
          case 62:
          case 95:
          case 114:
          case 118:
          case 125:
          case 126:
          case 128:
          case 129:
            this.enterOuterAlt(e, 1), this.state = 393, this.userDefinedTypeName();
            break;
          case 15:
            this.enterOuterAlt(e, 2);
            {
              for (this.state = 394, this.match(a.T__14), this.state = 395, this.usingForObjectDirective(), this.state = 400, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 396, this.match(a.T__15), this.state = 397, this.usingForObjectDirective(), this.state = 402, this._errHandler.sync(this), i = this._input.LA(1);
              this.state = 403, this.match(a.T__16);
            }
            break;
          default:
            throw new O(this);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    usingForObjectDirective() {
      let e = new si(this, this._ctx, this.state);
      this.enterRule(e, 38, a.RULE_usingForObjectDirective);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 407, this.userDefinedTypeName(), this.state = 410, this._errHandler.sync(this), i = this._input.LA(1), i === 12 && (this.state = 408, this.match(a.T__11), this.state = 409, this.userDefinableOperators());
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    userDefinableOperators() {
      let e = new ks(this, this._ctx, this.state);
      this.enterRule(e, 40, a.RULE_userDefinableOperators);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 412, i = this._input.LA(1), !(i & -32) && 1 << i & 4026533864 || !(i - 32 & -32) && 1 << i - 32 & 15 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    structDefinition() {
      let e = new he(this, this._ctx, this.state);
      this.enterRule(e, 42, a.RULE_structDefinition);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          if (this.state = 414, this.match(a.T__35), this.state = 415, this.identifier(), this.state = 416, this.match(a.T__14), this.state = 427, this._errHandler.sync(this), i = this._input.LA(1), i === 14 || i === 25 || !(i - 38 & -32) && 1 << i - 38 & 520098113 || !(i - 95 & -32) && 1 << i - 95 & 3230138493 || i === 128 || i === 129) for (this.state = 417, this.variableDeclaration(), this.state = 418, this.match(a.T__1), this.state = 424, this._errHandler.sync(this), i = this._input.LA(1); i === 14 || i === 25 || !(i - 38 & -32) && 1 << i - 38 & 520098113 || !(i - 95 & -32) && 1 << i - 95 & 3230138493 || i === 128 || i === 129; ) this.state = 419, this.variableDeclaration(), this.state = 420, this.match(a.T__1), this.state = 426, this._errHandler.sync(this), i = this._input.LA(1);
          this.state = 429, this.match(a.T__16);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    modifierDefinition() {
      let e = new Ds(this, this._ctx, this.state);
      this.enterRule(e, 44, a.RULE_modifierDefinition);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          for (this.state = 431, this.match(a.T__36), this.state = 432, this.identifier(), this.state = 434, this._errHandler.sync(this), i = this._input.LA(1), i === 23 && (this.state = 433, this.parameterList()), this.state = 440, this._errHandler.sync(this), i = this._input.LA(1); i === 96 || i === 121; ) {
            switch (this.state = 438, this._errHandler.sync(this), this._input.LA(1)) {
              case 121:
                this.state = 436, this.match(a.VirtualKeyword);
                break;
              case 96:
                this.state = 437, this.overrideSpecifier();
                break;
              default:
                throw new O(this);
            }
            this.state = 442, this._errHandler.sync(this), i = this._input.LA(1);
          }
          switch (this.state = 445, this._errHandler.sync(this), this._input.LA(1)) {
            case 2:
              this.state = 443, this.match(a.T__1);
              break;
            case 15:
              this.state = 444, this.block();
              break;
            default:
              throw new O(this);
          }
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    modifierInvocation() {
      let e = new ri(this, this._ctx, this.state);
      this.enterRule(e, 46, a.RULE_modifierInvocation);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 447, this.identifier(), this.state = 453, this._errHandler.sync(this), i = this._input.LA(1), i === 23 && (this.state = 448, this.match(a.T__22), this.state = 450, this._errHandler.sync(this), i = this._input.LA(1), (!(i & -32) && 1 << i & 3263184960 || !(i - 38 & -32) && 1 << i - 38 & 4278194513 || !(i - 71 & -32) && 1 << i - 71 & 4244635651 || !(i - 103 & -32) && 1 << i - 103 & 248547339) && (this.state = 449, this.expressionList()), this.state = 452, this.match(a.T__23));
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    functionDefinition() {
      let e = new oe(this, this._ctx, this.state);
      this.enterRule(e, 48, a.RULE_functionDefinition);
      let i;
      try {
        switch (this.enterOuterAlt(e, 1), this.state = 455, this.functionDescriptor(), this.state = 456, this.parameterList(), this.state = 457, this.modifierList(), this.state = 459, this._errHandler.sync(this), i = this._input.LA(1), i === 39 && (this.state = 458, this.returnParameters()), this.state = 463, this._errHandler.sync(this), this._input.LA(1)) {
          case 2:
            this.state = 461, this.match(a.T__1);
            break;
          case 15:
            this.state = 462, this.block();
            break;
          default:
            throw new O(this);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    functionDescriptor() {
      let e = new Os(this, this._ctx, this.state);
      this.enterRule(e, 50, a.RULE_functionDescriptor);
      let i;
      try {
        switch (this.state = 472, this._errHandler.sync(this), this._input.LA(1)) {
          case 38:
            this.enterOuterAlt(e, 1), this.state = 465, this.match(a.T__37), this.state = 467, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 466, this.identifier());
            break;
          case 126:
            this.enterOuterAlt(e, 2), this.state = 469, this.match(a.ConstructorKeyword);
            break;
          case 127:
            this.enterOuterAlt(e, 3), this.state = 470, this.match(a.FallbackKeyword);
            break;
          case 128:
            this.enterOuterAlt(e, 4), this.state = 471, this.match(a.ReceiveKeyword);
            break;
          default:
            throw new O(this);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    returnParameters() {
      let e = new ni(this, this._ctx, this.state);
      this.enterRule(e, 52, a.RULE_returnParameters);
      try {
        this.enterOuterAlt(e, 1), this.state = 474, this.match(a.T__38), this.state = 475, this.parameterList();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    modifierList() {
      let e = new Ps(this, this._ctx, this.state);
      this.enterRule(e, 54, a.RULE_modifierList);
      let i;
      try {
        for (this.enterOuterAlt(e, 1), this.state = 487, this._errHandler.sync(this), i = this._input.LA(1); i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 4023943171 || i === 128 || i === 129; ) {
          switch (this.state = 485, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 41, this._ctx)) {
            case 1:
              this.state = 477, this.match(a.ExternalKeyword);
              break;
            case 2:
              this.state = 478, this.match(a.PublicKeyword);
              break;
            case 3:
              this.state = 479, this.match(a.InternalKeyword);
              break;
            case 4:
              this.state = 480, this.match(a.PrivateKeyword);
              break;
            case 5:
              this.state = 481, this.match(a.VirtualKeyword);
              break;
            case 6:
              this.state = 482, this.stateMutability();
              break;
            case 7:
              this.state = 483, this.modifierInvocation();
              break;
            case 8:
              this.state = 484, this.overrideSpecifier();
              break;
          }
          this.state = 489, this._errHandler.sync(this), i = this._input.LA(1);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    eventDefinition() {
      let e = new ue(this, this._ctx, this.state);
      this.enterRule(e, 56, a.RULE_eventDefinition);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 490, this.match(a.T__39), this.state = 491, this.identifier(), this.state = 492, this.eventParameterList(), this.state = 494, this._errHandler.sync(this), i = this._input.LA(1), i === 108 && (this.state = 493, this.match(a.AnonymousKeyword)), this.state = 496, this.match(a.T__1);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    enumValue() {
      let e = new ai(this, this._ctx, this.state);
      this.enterRule(e, 58, a.RULE_enumValue);
      try {
        this.enterOuterAlt(e, 1), this.state = 498, this.identifier();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    enumDefinition() {
      let e = new ce(this, this._ctx, this.state);
      this.enterRule(e, 60, a.RULE_enumDefinition);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          for (this.state = 500, this.match(a.T__40), this.state = 501, this.identifier(), this.state = 502, this.match(a.T__14), this.state = 504, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 503, this.enumValue()), this.state = 510, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 506, this.match(a.T__15), this.state = 507, this.enumValue(), this.state = 512, this._errHandler.sync(this), i = this._input.LA(1);
          this.state = 513, this.match(a.T__16);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    parameterList() {
      let e = new St(this, this._ctx, this.state);
      this.enterRule(e, 62, a.RULE_parameterList);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          if (this.state = 515, this.match(a.T__22), this.state = 524, this._errHandler.sync(this), i = this._input.LA(1), i === 14 || i === 25 || !(i - 38 & -32) && 1 << i - 38 & 520098113 || !(i - 95 & -32) && 1 << i - 95 & 3230138493 || i === 128 || i === 129) for (this.state = 516, this.parameter(), this.state = 521, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 517, this.match(a.T__15), this.state = 518, this.parameter(), this.state = 523, this._errHandler.sync(this), i = this._input.LA(1);
          this.state = 526, this.match(a.T__23);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    parameter() {
      let e = new li(this, this._ctx, this.state);
      this.enterRule(e, 64, a.RULE_parameter);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          switch (this.state = 528, this.typeName(0), this.state = 530, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 48, this._ctx)) {
            case 1:
              this.state = 529, this.storageLocation();
              break;
          }
          this.state = 533, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 532, this.identifier());
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    eventParameterList() {
      let e = new Us(this, this._ctx, this.state);
      this.enterRule(e, 66, a.RULE_eventParameterList);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          if (this.state = 535, this.match(a.T__22), this.state = 544, this._errHandler.sync(this), i = this._input.LA(1), i === 14 || i === 25 || !(i - 38 & -32) && 1 << i - 38 & 520098113 || !(i - 95 & -32) && 1 << i - 95 & 3230138493 || i === 128 || i === 129) for (this.state = 536, this.eventParameter(), this.state = 541, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 537, this.match(a.T__15), this.state = 538, this.eventParameter(), this.state = 543, this._errHandler.sync(this), i = this._input.LA(1);
          this.state = 546, this.match(a.T__23);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    eventParameter() {
      let e = new hi(this, this._ctx, this.state);
      this.enterRule(e, 68, a.RULE_eventParameter);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 548, this.typeName(0), this.state = 550, this._errHandler.sync(this), i = this._input.LA(1), i === 116 && (this.state = 549, this.match(a.IndexedKeyword)), this.state = 553, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 552, this.identifier());
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    functionTypeParameterList() {
      let e = new oi(this, this._ctx, this.state);
      this.enterRule(e, 70, a.RULE_functionTypeParameterList);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          if (this.state = 555, this.match(a.T__22), this.state = 564, this._errHandler.sync(this), i = this._input.LA(1), i === 14 || i === 25 || !(i - 38 & -32) && 1 << i - 38 & 520098113 || !(i - 95 & -32) && 1 << i - 95 & 3230138493 || i === 128 || i === 129) for (this.state = 556, this.functionTypeParameter(), this.state = 561, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 557, this.match(a.T__15), this.state = 558, this.functionTypeParameter(), this.state = 563, this._errHandler.sync(this), i = this._input.LA(1);
          this.state = 566, this.match(a.T__23);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    functionTypeParameter() {
      let e = new ui(this, this._ctx, this.state);
      this.enterRule(e, 72, a.RULE_functionTypeParameter);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 568, this.typeName(0), this.state = 570, this._errHandler.sync(this), i = this._input.LA(1), !(i - 48 & -32) && 1 << i - 48 & 7 && (this.state = 569, this.storageLocation());
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    variableDeclaration() {
      let e = new At(this, this._ctx, this.state);
      this.enterRule(e, 74, a.RULE_variableDeclaration);
      try {
        this.enterOuterAlt(e, 1);
        {
          switch (this.state = 572, this.typeName(0), this.state = 574, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 57, this._ctx)) {
            case 1:
              this.state = 573, this.storageLocation();
              break;
          }
          this.state = 576, this.identifier();
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    typeName(e) {
      e === void 0 && (e = 0);
      let i = this._ctx, s = this.state, r = new Y(this, this._ctx, s), n = r, l = 76;
      this.enterRecursionRule(r, 76, a.RULE_typeName, e);
      let h;
      try {
        let u;
        this.enterOuterAlt(r, 1);
        {
          switch (this.state = 585, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 58, this._ctx)) {
            case 1:
              this.state = 579, this.elementaryTypeName();
              break;
            case 2:
              this.state = 580, this.userDefinedTypeName();
              break;
            case 3:
              this.state = 581, this.mapping();
              break;
            case 4:
              this.state = 582, this.functionTypeName();
              break;
            case 5:
              this.state = 583, this.match(a.T__43), this.state = 584, this.match(a.PayableKeyword);
              break;
          }
          for (this._ctx.stop = this._input.LT(-1), this.state = 595, this._errHandler.sync(this), u = this._interp.adaptivePredict(this._input, 60, this._ctx); u !== 2 && u !== ht.INVALID_ALT_NUMBER; ) {
            if (u === 1) {
              this._parseListeners != null && this.triggerExitRuleEvent(), n = r;
              {
                if (r = new Y(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_typeName), this.state = 587, !this.precpred(this._ctx, 3)) throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                this.state = 588, this.match(a.T__41), this.state = 590, this._errHandler.sync(this), h = this._input.LA(1), (!(h & -32) && 1 << h & 3263184960 || !(h - 38 & -32) && 1 << h - 38 & 4278194513 || !(h - 71 & -32) && 1 << h - 71 & 4244635651 || !(h - 103 & -32) && 1 << h - 103 & 248547339) && (this.state = 589, this.expression(0)), this.state = 592, this.match(a.T__42);
              }
            }
            this.state = 597, this._errHandler.sync(this), u = this._interp.adaptivePredict(this._input, 60, this._ctx);
          }
        }
      } catch (u) {
        if (u instanceof _) r.exception = u, this._errHandler.reportError(this, u), this._errHandler.recover(this, u);
        else throw u;
      } finally {
        this.unrollRecursionContexts(i);
      }
      return r;
    }
    userDefinedTypeName() {
      let e = new ot(this, this._ctx, this.state);
      this.enterRule(e, 78, a.RULE_userDefinedTypeName);
      try {
        let i;
        for (this.enterOuterAlt(e, 1), this.state = 598, this.identifier(), this.state = 603, this._errHandler.sync(this), i = this._interp.adaptivePredict(this._input, 61, this._ctx); i !== 2 && i !== ht.INVALID_ALT_NUMBER; ) i === 1 && (this.state = 599, this.match(a.T__44), this.state = 600, this.identifier()), this.state = 605, this._errHandler.sync(this), i = this._interp.adaptivePredict(this._input, 61, this._ctx);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    mappingKey() {
      let e = new Fs(this, this._ctx, this.state);
      this.enterRule(e, 80, a.RULE_mappingKey);
      try {
        switch (this.state = 608, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 62, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 606, this.elementaryTypeName();
            break;
          case 2:
            this.enterOuterAlt(e, 2), this.state = 607, this.userDefinedTypeName();
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    mapping() {
      let e = new Hs(this, this._ctx, this.state);
      this.enterRule(e, 82, a.RULE_mapping);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 610, this.match(a.T__45), this.state = 611, this.match(a.T__22), this.state = 612, this.mappingKey(), this.state = 614, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 613, this.mappingKeyName()), this.state = 616, this.match(a.T__46), this.state = 617, this.typeName(0), this.state = 619, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 618, this.mappingValueName()), this.state = 621, this.match(a.T__23);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    mappingKeyName() {
      let e = new Ms(this, this._ctx, this.state);
      this.enterRule(e, 84, a.RULE_mappingKeyName);
      try {
        this.enterOuterAlt(e, 1), this.state = 623, this.identifier();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    mappingValueName() {
      let e = new Ks(this, this._ctx, this.state);
      this.enterRule(e, 86, a.RULE_mappingValueName);
      try {
        this.enterOuterAlt(e, 1), this.state = 625, this.identifier();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    functionTypeName() {
      let e = new Vs(this, this._ctx, this.state);
      this.enterRule(e, 88, a.RULE_functionTypeName);
      try {
        let i;
        this.enterOuterAlt(e, 1);
        {
          for (this.state = 627, this.match(a.T__37), this.state = 628, this.functionTypeParameterList(), this.state = 634, this._errHandler.sync(this), i = this._interp.adaptivePredict(this._input, 66, this._ctx); i !== 2 && i !== ht.INVALID_ALT_NUMBER; ) {
            if (i === 1) switch (this.state = 632, this._errHandler.sync(this), this._input.LA(1)) {
              case 117:
                this.state = 629, this.match(a.InternalKeyword);
                break;
              case 115:
                this.state = 630, this.match(a.ExternalKeyword);
                break;
              case 110:
              case 118:
              case 122:
              case 124:
                this.state = 631, this.stateMutability();
                break;
              default:
                throw new O(this);
            }
            this.state = 636, this._errHandler.sync(this), i = this._interp.adaptivePredict(this._input, 66, this._ctx);
          }
          switch (this.state = 639, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 67, this._ctx)) {
            case 1:
              this.state = 637, this.match(a.T__38), this.state = 638, this.functionTypeParameterList();
              break;
          }
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    storageLocation() {
      let e = new de(this, this._ctx, this.state);
      this.enterRule(e, 90, a.RULE_storageLocation);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 641, i = this._input.LA(1), !(i - 48 & -32) && 1 << i - 48 & 7 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    stateMutability() {
      let e = new Bt(this, this._ctx, this.state);
      this.enterRule(e, 92, a.RULE_stateMutability);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 643, i = this._input.LA(1), !(i - 110 & -32) && 1 << i - 110 & 20737 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    block() {
      let e = new xt(this, this._ctx, this.state);
      this.enterRule(e, 94, a.RULE_block);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          for (this.state = 645, this.match(a.T__14), this.state = 649, this._errHandler.sync(this), i = this._input.LA(1); !(i & -32) && 1 << i & 3397435456 || !(i - 38 & -32) && 1 << i - 38 & 4294881617 || !(i - 71 & -32) && 1 << i - 71 & 4244635651 || !(i - 103 & -32) && 1 << i - 103 & 248548427; ) this.state = 646, this.statement(), this.state = 651, this._errHandler.sync(this), i = this._input.LA(1);
          this.state = 652, this.match(a.T__16);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    statement() {
      let e = new ut(this, this._ctx, this.state);
      this.enterRule(e, 96, a.RULE_statement);
      try {
        switch (this.state = 669, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 69, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 654, this.ifStatement();
            break;
          case 2:
            this.enterOuterAlt(e, 2), this.state = 655, this.tryStatement();
            break;
          case 3:
            this.enterOuterAlt(e, 3), this.state = 656, this.whileStatement();
            break;
          case 4:
            this.enterOuterAlt(e, 4), this.state = 657, this.forStatement();
            break;
          case 5:
            this.enterOuterAlt(e, 5), this.state = 658, this.block();
            break;
          case 6:
            this.enterOuterAlt(e, 6), this.state = 659, this.inlineAssemblyStatement();
            break;
          case 7:
            this.enterOuterAlt(e, 7), this.state = 660, this.doWhileStatement();
            break;
          case 8:
            this.enterOuterAlt(e, 8), this.state = 661, this.continueStatement();
            break;
          case 9:
            this.enterOuterAlt(e, 9), this.state = 662, this.breakStatement();
            break;
          case 10:
            this.enterOuterAlt(e, 10), this.state = 663, this.returnStatement();
            break;
          case 11:
            this.enterOuterAlt(e, 11), this.state = 664, this.throwStatement();
            break;
          case 12:
            this.enterOuterAlt(e, 12), this.state = 665, this.emitStatement();
            break;
          case 13:
            this.enterOuterAlt(e, 13), this.state = 666, this.simpleStatement();
            break;
          case 14:
            this.enterOuterAlt(e, 14), this.state = 667, this.uncheckedStatement();
            break;
          case 15:
            this.enterOuterAlt(e, 15), this.state = 668, this.revertStatement();
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    expressionStatement() {
      let e = new ci(this, this._ctx, this.state);
      this.enterRule(e, 98, a.RULE_expressionStatement);
      try {
        this.enterOuterAlt(e, 1), this.state = 671, this.expression(0), this.state = 672, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    ifStatement() {
      let e = new Bs(this, this._ctx, this.state);
      this.enterRule(e, 100, a.RULE_ifStatement);
      try {
        switch (this.enterOuterAlt(e, 1), this.state = 674, this.match(a.T__50), this.state = 675, this.match(a.T__22), this.state = 676, this.expression(0), this.state = 677, this.match(a.T__23), this.state = 678, this.statement(), this.state = 681, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 70, this._ctx)) {
          case 1:
            this.state = 679, this.match(a.T__51), this.state = 680, this.statement();
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    tryStatement() {
      let e = new zs(this, this._ctx, this.state);
      this.enterRule(e, 102, a.RULE_tryStatement);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          this.state = 683, this.match(a.T__52), this.state = 684, this.expression(0), this.state = 686, this._errHandler.sync(this), i = this._input.LA(1), i === 39 && (this.state = 685, this.returnParameters()), this.state = 688, this.block(), this.state = 690, this._errHandler.sync(this), i = this._input.LA(1);
          do
            this.state = 689, this.catchClause(), this.state = 692, this._errHandler.sync(this), i = this._input.LA(1);
          while (i === 54);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    catchClause() {
      let e = new di(this, this._ctx, this.state);
      this.enterRule(e, 104, a.RULE_catchClause);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 694, this.match(a.T__53), this.state = 699, this._errHandler.sync(this), i = this._input.LA(1), (!(i & -32) && 1 << i & 41959424 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 696, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 695, this.identifier()), this.state = 698, this.parameterList()), this.state = 701, this.block();
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    whileStatement() {
      let e = new js(this, this._ctx, this.state);
      this.enterRule(e, 106, a.RULE_whileStatement);
      try {
        this.enterOuterAlt(e, 1), this.state = 703, this.match(a.T__54), this.state = 704, this.match(a.T__22), this.state = 705, this.expression(0), this.state = 706, this.match(a.T__23), this.state = 707, this.statement();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    simpleStatement() {
      let e = new pi(this, this._ctx, this.state);
      this.enterRule(e, 108, a.RULE_simpleStatement);
      try {
        switch (this.enterOuterAlt(e, 1), this.state = 711, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 75, this._ctx)) {
          case 1:
            this.state = 709, this.variableDeclarationStatement();
            break;
          case 2:
            this.state = 710, this.expressionStatement();
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    uncheckedStatement() {
      let e = new qs(this, this._ctx, this.state);
      this.enterRule(e, 110, a.RULE_uncheckedStatement);
      try {
        this.enterOuterAlt(e, 1), this.state = 713, this.match(a.T__55), this.state = 714, this.block();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    forStatement() {
      let e = new Ws(this, this._ctx, this.state);
      this.enterRule(e, 112, a.RULE_forStatement);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          switch (this.state = 716, this.match(a.T__26), this.state = 717, this.match(a.T__22), this.state = 720, this._errHandler.sync(this), this._input.LA(1)) {
            case 6:
            case 14:
            case 23:
            case 25:
            case 30:
            case 31:
            case 38:
            case 42:
            case 44:
            case 46:
            case 50:
            case 62:
            case 63:
            case 64:
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 71:
            case 72:
            case 95:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 106:
            case 114:
            case 118:
            case 123:
            case 125:
            case 126:
            case 128:
            case 129:
            case 130:
              this.state = 718, this.simpleStatement();
              break;
            case 2:
              this.state = 719, this.match(a.T__1);
              break;
            default:
              throw new O(this);
          }
          switch (this.state = 724, this._errHandler.sync(this), this._input.LA(1)) {
            case 6:
            case 14:
            case 23:
            case 25:
            case 30:
            case 31:
            case 38:
            case 42:
            case 44:
            case 46:
            case 50:
            case 62:
            case 63:
            case 64:
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 71:
            case 72:
            case 95:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 106:
            case 114:
            case 118:
            case 123:
            case 125:
            case 126:
            case 128:
            case 129:
            case 130:
              this.state = 722, this.expressionStatement();
              break;
            case 2:
              this.state = 723, this.match(a.T__1);
              break;
            default:
              throw new O(this);
          }
          this.state = 727, this._errHandler.sync(this), i = this._input.LA(1), (!(i & -32) && 1 << i & 3263184960 || !(i - 38 & -32) && 1 << i - 38 & 4278194513 || !(i - 71 & -32) && 1 << i - 71 & 4244635651 || !(i - 103 & -32) && 1 << i - 103 & 248547339) && (this.state = 726, this.expression(0)), this.state = 729, this.match(a.T__23), this.state = 730, this.statement();
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    inlineAssemblyStatement() {
      let e = new Ys(this, this._ctx, this.state);
      this.enterRule(e, 114, a.RULE_inlineAssemblyStatement);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 732, this.match(a.T__56), this.state = 734, this._errHandler.sync(this), i = this._input.LA(1), i === 130 && (this.state = 733, this.match(a.StringLiteralFragment)), this.state = 740, this._errHandler.sync(this), i = this._input.LA(1), i === 23 && (this.state = 736, this.match(a.T__22), this.state = 737, this.inlineAssemblyStatementFlag(), this.state = 738, this.match(a.T__23)), this.state = 742, this.assemblyBlock();
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    inlineAssemblyStatementFlag() {
      let e = new Gs(this, this._ctx, this.state);
      this.enterRule(e, 116, a.RULE_inlineAssemblyStatementFlag);
      try {
        this.enterOuterAlt(e, 1), this.state = 744, this.stringLiteral();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    doWhileStatement() {
      let e = new $s(this, this._ctx, this.state);
      this.enterRule(e, 118, a.RULE_doWhileStatement);
      try {
        this.enterOuterAlt(e, 1), this.state = 746, this.match(a.T__57), this.state = 747, this.statement(), this.state = 748, this.match(a.T__54), this.state = 749, this.match(a.T__22), this.state = 750, this.expression(0), this.state = 751, this.match(a.T__23), this.state = 752, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    continueStatement() {
      let e = new Js(this, this._ctx, this.state);
      this.enterRule(e, 120, a.RULE_continueStatement);
      try {
        this.enterOuterAlt(e, 1), this.state = 754, this.match(a.ContinueKeyword), this.state = 755, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    breakStatement() {
      let e = new Xs(this, this._ctx, this.state);
      this.enterRule(e, 122, a.RULE_breakStatement);
      try {
        this.enterOuterAlt(e, 1), this.state = 757, this.match(a.BreakKeyword), this.state = 758, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    returnStatement() {
      let e = new Qs(this, this._ctx, this.state);
      this.enterRule(e, 124, a.RULE_returnStatement);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 760, this.match(a.T__58), this.state = 762, this._errHandler.sync(this), i = this._input.LA(1), (!(i & -32) && 1 << i & 3263184960 || !(i - 38 & -32) && 1 << i - 38 & 4278194513 || !(i - 71 & -32) && 1 << i - 71 & 4244635651 || !(i - 103 & -32) && 1 << i - 103 & 248547339) && (this.state = 761, this.expression(0)), this.state = 764, this.match(a.T__1);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    throwStatement() {
      let e = new Zs(this, this._ctx, this.state);
      this.enterRule(e, 126, a.RULE_throwStatement);
      try {
        this.enterOuterAlt(e, 1), this.state = 766, this.match(a.T__59), this.state = 767, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    emitStatement() {
      let e = new tr(this, this._ctx, this.state);
      this.enterRule(e, 128, a.RULE_emitStatement);
      try {
        this.enterOuterAlt(e, 1), this.state = 769, this.match(a.T__60), this.state = 770, this.functionCall(), this.state = 771, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    revertStatement() {
      let e = new er(this, this._ctx, this.state);
      this.enterRule(e, 130, a.RULE_revertStatement);
      try {
        this.enterOuterAlt(e, 1), this.state = 773, this.match(a.T__61), this.state = 774, this.functionCall(), this.state = 775, this.match(a.T__1);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    variableDeclarationStatement() {
      let e = new ir(this, this._ctx, this.state);
      this.enterRule(e, 132, a.RULE_variableDeclarationStatement);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          switch (this.state = 784, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 82, this._ctx)) {
            case 1:
              this.state = 777, this.match(a.T__62), this.state = 778, this.identifierList();
              break;
            case 2:
              this.state = 779, this.variableDeclaration();
              break;
            case 3:
              this.state = 780, this.match(a.T__22), this.state = 781, this.variableDeclarationList(), this.state = 782, this.match(a.T__23);
              break;
          }
          this.state = 788, this._errHandler.sync(this), i = this._input.LA(1), i === 11 && (this.state = 786, this.match(a.T__10), this.state = 787, this.expression(0)), this.state = 790, this.match(a.T__1);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    variableDeclarationList() {
      let e = new sr(this, this._ctx, this.state);
      this.enterRule(e, 134, a.RULE_variableDeclarationList);
      let i;
      try {
        for (this.enterOuterAlt(e, 1), this.state = 793, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 38 & -32) && 1 << i - 38 & 520098113 || !(i - 95 & -32) && 1 << i - 95 & 3230138493 || i === 128 || i === 129) && (this.state = 792, this.variableDeclaration()), this.state = 801, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 795, this.match(a.T__15), this.state = 797, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 38 & -32) && 1 << i - 38 & 520098113 || !(i - 95 & -32) && 1 << i - 95 & 3230138493 || i === 128 || i === 129) && (this.state = 796, this.variableDeclaration()), this.state = 803, this._errHandler.sync(this), i = this._input.LA(1);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    identifierList() {
      let e = new rr(this, this._ctx, this.state);
      this.enterRule(e, 136, a.RULE_identifierList);
      let i;
      try {
        let s;
        this.enterOuterAlt(e, 1);
        {
          for (this.state = 804, this.match(a.T__22), this.state = 811, this._errHandler.sync(this), s = this._interp.adaptivePredict(this._input, 88, this._ctx); s !== 2 && s !== ht.INVALID_ALT_NUMBER; ) s === 1 && (this.state = 806, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 805, this.identifier()), this.state = 808, this.match(a.T__15)), this.state = 813, this._errHandler.sync(this), s = this._interp.adaptivePredict(this._input, 88, this._ctx);
          this.state = 815, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 814, this.identifier()), this.state = 817, this.match(a.T__23);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    elementaryTypeName() {
      let e = new pe(this, this._ctx, this.state);
      this.enterRule(e, 138, a.RULE_elementaryTypeName);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 819, i = this._input.LA(1), !(i - 44 & -32) && 1 << i - 44 & 7864321 || !(i - 97 & -32) && 1 << i - 97 & 31 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    expression(e) {
      e === void 0 && (e = 0);
      let i = this._ctx, s = this.state, r = new L(this, this._ctx, s), n = r, l = 140;
      this.enterRecursionRule(r, 140, a.RULE_expression, e);
      let h;
      try {
        let u;
        this.enterOuterAlt(r, 1);
        {
          switch (this.state = 839, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 90, this._ctx)) {
            case 1:
              this.state = 822, this.match(a.T__68), this.state = 823, this.typeName(0);
              break;
            case 2:
              this.state = 824, this.match(a.T__22), this.state = 825, this.expression(0), this.state = 826, this.match(a.T__23);
              break;
            case 3:
              this.state = 828, h = this._input.LA(1), h === 67 || h === 68 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 829, this.expression(19);
              break;
            case 4:
              this.state = 830, h = this._input.LA(1), h === 30 || h === 31 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 831, this.expression(18);
              break;
            case 5:
              this.state = 832, this.match(a.T__70), this.state = 833, this.expression(17);
              break;
            case 6:
              this.state = 834, this.match(a.T__71), this.state = 835, this.expression(16);
              break;
            case 7:
              this.state = 836, this.match(a.T__5), this.state = 837, this.expression(15);
              break;
            case 8:
              this.state = 838, this.primaryExpression();
              break;
          }
          for (this._ctx.stop = this._input.LT(-1), this.state = 915, this._errHandler.sync(this), u = this._interp.adaptivePredict(this._input, 94, this._ctx); u !== 2 && u !== ht.INVALID_ALT_NUMBER; ) {
            if (u === 1) switch (this._parseListeners != null && this.triggerExitRuleEvent(), n = r, this.state = 913, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 93, this._ctx)) {
              case 1:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 841, !this.precpred(this._ctx, 14)) throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                  this.state = 842, this.match(a.T__72), this.state = 843, this.expression(14);
                }
                break;
              case 2:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 844, !this.precpred(this._ctx, 13)) throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                  this.state = 845, h = this._input.LA(1), !(h - 3 & -32) && 1 << h - 3 & 1610612737 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 846, this.expression(14);
                }
                break;
              case 3:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 847, !this.precpred(this._ctx, 12)) throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                  this.state = 848, h = this._input.LA(1), h === 30 || h === 31 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 849, this.expression(13);
                }
                break;
              case 4:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 850, !this.precpred(this._ctx, 11)) throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                  this.state = 851, h = this._input.LA(1), h === 74 || h === 75 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 852, this.expression(12);
                }
                break;
              case 5:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 853, !this.precpred(this._ctx, 10)) throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                  this.state = 854, this.match(a.T__28), this.state = 855, this.expression(11);
                }
                break;
              case 6:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 856, !this.precpred(this._ctx, 9)) throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                  this.state = 857, this.match(a.T__4), this.state = 858, this.expression(10);
                }
                break;
              case 7:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 859, !this.precpred(this._ctx, 8)) throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                  this.state = 860, this.match(a.T__27), this.state = 861, this.expression(9);
                }
                break;
              case 8:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 862, !this.precpred(this._ctx, 7)) throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                  this.state = 863, h = this._input.LA(1), !(h & -32) && 1 << h & 1920 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 864, this.expression(8);
                }
                break;
              case 9:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 865, !this.precpred(this._ctx, 6)) throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                  this.state = 866, h = this._input.LA(1), h === 34 || h === 35 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 867, this.expression(7);
                }
                break;
              case 10:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 868, !this.precpred(this._ctx, 5)) throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                  this.state = 869, this.match(a.T__75), this.state = 870, this.expression(6);
                }
                break;
              case 11:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 871, !this.precpred(this._ctx, 4)) throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                  this.state = 872, this.match(a.T__3), this.state = 873, this.expression(5);
                }
                break;
              case 12:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 874, !this.precpred(this._ctx, 3)) throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                  this.state = 875, this.match(a.T__76), this.state = 876, this.expression(0), this.state = 877, this.match(a.T__69), this.state = 878, this.expression(3);
                }
                break;
              case 13:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 880, !this.precpred(this._ctx, 2)) throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                  this.state = 881, h = this._input.LA(1), h === 11 || !(h - 78 & -32) && 1 << h - 78 & 1023 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 882, this.expression(3);
                }
                break;
              case 14:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 883, !this.precpred(this._ctx, 27)) throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
                  this.state = 884, h = this._input.LA(1), h === 67 || h === 68 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
                }
                break;
              case 15:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 885, !this.precpred(this._ctx, 25)) throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
                  this.state = 886, this.match(a.T__41), this.state = 887, this.expression(0), this.state = 888, this.match(a.T__42);
                }
                break;
              case 16:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 890, !this.precpred(this._ctx, 24)) throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
                  this.state = 891, this.match(a.T__41), this.state = 893, this._errHandler.sync(this), h = this._input.LA(1), (!(h & -32) && 1 << h & 3263184960 || !(h - 38 & -32) && 1 << h - 38 & 4278194513 || !(h - 71 & -32) && 1 << h - 71 & 4244635651 || !(h - 103 & -32) && 1 << h - 103 & 248547339) && (this.state = 892, this.expression(0)), this.state = 895, this.match(a.T__69), this.state = 897, this._errHandler.sync(this), h = this._input.LA(1), (!(h & -32) && 1 << h & 3263184960 || !(h - 38 & -32) && 1 << h - 38 & 4278194513 || !(h - 71 & -32) && 1 << h - 71 & 4244635651 || !(h - 103 & -32) && 1 << h - 103 & 248547339) && (this.state = 896, this.expression(0)), this.state = 899, this.match(a.T__42);
                }
                break;
              case 17:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 900, !this.precpred(this._ctx, 23)) throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
                  this.state = 901, this.match(a.T__44), this.state = 902, this.identifier();
                }
                break;
              case 18:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 903, !this.precpred(this._ctx, 22)) throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
                  this.state = 904, this.match(a.T__14), this.state = 905, this.nameValueList(), this.state = 906, this.match(a.T__16);
                }
                break;
              case 19:
                {
                  if (r = new L(this, i, s), this.pushNewRecursionContext(r, l, a.RULE_expression), this.state = 908, !this.precpred(this._ctx, 21)) throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
                  this.state = 909, this.match(a.T__22), this.state = 910, this.functionCallArguments(), this.state = 911, this.match(a.T__23);
                }
                break;
            }
            this.state = 917, this._errHandler.sync(this), u = this._interp.adaptivePredict(this._input, 94, this._ctx);
          }
        }
      } catch (u) {
        if (u instanceof _) r.exception = u, this._errHandler.reportError(this, u), this._errHandler.recover(this, u);
        else throw u;
      } finally {
        this.unrollRecursionContexts(i);
      }
      return r;
    }
    primaryExpression() {
      let e = new nr(this, this._ctx, this.state);
      this.enterRule(e, 142, a.RULE_primaryExpression);
      try {
        switch (this.state = 927, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 95, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 918, this.match(a.BooleanLiteral);
            break;
          case 2:
            this.enterOuterAlt(e, 2), this.state = 919, this.numberLiteral();
            break;
          case 3:
            this.enterOuterAlt(e, 3), this.state = 920, this.hexLiteral();
            break;
          case 4:
            this.enterOuterAlt(e, 4), this.state = 921, this.stringLiteral();
            break;
          case 5:
            this.enterOuterAlt(e, 5), this.state = 922, this.identifier();
            break;
          case 6:
            this.enterOuterAlt(e, 6), this.state = 923, this.match(a.TypeKeyword);
            break;
          case 7:
            this.enterOuterAlt(e, 7), this.state = 924, this.match(a.PayableKeyword);
            break;
          case 8:
            this.enterOuterAlt(e, 8), this.state = 925, this.tupleExpression();
            break;
          case 9:
            this.enterOuterAlt(e, 9), this.state = 926, this.typeName(0);
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    expressionList() {
      let e = new me(this, this._ctx, this.state);
      this.enterRule(e, 144, a.RULE_expressionList);
      let i;
      try {
        for (this.enterOuterAlt(e, 1), this.state = 929, this.expression(0), this.state = 934, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 930, this.match(a.T__15), this.state = 931, this.expression(0), this.state = 936, this._errHandler.sync(this), i = this._input.LA(1);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    nameValueList() {
      let e = new mi(this, this._ctx, this.state);
      this.enterRule(e, 146, a.RULE_nameValueList);
      let i;
      try {
        let s;
        this.enterOuterAlt(e, 1);
        {
          for (this.state = 937, this.nameValue(), this.state = 942, this._errHandler.sync(this), s = this._interp.adaptivePredict(this._input, 97, this._ctx); s !== 2 && s !== ht.INVALID_ALT_NUMBER; ) s === 1 && (this.state = 938, this.match(a.T__15), this.state = 939, this.nameValue()), this.state = 944, this._errHandler.sync(this), s = this._interp.adaptivePredict(this._input, 97, this._ctx);
          this.state = 946, this._errHandler.sync(this), i = this._input.LA(1), i === 16 && (this.state = 945, this.match(a.T__15));
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    nameValue() {
      let e = new fi(this, this._ctx, this.state);
      this.enterRule(e, 148, a.RULE_nameValue);
      try {
        this.enterOuterAlt(e, 1), this.state = 948, this.identifier(), this.state = 949, this.match(a.T__69), this.state = 950, this.expression(0);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    functionCallArguments() {
      let e = new _i(this, this._ctx, this.state);
      this.enterRule(e, 150, a.RULE_functionCallArguments);
      let i;
      try {
        switch (this.state = 960, this._errHandler.sync(this), this._input.LA(1)) {
          case 15:
            this.enterOuterAlt(e, 1), this.state = 952, this.match(a.T__14), this.state = 954, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 953, this.nameValueList()), this.state = 956, this.match(a.T__16);
            break;
          case 6:
          case 14:
          case 23:
          case 24:
          case 25:
          case 30:
          case 31:
          case 38:
          case 42:
          case 44:
          case 46:
          case 50:
          case 62:
          case 63:
          case 64:
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 71:
          case 72:
          case 95:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 106:
          case 114:
          case 118:
          case 123:
          case 125:
          case 126:
          case 128:
          case 129:
          case 130:
            this.enterOuterAlt(e, 2), this.state = 958, this._errHandler.sync(this), i = this._input.LA(1), (!(i & -32) && 1 << i & 3263184960 || !(i - 38 & -32) && 1 << i - 38 & 4278194513 || !(i - 71 & -32) && 1 << i - 71 & 4244635651 || !(i - 103 & -32) && 1 << i - 103 & 248547339) && (this.state = 957, this.expressionList());
            break;
          default:
            throw new O(this);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    functionCall() {
      let e = new xi(this, this._ctx, this.state);
      this.enterRule(e, 152, a.RULE_functionCall);
      try {
        this.enterOuterAlt(e, 1), this.state = 962, this.expression(0), this.state = 963, this.match(a.T__22), this.state = 964, this.functionCallArguments(), this.state = 965, this.match(a.T__23);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyBlock() {
      let e = new ct(this, this._ctx, this.state);
      this.enterRule(e, 154, a.RULE_assemblyBlock);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          for (this.state = 967, this.match(a.T__14), this.state = 971, this._errHandler.sync(this), i = this._input.LA(1); !(i & -32) && 1 << i & 176209920 || !(i - 38 & -32) && 1 << i - 38 & 287322177 || !(i - 88 & -32) && 1 << i - 88 & 1176879241 || !(i - 125 & -32) && 1 << i - 125 & 59; ) this.state = 968, this.assemblyItem(), this.state = 973, this._errHandler.sync(this), i = this._input.LA(1);
          this.state = 974, this.match(a.T__16);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyItem() {
      let e = new yi(this, this._ctx, this.state);
      this.enterRule(e, 156, a.RULE_assemblyItem);
      try {
        switch (this.state = 993, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 103, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 976, this.identifier();
            break;
          case 2:
            this.enterOuterAlt(e, 2), this.state = 977, this.assemblyBlock();
            break;
          case 3:
            this.enterOuterAlt(e, 3), this.state = 978, this.assemblyExpression();
            break;
          case 4:
            this.enterOuterAlt(e, 4), this.state = 979, this.assemblyLocalDefinition();
            break;
          case 5:
            this.enterOuterAlt(e, 5), this.state = 980, this.assemblyAssignment();
            break;
          case 6:
            this.enterOuterAlt(e, 6), this.state = 981, this.assemblyStackAssignment();
            break;
          case 7:
            this.enterOuterAlt(e, 7), this.state = 982, this.labelDefinition();
            break;
          case 8:
            this.enterOuterAlt(e, 8), this.state = 983, this.assemblySwitch();
            break;
          case 9:
            this.enterOuterAlt(e, 9), this.state = 984, this.assemblyFunctionDefinition();
            break;
          case 10:
            this.enterOuterAlt(e, 10), this.state = 985, this.assemblyFor();
            break;
          case 11:
            this.enterOuterAlt(e, 11), this.state = 986, this.assemblyIf();
            break;
          case 12:
            this.enterOuterAlt(e, 12), this.state = 987, this.match(a.BreakKeyword);
            break;
          case 13:
            this.enterOuterAlt(e, 13), this.state = 988, this.match(a.ContinueKeyword);
            break;
          case 14:
            this.enterOuterAlt(e, 14), this.state = 989, this.match(a.LeaveKeyword);
            break;
          case 15:
            this.enterOuterAlt(e, 15), this.state = 990, this.numberLiteral();
            break;
          case 16:
            this.enterOuterAlt(e, 16), this.state = 991, this.stringLiteral();
            break;
          case 17:
            this.enterOuterAlt(e, 17), this.state = 992, this.hexLiteral();
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyExpression() {
      let e = new X(this, this._ctx, this.state);
      this.enterRule(e, 158, a.RULE_assemblyExpression);
      try {
        switch (this.state = 998, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 104, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 995, this.assemblyCall();
            break;
          case 2:
            this.enterOuterAlt(e, 2), this.state = 996, this.assemblyLiteral();
            break;
          case 3:
            this.enterOuterAlt(e, 3), this.state = 997, this.assemblyMember();
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyMember() {
      let e = new gi(this, this._ctx, this.state);
      this.enterRule(e, 160, a.RULE_assemblyMember);
      try {
        this.enterOuterAlt(e, 1), this.state = 1e3, this.identifier(), this.state = 1001, this.match(a.T__44), this.state = 1002, this.identifier();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyCall() {
      let e = new ar(this, this._ctx, this.state);
      this.enterRule(e, 162, a.RULE_assemblyCall);
      let i;
      try {
        this.enterOuterAlt(e, 1);
        {
          switch (this.state = 1008, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 105, this._ctx)) {
            case 1:
              this.state = 1004, this.match(a.T__58);
              break;
            case 2:
              this.state = 1005, this.match(a.T__43);
              break;
            case 3:
              this.state = 1006, this.match(a.T__65);
              break;
            case 4:
              this.state = 1007, this.identifier();
              break;
          }
          switch (this.state = 1022, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 108, this._ctx)) {
            case 1:
              {
                for (this.state = 1010, this.match(a.T__22), this.state = 1012, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 4489281 || !(i - 95 & -32) && 1 << i - 95 & 3230141313 || !(i - 128 & -32) && 1 << i - 128 & 7) && (this.state = 1011, this.assemblyExpression()), this.state = 1018, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 1014, this.match(a.T__15), this.state = 1015, this.assemblyExpression(), this.state = 1020, this._errHandler.sync(this), i = this._input.LA(1);
                this.state = 1021, this.match(a.T__23);
              }
              break;
          }
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyLocalDefinition() {
      let e = new lr(this, this._ctx, this.state);
      this.enterRule(e, 164, a.RULE_assemblyLocalDefinition);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 1024, this.match(a.T__87), this.state = 1025, this.assemblyIdentifierOrList(), this.state = 1028, this._errHandler.sync(this), i = this._input.LA(1), i === 89 && (this.state = 1026, this.match(a.T__88), this.state = 1027, this.assemblyExpression());
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyAssignment() {
      let e = new hr(this, this._ctx, this.state);
      this.enterRule(e, 166, a.RULE_assemblyAssignment);
      try {
        this.enterOuterAlt(e, 1), this.state = 1030, this.assemblyIdentifierOrList(), this.state = 1031, this.match(a.T__88), this.state = 1032, this.assemblyExpression();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyIdentifierOrList() {
      let e = new Ti(this, this._ctx, this.state);
      this.enterRule(e, 168, a.RULE_assemblyIdentifierOrList);
      try {
        switch (this.state = 1041, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 110, this._ctx)) {
          case 1:
            this.enterOuterAlt(e, 1), this.state = 1034, this.identifier();
            break;
          case 2:
            this.enterOuterAlt(e, 2), this.state = 1035, this.assemblyMember();
            break;
          case 3:
            this.enterOuterAlt(e, 3), this.state = 1036, this.assemblyIdentifierList();
            break;
          case 4:
            this.enterOuterAlt(e, 4), this.state = 1037, this.match(a.T__22), this.state = 1038, this.assemblyIdentifierList(), this.state = 1039, this.match(a.T__23);
            break;
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyIdentifierList() {
      let e = new fe(this, this._ctx, this.state);
      this.enterRule(e, 170, a.RULE_assemblyIdentifierList);
      let i;
      try {
        for (this.enterOuterAlt(e, 1), this.state = 1043, this.identifier(), this.state = 1048, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 1044, this.match(a.T__15), this.state = 1045, this.identifier(), this.state = 1050, this._errHandler.sync(this), i = this._input.LA(1);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyStackAssignment() {
      let e = new or(this, this._ctx, this.state);
      this.enterRule(e, 172, a.RULE_assemblyStackAssignment);
      try {
        this.enterOuterAlt(e, 1), this.state = 1051, this.assemblyExpression(), this.state = 1052, this.match(a.T__89), this.state = 1053, this.identifier();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    labelDefinition() {
      let e = new ur(this, this._ctx, this.state);
      this.enterRule(e, 174, a.RULE_labelDefinition);
      try {
        this.enterOuterAlt(e, 1), this.state = 1055, this.identifier(), this.state = 1056, this.match(a.T__69);
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblySwitch() {
      let e = new cr(this, this._ctx, this.state);
      this.enterRule(e, 176, a.RULE_assemblySwitch);
      let i;
      try {
        for (this.enterOuterAlt(e, 1), this.state = 1058, this.match(a.T__90), this.state = 1059, this.assemblyExpression(), this.state = 1063, this._errHandler.sync(this), i = this._input.LA(1); i === 92 || i === 93; ) this.state = 1060, this.assemblyCase(), this.state = 1065, this._errHandler.sync(this), i = this._input.LA(1);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyCase() {
      let e = new Ei(this, this._ctx, this.state);
      this.enterRule(e, 178, a.RULE_assemblyCase);
      try {
        switch (this.state = 1072, this._errHandler.sync(this), this._input.LA(1)) {
          case 92:
            this.enterOuterAlt(e, 1), this.state = 1066, this.match(a.T__91), this.state = 1067, this.assemblyLiteral(), this.state = 1068, this.assemblyBlock();
            break;
          case 93:
            this.enterOuterAlt(e, 2), this.state = 1070, this.match(a.T__92), this.state = 1071, this.assemblyBlock();
            break;
          default:
            throw new O(this);
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyFunctionDefinition() {
      let e = new dr(this, this._ctx, this.state);
      this.enterRule(e, 180, a.RULE_assemblyFunctionDefinition);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 1074, this.match(a.T__37), this.state = 1075, this.identifier(), this.state = 1076, this.match(a.T__22), this.state = 1078, this._errHandler.sync(this), i = this._input.LA(1), (i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129) && (this.state = 1077, this.assemblyIdentifierList()), this.state = 1080, this.match(a.T__23), this.state = 1082, this._errHandler.sync(this), i = this._input.LA(1), i === 94 && (this.state = 1081, this.assemblyFunctionReturns()), this.state = 1084, this.assemblyBlock();
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyFunctionReturns() {
      let e = new pr(this, this._ctx, this.state);
      this.enterRule(e, 182, a.RULE_assemblyFunctionReturns);
      try {
        this.enterOuterAlt(e, 1), this.state = 1086, this.match(a.T__93), this.state = 1087, this.assemblyIdentifierList();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyFor() {
      let e = new mr(this, this._ctx, this.state);
      this.enterRule(e, 184, a.RULE_assemblyFor);
      try {
        this.enterOuterAlt(e, 1);
        {
          switch (this.state = 1089, this.match(a.T__26), this.state = 1092, this._errHandler.sync(this), this._input.LA(1)) {
            case 15:
              this.state = 1090, this.assemblyBlock();
              break;
            case 14:
            case 25:
            case 44:
            case 50:
            case 59:
            case 62:
            case 66:
            case 95:
            case 102:
            case 103:
            case 104:
            case 106:
            case 114:
            case 118:
            case 125:
            case 126:
            case 128:
            case 129:
            case 130:
              this.state = 1091, this.assemblyExpression();
              break;
            default:
              throw new O(this);
          }
          switch (this.state = 1094, this.assemblyExpression(), this.state = 1097, this._errHandler.sync(this), this._input.LA(1)) {
            case 15:
              this.state = 1095, this.assemblyBlock();
              break;
            case 14:
            case 25:
            case 44:
            case 50:
            case 59:
            case 62:
            case 66:
            case 95:
            case 102:
            case 103:
            case 104:
            case 106:
            case 114:
            case 118:
            case 125:
            case 126:
            case 128:
            case 129:
            case 130:
              this.state = 1096, this.assemblyExpression();
              break;
            default:
              throw new O(this);
          }
          this.state = 1099, this.assemblyBlock();
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyIf() {
      let e = new fr(this, this._ctx, this.state);
      this.enterRule(e, 186, a.RULE_assemblyIf);
      try {
        this.enterOuterAlt(e, 1), this.state = 1101, this.match(a.T__50), this.state = 1102, this.assemblyExpression(), this.state = 1103, this.assemblyBlock();
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    assemblyLiteral() {
      let e = new vi(this, this._ctx, this.state);
      this.enterRule(e, 188, a.RULE_assemblyLiteral);
      try {
        switch (this.state = 1110, this._errHandler.sync(this), this._input.LA(1)) {
          case 130:
            this.enterOuterAlt(e, 1), this.state = 1105, this.stringLiteral();
            break;
          case 103:
            this.enterOuterAlt(e, 2), this.state = 1106, this.match(a.DecimalNumber);
            break;
          case 104:
            this.enterOuterAlt(e, 3), this.state = 1107, this.match(a.HexNumber);
            break;
          case 106:
            this.enterOuterAlt(e, 4), this.state = 1108, this.hexLiteral();
            break;
          case 102:
            this.enterOuterAlt(e, 5), this.state = 1109, this.match(a.BooleanLiteral);
            break;
          default:
            throw new O(this);
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    tupleExpression() {
      let e = new _r(this, this._ctx, this.state);
      this.enterRule(e, 190, a.RULE_tupleExpression);
      let i;
      try {
        switch (this.state = 1138, this._errHandler.sync(this), this._input.LA(1)) {
          case 23:
            this.enterOuterAlt(e, 1);
            {
              for (this.state = 1112, this.match(a.T__22), this.state = 1114, this._errHandler.sync(this), i = this._input.LA(1), (!(i & -32) && 1 << i & 3263184960 || !(i - 38 & -32) && 1 << i - 38 & 4278194513 || !(i - 71 & -32) && 1 << i - 71 & 4244635651 || !(i - 103 & -32) && 1 << i - 103 & 248547339) && (this.state = 1113, this.expression(0)), this.state = 1122, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 1116, this.match(a.T__15), this.state = 1118, this._errHandler.sync(this), i = this._input.LA(1), (!(i & -32) && 1 << i & 3263184960 || !(i - 38 & -32) && 1 << i - 38 & 4278194513 || !(i - 71 & -32) && 1 << i - 71 & 4244635651 || !(i - 103 & -32) && 1 << i - 103 & 248547339) && (this.state = 1117, this.expression(0)), this.state = 1124, this._errHandler.sync(this), i = this._input.LA(1);
              this.state = 1125, this.match(a.T__23);
            }
            break;
          case 42:
            this.enterOuterAlt(e, 2);
            {
              if (this.state = 1126, this.match(a.T__41), this.state = 1135, this._errHandler.sync(this), i = this._input.LA(1), !(i & -32) && 1 << i & 3263184960 || !(i - 38 & -32) && 1 << i - 38 & 4278194513 || !(i - 71 & -32) && 1 << i - 71 & 4244635651 || !(i - 103 & -32) && 1 << i - 103 & 248547339) for (this.state = 1127, this.expression(0), this.state = 1132, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 1128, this.match(a.T__15), this.state = 1129, this.expression(0), this.state = 1134, this._errHandler.sync(this), i = this._input.LA(1);
              this.state = 1137, this.match(a.T__42);
            }
            break;
          default:
            throw new O(this);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    numberLiteral() {
      let e = new Ri(this, this._ctx, this.state);
      this.enterRule(e, 192, a.RULE_numberLiteral);
      let i;
      try {
        switch (this.enterOuterAlt(e, 1), this.state = 1140, i = this._input.LA(1), i === 103 || i === 104 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 1142, this._errHandler.sync(this), this._interp.adaptivePredict(this._input, 125, this._ctx)) {
          case 1:
            this.state = 1141, this.match(a.NumberUnit);
            break;
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    identifier() {
      let e = new C(this, this._ctx, this.state);
      this.enterRule(e, 194, a.RULE_identifier);
      let i;
      try {
        this.enterOuterAlt(e, 1), this.state = 1144, i = this._input.LA(1), i === 14 || i === 25 || !(i - 44 & -32) && 1 << i - 44 & 262209 || !(i - 95 & -32) && 1 << i - 95 & 3230138369 || i === 128 || i === 129 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    hexLiteral() {
      let e = new _e(this, this._ctx, this.state);
      this.enterRule(e, 196, a.RULE_hexLiteral);
      try {
        let i;
        this.enterOuterAlt(e, 1);
        {
          this.state = 1147, this._errHandler.sync(this), i = 1;
          do {
            switch (i) {
              case 1:
                this.state = 1146, this.match(a.HexLiteralFragment);
                break;
              default:
                throw new O(this);
            }
            this.state = 1149, this._errHandler.sync(this), i = this._interp.adaptivePredict(this._input, 126, this._ctx);
          } while (i !== 2 && i !== ht.INVALID_ALT_NUMBER);
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    overrideSpecifier() {
      let e = new yt(this, this._ctx, this.state);
      this.enterRule(e, 198, a.RULE_overrideSpecifier);
      let i;
      try {
        if (this.enterOuterAlt(e, 1), this.state = 1151, this.match(a.T__95), this.state = 1163, this._errHandler.sync(this), i = this._input.LA(1), i === 23) {
          for (this.state = 1152, this.match(a.T__22), this.state = 1153, this.userDefinedTypeName(), this.state = 1158, this._errHandler.sync(this), i = this._input.LA(1); i === 16; ) this.state = 1154, this.match(a.T__15), this.state = 1155, this.userDefinedTypeName(), this.state = 1160, this._errHandler.sync(this), i = this._input.LA(1);
          this.state = 1161, this.match(a.T__23);
        }
      } catch (s) {
        if (s instanceof _) e.exception = s, this._errHandler.reportError(this, s), this._errHandler.recover(this, s);
        else throw s;
      } finally {
        this.exitRule();
      }
      return e;
    }
    stringLiteral() {
      let e = new zt(this, this._ctx, this.state);
      this.enterRule(e, 200, a.RULE_stringLiteral);
      try {
        let i;
        this.enterOuterAlt(e, 1);
        {
          this.state = 1166, this._errHandler.sync(this), i = 1;
          do {
            switch (i) {
              case 1:
                this.state = 1165, this.match(a.StringLiteralFragment);
                break;
              default:
                throw new O(this);
            }
            this.state = 1168, this._errHandler.sync(this), i = this._interp.adaptivePredict(this._input, 129, this._ctx);
          } while (i !== 2 && i !== ht.INVALID_ALT_NUMBER);
        }
      } catch (i) {
        if (i instanceof _) e.exception = i, this._errHandler.reportError(this, i), this._errHandler.recover(this, i);
        else throw i;
      } finally {
        this.exitRule();
      }
      return e;
    }
    sempred(e, i, s) {
      switch (i) {
        case 38:
          return this.typeName_sempred(e, s);
        case 70:
          return this.expression_sempred(e, s);
      }
      return true;
    }
    typeName_sempred(e, i) {
      switch (i) {
        case 0:
          return this.precpred(this._ctx, 3);
      }
      return true;
    }
    expression_sempred(e, i) {
      switch (i) {
        case 1:
          return this.precpred(this._ctx, 14);
        case 2:
          return this.precpred(this._ctx, 13);
        case 3:
          return this.precpred(this._ctx, 12);
        case 4:
          return this.precpred(this._ctx, 11);
        case 5:
          return this.precpred(this._ctx, 10);
        case 6:
          return this.precpred(this._ctx, 9);
        case 7:
          return this.precpred(this._ctx, 8);
        case 8:
          return this.precpred(this._ctx, 7);
        case 9:
          return this.precpred(this._ctx, 6);
        case 10:
          return this.precpred(this._ctx, 5);
        case 11:
          return this.precpred(this._ctx, 4);
        case 12:
          return this.precpred(this._ctx, 3);
        case 13:
          return this.precpred(this._ctx, 2);
        case 14:
          return this.precpred(this._ctx, 27);
        case 15:
          return this.precpred(this._ctx, 25);
        case 16:
          return this.precpred(this._ctx, 24);
        case 17:
          return this.precpred(this._ctx, 23);
        case 18:
          return this.precpred(this._ctx, 22);
        case 19:
          return this.precpred(this._ctx, 21);
      }
      return true;
    }
    static get _ATN() {
      return a.__ATN || (a.__ATN = new gs().deserialize(a._serializedATN)), a.__ATN;
    }
  };
  o.T__0 = 1, o.T__1 = 2, o.T__2 = 3, o.T__3 = 4, o.T__4 = 5, o.T__5 = 6, o.T__6 = 7, o.T__7 = 8, o.T__8 = 9, o.T__9 = 10, o.T__10 = 11, o.T__11 = 12, o.T__12 = 13, o.T__13 = 14, o.T__14 = 15, o.T__15 = 16, o.T__16 = 17, o.T__17 = 18, o.T__18 = 19, o.T__19 = 20, o.T__20 = 21, o.T__21 = 22, o.T__22 = 23, o.T__23 = 24, o.T__24 = 25, o.T__25 = 26, o.T__26 = 27, o.T__27 = 28, o.T__28 = 29, o.T__29 = 30, o.T__30 = 31, o.T__31 = 32, o.T__32 = 33, o.T__33 = 34, o.T__34 = 35, o.T__35 = 36, o.T__36 = 37, o.T__37 = 38, o.T__38 = 39, o.T__39 = 40, o.T__40 = 41, o.T__41 = 42, o.T__42 = 43, o.T__43 = 44, o.T__44 = 45, o.T__45 = 46, o.T__46 = 47, o.T__47 = 48, o.T__48 = 49, o.T__49 = 50, o.T__50 = 51, o.T__51 = 52, o.T__52 = 53, o.T__53 = 54, o.T__54 = 55, o.T__55 = 56, o.T__56 = 57, o.T__57 = 58, o.T__58 = 59, o.T__59 = 60, o.T__60 = 61, o.T__61 = 62, o.T__62 = 63, o.T__63 = 64, o.T__64 = 65, o.T__65 = 66, o.T__66 = 67, o.T__67 = 68, o.T__68 = 69, o.T__69 = 70, o.T__70 = 71, o.T__71 = 72, o.T__72 = 73, o.T__73 = 74, o.T__74 = 75, o.T__75 = 76, o.T__76 = 77, o.T__77 = 78, o.T__78 = 79, o.T__79 = 80, o.T__80 = 81, o.T__81 = 82, o.T__82 = 83, o.T__83 = 84, o.T__84 = 85, o.T__85 = 86, o.T__86 = 87, o.T__87 = 88, o.T__88 = 89, o.T__89 = 90, o.T__90 = 91, o.T__91 = 92, o.T__92 = 93, o.T__93 = 94, o.T__94 = 95, o.T__95 = 96, o.Int = 97, o.Uint = 98, o.Byte = 99, o.Fixed = 100, o.Ufixed = 101, o.BooleanLiteral = 102, o.DecimalNumber = 103, o.HexNumber = 104, o.NumberUnit = 105, o.HexLiteralFragment = 106, o.ReservedKeyword = 107, o.AnonymousKeyword = 108, o.BreakKeyword = 109, o.ConstantKeyword = 110, o.TransientKeyword = 111, o.ImmutableKeyword = 112, o.ContinueKeyword = 113, o.LeaveKeyword = 114, o.ExternalKeyword = 115, o.IndexedKeyword = 116, o.InternalKeyword = 117, o.PayableKeyword = 118, o.PrivateKeyword = 119, o.PublicKeyword = 120, o.VirtualKeyword = 121, o.PureKeyword = 122, o.TypeKeyword = 123, o.ViewKeyword = 124, o.GlobalKeyword = 125, o.ConstructorKeyword = 126, o.FallbackKeyword = 127, o.ReceiveKeyword = 128, o.Identifier = 129, o.StringLiteralFragment = 130, o.VersionLiteral = 131, o.WS = 132, o.COMMENT = 133, o.LINE_COMMENT = 134, o.EOF = Rs.EOF, o.RULE_sourceUnit = 0, o.RULE_pragmaDirective = 1, o.RULE_pragmaName = 2, o.RULE_pragmaValue = 3, o.RULE_version = 4, o.RULE_versionOperator = 5, o.RULE_versionConstraint = 6, o.RULE_importDeclaration = 7, o.RULE_importDirective = 8, o.RULE_importPath = 9, o.RULE_contractDefinition = 10, o.RULE_inheritanceSpecifier = 11, o.RULE_contractPart = 12, o.RULE_stateVariableDeclaration = 13, o.RULE_fileLevelConstant = 14, o.RULE_customErrorDefinition = 15, o.RULE_typeDefinition = 16, o.RULE_usingForDeclaration = 17, o.RULE_usingForObject = 18, o.RULE_usingForObjectDirective = 19, o.RULE_userDefinableOperators = 20, o.RULE_structDefinition = 21, o.RULE_modifierDefinition = 22, o.RULE_modifierInvocation = 23, o.RULE_functionDefinition = 24, o.RULE_functionDescriptor = 25, o.RULE_returnParameters = 26, o.RULE_modifierList = 27, o.RULE_eventDefinition = 28, o.RULE_enumValue = 29, o.RULE_enumDefinition = 30, o.RULE_parameterList = 31, o.RULE_parameter = 32, o.RULE_eventParameterList = 33, o.RULE_eventParameter = 34, o.RULE_functionTypeParameterList = 35, o.RULE_functionTypeParameter = 36, o.RULE_variableDeclaration = 37, o.RULE_typeName = 38, o.RULE_userDefinedTypeName = 39, o.RULE_mappingKey = 40, o.RULE_mapping = 41, o.RULE_mappingKeyName = 42, o.RULE_mappingValueName = 43, o.RULE_functionTypeName = 44, o.RULE_storageLocation = 45, o.RULE_stateMutability = 46, o.RULE_block = 47, o.RULE_statement = 48, o.RULE_expressionStatement = 49, o.RULE_ifStatement = 50, o.RULE_tryStatement = 51, o.RULE_catchClause = 52, o.RULE_whileStatement = 53, o.RULE_simpleStatement = 54, o.RULE_uncheckedStatement = 55, o.RULE_forStatement = 56, o.RULE_inlineAssemblyStatement = 57, o.RULE_inlineAssemblyStatementFlag = 58, o.RULE_doWhileStatement = 59, o.RULE_continueStatement = 60, o.RULE_breakStatement = 61, o.RULE_returnStatement = 62, o.RULE_throwStatement = 63, o.RULE_emitStatement = 64, o.RULE_revertStatement = 65, o.RULE_variableDeclarationStatement = 66, o.RULE_variableDeclarationList = 67, o.RULE_identifierList = 68, o.RULE_elementaryTypeName = 69, o.RULE_expression = 70, o.RULE_primaryExpression = 71, o.RULE_expressionList = 72, o.RULE_nameValueList = 73, o.RULE_nameValue = 74, o.RULE_functionCallArguments = 75, o.RULE_functionCall = 76, o.RULE_assemblyBlock = 77, o.RULE_assemblyItem = 78, o.RULE_assemblyExpression = 79, o.RULE_assemblyMember = 80, o.RULE_assemblyCall = 81, o.RULE_assemblyLocalDefinition = 82, o.RULE_assemblyAssignment = 83, o.RULE_assemblyIdentifierOrList = 84, o.RULE_assemblyIdentifierList = 85, o.RULE_assemblyStackAssignment = 86, o.RULE_labelDefinition = 87, o.RULE_assemblySwitch = 88, o.RULE_assemblyCase = 89, o.RULE_assemblyFunctionDefinition = 90, o.RULE_assemblyFunctionReturns = 91, o.RULE_assemblyFor = 92, o.RULE_assemblyIf = 93, o.RULE_assemblyLiteral = 94, o.RULE_tupleExpression = 95, o.RULE_numberLiteral = 96, o.RULE_identifier = 97, o.RULE_hexLiteral = 98, o.RULE_overrideSpecifier = 99, o.RULE_stringLiteral = 100, o.literalNames = [null, "'pragma'", "';'", "'*'", "'||'", "'^'", "'~'", "'>='", "'>'", "'<'", "'<='", "'='", "'as'", "'import'", "'from'", "'{'", "','", "'}'", "'abstract'", "'contract'", "'interface'", "'library'", "'is'", "'('", "')'", "'error'", "'using'", "'for'", "'|'", "'&'", "'+'", "'-'", "'/'", "'%'", "'=='", "'!='", "'struct'", "'modifier'", "'function'", "'returns'", "'event'", "'enum'", "'['", "']'", "'address'", "'.'", "'mapping'", "'=>'", "'memory'", "'storage'", "'calldata'", "'if'", "'else'", "'try'", "'catch'", "'while'", "'unchecked'", "'assembly'", "'do'", "'return'", "'throw'", "'emit'", "'revert'", "'var'", "'bool'", "'string'", "'byte'", "'++'", "'--'", "'new'", "':'", "'delete'", "'!'", "'**'", "'<<'", "'>>'", "'&&'", "'?'", "'|='", "'^='", "'&='", "'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'let'", "':='", "'=:'", "'switch'", "'case'", "'default'", "'->'", "'callback'", "'override'", null, null, null, null, null, null, null, null, null, null, null, "'anonymous'", "'break'", "'constant'", "'transient'", "'immutable'", "'continue'", "'leave'", "'external'", "'indexed'", "'internal'", "'payable'", "'private'", "'public'", "'virtual'", "'pure'", "'type'", "'view'", "'global'", "'constructor'", "'fallback'", "'receive'"], o.symbolicNames = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Int", "Uint", "Byte", "Fixed", "Ufixed", "BooleanLiteral", "DecimalNumber", "HexNumber", "NumberUnit", "HexLiteralFragment", "ReservedKeyword", "AnonymousKeyword", "BreakKeyword", "ConstantKeyword", "TransientKeyword", "ImmutableKeyword", "ContinueKeyword", "LeaveKeyword", "ExternalKeyword", "IndexedKeyword", "InternalKeyword", "PayableKeyword", "PrivateKeyword", "PublicKeyword", "VirtualKeyword", "PureKeyword", "TypeKeyword", "ViewKeyword", "GlobalKeyword", "ConstructorKeyword", "FallbackKeyword", "ReceiveKeyword", "Identifier", "StringLiteralFragment", "VersionLiteral", "WS", "COMMENT", "LINE_COMMENT"], o.ruleNames = ["sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version", "versionOperator", "versionConstraint", "importDeclaration", "importDirective", "importPath", "contractDefinition", "inheritanceSpecifier", "contractPart", "stateVariableDeclaration", "fileLevelConstant", "customErrorDefinition", "typeDefinition", "usingForDeclaration", "usingForObject", "usingForObjectDirective", "userDefinableOperators", "structDefinition", "modifierDefinition", "modifierInvocation", "functionDefinition", "functionDescriptor", "returnParameters", "modifierList", "eventDefinition", "enumValue", "enumDefinition", "parameterList", "parameter", "eventParameterList", "eventParameter", "functionTypeParameterList", "functionTypeParameter", "variableDeclaration", "typeName", "userDefinedTypeName", "mappingKey", "mapping", "mappingKeyName", "mappingValueName", "functionTypeName", "storageLocation", "stateMutability", "block", "statement", "expressionStatement", "ifStatement", "tryStatement", "catchClause", "whileStatement", "simpleStatement", "uncheckedStatement", "forStatement", "inlineAssemblyStatement", "inlineAssemblyStatementFlag", "doWhileStatement", "continueStatement", "breakStatement", "returnStatement", "throwStatement", "emitStatement", "revertStatement", "variableDeclarationStatement", "variableDeclarationList", "identifierList", "elementaryTypeName", "expression", "primaryExpression", "expressionList", "nameValueList", "nameValue", "functionCallArguments", "functionCall", "assemblyBlock", "assemblyItem", "assemblyExpression", "assemblyMember", "assemblyCall", "assemblyLocalDefinition", "assemblyAssignment", "assemblyIdentifierOrList", "assemblyIdentifierList", "assemblyStackAssignment", "labelDefinition", "assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", "assemblyFunctionReturns", "assemblyFor", "assemblyIf", "assemblyLiteral", "tupleExpression", "numberLiteral", "identifier", "hexLiteral", "overrideSpecifier", "stringLiteral"], o._serializedATN = [4, 1, 134, 1171, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 214, 8, 0, 10, 0, 12, 0, 217, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 3, 3, 231, 8, 3, 1, 4, 1, 4, 3, 4, 235, 8, 4, 1, 4, 5, 4, 238, 8, 4, 10, 4, 12, 4, 241, 9, 4, 1, 5, 1, 5, 1, 6, 3, 6, 246, 8, 6, 1, 6, 1, 6, 3, 6, 250, 8, 6, 1, 6, 3, 6, 253, 8, 6, 1, 7, 1, 7, 1, 7, 3, 7, 258, 8, 7, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 264, 8, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 271, 8, 8, 1, 8, 1, 8, 3, 8, 275, 8, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 5, 8, 286, 8, 8, 10, 8, 12, 8, 289, 9, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 296, 8, 8, 1, 9, 1, 9, 1, 10, 3, 10, 301, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 5, 10, 309, 8, 10, 10, 10, 12, 10, 312, 9, 10, 3, 10, 314, 8, 10, 1, 10, 1, 10, 5, 10, 318, 8, 10, 10, 10, 12, 10, 321, 9, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 3, 11, 328, 8, 11, 1, 11, 3, 11, 331, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 342, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 5, 13, 352, 8, 13, 10, 13, 12, 13, 355, 9, 13, 1, 13, 1, 13, 1, 13, 3, 13, 360, 8, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 387, 8, 17, 1, 17, 3, 17, 390, 8, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 5, 18, 399, 8, 18, 10, 18, 12, 18, 402, 9, 18, 1, 18, 1, 18, 3, 18, 406, 8, 18, 1, 19, 1, 19, 1, 19, 3, 19, 411, 8, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 5, 21, 423, 8, 21, 10, 21, 12, 21, 426, 9, 21, 3, 21, 428, 8, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 3, 22, 435, 8, 22, 1, 22, 1, 22, 5, 22, 439, 8, 22, 10, 22, 12, 22, 442, 9, 22, 1, 22, 1, 22, 3, 22, 446, 8, 22, 1, 23, 1, 23, 1, 23, 3, 23, 451, 8, 23, 1, 23, 3, 23, 454, 8, 23, 1, 24, 1, 24, 1, 24, 1, 24, 3, 24, 460, 8, 24, 1, 24, 1, 24, 3, 24, 464, 8, 24, 1, 25, 1, 25, 3, 25, 468, 8, 25, 1, 25, 1, 25, 1, 25, 3, 25, 473, 8, 25, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 5, 27, 486, 8, 27, 10, 27, 12, 27, 489, 9, 27, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 495, 8, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30, 505, 8, 30, 1, 30, 1, 30, 5, 30, 509, 8, 30, 10, 30, 12, 30, 512, 9, 30, 1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 5, 31, 520, 8, 31, 10, 31, 12, 31, 523, 9, 31, 3, 31, 525, 8, 31, 1, 31, 1, 31, 1, 32, 1, 32, 3, 32, 531, 8, 32, 1, 32, 3, 32, 534, 8, 32, 1, 33, 1, 33, 1, 33, 1, 33, 5, 33, 540, 8, 33, 10, 33, 12, 33, 543, 9, 33, 3, 33, 545, 8, 33, 1, 33, 1, 33, 1, 34, 1, 34, 3, 34, 551, 8, 34, 1, 34, 3, 34, 554, 8, 34, 1, 35, 1, 35, 1, 35, 1, 35, 5, 35, 560, 8, 35, 10, 35, 12, 35, 563, 9, 35, 3, 35, 565, 8, 35, 1, 35, 1, 35, 1, 36, 1, 36, 3, 36, 571, 8, 36, 1, 37, 1, 37, 3, 37, 575, 8, 37, 1, 37, 1, 37, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 3, 38, 586, 8, 38, 1, 38, 1, 38, 1, 38, 3, 38, 591, 8, 38, 1, 38, 5, 38, 594, 8, 38, 10, 38, 12, 38, 597, 9, 38, 1, 39, 1, 39, 1, 39, 5, 39, 602, 8, 39, 10, 39, 12, 39, 605, 9, 39, 1, 40, 1, 40, 3, 40, 609, 8, 40, 1, 41, 1, 41, 1, 41, 1, 41, 3, 41, 615, 8, 41, 1, 41, 1, 41, 1, 41, 3, 41, 620, 8, 41, 1, 41, 1, 41, 1, 42, 1, 42, 1, 43, 1, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 5, 44, 633, 8, 44, 10, 44, 12, 44, 636, 9, 44, 1, 44, 1, 44, 3, 44, 640, 8, 44, 1, 45, 1, 45, 1, 46, 1, 46, 1, 47, 1, 47, 5, 47, 648, 8, 47, 10, 47, 12, 47, 651, 9, 47, 1, 47, 1, 47, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 3, 48, 670, 8, 48, 1, 49, 1, 49, 1, 49, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 3, 50, 682, 8, 50, 1, 51, 1, 51, 1, 51, 3, 51, 687, 8, 51, 1, 51, 1, 51, 4, 51, 691, 8, 51, 11, 51, 12, 51, 692, 1, 52, 1, 52, 3, 52, 697, 8, 52, 1, 52, 3, 52, 700, 8, 52, 1, 52, 1, 52, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 54, 1, 54, 3, 54, 712, 8, 54, 1, 55, 1, 55, 1, 55, 1, 56, 1, 56, 1, 56, 1, 56, 3, 56, 721, 8, 56, 1, 56, 1, 56, 3, 56, 725, 8, 56, 1, 56, 3, 56, 728, 8, 56, 1, 56, 1, 56, 1, 56, 1, 57, 1, 57, 3, 57, 735, 8, 57, 1, 57, 1, 57, 1, 57, 1, 57, 3, 57, 741, 8, 57, 1, 57, 1, 57, 1, 58, 1, 58, 1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1, 60, 1, 60, 1, 60, 1, 61, 1, 61, 1, 61, 1, 62, 1, 62, 3, 62, 763, 8, 62, 1, 62, 1, 62, 1, 63, 1, 63, 1, 63, 1, 64, 1, 64, 1, 64, 1, 64, 1, 65, 1, 65, 1, 65, 1, 65, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 3, 66, 785, 8, 66, 1, 66, 1, 66, 3, 66, 789, 8, 66, 1, 66, 1, 66, 1, 67, 3, 67, 794, 8, 67, 1, 67, 1, 67, 3, 67, 798, 8, 67, 5, 67, 800, 8, 67, 10, 67, 12, 67, 803, 9, 67, 1, 68, 1, 68, 3, 68, 807, 8, 68, 1, 68, 5, 68, 810, 8, 68, 10, 68, 12, 68, 813, 9, 68, 1, 68, 3, 68, 816, 8, 68, 1, 68, 1, 68, 1, 69, 1, 69, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 3, 70, 840, 8, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 3, 70, 894, 8, 70, 1, 70, 1, 70, 3, 70, 898, 8, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 5, 70, 914, 8, 70, 10, 70, 12, 70, 917, 9, 70, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 3, 71, 928, 8, 71, 1, 72, 1, 72, 1, 72, 5, 72, 933, 8, 72, 10, 72, 12, 72, 936, 9, 72, 1, 73, 1, 73, 1, 73, 5, 73, 941, 8, 73, 10, 73, 12, 73, 944, 9, 73, 1, 73, 3, 73, 947, 8, 73, 1, 74, 1, 74, 1, 74, 1, 74, 1, 75, 1, 75, 3, 75, 955, 8, 75, 1, 75, 1, 75, 3, 75, 959, 8, 75, 3, 75, 961, 8, 75, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 77, 1, 77, 5, 77, 970, 8, 77, 10, 77, 12, 77, 973, 9, 77, 1, 77, 1, 77, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 3, 78, 994, 8, 78, 1, 79, 1, 79, 1, 79, 3, 79, 999, 8, 79, 1, 80, 1, 80, 1, 80, 1, 80, 1, 81, 1, 81, 1, 81, 1, 81, 3, 81, 1009, 8, 81, 1, 81, 1, 81, 3, 81, 1013, 8, 81, 1, 81, 1, 81, 5, 81, 1017, 8, 81, 10, 81, 12, 81, 1020, 9, 81, 1, 81, 3, 81, 1023, 8, 81, 1, 82, 1, 82, 1, 82, 1, 82, 3, 82, 1029, 8, 82, 1, 83, 1, 83, 1, 83, 1, 83, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 3, 84, 1042, 8, 84, 1, 85, 1, 85, 1, 85, 5, 85, 1047, 8, 85, 10, 85, 12, 85, 1050, 9, 85, 1, 86, 1, 86, 1, 86, 1, 86, 1, 87, 1, 87, 1, 87, 1, 88, 1, 88, 1, 88, 5, 88, 1062, 8, 88, 10, 88, 12, 88, 1065, 9, 88, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 3, 89, 1073, 8, 89, 1, 90, 1, 90, 1, 90, 1, 90, 3, 90, 1079, 8, 90, 1, 90, 1, 90, 3, 90, 1083, 8, 90, 1, 90, 1, 90, 1, 91, 1, 91, 1, 91, 1, 92, 1, 92, 1, 92, 3, 92, 1093, 8, 92, 1, 92, 1, 92, 1, 92, 3, 92, 1098, 8, 92, 1, 92, 1, 92, 1, 93, 1, 93, 1, 93, 1, 93, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 3, 94, 1111, 8, 94, 1, 95, 1, 95, 3, 95, 1115, 8, 95, 1, 95, 1, 95, 3, 95, 1119, 8, 95, 5, 95, 1121, 8, 95, 10, 95, 12, 95, 1124, 9, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 5, 95, 1131, 8, 95, 10, 95, 12, 95, 1134, 9, 95, 3, 95, 1136, 8, 95, 1, 95, 3, 95, 1139, 8, 95, 1, 96, 1, 96, 3, 96, 1143, 8, 96, 1, 97, 1, 97, 1, 98, 4, 98, 1148, 8, 98, 11, 98, 12, 98, 1149, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 5, 99, 1157, 8, 99, 10, 99, 12, 99, 1160, 9, 99, 1, 99, 1, 99, 3, 99, 1164, 8, 99, 1, 100, 4, 100, 1167, 8, 100, 11, 100, 12, 100, 1168, 1, 100, 0, 2, 76, 140, 101, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 0, 15, 1, 0, 5, 11, 1, 0, 19, 21, 3, 0, 3, 3, 5, 10, 28, 35, 1, 0, 48, 50, 4, 0, 110, 110, 118, 118, 122, 122, 124, 124, 3, 0, 44, 44, 63, 66, 97, 101, 1, 0, 67, 68, 1, 0, 30, 31, 2, 0, 3, 3, 32, 33, 1, 0, 74, 75, 1, 0, 7, 10, 1, 0, 34, 35, 2, 0, 11, 11, 78, 87, 1, 0, 103, 104, 10, 0, 14, 14, 25, 25, 44, 44, 50, 50, 62, 62, 95, 95, 114, 114, 118, 118, 125, 126, 128, 129, 1301, 0, 215, 1, 0, 0, 0, 2, 220, 1, 0, 0, 0, 4, 225, 1, 0, 0, 0, 6, 230, 1, 0, 0, 0, 8, 232, 1, 0, 0, 0, 10, 242, 1, 0, 0, 0, 12, 252, 1, 0, 0, 0, 14, 254, 1, 0, 0, 0, 16, 295, 1, 0, 0, 0, 18, 297, 1, 0, 0, 0, 20, 300, 1, 0, 0, 0, 22, 324, 1, 0, 0, 0, 24, 341, 1, 0, 0, 0, 26, 343, 1, 0, 0, 0, 28, 363, 1, 0, 0, 0, 30, 370, 1, 0, 0, 0, 32, 375, 1, 0, 0, 0, 34, 381, 1, 0, 0, 0, 36, 405, 1, 0, 0, 0, 38, 407, 1, 0, 0, 0, 40, 412, 1, 0, 0, 0, 42, 414, 1, 0, 0, 0, 44, 431, 1, 0, 0, 0, 46, 447, 1, 0, 0, 0, 48, 455, 1, 0, 0, 0, 50, 472, 1, 0, 0, 0, 52, 474, 1, 0, 0, 0, 54, 487, 1, 0, 0, 0, 56, 490, 1, 0, 0, 0, 58, 498, 1, 0, 0, 0, 60, 500, 1, 0, 0, 0, 62, 515, 1, 0, 0, 0, 64, 528, 1, 0, 0, 0, 66, 535, 1, 0, 0, 0, 68, 548, 1, 0, 0, 0, 70, 555, 1, 0, 0, 0, 72, 568, 1, 0, 0, 0, 74, 572, 1, 0, 0, 0, 76, 585, 1, 0, 0, 0, 78, 598, 1, 0, 0, 0, 80, 608, 1, 0, 0, 0, 82, 610, 1, 0, 0, 0, 84, 623, 1, 0, 0, 0, 86, 625, 1, 0, 0, 0, 88, 627, 1, 0, 0, 0, 90, 641, 1, 0, 0, 0, 92, 643, 1, 0, 0, 0, 94, 645, 1, 0, 0, 0, 96, 669, 1, 0, 0, 0, 98, 671, 1, 0, 0, 0, 100, 674, 1, 0, 0, 0, 102, 683, 1, 0, 0, 0, 104, 694, 1, 0, 0, 0, 106, 703, 1, 0, 0, 0, 108, 711, 1, 0, 0, 0, 110, 713, 1, 0, 0, 0, 112, 716, 1, 0, 0, 0, 114, 732, 1, 0, 0, 0, 116, 744, 1, 0, 0, 0, 118, 746, 1, 0, 0, 0, 120, 754, 1, 0, 0, 0, 122, 757, 1, 0, 0, 0, 124, 760, 1, 0, 0, 0, 126, 766, 1, 0, 0, 0, 128, 769, 1, 0, 0, 0, 130, 773, 1, 0, 0, 0, 132, 784, 1, 0, 0, 0, 134, 793, 1, 0, 0, 0, 136, 804, 1, 0, 0, 0, 138, 819, 1, 0, 0, 0, 140, 839, 1, 0, 0, 0, 142, 927, 1, 0, 0, 0, 144, 929, 1, 0, 0, 0, 146, 937, 1, 0, 0, 0, 148, 948, 1, 0, 0, 0, 150, 960, 1, 0, 0, 0, 152, 962, 1, 0, 0, 0, 154, 967, 1, 0, 0, 0, 156, 993, 1, 0, 0, 0, 158, 998, 1, 0, 0, 0, 160, 1e3, 1, 0, 0, 0, 162, 1008, 1, 0, 0, 0, 164, 1024, 1, 0, 0, 0, 166, 1030, 1, 0, 0, 0, 168, 1041, 1, 0, 0, 0, 170, 1043, 1, 0, 0, 0, 172, 1051, 1, 0, 0, 0, 174, 1055, 1, 0, 0, 0, 176, 1058, 1, 0, 0, 0, 178, 1072, 1, 0, 0, 0, 180, 1074, 1, 0, 0, 0, 182, 1086, 1, 0, 0, 0, 184, 1089, 1, 0, 0, 0, 186, 1101, 1, 0, 0, 0, 188, 1110, 1, 0, 0, 0, 190, 1138, 1, 0, 0, 0, 192, 1140, 1, 0, 0, 0, 194, 1144, 1, 0, 0, 0, 196, 1147, 1, 0, 0, 0, 198, 1151, 1, 0, 0, 0, 200, 1166, 1, 0, 0, 0, 202, 214, 3, 2, 1, 0, 203, 214, 3, 16, 8, 0, 204, 214, 3, 20, 10, 0, 205, 214, 3, 60, 30, 0, 206, 214, 3, 56, 28, 0, 207, 214, 3, 42, 21, 0, 208, 214, 3, 48, 24, 0, 209, 214, 3, 28, 14, 0, 210, 214, 3, 30, 15, 0, 211, 214, 3, 32, 16, 0, 212, 214, 3, 34, 17, 0, 213, 202, 1, 0, 0, 0, 213, 203, 1, 0, 0, 0, 213, 204, 1, 0, 0, 0, 213, 205, 1, 0, 0, 0, 213, 206, 1, 0, 0, 0, 213, 207, 1, 0, 0, 0, 213, 208, 1, 0, 0, 0, 213, 209, 1, 0, 0, 0, 213, 210, 1, 0, 0, 0, 213, 211, 1, 0, 0, 0, 213, 212, 1, 0, 0, 0, 214, 217, 1, 0, 0, 0, 215, 213, 1, 0, 0, 0, 215, 216, 1, 0, 0, 0, 216, 218, 1, 0, 0, 0, 217, 215, 1, 0, 0, 0, 218, 219, 5, 0, 0, 1, 219, 1, 1, 0, 0, 0, 220, 221, 5, 1, 0, 0, 221, 222, 3, 4, 2, 0, 222, 223, 3, 6, 3, 0, 223, 224, 5, 2, 0, 0, 224, 3, 1, 0, 0, 0, 225, 226, 3, 194, 97, 0, 226, 5, 1, 0, 0, 0, 227, 231, 5, 3, 0, 0, 228, 231, 3, 8, 4, 0, 229, 231, 3, 140, 70, 0, 230, 227, 1, 0, 0, 0, 230, 228, 1, 0, 0, 0, 230, 229, 1, 0, 0, 0, 231, 7, 1, 0, 0, 0, 232, 239, 3, 12, 6, 0, 233, 235, 5, 4, 0, 0, 234, 233, 1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 236, 1, 0, 0, 0, 236, 238, 3, 12, 6, 0, 237, 234, 1, 0, 0, 0, 238, 241, 1, 0, 0, 0, 239, 237, 1, 0, 0, 0, 239, 240, 1, 0, 0, 0, 240, 9, 1, 0, 0, 0, 241, 239, 1, 0, 0, 0, 242, 243, 7, 0, 0, 0, 243, 11, 1, 0, 0, 0, 244, 246, 3, 10, 5, 0, 245, 244, 1, 0, 0, 0, 245, 246, 1, 0, 0, 0, 246, 247, 1, 0, 0, 0, 247, 253, 5, 131, 0, 0, 248, 250, 3, 10, 5, 0, 249, 248, 1, 0, 0, 0, 249, 250, 1, 0, 0, 0, 250, 251, 1, 0, 0, 0, 251, 253, 5, 103, 0, 0, 252, 245, 1, 0, 0, 0, 252, 249, 1, 0, 0, 0, 253, 13, 1, 0, 0, 0, 254, 257, 3, 194, 97, 0, 255, 256, 5, 12, 0, 0, 256, 258, 3, 194, 97, 0, 257, 255, 1, 0, 0, 0, 257, 258, 1, 0, 0, 0, 258, 15, 1, 0, 0, 0, 259, 260, 5, 13, 0, 0, 260, 263, 3, 18, 9, 0, 261, 262, 5, 12, 0, 0, 262, 264, 3, 194, 97, 0, 263, 261, 1, 0, 0, 0, 263, 264, 1, 0, 0, 0, 264, 265, 1, 0, 0, 0, 265, 266, 5, 2, 0, 0, 266, 296, 1, 0, 0, 0, 267, 270, 5, 13, 0, 0, 268, 271, 5, 3, 0, 0, 269, 271, 3, 194, 97, 0, 270, 268, 1, 0, 0, 0, 270, 269, 1, 0, 0, 0, 271, 274, 1, 0, 0, 0, 272, 273, 5, 12, 0, 0, 273, 275, 3, 194, 97, 0, 274, 272, 1, 0, 0, 0, 274, 275, 1, 0, 0, 0, 275, 276, 1, 0, 0, 0, 276, 277, 5, 14, 0, 0, 277, 278, 3, 18, 9, 0, 278, 279, 5, 2, 0, 0, 279, 296, 1, 0, 0, 0, 280, 281, 5, 13, 0, 0, 281, 282, 5, 15, 0, 0, 282, 287, 3, 14, 7, 0, 283, 284, 5, 16, 0, 0, 284, 286, 3, 14, 7, 0, 285, 283, 1, 0, 0, 0, 286, 289, 1, 0, 0, 0, 287, 285, 1, 0, 0, 0, 287, 288, 1, 0, 0, 0, 288, 290, 1, 0, 0, 0, 289, 287, 1, 0, 0, 0, 290, 291, 5, 17, 0, 0, 291, 292, 5, 14, 0, 0, 292, 293, 3, 18, 9, 0, 293, 294, 5, 2, 0, 0, 294, 296, 1, 0, 0, 0, 295, 259, 1, 0, 0, 0, 295, 267, 1, 0, 0, 0, 295, 280, 1, 0, 0, 0, 296, 17, 1, 0, 0, 0, 297, 298, 5, 130, 0, 0, 298, 19, 1, 0, 0, 0, 299, 301, 5, 18, 0, 0, 300, 299, 1, 0, 0, 0, 300, 301, 1, 0, 0, 0, 301, 302, 1, 0, 0, 0, 302, 303, 7, 1, 0, 0, 303, 313, 3, 194, 97, 0, 304, 305, 5, 22, 0, 0, 305, 310, 3, 22, 11, 0, 306, 307, 5, 16, 0, 0, 307, 309, 3, 22, 11, 0, 308, 306, 1, 0, 0, 0, 309, 312, 1, 0, 0, 0, 310, 308, 1, 0, 0, 0, 310, 311, 1, 0, 0, 0, 311, 314, 1, 0, 0, 0, 312, 310, 1, 0, 0, 0, 313, 304, 1, 0, 0, 0, 313, 314, 1, 0, 0, 0, 314, 315, 1, 0, 0, 0, 315, 319, 5, 15, 0, 0, 316, 318, 3, 24, 12, 0, 317, 316, 1, 0, 0, 0, 318, 321, 1, 0, 0, 0, 319, 317, 1, 0, 0, 0, 319, 320, 1, 0, 0, 0, 320, 322, 1, 0, 0, 0, 321, 319, 1, 0, 0, 0, 322, 323, 5, 17, 0, 0, 323, 21, 1, 0, 0, 0, 324, 330, 3, 78, 39, 0, 325, 327, 5, 23, 0, 0, 326, 328, 3, 144, 72, 0, 327, 326, 1, 0, 0, 0, 327, 328, 1, 0, 0, 0, 328, 329, 1, 0, 0, 0, 329, 331, 5, 24, 0, 0, 330, 325, 1, 0, 0, 0, 330, 331, 1, 0, 0, 0, 331, 23, 1, 0, 0, 0, 332, 342, 3, 26, 13, 0, 333, 342, 3, 34, 17, 0, 334, 342, 3, 42, 21, 0, 335, 342, 3, 44, 22, 0, 336, 342, 3, 48, 24, 0, 337, 342, 3, 56, 28, 0, 338, 342, 3, 60, 30, 0, 339, 342, 3, 30, 15, 0, 340, 342, 3, 32, 16, 0, 341, 332, 1, 0, 0, 0, 341, 333, 1, 0, 0, 0, 341, 334, 1, 0, 0, 0, 341, 335, 1, 0, 0, 0, 341, 336, 1, 0, 0, 0, 341, 337, 1, 0, 0, 0, 341, 338, 1, 0, 0, 0, 341, 339, 1, 0, 0, 0, 341, 340, 1, 0, 0, 0, 342, 25, 1, 0, 0, 0, 343, 353, 3, 76, 38, 0, 344, 352, 5, 120, 0, 0, 345, 352, 5, 117, 0, 0, 346, 352, 5, 119, 0, 0, 347, 352, 5, 110, 0, 0, 348, 352, 5, 111, 0, 0, 349, 352, 5, 112, 0, 0, 350, 352, 3, 198, 99, 0, 351, 344, 1, 0, 0, 0, 351, 345, 1, 0, 0, 0, 351, 346, 1, 0, 0, 0, 351, 347, 1, 0, 0, 0, 351, 348, 1, 0, 0, 0, 351, 349, 1, 0, 0, 0, 351, 350, 1, 0, 0, 0, 352, 355, 1, 0, 0, 0, 353, 351, 1, 0, 0, 0, 353, 354, 1, 0, 0, 0, 354, 356, 1, 0, 0, 0, 355, 353, 1, 0, 0, 0, 356, 359, 3, 194, 97, 0, 357, 358, 5, 11, 0, 0, 358, 360, 3, 140, 70, 0, 359, 357, 1, 0, 0, 0, 359, 360, 1, 0, 0, 0, 360, 361, 1, 0, 0, 0, 361, 362, 5, 2, 0, 0, 362, 27, 1, 0, 0, 0, 363, 364, 3, 76, 38, 0, 364, 365, 5, 110, 0, 0, 365, 366, 3, 194, 97, 0, 366, 367, 5, 11, 0, 0, 367, 368, 3, 140, 70, 0, 368, 369, 5, 2, 0, 0, 369, 29, 1, 0, 0, 0, 370, 371, 5, 25, 0, 0, 371, 372, 3, 194, 97, 0, 372, 373, 3, 62, 31, 0, 373, 374, 5, 2, 0, 0, 374, 31, 1, 0, 0, 0, 375, 376, 5, 123, 0, 0, 376, 377, 3, 194, 97, 0, 377, 378, 5, 22, 0, 0, 378, 379, 3, 138, 69, 0, 379, 380, 5, 2, 0, 0, 380, 33, 1, 0, 0, 0, 381, 382, 5, 26, 0, 0, 382, 383, 3, 36, 18, 0, 383, 386, 5, 27, 0, 0, 384, 387, 5, 3, 0, 0, 385, 387, 3, 76, 38, 0, 386, 384, 1, 0, 0, 0, 386, 385, 1, 0, 0, 0, 387, 389, 1, 0, 0, 0, 388, 390, 5, 125, 0, 0, 389, 388, 1, 0, 0, 0, 389, 390, 1, 0, 0, 0, 390, 391, 1, 0, 0, 0, 391, 392, 5, 2, 0, 0, 392, 35, 1, 0, 0, 0, 393, 406, 3, 78, 39, 0, 394, 395, 5, 15, 0, 0, 395, 400, 3, 38, 19, 0, 396, 397, 5, 16, 0, 0, 397, 399, 3, 38, 19, 0, 398, 396, 1, 0, 0, 0, 399, 402, 1, 0, 0, 0, 400, 398, 1, 0, 0, 0, 400, 401, 1, 0, 0, 0, 401, 403, 1, 0, 0, 0, 402, 400, 1, 0, 0, 0, 403, 404, 5, 17, 0, 0, 404, 406, 1, 0, 0, 0, 405, 393, 1, 0, 0, 0, 405, 394, 1, 0, 0, 0, 406, 37, 1, 0, 0, 0, 407, 410, 3, 78, 39, 0, 408, 409, 5, 12, 0, 0, 409, 411, 3, 40, 20, 0, 410, 408, 1, 0, 0, 0, 410, 411, 1, 0, 0, 0, 411, 39, 1, 0, 0, 0, 412, 413, 7, 2, 0, 0, 413, 41, 1, 0, 0, 0, 414, 415, 5, 36, 0, 0, 415, 416, 3, 194, 97, 0, 416, 427, 5, 15, 0, 0, 417, 418, 3, 74, 37, 0, 418, 424, 5, 2, 0, 0, 419, 420, 3, 74, 37, 0, 420, 421, 5, 2, 0, 0, 421, 423, 1, 0, 0, 0, 422, 419, 1, 0, 0, 0, 423, 426, 1, 0, 0, 0, 424, 422, 1, 0, 0, 0, 424, 425, 1, 0, 0, 0, 425, 428, 1, 0, 0, 0, 426, 424, 1, 0, 0, 0, 427, 417, 1, 0, 0, 0, 427, 428, 1, 0, 0, 0, 428, 429, 1, 0, 0, 0, 429, 430, 5, 17, 0, 0, 430, 43, 1, 0, 0, 0, 431, 432, 5, 37, 0, 0, 432, 434, 3, 194, 97, 0, 433, 435, 3, 62, 31, 0, 434, 433, 1, 0, 0, 0, 434, 435, 1, 0, 0, 0, 435, 440, 1, 0, 0, 0, 436, 439, 5, 121, 0, 0, 437, 439, 3, 198, 99, 0, 438, 436, 1, 0, 0, 0, 438, 437, 1, 0, 0, 0, 439, 442, 1, 0, 0, 0, 440, 438, 1, 0, 0, 0, 440, 441, 1, 0, 0, 0, 441, 445, 1, 0, 0, 0, 442, 440, 1, 0, 0, 0, 443, 446, 5, 2, 0, 0, 444, 446, 3, 94, 47, 0, 445, 443, 1, 0, 0, 0, 445, 444, 1, 0, 0, 0, 446, 45, 1, 0, 0, 0, 447, 453, 3, 194, 97, 0, 448, 450, 5, 23, 0, 0, 449, 451, 3, 144, 72, 0, 450, 449, 1, 0, 0, 0, 450, 451, 1, 0, 0, 0, 451, 452, 1, 0, 0, 0, 452, 454, 5, 24, 0, 0, 453, 448, 1, 0, 0, 0, 453, 454, 1, 0, 0, 0, 454, 47, 1, 0, 0, 0, 455, 456, 3, 50, 25, 0, 456, 457, 3, 62, 31, 0, 457, 459, 3, 54, 27, 0, 458, 460, 3, 52, 26, 0, 459, 458, 1, 0, 0, 0, 459, 460, 1, 0, 0, 0, 460, 463, 1, 0, 0, 0, 461, 464, 5, 2, 0, 0, 462, 464, 3, 94, 47, 0, 463, 461, 1, 0, 0, 0, 463, 462, 1, 0, 0, 0, 464, 49, 1, 0, 0, 0, 465, 467, 5, 38, 0, 0, 466, 468, 3, 194, 97, 0, 467, 466, 1, 0, 0, 0, 467, 468, 1, 0, 0, 0, 468, 473, 1, 0, 0, 0, 469, 473, 5, 126, 0, 0, 470, 473, 5, 127, 0, 0, 471, 473, 5, 128, 0, 0, 472, 465, 1, 0, 0, 0, 472, 469, 1, 0, 0, 0, 472, 470, 1, 0, 0, 0, 472, 471, 1, 0, 0, 0, 473, 51, 1, 0, 0, 0, 474, 475, 5, 39, 0, 0, 475, 476, 3, 62, 31, 0, 476, 53, 1, 0, 0, 0, 477, 486, 5, 115, 0, 0, 478, 486, 5, 120, 0, 0, 479, 486, 5, 117, 0, 0, 480, 486, 5, 119, 0, 0, 481, 486, 5, 121, 0, 0, 482, 486, 3, 92, 46, 0, 483, 486, 3, 46, 23, 0, 484, 486, 3, 198, 99, 0, 485, 477, 1, 0, 0, 0, 485, 478, 1, 0, 0, 0, 485, 479, 1, 0, 0, 0, 485, 480, 1, 0, 0, 0, 485, 481, 1, 0, 0, 0, 485, 482, 1, 0, 0, 0, 485, 483, 1, 0, 0, 0, 485, 484, 1, 0, 0, 0, 486, 489, 1, 0, 0, 0, 487, 485, 1, 0, 0, 0, 487, 488, 1, 0, 0, 0, 488, 55, 1, 0, 0, 0, 489, 487, 1, 0, 0, 0, 490, 491, 5, 40, 0, 0, 491, 492, 3, 194, 97, 0, 492, 494, 3, 66, 33, 0, 493, 495, 5, 108, 0, 0, 494, 493, 1, 0, 0, 0, 494, 495, 1, 0, 0, 0, 495, 496, 1, 0, 0, 0, 496, 497, 5, 2, 0, 0, 497, 57, 1, 0, 0, 0, 498, 499, 3, 194, 97, 0, 499, 59, 1, 0, 0, 0, 500, 501, 5, 41, 0, 0, 501, 502, 3, 194, 97, 0, 502, 504, 5, 15, 0, 0, 503, 505, 3, 58, 29, 0, 504, 503, 1, 0, 0, 0, 504, 505, 1, 0, 0, 0, 505, 510, 1, 0, 0, 0, 506, 507, 5, 16, 0, 0, 507, 509, 3, 58, 29, 0, 508, 506, 1, 0, 0, 0, 509, 512, 1, 0, 0, 0, 510, 508, 1, 0, 0, 0, 510, 511, 1, 0, 0, 0, 511, 513, 1, 0, 0, 0, 512, 510, 1, 0, 0, 0, 513, 514, 5, 17, 0, 0, 514, 61, 1, 0, 0, 0, 515, 524, 5, 23, 0, 0, 516, 521, 3, 64, 32, 0, 517, 518, 5, 16, 0, 0, 518, 520, 3, 64, 32, 0, 519, 517, 1, 0, 0, 0, 520, 523, 1, 0, 0, 0, 521, 519, 1, 0, 0, 0, 521, 522, 1, 0, 0, 0, 522, 525, 1, 0, 0, 0, 523, 521, 1, 0, 0, 0, 524, 516, 1, 0, 0, 0, 524, 525, 1, 0, 0, 0, 525, 526, 1, 0, 0, 0, 526, 527, 5, 24, 0, 0, 527, 63, 1, 0, 0, 0, 528, 530, 3, 76, 38, 0, 529, 531, 3, 90, 45, 0, 530, 529, 1, 0, 0, 0, 530, 531, 1, 0, 0, 0, 531, 533, 1, 0, 0, 0, 532, 534, 3, 194, 97, 0, 533, 532, 1, 0, 0, 0, 533, 534, 1, 0, 0, 0, 534, 65, 1, 0, 0, 0, 535, 544, 5, 23, 0, 0, 536, 541, 3, 68, 34, 0, 537, 538, 5, 16, 0, 0, 538, 540, 3, 68, 34, 0, 539, 537, 1, 0, 0, 0, 540, 543, 1, 0, 0, 0, 541, 539, 1, 0, 0, 0, 541, 542, 1, 0, 0, 0, 542, 545, 1, 0, 0, 0, 543, 541, 1, 0, 0, 0, 544, 536, 1, 0, 0, 0, 544, 545, 1, 0, 0, 0, 545, 546, 1, 0, 0, 0, 546, 547, 5, 24, 0, 0, 547, 67, 1, 0, 0, 0, 548, 550, 3, 76, 38, 0, 549, 551, 5, 116, 0, 0, 550, 549, 1, 0, 0, 0, 550, 551, 1, 0, 0, 0, 551, 553, 1, 0, 0, 0, 552, 554, 3, 194, 97, 0, 553, 552, 1, 0, 0, 0, 553, 554, 1, 0, 0, 0, 554, 69, 1, 0, 0, 0, 555, 564, 5, 23, 0, 0, 556, 561, 3, 72, 36, 0, 557, 558, 5, 16, 0, 0, 558, 560, 3, 72, 36, 0, 559, 557, 1, 0, 0, 0, 560, 563, 1, 0, 0, 0, 561, 559, 1, 0, 0, 0, 561, 562, 1, 0, 0, 0, 562, 565, 1, 0, 0, 0, 563, 561, 1, 0, 0, 0, 564, 556, 1, 0, 0, 0, 564, 565, 1, 0, 0, 0, 565, 566, 1, 0, 0, 0, 566, 567, 5, 24, 0, 0, 567, 71, 1, 0, 0, 0, 568, 570, 3, 76, 38, 0, 569, 571, 3, 90, 45, 0, 570, 569, 1, 0, 0, 0, 570, 571, 1, 0, 0, 0, 571, 73, 1, 0, 0, 0, 572, 574, 3, 76, 38, 0, 573, 575, 3, 90, 45, 0, 574, 573, 1, 0, 0, 0, 574, 575, 1, 0, 0, 0, 575, 576, 1, 0, 0, 0, 576, 577, 3, 194, 97, 0, 577, 75, 1, 0, 0, 0, 578, 579, 6, 38, -1, 0, 579, 586, 3, 138, 69, 0, 580, 586, 3, 78, 39, 0, 581, 586, 3, 82, 41, 0, 582, 586, 3, 88, 44, 0, 583, 584, 5, 44, 0, 0, 584, 586, 5, 118, 0, 0, 585, 578, 1, 0, 0, 0, 585, 580, 1, 0, 0, 0, 585, 581, 1, 0, 0, 0, 585, 582, 1, 0, 0, 0, 585, 583, 1, 0, 0, 0, 586, 595, 1, 0, 0, 0, 587, 588, 10, 3, 0, 0, 588, 590, 5, 42, 0, 0, 589, 591, 3, 140, 70, 0, 590, 589, 1, 0, 0, 0, 590, 591, 1, 0, 0, 0, 591, 592, 1, 0, 0, 0, 592, 594, 5, 43, 0, 0, 593, 587, 1, 0, 0, 0, 594, 597, 1, 0, 0, 0, 595, 593, 1, 0, 0, 0, 595, 596, 1, 0, 0, 0, 596, 77, 1, 0, 0, 0, 597, 595, 1, 0, 0, 0, 598, 603, 3, 194, 97, 0, 599, 600, 5, 45, 0, 0, 600, 602, 3, 194, 97, 0, 601, 599, 1, 0, 0, 0, 602, 605, 1, 0, 0, 0, 603, 601, 1, 0, 0, 0, 603, 604, 1, 0, 0, 0, 604, 79, 1, 0, 0, 0, 605, 603, 1, 0, 0, 0, 606, 609, 3, 138, 69, 0, 607, 609, 3, 78, 39, 0, 608, 606, 1, 0, 0, 0, 608, 607, 1, 0, 0, 0, 609, 81, 1, 0, 0, 0, 610, 611, 5, 46, 0, 0, 611, 612, 5, 23, 0, 0, 612, 614, 3, 80, 40, 0, 613, 615, 3, 84, 42, 0, 614, 613, 1, 0, 0, 0, 614, 615, 1, 0, 0, 0, 615, 616, 1, 0, 0, 0, 616, 617, 5, 47, 0, 0, 617, 619, 3, 76, 38, 0, 618, 620, 3, 86, 43, 0, 619, 618, 1, 0, 0, 0, 619, 620, 1, 0, 0, 0, 620, 621, 1, 0, 0, 0, 621, 622, 5, 24, 0, 0, 622, 83, 1, 0, 0, 0, 623, 624, 3, 194, 97, 0, 624, 85, 1, 0, 0, 0, 625, 626, 3, 194, 97, 0, 626, 87, 1, 0, 0, 0, 627, 628, 5, 38, 0, 0, 628, 634, 3, 70, 35, 0, 629, 633, 5, 117, 0, 0, 630, 633, 5, 115, 0, 0, 631, 633, 3, 92, 46, 0, 632, 629, 1, 0, 0, 0, 632, 630, 1, 0, 0, 0, 632, 631, 1, 0, 0, 0, 633, 636, 1, 0, 0, 0, 634, 632, 1, 0, 0, 0, 634, 635, 1, 0, 0, 0, 635, 639, 1, 0, 0, 0, 636, 634, 1, 0, 0, 0, 637, 638, 5, 39, 0, 0, 638, 640, 3, 70, 35, 0, 639, 637, 1, 0, 0, 0, 639, 640, 1, 0, 0, 0, 640, 89, 1, 0, 0, 0, 641, 642, 7, 3, 0, 0, 642, 91, 1, 0, 0, 0, 643, 644, 7, 4, 0, 0, 644, 93, 1, 0, 0, 0, 645, 649, 5, 15, 0, 0, 646, 648, 3, 96, 48, 0, 647, 646, 1, 0, 0, 0, 648, 651, 1, 0, 0, 0, 649, 647, 1, 0, 0, 0, 649, 650, 1, 0, 0, 0, 650, 652, 1, 0, 0, 0, 651, 649, 1, 0, 0, 0, 652, 653, 5, 17, 0, 0, 653, 95, 1, 0, 0, 0, 654, 670, 3, 100, 50, 0, 655, 670, 3, 102, 51, 0, 656, 670, 3, 106, 53, 0, 657, 670, 3, 112, 56, 0, 658, 670, 3, 94, 47, 0, 659, 670, 3, 114, 57, 0, 660, 670, 3, 118, 59, 0, 661, 670, 3, 120, 60, 0, 662, 670, 3, 122, 61, 0, 663, 670, 3, 124, 62, 0, 664, 670, 3, 126, 63, 0, 665, 670, 3, 128, 64, 0, 666, 670, 3, 108, 54, 0, 667, 670, 3, 110, 55, 0, 668, 670, 3, 130, 65, 0, 669, 654, 1, 0, 0, 0, 669, 655, 1, 0, 0, 0, 669, 656, 1, 0, 0, 0, 669, 657, 1, 0, 0, 0, 669, 658, 1, 0, 0, 0, 669, 659, 1, 0, 0, 0, 669, 660, 1, 0, 0, 0, 669, 661, 1, 0, 0, 0, 669, 662, 1, 0, 0, 0, 669, 663, 1, 0, 0, 0, 669, 664, 1, 0, 0, 0, 669, 665, 1, 0, 0, 0, 669, 666, 1, 0, 0, 0, 669, 667, 1, 0, 0, 0, 669, 668, 1, 0, 0, 0, 670, 97, 1, 0, 0, 0, 671, 672, 3, 140, 70, 0, 672, 673, 5, 2, 0, 0, 673, 99, 1, 0, 0, 0, 674, 675, 5, 51, 0, 0, 675, 676, 5, 23, 0, 0, 676, 677, 3, 140, 70, 0, 677, 678, 5, 24, 0, 0, 678, 681, 3, 96, 48, 0, 679, 680, 5, 52, 0, 0, 680, 682, 3, 96, 48, 0, 681, 679, 1, 0, 0, 0, 681, 682, 1, 0, 0, 0, 682, 101, 1, 0, 0, 0, 683, 684, 5, 53, 0, 0, 684, 686, 3, 140, 70, 0, 685, 687, 3, 52, 26, 0, 686, 685, 1, 0, 0, 0, 686, 687, 1, 0, 0, 0, 687, 688, 1, 0, 0, 0, 688, 690, 3, 94, 47, 0, 689, 691, 3, 104, 52, 0, 690, 689, 1, 0, 0, 0, 691, 692, 1, 0, 0, 0, 692, 690, 1, 0, 0, 0, 692, 693, 1, 0, 0, 0, 693, 103, 1, 0, 0, 0, 694, 699, 5, 54, 0, 0, 695, 697, 3, 194, 97, 0, 696, 695, 1, 0, 0, 0, 696, 697, 1, 0, 0, 0, 697, 698, 1, 0, 0, 0, 698, 700, 3, 62, 31, 0, 699, 696, 1, 0, 0, 0, 699, 700, 1, 0, 0, 0, 700, 701, 1, 0, 0, 0, 701, 702, 3, 94, 47, 0, 702, 105, 1, 0, 0, 0, 703, 704, 5, 55, 0, 0, 704, 705, 5, 23, 0, 0, 705, 706, 3, 140, 70, 0, 706, 707, 5, 24, 0, 0, 707, 708, 3, 96, 48, 0, 708, 107, 1, 0, 0, 0, 709, 712, 3, 132, 66, 0, 710, 712, 3, 98, 49, 0, 711, 709, 1, 0, 0, 0, 711, 710, 1, 0, 0, 0, 712, 109, 1, 0, 0, 0, 713, 714, 5, 56, 0, 0, 714, 715, 3, 94, 47, 0, 715, 111, 1, 0, 0, 0, 716, 717, 5, 27, 0, 0, 717, 720, 5, 23, 0, 0, 718, 721, 3, 108, 54, 0, 719, 721, 5, 2, 0, 0, 720, 718, 1, 0, 0, 0, 720, 719, 1, 0, 0, 0, 721, 724, 1, 0, 0, 0, 722, 725, 3, 98, 49, 0, 723, 725, 5, 2, 0, 0, 724, 722, 1, 0, 0, 0, 724, 723, 1, 0, 0, 0, 725, 727, 1, 0, 0, 0, 726, 728, 3, 140, 70, 0, 727, 726, 1, 0, 0, 0, 727, 728, 1, 0, 0, 0, 728, 729, 1, 0, 0, 0, 729, 730, 5, 24, 0, 0, 730, 731, 3, 96, 48, 0, 731, 113, 1, 0, 0, 0, 732, 734, 5, 57, 0, 0, 733, 735, 5, 130, 0, 0, 734, 733, 1, 0, 0, 0, 734, 735, 1, 0, 0, 0, 735, 740, 1, 0, 0, 0, 736, 737, 5, 23, 0, 0, 737, 738, 3, 116, 58, 0, 738, 739, 5, 24, 0, 0, 739, 741, 1, 0, 0, 0, 740, 736, 1, 0, 0, 0, 740, 741, 1, 0, 0, 0, 741, 742, 1, 0, 0, 0, 742, 743, 3, 154, 77, 0, 743, 115, 1, 0, 0, 0, 744, 745, 3, 200, 100, 0, 745, 117, 1, 0, 0, 0, 746, 747, 5, 58, 0, 0, 747, 748, 3, 96, 48, 0, 748, 749, 5, 55, 0, 0, 749, 750, 5, 23, 0, 0, 750, 751, 3, 140, 70, 0, 751, 752, 5, 24, 0, 0, 752, 753, 5, 2, 0, 0, 753, 119, 1, 0, 0, 0, 754, 755, 5, 113, 0, 0, 755, 756, 5, 2, 0, 0, 756, 121, 1, 0, 0, 0, 757, 758, 5, 109, 0, 0, 758, 759, 5, 2, 0, 0, 759, 123, 1, 0, 0, 0, 760, 762, 5, 59, 0, 0, 761, 763, 3, 140, 70, 0, 762, 761, 1, 0, 0, 0, 762, 763, 1, 0, 0, 0, 763, 764, 1, 0, 0, 0, 764, 765, 5, 2, 0, 0, 765, 125, 1, 0, 0, 0, 766, 767, 5, 60, 0, 0, 767, 768, 5, 2, 0, 0, 768, 127, 1, 0, 0, 0, 769, 770, 5, 61, 0, 0, 770, 771, 3, 152, 76, 0, 771, 772, 5, 2, 0, 0, 772, 129, 1, 0, 0, 0, 773, 774, 5, 62, 0, 0, 774, 775, 3, 152, 76, 0, 775, 776, 5, 2, 0, 0, 776, 131, 1, 0, 0, 0, 777, 778, 5, 63, 0, 0, 778, 785, 3, 136, 68, 0, 779, 785, 3, 74, 37, 0, 780, 781, 5, 23, 0, 0, 781, 782, 3, 134, 67, 0, 782, 783, 5, 24, 0, 0, 783, 785, 1, 0, 0, 0, 784, 777, 1, 0, 0, 0, 784, 779, 1, 0, 0, 0, 784, 780, 1, 0, 0, 0, 785, 788, 1, 0, 0, 0, 786, 787, 5, 11, 0, 0, 787, 789, 3, 140, 70, 0, 788, 786, 1, 0, 0, 0, 788, 789, 1, 0, 0, 0, 789, 790, 1, 0, 0, 0, 790, 791, 5, 2, 0, 0, 791, 133, 1, 0, 0, 0, 792, 794, 3, 74, 37, 0, 793, 792, 1, 0, 0, 0, 793, 794, 1, 0, 0, 0, 794, 801, 1, 0, 0, 0, 795, 797, 5, 16, 0, 0, 796, 798, 3, 74, 37, 0, 797, 796, 1, 0, 0, 0, 797, 798, 1, 0, 0, 0, 798, 800, 1, 0, 0, 0, 799, 795, 1, 0, 0, 0, 800, 803, 1, 0, 0, 0, 801, 799, 1, 0, 0, 0, 801, 802, 1, 0, 0, 0, 802, 135, 1, 0, 0, 0, 803, 801, 1, 0, 0, 0, 804, 811, 5, 23, 0, 0, 805, 807, 3, 194, 97, 0, 806, 805, 1, 0, 0, 0, 806, 807, 1, 0, 0, 0, 807, 808, 1, 0, 0, 0, 808, 810, 5, 16, 0, 0, 809, 806, 1, 0, 0, 0, 810, 813, 1, 0, 0, 0, 811, 809, 1, 0, 0, 0, 811, 812, 1, 0, 0, 0, 812, 815, 1, 0, 0, 0, 813, 811, 1, 0, 0, 0, 814, 816, 3, 194, 97, 0, 815, 814, 1, 0, 0, 0, 815, 816, 1, 0, 0, 0, 816, 817, 1, 0, 0, 0, 817, 818, 5, 24, 0, 0, 818, 137, 1, 0, 0, 0, 819, 820, 7, 5, 0, 0, 820, 139, 1, 0, 0, 0, 821, 822, 6, 70, -1, 0, 822, 823, 5, 69, 0, 0, 823, 840, 3, 76, 38, 0, 824, 825, 5, 23, 0, 0, 825, 826, 3, 140, 70, 0, 826, 827, 5, 24, 0, 0, 827, 840, 1, 0, 0, 0, 828, 829, 7, 6, 0, 0, 829, 840, 3, 140, 70, 19, 830, 831, 7, 7, 0, 0, 831, 840, 3, 140, 70, 18, 832, 833, 5, 71, 0, 0, 833, 840, 3, 140, 70, 17, 834, 835, 5, 72, 0, 0, 835, 840, 3, 140, 70, 16, 836, 837, 5, 6, 0, 0, 837, 840, 3, 140, 70, 15, 838, 840, 3, 142, 71, 0, 839, 821, 1, 0, 0, 0, 839, 824, 1, 0, 0, 0, 839, 828, 1, 0, 0, 0, 839, 830, 1, 0, 0, 0, 839, 832, 1, 0, 0, 0, 839, 834, 1, 0, 0, 0, 839, 836, 1, 0, 0, 0, 839, 838, 1, 0, 0, 0, 840, 915, 1, 0, 0, 0, 841, 842, 10, 14, 0, 0, 842, 843, 5, 73, 0, 0, 843, 914, 3, 140, 70, 14, 844, 845, 10, 13, 0, 0, 845, 846, 7, 8, 0, 0, 846, 914, 3, 140, 70, 14, 847, 848, 10, 12, 0, 0, 848, 849, 7, 7, 0, 0, 849, 914, 3, 140, 70, 13, 850, 851, 10, 11, 0, 0, 851, 852, 7, 9, 0, 0, 852, 914, 3, 140, 70, 12, 853, 854, 10, 10, 0, 0, 854, 855, 5, 29, 0, 0, 855, 914, 3, 140, 70, 11, 856, 857, 10, 9, 0, 0, 857, 858, 5, 5, 0, 0, 858, 914, 3, 140, 70, 10, 859, 860, 10, 8, 0, 0, 860, 861, 5, 28, 0, 0, 861, 914, 3, 140, 70, 9, 862, 863, 10, 7, 0, 0, 863, 864, 7, 10, 0, 0, 864, 914, 3, 140, 70, 8, 865, 866, 10, 6, 0, 0, 866, 867, 7, 11, 0, 0, 867, 914, 3, 140, 70, 7, 868, 869, 10, 5, 0, 0, 869, 870, 5, 76, 0, 0, 870, 914, 3, 140, 70, 6, 871, 872, 10, 4, 0, 0, 872, 873, 5, 4, 0, 0, 873, 914, 3, 140, 70, 5, 874, 875, 10, 3, 0, 0, 875, 876, 5, 77, 0, 0, 876, 877, 3, 140, 70, 0, 877, 878, 5, 70, 0, 0, 878, 879, 3, 140, 70, 3, 879, 914, 1, 0, 0, 0, 880, 881, 10, 2, 0, 0, 881, 882, 7, 12, 0, 0, 882, 914, 3, 140, 70, 3, 883, 884, 10, 27, 0, 0, 884, 914, 7, 6, 0, 0, 885, 886, 10, 25, 0, 0, 886, 887, 5, 42, 0, 0, 887, 888, 3, 140, 70, 0, 888, 889, 5, 43, 0, 0, 889, 914, 1, 0, 0, 0, 890, 891, 10, 24, 0, 0, 891, 893, 5, 42, 0, 0, 892, 894, 3, 140, 70, 0, 893, 892, 1, 0, 0, 0, 893, 894, 1, 0, 0, 0, 894, 895, 1, 0, 0, 0, 895, 897, 5, 70, 0, 0, 896, 898, 3, 140, 70, 0, 897, 896, 1, 0, 0, 0, 897, 898, 1, 0, 0, 0, 898, 899, 1, 0, 0, 0, 899, 914, 5, 43, 0, 0, 900, 901, 10, 23, 0, 0, 901, 902, 5, 45, 0, 0, 902, 914, 3, 194, 97, 0, 903, 904, 10, 22, 0, 0, 904, 905, 5, 15, 0, 0, 905, 906, 3, 146, 73, 0, 906, 907, 5, 17, 0, 0, 907, 914, 1, 0, 0, 0, 908, 909, 10, 21, 0, 0, 909, 910, 5, 23, 0, 0, 910, 911, 3, 150, 75, 0, 911, 912, 5, 24, 0, 0, 912, 914, 1, 0, 0, 0, 913, 841, 1, 0, 0, 0, 913, 844, 1, 0, 0, 0, 913, 847, 1, 0, 0, 0, 913, 850, 1, 0, 0, 0, 913, 853, 1, 0, 0, 0, 913, 856, 1, 0, 0, 0, 913, 859, 1, 0, 0, 0, 913, 862, 1, 0, 0, 0, 913, 865, 1, 0, 0, 0, 913, 868, 1, 0, 0, 0, 913, 871, 1, 0, 0, 0, 913, 874, 1, 0, 0, 0, 913, 880, 1, 0, 0, 0, 913, 883, 1, 0, 0, 0, 913, 885, 1, 0, 0, 0, 913, 890, 1, 0, 0, 0, 913, 900, 1, 0, 0, 0, 913, 903, 1, 0, 0, 0, 913, 908, 1, 0, 0, 0, 914, 917, 1, 0, 0, 0, 915, 913, 1, 0, 0, 0, 915, 916, 1, 0, 0, 0, 916, 141, 1, 0, 0, 0, 917, 915, 1, 0, 0, 0, 918, 928, 5, 102, 0, 0, 919, 928, 3, 192, 96, 0, 920, 928, 3, 196, 98, 0, 921, 928, 3, 200, 100, 0, 922, 928, 3, 194, 97, 0, 923, 928, 5, 123, 0, 0, 924, 928, 5, 118, 0, 0, 925, 928, 3, 190, 95, 0, 926, 928, 3, 76, 38, 0, 927, 918, 1, 0, 0, 0, 927, 919, 1, 0, 0, 0, 927, 920, 1, 0, 0, 0, 927, 921, 1, 0, 0, 0, 927, 922, 1, 0, 0, 0, 927, 923, 1, 0, 0, 0, 927, 924, 1, 0, 0, 0, 927, 925, 1, 0, 0, 0, 927, 926, 1, 0, 0, 0, 928, 143, 1, 0, 0, 0, 929, 934, 3, 140, 70, 0, 930, 931, 5, 16, 0, 0, 931, 933, 3, 140, 70, 0, 932, 930, 1, 0, 0, 0, 933, 936, 1, 0, 0, 0, 934, 932, 1, 0, 0, 0, 934, 935, 1, 0, 0, 0, 935, 145, 1, 0, 0, 0, 936, 934, 1, 0, 0, 0, 937, 942, 3, 148, 74, 0, 938, 939, 5, 16, 0, 0, 939, 941, 3, 148, 74, 0, 940, 938, 1, 0, 0, 0, 941, 944, 1, 0, 0, 0, 942, 940, 1, 0, 0, 0, 942, 943, 1, 0, 0, 0, 943, 946, 1, 0, 0, 0, 944, 942, 1, 0, 0, 0, 945, 947, 5, 16, 0, 0, 946, 945, 1, 0, 0, 0, 946, 947, 1, 0, 0, 0, 947, 147, 1, 0, 0, 0, 948, 949, 3, 194, 97, 0, 949, 950, 5, 70, 0, 0, 950, 951, 3, 140, 70, 0, 951, 149, 1, 0, 0, 0, 952, 954, 5, 15, 0, 0, 953, 955, 3, 146, 73, 0, 954, 953, 1, 0, 0, 0, 954, 955, 1, 0, 0, 0, 955, 956, 1, 0, 0, 0, 956, 961, 5, 17, 0, 0, 957, 959, 3, 144, 72, 0, 958, 957, 1, 0, 0, 0, 958, 959, 1, 0, 0, 0, 959, 961, 1, 0, 0, 0, 960, 952, 1, 0, 0, 0, 960, 958, 1, 0, 0, 0, 961, 151, 1, 0, 0, 0, 962, 963, 3, 140, 70, 0, 963, 964, 5, 23, 0, 0, 964, 965, 3, 150, 75, 0, 965, 966, 5, 24, 0, 0, 966, 153, 1, 0, 0, 0, 967, 971, 5, 15, 0, 0, 968, 970, 3, 156, 78, 0, 969, 968, 1, 0, 0, 0, 970, 973, 1, 0, 0, 0, 971, 969, 1, 0, 0, 0, 971, 972, 1, 0, 0, 0, 972, 974, 1, 0, 0, 0, 973, 971, 1, 0, 0, 0, 974, 975, 5, 17, 0, 0, 975, 155, 1, 0, 0, 0, 976, 994, 3, 194, 97, 0, 977, 994, 3, 154, 77, 0, 978, 994, 3, 158, 79, 0, 979, 994, 3, 164, 82, 0, 980, 994, 3, 166, 83, 0, 981, 994, 3, 172, 86, 0, 982, 994, 3, 174, 87, 0, 983, 994, 3, 176, 88, 0, 984, 994, 3, 180, 90, 0, 985, 994, 3, 184, 92, 0, 986, 994, 3, 186, 93, 0, 987, 994, 5, 109, 0, 0, 988, 994, 5, 113, 0, 0, 989, 994, 5, 114, 0, 0, 990, 994, 3, 192, 96, 0, 991, 994, 3, 200, 100, 0, 992, 994, 3, 196, 98, 0, 993, 976, 1, 0, 0, 0, 993, 977, 1, 0, 0, 0, 993, 978, 1, 0, 0, 0, 993, 979, 1, 0, 0, 0, 993, 980, 1, 0, 0, 0, 993, 981, 1, 0, 0, 0, 993, 982, 1, 0, 0, 0, 993, 983, 1, 0, 0, 0, 993, 984, 1, 0, 0, 0, 993, 985, 1, 0, 0, 0, 993, 986, 1, 0, 0, 0, 993, 987, 1, 0, 0, 0, 993, 988, 1, 0, 0, 0, 993, 989, 1, 0, 0, 0, 993, 990, 1, 0, 0, 0, 993, 991, 1, 0, 0, 0, 993, 992, 1, 0, 0, 0, 994, 157, 1, 0, 0, 0, 995, 999, 3, 162, 81, 0, 996, 999, 3, 188, 94, 0, 997, 999, 3, 160, 80, 0, 998, 995, 1, 0, 0, 0, 998, 996, 1, 0, 0, 0, 998, 997, 1, 0, 0, 0, 999, 159, 1, 0, 0, 0, 1e3, 1001, 3, 194, 97, 0, 1001, 1002, 5, 45, 0, 0, 1002, 1003, 3, 194, 97, 0, 1003, 161, 1, 0, 0, 0, 1004, 1009, 5, 59, 0, 0, 1005, 1009, 5, 44, 0, 0, 1006, 1009, 5, 66, 0, 0, 1007, 1009, 3, 194, 97, 0, 1008, 1004, 1, 0, 0, 0, 1008, 1005, 1, 0, 0, 0, 1008, 1006, 1, 0, 0, 0, 1008, 1007, 1, 0, 0, 0, 1009, 1022, 1, 0, 0, 0, 1010, 1012, 5, 23, 0, 0, 1011, 1013, 3, 158, 79, 0, 1012, 1011, 1, 0, 0, 0, 1012, 1013, 1, 0, 0, 0, 1013, 1018, 1, 0, 0, 0, 1014, 1015, 5, 16, 0, 0, 1015, 1017, 3, 158, 79, 0, 1016, 1014, 1, 0, 0, 0, 1017, 1020, 1, 0, 0, 0, 1018, 1016, 1, 0, 0, 0, 1018, 1019, 1, 0, 0, 0, 1019, 1021, 1, 0, 0, 0, 1020, 1018, 1, 0, 0, 0, 1021, 1023, 5, 24, 0, 0, 1022, 1010, 1, 0, 0, 0, 1022, 1023, 1, 0, 0, 0, 1023, 163, 1, 0, 0, 0, 1024, 1025, 5, 88, 0, 0, 1025, 1028, 3, 168, 84, 0, 1026, 1027, 5, 89, 0, 0, 1027, 1029, 3, 158, 79, 0, 1028, 1026, 1, 0, 0, 0, 1028, 1029, 1, 0, 0, 0, 1029, 165, 1, 0, 0, 0, 1030, 1031, 3, 168, 84, 0, 1031, 1032, 5, 89, 0, 0, 1032, 1033, 3, 158, 79, 0, 1033, 167, 1, 0, 0, 0, 1034, 1042, 3, 194, 97, 0, 1035, 1042, 3, 160, 80, 0, 1036, 1042, 3, 170, 85, 0, 1037, 1038, 5, 23, 0, 0, 1038, 1039, 3, 170, 85, 0, 1039, 1040, 5, 24, 0, 0, 1040, 1042, 1, 0, 0, 0, 1041, 1034, 1, 0, 0, 0, 1041, 1035, 1, 0, 0, 0, 1041, 1036, 1, 0, 0, 0, 1041, 1037, 1, 0, 0, 0, 1042, 169, 1, 0, 0, 0, 1043, 1048, 3, 194, 97, 0, 1044, 1045, 5, 16, 0, 0, 1045, 1047, 3, 194, 97, 0, 1046, 1044, 1, 0, 0, 0, 1047, 1050, 1, 0, 0, 0, 1048, 1046, 1, 0, 0, 0, 1048, 1049, 1, 0, 0, 0, 1049, 171, 1, 0, 0, 0, 1050, 1048, 1, 0, 0, 0, 1051, 1052, 3, 158, 79, 0, 1052, 1053, 5, 90, 0, 0, 1053, 1054, 3, 194, 97, 0, 1054, 173, 1, 0, 0, 0, 1055, 1056, 3, 194, 97, 0, 1056, 1057, 5, 70, 0, 0, 1057, 175, 1, 0, 0, 0, 1058, 1059, 5, 91, 0, 0, 1059, 1063, 3, 158, 79, 0, 1060, 1062, 3, 178, 89, 0, 1061, 1060, 1, 0, 0, 0, 1062, 1065, 1, 0, 0, 0, 1063, 1061, 1, 0, 0, 0, 1063, 1064, 1, 0, 0, 0, 1064, 177, 1, 0, 0, 0, 1065, 1063, 1, 0, 0, 0, 1066, 1067, 5, 92, 0, 0, 1067, 1068, 3, 188, 94, 0, 1068, 1069, 3, 154, 77, 0, 1069, 1073, 1, 0, 0, 0, 1070, 1071, 5, 93, 0, 0, 1071, 1073, 3, 154, 77, 0, 1072, 1066, 1, 0, 0, 0, 1072, 1070, 1, 0, 0, 0, 1073, 179, 1, 0, 0, 0, 1074, 1075, 5, 38, 0, 0, 1075, 1076, 3, 194, 97, 0, 1076, 1078, 5, 23, 0, 0, 1077, 1079, 3, 170, 85, 0, 1078, 1077, 1, 0, 0, 0, 1078, 1079, 1, 0, 0, 0, 1079, 1080, 1, 0, 0, 0, 1080, 1082, 5, 24, 0, 0, 1081, 1083, 3, 182, 91, 0, 1082, 1081, 1, 0, 0, 0, 1082, 1083, 1, 0, 0, 0, 1083, 1084, 1, 0, 0, 0, 1084, 1085, 3, 154, 77, 0, 1085, 181, 1, 0, 0, 0, 1086, 1087, 5, 94, 0, 0, 1087, 1088, 3, 170, 85, 0, 1088, 183, 1, 0, 0, 0, 1089, 1092, 5, 27, 0, 0, 1090, 1093, 3, 154, 77, 0, 1091, 1093, 3, 158, 79, 0, 1092, 1090, 1, 0, 0, 0, 1092, 1091, 1, 0, 0, 0, 1093, 1094, 1, 0, 0, 0, 1094, 1097, 3, 158, 79, 0, 1095, 1098, 3, 154, 77, 0, 1096, 1098, 3, 158, 79, 0, 1097, 1095, 1, 0, 0, 0, 1097, 1096, 1, 0, 0, 0, 1098, 1099, 1, 0, 0, 0, 1099, 1100, 3, 154, 77, 0, 1100, 185, 1, 0, 0, 0, 1101, 1102, 5, 51, 0, 0, 1102, 1103, 3, 158, 79, 0, 1103, 1104, 3, 154, 77, 0, 1104, 187, 1, 0, 0, 0, 1105, 1111, 3, 200, 100, 0, 1106, 1111, 5, 103, 0, 0, 1107, 1111, 5, 104, 0, 0, 1108, 1111, 3, 196, 98, 0, 1109, 1111, 5, 102, 0, 0, 1110, 1105, 1, 0, 0, 0, 1110, 1106, 1, 0, 0, 0, 1110, 1107, 1, 0, 0, 0, 1110, 1108, 1, 0, 0, 0, 1110, 1109, 1, 0, 0, 0, 1111, 189, 1, 0, 0, 0, 1112, 1114, 5, 23, 0, 0, 1113, 1115, 3, 140, 70, 0, 1114, 1113, 1, 0, 0, 0, 1114, 1115, 1, 0, 0, 0, 1115, 1122, 1, 0, 0, 0, 1116, 1118, 5, 16, 0, 0, 1117, 1119, 3, 140, 70, 0, 1118, 1117, 1, 0, 0, 0, 1118, 1119, 1, 0, 0, 0, 1119, 1121, 1, 0, 0, 0, 1120, 1116, 1, 0, 0, 0, 1121, 1124, 1, 0, 0, 0, 1122, 1120, 1, 0, 0, 0, 1122, 1123, 1, 0, 0, 0, 1123, 1125, 1, 0, 0, 0, 1124, 1122, 1, 0, 0, 0, 1125, 1139, 5, 24, 0, 0, 1126, 1135, 5, 42, 0, 0, 1127, 1132, 3, 140, 70, 0, 1128, 1129, 5, 16, 0, 0, 1129, 1131, 3, 140, 70, 0, 1130, 1128, 1, 0, 0, 0, 1131, 1134, 1, 0, 0, 0, 1132, 1130, 1, 0, 0, 0, 1132, 1133, 1, 0, 0, 0, 1133, 1136, 1, 0, 0, 0, 1134, 1132, 1, 0, 0, 0, 1135, 1127, 1, 0, 0, 0, 1135, 1136, 1, 0, 0, 0, 1136, 1137, 1, 0, 0, 0, 1137, 1139, 5, 43, 0, 0, 1138, 1112, 1, 0, 0, 0, 1138, 1126, 1, 0, 0, 0, 1139, 191, 1, 0, 0, 0, 1140, 1142, 7, 13, 0, 0, 1141, 1143, 5, 105, 0, 0, 1142, 1141, 1, 0, 0, 0, 1142, 1143, 1, 0, 0, 0, 1143, 193, 1, 0, 0, 0, 1144, 1145, 7, 14, 0, 0, 1145, 195, 1, 0, 0, 0, 1146, 1148, 5, 106, 0, 0, 1147, 1146, 1, 0, 0, 0, 1148, 1149, 1, 0, 0, 0, 1149, 1147, 1, 0, 0, 0, 1149, 1150, 1, 0, 0, 0, 1150, 197, 1, 0, 0, 0, 1151, 1163, 5, 96, 0, 0, 1152, 1153, 5, 23, 0, 0, 1153, 1158, 3, 78, 39, 0, 1154, 1155, 5, 16, 0, 0, 1155, 1157, 3, 78, 39, 0, 1156, 1154, 1, 0, 0, 0, 1157, 1160, 1, 0, 0, 0, 1158, 1156, 1, 0, 0, 0, 1158, 1159, 1, 0, 0, 0, 1159, 1161, 1, 0, 0, 0, 1160, 1158, 1, 0, 0, 0, 1161, 1162, 5, 24, 0, 0, 1162, 1164, 1, 0, 0, 0, 1163, 1152, 1, 0, 0, 0, 1163, 1164, 1, 0, 0, 0, 1164, 199, 1, 0, 0, 0, 1165, 1167, 5, 130, 0, 0, 1166, 1165, 1, 0, 0, 0, 1167, 1168, 1, 0, 0, 0, 1168, 1166, 1, 0, 0, 0, 1168, 1169, 1, 0, 0, 0, 1169, 201, 1, 0, 0, 0, 130, 213, 215, 230, 234, 239, 245, 249, 252, 257, 263, 270, 274, 287, 295, 300, 310, 313, 319, 327, 330, 341, 351, 353, 359, 386, 389, 400, 405, 410, 424, 427, 434, 438, 440, 445, 450, 453, 459, 463, 467, 472, 485, 487, 494, 504, 510, 521, 524, 530, 533, 541, 544, 550, 553, 561, 564, 570, 574, 585, 590, 595, 603, 608, 614, 619, 632, 634, 639, 649, 669, 681, 686, 692, 696, 699, 711, 720, 724, 727, 734, 740, 762, 784, 788, 793, 797, 801, 806, 811, 815, 839, 893, 897, 913, 915, 927, 934, 942, 946, 954, 958, 960, 971, 993, 998, 1008, 1012, 1018, 1022, 1028, 1041, 1048, 1063, 1072, 1078, 1082, 1092, 1097, 1110, 1114, 1118, 1122, 1132, 1135, 1138, 1142, 1149, 1158, 1163, 1168], o.DecisionsToDFA = o._ATN.decisionToState.map((t, e) => new Es(t, e));
  var c = o, Un = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    EOF() {
      return this.getToken(c.EOF, 0);
    }
    pragmaDirective_list() {
      return this.getTypedRuleContexts($e);
    }
    pragmaDirective(t) {
      return this.getTypedRuleContext($e, t);
    }
    importDirective_list() {
      return this.getTypedRuleContexts(Qe);
    }
    importDirective(t) {
      return this.getTypedRuleContext(Qe, t);
    }
    contractDefinition_list() {
      return this.getTypedRuleContexts(Ze);
    }
    contractDefinition(t) {
      return this.getTypedRuleContext(Ze, t);
    }
    enumDefinition_list() {
      return this.getTypedRuleContexts(ce);
    }
    enumDefinition(t) {
      return this.getTypedRuleContext(ce, t);
    }
    eventDefinition_list() {
      return this.getTypedRuleContexts(ue);
    }
    eventDefinition(t) {
      return this.getTypedRuleContext(ue, t);
    }
    structDefinition_list() {
      return this.getTypedRuleContexts(he);
    }
    structDefinition(t) {
      return this.getTypedRuleContext(he, t);
    }
    functionDefinition_list() {
      return this.getTypedRuleContexts(oe);
    }
    functionDefinition(t) {
      return this.getTypedRuleContext(oe, t);
    }
    fileLevelConstant_list() {
      return this.getTypedRuleContexts(ii);
    }
    fileLevelConstant(t) {
      return this.getTypedRuleContext(ii, t);
    }
    customErrorDefinition_list() {
      return this.getTypedRuleContexts(ne);
    }
    customErrorDefinition(t) {
      return this.getTypedRuleContext(ne, t);
    }
    typeDefinition_list() {
      return this.getTypedRuleContexts(ae);
    }
    typeDefinition(t) {
      return this.getTypedRuleContext(ae, t);
    }
    usingForDeclaration_list() {
      return this.getTypedRuleContexts(le);
    }
    usingForDeclaration(t) {
      return this.getTypedRuleContext(le, t);
    }
    get ruleIndex() {
      return c.RULE_sourceUnit;
    }
    enterRule(t) {
      t.enterSourceUnit && t.enterSourceUnit(this);
    }
    exitRule(t) {
      t.exitSourceUnit && t.exitSourceUnit(this);
    }
    accept(t) {
      return t.visitSourceUnit ? t.visitSourceUnit(this) : t.visitChildren(this);
    }
  }, $e = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    pragmaName() {
      return this.getTypedRuleContext(Ls, 0);
    }
    pragmaValue() {
      return this.getTypedRuleContext(bs, 0);
    }
    get ruleIndex() {
      return c.RULE_pragmaDirective;
    }
    enterRule(t) {
      t.enterPragmaDirective && t.enterPragmaDirective(this);
    }
    exitRule(t) {
      t.exitPragmaDirective && t.exitPragmaDirective(this);
    }
    accept(t) {
      return t.visitPragmaDirective ? t.visitPragmaDirective(this) : t.visitChildren(this);
    }
  }, Ls = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    get ruleIndex() {
      return c.RULE_pragmaName;
    }
    enterRule(t) {
      t.enterPragmaName && t.enterPragmaName(this);
    }
    exitRule(t) {
      t.exitPragmaName && t.exitPragmaName(this);
    }
    accept(t) {
      return t.visitPragmaName ? t.visitPragmaName(this) : t.visitChildren(this);
    }
  }, bs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    version() {
      return this.getTypedRuleContext(Ss, 0);
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_pragmaValue;
    }
    enterRule(t) {
      t.enterPragmaValue && t.enterPragmaValue(this);
    }
    exitRule(t) {
      t.exitPragmaValue && t.exitPragmaValue(this);
    }
    accept(t) {
      return t.visitPragmaValue ? t.visitPragmaValue(this) : t.visitChildren(this);
    }
  }, Ss = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    versionConstraint_list() {
      return this.getTypedRuleContexts(Je);
    }
    versionConstraint(t) {
      return this.getTypedRuleContext(Je, t);
    }
    get ruleIndex() {
      return c.RULE_version;
    }
    enterRule(t) {
      t.enterVersion && t.enterVersion(this);
    }
    exitRule(t) {
      t.exitVersion && t.exitVersion(this);
    }
    accept(t) {
      return t.visitVersion ? t.visitVersion(this) : t.visitChildren(this);
    }
  }, As = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    get ruleIndex() {
      return c.RULE_versionOperator;
    }
    enterRule(t) {
      t.enterVersionOperator && t.enterVersionOperator(this);
    }
    exitRule(t) {
      t.exitVersionOperator && t.exitVersionOperator(this);
    }
    accept(t) {
      return t.visitVersionOperator ? t.visitVersionOperator(this) : t.visitChildren(this);
    }
  }, Je = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    VersionLiteral() {
      return this.getToken(c.VersionLiteral, 0);
    }
    versionOperator() {
      return this.getTypedRuleContext(As, 0);
    }
    DecimalNumber() {
      return this.getToken(c.DecimalNumber, 0);
    }
    get ruleIndex() {
      return c.RULE_versionConstraint;
    }
    enterRule(t) {
      t.enterVersionConstraint && t.enterVersionConstraint(this);
    }
    exitRule(t) {
      t.exitVersionConstraint && t.exitVersionConstraint(this);
    }
    accept(t) {
      return t.visitVersionConstraint ? t.visitVersionConstraint(this) : t.visitChildren(this);
    }
  }, Xe = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier_list() {
      return this.getTypedRuleContexts(C);
    }
    identifier(t) {
      return this.getTypedRuleContext(C, t);
    }
    get ruleIndex() {
      return c.RULE_importDeclaration;
    }
    enterRule(t) {
      t.enterImportDeclaration && t.enterImportDeclaration(this);
    }
    exitRule(t) {
      t.exitImportDeclaration && t.exitImportDeclaration(this);
    }
    accept(t) {
      return t.visitImportDeclaration ? t.visitImportDeclaration(this) : t.visitChildren(this);
    }
  }, Qe = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    importPath() {
      return this.getTypedRuleContext(ws, 0);
    }
    identifier_list() {
      return this.getTypedRuleContexts(C);
    }
    identifier(t) {
      return this.getTypedRuleContext(C, t);
    }
    importDeclaration_list() {
      return this.getTypedRuleContexts(Xe);
    }
    importDeclaration(t) {
      return this.getTypedRuleContext(Xe, t);
    }
    get ruleIndex() {
      return c.RULE_importDirective;
    }
    enterRule(t) {
      t.enterImportDirective && t.enterImportDirective(this);
    }
    exitRule(t) {
      t.exitImportDirective && t.exitImportDirective(this);
    }
    accept(t) {
      return t.visitImportDirective ? t.visitImportDirective(this) : t.visitChildren(this);
    }
  }, ws = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    StringLiteralFragment() {
      return this.getToken(c.StringLiteralFragment, 0);
    }
    get ruleIndex() {
      return c.RULE_importPath;
    }
    enterRule(t) {
      t.enterImportPath && t.enterImportPath(this);
    }
    exitRule(t) {
      t.exitImportPath && t.exitImportPath(this);
    }
    accept(t) {
      return t.visitImportPath ? t.visitImportPath(this) : t.visitChildren(this);
    }
  }, Ze = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    inheritanceSpecifier_list() {
      return this.getTypedRuleContexts(ti);
    }
    inheritanceSpecifier(t) {
      return this.getTypedRuleContext(ti, t);
    }
    contractPart_list() {
      return this.getTypedRuleContexts(ei);
    }
    contractPart(t) {
      return this.getTypedRuleContext(ei, t);
    }
    get ruleIndex() {
      return c.RULE_contractDefinition;
    }
    enterRule(t) {
      t.enterContractDefinition && t.enterContractDefinition(this);
    }
    exitRule(t) {
      t.exitContractDefinition && t.exitContractDefinition(this);
    }
    accept(t) {
      return t.visitContractDefinition ? t.visitContractDefinition(this) : t.visitChildren(this);
    }
  }, ti = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    userDefinedTypeName() {
      return this.getTypedRuleContext(ot, 0);
    }
    expressionList() {
      return this.getTypedRuleContext(me, 0);
    }
    get ruleIndex() {
      return c.RULE_inheritanceSpecifier;
    }
    enterRule(t) {
      t.enterInheritanceSpecifier && t.enterInheritanceSpecifier(this);
    }
    exitRule(t) {
      t.exitInheritanceSpecifier && t.exitInheritanceSpecifier(this);
    }
    accept(t) {
      return t.visitInheritanceSpecifier ? t.visitInheritanceSpecifier(this) : t.visitChildren(this);
    }
  }, ei = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    stateVariableDeclaration() {
      return this.getTypedRuleContext(Ns, 0);
    }
    usingForDeclaration() {
      return this.getTypedRuleContext(le, 0);
    }
    structDefinition() {
      return this.getTypedRuleContext(he, 0);
    }
    modifierDefinition() {
      return this.getTypedRuleContext(Ds, 0);
    }
    functionDefinition() {
      return this.getTypedRuleContext(oe, 0);
    }
    eventDefinition() {
      return this.getTypedRuleContext(ue, 0);
    }
    enumDefinition() {
      return this.getTypedRuleContext(ce, 0);
    }
    customErrorDefinition() {
      return this.getTypedRuleContext(ne, 0);
    }
    typeDefinition() {
      return this.getTypedRuleContext(ae, 0);
    }
    get ruleIndex() {
      return c.RULE_contractPart;
    }
    enterRule(t) {
      t.enterContractPart && t.enterContractPart(this);
    }
    exitRule(t) {
      t.exitContractPart && t.exitContractPart(this);
    }
    accept(t) {
      return t.visitContractPart ? t.visitContractPart(this) : t.visitChildren(this);
    }
  }, Ns = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    PublicKeyword_list() {
      return this.getTokens(c.PublicKeyword);
    }
    PublicKeyword(t) {
      return this.getToken(c.PublicKeyword, t);
    }
    InternalKeyword_list() {
      return this.getTokens(c.InternalKeyword);
    }
    InternalKeyword(t) {
      return this.getToken(c.InternalKeyword, t);
    }
    PrivateKeyword_list() {
      return this.getTokens(c.PrivateKeyword);
    }
    PrivateKeyword(t) {
      return this.getToken(c.PrivateKeyword, t);
    }
    ConstantKeyword_list() {
      return this.getTokens(c.ConstantKeyword);
    }
    ConstantKeyword(t) {
      return this.getToken(c.ConstantKeyword, t);
    }
    TransientKeyword_list() {
      return this.getTokens(c.TransientKeyword);
    }
    TransientKeyword(t) {
      return this.getToken(c.TransientKeyword, t);
    }
    ImmutableKeyword_list() {
      return this.getTokens(c.ImmutableKeyword);
    }
    ImmutableKeyword(t) {
      return this.getToken(c.ImmutableKeyword, t);
    }
    overrideSpecifier_list() {
      return this.getTypedRuleContexts(yt);
    }
    overrideSpecifier(t) {
      return this.getTypedRuleContext(yt, t);
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_stateVariableDeclaration;
    }
    enterRule(t) {
      t.enterStateVariableDeclaration && t.enterStateVariableDeclaration(this);
    }
    exitRule(t) {
      t.exitStateVariableDeclaration && t.exitStateVariableDeclaration(this);
    }
    accept(t) {
      return t.visitStateVariableDeclaration ? t.visitStateVariableDeclaration(this) : t.visitChildren(this);
    }
  }, ii = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    ConstantKeyword() {
      return this.getToken(c.ConstantKeyword, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_fileLevelConstant;
    }
    enterRule(t) {
      t.enterFileLevelConstant && t.enterFileLevelConstant(this);
    }
    exitRule(t) {
      t.exitFileLevelConstant && t.exitFileLevelConstant(this);
    }
    accept(t) {
      return t.visitFileLevelConstant ? t.visitFileLevelConstant(this) : t.visitChildren(this);
    }
  }, ne = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    parameterList() {
      return this.getTypedRuleContext(St, 0);
    }
    get ruleIndex() {
      return c.RULE_customErrorDefinition;
    }
    enterRule(t) {
      t.enterCustomErrorDefinition && t.enterCustomErrorDefinition(this);
    }
    exitRule(t) {
      t.exitCustomErrorDefinition && t.exitCustomErrorDefinition(this);
    }
    accept(t) {
      return t.visitCustomErrorDefinition ? t.visitCustomErrorDefinition(this) : t.visitChildren(this);
    }
  }, ae = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    TypeKeyword() {
      return this.getToken(c.TypeKeyword, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    elementaryTypeName() {
      return this.getTypedRuleContext(pe, 0);
    }
    get ruleIndex() {
      return c.RULE_typeDefinition;
    }
    enterRule(t) {
      t.enterTypeDefinition && t.enterTypeDefinition(this);
    }
    exitRule(t) {
      t.exitTypeDefinition && t.exitTypeDefinition(this);
    }
    accept(t) {
      return t.visitTypeDefinition ? t.visitTypeDefinition(this) : t.visitChildren(this);
    }
  }, le = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    usingForObject() {
      return this.getTypedRuleContext(Is, 0);
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    GlobalKeyword() {
      return this.getToken(c.GlobalKeyword, 0);
    }
    get ruleIndex() {
      return c.RULE_usingForDeclaration;
    }
    enterRule(t) {
      t.enterUsingForDeclaration && t.enterUsingForDeclaration(this);
    }
    exitRule(t) {
      t.exitUsingForDeclaration && t.exitUsingForDeclaration(this);
    }
    accept(t) {
      return t.visitUsingForDeclaration ? t.visitUsingForDeclaration(this) : t.visitChildren(this);
    }
  }, Is = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    userDefinedTypeName() {
      return this.getTypedRuleContext(ot, 0);
    }
    usingForObjectDirective_list() {
      return this.getTypedRuleContexts(si);
    }
    usingForObjectDirective(t) {
      return this.getTypedRuleContext(si, t);
    }
    get ruleIndex() {
      return c.RULE_usingForObject;
    }
    enterRule(t) {
      t.enterUsingForObject && t.enterUsingForObject(this);
    }
    exitRule(t) {
      t.exitUsingForObject && t.exitUsingForObject(this);
    }
    accept(t) {
      return t.visitUsingForObject ? t.visitUsingForObject(this) : t.visitChildren(this);
    }
  }, si = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    userDefinedTypeName() {
      return this.getTypedRuleContext(ot, 0);
    }
    userDefinableOperators() {
      return this.getTypedRuleContext(ks, 0);
    }
    get ruleIndex() {
      return c.RULE_usingForObjectDirective;
    }
    enterRule(t) {
      t.enterUsingForObjectDirective && t.enterUsingForObjectDirective(this);
    }
    exitRule(t) {
      t.exitUsingForObjectDirective && t.exitUsingForObjectDirective(this);
    }
    accept(t) {
      return t.visitUsingForObjectDirective ? t.visitUsingForObjectDirective(this) : t.visitChildren(this);
    }
  }, ks = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    get ruleIndex() {
      return c.RULE_userDefinableOperators;
    }
    enterRule(t) {
      t.enterUserDefinableOperators && t.enterUserDefinableOperators(this);
    }
    exitRule(t) {
      t.exitUserDefinableOperators && t.exitUserDefinableOperators(this);
    }
    accept(t) {
      return t.visitUserDefinableOperators ? t.visitUserDefinableOperators(this) : t.visitChildren(this);
    }
  }, he = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    variableDeclaration_list() {
      return this.getTypedRuleContexts(At);
    }
    variableDeclaration(t) {
      return this.getTypedRuleContext(At, t);
    }
    get ruleIndex() {
      return c.RULE_structDefinition;
    }
    enterRule(t) {
      t.enterStructDefinition && t.enterStructDefinition(this);
    }
    exitRule(t) {
      t.exitStructDefinition && t.exitStructDefinition(this);
    }
    accept(t) {
      return t.visitStructDefinition ? t.visitStructDefinition(this) : t.visitChildren(this);
    }
  }, Ds = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    block() {
      return this.getTypedRuleContext(xt, 0);
    }
    parameterList() {
      return this.getTypedRuleContext(St, 0);
    }
    VirtualKeyword_list() {
      return this.getTokens(c.VirtualKeyword);
    }
    VirtualKeyword(t) {
      return this.getToken(c.VirtualKeyword, t);
    }
    overrideSpecifier_list() {
      return this.getTypedRuleContexts(yt);
    }
    overrideSpecifier(t) {
      return this.getTypedRuleContext(yt, t);
    }
    get ruleIndex() {
      return c.RULE_modifierDefinition;
    }
    enterRule(t) {
      t.enterModifierDefinition && t.enterModifierDefinition(this);
    }
    exitRule(t) {
      t.exitModifierDefinition && t.exitModifierDefinition(this);
    }
    accept(t) {
      return t.visitModifierDefinition ? t.visitModifierDefinition(this) : t.visitChildren(this);
    }
  }, ri = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    expressionList() {
      return this.getTypedRuleContext(me, 0);
    }
    get ruleIndex() {
      return c.RULE_modifierInvocation;
    }
    enterRule(t) {
      t.enterModifierInvocation && t.enterModifierInvocation(this);
    }
    exitRule(t) {
      t.exitModifierInvocation && t.exitModifierInvocation(this);
    }
    accept(t) {
      return t.visitModifierInvocation ? t.visitModifierInvocation(this) : t.visitChildren(this);
    }
  }, oe = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    functionDescriptor() {
      return this.getTypedRuleContext(Os, 0);
    }
    parameterList() {
      return this.getTypedRuleContext(St, 0);
    }
    modifierList() {
      return this.getTypedRuleContext(Ps, 0);
    }
    block() {
      return this.getTypedRuleContext(xt, 0);
    }
    returnParameters() {
      return this.getTypedRuleContext(ni, 0);
    }
    get ruleIndex() {
      return c.RULE_functionDefinition;
    }
    enterRule(t) {
      t.enterFunctionDefinition && t.enterFunctionDefinition(this);
    }
    exitRule(t) {
      t.exitFunctionDefinition && t.exitFunctionDefinition(this);
    }
    accept(t) {
      return t.visitFunctionDefinition ? t.visitFunctionDefinition(this) : t.visitChildren(this);
    }
  }, Os = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    ConstructorKeyword() {
      return this.getToken(c.ConstructorKeyword, 0);
    }
    FallbackKeyword() {
      return this.getToken(c.FallbackKeyword, 0);
    }
    ReceiveKeyword() {
      return this.getToken(c.ReceiveKeyword, 0);
    }
    get ruleIndex() {
      return c.RULE_functionDescriptor;
    }
    enterRule(t) {
      t.enterFunctionDescriptor && t.enterFunctionDescriptor(this);
    }
    exitRule(t) {
      t.exitFunctionDescriptor && t.exitFunctionDescriptor(this);
    }
    accept(t) {
      return t.visitFunctionDescriptor ? t.visitFunctionDescriptor(this) : t.visitChildren(this);
    }
  }, ni = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    parameterList() {
      return this.getTypedRuleContext(St, 0);
    }
    get ruleIndex() {
      return c.RULE_returnParameters;
    }
    enterRule(t) {
      t.enterReturnParameters && t.enterReturnParameters(this);
    }
    exitRule(t) {
      t.exitReturnParameters && t.exitReturnParameters(this);
    }
    accept(t) {
      return t.visitReturnParameters ? t.visitReturnParameters(this) : t.visitChildren(this);
    }
  }, Ps = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    ExternalKeyword_list() {
      return this.getTokens(c.ExternalKeyword);
    }
    ExternalKeyword(t) {
      return this.getToken(c.ExternalKeyword, t);
    }
    PublicKeyword_list() {
      return this.getTokens(c.PublicKeyword);
    }
    PublicKeyword(t) {
      return this.getToken(c.PublicKeyword, t);
    }
    InternalKeyword_list() {
      return this.getTokens(c.InternalKeyword);
    }
    InternalKeyword(t) {
      return this.getToken(c.InternalKeyword, t);
    }
    PrivateKeyword_list() {
      return this.getTokens(c.PrivateKeyword);
    }
    PrivateKeyword(t) {
      return this.getToken(c.PrivateKeyword, t);
    }
    VirtualKeyword_list() {
      return this.getTokens(c.VirtualKeyword);
    }
    VirtualKeyword(t) {
      return this.getToken(c.VirtualKeyword, t);
    }
    stateMutability_list() {
      return this.getTypedRuleContexts(Bt);
    }
    stateMutability(t) {
      return this.getTypedRuleContext(Bt, t);
    }
    modifierInvocation_list() {
      return this.getTypedRuleContexts(ri);
    }
    modifierInvocation(t) {
      return this.getTypedRuleContext(ri, t);
    }
    overrideSpecifier_list() {
      return this.getTypedRuleContexts(yt);
    }
    overrideSpecifier(t) {
      return this.getTypedRuleContext(yt, t);
    }
    get ruleIndex() {
      return c.RULE_modifierList;
    }
    enterRule(t) {
      t.enterModifierList && t.enterModifierList(this);
    }
    exitRule(t) {
      t.exitModifierList && t.exitModifierList(this);
    }
    accept(t) {
      return t.visitModifierList ? t.visitModifierList(this) : t.visitChildren(this);
    }
  }, ue = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    eventParameterList() {
      return this.getTypedRuleContext(Us, 0);
    }
    AnonymousKeyword() {
      return this.getToken(c.AnonymousKeyword, 0);
    }
    get ruleIndex() {
      return c.RULE_eventDefinition;
    }
    enterRule(t) {
      t.enterEventDefinition && t.enterEventDefinition(this);
    }
    exitRule(t) {
      t.exitEventDefinition && t.exitEventDefinition(this);
    }
    accept(t) {
      return t.visitEventDefinition ? t.visitEventDefinition(this) : t.visitChildren(this);
    }
  }, ai = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    get ruleIndex() {
      return c.RULE_enumValue;
    }
    enterRule(t) {
      t.enterEnumValue && t.enterEnumValue(this);
    }
    exitRule(t) {
      t.exitEnumValue && t.exitEnumValue(this);
    }
    accept(t) {
      return t.visitEnumValue ? t.visitEnumValue(this) : t.visitChildren(this);
    }
  }, ce = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    enumValue_list() {
      return this.getTypedRuleContexts(ai);
    }
    enumValue(t) {
      return this.getTypedRuleContext(ai, t);
    }
    get ruleIndex() {
      return c.RULE_enumDefinition;
    }
    enterRule(t) {
      t.enterEnumDefinition && t.enterEnumDefinition(this);
    }
    exitRule(t) {
      t.exitEnumDefinition && t.exitEnumDefinition(this);
    }
    accept(t) {
      return t.visitEnumDefinition ? t.visitEnumDefinition(this) : t.visitChildren(this);
    }
  }, St = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    parameter_list() {
      return this.getTypedRuleContexts(li);
    }
    parameter(t) {
      return this.getTypedRuleContext(li, t);
    }
    get ruleIndex() {
      return c.RULE_parameterList;
    }
    enterRule(t) {
      t.enterParameterList && t.enterParameterList(this);
    }
    exitRule(t) {
      t.exitParameterList && t.exitParameterList(this);
    }
    accept(t) {
      return t.visitParameterList ? t.visitParameterList(this) : t.visitChildren(this);
    }
  }, li = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    storageLocation() {
      return this.getTypedRuleContext(de, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    get ruleIndex() {
      return c.RULE_parameter;
    }
    enterRule(t) {
      t.enterParameter && t.enterParameter(this);
    }
    exitRule(t) {
      t.exitParameter && t.exitParameter(this);
    }
    accept(t) {
      return t.visitParameter ? t.visitParameter(this) : t.visitChildren(this);
    }
  }, Us = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    eventParameter_list() {
      return this.getTypedRuleContexts(hi);
    }
    eventParameter(t) {
      return this.getTypedRuleContext(hi, t);
    }
    get ruleIndex() {
      return c.RULE_eventParameterList;
    }
    enterRule(t) {
      t.enterEventParameterList && t.enterEventParameterList(this);
    }
    exitRule(t) {
      t.exitEventParameterList && t.exitEventParameterList(this);
    }
    accept(t) {
      return t.visitEventParameterList ? t.visitEventParameterList(this) : t.visitChildren(this);
    }
  }, hi = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    IndexedKeyword() {
      return this.getToken(c.IndexedKeyword, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    get ruleIndex() {
      return c.RULE_eventParameter;
    }
    enterRule(t) {
      t.enterEventParameter && t.enterEventParameter(this);
    }
    exitRule(t) {
      t.exitEventParameter && t.exitEventParameter(this);
    }
    accept(t) {
      return t.visitEventParameter ? t.visitEventParameter(this) : t.visitChildren(this);
    }
  }, oi = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    functionTypeParameter_list() {
      return this.getTypedRuleContexts(ui);
    }
    functionTypeParameter(t) {
      return this.getTypedRuleContext(ui, t);
    }
    get ruleIndex() {
      return c.RULE_functionTypeParameterList;
    }
    enterRule(t) {
      t.enterFunctionTypeParameterList && t.enterFunctionTypeParameterList(this);
    }
    exitRule(t) {
      t.exitFunctionTypeParameterList && t.exitFunctionTypeParameterList(this);
    }
    accept(t) {
      return t.visitFunctionTypeParameterList ? t.visitFunctionTypeParameterList(this) : t.visitChildren(this);
    }
  }, ui = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    storageLocation() {
      return this.getTypedRuleContext(de, 0);
    }
    get ruleIndex() {
      return c.RULE_functionTypeParameter;
    }
    enterRule(t) {
      t.enterFunctionTypeParameter && t.enterFunctionTypeParameter(this);
    }
    exitRule(t) {
      t.exitFunctionTypeParameter && t.exitFunctionTypeParameter(this);
    }
    accept(t) {
      return t.visitFunctionTypeParameter ? t.visitFunctionTypeParameter(this) : t.visitChildren(this);
    }
  }, At = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    storageLocation() {
      return this.getTypedRuleContext(de, 0);
    }
    get ruleIndex() {
      return c.RULE_variableDeclaration;
    }
    enterRule(t) {
      t.enterVariableDeclaration && t.enterVariableDeclaration(this);
    }
    exitRule(t) {
      t.exitVariableDeclaration && t.exitVariableDeclaration(this);
    }
    accept(t) {
      return t.visitVariableDeclaration ? t.visitVariableDeclaration(this) : t.visitChildren(this);
    }
  }, Y = class Br extends f {
    constructor(e, i, s) {
      super(i, s), this.parser = e;
    }
    elementaryTypeName() {
      return this.getTypedRuleContext(pe, 0);
    }
    userDefinedTypeName() {
      return this.getTypedRuleContext(ot, 0);
    }
    mapping() {
      return this.getTypedRuleContext(Hs, 0);
    }
    functionTypeName() {
      return this.getTypedRuleContext(Vs, 0);
    }
    PayableKeyword() {
      return this.getToken(c.PayableKeyword, 0);
    }
    typeName() {
      return this.getTypedRuleContext(Br, 0);
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_typeName;
    }
    enterRule(e) {
      e.enterTypeName && e.enterTypeName(this);
    }
    exitRule(e) {
      e.exitTypeName && e.exitTypeName(this);
    }
    accept(e) {
      return e.visitTypeName ? e.visitTypeName(this) : e.visitChildren(this);
    }
  }, ot = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier_list() {
      return this.getTypedRuleContexts(C);
    }
    identifier(t) {
      return this.getTypedRuleContext(C, t);
    }
    get ruleIndex() {
      return c.RULE_userDefinedTypeName;
    }
    enterRule(t) {
      t.enterUserDefinedTypeName && t.enterUserDefinedTypeName(this);
    }
    exitRule(t) {
      t.exitUserDefinedTypeName && t.exitUserDefinedTypeName(this);
    }
    accept(t) {
      return t.visitUserDefinedTypeName ? t.visitUserDefinedTypeName(this) : t.visitChildren(this);
    }
  }, Fs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    elementaryTypeName() {
      return this.getTypedRuleContext(pe, 0);
    }
    userDefinedTypeName() {
      return this.getTypedRuleContext(ot, 0);
    }
    get ruleIndex() {
      return c.RULE_mappingKey;
    }
    enterRule(t) {
      t.enterMappingKey && t.enterMappingKey(this);
    }
    exitRule(t) {
      t.exitMappingKey && t.exitMappingKey(this);
    }
    accept(t) {
      return t.visitMappingKey ? t.visitMappingKey(this) : t.visitChildren(this);
    }
  }, Hs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    mappingKey() {
      return this.getTypedRuleContext(Fs, 0);
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    mappingKeyName() {
      return this.getTypedRuleContext(Ms, 0);
    }
    mappingValueName() {
      return this.getTypedRuleContext(Ks, 0);
    }
    get ruleIndex() {
      return c.RULE_mapping;
    }
    enterRule(t) {
      t.enterMapping && t.enterMapping(this);
    }
    exitRule(t) {
      t.exitMapping && t.exitMapping(this);
    }
    accept(t) {
      return t.visitMapping ? t.visitMapping(this) : t.visitChildren(this);
    }
  }, Ms = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    get ruleIndex() {
      return c.RULE_mappingKeyName;
    }
    enterRule(t) {
      t.enterMappingKeyName && t.enterMappingKeyName(this);
    }
    exitRule(t) {
      t.exitMappingKeyName && t.exitMappingKeyName(this);
    }
    accept(t) {
      return t.visitMappingKeyName ? t.visitMappingKeyName(this) : t.visitChildren(this);
    }
  }, Ks = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    get ruleIndex() {
      return c.RULE_mappingValueName;
    }
    enterRule(t) {
      t.enterMappingValueName && t.enterMappingValueName(this);
    }
    exitRule(t) {
      t.exitMappingValueName && t.exitMappingValueName(this);
    }
    accept(t) {
      return t.visitMappingValueName ? t.visitMappingValueName(this) : t.visitChildren(this);
    }
  }, Vs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    functionTypeParameterList_list() {
      return this.getTypedRuleContexts(oi);
    }
    functionTypeParameterList(t) {
      return this.getTypedRuleContext(oi, t);
    }
    InternalKeyword_list() {
      return this.getTokens(c.InternalKeyword);
    }
    InternalKeyword(t) {
      return this.getToken(c.InternalKeyword, t);
    }
    ExternalKeyword_list() {
      return this.getTokens(c.ExternalKeyword);
    }
    ExternalKeyword(t) {
      return this.getToken(c.ExternalKeyword, t);
    }
    stateMutability_list() {
      return this.getTypedRuleContexts(Bt);
    }
    stateMutability(t) {
      return this.getTypedRuleContext(Bt, t);
    }
    get ruleIndex() {
      return c.RULE_functionTypeName;
    }
    enterRule(t) {
      t.enterFunctionTypeName && t.enterFunctionTypeName(this);
    }
    exitRule(t) {
      t.exitFunctionTypeName && t.exitFunctionTypeName(this);
    }
    accept(t) {
      return t.visitFunctionTypeName ? t.visitFunctionTypeName(this) : t.visitChildren(this);
    }
  }, de = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    get ruleIndex() {
      return c.RULE_storageLocation;
    }
    enterRule(t) {
      t.enterStorageLocation && t.enterStorageLocation(this);
    }
    exitRule(t) {
      t.exitStorageLocation && t.exitStorageLocation(this);
    }
    accept(t) {
      return t.visitStorageLocation ? t.visitStorageLocation(this) : t.visitChildren(this);
    }
  }, Bt = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    PureKeyword() {
      return this.getToken(c.PureKeyword, 0);
    }
    ConstantKeyword() {
      return this.getToken(c.ConstantKeyword, 0);
    }
    ViewKeyword() {
      return this.getToken(c.ViewKeyword, 0);
    }
    PayableKeyword() {
      return this.getToken(c.PayableKeyword, 0);
    }
    get ruleIndex() {
      return c.RULE_stateMutability;
    }
    enterRule(t) {
      t.enterStateMutability && t.enterStateMutability(this);
    }
    exitRule(t) {
      t.exitStateMutability && t.exitStateMutability(this);
    }
    accept(t) {
      return t.visitStateMutability ? t.visitStateMutability(this) : t.visitChildren(this);
    }
  }, xt = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    statement_list() {
      return this.getTypedRuleContexts(ut);
    }
    statement(t) {
      return this.getTypedRuleContext(ut, t);
    }
    get ruleIndex() {
      return c.RULE_block;
    }
    enterRule(t) {
      t.enterBlock && t.enterBlock(this);
    }
    exitRule(t) {
      t.exitBlock && t.exitBlock(this);
    }
    accept(t) {
      return t.visitBlock ? t.visitBlock(this) : t.visitChildren(this);
    }
  }, ut = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    ifStatement() {
      return this.getTypedRuleContext(Bs, 0);
    }
    tryStatement() {
      return this.getTypedRuleContext(zs, 0);
    }
    whileStatement() {
      return this.getTypedRuleContext(js, 0);
    }
    forStatement() {
      return this.getTypedRuleContext(Ws, 0);
    }
    block() {
      return this.getTypedRuleContext(xt, 0);
    }
    inlineAssemblyStatement() {
      return this.getTypedRuleContext(Ys, 0);
    }
    doWhileStatement() {
      return this.getTypedRuleContext($s, 0);
    }
    continueStatement() {
      return this.getTypedRuleContext(Js, 0);
    }
    breakStatement() {
      return this.getTypedRuleContext(Xs, 0);
    }
    returnStatement() {
      return this.getTypedRuleContext(Qs, 0);
    }
    throwStatement() {
      return this.getTypedRuleContext(Zs, 0);
    }
    emitStatement() {
      return this.getTypedRuleContext(tr, 0);
    }
    simpleStatement() {
      return this.getTypedRuleContext(pi, 0);
    }
    uncheckedStatement() {
      return this.getTypedRuleContext(qs, 0);
    }
    revertStatement() {
      return this.getTypedRuleContext(er, 0);
    }
    get ruleIndex() {
      return c.RULE_statement;
    }
    enterRule(t) {
      t.enterStatement && t.enterStatement(this);
    }
    exitRule(t) {
      t.exitStatement && t.exitStatement(this);
    }
    accept(t) {
      return t.visitStatement ? t.visitStatement(this) : t.visitChildren(this);
    }
  }, ci = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_expressionStatement;
    }
    enterRule(t) {
      t.enterExpressionStatement && t.enterExpressionStatement(this);
    }
    exitRule(t) {
      t.exitExpressionStatement && t.exitExpressionStatement(this);
    }
    accept(t) {
      return t.visitExpressionStatement ? t.visitExpressionStatement(this) : t.visitChildren(this);
    }
  }, Bs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    statement_list() {
      return this.getTypedRuleContexts(ut);
    }
    statement(t) {
      return this.getTypedRuleContext(ut, t);
    }
    get ruleIndex() {
      return c.RULE_ifStatement;
    }
    enterRule(t) {
      t.enterIfStatement && t.enterIfStatement(this);
    }
    exitRule(t) {
      t.exitIfStatement && t.exitIfStatement(this);
    }
    accept(t) {
      return t.visitIfStatement ? t.visitIfStatement(this) : t.visitChildren(this);
    }
  }, zs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    block() {
      return this.getTypedRuleContext(xt, 0);
    }
    returnParameters() {
      return this.getTypedRuleContext(ni, 0);
    }
    catchClause_list() {
      return this.getTypedRuleContexts(di);
    }
    catchClause(t) {
      return this.getTypedRuleContext(di, t);
    }
    get ruleIndex() {
      return c.RULE_tryStatement;
    }
    enterRule(t) {
      t.enterTryStatement && t.enterTryStatement(this);
    }
    exitRule(t) {
      t.exitTryStatement && t.exitTryStatement(this);
    }
    accept(t) {
      return t.visitTryStatement ? t.visitTryStatement(this) : t.visitChildren(this);
    }
  }, di = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    block() {
      return this.getTypedRuleContext(xt, 0);
    }
    parameterList() {
      return this.getTypedRuleContext(St, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    get ruleIndex() {
      return c.RULE_catchClause;
    }
    enterRule(t) {
      t.enterCatchClause && t.enterCatchClause(this);
    }
    exitRule(t) {
      t.exitCatchClause && t.exitCatchClause(this);
    }
    accept(t) {
      return t.visitCatchClause ? t.visitCatchClause(this) : t.visitChildren(this);
    }
  }, js = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    statement() {
      return this.getTypedRuleContext(ut, 0);
    }
    get ruleIndex() {
      return c.RULE_whileStatement;
    }
    enterRule(t) {
      t.enterWhileStatement && t.enterWhileStatement(this);
    }
    exitRule(t) {
      t.exitWhileStatement && t.exitWhileStatement(this);
    }
    accept(t) {
      return t.visitWhileStatement ? t.visitWhileStatement(this) : t.visitChildren(this);
    }
  }, pi = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    variableDeclarationStatement() {
      return this.getTypedRuleContext(ir, 0);
    }
    expressionStatement() {
      return this.getTypedRuleContext(ci, 0);
    }
    get ruleIndex() {
      return c.RULE_simpleStatement;
    }
    enterRule(t) {
      t.enterSimpleStatement && t.enterSimpleStatement(this);
    }
    exitRule(t) {
      t.exitSimpleStatement && t.exitSimpleStatement(this);
    }
    accept(t) {
      return t.visitSimpleStatement ? t.visitSimpleStatement(this) : t.visitChildren(this);
    }
  }, qs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    block() {
      return this.getTypedRuleContext(xt, 0);
    }
    get ruleIndex() {
      return c.RULE_uncheckedStatement;
    }
    enterRule(t) {
      t.enterUncheckedStatement && t.enterUncheckedStatement(this);
    }
    exitRule(t) {
      t.exitUncheckedStatement && t.exitUncheckedStatement(this);
    }
    accept(t) {
      return t.visitUncheckedStatement ? t.visitUncheckedStatement(this) : t.visitChildren(this);
    }
  }, Ws = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    statement() {
      return this.getTypedRuleContext(ut, 0);
    }
    simpleStatement() {
      return this.getTypedRuleContext(pi, 0);
    }
    expressionStatement() {
      return this.getTypedRuleContext(ci, 0);
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_forStatement;
    }
    enterRule(t) {
      t.enterForStatement && t.enterForStatement(this);
    }
    exitRule(t) {
      t.exitForStatement && t.exitForStatement(this);
    }
    accept(t) {
      return t.visitForStatement ? t.visitForStatement(this) : t.visitChildren(this);
    }
  }, Ys = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyBlock() {
      return this.getTypedRuleContext(ct, 0);
    }
    StringLiteralFragment() {
      return this.getToken(c.StringLiteralFragment, 0);
    }
    inlineAssemblyStatementFlag() {
      return this.getTypedRuleContext(Gs, 0);
    }
    get ruleIndex() {
      return c.RULE_inlineAssemblyStatement;
    }
    enterRule(t) {
      t.enterInlineAssemblyStatement && t.enterInlineAssemblyStatement(this);
    }
    exitRule(t) {
      t.exitInlineAssemblyStatement && t.exitInlineAssemblyStatement(this);
    }
    accept(t) {
      return t.visitInlineAssemblyStatement ? t.visitInlineAssemblyStatement(this) : t.visitChildren(this);
    }
  }, Gs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    stringLiteral() {
      return this.getTypedRuleContext(zt, 0);
    }
    get ruleIndex() {
      return c.RULE_inlineAssemblyStatementFlag;
    }
    enterRule(t) {
      t.enterInlineAssemblyStatementFlag && t.enterInlineAssemblyStatementFlag(this);
    }
    exitRule(t) {
      t.exitInlineAssemblyStatementFlag && t.exitInlineAssemblyStatementFlag(this);
    }
    accept(t) {
      return t.visitInlineAssemblyStatementFlag ? t.visitInlineAssemblyStatementFlag(this) : t.visitChildren(this);
    }
  }, $s = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    statement() {
      return this.getTypedRuleContext(ut, 0);
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_doWhileStatement;
    }
    enterRule(t) {
      t.enterDoWhileStatement && t.enterDoWhileStatement(this);
    }
    exitRule(t) {
      t.exitDoWhileStatement && t.exitDoWhileStatement(this);
    }
    accept(t) {
      return t.visitDoWhileStatement ? t.visitDoWhileStatement(this) : t.visitChildren(this);
    }
  }, Js = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    ContinueKeyword() {
      return this.getToken(c.ContinueKeyword, 0);
    }
    get ruleIndex() {
      return c.RULE_continueStatement;
    }
    enterRule(t) {
      t.enterContinueStatement && t.enterContinueStatement(this);
    }
    exitRule(t) {
      t.exitContinueStatement && t.exitContinueStatement(this);
    }
    accept(t) {
      return t.visitContinueStatement ? t.visitContinueStatement(this) : t.visitChildren(this);
    }
  }, Xs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    BreakKeyword() {
      return this.getToken(c.BreakKeyword, 0);
    }
    get ruleIndex() {
      return c.RULE_breakStatement;
    }
    enterRule(t) {
      t.enterBreakStatement && t.enterBreakStatement(this);
    }
    exitRule(t) {
      t.exitBreakStatement && t.exitBreakStatement(this);
    }
    accept(t) {
      return t.visitBreakStatement ? t.visitBreakStatement(this) : t.visitChildren(this);
    }
  }, Qs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_returnStatement;
    }
    enterRule(t) {
      t.enterReturnStatement && t.enterReturnStatement(this);
    }
    exitRule(t) {
      t.exitReturnStatement && t.exitReturnStatement(this);
    }
    accept(t) {
      return t.visitReturnStatement ? t.visitReturnStatement(this) : t.visitChildren(this);
    }
  }, Zs = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    get ruleIndex() {
      return c.RULE_throwStatement;
    }
    enterRule(t) {
      t.enterThrowStatement && t.enterThrowStatement(this);
    }
    exitRule(t) {
      t.exitThrowStatement && t.exitThrowStatement(this);
    }
    accept(t) {
      return t.visitThrowStatement ? t.visitThrowStatement(this) : t.visitChildren(this);
    }
  }, tr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    functionCall() {
      return this.getTypedRuleContext(xi, 0);
    }
    get ruleIndex() {
      return c.RULE_emitStatement;
    }
    enterRule(t) {
      t.enterEmitStatement && t.enterEmitStatement(this);
    }
    exitRule(t) {
      t.exitEmitStatement && t.exitEmitStatement(this);
    }
    accept(t) {
      return t.visitEmitStatement ? t.visitEmitStatement(this) : t.visitChildren(this);
    }
  }, er = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    functionCall() {
      return this.getTypedRuleContext(xi, 0);
    }
    get ruleIndex() {
      return c.RULE_revertStatement;
    }
    enterRule(t) {
      t.enterRevertStatement && t.enterRevertStatement(this);
    }
    exitRule(t) {
      t.exitRevertStatement && t.exitRevertStatement(this);
    }
    accept(t) {
      return t.visitRevertStatement ? t.visitRevertStatement(this) : t.visitChildren(this);
    }
  }, ir = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifierList() {
      return this.getTypedRuleContext(rr, 0);
    }
    variableDeclaration() {
      return this.getTypedRuleContext(At, 0);
    }
    variableDeclarationList() {
      return this.getTypedRuleContext(sr, 0);
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_variableDeclarationStatement;
    }
    enterRule(t) {
      t.enterVariableDeclarationStatement && t.enterVariableDeclarationStatement(this);
    }
    exitRule(t) {
      t.exitVariableDeclarationStatement && t.exitVariableDeclarationStatement(this);
    }
    accept(t) {
      return t.visitVariableDeclarationStatement ? t.visitVariableDeclarationStatement(this) : t.visitChildren(this);
    }
  }, sr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    variableDeclaration_list() {
      return this.getTypedRuleContexts(At);
    }
    variableDeclaration(t) {
      return this.getTypedRuleContext(At, t);
    }
    get ruleIndex() {
      return c.RULE_variableDeclarationList;
    }
    enterRule(t) {
      t.enterVariableDeclarationList && t.enterVariableDeclarationList(this);
    }
    exitRule(t) {
      t.exitVariableDeclarationList && t.exitVariableDeclarationList(this);
    }
    accept(t) {
      return t.visitVariableDeclarationList ? t.visitVariableDeclarationList(this) : t.visitChildren(this);
    }
  }, rr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier_list() {
      return this.getTypedRuleContexts(C);
    }
    identifier(t) {
      return this.getTypedRuleContext(C, t);
    }
    get ruleIndex() {
      return c.RULE_identifierList;
    }
    enterRule(t) {
      t.enterIdentifierList && t.enterIdentifierList(this);
    }
    exitRule(t) {
      t.exitIdentifierList && t.exitIdentifierList(this);
    }
    accept(t) {
      return t.visitIdentifierList ? t.visitIdentifierList(this) : t.visitChildren(this);
    }
  }, pe = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    Int() {
      return this.getToken(c.Int, 0);
    }
    Uint() {
      return this.getToken(c.Uint, 0);
    }
    Byte() {
      return this.getToken(c.Byte, 0);
    }
    Fixed() {
      return this.getToken(c.Fixed, 0);
    }
    Ufixed() {
      return this.getToken(c.Ufixed, 0);
    }
    get ruleIndex() {
      return c.RULE_elementaryTypeName;
    }
    enterRule(t) {
      t.enterElementaryTypeName && t.enterElementaryTypeName(this);
    }
    exitRule(t) {
      t.exitElementaryTypeName && t.exitElementaryTypeName(this);
    }
    accept(t) {
      return t.visitElementaryTypeName ? t.visitElementaryTypeName(this) : t.visitChildren(this);
    }
  }, L = class Di extends f {
    constructor(e, i, s) {
      super(i, s), this.parser = e;
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    expression_list() {
      return this.getTypedRuleContexts(Di);
    }
    expression(e) {
      return this.getTypedRuleContext(Di, e);
    }
    primaryExpression() {
      return this.getTypedRuleContext(nr, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    nameValueList() {
      return this.getTypedRuleContext(mi, 0);
    }
    functionCallArguments() {
      return this.getTypedRuleContext(_i, 0);
    }
    get ruleIndex() {
      return c.RULE_expression;
    }
    enterRule(e) {
      e.enterExpression && e.enterExpression(this);
    }
    exitRule(e) {
      e.exitExpression && e.exitExpression(this);
    }
    accept(e) {
      return e.visitExpression ? e.visitExpression(this) : e.visitChildren(this);
    }
  }, nr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    BooleanLiteral() {
      return this.getToken(c.BooleanLiteral, 0);
    }
    numberLiteral() {
      return this.getTypedRuleContext(Ri, 0);
    }
    hexLiteral() {
      return this.getTypedRuleContext(_e, 0);
    }
    stringLiteral() {
      return this.getTypedRuleContext(zt, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    TypeKeyword() {
      return this.getToken(c.TypeKeyword, 0);
    }
    PayableKeyword() {
      return this.getToken(c.PayableKeyword, 0);
    }
    tupleExpression() {
      return this.getTypedRuleContext(_r, 0);
    }
    typeName() {
      return this.getTypedRuleContext(Y, 0);
    }
    get ruleIndex() {
      return c.RULE_primaryExpression;
    }
    enterRule(t) {
      t.enterPrimaryExpression && t.enterPrimaryExpression(this);
    }
    exitRule(t) {
      t.exitPrimaryExpression && t.exitPrimaryExpression(this);
    }
    accept(t) {
      return t.visitPrimaryExpression ? t.visitPrimaryExpression(this) : t.visitChildren(this);
    }
  }, me = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    expression_list() {
      return this.getTypedRuleContexts(L);
    }
    expression(t) {
      return this.getTypedRuleContext(L, t);
    }
    get ruleIndex() {
      return c.RULE_expressionList;
    }
    enterRule(t) {
      t.enterExpressionList && t.enterExpressionList(this);
    }
    exitRule(t) {
      t.exitExpressionList && t.exitExpressionList(this);
    }
    accept(t) {
      return t.visitExpressionList ? t.visitExpressionList(this) : t.visitChildren(this);
    }
  }, mi = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    nameValue_list() {
      return this.getTypedRuleContexts(fi);
    }
    nameValue(t) {
      return this.getTypedRuleContext(fi, t);
    }
    get ruleIndex() {
      return c.RULE_nameValueList;
    }
    enterRule(t) {
      t.enterNameValueList && t.enterNameValueList(this);
    }
    exitRule(t) {
      t.exitNameValueList && t.exitNameValueList(this);
    }
    accept(t) {
      return t.visitNameValueList ? t.visitNameValueList(this) : t.visitChildren(this);
    }
  }, fi = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    get ruleIndex() {
      return c.RULE_nameValue;
    }
    enterRule(t) {
      t.enterNameValue && t.enterNameValue(this);
    }
    exitRule(t) {
      t.exitNameValue && t.exitNameValue(this);
    }
    accept(t) {
      return t.visitNameValue ? t.visitNameValue(this) : t.visitChildren(this);
    }
  }, _i = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    nameValueList() {
      return this.getTypedRuleContext(mi, 0);
    }
    expressionList() {
      return this.getTypedRuleContext(me, 0);
    }
    get ruleIndex() {
      return c.RULE_functionCallArguments;
    }
    enterRule(t) {
      t.enterFunctionCallArguments && t.enterFunctionCallArguments(this);
    }
    exitRule(t) {
      t.exitFunctionCallArguments && t.exitFunctionCallArguments(this);
    }
    accept(t) {
      return t.visitFunctionCallArguments ? t.visitFunctionCallArguments(this) : t.visitChildren(this);
    }
  }, xi = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    expression() {
      return this.getTypedRuleContext(L, 0);
    }
    functionCallArguments() {
      return this.getTypedRuleContext(_i, 0);
    }
    get ruleIndex() {
      return c.RULE_functionCall;
    }
    enterRule(t) {
      t.enterFunctionCall && t.enterFunctionCall(this);
    }
    exitRule(t) {
      t.exitFunctionCall && t.exitFunctionCall(this);
    }
    accept(t) {
      return t.visitFunctionCall ? t.visitFunctionCall(this) : t.visitChildren(this);
    }
  }, ct = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyItem_list() {
      return this.getTypedRuleContexts(yi);
    }
    assemblyItem(t) {
      return this.getTypedRuleContext(yi, t);
    }
    get ruleIndex() {
      return c.RULE_assemblyBlock;
    }
    enterRule(t) {
      t.enterAssemblyBlock && t.enterAssemblyBlock(this);
    }
    exitRule(t) {
      t.exitAssemblyBlock && t.exitAssemblyBlock(this);
    }
    accept(t) {
      return t.visitAssemblyBlock ? t.visitAssemblyBlock(this) : t.visitChildren(this);
    }
  }, yi = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    assemblyBlock() {
      return this.getTypedRuleContext(ct, 0);
    }
    assemblyExpression() {
      return this.getTypedRuleContext(X, 0);
    }
    assemblyLocalDefinition() {
      return this.getTypedRuleContext(lr, 0);
    }
    assemblyAssignment() {
      return this.getTypedRuleContext(hr, 0);
    }
    assemblyStackAssignment() {
      return this.getTypedRuleContext(or, 0);
    }
    labelDefinition() {
      return this.getTypedRuleContext(ur, 0);
    }
    assemblySwitch() {
      return this.getTypedRuleContext(cr, 0);
    }
    assemblyFunctionDefinition() {
      return this.getTypedRuleContext(dr, 0);
    }
    assemblyFor() {
      return this.getTypedRuleContext(mr, 0);
    }
    assemblyIf() {
      return this.getTypedRuleContext(fr, 0);
    }
    BreakKeyword() {
      return this.getToken(c.BreakKeyword, 0);
    }
    ContinueKeyword() {
      return this.getToken(c.ContinueKeyword, 0);
    }
    LeaveKeyword() {
      return this.getToken(c.LeaveKeyword, 0);
    }
    numberLiteral() {
      return this.getTypedRuleContext(Ri, 0);
    }
    stringLiteral() {
      return this.getTypedRuleContext(zt, 0);
    }
    hexLiteral() {
      return this.getTypedRuleContext(_e, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyItem;
    }
    enterRule(t) {
      t.enterAssemblyItem && t.enterAssemblyItem(this);
    }
    exitRule(t) {
      t.exitAssemblyItem && t.exitAssemblyItem(this);
    }
    accept(t) {
      return t.visitAssemblyItem ? t.visitAssemblyItem(this) : t.visitChildren(this);
    }
  }, X = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyCall() {
      return this.getTypedRuleContext(ar, 0);
    }
    assemblyLiteral() {
      return this.getTypedRuleContext(vi, 0);
    }
    assemblyMember() {
      return this.getTypedRuleContext(gi, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyExpression;
    }
    enterRule(t) {
      t.enterAssemblyExpression && t.enterAssemblyExpression(this);
    }
    exitRule(t) {
      t.exitAssemblyExpression && t.exitAssemblyExpression(this);
    }
    accept(t) {
      return t.visitAssemblyExpression ? t.visitAssemblyExpression(this) : t.visitChildren(this);
    }
  }, gi = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier_list() {
      return this.getTypedRuleContexts(C);
    }
    identifier(t) {
      return this.getTypedRuleContext(C, t);
    }
    get ruleIndex() {
      return c.RULE_assemblyMember;
    }
    enterRule(t) {
      t.enterAssemblyMember && t.enterAssemblyMember(this);
    }
    exitRule(t) {
      t.exitAssemblyMember && t.exitAssemblyMember(this);
    }
    accept(t) {
      return t.visitAssemblyMember ? t.visitAssemblyMember(this) : t.visitChildren(this);
    }
  }, ar = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    assemblyExpression_list() {
      return this.getTypedRuleContexts(X);
    }
    assemblyExpression(t) {
      return this.getTypedRuleContext(X, t);
    }
    get ruleIndex() {
      return c.RULE_assemblyCall;
    }
    enterRule(t) {
      t.enterAssemblyCall && t.enterAssemblyCall(this);
    }
    exitRule(t) {
      t.exitAssemblyCall && t.exitAssemblyCall(this);
    }
    accept(t) {
      return t.visitAssemblyCall ? t.visitAssemblyCall(this) : t.visitChildren(this);
    }
  }, lr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyIdentifierOrList() {
      return this.getTypedRuleContext(Ti, 0);
    }
    assemblyExpression() {
      return this.getTypedRuleContext(X, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyLocalDefinition;
    }
    enterRule(t) {
      t.enterAssemblyLocalDefinition && t.enterAssemblyLocalDefinition(this);
    }
    exitRule(t) {
      t.exitAssemblyLocalDefinition && t.exitAssemblyLocalDefinition(this);
    }
    accept(t) {
      return t.visitAssemblyLocalDefinition ? t.visitAssemblyLocalDefinition(this) : t.visitChildren(this);
    }
  }, hr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyIdentifierOrList() {
      return this.getTypedRuleContext(Ti, 0);
    }
    assemblyExpression() {
      return this.getTypedRuleContext(X, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyAssignment;
    }
    enterRule(t) {
      t.enterAssemblyAssignment && t.enterAssemblyAssignment(this);
    }
    exitRule(t) {
      t.exitAssemblyAssignment && t.exitAssemblyAssignment(this);
    }
    accept(t) {
      return t.visitAssemblyAssignment ? t.visitAssemblyAssignment(this) : t.visitChildren(this);
    }
  }, Ti = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    assemblyMember() {
      return this.getTypedRuleContext(gi, 0);
    }
    assemblyIdentifierList() {
      return this.getTypedRuleContext(fe, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyIdentifierOrList;
    }
    enterRule(t) {
      t.enterAssemblyIdentifierOrList && t.enterAssemblyIdentifierOrList(this);
    }
    exitRule(t) {
      t.exitAssemblyIdentifierOrList && t.exitAssemblyIdentifierOrList(this);
    }
    accept(t) {
      return t.visitAssemblyIdentifierOrList ? t.visitAssemblyIdentifierOrList(this) : t.visitChildren(this);
    }
  }, fe = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier_list() {
      return this.getTypedRuleContexts(C);
    }
    identifier(t) {
      return this.getTypedRuleContext(C, t);
    }
    get ruleIndex() {
      return c.RULE_assemblyIdentifierList;
    }
    enterRule(t) {
      t.enterAssemblyIdentifierList && t.enterAssemblyIdentifierList(this);
    }
    exitRule(t) {
      t.exitAssemblyIdentifierList && t.exitAssemblyIdentifierList(this);
    }
    accept(t) {
      return t.visitAssemblyIdentifierList ? t.visitAssemblyIdentifierList(this) : t.visitChildren(this);
    }
  }, or = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyExpression() {
      return this.getTypedRuleContext(X, 0);
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyStackAssignment;
    }
    enterRule(t) {
      t.enterAssemblyStackAssignment && t.enterAssemblyStackAssignment(this);
    }
    exitRule(t) {
      t.exitAssemblyStackAssignment && t.exitAssemblyStackAssignment(this);
    }
    accept(t) {
      return t.visitAssemblyStackAssignment ? t.visitAssemblyStackAssignment(this) : t.visitChildren(this);
    }
  }, ur = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    get ruleIndex() {
      return c.RULE_labelDefinition;
    }
    enterRule(t) {
      t.enterLabelDefinition && t.enterLabelDefinition(this);
    }
    exitRule(t) {
      t.exitLabelDefinition && t.exitLabelDefinition(this);
    }
    accept(t) {
      return t.visitLabelDefinition ? t.visitLabelDefinition(this) : t.visitChildren(this);
    }
  }, cr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyExpression() {
      return this.getTypedRuleContext(X, 0);
    }
    assemblyCase_list() {
      return this.getTypedRuleContexts(Ei);
    }
    assemblyCase(t) {
      return this.getTypedRuleContext(Ei, t);
    }
    get ruleIndex() {
      return c.RULE_assemblySwitch;
    }
    enterRule(t) {
      t.enterAssemblySwitch && t.enterAssemblySwitch(this);
    }
    exitRule(t) {
      t.exitAssemblySwitch && t.exitAssemblySwitch(this);
    }
    accept(t) {
      return t.visitAssemblySwitch ? t.visitAssemblySwitch(this) : t.visitChildren(this);
    }
  }, Ei = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyLiteral() {
      return this.getTypedRuleContext(vi, 0);
    }
    assemblyBlock() {
      return this.getTypedRuleContext(ct, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyCase;
    }
    enterRule(t) {
      t.enterAssemblyCase && t.enterAssemblyCase(this);
    }
    exitRule(t) {
      t.exitAssemblyCase && t.exitAssemblyCase(this);
    }
    accept(t) {
      return t.visitAssemblyCase ? t.visitAssemblyCase(this) : t.visitChildren(this);
    }
  }, dr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    identifier() {
      return this.getTypedRuleContext(C, 0);
    }
    assemblyBlock() {
      return this.getTypedRuleContext(ct, 0);
    }
    assemblyIdentifierList() {
      return this.getTypedRuleContext(fe, 0);
    }
    assemblyFunctionReturns() {
      return this.getTypedRuleContext(pr, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyFunctionDefinition;
    }
    enterRule(t) {
      t.enterAssemblyFunctionDefinition && t.enterAssemblyFunctionDefinition(this);
    }
    exitRule(t) {
      t.exitAssemblyFunctionDefinition && t.exitAssemblyFunctionDefinition(this);
    }
    accept(t) {
      return t.visitAssemblyFunctionDefinition ? t.visitAssemblyFunctionDefinition(this) : t.visitChildren(this);
    }
  }, pr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyIdentifierList() {
      return this.getTypedRuleContext(fe, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyFunctionReturns;
    }
    enterRule(t) {
      t.enterAssemblyFunctionReturns && t.enterAssemblyFunctionReturns(this);
    }
    exitRule(t) {
      t.exitAssemblyFunctionReturns && t.exitAssemblyFunctionReturns(this);
    }
    accept(t) {
      return t.visitAssemblyFunctionReturns ? t.visitAssemblyFunctionReturns(this) : t.visitChildren(this);
    }
  }, mr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyExpression_list() {
      return this.getTypedRuleContexts(X);
    }
    assemblyExpression(t) {
      return this.getTypedRuleContext(X, t);
    }
    assemblyBlock_list() {
      return this.getTypedRuleContexts(ct);
    }
    assemblyBlock(t) {
      return this.getTypedRuleContext(ct, t);
    }
    get ruleIndex() {
      return c.RULE_assemblyFor;
    }
    enterRule(t) {
      t.enterAssemblyFor && t.enterAssemblyFor(this);
    }
    exitRule(t) {
      t.exitAssemblyFor && t.exitAssemblyFor(this);
    }
    accept(t) {
      return t.visitAssemblyFor ? t.visitAssemblyFor(this) : t.visitChildren(this);
    }
  }, fr = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    assemblyExpression() {
      return this.getTypedRuleContext(X, 0);
    }
    assemblyBlock() {
      return this.getTypedRuleContext(ct, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyIf;
    }
    enterRule(t) {
      t.enterAssemblyIf && t.enterAssemblyIf(this);
    }
    exitRule(t) {
      t.exitAssemblyIf && t.exitAssemblyIf(this);
    }
    accept(t) {
      return t.visitAssemblyIf ? t.visitAssemblyIf(this) : t.visitChildren(this);
    }
  }, vi = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    stringLiteral() {
      return this.getTypedRuleContext(zt, 0);
    }
    DecimalNumber() {
      return this.getToken(c.DecimalNumber, 0);
    }
    HexNumber() {
      return this.getToken(c.HexNumber, 0);
    }
    hexLiteral() {
      return this.getTypedRuleContext(_e, 0);
    }
    BooleanLiteral() {
      return this.getToken(c.BooleanLiteral, 0);
    }
    get ruleIndex() {
      return c.RULE_assemblyLiteral;
    }
    enterRule(t) {
      t.enterAssemblyLiteral && t.enterAssemblyLiteral(this);
    }
    exitRule(t) {
      t.exitAssemblyLiteral && t.exitAssemblyLiteral(this);
    }
    accept(t) {
      return t.visitAssemblyLiteral ? t.visitAssemblyLiteral(this) : t.visitChildren(this);
    }
  }, _r = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    expression_list() {
      return this.getTypedRuleContexts(L);
    }
    expression(t) {
      return this.getTypedRuleContext(L, t);
    }
    get ruleIndex() {
      return c.RULE_tupleExpression;
    }
    enterRule(t) {
      t.enterTupleExpression && t.enterTupleExpression(this);
    }
    exitRule(t) {
      t.exitTupleExpression && t.exitTupleExpression(this);
    }
    accept(t) {
      return t.visitTupleExpression ? t.visitTupleExpression(this) : t.visitChildren(this);
    }
  }, Ri = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    DecimalNumber() {
      return this.getToken(c.DecimalNumber, 0);
    }
    HexNumber() {
      return this.getToken(c.HexNumber, 0);
    }
    NumberUnit() {
      return this.getToken(c.NumberUnit, 0);
    }
    get ruleIndex() {
      return c.RULE_numberLiteral;
    }
    enterRule(t) {
      t.enterNumberLiteral && t.enterNumberLiteral(this);
    }
    exitRule(t) {
      t.exitNumberLiteral && t.exitNumberLiteral(this);
    }
    accept(t) {
      return t.visitNumberLiteral ? t.visitNumberLiteral(this) : t.visitChildren(this);
    }
  }, C = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    ReceiveKeyword() {
      return this.getToken(c.ReceiveKeyword, 0);
    }
    GlobalKeyword() {
      return this.getToken(c.GlobalKeyword, 0);
    }
    ConstructorKeyword() {
      return this.getToken(c.ConstructorKeyword, 0);
    }
    PayableKeyword() {
      return this.getToken(c.PayableKeyword, 0);
    }
    LeaveKeyword() {
      return this.getToken(c.LeaveKeyword, 0);
    }
    Identifier() {
      return this.getToken(c.Identifier, 0);
    }
    get ruleIndex() {
      return c.RULE_identifier;
    }
    enterRule(t) {
      t.enterIdentifier && t.enterIdentifier(this);
    }
    exitRule(t) {
      t.exitIdentifier && t.exitIdentifier(this);
    }
    accept(t) {
      return t.visitIdentifier ? t.visitIdentifier(this) : t.visitChildren(this);
    }
  }, _e = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    HexLiteralFragment_list() {
      return this.getTokens(c.HexLiteralFragment);
    }
    HexLiteralFragment(t) {
      return this.getToken(c.HexLiteralFragment, t);
    }
    get ruleIndex() {
      return c.RULE_hexLiteral;
    }
    enterRule(t) {
      t.enterHexLiteral && t.enterHexLiteral(this);
    }
    exitRule(t) {
      t.exitHexLiteral && t.exitHexLiteral(this);
    }
    accept(t) {
      return t.visitHexLiteral ? t.visitHexLiteral(this) : t.visitChildren(this);
    }
  }, yt = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    userDefinedTypeName_list() {
      return this.getTypedRuleContexts(ot);
    }
    userDefinedTypeName(t) {
      return this.getTypedRuleContext(ot, t);
    }
    get ruleIndex() {
      return c.RULE_overrideSpecifier;
    }
    enterRule(t) {
      t.enterOverrideSpecifier && t.enterOverrideSpecifier(this);
    }
    exitRule(t) {
      t.exitOverrideSpecifier && t.exitOverrideSpecifier(this);
    }
    accept(t) {
      return t.visitOverrideSpecifier ? t.visitOverrideSpecifier(this) : t.visitChildren(this);
    }
  }, zt = class extends f {
    constructor(t, e, i) {
      super(e, i), this.parser = t;
    }
    StringLiteralFragment_list() {
      return this.getTokens(c.StringLiteralFragment);
    }
    StringLiteralFragment(t) {
      return this.getToken(c.StringLiteralFragment, t);
    }
    get ruleIndex() {
      return c.RULE_stringLiteral;
    }
    enterRule(t) {
      t.enterStringLiteral && t.enterStringLiteral(this);
    }
    exitRule(t) {
      t.exitStringLiteral && t.exitStringLiteral(this);
    }
    accept(t) {
      return t.visitStringLiteral ? t.visitStringLiteral(this) : t.visitChildren(this);
    }
  }, Fn = ["SourceUnit", "PragmaDirective", "ImportDirective", "ContractDefinition", "InheritanceSpecifier", "StateVariableDeclaration", "UsingForDeclaration", "StructDefinition", "ModifierDefinition", "ModifierInvocation", "FunctionDefinition", "EventDefinition", "CustomErrorDefinition", "RevertStatement", "EnumValue", "EnumDefinition", "VariableDeclaration", "UserDefinedTypeName", "Mapping", "ArrayTypeName", "FunctionTypeName", "Block", "ExpressionStatement", "IfStatement", "WhileStatement", "ForStatement", "InlineAssemblyStatement", "DoWhileStatement", "ContinueStatement", "Break", "Continue", "BreakStatement", "ReturnStatement", "EmitStatement", "ThrowStatement", "VariableDeclarationStatement", "ElementaryTypeName", "FunctionCall", "AssemblyBlock", "AssemblyCall", "AssemblyLocalDefinition", "AssemblyAssignment", "AssemblyStackAssignment", "LabelDefinition", "AssemblySwitch", "AssemblyCase", "AssemblyFunctionDefinition", "AssemblyFor", "AssemblyIf", "TupleExpression", "NameValueExpression", "BooleanLiteral", "NumberLiteral", "Identifier", "BinaryOperation", "UnaryOperation", "NewExpression", "Conditional", "StringLiteral", "HexLiteral", "HexNumber", "DecimalNumber", "MemberAccess", "IndexAccess", "IndexRangeAccess", "NameValueList", "UncheckedStatement", "TryStatement", "CatchClause", "FileLevelConstant", "AssemblyMemberAccess", "TypeDefinition"], Hn = ["+", "-", "*", "/", "**", "%", "<<", ">>", "&&", "||", "&", "^", "<", ">", "<=", ">=", "==", "!=", "=", "^=", "&=", "<<=", ">>=", "+=", "-=", "*=", "/=", "%=", "|", "|="], Mn = ["-", "+", "++", "--", "~", "after", "delete", "!"], Kn = class extends Dn {
    constructor(t) {
      super(), this.options = t, this.result = null;
    }
    defaultResult() {
      throw new Error("Unknown node");
    }
    aggregateResult() {
      return { type: "" };
    }
    visitSourceUnit(t) {
      var _a;
      const i = { type: "SourceUnit", children: ((_a = t.children) != null ? _a : []).slice(0, -1).map((r) => this.visit(r)) }, s = this._addMeta(i, t);
      return this.result = s, s;
    }
    visitContractPart(t) {
      return this.visit(t.getChild(0));
    }
    visitContractDefinition(t) {
      const e = this._toText(t.identifier()), i = this._toText(t.getChild(0));
      this._currentContract = e;
      const s = { type: "ContractDefinition", name: e, baseContracts: t.inheritanceSpecifier_list().map((r) => this.visitInheritanceSpecifier(r)), subNodes: t.contractPart_list().map((r) => this.visit(r)), kind: i };
      return this._addMeta(s, t);
    }
    visitStateVariableDeclaration(t) {
      const e = this.visitTypeName(t.typeName()), i = t.identifier(), s = this._toText(i);
      let r = null;
      const n = t.expression();
      n && (r = this.visitExpression(n));
      let l = "default";
      t.InternalKeyword_list().length > 0 ? l = "internal" : t.PublicKeyword_list().length > 0 ? l = "public" : t.PrivateKeyword_list().length > 0 && (l = "private");
      let h = false;
      t.ConstantKeyword_list().length > 0 && (h = true);
      let u;
      const p = t.overrideSpecifier_list();
      p.length === 0 ? u = null : u = p[0].userDefinedTypeName_list().map((v) => this.visitUserDefinedTypeName(v));
      let m = false;
      t.ImmutableKeyword_list().length > 0 && (m = true);
      let y = false;
      t.TransientKeyword_list().length > 0 && (y = true);
      const E = { type: "VariableDeclaration", typeName: e, name: s, identifier: this.visitIdentifier(i), expression: r, visibility: l, isStateVar: true, isDeclaredConst: h, isIndexed: false, isImmutable: m, isTransient: y, override: u, storageLocation: null }, A = { type: "StateVariableDeclaration", variables: [this._addMeta(E, t)], initialValue: r };
      return this._addMeta(A, t);
    }
    visitVariableDeclaration(t) {
      let e = null;
      const i = t.storageLocation();
      i && (e = this._toText(i));
      const s = t.identifier(), r = { type: "VariableDeclaration", typeName: this.visitTypeName(t.typeName()), name: this._toText(s), identifier: this.visitIdentifier(s), storageLocation: e, isStateVar: false, isIndexed: false, expression: null };
      return this._addMeta(r, t);
    }
    visitVariableDeclarationStatement(t) {
      let e = [];
      const i = t.variableDeclaration(), s = t.identifierList(), r = t.variableDeclarationList();
      i ? e = [this.visitVariableDeclaration(i)] : s ? e = this.buildIdentifierList(s) : r && (e = this.buildVariableDeclarationList(r));
      let n = null;
      const l = t.expression();
      l && (n = this.visitExpression(l));
      const h = { type: "VariableDeclarationStatement", variables: e, initialValue: n };
      return this._addMeta(h, t);
    }
    visitStatement(t) {
      return this.visit(t.getChild(0));
    }
    visitSimpleStatement(t) {
      return this.visit(t.getChild(0));
    }
    visitEventDefinition(t) {
      const e = t.eventParameterList().eventParameter_list().map((s) => {
        const r = this.visitTypeName(s.typeName());
        let n = null;
        const l = s.identifier();
        l && (n = this._toText(l));
        const h = { type: "VariableDeclaration", typeName: r, name: n, identifier: l ? this.visitIdentifier(l) : null, isStateVar: false, isIndexed: !!s.IndexedKeyword(), storageLocation: null, expression: null };
        return this._addMeta(h, s);
      }), i = { type: "EventDefinition", name: this._toText(t.identifier()), parameters: e, isAnonymous: !!t.AnonymousKeyword() };
      return this._addMeta(i, t);
    }
    visitBlock(t) {
      const e = { type: "Block", statements: t.statement_list().map((i) => this.visitStatement(i)) };
      return this._addMeta(e, t);
    }
    visitParameter(t) {
      let e = null;
      const i = t.storageLocation();
      i && (e = this._toText(i));
      let s = null;
      const r = t.identifier();
      r && (s = this._toText(r));
      const n = { type: "VariableDeclaration", typeName: this.visitTypeName(t.typeName()), name: s, identifier: r ? this.visitIdentifier(r) : null, storageLocation: e, isStateVar: false, isIndexed: false, expression: null };
      return this._addMeta(n, t);
    }
    visitFunctionDefinition(t) {
      let e = false, i = false, s = false, r = false, n = null, l = [], h = null, u = "default", p = null;
      const m = t.block();
      m && (p = this.visitBlock(m));
      const y = t.modifierList().modifierInvocation_list().map((V) => this.visitModifierInvocation(V));
      let E = null;
      t.modifierList().stateMutability_list().length > 0 && (E = this._stateMutabilityToText(t.modifierList().stateMutability(0)));
      const A = t.returnParameters();
      switch (this._toText(t.functionDescriptor().getChild(0))) {
        case "constructor":
          l = t.parameterList().parameter_list().map((V) => this.visit(V)), t.modifierList().InternalKeyword_list().length > 0 ? u = "internal" : t.modifierList().PublicKeyword_list().length > 0 ? u = "public" : u = "default", e = true;
          break;
        case "fallback":
          l = t.parameterList().parameter_list().map((V) => this.visit(V)), h = A ? this.visitReturnParameters(A) : null, u = "external", i = true;
          break;
        case "receive":
          u = "external", s = true;
          break;
        case "function": {
          const V = t.functionDescriptor().identifier();
          n = V ? this._toText(V) : "", l = t.parameterList().parameter_list().map((Jn) => this.visit(Jn)), h = A ? this.visitReturnParameters(A) : null, t.modifierList().ExternalKeyword_list().length > 0 ? u = "external" : t.modifierList().InternalKeyword_list().length > 0 ? u = "internal" : t.modifierList().PublicKeyword_list().length > 0 ? u = "public" : t.modifierList().PrivateKeyword_list().length > 0 && (u = "private"), e = n === this._currentContract, i = n === "";
          break;
        }
      }
      t.modifierList().VirtualKeyword_list().length > 0 && (r = true);
      let v;
      const G = t.modifierList().overrideSpecifier_list();
      G.length === 0 ? v = null : v = G[0].userDefinedTypeName_list().map((V) => this.visitUserDefinedTypeName(V));
      const K = { type: "FunctionDefinition", name: n, parameters: l, returnParameters: h, body: p, visibility: u, modifiers: y, override: v, isConstructor: e, isReceiveEther: s, isFallback: i, isVirtual: r, stateMutability: E };
      return this._addMeta(K, t);
    }
    visitEnumDefinition(t) {
      const e = { type: "EnumDefinition", name: this._toText(t.identifier()), members: t.enumValue_list().map((i) => this.visitEnumValue(i)) };
      return this._addMeta(e, t);
    }
    visitEnumValue(t) {
      const e = { type: "EnumValue", name: this._toText(t.identifier()) };
      return this._addMeta(e, t);
    }
    visitElementaryTypeName(t) {
      const e = { type: "ElementaryTypeName", name: this._toText(t), stateMutability: null };
      return this._addMeta(e, t);
    }
    visitIdentifier(t) {
      const e = { type: "Identifier", name: this._toText(t) };
      return this._addMeta(e, t);
    }
    visitTypeName(t) {
      var e;
      if (t.children && t.children.length > 2) {
        let i = null;
        if (t.children.length === 4) {
          const r = t.expression();
          if (r == null) throw new Error("Assertion error: a typeName with 4 children should have an expression");
          i = this.visitExpression(r);
        }
        const s = { type: "ArrayTypeName", baseTypeName: this.visitTypeName(t.typeName()), length: i };
        return this._addMeta(s, t);
      }
      if (((e = t.children) == null ? void 0 : e.length) === 2) {
        const i = { type: "ElementaryTypeName", name: this._toText(t.getChild(0)), stateMutability: this._toText(t.getChild(1)) };
        return this._addMeta(i, t);
      }
      if (t.elementaryTypeName()) return this.visitElementaryTypeName(t.elementaryTypeName());
      if (t.userDefinedTypeName()) return this.visitUserDefinedTypeName(t.userDefinedTypeName());
      if (t.mapping()) return this.visitMapping(t.mapping());
      if (t.functionTypeName()) return this.visitFunctionTypeName(t.functionTypeName());
      throw new Error("Assertion error: unhandled type name case");
    }
    visitUserDefinedTypeName(t) {
      const e = { type: "UserDefinedTypeName", namePath: this._toText(t) };
      return this._addMeta(e, t);
    }
    visitUsingForDeclaration(t) {
      let e = null;
      const i = t.typeName();
      i && (e = this.visitTypeName(i));
      const s = !!t.GlobalKeyword(), r = t.usingForObject(), n = r.userDefinedTypeName();
      let l;
      if (n) l = { type: "UsingForDeclaration", isGlobal: s, typeName: e, libraryName: this._toText(n), functions: [], operators: [] };
      else {
        const h = r.usingForObjectDirective_list(), u = [], p = [];
        for (const m of h) {
          u.push(this._toText(m.userDefinedTypeName()));
          const y = m.userDefinableOperators();
          y ? p.push(this._toText(y)) : p.push(null);
        }
        l = { type: "UsingForDeclaration", isGlobal: s, typeName: e, libraryName: null, functions: u, operators: p };
      }
      return this._addMeta(l, t);
    }
    visitPragmaDirective(t) {
      const e = t.pragmaValue().version();
      let i = this._toText(t.pragmaValue());
      (e == null ? void 0 : e.children) && (i = e.children.map((r) => this._toText(r)).join(" "));
      const s = { type: "PragmaDirective", name: this._toText(t.pragmaName()), value: i };
      return this._addMeta(s, t);
    }
    visitInheritanceSpecifier(t) {
      const e = t.expressionList(), i = e ? e.expression_list().map((r) => this.visitExpression(r)) : [], s = { type: "InheritanceSpecifier", baseName: this.visitUserDefinedTypeName(t.userDefinedTypeName()), arguments: i };
      return this._addMeta(s, t);
    }
    visitModifierInvocation(t) {
      const e = t.expressionList();
      let i;
      e != null ? i = e.expression_list().map((r) => this.visit(r)) : t.children && t.children.length > 1 ? i = [] : i = null;
      const s = { type: "ModifierInvocation", name: this._toText(t.identifier()), arguments: i };
      return this._addMeta(s, t);
    }
    visitFunctionTypeName(t) {
      const e = t.functionTypeParameterList(0).functionTypeParameter_list().map((l) => this.visitFunctionTypeParameter(l));
      let i = [];
      t.functionTypeParameterList_list().length > 1 && (i = t.functionTypeParameterList(1).functionTypeParameter_list().map((l) => this.visitFunctionTypeParameter(l)));
      let s = "default";
      t.InternalKeyword_list().length > 0 ? s = "internal" : t.ExternalKeyword_list().length > 0 && (s = "external");
      let r = null;
      t.stateMutability_list().length > 0 && (r = this._toText(t.stateMutability(0)));
      const n = { type: "FunctionTypeName", parameterTypes: e, returnTypes: i, visibility: s, stateMutability: r };
      return this._addMeta(n, t);
    }
    visitFunctionTypeParameter(t) {
      let e = null;
      t.storageLocation() && (e = this._toText(t.storageLocation()));
      const i = { type: "VariableDeclaration", typeName: this.visitTypeName(t.typeName()), name: null, identifier: null, storageLocation: e, isStateVar: false, isIndexed: false, expression: null };
      return this._addMeta(i, t);
    }
    visitThrowStatement(t) {
      const e = { type: "ThrowStatement" };
      return this._addMeta(e, t);
    }
    visitReturnStatement(t) {
      let e = null;
      const i = t.expression();
      i && (e = this.visitExpression(i));
      const s = { type: "ReturnStatement", expression: e };
      return this._addMeta(s, t);
    }
    visitEmitStatement(t) {
      const e = { type: "EmitStatement", eventCall: this.visitFunctionCall(t.functionCall()) };
      return this._addMeta(e, t);
    }
    visitCustomErrorDefinition(t) {
      const e = { type: "CustomErrorDefinition", name: this._toText(t.identifier()), parameters: this.visitParameterList(t.parameterList()) };
      return this._addMeta(e, t);
    }
    visitTypeDefinition(t) {
      const e = { type: "TypeDefinition", name: this._toText(t.identifier()), definition: this.visitElementaryTypeName(t.elementaryTypeName()) };
      return this._addMeta(e, t);
    }
    visitRevertStatement(t) {
      const e = { type: "RevertStatement", revertCall: this.visitFunctionCall(t.functionCall()) };
      return this._addMeta(e, t);
    }
    visitFunctionCall(t) {
      let e = [];
      const i = [], s = [], r = t.functionCallArguments(), n = r.expressionList(), l = r.nameValueList();
      if (n) e = n.expression_list().map((u) => this.visitExpression(u));
      else if (l) for (const u of l.nameValue_list()) e.push(this.visitExpression(u.expression())), i.push(this._toText(u.identifier())), s.push(this.visitIdentifier(u.identifier()));
      const h = { type: "FunctionCall", expression: this.visitExpression(t.expression()), arguments: e, names: i, identifiers: s };
      return this._addMeta(h, t);
    }
    visitStructDefinition(t) {
      const e = { type: "StructDefinition", name: this._toText(t.identifier()), members: t.variableDeclaration_list().map((i) => this.visitVariableDeclaration(i)) };
      return this._addMeta(e, t);
    }
    visitWhileStatement(t) {
      const e = { type: "WhileStatement", condition: this.visitExpression(t.expression()), body: this.visitStatement(t.statement()) };
      return this._addMeta(e, t);
    }
    visitDoWhileStatement(t) {
      const e = { type: "DoWhileStatement", condition: this.visitExpression(t.expression()), body: this.visitStatement(t.statement()) };
      return this._addMeta(e, t);
    }
    visitIfStatement(t) {
      const e = this.visitStatement(t.statement(0));
      let i = null;
      t.statement_list().length > 1 && (i = this.visitStatement(t.statement(1)));
      const s = { type: "IfStatement", condition: this.visitExpression(t.expression()), trueBody: e, falseBody: i };
      return this._addMeta(s, t);
    }
    visitTryStatement(t) {
      let e = null;
      const i = t.returnParameters();
      i && (e = this.visitReturnParameters(i));
      const s = t.catchClause_list().map((n) => this.visitCatchClause(n)), r = { type: "TryStatement", expression: this.visitExpression(t.expression()), returnParameters: e, body: this.visitBlock(t.block()), catchClauses: s };
      return this._addMeta(r, t);
    }
    visitCatchClause(t) {
      let e = null;
      if (t.parameterList() && (e = this.visitParameterList(t.parameterList())), t.identifier() && this._toText(t.identifier()) !== "Error" && this._toText(t.identifier()) !== "Panic") throw new Error('Expected "Error" or "Panic" identifier in catch clause');
      let i = null;
      const s = t.identifier();
      s && (i = this._toText(s));
      const r = { type: "CatchClause", isReasonStringType: i === "Error", kind: i, parameters: e, body: this.visitBlock(t.block()) };
      return this._addMeta(r, t);
    }
    visitExpressionStatement(t) {
      if (!t) return null;
      const e = { type: "ExpressionStatement", expression: this.visitExpression(t.expression()) };
      return this._addMeta(e, t);
    }
    visitNumberLiteral(t) {
      var e;
      const i = this._toText(t.getChild(0));
      let s = null;
      ((e = t.children) == null ? void 0 : e.length) === 2 && (s = this._toText(t.getChild(1)));
      const r = { type: "NumberLiteral", number: i, subdenomination: s };
      return this._addMeta(r, t);
    }
    visitMappingKey(t) {
      if (t.elementaryTypeName()) return this.visitElementaryTypeName(t.elementaryTypeName());
      if (t.userDefinedTypeName()) return this.visitUserDefinedTypeName(t.userDefinedTypeName());
      throw new Error("Expected MappingKey to have either elementaryTypeName or userDefinedTypeName");
    }
    visitMapping(t) {
      const e = t.mappingKeyName(), i = t.mappingValueName(), s = { type: "Mapping", keyType: this.visitMappingKey(t.mappingKey()), keyName: e ? this.visitIdentifier(e.identifier()) : null, valueType: this.visitTypeName(t.typeName()), valueName: i ? this.visitIdentifier(i.identifier()) : null };
      return this._addMeta(s, t);
    }
    visitModifierDefinition(t) {
      let e = null;
      t.parameterList() && (e = this.visitParameterList(t.parameterList()));
      let i = false;
      t.VirtualKeyword_list().length > 0 && (i = true);
      let s;
      const r = t.overrideSpecifier_list();
      r.length === 0 ? s = null : s = r[0].userDefinedTypeName_list().map((u) => this.visitUserDefinedTypeName(u));
      let n = null;
      const l = t.block();
      l && (n = this.visitBlock(l));
      const h = { type: "ModifierDefinition", name: this._toText(t.identifier()), parameters: e, body: n, isVirtual: i, override: s };
      return this._addMeta(h, t);
    }
    visitUncheckedStatement(t) {
      const e = { type: "UncheckedStatement", block: this.visitBlock(t.block()) };
      return this._addMeta(e, t);
    }
    visitExpression(t) {
      let e;
      switch (t.children.length) {
        case 1: {
          const i = t.primaryExpression();
          if (i == null) throw new Error("Assertion error: primary expression should exist when children length is 1");
          return this.visitPrimaryExpression(i);
        }
        case 2:
          if (e = this._toText(t.getChild(0)), e === "new") {
            const i = { type: "NewExpression", typeName: this.visitTypeName(t.typeName()) };
            return this._addMeta(i, t);
          }
          if (Mn.includes(e)) {
            const i = { type: "UnaryOperation", operator: e, subExpression: this.visitExpression(t.expression(0)), isPrefix: true };
            return this._addMeta(i, t);
          }
          if (e = this._toText(t.getChild(1)), ["++", "--"].includes(e)) {
            const i = { type: "UnaryOperation", operator: e, subExpression: this.visitExpression(t.expression(0)), isPrefix: false };
            return this._addMeta(i, t);
          }
          break;
        case 3:
          if (this._toText(t.getChild(0)) === "(" && this._toText(t.getChild(2)) === ")") {
            const i = { type: "TupleExpression", components: [this.visitExpression(t.expression(0))], isArray: false };
            return this._addMeta(i, t);
          }
          if (e = this._toText(t.getChild(1)), e === ".") {
            const i = { type: "MemberAccess", expression: this.visitExpression(t.expression(0)), memberName: this._toText(t.identifier()) };
            return this._addMeta(i, t);
          }
          if (Vn(e)) {
            const i = { type: "BinaryOperation", operator: e, left: this.visitExpression(t.expression(0)), right: this.visitExpression(t.expression(1)) };
            return this._addMeta(i, t);
          }
          break;
        case 4:
          if (this._toText(t.getChild(1)) === "(" && this._toText(t.getChild(3)) === ")") {
            let i = [];
            const s = [], r = [], n = t.functionCallArguments();
            if (n.expressionList()) i = n.expressionList().expression_list().map((h) => this.visitExpression(h));
            else if (n.nameValueList()) for (const h of n.nameValueList().nameValue_list()) i.push(this.visitExpression(h.expression())), s.push(this._toText(h.identifier())), r.push(this.visitIdentifier(h.identifier()));
            const l = { type: "FunctionCall", expression: this.visitExpression(t.expression(0)), arguments: i, names: s, identifiers: r };
            return this._addMeta(l, t);
          }
          if (this._toText(t.getChild(1)) === "[" && this._toText(t.getChild(3)) === "]") {
            if (t.getChild(2).getText() === ":") {
              const s = { type: "IndexRangeAccess", base: this.visitExpression(t.expression(0)) };
              return this._addMeta(s, t);
            }
            const i = { type: "IndexAccess", base: this.visitExpression(t.expression(0)), index: this.visitExpression(t.expression(1)) };
            return this._addMeta(i, t);
          }
          if (this._toText(t.getChild(1)) === "{" && this._toText(t.getChild(3)) === "}") {
            const i = { type: "NameValueExpression", expression: this.visitExpression(t.expression(0)), arguments: this.visitNameValueList(t.nameValueList()) };
            return this._addMeta(i, t);
          }
          break;
        case 5:
          if (this._toText(t.getChild(1)) === "?" && this._toText(t.getChild(3)) === ":") {
            const i = { type: "Conditional", condition: this.visitExpression(t.expression(0)), trueExpression: this.visitExpression(t.expression(1)), falseExpression: this.visitExpression(t.expression(2)) };
            return this._addMeta(i, t);
          }
          if (this._toText(t.getChild(1)) === "[" && this._toText(t.getChild(2)) === ":" && this._toText(t.getChild(4)) === "]") {
            const i = { type: "IndexRangeAccess", base: this.visitExpression(t.expression(0)), indexEnd: this.visitExpression(t.expression(1)) };
            return this._addMeta(i, t);
          } else if (this._toText(t.getChild(1)) === "[" && this._toText(t.getChild(3)) === ":" && this._toText(t.getChild(4)) === "]") {
            const i = { type: "IndexRangeAccess", base: this.visitExpression(t.expression(0)), indexStart: this.visitExpression(t.expression(1)) };
            return this._addMeta(i, t);
          }
          break;
        case 6:
          if (this._toText(t.getChild(1)) === "[" && this._toText(t.getChild(3)) === ":" && this._toText(t.getChild(5)) === "]") {
            const i = { type: "IndexRangeAccess", base: this.visitExpression(t.expression(0)), indexStart: this.visitExpression(t.expression(1)), indexEnd: this.visitExpression(t.expression(2)) };
            return this._addMeta(i, t);
          }
          break;
      }
      throw new Error("Unrecognized expression");
    }
    visitNameValueList(t) {
      const e = [], i = [], s = [];
      for (const n of t.nameValue_list()) e.push(this._toText(n.identifier())), i.push(this.visitIdentifier(n.identifier())), s.push(this.visitExpression(n.expression()));
      const r = { type: "NameValueList", names: e, identifiers: i, arguments: s };
      return this._addMeta(r, t);
    }
    visitFileLevelConstant(t) {
      const e = this.visitTypeName(t.typeName()), i = this._toText(t.identifier()), s = this.visitExpression(t.expression()), r = { type: "FileLevelConstant", typeName: e, name: i, initialValue: s, isDeclaredConst: true, isImmutable: false };
      return this._addMeta(r, t);
    }
    visitForStatement(t) {
      let e = this.visitExpressionStatement(t.expressionStatement());
      e && (e = e.expression);
      const i = { type: "ForStatement", initExpression: t.simpleStatement() ? this.visitSimpleStatement(t.simpleStatement()) : null, conditionExpression: e, loopExpression: { type: "ExpressionStatement", expression: t.expression() ? this.visitExpression(t.expression()) : null }, body: this.visitStatement(t.statement()) };
      return this._addMeta(i, t);
    }
    visitHexLiteral(t) {
      const e = t.HexLiteralFragment_list().map((s) => this._toText(s)).map((s) => s.substring(4, s.length - 1)), i = { type: "HexLiteral", value: e.join(""), parts: e };
      return this._addMeta(i, t);
    }
    visitPrimaryExpression(t) {
      if (t.BooleanLiteral()) {
        const e = { type: "BooleanLiteral", value: this._toText(t.BooleanLiteral()) === "true" };
        return this._addMeta(e, t);
      }
      if (t.hexLiteral()) return this.visitHexLiteral(t.hexLiteral());
      if (t.stringLiteral()) {
        const e = t.stringLiteral().StringLiteralFragment_list().map((r) => {
          let n = this._toText(r);
          const l = n.slice(0, 7) === "unicode";
          l && (n = n.slice(7));
          const h = n[0] === "'", u = n.substring(1, n.length - 1);
          return { value: h ? u.replace(new RegExp("\\\\'", "g"), "'") : u.replace(new RegExp('\\\\"', "g"), '"'), isUnicode: l };
        }), i = e.map((r) => r.value), s = { type: "StringLiteral", value: i.join(""), parts: i, isUnicode: e.map((r) => r.isUnicode) };
        return this._addMeta(s, t);
      }
      if (t.numberLiteral()) return this.visitNumberLiteral(t.numberLiteral());
      if (t.TypeKeyword()) {
        const e = { type: "Identifier", name: "type" };
        return this._addMeta(e, t);
      }
      return t.typeName() ? this.visitTypeName(t.typeName()) : this.visit(t.getChild(0));
    }
    visitTupleExpression(t) {
      const e = t.children.slice(1, -1), s = { type: "TupleExpression", components: this._mapCommasToNulls(e).map((r) => r === null ? null : this.visit(r)), isArray: this._toText(t.getChild(0)) === "[" };
      return this._addMeta(s, t);
    }
    buildIdentifierList(t) {
      const e = t.children.slice(1, -1), i = t.identifier_list();
      let s = 0;
      return this._mapCommasToNulls(e).map((r) => {
        if (r === null) return null;
        const n = i[s];
        s++;
        const l = { type: "VariableDeclaration", name: this._toText(n), identifier: this.visitIdentifier(n), isStateVar: false, isIndexed: false, typeName: null, storageLocation: null, expression: null };
        return this._addMeta(l, n);
      });
    }
    buildVariableDeclarationList(t) {
      var _a;
      const e = t.variableDeclaration_list();
      let i = 0;
      return this._mapCommasToNulls((_a = t.children) != null ? _a : []).map((s) => {
        if (!s) return null;
        const r = e[i];
        i++;
        let n = null;
        r.storageLocation() && (n = this._toText(r.storageLocation()));
        const l = r.identifier(), h = { type: "VariableDeclaration", name: this._toText(l), identifier: this.visitIdentifier(l), typeName: this.visitTypeName(r.typeName()), storageLocation: n, isStateVar: false, isIndexed: false, expression: null };
        return this._addMeta(h, r);
      });
    }
    visitImportDirective(t) {
      const e = this._toText(t.importPath());
      let i = null, s = null, r = null, n = null;
      if (t.importDeclaration_list().length > 0) r = t.importDeclaration_list().map((p) => {
        const m = this._toText(p.identifier(0));
        let y = null;
        return p.identifier_list().length > 1 && (y = this._toText(p.identifier(1))), [m, y];
      }), n = t.importDeclaration_list().map((p) => {
        const m = this.visitIdentifier(p.identifier(0));
        let y = null;
        return p.identifier_list().length > 1 && (y = this.visitIdentifier(p.identifier(1))), [m, y];
      });
      else {
        const p = t.identifier_list();
        if (p.length !== 0) if (p.length === 1) {
          const m = t.identifier(0);
          i = this._toText(m), s = this.visitIdentifier(m);
        } else if (p.length === 2) {
          const m = t.identifier(1);
          i = this._toText(m), s = this.visitIdentifier(m);
        } else throw new Error("Assertion error: an import should have one or two identifiers");
      }
      const l = e.substring(1, e.length - 1), h = { type: "StringLiteral", value: l, parts: [l], isUnicode: [false] }, u = { type: "ImportDirective", path: l, pathLiteral: this._addMeta(h, t.importPath()), unitAlias: i, unitAliasIdentifier: s, symbolAliases: r, symbolAliasesIdentifiers: n };
      return this._addMeta(u, t);
    }
    buildEventParameterList(t) {
      return t.eventParameter_list().map((e) => {
        const i = this.visit(e.typeName()), s = e.identifier(), r = s ? this._toText(s) : null;
        return { type: "VariableDeclaration", typeName: i, name: r, isStateVar: false, isIndexed: !!e.IndexedKeyword() };
      });
    }
    visitReturnParameters(t) {
      return this.visitParameterList(t.parameterList());
    }
    visitParameterList(t) {
      return t.parameter_list().map((e) => this.visitParameter(e));
    }
    visitInlineAssemblyStatement(t) {
      let e = null;
      t.StringLiteralFragment() && (e = this._toText(t.StringLiteralFragment()), e = e.substring(1, e.length - 1));
      const i = [], s = t.inlineAssemblyStatementFlag();
      if (s) {
        const n = this._toText(s.stringLiteral());
        i.push(n.slice(1, n.length - 1));
      }
      const r = { type: "InlineAssemblyStatement", language: e, flags: i, body: this.visitAssemblyBlock(t.assemblyBlock()) };
      return this._addMeta(r, t);
    }
    visitAssemblyBlock(t) {
      const i = { type: "AssemblyBlock", operations: t.assemblyItem_list().map((s) => this.visitAssemblyItem(s)) };
      return this._addMeta(i, t);
    }
    visitAssemblyItem(t) {
      let e;
      if (t.hexLiteral()) return this.visitHexLiteral(t.hexLiteral());
      if (t.stringLiteral()) {
        e = this._toText(t.stringLiteral());
        const i = e.substring(1, e.length - 1), s = { type: "StringLiteral", value: i, parts: [i], isUnicode: [false] };
        return this._addMeta(s, t);
      }
      if (t.BreakKeyword()) {
        const i = { type: "Break" };
        return this._addMeta(i, t);
      }
      if (t.ContinueKeyword()) {
        const i = { type: "Continue" };
        return this._addMeta(i, t);
      }
      return this.visit(t.getChild(0));
    }
    visitAssemblyExpression(t) {
      return this.visit(t.getChild(0));
    }
    visitAssemblyCall(t) {
      const e = this._toText(t.getChild(0)), i = t.assemblyExpression_list().map((r) => this.visitAssemblyExpression(r)), s = { type: "AssemblyCall", functionName: e, arguments: i };
      return this._addMeta(s, t);
    }
    visitAssemblyLiteral(t) {
      let e;
      if (t.stringLiteral()) {
        e = this._toText(t);
        const i = e.substring(1, e.length - 1), s = { type: "StringLiteral", value: i, parts: [i], isUnicode: [false] };
        return this._addMeta(s, t);
      }
      if (t.BooleanLiteral()) {
        const i = { type: "BooleanLiteral", value: this._toText(t.BooleanLiteral()) === "true" };
        return this._addMeta(i, t);
      }
      if (t.DecimalNumber()) {
        const i = { type: "DecimalNumber", value: this._toText(t) };
        return this._addMeta(i, t);
      }
      if (t.HexNumber()) {
        const i = { type: "HexNumber", value: this._toText(t) };
        return this._addMeta(i, t);
      }
      if (t.hexLiteral()) return this.visitHexLiteral(t.hexLiteral());
      throw new Error("Should never reach here");
    }
    visitAssemblySwitch(t) {
      const e = { type: "AssemblySwitch", expression: this.visitAssemblyExpression(t.assemblyExpression()), cases: t.assemblyCase_list().map((i) => this.visitAssemblyCase(i)) };
      return this._addMeta(e, t);
    }
    visitAssemblyCase(t) {
      let e = null;
      this._toText(t.getChild(0)) === "case" && (e = this.visitAssemblyLiteral(t.assemblyLiteral()));
      const i = { type: "AssemblyCase", block: this.visitAssemblyBlock(t.assemblyBlock()), value: e, default: e === null };
      return this._addMeta(i, t);
    }
    visitAssemblyLocalDefinition(t) {
      const e = t.assemblyIdentifierOrList();
      let i;
      e.identifier() ? i = [this.visitIdentifier(e.identifier())] : e.assemblyMember() ? i = [this.visitAssemblyMember(e.assemblyMember())] : i = e.assemblyIdentifierList().identifier_list().map((n) => this.visitIdentifier(n));
      let s = null;
      t.assemblyExpression() && (s = this.visitAssemblyExpression(t.assemblyExpression()));
      const r = { type: "AssemblyLocalDefinition", names: i, expression: s };
      return this._addMeta(r, t);
    }
    visitAssemblyFunctionDefinition(t) {
      const e = t.assemblyIdentifierList(), i = e ? e.identifier_list().map((l) => this.visitIdentifier(l)) : [], s = t.assemblyFunctionReturns(), r = s ? s.assemblyIdentifierList().identifier_list().map((l) => this.visitIdentifier(l)) : [], n = { type: "AssemblyFunctionDefinition", name: this._toText(t.identifier()), arguments: i, returnArguments: r, body: this.visitAssemblyBlock(t.assemblyBlock()) };
      return this._addMeta(n, t);
    }
    visitAssemblyAssignment(t) {
      const e = t.assemblyIdentifierOrList();
      let i;
      e.identifier() ? i = [this.visitIdentifier(e.identifier())] : e.assemblyMember() ? i = [this.visitAssemblyMember(e.assemblyMember())] : i = e.assemblyIdentifierList().identifier_list().map((r) => this.visitIdentifier(r));
      const s = { type: "AssemblyAssignment", names: i, expression: this.visitAssemblyExpression(t.assemblyExpression()) };
      return this._addMeta(s, t);
    }
    visitAssemblyMember(t) {
      const [e, i] = t.identifier_list(), s = { type: "AssemblyMemberAccess", expression: this.visitIdentifier(e), memberName: this.visitIdentifier(i) };
      return this._addMeta(s, t);
    }
    visitLabelDefinition(t) {
      const e = { type: "LabelDefinition", name: this._toText(t.identifier()) };
      return this._addMeta(e, t);
    }
    visitAssemblyStackAssignment(t) {
      const e = { type: "AssemblyStackAssignment", name: this._toText(t.identifier()), expression: this.visitAssemblyExpression(t.assemblyExpression()) };
      return this._addMeta(e, t);
    }
    visitAssemblyFor(t) {
      const e = { type: "AssemblyFor", pre: this.visit(t.getChild(1)), condition: this.visit(t.getChild(2)), post: this.visit(t.getChild(3)), body: this.visit(t.getChild(4)) };
      return this._addMeta(e, t);
    }
    visitAssemblyIf(t) {
      const e = { type: "AssemblyIf", condition: this.visitAssemblyExpression(t.assemblyExpression()), body: this.visitAssemblyBlock(t.assemblyBlock()) };
      return this._addMeta(e, t);
    }
    visitContinueStatement(t) {
      const e = { type: "ContinueStatement" };
      return this._addMeta(e, t);
    }
    visitBreakStatement(t) {
      const e = { type: "BreakStatement" };
      return this._addMeta(e, t);
    }
    _toText(t) {
      const e = t.getText();
      if (e == null) throw new Error("Assertion error: text should never be undefined");
      return e;
    }
    _stateMutabilityToText(t) {
      if (t.PureKeyword()) return "pure";
      if (t.ConstantKeyword()) return "constant";
      if (t.PayableKeyword()) return "payable";
      if (t.ViewKeyword()) return "view";
      throw new Error("Assertion error: non-exhaustive stateMutability check");
    }
    _loc(t) {
      return { start: { line: t.start.line, column: t.start.column }, end: { line: t.stop ? t.stop.line : t.start.line, column: t.stop ? t.stop.column : t.start.column } };
    }
    _range(t) {
      var _a;
      var e;
      return [t.start.start, (_a = (e = t.stop) == null ? void 0 : e.stop) != null ? _a : t.start.start];
    }
    _addMeta(t, e) {
      const i = { type: t.type };
      return this.options.loc === true && (t.loc = this._loc(e)), this.options.range === true && (t.range = this._range(e)), { ...i, ...t };
    }
    _mapCommasToNulls(t) {
      if (t.length === 0) return [];
      const e = [];
      let i = true;
      for (const s of t) if (i) this._toText(s) === "," ? e.push(null) : (e.push(s), i = false);
      else {
        if (this._toText(s) !== ",") throw new Error("expected comma");
        i = true;
      }
      return i && e.push(null), e;
    }
  };
  function Vn(t) {
    return Hn.includes(t);
  }
  var Bn = class extends wn {
    constructor() {
      super(), this._errors = [];
    }
    syntaxError(t, e, i, s, r) {
      this._errors.push({ message: r, line: i, column: s });
    }
    getErrors() {
      return this._errors;
    }
    hasErrors() {
      return this._errors.length > 0;
    }
  }, zn = Bn, jn = { 1: "pragma", 2: ";", 3: "*", 4: "||", 5: "^", 6: "~", 7: ">=", 8: ">", 9: "<", 10: "<=", 11: "=", 12: "as", 13: "import", 14: "from", 15: "{", 16: ",", 17: "}", 18: "abstract", 19: "contract", 20: "interface", 21: "library", 22: "is", 23: "(", 24: ")", 25: "error", 26: "using", 27: "for", 28: "|", 29: "&", 30: "+", 31: "-", 32: "/", 33: "%", 34: "==", 35: "!=", 36: "struct", 37: "modifier", 38: "function", 39: "returns", 40: "event", 41: "enum", 42: "[", 43: "]", 44: "address", 45: ".", 46: "mapping", 47: "=>", 48: "memory", 49: "storage", 50: "calldata", 51: "if", 52: "else", 53: "try", 54: "catch", 55: "while", 56: "unchecked", 57: "assembly", 58: "do", 59: "return", 60: "throw", 61: "emit", 62: "revert", 63: "var", 64: "bool", 65: "string", 66: "byte", 67: "++", 68: "--", 69: "new", 70: ":", 71: "delete", 72: "!", 73: "**", 74: "<<", 75: ">>", 76: "&&", 77: "?", 78: "|=", 79: "^=", 80: "&=", 81: "<<=", 82: ">>=", 83: "+=", 84: "-=", 85: "*=", 86: "/=", 87: "%=", 88: "let", 89: ":=", 90: "=:", 91: "switch", 92: "case", 93: "default", 94: "->", 95: "callback", 96: "override", 97: "Int", 98: "Uint", 99: "Byte", 100: "Fixed", 101: "Ufixed", 102: "BooleanLiteral", 103: "DecimalNumber", 104: "HexNumber", 105: "NumberUnit", 106: "HexLiteralFragment", 107: "ReservedKeyword", 108: "anonymous", 109: "break", 110: "constant", 111: "transient", 112: "immutable", 113: "continue", 114: "leave", 115: "external", 116: "indexed", 117: "internal", 118: "payable", 119: "private", 120: "public", 121: "virtual", 122: "pure", 123: "type", 124: "view", 125: "global", 126: "constructor", 127: "fallback", 128: "receive", 129: "Identifier", 130: "StringLiteralFragment", 131: "VersionLiteral", 132: "WS", 133: "COMMENT", 134: "LINE_COMMENT" }, qn = ["var", "bool", "address", "string", "Int", "Uint", "Byte", "Fixed", "UFixed"];
  function Wn(t) {
    return t === "Identifier" || t === "from" ? "Identifier" : t === "TrueLiteral" || t === "FalseLiteral" ? "Boolean" : t === "VersionLiteral" ? "Version" : t === "StringLiteral" ? "String" : qn.includes(t) ? "Type" : t === "NumberUnit" ? "Subdenomination" : t === "DecimalNumber" ? "Numeric" : t === "HexLiteral" ? "Hex" : t === "ReservedKeyword" ? "Reserved" : /^\W+$/.test(t) ? "Punctuator" : "Keyword";
  }
  function xr(t) {
    return [t.start, t.stop + 1];
  }
  function yr(t) {
    var _a;
    const i = ((_a = t.text) != null ? _a : "").split(/\r?\n/), s = i.length - 1;
    return { start: { line: t.line, column: t.column }, end: { line: t.line + s, column: i[s].length + (s === 0 ? t.column : 0) } };
  }
  function gr(t, e) {
    return t.map((i) => {
      const r = { type: Wn(jn[i.type.toString()]), value: i.text };
      return e.range === true && (r.range = xr(i)), e.loc === true && (r.loc = yr(i)), r;
    });
  }
  function Yn(t, e, i) {
    return t.filter((s) => s.channel === e).map((s) => {
      const r = s.text.startsWith("//") ? { type: "LineComment", value: s.text.slice(2) } : { type: "BlockComment", value: s.text.slice(2, -2) };
      return i.range === true && (r.range = xr(s)), i.loc === true && (r.loc = yr(s)), r;
    });
  }
  var Ci = class extends Error {
    constructor(t) {
      super();
      const { message: e, line: i, column: s } = t.errors[0];
      this.message = `${e} (${i}:${s})`, this.errors = t.errors, Error.captureStackTrace !== void 0 ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack;
    }
  };
  function Tr(t, e = {}) {
    const i = new Ts(t), s = new Cs(i);
    return gr(s.getAllTokens(), e);
  }
  function Er(t, e = {}) {
    const i = new Ts(t), s = new Cs(i), r = new An(s), n = new c(r), l = new zn();
    s.removeErrorListeners(), s.addErrorListener(l), n.removeErrorListeners(), n.addErrorListener(l), n.buildParseTrees = true;
    const h = n.sourceUnit(), u = new Kn(e);
    u.visit(h);
    const p = u.result;
    if (p === null) throw new Error("ast should never be null");
    if (e.tokens === true && (p.tokens = gr(r.tokens, e)), e.comments === true && (p.comments = Yn(r.tokens, s.channelNames.indexOf("HIDDEN"), e)), l.hasErrors()) {
      if (e.tolerant !== true) throw new Ci({ errors: l.getErrors() });
      p.errors = l.getErrors();
    }
    return p;
  }
  function Gn(t) {
    if (typeof t != "object" || t === null) return false;
    const e = t;
    return Object.prototype.hasOwnProperty.call(e, "type") && typeof e.type == "string" ? Fn.includes(e.type) : false;
  }
  function xe(t, e, i) {
    if (Array.isArray(t) && t.forEach((n) => xe(n, e, i)), !Gn(t)) return;
    let s = true;
    if (e[t.type] !== void 0 && (s = e[t.type](t, i)), s === false) return;
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && xe(t[n], e, t);
    const r = t.type + ":exit";
    e[r] !== void 0 && e[r](t, i);
  }
  var $n = { ParserError: Ci, parse: Er, tokenize: Tr, visit: xe };
  return bi;
}
var r1 = s1();
const Oi = (U) => {
  switch (U.type) {
    case "SourceUnit": {
      const I = "// SPDX-License-Identifier: GPL-3.0", $ = U.children.map((it) => Oi(it)).join(`
`);
      return `${I}
${$}`;
    }
    case "PragmaDirective":
      return `pragma solidity ${U.value};`;
    case "ContractDefinition":
      return `contract ${U.name} {
${U.subNodes.map((I) => Oi(I)).join(`
`)}
}`;
    case "StateVariableDeclaration":
      return U.variables.map((I) => {
        if (I.typeName && "name" in I.typeName) return `${I.typeName.name} ${I.name};`;
        throw new Error("this variable case is not yet implemented in fromAstToSolidity");
      }).join(`
`);
    case "ElementaryTypeName":
      return U.name;
    default:
      return "";
  }
}, n1 = (U) => r1.parse(U), zr = c.forwardRef(({ className: U, ...I }, $) => c.createElement("textarea", { className: Qe("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", U), ref: $, ...I }));
zr.displayName = "Textarea";
function ye({ value: U, onChange: I, name: $ }) {
  return jsxs("div", { className: "flex-1", children: [jsxs("div", { className: "flex items-center justify-between rounded-t border-x border-t p-2", children: [jsx("span", { className: "font-semibold text-lg", children: $ }), jsx("div", { className: "flex gap-1", children: jsx(De, { variant: "outline", size: "icon", onClick: () => {
    I("");
  }, children: jsx(EraserIcon, { className: "size-4" }) }) })] }), jsx(zr, { value: U, onChange: (it) => {
    I(it.target.value);
  }, className: "whitespace-pre rounded-t-none", rows: 30 })] });
}
const d1 = function() {
  const [I, $] = c__default.useState(""), [it, Nt] = c__default.useState(""), [It, qt] = c__default.useState("json-to-solidity");
  return jsxs("div", { className: "p-10", children: [jsx("h1", { className: "font-bold text-xl", children: "Jsonlidity Convertion" }), jsx("p", { className: "text-muted-foreground", children: "Jsonlidity convert AST code to solidity source code and reversly" }), jsxs("div", { className: "flex flex-col gap-2", children: [jsxs("div", { className: "flex justify-end gap-2", children: [jsx(De, { variant: "outline", size: "icon", onClick: () => {
    qt(It === "json-to-solidity" ? "solidity-to-json" : "json-to-solidity");
  }, children: jsx(RefreshCwIcon, { className: "size-4" }) }), jsx(De, { variant: "outline", size: "icon", onClick: async () => {
    It === "json-to-solidity" ? Nt(Oi(JSON.parse(I))) : $(JSON.stringify(n1(it), null, 2));
  }, children: jsx(PlayIcon, { className: "size-4" }) })] }), jsx("div", { className: "jsutify-between flex gap-2", children: It === "json-to-solidity" ? jsxs(Fragment, { children: [jsx(ye, { name: "AST", value: I, onChange: $ }), jsx(ye, { name: "Solidity", value: it, onChange: Nt })] }) : jsxs(Fragment, { children: [jsx(ye, { name: "Solidity", value: it, onChange: Nt }), jsx(ye, { name: "AST", value: I, onChange: $ })] }) })] })] });
};

export { d1 as component };
//# sourceMappingURL=jsonlidity-CY9FHlNX.mjs.map
