(async () => {
  var Nk, $k, Bk, Vk, Wk, Uk, Hk, qk, Kk, Gk, Zk, Xk, Yk, Qk, Jk, eS, tS;
  function hC(e, t) {
    for (var n = 0; n < t.length; n++) {
      const i = t[n];
      if (typeof i != "string" && !Array.isArray(i)) {
        for (const a in i)
          if (a !== "default" && !(a in e)) {
            const l = Object.getOwnPropertyDescriptor(i, a);
            l &&
              Object.defineProperty(
                e,
                a,
                l.get ? l : { enumerable: !0, get: () => i[a] }
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
  }
  (function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      n(i);
    new MutationObserver((i) => {
      for (const a of i)
        if (a.type === "childList")
          for (const l of a.addedNodes)
            l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(i) {
      const a = {};
      return (
        i.integrity && (a.integrity = i.integrity),
        i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (a.credentials = "include")
          : i.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
        a
      );
    }
    function n(i) {
      if (i.ep) return;
      i.ep = !0;
      const a = t(i);
      fetch(i.href, a);
    }
  })();
  var to =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function dc(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var ig = { exports: {} },
    us = {},
    ag = { exports: {} },
    Me = {},
    sg;
  function mC() {
    if (sg) return Me;
    sg = 1;
    var e = Symbol.for("react.element"),
      t = Symbol.for("react.portal"),
      n = Symbol.for("react.fragment"),
      i = Symbol.for("react.strict_mode"),
      a = Symbol.for("react.profiler"),
      l = Symbol.for("react.provider"),
      c = Symbol.for("react.context"),
      d = Symbol.for("react.forward_ref"),
      p = Symbol.for("react.suspense"),
      h = Symbol.for("react.memo"),
      g = Symbol.for("react.lazy"),
      v = Symbol.iterator;
    function b(A) {
      return A === null || typeof A != "object"
        ? null
        : ((A = (v && A[v]) || A["@@iterator"]),
          typeof A == "function" ? A : null);
    }
    var k = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      S = Object.assign,
      w = {};
    function _(A, V, Y) {
      (this.props = A),
        (this.context = V),
        (this.refs = w),
        (this.updater = Y || k);
    }
    (_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (A, V) {
        if (typeof A != "object" && typeof A != "function" && A != null)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, A, V, "setState");
      }),
      (_.prototype.forceUpdate = function (A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate");
      });
    function j() {}
    j.prototype = _.prototype;
    function O(A, V, Y) {
      (this.props = A),
        (this.context = V),
        (this.refs = w),
        (this.updater = Y || k);
    }
    var M = (O.prototype = new j());
    (M.constructor = O), S(M, _.prototype), (M.isPureReactComponent = !0);
    var $ = Array.isArray,
      E = Object.prototype.hasOwnProperty,
      I = { current: null },
      L = { key: !0, ref: !0, __self: !0, __source: !0 };
    function H(A, V, Y) {
      var oe,
        pe = {},
        ye = null,
        de = null;
      if (V != null)
        for (oe in (V.ref !== void 0 && (de = V.ref),
        V.key !== void 0 && (ye = "" + V.key),
        V))
          E.call(V, oe) && !L.hasOwnProperty(oe) && (pe[oe] = V[oe]);
      var ge = arguments.length - 2;
      if (ge === 1) pe.children = Y;
      else if (1 < ge) {
        for (var Oe = Array(ge), Qe = 0; Qe < ge; Qe++)
          Oe[Qe] = arguments[Qe + 2];
        pe.children = Oe;
      }
      if (A && A.defaultProps)
        for (oe in ((ge = A.defaultProps), ge))
          pe[oe] === void 0 && (pe[oe] = ge[oe]);
      return {
        $$typeof: e,
        type: A,
        key: ye,
        ref: de,
        props: pe,
        _owner: I.current,
      };
    }
    function G(A, V) {
      return {
        $$typeof: e,
        type: A.type,
        key: V,
        ref: A.ref,
        props: A.props,
        _owner: A._owner,
      };
    }
    function q(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function ie(A) {
      var V = { "=": "=0", ":": "=2" };
      return (
        "$" +
        A.replace(/[=:]/g, function (Y) {
          return V[Y];
        })
      );
    }
    var he = /\/+/g;
    function ve(A, V) {
      return typeof A == "object" && A !== null && A.key != null
        ? ie("" + A.key)
        : V.toString(36);
    }
    function Ee(A, V, Y, oe, pe) {
      var ye = typeof A;
      (ye === "undefined" || ye === "boolean") && (A = null);
      var de = !1;
      if (A === null) de = !0;
      else
        switch (ye) {
          case "string":
          case "number":
            de = !0;
            break;
          case "object":
            switch (A.$$typeof) {
              case e:
              case t:
                de = !0;
            }
        }
      if (de)
        return (
          (de = A),
          (pe = pe(de)),
          (A = oe === "" ? "." + ve(de, 0) : oe),
          $(pe)
            ? ((Y = ""),
              A != null && (Y = A.replace(he, "$&/") + "/"),
              Ee(pe, V, Y, "", function (Qe) {
                return Qe;
              }))
            : pe != null &&
              (q(pe) &&
                (pe = G(
                  pe,
                  Y +
                    (!pe.key || (de && de.key === pe.key)
                      ? ""
                      : ("" + pe.key).replace(he, "$&/") + "/") +
                    A
                )),
              V.push(pe)),
          1
        );
      if (((de = 0), (oe = oe === "" ? "." : oe + ":"), $(A)))
        for (var ge = 0; ge < A.length; ge++) {
          ye = A[ge];
          var Oe = oe + ve(ye, ge);
          de += Ee(ye, V, Y, Oe, pe);
        }
      else if (((Oe = b(A)), typeof Oe == "function"))
        for (A = Oe.call(A), ge = 0; !(ye = A.next()).done; )
          (ye = ye.value),
            (Oe = oe + ve(ye, ge++)),
            (de += Ee(ye, V, Y, Oe, pe));
      else if (ye === "object")
        throw (
          ((V = String(A)),
          Error(
            "Objects are not valid as a React child (found: " +
              (V === "[object Object]"
                ? "object with keys {" + Object.keys(A).join(", ") + "}"
                : V) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return de;
    }
    function J(A, V, Y) {
      if (A == null) return A;
      var oe = [],
        pe = 0;
      return (
        Ee(A, oe, "", "", function (ye) {
          return V.call(Y, ye, pe++);
        }),
        oe
      );
    }
    function re(A) {
      if (A._status === -1) {
        var V = A._result;
        (V = V()),
          V.then(
            function (Y) {
              (A._status === 0 || A._status === -1) &&
                ((A._status = 1), (A._result = Y));
            },
            function (Y) {
              (A._status === 0 || A._status === -1) &&
                ((A._status = 2), (A._result = Y));
            }
          ),
          A._status === -1 && ((A._status = 0), (A._result = V));
      }
      if (A._status === 1) return A._result.default;
      throw A._result;
    }
    var se = { current: null },
      K = { transition: null },
      ne = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: K,
        ReactCurrentOwner: I,
      };
    function te() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return (
      (Me.Children = {
        map: J,
        forEach: function (A, V, Y) {
          J(
            A,
            function () {
              V.apply(this, arguments);
            },
            Y
          );
        },
        count: function (A) {
          var V = 0;
          return (
            J(A, function () {
              V++;
            }),
            V
          );
        },
        toArray: function (A) {
          return (
            J(A, function (V) {
              return V;
            }) || []
          );
        },
        only: function (A) {
          if (!q(A))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return A;
        },
      }),
      (Me.Component = _),
      (Me.Fragment = n),
      (Me.Profiler = a),
      (Me.PureComponent = O),
      (Me.StrictMode = i),
      (Me.Suspense = p),
      (Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne),
      (Me.act = te),
      (Me.cloneElement = function (A, V, Y) {
        if (A == null)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              A +
              "."
          );
        var oe = S({}, A.props),
          pe = A.key,
          ye = A.ref,
          de = A._owner;
        if (V != null) {
          if (
            (V.ref !== void 0 && ((ye = V.ref), (de = I.current)),
            V.key !== void 0 && (pe = "" + V.key),
            A.type && A.type.defaultProps)
          )
            var ge = A.type.defaultProps;
          for (Oe in V)
            E.call(V, Oe) &&
              !L.hasOwnProperty(Oe) &&
              (oe[Oe] = V[Oe] === void 0 && ge !== void 0 ? ge[Oe] : V[Oe]);
        }
        var Oe = arguments.length - 2;
        if (Oe === 1) oe.children = Y;
        else if (1 < Oe) {
          ge = Array(Oe);
          for (var Qe = 0; Qe < Oe; Qe++) ge[Qe] = arguments[Qe + 2];
          oe.children = ge;
        }
        return {
          $$typeof: e,
          type: A.type,
          key: pe,
          ref: ye,
          props: oe,
          _owner: de,
        };
      }),
      (Me.createContext = function (A) {
        return (
          (A = {
            $$typeof: c,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (A.Provider = { $$typeof: l, _context: A }),
          (A.Consumer = A)
        );
      }),
      (Me.createElement = H),
      (Me.createFactory = function (A) {
        var V = H.bind(null, A);
        return (V.type = A), V;
      }),
      (Me.createRef = function () {
        return { current: null };
      }),
      (Me.forwardRef = function (A) {
        return { $$typeof: d, render: A };
      }),
      (Me.isValidElement = q),
      (Me.lazy = function (A) {
        return {
          $$typeof: g,
          _payload: { _status: -1, _result: A },
          _init: re,
        };
      }),
      (Me.memo = function (A, V) {
        return { $$typeof: h, type: A, compare: V === void 0 ? null : V };
      }),
      (Me.startTransition = function (A) {
        var V = K.transition;
        K.transition = {};
        try {
          A();
        } finally {
          K.transition = V;
        }
      }),
      (Me.unstable_act = te),
      (Me.useCallback = function (A, V) {
        return se.current.useCallback(A, V);
      }),
      (Me.useContext = function (A) {
        return se.current.useContext(A);
      }),
      (Me.useDebugValue = function () {}),
      (Me.useDeferredValue = function (A) {
        return se.current.useDeferredValue(A);
      }),
      (Me.useEffect = function (A, V) {
        return se.current.useEffect(A, V);
      }),
      (Me.useId = function () {
        return se.current.useId();
      }),
      (Me.useImperativeHandle = function (A, V, Y) {
        return se.current.useImperativeHandle(A, V, Y);
      }),
      (Me.useInsertionEffect = function (A, V) {
        return se.current.useInsertionEffect(A, V);
      }),
      (Me.useLayoutEffect = function (A, V) {
        return se.current.useLayoutEffect(A, V);
      }),
      (Me.useMemo = function (A, V) {
        return se.current.useMemo(A, V);
      }),
      (Me.useReducer = function (A, V, Y) {
        return se.current.useReducer(A, V, Y);
      }),
      (Me.useRef = function (A) {
        return se.current.useRef(A);
      }),
      (Me.useState = function (A) {
        return se.current.useState(A);
      }),
      (Me.useSyncExternalStore = function (A, V, Y) {
        return se.current.useSyncExternalStore(A, V, Y);
      }),
      (Me.useTransition = function () {
        return se.current.useTransition();
      }),
      (Me.version = "18.3.1"),
      Me
    );
  }
  var lg;
  function tf() {
    return lg || ((lg = 1), (ag.exports = mC())), ag.exports;
  }
  var cg;
  function gC() {
    if (cg) return us;
    cg = 1;
    var e = tf(),
      t = Symbol.for("react.element"),
      n = Symbol.for("react.fragment"),
      i = Object.prototype.hasOwnProperty,
      a =
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      l = { key: !0, ref: !0, __self: !0, __source: !0 };
    function c(d, p, h) {
      var g,
        v = {},
        b = null,
        k = null;
      h !== void 0 && (b = "" + h),
        p.key !== void 0 && (b = "" + p.key),
        p.ref !== void 0 && (k = p.ref);
      for (g in p) i.call(p, g) && !l.hasOwnProperty(g) && (v[g] = p[g]);
      if (d && d.defaultProps)
        for (g in ((p = d.defaultProps), p)) v[g] === void 0 && (v[g] = p[g]);
      return {
        $$typeof: t,
        type: d,
        key: b,
        ref: k,
        props: v,
        _owner: a.current,
      };
    }
    return (us.Fragment = n), (us.jsx = c), (us.jsxs = c), us;
  }
  var ug;
  function vC() {
    return ug || ((ug = 1), (ig.exports = gC())), ig.exports;
  }
  var R = vC();
  function rf(e) {
    return (
      e != null &&
      typeof e == "object" &&
      "nodeType" in e &&
      e.nodeType === Node.ELEMENT_NODE
    );
  }
  function yC() {
    return !!(globalThis != null && globalThis.document);
  }
  function dg(e) {
    return e.parentElement && dg(e.parentElement) ? !0 : e.hidden;
  }
  function bC(e) {
    const t = e.getAttribute("contenteditable");
    return t !== "false" && t != null;
  }
  function xC(e) {
    return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
  }
  function wC(e) {
    var t;
    return ((t = fg(e)) == null ? void 0 : t.defaultView) ?? window;
  }
  function fg(e) {
    return rf(e) ? e.ownerDocument : document;
  }
  function kC(e) {
    return fg(e).activeElement;
  }
  function SC(e, ...t) {
    if (e == null)
      throw new TypeError("Cannot convert undefined or null to object");
    const n = { ...e };
    for (const i of t)
      if (i != null)
        for (const a in i)
          Object.prototype.hasOwnProperty.call(i, a) &&
            (a in n && delete n[a], (n[a] = i[a]));
    return n;
  }
  const Ie = (e) => (e ? "" : void 0),
    nf = (e) => (e ? !0 : void 0);
  function _C(e) {
    return Array.isArray(e);
  }
  function Rr(e) {
    const t = typeof e;
    return e != null && (t === "object" || t === "function") && !_C(e);
  }
  function CC(e) {
    const t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0;
  }
  function EC(e) {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  }
  function of(e) {
    if (e == null) return e;
    const { unitless: t } = EC(e);
    return t || typeof e == "number" ? `${e}px` : e;
  }
  const pg = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
    af = (e) => Object.fromEntries(Object.entries(e).sort(pg));
  function hg(e) {
    const t = af(e);
    return Object.assign(Object.values(t), t);
  }
  function PC(e) {
    const t = Object.keys(af(e));
    return new Set(t);
  }
  function mg(e) {
    if (!e) return e;
    e = of(e) ?? e;
    const t = -0.02;
    return typeof e == "number"
      ? `${e + t}`
      : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + t}`);
  }
  function ds(e, t) {
    const n = ["@media screen"];
    return (
      e && n.push("and", `(min-width: ${of(e)})`),
      t && n.push("and", `(max-width: ${of(t)})`),
      n.join(" ")
    );
  }
  function RC(e) {
    if (!e) return null;
    e.base = e.base ?? "0px";
    const t = hg(e),
      n = Object.entries(e)
        .sort(pg)
        .map(([l, c], d, p) => {
          let [, h] = p[d + 1] ?? [];
          return (
            (h = parseFloat(h) > 0 ? mg(h) : void 0),
            {
              _minW: mg(c),
              breakpoint: l,
              minW: c,
              maxW: h,
              maxWQuery: ds(null, h),
              minWQuery: ds(c),
              minMaxQuery: ds(c, h),
            }
          );
        }),
      i = PC(e),
      a = Array.from(i.values());
    return {
      keys: i,
      normalized: t,
      isResponsive(l) {
        const c = Object.keys(l);
        return c.length > 0 && c.every((d) => i.has(d));
      },
      asObject: af(e),
      asArray: hg(e),
      details: n,
      get(l) {
        return n.find((c) => c.breakpoint === l);
      },
      media: [null, ...t.map((l) => ds(l)).slice(1)],
      toArrayValue(l) {
        if (!Rr(l)) throw new Error("toArrayValue: value must be an object");
        const c = a.map((d) => l[d] ?? null);
        for (; CC(c) === null; ) c.pop();
        return c;
      },
      toObjectValue(l) {
        if (!Array.isArray(l))
          throw new Error("toObjectValue: value must be an array");
        return l.reduce((c, d, p) => {
          const h = a[p];
          return h != null && d != null && (c[h] = d), c;
        }, {});
      },
    };
  }
  function jC(...e) {
    return function (...t) {
      e.forEach((n) => (n == null ? void 0 : n(...t)));
    };
  }
  function et(...e) {
    return function (t) {
      e.some(
        (n) => (n == null || n(t), t == null ? void 0 : t.defaultPrevented)
      );
    };
  }
  var x = tf();
  const pt = dc(x),
    gg = hC({ __proto__: null, default: pt }, [x]);
  function vg(e) {
    return x.Children.toArray(e).filter((t) => x.isValidElement(t));
  }
  function fc(e) {
    const t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t;
  }
  function OC(e, t) {
    return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
  }
  function tr(e = {}) {
    const {
        name: t,
        strict: n = !0,
        hookName: i = "useContext",
        providerName: a = "Provider",
        errorMessage: l,
        defaultValue: c,
      } = e,
      d = x.createContext(c);
    d.displayName = t;
    function p() {
      var g;
      const h = x.useContext(d);
      if (!h && n) {
        const v = new Error(l ?? OC(i, a));
        throw (
          ((v.name = "ContextError"),
          (g = Error.captureStackTrace) == null || g.call(Error, v, p),
          v)
        );
      }
      return h;
    }
    return [d.Provider, p, d];
  }
  const ze = (...e) => e.filter(Boolean).join(" "),
    yg = (e) => e.hasAttribute("tabindex"),
    AC = (e) => yg(e) && e.tabIndex === -1;
  function pc(e) {
    if (!rf(e) || dg(e) || xC(e)) return !1;
    const { localName: t } = e;
    if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
    const n = {
      a: () => e.hasAttribute("href"),
      audio: () => e.hasAttribute("controls"),
      video: () => e.hasAttribute("controls"),
    };
    return t in n ? n[t]() : bC(e) ? !0 : yg(e);
  }
  function TC(e) {
    return e ? rf(e) && pc(e) && !AC(e) : !1;
  }
  const MC = [
      "input:not(:disabled):not([disabled])",
      "select:not(:disabled):not([disabled])",
      "textarea:not(:disabled):not([disabled])",
      "embed",
      "iframe",
      "object",
      "a[href]",
      "area[href]",
      "button:not(:disabled):not([disabled])",
      "[tabindex]",
      "audio[controls]",
      "video[controls]",
      "*[tabindex]:not([aria-disabled])",
      "*[contenteditable]",
    ],
    zC = MC.join(),
    DC = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
  function bg(e) {
    const t = Array.from(e.querySelectorAll(zC));
    return t.unshift(e), t.filter((n) => pc(n) && DC(n));
  }
  function IC(e, t, n, i) {
    const a = typeof t == "string" ? t.split(".") : [t];
    for (i = 0; i < a.length && e; i += 1) e = e[a[i]];
    return e === void 0 ? n : e;
  }
  const FC = (e) => {
      const t = new WeakMap();
      return (n, i, a, l) => {
        if (typeof n > "u") return e(n, i, a);
        t.has(n) || t.set(n, new Map());
        const c = t.get(n);
        if (c.has(i)) return c.get(i);
        const d = e(n, i, a, l);
        return c.set(i, d), d;
      };
    },
    xg = FC(IC),
    LC = (e) => e.default || e;
  function NC(e) {
    const {
      wasSelected: t,
      enabled: n,
      isSelected: i,
      mode: a = "unmount",
    } = e;
    return !!(!n || i || (a === "keepMounted" && t));
  }
  function sf(e, t = []) {
    const n = Object.assign({}, e);
    for (const i of t) i in n && delete n[i];
    return n;
  }
  function $C(e, t) {
    const n = {};
    for (const i of t) i in e && (n[i] = e[i]);
    return n;
  }
  function BC(e, t) {
    return Array.isArray(e)
      ? e.map((n) => (n === null ? null : t(n)))
      : Rr(e)
      ? Object.keys(e).reduce((n, i) => ((n[i] = t(e[i])), n), {})
      : e != null
      ? t(e)
      : null;
  }
  const VC = (e) => typeof e == "function";
  function vr(e, ...t) {
    return VC(e) ? e(...t) : e;
  }
  function WC(e, t) {
    const n = {},
      i = {};
    for (const [a, l] of Object.entries(e))
      t.includes(a) ? (n[a] = l) : (i[a] = l);
    return [n, i];
  }
  function UC(e, ...t) {
    const n = Object.getOwnPropertyDescriptors(e),
      i = Object.keys(n),
      a = (c) => {
        const d = {};
        for (let p = 0; p < c.length; p++) {
          const h = c[p];
          n[h] && (Object.defineProperty(d, h, n[h]), delete n[h]);
        }
        return d;
      },
      l = (c) => a(Array.isArray(c) ? c : i.filter(c));
    return t.map(l).concat(a(i));
  }
  function wg(e, t, n = {}) {
    const { stop: i, getKey: a } = n;
    function l(c, d = []) {
      if (Rr(c) || Array.isArray(c)) {
        const p = {};
        for (const [h, g] of Object.entries(c)) {
          const v = (a == null ? void 0 : a(h)) ?? h,
            b = [...d, v];
          if (i != null && i(c, b)) return t(c, d);
          p[v] = l(g, b);
        }
        return p;
      }
      return t(c, d);
    }
    return l(e);
  }
  var hc = { exports: {} };
  hc.exports;
  var kg;
  function HC() {
    return (
      kg ||
        ((kg = 1),
        (function (e, t) {
          var n = 200,
            i = "__lodash_hash_undefined__",
            a = 800,
            l = 16,
            c = 9007199254740991,
            d = "[object Arguments]",
            p = "[object Array]",
            h = "[object AsyncFunction]",
            g = "[object Boolean]",
            v = "[object Date]",
            b = "[object Error]",
            k = "[object Function]",
            S = "[object GeneratorFunction]",
            w = "[object Map]",
            _ = "[object Number]",
            j = "[object Null]",
            O = "[object Object]",
            M = "[object Proxy]",
            $ = "[object RegExp]",
            E = "[object Set]",
            I = "[object String]",
            L = "[object Undefined]",
            H = "[object WeakMap]",
            G = "[object ArrayBuffer]",
            q = "[object DataView]",
            ie = "[object Float32Array]",
            he = "[object Float64Array]",
            ve = "[object Int8Array]",
            Ee = "[object Int16Array]",
            J = "[object Int32Array]",
            re = "[object Uint8Array]",
            se = "[object Uint8ClampedArray]",
            K = "[object Uint16Array]",
            ne = "[object Uint32Array]",
            te = /[\\^$.*+?()[\]{}|]/g,
            A = /^\[object .+?Constructor\]$/,
            V = /^(?:0|[1-9]\d*)$/,
            Y = {};
          (Y[ie] =
            Y[he] =
            Y[ve] =
            Y[Ee] =
            Y[J] =
            Y[re] =
            Y[se] =
            Y[K] =
            Y[ne] =
              !0),
            (Y[d] =
              Y[p] =
              Y[G] =
              Y[g] =
              Y[q] =
              Y[v] =
              Y[b] =
              Y[k] =
              Y[w] =
              Y[_] =
              Y[O] =
              Y[$] =
              Y[E] =
              Y[I] =
              Y[H] =
                !1);
          var oe = typeof to == "object" && to && to.Object === Object && to,
            pe =
              typeof self == "object" && self && self.Object === Object && self,
            ye = oe || pe || Function("return this")(),
            de = t && !t.nodeType && t,
            ge = de && !0 && e && !e.nodeType && e,
            Oe = ge && ge.exports === de,
            Qe = Oe && oe.process,
            dt = (function () {
              try {
                var C = ge && ge.require && ge.require("util").types;
                return C || (Qe && Qe.binding && Qe.binding("util"));
              } catch {}
            })(),
            Yt = dt && dt.isTypedArray;
          function $t(C, F, U) {
            switch (U.length) {
              case 0:
                return C.call(F);
              case 1:
                return C.call(F, U[0]);
              case 2:
                return C.call(F, U[0], U[1]);
              case 3:
                return C.call(F, U[0], U[1], U[2]);
            }
            return C.apply(F, U);
          }
          function Pe(C, F) {
            for (var U = -1, le = Array(C); ++U < C; ) le[U] = F(U);
            return le;
          }
          function qe(C) {
            return function (F) {
              return C(F);
            };
          }
          function tt(C, F) {
            return C == null ? void 0 : C[F];
          }
          function be(C, F) {
            return function (U) {
              return C(F(U));
            };
          }
          var Ze = Array.prototype,
            Xe = Function.prototype,
            Ke = Object.prototype,
            yt = ye["__core-js_shared__"],
            Qt = Xe.toString,
            Bt = Ke.hasOwnProperty,
            tn = (function () {
              var C = /[^.]+$/.exec((yt && yt.keys && yt.keys.IE_PROTO) || "");
              return C ? "Symbol(src)_1." + C : "";
            })(),
            vo = Ke.toString,
            hi = Qt.call(Object),
            yo = RegExp(
              "^" +
                Qt.call(Bt)
                  .replace(te, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            Ir = Oe ? ye.Buffer : void 0,
            Cl = ye.Symbol,
            bo = ye.Uint8Array;
          Ir && Ir.allocUnsafe;
          var xo = be(Object.getPrototypeOf, Object),
            Wu = Object.create,
            Uu = Ke.propertyIsEnumerable,
            Hu = Ze.splice,
            Hn = Cl ? Cl.toStringTag : void 0,
            wo = (function () {
              try {
                var C = Tl(Object, "defineProperty");
                return C({}, "", {}), C;
              } catch {}
            })(),
            El = Ir ? Ir.isBuffer : void 0,
            ja = Math.max,
            Pl = Date.now,
            Oa = Tl(ye, "Map"),
            Fr = Tl(Object, "create"),
            ko = (function () {
              function C() {}
              return function (F) {
                if (!Pn(F)) return {};
                if (Wu) return Wu(F);
                C.prototype = F;
                var U = new C();
                return (C.prototype = void 0), U;
              };
            })();
          function En(C) {
            var F = -1,
              U = C == null ? 0 : C.length;
            for (this.clear(); ++F < U; ) {
              var le = C[F];
              this.set(le[0], le[1]);
            }
          }
          function qu() {
            (this.__data__ = Fr ? Fr(null) : {}), (this.size = 0);
          }
          function Ku(C) {
            var F = this.has(C) && delete this.__data__[C];
            return (this.size -= F ? 1 : 0), F;
          }
          function Gu(C) {
            var F = this.__data__;
            if (Fr) {
              var U = F[C];
              return U === i ? void 0 : U;
            }
            return Bt.call(F, C) ? F[C] : void 0;
          }
          function Zu(C) {
            var F = this.__data__;
            return Fr ? F[C] !== void 0 : Bt.call(F, C);
          }
          function Rl(C, F) {
            var U = this.__data__;
            return (
              (this.size += this.has(C) ? 0 : 1),
              (U[C] = Fr && F === void 0 ? i : F),
              this
            );
          }
          (En.prototype.clear = qu),
            (En.prototype.delete = Ku),
            (En.prototype.get = Gu),
            (En.prototype.has = Zu),
            (En.prototype.set = Rl);
          function Lr(C) {
            var F = -1,
              U = C == null ? 0 : C.length;
            for (this.clear(); ++F < U; ) {
              var le = C[F];
              this.set(le[0], le[1]);
            }
          }
          function mi() {
            (this.__data__ = []), (this.size = 0);
          }
          function jl(C) {
            var F = this.__data__,
              U = Ma(F, C);
            if (U < 0) return !1;
            var le = F.length - 1;
            return U == le ? F.pop() : Hu.call(F, U, 1), --this.size, !0;
          }
          function gi(C) {
            var F = this.__data__,
              U = Ma(F, C);
            return U < 0 ? void 0 : F[U][1];
          }
          function xm(C) {
            return Ma(this.__data__, C) > -1;
          }
          function vi(C, F) {
            var U = this.__data__,
              le = Ma(U, C);
            return (
              le < 0 ? (++this.size, U.push([C, F])) : (U[le][1] = F), this
            );
          }
          (Lr.prototype.clear = mi),
            (Lr.prototype.delete = jl),
            (Lr.prototype.get = gi),
            (Lr.prototype.has = xm),
            (Lr.prototype.set = vi);
          function rn(C) {
            var F = -1,
              U = C == null ? 0 : C.length;
            for (this.clear(); ++F < U; ) {
              var le = C[F];
              this.set(le[0], le[1]);
            }
          }
          function Aa() {
            (this.size = 0),
              (this.__data__ = {
                hash: new En(),
                map: new (Oa || Lr)(),
                string: new En(),
              });
          }
          function Ol(C) {
            var F = La(this, C).delete(C);
            return (this.size -= F ? 1 : 0), F;
          }
          function wm(C) {
            return La(this, C).get(C);
          }
          function km(C) {
            return La(this, C).has(C);
          }
          function Sm(C, F) {
            var U = La(this, C),
              le = U.size;
            return U.set(C, F), (this.size += U.size == le ? 0 : 1), this;
          }
          (rn.prototype.clear = Aa),
            (rn.prototype.delete = Ol),
            (rn.prototype.get = wm),
            (rn.prototype.has = km),
            (rn.prototype.set = Sm);
          function dr(C) {
            var F = (this.__data__ = new Lr(C));
            this.size = F.size;
          }
          function Xu() {
            (this.__data__ = new Lr()), (this.size = 0);
          }
          function Yu(C) {
            var F = this.__data__,
              U = F.delete(C);
            return (this.size = F.size), U;
          }
          function _m(C) {
            return this.__data__.get(C);
          }
          function Qu(C) {
            return this.__data__.has(C);
          }
          function Ju(C, F) {
            var U = this.__data__;
            if (U instanceof Lr) {
              var le = U.__data__;
              if (!Oa || le.length < n - 1)
                return le.push([C, F]), (this.size = ++U.size), this;
              U = this.__data__ = new rn(le);
            }
            return U.set(C, F), (this.size = U.size), this;
          }
          (dr.prototype.clear = Xu),
            (dr.prototype.delete = Yu),
            (dr.prototype.get = _m),
            (dr.prototype.has = Qu),
            (dr.prototype.set = Ju);
          function ed(C, F) {
            var U = Br(C),
              le = !U && $r(C),
              Te = !U && !le && _o(C),
              Ye = !U && !le && !Te && Fl(C),
              rt = U || le || Te || Ye,
              Ae = rt ? Pe(C.length, String) : [],
              Je = Ae.length;
            for (var Vt in C)
              (rt &&
                (Vt == "length" ||
                  (Te && (Vt == "offset" || Vt == "parent")) ||
                  (Ye &&
                    (Vt == "buffer" ||
                      Vt == "byteLength" ||
                      Vt == "byteOffset")) ||
                  Na(Vt, Je))) ||
                Ae.push(Vt);
            return Ae;
          }
          function Ta(C, F, U) {
            ((U !== void 0 && !qn(C[F], U)) || (U === void 0 && !(F in C))) &&
              lt(C, F, U);
          }
          function Cm(C, F, U) {
            var le = C[F];
            (!(Bt.call(C, F) && qn(le, U)) || (U === void 0 && !(F in C))) &&
              lt(C, F, U);
          }
          function Ma(C, F) {
            for (var U = C.length; U--; ) if (qn(C[U][0], F)) return U;
            return -1;
          }
          function lt(C, F, U) {
            F == "__proto__" && wo
              ? wo(C, F, {
                  configurable: !0,
                  enumerable: !0,
                  value: U,
                  writable: !0,
                })
              : (C[F] = U);
          }
          var Em = Fa();
          function So(C) {
            return C == null
              ? C === void 0
                ? L
                : j
              : Hn && Hn in Object(C)
              ? Ml(C)
              : od(C);
          }
          function Al(C) {
            return nn(C) && So(C) == d;
          }
          function za(C) {
            if (!Pn(C) || zl(C)) return !1;
            var F = Wr(C) ? yo : A;
            return F.test(Il(C));
          }
          function Pm(C) {
            return nn(C) && sd(C.length) && !!Y[So(C)];
          }
          function td(C) {
            if (!Pn(C)) return nd(C);
            var F = Ne(C),
              U = [];
            for (var le in C)
              (le == "constructor" && (F || !Bt.call(C, le))) || U.push(le);
            return U;
          }
          function yi(C, F, U, le, Te) {
            C !== F &&
              Em(
                F,
                function (Ye, rt) {
                  if ((Te || (Te = new dr()), Pn(Ye)))
                    Nr(C, F, rt, U, yi, le, Te);
                  else {
                    var Ae = le ? le($a(C, rt), Ye, rt + "", C, F, Te) : void 0;
                    Ae === void 0 && (Ae = Ye), Ta(C, rt, Ae);
                  }
                },
                Ll
              );
          }
          function Nr(C, F, U, le, Te, Ye, rt) {
            var Ae = $a(C, U),
              Je = $a(F, U),
              Vt = rt.get(Je);
            if (Vt) {
              Ta(C, U, Vt);
              return;
            }
            var Wt = Ye ? Ye(Ae, Je, U + "", C, F, rt) : void 0,
              Rn = Wt === void 0;
            if (Rn) {
              var Po = Br(Je),
                Va = !Po && _o(Je),
                Ut = !Po && !Va && Fl(Je);
              (Wt = Je),
                Po || Va || Ut
                  ? Br(Ae)
                    ? (Wt = Ae)
                    : wi(Ae)
                    ? (Wt = Da(Ae))
                    : Va
                    ? ((Rn = !1), (Wt = jm(Je)))
                    : Ut
                    ? ((Rn = !1), (Wt = Am(Je)))
                    : (Wt = [])
                  : Mm(Je) || $r(Je)
                  ? ((Wt = Ae),
                    $r(Ae)
                      ? (Wt = Ba(Ae))
                      : (!Pn(Ae) || Wr(Ae)) && (Wt = rd(Je)))
                  : (Rn = !1);
            }
            Rn && (rt.set(Je, Wt), Te(Wt, Je, le, Ye, rt), rt.delete(Je)),
              Ta(C, U, Wt);
          }
          function Rm(C, F) {
            return id(Dl(C, F, Co), C + "");
          }
          var _r = wo
            ? function (C, F) {
                return wo(C, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: ki(F),
                  writable: !0,
                });
              }
            : Co;
          function jm(C, F) {
            return C.slice();
          }
          function Om(C) {
            var F = new C.constructor(C.byteLength);
            return new bo(F).set(new bo(C)), F;
          }
          function Am(C, F) {
            var U = Om(C.buffer);
            return new C.constructor(U, C.byteOffset, C.length);
          }
          function Da(C, F) {
            var U = -1,
              le = C.length;
            for (F || (F = Array(le)); ++U < le; ) F[U] = C[U];
            return F;
          }
          function Ia(C, F, U, le) {
            var Te = !U;
            U || (U = {});
            for (var Ye = -1, rt = F.length; ++Ye < rt; ) {
              var Ae = F[Ye],
                Je = void 0;
              Je === void 0 && (Je = C[Ae]), Te ? lt(U, Ae, Je) : Cm(U, Ae, Je);
            }
            return U;
          }
          function bi(C) {
            return Rm(function (F, U) {
              var le = -1,
                Te = U.length,
                Ye = Te > 1 ? U[Te - 1] : void 0,
                rt = Te > 2 ? U[2] : void 0;
              for (
                Ye =
                  C.length > 3 && typeof Ye == "function" ? (Te--, Ye) : void 0,
                  rt &&
                    xi(U[0], U[1], rt) &&
                    ((Ye = Te < 3 ? void 0 : Ye), (Te = 1)),
                  F = Object(F);
                ++le < Te;

              ) {
                var Ae = U[le];
                Ae && C(F, Ae, le, Ye);
              }
              return F;
            });
          }
          function Fa(C) {
            return function (F, U, le) {
              for (
                var Te = -1, Ye = Object(F), rt = le(F), Ae = rt.length;
                Ae--;

              ) {
                var Je = rt[++Te];
                if (U(Ye[Je], Je, Ye) === !1) break;
              }
              return F;
            };
          }
          function La(C, F) {
            var U = C.__data__;
            return Tm(F) ? U[typeof F == "string" ? "string" : "hash"] : U.map;
          }
          function Tl(C, F) {
            var U = tt(C, F);
            return za(U) ? U : void 0;
          }
          function Ml(C) {
            var F = Bt.call(C, Hn),
              U = C[Hn];
            try {
              C[Hn] = void 0;
              var le = !0;
            } catch {}
            var Te = vo.call(C);
            return le && (F ? (C[Hn] = U) : delete C[Hn]), Te;
          }
          function rd(C) {
            return typeof C.constructor == "function" && !Ne(C)
              ? ko(xo(C))
              : {};
          }
          function Na(C, F) {
            var U = typeof C;
            return (
              (F = F ?? c),
              !!F &&
                (U == "number" || (U != "symbol" && V.test(C))) &&
                C > -1 &&
                C % 1 == 0 &&
                C < F
            );
          }
          function xi(C, F, U) {
            if (!Pn(U)) return !1;
            var le = typeof F;
            return (
              le == "number"
                ? Vr(U) && Na(F, U.length)
                : le == "string" && F in U
            )
              ? qn(U[F], C)
              : !1;
          }
          function Tm(C) {
            var F = typeof C;
            return F == "string" ||
              F == "number" ||
              F == "symbol" ||
              F == "boolean"
              ? C !== "__proto__"
              : C === null;
          }
          function zl(C) {
            return !!tn && tn in C;
          }
          function Ne(C) {
            var F = C && C.constructor,
              U = (typeof F == "function" && F.prototype) || Ke;
            return C === U;
          }
          function nd(C) {
            var F = [];
            if (C != null) for (var U in Object(C)) F.push(U);
            return F;
          }
          function od(C) {
            return vo.call(C);
          }
          function Dl(C, F, U) {
            return (
              (F = ja(F === void 0 ? C.length - 1 : F, 0)),
              function () {
                for (
                  var le = arguments,
                    Te = -1,
                    Ye = ja(le.length - F, 0),
                    rt = Array(Ye);
                  ++Te < Ye;

                )
                  rt[Te] = le[F + Te];
                Te = -1;
                for (var Ae = Array(F + 1); ++Te < F; ) Ae[Te] = le[Te];
                return (Ae[F] = U(rt)), $t(C, this, Ae);
              }
            );
          }
          function $a(C, F) {
            if (
              !(F === "constructor" && typeof C[F] == "function") &&
              F != "__proto__"
            )
              return C[F];
          }
          var id = ad(_r);
          function ad(C) {
            var F = 0,
              U = 0;
            return function () {
              var le = Pl(),
                Te = l - (le - U);
              if (((U = le), Te > 0)) {
                if (++F >= a) return arguments[0];
              } else F = 0;
              return C.apply(void 0, arguments);
            };
          }
          function Il(C) {
            if (C != null) {
              try {
                return Qt.call(C);
              } catch {}
              try {
                return C + "";
              } catch {}
            }
            return "";
          }
          function qn(C, F) {
            return C === F || (C !== C && F !== F);
          }
          var $r = Al(
              (function () {
                return arguments;
              })()
            )
              ? Al
              : function (C) {
                  return nn(C) && Bt.call(C, "callee") && !Uu.call(C, "callee");
                },
            Br = Array.isArray;
          function Vr(C) {
            return C != null && sd(C.length) && !Wr(C);
          }
          function wi(C) {
            return nn(C) && Vr(C);
          }
          var _o = El || Eo;
          function Wr(C) {
            if (!Pn(C)) return !1;
            var F = So(C);
            return F == k || F == S || F == h || F == M;
          }
          function sd(C) {
            return typeof C == "number" && C > -1 && C % 1 == 0 && C <= c;
          }
          function Pn(C) {
            var F = typeof C;
            return C != null && (F == "object" || F == "function");
          }
          function nn(C) {
            return C != null && typeof C == "object";
          }
          function Mm(C) {
            if (!nn(C) || So(C) != O) return !1;
            var F = xo(C);
            if (F === null) return !0;
            var U = Bt.call(F, "constructor") && F.constructor;
            return typeof U == "function" && U instanceof U && Qt.call(U) == hi;
          }
          var Fl = Yt ? qe(Yt) : Pm;
          function Ba(C) {
            return Ia(C, Ll(C));
          }
          function Ll(C) {
            return Vr(C) ? ed(C) : td(C);
          }
          var zm = bi(function (C, F, U, le) {
            yi(C, F, U, le);
          });
          function ki(C) {
            return function () {
              return C;
            };
          }
          function Co(C) {
            return C;
          }
          function Eo() {
            return !1;
          }
          e.exports = zm;
        })(hc, hc.exports)),
      hc.exports
    );
  }
  var qC = HC();
  const dn = dc(qC);
  function ro(e, t = []) {
    const n = x.useRef(e);
    return (
      x.useEffect(() => {
        n.current = e;
      }),
      x.useCallback((...i) => {
        var a;
        return (a = n.current) == null ? void 0 : a.call(n, ...i);
      }, t)
    );
  }
  function lf(e, t, n, i) {
    const a = ro(n);
    return (
      x.useEffect(() => {
        const l = typeof e == "function" ? e() : e ?? document;
        if (!(!n || !l))
          return (
            l.addEventListener(t, a, i),
            () => {
              l.removeEventListener(t, a, i);
            }
          );
      }, [t, e, i, a, n]),
      () => {
        var l;
        (l = typeof e == "function" ? e() : e ?? document) == null ||
          l.removeEventListener(t, a, i);
      }
    );
  }
  function KC(e) {
    const { isOpen: t, ref: n } = e,
      [i, a] = x.useState(t),
      [l, c] = x.useState(!1);
    return (
      x.useEffect(() => {
        l || (a(t), c(!0));
      }, [t, l, i]),
      lf(
        () => n.current,
        "animationend",
        () => {
          a(t);
        }
      ),
      {
        present: !(!t && !i),
        onComplete() {
          var h;
          const d = wC(n.current),
            p = new d.CustomEvent("animationend", { bubbles: !0 });
          (h = n.current) == null || h.dispatchEvent(p);
        },
      }
    );
  }
  function Sg(e = {}) {
    const { onClose: t, onOpen: n, isOpen: i, id: a } = e,
      l = ro(n),
      c = ro(t),
      [d, p] = x.useState(e.defaultIsOpen || !1),
      h = i !== void 0 ? i : d,
      g = i !== void 0,
      v = x.useId(),
      b = a ?? `disclosure-${v}`,
      k = x.useCallback(() => {
        g || p(!1), c == null || c();
      }, [g, c]),
      S = x.useCallback(() => {
        g || p(!0), l == null || l();
      }, [g, l]),
      w = x.useCallback(() => {
        h ? k() : S();
      }, [h, S, k]);
    function _(O = {}) {
      return {
        ...O,
        "aria-expanded": h,
        "aria-controls": b,
        onClick(M) {
          var $;
          ($ = O.onClick) == null || $.call(O, M), w();
        },
      };
    }
    function j(O = {}) {
      return { ...O, hidden: !h, id: b };
    }
    return {
      isOpen: h,
      onOpen: S,
      onClose: k,
      onToggle: w,
      isControlled: g,
      getButtonProps: _,
      getDisclosureProps: j,
    };
  }
  const Vo =
      globalThis != null && globalThis.document
        ? x.useLayoutEffect
        : x.useEffect,
    fs = (e, t) => {
      const n = x.useRef(!1),
        i = x.useRef(!1);
      x.useEffect(() => {
        if (n.current && i.current) return e();
        i.current = !0;
      }, t),
        x.useEffect(
          () => (
            (n.current = !0),
            () => {
              n.current = !1;
            }
          ),
          []
        );
    };
  function GC(e) {
    const t = e.current;
    if (!t) return !1;
    const n = kC(t);
    return !n || t.contains(n) ? !1 : !!TC(n);
  }
  function ZC(e, t) {
    const { shouldFocus: n, visible: i, focusRef: a } = t,
      l = n && !i;
    fs(() => {
      if (!l || GC(e)) return;
      const c = (a == null ? void 0 : a.current) || e.current;
      let d;
      if (c)
        return (
          (d = requestAnimationFrame(() => {
            c.focus({ preventScroll: !0 });
          })),
          () => {
            cancelAnimationFrame(d);
          }
        );
    }, [l, e, a]);
  }
  const XC = { preventScroll: !0, shouldFocus: !1 };
  function YC(e, t = XC) {
    const { focusRef: n, preventScroll: i, shouldFocus: a, visible: l } = t,
      c = QC(e) ? e.current : e,
      d = a && l,
      p = x.useRef(d),
      h = x.useRef(l);
    Vo(() => {
      !h.current && l && (p.current = d), (h.current = l);
    }, [l, d]);
    const g = x.useCallback(() => {
      if (
        !(!l || !c || !p.current) &&
        ((p.current = !1), !c.contains(document.activeElement))
      )
        if (n != null && n.current)
          requestAnimationFrame(() => {
            var v;
            (v = n.current) == null || v.focus({ preventScroll: i });
          });
        else {
          const v = bg(c);
          v.length > 0 &&
            requestAnimationFrame(() => {
              v[0].focus({ preventScroll: i });
            });
        }
    }, [l, i, c, n]);
    fs(() => {
      g();
    }, [g]),
      lf(c, "transitionend", g);
  }
  function QC(e) {
    return "current" in e;
  }
  function JC(e) {
    return "current" in e;
  }
  const _g = () => typeof window < "u";
  function e2() {
    var e;
    return (
      ((e = navigator.userAgentData) == null ? void 0 : e.platform) ??
      navigator.platform
    );
  }
  const t2 = (e) => _g() && e.test(navigator.vendor),
    r2 = (e) => _g() && e.test(e2()),
    n2 = () => r2(/mac|iphone|ipad|ipod/i),
    o2 = () => n2() && t2(/apple/i);
  function i2(e) {
    const { ref: t, elements: n, enabled: i } = e,
      a = () => {
        var l;
        return ((l = t.current) == null ? void 0 : l.ownerDocument) ?? document;
      };
    lf(a, "pointerdown", (l) => {
      var p, h;
      if (!o2() || !i) return;
      const c =
          ((h = (p = l.composedPath) == null ? void 0 : p.call(l)) == null
            ? void 0
            : h[0]) ?? l.target,
        d = (n ?? [t]).some((g) => {
          const v = JC(g) ? g.current : g;
          return (v == null ? void 0 : v.contains(c)) || v === c;
        });
      a().activeElement !== c && d && (l.preventDefault(), c.focus());
    });
  }
  function a2(e, t) {
    if (e != null) {
      if (typeof e == "function") {
        e(t);
        return;
      }
      try {
        e.current = t;
      } catch {
        throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
      }
    }
  }
  function rr(...e) {
    return (t) => {
      e.forEach((n) => {
        a2(n, t);
      });
    };
  }
  function s2(...e) {
    return x.useMemo(() => rr(...e), e);
  }
  function l2(e) {
    const { ref: t, handler: n, enabled: i = !0 } = e,
      a = ro(n),
      l = x.useRef({
        isPointerDown: !1,
        ignoreEmulatedMouseEvents: !1,
      }).current;
    x.useEffect(() => {
      if (!i) return;
      const c = (g) => {
          cf(g, t) && (l.isPointerDown = !0);
        },
        d = (g) => {
          if (l.ignoreEmulatedMouseEvents) {
            l.ignoreEmulatedMouseEvents = !1;
            return;
          }
          l.isPointerDown && n && cf(g, t) && ((l.isPointerDown = !1), a(g));
        },
        p = (g) => {
          (l.ignoreEmulatedMouseEvents = !0),
            n && l.isPointerDown && cf(g, t) && ((l.isPointerDown = !1), a(g));
        },
        h = Cg(t.current);
      return (
        h.addEventListener("mousedown", c, !0),
        h.addEventListener("mouseup", d, !0),
        h.addEventListener("touchstart", c, !0),
        h.addEventListener("touchend", p, !0),
        () => {
          h.removeEventListener("mousedown", c, !0),
            h.removeEventListener("mouseup", d, !0),
            h.removeEventListener("touchstart", c, !0),
            h.removeEventListener("touchend", p, !0);
        }
      );
    }, [n, t, a, l, i]);
  }
  function cf(e, t) {
    var i, a;
    const n =
      ((i = e.composedPath) == null ? void 0 : i.call(e)[0]) ?? e.target;
    return n && !Cg(n).contains(n)
      ? !1
      : !((a = t.current) != null && a.contains(n));
  }
  function Cg(e) {
    return (e == null ? void 0 : e.ownerDocument) ?? document;
  }
  function c2(e, t) {
    const n = ro(e);
    x.useEffect(() => {
      if (t == null) return;
      let i = null;
      return (
        (i = window.setTimeout(() => {
          n();
        }, t)),
        () => {
          i && window.clearTimeout(i);
        }
      );
    }, [t, n]);
  }
  const Ct = {
      open: (e, t) => `${e}[data-open], ${e}[open], ${e}[data-state=open] ${t}`,
      closed: (e, t) => `${e}[data-closed], ${e}[data-state=closed] ${t}`,
      hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
      focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
      focusVisible: (e, t) => `${e}:focus-visible ${t}`,
      focusWithin: (e, t) => `${e}:focus-within ${t}`,
      active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
      disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
      invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
      checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
      indeterminate: (e, t) =>
        `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
      readOnly: (e, t) =>
        `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
      expanded: (e, t) =>
        `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
      placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
    },
    fn = (e) => Eg((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
    Mn = (e) => Eg((t) => e(t, "~ &"), "[data-peer]", ".peer"),
    Eg = (e, ...t) => t.map(e).join(", "),
    Di = {
      _hover: "&:hover, &[data-hover]",
      _active: "&:active, &[data-active]",
      _focus: "&:focus, &[data-focus]",
      _highlighted: "&[data-highlighted]",
      _focusWithin: "&:focus-within, &[data-focus-within]",
      _focusVisible: "&:focus-visible, &[data-focus-visible]",
      _disabled:
        "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
      _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
      _before: "&::before",
      _after: "&::after",
      _empty: "&:empty, &[data-empty]",
      _expanded:
        "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
      _checked: "&[aria-checked=true], &[data-checked], &[data-state=checked]",
      _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
      _pressed: "&[aria-pressed=true], &[data-pressed]",
      _invalid: "&[aria-invalid=true], &[data-invalid]",
      _valid: "&[data-valid], &[data-state=valid]",
      _loading: "&[data-loading], &[aria-busy=true]",
      _selected: "&[aria-selected=true], &[data-selected]",
      _hidden: "&[hidden], &[data-hidden]",
      _autofill: "&:-webkit-autofill",
      _even: "&:nth-of-type(even)",
      _odd: "&:nth-of-type(odd)",
      _first: "&:first-of-type",
      _firstLetter: "&::first-letter",
      _last: "&:last-of-type",
      _notFirst: "&:not(:first-of-type)",
      _notLast: "&:not(:last-of-type)",
      _visited: "&:visited",
      _activeLink: "&[aria-current=page]",
      _activeStep: "&[aria-current=step]",
      _indeterminate:
        "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
      _groupOpen: fn(Ct.open),
      _groupClosed: fn(Ct.closed),
      _groupHover: fn(Ct.hover),
      _peerHover: Mn(Ct.hover),
      _groupFocus: fn(Ct.focus),
      _peerFocus: Mn(Ct.focus),
      _groupFocusVisible: fn(Ct.focusVisible),
      _peerFocusVisible: Mn(Ct.focusVisible),
      _groupActive: fn(Ct.active),
      _peerActive: Mn(Ct.active),
      _groupDisabled: fn(Ct.disabled),
      _peerDisabled: Mn(Ct.disabled),
      _groupInvalid: fn(Ct.invalid),
      _peerInvalid: Mn(Ct.invalid),
      _groupChecked: fn(Ct.checked),
      _peerChecked: Mn(Ct.checked),
      _groupFocusWithin: fn(Ct.focusWithin),
      _peerFocusWithin: Mn(Ct.focusWithin),
      _peerPlaceholderShown: Mn(Ct.placeholderShown),
      _placeholder: "&::placeholder, &[data-placeholder]",
      _placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
      _fullScreen: "&:fullscreen, &[data-fullscreen]",
      _selection: "&::selection",
      _rtl: "[dir=rtl] &, &[dir=rtl]",
      _ltr: "[dir=ltr] &, &[dir=ltr]",
      _mediaDark: "@media (prefers-color-scheme: dark)",
      _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
      _dark:
        ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
      _light:
        ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
      _horizontal: "&[data-orientation=horizontal]",
      _vertical: "&[data-orientation=vertical]",
      _open: "&[data-open], &[open], &[data-state=open]",
      _closed: "&[data-closed], &[data-state=closed]",
      _complete: "&[data-complete]",
      _incomplete: "&[data-incomplete]",
      _current: "&[data-current]",
    },
    Pg = Object.keys(Di),
    u2 = (e) => /!(important)?$/.test(e),
    Rg = (e) =>
      typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
    d2 = (e, t) => (n) => {
      const i = String(t),
        a = u2(i),
        l = Rg(i),
        c = e ? `${e}.${l}` : l;
      let d = Rr(n.__cssMap) && c in n.__cssMap ? n.__cssMap[c].varRef : t;
      return (d = Rg(d)), a ? `${d} !important` : d;
    };
  function uf(e) {
    const { scale: t, transform: n, compose: i } = e;
    return (a, l) => {
      const c = d2(t, a)(l);
      let d = (n == null ? void 0 : n(c, l)) ?? c;
      return i && (d = i(d, l)), d;
    };
  }
  const mc =
    (...e) =>
    (t) =>
      e.reduce((n, i) => i(n), t);
  function jr(e, t) {
    return (n) => {
      const i = { property: n, scale: e };
      return (i.transform = uf({ scale: e, transform: t })), i;
    };
  }
  const f2 =
    ({ rtl: e, ltr: t }) =>
    (n) =>
      n.direction === "rtl" ? e : t;
  function p2(e) {
    const { property: t, scale: n, transform: i } = e;
    return {
      scale: n,
      property: f2(t),
      transform: n ? uf({ scale: n, compose: i }) : i,
    };
  }
  const jg = [
    "rotate(var(--chakra-rotate, 0))",
    "scaleX(var(--chakra-scale-x, 1))",
    "scaleY(var(--chakra-scale-y, 1))",
    "skewX(var(--chakra-skew-x, 0))",
    "skewY(var(--chakra-skew-y, 0))",
  ];
  function h2() {
    return [
      "translateX(var(--chakra-translate-x, 0))",
      "translateY(var(--chakra-translate-y, 0))",
      ...jg,
    ].join(" ");
  }
  function m2() {
    return [
      "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
      ...jg,
    ].join(" ");
  }
  const g2 = {
      "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
      filter: [
        "var(--chakra-blur)",
        "var(--chakra-brightness)",
        "var(--chakra-contrast)",
        "var(--chakra-grayscale)",
        "var(--chakra-hue-rotate)",
        "var(--chakra-invert)",
        "var(--chakra-saturate)",
        "var(--chakra-sepia)",
        "var(--chakra-drop-shadow)",
      ].join(" "),
    },
    v2 = {
      backdropFilter: [
        "var(--chakra-backdrop-blur)",
        "var(--chakra-backdrop-brightness)",
        "var(--chakra-backdrop-contrast)",
        "var(--chakra-backdrop-grayscale)",
        "var(--chakra-backdrop-hue-rotate)",
        "var(--chakra-backdrop-invert)",
        "var(--chakra-backdrop-opacity)",
        "var(--chakra-backdrop-saturate)",
        "var(--chakra-backdrop-sepia)",
      ].join(" "),
      "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    };
  function y2(e) {
    return {
      "--chakra-ring-offset-shadow":
        "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
      "--chakra-ring-shadow":
        "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
      "--chakra-ring-width": e,
      boxShadow: [
        "var(--chakra-ring-offset-shadow)",
        "var(--chakra-ring-shadow)",
        "var(--chakra-shadow, 0 0 #0000)",
      ].join(", "),
    };
  }
  const b2 = {
      "row-reverse": {
        space: "--chakra-space-x-reverse",
        divide: "--chakra-divide-x-reverse",
      },
      "column-reverse": {
        space: "--chakra-space-y-reverse",
        divide: "--chakra-divide-y-reverse",
      },
    },
    df = {
      "to-t": "to top",
      "to-tr": "to top right",
      "to-r": "to right",
      "to-br": "to bottom right",
      "to-b": "to bottom",
      "to-bl": "to bottom left",
      "to-l": "to left",
      "to-tl": "to top left",
    },
    x2 = new Set(Object.values(df)),
    ff = new Set([
      "none",
      "-moz-initial",
      "inherit",
      "initial",
      "revert",
      "unset",
    ]),
    w2 = (e) => e.trim();
  function k2(e, t) {
    if (e == null || ff.has(e)) return e;
    if (!(pf(e) || ff.has(e))) return `url('${e}')`;
    const n = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
      i = n == null ? void 0 : n[1],
      a = n == null ? void 0 : n[2];
    if (!i || !a) return e;
    const l = i.includes("-gradient") ? i : `${i}-gradient`,
      [c, ...d] = a.split(",").map(w2).filter(Boolean);
    if ((d == null ? void 0 : d.length) === 0) return e;
    const p = c in df ? df[c] : c;
    d.unshift(p);
    const h = d.map((g) => {
      if (x2.has(g)) return g;
      const v = g.indexOf(" "),
        [b, k] = v !== -1 ? [g.substr(0, v), g.substr(v + 1)] : [g],
        S = pf(k) ? k : k && k.split(" "),
        w = `colors.${b}`,
        _ = w in t.__cssMap ? t.__cssMap[w].varRef : b;
      return S ? [_, ...(Array.isArray(S) ? S : [S])].join(" ") : _;
    });
    return `${l}(${h.join(", ")})`;
  }
  const pf = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
    S2 = (e, t) => k2(e, t ?? {});
  function _2(e) {
    return /^var\(--.+\)$/.test(e);
  }
  const C2 = (e) => {
      const t = parseFloat(e.toString()),
        n = e.toString().replace(String(t), "");
      return { unitless: !n, value: t, unit: n };
    },
    pn = (e) => (t) => `${e}(${t})`,
    Fe = {
      filter(e) {
        return e !== "auto" ? e : g2;
      },
      backdropFilter(e) {
        return e !== "auto" ? e : v2;
      },
      ring(e) {
        return y2(Fe.px(e));
      },
      bgClip(e) {
        return e === "text"
          ? { color: "transparent", backgroundClip: "text" }
          : { backgroundClip: e };
      },
      transform(e) {
        return e === "auto" ? h2() : e === "auto-gpu" ? m2() : e;
      },
      vh(e) {
        return e === "$100vh" ? "var(--chakra-vh)" : e;
      },
      px(e) {
        if (e == null) return e;
        const { unitless: t } = C2(e);
        return t || typeof e == "number" ? `${e}px` : e;
      },
      fraction(e) {
        return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
      },
      float(e, t) {
        const n = { left: "right", right: "left" };
        return t.direction === "rtl" ? n[e] : e;
      },
      degree(e) {
        if (_2(e) || e == null) return e;
        const t = typeof e == "string" && !e.endsWith("deg");
        return typeof e == "number" || t ? `${e}deg` : e;
      },
      gradient: S2,
      blur: pn("blur"),
      opacity: pn("opacity"),
      brightness: pn("brightness"),
      contrast: pn("contrast"),
      dropShadow: pn("drop-shadow"),
      grayscale: pn("grayscale"),
      hueRotate: (e) => pn("hue-rotate")(Fe.degree(e)),
      invert: pn("invert"),
      saturate: pn("saturate"),
      sepia: pn("sepia"),
      bgImage(e) {
        return e == null || pf(e) || ff.has(e) ? e : `url(${e})`;
      },
      outline(e) {
        const t = String(e) === "0" || String(e) === "none";
        return e !== null && t
          ? { outline: "2px solid transparent", outlineOffset: "2px" }
          : { outline: e };
      },
      flexDirection(e) {
        const { space: t, divide: n } = b2[e] ?? {},
          i = { flexDirection: e };
        return t && (i[t] = 1), n && (i[n] = 1), i;
      },
    },
    D = {
      borderWidths: jr("borderWidths"),
      borderStyles: jr("borderStyles"),
      colors: jr("colors"),
      borders: jr("borders"),
      gradients: jr("gradients", Fe.gradient),
      radii: jr("radii", Fe.px),
      space: jr("space", mc(Fe.vh, Fe.px)),
      spaceT: jr("space", mc(Fe.vh, Fe.px)),
      degreeT(e) {
        return { property: e, transform: Fe.degree };
      },
      prop(e, t, n) {
        return {
          property: e,
          scale: t,
          ...(t && { transform: uf({ scale: t, transform: n }) }),
        };
      },
      propT(e, t) {
        return { property: e, transform: t };
      },
      sizes: jr("sizes", mc(Fe.vh, Fe.px)),
      sizesT: jr("sizes", mc(Fe.vh, Fe.fraction)),
      shadows: jr("shadows"),
      logical: p2,
      blur: jr("blur", Fe.blur),
    },
    gc = {
      background: D.colors("background"),
      backgroundColor: D.colors("backgroundColor"),
      backgroundImage: D.gradients("backgroundImage"),
      backgroundSize: !0,
      backgroundPosition: !0,
      backgroundRepeat: !0,
      backgroundAttachment: !0,
      backgroundClip: { transform: Fe.bgClip },
      bgSize: D.prop("backgroundSize"),
      bgPosition: D.prop("backgroundPosition"),
      bg: D.colors("background"),
      bgColor: D.colors("backgroundColor"),
      bgPos: D.prop("backgroundPosition"),
      bgRepeat: D.prop("backgroundRepeat"),
      bgAttachment: D.prop("backgroundAttachment"),
      bgGradient: D.gradients("backgroundImage"),
      bgClip: { transform: Fe.bgClip },
    };
  Object.assign(gc, { bgImage: gc.backgroundImage, bgImg: gc.backgroundImage });
  const Be = {
    border: D.borders("border"),
    borderWidth: D.borderWidths("borderWidth"),
    borderStyle: D.borderStyles("borderStyle"),
    borderColor: D.colors("borderColor"),
    borderRadius: D.radii("borderRadius"),
    borderTop: D.borders("borderTop"),
    borderBlockStart: D.borders("borderBlockStart"),
    borderTopLeftRadius: D.radii("borderTopLeftRadius"),
    borderStartStartRadius: D.logical({
      scale: "radii",
      property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
    }),
    borderEndStartRadius: D.logical({
      scale: "radii",
      property: {
        ltr: "borderBottomLeftRadius",
        rtl: "borderBottomRightRadius",
      },
    }),
    borderTopRightRadius: D.radii("borderTopRightRadius"),
    borderStartEndRadius: D.logical({
      scale: "radii",
      property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
    }),
    borderEndEndRadius: D.logical({
      scale: "radii",
      property: {
        ltr: "borderBottomRightRadius",
        rtl: "borderBottomLeftRadius",
      },
    }),
    borderRight: D.borders("borderRight"),
    borderInlineEnd: D.borders("borderInlineEnd"),
    borderBottom: D.borders("borderBottom"),
    borderBlockEnd: D.borders("borderBlockEnd"),
    borderBottomLeftRadius: D.radii("borderBottomLeftRadius"),
    borderBottomRightRadius: D.radii("borderBottomRightRadius"),
    borderLeft: D.borders("borderLeft"),
    borderInlineStart: { property: "borderInlineStart", scale: "borders" },
    borderInlineStartRadius: D.logical({
      scale: "radii",
      property: {
        ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
        rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
      },
    }),
    borderInlineEndRadius: D.logical({
      scale: "radii",
      property: {
        ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
        rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      },
    }),
    borderX: D.borders(["borderLeft", "borderRight"]),
    borderInline: D.borders("borderInline"),
    borderY: D.borders(["borderTop", "borderBottom"]),
    borderBlock: D.borders("borderBlock"),
    borderTopWidth: D.borderWidths("borderTopWidth"),
    borderBlockStartWidth: D.borderWidths("borderBlockStartWidth"),
    borderTopColor: D.colors("borderTopColor"),
    borderBlockStartColor: D.colors("borderBlockStartColor"),
    borderTopStyle: D.borderStyles("borderTopStyle"),
    borderBlockStartStyle: D.borderStyles("borderBlockStartStyle"),
    borderBottomWidth: D.borderWidths("borderBottomWidth"),
    borderBlockEndWidth: D.borderWidths("borderBlockEndWidth"),
    borderBottomColor: D.colors("borderBottomColor"),
    borderBlockEndColor: D.colors("borderBlockEndColor"),
    borderBottomStyle: D.borderStyles("borderBottomStyle"),
    borderBlockEndStyle: D.borderStyles("borderBlockEndStyle"),
    borderLeftWidth: D.borderWidths("borderLeftWidth"),
    borderInlineStartWidth: D.borderWidths("borderInlineStartWidth"),
    borderLeftColor: D.colors("borderLeftColor"),
    borderInlineStartColor: D.colors("borderInlineStartColor"),
    borderLeftStyle: D.borderStyles("borderLeftStyle"),
    borderInlineStartStyle: D.borderStyles("borderInlineStartStyle"),
    borderRightWidth: D.borderWidths("borderRightWidth"),
    borderInlineEndWidth: D.borderWidths("borderInlineEndWidth"),
    borderRightColor: D.colors("borderRightColor"),
    borderInlineEndColor: D.colors("borderInlineEndColor"),
    borderRightStyle: D.borderStyles("borderRightStyle"),
    borderInlineEndStyle: D.borderStyles("borderInlineEndStyle"),
    borderTopRadius: D.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
    borderBottomRadius: D.radii([
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ]),
    borderLeftRadius: D.radii([
      "borderTopLeftRadius",
      "borderBottomLeftRadius",
    ]),
    borderRightRadius: D.radii([
      "borderTopRightRadius",
      "borderBottomRightRadius",
    ]),
  };
  Object.assign(Be, {
    rounded: Be.borderRadius,
    roundedTop: Be.borderTopRadius,
    roundedTopLeft: Be.borderTopLeftRadius,
    roundedTopRight: Be.borderTopRightRadius,
    roundedTopStart: Be.borderStartStartRadius,
    roundedTopEnd: Be.borderStartEndRadius,
    roundedBottom: Be.borderBottomRadius,
    roundedBottomLeft: Be.borderBottomLeftRadius,
    roundedBottomRight: Be.borderBottomRightRadius,
    roundedBottomStart: Be.borderEndStartRadius,
    roundedBottomEnd: Be.borderEndEndRadius,
    roundedLeft: Be.borderLeftRadius,
    roundedRight: Be.borderRightRadius,
    roundedStart: Be.borderInlineStartRadius,
    roundedEnd: Be.borderInlineEndRadius,
    borderStart: Be.borderInlineStart,
    borderEnd: Be.borderInlineEnd,
    borderTopStartRadius: Be.borderStartStartRadius,
    borderTopEndRadius: Be.borderStartEndRadius,
    borderBottomStartRadius: Be.borderEndStartRadius,
    borderBottomEndRadius: Be.borderEndEndRadius,
    borderStartRadius: Be.borderInlineStartRadius,
    borderEndRadius: Be.borderInlineEndRadius,
    borderStartWidth: Be.borderInlineStartWidth,
    borderEndWidth: Be.borderInlineEndWidth,
    borderStartColor: Be.borderInlineStartColor,
    borderEndColor: Be.borderInlineEndColor,
    borderStartStyle: Be.borderInlineStartStyle,
    borderEndStyle: Be.borderInlineEndStyle,
  });
  const E2 = {
      color: D.colors("color"),
      textColor: D.colors("color"),
      fill: D.colors("fill"),
      stroke: D.colors("stroke"),
      accentColor: D.colors("accentColor"),
      textFillColor: D.colors("textFillColor"),
    },
    vc = {
      alignItems: !0,
      alignContent: !0,
      justifyItems: !0,
      justifyContent: !0,
      flexWrap: !0,
      flexDirection: { transform: Fe.flexDirection },
      flex: !0,
      flexFlow: !0,
      flexGrow: !0,
      flexShrink: !0,
      flexBasis: D.sizes("flexBasis"),
      justifySelf: !0,
      alignSelf: !0,
      order: !0,
      placeItems: !0,
      placeContent: !0,
      placeSelf: !0,
      gap: D.space("gap"),
      rowGap: D.space("rowGap"),
      columnGap: D.space("columnGap"),
    };
  Object.assign(vc, { flexDir: vc.flexDirection });
  const Or = {
    width: D.sizesT("width"),
    inlineSize: D.sizesT("inlineSize"),
    height: D.sizes("height"),
    blockSize: D.sizes("blockSize"),
    boxSize: D.sizes(["width", "height"]),
    minWidth: D.sizes("minWidth"),
    minInlineSize: D.sizes("minInlineSize"),
    minHeight: D.sizes("minHeight"),
    minBlockSize: D.sizes("minBlockSize"),
    maxWidth: D.sizes("maxWidth"),
    maxInlineSize: D.sizes("maxInlineSize"),
    maxHeight: D.sizes("maxHeight"),
    maxBlockSize: D.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, i;
        return {
          [`@media screen and (min-width: ${
            ((i = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
              ? void 0
              : i.minW) ?? e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, i;
        return {
          [`@media screen and (max-width: ${
            ((i = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
              ? void 0
              : i._minW) ?? e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: D.propT("float", Fe.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
  Object.assign(Or, {
    w: Or.width,
    h: Or.height,
    minW: Or.minWidth,
    maxW: Or.maxWidth,
    minH: Or.minHeight,
    maxH: Or.maxHeight,
    overscroll: Or.overscrollBehavior,
    overscrollX: Or.overscrollBehaviorX,
    overscrollY: Or.overscrollBehaviorY,
  });
  const P2 = {
      filter: { transform: Fe.filter },
      blur: D.blur("--chakra-blur"),
      brightness: D.propT("--chakra-brightness", Fe.brightness),
      contrast: D.propT("--chakra-contrast", Fe.contrast),
      hueRotate: D.propT("--chakra-hue-rotate", Fe.hueRotate),
      invert: D.propT("--chakra-invert", Fe.invert),
      saturate: D.propT("--chakra-saturate", Fe.saturate),
      dropShadow: D.propT("--chakra-drop-shadow", Fe.dropShadow),
      backdropFilter: { transform: Fe.backdropFilter },
      backdropBlur: D.blur("--chakra-backdrop-blur"),
      backdropBrightness: D.propT(
        "--chakra-backdrop-brightness",
        Fe.brightness
      ),
      backdropContrast: D.propT("--chakra-backdrop-contrast", Fe.contrast),
      backdropHueRotate: D.propT("--chakra-backdrop-hue-rotate", Fe.hueRotate),
      backdropInvert: D.propT("--chakra-backdrop-invert", Fe.invert),
      backdropSaturate: D.propT("--chakra-backdrop-saturate", Fe.saturate),
    },
    R2 = {
      ring: { transform: Fe.ring },
      ringColor: D.colors("--chakra-ring-color"),
      ringOffset: D.prop("--chakra-ring-offset-width"),
      ringOffsetColor: D.colors("--chakra-ring-offset-color"),
      ringInset: D.prop("--chakra-ring-inset"),
    },
    j2 = {
      appearance: !0,
      cursor: !0,
      resize: !0,
      userSelect: !0,
      pointerEvents: !0,
      outline: { transform: Fe.outline },
      outlineOffset: !0,
      outlineColor: D.colors("outlineColor"),
    },
    Og = {
      gridGap: D.space("gridGap"),
      gridColumnGap: D.space("gridColumnGap"),
      gridRowGap: D.space("gridRowGap"),
      gridColumn: !0,
      gridRow: !0,
      gridAutoFlow: !0,
      gridAutoColumns: !0,
      gridColumnStart: !0,
      gridColumnEnd: !0,
      gridRowStart: !0,
      gridRowEnd: !0,
      gridAutoRows: !0,
      gridTemplate: !0,
      gridTemplateColumns: !0,
      gridTemplateRows: !0,
      gridTemplateAreas: !0,
      gridArea: !0,
    };
  function O2(e, t, n, i) {
    const a = typeof t == "string" ? t.split(".") : [t];
    for (i = 0; i < a.length && e; i += 1) e = e[a[i]];
    return e === void 0 ? n : e;
  }
  const A2 = (e) => {
      const t = new WeakMap();
      return (n, i, a, l) => {
        if (typeof n > "u") return e(n, i, a);
        t.has(n) || t.set(n, new Map());
        const c = t.get(n);
        if (c.has(i)) return c.get(i);
        const d = e(n, i, a, l);
        return c.set(i, d), d;
      };
    },
    T2 = A2(O2),
    M2 = {
      border: "0px",
      clip: "rect(0, 0, 0, 0)",
      width: "1px",
      height: "1px",
      margin: "-1px",
      padding: "0px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      position: "absolute",
    },
    z2 = {
      position: "static",
      width: "auto",
      height: "auto",
      clip: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      whiteSpace: "normal",
    },
    hf = (e, t, n) => {
      const i = {},
        a = T2(e, t, {});
      for (const l in a) (l in n && n[l] != null) || (i[l] = a[l]);
      return i;
    },
    D2 = {
      srOnly: {
        transform(e) {
          return e === !0 ? M2 : e === "focusable" ? z2 : {};
        },
      },
      layerStyle: {
        processResult: !0,
        transform: (e, t, n) => hf(t, `layerStyles.${e}`, n),
      },
      textStyle: {
        processResult: !0,
        transform: (e, t, n) => hf(t, `textStyles.${e}`, n),
      },
      apply: { processResult: !0, transform: (e, t, n) => hf(t, e, n) },
    },
    ps = {
      position: !0,
      pos: D.prop("position"),
      zIndex: D.prop("zIndex", "zIndices"),
      inset: D.spaceT("inset"),
      insetX: D.spaceT(["left", "right"]),
      insetInline: D.spaceT("insetInline"),
      insetY: D.spaceT(["top", "bottom"]),
      insetBlock: D.spaceT("insetBlock"),
      top: D.spaceT("top"),
      insetBlockStart: D.spaceT("insetBlockStart"),
      bottom: D.spaceT("bottom"),
      insetBlockEnd: D.spaceT("insetBlockEnd"),
      left: D.spaceT("left"),
      insetInlineStart: D.logical({
        scale: "space",
        property: { ltr: "left", rtl: "right" },
      }),
      right: D.spaceT("right"),
      insetInlineEnd: D.logical({
        scale: "space",
        property: { ltr: "right", rtl: "left" },
      }),
    };
  Object.assign(ps, {
    insetStart: ps.insetInlineStart,
    insetEnd: ps.insetInlineEnd,
  });
  const mf = {
    boxShadow: D.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: D.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: D.prop("backgroundBlendMode"),
    opacity: !0,
  };
  Object.assign(mf, { shadow: mf.boxShadow });
  const it = {
    margin: D.spaceT("margin"),
    marginTop: D.spaceT("marginTop"),
    marginBlockStart: D.spaceT("marginBlockStart"),
    marginRight: D.spaceT("marginRight"),
    marginInlineEnd: D.spaceT("marginInlineEnd"),
    marginBottom: D.spaceT("marginBottom"),
    marginBlockEnd: D.spaceT("marginBlockEnd"),
    marginLeft: D.spaceT("marginLeft"),
    marginInlineStart: D.spaceT("marginInlineStart"),
    marginX: D.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: D.spaceT("marginInline"),
    marginY: D.spaceT(["marginTop", "marginBottom"]),
    marginBlock: D.spaceT("marginBlock"),
    padding: D.space("padding"),
    paddingTop: D.space("paddingTop"),
    paddingBlockStart: D.space("paddingBlockStart"),
    paddingRight: D.space("paddingRight"),
    paddingBottom: D.space("paddingBottom"),
    paddingBlockEnd: D.space("paddingBlockEnd"),
    paddingLeft: D.space("paddingLeft"),
    paddingInlineStart: D.space("paddingInlineStart"),
    paddingInlineEnd: D.space("paddingInlineEnd"),
    paddingX: D.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: D.space("paddingInline"),
    paddingY: D.space(["paddingTop", "paddingBottom"]),
    paddingBlock: D.space("paddingBlock"),
  };
  Object.assign(it, {
    m: it.margin,
    mt: it.marginTop,
    mr: it.marginRight,
    me: it.marginInlineEnd,
    marginEnd: it.marginInlineEnd,
    mb: it.marginBottom,
    ml: it.marginLeft,
    ms: it.marginInlineStart,
    marginStart: it.marginInlineStart,
    mx: it.marginX,
    my: it.marginY,
    p: it.padding,
    pt: it.paddingTop,
    py: it.paddingY,
    px: it.paddingX,
    pb: it.paddingBottom,
    pl: it.paddingLeft,
    ps: it.paddingInlineStart,
    paddingStart: it.paddingInlineStart,
    pr: it.paddingRight,
    pe: it.paddingInlineEnd,
    paddingEnd: it.paddingInlineEnd,
  });
  const I2 = {
      scrollBehavior: !0,
      scrollSnapAlign: !0,
      scrollSnapStop: !0,
      scrollSnapType: !0,
      scrollMargin: D.spaceT("scrollMargin"),
      scrollMarginTop: D.spaceT("scrollMarginTop"),
      scrollMarginBottom: D.spaceT("scrollMarginBottom"),
      scrollMarginLeft: D.spaceT("scrollMarginLeft"),
      scrollMarginRight: D.spaceT("scrollMarginRight"),
      scrollMarginX: D.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
      scrollMarginY: D.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
      scrollPadding: D.spaceT("scrollPadding"),
      scrollPaddingTop: D.spaceT("scrollPaddingTop"),
      scrollPaddingBottom: D.spaceT("scrollPaddingBottom"),
      scrollPaddingLeft: D.spaceT("scrollPaddingLeft"),
      scrollPaddingRight: D.spaceT("scrollPaddingRight"),
      scrollPaddingX: D.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
      scrollPaddingY: D.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
    },
    F2 = {
      fontFamily: D.prop("fontFamily", "fonts"),
      fontSize: D.prop("fontSize", "fontSizes", Fe.px),
      fontWeight: D.prop("fontWeight", "fontWeights"),
      lineHeight: D.prop("lineHeight", "lineHeights"),
      letterSpacing: D.prop("letterSpacing", "letterSpacings"),
      textAlign: !0,
      fontStyle: !0,
      textIndent: !0,
      wordBreak: !0,
      overflowWrap: !0,
      textOverflow: !0,
      textTransform: !0,
      whiteSpace: !0,
      isTruncated: {
        transform(e) {
          if (e === !0)
            return {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            };
        },
      },
      noOfLines: {
        static: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "var(--chakra-line-clamp)",
        },
        property: "--chakra-line-clamp",
      },
    },
    L2 = {
      textDecorationColor: D.colors("textDecorationColor"),
      textDecoration: !0,
      textDecor: { property: "textDecoration" },
      textDecorationLine: !0,
      textDecorationStyle: !0,
      textDecorationThickness: !0,
      textUnderlineOffset: !0,
      textShadow: D.shadows("textShadow"),
    },
    N2 = {
      clipPath: !0,
      transform: D.propT("transform", Fe.transform),
      transformOrigin: !0,
      translateX: D.spaceT("--chakra-translate-x"),
      translateY: D.spaceT("--chakra-translate-y"),
      skewX: D.degreeT("--chakra-skew-x"),
      skewY: D.degreeT("--chakra-skew-y"),
      scaleX: D.prop("--chakra-scale-x"),
      scaleY: D.prop("--chakra-scale-y"),
      scale: D.prop(["--chakra-scale-x", "--chakra-scale-y"]),
      rotate: D.degreeT("--chakra-rotate"),
    },
    $2 = {
      listStyleType: !0,
      listStylePosition: !0,
      listStylePos: D.prop("listStylePosition"),
      listStyleImage: !0,
      listStyleImg: D.prop("listStyleImage"),
    },
    B2 = {
      transition: !0,
      transitionDelay: !0,
      animation: !0,
      willChange: !0,
      transitionDuration: D.prop("transitionDuration", "transition.duration"),
      transitionProperty: D.prop("transitionProperty", "transition.property"),
      transitionTimingFunction: D.prop(
        "transitionTimingFunction",
        "transition.easing"
      ),
    },
    gf = dn(
      {},
      gc,
      Be,
      E2,
      vc,
      Or,
      P2,
      R2,
      j2,
      Og,
      D2,
      ps,
      mf,
      it,
      I2,
      F2,
      L2,
      N2,
      $2,
      B2
    ),
    V2 = Object.assign({}, it, Or, vc, Og, ps),
    W2 = Object.keys(V2),
    U2 = [...Object.keys(gf), ...Pg],
    H2 = { ...gf, ...Di },
    q2 = (e) => e in H2,
    K2 = (e) => (t) => {
      if (!t.__breakpoints) return e;
      const { isResponsive: n, toArrayValue: i, media: a } = t.__breakpoints,
        l = {};
      for (const c in e) {
        let d = vr(e[c], t);
        if (d == null) continue;
        if (((d = Rr(d) && n(d) ? i(d) : d), !Array.isArray(d))) {
          l[c] = d;
          continue;
        }
        const p = d.slice(0, a.length).length;
        for (let h = 0; h < p; h += 1) {
          const g = a == null ? void 0 : a[h];
          if (!g) {
            l[c] = d[h];
            continue;
          }
          (l[g] = l[g] || {}), d[h] != null && (l[g][c] = d[h]);
        }
      }
      return l;
    };
  function G2(e) {
    const t = [];
    let n = "",
      i = !1;
    for (let a = 0; a < e.length; a++) {
      const l = e[a];
      l === "("
        ? ((i = !0), (n += l))
        : l === ")"
        ? ((i = !1), (n += l))
        : l === "," && !i
        ? (t.push(n), (n = ""))
        : (n += l);
    }
    return (n = n.trim()), n && t.push(n), t;
  }
  function Z2(e) {
    return /^var\(--.+\)$/.test(e);
  }
  const X2 = (e, t) => e.startsWith("--") && typeof t == "string" && !Z2(t),
    Y2 = (e, t) => {
      if (t == null) return t;
      const n = (c) => {
          var d, p;
          return (p = (d = e.__cssMap) == null ? void 0 : d[c]) == null
            ? void 0
            : p.varRef;
        },
        i = (c) => n(c) ?? c,
        [a, l] = G2(t);
      return (t = n(a) ?? i(l) ?? i(t)), t;
    };
  function Q2(e) {
    const { configs: t = {}, pseudos: n = {}, theme: i } = e,
      a = (l, c = !1) => {
        var g;
        const d = vr(l, i),
          p = K2(d)(i);
        let h = {};
        for (let v in p) {
          const b = p[v];
          let k = vr(b, i);
          v in n && (v = n[v]), X2(v, k) && (k = Y2(i, k));
          let S = t[v];
          if ((S === !0 && (S = { property: v }), Rr(k))) {
            (h[v] = h[v] ?? {}), (h[v] = dn({}, h[v], a(k, !0)));
            continue;
          }
          let w =
            ((g = S == null ? void 0 : S.transform) == null
              ? void 0
              : g.call(S, k, i, d)) ?? k;
          w = S != null && S.processResult ? a(w, !0) : w;
          const _ = vr(S == null ? void 0 : S.property, i);
          if (!c && S != null && S.static) {
            const j = vr(S.static, i);
            h = dn({}, h, j);
          }
          if (_ && Array.isArray(_)) {
            for (const j of _) h[j] = w;
            continue;
          }
          if (_) {
            _ === "&" && Rr(w) ? (h = dn({}, h, w)) : (h[_] = w);
            continue;
          }
          if (Rr(w)) {
            h = dn({}, h, w);
            continue;
          }
          h[v] = w;
        }
        return h;
      };
    return a;
  }
  const Ag = (e) => (t) => Q2({ theme: t, pseudos: Di, configs: gf })(e);
  function nt(e) {
    return {
      definePartsStyle(t) {
        return t;
      },
      defineMultiStyleConfig(t) {
        return { parts: e, ...t };
      },
    };
  }
  function J2(e, t) {
    if (Array.isArray(e)) return e;
    if (Rr(e)) return t(e);
    if (e != null) return [e];
  }
  function eE(e, t) {
    for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
    return -1;
  }
  function tE(e) {
    const t = e.__breakpoints;
    return function (n, i, a, l) {
      var v, b;
      if (!t) return;
      const c = {},
        d = J2(a, t.toArrayValue);
      if (!d) return c;
      const p = d.length,
        h = p === 1,
        g = !!n.parts;
      for (let k = 0; k < p; k++) {
        const S = t.details[k],
          w = t.details[eE(d, k)],
          _ = ds(S.minW, w == null ? void 0 : w._minW),
          j = vr((v = n[i]) == null ? void 0 : v[d[k]], l);
        if (j) {
          if (g) {
            (b = n.parts) == null ||
              b.forEach((O) => {
                dn(c, { [O]: h ? j[O] : { [_]: j[O] } });
              });
            continue;
          }
          if (!g) {
            h ? dn(c, j) : (c[_] = j);
            continue;
          }
          c[_] = j;
        }
      }
      return c;
    };
  }
  function rE(e) {
    return (t) => {
      const { variant: n, size: i, theme: a } = t,
        l = tE(a);
      return dn(
        {},
        vr(e.baseStyle ?? {}, t),
        l(e, "sizes", i, t),
        l(e, "variants", n, t)
      );
    };
  }
  function nr(e) {
    return sf(e, ["styleConfig", "size", "variant", "colorScheme"]);
  }
  function Tg(e) {
    return Rr(e) && e.reference ? e.reference : String(e);
  }
  const yc = (e, ...t) => t.map(Tg).join(` ${e} `).replace(/calc/g, ""),
    Mg = (...e) => `calc(${yc("+", ...e)})`,
    zg = (...e) => `calc(${yc("-", ...e)})`,
    vf = (...e) => `calc(${yc("*", ...e)})`,
    Dg = (...e) => `calc(${yc("/", ...e)})`,
    Ig = (e) => {
      const t = Tg(e);
      return t != null && !Number.isNaN(parseFloat(t))
        ? String(t).startsWith("-")
          ? String(t).slice(1)
          : `-${t}`
        : vf(t, -1);
    },
    zn = Object.assign(
      (e) => ({
        add: (...t) => zn(Mg(e, ...t)),
        subtract: (...t) => zn(zg(e, ...t)),
        multiply: (...t) => zn(vf(e, ...t)),
        divide: (...t) => zn(Dg(e, ...t)),
        negate: () => zn(Ig(e)),
        toString: () => e.toString(),
      }),
      { add: Mg, subtract: zg, multiply: vf, divide: Dg, negate: Ig }
    );
  function nE(e, t = "-") {
    return e.replace(/\s+/g, t);
  }
  function oE(e) {
    const t = nE(e.toString());
    return aE(iE(t));
  }
  function iE(e) {
    return e.includes("\\.") || Number.isInteger(parseFloat(e.toString()))
      ? e
      : e.replace(".", "\\.");
  }
  function aE(e) {
    return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
  }
  function sE(e, t = "") {
    return [t, e].filter(Boolean).join("-");
  }
  function lE(e, t) {
    return `var(${e}${t ? `, ${t}` : ""})`;
  }
  function cE(e, t = "") {
    return oE(`--${sE(e, t)}`);
  }
  function xe(e, t, n) {
    const i = cE(e, n);
    return { variable: i, reference: lE(i, t) };
  }
  function uE(e, t) {
    const n = {};
    for (const i of t) {
      if (Array.isArray(i)) {
        const [a, l] = i;
        n[a] = xe(`${e}-${a}`, l);
        continue;
      }
      n[i] = xe(`${e}-${i}`);
    }
    return n;
  }
  const dE = [
    "colors",
    "borders",
    "borderWidths",
    "borderStyles",
    "fonts",
    "fontSizes",
    "fontWeights",
    "gradients",
    "letterSpacings",
    "lineHeights",
    "radii",
    "space",
    "shadows",
    "sizes",
    "zIndices",
    "transition",
    "blur",
    "breakpoints",
  ];
  function fE(e) {
    return $C(e, dE);
  }
  function pE(e) {
    return e.semanticTokens;
  }
  function hE(e) {
    const { __cssMap: t, __cssVars: n, __breakpoints: i, ...a } = e;
    return a;
  }
  function mE(e) {
    const t = fE(e),
      n = pE(e),
      i = (l) => Pg.includes(l) || l === "default",
      a = {};
    return (
      wg(t, (l, c) => {
        l != null && (a[c.join(".")] = { isSemantic: !1, value: l });
      }),
      wg(
        n,
        (l, c) => {
          l != null && (a[c.join(".")] = { isSemantic: !0, value: l });
        },
        { stop: (l) => Object.keys(l).every(i) }
      ),
      a
    );
  }
  function Fg(e, t) {
    return xe(String(e).replace(/\./g, "-"), void 0, t);
  }
  function gE(e) {
    var c;
    const t = mE(e),
      n = (c = e.config) == null ? void 0 : c.cssVarPrefix;
    let i = {};
    const a = {};
    function l(d, p) {
      const h = [String(d).split(".")[0], p].join(".");
      if (!t[h]) return p;
      const { reference: g } = Fg(h, n);
      return g;
    }
    for (const [d, p] of Object.entries(t)) {
      const { isSemantic: h, value: g } = p,
        { variable: v, reference: b } = Fg(d, n);
      if (!h) {
        if (d.startsWith("space")) {
          const S = d.split("."),
            [w, ..._] = S,
            j = `${w}.-${_.join(".")}`,
            O = zn.negate(g),
            M = zn.negate(b);
          a[j] = { value: O, var: v, varRef: M };
        }
        (i[v] = g), (a[d] = { value: g, var: v, varRef: b });
        continue;
      }
      const k = Rr(g) ? g : { default: g };
      (i = dn(
        i,
        Object.entries(k).reduce((S, [w, _]) => {
          if (!_) return S;
          const j = l(d, `${_}`);
          if (w === "default") return (S[v] = j), S;
          const O = (Di == null ? void 0 : Di[w]) ?? w;
          return (S[O] = { [v]: j }), S;
        }, {})
      )),
        (a[d] = { value: b, var: v, varRef: b });
    }
    return { cssVars: i, cssMap: a };
  }
  function vE(e) {
    const t = hE(e),
      { cssMap: n, cssVars: i } = gE(t);
    return (
      Object.assign(t, {
        __cssVars: {
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
          ...i,
        },
        __cssMap: n,
        __breakpoints: RC(t.breakpoints),
      }),
      t
    );
  }
  function Ve(e, t = {}) {
    let n = !1;
    function i() {
      if (!n) {
        n = !0;
        return;
      }
      throw new Error(
        "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
      );
    }
    function a(...h) {
      i();
      for (const g of h) t[g] = p(g);
      return Ve(e, t);
    }
    function l(...h) {
      for (const g of h) g in t || (t[g] = p(g));
      return Ve(e, t);
    }
    function c() {
      return Object.fromEntries(
        Object.entries(t).map(([h, g]) => [h, g.selector])
      );
    }
    function d() {
      return Object.fromEntries(
        Object.entries(t).map(([h, g]) => [h, g.className])
      );
    }
    function p(h) {
      const g = `chakra-${(["container", "root"].includes(h ?? "")
        ? [e]
        : [e, h]
      )
        .filter(Boolean)
        .join("__")}`;
      return { className: g, selector: `.${g}`, toString: () => h };
    }
    return {
      parts: a,
      toPart: p,
      extend: l,
      selectors: c,
      classnames: d,
      get keys() {
        return Object.keys(t);
      },
      __type: {},
    };
  }
  const yE = Ve("accordion").parts(
      "root",
      "container",
      "button",
      "panel",
      "icon"
    ),
    bE = Ve("alert").parts(
      "title",
      "description",
      "container",
      "icon",
      "spinner"
    ),
    xE = Ve("avatar").parts(
      "label",
      "badge",
      "container",
      "excessLabel",
      "group"
    ),
    wE = Ve("breadcrumb").parts("link", "item", "container", "separator");
  Ve("button").parts();
  const kE = Ve("checkbox").parts("control", "icon", "container", "label");
  Ve("progress").parts("track", "filledTrack", "label");
  const SE = Ve("drawer").parts(
      "overlay",
      "dialogContainer",
      "dialog",
      "header",
      "closeButton",
      "body",
      "footer"
    ),
    _E = Ve("editable").parts("preview", "input", "textarea"),
    CE = Ve("form").parts("container", "requiredIndicator", "helperText"),
    EE = Ve("formError").parts("text", "icon"),
    PE = Ve("input").parts("addon", "field", "element", "group"),
    RE = Ve("list").parts("container", "item", "icon"),
    jE = Ve("menu").parts(
      "button",
      "list",
      "item",
      "groupTitle",
      "icon",
      "command",
      "divider"
    ),
    OE = Ve("modal").parts(
      "overlay",
      "dialogContainer",
      "dialog",
      "header",
      "closeButton",
      "body",
      "footer"
    ),
    AE = Ve("numberinput").parts("root", "field", "stepperGroup", "stepper");
  Ve("pininput").parts("field");
  const TE = Ve("popover").parts(
      "content",
      "header",
      "body",
      "footer",
      "popper",
      "arrow",
      "closeButton"
    ),
    ME = Ve("progress").parts("label", "filledTrack", "track"),
    zE = Ve("radio").parts("container", "control", "label"),
    DE = Ve("select").parts("field", "icon"),
    IE = Ve("slider").parts(
      "container",
      "track",
      "thumb",
      "filledTrack",
      "mark"
    ),
    FE = Ve("stat").parts("container", "label", "helpText", "number", "icon"),
    LE = Ve("switch").parts("container", "track", "thumb", "label"),
    NE = Ve("table").parts(
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "tfoot",
      "caption"
    ),
    $E = Ve("tabs").parts(
      "root",
      "tab",
      "tablist",
      "tabpanel",
      "tabpanels",
      "indicator"
    ),
    BE = Ve("tag").parts("container", "label", "closeButton"),
    VE = Ve("card").parts("container", "header", "body", "footer");
  Ve("stepper").parts(
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number"
  );
  const { definePartsStyle: WE, defineMultiStyleConfig: UE } = nt(yE.keys),
    HE = {
      borderTopWidth: "1px",
      borderColor: "inherit",
      _last: { borderBottomWidth: "1px" },
    },
    qE = {
      transitionProperty: "common",
      transitionDuration: "normal",
      fontSize: "md",
      _focusVisible: { boxShadow: "outline" },
      _hover: { bg: "blackAlpha.50" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      px: "4",
      py: "2",
    },
    KE = { pt: "2", px: "4", pb: "5" },
    GE = { fontSize: "1.25em" },
    ZE = WE({ container: HE, button: qE, panel: KE, icon: GE }),
    XE = UE({ baseStyle: ZE });
  function Wo(e, t, n) {
    return Math.min(Math.max(e, n), t);
  }
  class YE extends Error {
    constructor(t) {
      super(`Failed to parse color: "${t}"`);
    }
  }
  var hs = YE;
  function yf(e) {
    if (typeof e != "string") throw new hs(e);
    if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
    let t = e.trim();
    t = iP.test(e) ? eP(e) : e;
    const n = tP.exec(t);
    if (n) {
      const c = Array.from(n).slice(1);
      return [
        ...c.slice(0, 3).map((d) => parseInt(ms(d, 2), 16)),
        parseInt(ms(c[3] || "f", 2), 16) / 255,
      ];
    }
    const i = rP.exec(t);
    if (i) {
      const c = Array.from(i).slice(1);
      return [
        ...c.slice(0, 3).map((d) => parseInt(d, 16)),
        parseInt(c[3] || "ff", 16) / 255,
      ];
    }
    const a = nP.exec(t);
    if (a) {
      const c = Array.from(a).slice(1);
      return [
        ...c.slice(0, 3).map((d) => parseInt(d, 10)),
        parseFloat(c[3] || "1"),
      ];
    }
    const l = oP.exec(t);
    if (l) {
      const [c, d, p, h] = Array.from(l).slice(1).map(parseFloat);
      if (Wo(0, 100, d) !== d) throw new hs(e);
      if (Wo(0, 100, p) !== p) throw new hs(e);
      return [...aP(c, d, p), Number.isNaN(h) ? 1 : h];
    }
    throw new hs(e);
  }
  function QE(e) {
    let t = 5381,
      n = e.length;
    for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
    return (t >>> 0) % 2341;
  }
  const Lg = (e) => parseInt(e.replace(/_/g, ""), 36),
    JE =
      "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
        .split(" ")
        .reduce((e, t) => {
          const n = Lg(t.substring(0, 3)),
            i = Lg(t.substring(3)).toString(16);
          let a = "";
          for (let l = 0; l < 6 - i.length; l++) a += "0";
          return (e[n] = `${a}${i}`), e;
        }, {});
  function eP(e) {
    const t = e.toLowerCase().trim(),
      n = JE[QE(t)];
    if (!n) throw new hs(e);
    return `#${n}`;
  }
  const ms = (e, t) =>
      Array.from(Array(t))
        .map(() => e)
        .join(""),
    tP = new RegExp(`^#${ms("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
    rP = new RegExp(`^#${ms("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
    nP = new RegExp(
      `^rgba?\\(\\s*(\\d+)\\s*${ms(
        ",\\s*(\\d+)\\s*",
        2
      )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
      "i"
    ),
    oP =
      /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
    iP = /^[a-z]+$/i,
    Ng = (e) => Math.round(e * 255),
    aP = (e, t, n) => {
      let i = n / 100;
      if (t === 0) return [i, i, i].map(Ng);
      const a = (((e % 360) + 360) % 360) / 60,
        l = (1 - Math.abs(2 * i - 1)) * (t / 100),
        c = l * (1 - Math.abs((a % 2) - 1));
      let d = 0,
        p = 0,
        h = 0;
      a >= 0 && a < 1
        ? ((d = l), (p = c))
        : a >= 1 && a < 2
        ? ((d = c), (p = l))
        : a >= 2 && a < 3
        ? ((p = l), (h = c))
        : a >= 3 && a < 4
        ? ((p = c), (h = l))
        : a >= 4 && a < 5
        ? ((d = c), (h = l))
        : a >= 5 && a < 6 && ((d = l), (h = c));
      const g = i - l / 2,
        v = d + g,
        b = p + g,
        k = h + g;
      return [v, b, k].map(Ng);
    };
  function sP(e, t, n, i) {
    return `rgba(${Wo(0, 255, e).toFixed()}, ${Wo(0, 255, t).toFixed()}, ${Wo(
      0,
      255,
      n
    ).toFixed()}, ${parseFloat(Wo(0, 1, i).toFixed(3))})`;
  }
  function lP(e, t) {
    const [n, i, a, l] = yf(e);
    return sP(n, i, a, l - t);
  }
  function cP(e) {
    const [t, n, i, a] = yf(e);
    let l = (c) => {
      const d = Wo(0, 255, c).toString(16);
      return d.length === 1 ? `0${d}` : d;
    };
    return `#${l(t)}${l(n)}${l(i)}${a < 1 ? l(Math.round(a * 255)) : ""}`;
  }
  const uP = (e) => Object.keys(e).length === 0;
  function dP(e, t, n, i, a) {
    for (t = t.split ? t.split(".") : t, i = 0; i < t.length; i++)
      e = e ? e[t[i]] : a;
    return e === a ? n : e;
  }
  const Zt = (e, t, n) => {
      const i = dP(e, `colors.${t}`, t);
      try {
        return cP(i), i;
      } catch {
        return "#000000";
      }
    },
    fP = (e) => {
      const [t, n, i] = yf(e);
      return (t * 299 + n * 587 + i * 114) / 1e3;
    },
    pP = (e) => (t) => {
      const n = Zt(t, e);
      return fP(n) < 128 ? "dark" : "light";
    },
    hP = (e) => (t) => pP(e)(t) === "dark",
    Ii = (e, t) => (n) => {
      const i = Zt(n, e);
      return lP(i, 1 - t);
    };
  function $g(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
    return {
      backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
      backgroundSize: `${e} ${e}`,
    };
  }
  const mP = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, "0")}`;
  function gP(e) {
    const t = mP();
    return !e || uP(e)
      ? t
      : e.string && e.colors
      ? yP(e.string, e.colors)
      : e.string && !e.colors
      ? vP(e.string)
      : e.colors && !e.string
      ? bP(e.colors)
      : t;
  }
  function vP(e) {
    let t = 0;
    if (e.length === 0) return t.toString();
    for (let i = 0; i < e.length; i += 1)
      (t = e.charCodeAt(i) + ((t << 5) - t)), (t = t & t);
    let n = "#";
    for (let i = 0; i < 3; i += 1) {
      const a = (t >> (i * 8)) & 255;
      n += `00${a.toString(16)}`.substr(-2);
    }
    return n;
  }
  function yP(e, t) {
    let n = 0;
    if (e.length === 0) return t[0];
    for (let i = 0; i < e.length; i += 1)
      (n = e.charCodeAt(i) + ((n << 5) - n)), (n = n & n);
    return (n = ((n % t.length) + t.length) % t.length), t[n];
  }
  function bP(e) {
    return e[Math.floor(Math.random() * e.length)];
  }
  function we(e, t) {
    return (n) => (n.colorMode === "dark" ? t : e);
  }
  function bf(e) {
    const { orientation: t, vertical: n, horizontal: i } = e;
    return t ? (t === "vertical" ? n : i) : {};
  }
  function Bg(e) {
    return Rr(e) && e.reference ? e.reference : String(e);
  }
  const bc = (e, ...t) => t.map(Bg).join(` ${e} `).replace(/calc/g, ""),
    Vg = (...e) => `calc(${bc("+", ...e)})`,
    Wg = (...e) => `calc(${bc("-", ...e)})`,
    xf = (...e) => `calc(${bc("*", ...e)})`,
    Ug = (...e) => `calc(${bc("/", ...e)})`,
    Hg = (e) => {
      const t = Bg(e);
      return t != null && !Number.isNaN(parseFloat(t))
        ? String(t).startsWith("-")
          ? String(t).slice(1)
          : `-${t}`
        : xf(t, -1);
    },
    Dn = Object.assign(
      (e) => ({
        add: (...t) => Dn(Vg(e, ...t)),
        subtract: (...t) => Dn(Wg(e, ...t)),
        multiply: (...t) => Dn(xf(e, ...t)),
        divide: (...t) => Dn(Ug(e, ...t)),
        negate: () => Dn(Hg(e)),
        toString: () => e.toString(),
      }),
      { add: Vg, subtract: Wg, multiply: xf, divide: Ug, negate: Hg }
    );
  function xP(e) {
    return !Number.isInteger(parseFloat(e.toString()));
  }
  function wP(e, t = "-") {
    return e.replace(/\s+/g, t);
  }
  function qg(e) {
    const t = wP(e.toString());
    return t.includes("\\.") ? e : xP(e) ? t.replace(".", "\\.") : e;
  }
  function kP(e, t = "") {
    return [t, qg(e)].filter(Boolean).join("-");
  }
  function SP(e, t) {
    return `var(${qg(e)}${t ? `, ${t}` : ""})`;
  }
  function _P(e, t = "") {
    return `--${kP(e, t)}`;
  }
  function Et(e, t) {
    const n = _P(e, t == null ? void 0 : t.prefix);
    return {
      variable: n,
      reference: SP(n, CP(t == null ? void 0 : t.fallback)),
    };
  }
  function CP(e) {
    return e == null ? void 0 : e.reference;
  }
  const { definePartsStyle: gs, defineMultiStyleConfig: EP } = nt(bE.keys),
    yr = xe("alert-fg"),
    In = xe("alert-bg"),
    PP = gs({
      container: { bg: In.reference, px: "4", py: "3" },
      title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
      description: { lineHeight: "6" },
      icon: {
        color: yr.reference,
        flexShrink: 0,
        marginEnd: "3",
        w: "5",
        h: "6",
      },
      spinner: {
        color: yr.reference,
        flexShrink: 0,
        marginEnd: "3",
        w: "5",
        h: "5",
      },
    });
  function wf(e) {
    const { theme: t, colorScheme: n } = e,
      i = Ii(`${n}.200`, 0.16)(t);
    return { light: `colors.${n}.100`, dark: i };
  }
  const RP = gs((e) => {
      const { colorScheme: t } = e,
        n = wf(e);
      return {
        container: {
          [yr.variable]: `colors.${t}.600`,
          [In.variable]: n.light,
          _dark: { [yr.variable]: `colors.${t}.200`, [In.variable]: n.dark },
        },
      };
    }),
    jP = gs((e) => {
      const { colorScheme: t } = e,
        n = wf(e);
      return {
        container: {
          [yr.variable]: `colors.${t}.600`,
          [In.variable]: n.light,
          _dark: { [yr.variable]: `colors.${t}.200`, [In.variable]: n.dark },
          paddingStart: "3",
          borderStartWidth: "4px",
          borderStartColor: yr.reference,
        },
      };
    }),
    OP = gs((e) => {
      const { colorScheme: t } = e,
        n = wf(e);
      return {
        container: {
          [yr.variable]: `colors.${t}.600`,
          [In.variable]: n.light,
          _dark: { [yr.variable]: `colors.${t}.200`, [In.variable]: n.dark },
          pt: "2",
          borderTopWidth: "4px",
          borderTopColor: yr.reference,
        },
      };
    }),
    AP = gs((e) => {
      const { colorScheme: t } = e;
      return {
        container: {
          [yr.variable]: "colors.white",
          [In.variable]: `colors.${t}.600`,
          _dark: {
            [yr.variable]: "colors.gray.900",
            [In.variable]: `colors.${t}.200`,
          },
          color: yr.reference,
        },
      };
    }),
    TP = { subtle: RP, "left-accent": jP, "top-accent": OP, solid: AP },
    MP = EP({
      baseStyle: PP,
      variants: TP,
      defaultProps: { variant: "subtle", colorScheme: "blue" },
    }),
    Kg = {
      px: "1px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    zP = {
      max: "max-content",
      min: "min-content",
      full: "100%",
      "3xs": "14rem",
      "2xs": "16rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "8xl": "90rem",
      prose: "60ch",
    },
    DP = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    Gg = { ...Kg, ...zP, container: DP },
    IP = (e) => typeof e == "function";
  function Xt(e, ...t) {
    return IP(e) ? e(...t) : e;
  }
  const { definePartsStyle: Zg, defineMultiStyleConfig: FP } = nt(xE.keys),
    Fi = xe("avatar-border-color"),
    vs = xe("avatar-bg"),
    ys = xe("avatar-font-size"),
    Li = xe("avatar-size"),
    LP = {
      borderRadius: "full",
      border: "0.2em solid",
      borderColor: Fi.reference,
      [Fi.variable]: "white",
      _dark: { [Fi.variable]: "colors.gray.800" },
    },
    NP = {
      bg: vs.reference,
      fontSize: ys.reference,
      width: Li.reference,
      height: Li.reference,
      lineHeight: "1",
      [vs.variable]: "colors.gray.200",
      _dark: { [vs.variable]: "colors.whiteAlpha.400" },
    },
    $P = (e) => {
      const { name: t, theme: n } = e,
        i = t ? gP({ string: t }) : "colors.gray.400",
        a = hP(i)(n);
      let l = "white";
      return (
        a || (l = "gray.800"),
        {
          bg: vs.reference,
          fontSize: ys.reference,
          color: l,
          borderColor: Fi.reference,
          verticalAlign: "top",
          width: Li.reference,
          height: Li.reference,
          "&:not([data-loaded])": { [vs.variable]: i },
          [Fi.variable]: "colors.white",
          _dark: { [Fi.variable]: "colors.gray.800" },
        }
      );
    },
    BP = { fontSize: ys.reference, lineHeight: "1" },
    VP = Zg((e) => ({
      badge: Xt(LP, e),
      excessLabel: Xt(NP, e),
      container: Xt($P, e),
      label: BP,
    }));
  function no(e) {
    const t = e !== "100%" ? Gg[e] : void 0;
    return Zg({
      container: {
        [Li.variable]: t ?? e,
        [ys.variable]: `calc(${t ?? e} / 2.5)`,
      },
      excessLabel: {
        [Li.variable]: t ?? e,
        [ys.variable]: `calc(${t ?? e} / 2.5)`,
      },
    });
  }
  const WP = {
      "2xs": no(4),
      xs: no(6),
      sm: no(8),
      md: no(12),
      lg: no(16),
      xl: no(24),
      "2xl": no(32),
      full: no("100%"),
    },
    UP = FP({ baseStyle: VP, sizes: WP, defaultProps: { size: "md" } }),
    xt = uE("badge", ["bg", "color", "shadow"]),
    HP = {
      px: 1,
      textTransform: "uppercase",
      fontSize: "xs",
      borderRadius: "sm",
      fontWeight: "bold",
      bg: xt.bg.reference,
      color: xt.color.reference,
      boxShadow: xt.shadow.reference,
    },
    qP = (e) => {
      const { colorScheme: t, theme: n } = e,
        i = Ii(`${t}.500`, 0.6)(n);
      return {
        [xt.bg.variable]: `colors.${t}.500`,
        [xt.color.variable]: "colors.white",
        _dark: {
          [xt.bg.variable]: i,
          [xt.color.variable]: "colors.whiteAlpha.800",
        },
      };
    },
    KP = (e) => {
      const { colorScheme: t, theme: n } = e,
        i = Ii(`${t}.200`, 0.16)(n);
      return {
        [xt.bg.variable]: `colors.${t}.100`,
        [xt.color.variable]: `colors.${t}.800`,
        _dark: { [xt.bg.variable]: i, [xt.color.variable]: `colors.${t}.200` },
      };
    },
    GP = (e) => {
      const { colorScheme: t, theme: n } = e,
        i = Ii(`${t}.200`, 0.8)(n);
      return {
        [xt.color.variable]: `colors.${t}.500`,
        _dark: { [xt.color.variable]: i },
        [xt.shadow.variable]: `inset 0 0 0px 1px ${xt.color.reference}`,
      };
    },
    ZP = { solid: qP, subtle: KP, outline: GP },
    bs = {
      baseStyle: HP,
      variants: ZP,
      defaultProps: { variant: "subtle", colorScheme: "gray" },
    },
    { defineMultiStyleConfig: XP, definePartsStyle: YP } = nt(wE.keys),
    kf = xe("breadcrumb-link-decor"),
    QP = {
      transitionProperty: "common",
      transitionDuration: "fast",
      transitionTimingFunction: "ease-out",
      outline: "none",
      color: "inherit",
      textDecoration: kf.reference,
      [kf.variable]: "none",
      "&:not([aria-current=page])": {
        cursor: "pointer",
        _hover: { [kf.variable]: "underline" },
        _focusVisible: { boxShadow: "outline" },
      },
    },
    JP = YP({ link: QP }),
    e5 = XP({ baseStyle: JP }),
    t5 = {
      lineHeight: "1.2",
      borderRadius: "md",
      fontWeight: "semibold",
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
      _hover: { _disabled: { bg: "initial" } },
    },
    Xg = (e) => {
      const { colorScheme: t, theme: n } = e;
      if (t === "gray")
        return {
          color: we("gray.800", "whiteAlpha.900")(e),
          _hover: { bg: we("gray.100", "whiteAlpha.200")(e) },
          _active: { bg: we("gray.200", "whiteAlpha.300")(e) },
        };
      const i = Ii(`${t}.200`, 0.12)(n),
        a = Ii(`${t}.200`, 0.24)(n);
      return {
        color: we(`${t}.600`, `${t}.200`)(e),
        bg: "transparent",
        _hover: { bg: we(`${t}.50`, i)(e) },
        _active: { bg: we(`${t}.100`, a)(e) },
      };
    },
    r5 = (e) => {
      const { colorScheme: t } = e,
        n = we("gray.200", "whiteAlpha.300")(e);
      return {
        border: "1px solid",
        borderColor: t === "gray" ? n : "currentColor",
        ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
          { marginEnd: "-1px" },
        ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
          { marginBottom: "-1px" },
        ...Xt(Xg, e),
      };
    },
    n5 = {
      yellow: {
        bg: "yellow.400",
        color: "black",
        hoverBg: "yellow.500",
        activeBg: "yellow.600",
      },
      cyan: {
        bg: "cyan.400",
        color: "black",
        hoverBg: "cyan.500",
        activeBg: "cyan.600",
      },
    },
    o5 = (e) => {
      const { colorScheme: t } = e;
      if (t === "gray") {
        const d = we("gray.100", "whiteAlpha.200")(e);
        return {
          bg: d,
          color: we("gray.800", "whiteAlpha.900")(e),
          _hover: {
            bg: we("gray.200", "whiteAlpha.300")(e),
            _disabled: { bg: d },
          },
          _active: { bg: we("gray.300", "whiteAlpha.400")(e) },
        };
      }
      const {
          bg: n = `${t}.500`,
          color: i = "white",
          hoverBg: a = `${t}.600`,
          activeBg: l = `${t}.700`,
        } = n5[t] ?? {},
        c = we(n, `${t}.200`)(e);
      return {
        bg: c,
        color: we(i, "gray.800")(e),
        _hover: { bg: we(a, `${t}.300`)(e), _disabled: { bg: c } },
        _active: { bg: we(l, `${t}.400`)(e) },
      };
    },
    i5 = (e) => {
      const { colorScheme: t } = e;
      return {
        padding: 0,
        height: "auto",
        lineHeight: "normal",
        verticalAlign: "baseline",
        color: we(`${t}.500`, `${t}.200`)(e),
        _hover: {
          textDecoration: "underline",
          _disabled: { textDecoration: "none" },
        },
        _active: { color: we(`${t}.700`, `${t}.500`)(e) },
      };
    },
    a5 = {
      bg: "none",
      color: "inherit",
      display: "inline",
      lineHeight: "inherit",
      m: "0",
      p: "0",
    },
    s5 = { ghost: Xg, outline: r5, solid: o5, link: i5, unstyled: a5 },
    l5 = {
      lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
      md: { h: "10", minW: "10", fontSize: "md", px: "4" },
      sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
      xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
    },
    c5 = {
      baseStyle: t5,
      variants: s5,
      sizes: l5,
      defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
    },
    { definePartsStyle: Uo, defineMultiStyleConfig: u5 } = nt(VE.keys),
    xc = xe("card-bg"),
    Fn = xe("card-padding"),
    Yg = xe("card-shadow"),
    wc = xe("card-radius"),
    Qg = xe("card-border-width", "0"),
    Jg = xe("card-border-color"),
    d5 = Uo({
      container: {
        [xc.variable]: "colors.chakra-body-bg",
        backgroundColor: xc.reference,
        boxShadow: Yg.reference,
        borderRadius: wc.reference,
        color: "chakra-body-text",
        borderWidth: Qg.reference,
        borderColor: Jg.reference,
      },
      body: { padding: Fn.reference, flex: "1 1 0%" },
      header: { padding: Fn.reference },
      footer: { padding: Fn.reference },
    }),
    f5 = {
      sm: Uo({
        container: { [wc.variable]: "radii.base", [Fn.variable]: "space.3" },
      }),
      md: Uo({
        container: { [wc.variable]: "radii.md", [Fn.variable]: "space.5" },
      }),
      lg: Uo({
        container: { [wc.variable]: "radii.xl", [Fn.variable]: "space.7" },
      }),
    },
    p5 = {
      elevated: Uo({
        container: {
          [Yg.variable]: "shadows.base",
          _dark: { [xc.variable]: "colors.gray.700" },
        },
      }),
      outline: Uo({
        container: {
          [Qg.variable]: "1px",
          [Jg.variable]: "colors.chakra-border-color",
        },
      }),
      filled: Uo({ container: { [xc.variable]: "colors.chakra-subtle-bg" } }),
      unstyled: {
        body: { [Fn.variable]: 0 },
        header: { [Fn.variable]: 0 },
        footer: { [Fn.variable]: 0 },
      },
    },
    h5 = u5({
      baseStyle: d5,
      variants: p5,
      sizes: f5,
      defaultProps: { variant: "elevated", size: "md" },
    }),
    { definePartsStyle: kc, defineMultiStyleConfig: m5 } = nt(kE.keys),
    xs = xe("checkbox-size"),
    g5 = (e) => {
      const { colorScheme: t } = e;
      return {
        w: xs.reference,
        h: xs.reference,
        transitionProperty: "box-shadow",
        transitionDuration: "normal",
        border: "2px solid",
        borderRadius: "sm",
        borderColor: "inherit",
        color: "white",
        _checked: {
          bg: we(`${t}.500`, `${t}.200`)(e),
          borderColor: we(`${t}.500`, `${t}.200`)(e),
          color: we("white", "gray.900")(e),
          _hover: {
            bg: we(`${t}.600`, `${t}.300`)(e),
            borderColor: we(`${t}.600`, `${t}.300`)(e),
          },
          _disabled: {
            borderColor: we("gray.200", "transparent")(e),
            bg: we("gray.200", "whiteAlpha.300")(e),
            color: we("gray.500", "whiteAlpha.500")(e),
          },
        },
        _indeterminate: {
          bg: we(`${t}.500`, `${t}.200`)(e),
          borderColor: we(`${t}.500`, `${t}.200`)(e),
          color: we("white", "gray.900")(e),
        },
        _disabled: {
          bg: we("gray.100", "whiteAlpha.100")(e),
          borderColor: we("gray.100", "transparent")(e),
        },
        _focusVisible: { boxShadow: "outline" },
        _invalid: { borderColor: we("red.500", "red.300")(e) },
      };
    },
    v5 = { _disabled: { cursor: "not-allowed" } },
    y5 = { userSelect: "none", _disabled: { opacity: 0.4 } },
    b5 = { transitionProperty: "transform", transitionDuration: "normal" },
    x5 = kc((e) => ({
      icon: b5,
      container: v5,
      control: Xt(g5, e),
      label: y5,
    })),
    w5 = {
      sm: kc({
        control: { [xs.variable]: "sizes.3" },
        label: { fontSize: "sm" },
        icon: { fontSize: "3xs" },
      }),
      md: kc({
        control: { [xs.variable]: "sizes.4" },
        label: { fontSize: "md" },
        icon: { fontSize: "2xs" },
      }),
      lg: kc({
        control: { [xs.variable]: "sizes.5" },
        label: { fontSize: "lg" },
        icon: { fontSize: "2xs" },
      }),
    },
    oo = m5({
      baseStyle: x5,
      sizes: w5,
      defaultProps: { size: "md", colorScheme: "blue" },
    }),
    ws = Et("close-button-size"),
    ks = Et("close-button-bg"),
    k5 = {
      w: [ws.reference],
      h: [ws.reference],
      borderRadius: "md",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
      _hover: {
        [ks.variable]: "colors.blackAlpha.100",
        _dark: { [ks.variable]: "colors.whiteAlpha.100" },
      },
      _active: {
        [ks.variable]: "colors.blackAlpha.200",
        _dark: { [ks.variable]: "colors.whiteAlpha.200" },
      },
      _focusVisible: { boxShadow: "outline" },
      bg: ks.reference,
    },
    S5 = {
      lg: { [ws.variable]: "sizes.10", fontSize: "md" },
      md: { [ws.variable]: "sizes.8", fontSize: "xs" },
      sm: { [ws.variable]: "sizes.6", fontSize: "2xs" },
    },
    _5 = { baseStyle: k5, sizes: S5, defaultProps: { size: "md" } },
    { variants: C5, defaultProps: E5 } = bs,
    P5 = {
      fontFamily: "mono",
      fontSize: "sm",
      px: "0.2em",
      borderRadius: "sm",
      bg: xt.bg.reference,
      color: xt.color.reference,
      boxShadow: xt.shadow.reference,
    },
    R5 = { baseStyle: P5, variants: C5, defaultProps: E5 },
    j5 = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
    O5 = { baseStyle: j5 },
    A5 = { opacity: 0.6, borderColor: "inherit" },
    T5 = { borderStyle: "solid" },
    M5 = { borderStyle: "dashed" },
    z5 = { solid: T5, dashed: M5 },
    D5 = { baseStyle: A5, variants: z5, defaultProps: { variant: "solid" } },
    { definePartsStyle: ev, defineMultiStyleConfig: I5 } = nt(SE.keys),
    Sf = xe("drawer-bg"),
    _f = xe("drawer-box-shadow");
  function Ni(e) {
    return ev(
      e === "full"
        ? { dialog: { maxW: "100vw", h: "100vh" } }
        : { dialog: { maxW: e } }
    );
  }
  const F5 = { bg: "blackAlpha.600", zIndex: "modal" },
    L5 = { display: "flex", zIndex: "modal", justifyContent: "center" },
    N5 = (e) => {
      const { isFullHeight: t } = e;
      return {
        ...(t && { height: "100vh" }),
        zIndex: "modal",
        maxH: "100vh",
        color: "inherit",
        [Sf.variable]: "colors.white",
        [_f.variable]: "shadows.lg",
        _dark: {
          [Sf.variable]: "colors.gray.700",
          [_f.variable]: "shadows.dark-lg",
        },
        bg: Sf.reference,
        boxShadow: _f.reference,
      };
    },
    $5 = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
    B5 = { position: "absolute", top: "2", insetEnd: "3" },
    V5 = { px: "6", py: "2", flex: "1", overflow: "auto" },
    W5 = { px: "6", py: "4" },
    U5 = ev((e) => ({
      overlay: F5,
      dialogContainer: L5,
      dialog: Xt(N5, e),
      header: $5,
      closeButton: B5,
      body: V5,
      footer: W5,
    })),
    H5 = {
      xs: Ni("xs"),
      sm: Ni("md"),
      md: Ni("lg"),
      lg: Ni("2xl"),
      xl: Ni("4xl"),
      full: Ni("full"),
    },
    q5 = I5({ baseStyle: U5, sizes: H5, defaultProps: { size: "xs" } }),
    { definePartsStyle: K5, defineMultiStyleConfig: G5 } = nt(_E.keys),
    Z5 = {
      borderRadius: "md",
      py: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
    },
    X5 = {
      borderRadius: "md",
      py: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
      width: "full",
      _focusVisible: { boxShadow: "outline" },
      _placeholder: { opacity: 0.6 },
    },
    Y5 = {
      borderRadius: "md",
      py: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
      width: "full",
      _focusVisible: { boxShadow: "outline" },
      _placeholder: { opacity: 0.6 },
    },
    Q5 = K5({ preview: Z5, input: X5, textarea: Y5 }),
    J5 = G5({ baseStyle: Q5 }),
    { definePartsStyle: e3, defineMultiStyleConfig: t3 } = nt(CE.keys),
    $i = xe("form-control-color"),
    r3 = {
      marginStart: "1",
      [$i.variable]: "colors.red.500",
      _dark: { [$i.variable]: "colors.red.300" },
      color: $i.reference,
    },
    n3 = {
      mt: "2",
      [$i.variable]: "colors.gray.600",
      _dark: { [$i.variable]: "colors.whiteAlpha.600" },
      color: $i.reference,
      lineHeight: "normal",
      fontSize: "sm",
    },
    o3 = e3({
      container: { width: "100%", position: "relative" },
      requiredIndicator: r3,
      helperText: n3,
    }),
    i3 = t3({ baseStyle: o3 }),
    { definePartsStyle: a3, defineMultiStyleConfig: s3 } = nt(EE.keys),
    Bi = xe("form-error-color"),
    l3 = {
      [Bi.variable]: "colors.red.500",
      _dark: { [Bi.variable]: "colors.red.300" },
      color: Bi.reference,
      mt: "2",
      fontSize: "sm",
      lineHeight: "normal",
    },
    c3 = {
      marginEnd: "0.5em",
      [Bi.variable]: "colors.red.500",
      _dark: { [Bi.variable]: "colors.red.300" },
      color: Bi.reference,
    },
    u3 = a3({ text: l3, icon: c3 }),
    d3 = s3({ baseStyle: u3 }),
    f3 = {
      fontSize: "md",
      marginEnd: "3",
      mb: "2",
      fontWeight: "medium",
      transitionProperty: "common",
      transitionDuration: "normal",
      opacity: 1,
      _disabled: { opacity: 0.4 },
    },
    p3 = { baseStyle: f3 },
    h3 = { fontFamily: "heading", fontWeight: "bold" },
    m3 = {
      "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
      "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
      "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
      xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
      lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
      md: { fontSize: "xl", lineHeight: 1.2 },
      sm: { fontSize: "md", lineHeight: 1.2 },
      xs: { fontSize: "sm", lineHeight: 1.2 },
    },
    g3 = { baseStyle: h3, sizes: m3, defaultProps: { size: "xl" } },
    { definePartsStyle: Ln, defineMultiStyleConfig: v3 } = nt(PE.keys),
    Vi = xe("input-height"),
    Wi = xe("input-font-size"),
    Ui = xe("input-padding"),
    Hi = xe("input-border-radius"),
    y3 = Ln({
      addon: {
        height: Vi.reference,
        fontSize: Wi.reference,
        px: Ui.reference,
        borderRadius: Hi.reference,
      },
      field: {
        width: "100%",
        height: Vi.reference,
        fontSize: Wi.reference,
        px: Ui.reference,
        borderRadius: Hi.reference,
        minWidth: 0,
        outline: 0,
        position: "relative",
        appearance: "none",
        transitionProperty: "common",
        transitionDuration: "normal",
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
      },
    }),
    io = {
      lg: {
        [Wi.variable]: "fontSizes.lg",
        [Ui.variable]: "space.4",
        [Hi.variable]: "radii.md",
        [Vi.variable]: "sizes.12",
      },
      md: {
        [Wi.variable]: "fontSizes.md",
        [Ui.variable]: "space.4",
        [Hi.variable]: "radii.md",
        [Vi.variable]: "sizes.10",
      },
      sm: {
        [Wi.variable]: "fontSizes.sm",
        [Ui.variable]: "space.3",
        [Hi.variable]: "radii.sm",
        [Vi.variable]: "sizes.8",
      },
      xs: {
        [Wi.variable]: "fontSizes.xs",
        [Ui.variable]: "space.2",
        [Hi.variable]: "radii.sm",
        [Vi.variable]: "sizes.6",
      },
    },
    b3 = {
      lg: Ln({ field: io.lg, group: io.lg }),
      md: Ln({ field: io.md, group: io.md }),
      sm: Ln({ field: io.sm, group: io.sm }),
      xs: Ln({ field: io.xs, group: io.xs }),
    };
  function Cf(e) {
    const { focusBorderColor: t, errorBorderColor: n } = e;
    return {
      focusBorderColor: t || we("blue.500", "blue.300")(e),
      errorBorderColor: n || we("red.500", "red.300")(e),
    };
  }
  const x3 = Ln((e) => {
      const { theme: t } = e,
        { focusBorderColor: n, errorBorderColor: i } = Cf(e);
      return {
        field: {
          border: "1px solid",
          borderColor: "inherit",
          bg: "inherit",
          _hover: { borderColor: we("gray.300", "whiteAlpha.400")(e) },
          _readOnly: { boxShadow: "none !important", userSelect: "all" },
          _invalid: {
            borderColor: Zt(t, i),
            boxShadow: `0 0 0 1px ${Zt(t, i)}`,
          },
          _focusVisible: {
            zIndex: 1,
            borderColor: Zt(t, n),
            boxShadow: `0 0 0 1px ${Zt(t, n)}`,
          },
        },
        addon: {
          border: "1px solid",
          borderColor: we("inherit", "whiteAlpha.50")(e),
          bg: we("gray.100", "whiteAlpha.300")(e),
        },
      };
    }),
    w3 = Ln((e) => {
      const { theme: t } = e,
        { focusBorderColor: n, errorBorderColor: i } = Cf(e);
      return {
        field: {
          border: "2px solid",
          borderColor: "transparent",
          bg: we("gray.100", "whiteAlpha.50")(e),
          _hover: { bg: we("gray.200", "whiteAlpha.100")(e) },
          _readOnly: { boxShadow: "none !important", userSelect: "all" },
          _invalid: { borderColor: Zt(t, i) },
          _focusVisible: { bg: "transparent", borderColor: Zt(t, n) },
        },
        addon: {
          border: "2px solid",
          borderColor: "transparent",
          bg: we("gray.100", "whiteAlpha.50")(e),
        },
      };
    }),
    k3 = Ln((e) => {
      const { theme: t } = e,
        { focusBorderColor: n, errorBorderColor: i } = Cf(e);
      return {
        field: {
          borderBottom: "1px solid",
          borderColor: "inherit",
          borderRadius: "0",
          px: "0",
          bg: "transparent",
          _readOnly: { boxShadow: "none !important", userSelect: "all" },
          _invalid: {
            borderColor: Zt(t, i),
            boxShadow: `0px 1px 0px 0px ${Zt(t, i)}`,
          },
          _focusVisible: {
            borderColor: Zt(t, n),
            boxShadow: `0px 1px 0px 0px ${Zt(t, n)}`,
          },
        },
        addon: {
          borderBottom: "2px solid",
          borderColor: "inherit",
          borderRadius: "0",
          px: "0",
          bg: "transparent",
        },
      };
    }),
    S3 = Ln({
      field: { bg: "transparent", px: "0", height: "auto" },
      addon: { bg: "transparent", px: "0", height: "auto" },
    }),
    _3 = { outline: x3, filled: w3, flushed: k3, unstyled: S3 },
    We = v3({
      baseStyle: y3,
      sizes: b3,
      variants: _3,
      defaultProps: { size: "md", variant: "outline" },
    }),
    Ef = xe("kbd-bg"),
    C3 = {
      [Ef.variable]: "colors.gray.100",
      _dark: { [Ef.variable]: "colors.whiteAlpha.100" },
      bg: Ef.reference,
      borderRadius: "md",
      borderWidth: "1px",
      borderBottomWidth: "3px",
      fontSize: "0.8em",
      fontWeight: "bold",
      lineHeight: "normal",
      px: "0.4em",
      whiteSpace: "nowrap",
    },
    E3 = { baseStyle: C3 },
    P3 = {
      transitionProperty: "common",
      transitionDuration: "fast",
      transitionTimingFunction: "ease-out",
      cursor: "pointer",
      textDecoration: "none",
      outline: "none",
      color: "inherit",
      _hover: { textDecoration: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
    R3 = { baseStyle: P3 },
    { defineMultiStyleConfig: j3, definePartsStyle: O3 } = nt(RE.keys),
    A3 = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
    T3 = O3({ icon: A3 }),
    M3 = j3({ baseStyle: T3 }),
    { defineMultiStyleConfig: z3, definePartsStyle: D3 } = nt(jE.keys),
    hn = xe("menu-bg"),
    Pf = xe("menu-shadow"),
    I3 = {
      [hn.variable]: "#fff",
      [Pf.variable]: "shadows.sm",
      _dark: {
        [hn.variable]: "colors.gray.700",
        [Pf.variable]: "shadows.dark-lg",
      },
      color: "inherit",
      minW: "3xs",
      py: "2",
      zIndex: "dropdown",
      borderRadius: "md",
      borderWidth: "1px",
      bg: hn.reference,
      boxShadow: Pf.reference,
    },
    F3 = {
      py: "1.5",
      px: "3",
      transitionProperty: "background",
      transitionDuration: "ultra-fast",
      transitionTimingFunction: "ease-in",
      _focus: {
        [hn.variable]: "colors.gray.100",
        _dark: { [hn.variable]: "colors.whiteAlpha.100" },
      },
      _active: {
        [hn.variable]: "colors.gray.200",
        _dark: { [hn.variable]: "colors.whiteAlpha.200" },
      },
      _expanded: {
        [hn.variable]: "colors.gray.100",
        _dark: { [hn.variable]: "colors.whiteAlpha.100" },
      },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      bg: hn.reference,
    },
    L3 = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
    N3 = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    $3 = { opacity: 0.6 },
    B3 = {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "inherit",
      my: "2",
      opacity: 0.6,
    },
    V3 = { transitionProperty: "common", transitionDuration: "normal" },
    W3 = D3({
      button: V3,
      list: I3,
      item: F3,
      groupTitle: L3,
      icon: N3,
      command: $3,
      divider: B3,
    }),
    U3 = z3({ baseStyle: W3 }),
    { defineMultiStyleConfig: H3, definePartsStyle: tv } = nt(OE.keys),
    Rf = xe("modal-bg"),
    jf = xe("modal-shadow"),
    q3 = { bg: "blackAlpha.600", zIndex: "modal" },
    K3 = (e) => {
      const { isCentered: t, scrollBehavior: n } = e;
      return {
        display: "flex",
        zIndex: "modal",
        justifyContent: "center",
        alignItems: t ? "center" : "flex-start",
        overflow: n === "inside" ? "hidden" : "auto",
        overscrollBehaviorY: "none",
      };
    },
    G3 = (e) => {
      const { isCentered: t, scrollBehavior: n } = e;
      return {
        borderRadius: "md",
        color: "inherit",
        my: t ? "auto" : "16",
        mx: t ? "auto" : void 0,
        zIndex: "modal",
        maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
        [Rf.variable]: "colors.white",
        [jf.variable]: "shadows.lg",
        _dark: {
          [Rf.variable]: "colors.gray.700",
          [jf.variable]: "shadows.dark-lg",
        },
        bg: Rf.reference,
        boxShadow: jf.reference,
      };
    },
    Z3 = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
    X3 = { position: "absolute", top: "2", insetEnd: "3" },
    Y3 = (e) => {
      const { scrollBehavior: t } = e;
      return {
        px: "6",
        py: "2",
        flex: "1",
        overflow: t === "inside" ? "auto" : void 0,
      };
    },
    Q3 = { px: "6", py: "4" },
    J3 = tv((e) => ({
      overlay: q3,
      dialogContainer: Xt(K3, e),
      dialog: Xt(G3, e),
      header: Z3,
      closeButton: X3,
      body: Xt(Y3, e),
      footer: Q3,
    }));
  function Xr(e) {
    return tv(
      e === "full"
        ? {
            dialog: {
              maxW: "100vw",
              minH: "$100vh",
              my: "0",
              borderRadius: "0",
            },
          }
        : { dialog: { maxW: e } }
    );
  }
  const e4 = {
      xs: Xr("xs"),
      sm: Xr("sm"),
      md: Xr("md"),
      lg: Xr("lg"),
      xl: Xr("xl"),
      "2xl": Xr("2xl"),
      "3xl": Xr("3xl"),
      "4xl": Xr("4xl"),
      "5xl": Xr("5xl"),
      "6xl": Xr("6xl"),
      full: Xr("full"),
    },
    t4 = H3({ baseStyle: J3, sizes: e4, defaultProps: { size: "md" } }),
    rv = {
      letterSpacings: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeights: {
        normal: "normal",
        none: 1,
        shorter: 1.25,
        short: 1.375,
        base: 1.5,
        tall: 1.625,
        taller: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fonts: {
        heading:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      },
      fontSizes: {
        "3xs": "0.45rem",
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
    },
    { defineMultiStyleConfig: r4, definePartsStyle: nv } = nt(AE.keys),
    Of = Et("number-input-stepper-width"),
    ov = Et("number-input-input-padding"),
    n4 = Dn(Of).add("0.5rem").toString(),
    Af = Et("number-input-bg"),
    Tf = Et("number-input-color"),
    Mf = Et("number-input-border-color"),
    o4 = { [Of.variable]: "sizes.6", [ov.variable]: n4 },
    i4 = (e) => {
      var t;
      return ((t = Xt(We.baseStyle, e)) == null ? void 0 : t.field) ?? {};
    },
    a4 = { width: Of.reference },
    s4 = {
      borderStart: "1px solid",
      borderStartColor: Mf.reference,
      color: Tf.reference,
      bg: Af.reference,
      [Tf.variable]: "colors.chakra-body-text",
      [Mf.variable]: "colors.chakra-border-color",
      _dark: {
        [Tf.variable]: "colors.whiteAlpha.800",
        [Mf.variable]: "colors.whiteAlpha.300",
      },
      _active: {
        [Af.variable]: "colors.gray.200",
        _dark: { [Af.variable]: "colors.whiteAlpha.300" },
      },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
    l4 = nv((e) => ({
      root: o4,
      field: Xt(i4, e) ?? {},
      stepperGroup: a4,
      stepper: s4,
    }));
  function Sc(e) {
    var l, c;
    const t = (l = We.sizes) == null ? void 0 : l[e],
      n = { lg: "md", md: "md", sm: "sm", xs: "sm" },
      i = ((c = t.field) == null ? void 0 : c.fontSize) ?? "md",
      a = rv.fontSizes[i];
    return nv({
      field: {
        ...t.field,
        paddingInlineEnd: ov.reference,
        verticalAlign: "top",
      },
      stepper: {
        fontSize: Dn(a).multiply(0.75).toString(),
        _first: { borderTopEndRadius: n[e] },
        _last: { borderBottomEndRadius: n[e], mt: "-1px", borderTopWidth: 1 },
      },
    });
  }
  const c4 = { xs: Sc("xs"), sm: Sc("sm"), md: Sc("md"), lg: Sc("lg") },
    u4 = r4({
      baseStyle: l4,
      sizes: c4,
      variants: We.variants,
      defaultProps: We.defaultProps,
    }),
    d4 = {
      ...((Nk = We.baseStyle) == null ? void 0 : Nk.field),
      textAlign: "center",
    },
    f4 = {
      lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
      md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
      sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
      xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
    },
    p4 = {
      outline: (e) => {
        var t, n;
        return (
          ((n = Xt((t = We.variants) == null ? void 0 : t.outline, e)) == null
            ? void 0
            : n.field) ?? {}
        );
      },
      flushed: (e) => {
        var t, n;
        return (
          ((n = Xt((t = We.variants) == null ? void 0 : t.flushed, e)) == null
            ? void 0
            : n.field) ?? {}
        );
      },
      filled: (e) => {
        var t, n;
        return (
          ((n = Xt((t = We.variants) == null ? void 0 : t.filled, e)) == null
            ? void 0
            : n.field) ?? {}
        );
      },
      unstyled: (($k = We.variants) == null ? void 0 : $k.unstyled.field) ?? {},
    },
    h4 = {
      baseStyle: d4,
      sizes: f4,
      variants: p4,
      defaultProps: We.defaultProps,
    },
    { defineMultiStyleConfig: m4, definePartsStyle: g4 } = nt(TE.keys),
    _c = Et("popper-bg"),
    v4 = Et("popper-arrow-bg"),
    iv = Et("popper-arrow-shadow-color"),
    y4 = { zIndex: "popover" },
    b4 = {
      [_c.variable]: "colors.white",
      bg: _c.reference,
      [v4.variable]: _c.reference,
      [iv.variable]: "colors.gray.200",
      _dark: {
        [_c.variable]: "colors.gray.700",
        [iv.variable]: "colors.whiteAlpha.300",
      },
      width: "xs",
      border: "1px solid",
      borderColor: "inherit",
      borderRadius: "md",
      boxShadow: "sm",
      zIndex: "inherit",
      _focusVisible: { outline: 0, boxShadow: "outline" },
    },
    x4 = { px: 3, py: 2, borderBottomWidth: "1px" },
    w4 = { px: 3, py: 2 },
    k4 = { px: 3, py: 2, borderTopWidth: "1px" },
    S4 = {
      position: "absolute",
      borderRadius: "md",
      top: 1,
      insetEnd: 2,
      padding: 2,
    },
    _4 = g4({
      popper: y4,
      content: b4,
      header: x4,
      body: w4,
      footer: k4,
      closeButton: S4,
    }),
    C4 = m4({ baseStyle: _4 }),
    { defineMultiStyleConfig: E4, definePartsStyle: Ss } = nt(ME.keys),
    P4 = (e) => {
      const { colorScheme: t, theme: n, isIndeterminate: i, hasStripe: a } = e,
        l = we($g(), $g("1rem", "rgba(0,0,0,0.1)"))(e),
        c = we(`${t}.500`, `${t}.200`)(e),
        d = `linear-gradient(
    to right,
    transparent 0%,
    ${Zt(n, c)} 50%,
    transparent 100%
  )`;
      return { ...(!i && a && l), ...(i ? { bgImage: d } : { bgColor: c }) };
    },
    R4 = {
      lineHeight: "1",
      fontSize: "0.25em",
      fontWeight: "bold",
      color: "white",
    },
    j4 = (e) => ({ bg: we("gray.100", "whiteAlpha.300")(e) }),
    O4 = (e) => ({
      transitionProperty: "common",
      transitionDuration: "slow",
      ...P4(e),
    }),
    A4 = Ss((e) => ({ label: R4, filledTrack: O4(e), track: j4(e) })),
    T4 = {
      xs: Ss({ track: { h: "1" } }),
      sm: Ss({ track: { h: "2" } }),
      md: Ss({ track: { h: "3" } }),
      lg: Ss({ track: { h: "4" } }),
    },
    M4 = E4({
      sizes: T4,
      baseStyle: A4,
      defaultProps: { size: "md", colorScheme: "blue" },
    }),
    { defineMultiStyleConfig: z4, definePartsStyle: Cc } = nt(zE.keys),
    D4 = (e) => {
      var n;
      const t = (n = Xt(oo.baseStyle, e)) == null ? void 0 : n.control;
      return {
        ...t,
        borderRadius: "full",
        _checked: {
          ...(t == null ? void 0 : t._checked),
          _before: {
            content: '""',
            display: "inline-block",
            pos: "relative",
            w: "50%",
            h: "50%",
            borderRadius: "50%",
            bg: "currentColor",
          },
        },
      };
    },
    I4 = Cc((e) => {
      var t, n;
      return {
        label: (t = oo.baseStyle) == null ? void 0 : t.call(oo, e).label,
        container:
          (n = oo.baseStyle) == null ? void 0 : n.call(oo, e).container,
        control: D4(e),
      };
    }),
    F4 = {
      md: Cc({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
      lg: Cc({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
      sm: Cc({
        control: { width: "3", height: "3" },
        label: { fontSize: "sm" },
      }),
    },
    L4 = z4({
      baseStyle: I4,
      sizes: F4,
      defaultProps: { size: "md", colorScheme: "blue" },
    }),
    { defineMultiStyleConfig: N4, definePartsStyle: $4 } = nt(DE.keys),
    Ec = xe("select-bg"),
    B4 = {
      ...((Bk = We.baseStyle) == null ? void 0 : Bk.field),
      appearance: "none",
      paddingBottom: "1px",
      lineHeight: "normal",
      bg: Ec.reference,
      [Ec.variable]: "colors.white",
      _dark: { [Ec.variable]: "colors.gray.700" },
      "> option, > optgroup": { bg: Ec.reference },
    },
    V4 = {
      width: "6",
      height: "100%",
      insetEnd: "2",
      position: "relative",
      color: "currentColor",
      fontSize: "xl",
      _disabled: { opacity: 0.5 },
    },
    W4 = $4({ field: B4, icon: V4 }),
    Pc = { paddingInlineEnd: "8" },
    U4 = {
      lg: {
        ...((Vk = We.sizes) == null ? void 0 : Vk.lg),
        field: { ...((Wk = We.sizes) == null ? void 0 : Wk.lg.field), ...Pc },
      },
      md: {
        ...((Uk = We.sizes) == null ? void 0 : Uk.md),
        field: { ...((Hk = We.sizes) == null ? void 0 : Hk.md.field), ...Pc },
      },
      sm: {
        ...((qk = We.sizes) == null ? void 0 : qk.sm),
        field: { ...((Kk = We.sizes) == null ? void 0 : Kk.sm.field), ...Pc },
      },
      xs: {
        ...((Gk = We.sizes) == null ? void 0 : Gk.xs),
        field: { ...((Zk = We.sizes) == null ? void 0 : Zk.xs.field), ...Pc },
        icon: { insetEnd: "1" },
      },
    },
    H4 = N4({
      baseStyle: W4,
      sizes: U4,
      variants: We.variants,
      defaultProps: We.defaultProps,
    }),
    zf = xe("skeleton-start-color"),
    Df = xe("skeleton-end-color"),
    q4 = {
      [zf.variable]: "colors.gray.100",
      [Df.variable]: "colors.gray.400",
      _dark: {
        [zf.variable]: "colors.gray.800",
        [Df.variable]: "colors.gray.600",
      },
      background: zf.reference,
      borderColor: Df.reference,
      opacity: 0.7,
      borderRadius: "sm",
    },
    K4 = { baseStyle: q4 },
    If = xe("skip-link-bg"),
    G4 = {
      borderRadius: "md",
      fontWeight: "semibold",
      _focusVisible: {
        boxShadow: "outline",
        padding: "4",
        position: "fixed",
        top: "6",
        insetStart: "6",
        [If.variable]: "colors.white",
        _dark: { [If.variable]: "colors.gray.700" },
        bg: If.reference,
      },
    },
    Z4 = { baseStyle: G4 },
    { defineMultiStyleConfig: X4, definePartsStyle: Rc } = nt(IE.keys),
    Ho = xe("slider-thumb-size"),
    _s = xe("slider-track-size"),
    ao = xe("slider-bg"),
    Y4 = (e) => {
      const { orientation: t } = e;
      return {
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
        ...bf({
          orientation: t,
          vertical: { h: "100%", px: zn(Ho.reference).divide(2).toString() },
          horizontal: { w: "100%", py: zn(Ho.reference).divide(2).toString() },
        }),
      };
    },
    Q4 = (e) => ({
      ...bf({
        orientation: e.orientation,
        horizontal: { h: _s.reference },
        vertical: { w: _s.reference },
      }),
      overflow: "hidden",
      borderRadius: "sm",
      [ao.variable]: "colors.gray.200",
      _dark: { [ao.variable]: "colors.whiteAlpha.200" },
      _disabled: {
        [ao.variable]: "colors.gray.300",
        _dark: { [ao.variable]: "colors.whiteAlpha.300" },
      },
      bg: ao.reference,
    }),
    J4 = (e) => {
      const { orientation: t } = e;
      return {
        ...bf({
          orientation: t,
          vertical: {
            left: "50%",
            transform: "translateX(-50%)",
            _active: { transform: "translateX(-50%) scale(1.15)" },
          },
          horizontal: {
            top: "50%",
            transform: "translateY(-50%)",
            _active: { transform: "translateY(-50%) scale(1.15)" },
          },
        }),
        w: Ho.reference,
        h: Ho.reference,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        outline: 0,
        zIndex: 1,
        borderRadius: "full",
        bg: "white",
        boxShadow: "base",
        border: "1px solid",
        borderColor: "transparent",
        transitionProperty: "transform",
        transitionDuration: "normal",
        _focusVisible: { boxShadow: "outline" },
        _disabled: { bg: "gray.300" },
      };
    },
    eR = (e) => {
      const { colorScheme: t } = e;
      return {
        width: "inherit",
        height: "inherit",
        [ao.variable]: `colors.${t}.500`,
        _dark: { [ao.variable]: `colors.${t}.200` },
        bg: ao.reference,
      };
    },
    tR = Rc((e) => ({
      container: Y4(e),
      track: Q4(e),
      thumb: J4(e),
      filledTrack: eR(e),
    })),
    rR = Rc({
      container: { [Ho.variable]: "sizes.4", [_s.variable]: "sizes.1" },
    }),
    nR = Rc({
      container: { [Ho.variable]: "sizes.3.5", [_s.variable]: "sizes.1" },
    }),
    oR = Rc({
      container: { [Ho.variable]: "sizes.2.5", [_s.variable]: "sizes.0.5" },
    }),
    iR = { lg: rR, md: nR, sm: oR },
    aR = X4({
      baseStyle: tR,
      sizes: iR,
      defaultProps: { size: "md", colorScheme: "blue" },
    }),
    qo = Et("spinner-size"),
    sR = { width: [qo.reference], height: [qo.reference] },
    lR = {
      xs: { [qo.variable]: "sizes.3" },
      sm: { [qo.variable]: "sizes.4" },
      md: { [qo.variable]: "sizes.6" },
      lg: { [qo.variable]: "sizes.8" },
      xl: { [qo.variable]: "sizes.12" },
    },
    cR = { baseStyle: sR, sizes: lR, defaultProps: { size: "md" } },
    { defineMultiStyleConfig: uR, definePartsStyle: av } = nt(FE.keys),
    dR = { fontWeight: "medium" },
    fR = { opacity: 0.8, marginBottom: "2" },
    pR = { verticalAlign: "baseline", fontWeight: "semibold" },
    hR = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
    mR = av({ container: {}, label: dR, helpText: fR, number: pR, icon: hR }),
    gR = {
      md: av({
        label: { fontSize: "sm" },
        helpText: { fontSize: "sm" },
        number: { fontSize: "2xl" },
      }),
    },
    vR = uR({ baseStyle: mR, sizes: gR, defaultProps: { size: "md" } }),
    { defineMultiStyleConfig: yR, definePartsStyle: Cs } = nt([
      "stepper",
      "step",
      "title",
      "description",
      "indicator",
      "separator",
      "icon",
      "number",
    ]),
    Nn = xe("stepper-indicator-size"),
    qi = xe("stepper-icon-size"),
    Ki = xe("stepper-title-font-size"),
    Es = xe("stepper-description-font-size"),
    Ps = xe("stepper-accent-color"),
    bR = Cs(({ colorScheme: e }) => ({
      stepper: {
        display: "flex",
        justifyContent: "space-between",
        gap: "4",
        "&[data-orientation=vertical]": {
          flexDirection: "column",
          alignItems: "flex-start",
        },
        "&[data-orientation=horizontal]": {
          flexDirection: "row",
          alignItems: "center",
        },
        [Ps.variable]: `colors.${e}.500`,
        _dark: { [Ps.variable]: `colors.${e}.200` },
      },
      title: { fontSize: Ki.reference, fontWeight: "medium" },
      description: { fontSize: Es.reference, color: "chakra-subtle-text" },
      number: { fontSize: Ki.reference },
      step: {
        flexShrink: 0,
        position: "relative",
        display: "flex",
        gap: "2",
        "&[data-orientation=horizontal]": { alignItems: "center" },
        flex: "1",
        "&:last-of-type:not([data-stretch])": { flex: "initial" },
      },
      icon: { flexShrink: 0, width: qi.reference, height: qi.reference },
      indicator: {
        flexShrink: 0,
        borderRadius: "full",
        width: Nn.reference,
        height: Nn.reference,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&[data-status=active]": {
          borderWidth: "2px",
          borderColor: Ps.reference,
        },
        "&[data-status=complete]": {
          bg: Ps.reference,
          color: "chakra-inverse-text",
        },
        "&[data-status=incomplete]": { borderWidth: "2px" },
      },
      separator: {
        bg: "chakra-border-color",
        flex: "1",
        "&[data-status=complete]": { bg: Ps.reference },
        "&[data-orientation=horizontal]": {
          width: "100%",
          height: "2px",
          marginStart: "2",
        },
        "&[data-orientation=vertical]": {
          width: "2px",
          position: "absolute",
          height: "100%",
          maxHeight: `calc(100% - ${Nn.reference} - 8px)`,
          top: `calc(${Nn.reference} + 4px)`,
          insetStart: `calc(${Nn.reference} / 2 - 1px)`,
        },
      },
    })),
    xR = yR({
      baseStyle: bR,
      sizes: {
        xs: Cs({
          stepper: {
            [Nn.variable]: "sizes.4",
            [qi.variable]: "sizes.3",
            [Ki.variable]: "fontSizes.xs",
            [Es.variable]: "fontSizes.xs",
          },
        }),
        sm: Cs({
          stepper: {
            [Nn.variable]: "sizes.6",
            [qi.variable]: "sizes.4",
            [Ki.variable]: "fontSizes.sm",
            [Es.variable]: "fontSizes.xs",
          },
        }),
        md: Cs({
          stepper: {
            [Nn.variable]: "sizes.8",
            [qi.variable]: "sizes.5",
            [Ki.variable]: "fontSizes.md",
            [Es.variable]: "fontSizes.sm",
          },
        }),
        lg: Cs({
          stepper: {
            [Nn.variable]: "sizes.10",
            [qi.variable]: "sizes.6",
            [Ki.variable]: "fontSizes.lg",
            [Es.variable]: "fontSizes.md",
          },
        }),
      },
      defaultProps: { size: "md", colorScheme: "blue" },
    }),
    { defineMultiStyleConfig: wR, definePartsStyle: jc } = nt(LE.keys),
    Rs = Et("switch-track-width"),
    Ko = Et("switch-track-height"),
    Ff = Et("switch-track-diff"),
    kR = Dn.subtract(Rs, Ko),
    Lf = Et("switch-thumb-x"),
    js = Et("switch-bg"),
    SR = (e) => {
      const { colorScheme: t } = e;
      return {
        borderRadius: "full",
        p: "0.5",
        width: [Rs.reference],
        height: [Ko.reference],
        transitionProperty: "common",
        transitionDuration: "fast",
        [js.variable]: "colors.gray.300",
        _dark: { [js.variable]: "colors.whiteAlpha.400" },
        _focusVisible: { boxShadow: "outline" },
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
        _checked: {
          [js.variable]: `colors.${t}.500`,
          _dark: { [js.variable]: `colors.${t}.200` },
        },
        bg: js.reference,
      };
    },
    _R = {
      bg: "white",
      transitionProperty: "transform",
      transitionDuration: "normal",
      borderRadius: "inherit",
      width: [Ko.reference],
      height: [Ko.reference],
      _checked: { transform: `translateX(${Lf.reference})` },
    },
    CR = jc((e) => ({
      container: {
        [Ff.variable]: kR,
        [Lf.variable]: Ff.reference,
        _rtl: { [Lf.variable]: Dn(Ff).negate().toString() },
      },
      track: SR(e),
      thumb: _R,
    })),
    ER = {
      sm: jc({
        container: { [Rs.variable]: "1.375rem", [Ko.variable]: "sizes.3" },
      }),
      md: jc({
        container: { [Rs.variable]: "1.875rem", [Ko.variable]: "sizes.4" },
      }),
      lg: jc({
        container: { [Rs.variable]: "2.875rem", [Ko.variable]: "sizes.6" },
      }),
    },
    PR = wR({
      baseStyle: CR,
      sizes: ER,
      defaultProps: { size: "md", colorScheme: "blue" },
    }),
    { defineMultiStyleConfig: RR, definePartsStyle: Gi } = nt(NE.keys),
    jR = Gi({
      table: {
        fontVariantNumeric: "lining-nums tabular-nums",
        borderCollapse: "collapse",
        width: "full",
      },
      th: {
        fontFamily: "heading",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "wider",
        textAlign: "start",
      },
      td: { textAlign: "start" },
      caption: {
        mt: 4,
        fontFamily: "heading",
        textAlign: "center",
        fontWeight: "medium",
      },
    }),
    Oc = { "&[data-is-numeric=true]": { textAlign: "end" } },
    OR = Gi((e) => {
      const { colorScheme: t } = e;
      return {
        th: {
          color: we("gray.600", "gray.400")(e),
          borderBottom: "1px",
          borderColor: we(`${t}.100`, `${t}.700`)(e),
          ...Oc,
        },
        td: {
          borderBottom: "1px",
          borderColor: we(`${t}.100`, `${t}.700`)(e),
          ...Oc,
        },
        caption: { color: we("gray.600", "gray.100")(e) },
        tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
      };
    }),
    AR = Gi((e) => {
      const { colorScheme: t } = e;
      return {
        th: {
          color: we("gray.600", "gray.400")(e),
          borderBottom: "1px",
          borderColor: we(`${t}.100`, `${t}.700`)(e),
          ...Oc,
        },
        td: {
          borderBottom: "1px",
          borderColor: we(`${t}.100`, `${t}.700`)(e),
          ...Oc,
        },
        caption: { color: we("gray.600", "gray.100")(e) },
        tbody: {
          tr: {
            "&:nth-of-type(odd)": {
              "th, td": {
                borderBottomWidth: "1px",
                borderColor: we(`${t}.100`, `${t}.700`)(e),
              },
              td: { background: we(`${t}.100`, `${t}.700`)(e) },
            },
          },
        },
        tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
      };
    }),
    TR = { simple: OR, striped: AR, unstyled: {} },
    MR = {
      sm: Gi({
        th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
        td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
        caption: { px: "4", py: "2", fontSize: "xs" },
      }),
      md: Gi({
        th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
        td: { px: "6", py: "4", lineHeight: "5" },
        caption: { px: "6", py: "2", fontSize: "sm" },
      }),
      lg: Gi({
        th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
        td: { px: "8", py: "5", lineHeight: "6" },
        caption: { px: "6", py: "2", fontSize: "md" },
      }),
    },
    zR = RR({
      baseStyle: jR,
      variants: TR,
      sizes: MR,
      defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
    }),
    or = xe("tabs-color"),
    Yr = xe("tabs-bg"),
    Ac = xe("tabs-border-color"),
    { defineMultiStyleConfig: DR, definePartsStyle: mn } = nt($E.keys),
    IR = (e) => {
      const { orientation: t } = e;
      return { display: t === "vertical" ? "flex" : "block" };
    },
    FR = (e) => {
      const { isFitted: t } = e;
      return {
        flex: t ? 1 : void 0,
        transitionProperty: "common",
        transitionDuration: "normal",
        _focusVisible: { zIndex: 1, boxShadow: "outline" },
        _disabled: { cursor: "not-allowed", opacity: 0.4 },
      };
    },
    LR = (e) => {
      const { align: t = "start", orientation: n } = e;
      return {
        justifyContent: {
          end: "flex-end",
          center: "center",
          start: "flex-start",
        }[t],
        flexDirection: n === "vertical" ? "column" : "row",
      };
    },
    NR = { p: 4 },
    $R = mn((e) => ({ root: IR(e), tab: FR(e), tablist: LR(e), tabpanel: NR })),
    BR = {
      sm: mn({ tab: { py: 1, px: 4, fontSize: "sm" } }),
      md: mn({ tab: { fontSize: "md", py: 2, px: 4 } }),
      lg: mn({ tab: { fontSize: "lg", py: 3, px: 4 } }),
    },
    VR = mn((e) => {
      const { colorScheme: t, orientation: n } = e,
        i = n === "vertical",
        a = i ? "borderStart" : "borderBottom",
        l = i ? "marginStart" : "marginBottom";
      return {
        tablist: { [a]: "2px solid", borderColor: "inherit" },
        tab: {
          [a]: "2px solid",
          borderColor: "transparent",
          [l]: "-2px",
          _selected: {
            [or.variable]: `colors.${t}.600`,
            _dark: { [or.variable]: `colors.${t}.300` },
            borderColor: "currentColor",
          },
          _active: {
            [Yr.variable]: "colors.gray.200",
            _dark: { [Yr.variable]: "colors.whiteAlpha.300" },
          },
          _disabled: { _active: { bg: "none" } },
          color: or.reference,
          bg: Yr.reference,
        },
      };
    }),
    WR = mn((e) => {
      const { colorScheme: t } = e;
      return {
        tab: {
          borderTopRadius: "md",
          border: "1px solid",
          borderColor: "transparent",
          mb: "-1px",
          [Ac.variable]: "transparent",
          _selected: {
            [or.variable]: `colors.${t}.600`,
            [Ac.variable]: "colors.white",
            _dark: {
              [or.variable]: `colors.${t}.300`,
              [Ac.variable]: "colors.gray.800",
            },
            borderColor: "inherit",
            borderBottomColor: Ac.reference,
          },
          color: or.reference,
        },
        tablist: {
          mb: "-1px",
          borderBottom: "1px solid",
          borderColor: "inherit",
        },
      };
    }),
    UR = mn((e) => {
      const { colorScheme: t } = e;
      return {
        tab: {
          border: "1px solid",
          borderColor: "inherit",
          [Yr.variable]: "colors.gray.50",
          _dark: { [Yr.variable]: "colors.whiteAlpha.50" },
          mb: "-1px",
          _notLast: { marginEnd: "-1px" },
          _selected: {
            [Yr.variable]: "colors.white",
            [or.variable]: `colors.${t}.600`,
            _dark: {
              [Yr.variable]: "colors.gray.800",
              [or.variable]: `colors.${t}.300`,
            },
            borderColor: "inherit",
            borderTopColor: "currentColor",
            borderBottomColor: "transparent",
          },
          color: or.reference,
          bg: Yr.reference,
        },
        tablist: {
          mb: "-1px",
          borderBottom: "1px solid",
          borderColor: "inherit",
        },
      };
    }),
    HR = mn((e) => {
      const { colorScheme: t, theme: n } = e;
      return {
        tab: {
          borderRadius: "full",
          fontWeight: "semibold",
          color: "gray.600",
          _selected: { color: Zt(n, `${t}.700`), bg: Zt(n, `${t}.100`) },
        },
      };
    }),
    qR = mn((e) => {
      const { colorScheme: t } = e;
      return {
        tab: {
          borderRadius: "full",
          fontWeight: "semibold",
          [or.variable]: "colors.gray.600",
          _dark: { [or.variable]: "inherit" },
          _selected: {
            [or.variable]: "colors.white",
            [Yr.variable]: `colors.${t}.600`,
            _dark: {
              [or.variable]: "colors.gray.800",
              [Yr.variable]: `colors.${t}.300`,
            },
          },
          color: or.reference,
          bg: Yr.reference,
        },
      };
    }),
    KR = mn({}),
    GR = {
      line: VR,
      enclosed: WR,
      "enclosed-colored": UR,
      "soft-rounded": HR,
      "solid-rounded": qR,
      unstyled: KR,
    },
    ZR = DR({
      baseStyle: $R,
      sizes: BR,
      variants: GR,
      defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
    }),
    { defineMultiStyleConfig: XR, definePartsStyle: Go } = nt(BE.keys),
    sv = xe("tag-bg"),
    lv = xe("tag-color"),
    Nf = xe("tag-shadow"),
    Tc = xe("tag-min-height"),
    Mc = xe("tag-min-width"),
    zc = xe("tag-font-size"),
    Dc = xe("tag-padding-inline"),
    YR = {
      fontWeight: "medium",
      lineHeight: 1.2,
      outline: 0,
      [lv.variable]: xt.color.reference,
      [sv.variable]: xt.bg.reference,
      [Nf.variable]: xt.shadow.reference,
      color: lv.reference,
      bg: sv.reference,
      boxShadow: Nf.reference,
      borderRadius: "md",
      minH: Tc.reference,
      minW: Mc.reference,
      fontSize: zc.reference,
      px: Dc.reference,
      _focusVisible: { [Nf.variable]: "shadows.outline" },
    },
    QR = { lineHeight: 1.2, overflow: "visible" },
    JR = {
      fontSize: "lg",
      w: "5",
      h: "5",
      transitionProperty: "common",
      transitionDuration: "normal",
      borderRadius: "full",
      marginStart: "1.5",
      marginEnd: "-1",
      opacity: 0.5,
      _disabled: { opacity: 0.4 },
      _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
      _hover: { opacity: 0.8 },
      _active: { opacity: 1 },
    },
    ej = Go({ container: YR, label: QR, closeButton: JR }),
    tj = {
      sm: Go({
        container: {
          [Tc.variable]: "sizes.5",
          [Mc.variable]: "sizes.5",
          [zc.variable]: "fontSizes.xs",
          [Dc.variable]: "space.2",
        },
        closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
      }),
      md: Go({
        container: {
          [Tc.variable]: "sizes.6",
          [Mc.variable]: "sizes.6",
          [zc.variable]: "fontSizes.sm",
          [Dc.variable]: "space.2",
        },
      }),
      lg: Go({
        container: {
          [Tc.variable]: "sizes.8",
          [Mc.variable]: "sizes.8",
          [zc.variable]: "fontSizes.md",
          [Dc.variable]: "space.3",
        },
      }),
    },
    rj = {
      subtle: Go((e) => {
        var t;
        return { container: (t = bs.variants) == null ? void 0 : t.subtle(e) };
      }),
      solid: Go((e) => {
        var t;
        return { container: (t = bs.variants) == null ? void 0 : t.solid(e) };
      }),
      outline: Go((e) => {
        var t;
        return { container: (t = bs.variants) == null ? void 0 : t.outline(e) };
      }),
    },
    nj = XR({
      variants: rj,
      baseStyle: ej,
      sizes: tj,
      defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
    }),
    oj = {
      ...((Xk = We.baseStyle) == null ? void 0 : Xk.field),
      paddingY: "2",
      minHeight: "20",
      lineHeight: "short",
      verticalAlign: "top",
    },
    ij = {
      outline: (e) => {
        var t;
        return ((t = We.variants) == null ? void 0 : t.outline(e).field) ?? {};
      },
      flushed: (e) => {
        var t;
        return ((t = We.variants) == null ? void 0 : t.flushed(e).field) ?? {};
      },
      filled: (e) => {
        var t;
        return ((t = We.variants) == null ? void 0 : t.filled(e).field) ?? {};
      },
      unstyled: ((Yk = We.variants) == null ? void 0 : Yk.unstyled.field) ?? {},
    },
    aj = {
      xs: ((Qk = We.sizes) == null ? void 0 : Qk.xs.field) ?? {},
      sm: ((Jk = We.sizes) == null ? void 0 : Jk.sm.field) ?? {},
      md: ((eS = We.sizes) == null ? void 0 : eS.md.field) ?? {},
      lg: ((tS = We.sizes) == null ? void 0 : tS.lg.field) ?? {},
    },
    sj = {
      baseStyle: oj,
      sizes: aj,
      variants: ij,
      defaultProps: { size: "md", variant: "outline" },
    },
    Ic = Et("tooltip-bg"),
    $f = Et("tooltip-fg"),
    lj = Et("popper-arrow-bg"),
    cj = {
      bg: Ic.reference,
      color: $f.reference,
      [Ic.variable]: "colors.gray.700",
      [$f.variable]: "colors.whiteAlpha.900",
      _dark: {
        [Ic.variable]: "colors.gray.300",
        [$f.variable]: "colors.gray.900",
      },
      [lj.variable]: Ic.reference,
      px: "2",
      py: "0.5",
      borderRadius: "sm",
      fontWeight: "medium",
      fontSize: "sm",
      boxShadow: "md",
      maxW: "xs",
      zIndex: "tooltip",
    },
    uj = { baseStyle: cj },
    dj = {
      Accordion: XE,
      Alert: MP,
      Avatar: UP,
      Badge: bs,
      Breadcrumb: e5,
      Button: c5,
      Checkbox: oo,
      CloseButton: _5,
      Code: R5,
      Container: O5,
      Divider: D5,
      Drawer: q5,
      Editable: J5,
      Form: i3,
      FormError: d3,
      FormLabel: p3,
      Heading: g3,
      Input: We,
      Kbd: E3,
      Link: R3,
      List: M3,
      Menu: U3,
      Modal: t4,
      NumberInput: u4,
      PinInput: h4,
      Popover: C4,
      Progress: M4,
      Radio: L4,
      Select: H4,
      Skeleton: K4,
      SkipLink: Z4,
      Slider: aR,
      Spinner: cR,
      Stat: vR,
      Switch: PR,
      Table: zR,
      Tabs: ZR,
      Tag: nj,
      Textarea: sj,
      Tooltip: uj,
      Card: h5,
      Stepper: xR,
    },
    fj = {
      none: 0,
      "1px": "1px solid",
      "2px": "2px solid",
      "4px": "4px solid",
      "8px": "8px solid",
    },
    pj = {
      base: "0em",
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "96em",
    },
    hj = {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      whiteAlpha: {
        50: "rgba(255, 255, 255, 0.04)",
        100: "rgba(255, 255, 255, 0.06)",
        200: "rgba(255, 255, 255, 0.08)",
        300: "rgba(255, 255, 255, 0.16)",
        400: "rgba(255, 255, 255, 0.24)",
        500: "rgba(255, 255, 255, 0.36)",
        600: "rgba(255, 255, 255, 0.48)",
        700: "rgba(255, 255, 255, 0.64)",
        800: "rgba(255, 255, 255, 0.80)",
        900: "rgba(255, 255, 255, 0.92)",
      },
      blackAlpha: {
        50: "rgba(0, 0, 0, 0.04)",
        100: "rgba(0, 0, 0, 0.06)",
        200: "rgba(0, 0, 0, 0.08)",
        300: "rgba(0, 0, 0, 0.16)",
        400: "rgba(0, 0, 0, 0.24)",
        500: "rgba(0, 0, 0, 0.36)",
        600: "rgba(0, 0, 0, 0.48)",
        700: "rgba(0, 0, 0, 0.64)",
        800: "rgba(0, 0, 0, 0.80)",
        900: "rgba(0, 0, 0, 0.92)",
      },
      gray: {
        50: "#F7FAFC",
        100: "#EDF2F7",
        200: "#E2E8F0",
        300: "#CBD5E0",
        400: "#A0AEC0",
        500: "#718096",
        600: "#4A5568",
        700: "#2D3748",
        800: "#1A202C",
        900: "#171923",
      },
      red: {
        50: "#FFF5F5",
        100: "#FED7D7",
        200: "#FEB2B2",
        300: "#FC8181",
        400: "#F56565",
        500: "#E53E3E",
        600: "#C53030",
        700: "#9B2C2C",
        800: "#822727",
        900: "#63171B",
      },
      orange: {
        50: "#FFFAF0",
        100: "#FEEBC8",
        200: "#FBD38D",
        300: "#F6AD55",
        400: "#ED8936",
        500: "#DD6B20",
        600: "#C05621",
        700: "#9C4221",
        800: "#7B341E",
        900: "#652B19",
      },
      yellow: {
        50: "#FFFFF0",
        100: "#FEFCBF",
        200: "#FAF089",
        300: "#F6E05E",
        400: "#ECC94B",
        500: "#D69E2E",
        600: "#B7791F",
        700: "#975A16",
        800: "#744210",
        900: "#5F370E",
      },
      green: {
        50: "#F0FFF4",
        100: "#C6F6D5",
        200: "#9AE6B4",
        300: "#68D391",
        400: "#48BB78",
        500: "#38A169",
        600: "#2F855A",
        700: "#276749",
        800: "#22543D",
        900: "#1C4532",
      },
      teal: {
        50: "#E6FFFA",
        100: "#B2F5EA",
        200: "#81E6D9",
        300: "#4FD1C5",
        400: "#38B2AC",
        500: "#319795",
        600: "#2C7A7B",
        700: "#285E61",
        800: "#234E52",
        900: "#1D4044",
      },
      blue: {
        50: "#ebf8ff",
        100: "#bee3f8",
        200: "#90cdf4",
        300: "#63b3ed",
        400: "#4299e1",
        500: "#3182ce",
        600: "#2b6cb0",
        700: "#2c5282",
        800: "#2a4365",
        900: "#1A365D",
      },
      cyan: {
        50: "#EDFDFD",
        100: "#C4F1F9",
        200: "#9DECF9",
        300: "#76E4F7",
        400: "#0BC5EA",
        500: "#00B5D8",
        600: "#00A3C4",
        700: "#0987A0",
        800: "#086F83",
        900: "#065666",
      },
      purple: {
        50: "#FAF5FF",
        100: "#E9D8FD",
        200: "#D6BCFA",
        300: "#B794F4",
        400: "#9F7AEA",
        500: "#805AD5",
        600: "#6B46C1",
        700: "#553C9A",
        800: "#44337A",
        900: "#322659",
      },
      pink: {
        50: "#FFF5F7",
        100: "#FED7E2",
        200: "#FBB6CE",
        300: "#F687B3",
        400: "#ED64A6",
        500: "#D53F8C",
        600: "#B83280",
        700: "#97266D",
        800: "#702459",
        900: "#521B41",
      },
    },
    mj = {
      none: "0",
      sm: "0.125rem",
      base: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    gj = {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      none: "none",
      "dark-lg":
        "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
    },
    vj = {
      common:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      dimensions: "width, height",
      position: "left, right, top, bottom",
      background: "background-color, background-image, background-position",
    },
    yj = {
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    bj = {
      "ultra-fast": "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      "ultra-slow": "500ms",
    },
    xj = { property: vj, easing: yj, duration: bj },
    wj = {
      hide: -1,
      auto: "auto",
      base: 0,
      docked: 10,
      dropdown: 1e3,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    kj = {
      none: 0,
      sm: "4px",
      base: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px",
    },
    Sj = {
      breakpoints: pj,
      zIndices: wj,
      radii: mj,
      blur: kj,
      colors: hj,
      ...rv,
      sizes: Gg,
      shadows: gj,
      space: Kg,
      borders: fj,
      transition: xj,
    },
    _j = {
      colors: {
        "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
        "chakra-body-bg": { _light: "white", _dark: "gray.800" },
        "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
        "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
        "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
        "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
        "chakra-placeholder-color": {
          _light: "gray.500",
          _dark: "whiteAlpha.400",
        },
      },
    },
    Cj = {
      global: {
        body: {
          fontFamily: "body",
          color: "chakra-body-text",
          bg: "chakra-body-bg",
          transitionProperty: "background-color",
          transitionDuration: "normal",
          lineHeight: "base",
        },
        "*::placeholder": { color: "chakra-placeholder-color" },
        "*, *::before, &::after": { borderColor: "chakra-border-color" },
      },
    },
    Ej = "ltr",
    Pj = {
      useSystemColorMode: !1,
      initialColorMode: "light",
      cssVarPrefix: "chakra",
    },
    Rj = {
      semanticTokens: _j,
      direction: Ej,
      ...Sj,
      components: dj,
      styles: Cj,
      config: Pj,
    };
  var jj = !1;
  function Oj(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function Aj(e) {
    var t = document.createElement("style");
    return (
      t.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
      t.appendChild(document.createTextNode("")),
      t.setAttribute("data-s", ""),
      t
    );
  }
  var Tj = (function () {
      function e(n) {
        var i = this;
        (this._insertTag = function (a) {
          var l;
          i.tags.length === 0
            ? i.insertionPoint
              ? (l = i.insertionPoint.nextSibling)
              : i.prepend
              ? (l = i.container.firstChild)
              : (l = i.before)
            : (l = i.tags[i.tags.length - 1].nextSibling),
            i.container.insertBefore(a, l),
            i.tags.push(a);
        }),
          (this.isSpeedy = n.speedy === void 0 ? !jj : n.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = n.nonce),
          (this.key = n.key),
          (this.container = n.container),
          (this.prepend = n.prepend),
          (this.insertionPoint = n.insertionPoint),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (n) {
          n.forEach(this._insertTag);
        }),
        (t.insert = function (n) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(Aj(this));
          var i = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var a = Oj(i);
            try {
              a.insertRule(n, a.cssRules.length);
            } catch {}
          } else i.appendChild(document.createTextNode(n));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (n) {
            var i;
            return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    It = "-ms-",
    Fc = "-moz-",
    Ue = "-webkit-",
    cv = "comm",
    Bf = "rule",
    Vf = "decl",
    Mj = "@import",
    uv = "@keyframes",
    zj = "@layer",
    Dj = Math.abs,
    Lc = String.fromCharCode,
    Ij = Object.assign;
  function Fj(e, t) {
    return Tt(e, 0) ^ 45
      ? (((((((t << 2) ^ Tt(e, 0)) << 2) ^ Tt(e, 1)) << 2) ^ Tt(e, 2)) << 2) ^
          Tt(e, 3)
      : 0;
  }
  function dv(e) {
    return e.trim();
  }
  function Lj(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function He(e, t, n) {
    return e.replace(t, n);
  }
  function Wf(e, t) {
    return e.indexOf(t);
  }
  function Tt(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Os(e, t, n) {
    return e.slice(t, n);
  }
  function gn(e) {
    return e.length;
  }
  function Uf(e) {
    return e.length;
  }
  function Nc(e, t) {
    return t.push(e), e;
  }
  function Nj(e, t) {
    return e.map(t).join("");
  }
  var $c = 1,
    Zi = 1,
    fv = 0,
    ir = 0,
    St = 0,
    Xi = "";
  function Bc(e, t, n, i, a, l, c) {
    return {
      value: e,
      root: t,
      parent: n,
      type: i,
      props: a,
      children: l,
      line: $c,
      column: Zi,
      length: c,
      return: "",
    };
  }
  function As(e, t) {
    return Ij(
      Bc("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function $j() {
    return St;
  }
  function Bj() {
    return (
      (St = ir > 0 ? Tt(Xi, --ir) : 0), Zi--, St === 10 && ((Zi = 1), $c--), St
    );
  }
  function br() {
    return (
      (St = ir < fv ? Tt(Xi, ir++) : 0), Zi++, St === 10 && ((Zi = 1), $c++), St
    );
  }
  function vn() {
    return Tt(Xi, ir);
  }
  function Vc() {
    return ir;
  }
  function Ts(e, t) {
    return Os(Xi, e, t);
  }
  function Ms(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function pv(e) {
    return ($c = Zi = 1), (fv = gn((Xi = e))), (ir = 0), [];
  }
  function hv(e) {
    return (Xi = ""), e;
  }
  function Wc(e) {
    return dv(Ts(ir - 1, Hf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Vj(e) {
    for (; (St = vn()) && St < 33; ) br();
    return Ms(e) > 2 || Ms(St) > 3 ? "" : " ";
  }
  function Wj(e, t) {
    for (
      ;
      --t &&
      br() &&
      !(St < 48 || St > 102 || (St > 57 && St < 65) || (St > 70 && St < 97));

    );
    return Ts(e, Vc() + (t < 6 && vn() == 32 && br() == 32));
  }
  function Hf(e) {
    for (; br(); )
      switch (St) {
        case e:
          return ir;
        case 34:
        case 39:
          e !== 34 && e !== 39 && Hf(St);
          break;
        case 40:
          e === 41 && Hf(e);
          break;
        case 92:
          br();
          break;
      }
    return ir;
  }
  function Uj(e, t) {
    for (; br() && e + St !== 57 && !(e + St === 84 && vn() === 47); );
    return "/*" + Ts(t, ir - 1) + "*" + Lc(e === 47 ? e : br());
  }
  function Hj(e) {
    for (; !Ms(vn()); ) br();
    return Ts(e, ir);
  }
  function qj(e) {
    return hv(Uc("", null, null, null, [""], (e = pv(e)), 0, [0], e));
  }
  function Uc(e, t, n, i, a, l, c, d, p) {
    for (
      var h = 0,
        g = 0,
        v = c,
        b = 0,
        k = 0,
        S = 0,
        w = 1,
        _ = 1,
        j = 1,
        O = 0,
        M = "",
        $ = a,
        E = l,
        I = i,
        L = M;
      _;

    )
      switch (((S = O), (O = br()))) {
        case 40:
          if (S != 108 && Tt(L, v - 1) == 58) {
            Wf((L += He(Wc(O), "&", "&\f")), "&\f") != -1 && (j = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          L += Wc(O);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          L += Vj(S);
          break;
        case 92:
          L += Wj(Vc() - 1, 7);
          continue;
        case 47:
          switch (vn()) {
            case 42:
            case 47:
              Nc(Kj(Uj(br(), Vc()), t, n), p);
              break;
            default:
              L += "/";
          }
          break;
        case 123 * w:
          d[h++] = gn(L) * j;
        case 125 * w:
        case 59:
        case 0:
          switch (O) {
            case 0:
            case 125:
              _ = 0;
            case 59 + g:
              j == -1 && (L = He(L, /\f/g, "")),
                k > 0 &&
                  gn(L) - v &&
                  Nc(
                    k > 32
                      ? gv(L + ";", i, n, v - 1)
                      : gv(He(L, " ", "") + ";", i, n, v - 2),
                    p
                  );
              break;
            case 59:
              L += ";";
            default:
              if (
                (Nc((I = mv(L, t, n, h, g, a, d, M, ($ = []), (E = []), v)), l),
                O === 123)
              )
                if (g === 0) Uc(L, t, I, I, $, l, v, d, E);
                else
                  switch (b === 99 && Tt(L, 3) === 110 ? 100 : b) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      Uc(
                        e,
                        I,
                        I,
                        i && Nc(mv(e, I, I, 0, 0, a, d, M, a, ($ = []), v), E),
                        a,
                        E,
                        v,
                        d,
                        i ? $ : E
                      );
                      break;
                    default:
                      Uc(L, I, I, I, [""], E, 0, d, E);
                  }
          }
          (h = g = k = 0), (w = j = 1), (M = L = ""), (v = c);
          break;
        case 58:
          (v = 1 + gn(L)), (k = S);
        default:
          if (w < 1) {
            if (O == 123) --w;
            else if (O == 125 && w++ == 0 && Bj() == 125) continue;
          }
          switch (((L += Lc(O)), O * w)) {
            case 38:
              j = g > 0 ? 1 : ((L += "\f"), -1);
              break;
            case 44:
              (d[h++] = (gn(L) - 1) * j), (j = 1);
              break;
            case 64:
              vn() === 45 && (L += Wc(br())),
                (b = vn()),
                (g = v = gn((M = L += Hj(Vc())))),
                O++;
              break;
            case 45:
              S === 45 && gn(L) == 2 && (w = 0);
          }
      }
    return l;
  }
  function mv(e, t, n, i, a, l, c, d, p, h, g) {
    for (
      var v = a - 1, b = a === 0 ? l : [""], k = Uf(b), S = 0, w = 0, _ = 0;
      S < i;
      ++S
    )
      for (var j = 0, O = Os(e, v + 1, (v = Dj((w = c[S])))), M = e; j < k; ++j)
        (M = dv(w > 0 ? b[j] + " " + O : He(O, /&\f/g, b[j]))) && (p[_++] = M);
    return Bc(e, t, n, a === 0 ? Bf : d, p, h, g);
  }
  function Kj(e, t, n) {
    return Bc(e, t, n, cv, Lc($j()), Os(e, 2, -2), 0);
  }
  function gv(e, t, n, i) {
    return Bc(e, t, n, Vf, Os(e, 0, i), Os(e, i + 1, -1), i);
  }
  function Yi(e, t) {
    for (var n = "", i = Uf(e), a = 0; a < i; a++) n += t(e[a], a, e, t) || "";
    return n;
  }
  function Gj(e, t, n, i) {
    switch (e.type) {
      case zj:
        if (e.children.length) break;
      case Mj:
      case Vf:
        return (e.return = e.return || e.value);
      case cv:
        return "";
      case uv:
        return (e.return = e.value + "{" + Yi(e.children, i) + "}");
      case Bf:
        e.value = e.props.join(",");
    }
    return gn((n = Yi(e.children, i)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function Zj(e) {
    var t = Uf(e);
    return function (n, i, a, l) {
      for (var c = "", d = 0; d < t; d++) c += e[d](n, i, a, l) || "";
      return c;
    };
  }
  function Xj(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  var vv = function (e) {
    var t = new WeakMap();
    return function (n) {
      if (t.has(n)) return t.get(n);
      var i = e(n);
      return t.set(n, i), i;
    };
  };
  function yv(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
  }
  var Yj = function (e, t, n) {
      for (
        var i = 0, a = 0;
        (i = a), (a = vn()), i === 38 && a === 12 && (t[n] = 1), !Ms(a);

      )
        br();
      return Ts(e, ir);
    },
    Qj = function (e, t) {
      var n = -1,
        i = 44;
      do
        switch (Ms(i)) {
          case 0:
            i === 38 && vn() === 12 && (t[n] = 1), (e[n] += Yj(ir - 1, t, n));
            break;
          case 2:
            e[n] += Wc(i);
            break;
          case 4:
            if (i === 44) {
              (e[++n] = vn() === 58 ? "&\f" : ""), (t[n] = e[n].length);
              break;
            }
          default:
            e[n] += Lc(i);
        }
      while ((i = br()));
      return e;
    },
    Jj = function (e, t) {
      return hv(Qj(pv(e), t));
    },
    bv = new WeakMap(),
    eO = function (e) {
      if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
        for (
          var t = e.value,
            n = e.parent,
            i = e.column === n.column && e.line === n.line;
          n.type !== "rule";

        )
          if (((n = n.parent), !n)) return;
        if (
          !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !bv.get(n)) &&
          !i
        ) {
          bv.set(e, !0);
          for (
            var a = [], l = Jj(t, a), c = n.props, d = 0, p = 0;
            d < l.length;
            d++
          )
            for (var h = 0; h < c.length; h++, p++)
              e.props[p] = a[d]
                ? l[d].replace(/&\f/g, c[h])
                : c[h] + " " + l[d];
        }
      }
    },
    tO = function (e) {
      if (e.type === "decl") {
        var t = e.value;
        t.charCodeAt(0) === 108 &&
          t.charCodeAt(2) === 98 &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function xv(e, t) {
    switch (Fj(e, t)) {
      case 5103:
        return Ue + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return Ue + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Ue + e + Fc + e + It + e + e;
      case 6828:
      case 4268:
        return Ue + e + It + e + e;
      case 6165:
        return Ue + e + It + "flex-" + e + e;
      case 5187:
        return (
          Ue +
          e +
          He(e, /(\w+).+(:[^]+)/, Ue + "box-$1$2" + It + "flex-$1$2") +
          e
        );
      case 5443:
        return Ue + e + It + "flex-item-" + He(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          Ue +
          e +
          It +
          "flex-line-pack" +
          He(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return Ue + e + It + He(e, "shrink", "negative") + e;
      case 5292:
        return Ue + e + It + He(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          Ue +
          "box-" +
          He(e, "-grow", "") +
          Ue +
          e +
          It +
          He(e, "grow", "positive") +
          e
        );
      case 4554:
        return Ue + He(e, /([^-])(transform)/g, "$1" + Ue + "$2") + e;
      case 6187:
        return (
          He(
            He(He(e, /(zoom-|grab)/, Ue + "$1"), /(image-set)/, Ue + "$1"),
            e,
            ""
          ) + e
        );
      case 5495:
      case 3959:
        return He(e, /(image-set\([^]*)/, Ue + "$1$`$1");
      case 4968:
        return (
          He(
            He(
              e,
              /(.+:)(flex-)?(.*)/,
              Ue + "box-pack:$3" + It + "flex-pack:$3"
            ),
            /s.+-b[^;]+/,
            "justify"
          ) +
          Ue +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return He(e, /(.+)-inline(.+)/, Ue + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (gn(e) - 1 - t > 6)
          switch (Tt(e, t + 1)) {
            case 109:
              if (Tt(e, t + 4) !== 45) break;
            case 102:
              return (
                He(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    Ue +
                    "$2-$3$1" +
                    Fc +
                    (Tt(e, t + 3) == 108 ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~Wf(e, "stretch")
                ? xv(He(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (Tt(e, t + 1) !== 115) break;
      case 6444:
        switch (Tt(e, gn(e) - 3 - (~Wf(e, "!important") && 10))) {
          case 107:
            return He(e, ":", ":" + Ue) + e;
          case 101:
            return (
              He(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  Ue +
                  (Tt(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  Ue +
                  "$2$3$1" +
                  It +
                  "$2box$3"
              ) + e
            );
        }
        break;
      case 5936:
        switch (Tt(e, t + 11)) {
          case 114:
            return Ue + e + It + He(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return Ue + e + It + He(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return Ue + e + It + He(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return Ue + e + It + e + e;
    }
    return e;
  }
  var rO = function (e, t, n, i) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case Vf:
            e.return = xv(e.value, e.length);
            break;
          case uv:
            return Yi([As(e, { value: He(e.value, "@", "@" + Ue) })], i);
          case Bf:
            if (e.length)
              return Nj(e.props, function (a) {
                switch (Lj(a, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return Yi(
                      [
                        As(e, {
                          props: [He(a, /:(read-\w+)/, ":" + Fc + "$1")],
                        }),
                      ],
                      i
                    );
                  case "::placeholder":
                    return Yi(
                      [
                        As(e, {
                          props: [He(a, /:(plac\w+)/, ":" + Ue + "input-$1")],
                        }),
                        As(e, {
                          props: [He(a, /:(plac\w+)/, ":" + Fc + "$1")],
                        }),
                        As(e, {
                          props: [He(a, /:(plac\w+)/, It + "input-$1")],
                        }),
                      ],
                      i
                    );
                }
                return "";
              });
        }
    },
    nO = [rO],
    oO = function (e) {
      var t = e.key;
      if (t === "css") {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (S) {
          var w = S.getAttribute("data-emotion");
          w.indexOf(" ") !== -1 &&
            (document.head.appendChild(S), S.setAttribute("data-s", ""));
        });
      }
      var i = e.stylisPlugins || nO,
        a = {},
        l,
        c = [];
      (l = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (S) {
            for (
              var w = S.getAttribute("data-emotion").split(" "), _ = 1;
              _ < w.length;
              _++
            )
              a[w[_]] = !0;
            c.push(S);
          }
        );
      var d,
        p = [eO, tO];
      {
        var h,
          g = [
            Gj,
            Xj(function (S) {
              h.insert(S);
            }),
          ],
          v = Zj(p.concat(i, g)),
          b = function (S) {
            return Yi(qj(S), v);
          };
        d = function (S, w, _, j) {
          (h = _),
            b(S ? S + "{" + w.styles + "}" : w.styles),
            j && (k.inserted[w.name] = !0);
        };
      }
      var k = {
        key: t,
        sheet: new Tj({
          key: t,
          container: l,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint,
        }),
        nonce: e.nonce,
        inserted: a,
        registered: {},
        insert: d,
      };
      return k.sheet.hydrate(c), k;
    };
  function Zo() {
    return (
      (Zo = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
      Zo.apply(null, arguments)
    );
  }
  var wv = { exports: {} },
    Ge = {},
    kv;
  function iO() {
    if (kv) return Ge;
    kv = 1;
    var e = typeof Symbol == "function" && Symbol.for,
      t = e ? Symbol.for("react.element") : 60103,
      n = e ? Symbol.for("react.portal") : 60106,
      i = e ? Symbol.for("react.fragment") : 60107,
      a = e ? Symbol.for("react.strict_mode") : 60108,
      l = e ? Symbol.for("react.profiler") : 60114,
      c = e ? Symbol.for("react.provider") : 60109,
      d = e ? Symbol.for("react.context") : 60110,
      p = e ? Symbol.for("react.async_mode") : 60111,
      h = e ? Symbol.for("react.concurrent_mode") : 60111,
      g = e ? Symbol.for("react.forward_ref") : 60112,
      v = e ? Symbol.for("react.suspense") : 60113,
      b = e ? Symbol.for("react.suspense_list") : 60120,
      k = e ? Symbol.for("react.memo") : 60115,
      S = e ? Symbol.for("react.lazy") : 60116,
      w = e ? Symbol.for("react.block") : 60121,
      _ = e ? Symbol.for("react.fundamental") : 60117,
      j = e ? Symbol.for("react.responder") : 60118,
      O = e ? Symbol.for("react.scope") : 60119;
    function M(E) {
      if (typeof E == "object" && E !== null) {
        var I = E.$$typeof;
        switch (I) {
          case t:
            switch (((E = E.type), E)) {
              case p:
              case h:
              case i:
              case l:
              case a:
              case v:
                return E;
              default:
                switch (((E = E && E.$$typeof), E)) {
                  case d:
                  case g:
                  case S:
                  case k:
                  case c:
                    return E;
                  default:
                    return I;
                }
            }
          case n:
            return I;
        }
      }
    }
    function $(E) {
      return M(E) === h;
    }
    return (
      (Ge.AsyncMode = p),
      (Ge.ConcurrentMode = h),
      (Ge.ContextConsumer = d),
      (Ge.ContextProvider = c),
      (Ge.Element = t),
      (Ge.ForwardRef = g),
      (Ge.Fragment = i),
      (Ge.Lazy = S),
      (Ge.Memo = k),
      (Ge.Portal = n),
      (Ge.Profiler = l),
      (Ge.StrictMode = a),
      (Ge.Suspense = v),
      (Ge.isAsyncMode = function (E) {
        return $(E) || M(E) === p;
      }),
      (Ge.isConcurrentMode = $),
      (Ge.isContextConsumer = function (E) {
        return M(E) === d;
      }),
      (Ge.isContextProvider = function (E) {
        return M(E) === c;
      }),
      (Ge.isElement = function (E) {
        return typeof E == "object" && E !== null && E.$$typeof === t;
      }),
      (Ge.isForwardRef = function (E) {
        return M(E) === g;
      }),
      (Ge.isFragment = function (E) {
        return M(E) === i;
      }),
      (Ge.isLazy = function (E) {
        return M(E) === S;
      }),
      (Ge.isMemo = function (E) {
        return M(E) === k;
      }),
      (Ge.isPortal = function (E) {
        return M(E) === n;
      }),
      (Ge.isProfiler = function (E) {
        return M(E) === l;
      }),
      (Ge.isStrictMode = function (E) {
        return M(E) === a;
      }),
      (Ge.isSuspense = function (E) {
        return M(E) === v;
      }),
      (Ge.isValidElementType = function (E) {
        return (
          typeof E == "string" ||
          typeof E == "function" ||
          E === i ||
          E === h ||
          E === l ||
          E === a ||
          E === v ||
          E === b ||
          (typeof E == "object" &&
            E !== null &&
            (E.$$typeof === S ||
              E.$$typeof === k ||
              E.$$typeof === c ||
              E.$$typeof === d ||
              E.$$typeof === g ||
              E.$$typeof === _ ||
              E.$$typeof === j ||
              E.$$typeof === O ||
              E.$$typeof === w))
        );
      }),
      (Ge.typeOf = M),
      Ge
    );
  }
  var Sv;
  function aO() {
    return Sv || ((Sv = 1), (wv.exports = iO())), wv.exports;
  }
  var qf, _v;
  function sO() {
    if (_v) return qf;
    _v = 1;
    var e = aO(),
      t = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      n = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      i = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      a = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      l = {};
    (l[e.ForwardRef] = i), (l[e.Memo] = a);
    function c(S) {
      return e.isMemo(S) ? a : l[S.$$typeof] || t;
    }
    var d = Object.defineProperty,
      p = Object.getOwnPropertyNames,
      h = Object.getOwnPropertySymbols,
      g = Object.getOwnPropertyDescriptor,
      v = Object.getPrototypeOf,
      b = Object.prototype;
    function k(S, w, _) {
      if (typeof w != "string") {
        if (b) {
          var j = v(w);
          j && j !== b && k(S, j, _);
        }
        var O = p(w);
        h && (O = O.concat(h(w)));
        for (var M = c(S), $ = c(w), E = 0; E < O.length; ++E) {
          var I = O[E];
          if (!n[I] && !(_ && _[I]) && !($ && $[I]) && !(M && M[I])) {
            var L = g(w, I);
            try {
              d(S, I, L);
            } catch {}
          }
        }
      }
      return S;
    }
    return (qf = k), qf;
  }
  sO();
  var lO = !0;
  function Cv(e, t, n) {
    var i = "";
    return (
      n.split(" ").forEach(function (a) {
        e[a] !== void 0 ? t.push(e[a] + ";") : a && (i += a + " ");
      }),
      i
    );
  }
  var Kf = function (e, t, n) {
      var i = e.key + "-" + t.name;
      (n === !1 || lO === !1) &&
        e.registered[i] === void 0 &&
        (e.registered[i] = t.styles);
    },
    Gf = function (e, t, n) {
      Kf(e, t, n);
      var i = e.key + "-" + t.name;
      if (e.inserted[t.name] === void 0) {
        var a = t;
        do e.insert(t === a ? "." + i : "", a, e.sheet, !0), (a = a.next);
        while (a !== void 0);
      }
    };
  function cO(e) {
    for (var t = 0, n, i = 0, a = e.length; a >= 4; ++i, a -= 4)
      (n =
        (e.charCodeAt(i) & 255) |
        ((e.charCodeAt(++i) & 255) << 8) |
        ((e.charCodeAt(++i) & 255) << 16) |
        ((e.charCodeAt(++i) & 255) << 24)),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
        (n ^= n >>> 24),
        (t =
          ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (a) {
      case 3:
        t ^= (e.charCodeAt(i + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(i + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(i) & 255),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var uO = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      scale: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    dO = /[A-Z]|^ms/g,
    fO = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Ev = function (e) {
      return e.charCodeAt(1) === 45;
    },
    Pv = function (e) {
      return e != null && typeof e != "boolean";
    },
    Zf = yv(function (e) {
      return Ev(e) ? e : e.replace(dO, "-$&").toLowerCase();
    }),
    Rv = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if (typeof t == "string")
            return t.replace(fO, function (n, i, a) {
              return (yn = { name: i, styles: a, next: yn }), i;
            });
      }
      return uO[e] !== 1 && !Ev(e) && typeof t == "number" && t !== 0
        ? t + "px"
        : t;
    };
  function zs(e, t, n) {
    if (n == null) return "";
    var i = n;
    if (i.__emotion_styles !== void 0) return i;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object": {
        var a = n;
        if (a.anim === 1)
          return (yn = { name: a.name, styles: a.styles, next: yn }), a.name;
        var l = n;
        if (l.styles !== void 0) {
          var c = l.next;
          if (c !== void 0)
            for (; c !== void 0; )
              (yn = { name: c.name, styles: c.styles, next: yn }), (c = c.next);
          var d = l.styles + ";";
          return d;
        }
        return pO(e, t, n);
      }
      case "function": {
        if (e !== void 0) {
          var p = yn,
            h = n(e);
          return (yn = p), zs(e, t, h);
        }
        break;
      }
    }
    var g = n;
    if (t == null) return g;
    var v = t[g];
    return v !== void 0 ? v : g;
  }
  function pO(e, t, n) {
    var i = "";
    if (Array.isArray(n))
      for (var a = 0; a < n.length; a++) i += zs(e, t, n[a]) + ";";
    else
      for (var l in n) {
        var c = n[l];
        if (typeof c != "object") {
          var d = c;
          t != null && t[d] !== void 0
            ? (i += l + "{" + t[d] + "}")
            : Pv(d) && (i += Zf(l) + ":" + Rv(l, d) + ";");
        } else if (
          Array.isArray(c) &&
          typeof c[0] == "string" &&
          (t == null || t[c[0]] === void 0)
        )
          for (var p = 0; p < c.length; p++)
            Pv(c[p]) && (i += Zf(l) + ":" + Rv(l, c[p]) + ";");
        else {
          var h = zs(e, t, c);
          switch (l) {
            case "animation":
            case "animationName": {
              i += Zf(l) + ":" + h + ";";
              break;
            }
            default:
              i += l + "{" + h + "}";
          }
        }
      }
    return i;
  }
  var jv = /label:\s*([^\s;{]+)\s*(;|$)/g,
    yn;
  function Hc(e, t, n) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var i = !0,
      a = "";
    yn = void 0;
    var l = e[0];
    if (l == null || l.raw === void 0) (i = !1), (a += zs(n, t, l));
    else {
      var c = l;
      a += c[0];
    }
    for (var d = 1; d < e.length; d++)
      if (((a += zs(n, t, e[d])), i)) {
        var p = l;
        a += p[d];
      }
    jv.lastIndex = 0;
    for (var h = "", g; (g = jv.exec(a)) !== null; ) h += "-" + g[1];
    var v = cO(a) + h;
    return { name: v, styles: a, next: yn };
  }
  var hO = function (e) {
      return e();
    },
    Ov = gg.useInsertionEffect ? gg.useInsertionEffect : !1,
    Av = Ov || hO,
    Tv = Ov || x.useLayoutEffect,
    mO = !1,
    Mv = x.createContext(typeof HTMLElement < "u" ? oO({ key: "css" }) : null);
  Mv.Provider;
  var qc = function (e) {
      return x.forwardRef(function (t, n) {
        var i = x.useContext(Mv);
        return e(t, i, n);
      });
    },
    Qi = x.createContext({}),
    gO = function (e, t) {
      if (typeof t == "function") {
        var n = t(e);
        return n;
      }
      return Zo({}, e, t);
    },
    vO = vv(function (e) {
      return vv(function (t) {
        return gO(e, t);
      });
    }),
    yO = function (e) {
      var t = x.useContext(Qi);
      return (
        e.theme !== t && (t = vO(t)(e.theme)),
        x.createElement(Qi.Provider, { value: t }, e.children)
      );
    },
    Xf = {}.hasOwnProperty,
    Yf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
    bO = function (e, t) {
      var n = {};
      for (var i in t) Xf.call(t, i) && (n[i] = t[i]);
      return (n[Yf] = e), n;
    },
    xO = function (e) {
      var t = e.cache,
        n = e.serialized,
        i = e.isStringTag;
      return (
        Kf(t, n, i),
        Av(function () {
          return Gf(t, n, i);
        }),
        null
      );
    },
    wO = qc(function (e, t, n) {
      var i = e.css;
      typeof i == "string" &&
        t.registered[i] !== void 0 &&
        (i = t.registered[i]);
      var a = e[Yf],
        l = [i],
        c = "";
      typeof e.className == "string"
        ? (c = Cv(t.registered, l, e.className))
        : e.className != null && (c = e.className + " ");
      var d = Hc(l, void 0, x.useContext(Qi));
      c += t.key + "-" + d.name;
      var p = {};
      for (var h in e)
        Xf.call(e, h) && h !== "css" && h !== Yf && !mO && (p[h] = e[h]);
      return (
        (p.className = c),
        n && (p.ref = n),
        x.createElement(
          x.Fragment,
          null,
          x.createElement(xO, {
            cache: t,
            serialized: d,
            isStringTag: typeof a == "string",
          }),
          x.createElement(a, p)
        )
      );
    }),
    kO = wO,
    SO = function (e, t) {
      var n = arguments;
      if (t == null || !Xf.call(t, "css"))
        return x.createElement.apply(void 0, n);
      var i = n.length,
        a = new Array(i);
      (a[0] = kO), (a[1] = bO(e, t));
      for (var l = 2; l < i; l++) a[l] = n[l];
      return x.createElement.apply(null, a);
    };
  (function (e) {
    var t;
    t || (t = e.JSX || (e.JSX = {}));
  })(SO);
  var Kc = qc(function (e, t) {
    var n = e.styles,
      i = Hc([n], void 0, x.useContext(Qi)),
      a = x.useRef();
    return (
      Tv(
        function () {
          var l = t.key + "-global",
            c = new t.sheet.constructor({
              key: l,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            d = !1,
            p = document.querySelector(
              'style[data-emotion="' + l + " " + i.name + '"]'
            );
          return (
            t.sheet.tags.length && (c.before = t.sheet.tags[0]),
            p !== null &&
              ((d = !0), p.setAttribute("data-emotion", l), c.hydrate([p])),
            (a.current = [c, d]),
            function () {
              c.flush();
            }
          );
        },
        [t]
      ),
      Tv(
        function () {
          var l = a.current,
            c = l[0],
            d = l[1];
          if (d) {
            l[1] = !1;
            return;
          }
          if ((i.next !== void 0 && Gf(t, i.next, !0), c.tags.length)) {
            var p = c.tags[c.tags.length - 1].nextElementSibling;
            (c.before = p), c.flush();
          }
          t.insert("", i, c, !1);
        },
        [t, i.name]
      ),
      null
    );
  });
  function _O() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Hc(t);
  }
  function CO() {
    var e = _O.apply(void 0, arguments),
      t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  }
  const Qf = x.createContext({});
  Qf.displayName = "ColorModeContext";
  function Jf() {
    const e = x.useContext(Qf);
    if (e === void 0)
      throw new Error("useColorMode must be used within a ColorModeProvider");
    return e;
  }
  const Gc = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
  function EO(e = {}) {
    const { preventTransition: t = !0, nonce: n } = e,
      i = {
        setDataset: (a) => {
          const l = t ? i.preventTransition() : void 0;
          (document.documentElement.dataset.theme = a),
            (document.documentElement.style.colorScheme = a),
            l == null || l();
        },
        setClassName(a) {
          document.body.classList.add(a ? Gc.dark : Gc.light),
            document.body.classList.remove(a ? Gc.light : Gc.dark);
        },
        query() {
          return window.matchMedia("(prefers-color-scheme: dark)");
        },
        getSystemTheme(a) {
          return i.query().matches ?? a === "dark" ? "dark" : "light";
        },
        addListener(a) {
          const l = i.query(),
            c = (d) => {
              a(d.matches ? "dark" : "light");
            };
          return (
            typeof l.addListener == "function"
              ? l.addListener(c)
              : l.addEventListener("change", c),
            () => {
              typeof l.removeListener == "function"
                ? l.removeListener(c)
                : l.removeEventListener("change", c);
            }
          );
        },
        preventTransition() {
          const a = document.createElement("style");
          return (
            a.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            n !== void 0 && (a.nonce = n),
            document.head.appendChild(a),
            () => {
              window.getComputedStyle(document.body),
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    document.head.removeChild(a);
                  });
                });
            }
          );
        },
      };
    return i;
  }
  const PO = "chakra-ui-color-mode";
  function RO(e) {
    return {
      ssr: !1,
      type: "localStorage",
      get(t) {
        if (!(globalThis != null && globalThis.document)) return t;
        let n;
        try {
          n = localStorage.getItem(e) || t;
        } catch {}
        return n || t;
      },
      set(t) {
        try {
          localStorage.setItem(e, t);
        } catch {}
      },
    };
  }
  const jO = RO(PO),
    zv = () => {},
    OO = yC() ? x.useLayoutEffect : x.useEffect;
  function Dv(e, t) {
    return e.type === "cookie" && e.ssr ? e.get(t) : t;
  }
  const Iv = qc(function (e, t) {
    const {
        value: n,
        children: i,
        options: {
          useSystemColorMode: a,
          initialColorMode: l,
          disableTransitionOnChange: c,
        } = {},
        colorModeManager: d = jO,
      } = e,
      p = l === "dark" ? "dark" : "light",
      [h, g] = x.useState(() => Dv(d, p)),
      [v, b] = x.useState(() => Dv(d)),
      {
        getSystemTheme: k,
        setClassName: S,
        setDataset: w,
        addListener: _,
      } = x.useMemo(
        () => EO({ preventTransition: c, nonce: t == null ? void 0 : t.nonce }),
        [c, t == null ? void 0 : t.nonce]
      ),
      j = l === "system" && !h ? v : h,
      O = x.useCallback(
        (E) => {
          const I = E === "system" ? k() : E;
          g(I), S(I === "dark"), w(I), d.set(I);
        },
        [d, k, S, w]
      );
    OO(() => {
      l === "system" && b(k());
    }, []),
      x.useEffect(() => {
        const E = d.get();
        if (E) {
          O(E);
          return;
        }
        if (l === "system") {
          O("system");
          return;
        }
        O(p);
      }, [d, p, l, O]);
    const M = x.useCallback(() => {
      O(j === "dark" ? "light" : "dark");
    }, [j, O]);
    x.useEffect(() => {
      if (a) return _(O);
    }, [a, _, O]);
    const $ = x.useMemo(
      () => ({
        colorMode: n ?? j,
        toggleColorMode: n ? zv : M,
        setColorMode: n ? zv : O,
        forced: n !== void 0,
      }),
      [j, M, O, n]
    );
    return R.jsx(Qf.Provider, { value: $, children: i });
  });
  Iv.displayName = "ColorModeProvider";
  const Fv = String.raw,
    Lv = Fv`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
    AO = () => R.jsx(Kc, { styles: Lv }),
    TO = ({ scope: e = "" }) =>
      R.jsx(Kc, {
        styles: Fv`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${Lv}
    `,
      });
  function MO(e) {
    const { cssVarsRoot: t, theme: n, children: i } = e,
      a = x.useMemo(() => vE(n), [n]);
    return R.jsxs(yO, { theme: a, children: [R.jsx(zO, { root: t }), i] });
  }
  function zO({ root: e = ":host, :root" }) {
    const t = [e, "[data-theme]"].join(",");
    return R.jsx(Kc, { styles: (n) => ({ [t]: n.__cssVars }) });
  }
  tr({
    name: "StylesContext",
    errorMessage:
      "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
  });
  function DO() {
    const { colorMode: e } = Jf();
    return R.jsx(Kc, {
      styles: (t) => {
        const n = xg(t, "styles.global"),
          i = vr(n, { theme: t, colorMode: e });
        return i ? Ag(i)(t) : void 0;
      },
    });
  }
  const [IO, FO] = tr({ strict: !1, name: "PortalManagerContext" });
  function Nv(e) {
    const { children: t, zIndex: n } = e;
    return R.jsx(IO, { value: { zIndex: n }, children: t });
  }
  Nv.displayName = "PortalManager";
  const $v = x.createContext({
    getDocument() {
      return document;
    },
    getWindow() {
      return window;
    },
  });
  $v.displayName = "EnvironmentContext";
  function Bv(e) {
    const { children: t, environment: n, disabled: i } = e,
      a = x.useRef(null),
      l = x.useMemo(
        () =>
          n || {
            getDocument: () => {
              var d;
              return (
                ((d = a.current) == null ? void 0 : d.ownerDocument) ?? document
              );
            },
            getWindow: () => {
              var d;
              return (
                ((d = a.current) == null
                  ? void 0
                  : d.ownerDocument.defaultView) ?? window
              );
            },
          },
        [n]
      ),
      c = !i || !n;
    return R.jsxs($v.Provider, {
      value: l,
      children: [
        t,
        c && R.jsx("span", { id: "__chakra_env", hidden: !0, ref: a }),
      ],
    });
  }
  Bv.displayName = "EnvironmentProvider";
  const LO = (e) => {
    const {
        children: t,
        colorModeManager: n,
        portalZIndex: i,
        resetScope: a,
        resetCSS: l = !0,
        theme: c = {},
        environment: d,
        cssVarsRoot: p,
        disableEnvironment: h,
        disableGlobalStyle: g,
      } = e,
      v = R.jsx(Bv, { environment: d, disabled: h, children: t });
    return R.jsx(MO, {
      theme: c,
      cssVarsRoot: p,
      children: R.jsxs(Iv, {
        colorModeManager: n,
        options: c.config,
        children: [
          l ? R.jsx(TO, { scope: a }) : R.jsx(AO, {}),
          !g && R.jsx(DO, {}),
          i ? R.jsx(Nv, { zIndex: i, children: v }) : v,
        ],
      }),
    });
  };
  function NO(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map(),
      n = (...i) => e(...i);
    return new Proxy(n, {
      get: (i, a) =>
        a === "create" ? e : (t.has(a) || t.set(a, e(a)), t.get(a)),
    });
  }
  function Zc(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
  }
  const ep = (e) => Array.isArray(e);
  function Vv(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
    return !0;
  }
  function Ds(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  function Wv(e) {
    const t = [{}, {}];
    return (
      e == null ||
        e.values.forEach((n, i) => {
          (t[0][i] = n.get()), (t[1][i] = n.getVelocity());
        }),
      t
    );
  }
  function tp(e, t, n, i) {
    if (typeof t == "function") {
      const [a, l] = Wv(i);
      t = t(n !== void 0 ? n : e.custom, a, l);
    }
    if (
      (typeof t == "string" && (t = e.variants && e.variants[t]),
      typeof t == "function")
    ) {
      const [a, l] = Wv(i);
      t = t(n !== void 0 ? n : e.custom, a, l);
    }
    return t;
  }
  function Xc(e, t, n) {
    const i = e.getProps();
    return tp(i, t, n !== void 0 ? n : i.custom, e);
  }
  const rp = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    np = ["initial", ...rp],
    Is = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    Xo = new Set(Is),
    $n = (e) => e * 1e3,
    Bn = (e) => e / 1e3,
    $O = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    BO = (e) => ({
      type: "spring",
      stiffness: 550,
      damping: e === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    }),
    VO = { type: "keyframes", duration: 0.8 },
    WO = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    UO = (e, { keyframes: t }) =>
      t.length > 2
        ? VO
        : Xo.has(e)
        ? e.startsWith("scale")
          ? BO(t[1])
          : $O
        : WO;
  function op(e, t) {
    return e ? e[t] || e.default || e : void 0;
  }
  const HO = { skipAnimations: !1, useManualTiming: !1 },
    qO = (e) => e !== null;
  function Yc(e, { repeat: t, repeatType: n = "loop" }, i) {
    const a = e.filter(qO),
      l = t && n !== "loop" && t % 2 === 1 ? 0 : a.length - 1;
    return !l || i === void 0 ? a[l] : i;
  }
  const xr = (e) => e;
  let ip = xr;
  function KO(e) {
    let t = new Set(),
      n = new Set(),
      i = !1,
      a = !1;
    const l = new WeakSet();
    let c = { delta: 0, timestamp: 0, isProcessing: !1 };
    function d(h) {
      l.has(h) && (p.schedule(h), e()), h(c);
    }
    const p = {
      schedule: (h, g = !1, v = !1) => {
        const b = v && i ? t : n;
        return g && l.add(h), b.has(h) || b.add(h), h;
      },
      cancel: (h) => {
        n.delete(h), l.delete(h);
      },
      process: (h) => {
        if (((c = h), i)) {
          a = !0;
          return;
        }
        (i = !0),
          ([t, n] = [n, t]),
          t.forEach(d),
          t.clear(),
          (i = !1),
          a && ((a = !1), p.process(h));
      },
    };
    return p;
  }
  const Qc = [
      "read",
      "resolveKeyframes",
      "update",
      "preRender",
      "render",
      "postRender",
    ],
    GO = 40;
  function Uv(e, t) {
    let n = !1,
      i = !0;
    const a = { delta: 0, timestamp: 0, isProcessing: !1 },
      l = () => (n = !0),
      c = Qc.reduce((w, _) => ((w[_] = KO(l)), w), {}),
      {
        read: d,
        resolveKeyframes: p,
        update: h,
        preRender: g,
        render: v,
        postRender: b,
      } = c,
      k = () => {
        const w = performance.now();
        (n = !1),
          (a.delta = i ? 1e3 / 60 : Math.max(Math.min(w - a.timestamp, GO), 1)),
          (a.timestamp = w),
          (a.isProcessing = !0),
          d.process(a),
          p.process(a),
          h.process(a),
          g.process(a),
          v.process(a),
          b.process(a),
          (a.isProcessing = !1),
          n && t && ((i = !1), e(k));
      },
      S = () => {
        (n = !0), (i = !0), a.isProcessing || e(k);
      };
    return {
      schedule: Qc.reduce((w, _) => {
        const j = c[_];
        return (
          (w[_] = (O, M = !1, $ = !1) => (n || S(), j.schedule(O, M, $))), w
        );
      }, {}),
      cancel: (w) => {
        for (let _ = 0; _ < Qc.length; _++) c[Qc[_]].cancel(w);
      },
      state: a,
      steps: c,
    };
  }
  const {
      schedule: at,
      cancel: so,
      state: Mt,
      steps: ap,
    } = Uv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xr, !0),
    Hv = (e, t, n) =>
      (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    ZO = 1e-7,
    XO = 12;
  function YO(e, t, n, i, a) {
    let l,
      c,
      d = 0;
    do (c = t + (n - t) / 2), (l = Hv(c, i, a) - e), l > 0 ? (n = c) : (t = c);
    while (Math.abs(l) > ZO && ++d < XO);
    return c;
  }
  function Fs(e, t, n, i) {
    if (e === t && n === i) return xr;
    const a = (l) => YO(l, 0, 1, e, n);
    return (l) => (l === 0 || l === 1 ? l : Hv(a(l), t, i));
  }
  const qv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Kv = (e) => (t) => 1 - e(1 - t),
    Gv = Fs(0.33, 1.53, 0.69, 0.99),
    sp = Kv(Gv),
    Zv = qv(sp),
    Xv = (e) =>
      (e *= 2) < 1 ? 0.5 * sp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    lp = (e) => 1 - Math.sin(Math.acos(e)),
    Yv = Kv(lp),
    Qv = qv(lp),
    Jv = (e) => /^0[^.\s]+$/u.test(e);
  function QO(e) {
    return typeof e == "number"
      ? e === 0
      : e !== null
      ? e === "none" || e === "0" || Jv(e)
      : !0;
  }
  const ey = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    ty = (e) => (t) => typeof t == "string" && t.startsWith(e),
    ry = ty("--"),
    JO = ty("var(--"),
    cp = (e) => (JO(e) ? eA.test(e.split("/*")[0].trim()) : !1),
    eA =
      /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    tA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function rA(e) {
    const t = tA.exec(e);
    if (!t) return [,];
    const [, n, i, a] = t;
    return [`--${n ?? i}`, a];
  }
  function ny(e, t, n = 1) {
    const [i, a] = rA(e);
    if (!i) return;
    const l = window.getComputedStyle(t).getPropertyValue(i);
    if (l) {
      const c = l.trim();
      return ey(c) ? parseFloat(c) : c;
    }
    return cp(a) ? ny(a, t, n + 1) : a;
  }
  const Vn = (e, t, n) => (n > t ? t : n < e ? e : n),
    Ji = {
      test: (e) => typeof e == "number",
      parse: parseFloat,
      transform: (e) => e,
    },
    Ls = { ...Ji, transform: (e) => Vn(0, 1, e) },
    Jc = { ...Ji, default: 1 },
    Ns = (e) => ({
      test: (t) =>
        typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
      parse: parseFloat,
      transform: (t) => `${t}${e}`,
    }),
    lo = Ns("deg"),
    bn = Ns("%"),
    _e = Ns("px"),
    nA = Ns("vh"),
    oA = Ns("vw"),
    oy = {
      ...bn,
      parse: (e) => bn.parse(e) / 100,
      transform: (e) => bn.transform(e * 100),
    },
    iA = new Set([
      "width",
      "height",
      "top",
      "left",
      "right",
      "bottom",
      "x",
      "y",
      "translateX",
      "translateY",
    ]),
    iy = (e) => e === Ji || e === _e,
    ay = (e, t) => parseFloat(e.split(", ")[t]),
    sy =
      (e, t) =>
      (n, { transform: i }) => {
        if (i === "none" || !i) return 0;
        const a = i.match(/^matrix3d\((.+)\)$/u);
        if (a) return ay(a[1], t);
        {
          const l = i.match(/^matrix\((.+)\)$/u);
          return l ? ay(l[1], e) : 0;
        }
      },
    aA = new Set(["x", "y", "z"]),
    sA = Is.filter((e) => !aA.has(e));
  function lA(e) {
    const t = [];
    return (
      sA.forEach((n) => {
        const i = e.getValue(n);
        i !== void 0 &&
          (t.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
      }),
      t
    );
  }
  const ea = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: sy(4, 13),
    y: sy(5, 14),
  };
  (ea.translateX = ea.x), (ea.translateY = ea.y);
  const ly = (e) => (t) => t.test(e),
    cA = { test: (e) => e === "auto", parse: (e) => e },
    cy = [Ji, _e, bn, lo, oA, nA, cA],
    uy = (e) => cy.find(ly(e)),
    Yo = new Set();
  let up = !1,
    dp = !1;
  function dy() {
    if (dp) {
      const e = Array.from(Yo).filter((i) => i.needsMeasurement),
        t = new Set(e.map((i) => i.element)),
        n = new Map();
      t.forEach((i) => {
        const a = lA(i);
        a.length && (n.set(i, a), i.render());
      }),
        e.forEach((i) => i.measureInitialState()),
        t.forEach((i) => {
          i.render();
          const a = n.get(i);
          a &&
            a.forEach(([l, c]) => {
              var d;
              (d = i.getValue(l)) === null || d === void 0 || d.set(c);
            });
        }),
        e.forEach((i) => i.measureEndState()),
        e.forEach((i) => {
          i.suspendedScrollY !== void 0 &&
            window.scrollTo(0, i.suspendedScrollY);
        });
    }
    (dp = !1), (up = !1), Yo.forEach((e) => e.complete()), Yo.clear();
  }
  function fy() {
    Yo.forEach((e) => {
      e.readKeyframes(), e.needsMeasurement && (dp = !0);
    });
  }
  function uA() {
    fy(), dy();
  }
  class fp {
    constructor(t, n, i, a, l, c = !1) {
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...t]),
        (this.onComplete = n),
        (this.name = i),
        (this.motionValue = a),
        (this.element = l),
        (this.isAsync = c);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (Yo.add(this),
            up || ((up = !0), at.read(fy), at.resolveKeyframes(dy)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: t,
        name: n,
        element: i,
        motionValue: a,
      } = this;
      for (let l = 0; l < t.length; l++)
        if (t[l] === null)
          if (l === 0) {
            const c = a == null ? void 0 : a.get(),
              d = t[t.length - 1];
            if (c !== void 0) t[0] = c;
            else if (i && n) {
              const p = i.readValue(n, d);
              p != null && (t[0] = p);
            }
            t[0] === void 0 && (t[0] = d), a && c === void 0 && a.set(t[0]);
          } else t[l] = t[l - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Yo.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), Yo.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  const $s = (e) => Math.round(e * 1e5) / 1e5,
    pp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function dA(e) {
    return e == null;
  }
  const fA =
      /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    hp = (e, t) => (n) =>
      !!(
        (typeof n == "string" && fA.test(n) && n.startsWith(e)) ||
        (t && !dA(n) && Object.prototype.hasOwnProperty.call(n, t))
      ),
    py = (e, t, n) => (i) => {
      if (typeof i != "string") return i;
      const [a, l, c, d] = i.match(pp);
      return {
        [e]: parseFloat(a),
        [t]: parseFloat(l),
        [n]: parseFloat(c),
        alpha: d !== void 0 ? parseFloat(d) : 1,
      };
    },
    pA = (e) => Vn(0, 255, e),
    mp = { ...Ji, transform: (e) => Math.round(pA(e)) },
    Qo = {
      test: hp("rgb", "red"),
      parse: py("red", "green", "blue"),
      transform: ({ red: e, green: t, blue: n, alpha: i = 1 }) =>
        "rgba(" +
        mp.transform(e) +
        ", " +
        mp.transform(t) +
        ", " +
        mp.transform(n) +
        ", " +
        $s(Ls.transform(i)) +
        ")",
    };
  function hA(e) {
    let t = "",
      n = "",
      i = "",
      a = "";
    return (
      e.length > 5
        ? ((t = e.substring(1, 3)),
          (n = e.substring(3, 5)),
          (i = e.substring(5, 7)),
          (a = e.substring(7, 9)))
        : ((t = e.substring(1, 2)),
          (n = e.substring(2, 3)),
          (i = e.substring(3, 4)),
          (a = e.substring(4, 5)),
          (t += t),
          (n += n),
          (i += i),
          (a += a)),
      {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
      }
    );
  }
  const gp = { test: hp("#"), parse: hA, transform: Qo.transform },
    ta = {
      test: hp("hsl", "hue"),
      parse: py("hue", "saturation", "lightness"),
      transform: ({ hue: e, saturation: t, lightness: n, alpha: i = 1 }) =>
        "hsla(" +
        Math.round(e) +
        ", " +
        bn.transform($s(t)) +
        ", " +
        bn.transform($s(n)) +
        ", " +
        $s(Ls.transform(i)) +
        ")",
    },
    Ft = {
      test: (e) => Qo.test(e) || gp.test(e) || ta.test(e),
      parse: (e) =>
        Qo.test(e) ? Qo.parse(e) : ta.test(e) ? ta.parse(e) : gp.parse(e),
      transform: (e) =>
        typeof e == "string"
          ? e
          : e.hasOwnProperty("red")
          ? Qo.transform(e)
          : ta.transform(e),
    },
    mA =
      /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function gA(e) {
    var t, n;
    return (
      isNaN(e) &&
      typeof e == "string" &&
      (((t = e.match(pp)) === null || t === void 0 ? void 0 : t.length) || 0) +
        (((n = e.match(mA)) === null || n === void 0 ? void 0 : n.length) ||
          0) >
        0
    );
  }
  const hy = "number",
    my = "color",
    vA = "var",
    yA = "var(",
    gy = "${}",
    bA =
      /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function Bs(e) {
    const t = e.toString(),
      n = [],
      i = { color: [], number: [], var: [] },
      a = [];
    let l = 0;
    const c = t
      .replace(
        bA,
        (d) => (
          Ft.test(d)
            ? (i.color.push(l), a.push(my), n.push(Ft.parse(d)))
            : d.startsWith(yA)
            ? (i.var.push(l), a.push(vA), n.push(d))
            : (i.number.push(l), a.push(hy), n.push(parseFloat(d))),
          ++l,
          gy
        )
      )
      .split(gy);
    return { values: n, split: c, indexes: i, types: a };
  }
  function vy(e) {
    return Bs(e).values;
  }
  function yy(e) {
    const { split: t, types: n } = Bs(e),
      i = t.length;
    return (a) => {
      let l = "";
      for (let c = 0; c < i; c++)
        if (((l += t[c]), a[c] !== void 0)) {
          const d = n[c];
          d === hy
            ? (l += $s(a[c]))
            : d === my
            ? (l += Ft.transform(a[c]))
            : (l += a[c]);
        }
      return l;
    };
  }
  const xA = (e) => (typeof e == "number" ? 0 : e);
  function wA(e) {
    const t = vy(e);
    return yy(e)(t.map(xA));
  }
  const co = {
      test: gA,
      parse: vy,
      createTransformer: yy,
      getAnimatableNone: wA,
    },
    kA = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function SA(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [i] = n.match(pp) || [];
    if (!i) return e;
    const a = n.replace(i, "");
    let l = kA.has(t) ? 1 : 0;
    return i !== n && (l *= 100), t + "(" + l + a + ")";
  }
  const _A = /\b([a-z-]*)\(.*?\)/gu,
    vp = {
      ...co,
      getAnimatableNone: (e) => {
        const t = e.match(_A);
        return t ? t.map(SA).join(" ") : e;
      },
    },
    CA = {
      borderWidth: _e,
      borderTopWidth: _e,
      borderRightWidth: _e,
      borderBottomWidth: _e,
      borderLeftWidth: _e,
      borderRadius: _e,
      radius: _e,
      borderTopLeftRadius: _e,
      borderTopRightRadius: _e,
      borderBottomRightRadius: _e,
      borderBottomLeftRadius: _e,
      width: _e,
      maxWidth: _e,
      height: _e,
      maxHeight: _e,
      top: _e,
      right: _e,
      bottom: _e,
      left: _e,
      padding: _e,
      paddingTop: _e,
      paddingRight: _e,
      paddingBottom: _e,
      paddingLeft: _e,
      margin: _e,
      marginTop: _e,
      marginRight: _e,
      marginBottom: _e,
      marginLeft: _e,
      backgroundPositionX: _e,
      backgroundPositionY: _e,
    },
    EA = {
      rotate: lo,
      rotateX: lo,
      rotateY: lo,
      rotateZ: lo,
      scale: Jc,
      scaleX: Jc,
      scaleY: Jc,
      scaleZ: Jc,
      skew: lo,
      skewX: lo,
      skewY: lo,
      distance: _e,
      translateX: _e,
      translateY: _e,
      translateZ: _e,
      x: _e,
      y: _e,
      z: _e,
      perspective: _e,
      transformPerspective: _e,
      opacity: Ls,
      originX: oy,
      originY: oy,
      originZ: _e,
    },
    by = { ...Ji, transform: Math.round },
    yp = {
      ...CA,
      ...EA,
      zIndex: by,
      size: _e,
      fillOpacity: Ls,
      strokeOpacity: Ls,
      numOctaves: by,
    },
    PA = {
      ...yp,
      color: Ft,
      backgroundColor: Ft,
      outlineColor: Ft,
      fill: Ft,
      stroke: Ft,
      borderColor: Ft,
      borderTopColor: Ft,
      borderRightColor: Ft,
      borderBottomColor: Ft,
      borderLeftColor: Ft,
      filter: vp,
      WebkitFilter: vp,
    },
    bp = (e) => PA[e];
  function xy(e, t) {
    let n = bp(e);
    return (
      n !== vp && (n = co),
      n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
  }
  const RA = new Set(["auto", "none", "0"]);
  function jA(e, t, n) {
    let i = 0,
      a;
    for (; i < e.length && !a; ) {
      const l = e[i];
      typeof l == "string" && !RA.has(l) && Bs(l).values.length && (a = e[i]),
        i++;
    }
    if (a && n) for (const l of t) e[l] = xy(n, a);
  }
  class wy extends fp {
    constructor(t, n, i, a, l) {
      super(t, n, i, a, l, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, element: n, name: i } = this;
      if (!n || !n.current) return;
      super.readKeyframes();
      for (let p = 0; p < t.length; p++) {
        let h = t[p];
        if (typeof h == "string" && ((h = h.trim()), cp(h))) {
          const g = ny(h, n.current);
          g !== void 0 && (t[p] = g),
            p === t.length - 1 && (this.finalKeyframe = h);
        }
      }
      if ((this.resolveNoneKeyframes(), !iA.has(i) || t.length !== 2)) return;
      const [a, l] = t,
        c = uy(a),
        d = uy(l);
      if (c !== d)
        if (iy(c) && iy(d))
          for (let p = 0; p < t.length; p++) {
            const h = t[p];
            typeof h == "string" && (t[p] = parseFloat(h));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: t, name: n } = this,
        i = [];
      for (let a = 0; a < t.length; a++) QO(t[a]) && i.push(a);
      i.length && jA(t, i, n);
    }
    measureInitialState() {
      const { element: t, unresolvedKeyframes: n, name: i } = this;
      if (!t || !t.current) return;
      i === "height" && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = ea[i](
          t.measureViewportBox(),
          window.getComputedStyle(t.current)
        )),
        (n[0] = this.measuredOrigin);
      const a = n[n.length - 1];
      a !== void 0 && t.getValue(i, a).jump(a, !1);
    }
    measureEndState() {
      var t;
      const { element: n, name: i, unresolvedKeyframes: a } = this;
      if (!n || !n.current) return;
      const l = n.getValue(i);
      l && l.jump(this.measuredOrigin, !1);
      const c = a.length - 1,
        d = a[c];
      (a[c] = ea[i](
        n.measureViewportBox(),
        window.getComputedStyle(n.current)
      )),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        !((t = this.removedTransforms) === null || t === void 0) &&
          t.length &&
          this.removedTransforms.forEach(([p, h]) => {
            n.getValue(p).set(h);
          }),
        this.resolveNoneKeyframes();
    }
  }
  function xp(e) {
    return typeof e == "function";
  }
  let eu;
  function OA() {
    eu = void 0;
  }
  const xn = {
      now: () => (
        eu === void 0 &&
          xn.set(
            Mt.isProcessing || HO.useManualTiming
              ? Mt.timestamp
              : performance.now()
          ),
        eu
      ),
      set: (e) => {
        (eu = e), queueMicrotask(OA);
      },
    },
    ky = (e, t) =>
      t === "zIndex"
        ? !1
        : !!(
            typeof e == "number" ||
            Array.isArray(e) ||
            (typeof e == "string" &&
              (co.test(e) || e === "0") &&
              !e.startsWith("url("))
          );
  function AA(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
  }
  function TA(e, t, n, i) {
    const a = e[0];
    if (a === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const l = e[e.length - 1],
      c = ky(a, t),
      d = ky(l, t);
    return !c || !d ? !1 : AA(e) || ((n === "spring" || xp(n)) && i);
  }
  const MA = 40;
  class Sy {
    constructor({
      autoplay: t = !0,
      delay: n = 0,
      type: i = "keyframes",
      repeat: a = 0,
      repeatDelay: l = 0,
      repeatType: c = "loop",
      ...d
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = xn.now()),
        (this.options = {
          autoplay: t,
          delay: n,
          type: i,
          repeat: a,
          repeatDelay: l,
          repeatType: c,
          ...d,
        }),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt
        ? this.resolvedAt - this.createdAt > MA
          ? this.resolvedAt
          : this.createdAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && uA(), this._resolved
      );
    }
    onKeyframesResolved(t, n) {
      (this.resolvedAt = xn.now()), (this.hasAttemptedResolve = !0);
      const {
        name: i,
        type: a,
        velocity: l,
        delay: c,
        onComplete: d,
        onUpdate: p,
        isGenerator: h,
      } = this.options;
      if (!h && !TA(t, i, a, l))
        if (c) this.options.duration = 0;
        else {
          p == null || p(Yc(t, this.options, n)),
            d == null || d(),
            this.resolveFinishedPromise();
          return;
        }
      const g = this.initPlayback(t, n);
      g !== !1 &&
        ((this._resolved = { keyframes: t, finalKeyframe: n, ...g }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(t, n) {
      return this.currentFinishedPromise.then(t, n);
    }
    flatten() {
      (this.options.type = "keyframes"), (this.options.ease = "linear");
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((t) => {
        this.resolveFinishedPromise = t;
      });
    }
  }
  const ra = (e, t, n) => {
      const i = t - e;
      return i === 0 ? 1 : (n - e) / i;
    },
    _y = (e, t, n = 10) => {
      let i = "";
      const a = Math.max(Math.round(t / n), 2);
      for (let l = 0; l < a; l++) i += e(ra(0, a - 1, l)) + ", ";
      return `linear(${i.substring(0, i.length - 2)})`;
    };
  function Cy(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const zA = 5;
  function Ey(e, t, n) {
    const i = Math.max(t - zA, 0);
    return Cy(n - e(i), t - i);
  }
  const vt = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: 0.3,
      visualDuration: 0.3,
      restSpeed: { granular: 0.01, default: 2 },
      restDelta: { granular: 0.005, default: 0.5 },
      minDuration: 0.01,
      maxDuration: 10,
      minDamping: 0.05,
      maxDamping: 1,
    },
    wp = 0.001;
  function DA({
    duration: e = vt.duration,
    bounce: t = vt.bounce,
    velocity: n = vt.velocity,
    mass: i = vt.mass,
  }) {
    let a,
      l,
      c = 1 - t;
    (c = Vn(vt.minDamping, vt.maxDamping, c)),
      (e = Vn(vt.minDuration, vt.maxDuration, Bn(e))),
      c < 1
        ? ((a = (h) => {
            const g = h * c,
              v = g * e,
              b = g - n,
              k = kp(h, c),
              S = Math.exp(-v);
            return wp - (b / k) * S;
          }),
          (l = (h) => {
            const g = h * c * e,
              v = g * n + n,
              b = Math.pow(c, 2) * Math.pow(h, 2) * e,
              k = Math.exp(-g),
              S = kp(Math.pow(h, 2), c);
            return ((-a(h) + wp > 0 ? -1 : 1) * ((v - b) * k)) / S;
          }))
        : ((a = (h) => {
            const g = Math.exp(-h * e),
              v = (h - n) * e + 1;
            return -wp + g * v;
          }),
          (l = (h) => {
            const g = Math.exp(-h * e),
              v = (n - h) * (e * e);
            return g * v;
          }));
    const d = 5 / e,
      p = FA(a, l, d);
    if (((e = $n(e)), isNaN(p)))
      return { stiffness: vt.stiffness, damping: vt.damping, duration: e };
    {
      const h = Math.pow(p, 2) * i;
      return { stiffness: h, damping: c * 2 * Math.sqrt(i * h), duration: e };
    }
  }
  const IA = 12;
  function FA(e, t, n) {
    let i = n;
    for (let a = 1; a < IA; a++) i = i - e(i) / t(i);
    return i;
  }
  function kp(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const Sp = 2e4;
  function Py(e) {
    let t = 0;
    const n = 50;
    let i = e.next(t);
    for (; !i.done && t < Sp; ) (t += n), (i = e.next(t));
    return t >= Sp ? 1 / 0 : t;
  }
  const LA = ["duration", "bounce"],
    NA = ["stiffness", "damping", "mass"];
  function Ry(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function $A(e) {
    let t = {
      velocity: vt.velocity,
      stiffness: vt.stiffness,
      damping: vt.damping,
      mass: vt.mass,
      isResolvedFromDuration: !1,
      ...e,
    };
    if (!Ry(e, NA) && Ry(e, LA))
      if (e.visualDuration) {
        const n = e.visualDuration,
          i = (2 * Math.PI) / (n * 1.2),
          a = i * i,
          l = 2 * Vn(0.05, 1, 1 - e.bounce) * Math.sqrt(a);
        t = { ...t, mass: vt.mass, stiffness: a, damping: l };
      } else {
        const n = DA(e);
        (t = { ...t, ...n, mass: vt.mass }), (t.isResolvedFromDuration = !0);
      }
    return t;
  }
  function jy(e = vt.visualDuration, t = vt.bounce) {
    const n =
      typeof e != "object"
        ? { visualDuration: e, keyframes: [0, 1], bounce: t }
        : e;
    let { restSpeed: i, restDelta: a } = n;
    const l = n.keyframes[0],
      c = n.keyframes[n.keyframes.length - 1],
      d = { done: !1, value: l },
      {
        stiffness: p,
        damping: h,
        mass: g,
        duration: v,
        velocity: b,
        isResolvedFromDuration: k,
      } = $A({ ...n, velocity: -Bn(n.velocity || 0) }),
      S = b || 0,
      w = h / (2 * Math.sqrt(p * g)),
      _ = c - l,
      j = Bn(Math.sqrt(p / g)),
      O = Math.abs(_) < 5;
    i || (i = O ? vt.restSpeed.granular : vt.restSpeed.default),
      a || (a = O ? vt.restDelta.granular : vt.restDelta.default);
    let M;
    if (w < 1) {
      const E = kp(j, w);
      M = (I) => {
        const L = Math.exp(-w * j * I);
        return (
          c -
          L * (((S + w * j * _) / E) * Math.sin(E * I) + _ * Math.cos(E * I))
        );
      };
    } else if (w === 1) M = (E) => c - Math.exp(-j * E) * (_ + (S + j * _) * E);
    else {
      const E = j * Math.sqrt(w * w - 1);
      M = (I) => {
        const L = Math.exp(-w * j * I),
          H = Math.min(E * I, 300);
        return (
          c - (L * ((S + w * j * _) * Math.sinh(H) + E * _ * Math.cosh(H))) / E
        );
      };
    }
    const $ = {
      calculatedDuration: (k && v) || null,
      next: (E) => {
        const I = M(E);
        if (k) d.done = E >= v;
        else {
          let L = 0;
          w < 1 && (L = E === 0 ? $n(S) : Ey(M, E, I));
          const H = Math.abs(L) <= i,
            G = Math.abs(c - I) <= a;
          d.done = H && G;
        }
        return (d.value = d.done ? c : I), d;
      },
      toString: () => {
        const E = Math.min(Py($), Sp),
          I = _y((L) => $.next(E * L).value, E, 30);
        return E + "ms " + I;
      },
    };
    return $;
  }
  function Oy({
    keyframes: e,
    velocity: t = 0,
    power: n = 0.8,
    timeConstant: i = 325,
    bounceDamping: a = 10,
    bounceStiffness: l = 500,
    modifyTarget: c,
    min: d,
    max: p,
    restDelta: h = 0.5,
    restSpeed: g,
  }) {
    const v = e[0],
      b = { done: !1, value: v },
      k = (H) => (d !== void 0 && H < d) || (p !== void 0 && H > p),
      S = (H) =>
        d === void 0
          ? p
          : p === void 0 || Math.abs(d - H) < Math.abs(p - H)
          ? d
          : p;
    let w = n * t;
    const _ = v + w,
      j = c === void 0 ? _ : c(_);
    j !== _ && (w = j - v);
    const O = (H) => -w * Math.exp(-H / i),
      M = (H) => j + O(H),
      $ = (H) => {
        const G = O(H),
          q = M(H);
        (b.done = Math.abs(G) <= h), (b.value = b.done ? j : q);
      };
    let E, I;
    const L = (H) => {
      k(b.value) &&
        ((E = H),
        (I = jy({
          keyframes: [b.value, S(b.value)],
          velocity: Ey(M, H, b.value),
          damping: a,
          stiffness: l,
          restDelta: h,
          restSpeed: g,
        })));
    };
    return (
      L(0),
      {
        calculatedDuration: null,
        next: (H) => {
          let G = !1;
          return (
            !I && E === void 0 && ((G = !0), $(H), L(H)),
            E !== void 0 && H >= E ? I.next(H - E) : (!G && $(H), b)
          );
        },
      }
    );
  }
  const BA = Fs(0.42, 0, 1, 1),
    VA = Fs(0, 0, 0.58, 1),
    Ay = Fs(0.42, 0, 0.58, 1),
    WA = (e) => Array.isArray(e) && typeof e[0] != "number",
    _p = (e) => Array.isArray(e) && typeof e[0] == "number",
    Ty = {
      linear: xr,
      easeIn: BA,
      easeInOut: Ay,
      easeOut: VA,
      circIn: lp,
      circInOut: Qv,
      circOut: Yv,
      backIn: sp,
      backInOut: Zv,
      backOut: Gv,
      anticipate: Xv,
    },
    My = (e) => {
      if (_p(e)) {
        ip(e.length === 4);
        const [t, n, i, a] = e;
        return Fs(t, n, i, a);
      } else if (typeof e == "string") return ip(Ty[e] !== void 0), Ty[e];
      return e;
    },
    UA = (e, t) => (n) => t(e(n)),
    Vs = (...e) => e.reduce(UA),
    ht = (e, t, n) => e + (t - e) * n;
  function Cp(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? e + (t - e) * 6 * n
        : n < 1 / 2
        ? t
        : n < 2 / 3
        ? e + (t - e) * (2 / 3 - n) * 6
        : e
    );
  }
  function HA({ hue: e, saturation: t, lightness: n, alpha: i }) {
    (e /= 360), (t /= 100), (n /= 100);
    let a = 0,
      l = 0,
      c = 0;
    if (!t) a = l = c = n;
    else {
      const d = n < 0.5 ? n * (1 + t) : n + t - n * t,
        p = 2 * n - d;
      (a = Cp(p, d, e + 1 / 3)), (l = Cp(p, d, e)), (c = Cp(p, d, e - 1 / 3));
    }
    return {
      red: Math.round(a * 255),
      green: Math.round(l * 255),
      blue: Math.round(c * 255),
      alpha: i,
    };
  }
  function tu(e, t) {
    return (n) => (n > 0 ? t : e);
  }
  const Ep = (e, t, n) => {
      const i = e * e,
        a = n * (t * t - i) + i;
      return a < 0 ? 0 : Math.sqrt(a);
    },
    qA = [gp, Qo, ta],
    KA = (e) => qA.find((t) => t.test(e));
  function zy(e) {
    const t = KA(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === ta && (n = HA(n)), n;
  }
  const Dy = (e, t) => {
      const n = zy(e),
        i = zy(t);
      if (!n || !i) return tu(e, t);
      const a = { ...n };
      return (l) => (
        (a.red = Ep(n.red, i.red, l)),
        (a.green = Ep(n.green, i.green, l)),
        (a.blue = Ep(n.blue, i.blue, l)),
        (a.alpha = ht(n.alpha, i.alpha, l)),
        Qo.transform(a)
      );
    },
    Pp = new Set(["none", "hidden"]);
  function GA(e, t) {
    return Pp.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
  }
  function ZA(e, t) {
    return (n) => ht(e, t, n);
  }
  function Rp(e) {
    return typeof e == "number"
      ? ZA
      : typeof e == "string"
      ? cp(e)
        ? tu
        : Ft.test(e)
        ? Dy
        : QA
      : Array.isArray(e)
      ? Iy
      : typeof e == "object"
      ? Ft.test(e)
        ? Dy
        : XA
      : tu;
  }
  function Iy(e, t) {
    const n = [...e],
      i = n.length,
      a = e.map((l, c) => Rp(l)(l, t[c]));
    return (l) => {
      for (let c = 0; c < i; c++) n[c] = a[c](l);
      return n;
    };
  }
  function XA(e, t) {
    const n = { ...e, ...t },
      i = {};
    for (const a in n)
      e[a] !== void 0 && t[a] !== void 0 && (i[a] = Rp(e[a])(e[a], t[a]));
    return (a) => {
      for (const l in i) n[l] = i[l](a);
      return n;
    };
  }
  function YA(e, t) {
    var n;
    const i = [],
      a = { color: 0, var: 0, number: 0 };
    for (let l = 0; l < t.values.length; l++) {
      const c = t.types[l],
        d = e.indexes[c][a[c]],
        p = (n = e.values[d]) !== null && n !== void 0 ? n : 0;
      (i[l] = p), a[c]++;
    }
    return i;
  }
  const QA = (e, t) => {
    const n = co.createTransformer(t),
      i = Bs(e),
      a = Bs(t);
    return i.indexes.var.length === a.indexes.var.length &&
      i.indexes.color.length === a.indexes.color.length &&
      i.indexes.number.length >= a.indexes.number.length
      ? (Pp.has(e) && !a.values.length) || (Pp.has(t) && !i.values.length)
        ? GA(e, t)
        : Vs(Iy(YA(i, a), a.values), n)
      : tu(e, t);
  };
  function Fy(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number"
      ? ht(e, t, n)
      : Rp(e)(e, t);
  }
  function JA(e, t, n) {
    const i = [],
      a = n || Fy,
      l = e.length - 1;
    for (let c = 0; c < l; c++) {
      let d = a(e[c], e[c + 1]);
      if (t) {
        const p = Array.isArray(t) ? t[c] || xr : t;
        d = Vs(p, d);
      }
      i.push(d);
    }
    return i;
  }
  function eT(e, t, { clamp: n = !0, ease: i, mixer: a } = {}) {
    const l = e.length;
    if ((ip(l === t.length), l === 1)) return () => t[0];
    if (l === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[l - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const c = JA(t, i, a),
      d = c.length,
      p = (h) => {
        let g = 0;
        if (d > 1) for (; g < e.length - 2 && !(h < e[g + 1]); g++);
        const v = ra(e[g], e[g + 1], h);
        return c[g](v);
      };
    return n ? (h) => p(Vn(e[0], e[l - 1], h)) : p;
  }
  function tT(e, t) {
    const n = e[e.length - 1];
    for (let i = 1; i <= t; i++) {
      const a = ra(0, t, i);
      e.push(ht(n, 1, a));
    }
  }
  function rT(e) {
    const t = [0];
    return tT(t, e.length - 1), t;
  }
  function nT(e, t) {
    return e.map((n) => n * t);
  }
  function oT(e, t) {
    return e.map(() => t || Ay).splice(0, e.length - 1);
  }
  function ru({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: i = "easeInOut",
  }) {
    const a = WA(i) ? i.map(My) : My(i),
      l = { done: !1, value: t[0] },
      c = nT(n && n.length === t.length ? n : rT(t), e),
      d = eT(c, t, { ease: Array.isArray(a) ? a : oT(t, a) });
    return {
      calculatedDuration: e,
      next: (p) => ((l.value = d(p)), (l.done = p >= e), l),
    };
  }
  const iT = (e) => {
      const t = ({ timestamp: n }) => e(n);
      return {
        start: () => at.update(t, !0),
        stop: () => so(t),
        now: () => (Mt.isProcessing ? Mt.timestamp : xn.now()),
      };
    },
    aT = { decay: Oy, inertia: Oy, tween: ru, keyframes: ru, spring: jy },
    sT = (e) => e / 100;
  class jp extends Sy {
    constructor(t) {
      super(t),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          const { onStop: p } = this.options;
          p && p();
        });
      const {
          name: n,
          motionValue: i,
          element: a,
          keyframes: l,
        } = this.options,
        c = (a == null ? void 0 : a.KeyframeResolver) || fp,
        d = (p, h) => this.onKeyframesResolved(p, h);
      (this.resolver = new c(l, d, n, i, a)), this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes)
          );
    }
    initPlayback(t) {
      const {
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: a = 0,
          repeatType: l,
          velocity: c = 0,
        } = this.options,
        d = xp(n) ? n : aT[n] || ru;
      let p, h;
      d !== ru &&
        typeof t[0] != "number" &&
        ((p = Vs(sT, Fy(t[0], t[1]))), (t = [0, 100]));
      const g = d({ ...this.options, keyframes: t });
      l === "mirror" &&
        (h = d({ ...this.options, keyframes: [...t].reverse(), velocity: -c })),
        g.calculatedDuration === null && (g.calculatedDuration = Py(g));
      const { calculatedDuration: v } = g,
        b = v + a,
        k = b * (i + 1) - a;
      return {
        generator: g,
        mirroredGenerator: h,
        mapPercentToKeyframes: p,
        calculatedDuration: v,
        resolvedDuration: b,
        totalDuration: k,
      };
    }
    onPostResolved() {
      const { autoplay: t = !0 } = this.options;
      this.play(),
        this.pendingPlayState === "paused" || !t
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(t, n = !1) {
      const { resolved: i } = this;
      if (!i) {
        const { keyframes: H } = this.options;
        return { done: !0, value: H[H.length - 1] };
      }
      const {
        finalKeyframe: a,
        generator: l,
        mirroredGenerator: c,
        mapPercentToKeyframes: d,
        keyframes: p,
        calculatedDuration: h,
        totalDuration: g,
        resolvedDuration: v,
      } = i;
      if (this.startTime === null) return l.next(0);
      const {
        delay: b,
        repeat: k,
        repeatType: S,
        repeatDelay: w,
        onUpdate: _,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, t))
        : this.speed < 0 &&
          (this.startTime = Math.min(t - g / this.speed, this.startTime)),
        n
          ? (this.currentTime = t)
          : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
      const j = this.currentTime - b * (this.speed >= 0 ? 1 : -1),
        O = this.speed >= 0 ? j < 0 : j > g;
      (this.currentTime = Math.max(j, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = g);
      let M = this.currentTime,
        $ = l;
      if (k) {
        const H = Math.min(this.currentTime, g) / v;
        let G = Math.floor(H),
          q = H % 1;
        !q && H >= 1 && (q = 1),
          q === 1 && G--,
          (G = Math.min(G, k + 1)),
          G % 2 &&
            (S === "reverse"
              ? ((q = 1 - q), w && (q -= w / v))
              : S === "mirror" && ($ = c)),
          (M = Vn(0, 1, q) * v);
      }
      const E = O ? { done: !1, value: p[0] } : $.next(M);
      d && (E.value = d(E.value));
      let { done: I } = E;
      !O &&
        h !== null &&
        (I = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
      const L =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && I));
      return (
        L && a !== void 0 && (E.value = Yc(p, this.options, a)),
        _ && _(E.value),
        L && this.finish(),
        E
      );
    }
    get duration() {
      const { resolved: t } = this;
      return t ? Bn(t.calculatedDuration) : 0;
    }
    get time() {
      return Bn(this.currentTime);
    }
    set time(t) {
      (t = $n(t)),
        (this.currentTime = t),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = t)
          : this.driver &&
            (this.startTime = this.driver.now() - t / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      const n = this.playbackSpeed !== t;
      (this.playbackSpeed = t), n && (this.time = Bn(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      const { driver: t = iT, onPlay: n, startTime: i } = this.options;
      this.driver || (this.driver = t((l) => this.tick(l))), n && n();
      const a = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = a - this.holdTime)
        : this.startTime
        ? this.state === "finished" && (this.startTime = a)
        : (this.startTime = i ?? this.calcStartTime()),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var t;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      (this.state = "paused"),
        (this.holdTime =
          (t = this.currentTime) !== null && t !== void 0 ? t : 0);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      const { onComplete: t } = this.options;
      t && t();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(t) {
      return (this.startTime = 0), this.tick(t, !0);
    }
  }
  const lT = new Set(["opacity", "clipPath", "filter", "transform"]);
  function Op(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const cT = { linearEasing: void 0 };
  function uT(e, t) {
    const n = Op(e);
    return () => {
      var i;
      return (i = cT[t]) !== null && i !== void 0 ? i : n();
    };
  }
  const nu = uT(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing");
  function Ly(e) {
    return !!(
      (typeof e == "function" && nu()) ||
      !e ||
      (typeof e == "string" && (e in Ap || nu())) ||
      _p(e) ||
      (Array.isArray(e) && e.every(Ly))
    );
  }
  const Ws = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`,
    Ap = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: Ws([0, 0.65, 0.55, 1]),
      circOut: Ws([0.55, 0, 1, 0.45]),
      backIn: Ws([0.31, 0.01, 0.66, -0.59]),
      backOut: Ws([0.33, 1.53, 0.69, 0.99]),
    };
  function Ny(e, t) {
    if (e)
      return typeof e == "function" && nu()
        ? _y(e, t)
        : _p(e)
        ? Ws(e)
        : Array.isArray(e)
        ? e.map((n) => Ny(n, t) || Ap.easeOut)
        : Ap[e];
  }
  function dT(
    e,
    t,
    n,
    {
      delay: i = 0,
      duration: a = 300,
      repeat: l = 0,
      repeatType: c = "loop",
      ease: d = "easeInOut",
      times: p,
    } = {}
  ) {
    const h = { [t]: n };
    p && (h.offset = p);
    const g = Ny(d, a);
    return (
      Array.isArray(g) && (h.easing = g),
      e.animate(h, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: l + 1,
        direction: c === "reverse" ? "alternate" : "normal",
      })
    );
  }
  function $y(e, t) {
    (e.timeline = t), (e.onfinish = null);
  }
  const fT = Op(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    ou = 10,
    pT = 2e4;
  function hT(e) {
    return xp(e.type) || e.type === "spring" || !Ly(e.ease);
  }
  function mT(e, t) {
    const n = new jp({
      ...t,
      keyframes: e,
      repeat: 0,
      delay: 0,
      isGenerator: !0,
    });
    let i = { done: !1, value: e[0] };
    const a = [];
    let l = 0;
    for (; !i.done && l < pT; ) (i = n.sample(l)), a.push(i.value), (l += ou);
    return { times: void 0, keyframes: a, duration: l - ou, ease: "linear" };
  }
  const By = { anticipate: Xv, backInOut: Zv, circInOut: Qv };
  function gT(e) {
    return e in By;
  }
  class Vy extends Sy {
    constructor(t) {
      super(t);
      const {
        name: n,
        motionValue: i,
        element: a,
        keyframes: l,
      } = this.options;
      (this.resolver = new wy(
        l,
        (c, d) => this.onKeyframesResolved(c, d),
        n,
        i,
        a
      )),
        this.resolver.scheduleResolve();
    }
    initPlayback(t, n) {
      var i;
      let {
        duration: a = 300,
        times: l,
        ease: c,
        type: d,
        motionValue: p,
        name: h,
        startTime: g,
      } = this.options;
      if (!(!((i = p.owner) === null || i === void 0) && i.current)) return !1;
      if (
        (typeof c == "string" && nu() && gT(c) && (c = By[c]), hT(this.options))
      ) {
        const {
            onComplete: b,
            onUpdate: k,
            motionValue: S,
            element: w,
            ..._
          } = this.options,
          j = mT(t, _);
        (t = j.keyframes),
          t.length === 1 && (t[1] = t[0]),
          (a = j.duration),
          (l = j.times),
          (c = j.ease),
          (d = "keyframes");
      }
      const v = dT(p.owner.current, h, t, {
        ...this.options,
        duration: a,
        times: l,
        ease: c,
      });
      return (
        (v.startTime = g ?? this.calcStartTime()),
        this.pendingTimeline
          ? ($y(v, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (v.onfinish = () => {
              const { onComplete: b } = this.options;
              p.set(Yc(t, this.options, n)),
                b && b(),
                this.cancel(),
                this.resolveFinishedPromise();
            }),
        { animation: v, duration: a, times: l, type: d, ease: c, keyframes: t }
      );
    }
    get duration() {
      const { resolved: t } = this;
      if (!t) return 0;
      const { duration: n } = t;
      return Bn(n);
    }
    get time() {
      const { resolved: t } = this;
      if (!t) return 0;
      const { animation: n } = t;
      return Bn(n.currentTime || 0);
    }
    set time(t) {
      const { resolved: n } = this;
      if (!n) return;
      const { animation: i } = n;
      i.currentTime = $n(t);
    }
    get speed() {
      const { resolved: t } = this;
      if (!t) return 1;
      const { animation: n } = t;
      return n.playbackRate;
    }
    set speed(t) {
      const { resolved: n } = this;
      if (!n) return;
      const { animation: i } = n;
      i.playbackRate = t;
    }
    get state() {
      const { resolved: t } = this;
      if (!t) return "idle";
      const { animation: n } = t;
      return n.playState;
    }
    get startTime() {
      const { resolved: t } = this;
      if (!t) return null;
      const { animation: n } = t;
      return n.startTime;
    }
    attachTimeline(t) {
      if (!this._resolved) this.pendingTimeline = t;
      else {
        const { resolved: n } = this;
        if (!n) return xr;
        const { animation: i } = n;
        $y(i, t);
      }
      return xr;
    }
    play() {
      if (this.isStopped) return;
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.playState === "finished" && this.updateFinishedPromise(), n.play();
    }
    pause() {
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
      )
        return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const { resolved: t } = this;
      if (!t) return;
      const {
        animation: n,
        keyframes: i,
        duration: a,
        type: l,
        ease: c,
        times: d,
      } = t;
      if (n.playState === "idle" || n.playState === "finished") return;
      if (this.time) {
        const {
            motionValue: h,
            onUpdate: g,
            onComplete: v,
            element: b,
            ...k
          } = this.options,
          S = new jp({
            ...k,
            keyframes: i,
            duration: a,
            type: l,
            ease: c,
            times: d,
            isGenerator: !0,
          }),
          w = $n(this.time);
        h.setWithVelocity(S.sample(w - ou).value, S.sample(w).value, ou);
      }
      const { onStop: p } = this.options;
      p && p(), this.cancel();
    }
    complete() {
      const { resolved: t } = this;
      t && t.animation.finish();
    }
    cancel() {
      const { resolved: t } = this;
      t && t.animation.cancel();
    }
    static supports(t) {
      const {
        motionValue: n,
        name: i,
        repeatDelay: a,
        repeatType: l,
        damping: c,
        type: d,
      } = t;
      return (
        fT() &&
        i &&
        lT.has(i) &&
        n &&
        n.owner &&
        n.owner.current instanceof HTMLElement &&
        !n.owner.getProps().onUpdate &&
        !a &&
        l !== "mirror" &&
        c !== 0 &&
        d !== "inertia"
      );
    }
  }
  const vT = Op(() => window.ScrollTimeline !== void 0);
  class yT {
    constructor(t) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = t.filter(Boolean));
    }
    then(t, n) {
      return Promise.all(this.animations).then(t).catch(n);
    }
    getAll(t) {
      return this.animations[0][t];
    }
    setAll(t, n) {
      for (let i = 0; i < this.animations.length; i++)
        this.animations[i][t] = n;
    }
    attachTimeline(t, n) {
      const i = this.animations.map((a) =>
        vT() && a.attachTimeline ? a.attachTimeline(t) : n(a)
      );
      return () => {
        i.forEach((a, l) => {
          a && a(), this.animations[l].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(t) {
      this.setAll("time", t);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(t) {
      this.setAll("speed", t);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let t = 0;
      for (let n = 0; n < this.animations.length; n++)
        t = Math.max(t, this.animations[n].duration);
      return t;
    }
    runAll(t) {
      this.animations.forEach((n) => n[t]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  function bT({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: i,
    staggerDirection: a,
    repeat: l,
    repeatType: c,
    repeatDelay: d,
    from: p,
    elapsed: h,
    ...g
  }) {
    return !!Object.keys(g).length;
  }
  const Tp =
      (e, t, n, i = {}, a, l) =>
      (c) => {
        const d = op(i, e) || {},
          p = d.delay || i.delay || 0;
        let { elapsed: h = 0 } = i;
        h = h - $n(p);
        let g = {
          keyframes: Array.isArray(n) ? n : [null, n],
          ease: "easeOut",
          velocity: t.getVelocity(),
          ...d,
          delay: -h,
          onUpdate: (b) => {
            t.set(b), d.onUpdate && d.onUpdate(b);
          },
          onComplete: () => {
            c(), d.onComplete && d.onComplete();
          },
          name: e,
          motionValue: t,
          element: l ? void 0 : a,
        };
        bT(d) || (g = { ...g, ...UO(e, g) }),
          g.duration && (g.duration = $n(g.duration)),
          g.repeatDelay && (g.repeatDelay = $n(g.repeatDelay)),
          g.from !== void 0 && (g.keyframes[0] = g.from);
        let v = !1;
        if (
          ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
            ((g.duration = 0), g.delay === 0 && (v = !0)),
          v && !l && t.get() !== void 0)
        ) {
          const b = Yc(g.keyframes, d);
          if (b !== void 0)
            return (
              at.update(() => {
                g.onUpdate(b), g.onComplete();
              }),
              new yT([])
            );
        }
        return !l && Vy.supports(g) ? new Vy(g) : new jp(g);
      },
    xT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
    wT = (e) => (ep(e) ? e[e.length - 1] || 0 : e);
  function Mp(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function zp(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class Dp {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return Mp(this.subscriptions, t), () => zp(this.subscriptions, t);
    }
    notify(t, n, i) {
      const a = this.subscriptions.length;
      if (a)
        if (a === 1) this.subscriptions[0](t, n, i);
        else
          for (let l = 0; l < a; l++) {
            const c = this.subscriptions[l];
            c && c(t, n, i);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  const Wy = 30,
    kT = (e) => !isNaN(parseFloat(e));
  class ST {
    constructor(t, n = {}) {
      (this.version = "11.15.0"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (i, a = !0) => {
          const l = xn.now();
          this.updatedAt !== l && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(i),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            a &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(t),
        (this.owner = n.owner);
    }
    setCurrent(t) {
      (this.current = t),
        (this.updatedAt = xn.now()),
        this.canTrackVelocity === null &&
          t !== void 0 &&
          (this.canTrackVelocity = kT(this.current));
    }
    setPrevFrameValue(t = this.current) {
      (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(t) {
      return this.on("change", t);
    }
    on(t, n) {
      this.events[t] || (this.events[t] = new Dp());
      const i = this.events[t].add(n);
      return t === "change"
        ? () => {
            i(),
              at.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : i;
    }
    clearListeners() {
      for (const t in this.events) this.events[t].clear();
    }
    attach(t, n) {
      (this.passiveEffect = t), (this.stopPassiveEffect = n);
    }
    set(t, n = !0) {
      !n || !this.passiveEffect
        ? this.updateAndNotify(t, n)
        : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, i) {
      this.set(n),
        (this.prev = void 0),
        (this.prevFrameValue = t),
        (this.prevUpdatedAt = this.updatedAt - i);
    }
    jump(t, n = !0) {
      this.updateAndNotify(t),
        (this.prev = t),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const t = xn.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        t - this.updatedAt > Wy
      )
        return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, Wy);
      return Cy(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
    }
    start(t) {
      return (
        this.stop(),
        new Promise((n) => {
          (this.hasAnimated = !0),
            (this.animation = t(n)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function Us(e, t) {
    return new ST(e, t);
  }
  function _T(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Us(n));
  }
  function CT(e, t) {
    const n = Xc(e, t);
    let { transitionEnd: i = {}, transition: a = {}, ...l } = n || {};
    l = { ...l, ...i };
    for (const c in l) {
      const d = wT(l[c]);
      _T(e, c, d);
    }
  }
  const Ip = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    ET = "framerAppearId",
    Uy = "data-" + Ip(ET);
  function Hy(e) {
    return e.props[Uy];
  }
  const Lt = (e) => !!(e && e.getVelocity);
  function PT(e) {
    return !!(Lt(e) && e.add);
  }
  function Fp(e, t) {
    const n = e.getValue("willChange");
    if (PT(n)) return n.add(t);
  }
  function RT({ protectedKeys: e, needsAnimating: t }, n) {
    const i = e.hasOwnProperty(n) && t[n] !== !0;
    return (t[n] = !1), i;
  }
  function qy(e, t, { delay: n = 0, transitionOverride: i, type: a } = {}) {
    var l;
    let {
      transition: c = e.getDefaultTransition(),
      transitionEnd: d,
      ...p
    } = t;
    i && (c = i);
    const h = [],
      g = a && e.animationState && e.animationState.getState()[a];
    for (const v in p) {
      const b = e.getValue(
          v,
          (l = e.latestValues[v]) !== null && l !== void 0 ? l : null
        ),
        k = p[v];
      if (k === void 0 || (g && RT(g, v))) continue;
      const S = { delay: n, ...op(c || {}, v) };
      let w = !1;
      if (window.MotionHandoffAnimation) {
        const j = Hy(e);
        if (j) {
          const O = window.MotionHandoffAnimation(j, v, at);
          O !== null && ((S.startTime = O), (w = !0));
        }
      }
      Fp(e, v),
        b.start(
          Tp(
            v,
            b,
            k,
            e.shouldReduceMotion && Xo.has(v) ? { type: !1 } : S,
            e,
            w
          )
        );
      const _ = b.animation;
      _ && h.push(_);
    }
    return (
      d &&
        Promise.all(h).then(() => {
          at.update(() => {
            d && CT(e, d);
          });
        }),
      h
    );
  }
  function Lp(e, t, n = {}) {
    var i;
    const a = Xc(
      e,
      t,
      n.type === "exit"
        ? (i = e.presenceContext) === null || i === void 0
          ? void 0
          : i.custom
        : void 0
    );
    let { transition: l = e.getDefaultTransition() || {} } = a || {};
    n.transitionOverride && (l = n.transitionOverride);
    const c = a ? () => Promise.all(qy(e, a, n)) : () => Promise.resolve(),
      d =
        e.variantChildren && e.variantChildren.size
          ? (h = 0) => {
              const {
                delayChildren: g = 0,
                staggerChildren: v,
                staggerDirection: b,
              } = l;
              return jT(e, t, g + h, v, b, n);
            }
          : () => Promise.resolve(),
      { when: p } = l;
    if (p) {
      const [h, g] = p === "beforeChildren" ? [c, d] : [d, c];
      return h().then(() => g());
    } else return Promise.all([c(), d(n.delay)]);
  }
  function jT(e, t, n = 0, i = 0, a = 1, l) {
    const c = [],
      d = (e.variantChildren.size - 1) * i,
      p = a === 1 ? (h = 0) => h * i : (h = 0) => d - h * i;
    return (
      Array.from(e.variantChildren)
        .sort(OT)
        .forEach((h, g) => {
          h.notify("AnimationStart", t),
            c.push(
              Lp(h, t, { ...l, delay: n + p(g) }).then(() =>
                h.notify("AnimationComplete", t)
              )
            );
        }),
      Promise.all(c)
    );
  }
  function OT(e, t) {
    return e.sortNodePosition(t);
  }
  function AT(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let i;
    if (Array.isArray(t)) {
      const a = t.map((l) => Lp(e, l, n));
      i = Promise.all(a);
    } else if (typeof t == "string") i = Lp(e, t, n);
    else {
      const a = typeof t == "function" ? Xc(e, t, n.custom) : t;
      i = Promise.all(qy(e, a, n));
    }
    return i.then(() => {
      e.notify("AnimationComplete", t);
    });
  }
  const TT = np.length;
  function Ky(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
      const n = e.parent ? Ky(e.parent) || {} : {};
      return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
    }
    const t = {};
    for (let n = 0; n < TT; n++) {
      const i = np[n],
        a = e.props[i];
      (Ds(a) || a === !1) && (t[i] = a);
    }
    return t;
  }
  const MT = [...rp].reverse(),
    zT = rp.length;
  function DT(e) {
    return (t) =>
      Promise.all(t.map(({ animation: n, options: i }) => AT(e, n, i)));
  }
  function IT(e) {
    let t = DT(e),
      n = Gy(),
      i = !0;
    const a = (p) => (h, g) => {
      var v;
      const b = Xc(
        e,
        g,
        p === "exit"
          ? (v = e.presenceContext) === null || v === void 0
            ? void 0
            : v.custom
          : void 0
      );
      if (b) {
        const { transition: k, transitionEnd: S, ...w } = b;
        h = { ...h, ...w, ...S };
      }
      return h;
    };
    function l(p) {
      t = p(e);
    }
    function c(p) {
      const { props: h } = e,
        g = Ky(e.parent) || {},
        v = [],
        b = new Set();
      let k = {},
        S = 1 / 0;
      for (let _ = 0; _ < zT; _++) {
        const j = MT[_],
          O = n[j],
          M = h[j] !== void 0 ? h[j] : g[j],
          $ = Ds(M),
          E = j === p ? O.isActive : null;
        E === !1 && (S = _);
        let I = M === g[j] && M !== h[j] && $;
        if (
          (I && i && e.manuallyAnimateOnMount && (I = !1),
          (O.protectedKeys = { ...k }),
          (!O.isActive && E === null) ||
            (!M && !O.prevProp) ||
            Zc(M) ||
            typeof M == "boolean")
        )
          continue;
        const L = FT(O.prevProp, M);
        let H = L || (j === p && O.isActive && !I && $) || (_ > S && $),
          G = !1;
        const q = Array.isArray(M) ? M : [M];
        let ie = q.reduce(a(j), {});
        E === !1 && (ie = {});
        const { prevResolvedValues: he = {} } = O,
          ve = { ...he, ...ie },
          Ee = (J) => {
            (H = !0),
              b.has(J) && ((G = !0), b.delete(J)),
              (O.needsAnimating[J] = !0);
            const re = e.getValue(J);
            re && (re.liveStyle = !1);
          };
        for (const J in ve) {
          const re = ie[J],
            se = he[J];
          if (k.hasOwnProperty(J)) continue;
          let K = !1;
          ep(re) && ep(se) ? (K = !Vv(re, se)) : (K = re !== se),
            K
              ? re != null
                ? Ee(J)
                : b.add(J)
              : re !== void 0 && b.has(J)
              ? Ee(J)
              : (O.protectedKeys[J] = !0);
        }
        (O.prevProp = M),
          (O.prevResolvedValues = ie),
          O.isActive && (k = { ...k, ...ie }),
          i && e.blockInitialAnimation && (H = !1),
          H &&
            (!(I && L) || G) &&
            v.push(...q.map((J) => ({ animation: J, options: { type: j } })));
      }
      if (b.size) {
        const _ = {};
        b.forEach((j) => {
          const O = e.getBaseTarget(j),
            M = e.getValue(j);
          M && (M.liveStyle = !0), (_[j] = O ?? null);
        }),
          v.push({ animation: _ });
      }
      let w = !!v.length;
      return (
        i &&
          (h.initial === !1 || h.initial === h.animate) &&
          !e.manuallyAnimateOnMount &&
          (w = !1),
        (i = !1),
        w ? t(v) : Promise.resolve()
      );
    }
    function d(p, h) {
      var g;
      if (n[p].isActive === h) return Promise.resolve();
      (g = e.variantChildren) === null ||
        g === void 0 ||
        g.forEach((b) => {
          var k;
          return (k = b.animationState) === null || k === void 0
            ? void 0
            : k.setActive(p, h);
        }),
        (n[p].isActive = h);
      const v = c(p);
      for (const b in n) n[b].protectedKeys = {};
      return v;
    }
    return {
      animateChanges: c,
      setActive: d,
      setAnimateFunction: l,
      getState: () => n,
      reset: () => {
        (n = Gy()), (i = !0);
      },
    };
  }
  function FT(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Vv(t, e) : !1;
  }
  function Jo(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function Gy() {
    return {
      animate: Jo(!0),
      whileInView: Jo(),
      whileHover: Jo(),
      whileTap: Jo(),
      whileDrag: Jo(),
      whileFocus: Jo(),
      exit: Jo(),
    };
  }
  class uo {
    constructor(t) {
      (this.isMounted = !1), (this.node = t);
    }
    update() {}
  }
  class LT extends uo {
    constructor(t) {
      super(t), t.animationState || (t.animationState = IT(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      Zc(t) && (this.unmountControls = t.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: t } = this.node.getProps(),
        { animate: n } = this.node.prevProps || {};
      t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var t;
      this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this);
    }
  }
  let NT = 0;
  class $T extends uo {
    constructor() {
      super(...arguments), (this.id = NT++);
    }
    update() {
      if (!this.node.presenceContext) return;
      const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
        { isPresent: i } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === i) return;
      const a = this.node.animationState.setActive("exit", !t);
      n && !t && a.then(() => n(this.id));
    }
    mount() {
      const { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
    }
    unmount() {}
  }
  const BT = { animation: { Feature: LT }, exit: { Feature: $T } },
    Qr = { x: !1, y: !1 };
  function Zy() {
    return Qr.x || Qr.y;
  }
  function VT(e, t, n) {
    var i;
    if (e instanceof Element) return [e];
    if (typeof e == "string") {
      let a = document;
      const l =
        (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(e);
      return l ? Array.from(l) : [];
    }
    return Array.from(e);
  }
  function Xy(e, t) {
    const n = VT(e),
      i = new AbortController(),
      a = { passive: !0, ...t, signal: i.signal };
    return [n, a, () => i.abort()];
  }
  function Yy(e) {
    return (t) => {
      t.pointerType === "touch" || Zy() || e(t);
    };
  }
  function WT(e, t, n = {}) {
    const [i, a, l] = Xy(e, n),
      c = Yy((d) => {
        const { target: p } = d,
          h = t(d);
        if (!h || !p) return;
        const g = Yy((v) => {
          h(v), p.removeEventListener("pointerleave", g);
        });
        p.addEventListener("pointerleave", g, a);
      });
    return (
      i.forEach((d) => {
        d.addEventListener("pointerenter", c, a);
      }),
      l
    );
  }
  const Np = (e) =>
      e.pointerType === "mouse"
        ? typeof e.button != "number" || e.button <= 0
        : e.isPrimary !== !1,
    Hs = new WeakSet();
  function Qy(e) {
    return (t) => {
      t.key === "Enter" && e(t);
    };
  }
  function $p(e, t) {
    e.dispatchEvent(
      new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
    );
  }
  const UT = (e, t) => {
      const n = e.currentTarget;
      if (!n) return;
      const i = Qy(() => {
        if (Hs.has(n)) return;
        $p(n, "down");
        const a = Qy(() => {
            $p(n, "up");
          }),
          l = () => $p(n, "cancel");
        n.addEventListener("keyup", a, t), n.addEventListener("blur", l, t);
      });
      n.addEventListener("keydown", i, t),
        n.addEventListener(
          "blur",
          () => n.removeEventListener("keydown", i),
          t
        );
    },
    HT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  function qT(e) {
    return HT.has(e.tagName) || e.tabIndex !== -1;
  }
  const Jy = (e, t) => (t ? (e === t ? !0 : Jy(e, t.parentElement)) : !1);
  function eb(e) {
    return Np(e) && !Zy();
  }
  function KT(e, t, n = {}) {
    const [i, a, l] = Xy(e, n),
      c = (d) => {
        const p = d.currentTarget;
        if (!eb(d) || Hs.has(p)) return;
        Hs.add(p);
        const h = t(d),
          g = (k, S) => {
            window.removeEventListener("pointerup", v),
              window.removeEventListener("pointercancel", b),
              !(!eb(k) || !Hs.has(p)) &&
                (Hs.delete(p), h && h(k, { success: S }));
          },
          v = (k) => {
            g(k, n.useGlobalTarget || Jy(p, k.target));
          },
          b = (k) => {
            g(k, !1);
          };
        window.addEventListener("pointerup", v, a),
          window.addEventListener("pointercancel", b, a);
      };
    return (
      i.forEach((d) => {
        qT(d) || (d.tabIndex = 0),
          (n.useGlobalTarget ? window : d).addEventListener(
            "pointerdown",
            c,
            a
          ),
          d.addEventListener("focus", (p) => UT(p, a), a);
      }),
      l
    );
  }
  function GT(e) {
    return e === "x" || e === "y"
      ? Qr[e]
        ? null
        : ((Qr[e] = !0),
          () => {
            Qr[e] = !1;
          })
      : Qr.x || Qr.y
      ? null
      : ((Qr.x = Qr.y = !0),
        () => {
          Qr.x = Qr.y = !1;
        });
  }
  function qs(e) {
    return { point: { x: e.pageX, y: e.pageY } };
  }
  const ZT = (e) => (t) => Np(t) && e(t, qs(t));
  function Ks(e, t, n, i = { passive: !0 }) {
    return e.addEventListener(t, n, i), () => e.removeEventListener(t, n);
  }
  function Gs(e, t, n, i) {
    return Ks(e, t, ZT(n), i);
  }
  const tb = (e, t) => Math.abs(e - t);
  function XT(e, t) {
    const n = tb(e.x, t.x),
      i = tb(e.y, t.y);
    return Math.sqrt(n ** 2 + i ** 2);
  }
  class rb {
    constructor(
      t,
      n,
      { transformPagePoint: i, contextWindow: a, dragSnapToOrigin: l = !1 } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const v = Vp(this.lastMoveEventInfo, this.history),
            b = this.startEvent !== null,
            k = XT(v.offset, { x: 0, y: 0 }) >= 3;
          if (!b && !k) return;
          const { point: S } = v,
            { timestamp: w } = Mt;
          this.history.push({ ...S, timestamp: w });
          const { onStart: _, onMove: j } = this.handlers;
          b ||
            (_ && _(this.lastMoveEvent, v),
            (this.startEvent = this.lastMoveEvent)),
            j && j(this.lastMoveEvent, v);
        }),
        (this.handlePointerMove = (v, b) => {
          (this.lastMoveEvent = v),
            (this.lastMoveEventInfo = Bp(b, this.transformPagePoint)),
            at.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (v, b) => {
          this.end();
          const {
            onEnd: k,
            onSessionEnd: S,
            resumeAnimation: w,
          } = this.handlers;
          if (
            (this.dragSnapToOrigin && w && w(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const _ = Vp(
            v.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Bp(b, this.transformPagePoint),
            this.history
          );
          this.startEvent && k && k(v, _), S && S(v, _);
        }),
        !Np(t))
      )
        return;
      (this.dragSnapToOrigin = l),
        (this.handlers = n),
        (this.transformPagePoint = i),
        (this.contextWindow = a || window);
      const c = qs(t),
        d = Bp(c, this.transformPagePoint),
        { point: p } = d,
        { timestamp: h } = Mt;
      this.history = [{ ...p, timestamp: h }];
      const { onSessionStart: g } = n;
      g && g(t, Vp(d, this.history)),
        (this.removeListeners = Vs(
          Gs(this.contextWindow, "pointermove", this.handlePointerMove),
          Gs(this.contextWindow, "pointerup", this.handlePointerUp),
          Gs(this.contextWindow, "pointercancel", this.handlePointerUp)
        ));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), so(this.updatePoint);
    }
  }
  function Bp(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function nb(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function Vp({ point: e }, t) {
    return {
      point: e,
      delta: nb(e, ob(t)),
      offset: nb(e, YT(t)),
      velocity: QT(t, 0.1),
    };
  }
  function YT(e) {
    return e[0];
  }
  function ob(e) {
    return e[e.length - 1];
  }
  function QT(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
      i = null;
    const a = ob(e);
    for (; n >= 0 && ((i = e[n]), !(a.timestamp - i.timestamp > $n(t))); ) n--;
    if (!i) return { x: 0, y: 0 };
    const l = Bn(a.timestamp - i.timestamp);
    if (l === 0) return { x: 0, y: 0 };
    const c = { x: (a.x - i.x) / l, y: (a.y - i.y) / l };
    return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
  }
  function na(e) {
    return (
      e &&
      typeof e == "object" &&
      Object.prototype.hasOwnProperty.call(e, "current")
    );
  }
  const ib = 1e-4,
    JT = 1 - ib,
    e6 = 1 + ib,
    ab = 0.01,
    t6 = 0 - ab,
    r6 = 0 + ab;
  function wr(e) {
    return e.max - e.min;
  }
  function n6(e, t, n) {
    return Math.abs(e - t) <= n;
  }
  function sb(e, t, n, i = 0.5) {
    (e.origin = i),
      (e.originPoint = ht(t.min, t.max, e.origin)),
      (e.scale = wr(n) / wr(t)),
      (e.translate = ht(n.min, n.max, e.origin) - e.originPoint),
      ((e.scale >= JT && e.scale <= e6) || isNaN(e.scale)) && (e.scale = 1),
      ((e.translate >= t6 && e.translate <= r6) || isNaN(e.translate)) &&
        (e.translate = 0);
  }
  function Zs(e, t, n, i) {
    sb(e.x, t.x, n.x, i ? i.originX : void 0),
      sb(e.y, t.y, n.y, i ? i.originY : void 0);
  }
  function lb(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + wr(t));
  }
  function o6(e, t, n) {
    lb(e.x, t.x, n.x), lb(e.y, t.y, n.y);
  }
  function cb(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + wr(t));
  }
  function Xs(e, t, n) {
    cb(e.x, t.x, n.x), cb(e.y, t.y, n.y);
  }
  function i6(e, { min: t, max: n }, i) {
    return (
      t !== void 0 && e < t
        ? (e = i ? ht(t, e, i.min) : Math.max(e, t))
        : n !== void 0 && e > n && (e = i ? ht(n, e, i.max) : Math.min(e, n)),
      e
    );
  }
  function ub(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
    };
  }
  function a6(e, { top: t, left: n, bottom: i, right: a }) {
    return { x: ub(e.x, n, a), y: ub(e.y, t, i) };
  }
  function db(e, t) {
    let n = t.min - e.min,
      i = t.max - e.max;
    return (
      t.max - t.min < e.max - e.min && ([n, i] = [i, n]), { min: n, max: i }
    );
  }
  function s6(e, t) {
    return { x: db(e.x, t.x), y: db(e.y, t.y) };
  }
  function l6(e, t) {
    let n = 0.5;
    const i = wr(e),
      a = wr(t);
    return (
      a > i
        ? (n = ra(t.min, t.max - i, e.min))
        : i > a && (n = ra(e.min, e.max - a, t.min)),
      Vn(0, 1, n)
    );
  }
  function c6(e, t) {
    const n = {};
    return (
      t.min !== void 0 && (n.min = t.min - e.min),
      t.max !== void 0 && (n.max = t.max - e.min),
      n
    );
  }
  const Wp = 0.35;
  function u6(e = Wp) {
    return (
      e === !1 ? (e = 0) : e === !0 && (e = Wp),
      { x: fb(e, "left", "right"), y: fb(e, "top", "bottom") }
    );
  }
  function fb(e, t, n) {
    return { min: pb(e, t), max: pb(e, n) };
  }
  function pb(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const hb = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    oa = () => ({ x: hb(), y: hb() }),
    mb = () => ({ min: 0, max: 0 }),
    wt = () => ({ x: mb(), y: mb() });
  function Ar(e) {
    return [e("x"), e("y")];
  }
  function gb({ top: e, left: t, right: n, bottom: i }) {
    return { x: { min: t, max: n }, y: { min: e, max: i } };
  }
  function d6({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function f6(e, t) {
    if (!t) return e;
    const n = t({ x: e.left, y: e.top }),
      i = t({ x: e.right, y: e.bottom });
    return { top: n.y, left: n.x, bottom: i.y, right: i.x };
  }
  function Up(e) {
    return e === void 0 || e === 1;
  }
  function Hp({ scale: e, scaleX: t, scaleY: n }) {
    return !Up(e) || !Up(t) || !Up(n);
  }
  function ei(e) {
    return (
      Hp(e) ||
      vb(e) ||
      e.z ||
      e.rotate ||
      e.rotateX ||
      e.rotateY ||
      e.skewX ||
      e.skewY
    );
  }
  function vb(e) {
    return yb(e.x) || yb(e.y);
  }
  function yb(e) {
    return e && e !== "0%";
  }
  function iu(e, t, n) {
    const i = e - n,
      a = t * i;
    return n + a;
  }
  function bb(e, t, n, i, a) {
    return a !== void 0 && (e = iu(e, a, i)), iu(e, n, i) + t;
  }
  function qp(e, t = 0, n = 1, i, a) {
    (e.min = bb(e.min, t, n, i, a)), (e.max = bb(e.max, t, n, i, a));
  }
  function xb(e, { x: t, y: n }) {
    qp(e.x, t.translate, t.scale, t.originPoint),
      qp(e.y, n.translate, n.scale, n.originPoint);
  }
  const wb = 0.999999999999,
    kb = 1.0000000000001;
  function p6(e, t, n, i = !1) {
    const a = n.length;
    if (!a) return;
    t.x = t.y = 1;
    let l, c;
    for (let d = 0; d < a; d++) {
      (l = n[d]), (c = l.projectionDelta);
      const { visualElement: p } = l.options;
      (p && p.props.style && p.props.style.display === "contents") ||
        (i &&
          l.options.layoutScroll &&
          l.scroll &&
          l !== l.root &&
          aa(e, { x: -l.scroll.offset.x, y: -l.scroll.offset.y }),
        c && ((t.x *= c.x.scale), (t.y *= c.y.scale), xb(e, c)),
        i && ei(l.latestValues) && aa(e, l.latestValues));
    }
    t.x < kb && t.x > wb && (t.x = 1), t.y < kb && t.y > wb && (t.y = 1);
  }
  function ia(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
  }
  function Sb(e, t, n, i, a = 0.5) {
    const l = ht(e.min, e.max, a);
    qp(e, t, n, l, i);
  }
  function aa(e, t) {
    Sb(e.x, t.x, t.scaleX, t.scale, t.originX),
      Sb(e.y, t.y, t.scaleY, t.scale, t.originY);
  }
  function _b(e, t) {
    return gb(f6(e.getBoundingClientRect(), t));
  }
  function h6(e, t, n) {
    const i = _b(e, n),
      { scroll: a } = t;
    return a && (ia(i.x, a.offset.x), ia(i.y, a.offset.y)), i;
  }
  const Cb = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
    m6 = new WeakMap();
  class g6 {
    constructor(t) {
      (this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = wt()),
        (this.visualElement = t);
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: i } = this.visualElement;
      if (i && i.isPresent === !1) return;
      const a = (g) => {
          const { dragSnapToOrigin: v } = this.getProps();
          v ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(qs(g).point);
        },
        l = (g, v) => {
          const {
            drag: b,
            dragPropagation: k,
            onDragStart: S,
          } = this.getProps();
          if (
            b &&
            !k &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = GT(b)),
            !this.openDragLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Ar((_) => {
              let j = this.getAxisMotionValue(_).get() || 0;
              if (bn.test(j)) {
                const { projection: O } = this.visualElement;
                if (O && O.layout) {
                  const M = O.layout.layoutBox[_];
                  M && (j = wr(M) * (parseFloat(j) / 100));
                }
              }
              this.originPoint[_] = j;
            }),
            S && at.postRender(() => S(g, v)),
            Fp(this.visualElement, "transform");
          const { animationState: w } = this.visualElement;
          w && w.setActive("whileDrag", !0);
        },
        c = (g, v) => {
          const {
            dragPropagation: b,
            dragDirectionLock: k,
            onDirectionLock: S,
            onDrag: w,
          } = this.getProps();
          if (!b && !this.openDragLock) return;
          const { offset: _ } = v;
          if (k && this.currentDirection === null) {
            (this.currentDirection = v6(_)),
              this.currentDirection !== null && S && S(this.currentDirection);
            return;
          }
          this.updateAxis("x", v.point, _),
            this.updateAxis("y", v.point, _),
            this.visualElement.render(),
            w && w(g, v);
        },
        d = (g, v) => this.stop(g, v),
        p = () =>
          Ar((g) => {
            var v;
            return (
              this.getAnimationState(g) === "paused" &&
              ((v = this.getAxisMotionValue(g).animation) === null ||
              v === void 0
                ? void 0
                : v.play())
            );
          }),
        { dragSnapToOrigin: h } = this.getProps();
      this.panSession = new rb(
        t,
        {
          onSessionStart: a,
          onStart: l,
          onMove: c,
          onSessionEnd: d,
          resumeAnimation: p,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: h,
          contextWindow: Cb(this.visualElement),
        }
      );
    }
    stop(t, n) {
      const i = this.isDragging;
      if ((this.cancel(), !i)) return;
      const { velocity: a } = n;
      this.startAnimation(a);
      const { onDragEnd: l } = this.getProps();
      l && at.postRender(() => l(t, n));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: t, animationState: n } = this.visualElement;
      t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      const { dragPropagation: i } = this.getProps();
      !i &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, i) {
      const { drag: a } = this.getProps();
      if (!i || !au(t, a, this.currentDirection)) return;
      const l = this.getAxisMotionValue(t);
      let c = this.originPoint[t] + i[t];
      this.constraints &&
        this.constraints[t] &&
        (c = i6(c, this.constraints[t], this.elastic[t])),
        l.set(c);
    }
    resolveConstraints() {
      var t;
      const { dragConstraints: n, dragElastic: i } = this.getProps(),
        a =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
        l = this.constraints;
      n && na(n)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : n && a
        ? (this.constraints = a6(a.layoutBox, n))
        : (this.constraints = !1),
        (this.elastic = u6(i)),
        l !== this.constraints &&
          a &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Ar((c) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(c) &&
              (this.constraints[c] = c6(a.layoutBox[c], this.constraints[c]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } =
        this.getProps();
      if (!t || !na(t)) return !1;
      const i = t.current,
        { projection: a } = this.visualElement;
      if (!a || !a.layout) return !1;
      const l = h6(i, a.root, this.visualElement.getTransformPagePoint());
      let c = s6(a.layout.layoutBox, l);
      if (n) {
        const d = n(d6(c));
        (this.hasMutatedConstraints = !!d), d && (c = gb(d));
      }
      return c;
    }
    startAnimation(t) {
      const {
          drag: n,
          dragMomentum: i,
          dragElastic: a,
          dragTransition: l,
          dragSnapToOrigin: c,
          onDragTransitionEnd: d,
        } = this.getProps(),
        p = this.constraints || {},
        h = Ar((g) => {
          if (!au(g, n, this.currentDirection)) return;
          let v = p[g] || {};
          c && (v = { min: 0, max: 0 });
          const b = a ? 200 : 1e6,
            k = a ? 40 : 1e7,
            S = {
              type: "inertia",
              velocity: i ? t[g] : 0,
              bounceStiffness: b,
              bounceDamping: k,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...l,
              ...v,
            };
          return this.startAxisValueAnimation(g, S);
        });
      return Promise.all(h).then(d);
    }
    startAxisValueAnimation(t, n) {
      const i = this.getAxisMotionValue(t);
      return (
        Fp(this.visualElement, t),
        i.start(Tp(t, i, 0, n, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Ar((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      Ar((t) => {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null ||
          n === void 0
          ? void 0
          : n.pause();
      });
    }
    getAnimationState(t) {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.state;
    }
    getAxisMotionValue(t) {
      const n = `_drag${t.toUpperCase()}`,
        i = this.visualElement.getProps();
      return (
        i[n] ||
        this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
      );
    }
    snapToCursor(t) {
      Ar((n) => {
        const { drag: i } = this.getProps();
        if (!au(n, i, this.currentDirection)) return;
        const { projection: a } = this.visualElement,
          l = this.getAxisMotionValue(n);
        if (a && a.layout) {
          const { min: c, max: d } = a.layout.layoutBox[n];
          l.set(t[n] - ht(c, d, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: t, dragConstraints: n } = this.getProps(),
        { projection: i } = this.visualElement;
      if (!na(n) || !i || !this.constraints) return;
      this.stopAnimation();
      const a = { x: 0, y: 0 };
      Ar((c) => {
        const d = this.getAxisMotionValue(c);
        if (d && this.constraints !== !1) {
          const p = d.get();
          a[c] = l6({ min: p, max: p }, this.constraints[c]);
        }
      });
      const { transformTemplate: l } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = l ? l({}, "") : "none"),
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        Ar((c) => {
          if (!au(c, t, null)) return;
          const d = this.getAxisMotionValue(c),
            { min: p, max: h } = this.constraints[c];
          d.set(ht(p, h, a[c]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      m6.set(this.visualElement, this);
      const t = this.visualElement.current,
        n = Gs(t, "pointerdown", (p) => {
          const { drag: h, dragListener: g = !0 } = this.getProps();
          h && g && this.start(p);
        }),
        i = () => {
          const { dragConstraints: p } = this.getProps();
          na(p) &&
            p.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: a } = this.visualElement,
        l = a.addEventListener("measure", i);
      a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()),
        at.read(i);
      const c = Ks(window, "resize", () =>
          this.scalePositionWithinConstraints()
        ),
        d = a.addEventListener(
          "didUpdate",
          ({ delta: p, hasLayoutChanged: h }) => {
            this.isDragging &&
              h &&
              (Ar((g) => {
                const v = this.getAxisMotionValue(g);
                v &&
                  ((this.originPoint[g] += p[g].translate),
                  v.set(v.get() + p[g].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        c(), n(), l(), d && d();
      };
    }
    getProps() {
      const t = this.visualElement.getProps(),
        {
          drag: n = !1,
          dragDirectionLock: i = !1,
          dragPropagation: a = !1,
          dragConstraints: l = !1,
          dragElastic: c = Wp,
          dragMomentum: d = !0,
        } = t;
      return {
        ...t,
        drag: n,
        dragDirectionLock: i,
        dragPropagation: a,
        dragConstraints: l,
        dragElastic: c,
        dragMomentum: d,
      };
    }
  }
  function au(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function v6(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
  }
  class y6 extends uo {
    constructor(t) {
      super(t),
        (this.removeGroupControls = xr),
        (this.removeListeners = xr),
        (this.controls = new g6(t));
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || xr);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const Eb = (e) => (t, n) => {
    e && at.postRender(() => e(t, n));
  };
  class b6 extends uo {
    constructor() {
      super(...arguments), (this.removePointerDownListener = xr);
    }
    onPointerDown(t) {
      this.session = new rb(t, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Cb(this.node),
      });
    }
    createPanHandlers() {
      const {
        onPanSessionStart: t,
        onPanStart: n,
        onPan: i,
        onPanEnd: a,
      } = this.node.getProps();
      return {
        onSessionStart: Eb(t),
        onStart: Eb(n),
        onMove: i,
        onEnd: (l, c) => {
          delete this.session, a && at.postRender(() => a(l, c));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Gs(
        this.node.current,
        "pointerdown",
        (t) => this.onPointerDown(t)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  const Ys = x.createContext(null);
  function Pb() {
    const e = x.useContext(Ys);
    if (e === null) return [!0, null];
    const { isPresent: t, onExitComplete: n, register: i } = e,
      a = x.useId();
    x.useEffect(() => i(a), []);
    const l = x.useCallback(() => n && n(a), [a, n]);
    return !t && n ? [!1, l] : [!0];
  }
  function x6() {
    return w6(x.useContext(Ys));
  }
  function w6(e) {
    return e === null ? !0 : e.isPresent;
  }
  const Kp = x.createContext({}),
    Rb = x.createContext({}),
    su = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  function jb(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
  }
  const Qs = {
      correct: (e, t) => {
        if (!t.target) return e;
        if (typeof e == "string")
          if (_e.test(e)) e = parseFloat(e);
          else return e;
        const n = jb(e, t.target.x),
          i = jb(e, t.target.y);
        return `${n}% ${i}%`;
      },
    },
    k6 = {
      correct: (e, { treeScale: t, projectionDelta: n }) => {
        const i = e,
          a = co.parse(e);
        if (a.length > 5) return i;
        const l = co.createTransformer(e),
          c = typeof a[0] != "number" ? 1 : 0,
          d = n.x.scale * t.x,
          p = n.y.scale * t.y;
        (a[0 + c] /= d), (a[1 + c] /= p);
        const h = ht(d, p, 0.5);
        return (
          typeof a[2 + c] == "number" && (a[2 + c] /= h),
          typeof a[3 + c] == "number" && (a[3 + c] /= h),
          l(a)
        );
      },
    },
    lu = {};
  function S6(e) {
    Object.assign(lu, e);
  }
  const { schedule: Gp, cancel: kB } = Uv(queueMicrotask, !1);
  class _6 extends x.Component {
    componentDidMount() {
      const {
          visualElement: t,
          layoutGroup: n,
          switchLayoutGroup: i,
          layoutId: a,
        } = this.props,
        { projection: l } = t;
      S6(C6),
        l &&
          (n.group && n.group.add(l),
          i && i.register && a && i.register(l),
          l.root.didUpdate(),
          l.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          l.setOptions({
            ...l.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (su.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(t) {
      const {
          layoutDependency: n,
          visualElement: i,
          drag: a,
          isPresent: l,
        } = this.props,
        c = i.projection;
      return (
        c &&
          ((c.isPresent = l),
          a || t.layoutDependency !== n || n === void 0
            ? c.willUpdate()
            : this.safeToRemove(),
          t.isPresent !== l &&
            (l
              ? c.promote()
              : c.relegate() ||
                at.postRender(() => {
                  const d = c.getStack();
                  (!d || !d.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t &&
        (t.root.didUpdate(),
        Gp.postRender(() => {
          !t.currentAnimation && t.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: t,
          layoutGroup: n,
          switchLayoutGroup: i,
        } = this.props,
        { projection: a } = t;
      a &&
        (a.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(a),
        i && i.deregister && i.deregister(a));
    }
    safeToRemove() {
      const { safeToRemove: t } = this.props;
      t && t();
    }
    render() {
      return null;
    }
  }
  function Ob(e) {
    const [t, n] = Pb(),
      i = x.useContext(Kp);
    return R.jsx(_6, {
      ...e,
      layoutGroup: i,
      switchLayoutGroup: x.useContext(Rb),
      isPresent: t,
      safeToRemove: n,
    });
  }
  const C6 = {
      borderRadius: {
        ...Qs,
        applyTo: [
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ],
      },
      borderTopLeftRadius: Qs,
      borderTopRightRadius: Qs,
      borderBottomLeftRadius: Qs,
      borderBottomRightRadius: Qs,
      boxShadow: k6,
    },
    Ab = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    E6 = Ab.length,
    Tb = (e) => (typeof e == "string" ? parseFloat(e) : e),
    Mb = (e) => typeof e == "number" || _e.test(e);
  function P6(e, t, n, i, a, l) {
    a
      ? ((e.opacity = ht(0, n.opacity !== void 0 ? n.opacity : 1, R6(i))),
        (e.opacityExit = ht(t.opacity !== void 0 ? t.opacity : 1, 0, j6(i))))
      : l &&
        (e.opacity = ht(
          t.opacity !== void 0 ? t.opacity : 1,
          n.opacity !== void 0 ? n.opacity : 1,
          i
        ));
    for (let c = 0; c < E6; c++) {
      const d = `border${Ab[c]}Radius`;
      let p = zb(t, d),
        h = zb(n, d);
      (p === void 0 && h === void 0) ||
        (p || (p = 0),
        h || (h = 0),
        p === 0 || h === 0 || Mb(p) === Mb(h)
          ? ((e[d] = Math.max(ht(Tb(p), Tb(h), i), 0)),
            (bn.test(h) || bn.test(p)) && (e[d] += "%"))
          : (e[d] = h));
    }
    (t.rotate || n.rotate) && (e.rotate = ht(t.rotate || 0, n.rotate || 0, i));
  }
  function zb(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const R6 = Db(0, 0.5, Yv),
    j6 = Db(0.5, 0.95, xr);
  function Db(e, t, n) {
    return (i) => (i < e ? 0 : i > t ? 1 : n(ra(e, t, i)));
  }
  function Ib(e, t) {
    (e.min = t.min), (e.max = t.max);
  }
  function Tr(e, t) {
    Ib(e.x, t.x), Ib(e.y, t.y);
  }
  function Fb(e, t) {
    (e.translate = t.translate),
      (e.scale = t.scale),
      (e.originPoint = t.originPoint),
      (e.origin = t.origin);
  }
  function Lb(e, t, n, i, a) {
    return (
      (e -= t), (e = iu(e, 1 / n, i)), a !== void 0 && (e = iu(e, 1 / a, i)), e
    );
  }
  function O6(e, t = 0, n = 1, i = 0.5, a, l = e, c = e) {
    if (
      (bn.test(t) &&
        ((t = parseFloat(t)), (t = ht(c.min, c.max, t / 100) - c.min)),
      typeof t != "number")
    )
      return;
    let d = ht(l.min, l.max, i);
    e === l && (d -= t),
      (e.min = Lb(e.min, t, n, d, a)),
      (e.max = Lb(e.max, t, n, d, a));
  }
  function Nb(e, t, [n, i, a], l, c) {
    O6(e, t[n], t[i], t[a], t.scale, l, c);
  }
  const A6 = ["x", "scaleX", "originX"],
    T6 = ["y", "scaleY", "originY"];
  function $b(e, t, n, i) {
    Nb(e.x, t, A6, n ? n.x : void 0, i ? i.x : void 0),
      Nb(e.y, t, T6, n ? n.y : void 0, i ? i.y : void 0);
  }
  function Bb(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function Vb(e) {
    return Bb(e.x) && Bb(e.y);
  }
  function Wb(e, t) {
    return e.min === t.min && e.max === t.max;
  }
  function M6(e, t) {
    return Wb(e.x, t.x) && Wb(e.y, t.y);
  }
  function Ub(e, t) {
    return (
      Math.round(e.min) === Math.round(t.min) &&
      Math.round(e.max) === Math.round(t.max)
    );
  }
  function Hb(e, t) {
    return Ub(e.x, t.x) && Ub(e.y, t.y);
  }
  function qb(e) {
    return wr(e.x) / wr(e.y);
  }
  function Kb(e, t) {
    return (
      e.translate === t.translate &&
      e.scale === t.scale &&
      e.originPoint === t.originPoint
    );
  }
  class z6 {
    constructor() {
      this.members = [];
    }
    add(t) {
      Mp(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (
        (zp(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead)
      ) {
        const n = this.members[this.members.length - 1];
        n && this.promote(n);
      }
    }
    relegate(t) {
      const n = this.members.findIndex((a) => t === a);
      if (n === 0) return !1;
      let i;
      for (let a = n; a >= 0; a--) {
        const l = this.members[a];
        if (l.isPresent !== !1) {
          i = l;
          break;
        }
      }
      return i ? (this.promote(i), !0) : !1;
    }
    promote(t, n) {
      const i = this.lead;
      if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
        i.instance && i.scheduleRender(),
          t.scheduleRender(),
          (t.resumeFrom = i),
          n && (t.resumeFrom.preserveOpacity = !0),
          i.snapshot &&
            ((t.snapshot = i.snapshot),
            (t.snapshot.latestValues = i.animationValues || i.latestValues)),
          t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
        const { crossfade: a } = t.options;
        a === !1 && i.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t) => {
        const { options: n, resumingFrom: i } = t;
        n.onExitComplete && n.onExitComplete(),
          i && i.options.onExitComplete && i.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((t) => {
        t.instance && t.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  function D6(e, t, n) {
    let i = "";
    const a = e.x.translate / t.x,
      l = e.y.translate / t.y,
      c = (n == null ? void 0 : n.z) || 0;
    if (
      ((a || l || c) && (i = `translate3d(${a}px, ${l}px, ${c}px) `),
      (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
      n)
    ) {
      const {
        transformPerspective: h,
        rotate: g,
        rotateX: v,
        rotateY: b,
        skewX: k,
        skewY: S,
      } = n;
      h && (i = `perspective(${h}px) ${i}`),
        g && (i += `rotate(${g}deg) `),
        v && (i += `rotateX(${v}deg) `),
        b && (i += `rotateY(${b}deg) `),
        k && (i += `skewX(${k}deg) `),
        S && (i += `skewY(${S}deg) `);
    }
    const d = e.x.scale * t.x,
      p = e.y.scale * t.y;
    return (d !== 1 || p !== 1) && (i += `scale(${d}, ${p})`), i || "none";
  }
  const I6 = (e, t) => e.depth - t.depth;
  class F6 {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(t) {
      Mp(this.children, t), (this.isDirty = !0);
    }
    remove(t) {
      zp(this.children, t), (this.isDirty = !0);
    }
    forEach(t) {
      this.isDirty && this.children.sort(I6),
        (this.isDirty = !1),
        this.children.forEach(t);
    }
  }
  function cu(e) {
    const t = Lt(e) ? e.get() : e;
    return xT(t) ? t.toValue() : t;
  }
  function L6(e, t) {
    const n = xn.now(),
      i = ({ timestamp: a }) => {
        const l = a - n;
        l >= t && (so(i), e(l - t));
      };
    return at.read(i, !0), () => so(i);
  }
  function N6(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function $6(e, t, n) {
    const i = Lt(e) ? e : Us(e);
    return i.start(Tp("", i, t, n)), i.animation;
  }
  const ti = {
      type: "projectionFrame",
      totalNodes: 0,
      resolvedTargetDeltas: 0,
      recalculatedProjection: 0,
    },
    Js = typeof window < "u" && window.MotionDebug !== void 0,
    Zp = ["", "X", "Y", "Z"],
    B6 = { visibility: "hidden" },
    Gb = 1e3;
  let V6 = 0;
  function Xp(e, t, n, i) {
    const { latestValues: a } = t;
    a[e] && ((n[e] = a[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
  }
  function Zb(e) {
    if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
    const { visualElement: t } = e.options;
    if (!t) return;
    const n = Hy(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: a, layoutId: l } = e.options;
      window.MotionCancelOptimisedAnimation(n, "transform", at, !(a || l));
    }
    const { parent: i } = e;
    i && !i.hasCheckedOptimisedAppear && Zb(i);
  }
  function Xb({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: i,
    resetTransform: a,
  }) {
    return class {
      constructor(l = {}, c = t == null ? void 0 : t()) {
        (this.id = V6++),
          (this.animationId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            (this.projectionUpdateScheduled = !1),
              Js &&
                (ti.totalNodes =
                  ti.resolvedTargetDeltas =
                  ti.recalculatedProjection =
                    0),
              this.nodes.forEach(H6),
              this.nodes.forEach(X6),
              this.nodes.forEach(Y6),
              this.nodes.forEach(q6),
              Js && window.MotionDebug.record(ti);
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = l),
          (this.root = c ? c.root || c : this),
          (this.path = c ? [...c.path, c] : []),
          (this.parent = c),
          (this.depth = c ? c.depth + 1 : 0);
        for (let d = 0; d < this.path.length; d++)
          this.path[d].shouldResetTransform = !0;
        this.root === this && (this.nodes = new F6());
      }
      addEventListener(l, c) {
        return (
          this.eventHandlers.has(l) || this.eventHandlers.set(l, new Dp()),
          this.eventHandlers.get(l).add(c)
        );
      }
      notifyListeners(l, ...c) {
        const d = this.eventHandlers.get(l);
        d && d.notify(...c);
      }
      hasListeners(l) {
        return this.eventHandlers.has(l);
      }
      mount(l, c = this.root.hasTreeAnimated) {
        if (this.instance) return;
        (this.isSVG = N6(l)), (this.instance = l);
        const { layoutId: d, layout: p, visualElement: h } = this.options;
        if (
          (h && !h.current && h.mount(l),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          c && (p || d) && (this.isLayoutDirty = !0),
          e)
        ) {
          let g;
          const v = () => (this.root.updateBlockedByResize = !1);
          e(l, () => {
            (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = L6(v, 250)),
              su.hasAnimatedSinceResize &&
                ((su.hasAnimatedSinceResize = !1), this.nodes.forEach(Qb));
          });
        }
        d && this.root.registerSharedNode(d, this),
          this.options.animate !== !1 &&
            h &&
            (d || p) &&
            this.addEventListener(
              "didUpdate",
              ({
                delta: g,
                hasLayoutChanged: v,
                hasRelativeTargetChanged: b,
                layout: k,
              }) => {
                if (this.isTreeAnimationBlocked()) {
                  (this.target = void 0), (this.relativeTarget = void 0);
                  return;
                }
                const S =
                    this.options.transition || h.getDefaultTransition() || rM,
                  { onLayoutAnimationStart: w, onLayoutAnimationComplete: _ } =
                    h.getProps(),
                  j = !this.targetLayout || !Hb(this.targetLayout, k) || b,
                  O = !v && b;
                if (
                  this.options.layoutRoot ||
                  (this.resumeFrom && this.resumeFrom.instance) ||
                  O ||
                  (v && (j || !this.currentAnimation))
                ) {
                  this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0)),
                    this.setAnimationOrigin(g, O);
                  const M = { ...op(S, "layout"), onPlay: w, onComplete: _ };
                  (h.shouldReduceMotion || this.options.layoutRoot) &&
                    ((M.delay = 0), (M.type = !1)),
                    this.startAnimation(M);
                } else
                  v || Qb(this),
                    this.isLead() &&
                      this.options.onExitComplete &&
                      this.options.onExitComplete();
                this.targetLayout = k;
              }
            );
      }
      unmount() {
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
        const l = this.getStack();
        l && l.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          so(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(Q6),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: l } = this.options;
        return l && l.getProps().transformTemplate;
      }
      willUpdate(l = !0) {
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            Zb(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let h = 0; h < this.path.length; h++) {
          const g = this.path[h];
          (g.shouldResetTransform = !0),
            g.updateScroll("snapshot"),
            g.options.layoutRoot && g.willUpdate(!1);
        }
        const { layoutId: c, layout: d } = this.options;
        if (c === void 0 && !d) return;
        const p = this.getTransformTemplate();
        (this.prevTransformTemplateValue = p
          ? p(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          l && this.notifyListeners("willUpdate");
      }
      update() {
        if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
          this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(Yb);
          return;
        }
        this.isUpdating || this.nodes.forEach(G6),
          (this.isUpdating = !1),
          this.nodes.forEach(Z6),
          this.nodes.forEach(W6),
          this.nodes.forEach(U6),
          this.clearAllSnapshots();
        const l = xn.now();
        (Mt.delta = Vn(0, 1e3 / 60, l - Mt.timestamp)),
          (Mt.timestamp = l),
          (Mt.isProcessing = !0),
          ap.update.process(Mt),
          ap.preRender.process(Mt),
          ap.render.process(Mt),
          (Mt.isProcessing = !1);
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), Gp.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(K6), this.sharedNodes.forEach(J6);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          at.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        at.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot || !this.instance || (this.snapshot = this.measure());
      }
      updateLayout() {
        if (
          !this.instance ||
          (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let d = 0; d < this.path.length; d++)
            this.path[d].updateScroll();
        const l = this.layout;
        (this.layout = this.measure(!1)),
          (this.layoutCorrected = wt()),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: c } = this.options;
        c &&
          c.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            l ? l.layoutBox : void 0
          );
      }
      updateScroll(l = "measure") {
        let c = !!(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === l &&
            (c = !1),
          c)
        ) {
          const d = i(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: l,
            isRoot: d,
            offset: n(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : d,
          };
        }
      }
      resetTransform() {
        if (!a) return;
        const l =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          c = this.projectionDelta && !Vb(this.projectionDelta),
          d = this.getTransformTemplate(),
          p = d ? d(this.latestValues, "") : void 0,
          h = p !== this.prevTransformTemplateValue;
        l &&
          (c || ei(this.latestValues) || h) &&
          (a(this.instance, p),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure(l = !0) {
        const c = this.measurePageBox();
        let d = this.removeElementScroll(c);
        return (
          l && (d = this.removeTransform(d)),
          nM(d),
          {
            animationId: this.root.animationId,
            measuredBox: c,
            layoutBox: d,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        var l;
        const { visualElement: c } = this.options;
        if (!c) return wt();
        const d = c.measureViewportBox();
        if (
          !(
            (!((l = this.scroll) === null || l === void 0) && l.wasRoot) ||
            this.path.some(oM)
          )
        ) {
          const { scroll: p } = this.root;
          p && (ia(d.x, p.offset.x), ia(d.y, p.offset.y));
        }
        return d;
      }
      removeElementScroll(l) {
        var c;
        const d = wt();
        if (
          (Tr(d, l), !((c = this.scroll) === null || c === void 0) && c.wasRoot)
        )
          return d;
        for (let p = 0; p < this.path.length; p++) {
          const h = this.path[p],
            { scroll: g, options: v } = h;
          h !== this.root &&
            g &&
            v.layoutScroll &&
            (g.wasRoot && Tr(d, l), ia(d.x, g.offset.x), ia(d.y, g.offset.y));
        }
        return d;
      }
      applyTransform(l, c = !1) {
        const d = wt();
        Tr(d, l);
        for (let p = 0; p < this.path.length; p++) {
          const h = this.path[p];
          !c &&
            h.options.layoutScroll &&
            h.scroll &&
            h !== h.root &&
            aa(d, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
            ei(h.latestValues) && aa(d, h.latestValues);
        }
        return ei(this.latestValues) && aa(d, this.latestValues), d;
      }
      removeTransform(l) {
        const c = wt();
        Tr(c, l);
        for (let d = 0; d < this.path.length; d++) {
          const p = this.path[d];
          if (!p.instance || !ei(p.latestValues)) continue;
          Hp(p.latestValues) && p.updateSnapshot();
          const h = wt(),
            g = p.measurePageBox();
          Tr(h, g),
            $b(
              c,
              p.latestValues,
              p.snapshot ? p.snapshot.layoutBox : void 0,
              h
            );
        }
        return ei(this.latestValues) && $b(c, this.latestValues), c;
      }
      setTargetDelta(l) {
        (this.targetDelta = l),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0);
      }
      setOptions(l) {
        this.options = {
          ...this.options,
          ...l,
          crossfade: l.crossfade !== void 0 ? l.crossfade : !0,
        };
      }
      clearMeasurements() {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== Mt.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(l = !1) {
        var c;
        const d = this.getLead();
        this.isProjectionDirty ||
          (this.isProjectionDirty = d.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
        const p = !!this.resumingFrom || this !== d;
        if (
          !(
            l ||
            (p && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            (!((c = this.parent) === null || c === void 0) &&
              c.isProjectionDirty) ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: h, layoutId: g } = this.options;
        if (!(!this.layout || !(h || g))) {
          if (
            ((this.resolvedRelativeTargetAt = Mt.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const v = this.getClosestProjectingParent();
            v && v.layout && this.animationProgress !== 1
              ? ((this.relativeParent = v),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = wt()),
                (this.relativeTargetOrigin = wt()),
                Xs(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  v.layout.layoutBox
                ),
                Tr(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (
              (this.target ||
                ((this.target = wt()), (this.targetWithTransforms = wt())),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  o6(
                    this.target,
                    this.relativeTarget,
                    this.relativeParent.target
                  ))
                : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Tr(this.target, this.layout.layoutBox),
                  xb(this.target, this.targetDelta))
                : Tr(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
            ) {
              this.attemptToResolveRelativeTarget = !1;
              const v = this.getClosestProjectingParent();
              v &&
              !!v.resumingFrom == !!this.resumingFrom &&
              !v.options.layoutScroll &&
              v.target &&
              this.animationProgress !== 1
                ? ((this.relativeParent = v),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = wt()),
                  (this.relativeTargetOrigin = wt()),
                  Xs(this.relativeTargetOrigin, this.target, v.target),
                  Tr(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            Js && ti.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (
          !(
            !this.parent ||
            Hp(this.parent.latestValues) ||
            vb(this.parent.latestValues)
          )
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
          this.layout
        );
      }
      calcProjection() {
        var l;
        const c = this.getLead(),
          d = !!this.resumingFrom || this !== c;
        let p = !0;
        if (
          ((this.isProjectionDirty ||
            (!((l = this.parent) === null || l === void 0) &&
              l.isProjectionDirty)) &&
            (p = !1),
          d &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (p = !1),
          this.resolvedRelativeTargetAt === Mt.timestamp && (p = !1),
          p)
        )
          return;
        const { layout: h, layoutId: g } = this.options;
        if (
          ((this.isTreeAnimating = !!(
            (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(h || g))
        )
          return;
        Tr(this.layoutCorrected, this.layout.layoutBox);
        const v = this.treeScale.x,
          b = this.treeScale.y;
        p6(this.layoutCorrected, this.treeScale, this.path, d),
          c.layout &&
            !c.target &&
            (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
            ((c.target = c.layout.layoutBox), (c.targetWithTransforms = wt()));
        const { target: k } = c;
        if (!k) {
          this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta
          ? this.createProjectionDeltas()
          : (Fb(this.prevProjectionDelta.x, this.projectionDelta.x),
            Fb(this.prevProjectionDelta.y, this.projectionDelta.y)),
          Zs(this.projectionDelta, this.layoutCorrected, k, this.latestValues),
          (this.treeScale.x !== v ||
            this.treeScale.y !== b ||
            !Kb(this.projectionDelta.x, this.prevProjectionDelta.x) ||
            !Kb(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", k)),
          Js && ti.recalculatedProjection++;
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(l = !0) {
        var c;
        if (
          ((c = this.options.visualElement) === null ||
            c === void 0 ||
            c.scheduleRender(),
          l)
        ) {
          const d = this.getStack();
          d && d.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        (this.prevProjectionDelta = oa()),
          (this.projectionDelta = oa()),
          (this.projectionDeltaWithTransform = oa());
      }
      setAnimationOrigin(l, c = !1) {
        const d = this.snapshot,
          p = d ? d.latestValues : {},
          h = { ...this.latestValues },
          g = oa();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !c);
        const v = wt(),
          b = d ? d.source : void 0,
          k = this.layout ? this.layout.source : void 0,
          S = b !== k,
          w = this.getStack(),
          _ = !w || w.members.length <= 1,
          j = !!(
            S &&
            !_ &&
            this.options.crossfade === !0 &&
            !this.path.some(tM)
          );
        this.animationProgress = 0;
        let O;
        (this.mixTargetDelta = (M) => {
          const $ = M / 1e3;
          Jb(g.x, l.x, $),
            Jb(g.y, l.y, $),
            this.setTargetDelta(g),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              this.relativeParent &&
              this.relativeParent.layout &&
              (Xs(
                v,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox
              ),
              eM(this.relativeTarget, this.relativeTargetOrigin, v, $),
              O && M6(this.relativeTarget, O) && (this.isProjectionDirty = !1),
              O || (O = wt()),
              Tr(O, this.relativeTarget)),
            S &&
              ((this.animationValues = h),
              P6(h, p, this.latestValues, $, j, _)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = $);
        }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(l) {
        this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation &&
            (so(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = at.update(() => {
            (su.hasAnimatedSinceResize = !0),
              (this.currentAnimation = $6(0, Gb, {
                ...l,
                onUpdate: (c) => {
                  this.mixTargetDelta(c), l.onUpdate && l.onUpdate(c);
                },
                onComplete: () => {
                  l.onComplete && l.onComplete(), this.completeAnimation();
                },
              })),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0);
          }));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const l = this.getStack();
        l && l.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(Gb),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const l = this.getLead();
        let {
          targetWithTransforms: c,
          target: d,
          layout: p,
          latestValues: h,
        } = l;
        if (!(!c || !d || !p)) {
          if (
            this !== l &&
            this.layout &&
            p &&
            o1(this.options.animationType, this.layout.layoutBox, p.layoutBox)
          ) {
            d = this.target || wt();
            const g = wr(this.layout.layoutBox.x);
            (d.x.min = l.target.x.min), (d.x.max = d.x.min + g);
            const v = wr(this.layout.layoutBox.y);
            (d.y.min = l.target.y.min), (d.y.max = d.y.min + v);
          }
          Tr(c, d),
            aa(c, h),
            Zs(this.projectionDeltaWithTransform, this.layoutCorrected, c, h);
        }
      }
      registerSharedNode(l, c) {
        this.sharedNodes.has(l) || this.sharedNodes.set(l, new z6()),
          this.sharedNodes.get(l).add(c);
        const d = c.options.initialPromotionConfig;
        c.promote({
          transition: d ? d.transition : void 0,
          preserveFollowOpacity:
            d && d.shouldPreserveFollowOpacity
              ? d.shouldPreserveFollowOpacity(c)
              : void 0,
        });
      }
      isLead() {
        const l = this.getStack();
        return l ? l.lead === this : !0;
      }
      getLead() {
        var l;
        const { layoutId: c } = this.options;
        return c
          ? ((l = this.getStack()) === null || l === void 0
              ? void 0
              : l.lead) || this
          : this;
      }
      getPrevLead() {
        var l;
        const { layoutId: c } = this.options;
        return c
          ? (l = this.getStack()) === null || l === void 0
            ? void 0
            : l.prevLead
          : void 0;
      }
      getStack() {
        const { layoutId: l } = this.options;
        if (l) return this.root.sharedNodes.get(l);
      }
      promote({ needsReset: l, transition: c, preserveFollowOpacity: d } = {}) {
        const p = this.getStack();
        p && p.promote(this, d),
          l && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          c && this.setOptions({ transition: c });
      }
      relegate() {
        const l = this.getStack();
        return l ? l.relegate(this) : !1;
      }
      resetSkewAndRotation() {
        const { visualElement: l } = this.options;
        if (!l) return;
        let c = !1;
        const { latestValues: d } = l;
        if (
          ((d.z ||
            d.rotate ||
            d.rotateX ||
            d.rotateY ||
            d.rotateZ ||
            d.skewX ||
            d.skewY) &&
            (c = !0),
          !c)
        )
          return;
        const p = {};
        d.z && Xp("z", l, p, this.animationValues);
        for (let h = 0; h < Zp.length; h++)
          Xp(`rotate${Zp[h]}`, l, p, this.animationValues),
            Xp(`skew${Zp[h]}`, l, p, this.animationValues);
        l.render();
        for (const h in p)
          l.setStaticValue(h, p[h]),
            this.animationValues && (this.animationValues[h] = p[h]);
        l.scheduleRender();
      }
      getProjectionStyles(l) {
        var c, d;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return B6;
        const p = { visibility: "" },
          h = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (p.opacity = ""),
            (p.pointerEvents = cu(l == null ? void 0 : l.pointerEvents) || ""),
            (p.transform = h ? h(this.latestValues, "") : "none"),
            p
          );
        const g = this.getLead();
        if (!this.projectionDelta || !this.layout || !g.target) {
          const S = {};
          return (
            this.options.layoutId &&
              ((S.opacity =
                this.latestValues.opacity !== void 0
                  ? this.latestValues.opacity
                  : 1),
              (S.pointerEvents =
                cu(l == null ? void 0 : l.pointerEvents) || "")),
            this.hasProjected &&
              !ei(this.latestValues) &&
              ((S.transform = h ? h({}, "") : "none"),
              (this.hasProjected = !1)),
            S
          );
        }
        const v = g.animationValues || g.latestValues;
        this.applyTransformsToTarget(),
          (p.transform = D6(
            this.projectionDeltaWithTransform,
            this.treeScale,
            v
          )),
          h && (p.transform = h(v, p.transform));
        const { x: b, y: k } = this.projectionDelta;
        (p.transformOrigin = `${b.origin * 100}% ${k.origin * 100}% 0`),
          g.animationValues
            ? (p.opacity =
                g === this
                  ? (d =
                      (c = v.opacity) !== null && c !== void 0
                        ? c
                        : this.latestValues.opacity) !== null && d !== void 0
                    ? d
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : v.opacityExit)
            : (p.opacity =
                g === this
                  ? v.opacity !== void 0
                    ? v.opacity
                    : ""
                  : v.opacityExit !== void 0
                  ? v.opacityExit
                  : 0);
        for (const S in lu) {
          if (v[S] === void 0) continue;
          const { correct: w, applyTo: _ } = lu[S],
            j = p.transform === "none" ? v[S] : w(v[S], g);
          if (_) {
            const O = _.length;
            for (let M = 0; M < O; M++) p[_[M]] = j;
          } else p[S] = j;
        }
        return (
          this.options.layoutId &&
            (p.pointerEvents =
              g === this
                ? cu(l == null ? void 0 : l.pointerEvents) || ""
                : "none"),
          p
        );
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((l) => {
          var c;
          return (c = l.currentAnimation) === null || c === void 0
            ? void 0
            : c.stop();
        }),
          this.root.nodes.forEach(Yb),
          this.root.sharedNodes.clear();
      }
    };
  }
  function W6(e) {
    e.updateLayout();
  }
  function U6(e) {
    var t;
    const n =
      ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
      e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: i, measuredBox: a } = e.layout,
        { animationType: l } = e.options,
        c = n.source !== e.layout.source;
      l === "size"
        ? Ar((v) => {
            const b = c ? n.measuredBox[v] : n.layoutBox[v],
              k = wr(b);
            (b.min = i[v].min), (b.max = b.min + k);
          })
        : o1(l, n.layoutBox, i) &&
          Ar((v) => {
            const b = c ? n.measuredBox[v] : n.layoutBox[v],
              k = wr(i[v]);
            (b.max = b.min + k),
              e.relativeTarget &&
                !e.currentAnimation &&
                ((e.isProjectionDirty = !0),
                (e.relativeTarget[v].max = e.relativeTarget[v].min + k));
          });
      const d = oa();
      Zs(d, i, n.layoutBox);
      const p = oa();
      c ? Zs(p, e.applyTransform(a, !0), n.measuredBox) : Zs(p, i, n.layoutBox);
      const h = !Vb(d);
      let g = !1;
      if (!e.resumeFrom) {
        const v = e.getClosestProjectingParent();
        if (v && !v.resumeFrom) {
          const { snapshot: b, layout: k } = v;
          if (b && k) {
            const S = wt();
            Xs(S, n.layoutBox, b.layoutBox);
            const w = wt();
            Xs(w, i, k.layoutBox),
              Hb(S, w) || (g = !0),
              v.options.layoutRoot &&
                ((e.relativeTarget = w),
                (e.relativeTargetOrigin = S),
                (e.relativeParent = v));
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: i,
        snapshot: n,
        delta: p,
        layoutDelta: d,
        hasLayoutChanged: h,
        hasRelativeTargetChanged: g,
      });
    } else if (e.isLead()) {
      const { onExitComplete: i } = e.options;
      i && i();
    }
    e.options.transition = void 0;
  }
  function H6(e) {
    Js && ti.totalNodes++,
      e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
          (e.isSharedProjectionDirty = !!(
            e.isProjectionDirty ||
            e.parent.isProjectionDirty ||
            e.parent.isSharedProjectionDirty
          )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function q6(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function K6(e) {
    e.clearSnapshot();
  }
  function Yb(e) {
    e.clearMeasurements();
  }
  function G6(e) {
    e.isLayoutDirty = !1;
  }
  function Z6(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
      e.resetTransform();
  }
  function Qb(e) {
    e.finishAnimation(),
      (e.targetDelta = e.relativeTarget = e.target = void 0),
      (e.isProjectionDirty = !0);
  }
  function X6(e) {
    e.resolveTargetDelta();
  }
  function Y6(e) {
    e.calcProjection();
  }
  function Q6(e) {
    e.resetSkewAndRotation();
  }
  function J6(e) {
    e.removeLeadSnapshot();
  }
  function Jb(e, t, n) {
    (e.translate = ht(t.translate, 0, n)),
      (e.scale = ht(t.scale, 1, n)),
      (e.origin = t.origin),
      (e.originPoint = t.originPoint);
  }
  function e1(e, t, n, i) {
    (e.min = ht(t.min, n.min, i)), (e.max = ht(t.max, n.max, i));
  }
  function eM(e, t, n, i) {
    e1(e.x, t.x, n.x, i), e1(e.y, t.y, n.y, i);
  }
  function tM(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const rM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    t1 = (e) =>
      typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(e),
    r1 = t1("applewebkit/") && !t1("chrome/") ? Math.round : xr;
  function n1(e) {
    (e.min = r1(e.min)), (e.max = r1(e.max));
  }
  function nM(e) {
    n1(e.x), n1(e.y);
  }
  function o1(e, t, n) {
    return (
      e === "position" || (e === "preserve-aspect" && !n6(qb(t), qb(n), 0.2))
    );
  }
  function oM(e) {
    var t;
    return (
      e !== e.root &&
      ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
    );
  }
  const iM = Xb({
      attachResizeListener: (e, t) => Ks(e, "resize", t),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    Yp = { current: void 0 },
    i1 = Xb({
      measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
      defaultParent: () => {
        if (!Yp.current) {
          const e = new iM({});
          e.mount(window), e.setOptions({ layoutScroll: !0 }), (Yp.current = e);
        }
        return Yp.current;
      },
      resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none";
      },
      checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
    }),
    aM = {
      pan: { Feature: b6 },
      drag: { Feature: y6, ProjectionNode: i1, MeasureLayout: Ob },
    };
  function a1(e, t, n) {
    const { props: i } = e;
    e.animationState &&
      i.whileHover &&
      e.animationState.setActive("whileHover", n === "Start");
    const a = "onHover" + n,
      l = i[a];
    l && at.postRender(() => l(t, qs(t)));
  }
  class sM extends uo {
    mount() {
      const { current: t } = this.node;
      t &&
        (this.unmount = WT(
          t,
          (n) => (a1(this.node, n, "Start"), (i) => a1(this.node, i, "End"))
        ));
    }
    unmount() {}
  }
  class lM extends uo {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let t = !1;
      try {
        t = this.node.current.matches(":focus-visible");
      } catch {
        t = !0;
      }
      !t ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = Vs(
        Ks(this.node.current, "focus", () => this.onFocus()),
        Ks(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  }
  function s1(e, t, n) {
    const { props: i } = e;
    e.animationState &&
      i.whileTap &&
      e.animationState.setActive("whileTap", n === "Start");
    const a = "onTap" + (n === "End" ? "" : n),
      l = i[a];
    l && at.postRender(() => l(t, qs(t)));
  }
  class cM extends uo {
    mount() {
      const { current: t } = this.node;
      t &&
        (this.unmount = KT(
          t,
          (n) => (
            s1(this.node, n, "Start"),
            (i, { success: a }) => s1(this.node, i, a ? "End" : "Cancel")
          ),
          { useGlobalTarget: this.node.props.globalTapTarget }
        ));
    }
    unmount() {}
  }
  const Qp = new WeakMap(),
    Jp = new WeakMap(),
    uM = (e) => {
      const t = Qp.get(e.target);
      t && t(e);
    },
    dM = (e) => {
      e.forEach(uM);
    };
  function fM({ root: e, ...t }) {
    const n = e || document;
    Jp.has(n) || Jp.set(n, {});
    const i = Jp.get(n),
      a = JSON.stringify(t);
    return (
      i[a] || (i[a] = new IntersectionObserver(dM, { root: e, ...t })), i[a]
    );
  }
  function pM(e, t, n) {
    const i = fM(t);
    return (
      Qp.set(e, n),
      i.observe(e),
      () => {
        Qp.delete(e), i.unobserve(e);
      }
    );
  }
  const hM = { some: 0, all: 1 };
  class mM extends uo {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(),
        { root: n, margin: i, amount: a = "some", once: l } = t,
        c = {
          root: n ? n.current : void 0,
          rootMargin: i,
          threshold: typeof a == "number" ? a : hM[a],
        },
        d = (p) => {
          const { isIntersecting: h } = p;
          if (
            this.isInView === h ||
            ((this.isInView = h), l && !h && this.hasEnteredView)
          )
            return;
          h && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", h);
          const { onViewportEnter: g, onViewportLeave: v } =
              this.node.getProps(),
            b = h ? g : v;
          b && b(p);
        };
      return pM(this.node.current, c, d);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(gM(t, n)) && this.startObserver();
    }
    unmount() {}
  }
  function gM({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const vM = {
      inView: { Feature: mM },
      tap: { Feature: cM },
      focus: { Feature: lM },
      hover: { Feature: sM },
    },
    yM = { layout: { ProjectionNode: i1, MeasureLayout: Ob } },
    eh = x.createContext({
      transformPagePoint: (e) => e,
      isStatic: !1,
      reducedMotion: "never",
    }),
    uu = x.createContext({}),
    th = typeof window < "u",
    l1 = th ? x.useLayoutEffect : x.useEffect,
    c1 = x.createContext({ strict: !1 });
  function bM(e, t, n, i, a) {
    var l, c;
    const { visualElement: d } = x.useContext(uu),
      p = x.useContext(c1),
      h = x.useContext(Ys),
      g = x.useContext(eh).reducedMotion,
      v = x.useRef(null);
    (i = i || p.renderer),
      !v.current &&
        i &&
        (v.current = i(e, {
          visualState: t,
          parent: d,
          props: n,
          presenceContext: h,
          blockInitialAnimation: h ? h.initial === !1 : !1,
          reducedMotionConfig: g,
        }));
    const b = v.current,
      k = x.useContext(Rb);
    b &&
      !b.projection &&
      a &&
      (b.type === "html" || b.type === "svg") &&
      xM(v.current, n, a, k);
    const S = x.useRef(!1);
    x.useInsertionEffect(() => {
      b && S.current && b.update(n, h);
    });
    const w = n[Uy],
      _ = x.useRef(
        !!w &&
          !(
            !((l = window.MotionHandoffIsComplete) === null || l === void 0) &&
            l.call(window, w)
          ) &&
          ((c = window.MotionHasOptimisedAnimation) === null || c === void 0
            ? void 0
            : c.call(window, w))
      );
    return (
      l1(() => {
        b &&
          ((S.current = !0),
          (window.MotionIsMounted = !0),
          b.updateFeatures(),
          Gp.render(b.render),
          _.current && b.animationState && b.animationState.animateChanges());
      }),
      x.useEffect(() => {
        b &&
          (!_.current && b.animationState && b.animationState.animateChanges(),
          _.current &&
            (queueMicrotask(() => {
              var j;
              (j = window.MotionHandoffMarkAsComplete) === null ||
                j === void 0 ||
                j.call(window, w);
            }),
            (_.current = !1)));
      }),
      b
    );
  }
  function xM(e, t, n, i) {
    const {
      layoutId: a,
      layout: l,
      drag: c,
      dragConstraints: d,
      layoutScroll: p,
      layoutRoot: h,
    } = t;
    (e.projection = new n(
      e.latestValues,
      t["data-framer-portal-id"] ? void 0 : u1(e.parent)
    )),
      e.projection.setOptions({
        layoutId: a,
        layout: l,
        alwaysMeasureLayout: !!c || (d && na(d)),
        visualElement: e,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: p,
        layoutRoot: h,
      });
  }
  function u1(e) {
    if (e)
      return e.options.allowProjection !== !1 ? e.projection : u1(e.parent);
  }
  function wM(e, t, n) {
    return x.useCallback(
      (i) => {
        i && e.mount && e.mount(i),
          t && (i ? t.mount(i) : t.unmount()),
          n && (typeof n == "function" ? n(i) : na(n) && (n.current = i));
      },
      [t]
    );
  }
  function du(e) {
    return Zc(e.animate) || np.some((t) => Ds(e[t]));
  }
  function d1(e) {
    return !!(du(e) || e.variants);
  }
  function kM(e, t) {
    if (du(e)) {
      const { initial: n, animate: i } = e;
      return {
        initial: n === !1 || Ds(n) ? n : void 0,
        animate: Ds(i) ? i : void 0,
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function SM(e) {
    const { initial: t, animate: n } = kM(e, x.useContext(uu));
    return x.useMemo(() => ({ initial: t, animate: n }), [f1(t), f1(n)]);
  }
  function f1(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const p1 = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    },
    sa = {};
  for (const e in p1) sa[e] = { isEnabled: (t) => p1[e].some((n) => !!t[n]) };
  function _M(e) {
    for (const t in e) sa[t] = { ...sa[t], ...e[t] };
  }
  const CM = Symbol.for("motionComponentSymbol");
  function EM({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: i,
    Component: a,
  }) {
    e && _M(e);
    function l(d, p) {
      let h;
      const g = { ...x.useContext(eh), ...d, layoutId: PM(d) },
        { isStatic: v } = g,
        b = SM(d),
        k = i(d, v);
      if (!v && th) {
        RM();
        const S = jM(g);
        (h = S.MeasureLayout),
          (b.visualElement = bM(a, k, g, t, S.ProjectionNode));
      }
      return R.jsxs(uu.Provider, {
        value: b,
        children: [
          h && b.visualElement
            ? R.jsx(h, { visualElement: b.visualElement, ...g })
            : null,
          n(a, d, wM(k, b.visualElement, p), k, v, b.visualElement),
        ],
      });
    }
    const c = x.forwardRef(l);
    return (c[CM] = a), c;
  }
  function PM({ layoutId: e }) {
    const t = x.useContext(Kp).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function RM(e, t) {
    x.useContext(c1).strict;
  }
  function jM(e) {
    const { drag: t, layout: n } = sa;
    if (!t && !n) return {};
    const i = { ...t, ...n };
    return {
      MeasureLayout:
        (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
          ? i.MeasureLayout
          : void 0,
      ProjectionNode: i.ProjectionNode,
    };
  }
  const OM = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function rh(e) {
    return typeof e != "string" || e.includes("-")
      ? !1
      : !!(OM.indexOf(e) > -1 || /[A-Z]/u.test(e));
  }
  function h1(e, { style: t, vars: n }, i, a) {
    Object.assign(e.style, t, a && a.getProjectionStyles(i));
    for (const l in n) e.style.setProperty(l, n[l]);
  }
  const m1 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]);
  function g1(e, t, n, i) {
    h1(e, t, void 0, i);
    for (const a in t.attrs) e.setAttribute(m1.has(a) ? a : Ip(a), t.attrs[a]);
  }
  function v1(e, { layout: t, layoutId: n }) {
    return (
      Xo.has(e) ||
      e.startsWith("origin") ||
      ((t || n !== void 0) && (!!lu[e] || e === "opacity"))
    );
  }
  function nh(e, t, n) {
    var i;
    const { style: a } = e,
      l = {};
    for (const c in a)
      (Lt(a[c]) ||
        (t.style && Lt(t.style[c])) ||
        v1(c, e) ||
        ((i = n == null ? void 0 : n.getValue(c)) === null || i === void 0
          ? void 0
          : i.liveStyle) !== void 0) &&
        (l[c] = a[c]);
    return l;
  }
  function y1(e, t, n) {
    const i = nh(e, t, n);
    for (const a in e)
      if (Lt(e[a]) || Lt(t[a])) {
        const l =
          Is.indexOf(a) !== -1
            ? "attr" + a.charAt(0).toUpperCase() + a.substring(1)
            : a;
        i[l] = e[a];
      }
    return i;
  }
  function oh(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  function AM(
    { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
    i,
    a,
    l
  ) {
    const c = { latestValues: TM(i, a, l, e), renderState: t() };
    return n && (c.mount = (d) => n(i, d, c)), c;
  }
  const b1 = (e) => (t, n) => {
    const i = x.useContext(uu),
      a = x.useContext(Ys),
      l = () => AM(e, t, i, a);
    return n ? l() : oh(l);
  };
  function TM(e, t, n, i) {
    const a = {},
      l = i(e, {});
    for (const b in l) a[b] = cu(l[b]);
    let { initial: c, animate: d } = e;
    const p = du(e),
      h = d1(e);
    t &&
      h &&
      !p &&
      e.inherit !== !1 &&
      (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate));
    let g = n ? n.initial === !1 : !1;
    g = g || c === !1;
    const v = g ? d : c;
    if (v && typeof v != "boolean" && !Zc(v)) {
      const b = Array.isArray(v) ? v : [v];
      for (let k = 0; k < b.length; k++) {
        const S = tp(e, b[k]);
        if (S) {
          const { transitionEnd: w, transition: _, ...j } = S;
          for (const O in j) {
            let M = j[O];
            if (Array.isArray(M)) {
              const $ = g ? M.length - 1 : 0;
              M = M[$];
            }
            M !== null && (a[O] = M);
          }
          for (const O in w) a[O] = w[O];
        }
      }
    }
    return a;
  }
  const ih = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    }),
    x1 = () => ({ ...ih(), attrs: {} }),
    w1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
    MM = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    zM = Is.length;
  function DM(e, t, n) {
    let i = "",
      a = !0;
    for (let l = 0; l < zM; l++) {
      const c = Is[l],
        d = e[c];
      if (d === void 0) continue;
      let p = !0;
      if (
        (typeof d == "number"
          ? (p = d === (c.startsWith("scale") ? 1 : 0))
          : (p = parseFloat(d) === 0),
        !p || n)
      ) {
        const h = w1(d, yp[c]);
        if (!p) {
          a = !1;
          const g = MM[c] || c;
          i += `${g}(${h}) `;
        }
        n && (t[c] = h);
      }
    }
    return (i = i.trim()), n ? (i = n(t, a ? "" : i)) : a && (i = "none"), i;
  }
  function ah(e, t, n) {
    const { style: i, vars: a, transformOrigin: l } = e;
    let c = !1,
      d = !1;
    for (const p in t) {
      const h = t[p];
      if (Xo.has(p)) {
        c = !0;
        continue;
      } else if (ry(p)) {
        a[p] = h;
        continue;
      } else {
        const g = w1(h, yp[p]);
        p.startsWith("origin") ? ((d = !0), (l[p] = g)) : (i[p] = g);
      }
    }
    if (
      (t.transform ||
        (c || n
          ? (i.transform = DM(t, e.transform, n))
          : i.transform && (i.transform = "none")),
      d)
    ) {
      const { originX: p = "50%", originY: h = "50%", originZ: g = 0 } = l;
      i.transformOrigin = `${p} ${h} ${g}`;
    }
  }
  function k1(e, t, n) {
    return typeof e == "string" ? e : _e.transform(t + n * e);
  }
  function IM(e, t, n) {
    const i = k1(t, e.x, e.width),
      a = k1(n, e.y, e.height);
    return `${i} ${a}`;
  }
  const FM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    LM = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function NM(e, t, n = 1, i = 0, a = !0) {
    e.pathLength = 1;
    const l = a ? FM : LM;
    e[l.offset] = _e.transform(-i);
    const c = _e.transform(t),
      d = _e.transform(n);
    e[l.array] = `${c} ${d}`;
  }
  function sh(
    e,
    {
      attrX: t,
      attrY: n,
      attrScale: i,
      originX: a,
      originY: l,
      pathLength: c,
      pathSpacing: d = 1,
      pathOffset: p = 0,
      ...h
    },
    g,
    v
  ) {
    if ((ah(e, h, v), g)) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    (e.attrs = e.style), (e.style = {});
    const { attrs: b, style: k, dimensions: S } = e;
    b.transform && (S && (k.transform = b.transform), delete b.transform),
      S &&
        (a !== void 0 || l !== void 0 || k.transform) &&
        (k.transformOrigin = IM(
          S,
          a !== void 0 ? a : 0.5,
          l !== void 0 ? l : 0.5
        )),
      t !== void 0 && (b.x = t),
      n !== void 0 && (b.y = n),
      i !== void 0 && (b.scale = i),
      c !== void 0 && NM(b, c, d, p, !1);
  }
  const lh = (e) => typeof e == "string" && e.toLowerCase() === "svg",
    $M = {
      useVisualState: b1({
        scrapeMotionValuesFromProps: y1,
        createRenderState: x1,
        onMount: (e, t, { renderState: n, latestValues: i }) => {
          at.read(() => {
            try {
              n.dimensions =
                typeof t.getBBox == "function"
                  ? t.getBBox()
                  : t.getBoundingClientRect();
            } catch {
              n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
          }),
            at.render(() => {
              sh(n, i, lh(t.tagName), e.transformTemplate), g1(t, n);
            });
        },
      }),
    },
    BM = {
      useVisualState: b1({
        scrapeMotionValuesFromProps: nh,
        createRenderState: ih,
      }),
    };
  function S1(e, t, n) {
    for (const i in t) !Lt(t[i]) && !v1(i, n) && (e[i] = t[i]);
  }
  function VM({ transformTemplate: e }, t) {
    return x.useMemo(() => {
      const n = ih();
      return ah(n, t, e), Object.assign({}, n.vars, n.style);
    }, [t]);
  }
  function WM(e, t) {
    const n = e.style || {},
      i = {};
    return S1(i, n, e), Object.assign(i, VM(e, t)), i;
  }
  function UM(e, t) {
    const n = {},
      i = WM(e, t);
    return (
      e.drag &&
        e.dragListener !== !1 &&
        ((n.draggable = !1),
        (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
        (i.touchAction =
          e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
      e.tabIndex === void 0 &&
        (e.onTap || e.onTapStart || e.whileTap) &&
        (n.tabIndex = 0),
      (n.style = i),
      n
    );
  }
  const HM = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
  function fu(e) {
    return (
      e.startsWith("while") ||
      (e.startsWith("drag") && e !== "draggable") ||
      e.startsWith("layout") ||
      e.startsWith("onTap") ||
      e.startsWith("onPan") ||
      e.startsWith("onLayout") ||
      HM.has(e)
    );
  }
  let _1 = (e) => !fu(e);
  function qM(e) {
    e && (_1 = (t) => (t.startsWith("on") ? !fu(t) : e(t)));
  }
  try {
    qM(require("@emotion/is-prop-valid").default);
  } catch {}
  function KM(e, t, n) {
    const i = {};
    for (const a in e)
      (a === "values" && typeof e.values == "object") ||
        ((_1(a) ||
          (n === !0 && fu(a)) ||
          (!t && !fu(a)) ||
          (e.draggable && a.startsWith("onDrag"))) &&
          (i[a] = e[a]));
    return i;
  }
  function GM(e, t, n, i) {
    const a = x.useMemo(() => {
      const l = x1();
      return (
        sh(l, t, lh(i), e.transformTemplate),
        { ...l.attrs, style: { ...l.style } }
      );
    }, [t]);
    if (e.style) {
      const l = {};
      S1(l, e.style, e), (a.style = { ...l, ...a.style });
    }
    return a;
  }
  function ZM(e = !1) {
    return (t, n, i, { latestValues: a }, l) => {
      const c = (rh(t) ? GM : UM)(n, a, l, t),
        d = KM(n, typeof t == "string", e),
        p = t !== x.Fragment ? { ...d, ...c, ref: i } : {},
        { children: h } = n,
        g = x.useMemo(() => (Lt(h) ? h.get() : h), [h]);
      return x.createElement(t, { ...p, children: g });
    };
  }
  function XM(e, t) {
    return function (
      n,
      { forwardMotionProps: i } = { forwardMotionProps: !1 }
    ) {
      const a = {
        ...(rh(n) ? $M : BM),
        preloadedFeatures: e,
        useRender: ZM(i),
        createVisualElement: t,
        Component: n,
      };
      return EM(a);
    };
  }
  const ch = { current: null },
    C1 = { current: !1 };
  function YM() {
    if (((C1.current = !0), !!th))
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"),
          t = () => (ch.current = e.matches);
        e.addListener(t), t();
      } else ch.current = !1;
  }
  function QM(e, t, n) {
    for (const i in t) {
      const a = t[i],
        l = n[i];
      if (Lt(a)) e.addValue(i, a);
      else if (Lt(l)) e.addValue(i, Us(a, { owner: e }));
      else if (l !== a)
        if (e.hasValue(i)) {
          const c = e.getValue(i);
          c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a);
        } else {
          const c = e.getStaticValue(i);
          e.addValue(i, Us(c !== void 0 ? c : a, { owner: e }));
        }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t;
  }
  const E1 = new WeakMap(),
    JM = [...cy, Ft, co],
    ez = (e) => JM.find(ly(e)),
    P1 = [
      "AnimationStart",
      "AnimationComplete",
      "Update",
      "BeforeLayoutMeasure",
      "LayoutMeasure",
      "LayoutAnimationStart",
      "LayoutAnimationComplete",
    ];
  class tz {
    scrapeMotionValuesFromProps(t, n, i) {
      return {};
    }
    constructor(
      {
        parent: t,
        props: n,
        presenceContext: i,
        reducedMotionConfig: a,
        blockInitialAnimation: l,
        visualState: c,
      },
      d = {}
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = fp),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const b = xn.now();
          this.renderScheduledAt < b &&
            ((this.renderScheduledAt = b), at.render(this.render, !1, !0));
        });
      const { latestValues: p, renderState: h } = c;
      (this.latestValues = p),
        (this.baseTarget = { ...p }),
        (this.initialValues = n.initial ? { ...p } : {}),
        (this.renderState = h),
        (this.parent = t),
        (this.props = n),
        (this.presenceContext = i),
        (this.depth = t ? t.depth + 1 : 0),
        (this.reducedMotionConfig = a),
        (this.options = d),
        (this.blockInitialAnimation = !!l),
        (this.isControllingVariants = du(n)),
        (this.isVariantNode = d1(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(t && t.current));
      const { willChange: g, ...v } = this.scrapeMotionValuesFromProps(
        n,
        {},
        this
      );
      for (const b in v) {
        const k = v[b];
        p[b] !== void 0 && Lt(k) && k.set(p[b], !1);
      }
    }
    mount(t) {
      (this.current = t),
        E1.set(t, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(t),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n, i) => this.bindToMotionValue(i, n)),
        C1.current || YM(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : ch.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      E1.delete(this.current),
        this.projection && this.projection.unmount(),
        so(this.notifyUpdate),
        so(this.render),
        this.valueSubscriptions.forEach((t) => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (const t in this.events) this.events[t].clear();
      for (const t in this.features) {
        const n = this.features[t];
        n && (n.unmount(), (n.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(t, n) {
      this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
      const i = Xo.has(t),
        a = n.on("change", (d) => {
          (this.latestValues[t] = d),
            this.props.onUpdate && at.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0);
        }),
        l = n.on("renderRequest", this.scheduleRender);
      let c;
      window.MotionCheckAppearSync &&
        (c = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
          a(), l(), c && c(), n.owner && n.stop();
        });
    }
    sortNodePosition(t) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== t.type
        ? 0
        : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
      let t = "animation";
      for (t in sa) {
        const n = sa[t];
        if (!n) continue;
        const { isEnabled: i, Feature: a } = n;
        if (
          (!this.features[t] &&
            a &&
            i(this.props) &&
            (this.features[t] = new a(this)),
          this.features[t])
        ) {
          const l = this.features[t];
          l.isMounted ? l.update() : (l.mount(), (l.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : wt();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, n) {
      this.latestValues[t] = n;
    }
    update(t, n) {
      (t.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = t),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = n);
      for (let i = 0; i < P1.length; i++) {
        const a = P1[i];
        this.propEventSubscriptions[a] &&
          (this.propEventSubscriptions[a](),
          delete this.propEventSubscriptions[a]);
        const l = "on" + a,
          c = t[l];
        c && (this.propEventSubscriptions[a] = this.on(a, c));
      }
      (this.prevMotionValues = QM(
        this,
        this.scrapeMotionValuesFromProps(t, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    addVariantChild(t) {
      const n = this.getClosestVariantNode();
      if (n)
        return (
          n.variantChildren && n.variantChildren.add(t),
          () => n.variantChildren.delete(t)
        );
    }
    addValue(t, n) {
      const i = this.values.get(t);
      n !== i &&
        (i && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        (this.latestValues[t] = n.get()));
    }
    removeValue(t) {
      this.values.delete(t);
      const n = this.valueSubscriptions.get(t);
      n && (n(), this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, n) {
      if (this.props.values && this.props.values[t])
        return this.props.values[t];
      let i = this.values.get(t);
      return (
        i === void 0 &&
          n !== void 0 &&
          ((i = Us(n === null ? void 0 : n, { owner: this })),
          this.addValue(t, i)),
        i
      );
    }
    readValue(t, n) {
      var i;
      let a =
        this.latestValues[t] !== void 0 || !this.current
          ? this.latestValues[t]
          : (i = this.getBaseTargetFromProps(this.props, t)) !== null &&
            i !== void 0
          ? i
          : this.readValueFromInstance(this.current, t, this.options);
      return (
        a != null &&
          (typeof a == "string" && (ey(a) || Jv(a))
            ? (a = parseFloat(a))
            : !ez(a) && co.test(n) && (a = xy(t, n)),
          this.setBaseTarget(t, Lt(a) ? a.get() : a)),
        Lt(a) ? a.get() : a
      );
    }
    setBaseTarget(t, n) {
      this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
      var n;
      const { initial: i } = this.props;
      let a;
      if (typeof i == "string" || typeof i == "object") {
        const c = tp(
          this.props,
          i,
          (n = this.presenceContext) === null || n === void 0
            ? void 0
            : n.custom
        );
        c && (a = c[t]);
      }
      if (i && a !== void 0) return a;
      const l = this.getBaseTargetFromProps(this.props, t);
      return l !== void 0 && !Lt(l)
        ? l
        : this.initialValues[t] !== void 0 && a === void 0
        ? void 0
        : this.baseTarget[t];
    }
    on(t, n) {
      return (
        this.events[t] || (this.events[t] = new Dp()), this.events[t].add(n)
      );
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  }
  class R1 extends tz {
    constructor() {
      super(...arguments), (this.KeyframeResolver = wy);
    }
    sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: i }) {
      delete n[t], delete i[t];
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Lt(t) &&
        (this.childSubscription = t.on("change", (n) => {
          this.current && (this.current.textContent = `${n}`);
        }));
    }
  }
  function rz(e) {
    return window.getComputedStyle(e);
  }
  class nz extends R1 {
    constructor() {
      super(...arguments), (this.type = "html"), (this.renderInstance = h1);
    }
    readValueFromInstance(t, n) {
      if (Xo.has(n)) {
        const i = bp(n);
        return (i && i.default) || 0;
      } else {
        const i = rz(t),
          a = (ry(n) ? i.getPropertyValue(n) : i[n]) || 0;
        return typeof a == "string" ? a.trim() : a;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return _b(t, n);
    }
    build(t, n, i) {
      ah(t, n, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, i) {
      return nh(t, n, i);
    }
  }
  class oz extends R1 {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = wt);
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (Xo.has(n)) {
        const i = bp(n);
        return (i && i.default) || 0;
      }
      return (n = m1.has(n) ? n : Ip(n)), t.getAttribute(n);
    }
    scrapeMotionValuesFromProps(t, n, i) {
      return y1(t, n, i);
    }
    build(t, n, i) {
      sh(t, n, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, i, a) {
      g1(t, n, i, a);
    }
    mount(t) {
      (this.isSVGTag = lh(t.tagName)), super.mount(t);
    }
  }
  const iz = (e, t) =>
      rh(e) ? new oz(t) : new nz(t, { allowProjection: e !== x.Fragment }),
    az = XM({ ...BT, ...vM, ...aM, ...yM }, iz),
    ri = NO(az);
  class sz extends x.Component {
    getSnapshotBeforeUpdate(t) {
      const n = this.props.childRef.current;
      if (n && t.isPresent && !this.props.isPresent) {
        const i = this.props.sizeRef.current;
        (i.height = n.offsetHeight || 0),
          (i.width = n.offsetWidth || 0),
          (i.top = n.offsetTop),
          (i.left = n.offsetLeft);
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function lz({ children: e, isPresent: t }) {
    const n = x.useId(),
      i = x.useRef(null),
      a = x.useRef({ width: 0, height: 0, top: 0, left: 0 }),
      { nonce: l } = x.useContext(eh);
    return (
      x.useInsertionEffect(() => {
        const { width: c, height: d, top: p, left: h } = a.current;
        if (t || !i.current || !c || !d) return;
        i.current.dataset.motionPopId = n;
        const g = document.createElement("style");
        return (
          l && (g.nonce = l),
          document.head.appendChild(g),
          g.sheet &&
            g.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${p}px !important;
            left: ${h}px !important;
          }
        `),
          () => {
            document.head.removeChild(g);
          }
        );
      }, [t]),
      R.jsx(sz, {
        isPresent: t,
        childRef: i,
        sizeRef: a,
        children: x.cloneElement(e, { ref: i }),
      })
    );
  }
  const cz = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: i,
    custom: a,
    presenceAffectsLayout: l,
    mode: c,
  }) => {
    const d = oh(uz),
      p = x.useId(),
      h = x.useCallback(
        (v) => {
          d.set(v, !0);
          for (const b of d.values()) if (!b) return;
          i && i();
        },
        [d, i]
      ),
      g = x.useMemo(
        () => ({
          id: p,
          initial: t,
          isPresent: n,
          custom: a,
          onExitComplete: h,
          register: (v) => (d.set(v, !1), () => d.delete(v)),
        }),
        l ? [Math.random(), h] : [n, h]
      );
    return (
      x.useMemo(() => {
        d.forEach((v, b) => d.set(b, !1));
      }, [n]),
      x.useEffect(() => {
        !n && !d.size && i && i();
      }, [n]),
      c === "popLayout" && (e = R.jsx(lz, { isPresent: n, children: e })),
      R.jsx(Ys.Provider, { value: g, children: e })
    );
  };
  function uz() {
    return new Map();
  }
  const pu = (e) => e.key || "";
  function j1(e) {
    const t = [];
    return (
      x.Children.forEach(e, (n) => {
        x.isValidElement(n) && t.push(n);
      }),
      t
    );
  }
  const el = ({
      children: e,
      exitBeforeEnter: t,
      custom: n,
      initial: i = !0,
      onExitComplete: a,
      presenceAffectsLayout: l = !0,
      mode: c = "sync",
    }) => {
      const d = x.useMemo(() => j1(e), [e]),
        p = d.map(pu),
        h = x.useRef(!0),
        g = x.useRef(d),
        v = oh(() => new Map()),
        [b, k] = x.useState(d),
        [S, w] = x.useState(d);
      l1(() => {
        (h.current = !1), (g.current = d);
        for (let O = 0; O < S.length; O++) {
          const M = pu(S[O]);
          p.includes(M) ? v.delete(M) : v.get(M) !== !0 && v.set(M, !1);
        }
      }, [S, p.length, p.join("-")]);
      const _ = [];
      if (d !== b) {
        let O = [...d];
        for (let M = 0; M < S.length; M++) {
          const $ = S[M],
            E = pu($);
          p.includes(E) || (O.splice(M, 0, $), _.push($));
        }
        c === "wait" && _.length && (O = _), w(j1(O)), k(d);
        return;
      }
      const { forceRender: j } = x.useContext(Kp);
      return R.jsx(R.Fragment, {
        children: S.map((O) => {
          const M = pu(O),
            $ = d === S || p.includes(M),
            E = () => {
              if (v.has(M)) v.set(M, !0);
              else return;
              let I = !0;
              v.forEach((L) => {
                L || (I = !1);
              }),
                I && (j == null || j(), w(g.current), a && a());
            };
          return R.jsx(
            cz,
            {
              isPresent: $,
              initial: !h.current || i ? void 0 : !1,
              custom: $ ? void 0 : n,
              presenceAffectsLayout: l,
              mode: c,
              onExitComplete: $ ? void 0 : E,
              children: O,
            },
            M
          );
        }),
      });
    },
    dz = (e, t) => e.find((n) => n.id === t);
  function O1(e, t) {
    const n = A1(e, t),
      i = n ? e[n].findIndex((a) => a.id === t) : -1;
    return { position: n, index: i };
  }
  function A1(e, t) {
    for (const [n, i] of Object.entries(e)) if (dz(i, t)) return n;
  }
  function fz(e) {
    const t = e.includes("right"),
      n = e.includes("left");
    let i = "center";
    return (
      t && (i = "flex-end"),
      n && (i = "flex-start"),
      { display: "flex", flexDirection: "column", alignItems: i }
    );
  }
  function pz(e) {
    const t = e === "top" || e === "bottom" ? "0 auto" : void 0,
      n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
      i = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
      a = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
      l = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
    return {
      position: "fixed",
      zIndex: "var(--toast-z-index, 5500)",
      pointerEvents: "none",
      display: "flex",
      flexDirection: "column",
      margin: t,
      top: n,
      bottom: i,
      right: a,
      left: l,
    };
  }
  var hz =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    mz = yv(function (e) {
      return (
        hz.test(e) ||
        (e.charCodeAt(0) === 111 &&
          e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91)
      );
    }),
    gz = mz,
    vz = function (e) {
      return e !== "theme";
    },
    T1 = function (e) {
      return typeof e == "string" && e.charCodeAt(0) > 96 ? gz : vz;
    },
    M1 = function (e, t, n) {
      var i;
      if (t) {
        var a = t.shouldForwardProp;
        i =
          e.__emotion_forwardProp && a
            ? function (l) {
                return e.__emotion_forwardProp(l) && a(l);
              }
            : a;
      }
      return typeof i != "function" && n && (i = e.__emotion_forwardProp), i;
    },
    yz = function (e) {
      var t = e.cache,
        n = e.serialized,
        i = e.isStringTag;
      return (
        Kf(t, n, i),
        Av(function () {
          return Gf(t, n, i);
        }),
        null
      );
    },
    bz = function e(t, n) {
      var i = t.__emotion_real === t,
        a = (i && t.__emotion_base) || t,
        l,
        c;
      n !== void 0 && ((l = n.label), (c = n.target));
      var d = M1(t, n, i),
        p = d || T1(a),
        h = !p("as");
      return function () {
        var g = arguments,
          v =
            i && t.__emotion_styles !== void 0
              ? t.__emotion_styles.slice(0)
              : [];
        if (
          (l !== void 0 && v.push("label:" + l + ";"),
          g[0] == null || g[0].raw === void 0)
        )
          v.push.apply(v, g);
        else {
          var b = g[0];
          v.push(b[0]);
          for (var k = g.length, S = 1; S < k; S++) v.push(g[S], b[S]);
        }
        var w = qc(function (_, j, O) {
          var M = (h && _.as) || a,
            $ = "",
            E = [],
            I = _;
          if (_.theme == null) {
            I = {};
            for (var L in _) I[L] = _[L];
            I.theme = x.useContext(Qi);
          }
          typeof _.className == "string"
            ? ($ = Cv(j.registered, E, _.className))
            : _.className != null && ($ = _.className + " ");
          var H = Hc(v.concat(E), j.registered, I);
          ($ += j.key + "-" + H.name), c !== void 0 && ($ += " " + c);
          var G = h && d === void 0 ? T1(M) : p,
            q = {};
          for (var ie in _) (h && ie === "as") || (G(ie) && (q[ie] = _[ie]));
          return (
            (q.className = $),
            O && (q.ref = O),
            x.createElement(
              x.Fragment,
              null,
              x.createElement(yz, {
                cache: j,
                serialized: H,
                isStringTag: typeof M == "string",
              }),
              x.createElement(M, q)
            )
          );
        });
        return (
          (w.displayName =
            l !== void 0
              ? l
              : "Styled(" +
                (typeof a == "string"
                  ? a
                  : a.displayName || a.name || "Component") +
                ")"),
          (w.defaultProps = t.defaultProps),
          (w.__emotion_real = w),
          (w.__emotion_base = a),
          (w.__emotion_styles = v),
          (w.__emotion_forwardProp = d),
          Object.defineProperty(w, "toString", {
            value: function () {
              return "." + c;
            },
          }),
          (w.withComponent = function (_, j) {
            var O = e(_, Zo({}, n, j, { shouldForwardProp: M1(w, j, !0) }));
            return O.apply(void 0, v);
          }),
          w
        );
      };
    },
    xz = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
    ],
    uh = bz.bind(null);
  xz.forEach(function (e) {
    uh[e] = uh(e);
  });
  const wz = new Set([
      ...U2,
      "textStyle",
      "layerStyle",
      "apply",
      "noOfLines",
      "focusBorderColor",
      "errorBorderColor",
      "as",
      "__css",
      "css",
      "sx",
    ]),
    kz = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
  function Sz(e) {
    return (kz.has(e) || !wz.has(e)) && e[0] !== "_";
  }
  const _z = LC(uh),
    Cz =
      ({ baseStyle: e }) =>
      (t) => {
        const { theme: n, css: i, __css: a, sx: l, ...c } = t,
          [d] = UC(c, q2),
          p = vr(e, t),
          h = SC({}, a, p, fc(d), l),
          g = Ag(h)(t.theme);
        return i ? [g, i] : g;
      };
  function dh(e, t) {
    const { baseStyle: n, ...i } = t ?? {};
    i.shouldForwardProp || (i.shouldForwardProp = Sz);
    const a = Cz({ baseStyle: n }),
      l = _z(e, i)(a);
    return x.forwardRef(function (c, d) {
      const { children: p, ...h } = c,
        { colorMode: g, forced: v } = Jf(),
        b = v ? g : void 0;
      return x.createElement(l, { ref: d, "data-theme": b, ...h }, p);
    });
  }
  function Ez() {
    const e = new Map();
    return new Proxy(dh, {
      apply(t, n, i) {
        return dh(...i);
      },
      get(t, n) {
        return e.has(n) || e.set(n, dh(n)), e.get(n);
      },
    });
  }
  const Ce = Ez(),
    Pz = {
      initial: (e) => {
        const { position: t } = e,
          n = ["top", "bottom"].includes(t) ? "y" : "x";
        let i = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
        return t === "bottom" && (i = 1), { opacity: 0, [n]: i * 24 };
      },
      animate: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      },
      exit: {
        opacity: 0,
        scale: 0.85,
        transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
      },
    },
    z1 = x.memo((e) => {
      const {
          id: t,
          message: n,
          onCloseComplete: i,
          onRequestRemove: a,
          requestClose: l = !1,
          position: c = "bottom",
          duration: d = 5e3,
          containerStyle: p,
          motionVariants: h = Pz,
          toastSpacing: g = "0.5rem",
        } = e,
        [v, b] = x.useState(d),
        k = x6();
      fs(() => {
        k || i == null || i();
      }, [k]),
        fs(() => {
          b(d);
        }, [d]);
      const S = () => b(null),
        w = () => b(d),
        _ = () => {
          k && a();
        };
      x.useEffect(() => {
        k && l && a();
      }, [k, l, a]),
        c2(_, v);
      const j = x.useMemo(
          () => ({
            pointerEvents: "auto",
            maxWidth: 560,
            minWidth: 300,
            margin: g,
            ...p,
          }),
          [p, g]
        ),
        O = x.useMemo(() => fz(c), [c]);
      return R.jsx(ri.div, {
        layout: !0,
        className: "chakra-toast",
        variants: h,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        onHoverStart: S,
        onHoverEnd: w,
        custom: { position: c },
        style: O,
        children: R.jsx(Ce.div, {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: j,
          children: vr(n, { id: t, onClose: _ }),
        }),
      });
    });
  z1.displayName = "ToastComponent";
  function De(e) {
    return x.forwardRef(e);
  }
  var fh, D1;
  function Rz() {
    if (D1) return fh;
    D1 = 1;
    var e = typeof Element < "u",
      t = typeof Map == "function",
      n = typeof Set == "function",
      i = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
    function a(l, c) {
      if (l === c) return !0;
      if (l && c && typeof l == "object" && typeof c == "object") {
        if (l.constructor !== c.constructor) return !1;
        var d, p, h;
        if (Array.isArray(l)) {
          if (((d = l.length), d != c.length)) return !1;
          for (p = d; p-- !== 0; ) if (!a(l[p], c[p])) return !1;
          return !0;
        }
        var g;
        if (t && l instanceof Map && c instanceof Map) {
          if (l.size !== c.size) return !1;
          for (g = l.entries(); !(p = g.next()).done; )
            if (!c.has(p.value[0])) return !1;
          for (g = l.entries(); !(p = g.next()).done; )
            if (!a(p.value[1], c.get(p.value[0]))) return !1;
          return !0;
        }
        if (n && l instanceof Set && c instanceof Set) {
          if (l.size !== c.size) return !1;
          for (g = l.entries(); !(p = g.next()).done; )
            if (!c.has(p.value[0])) return !1;
          return !0;
        }
        if (i && ArrayBuffer.isView(l) && ArrayBuffer.isView(c)) {
          if (((d = l.length), d != c.length)) return !1;
          for (p = d; p-- !== 0; ) if (l[p] !== c[p]) return !1;
          return !0;
        }
        if (l.constructor === RegExp)
          return l.source === c.source && l.flags === c.flags;
        if (
          l.valueOf !== Object.prototype.valueOf &&
          typeof l.valueOf == "function" &&
          typeof c.valueOf == "function"
        )
          return l.valueOf() === c.valueOf();
        if (
          l.toString !== Object.prototype.toString &&
          typeof l.toString == "function" &&
          typeof c.toString == "function"
        )
          return l.toString() === c.toString();
        if (((h = Object.keys(l)), (d = h.length), d !== Object.keys(c).length))
          return !1;
        for (p = d; p-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(c, h[p])) return !1;
        if (e && l instanceof Element) return !1;
        for (p = d; p-- !== 0; )
          if (
            !(
              (h[p] === "_owner" || h[p] === "__v" || h[p] === "__o") &&
              l.$$typeof
            ) &&
            !a(l[h[p]], c[h[p]])
          )
            return !1;
        return !0;
      }
      return l !== l && c !== c;
    }
    return (
      (fh = function (l, c) {
        try {
          return a(l, c);
        } catch (d) {
          if ((d.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw d;
        }
      }),
      fh
    );
  }
  var jz = Rz();
  const Oz = dc(jz);
  function I1() {
    const e = x.useContext(Qi);
    if (!e)
      throw Error(
        "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
      );
    return e;
  }
  function F1() {
    const e = Jf(),
      t = I1();
    return { ...e, theme: t };
  }
  function L1(e, t = {}) {
    const { styleConfig: n, ...i } = t,
      { theme: a, colorMode: l } = F1(),
      c = e ? xg(a, `components.${e}`) : void 0,
      d = n || c,
      p = dn(
        { theme: a, colorMode: l },
        (d == null ? void 0 : d.defaultProps) ?? {},
        fc(sf(i, ["children"])),
        (g, v) => (g ? void 0 : v)
      ),
      h = x.useRef({});
    if (d) {
      const g = rE(d)(p);
      Oz(h.current, g) || (h.current = g);
    }
    return h.current;
  }
  function fo(e, t = {}) {
    return L1(e, t);
  }
  function po(e, t = {}) {
    return L1(e, t);
  }
  const N1 = {
      path: R.jsxs("g", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        children: [
          R.jsx("path", {
            strokeLinecap: "round",
            fill: "none",
            d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
          }),
          R.jsx("path", {
            fill: "currentColor",
            strokeLinecap: "round",
            d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
          }),
          R.jsx("circle", {
            fill: "none",
            strokeMiterlimit: "10",
            cx: "12",
            cy: "12",
            r: "11.25",
          }),
        ],
      }),
      viewBox: "0 0 24 24",
    },
    Jr = De((e, t) => {
      const {
          as: n,
          viewBox: i,
          color: a = "currentColor",
          focusable: l = !1,
          children: c,
          className: d,
          __css: p,
          ...h
        } = e,
        g = ze("chakra-icon", d),
        v = fo("Icon", e),
        b = {
          w: "1em",
          h: "1em",
          display: "inline-block",
          lineHeight: "1em",
          flexShrink: 0,
          color: a,
          ...p,
          ...v,
        },
        k = { ref: t, focusable: l, className: g, __css: b },
        S = i ?? N1.viewBox;
      if (n && typeof n != "string")
        return R.jsx(Ce.svg, { as: n, ...k, ...h });
      const w = c ?? N1.path;
      return R.jsx(Ce.svg, {
        verticalAlign: "middle",
        viewBox: S,
        ...k,
        ...h,
        children: w,
      });
    });
  Jr.displayName = "Icon";
  function Az(e) {
    return R.jsx(Jr, {
      viewBox: "0 0 24 24",
      ...e,
      children: R.jsx("path", {
        fill: "currentColor",
        d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
      }),
    });
  }
  function Tz(e) {
    return R.jsx(Jr, {
      viewBox: "0 0 24 24",
      ...e,
      children: R.jsx("path", {
        fill: "currentColor",
        d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
      }),
    });
  }
  function $1(e) {
    return R.jsx(Jr, {
      viewBox: "0 0 24 24",
      ...e,
      children: R.jsx("path", {
        fill: "currentColor",
        d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
      }),
    });
  }
  const Mz = CO({
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    }),
    ph = De((e, t) => {
      const n = fo("Spinner", e),
        {
          label: i = "加载中···",
          thickness: a = "2px",
          speed: l = "0.45s",
          emptyColor: c = "transparent",
          className: d,
          ...p
        } = nr(e),
        h = ze("chakra-spinner", d),
        g = {
          display: "inline-block",
          borderColor: "currentColor",
          borderStyle: "solid",
          borderRadius: "99999px",
          borderWidth: a,
          borderBottomColor: c,
          borderLeftColor: c,
          animation: `${Mz} ${l} linear infinite`,
          ...n,
        };
      return R.jsx(Ce.div, {
        ref: t,
        __css: g,
        className: h,
        ...p,
        children: i && R.jsx(Ce.span, { srOnly: !0, children: i }),
      });
    });
  ph.displayName = "Spinner";
  const [zz, hh] = tr({
      name: "AlertContext",
      hookName: "useAlertContext",
      providerName: "<Alert />",
    }),
    [Dz, mh] = tr({
      name: "AlertStylesContext",
      hookName: "useAlertStyles",
      providerName: "<Alert />",
    }),
    B1 = {
      info: { icon: Tz, colorScheme: "blue" },
      warning: { icon: $1, colorScheme: "orange" },
      success: { icon: Az, colorScheme: "green" },
      error: { icon: $1, colorScheme: "red" },
      loading: { icon: ph, colorScheme: "blue" },
    };
  function Iz(e) {
    return B1[e].colorScheme;
  }
  function Fz(e) {
    return B1[e].icon;
  }
  const V1 = De(function (e, t) {
    const { status: n = "info", addRole: i = !0, ...a } = nr(e),
      l = e.colorScheme ?? Iz(n),
      c = po("Alert", { ...e, colorScheme: l }),
      d = {
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        ...c.container,
      };
    return R.jsx(zz, {
      value: { status: n },
      children: R.jsx(Dz, {
        value: c,
        children: R.jsx(Ce.div, {
          "data-status": n,
          role: i ? "alert" : void 0,
          ref: t,
          ...a,
          className: ze("chakra-alert", e.className),
          __css: d,
        }),
      }),
    });
  });
  V1.displayName = "Alert";
  function W1(e) {
    const { status: t } = hh(),
      n = Fz(t),
      i = mh(),
      a = t === "loading" ? i.spinner : i.icon;
    return R.jsx(Ce.span, {
      display: "inherit",
      "data-status": t,
      ...e,
      className: ze("chakra-alert__icon", e.className),
      __css: a,
      children: e.children || R.jsx(n, { h: "100%", w: "100%" }),
    });
  }
  W1.displayName = "AlertIcon";
  const U1 = De(function (e, t) {
    const n = mh(),
      { status: i } = hh();
    return R.jsx(Ce.div, {
      ref: t,
      "data-status": i,
      ...e,
      className: ze("chakra-alert__title", e.className),
      __css: n.title,
    });
  });
  U1.displayName = "AlertTitle";
  const H1 = De(function (e, t) {
    const { status: n } = hh(),
      i = mh(),
      a = { display: "inline", ...i.description };
    return R.jsx(Ce.div, {
      ref: t,
      "data-status": n,
      ...e,
      className: ze("chakra-alert__desc", e.className),
      __css: a,
    });
  });
  H1.displayName = "AlertDescription";
  function Lz(e) {
    return R.jsx(Jr, {
      focusable: "false",
      "aria-hidden": !0,
      ...e,
      children: R.jsx("path", {
        fill: "currentColor",
        d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
      }),
    });
  }
  const gh = De(function (e, t) {
    const n = fo("CloseButton", e),
      { children: i, isDisabled: a, __css: l, ...c } = nr(e),
      d = {
        outline: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      };
    return R.jsx(Ce.button, {
      type: "button",
      "aria-label": "Close",
      ref: t,
      disabled: a,
      __css: { ...d, ...n, ...l },
      ...c,
      children: i || R.jsx(Lz, { width: "1em", height: "1em" }),
    });
  });
  gh.displayName = "CloseButton";
  const Nz = (e) => {
    const {
        status: t,
        variant: n = "solid",
        id: i,
        title: a,
        isClosable: l,
        onClose: c,
        description: d,
        colorScheme: p,
        icon: h,
      } = e,
      g = i
        ? {
            root: `toast-${i}`,
            title: `toast-${i}-title`,
            description: `toast-${i}-description`,
          }
        : void 0;
    return R.jsxs(V1, {
      addRole: !1,
      status: t,
      variant: n,
      id: g == null ? void 0 : g.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: p,
      children: [
        R.jsx(W1, { children: h }),
        R.jsxs(Ce.div, {
          flex: "1",
          maxWidth: "100%",
          children: [
            a && R.jsx(U1, { id: g == null ? void 0 : g.title, children: a }),
            d &&
              R.jsx(H1, {
                id: g == null ? void 0 : g.description,
                display: "block",
                children: d,
              }),
          ],
        }),
        l &&
          R.jsx(gh, {
            size: "sm",
            onClick: c,
            position: "absolute",
            insetEnd: 1,
            top: 1,
          }),
      ],
    });
  };
  function q1(e = {}) {
    const { render: t, toastComponent: n = Nz } = e;
    return (i) =>
      typeof t == "function" ? t({ ...i, ...e }) : R.jsx(n, { ...i, ...e });
  }
  const $z = {
      top: [],
      "top-left": [],
      "top-right": [],
      "bottom-left": [],
      bottom: [],
      "bottom-right": [],
    },
    wn = Bz($z);
  function Bz(e) {
    let t = e;
    const n = new Set(),
      i = (a) => {
        (t = a(t)), n.forEach((l) => l());
      };
    return {
      getState: () => t,
      subscribe: (a) => (
        n.add(a),
        () => {
          i(() => e), n.delete(a);
        }
      ),
      removeToast: (a, l) => {
        i((c) => ({ ...c, [l]: c[l].filter((d) => d.id != a) }));
      },
      notify: (a, l) => {
        const c = Vz(a, l),
          { position: d, id: p } = c;
        return (
          i((h) => {
            const g = d.includes("top")
              ? [c, ...(h[d] ?? [])]
              : [...(h[d] ?? []), c];
            return { ...h, [d]: g };
          }),
          p
        );
      },
      update: (a, l) => {
        a &&
          i((c) => {
            const d = { ...c },
              { position: p, index: h } = O1(d, a);
            return (
              p && h !== -1 && (d[p][h] = { ...d[p][h], ...l, message: q1(l) }),
              d
            );
          });
      },
      closeAll: ({ positions: a } = {}) => {
        i((l) =>
          (
            a ?? [
              "bottom",
              "bottom-right",
              "bottom-left",
              "top",
              "top-left",
              "top-right",
            ]
          ).reduce(
            (c, d) => (
              (c[d] = l[d].map((p) => ({ ...p, requestClose: !0 }))), c
            ),
            { ...l }
          )
        );
      },
      close: (a) => {
        i((l) => {
          const c = A1(l, a);
          return c
            ? {
                ...l,
                [c]: l[c].map((d) =>
                  d.id == a ? { ...d, requestClose: !0 } : d
                ),
              }
            : l;
        });
      },
      isActive: (a) => !!O1(wn.getState(), a).position,
    };
  }
  let K1 = 0;
  function Vz(e, t = {}) {
    K1 += 1;
    const n = t.id ?? K1,
      i = t.position ?? "bottom";
    return {
      id: n,
      message: e,
      position: i,
      duration: t.duration,
      onCloseComplete: t.onCloseComplete,
      onRequestRemove: () => wn.removeToast(String(n), i),
      status: t.status,
      requestClose: !1,
      containerStyle: t.containerStyle,
    };
  }
  var vh = { exports: {} },
    ar = {},
    G1 = { exports: {} },
    Z1 = {},
    X1;
  function Wz() {
    return (
      X1 ||
        ((X1 = 1),
        (function (e) {
          function t(K, ne) {
            var te = K.length;
            K.push(ne);
            e: for (; 0 < te; ) {
              var A = (te - 1) >>> 1,
                V = K[A];
              if (0 < a(V, ne)) (K[A] = ne), (K[te] = V), (te = A);
              else break e;
            }
          }
          function n(K) {
            return K.length === 0 ? null : K[0];
          }
          function i(K) {
            if (K.length === 0) return null;
            var ne = K[0],
              te = K.pop();
            if (te !== ne) {
              K[0] = te;
              e: for (var A = 0, V = K.length, Y = V >>> 1; A < Y; ) {
                var oe = 2 * (A + 1) - 1,
                  pe = K[oe],
                  ye = oe + 1,
                  de = K[ye];
                if (0 > a(pe, te))
                  ye < V && 0 > a(de, pe)
                    ? ((K[A] = de), (K[ye] = te), (A = ye))
                    : ((K[A] = pe), (K[oe] = te), (A = oe));
                else if (ye < V && 0 > a(de, te))
                  (K[A] = de), (K[ye] = te), (A = ye);
                else break e;
              }
            }
            return ne;
          }
          function a(K, ne) {
            var te = K.sortIndex - ne.sortIndex;
            return te !== 0 ? te : K.id - ne.id;
          }
          if (
            typeof performance == "object" &&
            typeof performance.now == "function"
          ) {
            var l = performance;
            e.unstable_now = function () {
              return l.now();
            };
          } else {
            var c = Date,
              d = c.now();
            e.unstable_now = function () {
              return c.now() - d;
            };
          }
          var p = [],
            h = [],
            g = 1,
            v = null,
            b = 3,
            k = !1,
            S = !1,
            w = !1,
            _ = typeof setTimeout == "function" ? setTimeout : null,
            j = typeof clearTimeout == "function" ? clearTimeout : null,
            O = typeof setImmediate < "u" ? setImmediate : null;
          typeof navigator < "u" &&
            navigator.scheduling !== void 0 &&
            navigator.scheduling.isInputPending !== void 0 &&
            navigator.scheduling.isInputPending.bind(navigator.scheduling);
          function M(K) {
            for (var ne = n(h); ne !== null; ) {
              if (ne.callback === null) i(h);
              else if (ne.startTime <= K)
                i(h), (ne.sortIndex = ne.expirationTime), t(p, ne);
              else break;
              ne = n(h);
            }
          }
          function $(K) {
            if (((w = !1), M(K), !S))
              if (n(p) !== null) (S = !0), re(E);
              else {
                var ne = n(h);
                ne !== null && se($, ne.startTime - K);
              }
          }
          function E(K, ne) {
            (S = !1), w && ((w = !1), j(H), (H = -1)), (k = !0);
            var te = b;
            try {
              for (
                M(ne), v = n(p);
                v !== null && (!(v.expirationTime > ne) || (K && !ie()));

              ) {
                var A = v.callback;
                if (typeof A == "function") {
                  (v.callback = null), (b = v.priorityLevel);
                  var V = A(v.expirationTime <= ne);
                  (ne = e.unstable_now()),
                    typeof V == "function"
                      ? (v.callback = V)
                      : v === n(p) && i(p),
                    M(ne);
                } else i(p);
                v = n(p);
              }
              if (v !== null) var Y = !0;
              else {
                var oe = n(h);
                oe !== null && se($, oe.startTime - ne), (Y = !1);
              }
              return Y;
            } finally {
              (v = null), (b = te), (k = !1);
            }
          }
          var I = !1,
            L = null,
            H = -1,
            G = 5,
            q = -1;
          function ie() {
            return !(e.unstable_now() - q < G);
          }
          function he() {
            if (L !== null) {
              var K = e.unstable_now();
              q = K;
              var ne = !0;
              try {
                ne = L(!0, K);
              } finally {
                ne ? ve() : ((I = !1), (L = null));
              }
            } else I = !1;
          }
          var ve;
          if (typeof O == "function")
            ve = function () {
              O(he);
            };
          else if (typeof MessageChannel < "u") {
            var Ee = new MessageChannel(),
              J = Ee.port2;
            (Ee.port1.onmessage = he),
              (ve = function () {
                J.postMessage(null);
              });
          } else
            ve = function () {
              _(he, 0);
            };
          function re(K) {
            (L = K), I || ((I = !0), ve());
          }
          function se(K, ne) {
            H = _(function () {
              K(e.unstable_now());
            }, ne);
          }
          (e.unstable_IdlePriority = 5),
            (e.unstable_ImmediatePriority = 1),
            (e.unstable_LowPriority = 4),
            (e.unstable_NormalPriority = 3),
            (e.unstable_Profiling = null),
            (e.unstable_UserBlockingPriority = 2),
            (e.unstable_cancelCallback = function (K) {
              K.callback = null;
            }),
            (e.unstable_continueExecution = function () {
              S || k || ((S = !0), re(E));
            }),
            (e.unstable_forceFrameRate = function (K) {
              0 > K || 125 < K
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (G = 0 < K ? Math.floor(1e3 / K) : 5);
            }),
            (e.unstable_getCurrentPriorityLevel = function () {
              return b;
            }),
            (e.unstable_getFirstCallbackNode = function () {
              return n(p);
            }),
            (e.unstable_next = function (K) {
              switch (b) {
                case 1:
                case 2:
                case 3:
                  var ne = 3;
                  break;
                default:
                  ne = b;
              }
              var te = b;
              b = ne;
              try {
                return K();
              } finally {
                b = te;
              }
            }),
            (e.unstable_pauseExecution = function () {}),
            (e.unstable_requestPaint = function () {}),
            (e.unstable_runWithPriority = function (K, ne) {
              switch (K) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  K = 3;
              }
              var te = b;
              b = K;
              try {
                return ne();
              } finally {
                b = te;
              }
            }),
            (e.unstable_scheduleCallback = function (K, ne, te) {
              var A = e.unstable_now();
              switch (
                (typeof te == "object" && te !== null
                  ? ((te = te.delay),
                    (te = typeof te == "number" && 0 < te ? A + te : A))
                  : (te = A),
                K)
              ) {
                case 1:
                  var V = -1;
                  break;
                case 2:
                  V = 250;
                  break;
                case 5:
                  V = 1073741823;
                  break;
                case 4:
                  V = 1e4;
                  break;
                default:
                  V = 5e3;
              }
              return (
                (V = te + V),
                (K = {
                  id: g++,
                  callback: ne,
                  priorityLevel: K,
                  startTime: te,
                  expirationTime: V,
                  sortIndex: -1,
                }),
                te > A
                  ? ((K.sortIndex = te),
                    t(h, K),
                    n(p) === null &&
                      K === n(h) &&
                      (w ? (j(H), (H = -1)) : (w = !0), se($, te - A)))
                  : ((K.sortIndex = V), t(p, K), S || k || ((S = !0), re(E))),
                K
              );
            }),
            (e.unstable_shouldYield = ie),
            (e.unstable_wrapCallback = function (K) {
              var ne = b;
              return function () {
                var te = b;
                b = ne;
                try {
                  return K.apply(this, arguments);
                } finally {
                  b = te;
                }
              };
            });
        })(Z1)),
      Z1
    );
  }
  var Y1;
  function Uz() {
    return Y1 || ((Y1 = 1), (G1.exports = Wz())), G1.exports;
  }
  var Q1;
  function Hz() {
    if (Q1) return ar;
    Q1 = 1;
    var e = tf(),
      t = Uz();
    function n(r) {
      for (
        var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + r,
          s = 1;
        s < arguments.length;
        s++
      )
        o += "&args[]=" + encodeURIComponent(arguments[s]);
      return (
        "Minified React error #" +
        r +
        "; visit " +
        o +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var i = new Set(),
      a = {};
    function l(r, o) {
      c(r, o), c(r + "Capture", o);
    }
    function c(r, o) {
      for (a[r] = o, r = 0; r < o.length; r++) i.add(o[r]);
    }
    var d = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      p = Object.prototype.hasOwnProperty,
      h =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      g = {},
      v = {};
    function b(r) {
      return p.call(v, r)
        ? !0
        : p.call(g, r)
        ? !1
        : h.test(r)
        ? (v[r] = !0)
        : ((g[r] = !0), !1);
    }
    function k(r, o, s, u) {
      if (s !== null && s.type === 0) return !1;
      switch (typeof o) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return u
            ? !1
            : s !== null
            ? !s.acceptsBooleans
            : ((r = r.toLowerCase().slice(0, 5)),
              r !== "data-" && r !== "aria-");
        default:
          return !1;
      }
    }
    function S(r, o, s, u) {
      if (o === null || typeof o > "u" || k(r, o, s, u)) return !0;
      if (u) return !1;
      if (s !== null)
        switch (s.type) {
          case 3:
            return !o;
          case 4:
            return o === !1;
          case 5:
            return isNaN(o);
          case 6:
            return isNaN(o) || 1 > o;
        }
      return !1;
    }
    function w(r, o, s, u, f, m, y) {
      (this.acceptsBooleans = o === 2 || o === 3 || o === 4),
        (this.attributeName = u),
        (this.attributeNamespace = f),
        (this.mustUseProperty = s),
        (this.propertyName = r),
        (this.type = o),
        (this.sanitizeURL = m),
        (this.removeEmptyString = y);
    }
    var _ = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (r) {
        _[r] = new w(r, 0, !1, r, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (r) {
        var o = r[0];
        _[o] = new w(o, 1, !1, r[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        r
      ) {
        _[r] = new w(r, 2, !1, r.toLowerCase(), null, !1, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (r) {
        _[r] = new w(r, 2, !1, r, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (r) {
          _[r] = new w(r, 3, !1, r.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (r) {
        _[r] = new w(r, 3, !0, r, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (r) {
        _[r] = new w(r, 4, !1, r, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (r) {
        _[r] = new w(r, 6, !1, r, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (r) {
        _[r] = new w(r, 5, !1, r.toLowerCase(), null, !1, !1);
      });
    var j = /[\-:]([a-z])/g;
    function O(r) {
      return r[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (r) {
        var o = r.replace(j, O);
        _[o] = new w(o, 1, !1, r, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (r) {
          var o = r.replace(j, O);
          _[o] = new w(o, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (r) {
        var o = r.replace(j, O);
        _[o] = new w(
          o,
          1,
          !1,
          r,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (r) {
        _[r] = new w(r, 1, !1, r.toLowerCase(), null, !1, !1);
      }),
      (_.xlinkHref = new w(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
      ["src", "href", "action", "formAction"].forEach(function (r) {
        _[r] = new w(r, 1, !1, r.toLowerCase(), null, !0, !0);
      });
    function M(r, o, s, u) {
      var f = _.hasOwnProperty(o) ? _[o] : null;
      (f !== null
        ? f.type !== 0
        : u ||
          !(2 < o.length) ||
          (o[0] !== "o" && o[0] !== "O") ||
          (o[1] !== "n" && o[1] !== "N")) &&
        (S(o, s, f, u) && (s = null),
        u || f === null
          ? b(o) &&
            (s === null ? r.removeAttribute(o) : r.setAttribute(o, "" + s))
          : f.mustUseProperty
          ? (r[f.propertyName] = s === null ? (f.type === 3 ? !1 : "") : s)
          : ((o = f.attributeName),
            (u = f.attributeNamespace),
            s === null
              ? r.removeAttribute(o)
              : ((f = f.type),
                (s = f === 3 || (f === 4 && s === !0) ? "" : "" + s),
                u ? r.setAttributeNS(u, o, s) : r.setAttribute(o, s))));
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      E = Symbol.for("react.element"),
      I = Symbol.for("react.portal"),
      L = Symbol.for("react.fragment"),
      H = Symbol.for("react.strict_mode"),
      G = Symbol.for("react.profiler"),
      q = Symbol.for("react.provider"),
      ie = Symbol.for("react.context"),
      he = Symbol.for("react.forward_ref"),
      ve = Symbol.for("react.suspense"),
      Ee = Symbol.for("react.suspense_list"),
      J = Symbol.for("react.memo"),
      re = Symbol.for("react.lazy"),
      se = Symbol.for("react.offscreen"),
      K = Symbol.iterator;
    function ne(r) {
      return r === null || typeof r != "object"
        ? null
        : ((r = (K && r[K]) || r["@@iterator"]),
          typeof r == "function" ? r : null);
    }
    var te = Object.assign,
      A;
    function V(r) {
      if (A === void 0)
        try {
          throw Error();
        } catch (s) {
          var o = s.stack.trim().match(/\n( *(at )?)/);
          A = (o && o[1]) || "";
        }
      return (
        `
` +
        A +
        r
      );
    }
    var Y = !1;
    function oe(r, o) {
      if (!r || Y) return "";
      Y = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (o)
          if (
            ((o = function () {
              throw Error();
            }),
            Object.defineProperty(o.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(o, []);
            } catch (W) {
              var u = W;
            }
            Reflect.construct(r, [], o);
          } else {
            try {
              o.call();
            } catch (W) {
              u = W;
            }
            r.call(o.prototype);
          }
        else {
          try {
            throw Error();
          } catch (W) {
            u = W;
          }
          r();
        }
      } catch (W) {
        if (W && u && typeof W.stack == "string") {
          for (
            var f = W.stack.split(`
`),
              m = u.stack.split(`
`),
              y = f.length - 1,
              P = m.length - 1;
            1 <= y && 0 <= P && f[y] !== m[P];

          )
            P--;
          for (; 1 <= y && 0 <= P; y--, P--)
            if (f[y] !== m[P]) {
              if (y !== 1 || P !== 1)
                do
                  if ((y--, P--, 0 > P || f[y] !== m[P])) {
                    var T =
                      `
` + f[y].replace(" at new ", " at ");
                    return (
                      r.displayName &&
                        T.includes("<anonymous>") &&
                        (T = T.replace("<anonymous>", r.displayName)),
                      T
                    );
                  }
                while (1 <= y && 0 <= P);
              break;
            }
        }
      } finally {
        (Y = !1), (Error.prepareStackTrace = s);
      }
      return (r = r ? r.displayName || r.name : "") ? V(r) : "";
    }
    function pe(r) {
      switch (r.tag) {
        case 5:
          return V(r.type);
        case 16:
          return V("Lazy");
        case 13:
          return V("Suspense");
        case 19:
          return V("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (r = oe(r.type, !1)), r;
        case 11:
          return (r = oe(r.type.render, !1)), r;
        case 1:
          return (r = oe(r.type, !0)), r;
        default:
          return "";
      }
    }
    function ye(r) {
      if (r == null) return null;
      if (typeof r == "function") return r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case L:
          return "Fragment";
        case I:
          return "Portal";
        case G:
          return "Profiler";
        case H:
          return "StrictMode";
        case ve:
          return "Suspense";
        case Ee:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case ie:
            return (r.displayName || "Context") + ".Consumer";
          case q:
            return (r._context.displayName || "Context") + ".Provider";
          case he:
            var o = r.render;
            return (
              (r = r.displayName),
              r ||
                ((r = o.displayName || o.name || ""),
                (r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")),
              r
            );
          case J:
            return (
              (o = r.displayName || null), o !== null ? o : ye(r.type) || "Memo"
            );
          case re:
            (o = r._payload), (r = r._init);
            try {
              return ye(r(o));
            } catch {}
        }
      return null;
    }
    function de(r) {
      var o = r.type;
      switch (r.tag) {
        case 24:
          return "Cache";
        case 9:
          return (o.displayName || "Context") + ".Consumer";
        case 10:
          return (o._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (r = o.render),
            (r = r.displayName || r.name || ""),
            o.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return o;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ye(o);
        case 8:
          return o === H ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof o == "function") return o.displayName || o.name || null;
          if (typeof o == "string") return o;
      }
      return null;
    }
    function ge(r) {
      switch (typeof r) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return r;
        case "object":
          return r;
        default:
          return "";
      }
    }
    function Oe(r) {
      var o = r.type;
      return (
        (r = r.nodeName) &&
        r.toLowerCase() === "input" &&
        (o === "checkbox" || o === "radio")
      );
    }
    function Qe(r) {
      var o = Oe(r) ? "checked" : "value",
        s = Object.getOwnPropertyDescriptor(r.constructor.prototype, o),
        u = "" + r[o];
      if (
        !r.hasOwnProperty(o) &&
        typeof s < "u" &&
        typeof s.get == "function" &&
        typeof s.set == "function"
      ) {
        var f = s.get,
          m = s.set;
        return (
          Object.defineProperty(r, o, {
            configurable: !0,
            get: function () {
              return f.call(this);
            },
            set: function (y) {
              (u = "" + y), m.call(this, y);
            },
          }),
          Object.defineProperty(r, o, { enumerable: s.enumerable }),
          {
            getValue: function () {
              return u;
            },
            setValue: function (y) {
              u = "" + y;
            },
            stopTracking: function () {
              (r._valueTracker = null), delete r[o];
            },
          }
        );
      }
    }
    function dt(r) {
      r._valueTracker || (r._valueTracker = Qe(r));
    }
    function Yt(r) {
      if (!r) return !1;
      var o = r._valueTracker;
      if (!o) return !0;
      var s = o.getValue(),
        u = "";
      return (
        r && (u = Oe(r) ? (r.checked ? "true" : "false") : r.value),
        (r = u),
        r !== s ? (o.setValue(r), !0) : !1
      );
    }
    function $t(r) {
      if (
        ((r = r || (typeof document < "u" ? document : void 0)), typeof r > "u")
      )
        return null;
      try {
        return r.activeElement || r.body;
      } catch {
        return r.body;
      }
    }
    function Pe(r, o) {
      var s = o.checked;
      return te({}, o, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: s ?? r._wrapperState.initialChecked,
      });
    }
    function qe(r, o) {
      var s = o.defaultValue == null ? "" : o.defaultValue,
        u = o.checked != null ? o.checked : o.defaultChecked;
      (s = ge(o.value != null ? o.value : s)),
        (r._wrapperState = {
          initialChecked: u,
          initialValue: s,
          controlled:
            o.type === "checkbox" || o.type === "radio"
              ? o.checked != null
              : o.value != null,
        });
    }
    function tt(r, o) {
      (o = o.checked), o != null && M(r, "checked", o, !1);
    }
    function be(r, o) {
      tt(r, o);
      var s = ge(o.value),
        u = o.type;
      if (s != null)
        u === "number"
          ? ((s === 0 && r.value === "") || r.value != s) && (r.value = "" + s)
          : r.value !== "" + s && (r.value = "" + s);
      else if (u === "submit" || u === "reset") {
        r.removeAttribute("value");
        return;
      }
      o.hasOwnProperty("value")
        ? Xe(r, o.type, s)
        : o.hasOwnProperty("defaultValue") && Xe(r, o.type, ge(o.defaultValue)),
        o.checked == null &&
          o.defaultChecked != null &&
          (r.defaultChecked = !!o.defaultChecked);
    }
    function Ze(r, o, s) {
      if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
        var u = o.type;
        if (
          !(
            (u !== "submit" && u !== "reset") ||
            (o.value !== void 0 && o.value !== null)
          )
        )
          return;
        (o = "" + r._wrapperState.initialValue),
          s || o === r.value || (r.value = o),
          (r.defaultValue = o);
      }
      (s = r.name),
        s !== "" && (r.name = ""),
        (r.defaultChecked = !!r._wrapperState.initialChecked),
        s !== "" && (r.name = s);
    }
    function Xe(r, o, s) {
      (o !== "number" || $t(r.ownerDocument) !== r) &&
        (s == null
          ? (r.defaultValue = "" + r._wrapperState.initialValue)
          : r.defaultValue !== "" + s && (r.defaultValue = "" + s));
    }
    var Ke = Array.isArray;
    function yt(r, o, s, u) {
      if (((r = r.options), o)) {
        o = {};
        for (var f = 0; f < s.length; f++) o["$" + s[f]] = !0;
        for (s = 0; s < r.length; s++)
          (f = o.hasOwnProperty("$" + r[s].value)),
            r[s].selected !== f && (r[s].selected = f),
            f && u && (r[s].defaultSelected = !0);
      } else {
        for (s = "" + ge(s), o = null, f = 0; f < r.length; f++) {
          if (r[f].value === s) {
            (r[f].selected = !0), u && (r[f].defaultSelected = !0);
            return;
          }
          o !== null || r[f].disabled || (o = r[f]);
        }
        o !== null && (o.selected = !0);
      }
    }
    function Qt(r, o) {
      if (o.dangerouslySetInnerHTML != null) throw Error(n(91));
      return te({}, o, {
        value: void 0,
        defaultValue: void 0,
        children: "" + r._wrapperState.initialValue,
      });
    }
    function Bt(r, o) {
      var s = o.value;
      if (s == null) {
        if (((s = o.children), (o = o.defaultValue), s != null)) {
          if (o != null) throw Error(n(92));
          if (Ke(s)) {
            if (1 < s.length) throw Error(n(93));
            s = s[0];
          }
          o = s;
        }
        o == null && (o = ""), (s = o);
      }
      r._wrapperState = { initialValue: ge(s) };
    }
    function tn(r, o) {
      var s = ge(o.value),
        u = ge(o.defaultValue);
      s != null &&
        ((s = "" + s),
        s !== r.value && (r.value = s),
        o.defaultValue == null && r.defaultValue !== s && (r.defaultValue = s)),
        u != null && (r.defaultValue = "" + u);
    }
    function vo(r) {
      var o = r.textContent;
      o === r._wrapperState.initialValue &&
        o !== "" &&
        o !== null &&
        (r.value = o);
    }
    function hi(r) {
      switch (r) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function yo(r, o) {
      return r == null || r === "http://www.w3.org/1999/xhtml"
        ? hi(o)
        : r === "http://www.w3.org/2000/svg" && o === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : r;
    }
    var Ir,
      Cl = (function (r) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (o, s, u, f) {
              MSApp.execUnsafeLocalFunction(function () {
                return r(o, s, u, f);
              });
            }
          : r;
      })(function (r, o) {
        if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r)
          r.innerHTML = o;
        else {
          for (
            Ir = Ir || document.createElement("div"),
              Ir.innerHTML = "<svg>" + o.valueOf().toString() + "</svg>",
              o = Ir.firstChild;
            r.firstChild;

          )
            r.removeChild(r.firstChild);
          for (; o.firstChild; ) r.appendChild(o.firstChild);
        }
      });
    function bo(r, o) {
      if (o) {
        var s = r.firstChild;
        if (s && s === r.lastChild && s.nodeType === 3) {
          s.nodeValue = o;
          return;
        }
      }
      r.textContent = o;
    }
    var xo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Wu = ["Webkit", "ms", "Moz", "O"];
    Object.keys(xo).forEach(function (r) {
      Wu.forEach(function (o) {
        (o = o + r.charAt(0).toUpperCase() + r.substring(1)), (xo[o] = xo[r]);
      });
    });
    function Uu(r, o, s) {
      return o == null || typeof o == "boolean" || o === ""
        ? ""
        : s ||
          typeof o != "number" ||
          o === 0 ||
          (xo.hasOwnProperty(r) && xo[r])
        ? ("" + o).trim()
        : o + "px";
    }
    function Hu(r, o) {
      r = r.style;
      for (var s in o)
        if (o.hasOwnProperty(s)) {
          var u = s.indexOf("--") === 0,
            f = Uu(s, o[s], u);
          s === "float" && (s = "cssFloat"),
            u ? r.setProperty(s, f) : (r[s] = f);
        }
    }
    var Hn = te(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function wo(r, o) {
      if (o) {
        if (Hn[r] && (o.children != null || o.dangerouslySetInnerHTML != null))
          throw Error(n(137, r));
        if (o.dangerouslySetInnerHTML != null) {
          if (o.children != null) throw Error(n(60));
          if (
            typeof o.dangerouslySetInnerHTML != "object" ||
            !("__html" in o.dangerouslySetInnerHTML)
          )
            throw Error(n(61));
        }
        if (o.style != null && typeof o.style != "object") throw Error(n(62));
      }
    }
    function El(r, o) {
      if (r.indexOf("-") === -1) return typeof o.is == "string";
      switch (r) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ja = null;
    function Pl(r) {
      return (
        (r = r.target || r.srcElement || window),
        r.correspondingUseElement && (r = r.correspondingUseElement),
        r.nodeType === 3 ? r.parentNode : r
      );
    }
    var Oa = null,
      Fr = null,
      ko = null;
    function En(r) {
      if ((r = Xl(r))) {
        if (typeof Oa != "function") throw Error(n(280));
        var o = r.stateNode;
        o && ((o = gd(o)), Oa(r.stateNode, r.type, o));
      }
    }
    function qu(r) {
      Fr ? (ko ? ko.push(r) : (ko = [r])) : (Fr = r);
    }
    function Ku() {
      if (Fr) {
        var r = Fr,
          o = ko;
        if (((ko = Fr = null), En(r), o))
          for (r = 0; r < o.length; r++) En(o[r]);
      }
    }
    function Gu(r, o) {
      return r(o);
    }
    function Zu() {}
    var Rl = !1;
    function Lr(r, o, s) {
      if (Rl) return r(o, s);
      Rl = !0;
      try {
        return Gu(r, o, s);
      } finally {
        (Rl = !1), (Fr !== null || ko !== null) && (Zu(), Ku());
      }
    }
    function mi(r, o) {
      var s = r.stateNode;
      if (s === null) return null;
      var u = gd(s);
      if (u === null) return null;
      s = u[o];
      e: switch (o) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) ||
            ((r = r.type),
            (u = !(
              r === "button" ||
              r === "input" ||
              r === "select" ||
              r === "textarea"
            ))),
            (r = !u);
          break e;
        default:
          r = !1;
      }
      if (r) return null;
      if (s && typeof s != "function") throw Error(n(231, o, typeof s));
      return s;
    }
    var jl = !1;
    if (d)
      try {
        var gi = {};
        Object.defineProperty(gi, "passive", {
          get: function () {
            jl = !0;
          },
        }),
          window.addEventListener("test", gi, gi),
          window.removeEventListener("test", gi, gi);
      } catch {
        jl = !1;
      }
    function xm(r, o, s, u, f, m, y, P, T) {
      var W = Array.prototype.slice.call(arguments, 3);
      try {
        o.apply(s, W);
      } catch (X) {
        this.onError(X);
      }
    }
    var vi = !1,
      rn = null,
      Aa = !1,
      Ol = null,
      wm = {
        onError: function (r) {
          (vi = !0), (rn = r);
        },
      };
    function km(r, o, s, u, f, m, y, P, T) {
      (vi = !1), (rn = null), xm.apply(wm, arguments);
    }
    function Sm(r, o, s, u, f, m, y, P, T) {
      if ((km.apply(this, arguments), vi)) {
        if (vi) {
          var W = rn;
          (vi = !1), (rn = null);
        } else throw Error(n(198));
        Aa || ((Aa = !0), (Ol = W));
      }
    }
    function dr(r) {
      var o = r,
        s = r;
      if (r.alternate) for (; o.return; ) o = o.return;
      else {
        r = o;
        do (o = r), o.flags & 4098 && (s = o.return), (r = o.return);
        while (r);
      }
      return o.tag === 3 ? s : null;
    }
    function Xu(r) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (
          (o === null &&
            ((r = r.alternate), r !== null && (o = r.memoizedState)),
          o !== null)
        )
          return o.dehydrated;
      }
      return null;
    }
    function Yu(r) {
      if (dr(r) !== r) throw Error(n(188));
    }
    function _m(r) {
      var o = r.alternate;
      if (!o) {
        if (((o = dr(r)), o === null)) throw Error(n(188));
        return o !== r ? null : r;
      }
      for (var s = r, u = o; ; ) {
        var f = s.return;
        if (f === null) break;
        var m = f.alternate;
        if (m === null) {
          if (((u = f.return), u !== null)) {
            s = u;
            continue;
          }
          break;
        }
        if (f.child === m.child) {
          for (m = f.child; m; ) {
            if (m === s) return Yu(f), r;
            if (m === u) return Yu(f), o;
            m = m.sibling;
          }
          throw Error(n(188));
        }
        if (s.return !== u.return) (s = f), (u = m);
        else {
          for (var y = !1, P = f.child; P; ) {
            if (P === s) {
              (y = !0), (s = f), (u = m);
              break;
            }
            if (P === u) {
              (y = !0), (u = f), (s = m);
              break;
            }
            P = P.sibling;
          }
          if (!y) {
            for (P = m.child; P; ) {
              if (P === s) {
                (y = !0), (s = m), (u = f);
                break;
              }
              if (P === u) {
                (y = !0), (u = m), (s = f);
                break;
              }
              P = P.sibling;
            }
            if (!y) throw Error(n(189));
          }
        }
        if (s.alternate !== u) throw Error(n(190));
      }
      if (s.tag !== 3) throw Error(n(188));
      return s.stateNode.current === s ? r : o;
    }
    function Qu(r) {
      return (r = _m(r)), r !== null ? Ju(r) : null;
    }
    function Ju(r) {
      if (r.tag === 5 || r.tag === 6) return r;
      for (r = r.child; r !== null; ) {
        var o = Ju(r);
        if (o !== null) return o;
        r = r.sibling;
      }
      return null;
    }
    var ed = t.unstable_scheduleCallback,
      Ta = t.unstable_cancelCallback,
      Cm = t.unstable_shouldYield,
      Ma = t.unstable_requestPaint,
      lt = t.unstable_now,
      Em = t.unstable_getCurrentPriorityLevel,
      So = t.unstable_ImmediatePriority,
      Al = t.unstable_UserBlockingPriority,
      za = t.unstable_NormalPriority,
      Pm = t.unstable_LowPriority,
      td = t.unstable_IdlePriority,
      yi = null,
      Nr = null;
    function Rm(r) {
      if (Nr && typeof Nr.onCommitFiberRoot == "function")
        try {
          Nr.onCommitFiberRoot(yi, r, void 0, (r.current.flags & 128) === 128);
        } catch {}
    }
    var _r = Math.clz32 ? Math.clz32 : Am,
      jm = Math.log,
      Om = Math.LN2;
    function Am(r) {
      return (r >>>= 0), r === 0 ? 32 : (31 - ((jm(r) / Om) | 0)) | 0;
    }
    var Da = 64,
      Ia = 4194304;
    function bi(r) {
      switch (r & -r) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return r & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return r & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return r;
      }
    }
    function Fa(r, o) {
      var s = r.pendingLanes;
      if (s === 0) return 0;
      var u = 0,
        f = r.suspendedLanes,
        m = r.pingedLanes,
        y = s & 268435455;
      if (y !== 0) {
        var P = y & ~f;
        P !== 0 ? (u = bi(P)) : ((m &= y), m !== 0 && (u = bi(m)));
      } else (y = s & ~f), y !== 0 ? (u = bi(y)) : m !== 0 && (u = bi(m));
      if (u === 0) return 0;
      if (
        o !== 0 &&
        o !== u &&
        !(o & f) &&
        ((f = u & -u),
        (m = o & -o),
        f >= m || (f === 16 && (m & 4194240) !== 0))
      )
        return o;
      if ((u & 4 && (u |= s & 16), (o = r.entangledLanes), o !== 0))
        for (r = r.entanglements, o &= u; 0 < o; )
          (s = 31 - _r(o)), (f = 1 << s), (u |= r[s]), (o &= ~f);
      return u;
    }
    function La(r, o) {
      switch (r) {
        case 1:
        case 2:
        case 4:
          return o + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return o + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Tl(r, o) {
      for (
        var s = r.suspendedLanes,
          u = r.pingedLanes,
          f = r.expirationTimes,
          m = r.pendingLanes;
        0 < m;

      ) {
        var y = 31 - _r(m),
          P = 1 << y,
          T = f[y];
        T === -1
          ? (!(P & s) || P & u) && (f[y] = La(P, o))
          : T <= o && (r.expiredLanes |= P),
          (m &= ~P);
      }
    }
    function Ml(r) {
      return (
        (r = r.pendingLanes & -1073741825),
        r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
      );
    }
    function rd() {
      var r = Da;
      return (Da <<= 1), !(Da & 4194240) && (Da = 64), r;
    }
    function Na(r) {
      for (var o = [], s = 0; 31 > s; s++) o.push(r);
      return o;
    }
    function xi(r, o, s) {
      (r.pendingLanes |= o),
        o !== 536870912 && ((r.suspendedLanes = 0), (r.pingedLanes = 0)),
        (r = r.eventTimes),
        (o = 31 - _r(o)),
        (r[o] = s);
    }
    function Tm(r, o) {
      var s = r.pendingLanes & ~o;
      (r.pendingLanes = o),
        (r.suspendedLanes = 0),
        (r.pingedLanes = 0),
        (r.expiredLanes &= o),
        (r.mutableReadLanes &= o),
        (r.entangledLanes &= o),
        (o = r.entanglements);
      var u = r.eventTimes;
      for (r = r.expirationTimes; 0 < s; ) {
        var f = 31 - _r(s),
          m = 1 << f;
        (o[f] = 0), (u[f] = -1), (r[f] = -1), (s &= ~m);
      }
    }
    function zl(r, o) {
      var s = (r.entangledLanes |= o);
      for (r = r.entanglements; s; ) {
        var u = 31 - _r(s),
          f = 1 << u;
        (f & o) | (r[u] & o) && (r[u] |= o), (s &= ~f);
      }
    }
    var Ne = 0;
    function nd(r) {
      return (
        (r &= -r), 1 < r ? (4 < r ? (r & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var od,
      Dl,
      $a,
      id,
      ad,
      Il = !1,
      qn = [],
      $r = null,
      Br = null,
      Vr = null,
      wi = new Map(),
      _o = new Map(),
      Wr = [],
      sd =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function Pn(r, o) {
      switch (r) {
        case "focusin":
        case "focusout":
          $r = null;
          break;
        case "dragenter":
        case "dragleave":
          Br = null;
          break;
        case "mouseover":
        case "mouseout":
          Vr = null;
          break;
        case "pointerover":
        case "pointerout":
          wi.delete(o.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          _o.delete(o.pointerId);
      }
    }
    function nn(r, o, s, u, f, m) {
      return r === null || r.nativeEvent !== m
        ? ((r = {
            blockedOn: o,
            domEventName: s,
            eventSystemFlags: u,
            nativeEvent: m,
            targetContainers: [f],
          }),
          o !== null && ((o = Xl(o)), o !== null && Dl(o)),
          r)
        : ((r.eventSystemFlags |= u),
          (o = r.targetContainers),
          f !== null && o.indexOf(f) === -1 && o.push(f),
          r);
    }
    function Mm(r, o, s, u, f) {
      switch (o) {
        case "focusin":
          return ($r = nn($r, r, o, s, u, f)), !0;
        case "dragenter":
          return (Br = nn(Br, r, o, s, u, f)), !0;
        case "mouseover":
          return (Vr = nn(Vr, r, o, s, u, f)), !0;
        case "pointerover":
          var m = f.pointerId;
          return wi.set(m, nn(wi.get(m) || null, r, o, s, u, f)), !0;
        case "gotpointercapture":
          return (
            (m = f.pointerId),
            _o.set(m, nn(_o.get(m) || null, r, o, s, u, f)),
            !0
          );
      }
      return !1;
    }
    function Fl(r) {
      var o = Si(r.target);
      if (o !== null) {
        var s = dr(o);
        if (s !== null) {
          if (((o = s.tag), o === 13)) {
            if (((o = Xu(s)), o !== null)) {
              (r.blockedOn = o),
                ad(r.priority, function () {
                  $a(s);
                });
              return;
            }
          } else if (
            o === 3 &&
            s.stateNode.current.memoizedState.isDehydrated
          ) {
            r.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
            return;
          }
        }
      }
      r.blockedOn = null;
    }
    function Ba(r) {
      if (r.blockedOn !== null) return !1;
      for (var o = r.targetContainers; 0 < o.length; ) {
        var s = Ye(r.domEventName, r.eventSystemFlags, o[0], r.nativeEvent);
        if (s === null) {
          s = r.nativeEvent;
          var u = new s.constructor(s.type, s);
          (ja = u), s.target.dispatchEvent(u), (ja = null);
        } else return (o = Xl(s)), o !== null && Dl(o), (r.blockedOn = s), !1;
        o.shift();
      }
      return !0;
    }
    function Ll(r, o, s) {
      Ba(r) && s.delete(o);
    }
    function zm() {
      (Il = !1),
        $r !== null && Ba($r) && ($r = null),
        Br !== null && Ba(Br) && (Br = null),
        Vr !== null && Ba(Vr) && (Vr = null),
        wi.forEach(Ll),
        _o.forEach(Ll);
    }
    function ki(r, o) {
      r.blockedOn === o &&
        ((r.blockedOn = null),
        Il ||
          ((Il = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, zm)));
    }
    function Co(r) {
      function o(f) {
        return ki(f, r);
      }
      if (0 < qn.length) {
        ki(qn[0], r);
        for (var s = 1; s < qn.length; s++) {
          var u = qn[s];
          u.blockedOn === r && (u.blockedOn = null);
        }
      }
      for (
        $r !== null && ki($r, r),
          Br !== null && ki(Br, r),
          Vr !== null && ki(Vr, r),
          wi.forEach(o),
          _o.forEach(o),
          s = 0;
        s < Wr.length;
        s++
      )
        (u = Wr[s]), u.blockedOn === r && (u.blockedOn = null);
      for (; 0 < Wr.length && ((s = Wr[0]), s.blockedOn === null); )
        Fl(s), s.blockedOn === null && Wr.shift();
    }
    var Eo = $.ReactCurrentBatchConfig,
      C = !0;
    function F(r, o, s, u) {
      var f = Ne,
        m = Eo.transition;
      Eo.transition = null;
      try {
        (Ne = 1), le(r, o, s, u);
      } finally {
        (Ne = f), (Eo.transition = m);
      }
    }
    function U(r, o, s, u) {
      var f = Ne,
        m = Eo.transition;
      Eo.transition = null;
      try {
        (Ne = 4), le(r, o, s, u);
      } finally {
        (Ne = f), (Eo.transition = m);
      }
    }
    function le(r, o, s, u) {
      if (C) {
        var f = Ye(r, o, s, u);
        if (f === null) Xm(r, o, u, Te, s), Pn(r, u);
        else if (Mm(f, r, o, s, u)) u.stopPropagation();
        else if ((Pn(r, u), o & 4 && -1 < sd.indexOf(r))) {
          for (; f !== null; ) {
            var m = Xl(f);
            if (
              (m !== null && od(m),
              (m = Ye(r, o, s, u)),
              m === null && Xm(r, o, u, Te, s),
              m === f)
            )
              break;
            f = m;
          }
          f !== null && u.stopPropagation();
        } else Xm(r, o, u, null, s);
      }
    }
    var Te = null;
    function Ye(r, o, s, u) {
      if (((Te = null), (r = Pl(u)), (r = Si(r)), r !== null))
        if (((o = dr(r)), o === null)) r = null;
        else if (((s = o.tag), s === 13)) {
          if (((r = Xu(o)), r !== null)) return r;
          r = null;
        } else if (s === 3) {
          if (o.stateNode.current.memoizedState.isDehydrated)
            return o.tag === 3 ? o.stateNode.containerInfo : null;
          r = null;
        } else o !== r && (r = null);
      return (Te = r), null;
    }
    function rt(r) {
      switch (r) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (Em()) {
            case So:
              return 1;
            case Al:
              return 4;
            case za:
            case Pm:
              return 16;
            case td:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Ae = null,
      Je = null,
      Vt = null;
    function Wt() {
      if (Vt) return Vt;
      var r,
        o = Je,
        s = o.length,
        u,
        f = "value" in Ae ? Ae.value : Ae.textContent,
        m = f.length;
      for (r = 0; r < s && o[r] === f[r]; r++);
      var y = s - r;
      for (u = 1; u <= y && o[s - u] === f[m - u]; u++);
      return (Vt = f.slice(r, 1 < u ? 1 - u : void 0));
    }
    function Rn(r) {
      var o = r.keyCode;
      return (
        "charCode" in r
          ? ((r = r.charCode), r === 0 && o === 13 && (r = 13))
          : (r = o),
        r === 10 && (r = 13),
        32 <= r || r === 13 ? r : 0
      );
    }
    function Po() {
      return !0;
    }
    function Va() {
      return !1;
    }
    function Ut(r) {
      function o(s, u, f, m, y) {
        (this._reactName = s),
          (this._targetInst = f),
          (this.type = u),
          (this.nativeEvent = m),
          (this.target = y),
          (this.currentTarget = null);
        for (var P in r)
          r.hasOwnProperty(P) && ((s = r[P]), (this[P] = s ? s(m) : m[P]));
        return (
          (this.isDefaultPrevented = (
            m.defaultPrevented != null
              ? m.defaultPrevented
              : m.returnValue === !1
          )
            ? Po
            : Va),
          (this.isPropagationStopped = Va),
          this
        );
      }
      return (
        te(o.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var s = this.nativeEvent;
            s &&
              (s.preventDefault
                ? s.preventDefault()
                : typeof s.returnValue != "unknown" && (s.returnValue = !1),
              (this.isDefaultPrevented = Po));
          },
          stopPropagation: function () {
            var s = this.nativeEvent;
            s &&
              (s.stopPropagation
                ? s.stopPropagation()
                : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
              (this.isPropagationStopped = Po));
          },
          persist: function () {},
          isPersistent: Po,
        }),
        o
      );
    }
    var Wa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (r) {
          return r.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Dm = Ut(Wa),
      Nl = te({}, Wa, { view: 0, detail: 0 }),
      X$ = Ut(Nl),
      Im,
      Fm,
      $l,
      ld = te({}, Nl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Nm,
        button: 0,
        buttons: 0,
        relatedTarget: function (r) {
          return r.relatedTarget === void 0
            ? r.fromElement === r.srcElement
              ? r.toElement
              : r.fromElement
            : r.relatedTarget;
        },
        movementX: function (r) {
          return "movementX" in r
            ? r.movementX
            : (r !== $l &&
                ($l && r.type === "mousemove"
                  ? ((Im = r.screenX - $l.screenX),
                    (Fm = r.screenY - $l.screenY))
                  : (Fm = Im = 0),
                ($l = r)),
              Im);
        },
        movementY: function (r) {
          return "movementY" in r ? r.movementY : Fm;
        },
      }),
      rS = Ut(ld),
      Y$ = te({}, ld, { dataTransfer: 0 }),
      Q$ = Ut(Y$),
      J$ = te({}, Nl, { relatedTarget: 0 }),
      Lm = Ut(J$),
      e9 = te({}, Wa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      t9 = Ut(e9),
      r9 = te({}, Wa, {
        clipboardData: function (r) {
          return "clipboardData" in r ? r.clipboardData : window.clipboardData;
        },
      }),
      n9 = Ut(r9),
      o9 = te({}, Wa, { data: 0 }),
      nS = Ut(o9),
      i9 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      a9 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      s9 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function l9(r) {
      var o = this.nativeEvent;
      return o.getModifierState
        ? o.getModifierState(r)
        : (r = s9[r])
        ? !!o[r]
        : !1;
    }
    function Nm() {
      return l9;
    }
    var c9 = te({}, Nl, {
        key: function (r) {
          if (r.key) {
            var o = i9[r.key] || r.key;
            if (o !== "Unidentified") return o;
          }
          return r.type === "keypress"
            ? ((r = Rn(r)), r === 13 ? "Enter" : String.fromCharCode(r))
            : r.type === "keydown" || r.type === "keyup"
            ? a9[r.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Nm,
        charCode: function (r) {
          return r.type === "keypress" ? Rn(r) : 0;
        },
        keyCode: function (r) {
          return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
        },
        which: function (r) {
          return r.type === "keypress"
            ? Rn(r)
            : r.type === "keydown" || r.type === "keyup"
            ? r.keyCode
            : 0;
        },
      }),
      u9 = Ut(c9),
      d9 = te({}, ld, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      oS = Ut(d9),
      f9 = te({}, Nl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Nm,
      }),
      p9 = Ut(f9),
      h9 = te({}, Wa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      m9 = Ut(h9),
      g9 = te({}, ld, {
        deltaX: function (r) {
          return "deltaX" in r
            ? r.deltaX
            : "wheelDeltaX" in r
            ? -r.wheelDeltaX
            : 0;
        },
        deltaY: function (r) {
          return "deltaY" in r
            ? r.deltaY
            : "wheelDeltaY" in r
            ? -r.wheelDeltaY
            : "wheelDelta" in r
            ? -r.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      v9 = Ut(g9),
      y9 = [9, 13, 27, 32],
      $m = d && "CompositionEvent" in window,
      Bl = null;
    d && "documentMode" in document && (Bl = document.documentMode);
    var b9 = d && "TextEvent" in window && !Bl,
      iS = d && (!$m || (Bl && 8 < Bl && 11 >= Bl)),
      aS = " ",
      sS = !1;
    function lS(r, o) {
      switch (r) {
        case "keyup":
          return y9.indexOf(o.keyCode) !== -1;
        case "keydown":
          return o.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function cS(r) {
      return (
        (r = r.detail), typeof r == "object" && "data" in r ? r.data : null
      );
    }
    var Ua = !1;
    function x9(r, o) {
      switch (r) {
        case "compositionend":
          return cS(o);
        case "keypress":
          return o.which !== 32 ? null : ((sS = !0), aS);
        case "textInput":
          return (r = o.data), r === aS && sS ? null : r;
        default:
          return null;
      }
    }
    function w9(r, o) {
      if (Ua)
        return r === "compositionend" || (!$m && lS(r, o))
          ? ((r = Wt()), (Vt = Je = Ae = null), (Ua = !1), r)
          : null;
      switch (r) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(o.ctrlKey || o.altKey || o.metaKey) ||
            (o.ctrlKey && o.altKey)
          ) {
            if (o.char && 1 < o.char.length) return o.char;
            if (o.which) return String.fromCharCode(o.which);
          }
          return null;
        case "compositionend":
          return iS && o.locale !== "ko" ? null : o.data;
        default:
          return null;
      }
    }
    var k9 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function uS(r) {
      var o = r && r.nodeName && r.nodeName.toLowerCase();
      return o === "input" ? !!k9[r.type] : o === "textarea";
    }
    function dS(r, o, s, u) {
      qu(u),
        (o = pd(o, "onChange")),
        0 < o.length &&
          ((s = new Dm("onChange", "change", null, s, u)),
          r.push({ event: s, listeners: o }));
    }
    var Vl = null,
      Wl = null;
    function S9(r) {
      jS(r, 0);
    }
    function cd(r) {
      var o = Za(r);
      if (Yt(o)) return r;
    }
    function _9(r, o) {
      if (r === "change") return o;
    }
    var fS = !1;
    if (d) {
      var Bm;
      if (d) {
        var Vm = "oninput" in document;
        if (!Vm) {
          var pS = document.createElement("div");
          pS.setAttribute("oninput", "return;"),
            (Vm = typeof pS.oninput == "function");
        }
        Bm = Vm;
      } else Bm = !1;
      fS = Bm && (!document.documentMode || 9 < document.documentMode);
    }
    function hS() {
      Vl && (Vl.detachEvent("onpropertychange", mS), (Wl = Vl = null));
    }
    function mS(r) {
      if (r.propertyName === "value" && cd(Wl)) {
        var o = [];
        dS(o, Wl, r, Pl(r)), Lr(S9, o);
      }
    }
    function C9(r, o, s) {
      r === "focusin"
        ? (hS(), (Vl = o), (Wl = s), Vl.attachEvent("onpropertychange", mS))
        : r === "focusout" && hS();
    }
    function E9(r) {
      if (r === "selectionchange" || r === "keyup" || r === "keydown")
        return cd(Wl);
    }
    function P9(r, o) {
      if (r === "click") return cd(o);
    }
    function R9(r, o) {
      if (r === "input" || r === "change") return cd(o);
    }
    function j9(r, o) {
      return (r === o && (r !== 0 || 1 / r === 1 / o)) || (r !== r && o !== o);
    }
    var on = typeof Object.is == "function" ? Object.is : j9;
    function Ul(r, o) {
      if (on(r, o)) return !0;
      if (
        typeof r != "object" ||
        r === null ||
        typeof o != "object" ||
        o === null
      )
        return !1;
      var s = Object.keys(r),
        u = Object.keys(o);
      if (s.length !== u.length) return !1;
      for (u = 0; u < s.length; u++) {
        var f = s[u];
        if (!p.call(o, f) || !on(r[f], o[f])) return !1;
      }
      return !0;
    }
    function gS(r) {
      for (; r && r.firstChild; ) r = r.firstChild;
      return r;
    }
    function vS(r, o) {
      var s = gS(r);
      r = 0;
      for (var u; s; ) {
        if (s.nodeType === 3) {
          if (((u = r + s.textContent.length), r <= o && u >= o))
            return { node: s, offset: o - r };
          r = u;
        }
        e: {
          for (; s; ) {
            if (s.nextSibling) {
              s = s.nextSibling;
              break e;
            }
            s = s.parentNode;
          }
          s = void 0;
        }
        s = gS(s);
      }
    }
    function yS(r, o) {
      return r && o
        ? r === o
          ? !0
          : r && r.nodeType === 3
          ? !1
          : o && o.nodeType === 3
          ? yS(r, o.parentNode)
          : "contains" in r
          ? r.contains(o)
          : r.compareDocumentPosition
          ? !!(r.compareDocumentPosition(o) & 16)
          : !1
        : !1;
    }
    function bS() {
      for (var r = window, o = $t(); o instanceof r.HTMLIFrameElement; ) {
        try {
          var s = typeof o.contentWindow.location.href == "string";
        } catch {
          s = !1;
        }
        if (s) r = o.contentWindow;
        else break;
        o = $t(r.document);
      }
      return o;
    }
    function Wm(r) {
      var o = r && r.nodeName && r.nodeName.toLowerCase();
      return (
        o &&
        ((o === "input" &&
          (r.type === "text" ||
            r.type === "search" ||
            r.type === "tel" ||
            r.type === "url" ||
            r.type === "password")) ||
          o === "textarea" ||
          r.contentEditable === "true")
      );
    }
    function O9(r) {
      var o = bS(),
        s = r.focusedElem,
        u = r.selectionRange;
      if (
        o !== s &&
        s &&
        s.ownerDocument &&
        yS(s.ownerDocument.documentElement, s)
      ) {
        if (u !== null && Wm(s)) {
          if (
            ((o = u.start),
            (r = u.end),
            r === void 0 && (r = o),
            "selectionStart" in s)
          )
            (s.selectionStart = o),
              (s.selectionEnd = Math.min(r, s.value.length));
          else if (
            ((r =
              ((o = s.ownerDocument || document) && o.defaultView) || window),
            r.getSelection)
          ) {
            r = r.getSelection();
            var f = s.textContent.length,
              m = Math.min(u.start, f);
            (u = u.end === void 0 ? m : Math.min(u.end, f)),
              !r.extend && m > u && ((f = u), (u = m), (m = f)),
              (f = vS(s, m));
            var y = vS(s, u);
            f &&
              y &&
              (r.rangeCount !== 1 ||
                r.anchorNode !== f.node ||
                r.anchorOffset !== f.offset ||
                r.focusNode !== y.node ||
                r.focusOffset !== y.offset) &&
              ((o = o.createRange()),
              o.setStart(f.node, f.offset),
              r.removeAllRanges(),
              m > u
                ? (r.addRange(o), r.extend(y.node, y.offset))
                : (o.setEnd(y.node, y.offset), r.addRange(o)));
          }
        }
        for (o = [], r = s; (r = r.parentNode); )
          r.nodeType === 1 &&
            o.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
        for (
          typeof s.focus == "function" && s.focus(), s = 0;
          s < o.length;
          s++
        )
          (r = o[s]),
            (r.element.scrollLeft = r.left),
            (r.element.scrollTop = r.top);
      }
    }
    var A9 = d && "documentMode" in document && 11 >= document.documentMode,
      Ha = null,
      Um = null,
      Hl = null,
      Hm = !1;
    function xS(r, o, s) {
      var u =
        s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
      Hm ||
        Ha == null ||
        Ha !== $t(u) ||
        ((u = Ha),
        "selectionStart" in u && Wm(u)
          ? (u = { start: u.selectionStart, end: u.selectionEnd })
          : ((u = (
              (u.ownerDocument && u.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (u = {
              anchorNode: u.anchorNode,
              anchorOffset: u.anchorOffset,
              focusNode: u.focusNode,
              focusOffset: u.focusOffset,
            })),
        (Hl && Ul(Hl, u)) ||
          ((Hl = u),
          (u = pd(Um, "onSelect")),
          0 < u.length &&
            ((o = new Dm("onSelect", "select", null, o, s)),
            r.push({ event: o, listeners: u }),
            (o.target = Ha))));
    }
    function ud(r, o) {
      var s = {};
      return (
        (s[r.toLowerCase()] = o.toLowerCase()),
        (s["Webkit" + r] = "webkit" + o),
        (s["Moz" + r] = "moz" + o),
        s
      );
    }
    var qa = {
        animationend: ud("Animation", "AnimationEnd"),
        animationiteration: ud("Animation", "AnimationIteration"),
        animationstart: ud("Animation", "AnimationStart"),
        transitionend: ud("Transition", "TransitionEnd"),
      },
      qm = {},
      wS = {};
    d &&
      ((wS = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete qa.animationend.animation,
        delete qa.animationiteration.animation,
        delete qa.animationstart.animation),
      "TransitionEvent" in window || delete qa.transitionend.transition);
    function dd(r) {
      if (qm[r]) return qm[r];
      if (!qa[r]) return r;
      var o = qa[r],
        s;
      for (s in o) if (o.hasOwnProperty(s) && s in wS) return (qm[r] = o[s]);
      return r;
    }
    var kS = dd("animationend"),
      SS = dd("animationiteration"),
      _S = dd("animationstart"),
      CS = dd("transitionend"),
      ES = new Map(),
      PS =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function Ro(r, o) {
      ES.set(r, o), l(o, [r]);
    }
    for (var Km = 0; Km < PS.length; Km++) {
      var Gm = PS[Km],
        T9 = Gm.toLowerCase(),
        M9 = Gm[0].toUpperCase() + Gm.slice(1);
      Ro(T9, "on" + M9);
    }
    Ro(kS, "onAnimationEnd"),
      Ro(SS, "onAnimationIteration"),
      Ro(_S, "onAnimationStart"),
      Ro("dblclick", "onDoubleClick"),
      Ro("focusin", "onFocus"),
      Ro("focusout", "onBlur"),
      Ro(CS, "onTransitionEnd"),
      c("onMouseEnter", ["mouseout", "mouseover"]),
      c("onMouseLeave", ["mouseout", "mouseover"]),
      c("onPointerEnter", ["pointerout", "pointerover"]),
      c("onPointerLeave", ["pointerout", "pointerover"]),
      l(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      l(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      l(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      l(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      l(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var ql =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      z9 = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(ql)
      );
    function RS(r, o, s) {
      var u = r.type || "unknown-event";
      (r.currentTarget = s), Sm(u, o, void 0, r), (r.currentTarget = null);
    }
    function jS(r, o) {
      o = (o & 4) !== 0;
      for (var s = 0; s < r.length; s++) {
        var u = r[s],
          f = u.event;
        u = u.listeners;
        e: {
          var m = void 0;
          if (o)
            for (var y = u.length - 1; 0 <= y; y--) {
              var P = u[y],
                T = P.instance,
                W = P.currentTarget;
              if (((P = P.listener), T !== m && f.isPropagationStopped()))
                break e;
              RS(f, P, W), (m = T);
            }
          else
            for (y = 0; y < u.length; y++) {
              if (
                ((P = u[y]),
                (T = P.instance),
                (W = P.currentTarget),
                (P = P.listener),
                T !== m && f.isPropagationStopped())
              )
                break e;
              RS(f, P, W), (m = T);
            }
        }
      }
      if (Aa) throw ((r = Ol), (Aa = !1), (Ol = null), r);
    }
    function ct(r, o) {
      var s = o[r0];
      s === void 0 && (s = o[r0] = new Set());
      var u = r + "__bubble";
      s.has(u) || (OS(o, r, 2, !1), s.add(u));
    }
    function Zm(r, o, s) {
      var u = 0;
      o && (u |= 4), OS(s, r, u, o);
    }
    var fd = "_reactListening" + Math.random().toString(36).slice(2);
    function Kl(r) {
      if (!r[fd]) {
        (r[fd] = !0),
          i.forEach(function (s) {
            s !== "selectionchange" &&
              (z9.has(s) || Zm(s, !1, r), Zm(s, !0, r));
          });
        var o = r.nodeType === 9 ? r : r.ownerDocument;
        o === null || o[fd] || ((o[fd] = !0), Zm("selectionchange", !1, o));
      }
    }
    function OS(r, o, s, u) {
      switch (rt(o)) {
        case 1:
          var f = F;
          break;
        case 4:
          f = U;
          break;
        default:
          f = le;
      }
      (s = f.bind(null, o, s, r)),
        (f = void 0),
        !jl ||
          (o !== "touchstart" && o !== "touchmove" && o !== "wheel") ||
          (f = !0),
        u
          ? f !== void 0
            ? r.addEventListener(o, s, { capture: !0, passive: f })
            : r.addEventListener(o, s, !0)
          : f !== void 0
          ? r.addEventListener(o, s, { passive: f })
          : r.addEventListener(o, s, !1);
    }
    function Xm(r, o, s, u, f) {
      var m = u;
      if (!(o & 1) && !(o & 2) && u !== null)
        e: for (;;) {
          if (u === null) return;
          var y = u.tag;
          if (y === 3 || y === 4) {
            var P = u.stateNode.containerInfo;
            if (P === f || (P.nodeType === 8 && P.parentNode === f)) break;
            if (y === 4)
              for (y = u.return; y !== null; ) {
                var T = y.tag;
                if (
                  (T === 3 || T === 4) &&
                  ((T = y.stateNode.containerInfo),
                  T === f || (T.nodeType === 8 && T.parentNode === f))
                )
                  return;
                y = y.return;
              }
            for (; P !== null; ) {
              if (((y = Si(P)), y === null)) return;
              if (((T = y.tag), T === 5 || T === 6)) {
                u = m = y;
                continue e;
              }
              P = P.parentNode;
            }
          }
          u = u.return;
        }
      Lr(function () {
        var W = m,
          X = Pl(s),
          Q = [];
        e: {
          var Z = ES.get(r);
          if (Z !== void 0) {
            var ae = Dm,
              ue = r;
            switch (r) {
              case "keypress":
                if (Rn(s) === 0) break e;
              case "keydown":
              case "keyup":
                ae = u9;
                break;
              case "focusin":
                (ue = "focus"), (ae = Lm);
                break;
              case "focusout":
                (ue = "blur"), (ae = Lm);
                break;
              case "beforeblur":
              case "afterblur":
                ae = Lm;
                break;
              case "click":
                if (s.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                ae = rS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                ae = Q$;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                ae = p9;
                break;
              case kS:
              case SS:
              case _S:
                ae = t9;
                break;
              case CS:
                ae = m9;
                break;
              case "scroll":
                ae = X$;
                break;
              case "wheel":
                ae = v9;
                break;
              case "copy":
              case "cut":
              case "paste":
                ae = n9;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                ae = oS;
            }
            var fe = (o & 4) !== 0,
              kt = !fe && r === "scroll",
              N = fe ? (Z !== null ? Z + "Capture" : null) : Z;
            fe = [];
            for (var z = W, B; z !== null; ) {
              B = z;
              var ee = B.stateNode;
              if (
                (B.tag === 5 &&
                  ee !== null &&
                  ((B = ee),
                  N !== null &&
                    ((ee = mi(z, N)), ee != null && fe.push(Gl(z, ee, B)))),
                kt)
              )
                break;
              z = z.return;
            }
            0 < fe.length &&
              ((Z = new ae(Z, ue, null, s, X)),
              Q.push({ event: Z, listeners: fe }));
          }
        }
        if (!(o & 7)) {
          e: {
            if (
              ((Z = r === "mouseover" || r === "pointerover"),
              (ae = r === "mouseout" || r === "pointerout"),
              Z &&
                s !== ja &&
                (ue = s.relatedTarget || s.fromElement) &&
                (Si(ue) || ue[Kn]))
            )
              break e;
            if (
              (ae || Z) &&
              ((Z =
                X.window === X
                  ? X
                  : (Z = X.ownerDocument)
                  ? Z.defaultView || Z.parentWindow
                  : window),
              ae
                ? ((ue = s.relatedTarget || s.toElement),
                  (ae = W),
                  (ue = ue ? Si(ue) : null),
                  ue !== null &&
                    ((kt = dr(ue)),
                    ue !== kt || (ue.tag !== 5 && ue.tag !== 6)) &&
                    (ue = null))
                : ((ae = null), (ue = W)),
              ae !== ue)
            ) {
              if (
                ((fe = rS),
                (ee = "onMouseLeave"),
                (N = "onMouseEnter"),
                (z = "mouse"),
                (r === "pointerout" || r === "pointerover") &&
                  ((fe = oS),
                  (ee = "onPointerLeave"),
                  (N = "onPointerEnter"),
                  (z = "pointer")),
                (kt = ae == null ? Z : Za(ae)),
                (B = ue == null ? Z : Za(ue)),
                (Z = new fe(ee, z + "leave", ae, s, X)),
                (Z.target = kt),
                (Z.relatedTarget = B),
                (ee = null),
                Si(X) === W &&
                  ((fe = new fe(N, z + "enter", ue, s, X)),
                  (fe.target = B),
                  (fe.relatedTarget = kt),
                  (ee = fe)),
                (kt = ee),
                ae && ue)
              )
                t: {
                  for (fe = ae, N = ue, z = 0, B = fe; B; B = Ka(B)) z++;
                  for (B = 0, ee = N; ee; ee = Ka(ee)) B++;
                  for (; 0 < z - B; ) (fe = Ka(fe)), z--;
                  for (; 0 < B - z; ) (N = Ka(N)), B--;
                  for (; z--; ) {
                    if (fe === N || (N !== null && fe === N.alternate)) break t;
                    (fe = Ka(fe)), (N = Ka(N));
                  }
                  fe = null;
                }
              else fe = null;
              ae !== null && AS(Q, Z, ae, fe, !1),
                ue !== null && kt !== null && AS(Q, kt, ue, fe, !0);
            }
          }
          e: {
            if (
              ((Z = W ? Za(W) : window),
              (ae = Z.nodeName && Z.nodeName.toLowerCase()),
              ae === "select" || (ae === "input" && Z.type === "file"))
            )
              var me = _9;
            else if (uS(Z))
              if (fS) me = R9;
              else {
                me = E9;
                var ke = C9;
              }
            else
              (ae = Z.nodeName) &&
                ae.toLowerCase() === "input" &&
                (Z.type === "checkbox" || Z.type === "radio") &&
                (me = P9);
            if (me && (me = me(r, W))) {
              dS(Q, me, s, X);
              break e;
            }
            ke && ke(r, Z, W),
              r === "focusout" &&
                (ke = Z._wrapperState) &&
                ke.controlled &&
                Z.type === "number" &&
                Xe(Z, "number", Z.value);
          }
          switch (((ke = W ? Za(W) : window), r)) {
            case "focusin":
              (uS(ke) || ke.contentEditable === "true") &&
                ((Ha = ke), (Um = W), (Hl = null));
              break;
            case "focusout":
              Hl = Um = Ha = null;
              break;
            case "mousedown":
              Hm = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Hm = !1), xS(Q, s, X);
              break;
            case "selectionchange":
              if (A9) break;
            case "keydown":
            case "keyup":
              xS(Q, s, X);
          }
          var Se;
          if ($m)
            e: {
              switch (r) {
                case "compositionstart":
                  var Re = "onCompositionStart";
                  break e;
                case "compositionend":
                  Re = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Re = "onCompositionUpdate";
                  break e;
              }
              Re = void 0;
            }
          else
            Ua
              ? lS(r, s) && (Re = "onCompositionEnd")
              : r === "keydown" &&
                s.keyCode === 229 &&
                (Re = "onCompositionStart");
          Re &&
            (iS &&
              s.locale !== "ko" &&
              (Ua || Re !== "onCompositionStart"
                ? Re === "onCompositionEnd" && Ua && (Se = Wt())
                : ((Ae = X),
                  (Je = "value" in Ae ? Ae.value : Ae.textContent),
                  (Ua = !0))),
            (ke = pd(W, Re)),
            0 < ke.length &&
              ((Re = new nS(Re, r, null, s, X)),
              Q.push({ event: Re, listeners: ke }),
              Se
                ? (Re.data = Se)
                : ((Se = cS(s)), Se !== null && (Re.data = Se)))),
            (Se = b9 ? x9(r, s) : w9(r, s)) &&
              ((W = pd(W, "onBeforeInput")),
              0 < W.length &&
                ((X = new nS("onBeforeInput", "beforeinput", null, s, X)),
                Q.push({ event: X, listeners: W }),
                (X.data = Se)));
        }
        jS(Q, o);
      });
    }
    function Gl(r, o, s) {
      return { instance: r, listener: o, currentTarget: s };
    }
    function pd(r, o) {
      for (var s = o + "Capture", u = []; r !== null; ) {
        var f = r,
          m = f.stateNode;
        f.tag === 5 &&
          m !== null &&
          ((f = m),
          (m = mi(r, s)),
          m != null && u.unshift(Gl(r, m, f)),
          (m = mi(r, o)),
          m != null && u.push(Gl(r, m, f))),
          (r = r.return);
      }
      return u;
    }
    function Ka(r) {
      if (r === null) return null;
      do r = r.return;
      while (r && r.tag !== 5);
      return r || null;
    }
    function AS(r, o, s, u, f) {
      for (var m = o._reactName, y = []; s !== null && s !== u; ) {
        var P = s,
          T = P.alternate,
          W = P.stateNode;
        if (T !== null && T === u) break;
        P.tag === 5 &&
          W !== null &&
          ((P = W),
          f
            ? ((T = mi(s, m)), T != null && y.unshift(Gl(s, T, P)))
            : f || ((T = mi(s, m)), T != null && y.push(Gl(s, T, P)))),
          (s = s.return);
      }
      y.length !== 0 && r.push({ event: o, listeners: y });
    }
    var D9 = /\r\n?/g,
      I9 = /\u0000|\uFFFD/g;
    function TS(r) {
      return (typeof r == "string" ? r : "" + r)
        .replace(
          D9,
          `
`
        )
        .replace(I9, "");
    }
    function hd(r, o, s) {
      if (((o = TS(o)), TS(r) !== o && s)) throw Error(n(425));
    }
    function md() {}
    var Ym = null,
      Qm = null;
    function Jm(r, o) {
      return (
        r === "textarea" ||
        r === "noscript" ||
        typeof o.children == "string" ||
        typeof o.children == "number" ||
        (typeof o.dangerouslySetInnerHTML == "object" &&
          o.dangerouslySetInnerHTML !== null &&
          o.dangerouslySetInnerHTML.__html != null)
      );
    }
    var e0 = typeof setTimeout == "function" ? setTimeout : void 0,
      F9 = typeof clearTimeout == "function" ? clearTimeout : void 0,
      MS = typeof Promise == "function" ? Promise : void 0,
      L9 =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof MS < "u"
          ? function (r) {
              return MS.resolve(null).then(r).catch(N9);
            }
          : e0;
    function N9(r) {
      setTimeout(function () {
        throw r;
      });
    }
    function t0(r, o) {
      var s = o,
        u = 0;
      do {
        var f = s.nextSibling;
        if ((r.removeChild(s), f && f.nodeType === 8))
          if (((s = f.data), s === "/$")) {
            if (u === 0) {
              r.removeChild(f), Co(o);
              return;
            }
            u--;
          } else (s !== "$" && s !== "$?" && s !== "$!") || u++;
        s = f;
      } while (s);
      Co(o);
    }
    function jo(r) {
      for (; r != null; r = r.nextSibling) {
        var o = r.nodeType;
        if (o === 1 || o === 3) break;
        if (o === 8) {
          if (((o = r.data), o === "$" || o === "$!" || o === "$?")) break;
          if (o === "/$") return null;
        }
      }
      return r;
    }
    function zS(r) {
      r = r.previousSibling;
      for (var o = 0; r; ) {
        if (r.nodeType === 8) {
          var s = r.data;
          if (s === "$" || s === "$!" || s === "$?") {
            if (o === 0) return r;
            o--;
          } else s === "/$" && o++;
        }
        r = r.previousSibling;
      }
      return null;
    }
    var Ga = Math.random().toString(36).slice(2),
      jn = "__reactFiber$" + Ga,
      Zl = "__reactProps$" + Ga,
      Kn = "__reactContainer$" + Ga,
      r0 = "__reactEvents$" + Ga,
      $9 = "__reactListeners$" + Ga,
      B9 = "__reactHandles$" + Ga;
    function Si(r) {
      var o = r[jn];
      if (o) return o;
      for (var s = r.parentNode; s; ) {
        if ((o = s[Kn] || s[jn])) {
          if (
            ((s = o.alternate),
            o.child !== null || (s !== null && s.child !== null))
          )
            for (r = zS(r); r !== null; ) {
              if ((s = r[jn])) return s;
              r = zS(r);
            }
          return o;
        }
        (r = s), (s = r.parentNode);
      }
      return null;
    }
    function Xl(r) {
      return (
        (r = r[jn] || r[Kn]),
        !r || (r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3)
          ? null
          : r
      );
    }
    function Za(r) {
      if (r.tag === 5 || r.tag === 6) return r.stateNode;
      throw Error(n(33));
    }
    function gd(r) {
      return r[Zl] || null;
    }
    var n0 = [],
      Xa = -1;
    function Oo(r) {
      return { current: r };
    }
    function ut(r) {
      0 > Xa || ((r.current = n0[Xa]), (n0[Xa] = null), Xa--);
    }
    function ot(r, o) {
      Xa++, (n0[Xa] = r.current), (r.current = o);
    }
    var Ao = {},
      Ht = Oo(Ao),
      fr = Oo(!1),
      _i = Ao;
    function Ya(r, o) {
      var s = r.type.contextTypes;
      if (!s) return Ao;
      var u = r.stateNode;
      if (u && u.__reactInternalMemoizedUnmaskedChildContext === o)
        return u.__reactInternalMemoizedMaskedChildContext;
      var f = {},
        m;
      for (m in s) f[m] = o[m];
      return (
        u &&
          ((r = r.stateNode),
          (r.__reactInternalMemoizedUnmaskedChildContext = o),
          (r.__reactInternalMemoizedMaskedChildContext = f)),
        f
      );
    }
    function pr(r) {
      return (r = r.childContextTypes), r != null;
    }
    function vd() {
      ut(fr), ut(Ht);
    }
    function DS(r, o, s) {
      if (Ht.current !== Ao) throw Error(n(168));
      ot(Ht, o), ot(fr, s);
    }
    function IS(r, o, s) {
      var u = r.stateNode;
      if (((o = o.childContextTypes), typeof u.getChildContext != "function"))
        return s;
      u = u.getChildContext();
      for (var f in u)
        if (!(f in o)) throw Error(n(108, de(r) || "Unknown", f));
      return te({}, s, u);
    }
    function yd(r) {
      return (
        (r =
          ((r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext) ||
          Ao),
        (_i = Ht.current),
        ot(Ht, r),
        ot(fr, fr.current),
        !0
      );
    }
    function FS(r, o, s) {
      var u = r.stateNode;
      if (!u) throw Error(n(169));
      s
        ? ((r = IS(r, o, _i)),
          (u.__reactInternalMemoizedMergedChildContext = r),
          ut(fr),
          ut(Ht),
          ot(Ht, r))
        : ut(fr),
        ot(fr, s);
    }
    var Gn = null,
      bd = !1,
      o0 = !1;
    function LS(r) {
      Gn === null ? (Gn = [r]) : Gn.push(r);
    }
    function V9(r) {
      (bd = !0), LS(r);
    }
    function To() {
      if (!o0 && Gn !== null) {
        o0 = !0;
        var r = 0,
          o = Ne;
        try {
          var s = Gn;
          for (Ne = 1; r < s.length; r++) {
            var u = s[r];
            do u = u(!0);
            while (u !== null);
          }
          (Gn = null), (bd = !1);
        } catch (f) {
          throw (Gn !== null && (Gn = Gn.slice(r + 1)), ed(So, To), f);
        } finally {
          (Ne = o), (o0 = !1);
        }
      }
      return null;
    }
    var Qa = [],
      Ja = 0,
      xd = null,
      wd = 0,
      Ur = [],
      Hr = 0,
      Ci = null,
      Zn = 1,
      Xn = "";
    function Ei(r, o) {
      (Qa[Ja++] = wd), (Qa[Ja++] = xd), (xd = r), (wd = o);
    }
    function NS(r, o, s) {
      (Ur[Hr++] = Zn), (Ur[Hr++] = Xn), (Ur[Hr++] = Ci), (Ci = r);
      var u = Zn;
      r = Xn;
      var f = 32 - _r(u) - 1;
      (u &= ~(1 << f)), (s += 1);
      var m = 32 - _r(o) + f;
      if (30 < m) {
        var y = f - (f % 5);
        (m = (u & ((1 << y) - 1)).toString(32)),
          (u >>= y),
          (f -= y),
          (Zn = (1 << (32 - _r(o) + f)) | (s << f) | u),
          (Xn = m + r);
      } else (Zn = (1 << m) | (s << f) | u), (Xn = r);
    }
    function i0(r) {
      r.return !== null && (Ei(r, 1), NS(r, 1, 0));
    }
    function a0(r) {
      for (; r === xd; )
        (xd = Qa[--Ja]), (Qa[Ja] = null), (wd = Qa[--Ja]), (Qa[Ja] = null);
      for (; r === Ci; )
        (Ci = Ur[--Hr]),
          (Ur[Hr] = null),
          (Xn = Ur[--Hr]),
          (Ur[Hr] = null),
          (Zn = Ur[--Hr]),
          (Ur[Hr] = null);
    }
    var Cr = null,
      Er = null,
      ft = !1,
      an = null;
    function $S(r, o) {
      var s = Zr(5, null, null, 0);
      (s.elementType = "DELETED"),
        (s.stateNode = o),
        (s.return = r),
        (o = r.deletions),
        o === null ? ((r.deletions = [s]), (r.flags |= 16)) : o.push(s);
    }
    function BS(r, o) {
      switch (r.tag) {
        case 5:
          var s = r.type;
          return (
            (o =
              o.nodeType !== 1 || s.toLowerCase() !== o.nodeName.toLowerCase()
                ? null
                : o),
            o !== null
              ? ((r.stateNode = o), (Cr = r), (Er = jo(o.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (o = r.pendingProps === "" || o.nodeType !== 3 ? null : o),
            o !== null ? ((r.stateNode = o), (Cr = r), (Er = null), !0) : !1
          );
        case 13:
          return (
            (o = o.nodeType !== 8 ? null : o),
            o !== null
              ? ((s = Ci !== null ? { id: Zn, overflow: Xn } : null),
                (r.memoizedState = {
                  dehydrated: o,
                  treeContext: s,
                  retryLane: 1073741824,
                }),
                (s = Zr(18, null, null, 0)),
                (s.stateNode = o),
                (s.return = r),
                (r.child = s),
                (Cr = r),
                (Er = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function s0(r) {
      return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
    }
    function l0(r) {
      if (ft) {
        var o = Er;
        if (o) {
          var s = o;
          if (!BS(r, o)) {
            if (s0(r)) throw Error(n(418));
            o = jo(s.nextSibling);
            var u = Cr;
            o && BS(r, o)
              ? $S(u, s)
              : ((r.flags = (r.flags & -4097) | 2), (ft = !1), (Cr = r));
          }
        } else {
          if (s0(r)) throw Error(n(418));
          (r.flags = (r.flags & -4097) | 2), (ft = !1), (Cr = r);
        }
      }
    }
    function VS(r) {
      for (
        r = r.return;
        r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13;

      )
        r = r.return;
      Cr = r;
    }
    function kd(r) {
      if (r !== Cr) return !1;
      if (!ft) return VS(r), (ft = !0), !1;
      var o;
      if (
        ((o = r.tag !== 3) &&
          !(o = r.tag !== 5) &&
          ((o = r.type),
          (o = o !== "head" && o !== "body" && !Jm(r.type, r.memoizedProps))),
        o && (o = Er))
      ) {
        if (s0(r)) throw (WS(), Error(n(418)));
        for (; o; ) $S(r, o), (o = jo(o.nextSibling));
      }
      if ((VS(r), r.tag === 13)) {
        if (((r = r.memoizedState), (r = r !== null ? r.dehydrated : null), !r))
          throw Error(n(317));
        e: {
          for (r = r.nextSibling, o = 0; r; ) {
            if (r.nodeType === 8) {
              var s = r.data;
              if (s === "/$") {
                if (o === 0) {
                  Er = jo(r.nextSibling);
                  break e;
                }
                o--;
              } else (s !== "$" && s !== "$!" && s !== "$?") || o++;
            }
            r = r.nextSibling;
          }
          Er = null;
        }
      } else Er = Cr ? jo(r.stateNode.nextSibling) : null;
      return !0;
    }
    function WS() {
      for (var r = Er; r; ) r = jo(r.nextSibling);
    }
    function es() {
      (Er = Cr = null), (ft = !1);
    }
    function c0(r) {
      an === null ? (an = [r]) : an.push(r);
    }
    var W9 = $.ReactCurrentBatchConfig;
    function Yl(r, o, s) {
      if (
        ((r = s.ref),
        r !== null && typeof r != "function" && typeof r != "object")
      ) {
        if (s._owner) {
          if (((s = s._owner), s)) {
            if (s.tag !== 1) throw Error(n(309));
            var u = s.stateNode;
          }
          if (!u) throw Error(n(147, r));
          var f = u,
            m = "" + r;
          return o !== null &&
            o.ref !== null &&
            typeof o.ref == "function" &&
            o.ref._stringRef === m
            ? o.ref
            : ((o = function (y) {
                var P = f.refs;
                y === null ? delete P[m] : (P[m] = y);
              }),
              (o._stringRef = m),
              o);
        }
        if (typeof r != "string") throw Error(n(284));
        if (!s._owner) throw Error(n(290, r));
      }
      return r;
    }
    function Sd(r, o) {
      throw (
        ((r = Object.prototype.toString.call(o)),
        Error(
          n(
            31,
            r === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : r
          )
        ))
      );
    }
    function US(r) {
      var o = r._init;
      return o(r._payload);
    }
    function HS(r) {
      function o(N, z) {
        if (r) {
          var B = N.deletions;
          B === null ? ((N.deletions = [z]), (N.flags |= 16)) : B.push(z);
        }
      }
      function s(N, z) {
        if (!r) return null;
        for (; z !== null; ) o(N, z), (z = z.sibling);
        return null;
      }
      function u(N, z) {
        for (N = new Map(); z !== null; )
          z.key !== null ? N.set(z.key, z) : N.set(z.index, z), (z = z.sibling);
        return N;
      }
      function f(N, z) {
        return (N = $o(N, z)), (N.index = 0), (N.sibling = null), N;
      }
      function m(N, z, B) {
        return (
          (N.index = B),
          r
            ? ((B = N.alternate),
              B !== null
                ? ((B = B.index), B < z ? ((N.flags |= 2), z) : B)
                : ((N.flags |= 2), z))
            : ((N.flags |= 1048576), z)
        );
      }
      function y(N) {
        return r && N.alternate === null && (N.flags |= 2), N;
      }
      function P(N, z, B, ee) {
        return z === null || z.tag !== 6
          ? ((z = J0(B, N.mode, ee)), (z.return = N), z)
          : ((z = f(z, B)), (z.return = N), z);
      }
      function T(N, z, B, ee) {
        var me = B.type;
        return me === L
          ? X(N, z, B.props.children, ee, B.key)
          : z !== null &&
            (z.elementType === me ||
              (typeof me == "object" &&
                me !== null &&
                me.$$typeof === re &&
                US(me) === z.type))
          ? ((ee = f(z, B.props)), (ee.ref = Yl(N, z, B)), (ee.return = N), ee)
          : ((ee = Kd(B.type, B.key, B.props, null, N.mode, ee)),
            (ee.ref = Yl(N, z, B)),
            (ee.return = N),
            ee);
      }
      function W(N, z, B, ee) {
        return z === null ||
          z.tag !== 4 ||
          z.stateNode.containerInfo !== B.containerInfo ||
          z.stateNode.implementation !== B.implementation
          ? ((z = eg(B, N.mode, ee)), (z.return = N), z)
          : ((z = f(z, B.children || [])), (z.return = N), z);
      }
      function X(N, z, B, ee, me) {
        return z === null || z.tag !== 7
          ? ((z = zi(B, N.mode, ee, me)), (z.return = N), z)
          : ((z = f(z, B)), (z.return = N), z);
      }
      function Q(N, z, B) {
        if ((typeof z == "string" && z !== "") || typeof z == "number")
          return (z = J0("" + z, N.mode, B)), (z.return = N), z;
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case E:
              return (
                (B = Kd(z.type, z.key, z.props, null, N.mode, B)),
                (B.ref = Yl(N, null, z)),
                (B.return = N),
                B
              );
            case I:
              return (z = eg(z, N.mode, B)), (z.return = N), z;
            case re:
              var ee = z._init;
              return Q(N, ee(z._payload), B);
          }
          if (Ke(z) || ne(z))
            return (z = zi(z, N.mode, B, null)), (z.return = N), z;
          Sd(N, z);
        }
        return null;
      }
      function Z(N, z, B, ee) {
        var me = z !== null ? z.key : null;
        if ((typeof B == "string" && B !== "") || typeof B == "number")
          return me !== null ? null : P(N, z, "" + B, ee);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case E:
              return B.key === me ? T(N, z, B, ee) : null;
            case I:
              return B.key === me ? W(N, z, B, ee) : null;
            case re:
              return (me = B._init), Z(N, z, me(B._payload), ee);
          }
          if (Ke(B) || ne(B)) return me !== null ? null : X(N, z, B, ee, null);
          Sd(N, B);
        }
        return null;
      }
      function ae(N, z, B, ee, me) {
        if ((typeof ee == "string" && ee !== "") || typeof ee == "number")
          return (N = N.get(B) || null), P(z, N, "" + ee, me);
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case E:
              return (
                (N = N.get(ee.key === null ? B : ee.key) || null),
                T(z, N, ee, me)
              );
            case I:
              return (
                (N = N.get(ee.key === null ? B : ee.key) || null),
                W(z, N, ee, me)
              );
            case re:
              var ke = ee._init;
              return ae(N, z, B, ke(ee._payload), me);
          }
          if (Ke(ee) || ne(ee))
            return (N = N.get(B) || null), X(z, N, ee, me, null);
          Sd(z, ee);
        }
        return null;
      }
      function ue(N, z, B, ee) {
        for (
          var me = null, ke = null, Se = z, Re = (z = 0), At = null;
          Se !== null && Re < B.length;
          Re++
        ) {
          Se.index > Re ? ((At = Se), (Se = null)) : (At = Se.sibling);
          var $e = Z(N, Se, B[Re], ee);
          if ($e === null) {
            Se === null && (Se = At);
            break;
          }
          r && Se && $e.alternate === null && o(N, Se),
            (z = m($e, z, Re)),
            ke === null ? (me = $e) : (ke.sibling = $e),
            (ke = $e),
            (Se = At);
        }
        if (Re === B.length) return s(N, Se), ft && Ei(N, Re), me;
        if (Se === null) {
          for (; Re < B.length; Re++)
            (Se = Q(N, B[Re], ee)),
              Se !== null &&
                ((z = m(Se, z, Re)),
                ke === null ? (me = Se) : (ke.sibling = Se),
                (ke = Se));
          return ft && Ei(N, Re), me;
        }
        for (Se = u(N, Se); Re < B.length; Re++)
          (At = ae(Se, N, Re, B[Re], ee)),
            At !== null &&
              (r &&
                At.alternate !== null &&
                Se.delete(At.key === null ? Re : At.key),
              (z = m(At, z, Re)),
              ke === null ? (me = At) : (ke.sibling = At),
              (ke = At));
        return (
          r &&
            Se.forEach(function (Bo) {
              return o(N, Bo);
            }),
          ft && Ei(N, Re),
          me
        );
      }
      function fe(N, z, B, ee) {
        var me = ne(B);
        if (typeof me != "function") throw Error(n(150));
        if (((B = me.call(B)), B == null)) throw Error(n(151));
        for (
          var ke = (me = null), Se = z, Re = (z = 0), At = null, $e = B.next();
          Se !== null && !$e.done;
          Re++, $e = B.next()
        ) {
          Se.index > Re ? ((At = Se), (Se = null)) : (At = Se.sibling);
          var Bo = Z(N, Se, $e.value, ee);
          if (Bo === null) {
            Se === null && (Se = At);
            break;
          }
          r && Se && Bo.alternate === null && o(N, Se),
            (z = m(Bo, z, Re)),
            ke === null ? (me = Bo) : (ke.sibling = Bo),
            (ke = Bo),
            (Se = At);
        }
        if ($e.done) return s(N, Se), ft && Ei(N, Re), me;
        if (Se === null) {
          for (; !$e.done; Re++, $e = B.next())
            ($e = Q(N, $e.value, ee)),
              $e !== null &&
                ((z = m($e, z, Re)),
                ke === null ? (me = $e) : (ke.sibling = $e),
                (ke = $e));
          return ft && Ei(N, Re), me;
        }
        for (Se = u(N, Se); !$e.done; Re++, $e = B.next())
          ($e = ae(Se, N, Re, $e.value, ee)),
            $e !== null &&
              (r &&
                $e.alternate !== null &&
                Se.delete($e.key === null ? Re : $e.key),
              (z = m($e, z, Re)),
              ke === null ? (me = $e) : (ke.sibling = $e),
              (ke = $e));
        return (
          r &&
            Se.forEach(function (wB) {
              return o(N, wB);
            }),
          ft && Ei(N, Re),
          me
        );
      }
      function kt(N, z, B, ee) {
        if (
          (typeof B == "object" &&
            B !== null &&
            B.type === L &&
            B.key === null &&
            (B = B.props.children),
          typeof B == "object" && B !== null)
        ) {
          switch (B.$$typeof) {
            case E:
              e: {
                for (var me = B.key, ke = z; ke !== null; ) {
                  if (ke.key === me) {
                    if (((me = B.type), me === L)) {
                      if (ke.tag === 7) {
                        s(N, ke.sibling),
                          (z = f(ke, B.props.children)),
                          (z.return = N),
                          (N = z);
                        break e;
                      }
                    } else if (
                      ke.elementType === me ||
                      (typeof me == "object" &&
                        me !== null &&
                        me.$$typeof === re &&
                        US(me) === ke.type)
                    ) {
                      s(N, ke.sibling),
                        (z = f(ke, B.props)),
                        (z.ref = Yl(N, ke, B)),
                        (z.return = N),
                        (N = z);
                      break e;
                    }
                    s(N, ke);
                    break;
                  } else o(N, ke);
                  ke = ke.sibling;
                }
                B.type === L
                  ? ((z = zi(B.props.children, N.mode, ee, B.key)),
                    (z.return = N),
                    (N = z))
                  : ((ee = Kd(B.type, B.key, B.props, null, N.mode, ee)),
                    (ee.ref = Yl(N, z, B)),
                    (ee.return = N),
                    (N = ee));
              }
              return y(N);
            case I:
              e: {
                for (ke = B.key; z !== null; ) {
                  if (z.key === ke)
                    if (
                      z.tag === 4 &&
                      z.stateNode.containerInfo === B.containerInfo &&
                      z.stateNode.implementation === B.implementation
                    ) {
                      s(N, z.sibling),
                        (z = f(z, B.children || [])),
                        (z.return = N),
                        (N = z);
                      break e;
                    } else {
                      s(N, z);
                      break;
                    }
                  else o(N, z);
                  z = z.sibling;
                }
                (z = eg(B, N.mode, ee)), (z.return = N), (N = z);
              }
              return y(N);
            case re:
              return (ke = B._init), kt(N, z, ke(B._payload), ee);
          }
          if (Ke(B)) return ue(N, z, B, ee);
          if (ne(B)) return fe(N, z, B, ee);
          Sd(N, B);
        }
        return (typeof B == "string" && B !== "") || typeof B == "number"
          ? ((B = "" + B),
            z !== null && z.tag === 6
              ? (s(N, z.sibling), (z = f(z, B)), (z.return = N), (N = z))
              : (s(N, z), (z = J0(B, N.mode, ee)), (z.return = N), (N = z)),
            y(N))
          : s(N, z);
      }
      return kt;
    }
    var ts = HS(!0),
      qS = HS(!1),
      _d = Oo(null),
      Cd = null,
      rs = null,
      u0 = null;
    function d0() {
      u0 = rs = Cd = null;
    }
    function f0(r) {
      var o = _d.current;
      ut(_d), (r._currentValue = o);
    }
    function p0(r, o, s) {
      for (; r !== null; ) {
        var u = r.alternate;
        if (
          ((r.childLanes & o) !== o
            ? ((r.childLanes |= o), u !== null && (u.childLanes |= o))
            : u !== null && (u.childLanes & o) !== o && (u.childLanes |= o),
          r === s)
        )
          break;
        r = r.return;
      }
    }
    function ns(r, o) {
      (Cd = r),
        (u0 = rs = null),
        (r = r.dependencies),
        r !== null &&
          r.firstContext !== null &&
          (r.lanes & o && (hr = !0), (r.firstContext = null));
    }
    function qr(r) {
      var o = r._currentValue;
      if (u0 !== r)
        if (((r = { context: r, memoizedValue: o, next: null }), rs === null)) {
          if (Cd === null) throw Error(n(308));
          (rs = r), (Cd.dependencies = { lanes: 0, firstContext: r });
        } else rs = rs.next = r;
      return o;
    }
    var Pi = null;
    function h0(r) {
      Pi === null ? (Pi = [r]) : Pi.push(r);
    }
    function KS(r, o, s, u) {
      var f = o.interleaved;
      return (
        f === null ? ((s.next = s), h0(o)) : ((s.next = f.next), (f.next = s)),
        (o.interleaved = s),
        Yn(r, u)
      );
    }
    function Yn(r, o) {
      r.lanes |= o;
      var s = r.alternate;
      for (s !== null && (s.lanes |= o), s = r, r = r.return; r !== null; )
        (r.childLanes |= o),
          (s = r.alternate),
          s !== null && (s.childLanes |= o),
          (s = r),
          (r = r.return);
      return s.tag === 3 ? s.stateNode : null;
    }
    var Mo = !1;
    function m0(r) {
      r.updateQueue = {
        baseState: r.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function GS(r, o) {
      (r = r.updateQueue),
        o.updateQueue === r &&
          (o.updateQueue = {
            baseState: r.baseState,
            firstBaseUpdate: r.firstBaseUpdate,
            lastBaseUpdate: r.lastBaseUpdate,
            shared: r.shared,
            effects: r.effects,
          });
    }
    function Qn(r, o) {
      return {
        eventTime: r,
        lane: o,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function zo(r, o, s) {
      var u = r.updateQueue;
      if (u === null) return null;
      if (((u = u.shared), Le & 2)) {
        var f = u.pending;
        return (
          f === null ? (o.next = o) : ((o.next = f.next), (f.next = o)),
          (u.pending = o),
          Yn(r, s)
        );
      }
      return (
        (f = u.interleaved),
        f === null ? ((o.next = o), h0(u)) : ((o.next = f.next), (f.next = o)),
        (u.interleaved = o),
        Yn(r, s)
      );
    }
    function Ed(r, o, s) {
      if (
        ((o = o.updateQueue),
        o !== null && ((o = o.shared), (s & 4194240) !== 0))
      ) {
        var u = o.lanes;
        (u &= r.pendingLanes), (s |= u), (o.lanes = s), zl(r, s);
      }
    }
    function ZS(r, o) {
      var s = r.updateQueue,
        u = r.alternate;
      if (u !== null && ((u = u.updateQueue), s === u)) {
        var f = null,
          m = null;
        if (((s = s.firstBaseUpdate), s !== null)) {
          do {
            var y = {
              eventTime: s.eventTime,
              lane: s.lane,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            };
            m === null ? (f = m = y) : (m = m.next = y), (s = s.next);
          } while (s !== null);
          m === null ? (f = m = o) : (m = m.next = o);
        } else f = m = o;
        (s = {
          baseState: u.baseState,
          firstBaseUpdate: f,
          lastBaseUpdate: m,
          shared: u.shared,
          effects: u.effects,
        }),
          (r.updateQueue = s);
        return;
      }
      (r = s.lastBaseUpdate),
        r === null ? (s.firstBaseUpdate = o) : (r.next = o),
        (s.lastBaseUpdate = o);
    }
    function Pd(r, o, s, u) {
      var f = r.updateQueue;
      Mo = !1;
      var m = f.firstBaseUpdate,
        y = f.lastBaseUpdate,
        P = f.shared.pending;
      if (P !== null) {
        f.shared.pending = null;
        var T = P,
          W = T.next;
        (T.next = null), y === null ? (m = W) : (y.next = W), (y = T);
        var X = r.alternate;
        X !== null &&
          ((X = X.updateQueue),
          (P = X.lastBaseUpdate),
          P !== y &&
            (P === null ? (X.firstBaseUpdate = W) : (P.next = W),
            (X.lastBaseUpdate = T)));
      }
      if (m !== null) {
        var Q = f.baseState;
        (y = 0), (X = W = T = null), (P = m);
        do {
          var Z = P.lane,
            ae = P.eventTime;
          if ((u & Z) === Z) {
            X !== null &&
              (X = X.next =
                {
                  eventTime: ae,
                  lane: 0,
                  tag: P.tag,
                  payload: P.payload,
                  callback: P.callback,
                  next: null,
                });
            e: {
              var ue = r,
                fe = P;
              switch (((Z = o), (ae = s), fe.tag)) {
                case 1:
                  if (((ue = fe.payload), typeof ue == "function")) {
                    Q = ue.call(ae, Q, Z);
                    break e;
                  }
                  Q = ue;
                  break e;
                case 3:
                  ue.flags = (ue.flags & -65537) | 128;
                case 0:
                  if (
                    ((ue = fe.payload),
                    (Z = typeof ue == "function" ? ue.call(ae, Q, Z) : ue),
                    Z == null)
                  )
                    break e;
                  Q = te({}, Q, Z);
                  break e;
                case 2:
                  Mo = !0;
              }
            }
            P.callback !== null &&
              P.lane !== 0 &&
              ((r.flags |= 64),
              (Z = f.effects),
              Z === null ? (f.effects = [P]) : Z.push(P));
          } else
            (ae = {
              eventTime: ae,
              lane: Z,
              tag: P.tag,
              payload: P.payload,
              callback: P.callback,
              next: null,
            }),
              X === null ? ((W = X = ae), (T = Q)) : (X = X.next = ae),
              (y |= Z);
          if (((P = P.next), P === null)) {
            if (((P = f.shared.pending), P === null)) break;
            (Z = P),
              (P = Z.next),
              (Z.next = null),
              (f.lastBaseUpdate = Z),
              (f.shared.pending = null);
          }
        } while (!0);
        if (
          (X === null && (T = Q),
          (f.baseState = T),
          (f.firstBaseUpdate = W),
          (f.lastBaseUpdate = X),
          (o = f.shared.interleaved),
          o !== null)
        ) {
          f = o;
          do (y |= f.lane), (f = f.next);
          while (f !== o);
        } else m === null && (f.shared.lanes = 0);
        (Oi |= y), (r.lanes = y), (r.memoizedState = Q);
      }
    }
    function XS(r, o, s) {
      if (((r = o.effects), (o.effects = null), r !== null))
        for (o = 0; o < r.length; o++) {
          var u = r[o],
            f = u.callback;
          if (f !== null) {
            if (((u.callback = null), (u = s), typeof f != "function"))
              throw Error(n(191, f));
            f.call(u);
          }
        }
    }
    var Ql = {},
      On = Oo(Ql),
      Jl = Oo(Ql),
      ec = Oo(Ql);
    function Ri(r) {
      if (r === Ql) throw Error(n(174));
      return r;
    }
    function g0(r, o) {
      switch ((ot(ec, o), ot(Jl, r), ot(On, Ql), (r = o.nodeType), r)) {
        case 9:
        case 11:
          o = (o = o.documentElement) ? o.namespaceURI : yo(null, "");
          break;
        default:
          (r = r === 8 ? o.parentNode : o),
            (o = r.namespaceURI || null),
            (r = r.tagName),
            (o = yo(o, r));
      }
      ut(On), ot(On, o);
    }
    function os() {
      ut(On), ut(Jl), ut(ec);
    }
    function YS(r) {
      Ri(ec.current);
      var o = Ri(On.current),
        s = yo(o, r.type);
      o !== s && (ot(Jl, r), ot(On, s));
    }
    function v0(r) {
      Jl.current === r && (ut(On), ut(Jl));
    }
    var mt = Oo(0);
    function Rd(r) {
      for (var o = r; o !== null; ) {
        if (o.tag === 13) {
          var s = o.memoizedState;
          if (
            s !== null &&
            ((s = s.dehydrated),
            s === null || s.data === "$?" || s.data === "$!")
          )
            return o;
        } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
          if (o.flags & 128) return o;
        } else if (o.child !== null) {
          (o.child.return = o), (o = o.child);
          continue;
        }
        if (o === r) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === r) return null;
          o = o.return;
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
      return null;
    }
    var y0 = [];
    function b0() {
      for (var r = 0; r < y0.length; r++)
        y0[r]._workInProgressVersionPrimary = null;
      y0.length = 0;
    }
    var jd = $.ReactCurrentDispatcher,
      x0 = $.ReactCurrentBatchConfig,
      ji = 0,
      gt = null,
      Pt = null,
      jt = null,
      Od = !1,
      tc = !1,
      rc = 0,
      U9 = 0;
    function qt() {
      throw Error(n(321));
    }
    function w0(r, o) {
      if (o === null) return !1;
      for (var s = 0; s < o.length && s < r.length; s++)
        if (!on(r[s], o[s])) return !1;
      return !0;
    }
    function k0(r, o, s, u, f, m) {
      if (
        ((ji = m),
        (gt = o),
        (o.memoizedState = null),
        (o.updateQueue = null),
        (o.lanes = 0),
        (jd.current = r === null || r.memoizedState === null ? G9 : Z9),
        (r = s(u, f)),
        tc)
      ) {
        m = 0;
        do {
          if (((tc = !1), (rc = 0), 25 <= m)) throw Error(n(301));
          (m += 1),
            (jt = Pt = null),
            (o.updateQueue = null),
            (jd.current = X9),
            (r = s(u, f));
        } while (tc);
      }
      if (
        ((jd.current = Md),
        (o = Pt !== null && Pt.next !== null),
        (ji = 0),
        (jt = Pt = gt = null),
        (Od = !1),
        o)
      )
        throw Error(n(300));
      return r;
    }
    function S0() {
      var r = rc !== 0;
      return (rc = 0), r;
    }
    function An() {
      var r = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return jt === null ? (gt.memoizedState = jt = r) : (jt = jt.next = r), jt;
    }
    function Kr() {
      if (Pt === null) {
        var r = gt.alternate;
        r = r !== null ? r.memoizedState : null;
      } else r = Pt.next;
      var o = jt === null ? gt.memoizedState : jt.next;
      if (o !== null) (jt = o), (Pt = r);
      else {
        if (r === null) throw Error(n(310));
        (Pt = r),
          (r = {
            memoizedState: Pt.memoizedState,
            baseState: Pt.baseState,
            baseQueue: Pt.baseQueue,
            queue: Pt.queue,
            next: null,
          }),
          jt === null ? (gt.memoizedState = jt = r) : (jt = jt.next = r);
      }
      return jt;
    }
    function nc(r, o) {
      return typeof o == "function" ? o(r) : o;
    }
    function _0(r) {
      var o = Kr(),
        s = o.queue;
      if (s === null) throw Error(n(311));
      s.lastRenderedReducer = r;
      var u = Pt,
        f = u.baseQueue,
        m = s.pending;
      if (m !== null) {
        if (f !== null) {
          var y = f.next;
          (f.next = m.next), (m.next = y);
        }
        (u.baseQueue = f = m), (s.pending = null);
      }
      if (f !== null) {
        (m = f.next), (u = u.baseState);
        var P = (y = null),
          T = null,
          W = m;
        do {
          var X = W.lane;
          if ((ji & X) === X)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  action: W.action,
                  hasEagerState: W.hasEagerState,
                  eagerState: W.eagerState,
                  next: null,
                }),
              (u = W.hasEagerState ? W.eagerState : r(u, W.action));
          else {
            var Q = {
              lane: X,
              action: W.action,
              hasEagerState: W.hasEagerState,
              eagerState: W.eagerState,
              next: null,
            };
            T === null ? ((P = T = Q), (y = u)) : (T = T.next = Q),
              (gt.lanes |= X),
              (Oi |= X);
          }
          W = W.next;
        } while (W !== null && W !== m);
        T === null ? (y = u) : (T.next = P),
          on(u, o.memoizedState) || (hr = !0),
          (o.memoizedState = u),
          (o.baseState = y),
          (o.baseQueue = T),
          (s.lastRenderedState = u);
      }
      if (((r = s.interleaved), r !== null)) {
        f = r;
        do (m = f.lane), (gt.lanes |= m), (Oi |= m), (f = f.next);
        while (f !== r);
      } else f === null && (s.lanes = 0);
      return [o.memoizedState, s.dispatch];
    }
    function C0(r) {
      var o = Kr(),
        s = o.queue;
      if (s === null) throw Error(n(311));
      s.lastRenderedReducer = r;
      var u = s.dispatch,
        f = s.pending,
        m = o.memoizedState;
      if (f !== null) {
        s.pending = null;
        var y = (f = f.next);
        do (m = r(m, y.action)), (y = y.next);
        while (y !== f);
        on(m, o.memoizedState) || (hr = !0),
          (o.memoizedState = m),
          o.baseQueue === null && (o.baseState = m),
          (s.lastRenderedState = m);
      }
      return [m, u];
    }
    function QS() {}
    function JS(r, o) {
      var s = gt,
        u = Kr(),
        f = o(),
        m = !on(u.memoizedState, f);
      if (
        (m && ((u.memoizedState = f), (hr = !0)),
        (u = u.queue),
        E0(r_.bind(null, s, u, r), [r]),
        u.getSnapshot !== o || m || (jt !== null && jt.memoizedState.tag & 1))
      ) {
        if (
          ((s.flags |= 2048),
          oc(9, t_.bind(null, s, u, f, o), void 0, null),
          Ot === null)
        )
          throw Error(n(349));
        ji & 30 || e_(s, o, f);
      }
      return f;
    }
    function e_(r, o, s) {
      (r.flags |= 16384),
        (r = { getSnapshot: o, value: s }),
        (o = gt.updateQueue),
        o === null
          ? ((o = { lastEffect: null, stores: null }),
            (gt.updateQueue = o),
            (o.stores = [r]))
          : ((s = o.stores), s === null ? (o.stores = [r]) : s.push(r));
    }
    function t_(r, o, s, u) {
      (o.value = s), (o.getSnapshot = u), n_(o) && o_(r);
    }
    function r_(r, o, s) {
      return s(function () {
        n_(o) && o_(r);
      });
    }
    function n_(r) {
      var o = r.getSnapshot;
      r = r.value;
      try {
        var s = o();
        return !on(r, s);
      } catch {
        return !0;
      }
    }
    function o_(r) {
      var o = Yn(r, 1);
      o !== null && un(o, r, 1, -1);
    }
    function i_(r) {
      var o = An();
      return (
        typeof r == "function" && (r = r()),
        (o.memoizedState = o.baseState = r),
        (r = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: nc,
          lastRenderedState: r,
        }),
        (o.queue = r),
        (r = r.dispatch = K9.bind(null, gt, r)),
        [o.memoizedState, r]
      );
    }
    function oc(r, o, s, u) {
      return (
        (r = { tag: r, create: o, destroy: s, deps: u, next: null }),
        (o = gt.updateQueue),
        o === null
          ? ((o = { lastEffect: null, stores: null }),
            (gt.updateQueue = o),
            (o.lastEffect = r.next = r))
          : ((s = o.lastEffect),
            s === null
              ? (o.lastEffect = r.next = r)
              : ((u = s.next), (s.next = r), (r.next = u), (o.lastEffect = r))),
        r
      );
    }
    function a_() {
      return Kr().memoizedState;
    }
    function Ad(r, o, s, u) {
      var f = An();
      (gt.flags |= r),
        (f.memoizedState = oc(1 | o, s, void 0, u === void 0 ? null : u));
    }
    function Td(r, o, s, u) {
      var f = Kr();
      u = u === void 0 ? null : u;
      var m = void 0;
      if (Pt !== null) {
        var y = Pt.memoizedState;
        if (((m = y.destroy), u !== null && w0(u, y.deps))) {
          f.memoizedState = oc(o, s, m, u);
          return;
        }
      }
      (gt.flags |= r), (f.memoizedState = oc(1 | o, s, m, u));
    }
    function s_(r, o) {
      return Ad(8390656, 8, r, o);
    }
    function E0(r, o) {
      return Td(2048, 8, r, o);
    }
    function l_(r, o) {
      return Td(4, 2, r, o);
    }
    function c_(r, o) {
      return Td(4, 4, r, o);
    }
    function u_(r, o) {
      if (typeof o == "function")
        return (
          (r = r()),
          o(r),
          function () {
            o(null);
          }
        );
      if (o != null)
        return (
          (r = r()),
          (o.current = r),
          function () {
            o.current = null;
          }
        );
    }
    function d_(r, o, s) {
      return (
        (s = s != null ? s.concat([r]) : null), Td(4, 4, u_.bind(null, o, r), s)
      );
    }
    function P0() {}
    function f_(r, o) {
      var s = Kr();
      o = o === void 0 ? null : o;
      var u = s.memoizedState;
      return u !== null && o !== null && w0(o, u[1])
        ? u[0]
        : ((s.memoizedState = [r, o]), r);
    }
    function p_(r, o) {
      var s = Kr();
      o = o === void 0 ? null : o;
      var u = s.memoizedState;
      return u !== null && o !== null && w0(o, u[1])
        ? u[0]
        : ((r = r()), (s.memoizedState = [r, o]), r);
    }
    function h_(r, o, s) {
      return ji & 21
        ? (on(s, o) ||
            ((s = rd()), (gt.lanes |= s), (Oi |= s), (r.baseState = !0)),
          o)
        : (r.baseState && ((r.baseState = !1), (hr = !0)),
          (r.memoizedState = s));
    }
    function H9(r, o) {
      var s = Ne;
      (Ne = s !== 0 && 4 > s ? s : 4), r(!0);
      var u = x0.transition;
      x0.transition = {};
      try {
        r(!1), o();
      } finally {
        (Ne = s), (x0.transition = u);
      }
    }
    function m_() {
      return Kr().memoizedState;
    }
    function q9(r, o, s) {
      var u = Lo(r);
      if (
        ((s = {
          lane: u,
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        g_(r))
      )
        v_(o, s);
      else if (((s = KS(r, o, s, u)), s !== null)) {
        var f = er();
        un(s, r, u, f), y_(s, o, u);
      }
    }
    function K9(r, o, s) {
      var u = Lo(r),
        f = {
          lane: u,
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (g_(r)) v_(o, f);
      else {
        var m = r.alternate;
        if (
          r.lanes === 0 &&
          (m === null || m.lanes === 0) &&
          ((m = o.lastRenderedReducer), m !== null)
        )
          try {
            var y = o.lastRenderedState,
              P = m(y, s);
            if (((f.hasEagerState = !0), (f.eagerState = P), on(P, y))) {
              var T = o.interleaved;
              T === null
                ? ((f.next = f), h0(o))
                : ((f.next = T.next), (T.next = f)),
                (o.interleaved = f);
              return;
            }
          } catch {
          } finally {
          }
        (s = KS(r, o, f, u)),
          s !== null && ((f = er()), un(s, r, u, f), y_(s, o, u));
      }
    }
    function g_(r) {
      var o = r.alternate;
      return r === gt || (o !== null && o === gt);
    }
    function v_(r, o) {
      tc = Od = !0;
      var s = r.pending;
      s === null ? (o.next = o) : ((o.next = s.next), (s.next = o)),
        (r.pending = o);
    }
    function y_(r, o, s) {
      if (s & 4194240) {
        var u = o.lanes;
        (u &= r.pendingLanes), (s |= u), (o.lanes = s), zl(r, s);
      }
    }
    var Md = {
        readContext: qr,
        useCallback: qt,
        useContext: qt,
        useEffect: qt,
        useImperativeHandle: qt,
        useInsertionEffect: qt,
        useLayoutEffect: qt,
        useMemo: qt,
        useReducer: qt,
        useRef: qt,
        useState: qt,
        useDebugValue: qt,
        useDeferredValue: qt,
        useTransition: qt,
        useMutableSource: qt,
        useSyncExternalStore: qt,
        useId: qt,
        unstable_isNewReconciler: !1,
      },
      G9 = {
        readContext: qr,
        useCallback: function (r, o) {
          return (An().memoizedState = [r, o === void 0 ? null : o]), r;
        },
        useContext: qr,
        useEffect: s_,
        useImperativeHandle: function (r, o, s) {
          return (
            (s = s != null ? s.concat([r]) : null),
            Ad(4194308, 4, u_.bind(null, o, r), s)
          );
        },
        useLayoutEffect: function (r, o) {
          return Ad(4194308, 4, r, o);
        },
        useInsertionEffect: function (r, o) {
          return Ad(4, 2, r, o);
        },
        useMemo: function (r, o) {
          var s = An();
          return (
            (o = o === void 0 ? null : o),
            (r = r()),
            (s.memoizedState = [r, o]),
            r
          );
        },
        useReducer: function (r, o, s) {
          var u = An();
          return (
            (o = s !== void 0 ? s(o) : o),
            (u.memoizedState = u.baseState = o),
            (r = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: r,
              lastRenderedState: o,
            }),
            (u.queue = r),
            (r = r.dispatch = q9.bind(null, gt, r)),
            [u.memoizedState, r]
          );
        },
        useRef: function (r) {
          var o = An();
          return (r = { current: r }), (o.memoizedState = r);
        },
        useState: i_,
        useDebugValue: P0,
        useDeferredValue: function (r) {
          return (An().memoizedState = r);
        },
        useTransition: function () {
          var r = i_(!1),
            o = r[0];
          return (r = H9.bind(null, r[1])), (An().memoizedState = r), [o, r];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (r, o, s) {
          var u = gt,
            f = An();
          if (ft) {
            if (s === void 0) throw Error(n(407));
            s = s();
          } else {
            if (((s = o()), Ot === null)) throw Error(n(349));
            ji & 30 || e_(u, o, s);
          }
          f.memoizedState = s;
          var m = { value: s, getSnapshot: o };
          return (
            (f.queue = m),
            s_(r_.bind(null, u, m, r), [r]),
            (u.flags |= 2048),
            oc(9, t_.bind(null, u, m, s, o), void 0, null),
            s
          );
        },
        useId: function () {
          var r = An(),
            o = Ot.identifierPrefix;
          if (ft) {
            var s = Xn,
              u = Zn;
            (s = (u & ~(1 << (32 - _r(u) - 1))).toString(32) + s),
              (o = ":" + o + "R" + s),
              (s = rc++),
              0 < s && (o += "H" + s.toString(32)),
              (o += ":");
          } else (s = U9++), (o = ":" + o + "r" + s.toString(32) + ":");
          return (r.memoizedState = o);
        },
        unstable_isNewReconciler: !1,
      },
      Z9 = {
        readContext: qr,
        useCallback: f_,
        useContext: qr,
        useEffect: E0,
        useImperativeHandle: d_,
        useInsertionEffect: l_,
        useLayoutEffect: c_,
        useMemo: p_,
        useReducer: _0,
        useRef: a_,
        useState: function () {
          return _0(nc);
        },
        useDebugValue: P0,
        useDeferredValue: function (r) {
          var o = Kr();
          return h_(o, Pt.memoizedState, r);
        },
        useTransition: function () {
          var r = _0(nc)[0],
            o = Kr().memoizedState;
          return [r, o];
        },
        useMutableSource: QS,
        useSyncExternalStore: JS,
        useId: m_,
        unstable_isNewReconciler: !1,
      },
      X9 = {
        readContext: qr,
        useCallback: f_,
        useContext: qr,
        useEffect: E0,
        useImperativeHandle: d_,
        useInsertionEffect: l_,
        useLayoutEffect: c_,
        useMemo: p_,
        useReducer: C0,
        useRef: a_,
        useState: function () {
          return C0(nc);
        },
        useDebugValue: P0,
        useDeferredValue: function (r) {
          var o = Kr();
          return Pt === null
            ? (o.memoizedState = r)
            : h_(o, Pt.memoizedState, r);
        },
        useTransition: function () {
          var r = C0(nc)[0],
            o = Kr().memoizedState;
          return [r, o];
        },
        useMutableSource: QS,
        useSyncExternalStore: JS,
        useId: m_,
        unstable_isNewReconciler: !1,
      };
    function sn(r, o) {
      if (r && r.defaultProps) {
        (o = te({}, o)), (r = r.defaultProps);
        for (var s in r) o[s] === void 0 && (o[s] = r[s]);
        return o;
      }
      return o;
    }
    function R0(r, o, s, u) {
      (o = r.memoizedState),
        (s = s(u, o)),
        (s = s == null ? o : te({}, o, s)),
        (r.memoizedState = s),
        r.lanes === 0 && (r.updateQueue.baseState = s);
    }
    var zd = {
      isMounted: function (r) {
        return (r = r._reactInternals) ? dr(r) === r : !1;
      },
      enqueueSetState: function (r, o, s) {
        r = r._reactInternals;
        var u = er(),
          f = Lo(r),
          m = Qn(u, f);
        (m.payload = o),
          s != null && (m.callback = s),
          (o = zo(r, m, f)),
          o !== null && (un(o, r, f, u), Ed(o, r, f));
      },
      enqueueReplaceState: function (r, o, s) {
        r = r._reactInternals;
        var u = er(),
          f = Lo(r),
          m = Qn(u, f);
        (m.tag = 1),
          (m.payload = o),
          s != null && (m.callback = s),
          (o = zo(r, m, f)),
          o !== null && (un(o, r, f, u), Ed(o, r, f));
      },
      enqueueForceUpdate: function (r, o) {
        r = r._reactInternals;
        var s = er(),
          u = Lo(r),
          f = Qn(s, u);
        (f.tag = 2),
          o != null && (f.callback = o),
          (o = zo(r, f, u)),
          o !== null && (un(o, r, u, s), Ed(o, r, u));
      },
    };
    function b_(r, o, s, u, f, m, y) {
      return (
        (r = r.stateNode),
        typeof r.shouldComponentUpdate == "function"
          ? r.shouldComponentUpdate(u, m, y)
          : o.prototype && o.prototype.isPureReactComponent
          ? !Ul(s, u) || !Ul(f, m)
          : !0
      );
    }
    function x_(r, o, s) {
      var u = !1,
        f = Ao,
        m = o.contextType;
      return (
        typeof m == "object" && m !== null
          ? (m = qr(m))
          : ((f = pr(o) ? _i : Ht.current),
            (u = o.contextTypes),
            (m = (u = u != null) ? Ya(r, f) : Ao)),
        (o = new o(s, m)),
        (r.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = zd),
        (r.stateNode = o),
        (o._reactInternals = r),
        u &&
          ((r = r.stateNode),
          (r.__reactInternalMemoizedUnmaskedChildContext = f),
          (r.__reactInternalMemoizedMaskedChildContext = m)),
        o
      );
    }
    function w_(r, o, s, u) {
      (r = o.state),
        typeof o.componentWillReceiveProps == "function" &&
          o.componentWillReceiveProps(s, u),
        typeof o.UNSAFE_componentWillReceiveProps == "function" &&
          o.UNSAFE_componentWillReceiveProps(s, u),
        o.state !== r && zd.enqueueReplaceState(o, o.state, null);
    }
    function j0(r, o, s, u) {
      var f = r.stateNode;
      (f.props = s), (f.state = r.memoizedState), (f.refs = {}), m0(r);
      var m = o.contextType;
      typeof m == "object" && m !== null
        ? (f.context = qr(m))
        : ((m = pr(o) ? _i : Ht.current), (f.context = Ya(r, m))),
        (f.state = r.memoizedState),
        (m = o.getDerivedStateFromProps),
        typeof m == "function" && (R0(r, o, m, s), (f.state = r.memoizedState)),
        typeof o.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((o = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          o !== f.state && zd.enqueueReplaceState(f, f.state, null),
          Pd(r, s, f, u),
          (f.state = r.memoizedState)),
        typeof f.componentDidMount == "function" && (r.flags |= 4194308);
    }
    function is(r, o) {
      try {
        var s = "",
          u = o;
        do (s += pe(u)), (u = u.return);
        while (u);
        var f = s;
      } catch (m) {
        f =
          `
Error generating stack: ` +
          m.message +
          `
` +
          m.stack;
      }
      return { value: r, source: o, stack: f, digest: null };
    }
    function O0(r, o, s) {
      return { value: r, source: null, stack: s ?? null, digest: o ?? null };
    }
    function A0(r, o) {
      try {
        console.error(o.value);
      } catch (s) {
        setTimeout(function () {
          throw s;
        });
      }
    }
    var Y9 = typeof WeakMap == "function" ? WeakMap : Map;
    function k_(r, o, s) {
      (s = Qn(-1, s)), (s.tag = 3), (s.payload = { element: null });
      var u = o.value;
      return (
        (s.callback = function () {
          Bd || ((Bd = !0), (H0 = u)), A0(r, o);
        }),
        s
      );
    }
    function S_(r, o, s) {
      (s = Qn(-1, s)), (s.tag = 3);
      var u = r.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var f = o.value;
        (s.payload = function () {
          return u(f);
        }),
          (s.callback = function () {
            A0(r, o);
          });
      }
      var m = r.stateNode;
      return (
        m !== null &&
          typeof m.componentDidCatch == "function" &&
          (s.callback = function () {
            A0(r, o),
              typeof u != "function" &&
                (Io === null ? (Io = new Set([this])) : Io.add(this));
            var y = o.stack;
            this.componentDidCatch(o.value, {
              componentStack: y !== null ? y : "",
            });
          }),
        s
      );
    }
    function __(r, o, s) {
      var u = r.pingCache;
      if (u === null) {
        u = r.pingCache = new Y9();
        var f = new Set();
        u.set(o, f);
      } else (f = u.get(o)), f === void 0 && ((f = new Set()), u.set(o, f));
      f.has(s) || (f.add(s), (r = dB.bind(null, r, o, s)), o.then(r, r));
    }
    function C_(r) {
      do {
        var o;
        if (
          ((o = r.tag === 13) &&
            ((o = r.memoizedState),
            (o = o !== null ? o.dehydrated !== null : !0)),
          o)
        )
          return r;
        r = r.return;
      } while (r !== null);
      return null;
    }
    function E_(r, o, s, u, f) {
      return r.mode & 1
        ? ((r.flags |= 65536), (r.lanes = f), r)
        : (r === o
            ? (r.flags |= 65536)
            : ((r.flags |= 128),
              (s.flags |= 131072),
              (s.flags &= -52805),
              s.tag === 1 &&
                (s.alternate === null
                  ? (s.tag = 17)
                  : ((o = Qn(-1, 1)), (o.tag = 2), zo(s, o, 1))),
              (s.lanes |= 1)),
          r);
    }
    var Q9 = $.ReactCurrentOwner,
      hr = !1;
    function Jt(r, o, s, u) {
      o.child = r === null ? qS(o, null, s, u) : ts(o, r.child, s, u);
    }
    function P_(r, o, s, u, f) {
      s = s.render;
      var m = o.ref;
      return (
        ns(o, f),
        (u = k0(r, o, s, u, m, f)),
        (s = S0()),
        r !== null && !hr
          ? ((o.updateQueue = r.updateQueue),
            (o.flags &= -2053),
            (r.lanes &= ~f),
            Jn(r, o, f))
          : (ft && s && i0(o), (o.flags |= 1), Jt(r, o, u, f), o.child)
      );
    }
    function R_(r, o, s, u, f) {
      if (r === null) {
        var m = s.type;
        return typeof m == "function" &&
          !Q0(m) &&
          m.defaultProps === void 0 &&
          s.compare === null &&
          s.defaultProps === void 0
          ? ((o.tag = 15), (o.type = m), j_(r, o, m, u, f))
          : ((r = Kd(s.type, null, u, o, o.mode, f)),
            (r.ref = o.ref),
            (r.return = o),
            (o.child = r));
      }
      if (((m = r.child), !(r.lanes & f))) {
        var y = m.memoizedProps;
        if (
          ((s = s.compare),
          (s = s !== null ? s : Ul),
          s(y, u) && r.ref === o.ref)
        )
          return Jn(r, o, f);
      }
      return (
        (o.flags |= 1),
        (r = $o(m, u)),
        (r.ref = o.ref),
        (r.return = o),
        (o.child = r)
      );
    }
    function j_(r, o, s, u, f) {
      if (r !== null) {
        var m = r.memoizedProps;
        if (Ul(m, u) && r.ref === o.ref)
          if (((hr = !1), (o.pendingProps = u = m), (r.lanes & f) !== 0))
            r.flags & 131072 && (hr = !0);
          else return (o.lanes = r.lanes), Jn(r, o, f);
      }
      return T0(r, o, s, u, f);
    }
    function O_(r, o, s) {
      var u = o.pendingProps,
        f = u.children,
        m = r !== null ? r.memoizedState : null;
      if (u.mode === "hidden")
        if (!(o.mode & 1))
          (o.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            ot(ss, Pr),
            (Pr |= s);
        else {
          if (!(s & 1073741824))
            return (
              (r = m !== null ? m.baseLanes | s : s),
              (o.lanes = o.childLanes = 1073741824),
              (o.memoizedState = {
                baseLanes: r,
                cachePool: null,
                transitions: null,
              }),
              (o.updateQueue = null),
              ot(ss, Pr),
              (Pr |= r),
              null
            );
          (o.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (u = m !== null ? m.baseLanes : s),
            ot(ss, Pr),
            (Pr |= u);
        }
      else
        m !== null
          ? ((u = m.baseLanes | s), (o.memoizedState = null))
          : (u = s),
          ot(ss, Pr),
          (Pr |= u);
      return Jt(r, o, f, s), o.child;
    }
    function A_(r, o) {
      var s = o.ref;
      ((r === null && s !== null) || (r !== null && r.ref !== s)) &&
        ((o.flags |= 512), (o.flags |= 2097152));
    }
    function T0(r, o, s, u, f) {
      var m = pr(s) ? _i : Ht.current;
      return (
        (m = Ya(o, m)),
        ns(o, f),
        (s = k0(r, o, s, u, m, f)),
        (u = S0()),
        r !== null && !hr
          ? ((o.updateQueue = r.updateQueue),
            (o.flags &= -2053),
            (r.lanes &= ~f),
            Jn(r, o, f))
          : (ft && u && i0(o), (o.flags |= 1), Jt(r, o, s, f), o.child)
      );
    }
    function T_(r, o, s, u, f) {
      if (pr(s)) {
        var m = !0;
        yd(o);
      } else m = !1;
      if ((ns(o, f), o.stateNode === null))
        Id(r, o), x_(o, s, u), j0(o, s, u, f), (u = !0);
      else if (r === null) {
        var y = o.stateNode,
          P = o.memoizedProps;
        y.props = P;
        var T = y.context,
          W = s.contextType;
        typeof W == "object" && W !== null
          ? (W = qr(W))
          : ((W = pr(s) ? _i : Ht.current), (W = Ya(o, W)));
        var X = s.getDerivedStateFromProps,
          Q =
            typeof X == "function" ||
            typeof y.getSnapshotBeforeUpdate == "function";
        Q ||
          (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
            typeof y.componentWillReceiveProps != "function") ||
          ((P !== u || T !== W) && w_(o, y, u, W)),
          (Mo = !1);
        var Z = o.memoizedState;
        (y.state = Z),
          Pd(o, u, y, f),
          (T = o.memoizedState),
          P !== u || Z !== T || fr.current || Mo
            ? (typeof X == "function" &&
                (R0(o, s, X, u), (T = o.memoizedState)),
              (P = Mo || b_(o, s, P, u, Z, T, W))
                ? (Q ||
                    (typeof y.UNSAFE_componentWillMount != "function" &&
                      typeof y.componentWillMount != "function") ||
                    (typeof y.componentWillMount == "function" &&
                      y.componentWillMount(),
                    typeof y.UNSAFE_componentWillMount == "function" &&
                      y.UNSAFE_componentWillMount()),
                  typeof y.componentDidMount == "function" &&
                    (o.flags |= 4194308))
                : (typeof y.componentDidMount == "function" &&
                    (o.flags |= 4194308),
                  (o.memoizedProps = u),
                  (o.memoizedState = T)),
              (y.props = u),
              (y.state = T),
              (y.context = W),
              (u = P))
            : (typeof y.componentDidMount == "function" && (o.flags |= 4194308),
              (u = !1));
      } else {
        (y = o.stateNode),
          GS(r, o),
          (P = o.memoizedProps),
          (W = o.type === o.elementType ? P : sn(o.type, P)),
          (y.props = W),
          (Q = o.pendingProps),
          (Z = y.context),
          (T = s.contextType),
          typeof T == "object" && T !== null
            ? (T = qr(T))
            : ((T = pr(s) ? _i : Ht.current), (T = Ya(o, T)));
        var ae = s.getDerivedStateFromProps;
        (X =
          typeof ae == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function") ||
          (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
            typeof y.componentWillReceiveProps != "function") ||
          ((P !== Q || Z !== T) && w_(o, y, u, T)),
          (Mo = !1),
          (Z = o.memoizedState),
          (y.state = Z),
          Pd(o, u, y, f);
        var ue = o.memoizedState;
        P !== Q || Z !== ue || fr.current || Mo
          ? (typeof ae == "function" &&
              (R0(o, s, ae, u), (ue = o.memoizedState)),
            (W = Mo || b_(o, s, W, u, Z, ue, T) || !1)
              ? (X ||
                  (typeof y.UNSAFE_componentWillUpdate != "function" &&
                    typeof y.componentWillUpdate != "function") ||
                  (typeof y.componentWillUpdate == "function" &&
                    y.componentWillUpdate(u, ue, T),
                  typeof y.UNSAFE_componentWillUpdate == "function" &&
                    y.UNSAFE_componentWillUpdate(u, ue, T)),
                typeof y.componentDidUpdate == "function" && (o.flags |= 4),
                typeof y.getSnapshotBeforeUpdate == "function" &&
                  (o.flags |= 1024))
              : (typeof y.componentDidUpdate != "function" ||
                  (P === r.memoizedProps && Z === r.memoizedState) ||
                  (o.flags |= 4),
                typeof y.getSnapshotBeforeUpdate != "function" ||
                  (P === r.memoizedProps && Z === r.memoizedState) ||
                  (o.flags |= 1024),
                (o.memoizedProps = u),
                (o.memoizedState = ue)),
            (y.props = u),
            (y.state = ue),
            (y.context = T),
            (u = W))
          : (typeof y.componentDidUpdate != "function" ||
              (P === r.memoizedProps && Z === r.memoizedState) ||
              (o.flags |= 4),
            typeof y.getSnapshotBeforeUpdate != "function" ||
              (P === r.memoizedProps && Z === r.memoizedState) ||
              (o.flags |= 1024),
            (u = !1));
      }
      return M0(r, o, s, u, m, f);
    }
    function M0(r, o, s, u, f, m) {
      A_(r, o);
      var y = (o.flags & 128) !== 0;
      if (!u && !y) return f && FS(o, s, !1), Jn(r, o, m);
      (u = o.stateNode), (Q9.current = o);
      var P =
        y && typeof s.getDerivedStateFromError != "function"
          ? null
          : u.render();
      return (
        (o.flags |= 1),
        r !== null && y
          ? ((o.child = ts(o, r.child, null, m)), (o.child = ts(o, null, P, m)))
          : Jt(r, o, P, m),
        (o.memoizedState = u.state),
        f && FS(o, s, !0),
        o.child
      );
    }
    function M_(r) {
      var o = r.stateNode;
      o.pendingContext
        ? DS(r, o.pendingContext, o.pendingContext !== o.context)
        : o.context && DS(r, o.context, !1),
        g0(r, o.containerInfo);
    }
    function z_(r, o, s, u, f) {
      return es(), c0(f), (o.flags |= 256), Jt(r, o, s, u), o.child;
    }
    var z0 = { dehydrated: null, treeContext: null, retryLane: 0 };
    function D0(r) {
      return { baseLanes: r, cachePool: null, transitions: null };
    }
    function D_(r, o, s) {
      var u = o.pendingProps,
        f = mt.current,
        m = !1,
        y = (o.flags & 128) !== 0,
        P;
      if (
        ((P = y) ||
          (P = r !== null && r.memoizedState === null ? !1 : (f & 2) !== 0),
        P
          ? ((m = !0), (o.flags &= -129))
          : (r === null || r.memoizedState !== null) && (f |= 1),
        ot(mt, f & 1),
        r === null)
      )
        return (
          l0(o),
          (r = o.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null)
            ? (o.mode & 1
                ? r.data === "$!"
                  ? (o.lanes = 8)
                  : (o.lanes = 1073741824)
                : (o.lanes = 1),
              null)
            : ((y = u.children),
              (r = u.fallback),
              m
                ? ((u = o.mode),
                  (m = o.child),
                  (y = { mode: "hidden", children: y }),
                  !(u & 1) && m !== null
                    ? ((m.childLanes = 0), (m.pendingProps = y))
                    : (m = Gd(y, u, 0, null)),
                  (r = zi(r, u, s, null)),
                  (m.return = o),
                  (r.return = o),
                  (m.sibling = r),
                  (o.child = m),
                  (o.child.memoizedState = D0(s)),
                  (o.memoizedState = z0),
                  r)
                : I0(o, y))
        );
      if (
        ((f = r.memoizedState), f !== null && ((P = f.dehydrated), P !== null))
      )
        return J9(r, o, y, u, P, f, s);
      if (m) {
        (m = u.fallback), (y = o.mode), (f = r.child), (P = f.sibling);
        var T = { mode: "hidden", children: u.children };
        return (
          !(y & 1) && o.child !== f
            ? ((u = o.child),
              (u.childLanes = 0),
              (u.pendingProps = T),
              (o.deletions = null))
            : ((u = $o(f, T)), (u.subtreeFlags = f.subtreeFlags & 14680064)),
          P !== null
            ? (m = $o(P, m))
            : ((m = zi(m, y, s, null)), (m.flags |= 2)),
          (m.return = o),
          (u.return = o),
          (u.sibling = m),
          (o.child = u),
          (u = m),
          (m = o.child),
          (y = r.child.memoizedState),
          (y =
            y === null
              ? D0(s)
              : {
                  baseLanes: y.baseLanes | s,
                  cachePool: null,
                  transitions: y.transitions,
                }),
          (m.memoizedState = y),
          (m.childLanes = r.childLanes & ~s),
          (o.memoizedState = z0),
          u
        );
      }
      return (
        (m = r.child),
        (r = m.sibling),
        (u = $o(m, { mode: "visible", children: u.children })),
        !(o.mode & 1) && (u.lanes = s),
        (u.return = o),
        (u.sibling = null),
        r !== null &&
          ((s = o.deletions),
          s === null ? ((o.deletions = [r]), (o.flags |= 16)) : s.push(r)),
        (o.child = u),
        (o.memoizedState = null),
        u
      );
    }
    function I0(r, o) {
      return (
        (o = Gd({ mode: "visible", children: o }, r.mode, 0, null)),
        (o.return = r),
        (r.child = o)
      );
    }
    function Dd(r, o, s, u) {
      return (
        u !== null && c0(u),
        ts(o, r.child, null, s),
        (r = I0(o, o.pendingProps.children)),
        (r.flags |= 2),
        (o.memoizedState = null),
        r
      );
    }
    function J9(r, o, s, u, f, m, y) {
      if (s)
        return o.flags & 256
          ? ((o.flags &= -257), (u = O0(Error(n(422)))), Dd(r, o, y, u))
          : o.memoizedState !== null
          ? ((o.child = r.child), (o.flags |= 128), null)
          : ((m = u.fallback),
            (f = o.mode),
            (u = Gd({ mode: "visible", children: u.children }, f, 0, null)),
            (m = zi(m, f, y, null)),
            (m.flags |= 2),
            (u.return = o),
            (m.return = o),
            (u.sibling = m),
            (o.child = u),
            o.mode & 1 && ts(o, r.child, null, y),
            (o.child.memoizedState = D0(y)),
            (o.memoizedState = z0),
            m);
      if (!(o.mode & 1)) return Dd(r, o, y, null);
      if (f.data === "$!") {
        if (((u = f.nextSibling && f.nextSibling.dataset), u)) var P = u.dgst;
        return (
          (u = P), (m = Error(n(419))), (u = O0(m, u, void 0)), Dd(r, o, y, u)
        );
      }
      if (((P = (y & r.childLanes) !== 0), hr || P)) {
        if (((u = Ot), u !== null)) {
          switch (y & -y) {
            case 4:
              f = 2;
              break;
            case 16:
              f = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              f = 32;
              break;
            case 536870912:
              f = 268435456;
              break;
            default:
              f = 0;
          }
          (f = f & (u.suspendedLanes | y) ? 0 : f),
            f !== 0 &&
              f !== m.retryLane &&
              ((m.retryLane = f), Yn(r, f), un(u, r, f, -1));
        }
        return Y0(), (u = O0(Error(n(421)))), Dd(r, o, y, u);
      }
      return f.data === "$?"
        ? ((o.flags |= 128),
          (o.child = r.child),
          (o = fB.bind(null, r)),
          (f._reactRetry = o),
          null)
        : ((r = m.treeContext),
          (Er = jo(f.nextSibling)),
          (Cr = o),
          (ft = !0),
          (an = null),
          r !== null &&
            ((Ur[Hr++] = Zn),
            (Ur[Hr++] = Xn),
            (Ur[Hr++] = Ci),
            (Zn = r.id),
            (Xn = r.overflow),
            (Ci = o)),
          (o = I0(o, u.children)),
          (o.flags |= 4096),
          o);
    }
    function I_(r, o, s) {
      r.lanes |= o;
      var u = r.alternate;
      u !== null && (u.lanes |= o), p0(r.return, o, s);
    }
    function F0(r, o, s, u, f) {
      var m = r.memoizedState;
      m === null
        ? (r.memoizedState = {
            isBackwards: o,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: s,
            tailMode: f,
          })
        : ((m.isBackwards = o),
          (m.rendering = null),
          (m.renderingStartTime = 0),
          (m.last = u),
          (m.tail = s),
          (m.tailMode = f));
    }
    function F_(r, o, s) {
      var u = o.pendingProps,
        f = u.revealOrder,
        m = u.tail;
      if ((Jt(r, o, u.children, s), (u = mt.current), u & 2))
        (u = (u & 1) | 2), (o.flags |= 128);
      else {
        if (r !== null && r.flags & 128)
          e: for (r = o.child; r !== null; ) {
            if (r.tag === 13) r.memoizedState !== null && I_(r, s, o);
            else if (r.tag === 19) I_(r, s, o);
            else if (r.child !== null) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === o) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === o) break e;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          }
        u &= 1;
      }
      if ((ot(mt, u), !(o.mode & 1))) o.memoizedState = null;
      else
        switch (f) {
          case "forwards":
            for (s = o.child, f = null; s !== null; )
              (r = s.alternate),
                r !== null && Rd(r) === null && (f = s),
                (s = s.sibling);
            (s = f),
              s === null
                ? ((f = o.child), (o.child = null))
                : ((f = s.sibling), (s.sibling = null)),
              F0(o, !1, f, s, m);
            break;
          case "backwards":
            for (s = null, f = o.child, o.child = null; f !== null; ) {
              if (((r = f.alternate), r !== null && Rd(r) === null)) {
                o.child = f;
                break;
              }
              (r = f.sibling), (f.sibling = s), (s = f), (f = r);
            }
            F0(o, !0, s, null, m);
            break;
          case "together":
            F0(o, !1, null, null, void 0);
            break;
          default:
            o.memoizedState = null;
        }
      return o.child;
    }
    function Id(r, o) {
      !(o.mode & 1) &&
        r !== null &&
        ((r.alternate = null), (o.alternate = null), (o.flags |= 2));
    }
    function Jn(r, o, s) {
      if (
        (r !== null && (o.dependencies = r.dependencies),
        (Oi |= o.lanes),
        !(s & o.childLanes))
      )
        return null;
      if (r !== null && o.child !== r.child) throw Error(n(153));
      if (o.child !== null) {
        for (
          r = o.child, s = $o(r, r.pendingProps), o.child = s, s.return = o;
          r.sibling !== null;

        )
          (r = r.sibling),
            (s = s.sibling = $o(r, r.pendingProps)),
            (s.return = o);
        s.sibling = null;
      }
      return o.child;
    }
    function eB(r, o, s) {
      switch (o.tag) {
        case 3:
          M_(o), es();
          break;
        case 5:
          YS(o);
          break;
        case 1:
          pr(o.type) && yd(o);
          break;
        case 4:
          g0(o, o.stateNode.containerInfo);
          break;
        case 10:
          var u = o.type._context,
            f = o.memoizedProps.value;
          ot(_d, u._currentValue), (u._currentValue = f);
          break;
        case 13:
          if (((u = o.memoizedState), u !== null))
            return u.dehydrated !== null
              ? (ot(mt, mt.current & 1), (o.flags |= 128), null)
              : s & o.child.childLanes
              ? D_(r, o, s)
              : (ot(mt, mt.current & 1),
                (r = Jn(r, o, s)),
                r !== null ? r.sibling : null);
          ot(mt, mt.current & 1);
          break;
        case 19:
          if (((u = (s & o.childLanes) !== 0), r.flags & 128)) {
            if (u) return F_(r, o, s);
            o.flags |= 128;
          }
          if (
            ((f = o.memoizedState),
            f !== null &&
              ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
            ot(mt, mt.current),
            u)
          )
            break;
          return null;
        case 22:
        case 23:
          return (o.lanes = 0), O_(r, o, s);
      }
      return Jn(r, o, s);
    }
    var L_, L0, N_, $_;
    (L_ = function (r, o) {
      for (var s = o.child; s !== null; ) {
        if (s.tag === 5 || s.tag === 6) r.appendChild(s.stateNode);
        else if (s.tag !== 4 && s.child !== null) {
          (s.child.return = s), (s = s.child);
          continue;
        }
        if (s === o) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === o) return;
          s = s.return;
        }
        (s.sibling.return = s.return), (s = s.sibling);
      }
    }),
      (L0 = function () {}),
      (N_ = function (r, o, s, u) {
        var f = r.memoizedProps;
        if (f !== u) {
          (r = o.stateNode), Ri(On.current);
          var m = null;
          switch (s) {
            case "input":
              (f = Pe(r, f)), (u = Pe(r, u)), (m = []);
              break;
            case "select":
              (f = te({}, f, { value: void 0 })),
                (u = te({}, u, { value: void 0 })),
                (m = []);
              break;
            case "textarea":
              (f = Qt(r, f)), (u = Qt(r, u)), (m = []);
              break;
            default:
              typeof f.onClick != "function" &&
                typeof u.onClick == "function" &&
                (r.onclick = md);
          }
          wo(s, u);
          var y;
          s = null;
          for (W in f)
            if (!u.hasOwnProperty(W) && f.hasOwnProperty(W) && f[W] != null)
              if (W === "style") {
                var P = f[W];
                for (y in P)
                  P.hasOwnProperty(y) && (s || (s = {}), (s[y] = ""));
              } else
                W !== "dangerouslySetInnerHTML" &&
                  W !== "children" &&
                  W !== "suppressContentEditableWarning" &&
                  W !== "suppressHydrationWarning" &&
                  W !== "autoFocus" &&
                  (a.hasOwnProperty(W)
                    ? m || (m = [])
                    : (m = m || []).push(W, null));
          for (W in u) {
            var T = u[W];
            if (
              ((P = f == null ? void 0 : f[W]),
              u.hasOwnProperty(W) && T !== P && (T != null || P != null))
            )
              if (W === "style")
                if (P) {
                  for (y in P)
                    !P.hasOwnProperty(y) ||
                      (T && T.hasOwnProperty(y)) ||
                      (s || (s = {}), (s[y] = ""));
                  for (y in T)
                    T.hasOwnProperty(y) &&
                      P[y] !== T[y] &&
                      (s || (s = {}), (s[y] = T[y]));
                } else s || (m || (m = []), m.push(W, s)), (s = T);
              else
                W === "dangerouslySetInnerHTML"
                  ? ((T = T ? T.__html : void 0),
                    (P = P ? P.__html : void 0),
                    T != null && P !== T && (m = m || []).push(W, T))
                  : W === "children"
                  ? (typeof T != "string" && typeof T != "number") ||
                    (m = m || []).push(W, "" + T)
                  : W !== "suppressContentEditableWarning" &&
                    W !== "suppressHydrationWarning" &&
                    (a.hasOwnProperty(W)
                      ? (T != null && W === "onScroll" && ct("scroll", r),
                        m || P === T || (m = []))
                      : (m = m || []).push(W, T));
          }
          s && (m = m || []).push("style", s);
          var W = m;
          (o.updateQueue = W) && (o.flags |= 4);
        }
      }),
      ($_ = function (r, o, s, u) {
        s !== u && (o.flags |= 4);
      });
    function ic(r, o) {
      if (!ft)
        switch (r.tailMode) {
          case "hidden":
            o = r.tail;
            for (var s = null; o !== null; )
              o.alternate !== null && (s = o), (o = o.sibling);
            s === null ? (r.tail = null) : (s.sibling = null);
            break;
          case "collapsed":
            s = r.tail;
            for (var u = null; s !== null; )
              s.alternate !== null && (u = s), (s = s.sibling);
            u === null
              ? o || r.tail === null
                ? (r.tail = null)
                : (r.tail.sibling = null)
              : (u.sibling = null);
        }
    }
    function Kt(r) {
      var o = r.alternate !== null && r.alternate.child === r.child,
        s = 0,
        u = 0;
      if (o)
        for (var f = r.child; f !== null; )
          (s |= f.lanes | f.childLanes),
            (u |= f.subtreeFlags & 14680064),
            (u |= f.flags & 14680064),
            (f.return = r),
            (f = f.sibling);
      else
        for (f = r.child; f !== null; )
          (s |= f.lanes | f.childLanes),
            (u |= f.subtreeFlags),
            (u |= f.flags),
            (f.return = r),
            (f = f.sibling);
      return (r.subtreeFlags |= u), (r.childLanes = s), o;
    }
    function tB(r, o, s) {
      var u = o.pendingProps;
      switch ((a0(o), o.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Kt(o), null;
        case 1:
          return pr(o.type) && vd(), Kt(o), null;
        case 3:
          return (
            (u = o.stateNode),
            os(),
            ut(fr),
            ut(Ht),
            b0(),
            u.pendingContext &&
              ((u.context = u.pendingContext), (u.pendingContext = null)),
            (r === null || r.child === null) &&
              (kd(o)
                ? (o.flags |= 4)
                : r === null ||
                  (r.memoizedState.isDehydrated && !(o.flags & 256)) ||
                  ((o.flags |= 1024), an !== null && (G0(an), (an = null)))),
            L0(r, o),
            Kt(o),
            null
          );
        case 5:
          v0(o);
          var f = Ri(ec.current);
          if (((s = o.type), r !== null && o.stateNode != null))
            N_(r, o, s, u, f),
              r.ref !== o.ref && ((o.flags |= 512), (o.flags |= 2097152));
          else {
            if (!u) {
              if (o.stateNode === null) throw Error(n(166));
              return Kt(o), null;
            }
            if (((r = Ri(On.current)), kd(o))) {
              (u = o.stateNode), (s = o.type);
              var m = o.memoizedProps;
              switch (((u[jn] = o), (u[Zl] = m), (r = (o.mode & 1) !== 0), s)) {
                case "dialog":
                  ct("cancel", u), ct("close", u);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ct("load", u);
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < ql.length; f++) ct(ql[f], u);
                  break;
                case "source":
                  ct("error", u);
                  break;
                case "img":
                case "image":
                case "link":
                  ct("error", u), ct("load", u);
                  break;
                case "details":
                  ct("toggle", u);
                  break;
                case "input":
                  qe(u, m), ct("invalid", u);
                  break;
                case "select":
                  (u._wrapperState = { wasMultiple: !!m.multiple }),
                    ct("invalid", u);
                  break;
                case "textarea":
                  Bt(u, m), ct("invalid", u);
              }
              wo(s, m), (f = null);
              for (var y in m)
                if (m.hasOwnProperty(y)) {
                  var P = m[y];
                  y === "children"
                    ? typeof P == "string"
                      ? u.textContent !== P &&
                        (m.suppressHydrationWarning !== !0 &&
                          hd(u.textContent, P, r),
                        (f = ["children", P]))
                      : typeof P == "number" &&
                        u.textContent !== "" + P &&
                        (m.suppressHydrationWarning !== !0 &&
                          hd(u.textContent, P, r),
                        (f = ["children", "" + P]))
                    : a.hasOwnProperty(y) &&
                      P != null &&
                      y === "onScroll" &&
                      ct("scroll", u);
                }
              switch (s) {
                case "input":
                  dt(u), Ze(u, m, !0);
                  break;
                case "textarea":
                  dt(u), vo(u);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof m.onClick == "function" && (u.onclick = md);
              }
              (u = f), (o.updateQueue = u), u !== null && (o.flags |= 4);
            } else {
              (y = f.nodeType === 9 ? f : f.ownerDocument),
                r === "http://www.w3.org/1999/xhtml" && (r = hi(s)),
                r === "http://www.w3.org/1999/xhtml"
                  ? s === "script"
                    ? ((r = y.createElement("div")),
                      (r.innerHTML = "<script></script>"),
                      (r = r.removeChild(r.firstChild)))
                    : typeof u.is == "string"
                    ? (r = y.createElement(s, { is: u.is }))
                    : ((r = y.createElement(s)),
                      s === "select" &&
                        ((y = r),
                        u.multiple
                          ? (y.multiple = !0)
                          : u.size && (y.size = u.size)))
                  : (r = y.createElementNS(r, s)),
                (r[jn] = o),
                (r[Zl] = u),
                L_(r, o, !1, !1),
                (o.stateNode = r);
              e: {
                switch (((y = El(s, u)), s)) {
                  case "dialog":
                    ct("cancel", r), ct("close", r), (f = u);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    ct("load", r), (f = u);
                    break;
                  case "video":
                  case "audio":
                    for (f = 0; f < ql.length; f++) ct(ql[f], r);
                    f = u;
                    break;
                  case "source":
                    ct("error", r), (f = u);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    ct("error", r), ct("load", r), (f = u);
                    break;
                  case "details":
                    ct("toggle", r), (f = u);
                    break;
                  case "input":
                    qe(r, u), (f = Pe(r, u)), ct("invalid", r);
                    break;
                  case "option":
                    f = u;
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!u.multiple }),
                      (f = te({}, u, { value: void 0 })),
                      ct("invalid", r);
                    break;
                  case "textarea":
                    Bt(r, u), (f = Qt(r, u)), ct("invalid", r);
                    break;
                  default:
                    f = u;
                }
                wo(s, f), (P = f);
                for (m in P)
                  if (P.hasOwnProperty(m)) {
                    var T = P[m];
                    m === "style"
                      ? Hu(r, T)
                      : m === "dangerouslySetInnerHTML"
                      ? ((T = T ? T.__html : void 0), T != null && Cl(r, T))
                      : m === "children"
                      ? typeof T == "string"
                        ? (s !== "textarea" || T !== "") && bo(r, T)
                        : typeof T == "number" && bo(r, "" + T)
                      : m !== "suppressContentEditableWarning" &&
                        m !== "suppressHydrationWarning" &&
                        m !== "autoFocus" &&
                        (a.hasOwnProperty(m)
                          ? T != null && m === "onScroll" && ct("scroll", r)
                          : T != null && M(r, m, T, y));
                  }
                switch (s) {
                  case "input":
                    dt(r), Ze(r, u, !1);
                    break;
                  case "textarea":
                    dt(r), vo(r);
                    break;
                  case "option":
                    u.value != null &&
                      r.setAttribute("value", "" + ge(u.value));
                    break;
                  case "select":
                    (r.multiple = !!u.multiple),
                      (m = u.value),
                      m != null
                        ? yt(r, !!u.multiple, m, !1)
                        : u.defaultValue != null &&
                          yt(r, !!u.multiple, u.defaultValue, !0);
                    break;
                  default:
                    typeof f.onClick == "function" && (r.onclick = md);
                }
                switch (s) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u = !!u.autoFocus;
                    break e;
                  case "img":
                    u = !0;
                    break e;
                  default:
                    u = !1;
                }
              }
              u && (o.flags |= 4);
            }
            o.ref !== null && ((o.flags |= 512), (o.flags |= 2097152));
          }
          return Kt(o), null;
        case 6:
          if (r && o.stateNode != null) $_(r, o, r.memoizedProps, u);
          else {
            if (typeof u != "string" && o.stateNode === null)
              throw Error(n(166));
            if (((s = Ri(ec.current)), Ri(On.current), kd(o))) {
              if (
                ((u = o.stateNode),
                (s = o.memoizedProps),
                (u[jn] = o),
                (m = u.nodeValue !== s) && ((r = Cr), r !== null))
              )
                switch (r.tag) {
                  case 3:
                    hd(u.nodeValue, s, (r.mode & 1) !== 0);
                    break;
                  case 5:
                    r.memoizedProps.suppressHydrationWarning !== !0 &&
                      hd(u.nodeValue, s, (r.mode & 1) !== 0);
                }
              m && (o.flags |= 4);
            } else
              (u = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(u)),
                (u[jn] = o),
                (o.stateNode = u);
          }
          return Kt(o), null;
        case 13:
          if (
            (ut(mt),
            (u = o.memoizedState),
            r === null ||
              (r.memoizedState !== null && r.memoizedState.dehydrated !== null))
          ) {
            if (ft && Er !== null && o.mode & 1 && !(o.flags & 128))
              WS(), es(), (o.flags |= 98560), (m = !1);
            else if (((m = kd(o)), u !== null && u.dehydrated !== null)) {
              if (r === null) {
                if (!m) throw Error(n(318));
                if (
                  ((m = o.memoizedState),
                  (m = m !== null ? m.dehydrated : null),
                  !m)
                )
                  throw Error(n(317));
                m[jn] = o;
              } else
                es(),
                  !(o.flags & 128) && (o.memoizedState = null),
                  (o.flags |= 4);
              Kt(o), (m = !1);
            } else an !== null && (G0(an), (an = null)), (m = !0);
            if (!m) return o.flags & 65536 ? o : null;
          }
          return o.flags & 128
            ? ((o.lanes = s), o)
            : ((u = u !== null),
              u !== (r !== null && r.memoizedState !== null) &&
                u &&
                ((o.child.flags |= 8192),
                o.mode & 1 &&
                  (r === null || mt.current & 1 ? Rt === 0 && (Rt = 3) : Y0())),
              o.updateQueue !== null && (o.flags |= 4),
              Kt(o),
              null);
        case 4:
          return (
            os(),
            L0(r, o),
            r === null && Kl(o.stateNode.containerInfo),
            Kt(o),
            null
          );
        case 10:
          return f0(o.type._context), Kt(o), null;
        case 17:
          return pr(o.type) && vd(), Kt(o), null;
        case 19:
          if ((ut(mt), (m = o.memoizedState), m === null)) return Kt(o), null;
          if (((u = (o.flags & 128) !== 0), (y = m.rendering), y === null))
            if (u) ic(m, !1);
            else {
              if (Rt !== 0 || (r !== null && r.flags & 128))
                for (r = o.child; r !== null; ) {
                  if (((y = Rd(r)), y !== null)) {
                    for (
                      o.flags |= 128,
                        ic(m, !1),
                        u = y.updateQueue,
                        u !== null && ((o.updateQueue = u), (o.flags |= 4)),
                        o.subtreeFlags = 0,
                        u = s,
                        s = o.child;
                      s !== null;

                    )
                      (m = s),
                        (r = u),
                        (m.flags &= 14680066),
                        (y = m.alternate),
                        y === null
                          ? ((m.childLanes = 0),
                            (m.lanes = r),
                            (m.child = null),
                            (m.subtreeFlags = 0),
                            (m.memoizedProps = null),
                            (m.memoizedState = null),
                            (m.updateQueue = null),
                            (m.dependencies = null),
                            (m.stateNode = null))
                          : ((m.childLanes = y.childLanes),
                            (m.lanes = y.lanes),
                            (m.child = y.child),
                            (m.subtreeFlags = 0),
                            (m.deletions = null),
                            (m.memoizedProps = y.memoizedProps),
                            (m.memoizedState = y.memoizedState),
                            (m.updateQueue = y.updateQueue),
                            (m.type = y.type),
                            (r = y.dependencies),
                            (m.dependencies =
                              r === null
                                ? null
                                : {
                                    lanes: r.lanes,
                                    firstContext: r.firstContext,
                                  })),
                        (s = s.sibling);
                    return ot(mt, (mt.current & 1) | 2), o.child;
                  }
                  r = r.sibling;
                }
              m.tail !== null &&
                lt() > ls &&
                ((o.flags |= 128), (u = !0), ic(m, !1), (o.lanes = 4194304));
            }
          else {
            if (!u)
              if (((r = Rd(y)), r !== null)) {
                if (
                  ((o.flags |= 128),
                  (u = !0),
                  (s = r.updateQueue),
                  s !== null && ((o.updateQueue = s), (o.flags |= 4)),
                  ic(m, !0),
                  m.tail === null &&
                    m.tailMode === "hidden" &&
                    !y.alternate &&
                    !ft)
                )
                  return Kt(o), null;
              } else
                2 * lt() - m.renderingStartTime > ls &&
                  s !== 1073741824 &&
                  ((o.flags |= 128), (u = !0), ic(m, !1), (o.lanes = 4194304));
            m.isBackwards
              ? ((y.sibling = o.child), (o.child = y))
              : ((s = m.last),
                s !== null ? (s.sibling = y) : (o.child = y),
                (m.last = y));
          }
          return m.tail !== null
            ? ((o = m.tail),
              (m.rendering = o),
              (m.tail = o.sibling),
              (m.renderingStartTime = lt()),
              (o.sibling = null),
              (s = mt.current),
              ot(mt, u ? (s & 1) | 2 : s & 1),
              o)
            : (Kt(o), null);
        case 22:
        case 23:
          return (
            X0(),
            (u = o.memoizedState !== null),
            r !== null && (r.memoizedState !== null) !== u && (o.flags |= 8192),
            u && o.mode & 1
              ? Pr & 1073741824 &&
                (Kt(o), o.subtreeFlags & 6 && (o.flags |= 8192))
              : Kt(o),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(n(156, o.tag));
    }
    function rB(r, o) {
      switch ((a0(o), o.tag)) {
        case 1:
          return (
            pr(o.type) && vd(),
            (r = o.flags),
            r & 65536 ? ((o.flags = (r & -65537) | 128), o) : null
          );
        case 3:
          return (
            os(),
            ut(fr),
            ut(Ht),
            b0(),
            (r = o.flags),
            r & 65536 && !(r & 128) ? ((o.flags = (r & -65537) | 128), o) : null
          );
        case 5:
          return v0(o), null;
        case 13:
          if (
            (ut(mt), (r = o.memoizedState), r !== null && r.dehydrated !== null)
          ) {
            if (o.alternate === null) throw Error(n(340));
            es();
          }
          return (
            (r = o.flags),
            r & 65536 ? ((o.flags = (r & -65537) | 128), o) : null
          );
        case 19:
          return ut(mt), null;
        case 4:
          return os(), null;
        case 10:
          return f0(o.type._context), null;
        case 22:
        case 23:
          return X0(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Fd = !1,
      Gt = !1,
      nB = typeof WeakSet == "function" ? WeakSet : Set,
      ce = null;
    function as(r, o) {
      var s = r.ref;
      if (s !== null)
        if (typeof s == "function")
          try {
            s(null);
          } catch (u) {
            bt(r, o, u);
          }
        else s.current = null;
    }
    function B_(r, o, s) {
      try {
        s();
      } catch (u) {
        bt(r, o, u);
      }
    }
    var V_ = !1;
    function oB(r, o) {
      if (((Ym = C), (r = bS()), Wm(r))) {
        if ("selectionStart" in r)
          var s = { start: r.selectionStart, end: r.selectionEnd };
        else
          e: {
            s = ((s = r.ownerDocument) && s.defaultView) || window;
            var u = s.getSelection && s.getSelection();
            if (u && u.rangeCount !== 0) {
              s = u.anchorNode;
              var f = u.anchorOffset,
                m = u.focusNode;
              u = u.focusOffset;
              try {
                s.nodeType, m.nodeType;
              } catch {
                s = null;
                break e;
              }
              var y = 0,
                P = -1,
                T = -1,
                W = 0,
                X = 0,
                Q = r,
                Z = null;
              t: for (;;) {
                for (
                  var ae;
                  Q !== s || (f !== 0 && Q.nodeType !== 3) || (P = y + f),
                    Q !== m || (u !== 0 && Q.nodeType !== 3) || (T = y + u),
                    Q.nodeType === 3 && (y += Q.nodeValue.length),
                    (ae = Q.firstChild) !== null;

                )
                  (Z = Q), (Q = ae);
                for (;;) {
                  if (Q === r) break t;
                  if (
                    (Z === s && ++W === f && (P = y),
                    Z === m && ++X === u && (T = y),
                    (ae = Q.nextSibling) !== null)
                  )
                    break;
                  (Q = Z), (Z = Q.parentNode);
                }
                Q = ae;
              }
              s = P === -1 || T === -1 ? null : { start: P, end: T };
            } else s = null;
          }
        s = s || { start: 0, end: 0 };
      } else s = null;
      for (
        Qm = { focusedElem: r, selectionRange: s }, C = !1, ce = o;
        ce !== null;

      )
        if (
          ((o = ce), (r = o.child), (o.subtreeFlags & 1028) !== 0 && r !== null)
        )
          (r.return = o), (ce = r);
        else
          for (; ce !== null; ) {
            o = ce;
            try {
              var ue = o.alternate;
              if (o.flags & 1024)
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (ue !== null) {
                      var fe = ue.memoizedProps,
                        kt = ue.memoizedState,
                        N = o.stateNode,
                        z = N.getSnapshotBeforeUpdate(
                          o.elementType === o.type ? fe : sn(o.type, fe),
                          kt
                        );
                      N.__reactInternalSnapshotBeforeUpdate = z;
                    }
                    break;
                  case 3:
                    var B = o.stateNode.containerInfo;
                    B.nodeType === 1
                      ? (B.textContent = "")
                      : B.nodeType === 9 &&
                        B.documentElement &&
                        B.removeChild(B.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(n(163));
                }
            } catch (ee) {
              bt(o, o.return, ee);
            }
            if (((r = o.sibling), r !== null)) {
              (r.return = o.return), (ce = r);
              break;
            }
            ce = o.return;
          }
      return (ue = V_), (V_ = !1), ue;
    }
    function ac(r, o, s) {
      var u = o.updateQueue;
      if (((u = u !== null ? u.lastEffect : null), u !== null)) {
        var f = (u = u.next);
        do {
          if ((f.tag & r) === r) {
            var m = f.destroy;
            (f.destroy = void 0), m !== void 0 && B_(o, s, m);
          }
          f = f.next;
        } while (f !== u);
      }
    }
    function Ld(r, o) {
      if (
        ((o = o.updateQueue),
        (o = o !== null ? o.lastEffect : null),
        o !== null)
      ) {
        var s = (o = o.next);
        do {
          if ((s.tag & r) === r) {
            var u = s.create;
            s.destroy = u();
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function N0(r) {
      var o = r.ref;
      if (o !== null) {
        var s = r.stateNode;
        switch (r.tag) {
          case 5:
            r = s;
            break;
          default:
            r = s;
        }
        typeof o == "function" ? o(r) : (o.current = r);
      }
    }
    function W_(r) {
      var o = r.alternate;
      o !== null && ((r.alternate = null), W_(o)),
        (r.child = null),
        (r.deletions = null),
        (r.sibling = null),
        r.tag === 5 &&
          ((o = r.stateNode),
          o !== null &&
            (delete o[jn],
            delete o[Zl],
            delete o[r0],
            delete o[$9],
            delete o[B9])),
        (r.stateNode = null),
        (r.return = null),
        (r.dependencies = null),
        (r.memoizedProps = null),
        (r.memoizedState = null),
        (r.pendingProps = null),
        (r.stateNode = null),
        (r.updateQueue = null);
    }
    function U_(r) {
      return r.tag === 5 || r.tag === 3 || r.tag === 4;
    }
    function H_(r) {
      e: for (;;) {
        for (; r.sibling === null; ) {
          if (r.return === null || U_(r.return)) return null;
          r = r.return;
        }
        for (
          r.sibling.return = r.return, r = r.sibling;
          r.tag !== 5 && r.tag !== 6 && r.tag !== 18;

        ) {
          if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
          (r.child.return = r), (r = r.child);
        }
        if (!(r.flags & 2)) return r.stateNode;
      }
    }
    function $0(r, o, s) {
      var u = r.tag;
      if (u === 5 || u === 6)
        (r = r.stateNode),
          o
            ? s.nodeType === 8
              ? s.parentNode.insertBefore(r, o)
              : s.insertBefore(r, o)
            : (s.nodeType === 8
                ? ((o = s.parentNode), o.insertBefore(r, s))
                : ((o = s), o.appendChild(r)),
              (s = s._reactRootContainer),
              s != null || o.onclick !== null || (o.onclick = md));
      else if (u !== 4 && ((r = r.child), r !== null))
        for ($0(r, o, s), r = r.sibling; r !== null; )
          $0(r, o, s), (r = r.sibling);
    }
    function B0(r, o, s) {
      var u = r.tag;
      if (u === 5 || u === 6)
        (r = r.stateNode), o ? s.insertBefore(r, o) : s.appendChild(r);
      else if (u !== 4 && ((r = r.child), r !== null))
        for (B0(r, o, s), r = r.sibling; r !== null; )
          B0(r, o, s), (r = r.sibling);
    }
    var zt = null,
      ln = !1;
    function Do(r, o, s) {
      for (s = s.child; s !== null; ) q_(r, o, s), (s = s.sibling);
    }
    function q_(r, o, s) {
      if (Nr && typeof Nr.onCommitFiberUnmount == "function")
        try {
          Nr.onCommitFiberUnmount(yi, s);
        } catch {}
      switch (s.tag) {
        case 5:
          Gt || as(s, o);
        case 6:
          var u = zt,
            f = ln;
          (zt = null),
            Do(r, o, s),
            (zt = u),
            (ln = f),
            zt !== null &&
              (ln
                ? ((r = zt),
                  (s = s.stateNode),
                  r.nodeType === 8
                    ? r.parentNode.removeChild(s)
                    : r.removeChild(s))
                : zt.removeChild(s.stateNode));
          break;
        case 18:
          zt !== null &&
            (ln
              ? ((r = zt),
                (s = s.stateNode),
                r.nodeType === 8
                  ? t0(r.parentNode, s)
                  : r.nodeType === 1 && t0(r, s),
                Co(r))
              : t0(zt, s.stateNode));
          break;
        case 4:
          (u = zt),
            (f = ln),
            (zt = s.stateNode.containerInfo),
            (ln = !0),
            Do(r, o, s),
            (zt = u),
            (ln = f);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !Gt &&
            ((u = s.updateQueue),
            u !== null && ((u = u.lastEffect), u !== null))
          ) {
            f = u = u.next;
            do {
              var m = f,
                y = m.destroy;
              (m = m.tag),
                y !== void 0 && (m & 2 || m & 4) && B_(s, o, y),
                (f = f.next);
            } while (f !== u);
          }
          Do(r, o, s);
          break;
        case 1:
          if (
            !Gt &&
            (as(s, o),
            (u = s.stateNode),
            typeof u.componentWillUnmount == "function")
          )
            try {
              (u.props = s.memoizedProps),
                (u.state = s.memoizedState),
                u.componentWillUnmount();
            } catch (P) {
              bt(s, o, P);
            }
          Do(r, o, s);
          break;
        case 21:
          Do(r, o, s);
          break;
        case 22:
          s.mode & 1
            ? ((Gt = (u = Gt) || s.memoizedState !== null),
              Do(r, o, s),
              (Gt = u))
            : Do(r, o, s);
          break;
        default:
          Do(r, o, s);
      }
    }
    function K_(r) {
      var o = r.updateQueue;
      if (o !== null) {
        r.updateQueue = null;
        var s = r.stateNode;
        s === null && (s = r.stateNode = new nB()),
          o.forEach(function (u) {
            var f = pB.bind(null, r, u);
            s.has(u) || (s.add(u), u.then(f, f));
          });
      }
    }
    function cn(r, o) {
      var s = o.deletions;
      if (s !== null)
        for (var u = 0; u < s.length; u++) {
          var f = s[u];
          try {
            var m = r,
              y = o,
              P = y;
            e: for (; P !== null; ) {
              switch (P.tag) {
                case 5:
                  (zt = P.stateNode), (ln = !1);
                  break e;
                case 3:
                  (zt = P.stateNode.containerInfo), (ln = !0);
                  break e;
                case 4:
                  (zt = P.stateNode.containerInfo), (ln = !0);
                  break e;
              }
              P = P.return;
            }
            if (zt === null) throw Error(n(160));
            q_(m, y, f), (zt = null), (ln = !1);
            var T = f.alternate;
            T !== null && (T.return = null), (f.return = null);
          } catch (W) {
            bt(f, o, W);
          }
        }
      if (o.subtreeFlags & 12854)
        for (o = o.child; o !== null; ) G_(o, r), (o = o.sibling);
    }
    function G_(r, o) {
      var s = r.alternate,
        u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((cn(o, r), Tn(r), u & 4)) {
            try {
              ac(3, r, r.return), Ld(3, r);
            } catch (fe) {
              bt(r, r.return, fe);
            }
            try {
              ac(5, r, r.return);
            } catch (fe) {
              bt(r, r.return, fe);
            }
          }
          break;
        case 1:
          cn(o, r), Tn(r), u & 512 && s !== null && as(s, s.return);
          break;
        case 5:
          if (
            (cn(o, r),
            Tn(r),
            u & 512 && s !== null && as(s, s.return),
            r.flags & 32)
          ) {
            var f = r.stateNode;
            try {
              bo(f, "");
            } catch (fe) {
              bt(r, r.return, fe);
            }
          }
          if (u & 4 && ((f = r.stateNode), f != null)) {
            var m = r.memoizedProps,
              y = s !== null ? s.memoizedProps : m,
              P = r.type,
              T = r.updateQueue;
            if (((r.updateQueue = null), T !== null))
              try {
                P === "input" &&
                  m.type === "radio" &&
                  m.name != null &&
                  tt(f, m),
                  El(P, y);
                var W = El(P, m);
                for (y = 0; y < T.length; y += 2) {
                  var X = T[y],
                    Q = T[y + 1];
                  X === "style"
                    ? Hu(f, Q)
                    : X === "dangerouslySetInnerHTML"
                    ? Cl(f, Q)
                    : X === "children"
                    ? bo(f, Q)
                    : M(f, X, Q, W);
                }
                switch (P) {
                  case "input":
                    be(f, m);
                    break;
                  case "textarea":
                    tn(f, m);
                    break;
                  case "select":
                    var Z = f._wrapperState.wasMultiple;
                    f._wrapperState.wasMultiple = !!m.multiple;
                    var ae = m.value;
                    ae != null
                      ? yt(f, !!m.multiple, ae, !1)
                      : Z !== !!m.multiple &&
                        (m.defaultValue != null
                          ? yt(f, !!m.multiple, m.defaultValue, !0)
                          : yt(f, !!m.multiple, m.multiple ? [] : "", !1));
                }
                f[Zl] = m;
              } catch (fe) {
                bt(r, r.return, fe);
              }
          }
          break;
        case 6:
          if ((cn(o, r), Tn(r), u & 4)) {
            if (r.stateNode === null) throw Error(n(162));
            (f = r.stateNode), (m = r.memoizedProps);
            try {
              f.nodeValue = m;
            } catch (fe) {
              bt(r, r.return, fe);
            }
          }
          break;
        case 3:
          if (
            (cn(o, r),
            Tn(r),
            u & 4 && s !== null && s.memoizedState.isDehydrated)
          )
            try {
              Co(o.containerInfo);
            } catch (fe) {
              bt(r, r.return, fe);
            }
          break;
        case 4:
          cn(o, r), Tn(r);
          break;
        case 13:
          cn(o, r),
            Tn(r),
            (f = r.child),
            f.flags & 8192 &&
              ((m = f.memoizedState !== null),
              (f.stateNode.isHidden = m),
              !m ||
                (f.alternate !== null && f.alternate.memoizedState !== null) ||
                (U0 = lt())),
            u & 4 && K_(r);
          break;
        case 22:
          if (
            ((X = s !== null && s.memoizedState !== null),
            r.mode & 1 ? ((Gt = (W = Gt) || X), cn(o, r), (Gt = W)) : cn(o, r),
            Tn(r),
            u & 8192)
          ) {
            if (
              ((W = r.memoizedState !== null),
              (r.stateNode.isHidden = W) && !X && r.mode & 1)
            )
              for (ce = r, X = r.child; X !== null; ) {
                for (Q = ce = X; ce !== null; ) {
                  switch (((Z = ce), (ae = Z.child), Z.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      ac(4, Z, Z.return);
                      break;
                    case 1:
                      as(Z, Z.return);
                      var ue = Z.stateNode;
                      if (typeof ue.componentWillUnmount == "function") {
                        (u = Z), (s = Z.return);
                        try {
                          (o = u),
                            (ue.props = o.memoizedProps),
                            (ue.state = o.memoizedState),
                            ue.componentWillUnmount();
                        } catch (fe) {
                          bt(u, s, fe);
                        }
                      }
                      break;
                    case 5:
                      as(Z, Z.return);
                      break;
                    case 22:
                      if (Z.memoizedState !== null) {
                        Y_(Q);
                        continue;
                      }
                  }
                  ae !== null ? ((ae.return = Z), (ce = ae)) : Y_(Q);
                }
                X = X.sibling;
              }
            e: for (X = null, Q = r; ; ) {
              if (Q.tag === 5) {
                if (X === null) {
                  X = Q;
                  try {
                    (f = Q.stateNode),
                      W
                        ? ((m = f.style),
                          typeof m.setProperty == "function"
                            ? m.setProperty("display", "none", "important")
                            : (m.display = "none"))
                        : ((P = Q.stateNode),
                          (T = Q.memoizedProps.style),
                          (y =
                            T != null && T.hasOwnProperty("display")
                              ? T.display
                              : null),
                          (P.style.display = Uu("display", y)));
                  } catch (fe) {
                    bt(r, r.return, fe);
                  }
                }
              } else if (Q.tag === 6) {
                if (X === null)
                  try {
                    Q.stateNode.nodeValue = W ? "" : Q.memoizedProps;
                  } catch (fe) {
                    bt(r, r.return, fe);
                  }
              } else if (
                ((Q.tag !== 22 && Q.tag !== 23) ||
                  Q.memoizedState === null ||
                  Q === r) &&
                Q.child !== null
              ) {
                (Q.child.return = Q), (Q = Q.child);
                continue;
              }
              if (Q === r) break e;
              for (; Q.sibling === null; ) {
                if (Q.return === null || Q.return === r) break e;
                X === Q && (X = null), (Q = Q.return);
              }
              X === Q && (X = null),
                (Q.sibling.return = Q.return),
                (Q = Q.sibling);
            }
          }
          break;
        case 19:
          cn(o, r), Tn(r), u & 4 && K_(r);
          break;
        case 21:
          break;
        default:
          cn(o, r), Tn(r);
      }
    }
    function Tn(r) {
      var o = r.flags;
      if (o & 2) {
        try {
          e: {
            for (var s = r.return; s !== null; ) {
              if (U_(s)) {
                var u = s;
                break e;
              }
              s = s.return;
            }
            throw Error(n(160));
          }
          switch (u.tag) {
            case 5:
              var f = u.stateNode;
              u.flags & 32 && (bo(f, ""), (u.flags &= -33));
              var m = H_(r);
              B0(r, m, f);
              break;
            case 3:
            case 4:
              var y = u.stateNode.containerInfo,
                P = H_(r);
              $0(r, P, y);
              break;
            default:
              throw Error(n(161));
          }
        } catch (T) {
          bt(r, r.return, T);
        }
        r.flags &= -3;
      }
      o & 4096 && (r.flags &= -4097);
    }
    function iB(r, o, s) {
      (ce = r), Z_(r);
    }
    function Z_(r, o, s) {
      for (var u = (r.mode & 1) !== 0; ce !== null; ) {
        var f = ce,
          m = f.child;
        if (f.tag === 22 && u) {
          var y = f.memoizedState !== null || Fd;
          if (!y) {
            var P = f.alternate,
              T = (P !== null && P.memoizedState !== null) || Gt;
            P = Fd;
            var W = Gt;
            if (((Fd = y), (Gt = T) && !W))
              for (ce = f; ce !== null; )
                (y = ce),
                  (T = y.child),
                  y.tag === 22 && y.memoizedState !== null
                    ? Q_(f)
                    : T !== null
                    ? ((T.return = y), (ce = T))
                    : Q_(f);
            for (; m !== null; ) (ce = m), Z_(m), (m = m.sibling);
            (ce = f), (Fd = P), (Gt = W);
          }
          X_(r);
        } else
          f.subtreeFlags & 8772 && m !== null
            ? ((m.return = f), (ce = m))
            : X_(r);
      }
    }
    function X_(r) {
      for (; ce !== null; ) {
        var o = ce;
        if (o.flags & 8772) {
          var s = o.alternate;
          try {
            if (o.flags & 8772)
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Gt || Ld(5, o);
                  break;
                case 1:
                  var u = o.stateNode;
                  if (o.flags & 4 && !Gt)
                    if (s === null) u.componentDidMount();
                    else {
                      var f =
                        o.elementType === o.type
                          ? s.memoizedProps
                          : sn(o.type, s.memoizedProps);
                      u.componentDidUpdate(
                        f,
                        s.memoizedState,
                        u.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var m = o.updateQueue;
                  m !== null && XS(o, m, u);
                  break;
                case 3:
                  var y = o.updateQueue;
                  if (y !== null) {
                    if (((s = null), o.child !== null))
                      switch (o.child.tag) {
                        case 5:
                          s = o.child.stateNode;
                          break;
                        case 1:
                          s = o.child.stateNode;
                      }
                    XS(o, y, s);
                  }
                  break;
                case 5:
                  var P = o.stateNode;
                  if (s === null && o.flags & 4) {
                    s = P;
                    var T = o.memoizedProps;
                    switch (o.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        T.autoFocus && s.focus();
                        break;
                      case "img":
                        T.src && (s.src = T.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (o.memoizedState === null) {
                    var W = o.alternate;
                    if (W !== null) {
                      var X = W.memoizedState;
                      if (X !== null) {
                        var Q = X.dehydrated;
                        Q !== null && Co(Q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(n(163));
              }
            Gt || (o.flags & 512 && N0(o));
          } catch (Z) {
            bt(o, o.return, Z);
          }
        }
        if (o === r) {
          ce = null;
          break;
        }
        if (((s = o.sibling), s !== null)) {
          (s.return = o.return), (ce = s);
          break;
        }
        ce = o.return;
      }
    }
    function Y_(r) {
      for (; ce !== null; ) {
        var o = ce;
        if (o === r) {
          ce = null;
          break;
        }
        var s = o.sibling;
        if (s !== null) {
          (s.return = o.return), (ce = s);
          break;
        }
        ce = o.return;
      }
    }
    function Q_(r) {
      for (; ce !== null; ) {
        var o = ce;
        try {
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              var s = o.return;
              try {
                Ld(4, o);
              } catch (T) {
                bt(o, s, T);
              }
              break;
            case 1:
              var u = o.stateNode;
              if (typeof u.componentDidMount == "function") {
                var f = o.return;
                try {
                  u.componentDidMount();
                } catch (T) {
                  bt(o, f, T);
                }
              }
              var m = o.return;
              try {
                N0(o);
              } catch (T) {
                bt(o, m, T);
              }
              break;
            case 5:
              var y = o.return;
              try {
                N0(o);
              } catch (T) {
                bt(o, y, T);
              }
          }
        } catch (T) {
          bt(o, o.return, T);
        }
        if (o === r) {
          ce = null;
          break;
        }
        var P = o.sibling;
        if (P !== null) {
          (P.return = o.return), (ce = P);
          break;
        }
        ce = o.return;
      }
    }
    var aB = Math.ceil,
      Nd = $.ReactCurrentDispatcher,
      V0 = $.ReactCurrentOwner,
      Gr = $.ReactCurrentBatchConfig,
      Le = 0,
      Ot = null,
      _t = null,
      Dt = 0,
      Pr = 0,
      ss = Oo(0),
      Rt = 0,
      sc = null,
      Oi = 0,
      $d = 0,
      W0 = 0,
      lc = null,
      mr = null,
      U0 = 0,
      ls = 1 / 0,
      eo = null,
      Bd = !1,
      H0 = null,
      Io = null,
      Vd = !1,
      Fo = null,
      Wd = 0,
      cc = 0,
      q0 = null,
      Ud = -1,
      Hd = 0;
    function er() {
      return Le & 6 ? lt() : Ud !== -1 ? Ud : (Ud = lt());
    }
    function Lo(r) {
      return r.mode & 1
        ? Le & 2 && Dt !== 0
          ? Dt & -Dt
          : W9.transition !== null
          ? (Hd === 0 && (Hd = rd()), Hd)
          : ((r = Ne),
            r !== 0 ||
              ((r = window.event), (r = r === void 0 ? 16 : rt(r.type))),
            r)
        : 1;
    }
    function un(r, o, s, u) {
      if (50 < cc) throw ((cc = 0), (q0 = null), Error(n(185)));
      xi(r, s, u),
        (!(Le & 2) || r !== Ot) &&
          (r === Ot && (!(Le & 2) && ($d |= s), Rt === 4 && No(r, Dt)),
          gr(r, u),
          s === 1 &&
            Le === 0 &&
            !(o.mode & 1) &&
            ((ls = lt() + 500), bd && To()));
    }
    function gr(r, o) {
      var s = r.callbackNode;
      Tl(r, o);
      var u = Fa(r, r === Ot ? Dt : 0);
      if (u === 0)
        s !== null && Ta(s), (r.callbackNode = null), (r.callbackPriority = 0);
      else if (((o = u & -u), r.callbackPriority !== o)) {
        if ((s != null && Ta(s), o === 1))
          r.tag === 0 ? V9(eC.bind(null, r)) : LS(eC.bind(null, r)),
            L9(function () {
              !(Le & 6) && To();
            }),
            (s = null);
        else {
          switch (nd(u)) {
            case 1:
              s = So;
              break;
            case 4:
              s = Al;
              break;
            case 16:
              s = za;
              break;
            case 536870912:
              s = td;
              break;
            default:
              s = za;
          }
          s = lC(s, J_.bind(null, r));
        }
        (r.callbackPriority = o), (r.callbackNode = s);
      }
    }
    function J_(r, o) {
      if (((Ud = -1), (Hd = 0), Le & 6)) throw Error(n(327));
      var s = r.callbackNode;
      if (cs() && r.callbackNode !== s) return null;
      var u = Fa(r, r === Ot ? Dt : 0);
      if (u === 0) return null;
      if (u & 30 || u & r.expiredLanes || o) o = qd(r, u);
      else {
        o = u;
        var f = Le;
        Le |= 2;
        var m = rC();
        (Ot !== r || Dt !== o) && ((eo = null), (ls = lt() + 500), Ti(r, o));
        do
          try {
            cB();
            break;
          } catch (P) {
            tC(r, P);
          }
        while (!0);
        d0(),
          (Nd.current = m),
          (Le = f),
          _t !== null ? (o = 0) : ((Ot = null), (Dt = 0), (o = Rt));
      }
      if (o !== 0) {
        if (
          (o === 2 && ((f = Ml(r)), f !== 0 && ((u = f), (o = K0(r, f)))),
          o === 1)
        )
          throw ((s = sc), Ti(r, 0), No(r, u), gr(r, lt()), s);
        if (o === 6) No(r, u);
        else {
          if (
            ((f = r.current.alternate),
            !(u & 30) &&
              !sB(f) &&
              ((o = qd(r, u)),
              o === 2 && ((m = Ml(r)), m !== 0 && ((u = m), (o = K0(r, m)))),
              o === 1))
          )
            throw ((s = sc), Ti(r, 0), No(r, u), gr(r, lt()), s);
          switch (((r.finishedWork = f), (r.finishedLanes = u), o)) {
            case 0:
            case 1:
              throw Error(n(345));
            case 2:
              Mi(r, mr, eo);
              break;
            case 3:
              if (
                (No(r, u),
                (u & 130023424) === u && ((o = U0 + 500 - lt()), 10 < o))
              ) {
                if (Fa(r, 0) !== 0) break;
                if (((f = r.suspendedLanes), (f & u) !== u)) {
                  er(), (r.pingedLanes |= r.suspendedLanes & f);
                  break;
                }
                r.timeoutHandle = e0(Mi.bind(null, r, mr, eo), o);
                break;
              }
              Mi(r, mr, eo);
              break;
            case 4:
              if ((No(r, u), (u & 4194240) === u)) break;
              for (o = r.eventTimes, f = -1; 0 < u; ) {
                var y = 31 - _r(u);
                (m = 1 << y), (y = o[y]), y > f && (f = y), (u &= ~m);
              }
              if (
                ((u = f),
                (u = lt() - u),
                (u =
                  (120 > u
                    ? 120
                    : 480 > u
                    ? 480
                    : 1080 > u
                    ? 1080
                    : 1920 > u
                    ? 1920
                    : 3e3 > u
                    ? 3e3
                    : 4320 > u
                    ? 4320
                    : 1960 * aB(u / 1960)) - u),
                10 < u)
              ) {
                r.timeoutHandle = e0(Mi.bind(null, r, mr, eo), u);
                break;
              }
              Mi(r, mr, eo);
              break;
            case 5:
              Mi(r, mr, eo);
              break;
            default:
              throw Error(n(329));
          }
        }
      }
      return gr(r, lt()), r.callbackNode === s ? J_.bind(null, r) : null;
    }
    function K0(r, o) {
      var s = lc;
      return (
        r.current.memoizedState.isDehydrated && (Ti(r, o).flags |= 256),
        (r = qd(r, o)),
        r !== 2 && ((o = mr), (mr = s), o !== null && G0(o)),
        r
      );
    }
    function G0(r) {
      mr === null ? (mr = r) : mr.push.apply(mr, r);
    }
    function sB(r) {
      for (var o = r; ; ) {
        if (o.flags & 16384) {
          var s = o.updateQueue;
          if (s !== null && ((s = s.stores), s !== null))
            for (var u = 0; u < s.length; u++) {
              var f = s[u],
                m = f.getSnapshot;
              f = f.value;
              try {
                if (!on(m(), f)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((s = o.child), o.subtreeFlags & 16384 && s !== null))
          (s.return = o), (o = s);
        else {
          if (o === r) break;
          for (; o.sibling === null; ) {
            if (o.return === null || o.return === r) return !0;
            o = o.return;
          }
          (o.sibling.return = o.return), (o = o.sibling);
        }
      }
      return !0;
    }
    function No(r, o) {
      for (
        o &= ~W0,
          o &= ~$d,
          r.suspendedLanes |= o,
          r.pingedLanes &= ~o,
          r = r.expirationTimes;
        0 < o;

      ) {
        var s = 31 - _r(o),
          u = 1 << s;
        (r[s] = -1), (o &= ~u);
      }
    }
    function eC(r) {
      if (Le & 6) throw Error(n(327));
      cs();
      var o = Fa(r, 0);
      if (!(o & 1)) return gr(r, lt()), null;
      var s = qd(r, o);
      if (r.tag !== 0 && s === 2) {
        var u = Ml(r);
        u !== 0 && ((o = u), (s = K0(r, u)));
      }
      if (s === 1) throw ((s = sc), Ti(r, 0), No(r, o), gr(r, lt()), s);
      if (s === 6) throw Error(n(345));
      return (
        (r.finishedWork = r.current.alternate),
        (r.finishedLanes = o),
        Mi(r, mr, eo),
        gr(r, lt()),
        null
      );
    }
    function Z0(r, o) {
      var s = Le;
      Le |= 1;
      try {
        return r(o);
      } finally {
        (Le = s), Le === 0 && ((ls = lt() + 500), bd && To());
      }
    }
    function Ai(r) {
      Fo !== null && Fo.tag === 0 && !(Le & 6) && cs();
      var o = Le;
      Le |= 1;
      var s = Gr.transition,
        u = Ne;
      try {
        if (((Gr.transition = null), (Ne = 1), r)) return r();
      } finally {
        (Ne = u), (Gr.transition = s), (Le = o), !(Le & 6) && To();
      }
    }
    function X0() {
      (Pr = ss.current), ut(ss);
    }
    function Ti(r, o) {
      (r.finishedWork = null), (r.finishedLanes = 0);
      var s = r.timeoutHandle;
      if ((s !== -1 && ((r.timeoutHandle = -1), F9(s)), _t !== null))
        for (s = _t.return; s !== null; ) {
          var u = s;
          switch ((a0(u), u.tag)) {
            case 1:
              (u = u.type.childContextTypes), u != null && vd();
              break;
            case 3:
              os(), ut(fr), ut(Ht), b0();
              break;
            case 5:
              v0(u);
              break;
            case 4:
              os();
              break;
            case 13:
              ut(mt);
              break;
            case 19:
              ut(mt);
              break;
            case 10:
              f0(u.type._context);
              break;
            case 22:
            case 23:
              X0();
          }
          s = s.return;
        }
      if (
        ((Ot = r),
        (_t = r = $o(r.current, null)),
        (Dt = Pr = o),
        (Rt = 0),
        (sc = null),
        (W0 = $d = Oi = 0),
        (mr = lc = null),
        Pi !== null)
      ) {
        for (o = 0; o < Pi.length; o++)
          if (((s = Pi[o]), (u = s.interleaved), u !== null)) {
            s.interleaved = null;
            var f = u.next,
              m = s.pending;
            if (m !== null) {
              var y = m.next;
              (m.next = f), (u.next = y);
            }
            s.pending = u;
          }
        Pi = null;
      }
      return r;
    }
    function tC(r, o) {
      do {
        var s = _t;
        try {
          if ((d0(), (jd.current = Md), Od)) {
            for (var u = gt.memoizedState; u !== null; ) {
              var f = u.queue;
              f !== null && (f.pending = null), (u = u.next);
            }
            Od = !1;
          }
          if (
            ((ji = 0),
            (jt = Pt = gt = null),
            (tc = !1),
            (rc = 0),
            (V0.current = null),
            s === null || s.return === null)
          ) {
            (Rt = 1), (sc = o), (_t = null);
            break;
          }
          e: {
            var m = r,
              y = s.return,
              P = s,
              T = o;
            if (
              ((o = Dt),
              (P.flags |= 32768),
              T !== null && typeof T == "object" && typeof T.then == "function")
            ) {
              var W = T,
                X = P,
                Q = X.tag;
              if (!(X.mode & 1) && (Q === 0 || Q === 11 || Q === 15)) {
                var Z = X.alternate;
                Z
                  ? ((X.updateQueue = Z.updateQueue),
                    (X.memoizedState = Z.memoizedState),
                    (X.lanes = Z.lanes))
                  : ((X.updateQueue = null), (X.memoizedState = null));
              }
              var ae = C_(y);
              if (ae !== null) {
                (ae.flags &= -257),
                  E_(ae, y, P, m, o),
                  ae.mode & 1 && __(m, W, o),
                  (o = ae),
                  (T = W);
                var ue = o.updateQueue;
                if (ue === null) {
                  var fe = new Set();
                  fe.add(T), (o.updateQueue = fe);
                } else ue.add(T);
                break e;
              } else {
                if (!(o & 1)) {
                  __(m, W, o), Y0();
                  break e;
                }
                T = Error(n(426));
              }
            } else if (ft && P.mode & 1) {
              var kt = C_(y);
              if (kt !== null) {
                !(kt.flags & 65536) && (kt.flags |= 256),
                  E_(kt, y, P, m, o),
                  c0(is(T, P));
                break e;
              }
            }
            (m = T = is(T, P)),
              Rt !== 4 && (Rt = 2),
              lc === null ? (lc = [m]) : lc.push(m),
              (m = y);
            do {
              switch (m.tag) {
                case 3:
                  (m.flags |= 65536), (o &= -o), (m.lanes |= o);
                  var N = k_(m, T, o);
                  ZS(m, N);
                  break e;
                case 1:
                  P = T;
                  var z = m.type,
                    B = m.stateNode;
                  if (
                    !(m.flags & 128) &&
                    (typeof z.getDerivedStateFromError == "function" ||
                      (B !== null &&
                        typeof B.componentDidCatch == "function" &&
                        (Io === null || !Io.has(B))))
                  ) {
                    (m.flags |= 65536), (o &= -o), (m.lanes |= o);
                    var ee = S_(m, P, o);
                    ZS(m, ee);
                    break e;
                  }
              }
              m = m.return;
            } while (m !== null);
          }
          oC(s);
        } catch (me) {
          (o = me), _t === s && s !== null && (_t = s = s.return);
          continue;
        }
        break;
      } while (!0);
    }
    function rC() {
      var r = Nd.current;
      return (Nd.current = Md), r === null ? Md : r;
    }
    function Y0() {
      (Rt === 0 || Rt === 3 || Rt === 2) && (Rt = 4),
        Ot === null || (!(Oi & 268435455) && !($d & 268435455)) || No(Ot, Dt);
    }
    function qd(r, o) {
      var s = Le;
      Le |= 2;
      var u = rC();
      (Ot !== r || Dt !== o) && ((eo = null), Ti(r, o));
      do
        try {
          lB();
          break;
        } catch (f) {
          tC(r, f);
        }
      while (!0);
      if ((d0(), (Le = s), (Nd.current = u), _t !== null)) throw Error(n(261));
      return (Ot = null), (Dt = 0), Rt;
    }
    function lB() {
      for (; _t !== null; ) nC(_t);
    }
    function cB() {
      for (; _t !== null && !Cm(); ) nC(_t);
    }
    function nC(r) {
      var o = sC(r.alternate, r, Pr);
      (r.memoizedProps = r.pendingProps),
        o === null ? oC(r) : (_t = o),
        (V0.current = null);
    }
    function oC(r) {
      var o = r;
      do {
        var s = o.alternate;
        if (((r = o.return), o.flags & 32768)) {
          if (((s = rB(s, o)), s !== null)) {
            (s.flags &= 32767), (_t = s);
            return;
          }
          if (r !== null)
            (r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null);
          else {
            (Rt = 6), (_t = null);
            return;
          }
        } else if (((s = tB(s, o, Pr)), s !== null)) {
          _t = s;
          return;
        }
        if (((o = o.sibling), o !== null)) {
          _t = o;
          return;
        }
        _t = o = r;
      } while (o !== null);
      Rt === 0 && (Rt = 5);
    }
    function Mi(r, o, s) {
      var u = Ne,
        f = Gr.transition;
      try {
        (Gr.transition = null), (Ne = 1), uB(r, o, s, u);
      } finally {
        (Gr.transition = f), (Ne = u);
      }
      return null;
    }
    function uB(r, o, s, u) {
      do cs();
      while (Fo !== null);
      if (Le & 6) throw Error(n(327));
      s = r.finishedWork;
      var f = r.finishedLanes;
      if (s === null) return null;
      if (((r.finishedWork = null), (r.finishedLanes = 0), s === r.current))
        throw Error(n(177));
      (r.callbackNode = null), (r.callbackPriority = 0);
      var m = s.lanes | s.childLanes;
      if (
        (Tm(r, m),
        r === Ot && ((_t = Ot = null), (Dt = 0)),
        (!(s.subtreeFlags & 2064) && !(s.flags & 2064)) ||
          Vd ||
          ((Vd = !0),
          lC(za, function () {
            return cs(), null;
          })),
        (m = (s.flags & 15990) !== 0),
        s.subtreeFlags & 15990 || m)
      ) {
        (m = Gr.transition), (Gr.transition = null);
        var y = Ne;
        Ne = 1;
        var P = Le;
        (Le |= 4),
          (V0.current = null),
          oB(r, s),
          G_(s, r),
          O9(Qm),
          (C = !!Ym),
          (Qm = Ym = null),
          (r.current = s),
          iB(s),
          Ma(),
          (Le = P),
          (Ne = y),
          (Gr.transition = m);
      } else r.current = s;
      if (
        (Vd && ((Vd = !1), (Fo = r), (Wd = f)),
        (m = r.pendingLanes),
        m === 0 && (Io = null),
        Rm(s.stateNode),
        gr(r, lt()),
        o !== null)
      )
        for (u = r.onRecoverableError, s = 0; s < o.length; s++)
          (f = o[s]), u(f.value, { componentStack: f.stack, digest: f.digest });
      if (Bd) throw ((Bd = !1), (r = H0), (H0 = null), r);
      return (
        Wd & 1 && r.tag !== 0 && cs(),
        (m = r.pendingLanes),
        m & 1 ? (r === q0 ? cc++ : ((cc = 0), (q0 = r))) : (cc = 0),
        To(),
        null
      );
    }
    function cs() {
      if (Fo !== null) {
        var r = nd(Wd),
          o = Gr.transition,
          s = Ne;
        try {
          if (((Gr.transition = null), (Ne = 16 > r ? 16 : r), Fo === null))
            var u = !1;
          else {
            if (((r = Fo), (Fo = null), (Wd = 0), Le & 6)) throw Error(n(331));
            var f = Le;
            for (Le |= 4, ce = r.current; ce !== null; ) {
              var m = ce,
                y = m.child;
              if (ce.flags & 16) {
                var P = m.deletions;
                if (P !== null) {
                  for (var T = 0; T < P.length; T++) {
                    var W = P[T];
                    for (ce = W; ce !== null; ) {
                      var X = ce;
                      switch (X.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ac(8, X, m);
                      }
                      var Q = X.child;
                      if (Q !== null) (Q.return = X), (ce = Q);
                      else
                        for (; ce !== null; ) {
                          X = ce;
                          var Z = X.sibling,
                            ae = X.return;
                          if ((W_(X), X === W)) {
                            ce = null;
                            break;
                          }
                          if (Z !== null) {
                            (Z.return = ae), (ce = Z);
                            break;
                          }
                          ce = ae;
                        }
                    }
                  }
                  var ue = m.alternate;
                  if (ue !== null) {
                    var fe = ue.child;
                    if (fe !== null) {
                      ue.child = null;
                      do {
                        var kt = fe.sibling;
                        (fe.sibling = null), (fe = kt);
                      } while (fe !== null);
                    }
                  }
                  ce = m;
                }
              }
              if (m.subtreeFlags & 2064 && y !== null) (y.return = m), (ce = y);
              else
                e: for (; ce !== null; ) {
                  if (((m = ce), m.flags & 2048))
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ac(9, m, m.return);
                    }
                  var N = m.sibling;
                  if (N !== null) {
                    (N.return = m.return), (ce = N);
                    break e;
                  }
                  ce = m.return;
                }
            }
            var z = r.current;
            for (ce = z; ce !== null; ) {
              y = ce;
              var B = y.child;
              if (y.subtreeFlags & 2064 && B !== null) (B.return = y), (ce = B);
              else
                e: for (y = z; ce !== null; ) {
                  if (((P = ce), P.flags & 2048))
                    try {
                      switch (P.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ld(9, P);
                      }
                    } catch (me) {
                      bt(P, P.return, me);
                    }
                  if (P === y) {
                    ce = null;
                    break e;
                  }
                  var ee = P.sibling;
                  if (ee !== null) {
                    (ee.return = P.return), (ce = ee);
                    break e;
                  }
                  ce = P.return;
                }
            }
            if (
              ((Le = f),
              To(),
              Nr && typeof Nr.onPostCommitFiberRoot == "function")
            )
              try {
                Nr.onPostCommitFiberRoot(yi, r);
              } catch {}
            u = !0;
          }
          return u;
        } finally {
          (Ne = s), (Gr.transition = o);
        }
      }
      return !1;
    }
    function iC(r, o, s) {
      (o = is(s, o)),
        (o = k_(r, o, 1)),
        (r = zo(r, o, 1)),
        (o = er()),
        r !== null && (xi(r, 1, o), gr(r, o));
    }
    function bt(r, o, s) {
      if (r.tag === 3) iC(r, r, s);
      else
        for (; o !== null; ) {
          if (o.tag === 3) {
            iC(o, r, s);
            break;
          } else if (o.tag === 1) {
            var u = o.stateNode;
            if (
              typeof o.type.getDerivedStateFromError == "function" ||
              (typeof u.componentDidCatch == "function" &&
                (Io === null || !Io.has(u)))
            ) {
              (r = is(s, r)),
                (r = S_(o, r, 1)),
                (o = zo(o, r, 1)),
                (r = er()),
                o !== null && (xi(o, 1, r), gr(o, r));
              break;
            }
          }
          o = o.return;
        }
    }
    function dB(r, o, s) {
      var u = r.pingCache;
      u !== null && u.delete(o),
        (o = er()),
        (r.pingedLanes |= r.suspendedLanes & s),
        Ot === r &&
          (Dt & s) === s &&
          (Rt === 4 || (Rt === 3 && (Dt & 130023424) === Dt && 500 > lt() - U0)
            ? Ti(r, 0)
            : (W0 |= s)),
        gr(r, o);
    }
    function aC(r, o) {
      o === 0 &&
        (r.mode & 1
          ? ((o = Ia), (Ia <<= 1), !(Ia & 130023424) && (Ia = 4194304))
          : (o = 1));
      var s = er();
      (r = Yn(r, o)), r !== null && (xi(r, o, s), gr(r, s));
    }
    function fB(r) {
      var o = r.memoizedState,
        s = 0;
      o !== null && (s = o.retryLane), aC(r, s);
    }
    function pB(r, o) {
      var s = 0;
      switch (r.tag) {
        case 13:
          var u = r.stateNode,
            f = r.memoizedState;
          f !== null && (s = f.retryLane);
          break;
        case 19:
          u = r.stateNode;
          break;
        default:
          throw Error(n(314));
      }
      u !== null && u.delete(o), aC(r, s);
    }
    var sC;
    sC = function (r, o, s) {
      if (r !== null)
        if (r.memoizedProps !== o.pendingProps || fr.current) hr = !0;
        else {
          if (!(r.lanes & s) && !(o.flags & 128)) return (hr = !1), eB(r, o, s);
          hr = !!(r.flags & 131072);
        }
      else (hr = !1), ft && o.flags & 1048576 && NS(o, wd, o.index);
      switch (((o.lanes = 0), o.tag)) {
        case 2:
          var u = o.type;
          Id(r, o), (r = o.pendingProps);
          var f = Ya(o, Ht.current);
          ns(o, s), (f = k0(null, o, u, r, f, s));
          var m = S0();
          return (
            (o.flags |= 1),
            typeof f == "object" &&
            f !== null &&
            typeof f.render == "function" &&
            f.$$typeof === void 0
              ? ((o.tag = 1),
                (o.memoizedState = null),
                (o.updateQueue = null),
                pr(u) ? ((m = !0), yd(o)) : (m = !1),
                (o.memoizedState =
                  f.state !== null && f.state !== void 0 ? f.state : null),
                m0(o),
                (f.updater = zd),
                (o.stateNode = f),
                (f._reactInternals = o),
                j0(o, u, r, s),
                (o = M0(null, o, u, !0, m, s)))
              : ((o.tag = 0),
                ft && m && i0(o),
                Jt(null, o, f, s),
                (o = o.child)),
            o
          );
        case 16:
          u = o.elementType;
          e: {
            switch (
              (Id(r, o),
              (r = o.pendingProps),
              (f = u._init),
              (u = f(u._payload)),
              (o.type = u),
              (f = o.tag = mB(u)),
              (r = sn(u, r)),
              f)
            ) {
              case 0:
                o = T0(null, o, u, r, s);
                break e;
              case 1:
                o = T_(null, o, u, r, s);
                break e;
              case 11:
                o = P_(null, o, u, r, s);
                break e;
              case 14:
                o = R_(null, o, u, sn(u.type, r), s);
                break e;
            }
            throw Error(n(306, u, ""));
          }
          return o;
        case 0:
          return (
            (u = o.type),
            (f = o.pendingProps),
            (f = o.elementType === u ? f : sn(u, f)),
            T0(r, o, u, f, s)
          );
        case 1:
          return (
            (u = o.type),
            (f = o.pendingProps),
            (f = o.elementType === u ? f : sn(u, f)),
            T_(r, o, u, f, s)
          );
        case 3:
          e: {
            if ((M_(o), r === null)) throw Error(n(387));
            (u = o.pendingProps),
              (m = o.memoizedState),
              (f = m.element),
              GS(r, o),
              Pd(o, u, null, s);
            var y = o.memoizedState;
            if (((u = y.element), m.isDehydrated))
              if (
                ((m = {
                  element: u,
                  isDehydrated: !1,
                  cache: y.cache,
                  pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                  transitions: y.transitions,
                }),
                (o.updateQueue.baseState = m),
                (o.memoizedState = m),
                o.flags & 256)
              ) {
                (f = is(Error(n(423)), o)), (o = z_(r, o, u, s, f));
                break e;
              } else if (u !== f) {
                (f = is(Error(n(424)), o)), (o = z_(r, o, u, s, f));
                break e;
              } else
                for (
                  Er = jo(o.stateNode.containerInfo.firstChild),
                    Cr = o,
                    ft = !0,
                    an = null,
                    s = qS(o, null, u, s),
                    o.child = s;
                  s;

                )
                  (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            else {
              if ((es(), u === f)) {
                o = Jn(r, o, s);
                break e;
              }
              Jt(r, o, u, s);
            }
            o = o.child;
          }
          return o;
        case 5:
          return (
            YS(o),
            r === null && l0(o),
            (u = o.type),
            (f = o.pendingProps),
            (m = r !== null ? r.memoizedProps : null),
            (y = f.children),
            Jm(u, f) ? (y = null) : m !== null && Jm(u, m) && (o.flags |= 32),
            A_(r, o),
            Jt(r, o, y, s),
            o.child
          );
        case 6:
          return r === null && l0(o), null;
        case 13:
          return D_(r, o, s);
        case 4:
          return (
            g0(o, o.stateNode.containerInfo),
            (u = o.pendingProps),
            r === null ? (o.child = ts(o, null, u, s)) : Jt(r, o, u, s),
            o.child
          );
        case 11:
          return (
            (u = o.type),
            (f = o.pendingProps),
            (f = o.elementType === u ? f : sn(u, f)),
            P_(r, o, u, f, s)
          );
        case 7:
          return Jt(r, o, o.pendingProps, s), o.child;
        case 8:
          return Jt(r, o, o.pendingProps.children, s), o.child;
        case 12:
          return Jt(r, o, o.pendingProps.children, s), o.child;
        case 10:
          e: {
            if (
              ((u = o.type._context),
              (f = o.pendingProps),
              (m = o.memoizedProps),
              (y = f.value),
              ot(_d, u._currentValue),
              (u._currentValue = y),
              m !== null)
            )
              if (on(m.value, y)) {
                if (m.children === f.children && !fr.current) {
                  o = Jn(r, o, s);
                  break e;
                }
              } else
                for (m = o.child, m !== null && (m.return = o); m !== null; ) {
                  var P = m.dependencies;
                  if (P !== null) {
                    y = m.child;
                    for (var T = P.firstContext; T !== null; ) {
                      if (T.context === u) {
                        if (m.tag === 1) {
                          (T = Qn(-1, s & -s)), (T.tag = 2);
                          var W = m.updateQueue;
                          if (W !== null) {
                            W = W.shared;
                            var X = W.pending;
                            X === null
                              ? (T.next = T)
                              : ((T.next = X.next), (X.next = T)),
                              (W.pending = T);
                          }
                        }
                        (m.lanes |= s),
                          (T = m.alternate),
                          T !== null && (T.lanes |= s),
                          p0(m.return, s, o),
                          (P.lanes |= s);
                        break;
                      }
                      T = T.next;
                    }
                  } else if (m.tag === 10)
                    y = m.type === o.type ? null : m.child;
                  else if (m.tag === 18) {
                    if (((y = m.return), y === null)) throw Error(n(341));
                    (y.lanes |= s),
                      (P = y.alternate),
                      P !== null && (P.lanes |= s),
                      p0(y, s, o),
                      (y = m.sibling);
                  } else y = m.child;
                  if (y !== null) y.return = m;
                  else
                    for (y = m; y !== null; ) {
                      if (y === o) {
                        y = null;
                        break;
                      }
                      if (((m = y.sibling), m !== null)) {
                        (m.return = y.return), (y = m);
                        break;
                      }
                      y = y.return;
                    }
                  m = y;
                }
            Jt(r, o, f.children, s), (o = o.child);
          }
          return o;
        case 9:
          return (
            (f = o.type),
            (u = o.pendingProps.children),
            ns(o, s),
            (f = qr(f)),
            (u = u(f)),
            (o.flags |= 1),
            Jt(r, o, u, s),
            o.child
          );
        case 14:
          return (
            (u = o.type),
            (f = sn(u, o.pendingProps)),
            (f = sn(u.type, f)),
            R_(r, o, u, f, s)
          );
        case 15:
          return j_(r, o, o.type, o.pendingProps, s);
        case 17:
          return (
            (u = o.type),
            (f = o.pendingProps),
            (f = o.elementType === u ? f : sn(u, f)),
            Id(r, o),
            (o.tag = 1),
            pr(u) ? ((r = !0), yd(o)) : (r = !1),
            ns(o, s),
            x_(o, u, f),
            j0(o, u, f, s),
            M0(null, o, u, !0, r, s)
          );
        case 19:
          return F_(r, o, s);
        case 22:
          return O_(r, o, s);
      }
      throw Error(n(156, o.tag));
    };
    function lC(r, o) {
      return ed(r, o);
    }
    function hB(r, o, s, u) {
      (this.tag = r),
        (this.key = s),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = o),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = u),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Zr(r, o, s, u) {
      return new hB(r, o, s, u);
    }
    function Q0(r) {
      return (r = r.prototype), !(!r || !r.isReactComponent);
    }
    function mB(r) {
      if (typeof r == "function") return Q0(r) ? 1 : 0;
      if (r != null) {
        if (((r = r.$$typeof), r === he)) return 11;
        if (r === J) return 14;
      }
      return 2;
    }
    function $o(r, o) {
      var s = r.alternate;
      return (
        s === null
          ? ((s = Zr(r.tag, o, r.key, r.mode)),
            (s.elementType = r.elementType),
            (s.type = r.type),
            (s.stateNode = r.stateNode),
            (s.alternate = r),
            (r.alternate = s))
          : ((s.pendingProps = o),
            (s.type = r.type),
            (s.flags = 0),
            (s.subtreeFlags = 0),
            (s.deletions = null)),
        (s.flags = r.flags & 14680064),
        (s.childLanes = r.childLanes),
        (s.lanes = r.lanes),
        (s.child = r.child),
        (s.memoizedProps = r.memoizedProps),
        (s.memoizedState = r.memoizedState),
        (s.updateQueue = r.updateQueue),
        (o = r.dependencies),
        (s.dependencies =
          o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
        (s.sibling = r.sibling),
        (s.index = r.index),
        (s.ref = r.ref),
        s
      );
    }
    function Kd(r, o, s, u, f, m) {
      var y = 2;
      if (((u = r), typeof r == "function")) Q0(r) && (y = 1);
      else if (typeof r == "string") y = 5;
      else
        e: switch (r) {
          case L:
            return zi(s.children, f, m, o);
          case H:
            (y = 8), (f |= 8);
            break;
          case G:
            return (
              (r = Zr(12, s, o, f | 2)), (r.elementType = G), (r.lanes = m), r
            );
          case ve:
            return (
              (r = Zr(13, s, o, f)), (r.elementType = ve), (r.lanes = m), r
            );
          case Ee:
            return (
              (r = Zr(19, s, o, f)), (r.elementType = Ee), (r.lanes = m), r
            );
          case se:
            return Gd(s, f, m, o);
          default:
            if (typeof r == "object" && r !== null)
              switch (r.$$typeof) {
                case q:
                  y = 10;
                  break e;
                case ie:
                  y = 9;
                  break e;
                case he:
                  y = 11;
                  break e;
                case J:
                  y = 14;
                  break e;
                case re:
                  (y = 16), (u = null);
                  break e;
              }
            throw Error(n(130, r == null ? r : typeof r, ""));
        }
      return (
        (o = Zr(y, s, o, f)),
        (o.elementType = r),
        (o.type = u),
        (o.lanes = m),
        o
      );
    }
    function zi(r, o, s, u) {
      return (r = Zr(7, r, u, o)), (r.lanes = s), r;
    }
    function Gd(r, o, s, u) {
      return (
        (r = Zr(22, r, u, o)),
        (r.elementType = se),
        (r.lanes = s),
        (r.stateNode = { isHidden: !1 }),
        r
      );
    }
    function J0(r, o, s) {
      return (r = Zr(6, r, null, o)), (r.lanes = s), r;
    }
    function eg(r, o, s) {
      return (
        (o = Zr(4, r.children !== null ? r.children : [], r.key, o)),
        (o.lanes = s),
        (o.stateNode = {
          containerInfo: r.containerInfo,
          pendingChildren: null,
          implementation: r.implementation,
        }),
        o
      );
    }
    function gB(r, o, s, u, f) {
      (this.tag = o),
        (this.containerInfo = r),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Na(0)),
        (this.expirationTimes = Na(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Na(0)),
        (this.identifierPrefix = u),
        (this.onRecoverableError = f),
        (this.mutableSourceEagerHydrationData = null);
    }
    function tg(r, o, s, u, f, m, y, P, T) {
      return (
        (r = new gB(r, o, s, P, T)),
        o === 1 ? ((o = 1), m === !0 && (o |= 8)) : (o = 0),
        (m = Zr(3, null, null, o)),
        (r.current = m),
        (m.stateNode = r),
        (m.memoizedState = {
          element: u,
          isDehydrated: s,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        m0(m),
        r
      );
    }
    function vB(r, o, s) {
      var u =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: I,
        key: u == null ? null : "" + u,
        children: r,
        containerInfo: o,
        implementation: s,
      };
    }
    function cC(r) {
      if (!r) return Ao;
      r = r._reactInternals;
      e: {
        if (dr(r) !== r || r.tag !== 1) throw Error(n(170));
        var o = r;
        do {
          switch (o.tag) {
            case 3:
              o = o.stateNode.context;
              break e;
            case 1:
              if (pr(o.type)) {
                o = o.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
        throw Error(n(171));
      }
      if (r.tag === 1) {
        var s = r.type;
        if (pr(s)) return IS(r, s, o);
      }
      return o;
    }
    function uC(r, o, s, u, f, m, y, P, T) {
      return (
        (r = tg(s, u, !0, r, f, m, y, P, T)),
        (r.context = cC(null)),
        (s = r.current),
        (u = er()),
        (f = Lo(s)),
        (m = Qn(u, f)),
        (m.callback = o ?? null),
        zo(s, m, f),
        (r.current.lanes = f),
        xi(r, f, u),
        gr(r, u),
        r
      );
    }
    function Zd(r, o, s, u) {
      var f = o.current,
        m = er(),
        y = Lo(f);
      return (
        (s = cC(s)),
        o.context === null ? (o.context = s) : (o.pendingContext = s),
        (o = Qn(m, y)),
        (o.payload = { element: r }),
        (u = u === void 0 ? null : u),
        u !== null && (o.callback = u),
        (r = zo(f, o, y)),
        r !== null && (un(r, f, y, m), Ed(r, f, y)),
        y
      );
    }
    function Xd(r) {
      if (((r = r.current), !r.child)) return null;
      switch (r.child.tag) {
        case 5:
          return r.child.stateNode;
        default:
          return r.child.stateNode;
      }
    }
    function dC(r, o) {
      if (((r = r.memoizedState), r !== null && r.dehydrated !== null)) {
        var s = r.retryLane;
        r.retryLane = s !== 0 && s < o ? s : o;
      }
    }
    function rg(r, o) {
      dC(r, o), (r = r.alternate) && dC(r, o);
    }
    var fC =
      typeof reportError == "function"
        ? reportError
        : function (r) {
            console.error(r);
          };
    function ng(r) {
      this._internalRoot = r;
    }
    (Yd.prototype.render = ng.prototype.render =
      function (r) {
        var o = this._internalRoot;
        if (o === null) throw Error(n(409));
        Zd(r, o, null, null);
      }),
      (Yd.prototype.unmount = ng.prototype.unmount =
        function () {
          var r = this._internalRoot;
          if (r !== null) {
            this._internalRoot = null;
            var o = r.containerInfo;
            Ai(function () {
              Zd(null, r, null, null);
            }),
              (o[Kn] = null);
          }
        });
    function Yd(r) {
      this._internalRoot = r;
    }
    Yd.prototype.unstable_scheduleHydration = function (r) {
      if (r) {
        var o = id();
        r = { blockedOn: null, target: r, priority: o };
        for (var s = 0; s < Wr.length && o !== 0 && o < Wr[s].priority; s++);
        Wr.splice(s, 0, r), s === 0 && Fl(r);
      }
    };
    function og(r) {
      return !(
        !r ||
        (r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
      );
    }
    function Qd(r) {
      return !(
        !r ||
        (r.nodeType !== 1 &&
          r.nodeType !== 9 &&
          r.nodeType !== 11 &&
          (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function pC() {}
    function yB(r, o, s, u, f) {
      if (f) {
        if (typeof u == "function") {
          var m = u;
          u = function () {
            var W = Xd(y);
            m.call(W);
          };
        }
        var y = uC(o, u, r, 0, null, !1, !1, "", pC);
        return (
          (r._reactRootContainer = y),
          (r[Kn] = y.current),
          Kl(r.nodeType === 8 ? r.parentNode : r),
          Ai(),
          y
        );
      }
      for (; (f = r.lastChild); ) r.removeChild(f);
      if (typeof u == "function") {
        var P = u;
        u = function () {
          var W = Xd(T);
          P.call(W);
        };
      }
      var T = tg(r, 0, !1, null, null, !1, !1, "", pC);
      return (
        (r._reactRootContainer = T),
        (r[Kn] = T.current),
        Kl(r.nodeType === 8 ? r.parentNode : r),
        Ai(function () {
          Zd(o, T, s, u);
        }),
        T
      );
    }
    function Jd(r, o, s, u, f) {
      var m = s._reactRootContainer;
      if (m) {
        var y = m;
        if (typeof f == "function") {
          var P = f;
          f = function () {
            var T = Xd(y);
            P.call(T);
          };
        }
        Zd(o, y, r, f);
      } else y = yB(s, o, r, f, u);
      return Xd(y);
    }
    (od = function (r) {
      switch (r.tag) {
        case 3:
          var o = r.stateNode;
          if (o.current.memoizedState.isDehydrated) {
            var s = bi(o.pendingLanes);
            s !== 0 &&
              (zl(o, s | 1),
              gr(o, lt()),
              !(Le & 6) && ((ls = lt() + 500), To()));
          }
          break;
        case 13:
          Ai(function () {
            var u = Yn(r, 1);
            if (u !== null) {
              var f = er();
              un(u, r, 1, f);
            }
          }),
            rg(r, 1);
      }
    }),
      (Dl = function (r) {
        if (r.tag === 13) {
          var o = Yn(r, 134217728);
          if (o !== null) {
            var s = er();
            un(o, r, 134217728, s);
          }
          rg(r, 134217728);
        }
      }),
      ($a = function (r) {
        if (r.tag === 13) {
          var o = Lo(r),
            s = Yn(r, o);
          if (s !== null) {
            var u = er();
            un(s, r, o, u);
          }
          rg(r, o);
        }
      }),
      (id = function () {
        return Ne;
      }),
      (ad = function (r, o) {
        var s = Ne;
        try {
          return (Ne = r), o();
        } finally {
          Ne = s;
        }
      }),
      (Oa = function (r, o, s) {
        switch (o) {
          case "input":
            if ((be(r, s), (o = s.name), s.type === "radio" && o != null)) {
              for (s = r; s.parentNode; ) s = s.parentNode;
              for (
                s = s.querySelectorAll(
                  "input[name=" + JSON.stringify("" + o) + '][type="radio"]'
                ),
                  o = 0;
                o < s.length;
                o++
              ) {
                var u = s[o];
                if (u !== r && u.form === r.form) {
                  var f = gd(u);
                  if (!f) throw Error(n(90));
                  Yt(u), be(u, f);
                }
              }
            }
            break;
          case "textarea":
            tn(r, s);
            break;
          case "select":
            (o = s.value), o != null && yt(r, !!s.multiple, o, !1);
        }
      }),
      (Gu = Z0),
      (Zu = Ai);
    var bB = { usingClientEntryPoint: !1, Events: [Xl, Za, gd, qu, Ku, Z0] },
      uc = {
        findFiberByHostInstance: Si,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
      },
      xB = {
        bundleType: uc.bundleType,
        version: uc.version,
        rendererPackageName: uc.rendererPackageName,
        rendererConfig: uc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: $.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (r) {
          return (r = Qu(r)), r === null ? null : r.stateNode;
        },
        findFiberByHostInstance: uc.findFiberByHostInstance,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ef = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ef.isDisabled && ef.supportsFiber)
        try {
          (yi = ef.inject(xB)), (Nr = ef);
        } catch {}
    }
    return (
      (ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bB),
      (ar.createPortal = function (r, o) {
        var s =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!og(o)) throw Error(n(200));
        return vB(r, o, null, s);
      }),
      (ar.createRoot = function (r, o) {
        if (!og(r)) throw Error(n(299));
        var s = !1,
          u = "",
          f = fC;
        return (
          o != null &&
            (o.unstable_strictMode === !0 && (s = !0),
            o.identifierPrefix !== void 0 && (u = o.identifierPrefix),
            o.onRecoverableError !== void 0 && (f = o.onRecoverableError)),
          (o = tg(r, 1, !1, null, null, s, !1, u, f)),
          (r[Kn] = o.current),
          Kl(r.nodeType === 8 ? r.parentNode : r),
          new ng(o)
        );
      }),
      (ar.findDOMNode = function (r) {
        if (r == null) return null;
        if (r.nodeType === 1) return r;
        var o = r._reactInternals;
        if (o === void 0)
          throw typeof r.render == "function"
            ? Error(n(188))
            : ((r = Object.keys(r).join(",")), Error(n(268, r)));
        return (r = Qu(o)), (r = r === null ? null : r.stateNode), r;
      }),
      (ar.flushSync = function (r) {
        return Ai(r);
      }),
      (ar.hydrate = function (r, o, s) {
        if (!Qd(o)) throw Error(n(200));
        return Jd(null, r, o, !0, s);
      }),
      (ar.hydrateRoot = function (r, o, s) {
        if (!og(r)) throw Error(n(405));
        var u = (s != null && s.hydratedSources) || null,
          f = !1,
          m = "",
          y = fC;
        if (
          (s != null &&
            (s.unstable_strictMode === !0 && (f = !0),
            s.identifierPrefix !== void 0 && (m = s.identifierPrefix),
            s.onRecoverableError !== void 0 && (y = s.onRecoverableError)),
          (o = uC(o, null, r, 1, s ?? null, f, !1, m, y)),
          (r[Kn] = o.current),
          Kl(r),
          u)
        )
          for (r = 0; r < u.length; r++)
            (s = u[r]),
              (f = s._getVersion),
              (f = f(s._source)),
              o.mutableSourceEagerHydrationData == null
                ? (o.mutableSourceEagerHydrationData = [s, f])
                : o.mutableSourceEagerHydrationData.push(s, f);
        return new Yd(o);
      }),
      (ar.render = function (r, o, s) {
        if (!Qd(o)) throw Error(n(200));
        return Jd(null, r, o, !1, s);
      }),
      (ar.unmountComponentAtNode = function (r) {
        if (!Qd(r)) throw Error(n(40));
        return r._reactRootContainer
          ? (Ai(function () {
              Jd(null, null, r, !1, function () {
                (r._reactRootContainer = null), (r[Kn] = null);
              });
            }),
            !0)
          : !1;
      }),
      (ar.unstable_batchedUpdates = Z0),
      (ar.unstable_renderSubtreeIntoContainer = function (r, o, s, u) {
        if (!Qd(s)) throw Error(n(200));
        if (r == null || r._reactInternals === void 0) throw Error(n(38));
        return Jd(r, o, s, !1, u);
      }),
      (ar.version = "18.3.1-next-f1338f8080-20240426"),
      ar
    );
  }
  var J1;
  function ex() {
    if (J1) return vh.exports;
    J1 = 1;
    function e() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (t) {
          console.error(t);
        }
    }
    return e(), (vh.exports = Hz()), vh.exports;
  }
  var tx = ex();
  const [rx, qz] = tr({ strict: !1, name: "PortalContext" }),
    yh = "chakra-portal",
    Kz = ".chakra-portal",
    Gz = (e) =>
      R.jsx("div", {
        className: "chakra-portal-zIndex",
        style: {
          position: "absolute",
          zIndex: e.zIndex,
          top: 0,
          left: 0,
          right: 0,
        },
        children: e.children,
      }),
    Zz = (e) => {
      const { appendToParentPortal: t, children: n } = e,
        [i, a] = x.useState(null),
        l = x.useRef(null),
        [, c] = x.useState({});
      x.useEffect(() => c({}), []);
      const d = qz(),
        p = FO();
      Vo(() => {
        if (!i) return;
        const g = i.ownerDocument,
          v = t ? d ?? g.body : g.body;
        if (!v) return;
        (l.current = g.createElement("div")),
          (l.current.className = yh),
          v.appendChild(l.current),
          c({});
        const b = l.current;
        return () => {
          v.contains(b) && v.removeChild(b);
        };
      }, [i]);
      const h =
        p != null && p.zIndex
          ? R.jsx(Gz, { zIndex: p == null ? void 0 : p.zIndex, children: n })
          : n;
      return l.current
        ? tx.createPortal(
            R.jsx(rx, { value: l.current, children: h }),
            l.current
          )
        : R.jsx("span", {
            ref: (g) => {
              g && a(g);
            },
          });
    },
    Xz = (e) => {
      const { children: t, containerRef: n, appendToParentPortal: i } = e,
        a = n.current,
        l = a ?? (typeof window < "u" ? document.body : void 0),
        c = x.useMemo(() => {
          const p = a == null ? void 0 : a.ownerDocument.createElement("div");
          return p && (p.className = yh), p;
        }, [a]),
        [, d] = x.useState({});
      return (
        Vo(() => d({}), []),
        Vo(() => {
          if (!(!c || !l))
            return (
              l.appendChild(c),
              () => {
                l.removeChild(c);
              }
            );
        }, [c, l]),
        l && c
          ? tx.createPortal(R.jsx(rx, { value: i ? c : null, children: t }), c)
          : null
      );
    };
  function tl(e) {
    const t = { appendToParentPortal: !0, ...e },
      { containerRef: n, ...i } = t;
    return n ? R.jsx(Xz, { containerRef: n, ...i }) : R.jsx(Zz, { ...i });
  }
  (tl.className = yh), (tl.selector = Kz), (tl.displayName = "Portal");
  const [Yz, Qz] = tr({ name: "ToastOptionsContext", strict: !1 }),
    Jz = (e) => {
      const t = x.useSyncExternalStore(wn.subscribe, wn.getState, wn.getState),
        {
          motionVariants: n,
          component: i = z1,
          portalProps: a,
          animatePresenceProps: l,
        } = e,
        c = Object.keys(t).map((d) => {
          const p = t[d];
          return R.jsx(
            "div",
            {
              role: "region",
              "aria-live": "polite",
              "aria-label": `Notifications-${d}`,
              id: `chakra-toast-manager-${d}`,
              style: pz(d),
              children: R.jsx(el, {
                ...l,
                initial: !1,
                children: p.map((h) =>
                  R.jsx(i, { motionVariants: n, ...h }, h.id)
                ),
              }),
            },
            d
          );
        });
      return R.jsx(tl, { ...a, children: c });
    },
    eD = (e) =>
      function ({ children: t, theme: n = e, toastOptions: i, ...a }) {
        return R.jsxs(LO, {
          theme: n,
          ...a,
          children: [
            R.jsx(Yz, {
              value: i == null ? void 0 : i.defaultOptions,
              children: t,
            }),
            R.jsx(Jz, { ...i }),
          ],
        });
      },
    tD = eD(Rj),
    nx = {
      ease: [0.25, 0.1, 0.25, 1],
      easeIn: [0.4, 0, 1, 1],
      easeOut: [0, 0, 0.2, 1],
      easeInOut: [0.4, 0, 0.2, 1],
    },
    ni = {
      enter: { duration: 0.2, ease: nx.easeOut },
      exit: { duration: 0.1, ease: nx.easeIn },
    },
    oi = {
      enter: (e, t) => ({
        ...e,
        delay: typeof t == "number" ? t : t == null ? void 0 : t.enter,
      }),
      exit: (e, t) => ({
        ...e,
        delay: typeof t == "number" ? t : t == null ? void 0 : t.exit,
      }),
    },
    bh = Ce("div");
  bh.displayName = "Box";
  const [rD, nD] = tr({ strict: !1, name: "ButtonGroupContext" });
  function rl(e) {
    const { children: t, className: n, ...i } = e,
      a = x.isValidElement(t)
        ? x.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
        : t,
      l = ze("chakra-button__icon", n);
    return R.jsx(Ce.span, {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...i,
      className: l,
      children: a,
    });
  }
  rl.displayName = "ButtonIcon";
  function xh(e) {
    const {
        label: t,
        placement: n,
        spacing: i = "0.5rem",
        children: a = R.jsx(ph, {
          color: "currentColor",
          width: "1em",
          height: "1em",
        }),
        className: l,
        __css: c,
        ...d
      } = e,
      p = ze("chakra-button__spinner", l),
      h = n === "start" ? "marginEnd" : "marginStart",
      g = x.useMemo(
        () => ({
          display: "flex",
          alignItems: "center",
          position: t ? "relative" : "absolute",
          [h]: t ? i : 0,
          fontSize: "1em",
          lineHeight: "normal",
          ...c,
        }),
        [c, t, h, i]
      );
    return R.jsx(Ce.div, { className: p, ...d, __css: g, children: a });
  }
  xh.displayName = "ButtonSpinner";
  function oD(e) {
    const [t, n] = x.useState(!e);
    return {
      ref: x.useCallback((i) => {
        i && n(i.tagName === "BUTTON");
      }, []),
      type: t ? "button" : void 0,
    };
  }
  const ii = De((e, t) => {
    const n = nD(),
      i = fo("Button", { ...n, ...e }),
      {
        isDisabled: a = n == null ? void 0 : n.isDisabled,
        isLoading: l,
        isActive: c,
        children: d,
        leftIcon: p,
        rightIcon: h,
        loadingText: g,
        iconSpacing: v = "0.5rem",
        type: b,
        spinner: k,
        spinnerPlacement: S = "start",
        className: w,
        as: _,
        shouldWrapChildren: j,
        ...O
      } = nr(e),
      M = x.useMemo(() => {
        const L = { ...(i == null ? void 0 : i._focus), zIndex: 1 };
        return {
          display: "inline-flex",
          appearance: "none",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
          position: "relative",
          whiteSpace: "nowrap",
          verticalAlign: "middle",
          outline: "none",
          ...i,
          ...(!!n && { _focus: L }),
        };
      }, [i, n]),
      { ref: $, type: E } = oD(_),
      I = {
        rightIcon: h,
        leftIcon: p,
        iconSpacing: v,
        children: d,
        shouldWrapChildren: j,
      };
    return R.jsxs(Ce.button, {
      disabled: a || l,
      ref: s2(t, $),
      as: _,
      type: b ?? E,
      "data-active": Ie(c),
      "data-loading": Ie(l),
      __css: M,
      className: ze("chakra-button", w),
      ...O,
      children: [
        l &&
          S === "start" &&
          R.jsx(xh, {
            className: "chakra-button__spinner--start",
            label: g,
            placement: "start",
            spacing: v,
            children: k,
          }),
        l
          ? g || R.jsx(Ce.span, { opacity: 0, children: R.jsx(ox, { ...I }) })
          : R.jsx(ox, { ...I }),
        l &&
          S === "end" &&
          R.jsx(xh, {
            className: "chakra-button__spinner--end",
            label: g,
            placement: "end",
            spacing: v,
            children: k,
          }),
      ],
    });
  });
  ii.displayName = "Button";
  function ox(e) {
    const {
      leftIcon: t,
      rightIcon: n,
      children: i,
      iconSpacing: a,
      shouldWrapChildren: l,
    } = e;
    return l
      ? R.jsxs("span", {
          style: { display: "contents" },
          children: [
            t && R.jsx(rl, { marginEnd: a, children: t }),
            i,
            n && R.jsx(rl, { marginStart: a, children: n }),
          ],
        })
      : R.jsxs(R.Fragment, {
          children: [
            t && R.jsx(rl, { marginEnd: a, children: t }),
            i,
            n && R.jsx(rl, { marginStart: a, children: n }),
          ],
        });
  }
  const iD = {
      horizontal: {
        "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
        "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
        "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 },
      },
      vertical: {
        "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
        "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
        "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 },
      },
    },
    aD = {
      horizontal: (e) => ({
        "& > *:not(style) ~ *:not(style)": { marginStart: e },
      }),
      vertical: (e) => ({
        "& > *:not(style) ~ *:not(style)": { marginTop: e },
      }),
    },
    ix = De(function (e, t) {
      const {
          size: n,
          colorScheme: i,
          variant: a,
          className: l,
          spacing: c = "0.5rem",
          isAttached: d,
          isDisabled: p,
          orientation: h = "horizontal",
          ...g
        } = e,
        v = ze("chakra-button__group", l),
        b = x.useMemo(
          () => ({ size: n, colorScheme: i, variant: a, isDisabled: p }),
          [n, i, a, p]
        );
      let k = { display: "inline-flex", ...(d ? iD[h] : aD[h](c)) };
      const S = h === "vertical";
      return R.jsx(rD, {
        value: b,
        children: R.jsx(Ce.div, {
          ref: t,
          role: "group",
          __css: k,
          className: v,
          "data-attached": d ? "" : void 0,
          "data-orientation": h,
          flexDir: S ? "column" : void 0,
          ...g,
        }),
      });
    });
  ix.displayName = "ButtonGroup";
  var sD = () => typeof document < "u",
    ax = !1,
    nl = null,
    ai = !1,
    wh = !1,
    kh = new Set();
  function Sh(e, t) {
    kh.forEach((n) => n(e, t));
  }
  var lD =
    typeof window < "u" && window.navigator != null
      ? /^Mac/.test(window.navigator.platform)
      : !1;
  function cD(e) {
    return !(
      e.metaKey ||
      (!lD && e.altKey) ||
      e.ctrlKey ||
      e.key === "Control" ||
      e.key === "Shift" ||
      e.key === "Meta"
    );
  }
  function sx(e) {
    (ai = !0), cD(e) && ((nl = "keyboard"), Sh("keyboard", e));
  }
  function la(e) {
    if (
      ((nl = "pointer"), e.type === "mousedown" || e.type === "pointerdown")
    ) {
      ai = !0;
      const t = e.composedPath ? e.composedPath()[0] : e.target;
      let n = !1;
      try {
        n = t.matches(":focus-visible");
      } catch {}
      if (n) return;
      Sh("pointer", e);
    }
  }
  function uD(e) {
    return e.mozInputSource === 0 && e.isTrusted
      ? !0
      : e.detail === 0 && !e.pointerType;
  }
  function dD(e) {
    uD(e) && ((ai = !0), (nl = "virtual"));
  }
  function fD(e) {
    e.target === window ||
      e.target === document ||
      (e.target instanceof Element && e.target.hasAttribute("tabindex")) ||
      (!ai && !wh && ((nl = "virtual"), Sh("virtual", e)),
      (ai = !1),
      (wh = !1));
  }
  function pD() {
    (ai = !1), (wh = !0);
  }
  function lx() {
    return nl !== "pointer";
  }
  function hD() {
    if (!sD() || ax) return;
    const { focus: e } = HTMLElement.prototype;
    (HTMLElement.prototype.focus = function (...t) {
      (ai = !0), e.apply(this, t);
    }),
      document.addEventListener("keydown", sx, !0),
      document.addEventListener("keyup", sx, !0),
      document.addEventListener("click", dD, !0),
      window.addEventListener("focus", fD, !0),
      window.addEventListener("blur", pD, !1),
      typeof PointerEvent < "u"
        ? (document.addEventListener("pointerdown", la, !0),
          document.addEventListener("pointermove", la, !0),
          document.addEventListener("pointerup", la, !0))
        : (document.addEventListener("mousedown", la, !0),
          document.addEventListener("mousemove", la, !0),
          document.addEventListener("mouseup", la, !0)),
      (ax = !0);
  }
  function mD(e) {
    hD(), e(lx());
    const t = () => e(lx());
    return (
      kh.add(t),
      () => {
        kh.delete(t);
      }
    );
  }
  const [gD, vD] = tr({
      name: "FormControlStylesContext",
      errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
    }),
    [yD, cx] = tr({ strict: !1, name: "FormControlContext" });
  function bD(e) {
    const {
        id: t,
        isRequired: n,
        isInvalid: i,
        isDisabled: a,
        isReadOnly: l,
        ...c
      } = e,
      d = x.useId(),
      p = t || `field-${d}`,
      h = `${p}-label`,
      g = `${p}-feedback`,
      v = `${p}-helptext`,
      [b, k] = x.useState(!1),
      [S, w] = x.useState(!1),
      [_, j] = x.useState(!1),
      O = x.useCallback(
        (L = {}, H = null) => ({
          id: v,
          ...L,
          ref: rr(H, (G) => {
            G && w(!0);
          }),
        }),
        [v]
      ),
      M = x.useCallback(
        (L = {}, H = null) => ({
          ...L,
          ref: H,
          "data-focus": Ie(_),
          "data-disabled": Ie(a),
          "data-invalid": Ie(i),
          "data-readonly": Ie(l),
          id: L.id !== void 0 ? L.id : h,
          htmlFor: L.htmlFor !== void 0 ? L.htmlFor : p,
        }),
        [p, a, _, i, l, h]
      ),
      $ = x.useCallback(
        (L = {}, H = null) => ({
          id: g,
          ...L,
          ref: rr(H, (G) => {
            G && k(!0);
          }),
          "aria-live": "polite",
        }),
        [g]
      ),
      E = x.useCallback(
        (L = {}, H = null) => ({
          ...L,
          ...c,
          ref: H,
          role: "group",
          "data-focus": Ie(_),
          "data-disabled": Ie(a),
          "data-invalid": Ie(i),
          "data-readonly": Ie(l),
        }),
        [c, a, _, i, l]
      ),
      I = x.useCallback(
        (L = {}, H = null) => ({
          ...L,
          ref: H,
          role: "presentation",
          "aria-hidden": !0,
          children: L.children || "*",
        }),
        []
      );
    return {
      isRequired: !!n,
      isInvalid: !!i,
      isReadOnly: !!l,
      isDisabled: !!a,
      isFocused: !!_,
      onFocus: () => j(!0),
      onBlur: () => j(!1),
      hasFeedbackText: b,
      setHasFeedbackText: k,
      hasHelpText: S,
      setHasHelpText: w,
      id: p,
      labelId: h,
      feedbackId: g,
      helpTextId: v,
      htmlProps: c,
      getHelpTextProps: O,
      getErrorMessageProps: $,
      getRootProps: E,
      getLabelProps: M,
      getRequiredIndicatorProps: I,
    };
  }
  const xD = De(function (e, t) {
    const n = po("Form", e),
      i = nr(e),
      { getRootProps: a, htmlProps: l, ...c } = bD(i),
      d = ze("chakra-form-control", e.className);
    return R.jsx(yD, {
      value: c,
      children: R.jsx(gD, {
        value: n,
        children: R.jsx(Ce.div, {
          ...a({}, t),
          className: d,
          __css: n.container,
        }),
      }),
    });
  });
  xD.displayName = "FormControl";
  const wD = De(function (e, t) {
    const n = cx(),
      i = vD(),
      a = ze("chakra-form__helper-text", e.className);
    return R.jsx(Ce.div, {
      ...(n == null ? void 0 : n.getHelpTextProps(e, t)),
      __css: i.helperText,
      className: a,
    });
  });
  wD.displayName = "FormHelperText";
  function ux(e) {
    const {
      isDisabled: t,
      isInvalid: n,
      isReadOnly: i,
      isRequired: a,
      ...l
    } = dx(e);
    return {
      ...l,
      disabled: t,
      readOnly: i,
      required: a,
      "aria-invalid": nf(n),
      "aria-required": nf(a),
      "aria-readonly": nf(i),
    };
  }
  function dx(e) {
    const t = cx(),
      {
        id: n,
        disabled: i,
        readOnly: a,
        required: l,
        isRequired: c,
        isInvalid: d,
        isReadOnly: p,
        isDisabled: h,
        onFocus: g,
        onBlur: v,
        ...b
      } = e,
      k = e["aria-describedby"] ? [e["aria-describedby"]] : [];
    return (
      t != null &&
        t.hasFeedbackText &&
        t != null &&
        t.isInvalid &&
        k.push(t.feedbackId),
      t != null && t.hasHelpText && k.push(t.helpTextId),
      {
        ...b,
        "aria-describedby": k.join(" ") || void 0,
        id: n ?? (t == null ? void 0 : t.id),
        isDisabled: i ?? h ?? (t == null ? void 0 : t.isDisabled),
        isReadOnly: a ?? p ?? (t == null ? void 0 : t.isReadOnly),
        isRequired: l ?? c ?? (t == null ? void 0 : t.isRequired),
        isInvalid: d ?? (t == null ? void 0 : t.isInvalid),
        onFocus: et(t == null ? void 0 : t.onFocus, g),
        onBlur: et(t == null ? void 0 : t.onBlur, v),
      }
    );
  }
  const kD = {
    border: "0",
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  };
  function SD(e = {}) {
    const t = dx(e),
      {
        isDisabled: n,
        isReadOnly: i,
        isRequired: a,
        isInvalid: l,
        id: c,
        onBlur: d,
        onFocus: p,
        "aria-describedby": h,
      } = t,
      {
        defaultChecked: g,
        isChecked: v,
        isFocusable: b,
        onChange: k,
        isIndeterminate: S,
        name: w,
        value: _,
        tabIndex: j = void 0,
        "aria-label": O,
        "aria-labelledby": M,
        "aria-invalid": $,
        ...E
      } = e,
      I = sf(E, [
        "isDisabled",
        "isReadOnly",
        "isRequired",
        "isInvalid",
        "id",
        "onBlur",
        "onFocus",
        "aria-describedby",
      ]),
      L = ro(k),
      H = ro(d),
      G = ro(p),
      [q, ie] = x.useState(!1),
      [he, ve] = x.useState(!1),
      [Ee, J] = x.useState(!1),
      [re, se] = x.useState(!1);
    x.useEffect(() => mD(ie), []);
    const K = x.useRef(null),
      [ne, te] = x.useState(!0),
      [A, V] = x.useState(!!g),
      Y = v !== void 0,
      oe = Y ? v : A,
      pe = x.useCallback(
        (Pe) => {
          if (i || n) {
            Pe.preventDefault();
            return;
          }
          Y ||
            V(
              oe ? Pe.currentTarget.checked : S ? !0 : Pe.currentTarget.checked
            ),
            L == null || L(Pe);
        },
        [i, n, oe, Y, S, L]
      );
    Vo(() => {
      K.current && (K.current.indeterminate = !!S);
    }, [S]),
      fs(() => {
        n && ve(!1);
      }, [n, ve]),
      Vo(() => {
        const Pe = K.current;
        if (!(Pe != null && Pe.form)) return;
        const qe = () => {
          V(!!g);
        };
        return (
          Pe.form.addEventListener("reset", qe),
          () => {
            var tt;
            return (tt = Pe.form) == null
              ? void 0
              : tt.removeEventListener("reset", qe);
          }
        );
      }, []);
    const ye = n && !b,
      de = x.useCallback(
        (Pe) => {
          Pe.key === " " && se(!0);
        },
        [se]
      ),
      ge = x.useCallback(
        (Pe) => {
          Pe.key === " " && se(!1);
        },
        [se]
      );
    Vo(() => {
      K.current && K.current.checked !== oe && V(K.current.checked);
    }, [K.current]);
    const Oe = x.useCallback(
        (Pe = {}, qe = null) => {
          const tt = (be) => {
            he && be.preventDefault(), se(!0);
          };
          return {
            ...Pe,
            ref: qe,
            "data-active": Ie(re),
            "data-hover": Ie(Ee),
            "data-checked": Ie(oe),
            "data-focus": Ie(he),
            "data-focus-visible": Ie(he && q),
            "data-indeterminate": Ie(S),
            "data-disabled": Ie(n),
            "data-invalid": Ie(l),
            "data-readonly": Ie(i),
            "aria-hidden": !0,
            onMouseDown: et(Pe.onMouseDown, tt),
            onMouseUp: et(Pe.onMouseUp, () => se(!1)),
            onMouseEnter: et(Pe.onMouseEnter, () => J(!0)),
            onMouseLeave: et(Pe.onMouseLeave, () => J(!1)),
          };
        },
        [re, oe, n, he, q, Ee, S, l, i]
      ),
      Qe = x.useCallback(
        (Pe = {}, qe = null) => ({
          ...Pe,
          ref: qe,
          "data-active": Ie(re),
          "data-hover": Ie(Ee),
          "data-checked": Ie(oe),
          "data-focus": Ie(he),
          "data-focus-visible": Ie(he && q),
          "data-indeterminate": Ie(S),
          "data-disabled": Ie(n),
          "data-invalid": Ie(l),
          "data-readonly": Ie(i),
        }),
        [re, oe, n, he, q, Ee, S, l, i]
      ),
      dt = x.useCallback(
        (Pe = {}, qe = null) => ({
          ...I,
          ...Pe,
          ref: rr(qe, (tt) => {
            tt && te(tt.tagName === "LABEL");
          }),
          onClick: et(Pe.onClick, () => {
            var tt;
            ne ||
              ((tt = K.current) == null || tt.click(),
              requestAnimationFrame(() => {
                var be;
                (be = K.current) == null || be.focus({ preventScroll: !0 });
              }));
          }),
          "data-disabled": Ie(n),
          "data-checked": Ie(oe),
          "data-invalid": Ie(l),
        }),
        [I, n, oe, l, ne]
      ),
      Yt = x.useCallback(
        (Pe = {}, qe = null) => ({
          ...Pe,
          ref: rr(K, qe),
          type: "checkbox",
          name: w,
          value: _,
          id: c,
          tabIndex: j,
          onChange: et(Pe.onChange, pe),
          onBlur: et(Pe.onBlur, H, () => ve(!1)),
          onFocus: et(Pe.onFocus, G, () => ve(!0)),
          onKeyDown: et(Pe.onKeyDown, de),
          onKeyUp: et(Pe.onKeyUp, ge),
          required: a,
          checked: oe,
          disabled: ye,
          readOnly: i,
          "aria-label": O,
          "aria-labelledby": M,
          "aria-invalid": $ ? !!$ : l,
          "aria-describedby": h,
          "aria-disabled": n,
          style: kD,
        }),
        [w, _, c, pe, H, G, de, ge, a, oe, ye, i, O, M, $, l, h, n, j]
      ),
      $t = x.useCallback(
        (Pe = {}, qe = null) => ({
          ...Pe,
          ref: qe,
          onMouseDown: et(Pe.onMouseDown, _D),
          "data-disabled": Ie(n),
          "data-checked": Ie(oe),
          "data-invalid": Ie(l),
        }),
        [oe, n, l]
      );
    return {
      state: {
        isInvalid: l,
        isFocused: he,
        isChecked: oe,
        isActive: re,
        isHovered: Ee,
        isIndeterminate: S,
        isDisabled: n,
        isReadOnly: i,
        isRequired: a,
      },
      getRootProps: dt,
      getCheckboxProps: Oe,
      getIndicatorProps: Qe,
      getInputProps: Yt,
      getLabelProps: $t,
      htmlProps: I,
    };
  }
  function _D(e) {
    e.preventDefault(), e.stopPropagation();
  }
  const fx = De(function (e, t) {
    const { className: n, centerContent: i, ...a } = nr(e),
      l = fo("Container", e);
    return R.jsx(Ce.div, {
      ref: t,
      className: ze("chakra-container", n),
      ...a,
      __css: {
        ...l,
        ...(i && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }),
      },
    });
  });
  fx.displayName = "Container";
  const si = De(function (e, t) {
    const {
        direction: n,
        align: i,
        justify: a,
        wrap: l,
        basis: c,
        grow: d,
        shrink: p,
        ...h
      } = e,
      g = {
        display: "flex",
        flexDirection: n,
        alignItems: i,
        justifyContent: a,
        flexWrap: l,
        flexBasis: c,
        flexGrow: d,
        flexShrink: p,
      };
    return R.jsx(Ce.div, { ref: t, __css: g, ...h });
  });
  si.displayName = "Flex";
  function CD(e, t) {
    if (e == null) return {};
    var n = {};
    for (var i in e)
      if ({}.hasOwnProperty.call(e, i)) {
        if (t.includes(i)) continue;
        n[i] = e[i];
      }
    return n;
  }
  var _h = "data-focus-lock",
    px = "data-focus-lock-disabled",
    ED = "data-no-focus-lock",
    PD = "data-autofocus-inside",
    RD = "data-no-autofocus";
  function Ch(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e;
  }
  function jD(e, t) {
    var n = x.useState(function () {
      return {
        value: e,
        callback: t,
        facade: {
          get current() {
            return n.value;
          },
          set current(i) {
            var a = n.value;
            a !== i && ((n.value = i), n.callback(i, a));
          },
        },
      };
    })[0];
    return (n.callback = t), n.facade;
  }
  var OD = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
    hx = new WeakMap();
  function mx(e, t) {
    var n = jD(null, function (i) {
      return e.forEach(function (a) {
        return Ch(a, i);
      });
    });
    return (
      OD(
        function () {
          var i = hx.get(n);
          if (i) {
            var a = new Set(i),
              l = new Set(e),
              c = n.current;
            a.forEach(function (d) {
              l.has(d) || Ch(d, null);
            }),
              l.forEach(function (d) {
                a.has(d) || Ch(d, c);
              });
          }
          hx.set(n, e);
        },
        [e]
      ),
      n
    );
  }
  var Eh = {
      width: "1px",
      height: "0px",
      padding: 0,
      overflow: "hidden",
      position: "fixed",
      top: "1px",
      left: "1px",
    },
    kn = function () {
      return (
        (kn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
              t = arguments[n];
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          }),
        kn.apply(this, arguments)
      );
    };
  function gx(e, t) {
    var n = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        t.indexOf(i) < 0 &&
        (n[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
        t.indexOf(i[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
          (n[i[a]] = e[i[a]]);
    return n;
  }
  function AD(e, t, n) {
    if (n || arguments.length === 2)
      for (var i = 0, a = t.length, l; i < a; i++)
        (l || !(i in t)) &&
          (l || (l = Array.prototype.slice.call(t, 0, i)), (l[i] = t[i]));
    return e.concat(l || Array.prototype.slice.call(t));
  }
  function vx(e) {
    return e;
  }
  function yx(e, t) {
    t === void 0 && (t = vx);
    var n = [],
      i = !1,
      a = {
        read: function () {
          if (i)
            throw new Error(
              "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
            );
          return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (l) {
          var c = t(l, i);
          return (
            n.push(c),
            function () {
              n = n.filter(function (d) {
                return d !== c;
              });
            }
          );
        },
        assignSyncMedium: function (l) {
          for (i = !0; n.length; ) {
            var c = n;
            (n = []), c.forEach(l);
          }
          n = {
            push: function (d) {
              return l(d);
            },
            filter: function () {
              return n;
            },
          };
        },
        assignMedium: function (l) {
          i = !0;
          var c = [];
          if (n.length) {
            var d = n;
            (n = []), d.forEach(l), (c = n);
          }
          var p = function () {
              var g = c;
              (c = []), g.forEach(l);
            },
            h = function () {
              return Promise.resolve().then(p);
            };
          h(),
            (n = {
              push: function (g) {
                c.push(g), h();
              },
              filter: function (g) {
                return (c = c.filter(g)), n;
              },
            });
        },
      };
    return a;
  }
  function Ph(e, t) {
    return t === void 0 && (t = vx), yx(e, t);
  }
  function bx(e) {
    e === void 0 && (e = {});
    var t = yx(null);
    return (t.options = kn({ async: !0, ssr: !1 }, e)), t;
  }
  var xx = function (e) {
    var t = e.sideCar,
      n = gx(e, ["sideCar"]);
    if (!t)
      throw new Error(
        "Sidecar: please provide `sideCar` property to import the right car"
      );
    var i = t.read();
    if (!i) throw new Error("Sidecar medium not found");
    return x.createElement(i, kn({}, n));
  };
  xx.isSideCarExport = !0;
  function TD(e, t) {
    return e.useMedium(t), xx;
  }
  var wx = Ph({}, function (e) {
      var t = e.target,
        n = e.currentTarget;
      return { target: t, currentTarget: n };
    }),
    kx = Ph(),
    MD = Ph(),
    zD = bx({ async: !0, ssr: typeof document < "u" }),
    DD = x.createContext(void 0),
    ID = [],
    Rh = x.forwardRef(function (e, t) {
      var n,
        i = x.useState(),
        a = i[0],
        l = i[1],
        c = x.useRef(),
        d = x.useRef(!1),
        p = x.useRef(null),
        h = x.useState({}),
        g = h[1],
        v = e.children,
        b = e.disabled,
        k = b === void 0 ? !1 : b,
        S = e.noFocusGuards,
        w = S === void 0 ? !1 : S,
        _ = e.persistentFocus,
        j = _ === void 0 ? !1 : _,
        O = e.crossFrame,
        M = O === void 0 ? !0 : O,
        $ = e.autoFocus,
        E = $ === void 0 ? !0 : $;
      e.allowTextSelection;
      var I = e.group,
        L = e.className,
        H = e.whiteList,
        G = e.hasPositiveIndices,
        q = e.shards,
        ie = q === void 0 ? ID : q,
        he = e.as,
        ve = he === void 0 ? "div" : he,
        Ee = e.lockProps,
        J = Ee === void 0 ? {} : Ee,
        re = e.sideCar,
        se = e.returnFocus,
        K = se === void 0 ? !1 : se,
        ne = e.focusOptions,
        te = e.onActivation,
        A = e.onDeactivation,
        V = x.useState({}),
        Y = V[0],
        oe = x.useCallback(
          function (qe) {
            var tt = qe.captureFocusRestore;
            if (!p.current) {
              var be,
                Ze = (be = document) == null ? void 0 : be.activeElement;
              (p.current = Ze), Ze !== document.body && (p.current = tt(Ze));
            }
            c.current && te && te(c.current), (d.current = !0), g();
          },
          [te]
        ),
        pe = x.useCallback(
          function () {
            (d.current = !1), A && A(c.current), g();
          },
          [A]
        ),
        ye = x.useCallback(
          function (qe) {
            var tt = p.current;
            if (tt) {
              var be = (typeof tt == "function" ? tt() : tt) || document.body,
                Ze = typeof K == "function" ? K(be) : K;
              if (Ze) {
                var Xe = typeof Ze == "object" ? Ze : void 0;
                (p.current = null),
                  qe
                    ? Promise.resolve().then(function () {
                        return be.focus(Xe);
                      })
                    : be.focus(Xe);
              }
            }
          },
          [K]
        ),
        de = x.useCallback(function (qe) {
          d.current && wx.useMedium(qe);
        }, []),
        ge = kx.useMedium,
        Oe = x.useCallback(function (qe) {
          c.current !== qe && ((c.current = qe), l(qe));
        }, []),
        Qe = Zo(((n = {}), (n[px] = k && "disabled"), (n[_h] = I), n), J),
        dt = w !== !0,
        Yt = dt && w !== "tail",
        $t = mx([t, Oe]),
        Pe = x.useMemo(
          function () {
            return { observed: c, shards: ie, enabled: !k, active: d.current };
          },
          [k, d.current, ie, a]
        );
      return pt.createElement(
        x.Fragment,
        null,
        dt && [
          pt.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: k ? -1 : 0,
            style: Eh,
          }),
          G
            ? pt.createElement("div", {
                key: "guard-nearest",
                "data-focus-guard": !0,
                tabIndex: k ? -1 : 1,
                style: Eh,
              })
            : null,
        ],
        !k &&
          pt.createElement(re, {
            id: Y,
            sideCar: zD,
            observed: a,
            disabled: k,
            persistentFocus: j,
            crossFrame: M,
            autoFocus: E,
            whiteList: H,
            shards: ie,
            onActivation: oe,
            onDeactivation: pe,
            returnFocus: ye,
            focusOptions: ne,
            noFocusGuards: w,
          }),
        pt.createElement(
          ve,
          Zo({ ref: $t }, Qe, { className: L, onBlur: ge, onFocus: de }),
          pt.createElement(DD.Provider, { value: Pe }, v)
        ),
        Yt &&
          pt.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: k ? -1 : 0,
            style: Eh,
          })
      );
    });
  Rh.propTypes = {};
  function jh(e, t) {
    return (
      (jh = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, i) {
            return (n.__proto__ = i), n;
          }),
      jh(e, t)
    );
  }
  function FD(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      jh(e, t);
  }
  function ol(e) {
    "@babel/helpers - typeof";
    return (
      (ol =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      ol(e)
    );
  }
  function LD(e, t) {
    if (ol(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var i = n.call(e, t || "default");
      if (ol(i) != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function ND(e) {
    var t = LD(e, "string");
    return ol(t) == "symbol" ? t : t + "";
  }
  function $D(e, t, n) {
    return (
      (t = ND(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function BD(e, t) {
    function n(i) {
      return i.displayName || i.name || "Component";
    }
    return function (i) {
      var a = [],
        l;
      function c() {
        (l = e(
          a.map(function (p) {
            return p.props;
          })
        )),
          t(l);
      }
      var d = (function (p) {
        FD(h, p);
        function h() {
          return p.apply(this, arguments) || this;
        }
        h.peek = function () {
          return l;
        };
        var g = h.prototype;
        return (
          (g.componentDidMount = function () {
            a.push(this), c();
          }),
          (g.componentDidUpdate = function () {
            c();
          }),
          (g.componentWillUnmount = function () {
            var v = a.indexOf(this);
            a.splice(v, 1), c();
          }),
          (g.render = function () {
            return pt.createElement(i, this.props);
          }),
          h
        );
      })(x.PureComponent);
      return $D(d, "displayName", "SideEffect(" + n(i) + ")"), d;
    };
  }
  var Sn = function (e) {
      for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
      return t;
    },
    li = function (e) {
      return Array.isArray(e) ? e : [e];
    },
    Sx = function (e) {
      return Array.isArray(e) ? e[0] : e;
    },
    VD = function (e) {
      if (e.nodeType !== Node.ELEMENT_NODE) return !1;
      var t = window.getComputedStyle(e, null);
      return !t || !t.getPropertyValue
        ? !1
        : t.getPropertyValue("display") === "none" ||
            t.getPropertyValue("visibility") === "hidden";
    },
    _x = function (e) {
      return e.parentNode &&
        e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
        ? e.parentNode.host
        : e.parentNode;
    },
    Cx = function (e) {
      return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
    },
    WD = function (e) {
      return e.hasAttribute("inert");
    },
    UD = function (e, t) {
      return !e || Cx(e) || (!VD(e) && !WD(e) && t(_x(e)));
    },
    Ex = function (e, t) {
      var n = e.get(t);
      if (n !== void 0) return n;
      var i = UD(t, Ex.bind(void 0, e));
      return e.set(t, i), i;
    },
    HD = function (e, t) {
      return e && !Cx(e) ? (GD(e) ? t(_x(e)) : !1) : !0;
    },
    Px = function (e, t) {
      var n = e.get(t);
      if (n !== void 0) return n;
      var i = HD(t, Px.bind(void 0, e));
      return e.set(t, i), i;
    },
    Rx = function (e) {
      return e.dataset;
    },
    qD = function (e) {
      return e.tagName === "BUTTON";
    },
    jx = function (e) {
      return e.tagName === "INPUT";
    },
    Ox = function (e) {
      return jx(e) && e.type === "radio";
    },
    KD = function (e) {
      return !((jx(e) || qD(e)) && (e.type === "hidden" || e.disabled));
    },
    GD = function (e) {
      var t = e.getAttribute(RD);
      return ![!0, "true", ""].includes(t);
    },
    Oh = function (e) {
      var t;
      return !!(e && !((t = Rx(e)) === null || t === void 0) && t.focusGuard);
    },
    Ah = function (e) {
      return !Oh(e);
    },
    ZD = function (e) {
      return !!e;
    },
    XD = function (e, t) {
      var n = Math.max(0, e.tabIndex),
        i = Math.max(0, t.tabIndex),
        a = n - i,
        l = e.index - t.index;
      if (a) {
        if (!n) return 1;
        if (!i) return -1;
      }
      return a || l;
    },
    YD = function (e) {
      return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
    },
    Th = function (e, t, n) {
      return Sn(e)
        .map(function (i, a) {
          var l = YD(i);
          return {
            node: i,
            index: a,
            tabIndex:
              n && l === -1 ? ((i.dataset || {}).focusGuard ? 0 : -1) : l,
          };
        })
        .filter(function (i) {
          return !t || i.tabIndex >= 0;
        })
        .sort(XD);
    },
    QD = [
      "button:enabled",
      "select:enabled",
      "textarea:enabled",
      "input:enabled",
      "a[href]",
      "area[href]",
      "summary",
      "iframe",
      "object",
      "embed",
      "audio[controls]",
      "video[controls]",
      "[tabindex]",
      "[contenteditable]",
      "[autofocus]",
    ],
    Mh = QD.join(","),
    JD = "".concat(Mh, ", [data-focus-guard]"),
    Ax = function (e, t) {
      return Sn((e.shadowRoot || e).children).reduce(function (n, i) {
        return n.concat(i.matches(t ? JD : Mh) ? [i] : [], Ax(i));
      }, []);
    },
    eI = function (e, t) {
      var n;
      return e instanceof HTMLIFrameElement &&
        !((n = e.contentDocument) === null || n === void 0) &&
        n.body
        ? ca([e.contentDocument.body], t)
        : [e];
    },
    ca = function (e, t) {
      return e.reduce(function (n, i) {
        var a,
          l = Ax(i, t),
          c = (a = []).concat.apply(
            a,
            l.map(function (d) {
              return eI(d, t);
            })
          );
        return n.concat(
          c,
          i.parentNode
            ? Sn(i.parentNode.querySelectorAll(Mh)).filter(function (d) {
                return d === i;
              })
            : []
        );
      }, []);
    },
    tI = function (e) {
      var t = e.querySelectorAll("[".concat(PD, "]"));
      return Sn(t)
        .map(function (n) {
          return ca([n]);
        })
        .reduce(function (n, i) {
          return n.concat(i);
        }, []);
    },
    zh = function (e, t) {
      return Sn(e)
        .filter(function (n) {
          return Ex(t, n);
        })
        .filter(function (n) {
          return KD(n);
        });
    },
    Tx = function (e, t) {
      return (
        t === void 0 && (t = new Map()),
        Sn(e).filter(function (n) {
          return Px(t, n);
        })
      );
    },
    Dh = function (e, t, n) {
      return Th(zh(ca(e, n), t), !0, n);
    },
    il = function (e, t) {
      return Th(zh(ca(e), t), !1);
    },
    rI = function (e, t) {
      return zh(tI(e), t);
    },
    ci = function (e, t) {
      return e.shadowRoot
        ? ci(e.shadowRoot, t)
        : Object.getPrototypeOf(e).contains !== void 0 &&
          Object.getPrototypeOf(e).contains.call(e, t)
        ? !0
        : Sn(e.children).some(function (n) {
            var i;
            if (n instanceof HTMLIFrameElement) {
              var a =
                (i = n.contentDocument) === null || i === void 0
                  ? void 0
                  : i.body;
              return a ? ci(a, t) : !1;
            }
            return ci(n, t);
          });
    },
    nI = function (e) {
      for (var t = new Set(), n = e.length, i = 0; i < n; i += 1)
        for (var a = i + 1; a < n; a += 1) {
          var l = e[i].compareDocumentPosition(e[a]);
          (l & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(a),
            (l & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(i);
        }
      return e.filter(function (c, d) {
        return !t.has(d);
      });
    },
    Mx = function (e) {
      return e.parentNode ? Mx(e.parentNode) : e;
    },
    Ih = function (e) {
      var t = li(e);
      return t.filter(Boolean).reduce(function (n, i) {
        var a = i.getAttribute(_h);
        return (
          n.push.apply(
            n,
            a
              ? nI(
                  Sn(
                    Mx(i).querySelectorAll(
                      "["
                        .concat(_h, '="')
                        .concat(a, '"]:not([')
                        .concat(px, '="disabled"])')
                    )
                  )
                )
              : [i]
          ),
          n
        );
      }, []);
    },
    oI = function (e) {
      try {
        return e();
      } catch {
        return;
      }
    },
    al = function (e) {
      if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
        var t = e.activeElement;
        return t.shadowRoot
          ? al(t.shadowRoot)
          : t instanceof HTMLIFrameElement &&
            oI(function () {
              return t.contentWindow.document;
            })
          ? al(t.contentWindow.document)
          : t;
      }
    },
    iI = function (e, t) {
      return e === t;
    },
    aI = function (e, t) {
      return !!Sn(e.querySelectorAll("iframe")).some(function (n) {
        return iI(n, t);
      });
    },
    zx = function (e, t) {
      return (
        t === void 0 && (t = al(Sx(e).ownerDocument)),
        !t || (t.dataset && t.dataset.focusGuard)
          ? !1
          : Ih(e).some(function (n) {
              return ci(n, t) || aI(n, t);
            })
      );
    },
    sI = function (e) {
      e === void 0 && (e = document);
      var t = al(e);
      return t
        ? Sn(e.querySelectorAll("[".concat(ED, "]"))).some(function (n) {
            return ci(n, t);
          })
        : !1;
    },
    lI = function (e, t) {
      return (
        t
          .filter(Ox)
          .filter(function (n) {
            return n.name === e.name;
          })
          .filter(function (n) {
            return n.checked;
          })[0] || e
      );
    },
    Fh = function (e, t) {
      return Ox(e) && e.name ? lI(e, t) : e;
    },
    cI = function (e) {
      var t = new Set();
      return (
        e.forEach(function (n) {
          return t.add(Fh(n, e));
        }),
        e.filter(function (n) {
          return t.has(n);
        })
      );
    },
    Dx = function (e) {
      return e[0] && e.length > 1 ? Fh(e[0], e) : e[0];
    },
    Ix = function (e, t) {
      return e.indexOf(Fh(t, e));
    },
    Lh = "NEW_FOCUS",
    uI = function (e, t, n, i, a) {
      var l = e.length,
        c = e[0],
        d = e[l - 1],
        p = Oh(i);
      if (!(i && e.indexOf(i) >= 0)) {
        var h = i !== void 0 ? n.indexOf(i) : -1,
          g = a ? n.indexOf(a) : h,
          v = a ? e.indexOf(a) : -1;
        if (h === -1) return v !== -1 ? v : Lh;
        if (v === -1) return Lh;
        var b = h - g,
          k = n.indexOf(c),
          S = n.indexOf(d),
          w = cI(n),
          _ = i !== void 0 ? w.indexOf(i) : -1,
          j = _ - (a ? w.indexOf(a) : h);
        if ((!b && v >= 0) || t.length === 0) return v;
        var O = Ix(e, t[0]),
          M = Ix(e, t[t.length - 1]);
        if (h <= k && p && Math.abs(b) > 1) return M;
        if (h >= S && p && Math.abs(b) > 1) return O;
        if (b && Math.abs(j) > 1) return v;
        if (h <= k) return M;
        if (h > S) return O;
        if (b) return Math.abs(b) > 1 ? v : (l + v + b) % l;
      }
    },
    dI = function (e) {
      return function (t) {
        var n,
          i = (n = Rx(t)) === null || n === void 0 ? void 0 : n.autofocus;
        return (
          t.autofocus || (i !== void 0 && i !== "false") || e.indexOf(t) >= 0
        );
      };
    },
    Fx = function (e, t, n) {
      var i = e.map(function (l) {
          var c = l.node;
          return c;
        }),
        a = Tx(i.filter(dI(n)));
      return a && a.length ? Dx(a) : Dx(Tx(t));
    },
    Nh = function (e, t) {
      return (
        t === void 0 && (t = []),
        t.push(e),
        e.parentNode && Nh(e.parentNode.host || e.parentNode, t),
        t
      );
    },
    $h = function (e, t) {
      for (var n = Nh(e), i = Nh(t), a = 0; a < n.length; a += 1) {
        var l = n[a];
        if (i.indexOf(l) >= 0) return l;
      }
      return !1;
    },
    Lx = function (e, t, n) {
      var i = li(e),
        a = li(t),
        l = i[0],
        c = !1;
      return (
        a.filter(Boolean).forEach(function (d) {
          (c = $h(c || d, d) || c),
            n.filter(Boolean).forEach(function (p) {
              var h = $h(l, p);
              h && (!c || ci(h, c) ? (c = h) : (c = $h(h, c)));
            });
        }),
        c
      );
    },
    Nx = function (e, t) {
      return e.reduce(function (n, i) {
        return n.concat(rI(i, t));
      }, []);
    },
    fI = function (e, t) {
      var n = new Map();
      return (
        t.forEach(function (i) {
          return n.set(i.node, i);
        }),
        e
          .map(function (i) {
            return n.get(i);
          })
          .filter(ZD)
      );
    },
    pI = function (e, t) {
      var n = al(li(e).length > 0 ? document : Sx(e).ownerDocument),
        i = Ih(e).filter(Ah),
        a = Lx(n || e, e, i),
        l = new Map(),
        c = il(i, l),
        d = c.filter(function (S) {
          var w = S.node;
          return Ah(w);
        });
      if (d[0]) {
        var p = il([a], l).map(function (S) {
            var w = S.node;
            return w;
          }),
          h = fI(p, d),
          g = h.map(function (S) {
            var w = S.node;
            return w;
          }),
          v = h
            .filter(function (S) {
              var w = S.tabIndex;
              return w >= 0;
            })
            .map(function (S) {
              var w = S.node;
              return w;
            }),
          b = uI(g, v, p, n, t);
        if (b === Lh) {
          var k = Fx(c, v, Nx(i, l)) || Fx(c, g, Nx(i, l));
          if (k) return { node: k };
          console.warn("focus-lock: cannot find any node to move focus into");
          return;
        }
        return b === void 0 ? b : h[b];
      }
    },
    hI = function (e) {
      var t = Ih(e).filter(Ah),
        n = Lx(e, e, t),
        i = Th(ca([n], !0), !0, !0),
        a = ca(t, !1);
      return i.map(function (l) {
        var c = l.node,
          d = l.index;
        return { node: c, index: d, lockItem: a.indexOf(c) >= 0, guard: Oh(c) };
      });
    },
    Bh = function (e, t) {
      e &&
        ("focus" in e && e.focus(t),
        "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
    },
    Vh = 0,
    Wh = !1,
    $x = function (e, t, n) {
      n === void 0 && (n = {});
      var i = pI(e, t);
      if (!Wh && i) {
        if (Vh > 2) {
          console.error(
            "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
          ),
            (Wh = !0),
            setTimeout(function () {
              Wh = !1;
            }, 1);
          return;
        }
        Vh++, Bh(i.node, n.focusOptions), Vh--;
      }
    };
  function sl(e) {
    if (!e) return null;
    if (typeof WeakRef > "u")
      return function () {
        return e || null;
      };
    var t = e ? new WeakRef(e) : null;
    return function () {
      return (t == null ? void 0 : t.deref()) || null;
    };
  }
  var mI = function (e) {
      if (!e) return null;
      for (var t = [], n = e; n && n !== document.body; )
        t.push({
          current: sl(n),
          parent: sl(n.parentElement),
          left: sl(n.previousElementSibling),
          right: sl(n.nextElementSibling),
        }),
          (n = n.parentElement);
      return { element: sl(e), stack: t, ownerDocument: e.ownerDocument };
    },
    gI = function (e) {
      var t, n, i, a, l;
      if (e)
        for (
          var c = e.stack, d = e.ownerDocument, p = new Map(), h = 0, g = c;
          h < g.length;
          h++
        ) {
          var v = g[h],
            b = (t = v.parent) === null || t === void 0 ? void 0 : t.call(v);
          if (b && d.contains(b)) {
            for (
              var k =
                  (n = v.left) === null || n === void 0 ? void 0 : n.call(v),
                S = v.current(),
                w = b.contains(S) ? S : void 0,
                _ = (i = v.right) === null || i === void 0 ? void 0 : i.call(v),
                j = Dh([b], p),
                O =
                  (l =
                    (a = w ?? (k == null ? void 0 : k.nextElementSibling)) !==
                      null && a !== void 0
                      ? a
                      : _) !== null && l !== void 0
                    ? l
                    : k;
              O;

            ) {
              for (var M = 0, $ = j; M < $.length; M++) {
                var E = $[M];
                if (O != null && O.contains(E.node)) return E.node;
              }
              O = O.nextElementSibling;
            }
            if (j.length) return j[0].node;
          }
        }
    },
    Bx = function (e) {
      var t = mI(e);
      return function () {
        return gI(t);
      };
    },
    vI = function (e, t, n) {
      if (!e || !t) return console.error("no element or scope given"), {};
      var i = li(t);
      if (
        i.every(function (c) {
          return !ci(c, e);
        })
      )
        return (
          console.error("Active element is not contained in the scope"), {}
        );
      var a = n ? Dh(i, new Map()) : il(i, new Map()),
        l = a.findIndex(function (c) {
          var d = c.node;
          return d === e;
        });
      if (l !== -1)
        return {
          prev: a[l - 1],
          next: a[l + 1],
          first: a[0],
          last: a[a.length - 1],
        };
    },
    yI = function (e, t) {
      var n = t ? Dh(li(e), new Map()) : il(li(e), new Map());
      return { first: n[0], last: n[n.length - 1] };
    },
    bI = function (e) {
      return Object.assign(
        { scope: document.body, cycle: !0, onlyTabbable: !0 },
        e
      );
    },
    Vx = function (e, t, n) {
      t === void 0 && (t = {});
      var i = bI(t),
        a = vI(e, i.scope, i.onlyTabbable);
      if (a) {
        var l = n(a, i.cycle);
        l && Bh(l.node, i.focusOptions);
      }
    },
    xI = function (e, t) {
      t === void 0 && (t = {}),
        Vx(e, t, function (n, i) {
          var a = n.next,
            l = n.first;
          return a || (i && l);
        });
    },
    wI = function (e, t) {
      t === void 0 && (t = {}),
        Vx(e, t, function (n, i) {
          var a = n.prev,
            l = n.last;
          return a || (i && l);
        });
    },
    Wx = function (e, t, n) {
      var i,
        a = yI(e, (i = t.onlyTabbable) !== null && i !== void 0 ? i : !0),
        l = a[n];
      l && Bh(l.node, t.focusOptions);
    },
    kI = function (e, t) {
      t === void 0 && (t = {}), Wx(e, t, "first");
    },
    SI = function (e, t) {
      t === void 0 && (t = {}), Wx(e, t, "last");
    };
  function Uh(e) {
    setTimeout(e, 1);
  }
  var _I = function (e) {
      return e && "current" in e ? e.current : e;
    },
    Ux = function () {
      return document && document.activeElement === document.body;
    },
    CI = function () {
      return Ux() || sI();
    },
    ua = null,
    sr = null,
    Hx = function () {
      return null;
    },
    da = null,
    ll = !1,
    Hh = !1,
    EI = function () {
      return !0;
    },
    PI = function (e) {
      return (ua.whiteList || EI)(e);
    },
    RI = function (e, t) {
      da = { observerNode: e, portaledElement: t };
    },
    jI = function (e) {
      return da && da.portaledElement === e;
    };
  function qx(e, t, n, i) {
    var a = null,
      l = e;
    do {
      var c = i[l];
      if (c.guard) c.node.dataset.focusAutoGuard && (a = c);
      else if (c.lockItem) {
        if (l !== e) return;
        a = null;
      } else break;
    } while ((l += n) !== t);
    a && (a.node.tabIndex = 0);
  }
  var OI = function (e) {
      return e ? !!ll : ll === "meanwhile";
    },
    AI = function e(t, n, i) {
      return (
        n &&
        ((n.host === t && (!n.activeElement || i.contains(n.activeElement))) ||
          (n.parentNode && e(t, n.parentNode, i)))
      );
    },
    TI = function (e, t) {
      return t.some(function (n) {
        return AI(e, n, n);
      });
    },
    Kx = function (e) {
      return il(e, new Map());
    },
    MI = function (e) {
      return !Kx([e.parentNode]).some(function (t) {
        return t.node === e;
      });
    },
    hu = function () {
      var e = !1;
      if (ua) {
        var t = ua,
          n = t.observed,
          i = t.persistentFocus,
          a = t.autoFocus,
          l = t.shards,
          c = t.crossFrame,
          d = t.focusOptions,
          p = t.noFocusGuards,
          h = n || (da && da.portaledElement);
        if (
          Ux() &&
          sr &&
          sr !== document.body &&
          (!document.body.contains(sr) || MI(sr))
        ) {
          var g = Hx();
          g && g.focus();
        }
        var v = document && document.activeElement;
        if (h) {
          var b = [h].concat(l.map(_I).filter(Boolean)),
            k = function () {
              if (!OI(c) || !p || !sr || Hh) return !1;
              var j = Kx(b),
                O = j.findIndex(function (M) {
                  var $ = M.node;
                  return $ === sr;
                });
              return O === 0 || O === j.length - 1;
            };
          if (
            ((!v || PI(v)) &&
              (i || k() || !CI() || (!sr && a)) &&
              (h &&
                !(zx(b) || (v && TI(v, b)) || jI(v)) &&
                (document && !sr && v && !a
                  ? (v.blur && v.blur(), document.body.focus())
                  : ((e = $x(b, sr, { focusOptions: d })), (da = {}))),
              (sr = document && document.activeElement),
              sr !== document.body && (Hx = Bx(sr)),
              (ll = !1)),
            document &&
              v !== document.activeElement &&
              document.querySelector("[data-focus-auto-guard]"))
          ) {
            var S = document && document.activeElement,
              w = hI(b),
              _ = w
                .map(function (j) {
                  var O = j.node;
                  return O;
                })
                .indexOf(S);
            _ > -1 &&
              (w
                .filter(function (j) {
                  var O = j.guard,
                    M = j.node;
                  return O && M.dataset.focusAutoGuard;
                })
                .forEach(function (j) {
                  var O = j.node;
                  return O.removeAttribute("tabIndex");
                }),
              qx(_, w.length, 1, w),
              qx(_, -1, -1, w));
          }
        }
      }
      return e;
    },
    Gx = function (e) {
      hu() && e && (e.stopPropagation(), e.preventDefault());
    },
    qh = function () {
      return Uh(hu);
    },
    zI = function (e) {
      var t = e.target,
        n = e.currentTarget;
      n.contains(t) || RI(n, t);
    },
    DI = function () {
      return null;
    },
    Zx = function () {
      Hh = !0;
    },
    Xx = function () {
      (Hh = !1),
        (ll = "just"),
        Uh(function () {
          ll = "meanwhile";
        });
    },
    II = function () {
      document.addEventListener("focusin", Gx),
        document.addEventListener("focusout", qh),
        window.addEventListener("focus", Zx),
        window.addEventListener("blur", Xx);
    },
    FI = function () {
      document.removeEventListener("focusin", Gx),
        document.removeEventListener("focusout", qh),
        window.removeEventListener("focus", Zx),
        window.removeEventListener("blur", Xx);
    };
  function LI(e) {
    return e.filter(function (t) {
      var n = t.disabled;
      return !n;
    });
  }
  var Yx = {
    moveFocusInside: $x,
    focusInside: zx,
    focusNextElement: xI,
    focusPrevElement: wI,
    focusFirstElement: kI,
    focusLastElement: SI,
    captureFocusRestore: Bx,
  };
  function NI(e) {
    var t = e.slice(-1)[0];
    t && !ua && II();
    var n = ua,
      i = n && t && t.id === n.id;
    (ua = t),
      n &&
        !i &&
        (n.onDeactivation(),
        e.filter(function (a) {
          var l = a.id;
          return l === n.id;
        }).length || n.returnFocus(!t)),
      t
        ? ((sr = null),
          (!i || n.observed !== t.observed) && t.onActivation(Yx),
          hu(),
          Uh(hu))
        : (FI(), (sr = null));
  }
  wx.assignSyncMedium(zI),
    kx.assignMedium(qh),
    MD.assignMedium(function (e) {
      return e(Yx);
    });
  const $I = BD(LI, NI)(DI);
  var Kh = x.forwardRef(function (e, t) {
      return pt.createElement(Rh, Zo({ sideCar: $I, ref: t }, e));
    }),
    Qx = Rh.propTypes || {};
  Qx.sideCar, CD(Qx, ["sideCar"]), (Kh.propTypes = {});
  const BI = Kh.default ?? Kh,
    Jx = (e) => {
      const {
          initialFocusRef: t,
          finalFocusRef: n,
          contentRef: i,
          restoreFocus: a,
          children: l,
          isDisabled: c,
          autoFocus: d,
          persistentFocus: p,
          lockFocusAcrossFrames: h,
        } = e,
        g = x.useCallback(() => {
          t != null && t.current
            ? t.current.focus()
            : i != null &&
              i.current &&
              bg(i.current).length === 0 &&
              requestAnimationFrame(() => {
                var k;
                (k = i.current) == null || k.focus();
              });
        }, [t, i]),
        v = x.useCallback(() => {
          var k;
          (k = n == null ? void 0 : n.current) == null || k.focus();
        }, [n]),
        b = a && !n;
      return R.jsx(BI, {
        crossFrame: h,
        persistentFocus: p,
        autoFocus: d,
        disabled: c,
        onActivation: g,
        onDeactivation: v,
        returnFocus: b,
        children: l,
      });
    };
  Jx.displayName = "FocusLock";
  const mu = De(function (e, t) {
    const { htmlSize: n, ...i } = e,
      a = po("Input", i),
      l = nr(i),
      c = ux(l),
      d = ze("chakra-input", e.className);
    return R.jsx(Ce.input, {
      size: n,
      ...c,
      __css: a.field,
      ref: t,
      className: d,
    });
  });
  (mu.displayName = "Input"), (mu.id = "Input");
  const [VI, WI] = tr({
      name: "InputGroupStylesContext",
      errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `,
    }),
    ew = De(function (e, t) {
      const n = po("Input", e),
        { children: i, className: a, ...l } = nr(e),
        c = ze("chakra-input__group", a),
        d = {},
        p = vg(i),
        h = n.field;
      p.forEach((v) => {
        n &&
          (h &&
            v.type.id === "InputLeftElement" &&
            (d.paddingStart = h.height ?? h.h),
          h &&
            v.type.id === "InputRightElement" &&
            (d.paddingEnd = h.height ?? h.h),
          v.type.id === "InputRightAddon" && (d.borderEndRadius = 0),
          v.type.id === "InputLeftAddon" && (d.borderStartRadius = 0));
      });
      const g = p.map((v) => {
        var k, S;
        const b = fc({
          size: ((k = v.props) == null ? void 0 : k.size) || e.size,
          variant: ((S = v.props) == null ? void 0 : S.variant) || e.variant,
        });
        return v.type.id !== "Input"
          ? x.cloneElement(v, b)
          : x.cloneElement(v, Object.assign(b, d, v.props));
      });
      return R.jsx(Ce.div, {
        className: c,
        ref: t,
        __css: {
          width: "100%",
          display: "flex",
          position: "relative",
          isolation: "isolate",
          ...n.group,
        },
        "data-group": !0,
        ...l,
        children: R.jsx(VI, { value: n, children: g }),
      });
    });
  ew.displayName = "InputGroup";
  const UI = Ce("div", {
      baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        zIndex: 2,
      },
    }),
    gu = De(function (e, t) {
      const { placement: n = "left", ...i } = e,
        a = WI(),
        l = a.field,
        c = {
          [n === "left" ? "insetStart" : "insetEnd"]: "0",
          width: (l == null ? void 0 : l.height) ?? (l == null ? void 0 : l.h),
          height: (l == null ? void 0 : l.height) ?? (l == null ? void 0 : l.h),
          fontSize: l == null ? void 0 : l.fontSize,
          ...a.element,
        };
      return R.jsx(UI, { ref: t, __css: c, ...i });
    });
  (gu.id = "InputElement"), (gu.displayName = "InputElement");
  const tw = De(function (e, t) {
    const { className: n, ...i } = e,
      a = ze("chakra-input__left-element", n);
    return R.jsx(gu, { ref: t, placement: "left", className: a, ...i });
  });
  (tw.id = "InputLeftElement"), (tw.displayName = "InputLeftElement");
  const Gh = De(function (e, t) {
    const { className: n, ...i } = e,
      a = ze("chakra-input__right-element", n);
    return R.jsx(gu, { ref: t, placement: "right", className: a, ...i });
  });
  (Gh.id = "InputRightElement"), (Gh.displayName = "InputRightElement");
  const rw = De(function (e, t) {
    const n = fo("Link", e),
      { className: i, isExternal: a, ...l } = nr(e);
    return R.jsx(Ce.a, {
      target: a ? "_blank" : void 0,
      rel: a ? "noopener" : void 0,
      ref: t,
      className: ze("chakra-link", i),
      ...l,
      __css: n,
    });
  });
  rw.displayName = "Link";
  var lr = "top",
    Mr = "bottom",
    zr = "right",
    cr = "left",
    Zh = "auto",
    cl = [lr, Mr, zr, cr],
    fa = "start",
    ul = "end",
    HI = "clippingParents",
    nw = "viewport",
    dl = "popper",
    qI = "reference",
    ow = cl.reduce(function (e, t) {
      return e.concat([t + "-" + fa, t + "-" + ul]);
    }, []),
    iw = [].concat(cl, [Zh]).reduce(function (e, t) {
      return e.concat([t, t + "-" + fa, t + "-" + ul]);
    }, []),
    KI = "beforeRead",
    GI = "read",
    ZI = "afterRead",
    XI = "beforeMain",
    YI = "main",
    QI = "afterMain",
    JI = "beforeWrite",
    eF = "write",
    tF = "afterWrite",
    rF = [KI, GI, ZI, XI, YI, QI, JI, eF, tF];
  function _n(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function kr(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function ui(e) {
    var t = kr(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Dr(e) {
    var t = kr(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Xh(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = kr(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function nF(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (n) {
      var i = t.styles[n] || {},
        a = t.attributes[n] || {},
        l = t.elements[n];
      !Dr(l) ||
        !_n(l) ||
        (Object.assign(l.style, i),
        Object.keys(a).forEach(function (c) {
          var d = a[c];
          d === !1
            ? l.removeAttribute(c)
            : l.setAttribute(c, d === !0 ? "" : d);
        }));
    });
  }
  function oF(e) {
    var t = e.state,
      n = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: { position: "absolute" },
        reference: {},
      };
    return (
      Object.assign(t.elements.popper.style, n.popper),
      (t.styles = n),
      t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
      function () {
        Object.keys(t.elements).forEach(function (i) {
          var a = t.elements[i],
            l = t.attributes[i] || {},
            c = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : n[i]),
            d = c.reduce(function (p, h) {
              return (p[h] = ""), p;
            }, {});
          !Dr(a) ||
            !_n(a) ||
            (Object.assign(a.style, d),
            Object.keys(l).forEach(function (p) {
              a.removeAttribute(p);
            }));
        });
      }
    );
  }
  const iF = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: nF,
    effect: oF,
    requires: ["computeStyles"],
  };
  function Cn(e) {
    return e.split("-")[0];
  }
  var di = Math.max,
    vu = Math.min,
    pa = Math.round;
  function Yh() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function aw() {
    return !/^((?!chrome|android).)*safari/i.test(Yh());
  }
  function ha(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var i = e.getBoundingClientRect(),
      a = 1,
      l = 1;
    t &&
      Dr(e) &&
      ((a = (e.offsetWidth > 0 && pa(i.width) / e.offsetWidth) || 1),
      (l = (e.offsetHeight > 0 && pa(i.height) / e.offsetHeight) || 1));
    var c = ui(e) ? kr(e) : window,
      d = c.visualViewport,
      p = !aw() && n,
      h = (i.left + (p && d ? d.offsetLeft : 0)) / a,
      g = (i.top + (p && d ? d.offsetTop : 0)) / l,
      v = i.width / a,
      b = i.height / l;
    return {
      width: v,
      height: b,
      top: g,
      right: h + v,
      bottom: g + b,
      left: h,
      x: h,
      y: g,
    };
  }
  function Qh(e) {
    var t = ha(e),
      n = e.offsetWidth,
      i = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - i) <= 1 && (i = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
    );
  }
  function sw(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Xh(n)) {
      var i = t;
      do {
        if (i && e.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function Wn(e) {
    return kr(e).getComputedStyle(e);
  }
  function aF(e) {
    return ["table", "td", "th"].indexOf(_n(e)) >= 0;
  }
  function ho(e) {
    return ((ui(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function yu(e) {
    return _n(e) === "html"
      ? e
      : e.assignedSlot || e.parentNode || (Xh(e) ? e.host : null) || ho(e);
  }
  function lw(e) {
    return !Dr(e) || Wn(e).position === "fixed" ? null : e.offsetParent;
  }
  function sF(e) {
    var t = /firefox/i.test(Yh()),
      n = /Trident/i.test(Yh());
    if (n && Dr(e)) {
      var i = Wn(e);
      if (i.position === "fixed") return null;
    }
    var a = yu(e);
    for (
      Xh(a) && (a = a.host);
      Dr(a) && ["html", "body"].indexOf(_n(a)) < 0;

    ) {
      var l = Wn(a);
      if (
        l.transform !== "none" ||
        l.perspective !== "none" ||
        l.contain === "paint" ||
        ["transform", "perspective"].indexOf(l.willChange) !== -1 ||
        (t && l.willChange === "filter") ||
        (t && l.filter && l.filter !== "none")
      )
        return a;
      a = a.parentNode;
    }
    return null;
  }
  function fl(e) {
    for (var t = kr(e), n = lw(e); n && aF(n) && Wn(n).position === "static"; )
      n = lw(n);
    return n &&
      (_n(n) === "html" || (_n(n) === "body" && Wn(n).position === "static"))
      ? t
      : n || sF(e) || t;
  }
  function Jh(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function pl(e, t, n) {
    return di(e, vu(t, n));
  }
  function lF(e, t, n) {
    var i = pl(e, t, n);
    return i > n ? n : i;
  }
  function cw() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function uw(e) {
    return Object.assign({}, cw(), e);
  }
  function dw(e, t) {
    return t.reduce(function (n, i) {
      return (n[i] = e), n;
    }, {});
  }
  var cF = function (e, t) {
    return (
      (e =
        typeof e == "function"
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e),
      uw(typeof e != "number" ? e : dw(e, cl))
    );
  };
  function uF(e) {
    var t,
      n = e.state,
      i = e.name,
      a = e.options,
      l = n.elements.arrow,
      c = n.modifiersData.popperOffsets,
      d = Cn(n.placement),
      p = Jh(d),
      h = [cr, zr].indexOf(d) >= 0,
      g = h ? "height" : "width";
    if (!(!l || !c)) {
      var v = cF(a.padding, n),
        b = Qh(l),
        k = p === "y" ? lr : cr,
        S = p === "y" ? Mr : zr,
        w =
          n.rects.reference[g] +
          n.rects.reference[p] -
          c[p] -
          n.rects.popper[g],
        _ = c[p] - n.rects.reference[p],
        j = fl(l),
        O = j ? (p === "y" ? j.clientHeight || 0 : j.clientWidth || 0) : 0,
        M = w / 2 - _ / 2,
        $ = v[k],
        E = O - b[g] - v[S],
        I = O / 2 - b[g] / 2 + M,
        L = pl($, I, E),
        H = p;
      n.modifiersData[i] = ((t = {}), (t[H] = L), (t.centerOffset = L - I), t);
    }
  }
  function dF(e) {
    var t = e.state,
      n = e.options,
      i = n.element,
      a = i === void 0 ? "[data-popper-arrow]" : i;
    a != null &&
      ((typeof a == "string" &&
        ((a = t.elements.popper.querySelector(a)), !a)) ||
        (sw(t.elements.popper, a) && (t.elements.arrow = a)));
  }
  const fF = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: uF,
    effect: dF,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function ma(e) {
    return e.split("-")[1];
  }
  var pF = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function hF(e, t) {
    var n = e.x,
      i = e.y,
      a = t.devicePixelRatio || 1;
    return { x: pa(n * a) / a || 0, y: pa(i * a) / a || 0 };
  }
  function fw(e) {
    var t,
      n = e.popper,
      i = e.popperRect,
      a = e.placement,
      l = e.variation,
      c = e.offsets,
      d = e.position,
      p = e.gpuAcceleration,
      h = e.adaptive,
      g = e.roundOffsets,
      v = e.isFixed,
      b = c.x,
      k = b === void 0 ? 0 : b,
      S = c.y,
      w = S === void 0 ? 0 : S,
      _ = typeof g == "function" ? g({ x: k, y: w }) : { x: k, y: w };
    (k = _.x), (w = _.y);
    var j = c.hasOwnProperty("x"),
      O = c.hasOwnProperty("y"),
      M = cr,
      $ = lr,
      E = window;
    if (h) {
      var I = fl(n),
        L = "clientHeight",
        H = "clientWidth";
      if (
        (I === kr(n) &&
          ((I = ho(n)),
          Wn(I).position !== "static" &&
            d === "absolute" &&
            ((L = "scrollHeight"), (H = "scrollWidth"))),
        (I = I),
        a === lr || ((a === cr || a === zr) && l === ul))
      ) {
        $ = Mr;
        var G =
          v && I === E && E.visualViewport ? E.visualViewport.height : I[L];
        (w -= G - i.height), (w *= p ? 1 : -1);
      }
      if (a === cr || ((a === lr || a === Mr) && l === ul)) {
        M = zr;
        var q =
          v && I === E && E.visualViewport ? E.visualViewport.width : I[H];
        (k -= q - i.width), (k *= p ? 1 : -1);
      }
    }
    var ie = Object.assign({ position: d }, h && pF),
      he = g === !0 ? hF({ x: k, y: w }, kr(n)) : { x: k, y: w };
    if (((k = he.x), (w = he.y), p)) {
      var ve;
      return Object.assign(
        {},
        ie,
        ((ve = {}),
        (ve[$] = O ? "0" : ""),
        (ve[M] = j ? "0" : ""),
        (ve.transform =
          (E.devicePixelRatio || 1) <= 1
            ? "translate(" + k + "px, " + w + "px)"
            : "translate3d(" + k + "px, " + w + "px, 0)"),
        ve)
      );
    }
    return Object.assign(
      {},
      ie,
      ((t = {}),
      (t[$] = O ? w + "px" : ""),
      (t[M] = j ? k + "px" : ""),
      (t.transform = ""),
      t)
    );
  }
  function mF(e) {
    var t = e.state,
      n = e.options,
      i = n.gpuAcceleration,
      a = i === void 0 ? !0 : i,
      l = n.adaptive,
      c = l === void 0 ? !0 : l,
      d = n.roundOffsets,
      p = d === void 0 ? !0 : d,
      h = {
        placement: Cn(t.placement),
        variation: ma(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: a,
        isFixed: t.options.strategy === "fixed",
      };
    t.modifiersData.popperOffsets != null &&
      (t.styles.popper = Object.assign(
        {},
        t.styles.popper,
        fw(
          Object.assign({}, h, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: c,
            roundOffsets: p,
          })
        )
      )),
      t.modifiersData.arrow != null &&
        (t.styles.arrow = Object.assign(
          {},
          t.styles.arrow,
          fw(
            Object.assign({}, h, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: p,
            })
          )
        )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement,
      }));
  }
  const gF = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: mF,
    data: {},
  };
  var bu = { passive: !0 };
  function vF(e) {
    var t = e.state,
      n = e.instance,
      i = e.options,
      a = i.scroll,
      l = a === void 0 ? !0 : a,
      c = i.resize,
      d = c === void 0 ? !0 : c,
      p = kr(t.elements.popper),
      h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
      l &&
        h.forEach(function (g) {
          g.addEventListener("scroll", n.update, bu);
        }),
      d && p.addEventListener("resize", n.update, bu),
      function () {
        l &&
          h.forEach(function (g) {
            g.removeEventListener("scroll", n.update, bu);
          }),
          d && p.removeEventListener("resize", n.update, bu);
      }
    );
  }
  const yF = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: vF,
    data: {},
  };
  var bF = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function xu(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
      return bF[t];
    });
  }
  var xF = { start: "end", end: "start" };
  function pw(e) {
    return e.replace(/start|end/g, function (t) {
      return xF[t];
    });
  }
  function em(e) {
    var t = kr(e),
      n = t.pageXOffset,
      i = t.pageYOffset;
    return { scrollLeft: n, scrollTop: i };
  }
  function tm(e) {
    return ha(ho(e)).left + em(e).scrollLeft;
  }
  function wF(e, t) {
    var n = kr(e),
      i = ho(e),
      a = n.visualViewport,
      l = i.clientWidth,
      c = i.clientHeight,
      d = 0,
      p = 0;
    if (a) {
      (l = a.width), (c = a.height);
      var h = aw();
      (h || (!h && t === "fixed")) && ((d = a.offsetLeft), (p = a.offsetTop));
    }
    return { width: l, height: c, x: d + tm(e), y: p };
  }
  function kF(e) {
    var t,
      n = ho(e),
      i = em(e),
      a = (t = e.ownerDocument) == null ? void 0 : t.body,
      l = di(
        n.scrollWidth,
        n.clientWidth,
        a ? a.scrollWidth : 0,
        a ? a.clientWidth : 0
      ),
      c = di(
        n.scrollHeight,
        n.clientHeight,
        a ? a.scrollHeight : 0,
        a ? a.clientHeight : 0
      ),
      d = -i.scrollLeft + tm(e),
      p = -i.scrollTop;
    return (
      Wn(a || n).direction === "rtl" &&
        (d += di(n.clientWidth, a ? a.clientWidth : 0) - l),
      { width: l, height: c, x: d, y: p }
    );
  }
  function rm(e) {
    var t = Wn(e),
      n = t.overflow,
      i = t.overflowX,
      a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + a + i);
  }
  function hw(e) {
    return ["html", "body", "#document"].indexOf(_n(e)) >= 0
      ? e.ownerDocument.body
      : Dr(e) && rm(e)
      ? e
      : hw(yu(e));
  }
  function hl(e, t) {
    var n;
    t === void 0 && (t = []);
    var i = hw(e),
      a = i === ((n = e.ownerDocument) == null ? void 0 : n.body),
      l = kr(i),
      c = a ? [l].concat(l.visualViewport || [], rm(i) ? i : []) : i,
      d = t.concat(c);
    return a ? d : d.concat(hl(yu(c)));
  }
  function nm(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function SF(e, t) {
    var n = ha(e, !1, t === "fixed");
    return (
      (n.top = n.top + e.clientTop),
      (n.left = n.left + e.clientLeft),
      (n.bottom = n.top + e.clientHeight),
      (n.right = n.left + e.clientWidth),
      (n.width = e.clientWidth),
      (n.height = e.clientHeight),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  function mw(e, t, n) {
    return t === nw ? nm(wF(e, n)) : ui(t) ? SF(t, n) : nm(kF(ho(e)));
  }
  function _F(e) {
    var t = hl(yu(e)),
      n = ["absolute", "fixed"].indexOf(Wn(e).position) >= 0,
      i = n && Dr(e) ? fl(e) : e;
    return ui(i)
      ? t.filter(function (a) {
          return ui(a) && sw(a, i) && _n(a) !== "body";
        })
      : [];
  }
  function CF(e, t, n, i) {
    var a = t === "clippingParents" ? _F(e) : [].concat(t),
      l = [].concat(a, [n]),
      c = l[0],
      d = l.reduce(function (p, h) {
        var g = mw(e, h, i);
        return (
          (p.top = di(g.top, p.top)),
          (p.right = vu(g.right, p.right)),
          (p.bottom = vu(g.bottom, p.bottom)),
          (p.left = di(g.left, p.left)),
          p
        );
      }, mw(e, c, i));
    return (
      (d.width = d.right - d.left),
      (d.height = d.bottom - d.top),
      (d.x = d.left),
      (d.y = d.top),
      d
    );
  }
  function gw(e) {
    var t = e.reference,
      n = e.element,
      i = e.placement,
      a = i ? Cn(i) : null,
      l = i ? ma(i) : null,
      c = t.x + t.width / 2 - n.width / 2,
      d = t.y + t.height / 2 - n.height / 2,
      p;
    switch (a) {
      case lr:
        p = { x: c, y: t.y - n.height };
        break;
      case Mr:
        p = { x: c, y: t.y + t.height };
        break;
      case zr:
        p = { x: t.x + t.width, y: d };
        break;
      case cr:
        p = { x: t.x - n.width, y: d };
        break;
      default:
        p = { x: t.x, y: t.y };
    }
    var h = a ? Jh(a) : null;
    if (h != null) {
      var g = h === "y" ? "height" : "width";
      switch (l) {
        case fa:
          p[h] = p[h] - (t[g] / 2 - n[g] / 2);
          break;
        case ul:
          p[h] = p[h] + (t[g] / 2 - n[g] / 2);
          break;
      }
    }
    return p;
  }
  function ml(e, t) {
    t === void 0 && (t = {});
    var n = t,
      i = n.placement,
      a = i === void 0 ? e.placement : i,
      l = n.strategy,
      c = l === void 0 ? e.strategy : l,
      d = n.boundary,
      p = d === void 0 ? HI : d,
      h = n.rootBoundary,
      g = h === void 0 ? nw : h,
      v = n.elementContext,
      b = v === void 0 ? dl : v,
      k = n.altBoundary,
      S = k === void 0 ? !1 : k,
      w = n.padding,
      _ = w === void 0 ? 0 : w,
      j = uw(typeof _ != "number" ? _ : dw(_, cl)),
      O = b === dl ? qI : dl,
      M = e.rects.popper,
      $ = e.elements[S ? O : b],
      E = CF(ui($) ? $ : $.contextElement || ho(e.elements.popper), p, g, c),
      I = ha(e.elements.reference),
      L = gw({ reference: I, element: M, strategy: "absolute", placement: a }),
      H = nm(Object.assign({}, M, L)),
      G = b === dl ? H : I,
      q = {
        top: E.top - G.top + j.top,
        bottom: G.bottom - E.bottom + j.bottom,
        left: E.left - G.left + j.left,
        right: G.right - E.right + j.right,
      },
      ie = e.modifiersData.offset;
    if (b === dl && ie) {
      var he = ie[a];
      Object.keys(q).forEach(function (ve) {
        var Ee = [zr, Mr].indexOf(ve) >= 0 ? 1 : -1,
          J = [lr, Mr].indexOf(ve) >= 0 ? "y" : "x";
        q[ve] += he[J] * Ee;
      });
    }
    return q;
  }
  function EF(e, t) {
    t === void 0 && (t = {});
    var n = t,
      i = n.placement,
      a = n.boundary,
      l = n.rootBoundary,
      c = n.padding,
      d = n.flipVariations,
      p = n.allowedAutoPlacements,
      h = p === void 0 ? iw : p,
      g = ma(i),
      v = g
        ? d
          ? ow
          : ow.filter(function (S) {
              return ma(S) === g;
            })
        : cl,
      b = v.filter(function (S) {
        return h.indexOf(S) >= 0;
      });
    b.length === 0 && (b = v);
    var k = b.reduce(function (S, w) {
      return (
        (S[w] = ml(e, {
          placement: w,
          boundary: a,
          rootBoundary: l,
          padding: c,
        })[Cn(w)]),
        S
      );
    }, {});
    return Object.keys(k).sort(function (S, w) {
      return k[S] - k[w];
    });
  }
  function PF(e) {
    if (Cn(e) === Zh) return [];
    var t = xu(e);
    return [pw(e), t, pw(t)];
  }
  function RF(e) {
    var t = e.state,
      n = e.options,
      i = e.name;
    if (!t.modifiersData[i]._skip) {
      for (
        var a = n.mainAxis,
          l = a === void 0 ? !0 : a,
          c = n.altAxis,
          d = c === void 0 ? !0 : c,
          p = n.fallbackPlacements,
          h = n.padding,
          g = n.boundary,
          v = n.rootBoundary,
          b = n.altBoundary,
          k = n.flipVariations,
          S = k === void 0 ? !0 : k,
          w = n.allowedAutoPlacements,
          _ = t.options.placement,
          j = Cn(_),
          O = j === _,
          M = p || (O || !S ? [xu(_)] : PF(_)),
          $ = [_].concat(M).reduce(function (oe, pe) {
            return oe.concat(
              Cn(pe) === Zh
                ? EF(t, {
                    placement: pe,
                    boundary: g,
                    rootBoundary: v,
                    padding: h,
                    flipVariations: S,
                    allowedAutoPlacements: w,
                  })
                : pe
            );
          }, []),
          E = t.rects.reference,
          I = t.rects.popper,
          L = new Map(),
          H = !0,
          G = $[0],
          q = 0;
        q < $.length;
        q++
      ) {
        var ie = $[q],
          he = Cn(ie),
          ve = ma(ie) === fa,
          Ee = [lr, Mr].indexOf(he) >= 0,
          J = Ee ? "width" : "height",
          re = ml(t, {
            placement: ie,
            boundary: g,
            rootBoundary: v,
            altBoundary: b,
            padding: h,
          }),
          se = Ee ? (ve ? zr : cr) : ve ? Mr : lr;
        E[J] > I[J] && (se = xu(se));
        var K = xu(se),
          ne = [];
        if (
          (l && ne.push(re[he] <= 0),
          d && ne.push(re[se] <= 0, re[K] <= 0),
          ne.every(function (oe) {
            return oe;
          }))
        ) {
          (G = ie), (H = !1);
          break;
        }
        L.set(ie, ne);
      }
      if (H)
        for (
          var te = S ? 3 : 1,
            A = function (oe) {
              var pe = $.find(function (ye) {
                var de = L.get(ye);
                if (de)
                  return de.slice(0, oe).every(function (ge) {
                    return ge;
                  });
              });
              if (pe) return (G = pe), "break";
            },
            V = te;
          V > 0;
          V--
        ) {
          var Y = A(V);
          if (Y === "break") break;
        }
      t.placement !== G &&
        ((t.modifiersData[i]._skip = !0), (t.placement = G), (t.reset = !0));
    }
  }
  const jF = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: RF,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function vw(e, t, n) {
    return (
      n === void 0 && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function yw(e) {
    return [lr, zr, Mr, cr].some(function (t) {
      return e[t] >= 0;
    });
  }
  function OF(e) {
    var t = e.state,
      n = e.name,
      i = t.rects.reference,
      a = t.rects.popper,
      l = t.modifiersData.preventOverflow,
      c = ml(t, { elementContext: "reference" }),
      d = ml(t, { altBoundary: !0 }),
      p = vw(c, i),
      h = vw(d, a, l),
      g = yw(p),
      v = yw(h);
    (t.modifiersData[n] = {
      referenceClippingOffsets: p,
      popperEscapeOffsets: h,
      isReferenceHidden: g,
      hasPopperEscaped: v,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": g,
        "data-popper-escaped": v,
      }));
  }
  const AF = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: OF,
  };
  function TF(e, t, n) {
    var i = Cn(e),
      a = [cr, lr].indexOf(i) >= 0 ? -1 : 1,
      l =
        typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
      c = l[0],
      d = l[1];
    return (
      (c = c || 0),
      (d = (d || 0) * a),
      [cr, zr].indexOf(i) >= 0 ? { x: d, y: c } : { x: c, y: d }
    );
  }
  function MF(e) {
    var t = e.state,
      n = e.options,
      i = e.name,
      a = n.offset,
      l = a === void 0 ? [0, 0] : a,
      c = iw.reduce(function (g, v) {
        return (g[v] = TF(v, t.rects, l)), g;
      }, {}),
      d = c[t.placement],
      p = d.x,
      h = d.y;
    t.modifiersData.popperOffsets != null &&
      ((t.modifiersData.popperOffsets.x += p),
      (t.modifiersData.popperOffsets.y += h)),
      (t.modifiersData[i] = c);
  }
  const zF = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: MF,
  };
  function DF(e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = gw({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement,
    });
  }
  const IF = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: DF,
    data: {},
  };
  function FF(e) {
    return e === "x" ? "y" : "x";
  }
  function LF(e) {
    var t = e.state,
      n = e.options,
      i = e.name,
      a = n.mainAxis,
      l = a === void 0 ? !0 : a,
      c = n.altAxis,
      d = c === void 0 ? !1 : c,
      p = n.boundary,
      h = n.rootBoundary,
      g = n.altBoundary,
      v = n.padding,
      b = n.tether,
      k = b === void 0 ? !0 : b,
      S = n.tetherOffset,
      w = S === void 0 ? 0 : S,
      _ = ml(t, { boundary: p, rootBoundary: h, padding: v, altBoundary: g }),
      j = Cn(t.placement),
      O = ma(t.placement),
      M = !O,
      $ = Jh(j),
      E = FF($),
      I = t.modifiersData.popperOffsets,
      L = t.rects.reference,
      H = t.rects.popper,
      G =
        typeof w == "function"
          ? w(Object.assign({}, t.rects, { placement: t.placement }))
          : w,
      q =
        typeof G == "number"
          ? { mainAxis: G, altAxis: G }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, G),
      ie = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      he = { x: 0, y: 0 };
    if (I) {
      if (l) {
        var ve,
          Ee = $ === "y" ? lr : cr,
          J = $ === "y" ? Mr : zr,
          re = $ === "y" ? "height" : "width",
          se = I[$],
          K = se + _[Ee],
          ne = se - _[J],
          te = k ? -H[re] / 2 : 0,
          A = O === fa ? L[re] : H[re],
          V = O === fa ? -H[re] : -L[re],
          Y = t.elements.arrow,
          oe = k && Y ? Qh(Y) : { width: 0, height: 0 },
          pe = t.modifiersData["arrow#persistent"]
            ? t.modifiersData["arrow#persistent"].padding
            : cw(),
          ye = pe[Ee],
          de = pe[J],
          ge = pl(0, L[re], oe[re]),
          Oe = M
            ? L[re] / 2 - te - ge - ye - q.mainAxis
            : A - ge - ye - q.mainAxis,
          Qe = M
            ? -L[re] / 2 + te + ge + de + q.mainAxis
            : V + ge + de + q.mainAxis,
          dt = t.elements.arrow && fl(t.elements.arrow),
          Yt = dt ? ($ === "y" ? dt.clientTop || 0 : dt.clientLeft || 0) : 0,
          $t = (ve = ie == null ? void 0 : ie[$]) != null ? ve : 0,
          Pe = se + Oe - $t - Yt,
          qe = se + Qe - $t,
          tt = pl(k ? vu(K, Pe) : K, se, k ? di(ne, qe) : ne);
        (I[$] = tt), (he[$] = tt - se);
      }
      if (d) {
        var be,
          Ze = $ === "x" ? lr : cr,
          Xe = $ === "x" ? Mr : zr,
          Ke = I[E],
          yt = E === "y" ? "height" : "width",
          Qt = Ke + _[Ze],
          Bt = Ke - _[Xe],
          tn = [lr, cr].indexOf(j) !== -1,
          vo = (be = ie == null ? void 0 : ie[E]) != null ? be : 0,
          hi = tn ? Qt : Ke - L[yt] - H[yt] - vo + q.altAxis,
          yo = tn ? Ke + L[yt] + H[yt] - vo - q.altAxis : Bt,
          Ir = k && tn ? lF(hi, Ke, yo) : pl(k ? hi : Qt, Ke, k ? yo : Bt);
        (I[E] = Ir), (he[E] = Ir - Ke);
      }
      t.modifiersData[i] = he;
    }
  }
  const NF = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: LF,
    requiresIfExists: ["offset"],
  };
  function $F(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
  }
  function BF(e) {
    return e === kr(e) || !Dr(e) ? em(e) : $F(e);
  }
  function VF(e) {
    var t = e.getBoundingClientRect(),
      n = pa(t.width) / e.offsetWidth || 1,
      i = pa(t.height) / e.offsetHeight || 1;
    return n !== 1 || i !== 1;
  }
  function WF(e, t, n) {
    n === void 0 && (n = !1);
    var i = Dr(t),
      a = Dr(t) && VF(t),
      l = ho(t),
      c = ha(e, a, n),
      d = { scrollLeft: 0, scrollTop: 0 },
      p = { x: 0, y: 0 };
    return (
      (i || (!i && !n)) &&
        ((_n(t) !== "body" || rm(l)) && (d = BF(t)),
        Dr(t)
          ? ((p = ha(t, !0)), (p.x += t.clientLeft), (p.y += t.clientTop))
          : l && (p.x = tm(l))),
      {
        x: c.left + d.scrollLeft - p.x,
        y: c.top + d.scrollTop - p.y,
        width: c.width,
        height: c.height,
      }
    );
  }
  function UF(e) {
    var t = new Map(),
      n = new Set(),
      i = [];
    e.forEach(function (l) {
      t.set(l.name, l);
    });
    function a(l) {
      n.add(l.name);
      var c = [].concat(l.requires || [], l.requiresIfExists || []);
      c.forEach(function (d) {
        if (!n.has(d)) {
          var p = t.get(d);
          p && a(p);
        }
      }),
        i.push(l);
    }
    return (
      e.forEach(function (l) {
        n.has(l.name) || a(l);
      }),
      i
    );
  }
  function HF(e) {
    var t = UF(e);
    return rF.reduce(function (n, i) {
      return n.concat(
        t.filter(function (a) {
          return a.phase === i;
        })
      );
    }, []);
  }
  function qF(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (n) {
            Promise.resolve().then(function () {
              (t = void 0), n(e());
            });
          })),
        t
      );
    };
  }
  function KF(e) {
    var t = e.reduce(function (n, i) {
      var a = n[i.name];
      return (
        (n[i.name] = a
          ? Object.assign({}, a, i, {
              options: Object.assign({}, a.options, i.options),
              data: Object.assign({}, a.data, i.data),
            })
          : i),
        n
      );
    }, {});
    return Object.keys(t).map(function (n) {
      return t[n];
    });
  }
  var bw = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function xw() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (i) {
      return !(i && typeof i.getBoundingClientRect == "function");
    });
  }
  function GF(e) {
    e === void 0 && (e = {});
    var t = e,
      n = t.defaultModifiers,
      i = n === void 0 ? [] : n,
      a = t.defaultOptions,
      l = a === void 0 ? bw : a;
    return function (c, d, p) {
      p === void 0 && (p = l);
      var h = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, bw, l),
          modifiersData: {},
          elements: { reference: c, popper: d },
          attributes: {},
          styles: {},
        },
        g = [],
        v = !1,
        b = {
          state: h,
          setOptions: function (w) {
            var _ = typeof w == "function" ? w(h.options) : w;
            S(),
              (h.options = Object.assign({}, l, h.options, _)),
              (h.scrollParents = {
                reference: ui(c)
                  ? hl(c)
                  : c.contextElement
                  ? hl(c.contextElement)
                  : [],
                popper: hl(d),
              });
            var j = HF(KF([].concat(i, h.options.modifiers)));
            return (
              (h.orderedModifiers = j.filter(function (O) {
                return O.enabled;
              })),
              k(),
              b.update()
            );
          },
          forceUpdate: function () {
            if (!v) {
              var w = h.elements,
                _ = w.reference,
                j = w.popper;
              if (xw(_, j)) {
                (h.rects = {
                  reference: WF(_, fl(j), h.options.strategy === "fixed"),
                  popper: Qh(j),
                }),
                  (h.reset = !1),
                  (h.placement = h.options.placement),
                  h.orderedModifiers.forEach(function (H) {
                    return (h.modifiersData[H.name] = Object.assign(
                      {},
                      H.data
                    ));
                  });
                for (var O = 0; O < h.orderedModifiers.length; O++) {
                  if (h.reset === !0) {
                    (h.reset = !1), (O = -1);
                    continue;
                  }
                  var M = h.orderedModifiers[O],
                    $ = M.fn,
                    E = M.options,
                    I = E === void 0 ? {} : E,
                    L = M.name;
                  typeof $ == "function" &&
                    (h =
                      $({ state: h, options: I, name: L, instance: b }) || h);
                }
              }
            }
          },
          update: qF(function () {
            return new Promise(function (w) {
              b.forceUpdate(), w(h);
            });
          }),
          destroy: function () {
            S(), (v = !0);
          },
        };
      if (!xw(c, d)) return b;
      b.setOptions(p).then(function (w) {
        !v && p.onFirstUpdate && p.onFirstUpdate(w);
      });
      function k() {
        h.orderedModifiers.forEach(function (w) {
          var _ = w.name,
            j = w.options,
            O = j === void 0 ? {} : j,
            M = w.effect;
          if (typeof M == "function") {
            var $ = M({ state: h, name: _, instance: b, options: O }),
              E = function () {};
            g.push($ || E);
          }
        });
      }
      function S() {
        g.forEach(function (w) {
          return w();
        }),
          (g = []);
      }
      return b;
    };
  }
  var ZF = [yF, IF, gF, iF, zF, jF, NF, fF, AF],
    XF = GF({ defaultModifiers: ZF });
  const ga = (e, t) => ({
      var: e,
      varRef: t ? `var(${e}, ${t})` : `var(${e})`,
    }),
    Nt = {
      arrowShadowColor: ga("--popper-arrow-shadow-color"),
      arrowSize: ga("--popper-arrow-size", "8px"),
      arrowSizeHalf: ga("--popper-arrow-size-half"),
      arrowBg: ga("--popper-arrow-bg"),
      transformOrigin: ga("--popper-transform-origin"),
      arrowOffset: ga("--popper-arrow-offset"),
    };
  function YF(e) {
    if (e.includes("top"))
      return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
    if (e.includes("bottom"))
      return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
    if (e.includes("right"))
      return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
    if (e.includes("left"))
      return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  }
  const QF = {
      top: "bottom center",
      "top-start": "bottom left",
      "top-end": "bottom right",
      bottom: "top center",
      "bottom-start": "top left",
      "bottom-end": "top right",
      left: "right center",
      "left-start": "right top",
      "left-end": "right bottom",
      right: "left center",
      "right-start": "left top",
      "right-end": "left bottom",
    },
    JF = (e) => QF[e],
    ww = { scroll: !0, resize: !0 };
  function eL(e) {
    let t;
    return (
      typeof e == "object"
        ? (t = { enabled: !0, options: { ...ww, ...e } })
        : (t = { enabled: e, options: ww }),
      t
    );
  }
  const tL = {
      name: "matchWidth",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: ({ state: e }) => {
        e.styles.popper.width = `${e.rects.reference.width}px`;
      },
      effect:
        ({ state: e }) =>
        () => {
          const t = e.elements.reference;
          e.elements.popper.style.width = `${t.offsetWidth}px`;
        },
    },
    rL = {
      name: "transformOrigin",
      enabled: !0,
      phase: "write",
      fn: ({ state: e }) => {
        kw(e);
      },
      effect:
        ({ state: e }) =>
        () => {
          kw(e);
        },
    },
    kw = (e) => {
      e.elements.popper.style.setProperty(
        Nt.transformOrigin.var,
        JF(e.placement)
      );
    },
    nL = {
      name: "positionArrow",
      enabled: !0,
      phase: "afterWrite",
      fn: ({ state: e }) => {
        oL(e);
      },
    },
    oL = (e) => {
      var n;
      if (!e.placement) return;
      const t = iL(e.placement);
      if ((n = e.elements) != null && n.arrow && t) {
        Object.assign(e.elements.arrow.style, {
          [t.property]: t.value,
          width: Nt.arrowSize.varRef,
          height: Nt.arrowSize.varRef,
          zIndex: -1,
        });
        const i = {
          [Nt.arrowSizeHalf.var]: `calc(${Nt.arrowSize.varRef} / 2 - 1px)`,
          [Nt.arrowOffset.var]: `calc(${Nt.arrowSizeHalf.varRef} * -1)`,
        };
        for (const a in i) e.elements.arrow.style.setProperty(a, i[a]);
      }
    },
    iL = (e) => {
      if (e.startsWith("top"))
        return { property: "bottom", value: Nt.arrowOffset.varRef };
      if (e.startsWith("bottom"))
        return { property: "top", value: Nt.arrowOffset.varRef };
      if (e.startsWith("left"))
        return { property: "right", value: Nt.arrowOffset.varRef };
      if (e.startsWith("right"))
        return { property: "left", value: Nt.arrowOffset.varRef };
    },
    aL = {
      name: "innerArrow",
      enabled: !0,
      phase: "main",
      requires: ["arrow"],
      fn: ({ state: e }) => {
        Sw(e);
      },
      effect:
        ({ state: e }) =>
        () => {
          Sw(e);
        },
    },
    Sw = (e) => {
      if (!e.elements.arrow) return;
      const t = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
      if (!t) return;
      const n = YF(e.placement);
      n && t.style.setProperty("--popper-arrow-default-shadow", n),
        Object.assign(t.style, {
          transform: "rotate(45deg)",
          background: Nt.arrowBg.varRef,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "inherit",
          boxShadow:
            "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
        });
    },
    sL = {
      "start-start": { ltr: "left-start", rtl: "right-start" },
      "start-end": { ltr: "left-end", rtl: "right-end" },
      "end-start": { ltr: "right-start", rtl: "left-start" },
      "end-end": { ltr: "right-end", rtl: "left-end" },
      start: { ltr: "left", rtl: "right" },
      end: { ltr: "right", rtl: "left" },
    },
    lL = {
      "auto-start": "auto-end",
      "auto-end": "auto-start",
      "top-start": "top-end",
      "top-end": "top-start",
      "bottom-start": "bottom-end",
      "bottom-end": "bottom-start",
    };
  function cL(e, t = "ltr") {
    var i;
    const n = ((i = sL[e]) == null ? void 0 : i[t]) || e;
    return t === "ltr" ? n : lL[e] ?? n;
  }
  function uL(e = {}) {
    const {
        enabled: t = !0,
        modifiers: n,
        placement: i = "bottom",
        strategy: a = "absolute",
        arrowPadding: l = 8,
        eventListeners: c = !0,
        offset: d,
        gutter: p = 8,
        flip: h = !0,
        boundary: g = "clippingParents",
        preventOverflow: v = !0,
        matchWidth: b,
        direction: k = "ltr",
      } = e,
      S = x.useRef(null),
      w = x.useRef(null),
      _ = x.useRef(null),
      j = cL(i, k),
      O = x.useRef(() => {}),
      M = x.useCallback(() => {
        var q;
        !t ||
          !S.current ||
          !w.current ||
          ((q = O.current) == null || q.call(O),
          (_.current = XF(S.current, w.current, {
            placement: j,
            modifiers: [
              aL,
              nL,
              rL,
              { ...tL, enabled: !!b },
              { name: "eventListeners", ...eL(c) },
              { name: "arrow", options: { padding: l } },
              { name: "offset", options: { offset: d ?? [0, p] } },
              { name: "flip", enabled: !!h, options: { padding: 8 } },
              {
                name: "preventOverflow",
                enabled: !!v,
                options: { boundary: g },
              },
              ...(n ?? []),
            ],
            strategy: a,
          })),
          _.current.forceUpdate(),
          (O.current = _.current.destroy));
      }, [j, t, n, b, c, l, d, p, h, v, g, a]);
    x.useEffect(
      () => () => {
        var q;
        !S.current &&
          !w.current &&
          ((q = _.current) == null || q.destroy(), (_.current = null));
      },
      []
    );
    const $ = x.useCallback(
        (q) => {
          (S.current = q), M();
        },
        [M]
      ),
      E = x.useCallback((q = {}, ie = null) => ({ ...q, ref: rr($, ie) }), [$]),
      I = x.useCallback(
        (q) => {
          (w.current = q), M();
        },
        [M]
      ),
      L = x.useCallback(
        (q = {}, ie = null) => ({
          ...q,
          ref: rr(I, ie),
          style: {
            ...q.style,
            position: a,
            minWidth: b ? void 0 : "max-content",
            inset: "0 auto auto 0",
          },
        }),
        [a, I, b]
      ),
      H = x.useCallback((q = {}, ie = null) => {
        const { size: he, shadowColor: ve, bg: Ee, style: J, ...re } = q;
        return { ...re, ref: ie, "data-popper-arrow": "", style: dL(q) };
      }, []),
      G = x.useCallback(
        (q = {}, ie = null) => ({
          ...q,
          ref: ie,
          "data-popper-arrow-inner": "",
        }),
        []
      );
    return {
      update() {
        var q;
        (q = _.current) == null || q.update();
      },
      forceUpdate() {
        var q;
        (q = _.current) == null || q.forceUpdate();
      },
      transformOrigin: Nt.transformOrigin.varRef,
      referenceRef: $,
      popperRef: I,
      getPopperProps: L,
      getArrowProps: H,
      getArrowInnerProps: G,
      getReferenceProps: E,
    };
  }
  function dL(e) {
    const { size: t, shadowColor: n, bg: i, style: a } = e,
      l = { ...a, position: "absolute" };
    return (
      t && (l["--popper-arrow-size"] = t),
      n && (l["--popper-arrow-shadow-color"] = n),
      i && (l["--popper-arrow-bg"] = i),
      l
    );
  }
  var fL = function (e) {
      if (typeof document > "u") return null;
      var t = Array.isArray(e) ? e[0] : e;
      return t.ownerDocument.body;
    },
    va = new WeakMap(),
    wu = new WeakMap(),
    ku = {},
    om = 0,
    _w = function (e) {
      return e && (e.host || _w(e.parentNode));
    },
    pL = function (e, t) {
      return t
        .map(function (n) {
          if (e.contains(n)) return n;
          var i = _w(n);
          return i && e.contains(i)
            ? i
            : (console.error(
                "aria-hidden",
                n,
                "in not contained inside",
                e,
                ". Doing nothing"
              ),
              null);
        })
        .filter(function (n) {
          return !!n;
        });
    },
    hL = function (e, t, n, i) {
      var a = pL(t, Array.isArray(e) ? e : [e]);
      ku[n] || (ku[n] = new WeakMap());
      var l = ku[n],
        c = [],
        d = new Set(),
        p = new Set(a),
        h = function (v) {
          !v || d.has(v) || (d.add(v), h(v.parentNode));
        };
      a.forEach(h);
      var g = function (v) {
        !v ||
          p.has(v) ||
          Array.prototype.forEach.call(v.children, function (b) {
            if (d.has(b)) g(b);
            else
              try {
                var k = b.getAttribute(i),
                  S = k !== null && k !== "false",
                  w = (va.get(b) || 0) + 1,
                  _ = (l.get(b) || 0) + 1;
                va.set(b, w),
                  l.set(b, _),
                  c.push(b),
                  w === 1 && S && wu.set(b, !0),
                  _ === 1 && b.setAttribute(n, "true"),
                  S || b.setAttribute(i, "true");
              } catch (j) {
                console.error("aria-hidden: cannot operate on ", b, j);
              }
          });
      };
      return (
        g(t),
        d.clear(),
        om++,
        function () {
          c.forEach(function (v) {
            var b = va.get(v) - 1,
              k = l.get(v) - 1;
            va.set(v, b),
              l.set(v, k),
              b || (wu.has(v) || v.removeAttribute(i), wu.delete(v)),
              k || v.removeAttribute(n);
          }),
            om--,
            om ||
              ((va = new WeakMap()),
              (va = new WeakMap()),
              (wu = new WeakMap()),
              (ku = {}));
        }
      );
    },
    mL = function (e, t, n) {
      n === void 0 && (n = "data-aria-hidden");
      var i = Array.from(Array.isArray(e) ? e : [e]),
        a = fL(e);
      return a
        ? (i.push.apply(i, Array.from(a.querySelectorAll("[aria-live]"))),
          hL(i, a, n, "aria-hidden"))
        : function () {
            return null;
          };
    },
    gL = Object.defineProperty,
    vL = (e, t, n) =>
      t in e
        ? gL(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n),
    yL = (e, t, n) => (vL(e, t + "", n), n);
  class bL {
    constructor() {
      yL(this, "modals"), (this.modals = new Set());
    }
    add(t) {
      return this.modals.add(t), this.modals.size;
    }
    remove(t) {
      this.modals.delete(t);
    }
    isTopModal(t) {
      if (!t) return !1;
      const n = Array.from(this.modals)[this.modals.size - 1];
      return t === n;
    }
  }
  const im = new bL();
  function Cw(e, t) {
    const [n, i] = x.useState(0);
    return (
      x.useEffect(() => {
        const a = e.current;
        if (a) {
          if (t) {
            const l = im.add(a);
            i(l);
          }
          return () => {
            im.remove(a), i(0);
          };
        }
      }, [t, e]),
      n
    );
  }
  function xL(e) {
    const {
        isOpen: t,
        onClose: n,
        id: i,
        closeOnOverlayClick: a = !0,
        closeOnEsc: l = !0,
        useInert: c = !0,
        onOverlayClick: d,
        onEsc: p,
      } = e,
      h = x.useRef(null),
      g = x.useRef(null),
      [v, b, k] = kL(
        i,
        "chakra-modal",
        "chakra-modal--header",
        "chakra-modal--body"
      );
    wL(h, t && c);
    const S = Cw(h, t),
      w = x.useRef(null),
      _ = x.useCallback((G) => {
        w.current = G.target;
      }, []),
      j = x.useCallback(
        (G) => {
          G.key === "Escape" &&
            (G.stopPropagation(), l && (n == null || n()), p == null || p());
        },
        [l, n, p]
      ),
      [O, M] = x.useState(!1),
      [$, E] = x.useState(!1),
      I = x.useCallback(
        (G = {}, q = null) => ({
          role: "dialog",
          ...G,
          ref: rr(q, h),
          id: v,
          tabIndex: -1,
          "aria-modal": !0,
          "aria-labelledby": O ? b : void 0,
          "aria-describedby": $ ? k : void 0,
          onClick: et(G.onClick, (ie) => ie.stopPropagation()),
        }),
        [k, $, v, b, O]
      ),
      L = x.useCallback(
        (G) => {
          G.stopPropagation(),
            w.current === G.target &&
              im.isTopModal(h.current) &&
              (a && (n == null || n()), d == null || d());
        },
        [n, a, d]
      ),
      H = x.useCallback(
        (G = {}, q = null) => ({
          ...G,
          ref: rr(q, g),
          onClick: et(G.onClick, L),
          onKeyDown: et(G.onKeyDown, j),
          onMouseDown: et(G.onMouseDown, _),
        }),
        [j, _, L]
      );
    return {
      isOpen: t,
      onClose: n,
      headerId: b,
      bodyId: k,
      setBodyMounted: E,
      setHeaderMounted: M,
      dialogRef: h,
      overlayRef: g,
      getDialogProps: I,
      getDialogContainerProps: H,
      index: S,
    };
  }
  function wL(e, t) {
    const n = e.current;
    x.useEffect(() => {
      if (!(!e.current || !t)) return mL(e.current);
    }, [t, e, n]);
  }
  function kL(e, ...t) {
    const n = x.useId(),
      i = e || n;
    return x.useMemo(() => t.map((a) => `${a}-${i}`), [i, t]);
  }
  const [SL, gl] = tr({
      name: "ModalStylesContext",
      errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
    }),
    [_L, ya] = tr({
      strict: !0,
      name: "ModalContext",
      errorMessage:
        "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
    }),
    Ew = (e) => {
      const t = {
          scrollBehavior: "outside",
          autoFocus: !0,
          trapFocus: !0,
          returnFocusOnClose: !0,
          blockScrollOnMount: !0,
          allowPinchZoom: !1,
          preserveScrollBarGap: !0,
          motionPreset: "scale",
          ...e,
          lockFocusAcrossFrames: e.lockFocusAcrossFrames || !0,
        },
        {
          portalProps: n,
          children: i,
          autoFocus: a,
          trapFocus: l,
          initialFocusRef: c,
          finalFocusRef: d,
          returnFocusOnClose: p,
          blockScrollOnMount: h,
          allowPinchZoom: g,
          preserveScrollBarGap: v,
          motionPreset: b,
          lockFocusAcrossFrames: k,
          animatePresenceProps: S,
          onCloseComplete: w,
        } = t,
        _ = po("Modal", t),
        j = {
          ...xL(t),
          autoFocus: a,
          trapFocus: l,
          initialFocusRef: c,
          finalFocusRef: d,
          returnFocusOnClose: p,
          blockScrollOnMount: h,
          allowPinchZoom: g,
          preserveScrollBarGap: v,
          motionPreset: b,
          lockFocusAcrossFrames: k,
        };
      return R.jsx(_L, {
        value: j,
        children: R.jsx(SL, {
          value: _,
          children: R.jsx(el, {
            ...S,
            onExitComplete: w,
            children: j.isOpen && R.jsx(tl, { ...n, children: i }),
          }),
        }),
      });
    };
  Ew.displayName = "Modal";
  var Su = "right-scroll-bar-position",
    _u = "width-before-scroll-bar",
    CL = "with-scroll-bars-hidden",
    EL = "--removed-body-scroll-bar-size",
    Pw = bx(),
    am = function () {},
    Cu = x.forwardRef(function (e, t) {
      var n = x.useRef(null),
        i = x.useState({
          onScrollCapture: am,
          onWheelCapture: am,
          onTouchMoveCapture: am,
        }),
        a = i[0],
        l = i[1],
        c = e.forwardProps,
        d = e.children,
        p = e.className,
        h = e.removeScrollBar,
        g = e.enabled,
        v = e.shards,
        b = e.sideCar,
        k = e.noIsolation,
        S = e.inert,
        w = e.allowPinchZoom,
        _ = e.as,
        j = _ === void 0 ? "div" : _,
        O = e.gapMode,
        M = gx(e, [
          "forwardProps",
          "children",
          "className",
          "removeScrollBar",
          "enabled",
          "shards",
          "sideCar",
          "noIsolation",
          "inert",
          "allowPinchZoom",
          "as",
          "gapMode",
        ]),
        $ = b,
        E = mx([n, t]),
        I = kn(kn({}, M), a);
      return x.createElement(
        x.Fragment,
        null,
        g &&
          x.createElement($, {
            sideCar: Pw,
            removeScrollBar: h,
            shards: v,
            noIsolation: k,
            inert: S,
            setCallbacks: l,
            allowPinchZoom: !!w,
            lockRef: n,
            gapMode: O,
          }),
        c
          ? x.cloneElement(x.Children.only(d), kn(kn({}, I), { ref: E }))
          : x.createElement(j, kn({}, I, { className: p, ref: E }), d)
      );
    });
  (Cu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
    (Cu.classNames = { fullWidth: _u, zeroRight: Su });
  var PL = function () {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
  function RL() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = PL();
    return t && e.setAttribute("nonce", t), e;
  }
  function jL(e, t) {
    e.styleSheet
      ? (e.styleSheet.cssText = t)
      : e.appendChild(document.createTextNode(t));
  }
  function OL(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e);
  }
  var AL = function () {
      var e = 0,
        t = null;
      return {
        add: function (n) {
          e == 0 && (t = RL()) && (jL(t, n), OL(t)), e++;
        },
        remove: function () {
          e--,
            !e &&
              t &&
              (t.parentNode && t.parentNode.removeChild(t), (t = null));
        },
      };
    },
    TL = function () {
      var e = AL();
      return function (t, n) {
        x.useEffect(
          function () {
            return (
              e.add(t),
              function () {
                e.remove();
              }
            );
          },
          [t && n]
        );
      };
    },
    Rw = function () {
      var e = TL(),
        t = function (n) {
          var i = n.styles,
            a = n.dynamic;
          return e(i, a), null;
        };
      return t;
    },
    ML = { left: 0, top: 0, right: 0, gap: 0 },
    sm = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    zL = function (e) {
      var t = window.getComputedStyle(document.body),
        n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
        i = t[e === "padding" ? "paddingTop" : "marginTop"],
        a = t[e === "padding" ? "paddingRight" : "marginRight"];
      return [sm(n), sm(i), sm(a)];
    },
    DL = function (e) {
      if ((e === void 0 && (e = "margin"), typeof window > "u")) return ML;
      var t = zL(e),
        n = document.documentElement.clientWidth,
        i = window.innerWidth;
      return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, i - n + t[2] - t[0]),
      };
    },
    IL = Rw(),
    ba = "data-scroll-locked",
    FL = function (e, t, n, i) {
      var a = e.left,
        l = e.top,
        c = e.right,
        d = e.gap;
      return (
        n === void 0 && (n = "margin"),
        `
  .`
          .concat(
            CL,
            ` {
   overflow: hidden `
          )
          .concat(
            i,
            `;
   padding-right: `
          )
          .concat(d, "px ")
          .concat(
            i,
            `;
  }
  body[`
          )
          .concat(
            ba,
            `] {
    overflow: hidden `
          )
          .concat(
            i,
            `;
    overscroll-behavior: contain;
    `
          )
          .concat(
            [
              t && "position: relative ".concat(i, ";"),
              n === "margin" &&
                `
    padding-left: `
                  .concat(
                    a,
                    `px;
    padding-top: `
                  )
                  .concat(
                    l,
                    `px;
    padding-right: `
                  )
                  .concat(
                    c,
                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                  )
                  .concat(d, "px ")
                  .concat(
                    i,
                    `;
    `
                  ),
              n === "padding" &&
                "padding-right: ".concat(d, "px ").concat(i, ";"),
            ]
              .filter(Boolean)
              .join(""),
            `
  }
  
  .`
          )
          .concat(
            Su,
            ` {
    right: `
          )
          .concat(d, "px ")
          .concat(
            i,
            `;
  }
  
  .`
          )
          .concat(
            _u,
            ` {
    margin-right: `
          )
          .concat(d, "px ")
          .concat(
            i,
            `;
  }
  
  .`
          )
          .concat(Su, " .")
          .concat(
            Su,
            ` {
    right: 0 `
          )
          .concat(
            i,
            `;
  }
  
  .`
          )
          .concat(_u, " .")
          .concat(
            _u,
            ` {
    margin-right: 0 `
          )
          .concat(
            i,
            `;
  }
  
  body[`
          )
          .concat(
            ba,
            `] {
    `
          )
          .concat(EL, ": ")
          .concat(
            d,
            `px;
  }
`
          )
      );
    },
    jw = function () {
      var e = parseInt(document.body.getAttribute(ba) || "0", 10);
      return isFinite(e) ? e : 0;
    },
    LL = function () {
      x.useEffect(function () {
        return (
          document.body.setAttribute(ba, (jw() + 1).toString()),
          function () {
            var e = jw() - 1;
            e <= 0
              ? document.body.removeAttribute(ba)
              : document.body.setAttribute(ba, e.toString());
          }
        );
      }, []);
    },
    NL = function (e) {
      var t = e.noRelative,
        n = e.noImportant,
        i = e.gapMode,
        a = i === void 0 ? "margin" : i;
      LL();
      var l = x.useMemo(
        function () {
          return DL(a);
        },
        [a]
      );
      return x.createElement(IL, {
        styles: FL(l, !t, a, n ? "" : "!important"),
      });
    },
    lm = !1;
  if (typeof window < "u")
    try {
      var Eu = Object.defineProperty({}, "passive", {
        get: function () {
          return (lm = !0), !0;
        },
      });
      window.addEventListener("test", Eu, Eu),
        window.removeEventListener("test", Eu, Eu);
    } catch {
      lm = !1;
    }
  var xa = lm ? { passive: !1 } : !1,
    $L = function (e) {
      return e.tagName === "TEXTAREA";
    },
    Ow = function (e, t) {
      if (!(e instanceof Element)) return !1;
      var n = window.getComputedStyle(e);
      return (
        n[t] !== "hidden" &&
        !(n.overflowY === n.overflowX && !$L(e) && n[t] === "visible")
      );
    },
    BL = function (e) {
      return Ow(e, "overflowY");
    },
    VL = function (e) {
      return Ow(e, "overflowX");
    },
    Aw = function (e, t) {
      var n = t.ownerDocument,
        i = t;
      do {
        typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
        var a = Tw(e, i);
        if (a) {
          var l = Mw(e, i),
            c = l[1],
            d = l[2];
          if (c > d) return !0;
        }
        i = i.parentNode;
      } while (i && i !== n.body);
      return !1;
    },
    WL = function (e) {
      var t = e.scrollTop,
        n = e.scrollHeight,
        i = e.clientHeight;
      return [t, n, i];
    },
    UL = function (e) {
      var t = e.scrollLeft,
        n = e.scrollWidth,
        i = e.clientWidth;
      return [t, n, i];
    },
    Tw = function (e, t) {
      return e === "v" ? BL(t) : VL(t);
    },
    Mw = function (e, t) {
      return e === "v" ? WL(t) : UL(t);
    },
    HL = function (e, t) {
      return e === "h" && t === "rtl" ? -1 : 1;
    },
    qL = function (e, t, n, i, a) {
      var l = HL(e, window.getComputedStyle(t).direction),
        c = l * i,
        d = n.target,
        p = t.contains(d),
        h = !1,
        g = c > 0,
        v = 0,
        b = 0;
      do {
        var k = Mw(e, d),
          S = k[0],
          w = k[1],
          _ = k[2],
          j = w - _ - l * S;
        (S || j) && Tw(e, d) && ((v += j), (b += S)),
          d instanceof ShadowRoot ? (d = d.host) : (d = d.parentNode);
      } while (
        (!p && d !== document.body) ||
        (p && (t.contains(d) || t === d))
      );
      return (
        ((g && (Math.abs(v) < 1 || !a)) || (!g && (Math.abs(b) < 1 || !a))) &&
          (h = !0),
        h
      );
    },
    Pu = function (e) {
      return "changedTouches" in e
        ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
        : [0, 0];
    },
    zw = function (e) {
      return [e.deltaX, e.deltaY];
    },
    Dw = function (e) {
      return e && "current" in e ? e.current : e;
    },
    KL = function (e, t) {
      return e[0] === t[0] && e[1] === t[1];
    },
    GL = function (e) {
      return `
  .block-interactivity-`
        .concat(
          e,
          ` {pointer-events: none;}
  .allow-interactivity-`
        )
        .concat(
          e,
          ` {pointer-events: all;}
`
        );
    },
    ZL = 0,
    wa = [];
  function XL(e) {
    var t = x.useRef([]),
      n = x.useRef([0, 0]),
      i = x.useRef(),
      a = x.useState(ZL++)[0],
      l = x.useState(Rw)[0],
      c = x.useRef(e);
    x.useEffect(
      function () {
        c.current = e;
      },
      [e]
    ),
      x.useEffect(
        function () {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(a));
            var w = AD(
              [e.lockRef.current],
              (e.shards || []).map(Dw),
              !0
            ).filter(Boolean);
            return (
              w.forEach(function (_) {
                return _.classList.add("allow-interactivity-".concat(a));
              }),
              function () {
                document.body.classList.remove(
                  "block-interactivity-".concat(a)
                ),
                  w.forEach(function (_) {
                    return _.classList.remove("allow-interactivity-".concat(a));
                  });
              }
            );
          }
        },
        [e.inert, e.lockRef.current, e.shards]
      );
    var d = x.useCallback(function (w, _) {
        if (
          ("touches" in w && w.touches.length === 2) ||
          (w.type === "wheel" && w.ctrlKey)
        )
          return !c.current.allowPinchZoom;
        var j = Pu(w),
          O = n.current,
          M = "deltaX" in w ? w.deltaX : O[0] - j[0],
          $ = "deltaY" in w ? w.deltaY : O[1] - j[1],
          E,
          I = w.target,
          L = Math.abs(M) > Math.abs($) ? "h" : "v";
        if ("touches" in w && L === "h" && I.type === "range") return !1;
        var H = Aw(L, I);
        if (!H) return !0;
        if ((H ? (E = L) : ((E = L === "v" ? "h" : "v"), (H = Aw(L, I))), !H))
          return !1;
        if (
          (!i.current && "changedTouches" in w && (M || $) && (i.current = E),
          !E)
        )
          return !0;
        var G = i.current || E;
        return qL(G, _, w, G === "h" ? M : $, !0);
      }, []),
      p = x.useCallback(function (w) {
        var _ = w;
        if (!(!wa.length || wa[wa.length - 1] !== l)) {
          var j = "deltaY" in _ ? zw(_) : Pu(_),
            O = t.current.filter(function (E) {
              return (
                E.name === _.type &&
                (E.target === _.target || _.target === E.shadowParent) &&
                KL(E.delta, j)
              );
            })[0];
          if (O && O.should) {
            _.cancelable && _.preventDefault();
            return;
          }
          if (!O) {
            var M = (c.current.shards || [])
                .map(Dw)
                .filter(Boolean)
                .filter(function (E) {
                  return E.contains(_.target);
                }),
              $ = M.length > 0 ? d(_, M[0]) : !c.current.noIsolation;
            $ && _.cancelable && _.preventDefault();
          }
        }
      }, []),
      h = x.useCallback(function (w, _, j, O) {
        var M = {
          name: w,
          delta: _,
          target: j,
          should: O,
          shadowParent: YL(j),
        };
        t.current.push(M),
          setTimeout(function () {
            t.current = t.current.filter(function ($) {
              return $ !== M;
            });
          }, 1);
      }, []),
      g = x.useCallback(function (w) {
        (n.current = Pu(w)), (i.current = void 0);
      }, []),
      v = x.useCallback(function (w) {
        h(w.type, zw(w), w.target, d(w, e.lockRef.current));
      }, []),
      b = x.useCallback(function (w) {
        h(w.type, Pu(w), w.target, d(w, e.lockRef.current));
      }, []);
    x.useEffect(function () {
      return (
        wa.push(l),
        e.setCallbacks({
          onScrollCapture: v,
          onWheelCapture: v,
          onTouchMoveCapture: b,
        }),
        document.addEventListener("wheel", p, xa),
        document.addEventListener("touchmove", p, xa),
        document.addEventListener("touchstart", g, xa),
        function () {
          (wa = wa.filter(function (w) {
            return w !== l;
          })),
            document.removeEventListener("wheel", p, xa),
            document.removeEventListener("touchmove", p, xa),
            document.removeEventListener("touchstart", g, xa);
        }
      );
    }, []);
    var k = e.removeScrollBar,
      S = e.inert;
    return x.createElement(
      x.Fragment,
      null,
      S ? x.createElement(l, { styles: GL(a) }) : null,
      k ? x.createElement(NL, { gapMode: e.gapMode }) : null
    );
  }
  function YL(e) {
    for (var t = null; e !== null; )
      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
        (e = e.parentNode);
    return t;
  }
  const QL = TD(Pw, XL);
  var Iw = x.forwardRef(function (e, t) {
    return x.createElement(Cu, kn({}, e, { ref: t, sideCar: QL }));
  });
  Iw.classNames = Cu.classNames;
  function JL(e) {
    const {
        autoFocus: t,
        trapFocus: n,
        dialogRef: i,
        initialFocusRef: a,
        blockScrollOnMount: l,
        allowPinchZoom: c,
        finalFocusRef: d,
        returnFocusOnClose: p,
        preserveScrollBarGap: h,
        lockFocusAcrossFrames: g,
        isOpen: v,
      } = ya(),
      [b, k] = Pb();
    x.useEffect(() => {
      !b && k && setTimeout(k);
    }, [b, k]);
    const S = Cw(i, v);
    return R.jsx(Jx, {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: a,
      finalFocusRef: d,
      restoreFocus: p,
      contentRef: i,
      lockFocusAcrossFrames: g,
      children: R.jsx(Iw, {
        removeScrollBar: !h,
        allowPinchZoom: c,
        enabled: S === 1 && l,
        forwardProps: !0,
        children: e.children,
      }),
    });
  }
  const e8 = {
      initial: ({
        offsetX: e,
        offsetY: t,
        transition: n,
        transitionEnd: i,
        delay: a,
      }) => ({
        opacity: 0,
        x: e,
        y: t,
        transition: (n == null ? void 0 : n.exit) ?? oi.exit(ni.exit, a),
        transitionEnd: i == null ? void 0 : i.exit,
      }),
      enter: ({ transition: e, transitionEnd: t, delay: n }) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: (e == null ? void 0 : e.enter) ?? oi.enter(ni.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      }),
      exit: ({
        offsetY: e,
        offsetX: t,
        transition: n,
        transitionEnd: i,
        reverse: a,
        delay: l,
      }) => {
        const c = { x: t, y: e };
        return {
          opacity: 0,
          transition: (n == null ? void 0 : n.exit) ?? oi.exit(ni.exit, l),
          ...(a
            ? { ...c, transitionEnd: i == null ? void 0 : i.exit }
            : { transitionEnd: { ...c, ...(i == null ? void 0 : i.exit) } }),
        };
      },
    },
    vl = { initial: "initial", animate: "enter", exit: "exit", variants: e8 },
    t8 = x.forwardRef(function (e, t) {
      const {
          unmountOnExit: n,
          in: i,
          reverse: a = !0,
          className: l,
          offsetX: c = 0,
          offsetY: d = 8,
          transition: p,
          transitionEnd: h,
          delay: g,
          animatePresenceProps: v,
          ...b
        } = e,
        k = n ? i && n : !0,
        S = i || n ? "enter" : "exit",
        w = {
          offsetX: c,
          offsetY: d,
          reverse: a,
          transition: p,
          transitionEnd: h,
          delay: g,
        };
      return R.jsx(el, {
        ...v,
        custom: w,
        children:
          k &&
          R.jsx(ri.div, {
            ref: t,
            className: ze("chakra-offset-slide", l),
            custom: w,
            ...vl,
            animate: S,
            ...b,
          }),
      });
    });
  t8.displayName = "SlideFade";
  const r8 = {
      exit: ({
        reverse: e,
        initialScale: t,
        transition: n,
        transitionEnd: i,
        delay: a,
      }) => ({
        opacity: 0,
        ...(e
          ? { scale: t, transitionEnd: i == null ? void 0 : i.exit }
          : { transitionEnd: { scale: t, ...(i == null ? void 0 : i.exit) } }),
        transition: (n == null ? void 0 : n.exit) ?? oi.exit(ni.exit, a),
      }),
      enter: ({ transitionEnd: e, transition: t, delay: n }) => ({
        opacity: 1,
        scale: 1,
        transition: (t == null ? void 0 : t.enter) ?? oi.enter(ni.enter, n),
        transitionEnd: e == null ? void 0 : e.enter,
      }),
    },
    Fw = { initial: "exit", animate: "enter", exit: "exit", variants: r8 },
    n8 = x.forwardRef(function (e, t) {
      const {
          unmountOnExit: n,
          in: i,
          reverse: a = !0,
          initialScale: l = 0.95,
          className: c,
          transition: d,
          transitionEnd: p,
          delay: h,
          animatePresenceProps: g,
          ...v
        } = e,
        b = n ? i && n : !0,
        k = i || n ? "enter" : "exit",
        S = {
          initialScale: l,
          reverse: a,
          transition: d,
          transitionEnd: p,
          delay: h,
        };
      return R.jsx(el, {
        ...g,
        custom: S,
        children:
          b &&
          R.jsx(ri.div, {
            ref: t,
            className: ze("chakra-offset-slide", c),
            ...Fw,
            animate: k,
            custom: S,
            ...v,
          }),
      });
    });
  n8.displayName = "ScaleFade";
  const o8 = {
      slideInBottom: { ...vl, custom: { offsetY: 16, reverse: !0 } },
      slideInRight: { ...vl, custom: { offsetX: 16, reverse: !0 } },
      slideInTop: { ...vl, custom: { offsetY: -16, reverse: !0 } },
      slideInLeft: { ...vl, custom: { offsetX: -16, reverse: !0 } },
      scale: { ...Fw, custom: { initialScale: 0.95, reverse: !0 } },
      none: {},
    },
    i8 = Ce(ri.section),
    a8 = (e) => o8[e || "none"],
    Lw = x.forwardRef((e, t) => {
      const { preset: n, motionProps: i = a8(n), ...a } = e;
      return R.jsx(i8, { ref: t, ...i, ...a });
    });
  Lw.displayName = "ModalTransition";
  const Nw = De((e, t) => {
    const {
        className: n,
        children: i,
        containerProps: a,
        motionProps: l,
        ...c
      } = e,
      { getDialogProps: d, getDialogContainerProps: p } = ya(),
      h = d(c, t),
      g = p(a),
      v = ze("chakra-modal__content", n),
      b = gl(),
      k = {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        outline: 0,
        ...b.dialog,
      },
      S = {
        display: "flex",
        width: "100vw",
        height: "$100vh",
        position: "fixed",
        left: 0,
        top: 0,
        ...b.dialogContainer,
      },
      { motionPreset: w } = ya();
    return R.jsx(JL, {
      children: R.jsx(Ce.div, {
        ...g,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: S,
        children: R.jsx(Lw, {
          preset: w,
          motionProps: l,
          className: v,
          ...h,
          __css: k,
          children: i,
        }),
      }),
    });
  });
  Nw.displayName = "ModalContent";
  const $w = De((e, t) => {
    const { className: n, ...i } = e,
      { bodyId: a, setBodyMounted: l } = ya();
    x.useEffect(() => (l(!0), () => l(!1)), [l]);
    const c = ze("chakra-modal__body", n),
      d = gl();
    return R.jsx(Ce.div, { ref: t, className: c, id: a, ...i, __css: d.body });
  });
  $w.displayName = "ModalBody";
  const Bw = De((e, t) => {
    const { className: n, ...i } = e,
      a = ze("chakra-modal__footer", n),
      l = gl(),
      c = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        ...l.footer,
      };
    return R.jsx(Ce.footer, { ref: t, ...i, __css: c, className: a });
  });
  Bw.displayName = "ModalFooter";
  const Vw = De((e, t) => {
    const { className: n, ...i } = e,
      { headerId: a, setHeaderMounted: l } = ya();
    x.useEffect(() => (l(!0), () => l(!1)), [l]);
    const c = ze("chakra-modal__header", n),
      d = gl(),
      p = { flex: 0, ...d.header };
    return R.jsx(Ce.header, { ref: t, className: c, id: a, ...i, __css: p });
  });
  Vw.displayName = "ModalHeader";
  const s8 = {
      enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => ({
        opacity: 1,
        transition: (e == null ? void 0 : e.enter) ?? oi.enter(ni.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      }),
      exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => ({
        opacity: 0,
        transition: (e == null ? void 0 : e.exit) ?? oi.exit(ni.exit, n),
        transitionEnd: t == null ? void 0 : t.exit,
      }),
    },
    Ww = { initial: "exit", animate: "enter", exit: "exit", variants: s8 },
    l8 = x.forwardRef(function (e, t) {
      const {
          unmountOnExit: n,
          in: i,
          className: a,
          transition: l,
          transitionEnd: c,
          delay: d,
          animatePresenceProps: p,
          ...h
        } = e,
        g = i || n ? "enter" : "exit",
        v = n ? i && n : !0,
        b = { transition: l, transitionEnd: c, delay: d };
      return R.jsx(el, {
        ...p,
        custom: b,
        children:
          v &&
          R.jsx(ri.div, {
            ref: t,
            className: ze("chakra-fade", a),
            custom: b,
            ...Ww,
            animate: g,
            ...h,
          }),
      });
    });
  l8.displayName = "Fade";
  const c8 = Ce(ri.div),
    Uw = De((e, t) => {
      const { className: n, transition: i, motionProps: a, ...l } = e,
        c = ze("chakra-modal__overlay", n),
        d = {
          pos: "fixed",
          left: "0",
          top: "0",
          w: "100vw",
          h: "100vh",
          ...gl().overlay,
        },
        { motionPreset: p } = ya(),
        h = a || (p === "none" ? {} : Ww);
      return R.jsx(c8, { ...h, __css: d, ref: t, className: c, ...l });
    });
  Uw.displayName = "ModalOverlay";
  function u8(e) {
    const { leastDestructiveRef: t, ...n } = e;
    return R.jsx(Ew, { ...n, initialFocusRef: t });
  }
  const d8 = De((e, t) => R.jsx(Nw, { ref: t, role: "alertdialog", ...e })),
    [f8, fi] = tr({
      name: "PopoverContext",
      errorMessage:
        "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`",
    }),
    [p8, ka] = tr({
      name: "PopoverStylesContext",
      errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `,
    }),
    Sa = { click: "click", hover: "hover" };
  function h8(e = {}) {
    const {
        closeOnBlur: t = !0,
        closeOnEsc: n = !0,
        initialFocusRef: i,
        id: a,
        returnFocusOnClose: l = !0,
        autoFocus: c = !0,
        arrowSize: d,
        arrowShadowColor: p,
        trigger: h = Sa.click,
        openDelay: g = 200,
        closeDelay: v = 200,
        isLazy: b,
        lazyBehavior: k = "unmount",
        computePositionOnMount: S,
        ...w
      } = e,
      { isOpen: _, onClose: j, onOpen: O, onToggle: M } = Sg(e),
      [$, E] = x.useState(l);
    x.useEffect(() => E(l), [l]);
    const I = x.useRef(null),
      L = x.useRef(null),
      H = x.useRef(null),
      G = x.useRef(!1),
      q = x.useRef(!1);
    _ && (q.current = !0);
    const [ie, he] = x.useState(!1),
      [ve, Ee] = x.useState(!1),
      J = x.useId(),
      re = a ?? J,
      [se, K, ne, te] = [
        "popover-trigger",
        "popover-content",
        "popover-header",
        "popover-body",
      ].map((be) => `${be}-${re}`),
      {
        referenceRef: A,
        getArrowProps: V,
        getPopperProps: Y,
        getArrowInnerProps: oe,
        forceUpdate: pe,
      } = uL({ ...w, enabled: _ || !!S }),
      ye = KC({ isOpen: _, ref: H });
    i2({ enabled: _, ref: L }),
      ZC(H, { focusRef: L, visible: _, shouldFocus: $ && h === Sa.click }),
      YC(H, { focusRef: i, visible: _, shouldFocus: c && h === Sa.click }),
      l2({
        enabled: _ && t,
        ref: H,
        handler(be) {
          var Xe;
          const Ze = ((Xe = be.composedPath) == null
            ? void 0
            : Xe.call(be)[0]) ?? [be.target];
          Ru(L.current, Ze) || (Ze && E(!pc(Ze)), j());
        },
      });
    const de = NC({
        wasSelected: q.current,
        enabled: b,
        mode: k,
        isSelected: ye.present,
      }),
      ge = x.useCallback(
        (be = {}, Ze = null) => {
          const Xe = {
            ...be,
            style: {
              ...be.style,
              transformOrigin: Nt.transformOrigin.varRef,
              [Nt.arrowSize.var]: d ? `${d}px` : void 0,
              [Nt.arrowShadowColor.var]: p,
            },
            ref: rr(H, Ze),
            children: de ? be.children : null,
            id: K,
            tabIndex: -1,
            role: "dialog",
            onKeyDown: et(be.onKeyDown, (Ke) => {
              Ke.nativeEvent.isComposing ||
                (n &&
                  Ke.key === "Escape" &&
                  (Ke.preventDefault(), Ke.stopPropagation(), j()));
            }),
            onBlur: et(be.onBlur, (Ke) => {
              const yt = Hw(Ke),
                Qt = Ru(H.current, yt),
                Bt = Ru(L.current, yt),
                tn = !Qt && !Bt;
              yt && E(!pc(yt)), _ && t && tn && j();
            }),
            "aria-labelledby": ie ? ne : void 0,
            "aria-describedby": ve ? te : void 0,
          };
          return (
            h === Sa.hover &&
              ((Xe.role = "tooltip"),
              (Xe.onMouseEnter = et(be.onMouseEnter, () => {
                G.current = !0;
              })),
              (Xe.onMouseLeave = et(be.onMouseLeave, (Ke) => {
                Ke.nativeEvent.relatedTarget !== null &&
                  ((G.current = !1), setTimeout(() => j(), v));
              }))),
            Xe
          );
        },
        [de, K, ie, ne, ve, te, h, n, j, _, t, v, p, d]
      ),
      Oe = x.useCallback(
        (be = {}, Ze = null) =>
          Y(
            {
              ...be,
              style: { visibility: _ ? "visible" : "hidden", ...be.style },
            },
            Ze
          ),
        [_, Y]
      ),
      Qe = x.useCallback(
        (be, Ze = null) => ({ ...be, ref: rr(Ze, I, A) }),
        [I, A]
      ),
      dt = x.useRef(),
      Yt = x.useRef(),
      $t = x.useCallback(
        (be) => {
          I.current == null && A(be);
        },
        [A]
      ),
      Pe = x.useCallback(
        (be = {}, Ze = null) => {
          const Xe = {
            ...be,
            ref: rr(L, Ze, $t),
            id: se,
            "aria-haspopup": "dialog",
            "aria-expanded": _,
            "aria-controls": K,
          };
          return (
            h === Sa.click && (Xe.onClick = et(be.onClick, M)),
            h === Sa.hover &&
              ((Xe.onFocus = et(be.onFocus, () => {
                dt.current === void 0 && O();
              })),
              (Xe.onBlur = et(be.onBlur, (Ke) => {
                const yt = Hw(Ke),
                  Qt = !Ru(H.current, yt);
                _ && t && Qt && j();
              })),
              (Xe.onKeyDown = et(be.onKeyDown, (Ke) => {
                Ke.key === "Escape" && j();
              })),
              (Xe.onMouseEnter = et(be.onMouseEnter, () => {
                (G.current = !0),
                  (dt.current = window.setTimeout(() => O(), g));
              })),
              (Xe.onMouseLeave = et(be.onMouseLeave, () => {
                (G.current = !1),
                  dt.current &&
                    (clearTimeout(dt.current), (dt.current = void 0)),
                  (Yt.current = window.setTimeout(() => {
                    G.current === !1 && j();
                  }, v));
              }))),
            Xe
          );
        },
        [se, _, K, h, $t, M, O, t, j, g, v]
      );
    x.useEffect(
      () => () => {
        dt.current && clearTimeout(dt.current),
          Yt.current && clearTimeout(Yt.current);
      },
      []
    );
    const qe = x.useCallback(
        (be = {}, Ze = null) => ({
          ...be,
          id: ne,
          ref: rr(Ze, (Xe) => {
            he(!!Xe);
          }),
        }),
        [ne]
      ),
      tt = x.useCallback(
        (be = {}, Ze = null) => ({
          ...be,
          id: te,
          ref: rr(Ze, (Xe) => {
            Ee(!!Xe);
          }),
        }),
        [te]
      );
    return {
      forceUpdate: pe,
      isOpen: _,
      onAnimationComplete: ye.onComplete,
      onClose: j,
      getAnchorProps: Qe,
      getArrowProps: V,
      getArrowInnerProps: oe,
      getPopoverPositionerProps: Oe,
      getPopoverProps: ge,
      getTriggerProps: Pe,
      getHeaderProps: qe,
      getBodyProps: tt,
    };
  }
  function Ru(e, t) {
    return e === t || (e == null ? void 0 : e.contains(t));
  }
  function Hw(e) {
    const t = e.currentTarget.ownerDocument.activeElement;
    return e.relatedTarget ?? t;
  }
  function qw(e) {
    const t = po("Popover", e),
      { children: n, ...i } = nr(e),
      a = I1(),
      l = h8({ ...i, direction: a.direction });
    return R.jsx(f8, {
      value: l,
      children: R.jsx(p8, {
        value: t,
        children: vr(n, {
          isOpen: l.isOpen,
          onClose: l.onClose,
          forceUpdate: l.forceUpdate,
        }),
      }),
    });
  }
  qw.displayName = "Popover";
  const cm = (e, t) => (t ? `${e}.${t}, ${t}` : void 0);
  function Kw(e) {
    const {
        bg: t,
        bgColor: n,
        backgroundColor: i,
        shadow: a,
        boxShadow: l,
        shadowColor: c,
        ...d
      } = e,
      { getArrowProps: p, getArrowInnerProps: h } = fi(),
      g = ka(),
      v = t ?? n ?? i,
      b = a ?? l;
    return R.jsx(Ce.div, {
      ...p(),
      className: "chakra-popover__arrow-positioner",
      children: R.jsx(Ce.div, {
        className: ze("chakra-popover__arrow", e.className),
        ...h(d),
        __css: {
          "--popper-arrow-shadow-color": cm("colors", c),
          "--popper-arrow-bg": cm("colors", v),
          "--popper-arrow-shadow": cm("shadows", b),
          ...g.arrow,
        },
      }),
    });
  }
  Kw.displayName = "PopoverArrow";
  const Gw = De(function (e, t) {
    const { getBodyProps: n } = fi(),
      i = ka();
    return R.jsx(Ce.div, {
      ...n(e, t),
      className: ze("chakra-popover__body", e.className),
      __css: i.body,
    });
  });
  Gw.displayName = "PopoverBody";
  const Zw = De(function (e, t) {
    const { onClose: n } = fi(),
      i = ka();
    return R.jsx(gh, {
      size: "sm",
      onClick: n,
      className: ze("chakra-popover__close-btn", e.className),
      __css: i.closeButton,
      ref: t,
      ...e,
    });
  });
  Zw.displayName = "PopoverCloseButton";
  function m8(e) {
    if (e)
      return {
        enter: { ...e.enter, visibility: "visible" },
        exit: { ...e.exit, transitionEnd: { visibility: "hidden" } },
      };
  }
  const g8 = {
      exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.1, ease: [0.4, 0, 1, 1] },
      },
      enter: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.15, ease: [0, 0, 0.2, 1] },
      },
    },
    v8 = Ce(ri.section),
    Xw = De(function (e, t) {
      const { variants: n = g8, ...i } = e,
        { isOpen: a } = fi();
      return R.jsx(v8, {
        ref: t,
        variants: m8(n),
        initial: !1,
        animate: a ? "enter" : "exit",
        ...i,
      });
    });
  Xw.displayName = "PopoverTransition";
  const Yw = De(function (e, t) {
    const { rootProps: n, motionProps: i, ...a } = e,
      {
        getPopoverProps: l,
        getPopoverPositionerProps: c,
        onAnimationComplete: d,
      } = fi(),
      p = ka(),
      h = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        ...p.content,
      };
    return R.jsx(Ce.div, {
      ...c(n),
      __css: p.popper,
      className: "chakra-popover__popper",
      children: R.jsx(Xw, {
        ...i,
        ...l(a, t),
        onAnimationComplete: jC(d, a.onAnimationComplete),
        className: ze("chakra-popover__content", e.className),
        __css: h,
      }),
    });
  });
  Yw.displayName = "PopoverContent";
  function Qw(e) {
    const t = ka();
    return R.jsx(Ce.footer, {
      ...e,
      className: ze("chakra-popover__footer", e.className),
      __css: t.footer,
    });
  }
  Qw.displayName = "PopoverFooter";
  const Jw = De(function (e, t) {
    const { getHeaderProps: n } = fi(),
      i = ka();
    return R.jsx(Ce.header, {
      ...n(e, t),
      className: ze("chakra-popover__header", e.className),
      __css: i.header,
    });
  });
  Jw.displayName = "PopoverHeader";
  function ek(e) {
    const t = x.Children.only(e.children),
      { getTriggerProps: n } = fi();
    return R.jsx(R.Fragment, {
      children: x.cloneElement(t, n(t.props, t.ref)),
    });
  }
  ek.displayName = "PopoverTrigger";
  const tk = De(function (e, t) {
    const { children: n, placeholder: i, className: a, ...l } = e;
    return R.jsxs(Ce.select, {
      ...l,
      ref: t,
      className: ze("chakra-select", a),
      children: [i && R.jsx("option", { value: "", children: i }), n],
    });
  });
  tk.displayName = "SelectField";
  const rk = De((e, t) => {
    var M;
    const n = po("Select", e),
      {
        rootProps: i,
        placeholder: a,
        icon: l,
        color: c,
        height: d,
        h: p,
        minH: h,
        minHeight: g,
        iconColor: v,
        iconSize: b,
        ...k
      } = nr(e),
      [S, w] = WC(k, W2),
      _ = ux(w),
      j = {
        width: "100%",
        height: "fit-content",
        position: "relative",
        color: c,
      },
      O = {
        paddingEnd: "2rem",
        ...n.field,
        _focus: {
          zIndex: "unset",
          ...((M = n.field) == null ? void 0 : M._focus),
        },
      };
    return R.jsxs(Ce.div, {
      className: "chakra-select__wrapper",
      __css: j,
      ...S,
      ...i,
      children: [
        R.jsx(tk, {
          ref: t,
          height: p ?? d,
          minH: h ?? g,
          placeholder: a,
          ..._,
          __css: O,
          children: e.children,
        }),
        R.jsx(nk, {
          "data-disabled": Ie(_.disabled),
          ...((v || c) && { color: v || c }),
          __css: n.icon,
          ...(b && { fontSize: b }),
          children: l,
        }),
      ],
    });
  });
  rk.displayName = "Select";
  const y8 = (e) =>
      R.jsx("svg", {
        viewBox: "0 0 24 24",
        ...e,
        children: R.jsx("path", {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
        }),
      }),
    b8 = Ce("div", {
      baseStyle: {
        position: "absolute",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        top: "50%",
        transform: "translateY(-50%)",
      },
    }),
    nk = (e) => {
      const { children: t = R.jsx(y8, {}), ...n } = e,
        i = x.cloneElement(t, {
          role: "presentation",
          className: "chakra-select__icon",
          focusable: !1,
          "aria-hidden": !0,
          style: { width: "1em", height: "1em", color: "currentColor" },
        });
      return R.jsx(b8, {
        ...n,
        className: "chakra-select__icon-wrapper",
        children: x.isValidElement(t) ? i : null,
      });
    };
  nk.displayName = "SelectIcon";
  const ok = (e) =>
    R.jsx(Ce.div, {
      className: "chakra-stack__item",
      ...e,
      __css: {
        display: "inline-block",
        flex: "0 0 auto",
        minWidth: 0,
        ...e.__css,
      },
    });
  ok.displayName = "StackItem";
  function x8(e) {
    const { spacing: t, direction: n } = e,
      i = {
        column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
        "column-reverse": {
          my: t,
          mx: 0,
          borderLeftWidth: 0,
          borderBottomWidth: "1px",
        },
        row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
        "row-reverse": {
          mx: t,
          my: 0,
          borderLeftWidth: "1px",
          borderBottomWidth: 0,
        },
      };
    return { "&": BC(n, (a) => i[a]) };
  }
  const um = De((e, t) => {
    const {
        isInline: n,
        direction: i,
        align: a,
        justify: l,
        spacing: c = "0.5rem",
        wrap: d,
        children: p,
        divider: h,
        className: g,
        shouldWrapChildren: v,
        ...b
      } = e,
      k = n ? "row" : i ?? "column",
      S = x.useMemo(() => x8({ spacing: c, direction: k }), [c, k]),
      w = !!h,
      _ = !v && !w,
      j = x.useMemo(() => {
        const M = vg(p);
        return _
          ? M
          : M.map(($, E) => {
              const I = typeof $.key < "u" ? $.key : E,
                L = E + 1 === M.length,
                H = v ? R.jsx(ok, { children: $ }, I) : $;
              if (!w) return H;
              const G = x.cloneElement(h, { __css: S }),
                q = L ? null : G;
              return R.jsxs(x.Fragment, { children: [H, q] }, I);
            });
      }, [h, S, w, _, v, p]),
      O = ze("chakra-stack", g);
    return R.jsx(Ce.div, {
      ref: t,
      display: "flex",
      alignItems: a,
      justifyContent: l,
      flexDirection: k,
      flexWrap: d,
      gap: w ? void 0 : c,
      className: O,
      ...b,
      children: j,
    });
  });
  um.displayName = "Stack";
  const ju = De((e, t) =>
    R.jsx(um, { align: "center", ...e, direction: "row", ref: t })
  );
  ju.displayName = "HStack";
  const ik = De(function (e, t) {
    const n = po("Switch", e),
      { spacing: i = "0.5rem", children: a, ...l } = nr(e),
      {
        getIndicatorProps: c,
        getInputProps: d,
        getCheckboxProps: p,
        getRootProps: h,
        getLabelProps: g,
      } = SD(l),
      v = x.useMemo(
        () => ({
          display: "inline-block",
          position: "relative",
          verticalAlign: "middle",
          lineHeight: 0,
          ...n.container,
        }),
        [n.container]
      ),
      b = x.useMemo(
        () => ({
          display: "inline-flex",
          flexShrink: 0,
          justifyContent: "flex-start",
          boxSizing: "content-box",
          cursor: "pointer",
          ...n.track,
        }),
        [n.track]
      ),
      k = x.useMemo(
        () => ({ userSelect: "none", marginStart: i, ...n.label }),
        [i, n.label]
      );
    return R.jsxs(Ce.label, {
      ...h(),
      className: ze("chakra-switch", e.className),
      __css: v,
      children: [
        R.jsx("input", { className: "chakra-switch__input", ...d({}, t) }),
        R.jsx(Ce.span, {
          ...p(),
          className: "chakra-switch__track",
          __css: b,
          children: R.jsx(Ce.span, {
            __css: n.thumb,
            className: "chakra-switch__thumb",
            ...c(),
          }),
        }),
        a &&
          R.jsx(Ce.span, {
            className: "chakra-switch__label",
            ...g(),
            __css: k,
            children: a,
          }),
      ],
    });
  });
  ik.displayName = "Switch";
  function w8(e, t) {
    var i;
    const n = e ?? "bottom";
    return (
      ((i = {
        "top-start": { ltr: "top-left", rtl: "top-right" },
        "top-end": { ltr: "top-right", rtl: "top-left" },
        "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
        "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" },
      }[n]) == null
        ? void 0
        : i[t]) ?? n
    );
  }
  function k8(e, t) {
    const n = (a) => ({
        ...t,
        ...a,
        position: w8(
          (a == null ? void 0 : a.position) ??
            (t == null ? void 0 : t.position),
          e
        ),
      }),
      i = (a) => {
        const l = n(a),
          c = q1(l);
        return wn.notify(c, l);
      };
    return (
      (i.update = (a, l) => {
        wn.update(a, n(l));
      }),
      (i.promise = (a, l) => {
        const c = i({ ...l.loading, status: "loading", duration: null });
        a.then((d) =>
          i.update(c, { status: "success", duration: 5e3, ...vr(l.success, d) })
        ).catch((d) =>
          i.update(c, { status: "error", duration: 5e3, ...vr(l.error, d) })
        );
      }),
      (i.closeAll = wn.closeAll),
      (i.close = wn.close),
      (i.isActive = wn.isActive),
      i
    );
  }
  function ak(e) {
    const { theme: t } = F1(),
      n = Qz();
    return x.useMemo(
      () => k8(t.direction, { ...n, ...e }),
      [e, t.direction, n]
    );
  }
  const _a = De(function (e, t) {
    const n = fo("Heading", e),
      { className: i, ...a } = nr(e);
    return R.jsx(Ce.h2, {
      ref: t,
      className: ze("chakra-heading", e.className),
      ...a,
      __css: n,
    });
  });
  _a.displayName = "Heading";
  const en = De(function (e, t) {
    const n = fo("Text", e),
      { className: i, align: a, decoration: l, casing: c, ...d } = nr(e),
      p = fc({
        textAlign: e.align,
        textDecoration: e.decoration,
        textTransform: e.casing,
      });
    return R.jsx(Ce.p, {
      ref: t,
      className: ze("chakra-text", e.className),
      ...p,
      ...d,
      __css: n,
    });
  });
  en.displayName = "Text";
  var Ou = {},
    sk;
  function S8() {
    if (sk) return Ou;
    sk = 1;
    var e = ex();
    return (Ou.createRoot = e.createRoot), (Ou.hydrateRoot = e.hydrateRoot), Ou;
  }
  var _8 = S8();
  function C8(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function lk(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (a) {
          return Object.getOwnPropertyDescriptor(e, a).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function ck(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? lk(Object(n), !0).forEach(function (i) {
            C8(e, i, n[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : lk(Object(n)).forEach(function (i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
          });
    }
    return e;
  }
  function E8(e, t) {
    if (e == null) return {};
    var n = {},
      i = Object.keys(e),
      a,
      l;
    for (l = 0; l < i.length; l++)
      (a = i[l]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
    return n;
  }
  function P8(e, t) {
    if (e == null) return {};
    var n = E8(e, t),
      i,
      a;
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (a = 0; a < l.length; a++)
        (i = l[a]),
          !(t.indexOf(i) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(e, i) &&
            (n[i] = e[i]);
    }
    return n;
  }
  function R8(e, t) {
    return j8(e) || O8(e, t) || A8(e, t) || T8();
  }
  function j8(e) {
    if (Array.isArray(e)) return e;
  }
  function O8(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
      var n = [],
        i = !0,
        a = !1,
        l = void 0;
      try {
        for (
          var c = e[Symbol.iterator](), d;
          !(i = (d = c.next()).done) &&
          (n.push(d.value), !(t && n.length === t));
          i = !0
        );
      } catch (p) {
        (a = !0), (l = p);
      } finally {
        try {
          !i && c.return != null && c.return();
        } finally {
          if (a) throw l;
        }
      }
      return n;
    }
  }
  function A8(e, t) {
    if (e) {
      if (typeof e == "string") return uk(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
      )
        return Array.from(e);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return uk(e, t);
    }
  }
  function uk(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function T8() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function M8(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function dk(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (a) {
          return Object.getOwnPropertyDescriptor(e, a).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function fk(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? dk(Object(n), !0).forEach(function (i) {
            M8(e, i, n[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dk(Object(n)).forEach(function (i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
          });
    }
    return e;
  }
  function z8() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (i) {
      return t.reduceRight(function (a, l) {
        return l(a);
      }, i);
    };
  }
  function yl(e) {
    return function t() {
      for (
        var n = this, i = arguments.length, a = new Array(i), l = 0;
        l < i;
        l++
      )
        a[l] = arguments[l];
      return a.length >= e.length
        ? e.apply(this, a)
        : function () {
            for (var c = arguments.length, d = new Array(c), p = 0; p < c; p++)
              d[p] = arguments[p];
            return t.apply(n, [].concat(a, d));
          };
    };
  }
  function Au(e) {
    return {}.toString.call(e).includes("Object");
  }
  function D8(e) {
    return !Object.keys(e).length;
  }
  function bl(e) {
    return typeof e == "function";
  }
  function I8(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function F8(e, t) {
    return (
      Au(t) || mo("changeType"),
      Object.keys(t).some(function (n) {
        return !I8(e, n);
      }) && mo("changeField"),
      t
    );
  }
  function L8(e) {
    bl(e) || mo("selectorType");
  }
  function N8(e) {
    bl(e) || Au(e) || mo("handlerType"),
      Au(e) &&
        Object.values(e).some(function (t) {
          return !bl(t);
        }) &&
        mo("handlersType");
  }
  function $8(e) {
    e || mo("initialIsRequired"),
      Au(e) || mo("initialType"),
      D8(e) && mo("initialContent");
  }
  function B8(e, t) {
    throw new Error(e[t] || e.default);
  }
  var V8 = {
      initialIsRequired: "initial state is required",
      initialType: "initial state should be an object",
      initialContent: "initial state shouldn't be an empty object",
      handlerType: "handler should be an object or a function",
      handlersType: "all handlers should be a functions",
      selectorType: "selector should be a function",
      changeType: "provided value of changes should be an object",
      changeField:
        'it seams you want to change a field in the state which is not specified in the "initial" state',
      default: "an unknown error accured in `state-local` package",
    },
    mo = yl(B8)(V8),
    Tu = { changes: F8, selector: L8, handler: N8, initial: $8 };
  function W8(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Tu.initial(e), Tu.handler(t);
    var n = { current: e },
      i = yl(q8)(n, t),
      a = yl(H8)(n),
      l = yl(Tu.changes)(e),
      c = yl(U8)(n);
    function d() {
      var h =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : function (g) {
              return g;
            };
      return Tu.selector(h), h(n.current);
    }
    function p(h) {
      z8(i, a, l, c)(h);
    }
    return [d, p];
  }
  function U8(e, t) {
    return bl(t) ? t(e.current) : t;
  }
  function H8(e, t) {
    return (e.current = fk(fk({}, e.current), t)), t;
  }
  function q8(e, t, n) {
    return (
      bl(t)
        ? t(e.current)
        : Object.keys(n).forEach(function (i) {
            var a;
            return (a = t[i]) === null || a === void 0
              ? void 0
              : a.call(t, e.current[i]);
          }),
      n
    );
  }
  var K8 = { create: W8 },
    G8 = {
      paths: { vs: "local" },
    };
  function Z8(e) {
    return function t() {
      for (
        var n = this, i = arguments.length, a = new Array(i), l = 0;
        l < i;
        l++
      )
        a[l] = arguments[l];
      return a.length >= e.length
        ? e.apply(this, a)
        : function () {
            for (var c = arguments.length, d = new Array(c), p = 0; p < c; p++)
              d[p] = arguments[p];
            return t.apply(n, [].concat(a, d));
          };
    };
  }
  function X8(e) {
    return {}.toString.call(e).includes("Object");
  }
  function Y8(e) {
    return (
      e || hk("configIsRequired"),
      X8(e) || hk("configType"),
      e.urls ? (Q8(), { paths: { vs: e.urls.monacoBase } }) : e
    );
  }
  function Q8() {
    console.warn(pk.deprecation);
  }
  function J8(e, t) {
    throw new Error(e[t] || e.default);
  }
  var pk = {
      configIsRequired: "the configuration object is required",
      configType: "the configuration object should be an object",
      default: "an unknown error accured in `@monaco-editor/loader` package",
      deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
    },
    hk = Z8(J8)(pk),
    eN = { config: Y8 },
    tN = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (i) {
        return t.reduceRight(function (a, l) {
          return l(a);
        }, i);
      };
    };
  function mk(e, t) {
    return (
      Object.keys(t).forEach(function (n) {
        t[n] instanceof Object && e[n] && Object.assign(t[n], mk(e[n], t[n]));
      }),
      ck(ck({}, e), t)
    );
  }
  var rN = { type: "cancelation", msg: "operation is manually canceled" };
  function dm(e) {
    var t = !1,
      n = new Promise(function (i, a) {
        e.then(function (l) {
          return t ? a(rN) : i(l);
        }),
          e.catch(a);
      });
    return (
      (n.cancel = function () {
        return (t = !0);
      }),
      n
    );
  }
  var nN = K8.create({
      config: G8,
      isInitialized: !1,
      resolve: null,
      reject: null,
      monaco: null,
    }),
    gk = R8(nN, 2),
    xl = gk[0],
    Mu = gk[1];
  function oN(e) {
    var t = eN.config(e),
      n = t.monaco,
      i = P8(t, ["monaco"]);
    Mu(function (a) {
      return { config: mk(a.config, i), monaco: n };
    });
  }
  function iN() {
    var e = xl(function (t) {
      var n = t.monaco,
        i = t.isInitialized,
        a = t.resolve;
      return { monaco: n, isInitialized: i, resolve: a };
    });
    if (!e.isInitialized) {
      if ((Mu({ isInitialized: !0 }), e.monaco))
        return e.resolve(e.monaco), dm(fm);
      if (window.monaco && window.monaco.editor)
        return vk(window.monaco), e.resolve(window.monaco), dm(fm);
      tN(aN, lN)(cN);
    }
    return dm(fm);
  }
  function aN(e) {
    return document.body.appendChild(e);
  }
  function sN(e) {
    var t = document.createElement("script");
    return e && (t.src = e), t;
  }
  function lN(e) {
    var t = xl(function (i) {
        var a = i.config,
          l = i.reject;
        return { config: a, reject: l };
      }),
      n = sN("".concat(t.config.paths.vs, "/loader.js"));
    return (
      (n.onload = function () {
        return e();
      }),
      (n.onerror = t.reject),
      n
    );
  }
  function cN() {
    var e = xl(function (n) {
        var i = n.config,
          a = n.resolve,
          l = n.reject;
        return { config: i, resolve: a, reject: l };
      }),
      t = window.require;
    t.config(e.config),
      t(
        ["vs/editor/editor.main"],
        function (n) {
          vk(n), e.resolve(n);
        },
        function (n) {
          e.reject(n);
        }
      );
  }
  function vk(e) {
    xl().monaco || Mu({ monaco: e });
  }
  function uN() {
    return xl(function (e) {
      var t = e.monaco;
      return t;
    });
  }
  var fm = new Promise(function (e, t) {
      return Mu({ resolve: e, reject: t });
    }),
    yk = { config: oN, init: iN, __getMonacoInstance: uN },
    dN = {
      wrapper: { display: "flex", position: "relative", textAlign: "initial" },
      fullWidth: { width: "100%" },
      hide: { display: "none" },
    },
    pm = dN,
    fN = {
      container: {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    pN = fN;
  function hN({ children: e }) {
    return pt.createElement("div", { style: pN.container }, e);
  }
  var mN = hN,
    gN = mN;
  function vN({
    width: e,
    height: t,
    isEditorReady: n,
    loading: i,
    _ref: a,
    className: l,
    wrapperProps: c,
  }) {
    return pt.createElement(
      "section",
      { style: { ...pm.wrapper, width: e, height: t }, ...c },
      !n && pt.createElement(gN, null, i),
      pt.createElement("div", {
        ref: a,
        style: { ...pm.fullWidth, ...(!n && pm.hide) },
        className: l,
      })
    );
  }
  var yN = vN,
    bk = x.memo(yN);
  function bN(e) {
    x.useEffect(e, []);
  }
  var xk = bN;
  function xN(e, t, n = !0) {
    let i = x.useRef(!0);
    x.useEffect(
      i.current || !n
        ? () => {
            i.current = !1;
          }
        : e,
      t
    );
  }
  var Sr = xN;
  function wl() {}
  function Ca(e, t, n, i) {
    return wN(e, i) || kN(e, t, n, i);
  }
  function wN(e, t) {
    return e.editor.getModel(wk(e, t));
  }
  function kN(e, t, n, i) {
    return e.editor.createModel(t, n, i ? wk(e, i) : void 0);
  }
  function wk(e, t) {
    return e.Uri.parse(t);
  }
  function SN({
    original: e,
    modified: t,
    language: n,
    originalLanguage: i,
    modifiedLanguage: a,
    originalModelPath: l,
    modifiedModelPath: c,
    keepCurrentOriginalModel: d = !1,
    keepCurrentModifiedModel: p = !1,
    theme: h = "light",
    loading: g = "加载中···",
    options: v = {},
    height: b = "100%",
    width: k = "100%",
    className: S,
    wrapperProps: w = {},
    beforeMount: _ = wl,
    onMount: j = wl,
  }) {
    let [O, M] = x.useState(!1),
      [$, E] = x.useState(!0),
      I = x.useRef(null),
      L = x.useRef(null),
      H = x.useRef(null),
      G = x.useRef(j),
      q = x.useRef(_),
      ie = x.useRef(!1);
    xk(() => {
      let J = yk.init();
      return (
        J.then((re) => (L.current = re) && E(!1)).catch(
          (re) =>
            (re == null ? void 0 : re.type) !== "cancelation" &&
            console.error("Monaco initialization: error:", re)
        ),
        () => (I.current ? Ee() : J.cancel())
      );
    }),
      Sr(
        () => {
          if (I.current && L.current) {
            let J = I.current.getOriginalEditor(),
              re = Ca(L.current, e || "", i || n || "text", l || "");
            re !== J.getModel() && J.setModel(re);
          }
        },
        [l],
        O
      ),
      Sr(
        () => {
          if (I.current && L.current) {
            let J = I.current.getModifiedEditor(),
              re = Ca(L.current, t || "", a || n || "text", c || "");
            re !== J.getModel() && J.setModel(re);
          }
        },
        [c],
        O
      ),
      Sr(
        () => {
          let J = I.current.getModifiedEditor();
          J.getOption(L.current.editor.EditorOption.readOnly)
            ? J.setValue(t || "")
            : t !== J.getValue() &&
              (J.executeEdits("", [
                {
                  range: J.getModel().getFullModelRange(),
                  text: t || "",
                  forceMoveMarkers: !0,
                },
              ]),
              J.pushUndoStop());
        },
        [t],
        O
      ),
      Sr(
        () => {
          var J, re;
          (re = (J = I.current) == null ? void 0 : J.getModel()) == null ||
            re.original.setValue(e || "");
        },
        [e],
        O
      ),
      Sr(
        () => {
          let { original: J, modified: re } = I.current.getModel();
          L.current.editor.setModelLanguage(J, i || n || "text"),
            L.current.editor.setModelLanguage(re, a || n || "text");
        },
        [n, i, a],
        O
      ),
      Sr(
        () => {
          var J;
          (J = L.current) == null || J.editor.setTheme(h);
        },
        [h],
        O
      ),
      Sr(
        () => {
          var J;
          (J = I.current) == null || J.updateOptions(v);
        },
        [v],
        O
      );
    let he = x.useCallback(() => {
        var se;
        if (!L.current) return;
        q.current(L.current);
        let J = Ca(L.current, e || "", i || n || "text", l || ""),
          re = Ca(L.current, t || "", a || n || "text", c || "");
        (se = I.current) == null || se.setModel({ original: J, modified: re });
      }, [n, t, a, e, i, l, c]),
      ve = x.useCallback(() => {
        var J;
        !ie.current &&
          H.current &&
          ((I.current = L.current.editor.createDiffEditor(H.current, {
            automaticLayout: !0,
            ...v,
          })),
          he(),
          (J = L.current) == null || J.editor.setTheme(h),
          M(!0),
          (ie.current = !0));
      }, [v, h, he]);
    x.useEffect(() => {
      O && G.current(I.current, L.current);
    }, [O]),
      x.useEffect(() => {
        !$ && !O && ve();
      }, [$, O, ve]);
    function Ee() {
      var re, se, K, ne;
      let J = (re = I.current) == null ? void 0 : re.getModel();
      d || (se = J == null ? void 0 : J.original) == null || se.dispose(),
        p || (K = J == null ? void 0 : J.modified) == null || K.dispose(),
        (ne = I.current) == null || ne.dispose();
    }
    return pt.createElement(bk, {
      width: k,
      height: b,
      isEditorReady: O,
      loading: g,
      _ref: H,
      className: S,
      wrapperProps: w,
    });
  }
  var _N = SN;
  x.memo(_N);
  function CN(e) {
    let t = x.useRef();
    return (
      x.useEffect(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  }
  var EN = CN,
    zu = new Map();
  function PN({
    defaultValue: e,
    defaultLanguage: t,
    defaultPath: n,
    value: i,
    language: a,
    path: l,
    theme: c = "light",
    line: d,
    loading: p = "加载中···",
    options: h = {},
    overrideServices: g = {},
    saveViewState: v = !0,
    keepCurrentModel: b = !1,
    width: k = "100%",
    height: S = "100%",
    className: w,
    wrapperProps: _ = {},
    beforeMount: j = wl,
    onMount: O = wl,
    onChange: M,
    onValidate: $ = wl,
  }) {
    let [E, I] = x.useState(!1),
      [L, H] = x.useState(!0),
      G = x.useRef(null),
      q = x.useRef(null),
      ie = x.useRef(null),
      he = x.useRef(O),
      ve = x.useRef(j),
      Ee = x.useRef(),
      J = x.useRef(i),
      re = EN(l),
      se = x.useRef(!1),
      K = x.useRef(!1);
    xk(() => {
      let A = yk.init();
      return (
        A.then((V) => (G.current = V) && H(!1)).catch(
          (V) =>
            (V == null ? void 0 : V.type) !== "cancelation" &&
            console.error("Monaco 初始化：错误：", V)
        ),
        () => (q.current ? te() : A.cancel())
      );
    }),
      Sr(
        () => {
          var V, Y, oe, pe;
          let A = Ca(G.current, e || i || "", t || a || "", l || n || "");
          A !== ((V = q.current) == null ? void 0 : V.getModel()) &&
            (v &&
              zu.set(re, (Y = q.current) == null ? void 0 : Y.saveViewState()),
            (oe = q.current) == null || oe.setModel(A),
            v && ((pe = q.current) == null || pe.restoreViewState(zu.get(l))));
        },
        [l],
        E
      ),
      Sr(
        () => {
          var A;
          (A = q.current) == null || A.updateOptions(h);
        },
        [h],
        E
      ),
      Sr(
        () => {
          !q.current ||
            i === void 0 ||
            (q.current.getOption(G.current.editor.EditorOption.readOnly)
              ? q.current.setValue(i)
              : i !== q.current.getValue() &&
                ((K.current = !0),
                q.current.executeEdits("", [
                  {
                    range: q.current.getModel().getFullModelRange(),
                    text: i,
                    forceMoveMarkers: !0,
                  },
                ]),
                q.current.pushUndoStop(),
                (K.current = !1)));
        },
        [i],
        E
      ),
      Sr(
        () => {
          var V, Y;
          let A = (V = q.current) == null ? void 0 : V.getModel();
          A &&
            a &&
            ((Y = G.current) == null || Y.editor.setModelLanguage(A, a));
        },
        [a],
        E
      ),
      Sr(
        () => {
          var A;
          d !== void 0 && ((A = q.current) == null || A.revealLine(d));
        },
        [d],
        E
      ),
      Sr(
        () => {
          var A;
          (A = G.current) == null || A.editor.setTheme(c);
        },
        [c],
        E
      );
    let ne = x.useCallback(() => {
      var A;
      if (!(!ie.current || !G.current) && !se.current) {
        ve.current(G.current);
        let V = l || n,
          Y = Ca(G.current, i || e || "", t || a || "", V || "");
        (q.current =
          (A = G.current) == null
            ? void 0
            : A.editor.create(
                ie.current,
                { model: Y, automaticLayout: !0, ...h },
                g
              )),
          v && q.current.restoreViewState(zu.get(V)),
          G.current.editor.setTheme(c),
          d !== void 0 && q.current.revealLine(d),
          I(!0),
          (se.current = !0);
      }
    }, [e, t, n, i, a, l, h, g, v, c, d]);
    x.useEffect(() => {
      E && he.current(q.current, G.current);
    }, [E]),
      x.useEffect(() => {
        !L && !E && ne();
      }, [L, E, ne]),
      (J.current = i),
      x.useEffect(() => {
        var A, V;
        E &&
          M &&
          ((A = Ee.current) == null || A.dispose(),
          (Ee.current =
            (V = q.current) == null
              ? void 0
              : V.onDidChangeModelContent((Y) => {
                  K.current || M(q.current.getValue(), Y);
                })));
      }, [E, M]),
      x.useEffect(() => {
        if (E) {
          let A = G.current.editor.onDidChangeMarkers((V) => {
            var oe;
            let Y = (oe = q.current.getModel()) == null ? void 0 : oe.uri;
            if (Y && V.find((pe) => pe.path === Y.path)) {
              let pe = G.current.editor.getModelMarkers({ resource: Y });
              $ == null || $(pe);
            }
          });
          return () => {
            A == null || A.dispose();
          };
        }
        return () => {};
      }, [E, $]);
    function te() {
      var A, V;
      (A = Ee.current) == null || A.dispose(),
        b
          ? v && zu.set(l, q.current.saveViewState())
          : (V = q.current.getModel()) == null || V.dispose(),
        q.current.dispose();
    }
    return pt.createElement(bk, {
      width: k,
      height: S,
      isEditorReady: E,
      loading: p,
      _ref: ie,
      className: w,
      wrapperProps: _,
    });
  }
  var RN = PN,
    jN = x.memo(RN),
    ON = jN,
    kk = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    Sk = pt.createContext && pt.createContext(kk),
    AN = ["attr", "size", "title"];
  function TN(e, t) {
    if (e == null) return {};
    var n = MN(e, t),
      i,
      a;
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (a = 0; a < l.length; a++)
        (i = l[a]),
          !(t.indexOf(i) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(e, i) &&
            (n[i] = e[i]);
    }
    return n;
  }
  function MN(e, t) {
    if (e == null) return {};
    var n = {};
    for (var i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        if (t.indexOf(i) >= 0) continue;
        n[i] = e[i];
      }
    return n;
  }
  function Du() {
    return (
      (Du = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
      Du.apply(this, arguments)
    );
  }
  function _k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (a) {
          return Object.getOwnPropertyDescriptor(e, a).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function Iu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? _k(Object(n), !0).forEach(function (i) {
            zN(e, i, n[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _k(Object(n)).forEach(function (i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
          });
    }
    return e;
  }
  function zN(e, t, n) {
    return (
      (t = DN(t)),
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function DN(e) {
    var t = IN(e, "string");
    return typeof t == "symbol" ? t : t + "";
  }
  function IN(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var i = n.call(e, t || "default");
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function Ck(e) {
    return (
      e &&
      e.map((t, n) =>
        pt.createElement(t.tag, Iu({ key: n }, t.attr), Ck(t.child))
      )
    );
  }
  function go(e) {
    return (t) =>
      pt.createElement(FN, Du({ attr: Iu({}, e.attr) }, t), Ck(e.child));
  }
  function FN(e) {
    var t = (n) => {
      var { attr: i, size: a, title: l } = e,
        c = TN(e, AN),
        d = a || n.size || "1em",
        p;
      return (
        n.className && (p = n.className),
        e.className && (p = (p ? p + " " : "") + e.className),
        pt.createElement(
          "svg",
          Du(
            { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
            n.attr,
            i,
            c,
            {
              className: p,
              style: Iu(Iu({ color: e.color || n.color }, n.style), e.style),
              height: d,
              width: d,
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          l && pt.createElement("title", null, l),
          e.children
        )
      );
    };
    return Sk !== void 0
      ? pt.createElement(Sk.Consumer, null, (n) => t(n))
      : t(kk);
  }
  function LN(e) {
    return go({
      tag: "svg",
      attr: { viewBox: "0 0 16 16", fill: "currentColor" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function NN(e) {
    return go({
      tag: "svg",
      attr: { viewBox: "0 0 16 16", fill: "currentColor" },
      child: [
        {
          tag: "path",
          attr: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function $N(e) {
    return go({
      tag: "svg",
      attr: { viewBox: "0 0 16 16", fill: "currentColor" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031 3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062 0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765 4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062 3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function BN(e) {
    return go({
      tag: "svg",
      attr: { viewBox: "0 0 16 16", fill: "currentColor" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M1.5 14h11l.48-.37 2.63-7-.48-.63H14V3.5l-.5-.5H7.71l-.86-.85L6.5 2h-5l-.5.5v11l.5.5zM2 3h4.29l.86.85.35.15H13v2H8.5l-.35.15-.86.85H3.5l-.47.34-1 3.08L2 3zm10.13 10H2.19l1.67-5H7.5l.35-.15.86-.85h5.79l-2.37 6z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function VN(e) {
    return go({
      tag: "svg",
      attr: { viewBox: "0 0 16 16", fill: "currentColor" },
      child: [
        {
          tag: "path",
          attr: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.57 1.14l3.28 3.3.15.36v9.7l-.5.5h-11l-.5-.5v-13l.5-.5h7.72l.35.14zM10 5h3l-3-3v3zM3 2v12h10V6H9.5L9 5.5V2H3zm2.062 7.533l1.817-1.828L6.17 7 4 9.179v.707l2.171 2.174.707-.707-1.816-1.82zM8.8 7.714l.7-.709 2.189 2.175v.709L9.5 12.062l-.705-.709 1.831-1.82L8.8 7.714z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function WN(e) {
    return go({
      tag: "svg",
      attr: { viewBox: "0 0 16 16", fill: "currentColor" },
      child: [
        {
          tag: "path",
          attr: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.904 9.57L8.928 5.596l3.976-3.976-.619-.62L8 5.286v.619l4.285 4.285.62-.618zM3 5.62l4.072 4.07L3 13.763l.619.618L8 10v-.619L3.619 5 3 5.619z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function UN(e) {
    return go({
      tag: "svg",
      attr: { viewBox: "0 0 16 16", fill: "currentColor" },
      child: [
        {
          tag: "path",
          attr: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 10V1.5l-.5-.5H3.74a1.9 1.9 0 0 0-.67.13 1.77 1.77 0 0 0-.94 1 1.7 1.7 0 0 0-.13.62v9.5a1.7 1.7 0 0 0 .13.67c.177.427.515.768.94.95a1.9 1.9 0 0 0 .67.13H4v-1h-.26a.72.72 0 0 1-.29-.06.74.74 0 0 1-.4-.4.93.93 0 0 1-.05-.29v-.5a.93.93 0 0 1 .05-.29.74.74 0 0 1 .4-.4.72.72 0 0 1 .286-.06H13v2H9v1h4.5l.5-.5V10zM4 10V2h9v8H4zm1-7h1v1H5V3zm0 2h1v1H5V5zm1 2H5v1h1V7zm.5 6.49L5.28 15H5v-3h3v3h-.28L6.5 13.49z",
          },
          child: [],
        },
      ],
    })(e);
  }
  const Ea = new Map();
  function hm(e, t) {
    const n = t == null ? void 0 : t.serializer,
      [i] = x.useState(t == null ? void 0 : t.defaultValue),
      [a] = x.useState(t == null ? void 0 : t.defaultServerValue);
    return HN(
      e,
      i,
      a,
      t == null ? void 0 : t.storageSync,
      n == null ? void 0 : n.parse,
      n == null ? void 0 : n.stringify
    );
  }
  function HN(e, t, n, i = !0, a = qN, l = JSON.stringify) {
    const c = x.useRef({ string: null, parsed: void 0 }),
      d = x.useSyncExternalStore(
        x.useCallback(
          (g) => {
            const v = (b) => {
              e === b && g();
            };
            return (
              mm.add(v),
              () => {
                mm.delete(v);
              }
            );
          },
          [e]
        ),
        () => {
          const g = Fu(() => localStorage.getItem(e)) ?? null;
          if (Ea.has(e)) c.current.parsed = Ea.get(e);
          else if (g !== c.current.string) {
            let v;
            try {
              v = g === null ? t : a(g);
            } catch {
              v = t;
            }
            c.current.parsed = v;
          }
          return (
            (c.current.string = g),
            t !== void 0 &&
              g === null &&
              Fu(() => {
                const v = l(t);
                localStorage.setItem(e, v),
                  (c.current = { string: v, parsed: t });
              }),
            c.current.parsed
          );
        },
        () => n ?? t
      ),
      p = x.useCallback(
        (g) => {
          const v = g instanceof Function ? g(c.current.parsed) : g;
          try {
            localStorage.setItem(e, l(v)), Ea.delete(e);
          } catch {
            Ea.set(e, v);
          }
          gm(e);
        },
        [e, l]
      ),
      h = x.useCallback(() => {
        Fu(() => localStorage.removeItem(e)), Ea.delete(e), gm(e);
      }, [e]);
    return (
      x.useEffect(() => {
        if (!i) return;
        const g = (v) => {
          v.key === e && v.storageArea === Fu(() => localStorage) && gm(e);
        };
        return (
          window.addEventListener("storage", g),
          () => window.removeEventListener("storage", g)
        );
      }, [e, i]),
      x.useMemo(
        () => [d, p, { isPersistent: d === t || !Ea.has(e), removeItem: h }],
        [e, p, d, t, h]
      )
    );
  }
  const mm = new Set();
  function gm(e) {
    for (const t of [...mm]) t(e);
  }
  function qN(e) {
    return e === "undefined" ? void 0 : JSON.parse(e);
  }
  function Fu(e) {
    try {
      return e();
    } catch {}
  }
  const KN = `//! Eventually consistent server-side logic for Rustpad.

use std::collections::HashMap;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};

use anyhow::{bail, Context, Result};
use futures::prelude::*;
use log::{info, warn};
use operational_transform::OperationSeq;
use parking_lot::{RwLock, RwLockUpgradableReadGuard};
use serde::{Deserialize, Serialize};
use tokio::sync::{broadcast, Notify};
use warp::ws::{Message, WebSocket};

use crate::{database::PersistedDocument, ot::transform_index};

/// The main object representing a collaborative session.
pub struct Rustpad {
    /// State modified by critical sections of the code.
    state: RwLock<State>,
    /// Incremented to obtain unique user IDs.
    count: AtomicU64,
    /// Used to notify clients of new text operations.
    notify: Notify,
    /// Used to inform all clients of metadata updates.
    update: broadcast::Sender<ServerMsg>,
    /// Set to true when the document is destroyed.
    killed: AtomicBool,
}

/// Shared state involving multiple users, protected by a lock.
#[derive(Default)]
struct State {
    operations: Vec<UserOperation>,
    text: String,
    language: Option<String>,
    users: HashMap<u64, UserInfo>,
    cursors: HashMap<u64, CursorData>,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
struct UserOperation {
    id: u64,
    operation: OperationSeq,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
struct UserInfo {
    name: String,
    hue: u32,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
struct CursorData {
    cursors: Vec<u32>,
    selections: Vec<(u32, u32)>,
}

/// A message received from the client over WebSocket.
#[derive(Clone, Debug, Serialize, Deserialize)]
enum ClientMsg {
    /// Represents a sequence of local edits from the user.
    Edit {
        revision: usize,
        operation: OperationSeq,
    },
    /// Sets the language of the editor.
    SetLanguage(String),
    /// Sets the user's current information.
    ClientInfo(UserInfo),
    /// Sets the user's cursor and selection positions.
    CursorData(CursorData),
}

/// A message sent to the client over WebSocket.
#[derive(Clone, Debug, Serialize, Deserialize)]
enum ServerMsg {
    /// Informs the client of their unique socket ID.
    Identity(u64),
    /// Broadcasts text operations to all clients.
    History {
        start: usize,
        operations: Vec<UserOperation>,
    },
    /// Broadcasts the current language, last writer wins.
    Language(String),
    /// Broadcasts a user's information, or \`None\` on disconnect.
    UserInfo { id: u64, info: Option<UserInfo> },
    /// Broadcasts a user's cursor position.
    UserCursor { id: u64, data: CursorData },
}

impl From<ServerMsg> for Message {
    fn from(msg: ServerMsg) -> Self {
        let serialized = serde_json::to_string(&msg).expect("failed serialize");
        Message::text(serialized)
    }
}

impl Default for Rustpad {
    fn default() -> Self {
        let (tx, _) = broadcast::channel(16);
        Self {
            state: Default::default(),
            count: Default::default(),
            notify: Default::default(),
            update: tx,
            killed: AtomicBool::new(false),
        }
    }
}

impl From<PersistedDocument> for Rustpad {
    fn from(document: PersistedDocument) -> Self {
        let mut operation = OperationSeq::default();
        operation.insert(&document.text);

        let rustpad = Self::default();
        {
            let mut state = rustpad.state.write();
            state.text = document.text;
            state.language = document.language;
            state.operations.push(UserOperation {
                id: u64::MAX,
                operation,
            })
        }
        rustpad
    }
}

impl Rustpad {
    /// Handle a connection from a WebSocket.
    pub async fn on_connection(&self, socket: WebSocket) {
        let id = self.count.fetch_add(1, Ordering::Relaxed);
        info!("connection! id = {}", id);
        if let Err(e) = self.handle_connection(id, socket).await {
            warn!("connection terminated early: {}", e);
        }
        info!("disconnection, id = {}", id);
        self.state.write().users.remove(&id);
        self.state.write().cursors.remove(&id);
        self.update
            .send(ServerMsg::UserInfo { id, info: None })
            .ok();
    }

    /// Returns a snapshot of the latest text.
    pub fn text(&self) -> String {
        let state = self.state.read();
        state.text.clone()
    }

    /// Returns a snapshot of the current document for persistence.
    pub fn snapshot(&self) -> PersistedDocument {
        let state = self.state.read();
        PersistedDocument {
            text: state.text.clone(),
            language: state.language.clone(),
        }
    }

    /// Returns the current revision.
    pub fn revision(&self) -> usize {
        let state = self.state.read();
        state.operations.len()
    }

    /// Kill this object immediately, dropping all current connections.
    pub fn kill(&self) {
        self.killed.store(true, Ordering::Relaxed);
        self.notify.notify_waiters();
    }

    /// Returns if this Rustpad object has been killed.
    pub fn killed(&self) -> bool {
        self.killed.load(Ordering::Relaxed)
    }

    async fn handle_connection(&self, id: u64, mut socket: WebSocket) -> Result<()> {
        let mut update_rx = self.update.subscribe();

        let mut revision: usize = self.send_initial(id, &mut socket).await?;

        loop {
            // In order to avoid the "lost wakeup" problem, we first request a
            // notification, **then** check the current state for new revisions.
            // This is the same approach that \`tokio::sync::watch\` takes.
            let notified = self.notify.notified();
            if self.killed() {
                break;
            }
            if self.revision() > revision {
                revision = self.send_history(revision, &mut socket).await?
            }

            tokio::select! {
                _ = notified => {}
                update = update_rx.recv() => {
                    socket.send(update?.into()).await?;
                }
                result = socket.next() => {
                    match result {
                        None => break,
                        Some(message) => {
                            self.handle_message(id, message?).await?;
                        }
                    }
                }
            }
        }

        Ok(())
    }

    async fn send_initial(&self, id: u64, socket: &mut WebSocket) -> Result<usize> {
        socket.send(ServerMsg::Identity(id).into()).await?;
        let mut messages = Vec::new();
        let revision = {
            let state = self.state.read();
            if !state.operations.is_empty() {
                messages.push(ServerMsg::History {
                    start: 0,
                    operations: state.operations.clone(),
                });
            }
            if let Some(language) = &state.language {
                messages.push(ServerMsg::Language(language.clone()));
            }
            for (&id, info) in &state.users {
                messages.push(ServerMsg::UserInfo {
                    id,
                    info: Some(info.clone()),
                });
            }
            for (&id, data) in &state.cursors {
                messages.push(ServerMsg::UserCursor {
                    id,
                    data: data.clone(),
                });
            }
            state.operations.len()
        };
        for msg in messages {
            socket.send(msg.into()).await?;
        }
        Ok(revision)
    }

    async fn send_history(&self, start: usize, socket: &mut WebSocket) -> Result<usize> {
        let operations = {
            let state = self.state.read();
            let len = state.operations.len();
            if start < len {
                state.operations[start..].to_owned()
            } else {
                Vec::new()
            }
        };
        let num_ops = operations.len();
        if num_ops > 0 {
            let msg = ServerMsg::History { start, operations };
            socket.send(msg.into()).await?;
        }
        Ok(start + num_ops)
    }

    async fn handle_message(&self, id: u64, message: Message) -> Result<()> {
        let msg: ClientMsg = match message.to_str() {
            Ok(text) => serde_json::from_str(text).context("failed to deserialize message")?,
            Err(()) => return Ok(()), // Ignore non-text messages
        };
        match msg {
            ClientMsg::Edit {
                revision,
                operation,
            } => {
                self.apply_edit(id, revision, operation)
                    .context("invalid edit operation")?;
                self.notify.notify_waiters();
            }
            ClientMsg::SetLanguage(language) => {
                self.state.write().language = Some(language.clone());
                self.update.send(ServerMsg::Language(language)).ok();
            }
            ClientMsg::ClientInfo(info) => {
                self.state.write().users.insert(id, info.clone());
                let msg = ServerMsg::UserInfo {
                    id,
                    info: Some(info),
                };
                self.update.send(msg).ok();
            }
            ClientMsg::CursorData(data) => {
                self.state.write().cursors.insert(id, data.clone());
                let msg = ServerMsg::UserCursor { id, data };
                self.update.send(msg).ok();
            }
        }
        Ok(())
    }

    fn apply_edit(&self, id: u64, revision: usize, mut operation: OperationSeq) -> Result<()> {
        info!(
            "edit: id = {}, revision = {}, base_len = {}, target_len = {}",
            id,
            revision,
            operation.base_len(),
            operation.target_len()
        );
        let state = self.state.upgradable_read();
        let len = state.operations.len();
        if revision > len {
            bail!("got revision {}, but current is {}", revision, len);
        }
        for history_op in &state.operations[revision..] {
            operation = operation.transform(&history_op.operation)?.0;
        }
        if operation.target_len() > 256 * 1024 {
            bail!(
                "target length {} is greater than 256 KiB maximum",
                operation.target_len()
            );
        }
        let new_text = operation.apply(&state.text)?;
        let mut state = RwLockUpgradableReadGuard::upgrade(state);
        for (_, data) in state.cursors.iter_mut() {
            for cursor in data.cursors.iter_mut() {
                *cursor = transform_index(&operation, *cursor);
            }
            for (start, end) in data.selections.iter_mut() {
                *start = transform_index(&operation, *start);
                *end = transform_index(&operation, *end);
            }
        }
        state.operations.push(UserOperation { id, operation });
        state.text = new_text;
        Ok(())
    }
}
`,
    GN = "54e4a9383c84d7317af42a7ddb177ce8bcba058d".slice(0, 7);
  function ZN() {
    return R.jsx(si, {
      h: "22px",
      bgColor: "#0071c3",
      color: "white",
      children: R.jsxs(si, {
        h: "100%",
        bgColor: "#09835c",
        pl: 2.5,
        pr: 4,
        fontSize: "sm",
        align: "center",
        children: [
          R.jsx(Jr, { as: WN, mb: -0.5, mr: 1 }),
          R.jsxs(en, { fontSize: "xs", children: ["Rustpad (", GN, ")"] }),
        ],
      }),
    });
  }
  function XN({ isOpen: e, onClose: t, onConfirm: n }) {
    const i = x.useRef(null);
    return R.jsx(u8, {
      isOpen: e,
      leastDestructiveRef: i,
      onClose: t,
      children: R.jsx(Uw, {
        children: R.jsxs(d8, {
          children: [
            R.jsx(Vw, { children: "Clear editor" }),
            R.jsx($w, {
              children:
                "Opening Rustpad's source code will clear the existing shared content. Is this okay?",
            }),
            R.jsxs(Bw, {
              children: [
                R.jsx(ii, { ref: i, onClick: t, children: "Cancel" }),
                R.jsx(ii, {
                  colorScheme: "red",
                  onClick: n,
                  ml: 3,
                  children: "Clear",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }
  function YN({ connection: e, darkMode: t }) {
    return R.jsxs(ju, {
      spacing: 1,
      children: [
        R.jsx(Jr, {
          as: $N,
          color: {
            connected: "green.500",
            disconnected: "orange.500",
            desynchronized: "red.500",
          }[e],
        }),
        R.jsx(en, {
          fontSize: "sm",
          fontStyle: "italic",
          color: t ? "gray.300" : "gray.600",
          children: {
            connected: "你已连接！",
            disconnected: "正在连接到服务器···",
            desynchronized: "Disconnected, please refresh.",
          }[e],
        }),
      ],
    });
  }
  function QN(e) {
    return go({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Ek({
    info: e,
    isMe: t = !1,
    onChangeName: n,
    onChangeColor: i,
    darkMode: a,
  }) {
    const l = x.useRef(null),
      { isOpen: c, onOpen: d, onClose: p } = Sg(),
      h = `hsl(${e.hue}, 90%, ${a ? "70%" : "25%"})`;
    return R.jsxs(qw, {
      placement: "right",
      isOpen: c,
      onClose: p,
      initialFocusRef: l,
      children: [
        R.jsx(ek, {
          children: R.jsxs(ju, {
            p: 2,
            rounded: "md",
            _hover: { bgColor: a ? "#464647" : "gray.200", cursor: "pointer" },
            onClick: () => t && d(),
            children: [
              R.jsx(Jr, { as: LN }),
              R.jsx(en, { fontWeight: "medium", color: h, children: e.name }),
              t && R.jsx(en, { children: "(你)" }),
            ],
          }),
        }),
        R.jsxs(Yw, {
          bgColor: a ? "#333333" : "white",
          borderColor: a ? "#464647" : "gray.200",
          children: [
            R.jsx(Jw, {
              fontWeight: "semibold",
              borderColor: a ? "#464647" : "gray.200",
              children: "更新信息",
            }),
            R.jsx(Kw, { bgColor: a ? "#333333" : "white" }),
            R.jsx(Zw, {}),
            R.jsxs(Gw, {
              borderColor: a ? "#464647" : "gray.200",
              children: [
                R.jsx(mu, {
                  ref: l,
                  mb: 2,
                  value: e.name,
                  maxLength: 25,
                  onChange: (g) => (n == null ? void 0 : n(g.target.value)),
                }),
                R.jsx(ii, {
                  size: "sm",
                  w: "100%",
                  leftIcon: R.jsx(QN, {}),
                  colorScheme: a ? "whiteAlpha" : "gray",
                  onClick: i,
                  children: "更改颜色",
                }),
              ],
            }),
            R.jsx(Qw, {
              display: "flex",
              justifyContent: "flex-end",
              borderColor: a ? "#464647" : "gray.200",
              children: R.jsx(ix, {
                size: "sm",
                children: R.jsx(ii, {
                  colorScheme: "blue",
                  onClick: p,
                  children: "完成",
                }),
              }),
            }),
          ],
        }),
      ],
    });
  }
  const Pk = [
    "纯文本",
    "markdown",
  ];
  function JN({
    documentId: e,
    connection: t,
    darkMode: n,
    language: i,
    currentUser: a,
    users: l,
    onDarkModeChange: c,
    onLanguageChange: d,
    onLoadSample: p,
    onChangeName: h,
    onChangeColor: g,
  }) {
    const v = ak(),
      b = `${window.location.origin}/#${e}`;
    async function k() {
      await navigator.clipboard.writeText(b),
        v({
          title: "Copied!",
          description: "Link copied to clipboard",
          status: "success",
          duration: 2e3,
          isClosable: !0,
        });
    }
    return R.jsxs(fx, {
      w: { base: "3xs", md: "2xs", lg: "xs" },
      display: { base: "none", sm: "block" },
      bgColor: n ? "#252526" : "#f3f3f3",
      overflowY: "auto",
      maxW: "full",
      lineHeight: 1.4,
      py: 4,
      children: [
        R.jsx(YN, { darkMode: n, connection: t }),
        R.jsxs(si, {
          justifyContent: "space-between",
          mt: 4,
          mb: 1.5,
          w: "full",
          children: [
            R.jsx(_a, { size: "sm", children: "深色模式" }),
            R.jsx(ik, { isChecked: n, onChange: c }),
          ],
        }),
        R.jsx(_a, { mt: 4, mb: 1.5, size: "sm", children: "文本格式" }),
        R.jsx(rk, {
          size: "sm",
          bgColor: n ? "#3c3c3c" : "white",
          borderColor: n ? "#3c3c3c" : "white",
          value: i,
          onChange: (S) => d(S.target.value),
          children: Pk.map((S) =>
            R.jsx(
              "option",
              { value: S, style: { color: "black" }, children: S },
              S
            )
          ),
        }),
        R.jsx(_a, { mt: 4, mb: 1.5, size: "sm", children: "分享链接" }),
        R.jsxs(ew, {
          size: "sm",
          children: [
            R.jsx(mu, {
              readOnly: !0,
              pr: "3.5rem",
              variant: "outline",
              bgColor: n ? "#3c3c3c" : "white",
              borderColor: n ? "#3c3c3c" : "white",
              value: b,
            }),
            R.jsx(Gh, {
              width: "3.5rem",
              children: R.jsx(ii, {
                h: "1.4rem",
                size: "xs",
                onClick: k,
                _hover: { bg: n ? "#575759" : "gray.200" },
                bgColor: n ? "#575759" : "gray.200",
                color: n ? "white" : "inherit",
                children: "Copy",
              }),
            }),
          ],
        }),
        R.jsx(_a, { mt: 4, mb: 1.5, size: "sm", children: "当前用户" }),
        R.jsxs(um, {
          spacing: 0,
          mb: 1.5,
          fontSize: "sm",
          children: [
            R.jsx(Ek, {
              info: a,
              isMe: !0,
              onChangeName: h,
              onChangeColor: g,
              darkMode: n,
            }),
            Object.entries(l).map(([S, w]) =>
              R.jsx(Ek, { info: w, darkMode: n }, S)
            ),
          ],
        }),
        R.jsx(_a, { mt: 4, mb: 1.5, size: "sm", children: "关于" }),
        R.jsxs(en, {
          fontSize: "sm",
          mb: 1.5,
          children: [
            R.jsx("strong", { children: "Rustpad" }),
            " 是一个开源的协同文本编辑器，基于",
            R.jsx("em", { children: "操作转换(Operational Transformation)" }),
            "算法。",
          ],
        }),
        R.jsx(en, {
          fontSize: "sm",
          mb: 1.5,
          children:
            "将此文档的链接分享给其他人，他们就可以在浏览器中与你同时编辑，并实时看到你的修改。",
        }),
        R.jsxs(en, {
          fontSize: "sm",
          mb: 1.5,
          children: [
            "使用 Rust 和 TypeScript 构建。可到",
            " ",
            R.jsx(rw, {
              color: "blue.600",
              fontWeight: "semibold",
              href: "https://github.com/ekzhang/rustpad",
              isExternal: !0,
              children: "GitHub 仓库",
            }),
            " ",
            "请查详情。",
          ],
        }),
        R.jsx(ii, {
          size: "sm",
          colorScheme: n ? "whiteAlpha" : "blackAlpha",
          borderColor: n ? "purple.400" : "purple.600",
          color: n ? "purple.400" : "purple.600",
          variant: "outline",
          leftIcon: R.jsx(UN, {}),
          mt: 1,
          onClick: p,
          children: "阅读源码",
        }),
      ],
    });
  }
  const Rk = [
    "Alligator",
    "Ant",
    "Anteater",
    "Antelope",
    "Arctic Fox",
    "Armadillo",
    "Badger",
    "Bat",
    "Beaver",
    "Bee",
    "Beetle",
    "Black Bear",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Cat",
    "Chameleon",
    "Cheetah",
    "Chicken",
    "Cicada",
    "Clam",
    "Cockatoo",
    "Cockroach",
    "Cow",
    "Coyote",
    "Crab",
    "Cricket",
    "Crow",
    "Deer",
    "Dog",
    "Dolphin",
    "Donkey",
    "Dove",
    "Dragonfly",
    "Duck",
    "Eagle",
    "Eel",
    "Elephant",
    "Ferret",
    "Fish",
    "Fly",
    "Fox",
    "Frog",
    "Gazelle",
    "Goat",
    "Grasshopper",
    "Grizzly Bear",
    "Groundhog",
    "Guinea Pig",
    "Hedgehog",
    "Hen",
    "Hippopotamus",
    "Horse",
    "Hummingbird",
    "Hyena",
    "Koala",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Lynx",
    "Meerkat",
    "Mole",
    "Moose",
    "Moth",
    "Mouse",
    "Octopus",
    "Orangutan",
    "Orca",
    "Ostrich",
    "Owl",
    "Panda Bear",
    "Panther",
    "Parrot",
    "Penguin",
    "Pig",
    "Pigeon",
    "Polar Bear",
    "Rabbit",
    "Raccoon",
    "Reindeer",
    "Robin",
    "Sea Lion",
    "Sea Otter",
    "Seagull",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrimp",
    "Slug",
    "Snail",
    "Snake",
    "Sparrow",
    "Squid",
    "Squirrel",
    "Starfish",
    "Swan",
    "Tiger",
    "Turkey",
    "Turtle",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Water Buffalo",
    "Weasel",
    "Weaver",
    "Whale",
    "Wildcat",
    "Wilddog",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodpecker",
  ];
  var vm, jk;
  function e$() {
    if (jk) return vm;
    jk = 1;
    var e = "Expected a function",
      t = NaN,
      n = "[object Symbol]",
      i = /^\s+|\s+$/g,
      a = /^[-+]0x[0-9a-f]+$/i,
      l = /^0b[01]+$/i,
      c = /^0o[0-7]+$/i,
      d = parseInt,
      p = typeof to == "object" && to && to.Object === Object && to,
      h = typeof self == "object" && self && self.Object === Object && self,
      g = p || h || Function("return this")(),
      v = Object.prototype,
      b = v.toString,
      k = Math.max,
      S = Math.min,
      w = function () {
        return g.Date.now();
      };
    function _(E, I, L) {
      var H,
        G,
        q,
        ie,
        he,
        ve,
        Ee = 0,
        J = !1,
        re = !1,
        se = !0;
      if (typeof E != "function") throw new TypeError(e);
      (I = $(I) || 0),
        j(L) &&
          ((J = !!L.leading),
          (re = "maxWait" in L),
          (q = re ? k($(L.maxWait) || 0, I) : q),
          (se = "trailing" in L ? !!L.trailing : se));
      function K(de) {
        var ge = H,
          Oe = G;
        return (H = G = void 0), (Ee = de), (ie = E.apply(Oe, ge)), ie;
      }
      function ne(de) {
        return (Ee = de), (he = setTimeout(V, I)), J ? K(de) : ie;
      }
      function te(de) {
        var ge = de - ve,
          Oe = de - Ee,
          Qe = I - ge;
        return re ? S(Qe, q - Oe) : Qe;
      }
      function A(de) {
        var ge = de - ve,
          Oe = de - Ee;
        return ve === void 0 || ge >= I || ge < 0 || (re && Oe >= q);
      }
      function V() {
        var de = w();
        if (A(de)) return Y(de);
        he = setTimeout(V, te(de));
      }
      function Y(de) {
        return (he = void 0), se && H ? K(de) : ((H = G = void 0), ie);
      }
      function oe() {
        he !== void 0 && clearTimeout(he), (Ee = 0), (H = ve = G = he = void 0);
      }
      function pe() {
        return he === void 0 ? ie : Y(w());
      }
      function ye() {
        var de = w(),
          ge = A(de);
        if (((H = arguments), (G = this), (ve = de), ge)) {
          if (he === void 0) return ne(ve);
          if (re) return (he = setTimeout(V, I)), K(ve);
        }
        return he === void 0 && (he = setTimeout(V, I)), ie;
      }
      return (ye.cancel = oe), (ye.flush = pe), ye;
    }
    function j(E) {
      var I = typeof E;
      return !!E && (I == "object" || I == "function");
    }
    function O(E) {
      return !!E && typeof E == "object";
    }
    function M(E) {
      return typeof E == "symbol" || (O(E) && b.call(E) == n);
    }
    function $(E) {
      if (typeof E == "number") return E;
      if (M(E)) return t;
      if (j(E)) {
        var I = typeof E.valueOf == "function" ? E.valueOf() : E;
        E = j(I) ? I + "" : I;
      }
      if (typeof E != "string") return E === 0 ? E : +E;
      E = E.replace(i, "");
      var L = l.test(E);
      return L || c.test(E) ? d(E.slice(2), L ? 2 : 8) : a.test(E) ? t : +E;
    }
    return (vm = _), vm;
  }
  var t$ = e$();
  const r$ = dc(t$),
    n$ = "" + new URL("rustpad_wasm_bg-znMKsAIm.wasm", import.meta.url).href,
    o$ = async (e = {}, t) => {
      let n;
      if (t.startsWith("data:")) {
        const i = t.replace(/^data:.*?base64,/, "");
        let a;
        if (typeof Buffer == "function" && typeof Buffer.from == "function")
          a = Buffer.from(i, "base64");
        else if (typeof atob == "function") {
          const l = atob(i);
          a = new Uint8Array(l.length);
          for (let c = 0; c < l.length; c++) a[c] = l.charCodeAt(c);
        } else throw new Error("Cannot decode base64-encoded data URL");
        n = await WebAssembly.instantiate(a, e);
      } else {
        const i = await fetch(t),
          a = i.headers.get("Content-Type") || "";
        if (
          "instantiateStreaming" in WebAssembly &&
          a.startsWith("application/wasm")
        )
          n = await WebAssembly.instantiateStreaming(i, e);
        else {
          const l = await i.arrayBuffer();
          n = await WebAssembly.instantiate(l, e);
        }
      }
      return n.instance.exports;
    };
  let je;
  function i$(e) {
    je = e;
  }
  const Un = new Array(128).fill(void 0);
  Un.push(void 0, null, !0, !1);
  function Ok(e) {
    return Un[e];
  }
  let kl = Un.length;
  function a$(e) {
    e < 132 || ((Un[e] = kl), (kl = e));
  }
  function s$(e) {
    const t = Ok(e);
    return a$(e), t;
  }
  const l$ =
    typeof TextDecoder > "u"
      ? (0, module.require)("util").TextDecoder
      : TextDecoder;
  let Ak = new l$("utf-8", { ignoreBOM: !0, fatal: !0 });
  Ak.decode();
  let Lu = null;
  function Nu() {
    return (
      (Lu === null || Lu.byteLength === 0) &&
        (Lu = new Uint8Array(je.memory.buffer)),
      Lu
    );
  }
  function $u(e, t) {
    return (e = e >>> 0), Ak.decode(Nu().subarray(e, e + t));
  }
  function Tk(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
    return e.ptr;
  }
  let pi = 0;
  const c$ =
    typeof TextEncoder > "u"
      ? (0, module.require)("util").TextEncoder
      : TextEncoder;
  let Bu = new c$("utf-8");
  const u$ =
    typeof Bu.encodeInto == "function"
      ? function (e, t) {
          return Bu.encodeInto(e, t);
        }
      : function (e, t) {
          const n = Bu.encode(e);
          return t.set(n), { read: e.length, written: n.length };
        };
  function Sl(e, t, n) {
    if (n === void 0) {
      const d = Bu.encode(e),
        p = t(d.length, 1) >>> 0;
      return (
        Nu()
          .subarray(p, p + d.length)
          .set(d),
        (pi = d.length),
        p
      );
    }
    let i = e.length,
      a = t(i, 1) >>> 0;
    const l = Nu();
    let c = 0;
    for (; c < i; c++) {
      const d = e.charCodeAt(c);
      if (d > 127) break;
      l[a + c] = d;
    }
    if (c !== i) {
      c !== 0 && (e = e.slice(c)),
        (a = n(a, i, (i = c + e.length * 3), 1) >>> 0);
      const d = Nu().subarray(a + c, a + i),
        p = u$(e, d);
      (c += p.written), (a = n(a, i, c, 1) >>> 0);
    }
    return (pi = c), a;
  }
  let Vu = null;
  function Pa() {
    return (
      (Vu === null || Vu.byteLength === 0) &&
        (Vu = new Int32Array(je.memory.buffer)),
      Vu
    );
  }
  function d$(e) {
    kl === Un.length && Un.push(Un.length + 1);
    const t = kl;
    return (kl = Un[t]), (Un[t] = e), t;
  }
  const Mk =
    typeof FinalizationRegistry > "u"
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => je.__wbg_opseq_free(e >>> 0));
  class ur {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create(ur.prototype);
      return (n.__wbg_ptr = t), Mk.register(n, n.__wbg_ptr, n), n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return (this.__wbg_ptr = 0), Mk.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      je.__wbg_opseq_free(t);
    }
    static new() {
      const t = je.opseq_new();
      return ur.__wrap(t);
    }
    static with_capacity(t) {
      const n = je.opseq_with_capacity(t);
      return ur.__wrap(n);
    }
    compose(t) {
      Tk(t, ur);
      const n = je.opseq_compose(this.__wbg_ptr, t.__wbg_ptr);
      return n === 0 ? void 0 : ur.__wrap(n);
    }
    delete(t) {
      je.opseq_delete(this.__wbg_ptr, t);
    }
    insert(t) {
      const n = Sl(t, je.__wbindgen_malloc, je.__wbindgen_realloc),
        i = pi;
      je.opseq_insert(this.__wbg_ptr, n, i);
    }
    retain(t) {
      je.opseq_retain(this.__wbg_ptr, t);
    }
    transform(t) {
      Tk(t, ur);
      const n = je.opseq_transform(this.__wbg_ptr, t.__wbg_ptr);
      return n === 0 ? void 0 : ym.__wrap(n);
    }
    apply(t) {
      try {
        const a = je.__wbindgen_add_to_stack_pointer(-16),
          l = Sl(t, je.__wbindgen_malloc, je.__wbindgen_realloc),
          c = pi;
        je.opseq_apply(a, this.__wbg_ptr, l, c);
        var n = Pa()[a / 4 + 0],
          i = Pa()[a / 4 + 1];
        let d;
        return (
          n !== 0 && ((d = $u(n, i).slice()), je.__wbindgen_free(n, i * 1, 1)),
          d
        );
      } finally {
        je.__wbindgen_add_to_stack_pointer(16);
      }
    }
    invert(t) {
      const n = Sl(t, je.__wbindgen_malloc, je.__wbindgen_realloc),
        i = pi,
        a = je.opseq_invert(this.__wbg_ptr, n, i);
      return ur.__wrap(a);
    }
    is_noop() {
      return je.opseq_is_noop(this.__wbg_ptr) !== 0;
    }
    base_len() {
      return je.opseq_base_len(this.__wbg_ptr) >>> 0;
    }
    target_len() {
      return je.opseq_target_len(this.__wbg_ptr) >>> 0;
    }
    transform_index(t) {
      return je.opseq_transform_index(this.__wbg_ptr, t) >>> 0;
    }
    static from_str(t) {
      const n = Sl(t, je.__wbindgen_malloc, je.__wbindgen_realloc),
        i = pi,
        a = je.opseq_from_str(n, i);
      return a === 0 ? void 0 : ur.__wrap(a);
    }
    to_string() {
      let t, n;
      try {
        const l = je.__wbindgen_add_to_stack_pointer(-16);
        je.opseq_to_string(l, this.__wbg_ptr);
        var i = Pa()[l / 4 + 0],
          a = Pa()[l / 4 + 1];
        return (t = i), (n = a), $u(i, a);
      } finally {
        je.__wbindgen_add_to_stack_pointer(16), je.__wbindgen_free(t, n, 1);
      }
    }
  }
  const zk =
    typeof FinalizationRegistry > "u"
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => je.__wbg_opseqpair_free(e >>> 0));
  class ym {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create(ym.prototype);
      return (n.__wbg_ptr = t), zk.register(n, n.__wbg_ptr, n), n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return (this.__wbg_ptr = 0), zk.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      je.__wbg_opseqpair_free(t);
    }
    first() {
      const t = je.opseqpair_first(this.__wbg_ptr);
      return ur.__wrap(t);
    }
    second() {
      const t = je.opseqpair_second(this.__wbg_ptr);
      return ur.__wrap(t);
    }
  }
  function f$(e) {
    s$(e);
  }
  function p$() {
    const e = new Error();
    return d$(e);
  }
  function h$(e, t) {
    const n = Ok(t).stack,
      i = Sl(n, je.__wbindgen_malloc, je.__wbindgen_realloc),
      a = pi;
    (Pa()[e / 4 + 1] = a), (Pa()[e / 4 + 0] = i);
  }
  function m$(e, t) {
    let n, i;
    try {
      (n = e), (i = t), console.error($u(e, t));
    } finally {
      je.__wbindgen_free(n, i, 1);
    }
  }
  function g$(e, t) {
    throw new Error($u(e, t));
  }
  URL = globalThis.URL;
  const st = await o$(
      {
        "./rustpad_wasm_bg.js": {
          __wbindgen_object_drop_ref: f$,
          __wbg_new_abda76e883ba8a5f: p$,
          __wbg_stack_658279fe44541cf6: h$,
          __wbg_error_f851667af71bcfc6: m$,
          __wbindgen_throw: g$,
        },
      },
      n$
    ),
    v$ = st.memory,
    y$ = st.set_panic_hook,
    b$ = st.__wbg_opseq_free,
    x$ = st.__wbg_opseqpair_free,
    w$ = st.opseq_new,
    k$ = st.opseq_with_capacity,
    S$ = st.opseq_compose,
    _$ = st.opseq_delete,
    C$ = st.opseq_insert,
    E$ = st.opseq_retain,
    P$ = st.opseq_transform,
    R$ = st.opseq_apply,
    j$ = st.opseq_invert,
    O$ = st.opseq_is_noop,
    A$ = st.opseq_base_len,
    T$ = st.opseq_target_len,
    M$ = st.opseq_transform_index,
    z$ = st.opseq_from_str,
    D$ = st.opseq_to_string,
    I$ = st.opseqpair_first,
    F$ = st.opseqpair_second,
    L$ = st.__wbindgen_malloc,
    N$ = st.__wbindgen_realloc,
    $$ = st.__wbindgen_add_to_stack_pointer,
    B$ = st.__wbindgen_free,
    V$ = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          __wbg_opseq_free: b$,
          __wbg_opseqpair_free: x$,
          __wbindgen_add_to_stack_pointer: $$,
          __wbindgen_free: B$,
          __wbindgen_malloc: L$,
          __wbindgen_realloc: N$,
          memory: v$,
          opseq_apply: R$,
          opseq_base_len: A$,
          opseq_compose: S$,
          opseq_delete: _$,
          opseq_from_str: z$,
          opseq_insert: C$,
          opseq_invert: j$,
          opseq_is_noop: O$,
          opseq_new: w$,
          opseq_retain: E$,
          opseq_target_len: T$,
          opseq_to_string: D$,
          opseq_transform: P$,
          opseq_transform_index: M$,
          opseq_with_capacity: k$,
          opseqpair_first: I$,
          opseqpair_second: F$,
          set_panic_hook: y$,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    );
  i$(V$);
  class W$ {
    constructor(t) {
      (this.options = t),
        (this.recentFailures = 0),
        (this.me = -1),
        (this.revision = 0),
        (this.users = {}),
        (this.userCursors = {}),
        (this.cursorData = { cursors: [], selections: [] }),
        (this.lastValue = ""),
        (this.ignoreChanges = !1),
        (this.oldDecorations = []),
        (this.model = t.editor.getModel()),
        (this.onChangeHandle = t.editor.onDidChangeModelContent((a) =>
          this.onChange(a)
        ));
      const n = r$(() => this.sendCursorData(), 20);
      (this.onCursorHandle = t.editor.onDidChangeCursorPosition((a) => {
        this.onCursor(a), n();
      })),
        (this.onSelectionHandle = t.editor.onDidChangeCursorSelection((a) => {
          this.onSelection(a), n();
        })),
        (this.beforeUnload = (a) => {
          this.outstanding
            ? (a.preventDefault(), (a.returnValue = ""))
            : delete a.returnValue;
        }),
        window.addEventListener("beforeunload", this.beforeUnload);
      const i = t.reconnectInterval ?? 1e3;
      this.tryConnect(),
        (this.tryConnectId = window.setInterval(() => this.tryConnect(), i)),
        (this.resetFailuresId = window.setInterval(
          () => (this.recentFailures = 0),
          15 * i
        ));
    }
    dispose() {
      var t;
      window.clearInterval(this.tryConnectId),
        window.clearInterval(this.resetFailuresId),
        this.onSelectionHandle.dispose(),
        this.onCursorHandle.dispose(),
        this.onChangeHandle.dispose(),
        window.removeEventListener("beforeunload", this.beforeUnload),
        (t = this.ws) == null || t.close();
    }
    setLanguage(t) {
      var n;
      return (
        (n = this.ws) == null || n.send(`{"SetLanguage":${JSON.stringify(t)}}`),
        this.ws !== void 0
      );
    }
    setInfo(t) {
      (this.myInfo = t), this.sendInfo();
    }
    tryConnect() {
      if (this.connecting || this.ws) return;
      this.connecting = !0;
      const t = new WebSocket(this.options.uri);
      (t.onopen = () => {
        var n, i, a, l;
        (this.connecting = !1),
          (this.ws = t),
          (i = (n = this.options).onConnected) == null || i.call(n),
          (this.users = {}),
          (l = (a = this.options).onChangeUsers) == null ||
            l.call(a, this.users),
          this.sendInfo(),
          this.sendCursorData(),
          this.outstanding && this.sendOperation(this.outstanding);
      }),
        (t.onclose = () => {
          var n, i, a, l;
          this.ws
            ? ((this.ws = void 0),
              (i = (n = this.options).onDisconnected) == null || i.call(n),
              ++this.recentFailures >= 5 &&
                (this.dispose(),
                (l = (a = this.options).onDesynchronized) == null || l.call(a)))
            : (this.connecting = !1);
        }),
        (t.onmessage = ({ data: n }) => {
          typeof n == "string" && this.handleMessage(JSON.parse(n));
        });
    }
    handleMessage(t) {
      var n, i, a, l, c;
      if (t.Identity !== void 0) this.me = t.Identity;
      else if (t.History !== void 0) {
        const { start: d, operations: p } = t.History;
        if (d > this.revision) {
          console.warn(
            "History message has start greater than last operation."
          ),
            (n = this.ws) == null || n.close();
          return;
        }
        for (let h = this.revision - d; h < p.length; h++) {
          let { id: g, operation: v } = p[h];
          this.revision++,
            g === this.me
              ? this.serverAck()
              : ((v = ur.from_str(JSON.stringify(v))), this.applyServer(v));
        }
      } else if (t.Language !== void 0)
        (a = (i = this.options).onChangeLanguage) == null ||
          a.call(i, t.Language);
      else if (t.UserInfo !== void 0) {
        const { id: d, info: p } = t.UserInfo;
        d !== this.me &&
          ((this.users = { ...this.users }),
          p
            ? (this.users[d] = p)
            : (delete this.users[d], delete this.userCursors[d]),
          this.updateCursors(),
          (c = (l = this.options).onChangeUsers) == null ||
            c.call(l, this.users));
      } else if (t.UserCursor !== void 0) {
        const { id: d, data: p } = t.UserCursor;
        d !== this.me && ((this.userCursors[d] = p), this.updateCursors());
      }
    }
    serverAck() {
      if (!this.outstanding) {
        console.warn("Received serverAck with no outstanding operation.");
        return;
      }
      (this.outstanding = this.buffer),
        (this.buffer = void 0),
        this.outstanding && this.sendOperation(this.outstanding);
    }
    applyServer(t) {
      if (this.outstanding) {
        const n = this.outstanding.transform(t);
        if (((this.outstanding = n.first()), (t = n.second()), this.buffer)) {
          const i = this.buffer.transform(t);
          (this.buffer = i.first()), (t = i.second());
        }
      }
      this.applyOperation(t);
    }
    applyClient(t) {
      this.outstanding
        ? this.buffer
          ? (this.buffer = this.buffer.compose(t))
          : (this.buffer = t)
        : (this.sendOperation(t), (this.outstanding = t)),
        this.transformCursors(t);
    }
    sendOperation(t) {
      var i;
      const n = t.to_string();
      (i = this.ws) == null ||
        i.send(`{"Edit":{"revision":${this.revision},"operation":${n}}}`);
    }
    sendInfo() {
      var t;
      this.myInfo &&
        ((t = this.ws) == null ||
          t.send(`{"ClientInfo":${JSON.stringify(this.myInfo)}}`));
    }
    sendCursorData() {
      var t;
      this.buffer ||
        (t = this.ws) == null ||
        t.send(`{"CursorData":${JSON.stringify(this.cursorData)}}`);
    }
    applyOperation(t) {
      if (t.is_noop()) return;
      this.ignoreChanges = !0;
      const n = JSON.parse(t.to_string());
      let i = 0;
      for (const c of n)
        if (typeof c == "string") {
          const d = Ra(this.model, i);
          (i += _l(c)),
            this.model.pushEditOperations(
              this.options.editor.getSelections(),
              [
                {
                  range: {
                    startLineNumber: d.lineNumber,
                    startColumn: d.column,
                    endLineNumber: d.lineNumber,
                    endColumn: d.column,
                  },
                  text: c,
                  forceMoveMarkers: !0,
                },
              ],
              () => null
            );
        } else if (c >= 0) i += c;
        else {
          const d = -c;
          var a = Ra(this.model, i),
            l = Ra(this.model, i + d);
          this.model.pushEditOperations(
            this.options.editor.getSelections(),
            [
              {
                range: {
                  startLineNumber: a.lineNumber,
                  startColumn: a.column,
                  endLineNumber: l.lineNumber,
                  endColumn: l.column,
                },
                text: "",
                forceMoveMarkers: !0,
              },
            ],
            () => null
          );
        }
      (this.lastValue = this.model.getValue()),
        (this.ignoreChanges = !1),
        this.transformCursors(t);
    }
    transformCursors(t) {
      for (const n of Object.values(this.userCursors))
        (n.cursors = n.cursors.map((i) => t.transform_index(i))),
          (n.selections = n.selections.map(([i, a]) => [
            t.transform_index(i),
            t.transform_index(a),
          ]));
      this.updateCursors();
    }
    updateCursors() {
      const t = [];
      for (const [n, i] of Object.entries(this.userCursors))
        if (n in this.users) {
          const { hue: a, name: l } = this.users[n];
          U$(a);
          for (const c of i.cursors) {
            const d = Ra(this.model, c);
            t.push({
              options: {
                className: `remote-cursor-${a}`,
                stickiness: 1,
                zIndex: 2,
              },
              range: {
                startLineNumber: d.lineNumber,
                startColumn: d.column,
                endLineNumber: d.lineNumber,
                endColumn: d.column,
              },
            });
          }
          for (const c of i.selections) {
            const d = Ra(this.model, c[0]),
              p = Ra(this.model, c[1]);
            t.push({
              options: {
                className: `remote-selection-${a}`,
                hoverMessage: { value: l },
                stickiness: 1,
                zIndex: 1,
              },
              range: {
                startLineNumber: d.lineNumber,
                startColumn: d.column,
                endLineNumber: p.lineNumber,
                endColumn: p.column,
              },
            });
          }
        }
      this.oldDecorations = this.model.deltaDecorations(this.oldDecorations, t);
    }
    onChange(t) {
      if (!this.ignoreChanges) {
        const n = this.lastValue,
          i = _l(n);
        let a = 0,
          l = ur.new();
        l.retain(i), t.changes.sort((c, d) => d.rangeOffset - c.rangeOffset);
        for (const c of t.changes) {
          const { text: d, rangeOffset: p, rangeLength: h } = c,
            g = _l(n.slice(0, p)),
            v = _l(n.slice(p, p + h)),
            b = i + a - g - v,
            k = ur.new();
          k.retain(g),
            k.delete(v),
            k.insert(d),
            k.retain(b),
            (l = l.compose(k)),
            (a += k.target_len() - k.base_len());
        }
        this.applyClient(l), (this.lastValue = this.model.getValue());
      }
    }
    onCursor(t) {
      const n = [t.position, ...t.secondaryPositions];
      this.cursorData.cursors = n.map((i) => bm(this.model, i));
    }
    onSelection(t) {
      const n = [t.selection, ...t.secondarySelections];
      this.cursorData.selections = n.map((i) => [
        bm(this.model, i.getStartPosition()),
        bm(this.model, i.getEndPosition()),
      ]);
    }
  }
  function _l(e) {
    let t = 0;
    for (const n of e) ++t;
    return t;
  }
  function bm(e, t) {
    const n = e.getValue(),
      i = e.getOffsetAt(t);
    return _l(n.slice(0, i));
  }
  function Ra(e, t) {
    const n = e.getValue();
    let i = 0;
    for (const a of n) {
      if (t <= 0) break;
      (i += a.length), (t -= 1);
    }
    return e.getPositionAt(i);
  }
  const Dk = new Set();
  function U$(e) {
    if (!Dk.has(e)) {
      Dk.add(e);
      const t = `
      .monaco-editor .remote-selection-${e} {
        background-color: hsla(${e}, 90%, 80%, 0.5);
      }
      .monaco-editor .remote-cursor-${e} {
        border-left: 2px solid hsl(${e}, 90%, 25%);
      }
    `,
        n = document.createElement("style"),
        i = document.createTextNode(t);
      n.appendChild(i), document.head.appendChild(n);
    }
  }
  const Ik = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    H$ = 6;
  function Fk() {
    if (!window.location.hash) {
      let e = "";
      for (let t = 0; t < H$; t++)
        e += Ik[Math.floor(Math.random() * Ik.length)];
      window.history.replaceState(null, "", "#" + e);
    }
    return window.location.hash.slice(1);
  }
  function q$() {
    const [e, t] = x.useState(Fk);
    return (
      x.useEffect(() => {
        const n = () => t(Fk());
        return (
          window.addEventListener("hashchange", n),
          () => window.removeEventListener("hashchange", n)
        );
      }, []),
      e
    );
  }
  function K$(e) {
    let t = new URL(`api/socket/${e}`, window.location.href);
    return (t.protocol = t.protocol == "https:" ? "wss:" : "ws:"), t.href;
  }
  function G$() {
    return "Anonymous " + Rk[Math.floor(Math.random() * Rk.length)];
  }
  function Lk() {
    return Math.floor(Math.random() * 360);
  }
  function Z$() {
    const e = ak(),
      [t, n] = x.useState("plaintext"),
      [i, a] = x.useState("disconnected"),
      [l, c] = x.useState({}),
      [d, p] = hm("name", { defaultValue: G$ }),
      [h, g] = hm("hue", { defaultValue: Lk }),
      [v, b] = x.useState(),
      [k, S] = hm("darkMode", { defaultValue: !1 }),
      w = x.useRef(),
      _ = q$(),
      [j, O] = x.useState(!1);
    x.useEffect(() => {
      if (v != null && v.getModel()) {
        const I = v.getModel();
        return (
          I.setValue(""),
          I.setEOL(0),
          (w.current = new W$({
            uri: K$(_),
            editor: v,
            onConnected: () => a("connected"),
            onDisconnected: () => a("disconnected"),
            onDesynchronized: () => {
              a("desynchronized"),
                e({
                  title: "Desynchronized with server",
                  description: "Please save your work and refresh the page.",
                  status: "error",
                  duration: null,
                });
            },
            onChangeLanguage: (L) => {
              Pk.includes(L) && n(L);
            },
            onChangeUsers: c,
          })),
          () => {
            var L;
            (L = w.current) == null || L.dispose(), (w.current = void 0);
          }
        );
      }
    }, [_, v, e, c]),
      x.useEffect(() => {
        var I;
        i === "connected" &&
          ((I = w.current) == null || I.setInfo({ name: d, hue: h }));
      }, [i, d, h]);
    function M(I) {
      var L;
      n(I),
        (L = w.current) != null &&
          L.setLanguage(I) &&
          e({
            title: "文档格式已更新",
            description: R.jsxs(R.Fragment, {
              children: [
                "所有用户现在模式编辑统一为",
                " ",
                R.jsx(en, { as: "span", fontWeight: "semibold", children: I }),
                "。",
              ],
            }),
            status: "info",
            duration: 2e3,
            isClosable: !0,
          });
    }
    function $(I) {
      if (v != null && v.getModel()) {
        const L = v.getModel(),
          H = L.getFullModelRange();
        if (H.endLineNumber >= 10 && !I) {
          O(!0);
          return;
        }
        L.pushEditOperations(
          v.getSelections(),
          [{ range: H, text: KN }],
          () => null
        ),
          v.setPosition({ column: 0, lineNumber: 0 }),
          t !== "rust" && M("rust");
      }
    }
    function E() {
      S(!k);
    }
    return R.jsxs(si, {
      direction: "column",
      h: "100vh",
      overflow: "hidden",
      bgColor: k ? "#1e1e1e" : "white",
      color: k ? "#cbcaca" : "inherit",
      children: [
        R.jsx(bh, {
          flexShrink: 0,
          bgColor: k ? "#333333" : "#e8e8e8",
          color: k ? "#cccccc" : "#383838",
          textAlign: "center",
          fontSize: "sm",
          py: 0.5,
          children: "Rustpad",
        }),
        R.jsxs(si, {
          flex: "1 0",
          minH: 0,
          children: [
            R.jsx(JN, {
              documentId: _,
              connection: i,
              darkMode: k,
              language: t,
              currentUser: { name: d, hue: h },
              users: l,
              onDarkModeChange: E,
              onLanguageChange: M,
              onLoadSample: () => $(!1),
              onChangeName: (I) => I.length > 0 && p(I),
              onChangeColor: () => g(Lk()),
            }),
            R.jsx(XN, {
              isOpen: j,
              onClose: () => O(!1),
              onConfirm: () => {
                $(!0), O(!1);
              },
            }),
            R.jsxs(si, {
              flex: 1,
              minW: 0,
              h: "100%",
              direction: "column",
              overflow: "hidden",
              children: [
                R.jsxs(ju, {
                  h: 6,
                  spacing: 1,
                  color: "#888888",
                  fontWeight: "medium",
                  fontSize: "13px",
                  px: 3.5,
                  flexShrink: 0,
                  children: [
                    R.jsx(Jr, { as: BN, fontSize: "md", color: "blue.500" }),
                    R.jsx(en, { children: "文档" }),
                    R.jsx(Jr, { as: NN, fontSize: "md" }),
                    R.jsx(Jr, { as: VN, fontSize: "md", color: "purple.500" }),
                    R.jsx(en, { children: _ }),
                  ],
                }),
                R.jsx(bh, {
                  flex: 1,
                  minH: 0,
                  children: R.jsx(ON, {
                    theme: k ? "vs-dark" : "vs",
                    language: t,
                    options: { automaticLayout: !0, fontSize: 13 },
                    onMount: (I) => b(I),
                  }),
                }),
              ],
            }),
          ],
        }),
        R.jsx(ZN, {}),
      ],
    });
  }
  _8.createRoot(document.getElementById("root")).render(
    R.jsx(x.StrictMode, { children: R.jsx(tD, { children: R.jsx(Z$, {}) }) })
  );
})();
