import {
  E as it,
  g as tn,
  h as $e,
  i as rn,
  j as sn,
  r as Mr,
  o as Nt,
  c as Pt,
  d as L,
  a as qe,
  w as Je,
  b as At,
  F as Tr,
  k as nn,
  f as an,
  t as on,
  p as ln,
  e as un,
  _ as dn,
} from "./index-eaf1bec0.js";
const cn = "/assets/bg2-bb0e1d85.png";
function Br(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: fn } = Object.prototype,
  { getPrototypeOf: er } = Object,
  ht = ((e) => (t) => {
    const r = fn.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  X = (e) => ((e = e.toLowerCase()), (t) => ht(t) === e),
  mt = (e) => (t) => typeof t === e,
  { isArray: xe } = Array,
  Ce = mt("undefined");
function hn(e) {
  return (
    e !== null &&
    !Ce(e) &&
    e.constructor !== null &&
    !Ce(e.constructor) &&
    j(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Gr = X("ArrayBuffer");
function mn(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Gr(e.buffer)),
    t
  );
}
const yn = mt("string"),
  j = mt("function"),
  zr = mt("number"),
  yt = (e) => e !== null && typeof e == "object",
  pn = (e) => e === !0 || e === !1,
  Qe = (e) => {
    if (ht(e) !== "object") return !1;
    const t = er(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  _n = X("Date"),
  wn = X("File"),
  Sn = X("Blob"),
  gn = X("FileList"),
  kn = (e) => yt(e) && j(e.pipe),
  On = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (j(e.append) &&
          ((t = ht(e)) === "formdata" ||
            (t === "object" &&
              j(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  bn = X("URLSearchParams"),
  Dn = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ie(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let s, n;
  if ((typeof e != "object" && (e = [e]), xe(e)))
    for (s = 0, n = e.length; s < n; s++) t.call(null, e[s], s, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let o;
    for (s = 0; s < a; s++) (o = i[s]), t.call(null, e[o], o, e);
  }
}
function $r(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let s = r.length,
    n;
  for (; s-- > 0; ) if (((n = r[s]), t === n.toLowerCase())) return n;
  return null;
}
const qr = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Jr = (e) => !Ce(e) && e !== qr;
function Vt() {
  const { caseless: e } = (Jr(this) && this) || {},
    t = {},
    r = (s, n) => {
      const i = (e && $r(t, n)) || n;
      Qe(t[i]) && Qe(s)
        ? (t[i] = Vt(t[i], s))
        : Qe(s)
        ? (t[i] = Vt({}, s))
        : xe(s)
        ? (t[i] = s.slice())
        : (t[i] = s);
    };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && Ie(arguments[s], r);
  return t;
}
const vn = (e, t, r, { allOwnKeys: s } = {}) => (
    Ie(
      t,
      (n, i) => {
        r && j(n) ? (e[i] = Br(n, r)) : (e[i] = n);
      },
      { allOwnKeys: s }
    ),
    e
  ),
  Mn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Tn = (e, t, r, s) => {
    (e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  xn = (e, t, r, s) => {
    let n, i, a;
    const o = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; )
        (a = n[i]), (!s || s(a, e, t)) && !o[a] && ((t[a] = e[a]), (o[a] = !0));
      e = r !== !1 && er(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  Yn = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const s = e.indexOf(t, r);
    return s !== -1 && s === r;
  },
  Rn = (e) => {
    if (!e) return null;
    if (xe(e)) return e;
    let t = e.length;
    if (!zr(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  En = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && er(Uint8Array)),
  Nn = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e);
    let n;
    for (; (n = s.next()) && !n.done; ) {
      const i = n.value;
      t.call(e, i[0], i[1]);
    }
  },
  Pn = (e, t) => {
    let r;
    const s = [];
    for (; (r = e.exec(t)) !== null; ) s.push(r);
    return s;
  },
  An = X("HTMLFormElement"),
  Fn = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, s, n) {
      return s.toUpperCase() + n;
    }),
  xr = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  Cn = X("RegExp"),
  Zr = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      s = {};
    Ie(r, (n, i) => {
      t(n, i, e) !== !1 && (s[i] = n);
    }),
      Object.defineProperties(e, s);
  },
  Ln = (e) => {
    Zr(e, (t, r) => {
      if (j(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const s = e[r];
      if (j(s)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  Un = (e, t) => {
    const r = {},
      s = (n) => {
        n.forEach((i) => {
          r[i] = !0;
        });
      };
    return xe(e) ? s(e) : s(String(e).split(t)), r;
  },
  Wn = () => {},
  In = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ft = "abcdefghijklmnopqrstuvwxyz",
  Yr = "0123456789",
  Kr = { DIGIT: Yr, ALPHA: Ft, ALPHA_DIGIT: Ft + Ft.toUpperCase() + Yr },
  Hn = (e = 16, t = Kr.ALPHA_DIGIT) => {
    let r = "";
    const { length: s } = t;
    for (; e--; ) r += t[(Math.random() * s) | 0];
    return r;
  };
function jn(e) {
  return !!(
    e &&
    j(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Vn = (e) => {
    const t = new Array(10),
      r = (s, n) => {
        if (yt(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            t[n] = s;
            const i = xe(s) ? [] : {};
            return (
              Ie(s, (a, o) => {
                const c = r(a, n + 1);
                !Ce(c) && (i[o] = c);
              }),
              (t[n] = void 0),
              i
            );
          }
        }
        return s;
      };
    return r(e, 0);
  },
  Bn = X("AsyncFunction"),
  Gn = (e) => e && (yt(e) || j(e)) && j(e.then) && j(e.catch),
  u = {
    isArray: xe,
    isArrayBuffer: Gr,
    isBuffer: hn,
    isFormData: On,
    isArrayBufferView: mn,
    isString: yn,
    isNumber: zr,
    isBoolean: pn,
    isObject: yt,
    isPlainObject: Qe,
    isUndefined: Ce,
    isDate: _n,
    isFile: wn,
    isBlob: Sn,
    isRegExp: Cn,
    isFunction: j,
    isStream: kn,
    isURLSearchParams: bn,
    isTypedArray: En,
    isFileList: gn,
    forEach: Ie,
    merge: Vt,
    extend: vn,
    trim: Dn,
    stripBOM: Mn,
    inherits: Tn,
    toFlatObject: xn,
    kindOf: ht,
    kindOfTest: X,
    endsWith: Yn,
    toArray: Rn,
    forEachEntry: Nn,
    matchAll: Pn,
    isHTMLForm: An,
    hasOwnProperty: xr,
    hasOwnProp: xr,
    reduceDescriptors: Zr,
    freezeMethods: Ln,
    toObjectSet: Un,
    toCamelCase: Fn,
    noop: Wn,
    toFiniteNumber: In,
    findKey: $r,
    global: qr,
    isContextDefined: Jr,
    ALPHABET: Kr,
    generateString: Hn,
    isSpecCompliantForm: jn,
    toJSONObject: Vn,
    isAsyncFn: Bn,
    isThenable: Gn,
  };
function b(e, t, r, s, n) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    s && (this.request = s),
    n && (this.response = n);
}
u.inherits(b, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: u.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Qr = b.prototype,
  Xr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Xr[e] = { value: e };
});
Object.defineProperties(b, Xr);
Object.defineProperty(Qr, "isAxiosError", { value: !0 });
b.from = (e, t, r, s, n, i) => {
  const a = Object.create(Qr);
  return (
    u.toFlatObject(
      e,
      a,
      function (c) {
        return c !== Error.prototype;
      },
      (o) => o !== "isAxiosError"
    ),
    b.call(a, e.message, t, r, s, n),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const zn = null;
function Bt(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function es(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Rr(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (n, i) {
          return (n = es(n)), !r && i ? "[" + n + "]" : n;
        })
        .join(r ? "." : "")
    : t;
}
function $n(e) {
  return u.isArray(e) && !e.some(Bt);
}
const qn = u.toFlatObject(u, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function pt(e, t, r) {
  if (!u.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = u.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, re) {
        return !u.isUndefined(re[g]);
      }
    ));
  const s = r.metaTokens,
    n = r.visitor || f,
    i = r.dots,
    a = r.indexes,
    c = (r.Blob || (typeof Blob < "u" && Blob)) && u.isSpecCompliantForm(t);
  if (!u.isFunction(n)) throw new TypeError("visitor must be a function");
  function l(_) {
    if (_ === null) return "";
    if (u.isDate(_)) return _.toISOString();
    if (!c && u.isBlob(_))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(_) || u.isTypedArray(_)
      ? c && typeof Blob == "function"
        ? new Blob([_])
        : Buffer.from(_)
      : _;
  }
  function f(_, g, re) {
    let G = _;
    if (_ && !re && typeof _ == "object") {
      if (u.endsWith(g, "{}"))
        (g = s ? g : g.slice(0, -2)), (_ = JSON.stringify(_));
      else if (
        (u.isArray(_) && $n(_)) ||
        ((u.isFileList(_) || u.endsWith(g, "[]")) && (G = u.toArray(_)))
      )
        return (
          (g = es(g)),
          G.forEach(function (ze, en) {
            !(u.isUndefined(ze) || ze === null) &&
              t.append(
                a === !0 ? Rr([g], en, i) : a === null ? g : g + "[]",
                l(ze)
              );
          }),
          !1
        );
    }
    return Bt(_) ? !0 : (t.append(Rr(re, g, i), l(_)), !1);
  }
  const y = [],
    O = Object.assign(qn, {
      defaultVisitor: f,
      convertValue: l,
      isVisitable: Bt,
    });
  function D(_, g) {
    if (!u.isUndefined(_)) {
      if (y.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      y.push(_),
        u.forEach(_, function (G, ge) {
          (!(u.isUndefined(G) || G === null) &&
            n.call(t, G, u.isString(ge) ? ge.trim() : ge, g, O)) === !0 &&
            D(G, g ? g.concat(ge) : [ge]);
        }),
        y.pop();
    }
  }
  if (!u.isObject(e)) throw new TypeError("data must be an object");
  return D(e), t;
}
function Er(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function tr(e, t) {
  (this._pairs = []), e && pt(e, this, t);
}
const ts = tr.prototype;
ts.append = function (t, r) {
  this._pairs.push([t, r]);
};
ts.toString = function (t) {
  const r = t
    ? function (s) {
        return t.call(this, s, Er);
      }
    : Er;
  return this._pairs
    .map(function (n) {
      return r(n[0]) + "=" + r(n[1]);
    }, "")
    .join("&");
};
function Jn(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function rs(e, t, r) {
  if (!t) return e;
  const s = (r && r.encode) || Jn,
    n = r && r.serialize;
  let i;
  if (
    (n
      ? (i = n(t, r))
      : (i = u.isURLSearchParams(t) ? t.toString() : new tr(t, r).toString(s)),
    i)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Zn {
  constructor() {
    this.handlers = [];
  }
  use(t, r, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    u.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const Nr = Zn,
  ss = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Kn = typeof URLSearchParams < "u" ? URLSearchParams : tr,
  Qn = typeof FormData < "u" ? FormData : null,
  Xn = typeof Blob < "u" ? Blob : null,
  ei = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  ti = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  K = {
    isBrowser: !0,
    classes: { URLSearchParams: Kn, FormData: Qn, Blob: Xn },
    isStandardBrowserEnv: ei,
    isStandardBrowserWebWorkerEnv: ti,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function ri(e, t) {
  return pt(
    e,
    new K.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, s, n, i) {
          return K.isNode && u.isBuffer(r)
            ? (this.append(s, r.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function si(e) {
  return u
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function ni(e) {
  const t = {},
    r = Object.keys(e);
  let s;
  const n = r.length;
  let i;
  for (s = 0; s < n; s++) (i = r[s]), (t[i] = e[i]);
  return t;
}
function ns(e) {
  function t(r, s, n, i) {
    let a = r[i++];
    const o = Number.isFinite(+a),
      c = i >= r.length;
    return (
      (a = !a && u.isArray(n) ? n.length : a),
      c
        ? (u.hasOwnProp(n, a) ? (n[a] = [n[a], s]) : (n[a] = s), !o)
        : ((!n[a] || !u.isObject(n[a])) && (n[a] = []),
          t(r, s, n[a], i) && u.isArray(n[a]) && (n[a] = ni(n[a])),
          !o)
    );
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const r = {};
    return (
      u.forEachEntry(e, (s, n) => {
        t(si(s), n, r, 0);
      }),
      r
    );
  }
  return null;
}
const ii = { "Content-Type": void 0 };
function ai(e, t, r) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (r || JSON.stringify)(e);
}
const _t = {
  transitional: ss,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, r) {
      const s = r.getContentType() || "",
        n = s.indexOf("application/json") > -1,
        i = u.isObject(t);
      if ((i && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t)))
        return n && n ? JSON.stringify(ns(t)) : t;
      if (
        u.isArrayBuffer(t) ||
        u.isBuffer(t) ||
        u.isStream(t) ||
        u.isFile(t) ||
        u.isBlob(t)
      )
        return t;
      if (u.isArrayBufferView(t)) return t.buffer;
      if (u.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let o;
      if (i) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return ri(t, this.formSerializer).toString();
        if ((o = u.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return pt(
            o ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || n ? (r.setContentType("application/json", !1), ai(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || _t.transitional,
        s = r && r.forcedJSONParsing,
        n = this.responseType === "json";
      if (t && u.isString(t) && ((s && !this.responseType) || n)) {
        const a = !(r && r.silentJSONParsing) && n;
        try {
          return JSON.parse(t);
        } catch (o) {
          if (a)
            throw o.name === "SyntaxError"
              ? b.from(o, b.ERR_BAD_RESPONSE, this, null, this.response)
              : o;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: K.classes.FormData, Blob: K.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
u.forEach(["delete", "get", "head"], function (t) {
  _t.headers[t] = {};
});
u.forEach(["post", "put", "patch"], function (t) {
  _t.headers[t] = u.merge(ii);
});
const rr = _t,
  oi = u.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  li = (e) => {
    const t = {};
    let r, s, n;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (n = a.indexOf(":")),
              (r = a.substring(0, n).trim().toLowerCase()),
              (s = a.substring(n + 1).trim()),
              !(!r || (t[r] && oi[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(s)
                    : (t[r] = [s])
                  : (t[r] = t[r] ? t[r] + ", " + s : s));
          }),
      t
    );
  },
  Pr = Symbol("internals");
function Ee(e) {
  return e && String(e).trim().toLowerCase();
}
function Xe(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Xe) : String(e);
}
function ui(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = r.exec(e)); ) t[s[1]] = s[2];
  return t;
}
const di = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ct(e, t, r, s, n) {
  if (u.isFunction(s)) return s.call(this, t, r);
  if ((n && (t = r), !!u.isString(t))) {
    if (u.isString(s)) return t.indexOf(s) !== -1;
    if (u.isRegExp(s)) return s.test(t);
  }
}
function ci(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, s) => r.toUpperCase() + s);
}
function fi(e, t) {
  const r = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + r, {
      value: function (n, i, a) {
        return this[s].call(this, t, n, i, a);
      },
      configurable: !0,
    });
  });
}
class wt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, s) {
    const n = this;
    function i(o, c, l) {
      const f = Ee(c);
      if (!f) throw new Error("header name must be a non-empty string");
      const y = u.findKey(n, f);
      (!y || n[y] === void 0 || l === !0 || (l === void 0 && n[y] !== !1)) &&
        (n[y || c] = Xe(o));
    }
    const a = (o, c) => u.forEach(o, (l, f) => i(l, f, c));
    return (
      u.isPlainObject(t) || t instanceof this.constructor
        ? a(t, r)
        : u.isString(t) && (t = t.trim()) && !di(t)
        ? a(li(t), r)
        : t != null && i(r, t, s),
      this
    );
  }
  get(t, r) {
    if (((t = Ee(t)), t)) {
      const s = u.findKey(this, t);
      if (s) {
        const n = this[s];
        if (!r) return n;
        if (r === !0) return ui(n);
        if (u.isFunction(r)) return r.call(this, n, s);
        if (u.isRegExp(r)) return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = Ee(t)), t)) {
      const s = u.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!r || Ct(this, this[s], s, r)));
    }
    return !1;
  }
  delete(t, r) {
    const s = this;
    let n = !1;
    function i(a) {
      if (((a = Ee(a)), a)) {
        const o = u.findKey(s, a);
        o && (!r || Ct(s, s[o], o, r)) && (delete s[o], (n = !0));
      }
    }
    return u.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let s = r.length,
      n = !1;
    for (; s--; ) {
      const i = r[s];
      (!t || Ct(this, this[i], i, t, !0)) && (delete this[i], (n = !0));
    }
    return n;
  }
  normalize(t) {
    const r = this,
      s = {};
    return (
      u.forEach(this, (n, i) => {
        const a = u.findKey(s, i);
        if (a) {
          (r[a] = Xe(n)), delete r[i];
          return;
        }
        const o = t ? ci(i) : String(i).trim();
        o !== i && delete r[i], (r[o] = Xe(n)), (s[o] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      u.forEach(this, (s, n) => {
        s != null && s !== !1 && (r[n] = t && u.isArray(s) ? s.join(", ") : s);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const s = new this(t);
    return r.forEach((n) => s.set(n)), s;
  }
  static accessor(t) {
    const s = (this[Pr] = this[Pr] = { accessors: {} }).accessors,
      n = this.prototype;
    function i(a) {
      const o = Ee(a);
      s[o] || (fi(n, a), (s[o] = !0));
    }
    return u.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
wt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
u.freezeMethods(wt.prototype);
u.freezeMethods(wt);
const oe = wt;
function Lt(e, t) {
  const r = this || rr,
    s = t || r,
    n = oe.from(s.headers);
  let i = s.data;
  return (
    u.forEach(e, function (o) {
      i = o.call(r, i, n.normalize(), t ? t.status : void 0);
    }),
    n.normalize(),
    i
  );
}
function is(e) {
  return !!(e && e.__CANCEL__);
}
function He(e, t, r) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
u.inherits(He, b, { __CANCEL__: !0 });
function hi(e, t, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status)
    ? e(r)
    : t(
        new b(
          "Request failed with status code " + r.status,
          [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      );
}
const mi = K.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (r, s, n, i, a, o) {
          const c = [];
          c.push(r + "=" + encodeURIComponent(s)),
            u.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()),
            u.isString(i) && c.push("path=" + i),
            u.isString(a) && c.push("domain=" + a),
            o === !0 && c.push("secure"),
            (document.cookie = c.join("; "));
        },
        read: function (r) {
          const s = document.cookie.match(
            new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
          );
          return s ? decodeURIComponent(s[3]) : null;
        },
        remove: function (r) {
          this.write(r, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function yi(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function pi(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function as(e, t) {
  return e && !yi(t) ? pi(e, t) : t;
}
const _i = K.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        r = document.createElement("a");
      let s;
      function n(i) {
        let a = i;
        return (
          t && (r.setAttribute("href", a), (a = r.href)),
          r.setAttribute("href", a),
          {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, "") : "",
            hash: r.hash ? r.hash.replace(/^#/, "") : "",
            hostname: r.hostname,
            port: r.port,
            pathname:
              r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
          }
        );
      }
      return (
        (s = n(window.location.href)),
        function (a) {
          const o = u.isString(a) ? n(a) : a;
          return o.protocol === s.protocol && o.host === s.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function wi(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Si(e, t) {
  e = e || 10;
  const r = new Array(e),
    s = new Array(e);
  let n = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const l = Date.now(),
        f = s[i];
      a || (a = l), (r[n] = c), (s[n] = l);
      let y = i,
        O = 0;
      for (; y !== n; ) (O += r[y++]), (y = y % e);
      if (((n = (n + 1) % e), n === i && (i = (i + 1) % e), l - a < t)) return;
      const D = f && l - f;
      return D ? Math.round((O * 1e3) / D) : void 0;
    }
  );
}
function Ar(e, t) {
  let r = 0;
  const s = Si(50, 250);
  return (n) => {
    const i = n.loaded,
      a = n.lengthComputable ? n.total : void 0,
      o = i - r,
      c = s(o),
      l = i <= a;
    r = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: o,
      rate: c || void 0,
      estimated: c && a && l ? (a - i) / c : void 0,
      event: n,
    };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const gi = typeof XMLHttpRequest < "u",
  ki =
    gi &&
    function (e) {
      return new Promise(function (r, s) {
        let n = e.data;
        const i = oe.from(e.headers).normalize(),
          a = e.responseType;
        let o;
        function c() {
          e.cancelToken && e.cancelToken.unsubscribe(o),
            e.signal && e.signal.removeEventListener("abort", o);
        }
        u.isFormData(n) &&
          (K.isStandardBrowserEnv || K.isStandardBrowserWebWorkerEnv
            ? i.setContentType(!1)
            : i.setContentType("multipart/form-data;", !1));
        let l = new XMLHttpRequest();
        if (e.auth) {
          const D = e.auth.username || "",
            _ = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(D + ":" + _));
        }
        const f = as(e.baseURL, e.url);
        l.open(e.method.toUpperCase(), rs(f, e.params, e.paramsSerializer), !0),
          (l.timeout = e.timeout);
        function y() {
          if (!l) return;
          const D = oe.from(
              "getAllResponseHeaders" in l && l.getAllResponseHeaders()
            ),
            g = {
              data:
                !a || a === "text" || a === "json"
                  ? l.responseText
                  : l.response,
              status: l.status,
              statusText: l.statusText,
              headers: D,
              config: e,
              request: l,
            };
          hi(
            function (G) {
              r(G), c();
            },
            function (G) {
              s(G), c();
            },
            g
          ),
            (l = null);
        }
        if (
          ("onloadend" in l
            ? (l.onloadend = y)
            : (l.onreadystatechange = function () {
                !l ||
                  l.readyState !== 4 ||
                  (l.status === 0 &&
                    !(l.responseURL && l.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(y);
              }),
          (l.onabort = function () {
            l &&
              (s(new b("Request aborted", b.ECONNABORTED, e, l)), (l = null));
          }),
          (l.onerror = function () {
            s(new b("Network Error", b.ERR_NETWORK, e, l)), (l = null);
          }),
          (l.ontimeout = function () {
            let _ = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const g = e.transitional || ss;
            e.timeoutErrorMessage && (_ = e.timeoutErrorMessage),
              s(
                new b(
                  _,
                  g.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
                  e,
                  l
                )
              ),
              (l = null);
          }),
          K.isStandardBrowserEnv)
        ) {
          const D =
            (e.withCredentials || _i(f)) &&
            e.xsrfCookieName &&
            mi.read(e.xsrfCookieName);
          D && i.set(e.xsrfHeaderName, D);
        }
        n === void 0 && i.setContentType(null),
          "setRequestHeader" in l &&
            u.forEach(i.toJSON(), function (_, g) {
              l.setRequestHeader(g, _);
            }),
          u.isUndefined(e.withCredentials) ||
            (l.withCredentials = !!e.withCredentials),
          a && a !== "json" && (l.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            l.addEventListener("progress", Ar(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            l.upload &&
            l.upload.addEventListener("progress", Ar(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((o = (D) => {
              l &&
                (s(!D || D.type ? new He(null, e, l) : D),
                l.abort(),
                (l = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(o),
            e.signal &&
              (e.signal.aborted ? o() : e.signal.addEventListener("abort", o)));
        const O = wi(f);
        if (O && K.protocols.indexOf(O) === -1) {
          s(new b("Unsupported protocol " + O + ":", b.ERR_BAD_REQUEST, e));
          return;
        }
        l.send(n || null);
      });
    },
  et = { http: zn, xhr: ki };
u.forEach(et, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Oi = {
  getAdapter: (e) => {
    e = u.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, s;
    for (
      let n = 0;
      n < t && ((r = e[n]), !(s = u.isString(r) ? et[r.toLowerCase()] : r));
      n++
    );
    if (!s)
      throw s === !1
        ? new b(
            `Adapter ${r} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            u.hasOwnProp(et, r)
              ? `Adapter '${r}' is not available in the build`
              : `Unknown adapter '${r}'`
          );
    if (!u.isFunction(s)) throw new TypeError("adapter is not a function");
    return s;
  },
  adapters: et,
};
function Ut(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new He(null, e);
}
function Fr(e) {
  return (
    Ut(e),
    (e.headers = oe.from(e.headers)),
    (e.data = Lt.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Oi.getAdapter(e.adapter || rr.adapter)(e).then(
      function (s) {
        return (
          Ut(e),
          (s.data = Lt.call(e, e.transformResponse, s)),
          (s.headers = oe.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          is(s) ||
            (Ut(e),
            s &&
              s.response &&
              ((s.response.data = Lt.call(e, e.transformResponse, s.response)),
              (s.response.headers = oe.from(s.response.headers)))),
          Promise.reject(s)
        );
      }
    )
  );
}
const Cr = (e) => (e instanceof oe ? e.toJSON() : e);
function Te(e, t) {
  t = t || {};
  const r = {};
  function s(l, f, y) {
    return u.isPlainObject(l) && u.isPlainObject(f)
      ? u.merge.call({ caseless: y }, l, f)
      : u.isPlainObject(f)
      ? u.merge({}, f)
      : u.isArray(f)
      ? f.slice()
      : f;
  }
  function n(l, f, y) {
    if (u.isUndefined(f)) {
      if (!u.isUndefined(l)) return s(void 0, l, y);
    } else return s(l, f, y);
  }
  function i(l, f) {
    if (!u.isUndefined(f)) return s(void 0, f);
  }
  function a(l, f) {
    if (u.isUndefined(f)) {
      if (!u.isUndefined(l)) return s(void 0, l);
    } else return s(void 0, f);
  }
  function o(l, f, y) {
    if (y in t) return s(l, f);
    if (y in e) return s(void 0, l);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: o,
    headers: (l, f) => n(Cr(l), Cr(f), !0),
  };
  return (
    u.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const y = c[f] || n,
        O = y(e[f], t[f], f);
      (u.isUndefined(O) && y !== o) || (r[f] = O);
    }),
    r
  );
}
const os = "1.4.0",
  sr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    sr[e] = function (s) {
      return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Lr = {};
sr.transitional = function (t, r, s) {
  function n(i, a) {
    return (
      "[Axios v" +
      os +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (s ? ". " + s : "")
    );
  }
  return (i, a, o) => {
    if (t === !1)
      throw new b(
        n(a, " has been removed" + (r ? " in " + r : "")),
        b.ERR_DEPRECATED
      );
    return (
      r &&
        !Lr[a] &&
        ((Lr[a] = !0),
        console.warn(
          n(
            a,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, a, o) : !0
    );
  };
};
function bi(e, t, r) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let n = s.length;
  for (; n-- > 0; ) {
    const i = s[n],
      a = t[i];
    if (a) {
      const o = e[i],
        c = o === void 0 || a(o, i, e);
      if (c !== !0)
        throw new b("option " + i + " must be " + c, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
  }
}
const Gt = { assertOptions: bi, validators: sr },
  fe = Gt.validators;
class at {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Nr(), response: new Nr() });
  }
  request(t, r) {
    typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = Te(this.defaults, r));
    const { transitional: s, paramsSerializer: n, headers: i } = r;
    s !== void 0 &&
      Gt.assertOptions(
        s,
        {
          silentJSONParsing: fe.transitional(fe.boolean),
          forcedJSONParsing: fe.transitional(fe.boolean),
          clarifyTimeoutError: fe.transitional(fe.boolean),
        },
        !1
      ),
      n != null &&
        (u.isFunction(n)
          ? (r.paramsSerializer = { serialize: n })
          : Gt.assertOptions(
              n,
              { encode: fe.function, serialize: fe.function },
              !0
            )),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let a;
    (a = i && u.merge(i.common, i[r.method])),
      a &&
        u.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (_) => {
            delete i[_];
          }
        ),
      (r.headers = oe.concat(a, i));
    const o = [];
    let c = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(r) === !1) ||
        ((c = c && g.synchronous), o.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (g) {
      l.push(g.fulfilled, g.rejected);
    });
    let f,
      y = 0,
      O;
    if (!c) {
      const _ = [Fr.bind(this), void 0];
      for (
        _.unshift.apply(_, o),
          _.push.apply(_, l),
          O = _.length,
          f = Promise.resolve(r);
        y < O;

      )
        f = f.then(_[y++], _[y++]);
      return f;
    }
    O = o.length;
    let D = r;
    for (y = 0; y < O; ) {
      const _ = o[y++],
        g = o[y++];
      try {
        D = _(D);
      } catch (re) {
        g.call(this, re);
        break;
      }
    }
    try {
      f = Fr.call(this, D);
    } catch (_) {
      return Promise.reject(_);
    }
    for (y = 0, O = l.length; y < O; ) f = f.then(l[y++], l[y++]);
    return f;
  }
  getUri(t) {
    t = Te(this.defaults, t);
    const r = as(t.baseURL, t.url);
    return rs(r, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function (t) {
  at.prototype[t] = function (r, s) {
    return this.request(
      Te(s || {}, { method: t, url: r, data: (s || {}).data })
    );
  };
});
u.forEach(["post", "put", "patch"], function (t) {
  function r(s) {
    return function (i, a, o) {
      return this.request(
        Te(o || {}, {
          method: t,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (at.prototype[t] = r()), (at.prototype[t + "Form"] = r(!0));
});
const tt = at;
class nr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (i) {
      r = i;
    });
    const s = this;
    this.promise.then((n) => {
      if (!s._listeners) return;
      let i = s._listeners.length;
      for (; i-- > 0; ) s._listeners[i](n);
      s._listeners = null;
    }),
      (this.promise.then = (n) => {
        let i;
        const a = new Promise((o) => {
          s.subscribe(o), (i = o);
        }).then(n);
        return (
          (a.cancel = function () {
            s.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, o) {
        s.reason || ((s.reason = new He(i, a, o)), r(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  static source() {
    let t;
    return {
      token: new nr(function (n) {
        t = n;
      }),
      cancel: t,
    };
  }
}
const Di = nr;
function vi(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function Mi(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const zt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(zt).forEach(([e, t]) => {
  zt[t] = e;
});
const Ti = zt;
function ls(e) {
  const t = new tt(e),
    r = Br(tt.prototype.request, t);
  return (
    u.extend(r, tt.prototype, t, { allOwnKeys: !0 }),
    u.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (n) {
      return ls(Te(e, n));
    }),
    r
  );
}
const P = ls(rr);
P.Axios = tt;
P.CanceledError = He;
P.CancelToken = Di;
P.isCancel = is;
P.VERSION = os;
P.toFormData = pt;
P.AxiosError = b;
P.Cancel = P.CanceledError;
P.all = function (t) {
  return Promise.all(t);
};
P.spread = vi;
P.isAxiosError = Mi;
P.mergeConfig = Te;
P.AxiosHeaders = oe;
P.formToJSON = (e) => ns(u.isHTMLForm(e) ? new FormData(e) : e);
P.HttpStatusCode = Ti;
P.default = P;
const xi = P,
  ir = xi.create({
    baseURL: "http://154.8.177.37:5000/",
    timeout: 3e4,
    withCredentials: !0,
  });
ir.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
ir.interceptors.response.use(
  (e) => {
    const t = e.data;
    return t.code !== 1 || t.code !== 200, e.data;
  },
  (e) => {
    if (e.response)
      switch (e.response.status) {
        case 500:
          it.error("服务器出错了，请联系管理员！");
          break;
        default:
          return it.error("网络出现问题！"), Promise.reject(e);
      }
  }
);
function Ur(e) {
  return ir({
    url: "http://154.8.177.37:5000/upload/",
    method: "post",
    data: e,
    headers: { "Content-Type": "multipart/form-data" },
  });
} //! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var us;
function h() {
  return us.apply(null, arguments);
}
function Yi(e) {
  us = e;
}
function $(e) {
  return (
    e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
  );
}
function we(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function v(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ar(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e) if (v(e, t)) return !1;
  return !0;
}
function U(e) {
  return e === void 0;
}
function ue(e) {
  return (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  );
}
function je(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function ds(e, t) {
  var r = [],
    s,
    n = e.length;
  for (s = 0; s < n; ++s) r.push(t(e[s], s));
  return r;
}
function he(e, t) {
  for (var r in t) v(t, r) && (e[r] = t[r]);
  return (
    v(t, "toString") && (e.toString = t.toString),
    v(t, "valueOf") && (e.valueOf = t.valueOf),
    e
  );
}
function ee(e, t, r, s) {
  return As(e, t, r, s, !0).utc();
}
function Ri() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1,
  };
}
function w(e) {
  return e._pf == null && (e._pf = Ri()), e._pf;
}
var $t;
Array.prototype.some
  ? ($t = Array.prototype.some)
  : ($t = function (e) {
      var t = Object(this),
        r = t.length >>> 0,
        s;
      for (s = 0; s < r; s++) if (s in t && e.call(this, t[s], s, t)) return !0;
      return !1;
    });
function or(e) {
  if (e._isValid == null) {
    var t = w(e),
      r = $t.call(t.parsedDateParts, function (n) {
        return n != null;
      }),
      s =
        !isNaN(e._d.getTime()) &&
        t.overflow < 0 &&
        !t.empty &&
        !t.invalidEra &&
        !t.invalidMonth &&
        !t.invalidWeekday &&
        !t.weekdayMismatch &&
        !t.nullInput &&
        !t.invalidFormat &&
        !t.userInvalidated &&
        (!t.meridiem || (t.meridiem && r));
    if (
      (e._strict &&
        (s =
          s &&
          t.charsLeftOver === 0 &&
          t.unusedTokens.length === 0 &&
          t.bigHour === void 0),
      Object.isFrozen == null || !Object.isFrozen(e))
    )
      e._isValid = s;
    else return s;
  }
  return e._isValid;
}
function St(e) {
  var t = ee(NaN);
  return e != null ? he(w(t), e) : (w(t).userInvalidated = !0), t;
}
var Wr = (h.momentProperties = []),
  Wt = !1;
function lr(e, t) {
  var r,
    s,
    n,
    i = Wr.length;
  if (
    (U(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
    U(t._i) || (e._i = t._i),
    U(t._f) || (e._f = t._f),
    U(t._l) || (e._l = t._l),
    U(t._strict) || (e._strict = t._strict),
    U(t._tzm) || (e._tzm = t._tzm),
    U(t._isUTC) || (e._isUTC = t._isUTC),
    U(t._offset) || (e._offset = t._offset),
    U(t._pf) || (e._pf = w(t)),
    U(t._locale) || (e._locale = t._locale),
    i > 0)
  )
    for (r = 0; r < i; r++) (s = Wr[r]), (n = t[s]), U(n) || (e[s] = n);
  return e;
}
function Ve(e) {
  lr(this, e),
    (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
    this.isValid() || (this._d = new Date(NaN)),
    Wt === !1 && ((Wt = !0), h.updateOffset(this), (Wt = !1));
}
function q(e) {
  return e instanceof Ve || (e != null && e._isAMomentObject != null);
}
function cs(e) {
  h.suppressDeprecationWarnings === !1 &&
    typeof console < "u" &&
    console.warn &&
    console.warn("Deprecation warning: " + e);
}
function V(e, t) {
  var r = !0;
  return he(function () {
    if ((h.deprecationHandler != null && h.deprecationHandler(null, e), r)) {
      var s = [],
        n,
        i,
        a,
        o = arguments.length;
      for (i = 0; i < o; i++) {
        if (((n = ""), typeof arguments[i] == "object")) {
          n +=
            `
[` +
            i +
            "] ";
          for (a in arguments[0])
            v(arguments[0], a) && (n += a + ": " + arguments[0][a] + ", ");
          n = n.slice(0, -2);
        } else n = arguments[i];
        s.push(n);
      }
      cs(
        e +
          `
Arguments: ` +
          Array.prototype.slice.call(s).join("") +
          `
` +
          new Error().stack
      ),
        (r = !1);
    }
    return t.apply(this, arguments);
  }, t);
}
var Ir = {};
function fs(e, t) {
  h.deprecationHandler != null && h.deprecationHandler(e, t),
    Ir[e] || (cs(t), (Ir[e] = !0));
}
h.suppressDeprecationWarnings = !1;
h.deprecationHandler = null;
function te(e) {
  return (
    (typeof Function < "u" && e instanceof Function) ||
    Object.prototype.toString.call(e) === "[object Function]"
  );
}
function Ei(e) {
  var t, r;
  for (r in e)
    v(e, r) && ((t = e[r]), te(t) ? (this[r] = t) : (this["_" + r] = t));
  (this._config = e),
    (this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
        "|" +
        /\d{1,2}/.source
    ));
}
function qt(e, t) {
  var r = he({}, e),
    s;
  for (s in t)
    v(t, s) &&
      (we(e[s]) && we(t[s])
        ? ((r[s] = {}), he(r[s], e[s]), he(r[s], t[s]))
        : t[s] != null
        ? (r[s] = t[s])
        : delete r[s]);
  for (s in e) v(e, s) && !v(t, s) && we(e[s]) && (r[s] = he({}, r[s]));
  return r;
}
function ur(e) {
  e != null && this.set(e);
}
var Jt;
Object.keys
  ? (Jt = Object.keys)
  : (Jt = function (e) {
      var t,
        r = [];
      for (t in e) v(e, t) && r.push(t);
      return r;
    });
var Ni = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L",
};
function Pi(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return te(s) ? s.call(t, r) : s;
}
function Q(e, t, r) {
  var s = "" + Math.abs(e),
    n = t - s.length,
    i = e >= 0;
  return (
    (i ? (r ? "+" : "") : "-") +
    Math.pow(10, Math.max(0, n)).toString().substr(1) +
    s
  );
}
var dr =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  Ze = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  It = {},
  De = {};
function p(e, t, r, s) {
  var n = s;
  typeof s == "string" &&
    (n = function () {
      return this[s]();
    }),
    e && (De[e] = n),
    t &&
      (De[t[0]] = function () {
        return Q(n.apply(this, arguments), t[1], t[2]);
      }),
    r &&
      (De[r] = function () {
        return this.localeData().ordinal(n.apply(this, arguments), e);
      });
}
function Ai(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Fi(e) {
  var t = e.match(dr),
    r,
    s;
  for (r = 0, s = t.length; r < s; r++)
    De[t[r]] ? (t[r] = De[t[r]]) : (t[r] = Ai(t[r]));
  return function (n) {
    var i = "",
      a;
    for (a = 0; a < s; a++) i += te(t[a]) ? t[a].call(n, e) : t[a];
    return i;
  };
}
function rt(e, t) {
  return e.isValid()
    ? ((t = hs(t, e.localeData())), (It[t] = It[t] || Fi(t)), It[t](e))
    : e.localeData().invalidDate();
}
function hs(e, t) {
  var r = 5;
  function s(n) {
    return t.longDateFormat(n) || n;
  }
  for (Ze.lastIndex = 0; r >= 0 && Ze.test(e); )
    (e = e.replace(Ze, s)), (Ze.lastIndex = 0), (r -= 1);
  return e;
}
var Ci = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A",
};
function Li(e) {
  var t = this._longDateFormat[e],
    r = this._longDateFormat[e.toUpperCase()];
  return t || !r
    ? t
    : ((this._longDateFormat[e] = r
        .match(dr)
        .map(function (s) {
          return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd"
            ? s.slice(1)
            : s;
        })
        .join("")),
      this._longDateFormat[e]);
}
var Ui = "Invalid date";
function Wi() {
  return this._invalidDate;
}
var Ii = "%d",
  Hi = /\d{1,2}/;
function ji(e) {
  return this._ordinal.replace("%d", e);
}
var Vi = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years",
};
function Bi(e, t, r, s) {
  var n = this._relativeTime[r];
  return te(n) ? n(e, t, r, s) : n.replace(/%d/i, e);
}
function Gi(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return te(r) ? r(t) : r.replace(/%s/i, t);
}
var Ae = {};
function F(e, t) {
  var r = e.toLowerCase();
  Ae[r] = Ae[r + "s"] = Ae[t] = e;
}
function B(e) {
  return typeof e == "string" ? Ae[e] || Ae[e.toLowerCase()] : void 0;
}
function cr(e) {
  var t = {},
    r,
    s;
  for (s in e) v(e, s) && ((r = B(s)), r && (t[r] = e[s]));
  return t;
}
var ms = {};
function C(e, t) {
  ms[e] = t;
}
function zi(e) {
  var t = [],
    r;
  for (r in e) v(e, r) && t.push({ unit: r, priority: ms[r] });
  return (
    t.sort(function (s, n) {
      return s.priority - n.priority;
    }),
    t
  );
}
function gt(e) {
  return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
}
function H(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function S(e) {
  var t = +e,
    r = 0;
  return t !== 0 && isFinite(t) && (r = H(t)), r;
}
function Ye(e, t) {
  return function (r) {
    return r != null
      ? (ys(this, e, r), h.updateOffset(this, t), this)
      : ot(this, e);
  };
}
function ot(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function ys(e, t, r) {
  e.isValid() &&
    !isNaN(r) &&
    (t === "FullYear" && gt(e.year()) && e.month() === 1 && e.date() === 29
      ? ((r = S(r)),
        e._d["set" + (e._isUTC ? "UTC" : "") + t](
          r,
          e.month(),
          Mt(r, e.month())
        ))
      : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function $i(e) {
  return (e = B(e)), te(this[e]) ? this[e]() : this;
}
function qi(e, t) {
  if (typeof e == "object") {
    e = cr(e);
    var r = zi(e),
      s,
      n = r.length;
    for (s = 0; s < n; s++) this[r[s].unit](e[r[s].unit]);
  } else if (((e = B(e)), te(this[e]))) return this[e](t);
  return this;
}
var ps = /\d/,
  I = /\d\d/,
  _s = /\d{3}/,
  fr = /\d{4}/,
  kt = /[+-]?\d{6}/,
  Y = /\d\d?/,
  ws = /\d\d\d\d?/,
  Ss = /\d\d\d\d\d\d?/,
  Ot = /\d{1,3}/,
  hr = /\d{1,4}/,
  bt = /[+-]?\d{1,6}/,
  Re = /\d+/,
  Dt = /[+-]?\d+/,
  Ji = /Z|[+-]\d\d:?\d\d/gi,
  vt = /Z|[+-]\d\d(?::?\d\d)?/gi,
  Zi = /[+-]?\d+(\.\d{1,3})?/,
  Be =
    /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  lt;
lt = {};
function m(e, t, r) {
  lt[e] = te(t)
    ? t
    : function (s, n) {
        return s && r ? r : t;
      };
}
function Ki(e, t) {
  return v(lt, e) ? lt[e](t._strict, t._locale) : new RegExp(Qi(e));
}
function Qi(e) {
  return W(
    e
      .replace("\\", "")
      .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, r, s, n, i) {
        return r || s || n || i;
      })
  );
}
function W(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Zt = {};
function T(e, t) {
  var r,
    s = t,
    n;
  for (
    typeof e == "string" && (e = [e]),
      ue(t) &&
        (s = function (i, a) {
          a[t] = S(i);
        }),
      n = e.length,
      r = 0;
    r < n;
    r++
  )
    Zt[e[r]] = s;
}
function Ge(e, t) {
  T(e, function (r, s, n, i) {
    (n._w = n._w || {}), t(r, n._w, n, i);
  });
}
function Xi(e, t, r) {
  t != null && v(Zt, e) && Zt[e](t, r._a, r, e);
}
var A = 0,
  ie = 1,
  Z = 2,
  N = 3,
  z = 4,
  ae = 5,
  _e = 6,
  ea = 7,
  ta = 8;
function ra(e, t) {
  return ((e % t) + t) % t;
}
var E;
Array.prototype.indexOf
  ? (E = Array.prototype.indexOf)
  : (E = function (e) {
      var t;
      for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    });
function Mt(e, t) {
  if (isNaN(e) || isNaN(t)) return NaN;
  var r = ra(t, 12);
  return (e += (t - r) / 12), r === 1 ? (gt(e) ? 29 : 28) : 31 - ((r % 7) % 2);
}
p("M", ["MM", 2], "Mo", function () {
  return this.month() + 1;
});
p("MMM", 0, 0, function (e) {
  return this.localeData().monthsShort(this, e);
});
p("MMMM", 0, 0, function (e) {
  return this.localeData().months(this, e);
});
F("month", "M");
C("month", 8);
m("M", Y);
m("MM", Y, I);
m("MMM", function (e, t) {
  return t.monthsShortRegex(e);
});
m("MMMM", function (e, t) {
  return t.monthsRegex(e);
});
T(["M", "MM"], function (e, t) {
  t[ie] = S(e) - 1;
});
T(["MMM", "MMMM"], function (e, t, r, s) {
  var n = r._locale.monthsParse(e, s, r._strict);
  n != null ? (t[ie] = n) : (w(r).invalidMonth = e);
});
var sa =
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ),
  gs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  ks = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  na = Be,
  ia = Be;
function aa(e, t) {
  return e
    ? $(this._months)
      ? this._months[e.month()]
      : this._months[
          (this._months.isFormat || ks).test(t) ? "format" : "standalone"
        ][e.month()]
    : $(this._months)
    ? this._months
    : this._months.standalone;
}
function oa(e, t) {
  return e
    ? $(this._monthsShort)
      ? this._monthsShort[e.month()]
      : this._monthsShort[ks.test(t) ? "format" : "standalone"][e.month()]
    : $(this._monthsShort)
    ? this._monthsShort
    : this._monthsShort.standalone;
}
function la(e, t, r) {
  var s,
    n,
    i,
    a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (
      this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = [],
        s = 0;
      s < 12;
      ++s
    )
      (i = ee([2e3, s])),
        (this._shortMonthsParse[s] = this.monthsShort(
          i,
          ""
        ).toLocaleLowerCase()),
        (this._longMonthsParse[s] = this.months(i, "").toLocaleLowerCase());
  return r
    ? t === "MMM"
      ? ((n = E.call(this._shortMonthsParse, a)), n !== -1 ? n : null)
      : ((n = E.call(this._longMonthsParse, a)), n !== -1 ? n : null)
    : t === "MMM"
    ? ((n = E.call(this._shortMonthsParse, a)),
      n !== -1
        ? n
        : ((n = E.call(this._longMonthsParse, a)), n !== -1 ? n : null))
    : ((n = E.call(this._longMonthsParse, a)),
      n !== -1
        ? n
        : ((n = E.call(this._shortMonthsParse, a)), n !== -1 ? n : null));
}
function ua(e, t, r) {
  var s, n, i;
  if (this._monthsParseExact) return la.call(this, e, t, r);
  for (
    this._monthsParse ||
      ((this._monthsParse = []),
      (this._longMonthsParse = []),
      (this._shortMonthsParse = [])),
      s = 0;
    s < 12;
    s++
  ) {
    if (
      ((n = ee([2e3, s])),
      r &&
        !this._longMonthsParse[s] &&
        ((this._longMonthsParse[s] = new RegExp(
          "^" + this.months(n, "").replace(".", "") + "$",
          "i"
        )),
        (this._shortMonthsParse[s] = new RegExp(
          "^" + this.monthsShort(n, "").replace(".", "") + "$",
          "i"
        ))),
      !r &&
        !this._monthsParse[s] &&
        ((i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, "")),
        (this._monthsParse[s] = new RegExp(i.replace(".", ""), "i"))),
      r && t === "MMMM" && this._longMonthsParse[s].test(e))
    )
      return s;
    if (r && t === "MMM" && this._shortMonthsParse[s].test(e)) return s;
    if (!r && this._monthsParse[s].test(e)) return s;
  }
}
function Os(e, t) {
  var r;
  if (!e.isValid()) return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t)) t = S(t);
    else if (((t = e.localeData().monthsParse(t)), !ue(t))) return e;
  }
  return (
    (r = Math.min(e.date(), Mt(e.year(), t))),
    e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r),
    e
  );
}
function bs(e) {
  return e != null
    ? (Os(this, e), h.updateOffset(this, !0), this)
    : ot(this, "Month");
}
function da() {
  return Mt(this.year(), this.month());
}
function ca(e) {
  return this._monthsParseExact
    ? (v(this, "_monthsRegex") || Ds.call(this),
      e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    : (v(this, "_monthsShortRegex") || (this._monthsShortRegex = na),
      this._monthsShortStrictRegex && e
        ? this._monthsShortStrictRegex
        : this._monthsShortRegex);
}
function fa(e) {
  return this._monthsParseExact
    ? (v(this, "_monthsRegex") || Ds.call(this),
      e ? this._monthsStrictRegex : this._monthsRegex)
    : (v(this, "_monthsRegex") || (this._monthsRegex = ia),
      this._monthsStrictRegex && e
        ? this._monthsStrictRegex
        : this._monthsRegex);
}
function Ds() {
  function e(a, o) {
    return o.length - a.length;
  }
  var t = [],
    r = [],
    s = [],
    n,
    i;
  for (n = 0; n < 12; n++)
    (i = ee([2e3, n])),
      t.push(this.monthsShort(i, "")),
      r.push(this.months(i, "")),
      s.push(this.months(i, "")),
      s.push(this.monthsShort(i, ""));
  for (t.sort(e), r.sort(e), s.sort(e), n = 0; n < 12; n++)
    (t[n] = W(t[n])), (r[n] = W(r[n]));
  for (n = 0; n < 24; n++) s[n] = W(s[n]);
  (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
    (this._monthsShortRegex = this._monthsRegex),
    (this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
    (this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
p("Y", 0, 0, function () {
  var e = this.year();
  return e <= 9999 ? Q(e, 4) : "+" + e;
});
p(0, ["YY", 2], 0, function () {
  return this.year() % 100;
});
p(0, ["YYYY", 4], 0, "year");
p(0, ["YYYYY", 5], 0, "year");
p(0, ["YYYYYY", 6, !0], 0, "year");
F("year", "y");
C("year", 1);
m("Y", Dt);
m("YY", Y, I);
m("YYYY", hr, fr);
m("YYYYY", bt, kt);
m("YYYYYY", bt, kt);
T(["YYYYY", "YYYYYY"], A);
T("YYYY", function (e, t) {
  t[A] = e.length === 2 ? h.parseTwoDigitYear(e) : S(e);
});
T("YY", function (e, t) {
  t[A] = h.parseTwoDigitYear(e);
});
T("Y", function (e, t) {
  t[A] = parseInt(e, 10);
});
function Fe(e) {
  return gt(e) ? 366 : 365;
}
h.parseTwoDigitYear = function (e) {
  return S(e) + (S(e) > 68 ? 1900 : 2e3);
};
var vs = Ye("FullYear", !0);
function ha() {
  return gt(this.year());
}
function ma(e, t, r, s, n, i, a) {
  var o;
  return (
    e < 100 && e >= 0
      ? ((o = new Date(e + 400, t, r, s, n, i, a)),
        isFinite(o.getFullYear()) && o.setFullYear(e))
      : (o = new Date(e, t, r, s, n, i, a)),
    o
  );
}
function Le(e) {
  var t, r;
  return (
    e < 100 && e >= 0
      ? ((r = Array.prototype.slice.call(arguments)),
        (r[0] = e + 400),
        (t = new Date(Date.UTC.apply(null, r))),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
      : (t = new Date(Date.UTC.apply(null, arguments))),
    t
  );
}
function ut(e, t, r) {
  var s = 7 + t - r,
    n = (7 + Le(e, 0, s).getUTCDay() - t) % 7;
  return -n + s - 1;
}
function Ms(e, t, r, s, n) {
  var i = (7 + r - s) % 7,
    a = ut(e, s, n),
    o = 1 + 7 * (t - 1) + i + a,
    c,
    l;
  return (
    o <= 0
      ? ((c = e - 1), (l = Fe(c) + o))
      : o > Fe(e)
      ? ((c = e + 1), (l = o - Fe(e)))
      : ((c = e), (l = o)),
    { year: c, dayOfYear: l }
  );
}
function Ue(e, t, r) {
  var s = ut(e.year(), t, r),
    n = Math.floor((e.dayOfYear() - s - 1) / 7) + 1,
    i,
    a;
  return (
    n < 1
      ? ((a = e.year() - 1), (i = n + le(a, t, r)))
      : n > le(e.year(), t, r)
      ? ((i = n - le(e.year(), t, r)), (a = e.year() + 1))
      : ((a = e.year()), (i = n)),
    { week: i, year: a }
  );
}
function le(e, t, r) {
  var s = ut(e, t, r),
    n = ut(e + 1, t, r);
  return (Fe(e) - s + n) / 7;
}
p("w", ["ww", 2], "wo", "week");
p("W", ["WW", 2], "Wo", "isoWeek");
F("week", "w");
F("isoWeek", "W");
C("week", 5);
C("isoWeek", 5);
m("w", Y);
m("ww", Y, I);
m("W", Y);
m("WW", Y, I);
Ge(["w", "ww", "W", "WW"], function (e, t, r, s) {
  t[s.substr(0, 1)] = S(e);
});
function ya(e) {
  return Ue(e, this._week.dow, this._week.doy).week;
}
var pa = { dow: 0, doy: 6 };
function _a() {
  return this._week.dow;
}
function wa() {
  return this._week.doy;
}
function Sa(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function ga(e) {
  var t = Ue(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
p("d", 0, "do", "day");
p("dd", 0, 0, function (e) {
  return this.localeData().weekdaysMin(this, e);
});
p("ddd", 0, 0, function (e) {
  return this.localeData().weekdaysShort(this, e);
});
p("dddd", 0, 0, function (e) {
  return this.localeData().weekdays(this, e);
});
p("e", 0, 0, "weekday");
p("E", 0, 0, "isoWeekday");
F("day", "d");
F("weekday", "e");
F("isoWeekday", "E");
C("day", 11);
C("weekday", 11);
C("isoWeekday", 11);
m("d", Y);
m("e", Y);
m("E", Y);
m("dd", function (e, t) {
  return t.weekdaysMinRegex(e);
});
m("ddd", function (e, t) {
  return t.weekdaysShortRegex(e);
});
m("dddd", function (e, t) {
  return t.weekdaysRegex(e);
});
Ge(["dd", "ddd", "dddd"], function (e, t, r, s) {
  var n = r._locale.weekdaysParse(e, s, r._strict);
  n != null ? (t.d = n) : (w(r).invalidWeekday = e);
});
Ge(["d", "e", "E"], function (e, t, r, s) {
  t[s] = S(e);
});
function ka(e, t) {
  return typeof e != "string"
    ? e
    : isNaN(e)
    ? ((e = t.weekdaysParse(e)), typeof e == "number" ? e : null)
    : parseInt(e, 10);
}
function Oa(e, t) {
  return typeof e == "string"
    ? t.weekdaysParse(e) % 7 || 7
    : isNaN(e)
    ? null
    : e;
}
function mr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var ba = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  Ts = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  Da = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  va = Be,
  Ma = Be,
  Ta = Be;
function xa(e, t) {
  var r = $(this._weekdays)
    ? this._weekdays
    : this._weekdays[
        e && e !== !0 && this._weekdays.isFormat.test(t)
          ? "format"
          : "standalone"
      ];
  return e === !0 ? mr(r, this._week.dow) : e ? r[e.day()] : r;
}
function Ya(e) {
  return e === !0
    ? mr(this._weekdaysShort, this._week.dow)
    : e
    ? this._weekdaysShort[e.day()]
    : this._weekdaysShort;
}
function Ra(e) {
  return e === !0
    ? mr(this._weekdaysMin, this._week.dow)
    : e
    ? this._weekdaysMin[e.day()]
    : this._weekdaysMin;
}
function Ea(e, t, r) {
  var s,
    n,
    i,
    a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (
      this._weekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._minWeekdaysParse = [],
        s = 0;
      s < 7;
      ++s
    )
      (i = ee([2e3, 1]).day(s)),
        (this._minWeekdaysParse[s] = this.weekdaysMin(
          i,
          ""
        ).toLocaleLowerCase()),
        (this._shortWeekdaysParse[s] = this.weekdaysShort(
          i,
          ""
        ).toLocaleLowerCase()),
        (this._weekdaysParse[s] = this.weekdays(i, "").toLocaleLowerCase());
  return r
    ? t === "dddd"
      ? ((n = E.call(this._weekdaysParse, a)), n !== -1 ? n : null)
      : t === "ddd"
      ? ((n = E.call(this._shortWeekdaysParse, a)), n !== -1 ? n : null)
      : ((n = E.call(this._minWeekdaysParse, a)), n !== -1 ? n : null)
    : t === "dddd"
    ? ((n = E.call(this._weekdaysParse, a)),
      n !== -1 || ((n = E.call(this._shortWeekdaysParse, a)), n !== -1)
        ? n
        : ((n = E.call(this._minWeekdaysParse, a)), n !== -1 ? n : null))
    : t === "ddd"
    ? ((n = E.call(this._shortWeekdaysParse, a)),
      n !== -1 || ((n = E.call(this._weekdaysParse, a)), n !== -1)
        ? n
        : ((n = E.call(this._minWeekdaysParse, a)), n !== -1 ? n : null))
    : ((n = E.call(this._minWeekdaysParse, a)),
      n !== -1 || ((n = E.call(this._weekdaysParse, a)), n !== -1)
        ? n
        : ((n = E.call(this._shortWeekdaysParse, a)), n !== -1 ? n : null));
}
function Na(e, t, r) {
  var s, n, i;
  if (this._weekdaysParseExact) return Ea.call(this, e, t, r);
  for (
    this._weekdaysParse ||
      ((this._weekdaysParse = []),
      (this._minWeekdaysParse = []),
      (this._shortWeekdaysParse = []),
      (this._fullWeekdaysParse = [])),
      s = 0;
    s < 7;
    s++
  ) {
    if (
      ((n = ee([2e3, 1]).day(s)),
      r &&
        !this._fullWeekdaysParse[s] &&
        ((this._fullWeekdaysParse[s] = new RegExp(
          "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._shortWeekdaysParse[s] = new RegExp(
          "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._minWeekdaysParse[s] = new RegExp(
          "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
          "i"
        ))),
      this._weekdaysParse[s] ||
        ((i =
          "^" +
          this.weekdays(n, "") +
          "|^" +
          this.weekdaysShort(n, "") +
          "|^" +
          this.weekdaysMin(n, "")),
        (this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i"))),
      r && t === "dddd" && this._fullWeekdaysParse[s].test(e))
    )
      return s;
    if (r && t === "ddd" && this._shortWeekdaysParse[s].test(e)) return s;
    if (r && t === "dd" && this._minWeekdaysParse[s].test(e)) return s;
    if (!r && this._weekdaysParse[s].test(e)) return s;
  }
}
function Pa(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? ((e = ka(e, this.localeData())), this.add(e - t, "d")) : t;
}
function Aa(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Fa(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    var t = Oa(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else return this.day() || 7;
}
function Ca(e) {
  return this._weekdaysParseExact
    ? (v(this, "_weekdaysRegex") || yr.call(this),
      e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    : (v(this, "_weekdaysRegex") || (this._weekdaysRegex = va),
      this._weekdaysStrictRegex && e
        ? this._weekdaysStrictRegex
        : this._weekdaysRegex);
}
function La(e) {
  return this._weekdaysParseExact
    ? (v(this, "_weekdaysRegex") || yr.call(this),
      e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    : (v(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ma),
      this._weekdaysShortStrictRegex && e
        ? this._weekdaysShortStrictRegex
        : this._weekdaysShortRegex);
}
function Ua(e) {
  return this._weekdaysParseExact
    ? (v(this, "_weekdaysRegex") || yr.call(this),
      e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    : (v(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ta),
      this._weekdaysMinStrictRegex && e
        ? this._weekdaysMinStrictRegex
        : this._weekdaysMinRegex);
}
function yr() {
  function e(f, y) {
    return y.length - f.length;
  }
  var t = [],
    r = [],
    s = [],
    n = [],
    i,
    a,
    o,
    c,
    l;
  for (i = 0; i < 7; i++)
    (a = ee([2e3, 1]).day(i)),
      (o = W(this.weekdaysMin(a, ""))),
      (c = W(this.weekdaysShort(a, ""))),
      (l = W(this.weekdays(a, ""))),
      t.push(o),
      r.push(c),
      s.push(l),
      n.push(o),
      n.push(c),
      n.push(l);
  t.sort(e),
    r.sort(e),
    s.sort(e),
    n.sort(e),
    (this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i")),
    (this._weekdaysShortRegex = this._weekdaysRegex),
    (this._weekdaysMinRegex = this._weekdaysRegex),
    (this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
    (this._weekdaysShortStrictRegex = new RegExp(
      "^(" + r.join("|") + ")",
      "i"
    )),
    (this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function pr() {
  return this.hours() % 12 || 12;
}
function Wa() {
  return this.hours() || 24;
}
p("H", ["HH", 2], 0, "hour");
p("h", ["hh", 2], 0, pr);
p("k", ["kk", 2], 0, Wa);
p("hmm", 0, 0, function () {
  return "" + pr.apply(this) + Q(this.minutes(), 2);
});
p("hmmss", 0, 0, function () {
  return "" + pr.apply(this) + Q(this.minutes(), 2) + Q(this.seconds(), 2);
});
p("Hmm", 0, 0, function () {
  return "" + this.hours() + Q(this.minutes(), 2);
});
p("Hmmss", 0, 0, function () {
  return "" + this.hours() + Q(this.minutes(), 2) + Q(this.seconds(), 2);
});
function xs(e, t) {
  p(e, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), t);
  });
}
xs("a", !0);
xs("A", !1);
F("hour", "h");
C("hour", 13);
function Ys(e, t) {
  return t._meridiemParse;
}
m("a", Ys);
m("A", Ys);
m("H", Y);
m("h", Y);
m("k", Y);
m("HH", Y, I);
m("hh", Y, I);
m("kk", Y, I);
m("hmm", ws);
m("hmmss", Ss);
m("Hmm", ws);
m("Hmmss", Ss);
T(["H", "HH"], N);
T(["k", "kk"], function (e, t, r) {
  var s = S(e);
  t[N] = s === 24 ? 0 : s;
});
T(["a", "A"], function (e, t, r) {
  (r._isPm = r._locale.isPM(e)), (r._meridiem = e);
});
T(["h", "hh"], function (e, t, r) {
  (t[N] = S(e)), (w(r).bigHour = !0);
});
T("hmm", function (e, t, r) {
  var s = e.length - 2;
  (t[N] = S(e.substr(0, s))), (t[z] = S(e.substr(s))), (w(r).bigHour = !0);
});
T("hmmss", function (e, t, r) {
  var s = e.length - 4,
    n = e.length - 2;
  (t[N] = S(e.substr(0, s))),
    (t[z] = S(e.substr(s, 2))),
    (t[ae] = S(e.substr(n))),
    (w(r).bigHour = !0);
});
T("Hmm", function (e, t, r) {
  var s = e.length - 2;
  (t[N] = S(e.substr(0, s))), (t[z] = S(e.substr(s)));
});
T("Hmmss", function (e, t, r) {
  var s = e.length - 4,
    n = e.length - 2;
  (t[N] = S(e.substr(0, s))),
    (t[z] = S(e.substr(s, 2))),
    (t[ae] = S(e.substr(n)));
});
function Ia(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Ha = /[ap]\.?m?\.?/i,
  ja = Ye("Hours", !0);
function Va(e, t, r) {
  return e > 11 ? (r ? "pm" : "PM") : r ? "am" : "AM";
}
var Rs = {
    calendar: Ni,
    longDateFormat: Ci,
    invalidDate: Ui,
    ordinal: Ii,
    dayOfMonthOrdinalParse: Hi,
    relativeTime: Vi,
    months: sa,
    monthsShort: gs,
    week: pa,
    weekdays: ba,
    weekdaysMin: Da,
    weekdaysShort: Ts,
    meridiemParse: Ha,
  },
  R = {},
  Ne = {},
  We;
function Ba(e, t) {
  var r,
    s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1) if (e[r] !== t[r]) return r;
  return s;
}
function Hr(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Ga(e) {
  for (var t = 0, r, s, n, i; t < e.length; ) {
    for (
      i = Hr(e[t]).split("-"),
        r = i.length,
        s = Hr(e[t + 1]),
        s = s ? s.split("-") : null;
      r > 0;

    ) {
      if (((n = Tt(i.slice(0, r).join("-"))), n)) return n;
      if (s && s.length >= r && Ba(i, s) >= r - 1) break;
      r--;
    }
    t++;
  }
  return We;
}
function za(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Tt(e) {
  var t = null,
    r;
  if (
    R[e] === void 0 &&
    typeof module < "u" &&
    module &&
    module.exports &&
    za(e)
  )
    try {
      (t = We._abbr), (r = require), r("./locale/" + e), ye(t);
    } catch {
      R[e] = null;
    }
  return R[e];
}
function ye(e, t) {
  var r;
  return (
    e &&
      (U(t) ? (r = de(e)) : (r = _r(e, t)),
      r
        ? (We = r)
        : typeof console < "u" &&
          console.warn &&
          console.warn(
            "Locale " + e + " not found. Did you forget to load it?"
          )),
    We._abbr
  );
}
function _r(e, t) {
  if (t !== null) {
    var r,
      s = Rs;
    if (((t.abbr = e), R[e] != null))
      fs(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ),
        (s = R[e]._config);
    else if (t.parentLocale != null)
      if (R[t.parentLocale] != null) s = R[t.parentLocale]._config;
      else if (((r = Tt(t.parentLocale)), r != null)) s = r._config;
      else
        return (
          Ne[t.parentLocale] || (Ne[t.parentLocale] = []),
          Ne[t.parentLocale].push({ name: e, config: t }),
          null
        );
    return (
      (R[e] = new ur(qt(s, t))),
      Ne[e] &&
        Ne[e].forEach(function (n) {
          _r(n.name, n.config);
        }),
      ye(e),
      R[e]
    );
  } else return delete R[e], null;
}
function $a(e, t) {
  if (t != null) {
    var r,
      s,
      n = Rs;
    R[e] != null && R[e].parentLocale != null
      ? R[e].set(qt(R[e]._config, t))
      : ((s = Tt(e)),
        s != null && (n = s._config),
        (t = qt(n, t)),
        s == null && (t.abbr = e),
        (r = new ur(t)),
        (r.parentLocale = R[e]),
        (R[e] = r)),
      ye(e);
  } else
    R[e] != null &&
      (R[e].parentLocale != null
        ? ((R[e] = R[e].parentLocale), e === ye() && ye(e))
        : R[e] != null && delete R[e]);
  return R[e];
}
function de(e) {
  var t;
  if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
    return We;
  if (!$(e)) {
    if (((t = Tt(e)), t)) return t;
    e = [e];
  }
  return Ga(e);
}
function qa() {
  return Jt(R);
}
function wr(e) {
  var t,
    r = e._a;
  return (
    r &&
      w(e).overflow === -2 &&
      ((t =
        r[ie] < 0 || r[ie] > 11
          ? ie
          : r[Z] < 1 || r[Z] > Mt(r[A], r[ie])
          ? Z
          : r[N] < 0 ||
            r[N] > 24 ||
            (r[N] === 24 && (r[z] !== 0 || r[ae] !== 0 || r[_e] !== 0))
          ? N
          : r[z] < 0 || r[z] > 59
          ? z
          : r[ae] < 0 || r[ae] > 59
          ? ae
          : r[_e] < 0 || r[_e] > 999
          ? _e
          : -1),
      w(e)._overflowDayOfYear && (t < A || t > Z) && (t = Z),
      w(e)._overflowWeeks && t === -1 && (t = ea),
      w(e)._overflowWeekday && t === -1 && (t = ta),
      (w(e).overflow = t)),
    e
  );
}
var Ja =
    /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  Za =
    /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  Ka = /Z|[+-]\d\d(?::?\d\d)?/,
  Ke = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, !1],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, !1],
    ["YYYY", /\d{4}/, !1],
  ],
  Ht = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/],
  ],
  Qa = /^\/?Date\((-?\d+)/i,
  Xa =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
  eo = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60,
  };
function Es(e) {
  var t,
    r,
    s = e._i,
    n = Ja.exec(s) || Za.exec(s),
    i,
    a,
    o,
    c,
    l = Ke.length,
    f = Ht.length;
  if (n) {
    for (w(e).iso = !0, t = 0, r = l; t < r; t++)
      if (Ke[t][1].exec(n[1])) {
        (a = Ke[t][0]), (i = Ke[t][2] !== !1);
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, r = f; t < r; t++)
        if (Ht[t][1].exec(n[3])) {
          o = (n[2] || " ") + Ht[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && o != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (Ka.exec(n[4])) c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    (e._f = a + (o || "") + (c || "")), gr(e);
  } else e._isValid = !1;
}
function to(e, t, r, s, n, i) {
  var a = [
    ro(e),
    gs.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(n, 10),
  ];
  return i && a.push(parseInt(i, 10)), a;
}
function ro(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function so(e) {
  return e
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .replace(/^\s\s*/, "")
    .replace(/\s\s*$/, "");
}
function no(e, t, r) {
  if (e) {
    var s = Ts.indexOf(e),
      n = new Date(t[0], t[1], t[2]).getDay();
    if (s !== n) return (w(r).weekdayMismatch = !0), (r._isValid = !1), !1;
  }
  return !0;
}
function io(e, t, r) {
  if (e) return eo[e];
  if (t) return 0;
  var s = parseInt(r, 10),
    n = s % 100,
    i = (s - n) / 100;
  return i * 60 + n;
}
function Ns(e) {
  var t = Xa.exec(so(e._i)),
    r;
  if (t) {
    if (((r = to(t[4], t[3], t[2], t[5], t[6], t[7])), !no(t[1], r, e))) return;
    (e._a = r),
      (e._tzm = io(t[8], t[9], t[10])),
      (e._d = Le.apply(null, e._a)),
      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      (w(e).rfc2822 = !0);
  } else e._isValid = !1;
}
function ao(e) {
  var t = Qa.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if ((Es(e), e._isValid === !1)) delete e._isValid;
  else return;
  if ((Ns(e), e._isValid === !1)) delete e._isValid;
  else return;
  e._strict ? (e._isValid = !1) : h.createFromInputFallback(e);
}
h.createFromInputFallback = V(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Oe(e, t, r) {
  return e ?? t ?? r;
}
function oo(e) {
  var t = new Date(h.now());
  return e._useUTC
    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
    : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Sr(e) {
  var t,
    r,
    s = [],
    n,
    i,
    a;
  if (!e._d) {
    for (
      n = oo(e),
        e._w && e._a[Z] == null && e._a[ie] == null && lo(e),
        e._dayOfYear != null &&
          ((a = Oe(e._a[A], n[A])),
          (e._dayOfYear > Fe(a) || e._dayOfYear === 0) &&
            (w(e)._overflowDayOfYear = !0),
          (r = Le(a, 0, e._dayOfYear)),
          (e._a[ie] = r.getUTCMonth()),
          (e._a[Z] = r.getUTCDate())),
        t = 0;
      t < 3 && e._a[t] == null;
      ++t
    )
      e._a[t] = s[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
    e._a[N] === 24 &&
      e._a[z] === 0 &&
      e._a[ae] === 0 &&
      e._a[_e] === 0 &&
      ((e._nextDay = !0), (e._a[N] = 0)),
      (e._d = (e._useUTC ? Le : ma).apply(null, s)),
      (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
      e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      e._nextDay && (e._a[N] = 24),
      e._w &&
        typeof e._w.d < "u" &&
        e._w.d !== i &&
        (w(e).weekdayMismatch = !0);
  }
}
function lo(e) {
  var t, r, s, n, i, a, o, c, l;
  (t = e._w),
    t.GG != null || t.W != null || t.E != null
      ? ((i = 1),
        (a = 4),
        (r = Oe(t.GG, e._a[A], Ue(x(), 1, 4).year)),
        (s = Oe(t.W, 1)),
        (n = Oe(t.E, 1)),
        (n < 1 || n > 7) && (c = !0))
      : ((i = e._locale._week.dow),
        (a = e._locale._week.doy),
        (l = Ue(x(), i, a)),
        (r = Oe(t.gg, e._a[A], l.year)),
        (s = Oe(t.w, l.week)),
        t.d != null
          ? ((n = t.d), (n < 0 || n > 6) && (c = !0))
          : t.e != null
          ? ((n = t.e + i), (t.e < 0 || t.e > 6) && (c = !0))
          : (n = i)),
    s < 1 || s > le(r, i, a)
      ? (w(e)._overflowWeeks = !0)
      : c != null
      ? (w(e)._overflowWeekday = !0)
      : ((o = Ms(r, s, n, i, a)),
        (e._a[A] = o.year),
        (e._dayOfYear = o.dayOfYear));
}
h.ISO_8601 = function () {};
h.RFC_2822 = function () {};
function gr(e) {
  if (e._f === h.ISO_8601) {
    Es(e);
    return;
  }
  if (e._f === h.RFC_2822) {
    Ns(e);
    return;
  }
  (e._a = []), (w(e).empty = !0);
  var t = "" + e._i,
    r,
    s,
    n,
    i,
    a,
    o = t.length,
    c = 0,
    l,
    f;
  for (n = hs(e._f, e._locale).match(dr) || [], f = n.length, r = 0; r < f; r++)
    (i = n[r]),
      (s = (t.match(Ki(i, e)) || [])[0]),
      s &&
        ((a = t.substr(0, t.indexOf(s))),
        a.length > 0 && w(e).unusedInput.push(a),
        (t = t.slice(t.indexOf(s) + s.length)),
        (c += s.length)),
      De[i]
        ? (s ? (w(e).empty = !1) : w(e).unusedTokens.push(i), Xi(i, s, e))
        : e._strict && !s && w(e).unusedTokens.push(i);
  (w(e).charsLeftOver = o - c),
    t.length > 0 && w(e).unusedInput.push(t),
    e._a[N] <= 12 &&
      w(e).bigHour === !0 &&
      e._a[N] > 0 &&
      (w(e).bigHour = void 0),
    (w(e).parsedDateParts = e._a.slice(0)),
    (w(e).meridiem = e._meridiem),
    (e._a[N] = uo(e._locale, e._a[N], e._meridiem)),
    (l = w(e).era),
    l !== null && (e._a[A] = e._locale.erasConvertYear(l, e._a[A])),
    Sr(e),
    wr(e);
}
function uo(e, t, r) {
  var s;
  return r == null
    ? t
    : e.meridiemHour != null
    ? e.meridiemHour(t, r)
    : (e.isPM != null &&
        ((s = e.isPM(r)), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)),
      t);
}
function co(e) {
  var t,
    r,
    s,
    n,
    i,
    a,
    o = !1,
    c = e._f.length;
  if (c === 0) {
    (w(e).invalidFormat = !0), (e._d = new Date(NaN));
    return;
  }
  for (n = 0; n < c; n++)
    (i = 0),
      (a = !1),
      (t = lr({}, e)),
      e._useUTC != null && (t._useUTC = e._useUTC),
      (t._f = e._f[n]),
      gr(t),
      or(t) && (a = !0),
      (i += w(t).charsLeftOver),
      (i += w(t).unusedTokens.length * 10),
      (w(t).score = i),
      o
        ? i < s && ((s = i), (r = t))
        : (s == null || i < s || a) && ((s = i), (r = t), a && (o = !0));
  he(e, r || t);
}
function fo(e) {
  if (!e._d) {
    var t = cr(e._i),
      r = t.day === void 0 ? t.date : t.day;
    (e._a = ds(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function (s) {
        return s && parseInt(s, 10);
      }
    )),
      Sr(e);
  }
}
function ho(e) {
  var t = new Ve(wr(Ps(e)));
  return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
}
function Ps(e) {
  var t = e._i,
    r = e._f;
  return (
    (e._locale = e._locale || de(e._l)),
    t === null || (r === void 0 && t === "")
      ? St({ nullInput: !0 })
      : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
        q(t)
          ? new Ve(wr(t))
          : (je(t) ? (e._d = t) : $(r) ? co(e) : r ? gr(e) : mo(e),
            or(e) || (e._d = null),
            e))
  );
}
function mo(e) {
  var t = e._i;
  U(t)
    ? (e._d = new Date(h.now()))
    : je(t)
    ? (e._d = new Date(t.valueOf()))
    : typeof t == "string"
    ? ao(e)
    : $(t)
    ? ((e._a = ds(t.slice(0), function (r) {
        return parseInt(r, 10);
      })),
      Sr(e))
    : we(t)
    ? fo(e)
    : ue(t)
    ? (e._d = new Date(t))
    : h.createFromInputFallback(e);
}
function As(e, t, r, s, n) {
  var i = {};
  return (
    (t === !0 || t === !1) && ((s = t), (t = void 0)),
    (r === !0 || r === !1) && ((s = r), (r = void 0)),
    ((we(e) && ar(e)) || ($(e) && e.length === 0)) && (e = void 0),
    (i._isAMomentObject = !0),
    (i._useUTC = i._isUTC = n),
    (i._l = r),
    (i._i = e),
    (i._f = t),
    (i._strict = s),
    ho(i)
  );
}
function x(e, t, r, s) {
  return As(e, t, r, s, !1);
}
var yo = V(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = x.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e < this ? this : e) : St();
    }
  ),
  po = V(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = x.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e > this ? this : e) : St();
    }
  );
function Fs(e, t) {
  var r, s;
  if ((t.length === 1 && $(t[0]) && (t = t[0]), !t.length)) return x();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function _o() {
  var e = [].slice.call(arguments, 0);
  return Fs("isBefore", e);
}
function wo() {
  var e = [].slice.call(arguments, 0);
  return Fs("isAfter", e);
}
var So = function () {
    return Date.now ? Date.now() : +new Date();
  },
  Pe = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
function go(e) {
  var t,
    r = !1,
    s,
    n = Pe.length;
  for (t in e)
    if (v(e, t) && !(E.call(Pe, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < n; ++s)
    if (e[Pe[s]]) {
      if (r) return !1;
      parseFloat(e[Pe[s]]) !== S(e[Pe[s]]) && (r = !0);
    }
  return !0;
}
function ko() {
  return this._isValid;
}
function Oo() {
  return J(NaN);
}
function xt(e) {
  var t = cr(e),
    r = t.year || 0,
    s = t.quarter || 0,
    n = t.month || 0,
    i = t.week || t.isoWeek || 0,
    a = t.day || 0,
    o = t.hour || 0,
    c = t.minute || 0,
    l = t.second || 0,
    f = t.millisecond || 0;
  (this._isValid = go(t)),
    (this._milliseconds = +f + l * 1e3 + c * 6e4 + o * 1e3 * 60 * 60),
    (this._days = +a + i * 7),
    (this._months = +n + s * 3 + r * 12),
    (this._data = {}),
    (this._locale = de()),
    this._bubble();
}
function st(e) {
  return e instanceof xt;
}
function Kt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function bo(e, t, r) {
  var s = Math.min(e.length, t.length),
    n = Math.abs(e.length - t.length),
    i = 0,
    a;
  for (a = 0; a < s; a++)
    ((r && e[a] !== t[a]) || (!r && S(e[a]) !== S(t[a]))) && i++;
  return i + n;
}
function Cs(e, t) {
  p(e, 0, 0, function () {
    var r = this.utcOffset(),
      s = "+";
    return (
      r < 0 && ((r = -r), (s = "-")), s + Q(~~(r / 60), 2) + t + Q(~~r % 60, 2)
    );
  });
}
Cs("Z", ":");
Cs("ZZ", "");
m("Z", vt);
m("ZZ", vt);
T(["Z", "ZZ"], function (e, t, r) {
  (r._useUTC = !0), (r._tzm = kr(vt, e));
});
var Do = /([\+\-]|\d\d)/gi;
function kr(e, t) {
  var r = (t || "").match(e),
    s,
    n,
    i;
  return r === null
    ? null
    : ((s = r[r.length - 1] || []),
      (n = (s + "").match(Do) || ["-", 0, 0]),
      (i = +(n[1] * 60) + S(n[2])),
      i === 0 ? 0 : n[0] === "+" ? i : -i);
}
function Or(e, t) {
  var r, s;
  return t._isUTC
    ? ((r = t.clone()),
      (s = (q(e) || je(e) ? e.valueOf() : x(e).valueOf()) - r.valueOf()),
      r._d.setTime(r._d.valueOf() + s),
      h.updateOffset(r, !1),
      r)
    : x(e).local();
}
function Qt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
h.updateOffset = function () {};
function vo(e, t, r) {
  var s = this._offset || 0,
    n;
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (((e = kr(vt, e)), e === null)) return this;
    } else Math.abs(e) < 16 && !r && (e = e * 60);
    return (
      !this._isUTC && t && (n = Qt(this)),
      (this._offset = e),
      (this._isUTC = !0),
      n != null && this.add(n, "m"),
      s !== e &&
        (!t || this._changeInProgress
          ? Ws(this, J(e - s, "m"), 1, !1)
          : this._changeInProgress ||
            ((this._changeInProgress = !0),
            h.updateOffset(this, !0),
            (this._changeInProgress = null))),
      this
    );
  } else return this._isUTC ? s : Qt(this);
}
function Mo(e, t) {
  return e != null
    ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this)
    : -this.utcOffset();
}
function To(e) {
  return this.utcOffset(0, e);
}
function xo(e) {
  return (
    this._isUTC &&
      (this.utcOffset(0, e),
      (this._isUTC = !1),
      e && this.subtract(Qt(this), "m")),
    this
  );
}
function Yo() {
  if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = kr(Ji, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ro(e) {
  return this.isValid()
    ? ((e = e ? x(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
    : !1;
}
function Eo() {
  return (
    this.utcOffset() > this.clone().month(0).utcOffset() ||
    this.utcOffset() > this.clone().month(5).utcOffset()
  );
}
function No() {
  if (!U(this._isDSTShifted)) return this._isDSTShifted;
  var e = {},
    t;
  return (
    lr(e, this),
    (e = Ps(e)),
    e._a
      ? ((t = e._isUTC ? ee(e._a) : x(e._a)),
        (this._isDSTShifted = this.isValid() && bo(e._a, t.toArray()) > 0))
      : (this._isDSTShifted = !1),
    this._isDSTShifted
  );
}
function Po() {
  return this.isValid() ? !this._isUTC : !1;
}
function Ao() {
  return this.isValid() ? this._isUTC : !1;
}
function Ls() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Fo = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
  Co =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function J(e, t) {
  var r = e,
    s = null,
    n,
    i,
    a;
  return (
    st(e)
      ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
      : ue(e) || !isNaN(+e)
      ? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
      : (s = Fo.exec(e))
      ? ((n = s[1] === "-" ? -1 : 1),
        (r = {
          y: 0,
          d: S(s[Z]) * n,
          h: S(s[N]) * n,
          m: S(s[z]) * n,
          s: S(s[ae]) * n,
          ms: S(Kt(s[_e] * 1e3)) * n,
        }))
      : (s = Co.exec(e))
      ? ((n = s[1] === "-" ? -1 : 1),
        (r = {
          y: pe(s[2], n),
          M: pe(s[3], n),
          w: pe(s[4], n),
          d: pe(s[5], n),
          h: pe(s[6], n),
          m: pe(s[7], n),
          s: pe(s[8], n),
        }))
      : r == null
      ? (r = {})
      : typeof r == "object" &&
        ("from" in r || "to" in r) &&
        ((a = Lo(x(r.from), x(r.to))),
        (r = {}),
        (r.ms = a.milliseconds),
        (r.M = a.months)),
    (i = new xt(r)),
    st(e) && v(e, "_locale") && (i._locale = e._locale),
    st(e) && v(e, "_isValid") && (i._isValid = e._isValid),
    i
  );
}
J.fn = xt.prototype;
J.invalid = Oo;
function pe(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function jr(e, t) {
  var r = {};
  return (
    (r.months = t.month() - e.month() + (t.year() - e.year()) * 12),
    e.clone().add(r.months, "M").isAfter(t) && --r.months,
    (r.milliseconds = +t - +e.clone().add(r.months, "M")),
    r
  );
}
function Lo(e, t) {
  var r;
  return e.isValid() && t.isValid()
    ? ((t = Or(t, e)),
      e.isBefore(t)
        ? (r = jr(e, t))
        : ((r = jr(t, e)),
          (r.milliseconds = -r.milliseconds),
          (r.months = -r.months)),
      r)
    : { milliseconds: 0, months: 0 };
}
function Us(e, t) {
  return function (r, s) {
    var n, i;
    return (
      s !== null &&
        !isNaN(+s) &&
        (fs(
          t,
          "moment()." +
            t +
            "(period, number) is deprecated. Please use moment()." +
            t +
            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        ),
        (i = r),
        (r = s),
        (s = i)),
      (n = J(r, s)),
      Ws(this, n, e),
      this
    );
  };
}
function Ws(e, t, r, s) {
  var n = t._milliseconds,
    i = Kt(t._days),
    a = Kt(t._months);
  e.isValid() &&
    ((s = s ?? !0),
    a && Os(e, ot(e, "Month") + a * r),
    i && ys(e, "Date", ot(e, "Date") + i * r),
    n && e._d.setTime(e._d.valueOf() + n * r),
    s && h.updateOffset(e, i || a));
}
var Uo = Us(1, "add"),
  Wo = Us(-1, "subtract");
function Is(e) {
  return typeof e == "string" || e instanceof String;
}
function Io(e) {
  return (
    q(e) ||
    je(e) ||
    Is(e) ||
    ue(e) ||
    jo(e) ||
    Ho(e) ||
    e === null ||
    e === void 0
  );
}
function Ho(e) {
  var t = we(e) && !ar(e),
    r = !1,
    s = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms",
    ],
    n,
    i,
    a = s.length;
  for (n = 0; n < a; n += 1) (i = s[n]), (r = r || v(e, i));
  return t && r;
}
function jo(e) {
  var t = $(e),
    r = !1;
  return (
    t &&
      (r =
        e.filter(function (s) {
          return !ue(s) && Is(e);
        }).length === 0),
    t && r
  );
}
function Vo(e) {
  var t = we(e) && !ar(e),
    r = !1,
    s = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
    n,
    i;
  for (n = 0; n < s.length; n += 1) (i = s[n]), (r = r || v(e, i));
  return t && r;
}
function Bo(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6
    ? "sameElse"
    : r < -1
    ? "lastWeek"
    : r < 0
    ? "lastDay"
    : r < 1
    ? "sameDay"
    : r < 2
    ? "nextDay"
    : r < 7
    ? "nextWeek"
    : "sameElse";
}
function Go(e, t) {
  arguments.length === 1 &&
    (arguments[0]
      ? Io(arguments[0])
        ? ((e = arguments[0]), (t = void 0))
        : Vo(arguments[0]) && ((t = arguments[0]), (e = void 0))
      : ((e = void 0), (t = void 0)));
  var r = e || x(),
    s = Or(r, this).startOf("day"),
    n = h.calendarFormat(this, s) || "sameElse",
    i = t && (te(t[n]) ? t[n].call(this, r) : t[n]);
  return this.format(i || this.localeData().calendar(n, this, x(r)));
}
function zo() {
  return new Ve(this);
}
function $o(e, t) {
  var r = q(e) ? e : x(e);
  return this.isValid() && r.isValid()
    ? ((t = B(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() > r.valueOf()
        : r.valueOf() < this.clone().startOf(t).valueOf())
    : !1;
}
function qo(e, t) {
  var r = q(e) ? e : x(e);
  return this.isValid() && r.isValid()
    ? ((t = B(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() < r.valueOf()
        : this.clone().endOf(t).valueOf() < r.valueOf())
    : !1;
}
function Jo(e, t, r, s) {
  var n = q(e) ? e : x(e),
    i = q(t) ? t : x(t);
  return this.isValid() && n.isValid() && i.isValid()
    ? ((s = s || "()"),
      (s[0] === "(" ? this.isAfter(n, r) : !this.isBefore(n, r)) &&
        (s[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r)))
    : !1;
}
function Zo(e, t) {
  var r = q(e) ? e : x(e),
    s;
  return this.isValid() && r.isValid()
    ? ((t = B(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() === r.valueOf()
        : ((s = r.valueOf()),
          this.clone().startOf(t).valueOf() <= s &&
            s <= this.clone().endOf(t).valueOf()))
    : !1;
}
function Ko(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Qo(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Xo(e, t, r) {
  var s, n, i;
  if (!this.isValid()) return NaN;
  if (((s = Or(e, this)), !s.isValid())) return NaN;
  switch (((n = (s.utcOffset() - this.utcOffset()) * 6e4), (t = B(t)), t)) {
    case "year":
      i = nt(this, s) / 12;
      break;
    case "month":
      i = nt(this, s);
      break;
    case "quarter":
      i = nt(this, s) / 3;
      break;
    case "second":
      i = (this - s) / 1e3;
      break;
    case "minute":
      i = (this - s) / 6e4;
      break;
    case "hour":
      i = (this - s) / 36e5;
      break;
    case "day":
      i = (this - s - n) / 864e5;
      break;
    case "week":
      i = (this - s - n) / 6048e5;
      break;
    default:
      i = this - s;
  }
  return r ? i : H(i);
}
function nt(e, t) {
  if (e.date() < t.date()) return -nt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
    s = e.clone().add(r, "months"),
    n,
    i;
  return (
    t - s < 0
      ? ((n = e.clone().add(r - 1, "months")), (i = (t - s) / (s - n)))
      : ((n = e.clone().add(r + 1, "months")), (i = (t - s) / (n - s))),
    -(r + i) || 0
  );
}
h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function el() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function tl(e) {
  if (!this.isValid()) return null;
  var t = e !== !0,
    r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999
    ? rt(
        r,
        t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      )
    : te(Date.prototype.toISOString)
    ? t
      ? this.toDate().toISOString()
      : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
          .toISOString()
          .replace("Z", rt(r, "Z"))
    : rt(r, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}
function rl() {
  if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
  var e = "moment",
    t = "",
    r,
    s,
    n,
    i;
  return (
    this.isLocal() ||
      ((e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
      (t = "Z")),
    (r = "[" + e + '("]'),
    (s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
    (n = "-MM-DD[T]HH:mm:ss.SSS"),
    (i = t + '[")]'),
    this.format(r + s + n + i)
  );
}
function sl(e) {
  e || (e = this.isUtc() ? h.defaultFormatUtc : h.defaultFormat);
  var t = rt(this, e);
  return this.localeData().postformat(t);
}
function nl(e, t) {
  return this.isValid() && ((q(e) && e.isValid()) || x(e).isValid())
    ? J({ to: this, from: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function il(e) {
  return this.from(x(), e);
}
function al(e, t) {
  return this.isValid() && ((q(e) && e.isValid()) || x(e).isValid())
    ? J({ from: this, to: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function ol(e) {
  return this.to(x(), e);
}
function Hs(e) {
  var t;
  return e === void 0
    ? this._locale._abbr
    : ((t = de(e)), t != null && (this._locale = t), this);
}
var js = V(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function (e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Vs() {
  return this._locale;
}
var dt = 1e3,
  ve = 60 * dt,
  ct = 60 * ve,
  Bs = (365 * 400 + 97) * 24 * ct;
function Me(e, t) {
  return ((e % t) + t) % t;
}
function Gs(e, t, r) {
  return e < 100 && e >= 0
    ? new Date(e + 400, t, r) - Bs
    : new Date(e, t, r).valueOf();
}
function zs(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Bs : Date.UTC(e, t, r);
}
function ll(e) {
  var t, r;
  if (((e = B(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((r = this._isUTC ? zs : Gs), e)) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(this.year(), this.month() - (this.month() % 3), 1);
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(this.year(), this.month(), this.date() - this.weekday());
      break;
    case "isoWeek":
      t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t -= Me(t + (this._isUTC ? 0 : this.utcOffset() * ve), ct));
      break;
    case "minute":
      (t = this._d.valueOf()), (t -= Me(t, ve));
      break;
    case "second":
      (t = this._d.valueOf()), (t -= Me(t, dt));
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function ul(e) {
  var t, r;
  if (((e = B(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((r = this._isUTC ? zs : Gs), e)) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;
    case "isoWeek":
      t =
        r(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t += ct - Me(t + (this._isUTC ? 0 : this.utcOffset() * ve), ct) - 1);
      break;
    case "minute":
      (t = this._d.valueOf()), (t += ve - Me(t, ve) - 1);
      break;
    case "second":
      (t = this._d.valueOf()), (t += dt - Me(t, dt) - 1);
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function dl() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function cl() {
  return Math.floor(this.valueOf() / 1e3);
}
function fl() {
  return new Date(this.valueOf());
}
function hl() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond(),
  ];
}
function ml() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds(),
  };
}
function yl() {
  return this.isValid() ? this.toISOString() : null;
}
function pl() {
  return or(this);
}
function _l() {
  return he({}, w(this));
}
function wl() {
  return w(this).overflow;
}
function Sl() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict,
  };
}
p("N", 0, 0, "eraAbbr");
p("NN", 0, 0, "eraAbbr");
p("NNN", 0, 0, "eraAbbr");
p("NNNN", 0, 0, "eraName");
p("NNNNN", 0, 0, "eraNarrow");
p("y", ["y", 1], "yo", "eraYear");
p("y", ["yy", 2], 0, "eraYear");
p("y", ["yyy", 3], 0, "eraYear");
p("y", ["yyyy", 4], 0, "eraYear");
m("N", br);
m("NN", br);
m("NNN", br);
m("NNNN", Rl);
m("NNNNN", El);
T(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, r, s) {
  var n = r._locale.erasParse(e, s, r._strict);
  n ? (w(r).era = n) : (w(r).invalidEra = e);
});
m("y", Re);
m("yy", Re);
m("yyy", Re);
m("yyyy", Re);
m("yo", Nl);
T(["y", "yy", "yyy", "yyyy"], A);
T(["yo"], function (e, t, r, s) {
  var n;
  r._locale._eraYearOrdinalRegex &&
    (n = e.match(r._locale._eraYearOrdinalRegex)),
    r._locale.eraYearOrdinalParse
      ? (t[A] = r._locale.eraYearOrdinalParse(e, n))
      : (t[A] = parseInt(e, 10));
});
function gl(e, t) {
  var r,
    s,
    n,
    i = this._eras || de("en")._eras;
  for (r = 0, s = i.length; r < s; ++r) {
    switch (typeof i[r].since) {
      case "string":
        (n = h(i[r].since).startOf("day")), (i[r].since = n.valueOf());
        break;
    }
    switch (typeof i[r].until) {
      case "undefined":
        i[r].until = 1 / 0;
        break;
      case "string":
        (n = h(i[r].until).startOf("day").valueOf()),
          (i[r].until = n.valueOf());
        break;
    }
  }
  return i;
}
function kl(e, t, r) {
  var s,
    n,
    i = this.eras(),
    a,
    o,
    c;
  for (e = e.toUpperCase(), s = 0, n = i.length; s < n; ++s)
    if (
      ((a = i[s].name.toUpperCase()),
      (o = i[s].abbr.toUpperCase()),
      (c = i[s].narrow.toUpperCase()),
      r)
    )
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e) return i[s];
          break;
        case "NNNN":
          if (a === e) return i[s];
          break;
        case "NNNNN":
          if (c === e) return i[s];
          break;
      }
    else if ([a, o, c].indexOf(e) >= 0) return i[s];
}
function Ol(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0
    ? h(e.since).year()
    : h(e.since).year() + (t - e.offset) * r;
}
function bl() {
  var e,
    t,
    r,
    s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (
      ((r = this.clone().startOf("day").valueOf()),
      (s[e].since <= r && r <= s[e].until) ||
        (s[e].until <= r && r <= s[e].since))
    )
      return s[e].name;
  return "";
}
function Dl() {
  var e,
    t,
    r,
    s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (
      ((r = this.clone().startOf("day").valueOf()),
      (s[e].since <= r && r <= s[e].until) ||
        (s[e].until <= r && r <= s[e].since))
    )
      return s[e].narrow;
  return "";
}
function vl() {
  var e,
    t,
    r,
    s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (
      ((r = this.clone().startOf("day").valueOf()),
      (s[e].since <= r && r <= s[e].until) ||
        (s[e].until <= r && r <= s[e].since))
    )
      return s[e].abbr;
  return "";
}
function Ml() {
  var e,
    t,
    r,
    s,
    n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (
      ((r = n[e].since <= n[e].until ? 1 : -1),
      (s = this.clone().startOf("day").valueOf()),
      (n[e].since <= s && s <= n[e].until) ||
        (n[e].until <= s && s <= n[e].since))
    )
      return (this.year() - h(n[e].since).year()) * r + n[e].offset;
  return this.year();
}
function Tl(e) {
  return (
    v(this, "_erasNameRegex") || Dr.call(this),
    e ? this._erasNameRegex : this._erasRegex
  );
}
function xl(e) {
  return (
    v(this, "_erasAbbrRegex") || Dr.call(this),
    e ? this._erasAbbrRegex : this._erasRegex
  );
}
function Yl(e) {
  return (
    v(this, "_erasNarrowRegex") || Dr.call(this),
    e ? this._erasNarrowRegex : this._erasRegex
  );
}
function br(e, t) {
  return t.erasAbbrRegex(e);
}
function Rl(e, t) {
  return t.erasNameRegex(e);
}
function El(e, t) {
  return t.erasNarrowRegex(e);
}
function Nl(e, t) {
  return t._eraYearOrdinalRegex || Re;
}
function Dr() {
  var e = [],
    t = [],
    r = [],
    s = [],
    n,
    i,
    a = this.eras();
  for (n = 0, i = a.length; n < i; ++n)
    t.push(W(a[n].name)),
      e.push(W(a[n].abbr)),
      r.push(W(a[n].narrow)),
      s.push(W(a[n].name)),
      s.push(W(a[n].abbr)),
      s.push(W(a[n].narrow));
  (this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i")),
    (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
    (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
    (this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"));
}
p(0, ["gg", 2], 0, function () {
  return this.weekYear() % 100;
});
p(0, ["GG", 2], 0, function () {
  return this.isoWeekYear() % 100;
});
function Yt(e, t) {
  p(0, [e, e.length], 0, t);
}
Yt("gggg", "weekYear");
Yt("ggggg", "weekYear");
Yt("GGGG", "isoWeekYear");
Yt("GGGGG", "isoWeekYear");
F("weekYear", "gg");
F("isoWeekYear", "GG");
C("weekYear", 1);
C("isoWeekYear", 1);
m("G", Dt);
m("g", Dt);
m("GG", Y, I);
m("gg", Y, I);
m("GGGG", hr, fr);
m("gggg", hr, fr);
m("GGGGG", bt, kt);
m("ggggg", bt, kt);
Ge(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, r, s) {
  t[s.substr(0, 2)] = S(e);
});
Ge(["gg", "GG"], function (e, t, r, s) {
  t[s] = h.parseTwoDigitYear(e);
});
function Pl(e) {
  return $s.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Al(e) {
  return $s.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function Fl() {
  return le(this.year(), 1, 4);
}
function Cl() {
  return le(this.isoWeekYear(), 1, 4);
}
function Ll() {
  var e = this.localeData()._week;
  return le(this.year(), e.dow, e.doy);
}
function Ul() {
  var e = this.localeData()._week;
  return le(this.weekYear(), e.dow, e.doy);
}
function $s(e, t, r, s, n) {
  var i;
  return e == null
    ? Ue(this, s, n).year
    : ((i = le(e, s, n)), t > i && (t = i), Wl.call(this, e, t, r, s, n));
}
function Wl(e, t, r, s, n) {
  var i = Ms(e, t, r, s, n),
    a = Le(i.year, 0, i.dayOfYear);
  return (
    this.year(a.getUTCFullYear()),
    this.month(a.getUTCMonth()),
    this.date(a.getUTCDate()),
    this
  );
}
p("Q", 0, "Qo", "quarter");
F("quarter", "Q");
C("quarter", 7);
m("Q", ps);
T("Q", function (e, t) {
  t[ie] = (S(e) - 1) * 3;
});
function Il(e) {
  return e == null
    ? Math.ceil((this.month() + 1) / 3)
    : this.month((e - 1) * 3 + (this.month() % 3));
}
p("D", ["DD", 2], "Do", "date");
F("date", "D");
C("date", 9);
m("D", Y);
m("DD", Y, I);
m("Do", function (e, t) {
  return e
    ? t._dayOfMonthOrdinalParse || t._ordinalParse
    : t._dayOfMonthOrdinalParseLenient;
});
T(["D", "DD"], Z);
T("Do", function (e, t) {
  t[Z] = S(e.match(Y)[0]);
});
var qs = Ye("Date", !0);
p("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
F("dayOfYear", "DDD");
C("dayOfYear", 4);
m("DDD", Ot);
m("DDDD", _s);
T(["DDD", "DDDD"], function (e, t, r) {
  r._dayOfYear = S(e);
});
function Hl(e) {
  var t =
    Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
p("m", ["mm", 2], 0, "minute");
F("minute", "m");
C("minute", 14);
m("m", Y);
m("mm", Y, I);
T(["m", "mm"], z);
var jl = Ye("Minutes", !1);
p("s", ["ss", 2], 0, "second");
F("second", "s");
C("second", 15);
m("s", Y);
m("ss", Y, I);
T(["s", "ss"], ae);
var Vl = Ye("Seconds", !1);
p("S", 0, 0, function () {
  return ~~(this.millisecond() / 100);
});
p(0, ["SS", 2], 0, function () {
  return ~~(this.millisecond() / 10);
});
p(0, ["SSS", 3], 0, "millisecond");
p(0, ["SSSS", 4], 0, function () {
  return this.millisecond() * 10;
});
p(0, ["SSSSS", 5], 0, function () {
  return this.millisecond() * 100;
});
p(0, ["SSSSSS", 6], 0, function () {
  return this.millisecond() * 1e3;
});
p(0, ["SSSSSSS", 7], 0, function () {
  return this.millisecond() * 1e4;
});
p(0, ["SSSSSSSS", 8], 0, function () {
  return this.millisecond() * 1e5;
});
p(0, ["SSSSSSSSS", 9], 0, function () {
  return this.millisecond() * 1e6;
});
F("millisecond", "ms");
C("millisecond", 16);
m("S", Ot, ps);
m("SS", Ot, I);
m("SSS", Ot, _s);
var me, Js;
for (me = "SSSS"; me.length <= 9; me += "S") m(me, Re);
function Bl(e, t) {
  t[_e] = S(("0." + e) * 1e3);
}
for (me = "S"; me.length <= 9; me += "S") T(me, Bl);
Js = Ye("Milliseconds", !1);
p("z", 0, 0, "zoneAbbr");
p("zz", 0, 0, "zoneName");
function Gl() {
  return this._isUTC ? "UTC" : "";
}
function zl() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var d = Ve.prototype;
d.add = Uo;
d.calendar = Go;
d.clone = zo;
d.diff = Xo;
d.endOf = ul;
d.format = sl;
d.from = nl;
d.fromNow = il;
d.to = al;
d.toNow = ol;
d.get = $i;
d.invalidAt = wl;
d.isAfter = $o;
d.isBefore = qo;
d.isBetween = Jo;
d.isSame = Zo;
d.isSameOrAfter = Ko;
d.isSameOrBefore = Qo;
d.isValid = pl;
d.lang = js;
d.locale = Hs;
d.localeData = Vs;
d.max = po;
d.min = yo;
d.parsingFlags = _l;
d.set = qi;
d.startOf = ll;
d.subtract = Wo;
d.toArray = hl;
d.toObject = ml;
d.toDate = fl;
d.toISOString = tl;
d.inspect = rl;
typeof Symbol < "u" &&
  Symbol.for != null &&
  (d[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">";
  });
d.toJSON = yl;
d.toString = el;
d.unix = cl;
d.valueOf = dl;
d.creationData = Sl;
d.eraName = bl;
d.eraNarrow = Dl;
d.eraAbbr = vl;
d.eraYear = Ml;
d.year = vs;
d.isLeapYear = ha;
d.weekYear = Pl;
d.isoWeekYear = Al;
d.quarter = d.quarters = Il;
d.month = bs;
d.daysInMonth = da;
d.week = d.weeks = Sa;
d.isoWeek = d.isoWeeks = ga;
d.weeksInYear = Ll;
d.weeksInWeekYear = Ul;
d.isoWeeksInYear = Fl;
d.isoWeeksInISOWeekYear = Cl;
d.date = qs;
d.day = d.days = Pa;
d.weekday = Aa;
d.isoWeekday = Fa;
d.dayOfYear = Hl;
d.hour = d.hours = ja;
d.minute = d.minutes = jl;
d.second = d.seconds = Vl;
d.millisecond = d.milliseconds = Js;
d.utcOffset = vo;
d.utc = To;
d.local = xo;
d.parseZone = Yo;
d.hasAlignedHourOffset = Ro;
d.isDST = Eo;
d.isLocal = Po;
d.isUtcOffset = Ao;
d.isUtc = Ls;
d.isUTC = Ls;
d.zoneAbbr = Gl;
d.zoneName = zl;
d.dates = V("dates accessor is deprecated. Use date instead.", qs);
d.months = V("months accessor is deprecated. Use month instead", bs);
d.years = V("years accessor is deprecated. Use year instead", vs);
d.zone = V(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Mo
);
d.isDSTShifted = V(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  No
);
function $l(e) {
  return x(e * 1e3);
}
function ql() {
  return x.apply(null, arguments).parseZone();
}
function Zs(e) {
  return e;
}
var M = ur.prototype;
M.calendar = Pi;
M.longDateFormat = Li;
M.invalidDate = Wi;
M.ordinal = ji;
M.preparse = Zs;
M.postformat = Zs;
M.relativeTime = Bi;
M.pastFuture = Gi;
M.set = Ei;
M.eras = gl;
M.erasParse = kl;
M.erasConvertYear = Ol;
M.erasAbbrRegex = xl;
M.erasNameRegex = Tl;
M.erasNarrowRegex = Yl;
M.months = aa;
M.monthsShort = oa;
M.monthsParse = ua;
M.monthsRegex = fa;
M.monthsShortRegex = ca;
M.week = ya;
M.firstDayOfYear = wa;
M.firstDayOfWeek = _a;
M.weekdays = xa;
M.weekdaysMin = Ra;
M.weekdaysShort = Ya;
M.weekdaysParse = Na;
M.weekdaysRegex = Ca;
M.weekdaysShortRegex = La;
M.weekdaysMinRegex = Ua;
M.isPM = Ia;
M.meridiem = Va;
function ft(e, t, r, s) {
  var n = de(),
    i = ee().set(s, t);
  return n[r](i, e);
}
function Ks(e, t, r) {
  if ((ue(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
    return ft(e, t, r, "month");
  var s,
    n = [];
  for (s = 0; s < 12; s++) n[s] = ft(e, s, r, "month");
  return n;
}
function vr(e, t, r, s) {
  typeof e == "boolean"
    ? (ue(t) && ((r = t), (t = void 0)), (t = t || ""))
    : ((t = e),
      (r = t),
      (e = !1),
      ue(t) && ((r = t), (t = void 0)),
      (t = t || ""));
  var n = de(),
    i = e ? n._week.dow : 0,
    a,
    o = [];
  if (r != null) return ft(t, (r + i) % 7, s, "day");
  for (a = 0; a < 7; a++) o[a] = ft(t, (a + i) % 7, s, "day");
  return o;
}
function Jl(e, t) {
  return Ks(e, t, "months");
}
function Zl(e, t) {
  return Ks(e, t, "monthsShort");
}
function Kl(e, t, r) {
  return vr(e, t, r, "weekdays");
}
function Ql(e, t, r) {
  return vr(e, t, r, "weekdaysShort");
}
function Xl(e, t, r) {
  return vr(e, t, r, "weekdaysMin");
}
ye("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD",
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC",
    },
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function (e) {
    var t = e % 10,
      r =
        S((e % 100) / 10) === 1
          ? "th"
          : t === 1
          ? "st"
          : t === 2
          ? "nd"
          : t === 3
          ? "rd"
          : "th";
    return e + r;
  },
});
h.lang = V("moment.lang is deprecated. Use moment.locale instead.", ye);
h.langData = V(
  "moment.langData is deprecated. Use moment.localeData instead.",
  de
);
var se = Math.abs;
function eu() {
  var e = this._data;
  return (
    (this._milliseconds = se(this._milliseconds)),
    (this._days = se(this._days)),
    (this._months = se(this._months)),
    (e.milliseconds = se(e.milliseconds)),
    (e.seconds = se(e.seconds)),
    (e.minutes = se(e.minutes)),
    (e.hours = se(e.hours)),
    (e.months = se(e.months)),
    (e.years = se(e.years)),
    this
  );
}
function Qs(e, t, r, s) {
  var n = J(t, r);
  return (
    (e._milliseconds += s * n._milliseconds),
    (e._days += s * n._days),
    (e._months += s * n._months),
    e._bubble()
  );
}
function tu(e, t) {
  return Qs(this, e, t, 1);
}
function ru(e, t) {
  return Qs(this, e, t, -1);
}
function Vr(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function su() {
  var e = this._milliseconds,
    t = this._days,
    r = this._months,
    s = this._data,
    n,
    i,
    a,
    o,
    c;
  return (
    (e >= 0 && t >= 0 && r >= 0) ||
      (e <= 0 && t <= 0 && r <= 0) ||
      ((e += Vr(Xt(r) + t) * 864e5), (t = 0), (r = 0)),
    (s.milliseconds = e % 1e3),
    (n = H(e / 1e3)),
    (s.seconds = n % 60),
    (i = H(n / 60)),
    (s.minutes = i % 60),
    (a = H(i / 60)),
    (s.hours = a % 24),
    (t += H(a / 24)),
    (c = H(Xs(t))),
    (r += c),
    (t -= Vr(Xt(c))),
    (o = H(r / 12)),
    (r %= 12),
    (s.days = t),
    (s.months = r),
    (s.years = o),
    this
  );
}
function Xs(e) {
  return (e * 4800) / 146097;
}
function Xt(e) {
  return (e * 146097) / 4800;
}
function nu(e) {
  if (!this.isValid()) return NaN;
  var t,
    r,
    s = this._milliseconds;
  if (((e = B(e)), e === "month" || e === "quarter" || e === "year"))
    switch (((t = this._days + s / 864e5), (r = this._months + Xs(t)), e)) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (((t = this._days + Math.round(Xt(this._months))), e)) {
      case "week":
        return t / 7 + s / 6048e5;
      case "day":
        return t + s / 864e5;
      case "hour":
        return t * 24 + s / 36e5;
      case "minute":
        return t * 1440 + s / 6e4;
      case "second":
        return t * 86400 + s / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + s;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function iu() {
  return this.isValid()
    ? this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        S(this._months / 12) * 31536e6
    : NaN;
}
function ce(e) {
  return function () {
    return this.as(e);
  };
}
var au = ce("ms"),
  ou = ce("s"),
  lu = ce("m"),
  uu = ce("h"),
  du = ce("d"),
  cu = ce("w"),
  fu = ce("M"),
  hu = ce("Q"),
  mu = ce("y");
function yu() {
  return J(this);
}
function pu(e) {
  return (e = B(e)), this.isValid() ? this[e + "s"]() : NaN;
}
function Se(e) {
  return function () {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var _u = Se("milliseconds"),
  wu = Se("seconds"),
  Su = Se("minutes"),
  gu = Se("hours"),
  ku = Se("days"),
  Ou = Se("months"),
  bu = Se("years");
function Du() {
  return H(this.days() / 7);
}
var ne = Math.round,
  be = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
function vu(e, t, r, s, n) {
  return n.relativeTime(t || 1, !!r, e, s);
}
function Mu(e, t, r, s) {
  var n = J(e).abs(),
    i = ne(n.as("s")),
    a = ne(n.as("m")),
    o = ne(n.as("h")),
    c = ne(n.as("d")),
    l = ne(n.as("M")),
    f = ne(n.as("w")),
    y = ne(n.as("y")),
    O =
      (i <= r.ss && ["s", i]) ||
      (i < r.s && ["ss", i]) ||
      (a <= 1 && ["m"]) ||
      (a < r.m && ["mm", a]) ||
      (o <= 1 && ["h"]) ||
      (o < r.h && ["hh", o]) ||
      (c <= 1 && ["d"]) ||
      (c < r.d && ["dd", c]);
  return (
    r.w != null && (O = O || (f <= 1 && ["w"]) || (f < r.w && ["ww", f])),
    (O = O ||
      (l <= 1 && ["M"]) ||
      (l < r.M && ["MM", l]) ||
      (y <= 1 && ["y"]) || ["yy", y]),
    (O[2] = t),
    (O[3] = +e > 0),
    (O[4] = s),
    vu.apply(null, O)
  );
}
function Tu(e) {
  return e === void 0 ? ne : typeof e == "function" ? ((ne = e), !0) : !1;
}
function xu(e, t) {
  return be[e] === void 0
    ? !1
    : t === void 0
    ? be[e]
    : ((be[e] = t), e === "s" && (be.ss = t - 1), !0);
}
function Yu(e, t) {
  if (!this.isValid()) return this.localeData().invalidDate();
  var r = !1,
    s = be,
    n,
    i;
  return (
    typeof e == "object" && ((t = e), (e = !1)),
    typeof e == "boolean" && (r = e),
    typeof t == "object" &&
      ((s = Object.assign({}, be, t)),
      t.s != null && t.ss == null && (s.ss = t.s - 1)),
    (n = this.localeData()),
    (i = Mu(this, !r, s, n)),
    r && (i = n.pastFuture(+this, i)),
    n.postformat(i)
  );
}
var jt = Math.abs;
function ke(e) {
  return (e > 0) - (e < 0) || +e;
}
function Rt() {
  if (!this.isValid()) return this.localeData().invalidDate();
  var e = jt(this._milliseconds) / 1e3,
    t = jt(this._days),
    r = jt(this._months),
    s,
    n,
    i,
    a,
    o = this.asSeconds(),
    c,
    l,
    f,
    y;
  return o
    ? ((s = H(e / 60)),
      (n = H(s / 60)),
      (e %= 60),
      (s %= 60),
      (i = H(r / 12)),
      (r %= 12),
      (a = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
      (c = o < 0 ? "-" : ""),
      (l = ke(this._months) !== ke(o) ? "-" : ""),
      (f = ke(this._days) !== ke(o) ? "-" : ""),
      (y = ke(this._milliseconds) !== ke(o) ? "-" : ""),
      c +
        "P" +
        (i ? l + i + "Y" : "") +
        (r ? l + r + "M" : "") +
        (t ? f + t + "D" : "") +
        (n || s || e ? "T" : "") +
        (n ? y + n + "H" : "") +
        (s ? y + s + "M" : "") +
        (e ? y + a + "S" : ""))
    : "P0D";
}
var k = xt.prototype;
k.isValid = ko;
k.abs = eu;
k.add = tu;
k.subtract = ru;
k.as = nu;
k.asMilliseconds = au;
k.asSeconds = ou;
k.asMinutes = lu;
k.asHours = uu;
k.asDays = du;
k.asWeeks = cu;
k.asMonths = fu;
k.asQuarters = hu;
k.asYears = mu;
k.valueOf = iu;
k._bubble = su;
k.clone = yu;
k.get = pu;
k.milliseconds = _u;
k.seconds = wu;
k.minutes = Su;
k.hours = gu;
k.days = ku;
k.weeks = Du;
k.months = Ou;
k.years = bu;
k.humanize = Yu;
k.toISOString = Rt;
k.toString = Rt;
k.toJSON = Rt;
k.locale = Hs;
k.localeData = Vs;
k.toIsoString = V(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Rt
);
k.lang = js;
p("X", 0, 0, "unix");
p("x", 0, 0, "valueOf");
m("x", Dt);
m("X", Zi);
T("X", function (e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
T("x", function (e, t, r) {
  r._d = new Date(S(e));
}); //! moment.js
h.version = "2.29.4";
Yi(x);
h.fn = d;
h.min = _o;
h.max = wo;
h.now = So;
h.utc = ee;
h.unix = $l;
h.months = Jl;
h.isDate = je;
h.locale = ye;
h.invalid = St;
h.duration = J;
h.isMoment = q;
h.weekdays = Kl;
h.parseZone = ql;
h.localeData = de;
h.isDuration = st;
h.monthsShort = Zl;
h.weekdaysMin = Xl;
h.defineLocale = _r;
h.updateLocale = $a;
h.locales = qa;
h.weekdaysShort = Ql;
h.normalizeUnits = B;
h.relativeTimeRounding = Tu;
h.relativeTimeThreshold = xu;
h.calendarFormat = Bo;
h.prototype = d;
h.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM",
};
const Et = (e) => (ln("data-v-0fb1cefe"), (e = e()), un(), e),
  Ru = an(
    '<img class="bg-img" alt="background image" src="' +
      cn +
      '" data-v-0fb1cefe><div class="button_container" data-v-0fb1cefe><div class="big-button add-button" data-v-0fb1cefe>添加数据文档</div><div class="big-button predict-button" data-v-0fb1cefe>预测类别</div><div class="big-button run-button" data-v-0fb1cefe>预测存档</div></div><div class="shadow_container" data-v-0fb1cefe><div class="shadow-button" data-v-0fb1cefe></div><div class="shadow-button" data-v-0fb1cefe></div><div class="shadow-button" data-v-0fb1cefe></div></div>',
    3
  ),
  Eu = { class: "title-container" },
  Nu = Et(() =>
    L(
      "div",
      { class: "title-block", style: { "text-align": "left" } },
      "XLSX格式 自动识别",
      -1
    )
  ),
  Pu = Et(() => L("div", { class: "title-block" }, null, -1)),
  Au = Et(() => L("div", { class: "title-block" }, null, -1)),
  Fu = { class: "block-container" },
  Cu = { class: "con-block" },
  Lu = { class: "sp-block" },
  Uu = {
    class: "con-block",
    style: { display: "flex", "flex-direction": "column" },
  },
  Wu = Et(() =>
    L(
      "div",
      {
        class: "down-title",
        style: {
          display: "flex",
          "flex-direction": "row",
          width: "100%",
          "margin-top": "12px",
          "text-align": "center",
        },
      },
      [L("div", { style: { width: "70%" } }, "日期"), L("div", null, "下载")],
      -1
    )
  ),
  Iu = { class: "list-container" },
  Hu = ["onClick"],
  ju = tn({
    __name: "predict",
    emits: ["file"],
    setup(e, { emit: t }) {
      const r = $e(0),
        s = $e(null),
        n = $e([]),
        i = $e();
      rn(() => {
        (n.value = JSON.parse(localStorage.getItem("dataList") || "[]")),
          s.value.addEventListener("drop", a),
          s.value.addEventListener("dragleave", (l) => {
            l.preventDefault();
          }),
          s.value.addEventListener("dragenter", (l) => {
            l.preventDefault();
          }),
          s.value.addEventListener("dragover", (l) => {
            l.preventDefault();
          });
      }),
        sn(() => {
          s.value.removeEventListener("drop", a);
        });
      const a = (l) => {
          l.preventDefault(),
            (i.value = l.dataTransfer.files[0]),
            console.log(i.value);
          let f = new FormData();
          f.append("file", i.value),
            Ur(f).then((y) => {
              const { data: O } = y;
              n.value.push({
                date: h().format("YYYY MMMM Do h:mm:ss a"),
                path: O,
              }),
                localStorage.setItem("dataList", JSON.stringify(n.value)),
                it.success("上传成功");
            });
        },
        o = (l) => {
          if (l.target.files.length === 0) return;
          (i.value = l.target.files[0]), console.log(i.value);
          let f = new FormData();
          f.append("file", i.value),
            Ur(f).then((y) => {
              const { data: O } = y;
              n.value.push({
                date: h().format("YYYY MMMM Do h:mm:ss a"),
                path: O,
              }),
                localStorage.setItem("dataList", JSON.stringify(n.value)),
                it.success("上传成功");
            });
        },
        c = (l) => {
          const f = "http://154.8.177.37:5000/download/" + l;
          let y = document.createElement("a");
          (y.href = f), (y.download = l), y.click(), y.remove();
        };
      return (l, f) => {
        const y = Mr("el-radio-button"),
          O = Mr("el-radio-group");
        return (
          Nt(),
          Pt(
            Tr,
            null,
            [
              Ru,
              L("div", Eu, [
                Nu,
                L(
                  "input",
                  {
                    type: "file",
                    style: { display: "none" },
                    ref: "ipref",
                    onChange: o,
                  },
                  null,
                  544
                ),
                Pu,
                Au,
              ]),
              L("div", Fu, [
                L(
                  "div",
                  {
                    ref_key: "drag",
                    ref: s,
                    class: "con-block click-block",
                    onClick:
                      f[0] ||
                      (f[0] = (...D) =>
                        l.$refs.ipref.click && l.$refs.ipref.click(...D)),
                    style: {
                      "line-height": "510px",
                      "text-align": "center",
                      "text-shadow": "2px 3px 3px rgb(218, 218, 218)",
                      "font-weight": "bold",
                      "font-size": "20px",
                    },
                  },
                  " 点击或拖拽文件到这里 ",
                  512
                ),
                L("div", Cu, [
                  L("div", Lu, [
                    qe(
                      O,
                      {
                        modelValue: r.value,
                        "onUpdate:modelValue":
                          f[1] || (f[1] = (D) => (r.value = D)),
                        size: "large",
                      },
                      {
                        default: Je(() => [
                          qe(
                            y,
                            { id: "sp-radio", label: 1 },
                            {
                              default: Je(() => [
                                At("模块一：未来五天销量预测"),
                              ]),
                              _: 1,
                            }
                          ),
                          qe(
                            y,
                            { label: 2 },
                            {
                              default: Je(() => [At("模块二：阴雨天销量预测")]),
                              _: 1,
                            }
                          ),
                          qe(
                            y,
                            { label: 3 },
                            {
                              default: Je(() => [At("模块三：连锁店供应预测")]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]),
                ]),
                L("div", Uu, [
                  Wu,
                  L("div", Iu, [
                    (Nt(!0),
                    Pt(
                      Tr,
                      null,
                      nn(
                        n.value,
                        (D, _) => (
                          Nt(),
                          Pt(
                            "div",
                            {
                              key: _,
                              style: {
                                display: "flex",
                                "flex-direction": "row",
                                "text-align": "center",
                                margin: "8px",
                              },
                            },
                            [
                              L(
                                "div",
                                {
                                  class: "date-block",
                                  onClick: (g) => c(D.path),
                                  style: {
                                    width: "100%",
                                    "margin-right": "8px",
                                  },
                                },
                                on(D.date),
                                9,
                                Hu
                              ),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ],
            64
          )
        );
      };
    },
  });
const Bu = dn(ju, [["__scopeId", "data-v-0fb1cefe"]]);
export { Bu as default };
