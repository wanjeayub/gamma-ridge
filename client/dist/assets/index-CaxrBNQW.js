function Wc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });

  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ys = { exports: {} },
  pl = {},
  ws = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr = Symbol.for("react.element"),
  Qc = Symbol.for("react.portal"),
  Kc = Symbol.for("react.fragment"),
  Yc = Symbol.for("react.strict_mode"),
  Xc = Symbol.for("react.profiler"),
  Gc = Symbol.for("react.provider"),
  Jc = Symbol.for("react.context"),
  Zc = Symbol.for("react.forward_ref"),
  qc = Symbol.for("react.suspense"),
  bc = Symbol.for("react.memo"),
  ef = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function tf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ss = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xs = Object.assign,
  ks = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ks),
    (this.updater = n || Ss);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Es() {}
Es.prototype = dn.prototype;
function ri(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ks),
    (this.updater = n || Ss);
}
var li = (ri.prototype = new Es());
li.constructor = ri;
xs(li, dn.prototype);
li.isPureReactComponent = !0;
var tu = Array.isArray,
  Cs = Object.prototype.hasOwnProperty,
  oi = { current: null },
  Ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function _s(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Cs.call(t, r) && !Ns.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: lr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: oi.current,
  };
}
function nf(e, t) {
  return {
    $$typeof: lr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ii(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function rf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? rf("" + e.key)
    : t.toString(36);
}
function Lr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case lr:
          case Qc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Il(i, 0) : r),
      tu(l)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          Lr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (ii(l) &&
            (l = nf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(nu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Il(o, u);
      i += Lr(o, t, n, s, l);
    }
  else if (((s = tf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Il(o, u++)), (i += Lr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Lr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function lf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Rr = { transition: null },
  of = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Rr,
    ReactCurrentOwner: oi,
  };
function Ps() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ii(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = dn;
T.Fragment = Kc;
T.Profiler = Xc;
T.PureComponent = ri;
T.StrictMode = Yc;
T.Suspense = qc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = of;
T.act = Ps;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = xs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = oi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Cs.call(t, s) &&
        !Ns.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = _s;
T.createFactory = function (e) {
  var t = _s.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: Zc, render: e };
};
T.isValidElement = ii;
T.lazy = function (e) {
  return { $$typeof: ef, _payload: { _status: -1, _result: e }, _init: lf };
};
T.memo = function (e, t) {
  return { $$typeof: bc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = t;
  }
};
T.unstable_act = Ps;
T.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function () {
  return ae.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ae.current.useRef(e);
};
T.useState = function (e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ae.current.useTransition();
};
T.version = "18.3.1";
ws.exports = T;
var k = ws.exports;
const uf = Hc(k),
  sf = Wc({ __proto__: null, default: uf }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var af = k,
  cf = Symbol.for("react.element"),
  ff = Symbol.for("react.fragment"),
  df = Object.prototype.hasOwnProperty,
  pf = af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hf = { key: !0, ref: !0, __self: !0, __source: !0 };
function js(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) df.call(t, r) && !hf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: cf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: pf.current,
  };
}
pl.Fragment = ff;
pl.jsx = js;
pl.jsxs = js;
ys.exports = pl;
var x = ys.exports,
  Ls = { exports: {} },
  Se = {},
  Rs = { exports: {} },
  zs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, R) {
    var z = _.length;
    _.push(R);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        Z = _[Q];
      if (0 < l(Z, R)) (_[Q] = R), (_[z] = Z), (z = Q);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var R = _[0],
      z = _.pop();
    if (z !== R) {
      _[0] = z;
      e: for (var Q = 0, Z = _.length, cr = Z >>> 1; Q < cr; ) {
        var wt = 2 * (Q + 1) - 1,
          Ol = _[wt],
          St = wt + 1,
          fr = _[St];
        if (0 > l(Ol, z))
          St < Z && 0 > l(fr, Ol)
            ? ((_[Q] = fr), (_[St] = z), (Q = St))
            : ((_[Q] = Ol), (_[wt] = z), (Q = wt));
        else if (St < Z && 0 > l(fr, z)) (_[Q] = fr), (_[St] = z), (Q = St);
        else break e;
      }
    }
    return R;
  }
  function l(_, R) {
    var z = _.sortIndex - R.sortIndex;
    return z !== 0 ? z : _.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    g = !1,
    y = !1,
    w = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null) r(a);
      else if (R.startTime <= _)
        r(a), (R.sortIndex = R.expirationTime), t(s, R);
      else break;
      R = n(a);
    }
  }
  function v(_) {
    if (((w = !1), d(_), !y))
      if (n(s) !== null) (y = !0), zl(E);
      else {
        var R = n(a);
        R !== null && Tl(v, R.startTime - _);
      }
  }
  function E(_, R) {
    (y = !1), w && ((w = !1), f(L), (L = -1)), (g = !0);
    var z = m;
    try {
      for (
        d(R), p = n(s);
        p !== null && (!(p.expirationTime > R) || (_ && !je()));

      ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var Z = Q(p.expirationTime <= R);
          (R = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === n(s) && r(s),
            d(R);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var cr = !0;
      else {
        var wt = n(a);
        wt !== null && Tl(v, wt.startTime - R), (cr = !1);
      }
      return cr;
    } finally {
      (p = null), (m = z), (g = !1);
    }
  }
  var P = !1,
    j = null,
    L = -1,
    H = 5,
    O = -1;
  function je() {
    return !(e.unstable_now() - O < H);
  }
  function vn() {
    if (j !== null) {
      var _ = e.unstable_now();
      O = _;
      var R = !0;
      try {
        R = j(!0, _);
      } finally {
        R ? gn() : ((P = !1), (j = null));
      }
    } else P = !1;
  }
  var gn;
  if (typeof c == "function")
    gn = function () {
      c(vn);
    };
  else if (typeof MessageChannel < "u") {
    var bi = new MessageChannel(),
      Vc = bi.port2;
    (bi.port1.onmessage = vn),
      (gn = function () {
        Vc.postMessage(null);
      });
  } else
    gn = function () {
      C(vn, 0);
    };
  function zl(_) {
    (j = _), P || ((P = !0), gn());
  }
  function Tl(_, R) {
    L = C(function () {
      _(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), zl(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = m;
      }
      var z = m;
      m = R;
      try {
        return _();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, R) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var z = m;
      m = _;
      try {
        return R();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (_, R, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        _)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = z + Z),
        (_ = {
          id: h++,
          callback: R,
          priorityLevel: _,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1,
        }),
        z > Q
          ? ((_.sortIndex = z),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (w ? (f(L), (L = -1)) : (w = !0), Tl(v, z - Q)))
          : ((_.sortIndex = Z), t(s, _), y || g || ((y = !0), zl(E))),
        _
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (_) {
      var R = m;
      return function () {
        var z = m;
        m = R;
        try {
          return _.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(zs);
Rs.exports = zs;
var mf = Rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf = k,
  we = mf;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ts = new Set(),
  $n = {};
function It(e, t) {
  ln(e, t), ln(e + "Capture", t);
}
function ln(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++) Ts.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  uo = Object.prototype.hasOwnProperty,
  gf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  lu = {};
function yf(e) {
  return uo.call(lu, e)
    ? !0
    : uo.call(ru, e)
    ? !1
    : gf.test(e)
    ? (lu[e] = !0)
    : ((ru[e] = !0), !1);
}
function wf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sf(e, t, n, r) {
  if (t === null || typeof t > "u" || wf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ui = /[\-:]([a-z])/g;
function si(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ui, si);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ui, si);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ui, si);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ai(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sf(t, n, l, r) && (n = null),
    r || l === null
      ? yf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pr = Symbol.for("react.element"),
  At = Symbol.for("react.portal"),
  Bt = Symbol.for("react.fragment"),
  ci = Symbol.for("react.strict_mode"),
  so = Symbol.for("react.profiler"),
  Os = Symbol.for("react.provider"),
  Is = Symbol.for("react.context"),
  fi = Symbol.for("react.forward_ref"),
  ao = Symbol.for("react.suspense"),
  co = Symbol.for("react.suspense_list"),
  di = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  Ms = Symbol.for("react.offscreen"),
  ou = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Ml;
function _n(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || "";
    }
  return (
    `
` +
    Ml +
    e
  );
}
var Dl = !1;
function Fl(e, t) {
  if (!e || Dl) return "";
  Dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function xf(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n("Lazy");
    case 13:
      return _n("Suspense");
    case 19:
      return _n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Fl(e.type, !1)), e;
    case 11:
      return (e = Fl(e.type.render, !1)), e;
    case 1:
      return (e = Fl(e.type, !0)), e;
    default:
      return "";
  }
}
function fo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bt:
      return "Fragment";
    case At:
      return "Portal";
    case so:
      return "Profiler";
    case ci:
      return "StrictMode";
    case ao:
      return "Suspense";
    case co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Is:
        return (e.displayName || "Context") + ".Consumer";
      case Os:
        return (e._context.displayName || "Context") + ".Provider";
      case fi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case di:
        return (
          (t = e.displayName || null), t !== null ? t : fo(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return fo(e(t));
        } catch {}
    }
  return null;
}
function kf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fo(t);
    case 8:
      return t === ci ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ds(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ef(e) {
  var t = Ds(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = Ef(e));
}
function Fs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ds(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Br(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function po(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Us(e, t) {
  (t = t.checked), t != null && ai(e, "checked", t, !1);
}
function ho(e, t) {
  Us(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? mo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && mo(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function mo(e, t, n) {
  (t !== "number" || Br(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function vo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function $s(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function As(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function go(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? As(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mr,
  Bs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mr = mr || document.createElement("div"),
          mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function An(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
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
  Cf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
  Cf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function Vs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ws(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Vs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Nf = V(
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
function yo(e, t) {
  if (t) {
    if (Nf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function wo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var So = null;
function pi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xo = null,
  bt = null,
  en = null;
function cu(e) {
  if ((e = ur(e))) {
    if (typeof xo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = yl(t)), xo(e.stateNode, e.type, t));
  }
}
function Hs(e) {
  bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function Qs() {
  if (bt) {
    var e = bt,
      t = en;
    if (((en = bt = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function Ks(e, t) {
  return e(t);
}
function Ys() {}
var Ul = !1;
function Xs(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Ks(e, t, n);
  } finally {
    (Ul = !1), (bt !== null || en !== null) && (Ys(), Qs());
  }
}
function Bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var ko = !1;
if (Ke)
  try {
    var wn = {};
    Object.defineProperty(wn, "passive", {
      get: function () {
        ko = !0;
      },
    }),
      window.addEventListener("test", wn, wn),
      window.removeEventListener("test", wn, wn);
  } catch {
    ko = !1;
  }
function _f(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var zn = !1,
  Vr = null,
  Wr = !1,
  Eo = null,
  Pf = {
    onError: function (e) {
      (zn = !0), (Vr = e);
    },
  };
function jf(e, t, n, r, l, o, i, u, s) {
  (zn = !1), (Vr = null), _f.apply(Pf, arguments);
}
function Lf(e, t, n, r, l, o, i, u, s) {
  if ((jf.apply(this, arguments), zn)) {
    if (zn) {
      var a = Vr;
      (zn = !1), (Vr = null);
    } else throw Error(S(198));
    Wr || ((Wr = !0), (Eo = a));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function fu(e) {
  if (Mt(e) !== e) throw Error(S(188));
}
function Rf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return fu(l), e;
        if (o === r) return fu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Js(e) {
  return (e = Rf(e)), e !== null ? Zs(e) : null;
}
function Zs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qs = we.unstable_scheduleCallback,
  du = we.unstable_cancelCallback,
  zf = we.unstable_shouldYield,
  Tf = we.unstable_requestPaint,
  K = we.unstable_now,
  Of = we.unstable_getCurrentPriorityLevel,
  hi = we.unstable_ImmediatePriority,
  bs = we.unstable_UserBlockingPriority,
  Hr = we.unstable_NormalPriority,
  If = we.unstable_LowPriority,
  ea = we.unstable_IdlePriority,
  hl = null,
  $e = null;
function Mf(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Uf,
  Df = Math.log,
  Ff = Math.LN2;
function Uf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Df(e) / Ff) | 0)) | 0;
}
var vr = 64,
  gr = 4194304;
function jn(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Qr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = jn(u)) : ((o &= i), o !== 0 && (r = jn(o)));
  } else (i = n & ~l), i !== 0 ? (r = jn(i)) : o !== 0 && (r = jn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function $f(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Af(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = $f(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Co(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ta() {
  var e = vr;
  return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function or(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function Bf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function mi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function na(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ra,
  vi,
  la,
  oa,
  ia,
  No = !1,
  yr = [],
  ot = null,
  it = null,
  ut = null,
  Vn = new Map(),
  Wn = new Map(),
  et = [],
  Vf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Vn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = ur(t)), t !== null && vi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Wf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = Sn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = Sn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = Sn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Vn.set(o, Sn(Vn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Wn.set(o, Sn(Wn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ua(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gs(n)), t !== null)) {
          (e.blockedOn = t),
            ia(e.priority, function () {
              la(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (So = r), n.target.dispatchEvent(r), (So = null);
    } else return (t = ur(n)), t !== null && vi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function hu(e, t, n) {
  zr(e) && n.delete(t);
}
function Hf() {
  (No = !1),
    ot !== null && zr(ot) && (ot = null),
    it !== null && zr(it) && (it = null),
    ut !== null && zr(ut) && (ut = null),
    Vn.forEach(hu),
    Wn.forEach(hu);
}
function xn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    No ||
      ((No = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Hf)));
}
function Hn(e) {
  function t(l) {
    return xn(l, e);
  }
  if (0 < yr.length) {
    xn(yr[0], e);
    for (var n = 1; n < yr.length; n++) {
      var r = yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && xn(ot, e),
      it !== null && xn(it, e),
      ut !== null && xn(ut, e),
      Vn.forEach(t),
      Wn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    ua(n), n.blockedOn === null && et.shift();
}
var tn = Je.ReactCurrentBatchConfig,
  Kr = !0;
function Qf(e, t, n, r) {
  var l = M,
    o = tn.transition;
  tn.transition = null;
  try {
    (M = 1), gi(e, t, n, r);
  } finally {
    (M = l), (tn.transition = o);
  }
}
function Kf(e, t, n, r) {
  var l = M,
    o = tn.transition;
  tn.transition = null;
  try {
    (M = 4), gi(e, t, n, r);
  } finally {
    (M = l), (tn.transition = o);
  }
}
function gi(e, t, n, r) {
  if (Kr) {
    var l = _o(e, t, n, r);
    if (l === null) Gl(e, t, r, Yr, n), pu(e, r);
    else if (Wf(l, e, t, n, r)) r.stopPropagation();
    else if ((pu(e, r), t & 4 && -1 < Vf.indexOf(e))) {
      for (; l !== null; ) {
        var o = ur(l);
        if (
          (o !== null && ra(o),
          (o = _o(e, t, n, r)),
          o === null && Gl(e, t, r, Yr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Yr = null;
function _o(e, t, n, r) {
  if (((Yr = null), (e = pi(r)), (e = Ct(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yr = e), null;
}
function sa(e) {
  switch (e) {
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
      switch (Of()) {
        case hi:
          return 1;
        case bs:
          return 4;
        case Hr:
        case If:
          return 16;
        case ea:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  yi = null,
  Tr = null;
function aa() {
  if (Tr) return Tr;
  var e,
    t = yi,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Tr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Or(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wr() {
  return !0;
}
function mu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? wr
        : mu),
      (this.isPropagationStopped = mu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wr));
      },
      persist: function () {},
      isPersistent: wr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wi = xe(pn),
  ir = V({}, pn, { view: 0, detail: 0 }),
  Yf = xe(ir),
  Al,
  Bl,
  kn,
  ml = V({}, ir, {
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
    getModifierState: Si,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== kn &&
            (kn && e.type === "mousemove"
              ? ((Al = e.screenX - kn.screenX), (Bl = e.screenY - kn.screenY))
              : (Bl = Al = 0),
            (kn = e)),
          Al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bl;
    },
  }),
  vu = xe(ml),
  Xf = V({}, ml, { dataTransfer: 0 }),
  Gf = xe(Xf),
  Jf = V({}, ir, { relatedTarget: 0 }),
  Vl = xe(Jf),
  Zf = V({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qf = xe(Zf),
  bf = V({}, pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ed = xe(bf),
  td = V({}, pn, { data: 0 }),
  gu = xe(td),
  nd = {
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
  rd = {
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
  ld = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function od(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ld[e]) ? !!t[e] : !1;
}
function Si() {
  return od;
}
var id = V({}, ir, {
    key: function (e) {
      if (e.key) {
        var t = nd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Or(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? rd[e.keyCode] || "Unidentified"
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
    getModifierState: Si,
    charCode: function (e) {
      return e.type === "keypress" ? Or(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Or(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ud = xe(id),
  sd = V({}, ml, {
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
  yu = xe(sd),
  ad = V({}, ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Si,
  }),
  cd = xe(ad),
  fd = V({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dd = xe(fd),
  pd = V({}, ml, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hd = xe(pd),
  md = [9, 13, 27, 32],
  xi = Ke && "CompositionEvent" in window,
  Tn = null;
Ke && "documentMode" in document && (Tn = document.documentMode);
var vd = Ke && "TextEvent" in window && !Tn,
  ca = Ke && (!xi || (Tn && 8 < Tn && 11 >= Tn)),
  wu = " ",
  Su = !1;
function fa(e, t) {
  switch (e) {
    case "keyup":
      return md.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function da(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function gd(e, t) {
  switch (e) {
    case "compositionend":
      return da(t);
    case "keypress":
      return t.which !== 32 ? null : ((Su = !0), wu);
    case "textInput":
      return (e = t.data), e === wu && Su ? null : e;
    default:
      return null;
  }
}
function yd(e, t) {
  if (Vt)
    return e === "compositionend" || (!xi && fa(e, t))
      ? ((e = aa()), (Tr = yi = nt = null), (Vt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ca && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wd = {
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
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wd[e.type] : t === "textarea";
}
function pa(e, t, n, r) {
  Hs(r),
    (t = Xr(t, "onChange")),
    0 < t.length &&
      ((n = new wi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var On = null,
  Qn = null;
function Sd(e) {
  Ca(e, 0);
}
function vl(e) {
  var t = Qt(e);
  if (Fs(t)) return e;
}
function xd(e, t) {
  if (e === "change") return t;
}
var ha = !1;
if (Ke) {
  var Wl;
  if (Ke) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"),
        (Hl = typeof ku.oninput == "function");
    }
    Wl = Hl;
  } else Wl = !1;
  ha = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Eu() {
  On && (On.detachEvent("onpropertychange", ma), (Qn = On = null));
}
function ma(e) {
  if (e.propertyName === "value" && vl(Qn)) {
    var t = [];
    pa(t, Qn, e, pi(e)), Xs(Sd, t);
  }
}
function kd(e, t, n) {
  e === "focusin"
    ? (Eu(), (On = t), (Qn = n), On.attachEvent("onpropertychange", ma))
    : e === "focusout" && Eu();
}
function Ed(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vl(Qn);
}
function Cd(e, t) {
  if (e === "click") return vl(t);
}
function Nd(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function _d(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : _d;
function Kn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!uo.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nu(e, t) {
  var n = Cu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cu(n);
  }
}
function va(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? va(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ga() {
  for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Br(e.document);
  }
  return t;
}
function ki(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Pd(e) {
  var t = ga(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    va(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ki(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Nu(n, o));
        var i = Nu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var jd = Ke && "documentMode" in document && 11 >= document.documentMode,
  Wt = null,
  Po = null,
  In = null,
  jo = !1;
function _u(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jo ||
    Wt == null ||
    Wt !== Br(r) ||
    ((r = Wt),
    "selectionStart" in r && ki(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (In && Kn(In, r)) ||
      ((In = r),
      (r = Xr(Po, "onSelect")),
      0 < r.length &&
        ((t = new wi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wt))));
}
function Sr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ht = {
    animationend: Sr("Animation", "AnimationEnd"),
    animationiteration: Sr("Animation", "AnimationIteration"),
    animationstart: Sr("Animation", "AnimationStart"),
    transitionend: Sr("Transition", "TransitionEnd"),
  },
  Ql = {},
  ya = {};
Ke &&
  ((ya = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ht.animationend.animation,
    delete Ht.animationiteration.animation,
    delete Ht.animationstart.animation),
  "TransitionEvent" in window || delete Ht.transitionend.transition);
function gl(e) {
  if (Ql[e]) return Ql[e];
  if (!Ht[e]) return e;
  var t = Ht[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ya) return (Ql[e] = t[n]);
  return e;
}
var wa = gl("animationend"),
  Sa = gl("animationiteration"),
  xa = gl("animationstart"),
  ka = gl("transitionend"),
  Ea = new Map(),
  Pu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vt(e, t) {
  Ea.set(e, t), It(t, [e]);
}
for (var Kl = 0; Kl < Pu.length; Kl++) {
  var Yl = Pu[Kl],
    Ld = Yl.toLowerCase(),
    Rd = Yl[0].toUpperCase() + Yl.slice(1);
  vt(Ld, "on" + Rd);
}
vt(wa, "onAnimationEnd");
vt(Sa, "onAnimationIteration");
vt(xa, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(ka, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ln =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function ju(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lf(r, t, void 0, e), (e.currentTarget = null);
}
function Ca(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          ju(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          ju(l, u, a), (o = s);
        }
    }
  }
  if (Wr) throw ((e = Eo), (Wr = !1), (Eo = null), e);
}
function F(e, t) {
  var n = t[Oo];
  n === void 0 && (n = t[Oo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Na(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Na(n, e, r, t);
}
var xr = "_reactListening" + Math.random().toString(36).slice(2);
function Yn(e) {
  if (!e[xr]) {
    (e[xr] = !0),
      Ts.forEach(function (n) {
        n !== "selectionchange" && (zd.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xr] || ((t[xr] = !0), Xl("selectionchange", !1, t));
  }
}
function Na(e, t, n, r) {
  switch (sa(t)) {
    case 1:
      var l = Qf;
      break;
    case 4:
      l = Kf;
      break;
    default:
      l = gi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ko ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Ct(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Xs(function () {
    var a = o,
      h = pi(n),
      p = [];
    e: {
      var m = Ea.get(e);
      if (m !== void 0) {
        var g = wi,
          y = e;
        switch (e) {
          case "keypress":
            if (Or(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = ud;
            break;
          case "focusin":
            (y = "focus"), (g = Vl);
            break;
          case "focusout":
            (y = "blur"), (g = Vl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Vl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Gf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = cd;
            break;
          case wa:
          case Sa:
          case xa:
            g = qf;
            break;
          case ka:
            g = dd;
            break;
          case "scroll":
            g = Yf;
            break;
          case "wheel":
            g = hd;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ed;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = yu;
        }
        var w = (t & 4) !== 0,
          C = !w && e === "scroll",
          f = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Bn(c, f)), v != null && w.push(Xn(c, v, d)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new g(m, y, null, n, h)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== So &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ct(y) || y[Ye]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? Ct(y) : null),
              y !== null &&
                ((C = Mt(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((w = vu),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = yu),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (C = g == null ? m : Qt(g)),
            (d = y == null ? m : Qt(y)),
            (m = new w(v, c + "leave", g, n, h)),
            (m.target = C),
            (m.relatedTarget = d),
            (v = null),
            Ct(h) === a &&
              ((w = new w(f, c + "enter", y, n, h)),
              (w.target = d),
              (w.relatedTarget = C),
              (v = w)),
            (C = v),
            g && y)
          )
            t: {
              for (w = g, f = y, c = 0, d = w; d; d = $t(d)) c++;
              for (d = 0, v = f; v; v = $t(v)) d++;
              for (; 0 < c - d; ) (w = $t(w)), c--;
              for (; 0 < d - c; ) (f = $t(f)), d--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = $t(w)), (f = $t(f));
              }
              w = null;
            }
          else w = null;
          g !== null && Lu(p, m, g, w, !1),
            y !== null && C !== null && Lu(p, C, y, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? Qt(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var E = xd;
        else if (xu(m))
          if (ha) E = Nd;
          else {
            E = Ed;
            var P = kd;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Cd);
        if (E && (E = E(e, a))) {
          pa(p, E, n, h);
          break e;
        }
        P && P(e, m, a),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            mo(m, "number", m.value);
      }
      switch (((P = a ? Qt(a) : window), e)) {
        case "focusin":
          (xu(P) || P.contentEditable === "true") &&
            ((Wt = P), (Po = a), (In = null));
          break;
        case "focusout":
          In = Po = Wt = null;
          break;
        case "mousedown":
          jo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (jo = !1), _u(p, n, h);
          break;
        case "selectionchange":
          if (jd) break;
        case "keydown":
        case "keyup":
          _u(p, n, h);
      }
      var j;
      if (xi)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Vt
          ? fa(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (ca &&
          n.locale !== "ko" &&
          (Vt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Vt && (j = aa())
            : ((nt = h),
              (yi = "value" in nt ? nt.value : nt.textContent),
              (Vt = !0))),
        (P = Xr(a, L)),
        0 < P.length &&
          ((L = new gu(L, e, null, n, h)),
          p.push({ event: L, listeners: P }),
          j ? (L.data = j) : ((j = da(n)), j !== null && (L.data = j)))),
        (j = vd ? gd(e, n) : yd(e, n)) &&
          ((a = Xr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new gu("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = j)));
    }
    Ca(p, t);
  });
}
function Xn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Bn(e, n)),
      o != null && r.unshift(Xn(e, o, l)),
      (o = Bn(e, t)),
      o != null && r.push(Xn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function $t(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Lu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Bn(n, o)), s != null && i.unshift(Xn(n, s, u)))
        : l || ((s = Bn(n, o)), s != null && i.push(Xn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Td = /\r\n?/g,
  Od = /\u0000|\uFFFD/g;
function Ru(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Td,
      `
`
    )
    .replace(Od, "");
}
function kr(e, t, n) {
  if (((t = Ru(t)), Ru(e) !== t && n)) throw Error(S(425));
}
function Gr() {}
var Lo = null,
  Ro = null;
function zo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var To = typeof setTimeout == "function" ? setTimeout : void 0,
  Id = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zu = typeof Promise == "function" ? Promise : void 0,
  Md =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof zu < "u"
      ? function (e) {
          return zu.resolve(null).then(e).catch(Dd);
        }
      : To;
function Dd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Jl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Tu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + hn,
  Gn = "__reactProps$" + hn,
  Ye = "__reactContainer$" + hn,
  Oo = "__reactEvents$" + hn,
  Fd = "__reactListeners$" + hn,
  Ud = "__reactHandles$" + hn;
function Ct(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Tu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Tu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ur(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function yl(e) {
  return e[Gn] || null;
}
var Io = [],
  Kt = -1;
function gt(e) {
  return { current: e };
}
function U(e) {
  0 > Kt || ((e.current = Io[Kt]), (Io[Kt] = null), Kt--);
}
function D(e, t) {
  Kt++, (Io[Kt] = e.current), (e.current = t);
}
var mt = {},
  ie = gt(mt),
  pe = gt(!1),
  Lt = mt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Jr() {
  U(pe), U(ie);
}
function Ou(e, t, n) {
  if (ie.current !== mt) throw Error(S(168));
  D(ie, t), D(pe, n);
}
function _a(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, kf(e) || "Unknown", l));
  return V({}, n, r);
}
function Zr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (Lt = ie.current),
    D(ie, e),
    D(pe, pe.current),
    !0
  );
}
function Iu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = _a(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(pe),
      U(ie),
      D(ie, e))
    : U(pe),
    D(pe, n);
}
var Ve = null,
  wl = !1,
  Zl = !1;
function Pa(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function $d(e) {
  (wl = !0), Pa(e);
}
function yt() {
  if (!Zl && Ve !== null) {
    Zl = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (wl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), qs(hi, yt), l);
    } finally {
      (M = t), (Zl = !1);
    }
  }
  return null;
}
var Yt = [],
  Xt = 0,
  qr = null,
  br = 0,
  ke = [],
  Ee = 0,
  Rt = null,
  We = 1,
  He = "";
function xt(e, t) {
  (Yt[Xt++] = br), (Yt[Xt++] = qr), (qr = e), (br = t);
}
function ja(e, t, n) {
  (ke[Ee++] = We), (ke[Ee++] = He), (ke[Ee++] = Rt), (Rt = e);
  var r = We;
  e = He;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (We = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (He = o + e);
  } else (We = (1 << o) | (n << l) | r), (He = e);
}
function Ei(e) {
  e.return !== null && (xt(e, 1), ja(e, 1, 0));
}
function Ci(e) {
  for (; e === qr; )
    (qr = Yt[--Xt]), (Yt[Xt] = null), (br = Yt[--Xt]), (Yt[Xt] = null);
  for (; e === Rt; )
    (Rt = ke[--Ee]),
      (ke[Ee] = null),
      (He = ke[--Ee]),
      (ke[Ee] = null),
      (We = ke[--Ee]),
      (ke[Ee] = null);
}
var ye = null,
  ge = null,
  $ = !1,
  Te = null;
function La(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Mu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ge = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rt !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Do(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Mu(e, t)) {
        if (Mo(e)) throw Error(S(418));
        t = st(n.nextSibling);
        var r = ye;
        t && Mu(e, t)
          ? La(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e));
      }
    } else {
      if (Mo(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e);
    }
  }
}
function Du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function Er(e) {
  if (e !== ye) return !1;
  if (!$) return Du(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Mo(e)) throw (Ra(), Error(S(418)));
    for (; t; ) La(e, t), (t = st(t.nextSibling));
  }
  if ((Du(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function Ra() {
  for (var e = ge; e; ) e = st(e.nextSibling);
}
function un() {
  (ge = ye = null), ($ = !1);
}
function Ni(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var Ad = Je.ReactCurrentBatchConfig;
function En(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Cr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Fu(e) {
  var t = e._init;
  return t(e._payload);
}
function za(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = lo(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, v) {
    var E = d.type;
    return E === Bt
      ? h(f, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === qe &&
            Fu(E) === c.type))
      ? ((v = l(c, d.props)), (v.ref = En(f, c, d)), (v.return = f), v)
      : ((v = Ar(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = En(f, c, d)),
        (v.return = f),
        v);
  }
  function a(f, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = oo(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, v, E) {
    return c === null || c.tag !== 7
      ? ((c = jt(d, f.mode, v, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = lo("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case pr:
          return (
            (d = Ar(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = En(f, null, c)),
            (d.return = f),
            d
          );
        case At:
          return (c = oo(c, f.mode, d)), (c.return = f), c;
        case qe:
          var v = c._init;
          return p(f, v(c._payload), d);
      }
      if (Pn(c) || yn(c))
        return (c = jt(c, f.mode, d, null)), (c.return = f), c;
      Cr(f, c);
    }
    return null;
  }
  function m(f, c, d, v) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case pr:
          return d.key === E ? s(f, c, d, v) : null;
        case At:
          return d.key === E ? a(f, c, d, v) : null;
        case qe:
          return (E = d._init), m(f, c, E(d._payload), v);
      }
      if (Pn(d) || yn(d)) return E !== null ? null : h(f, c, d, v, null);
      Cr(f, d);
    }
    return null;
  }
  function g(f, c, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(c, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case pr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(c, f, v, E);
        case At:
          return (f = f.get(v.key === null ? d : v.key) || null), a(c, f, v, E);
        case qe:
          var P = v._init;
          return g(f, c, d, P(v._payload), E);
      }
      if (Pn(v) || yn(v)) return (f = f.get(d) || null), h(c, f, v, E, null);
      Cr(c, v);
    }
    return null;
  }
  function y(f, c, d, v) {
    for (
      var E = null, P = null, j = c, L = (c = 0), H = null;
      j !== null && L < d.length;
      L++
    ) {
      j.index > L ? ((H = j), (j = null)) : (H = j.sibling);
      var O = m(f, j, d[L], v);
      if (O === null) {
        j === null && (j = H);
        break;
      }
      e && j && O.alternate === null && t(f, j),
        (c = o(O, c, L)),
        P === null ? (E = O) : (P.sibling = O),
        (P = O),
        (j = H);
    }
    if (L === d.length) return n(f, j), $ && xt(f, L), E;
    if (j === null) {
      for (; L < d.length; L++)
        (j = p(f, d[L], v)),
          j !== null &&
            ((c = o(j, c, L)), P === null ? (E = j) : (P.sibling = j), (P = j));
      return $ && xt(f, L), E;
    }
    for (j = r(f, j); L < d.length; L++)
      (H = g(j, f, L, d[L], v)),
        H !== null &&
          (e && H.alternate !== null && j.delete(H.key === null ? L : H.key),
          (c = o(H, c, L)),
          P === null ? (E = H) : (P.sibling = H),
          (P = H));
    return (
      e &&
        j.forEach(function (je) {
          return t(f, je);
        }),
      $ && xt(f, L),
      E
    );
  }
  function w(f, c, d, v) {
    var E = yn(d);
    if (typeof E != "function") throw Error(S(150));
    if (((d = E.call(d)), d == null)) throw Error(S(151));
    for (
      var P = (E = null), j = c, L = (c = 0), H = null, O = d.next();
      j !== null && !O.done;
      L++, O = d.next()
    ) {
      j.index > L ? ((H = j), (j = null)) : (H = j.sibling);
      var je = m(f, j, O.value, v);
      if (je === null) {
        j === null && (j = H);
        break;
      }
      e && j && je.alternate === null && t(f, j),
        (c = o(je, c, L)),
        P === null ? (E = je) : (P.sibling = je),
        (P = je),
        (j = H);
    }
    if (O.done) return n(f, j), $ && xt(f, L), E;
    if (j === null) {
      for (; !O.done; L++, O = d.next())
        (O = p(f, O.value, v)),
          O !== null &&
            ((c = o(O, c, L)), P === null ? (E = O) : (P.sibling = O), (P = O));
      return $ && xt(f, L), E;
    }
    for (j = r(f, j); !O.done; L++, O = d.next())
      (O = g(j, f, L, O.value, v)),
        O !== null &&
          (e && O.alternate !== null && j.delete(O.key === null ? L : O.key),
          (c = o(O, c, L)),
          P === null ? (E = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        j.forEach(function (vn) {
          return t(f, vn);
        }),
      $ && xt(f, L),
      E
    );
  }
  function C(f, c, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Bt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case pr:
          e: {
            for (var E = d.key, P = c; P !== null; ) {
              if (P.key === E) {
                if (((E = d.type), E === Bt)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = l(P, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === qe &&
                    Fu(E) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = l(P, d.props)),
                    (c.ref = En(f, P, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === Bt
              ? ((c = jt(d.props.children, f.mode, v, d.key)),
                (c.return = f),
                (f = c))
              : ((v = Ar(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = En(f, c, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case At:
          e: {
            for (P = d.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = oo(d, f.mode, v)), (c.return = f), (f = c);
          }
          return i(f);
        case qe:
          return (P = d._init), C(f, c, P(d._payload), v);
      }
      if (Pn(d)) return y(f, c, d, v);
      if (yn(d)) return w(f, c, d, v);
      Cr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = lo(d, f.mode, v)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return C;
}
var sn = za(!0),
  Ta = za(!1),
  el = gt(null),
  tl = null,
  Gt = null,
  _i = null;
function Pi() {
  _i = Gt = tl = null;
}
function ji(e) {
  var t = el.current;
  U(el), (e._currentValue = t);
}
function Fo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nn(e, t) {
  (tl = e),
    (_i = Gt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (_i !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gt === null)) {
      if (tl === null) throw Error(S(308));
      (Gt = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else Gt = Gt.next = e;
  return t;
}
var Nt = null;
function Li(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function Oa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Li(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function Ri(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ia(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Li(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Ir(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mi(e, n);
  }
}
function Uu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (h = a = s = null), (u = o);
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
          switch (((m = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                p = y.call(g, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == "function" ? y.call(g, p, m) : y),
                m == null)
              )
                break e;
              p = V({}, p, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = g), (s = p)) : (h = h.next = g),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Tt |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function $u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var sr = {},
  Ae = gt(sr),
  Jn = gt(sr),
  Zn = gt(sr);
function _t(e) {
  if (e === sr) throw Error(S(174));
  return e;
}
function zi(e, t) {
  switch ((D(Zn, t), D(Jn, e), D(Ae, sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : go(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = go(t, e));
  }
  U(Ae), D(Ae, t);
}
function an() {
  U(Ae), U(Jn), U(Zn);
}
function Ma(e) {
  _t(Zn.current);
  var t = _t(Ae.current),
    n = go(t, e.type);
  t !== n && (D(Jn, e), D(Ae, n));
}
function Ti(e) {
  Jn.current === e && (U(Ae), U(Jn));
}
var A = gt(0);
function rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function Oi() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Mr = Je.ReactCurrentDispatcher,
  bl = Je.ReactCurrentBatchConfig,
  zt = 0,
  B = null,
  G = null,
  q = null,
  ll = !1,
  Mn = !1,
  qn = 0,
  Bd = 0;
function re() {
  throw Error(S(321));
}
function Ii(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Mi(e, t, n, r, l, o) {
  if (
    ((zt = o),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mr.current = e === null || e.memoizedState === null ? Qd : Kd),
    (e = n(r, l)),
    Mn)
  ) {
    o = 0;
    do {
      if (((Mn = !1), (qn = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Mr.current = Yd),
        (e = n(r, l));
    } while (Mn);
  }
  if (
    ((Mr.current = ol),
    (t = G !== null && G.next !== null),
    (zt = 0),
    (q = G = B = null),
    (ll = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Di() {
  var e = qn !== 0;
  return (qn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (B.memoizedState = q = e) : (q = q.next = e), q;
}
function Pe() {
  if (G === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? B.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(S(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (B.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function bn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function eo(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var h = a.lane;
      if ((zt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
          (B.lanes |= h),
          (Tt |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Me(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (B.lanes |= o), (Tt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function to(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Me(o, t.memoizedState) || (de = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Da() {}
function Fa(e, t) {
  var n = B,
    r = Pe(),
    l = t(),
    o = !Me(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Fi(Aa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      er(9, $a.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(S(349));
    zt & 30 || Ua(n, t, l);
  }
  return l;
}
function Ua(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $a(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ba(t) && Va(e);
}
function Aa(e, t, n) {
  return n(function () {
    Ba(t) && Va(e);
  });
}
function Ba(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Va(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Au(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Hd.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wa() {
  return Pe().memoizedState;
}
function Dr(e, t, n, r) {
  var l = Fe();
  (B.flags |= e),
    (l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r));
}
function Sl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (((o = i.destroy), r !== null && Ii(r, i.deps))) {
      l.memoizedState = er(t, n, o, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = er(1 | t, n, o, r));
}
function Bu(e, t) {
  return Dr(8390656, 8, e, t);
}
function Fi(e, t) {
  return Sl(2048, 8, e, t);
}
function Ha(e, t) {
  return Sl(4, 2, e, t);
}
function Qa(e, t) {
  return Sl(4, 4, e, t);
}
function Ka(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ya(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Sl(4, 4, Ka.bind(null, t, e), n)
  );
}
function Ui() {}
function Xa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ii(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ga(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ii(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ja(e, t, n) {
  return zt & 21
    ? (Me(n, t) || ((n = ta()), (B.lanes |= n), (Tt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Vd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (bl.transition = r);
  }
}
function Za() {
  return Pe().memoizedState;
}
function Wd(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qa(e))
  )
    ba(t, n);
  else if (((n = Oa(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), ec(n, t, r);
  }
}
function Hd(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qa(e)) ba(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Li(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Oa(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), ec(n, t, r));
  }
}
function qa(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function ba(e, t) {
  Mn = ll = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mi(e, n);
  }
}
var ol = {
    readContext: _e,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Qd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Bu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Dr(4194308, 4, Ka.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Dr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Dr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Wd.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Au,
    useDebugValue: Ui,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Au(!1),
        t = e[0];
      return (e = Vd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = Fe();
      if ($) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(S(349));
        zt & 30 || Ua(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Bu(Aa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        er(9, $a.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = b.identifierPrefix;
      if ($) {
        var n = He,
          r = We;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Bd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kd = {
    readContext: _e,
    useCallback: Xa,
    useContext: _e,
    useEffect: Fi,
    useImperativeHandle: Ya,
    useInsertionEffect: Ha,
    useLayoutEffect: Qa,
    useMemo: Ga,
    useReducer: eo,
    useRef: Wa,
    useState: function () {
      return eo(bn);
    },
    useDebugValue: Ui,
    useDeferredValue: function (e) {
      var t = Pe();
      return Ja(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = eo(bn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Da,
    useSyncExternalStore: Fa,
    useId: Za,
    unstable_isNewReconciler: !1,
  },
  Yd = {
    readContext: _e,
    useCallback: Xa,
    useContext: _e,
    useEffect: Fi,
    useImperativeHandle: Ya,
    useInsertionEffect: Ha,
    useLayoutEffect: Qa,
    useMemo: Ga,
    useReducer: to,
    useRef: Wa,
    useState: function () {
      return to(bn);
    },
    useDebugValue: Ui,
    useDeferredValue: function (e) {
      var t = Pe();
      return G === null ? (t.memoizedState = e) : Ja(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = to(bn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Da,
    useSyncExternalStore: Fa,
    useId: Za,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Uo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      o = Qe(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Ie(t, e, l, r), Ir(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      o = Qe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Ie(t, e, l, r), Ir(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ft(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Ie(t, e, r, n), Ir(t, e, r));
  },
};
function Vu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kn(n, r) || !Kn(l, o)
      : !0
  );
}
function tc(e, t, n) {
  var r = !1,
    l = mt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = _e(o))
      : ((l = he(t) ? Lt : ie.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? on(e, l) : mt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Wu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null);
}
function $o(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ri(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = _e(o))
    : ((o = he(t) ? Lt : ie.current), (l.context = on(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Uo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && xl.enqueueReplaceState(l, l.state, null),
      nl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function cn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += xf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function no(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xd = typeof WeakMap == "function" ? WeakMap : Map;
function nc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ul || ((ul = !0), (Jo = r)), Ao(e, t);
    }),
    n
  );
}
function rc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ao(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ao(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = sp.bind(null, e, t, n)), t.then(e, e));
}
function Qu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ku(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gd = Je.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Ta(t, null, n, r) : sn(t, e.child, n, r);
}
function Yu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    nn(t, l),
    (r = Mi(e, t, n, r, o, l)),
    (n = Di()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && n && Ei(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Xu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ki(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), lc(e, t, o, r, l))
      : ((e = Ar(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kn), n(i, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function lc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Kn(o, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Bo(e, t, n, r, l);
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Zt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Zt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(Zt, ve),
        (ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Zt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function ic(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bo(e, t, n, r, l) {
  var o = he(n) ? Lt : ie.current;
  return (
    (o = on(t, o)),
    nn(t, l),
    (n = Mi(e, t, n, r, o, l)),
    (r = Di()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && r && Ei(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Gu(e, t, n, r, l) {
  if (he(n)) {
    var o = !0;
    Zr(t);
  } else o = !1;
  if ((nn(t, l), t.stateNode === null))
    Fr(e, t), tc(t, n, r), $o(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = _e(a))
      : ((a = he(n) ? Lt : ie.current), (a = on(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Wu(t, i, r, a)),
      (be = !1);
    var m = t.memoizedState;
    (i.state = m),
      nl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || be
        ? (typeof h == "function" && (Uo(t, n, h, r), (s = t.memoizedState)),
          (u = be || Vu(t, n, u, r, m, s, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ia(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Re(t.type, u)),
      (i.props = a),
      (p = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = he(n) ? Lt : ie.current), (s = on(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== p || m !== s) && Wu(t, i, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (i.state = m),
      nl(t, r, i, l);
    var y = t.memoizedState;
    u !== p || m !== y || pe.current || be
      ? (typeof g == "function" && (Uo(t, n, g, r), (y = t.memoizedState)),
        (a = be || Vu(t, n, a, r, m, y, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vo(e, t, n, r, o, l);
}
function Vo(e, t, n, r, l, o) {
  ic(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Iu(t, n, !1), Ge(e, t, o);
  (r = t.stateNode), (Gd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = sn(t, e.child, null, o)), (t.child = sn(t, null, u, o)))
      : ue(e, t, u, o),
    (t.memoizedState = r.state),
    l && Iu(t, n, !0),
    t.child
  );
}
function uc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ou(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ou(e, t.context, !1),
    zi(e, t.containerInfo);
}
function Ju(e, t, n, r, l) {
  return un(), Ni(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Wo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ho(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sc(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(A, l & 1),
    e === null)
  )
    return (
      Do(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Cl(i, r, 0, null)),
              (e = jt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ho(n)),
              (t.memoizedState = Wo),
              e)
            : $i(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Jd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = dt(u, o)) : ((o = jt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ho(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function $i(e, t) {
  return (
    (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && Ni(r),
    sn(t, e.child, null, n),
    (e = $i(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Jd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = no(Error(S(422)))), Nr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = jt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && sn(t, e.child, null, i),
        (t.child.memoizedState = Ho(i)),
        (t.memoizedState = Wo),
        o);
  if (!(t.mode & 1)) return Nr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(S(419))), (r = no(o, r, void 0)), Nr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
    }
    return Qi(), (r = no(Error(S(421)))), Nr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ap.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ge = st(l.nextSibling)),
      (ye = t),
      ($ = !0),
      (Te = null),
      e !== null &&
        ((ke[Ee++] = We),
        (ke[Ee++] = He),
        (ke[Ee++] = Rt),
        (We = e.id),
        (He = e.overflow),
        (Rt = t)),
      (t = $i(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fo(e.return, t, n);
}
function ro(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ue(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zu(e, n, t);
        else if (e.tag === 19) Zu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && rl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ro(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && rl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ro(t, !0, n, null, o);
        break;
      case "together":
        ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zd(e, t, n) {
  switch (t.tag) {
    case 3:
      uc(t), un();
      break;
    case 5:
      Ma(t);
      break;
    case 1:
      he(t.type) && Zr(t);
      break;
    case 4:
      zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(el, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sc(e, t, n)
          : (D(A, A.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      D(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ac(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), oc(e, t, n);
  }
  return Ge(e, t, n);
}
var cc, Qo, fc, dc;
cc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Qo = function () {};
fc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _t(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        (l = po(e, l)), (r = po(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = vo(e, l)), (r = vo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gr);
    }
    yo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            ($n.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              ($n.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && F("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
dc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qd(e, t, n) {
  var r = t.pendingProps;
  switch ((Ci(t), t.tag)) {
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
      return le(t), null;
    case 1:
      return he(t.type) && Jr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        an(),
        U(pe),
        U(ie),
        Oi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Er(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (bo(Te), (Te = null)))),
        Qo(e, t),
        le(t),
        null
      );
    case 5:
      Ti(t);
      var l = _t(Zn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return le(t), null;
        }
        if (((e = _t(Ae.current)), Er(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ue] = t), (r[Gn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) F(Ln[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              iu(r, o), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              su(r, o), F("invalid", r);
          }
          yo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      kr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      kr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : $n.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              hr(r), uu(r, o, !0);
              break;
            case "textarea":
              hr(r), au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Gr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = As(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Gn] = r),
            cc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = wo(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) F(Ln[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                iu(e, r), (l = po(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                su(e, r), (l = vo(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            yo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Ws(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Bs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && An(e, s)
                    : typeof s == "number" && An(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    ($n.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && F("scroll", e)
                      : s != null && ai(e, o, s, i));
              }
            switch (n) {
              case "input":
                hr(e), uu(e, r, !1);
                break;
              case "textarea":
                hr(e), au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? qt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Gr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = _t(Zn.current)), _t(Ae.current), Er(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                kr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  kr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (U(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
          Ra(), un(), (t.flags |= 98560), (o = !1);
        else if (((o = Er(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[Ue] = t;
          } else
            un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (o = !1);
        } else Te !== null && (bo(Te), (Te = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? J === 0 && (J = 3) : Qi())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        an(), Qo(e, t), e === null && Yn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return ji(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Jr(), le(t), null;
    case 19:
      if ((U(A), (o = t.memoizedState), o === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Cn(o, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = rl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Cn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > fn &&
            ((t.flags |= 128), (r = !0), Cn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !$)
            )
              return le(t), null;
          } else
            2 * K() - o.renderingStartTime > fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = A.current),
          D(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Hi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function bd(e, t) {
  switch ((Ci(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Jr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        U(pe),
        U(ie),
        Oi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ti(t), null;
    case 13:
      if ((U(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(A), null;
    case 4:
      return an(), null;
    case 10:
      return ji(t.type._context), null;
    case 22:
    case 23:
      return Hi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _r = !1,
  oe = !1,
  ep = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Jt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Ko(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var qu = !1;
function tp(e, t) {
  if (((Lo = Kr), (e = ga()), ki(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (m = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++h === r && (s = i),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ro = { focusedElem: e, selectionRange: n }, Kr = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    C = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Re(t.type, w),
                      C
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (v) {
          W(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (y = qu), (qu = !1), y;
}
function Dn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ko(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Gn], delete t[Oo], delete t[Fd], delete t[Ud])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Gr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), (e = e.sibling);
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) mc(e, t, n), (n = n.sibling);
}
function mc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || Jt(n, t);
    case 6:
      var r = ee,
        l = ze;
      (ee = null),
        Ze(e, t, n),
        (ee = r),
        (ze = l),
        ee !== null &&
          (ze
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Jl(e.parentNode, n)
              : e.nodeType === 1 && Jl(e, n),
            Hn(e))
          : Jl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = ze),
        (ee = n.stateNode.containerInfo),
        (ze = !0),
        Ze(e, t, n),
        (ee = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ko(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (Jt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), Ze(e, t, n), (oe = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function es(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ep()),
      t.forEach(function (r) {
        var l = cp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(S(160));
        mc(o, i, l), (ee = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vc(t, e), (t = t.sibling);
}
function vc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), De(e), r & 4)) {
        try {
          Dn(3, e, e.return), kl(3, e);
        } catch (w) {
          W(e, e.return, w);
        }
        try {
          Dn(5, e, e.return);
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 1:
      Le(t, e), De(e), r & 512 && n !== null && Jt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        De(e),
        r & 512 && n !== null && Jt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          An(l, "");
        } catch (w) {
          W(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Us(l, o),
              wo(u, i);
            var a = wo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                p = s[i + 1];
              h === "style"
                ? Ws(l, p)
                : h === "dangerouslySetInnerHTML"
                ? Bs(l, p)
                : h === "children"
                ? An(l, p)
                : ai(l, h, p, a);
            }
            switch (u) {
              case "input":
                ho(l, o);
                break;
              case "textarea":
                $s(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? qt(l, !!o.multiple, g, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? qt(l, !!o.multiple, o.defaultValue, !0)
                      : qt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Gn] = o;
          } catch (w) {
            W(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Le(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hn(t.containerInfo);
        } catch (w) {
          W(e, e.return, w);
        }
      break;
    case 4:
      Le(t, e), De(e);
      break;
    case 13:
      Le(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Vi = K())),
        r & 4 && es(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (a = oe) || h), Le(t, e), (oe = a)) : Le(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (N = e, h = e.child; h !== null; ) {
            for (p = N = h; N !== null; ) {
              switch (((m = N), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dn(4, m, m.return);
                  break;
                case 1:
                  Jt(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      W(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Jt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ns(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (N = g)) : ns(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Vs("display", i)));
              } catch (w) {
                W(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (w) {
                W(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), De(e), r & 4 && es(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (An(l, ""), (r.flags &= -33));
          var o = bu(e);
          Go(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = bu(e);
          Xo(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function np(e, t, n) {
  (N = e), gc(e);
}
function gc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || _r;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || oe;
        u = _r;
        var a = oe;
        if (((_r = i), (oe = s) && !a))
          for (N = l; N !== null; )
            (i = N),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? rs(l)
                : s !== null
                ? ((s.return = i), (N = s))
                : rs(l);
        for (; o !== null; ) (N = o), gc(o), (o = o.sibling);
        (N = l), (_r = u), (oe = a);
      }
      ts(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : ts(e);
  }
}
function ts(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && $u(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                $u(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Hn(p);
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
              throw Error(S(163));
          }
        oe || (t.flags & 512 && Yo(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ns(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function rs(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            Yo(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Yo(t);
          } catch (s) {
            W(t, i, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var rp = Math.ceil,
  il = Je.ReactCurrentDispatcher,
  Ai = Je.ReactCurrentOwner,
  Ne = Je.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  Y = null,
  te = 0,
  ve = 0,
  Zt = gt(0),
  J = 0,
  tr = null,
  Tt = 0,
  El = 0,
  Bi = 0,
  Fn = null,
  fe = null,
  Vi = 0,
  fn = 1 / 0,
  Be = null,
  ul = !1,
  Jo = null,
  ct = null,
  Pr = !1,
  rt = null,
  sl = 0,
  Un = 0,
  Zo = null,
  Ur = -1,
  $r = 0;
function se() {
  return I & 6 ? K() : Ur !== -1 ? Ur : (Ur = K());
}
function ft(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Ad.transition !== null
      ? ($r === 0 && ($r = ta()), $r)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sa(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (Zo = null), Error(S(185)));
  or(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (El |= n), J === 4 && tt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((fn = K() + 500), wl && yt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Af(e, t);
  var r = Qr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && du(n), t === 1))
      e.tag === 0 ? $d(ls.bind(null, e)) : Pa(ls.bind(null, e)),
        Md(function () {
          !(I & 6) && yt();
        }),
        (n = null);
    else {
      switch (na(r)) {
        case 1:
          n = hi;
          break;
        case 4:
          n = bs;
          break;
        case 16:
          n = Hr;
          break;
        case 536870912:
          n = ea;
          break;
        default:
          n = Hr;
      }
      n = Nc(n, yc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yc(e, t) {
  if (((Ur = -1), ($r = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Qr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = Sc();
    (b !== e || te !== t) && ((Be = null), (fn = K() + 500), Pt(e, t));
    do
      try {
        ip();
        break;
      } catch (u) {
        wc(e, u);
      }
    while (!0);
    Pi(),
      (il.current = o),
      (I = l),
      Y !== null ? (t = 0) : ((b = null), (te = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Co(e)), l !== 0 && ((r = l), (t = qo(e, l)))), t === 1)
    )
      throw ((n = tr), Pt(e, 0), tt(e, r), me(e, K()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !lp(l) &&
          ((t = al(e, r)),
          t === 2 && ((o = Co(e)), o !== 0 && ((r = o), (t = qo(e, o)))),
          t === 1))
      )
        throw ((n = tr), Pt(e, 0), tt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          kt(e, fe, Be);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Vi + 500 - K()), 10 < t))
          ) {
            if (Qr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = To(kt.bind(null, e, fe, Be), t);
            break;
          }
          kt(e, fe, Be);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = To(kt.bind(null, e, fe, Be), r);
            break;
          }
          kt(e, fe, Be);
          break;
        case 5:
          kt(e, fe, Be);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? yc.bind(null, e) : null;
}
function qo(e, t) {
  var n = Fn;
  return (
    e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256),
    (e = al(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && bo(t)),
    e
  );
}
function bo(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function lp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Bi,
      t &= ~El,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ls(e) {
  if (I & 6) throw Error(S(327));
  rn();
  var t = Qr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Co(e);
    r !== 0 && ((t = r), (n = qo(e, r)));
  }
  if (n === 1) throw ((n = tr), Pt(e, 0), tt(e, t), me(e, K()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, fe, Be),
    me(e, K()),
    null
  );
}
function Wi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((fn = K() + 500), wl && yt());
  }
}
function Ot(e) {
  rt !== null && rt.tag === 0 && !(I & 6) && rn();
  var t = I;
  I |= 1;
  var n = Ne.transition,
    r = M;
  try {
    if (((Ne.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ne.transition = n), (I = t), !(I & 6) && yt();
  }
}
function Hi() {
  (ve = Zt.current), U(Zt);
}
function Pt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Id(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Ci(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jr();
          break;
        case 3:
          an(), U(pe), U(ie), Oi();
          break;
        case 5:
          Ti(r);
          break;
        case 4:
          an();
          break;
        case 13:
          U(A);
          break;
        case 19:
          U(A);
          break;
        case 10:
          ji(r.type._context);
          break;
        case 22:
        case 23:
          Hi();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = dt(e.current, null)),
    (te = ve = t),
    (J = 0),
    (tr = null),
    (Bi = El = Tt = 0),
    (fe = Fn = null),
    Nt !== null)
  ) {
    for (t = 0; t < Nt.length; t++)
      if (((n = Nt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Nt = null;
  }
  return e;
}
function wc(e, t) {
  do {
    var n = Y;
    try {
      if ((Pi(), (Mr.current = ol), ll)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ll = !1;
      }
      if (
        ((zt = 0),
        (q = G = B = null),
        (Mn = !1),
        (qn = 0),
        (Ai.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (tr = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Qu(i);
          if (g !== null) {
            (g.flags &= -257),
              Ku(g, i, u, o, t),
              g.mode & 1 && Hu(o, a, t),
              (t = g),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(o, a, t), Qi();
              break e;
            }
            s = Error(S(426));
          }
        } else if ($ && u.mode & 1) {
          var C = Qu(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Ku(C, i, u, o, t),
              Ni(cn(s, u));
            break e;
          }
        }
        (o = s = cn(s, u)),
          J !== 4 && (J = 2),
          Fn === null ? (Fn = [o]) : Fn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = nc(o, s, t);
              Uu(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ct === null || !ct.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = rc(o, u, t);
                Uu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      kc(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sc() {
  var e = il.current;
  return (il.current = ol), e === null ? ol : e;
}
function Qi() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    b === null || (!(Tt & 268435455) && !(El & 268435455)) || tt(b, te);
}
function al(e, t) {
  var n = I;
  I |= 2;
  var r = Sc();
  (b !== e || te !== t) && ((Be = null), Pt(e, t));
  do
    try {
      op();
      break;
    } catch (l) {
      wc(e, l);
    }
  while (!0);
  if ((Pi(), (I = n), (il.current = r), Y !== null)) throw Error(S(261));
  return (b = null), (te = 0), J;
}
function op() {
  for (; Y !== null; ) xc(Y);
}
function ip() {
  for (; Y !== null && !zf(); ) xc(Y);
}
function xc(e) {
  var t = Cc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? kc(e) : (Y = t),
    (Ai.current = null);
}
function kc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (Y = null);
        return;
      }
    } else if (((n = qd(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function kt(e, t, n) {
  var r = M,
    l = Ne.transition;
  try {
    (Ne.transition = null), (M = 1), up(e, t, n, r);
  } finally {
    (Ne.transition = l), (M = r);
  }
  return null;
}
function up(e, t, n, r) {
  do rn();
  while (rt !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Bf(e, o),
    e === b && ((Y = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pr ||
      ((Pr = !0),
      Nc(Hr, function () {
        return rn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var i = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Ai.current = null),
      tp(e, n),
      vc(n, e),
      Pd(Ro),
      (Kr = !!Lo),
      (Ro = Lo = null),
      (e.current = n),
      np(n),
      Tf(),
      (I = u),
      (M = i),
      (Ne.transition = o);
  } else e.current = n;
  if (
    (Pr && ((Pr = !1), (rt = e), (sl = l)),
    (o = e.pendingLanes),
    o === 0 && (ct = null),
    Mf(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ul) throw ((ul = !1), (e = Jo), (Jo = null), e);
  return (
    sl & 1 && e.tag !== 0 && rn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Zo ? Un++ : ((Un = 0), (Zo = e))) : (Un = 0),
    yt(),
    null
  );
}
function rn() {
  if (rt !== null) {
    var e = na(sl),
      t = Ne.transition,
      n = M;
    try {
      if (((Ne.transition = null), (M = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (sl = 0), I & 6)) throw Error(S(331));
        var l = I;
        for (I |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var h = N;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (N = p);
                  else
                    for (; N !== null; ) {
                      h = N;
                      var m = h.sibling,
                        g = h.return;
                      if ((pc(h), h === a)) {
                        N = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (N = m);
                        break;
                      }
                      N = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (N = f);
                break e;
              }
              N = o.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          i = N;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (N = d);
          else
            e: for (i = c; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kl(9, u);
                  }
                } catch (E) {
                  W(u, u.return, E);
                }
              if (u === i) {
                N = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (N = v);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((I = l), yt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ne.transition = t);
    }
  }
  return !1;
}
function os(e, t, n) {
  (t = cn(n, t)),
    (t = nc(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (or(e, 1, t), me(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) os(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        os(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = cn(n, e)),
            (e = rc(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (or(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (J === 4 || (J === 3 && (te & 130023424) === te && 500 > K() - Vi)
        ? Pt(e, 0)
        : (Bi |= n)),
    me(e, t);
}
function Ec(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (or(e, t, n), me(e, n));
}
function ap(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ec(e, n);
}
function cp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Ec(e, n);
}
var Cc;
Cc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Zd(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && ja(t, br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fr(e, t), (e = t.pendingProps);
      var l = on(t, ie.current);
      nn(t, n), (l = Mi(null, t, r, e, l, n));
      var o = Di();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((o = !0), Zr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ri(t),
            (l.updater = xl),
            (t.stateNode = l),
            (l._reactInternals = t),
            $o(t, r, e, n),
            (t = Vo(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && Ei(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = dp(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = Bo(null, t, r, e, n);
            break e;
          case 1:
            t = Gu(null, t, r, e, n);
            break e;
          case 11:
            t = Yu(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Bo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Gu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((uc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ia(e, t),
          nl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = cn(Error(S(423)), t)), (t = Ju(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = cn(Error(S(424)), t)), (t = Ju(e, t, r, n, l));
            break e;
          } else
            for (
              ge = st(t.stateNode.containerInfo.firstChild),
                ye = t,
                $ = !0,
                Te = null,
                n = Ta(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((un(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ma(t),
        e === null && Do(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        zo(r, l) ? (i = null) : o !== null && zo(r, o) && (t.flags |= 32),
        ic(e, t),
        ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Do(t), null;
    case 13:
      return sc(e, t, n);
    case 4:
      return (
        zi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Yu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(el, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Me(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Fo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Fo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        nn(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        Xu(e, t, r, l, n)
      );
    case 15:
      return lc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Fr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Zr(t)) : (e = !1),
        nn(t, n),
        tc(t, r, l),
        $o(t, r, l, n),
        Vo(null, t, r, !0, e, n)
      );
    case 19:
      return ac(e, t, n);
    case 22:
      return oc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Nc(e, t) {
  return qs(e, t);
}
function fp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new fp(e, t, n, r);
}
function Ki(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dp(e) {
  if (typeof e == "function") return Ki(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fi)) return 11;
    if (e === di) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ar(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ki(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Bt:
        return jt(n.children, l, o, t);
      case ci:
        (i = 8), (l |= 8);
        break;
      case so:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = so), (e.lanes = o), e
        );
      case ao:
        return (e = Ce(13, n, t, l)), (e.elementType = ao), (e.lanes = o), e;
      case co:
        return (e = Ce(19, n, t, l)), (e.elementType = co), (e.lanes = o), e;
      case Ms:
        return Cl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Os:
              i = 10;
              break e;
            case Is:
              i = 9;
              break e;
            case fi:
              i = 11;
              break e;
            case di:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function jt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Cl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Ms),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function lo(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function oo(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Yi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new pp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ri(o),
    e
  );
}
function hp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: At,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _c(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return _a(e, n, t);
  }
  return t;
}
function Pc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Yi(n, r, !0, e, l, o, i, u, s)),
    (e.context = _c(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (o = Qe(r, l)),
    (o.callback = t ?? null),
    at(n, o, l),
    (e.current.lanes = l),
    or(e, l, r),
    me(e, r),
    e
  );
}
function Nl(e, t, n, r) {
  var l = t.current,
    o = se(),
    i = ft(l);
  return (
    (n = _c(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, i)),
    e !== null && (Ie(e, l, i, o), Ir(e, l, i)),
    i
  );
}
function cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function is(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xi(e, t) {
  is(e, t), (e = e.alternate) && is(e, t);
}
function mp() {
  return null;
}
var jc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Gi(e) {
  this._internalRoot = e;
}
_l.prototype.render = Gi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Nl(e, t, null, null);
};
_l.prototype.unmount = Gi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      Nl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function _l(e) {
  this._internalRoot = e;
}
_l.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = oa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && ua(e);
  }
};
function Ji(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function us() {}
function vp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = cl(i);
        o.call(a);
      };
    }
    var i = Pc(t, r, e, 0, null, !1, !1, "", us);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      Yn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = cl(s);
      u.call(a);
    };
  }
  var s = Yi(e, 0, !1, null, null, !1, !1, "", us);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Yn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      Nl(t, s, n, r);
    }),
    s
  );
}
function jl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = cl(i);
        u.call(s);
      };
    }
    Nl(t, i, e, l);
  } else i = vp(n, t, e, l, r);
  return cl(i);
}
ra = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jn(t.pendingLanes);
        n !== 0 &&
          (mi(t, n | 1), me(t, K()), !(I & 6) && ((fn = K() + 500), yt()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        Xi(e, 1);
  }
};
vi = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    Xi(e, 134217728);
  }
};
la = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    Xi(e, t);
  }
};
oa = function () {
  return M;
};
ia = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
xo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ho(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(S(90));
            Fs(r), ho(r, l);
          }
        }
      }
      break;
    case "textarea":
      $s(e, n);
      break;
    case "select":
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
Ks = Wi;
Ys = Ot;
var gp = { usingClientEntryPoint: !1, Events: [ur, Qt, yl, Hs, Qs, Wi] },
  Nn = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  yp = {
    bundleType: Nn.bundleType,
    version: Nn.version,
    rendererPackageName: Nn.rendererPackageName,
    rendererConfig: Nn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Js(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Nn.findFiberByHostInstance || mp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber)
    try {
      (hl = jr.inject(yp)), ($e = jr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ji(t)) throw Error(S(200));
  return hp(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!Ji(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = jc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Yi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Yn(e.nodeType === 8 ? e.parentNode : e),
    new Gi(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Js(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Ot(e);
};
Se.hydrate = function (e, t, n) {
  if (!Pl(t)) throw Error(S(200));
  return jl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!Ji(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = jc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Pc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    Yn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new _l(t);
};
Se.render = function (e, t, n) {
  if (!Pl(t)) throw Error(S(200));
  return jl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Pl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Ot(function () {
        jl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = Wi;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return jl(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function Lc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lc);
    } catch (e) {
      console.error(e);
    }
}
Lc(), (Ls.exports = Se);
var wp = Ls.exports,
  Rc,
  ss = wp;
(Rc = ss.createRoot), ss.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lt || (lt = {}));
const as = "popstate";
function Sp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ei(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : fl(l);
  }
  return kp(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function zc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xp() {
  return Math.random().toString(36).substr(2, 8);
}
function cs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ei(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    nr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? mn(t) : t,
      { state: n, key: (t && t.key) || r || xp() }
    )
  );
}
function fl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function mn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function kp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = lt.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), i.replaceState(nr({}, i.state, { idx: a }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    u = lt.Pop;
    let C = h(),
      f = C == null ? null : C - a;
    (a = C), s && s({ action: u, location: w.location, delta: f });
  }
  function m(C, f) {
    u = lt.Push;
    let c = ei(w.location, C, f);
    a = h() + 1;
    let d = cs(c, a),
      v = w.createHref(c);
    try {
      i.pushState(d, "", v);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(v);
    }
    o && s && s({ action: u, location: w.location, delta: 1 });
  }
  function g(C, f) {
    u = lt.Replace;
    let c = ei(w.location, C, f);
    a = h();
    let d = cs(c, a),
      v = w.createHref(c);
    i.replaceState(d, "", v),
      o && s && s({ action: u, location: w.location, delta: 0 });
  }
  function y(C) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof C == "string" ? C : fl(C);
    return (
      (c = c.replace(/ $/, "%20")),
      X(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(C) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(as, p),
        (s = C),
        () => {
          l.removeEventListener(as, p), (s = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: y,
    encodeLocation(C) {
      let f = y(C);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: g,
    go(C) {
      return i.go(C);
    },
  };
  return w;
}
var fs;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fs || (fs = {}));
function Ep(e, t, n) {
  return n === void 0 && (n = "/"), Cp(e, t, n, !1);
}
function Cp(e, t, n, r) {
  let l = typeof t == "string" ? mn(t) : t,
    o = Zi(l.pathname || "/", n);
  if (o == null) return null;
  let i = Tc(e);
  Np(i);
  let u = null;
  for (let s = 0; u == null && s < i.length; ++s) {
    let a = Dp(o);
    u = Ip(i[s], a, r);
  }
  return u;
}
function Tc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (X(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = pt([r, s.relativePath]),
      h = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Tc(o.children, t, h, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Tp(a, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of Oc(o.path)) l(o, i, s);
    }),
    t
  );
}
function Oc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Oc(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Np(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Op(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const _p = /^:[\w-]+$/,
  Pp = 3,
  jp = 2,
  Lp = 1,
  Rp = 10,
  zp = -2,
  ds = (e) => e === "*";
function Tp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ds) && (r += zp),
    t && (r += jp),
    n
      .filter((l) => !ds(l))
      .reduce((l, o) => l + (_p.test(o) ? Pp : o === "" ? Lp : Rp), r)
  );
}
function Op(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ip(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      h = o === "/" ? t : t.slice(o.length) || "/",
      p = ps(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        h
      ),
      m = s.route;
    if (
      (!p &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (p = ps(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          h
        )),
      !p)
    )
      return null;
    Object.assign(l, p.params),
      i.push({
        params: l,
        pathname: pt([o, p.pathname]),
        pathnameBase: Ap(pt([o, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== "/" && (o = pt([o, p.pathnameBase]));
  }
  return i;
}
function ps(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Mp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let { paramName: m, isOptional: g } = h;
      if (m === "*") {
        let w = u[p] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = u[p];
      return (
        g && !y ? (a[m] = void 0) : (a[m] = (y || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Mp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    zc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Dp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      zc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Zi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Fp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? mn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Up(n, t)) : t,
    search: Bp(r),
    hash: Vp(l),
  };
}
function Up(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function io(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function $p(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ic(e, t) {
  let n = $p(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Mc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = mn(e))
    : ((l = nr({}, e)),
      X(
        !l.pathname || !l.pathname.includes("?"),
        io("?", "pathname", "search", l)
      ),
      X(
        !l.pathname || !l.pathname.includes("#"),
        io("#", "pathname", "hash", l)
      ),
      X(!l.search || !l.search.includes("#"), io("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (i == null) u = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let s = Fp(l, u),
    a = i && i !== "/" && i.endsWith("/"),
    h = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ap = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Bp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Vp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Wp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Dc = ["post", "put", "patch", "delete"];
new Set(Dc);
const Hp = ["get", ...Dc];
new Set(Hp);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
  return (
    (rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rr.apply(this, arguments)
  );
}
const qi = k.createContext(null),
  Qp = k.createContext(null),
  Dt = k.createContext(null),
  Ll = k.createContext(null),
  Ft = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fc = k.createContext(null);
function Kp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ar() || X(!1);
  let { basename: r, navigator: l } = k.useContext(Dt),
    { hash: o, pathname: i, search: u } = $c(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : pt([r, i])),
    l.createHref({ pathname: s, search: u, hash: o })
  );
}
function ar() {
  return k.useContext(Ll) != null;
}
function Rl() {
  return ar() || X(!1), k.useContext(Ll).location;
}
function Uc(e) {
  k.useContext(Dt).static || k.useLayoutEffect(e);
}
function Ut() {
  let { isDataRoute: e } = k.useContext(Ft);
  return e ? oh() : Yp();
}
function Yp() {
  ar() || X(!1);
  let e = k.useContext(qi),
    { basename: t, future: n, navigator: r } = k.useContext(Dt),
    { matches: l } = k.useContext(Ft),
    { pathname: o } = Rl(),
    i = JSON.stringify(Ic(l, n.v7_relativeSplatPath)),
    u = k.useRef(!1);
  return (
    Uc(() => {
      u.current = !0;
    }),
    k.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !u.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let p = Mc(a, JSON.parse(i), o, h.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : pt([t, p.pathname])),
          (h.replace ? r.replace : r.push)(p, h.state, h);
      },
      [t, r, i, o, e]
    )
  );
}
function $c(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(Dt),
    { matches: l } = k.useContext(Ft),
    { pathname: o } = Rl(),
    i = JSON.stringify(Ic(l, r.v7_relativeSplatPath));
  return k.useMemo(() => Mc(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function Xp(e, t) {
  return Gp(e, t);
}
function Gp(e, t, n, r) {
  ar() || X(!1);
  let { navigator: l } = k.useContext(Dt),
    { matches: o } = k.useContext(Ft),
    i = o[o.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let a = Rl(),
    h;
  if (t) {
    var p;
    let C = typeof t == "string" ? mn(t) : t;
    s === "/" || ((p = C.pathname) != null && p.startsWith(s)) || X(!1),
      (h = C);
  } else h = a;
  let m = h.pathname || "/",
    g = m;
  if (s !== "/") {
    let C = s.replace(/^\//, "").split("/");
    g = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let y = Ep(e, { pathname: g }),
    w = eh(
      y &&
        y.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, u, C.params),
            pathname: pt([
              s,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? s
                : pt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && w
    ? k.createElement(
        Ll.Provider,
        {
          value: {
            location: rr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: lt.Pop,
          },
        },
        w
      )
    : w;
}
function Jp() {
  let e = lh(),
    t = Wp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: l }, n) : null,
    null
  );
}
const Zp = k.createElement(Jp, null);
class qp extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          Ft.Provider,
          { value: this.props.routeContext },
          k.createElement(Fc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function bp(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(qi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Ft.Provider, { value: t }, r)
  );
}
function eh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let h = i.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    h >= 0 || X(!1), (i = i.slice(0, Math.min(i.length, h + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < i.length; h++) {
      let p = i[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
        p.route.id)
      ) {
        let { loaderData: m, errors: g } = n,
          y =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!g || g[p.route.id] === void 0);
        if (p.route.lazy || y) {
          (s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((h, p, m) => {
    let g,
      y = !1,
      w = null,
      C = null;
    n &&
      ((g = u && p.route.id ? u[p.route.id] : void 0),
      (w = p.route.errorElement || Zp),
      s &&
        (a < 0 && m === 0
          ? ((y = !0), (C = null))
          : a === m &&
            ((y = !0), (C = p.route.hydrateFallbackElement || null))));
    let f = t.concat(i.slice(0, m + 1)),
      c = () => {
        let d;
        return (
          g
            ? (d = w)
            : y
            ? (d = C)
            : p.route.Component
            ? (d = k.createElement(p.route.Component, null))
            : p.route.element
            ? (d = p.route.element)
            : (d = h),
          k.createElement(bp, {
            match: p,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? k.createElement(qp, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Ac = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Ac || {}),
  dl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(dl || {});
function th(e) {
  let t = k.useContext(qi);
  return t || X(!1), t;
}
function nh(e) {
  let t = k.useContext(Qp);
  return t || X(!1), t;
}
function rh(e) {
  let t = k.useContext(Ft);
  return t || X(!1), t;
}
function Bc(e) {
  let t = rh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function lh() {
  var e;
  let t = k.useContext(Fc),
    n = nh(dl.UseRouteError),
    r = Bc(dl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function oh() {
  let { router: e } = th(Ac.UseNavigateStable),
    t = Bc(dl.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Uc(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, rr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Et(e) {
  X(!1);
}
function ih(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: o,
    static: i = !1,
    future: u,
  } = e;
  ar() && X(!1);
  let s = t.replace(/^\/*/, "/"),
    a = k.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: rr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, o, i]
    );
  typeof r == "string" && (r = mn(r));
  let {
      pathname: h = "/",
      search: p = "",
      hash: m = "",
      state: g = null,
      key: y = "default",
    } = r,
    w = k.useMemo(() => {
      let C = Zi(h, s);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: m, state: g, key: y },
            navigationType: l,
          };
    }, [s, h, p, m, g, y, l]);
  return w == null
    ? null
    : k.createElement(
        Dt.Provider,
        { value: a },
        k.createElement(Ll.Provider, { children: n, value: w })
      );
}
function uh(e) {
  let { children: t, location: n } = e;
  return Xp(ti(t), n);
}
new Promise(() => {});
function ti(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, ti(r.props.children, o));
        return;
      }
      r.type !== Et && X(!1), !r.props.index || !r.props.children || X(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = ti(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ni() {
  return (
    (ni = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ni.apply(this, arguments)
  );
}
function sh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function ah(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ch(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ah(e);
}
const fh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  dh = "6";
try {
  window.__reactRouterVersion = dh;
} catch {}
const ph = "startTransition",
  hs = sf[ph];
function hh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = k.useRef();
  o.current == null && (o.current = Sp({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = k.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    h = k.useCallback(
      (p) => {
        a && hs ? hs(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    k.useLayoutEffect(() => i.listen(h), [i, h]),
    k.createElement(ih, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
      future: r,
    })
  );
}
const mh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  vh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ms = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: h,
        unstable_viewTransition: p,
      } = t,
      m = sh(t, fh),
      { basename: g } = k.useContext(Dt),
      y,
      w = !1;
    if (typeof a == "string" && vh.test(a) && ((y = a), mh))
      try {
        let d = new URL(window.location.href),
          v = a.startsWith("//") ? new URL(d.protocol + a) : new URL(a),
          E = Zi(v.pathname, g);
        v.origin === d.origin && E != null
          ? (a = E + v.search + v.hash)
          : (w = !0);
      } catch {}
    let C = Kp(a, { relative: l }),
      f = gh(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: l,
        unstable_viewTransition: p,
      });
    function c(d) {
      r && r(d), d.defaultPrevented || f(d);
    }
    return k.createElement(
      "a",
      ni({}, m, { href: y || C, onClick: w || o ? r : c, ref: n, target: s })
    );
  });
var vs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(vs || (vs = {}));
var gs;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(gs || (gs = {}));
function gh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = Ut(),
    a = Rl(),
    h = $c(e, { relative: i });
  return k.useCallback(
    (p) => {
      if (ch(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : fl(a) === fl(h);
        s(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [a, s, h, r, l, n, e, o, i, u]
  );
}
function yh() {
  const [e, t] = k.useState(""),
    [n, r] = k.useState(""),
    [l, o] = k.useState(""),
    i = Ut(),
    u = async (s) => {
      s.preventDefault();
      try {
        const a = await fetch("/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: e, password: n }),
        });
        if (a.ok) {
          const { token: h, role: p } = await a.json();
          localStorage.setItem("token", h),
            localStorage.setItem("role", p),
            i(p === "admin" ? "/admin" : "/dashboard");
        } else o("Invalid credentials");
      } catch (a) {
        o("Error logging in"), console.log(a);
      }
    };
  return x.jsx("div", {
    className: "min-h-screen flex items-center justify-center",
    children: x.jsxs("div", {
      className: "w-full max-w-md",
      children: [
        x.jsxs("form", {
          className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
          onSubmit: u,
          children: [
            x.jsx("h2", {
              className: "text-2xl font-bold mb-4 text-center",
              children: "Login",
            }),
            x.jsx("input", {
              className: "border p-2 mb-4 w-full",
              type: "email",
              placeholder: "Email",
              value: e,
              onChange: (s) => t(s.target.value),
            }),
            x.jsx("input", {
              className: "border p-2 mb-4 w-full",
              type: "password",
              placeholder: "Password",
              value: n,
              onChange: (s) => r(s.target.value),
            }),
            l && x.jsx("p", { className: "text-red-500 mb-4", children: l }),
            x.jsx("button", {
              className: "bg-blue-500 text-white px-4 py-2 w-full",
              type: "submit",
              children: "Login",
            }),
          ],
        }),
        x.jsxs("p", {
          className: "text-center",
          children: [
            "Don`‘`t have an account?",
            " ",
            x.jsx("a", {
              href: "/register",
              className: "text-blue-500",
              children: "Register",
            }),
          ],
        }),
      ],
    }),
  });
}
function wh() {
  const [e, t] = k.useState(""),
    [n, r] = k.useState(""),
    [l, o] = k.useState(""),
    [i, u] = k.useState(""),
    [s, a] = k.useState(""),
    h = Ut(),
    p = async (m) => {
      m.preventDefault();
      try {
        (
          await fetch("/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: e,
              password: n,
              idNumber: l,
              mobile: i,
            }),
          })
        ).ok
          ? h("/")
          : a("Error registering user");
      } catch (g) {
        a("Registration failed"), console.log(g);
      }
    };
  return x.jsx("div", {
    className: "min-h-screen flex items-center justify-center",
    children: x.jsxs("div", {
      className: "w-full max-w-md",
      children: [
        x.jsxs("form", {
          className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
          onSubmit: p,
          children: [
            x.jsx("h2", {
              className: "text-2xl font-bold mb-4 text-center",
              children: "Register",
            }),
            x.jsx("input", {
              className: "border p-2 mb-4 w-full",
              type: "email",
              placeholder: "Email",
              value: e,
              onChange: (m) => t(m.target.value),
            }),
            x.jsx("input", {
              className: "border p-2 mb-4 w-full",
              type: "password",
              placeholder: "Password",
              value: n,
              onChange: (m) => r(m.target.value),
            }),
            x.jsx("input", {
              className: "border p-2 mb-4 w-full",
              type: "text",
              placeholder: "ID Number",
              value: l,
              onChange: (m) => o(m.target.value),
            }),
            x.jsx("input", {
              className: "border p-2 mb-4 w-full",
              type: "text",
              placeholder: "Mobile Number",
              value: i,
              onChange: (m) => u(m.target.value),
            }),
            s && x.jsx("p", { className: "text-red-500 mb-4", children: s }),
            x.jsx("button", {
              className: "bg-blue-500 text-white px-4 py-2 w-full",
              type: "submit",
              children: "Register",
            }),
          ],
        }),
        x.jsxs("p", {
          className: "text-center",
          children: [
            "Already have an account?",
            " ",
            x.jsx("a", {
              href: "/",
              className: "text-blue-500",
              children: "Login",
            }),
          ],
        }),
      ],
    }),
  });
}
function Sh() {
  const [e, t] = k.useState([]),
    n = Ut();
  return (
    k.useEffect(() => {
      (async () => {
        const l = localStorage.getItem("token"),
          o = await fetch("/loan/loans", {
            headers: { Authorization: `Bearer ${l}` },
          });
        if (o.ok) {
          const i = await o.json();
          t(i);
        }
      })();
    }, []),
    x.jsxs("div", {
      className: "p-6",
      children: [
        x.jsx("h1", {
          className: "text-2xl font-bold mb-4",
          children: "Your Loans",
        }),
        x.jsx("button", {
          onClick: () => n("/apply-loan"),
          className: "bg-blue-500 text-white px-4 py-2 mb-4",
          children: "Apply for Loan",
        }),
        e.length === 0
          ? x.jsx("p", { children: "No loans available" })
          : x.jsx("ul", {
              children: e.map((r) =>
                x.jsxs(
                  "li",
                  {
                    className: "border-b p-2",
                    children: [
                      "Amount: Ksh ",
                      r.amount,
                      ", Status: ",
                      r.status,
                    ],
                  },
                  r._id
                )
              ),
            }),
      ],
    })
  );
}
function xh() {
  const [e, t] = k.useState(""),
    [n, r] = k.useState(""),
    [l, o] = k.useState(""),
    i = Ut(),
    u = async (s) => {
      s.preventDefault();
      const a = localStorage.getItem("token");
      try {
        (
          await fetch("/loan/apply-loan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${a}`,
            },
            body: JSON.stringify({ amount: e, duration: n }),
          })
        ).ok
          ? i("/dashboard")
          : o("Error applying for loan");
      } catch (h) {
        o("Error applying for loan"), console.log(h);
      }
    };
  return x.jsx("div", {
    className: "min-h-screen flex items-center justify-center",
    children: x.jsx("div", {
      className: "w-full max-w-md",
      children: x.jsxs("form", {
        className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
        onSubmit: u,
        children: [
          x.jsx("h2", {
            className: "text-2xl font-bold mb-4 text-center",
            children: "Apply for Loan",
          }),
          x.jsx("input", {
            className: "border p-2 mb-4 w-full",
            type: "number",
            placeholder: "Loan Amount",
            value: e,
            onChange: (s) => t(s.target.value),
          }),
          x.jsx("input", {
            className: "border p-2 mb-4 w-full",
            type: "number",
            placeholder: "Repayment Duration (months)",
            value: n,
            onChange: (s) => r(s.target.value),
          }),
          l && x.jsx("p", { className: "text-red-500 mb-4", children: l }),
          x.jsx("button", {
            className: "bg-blue-500 text-white px-4 py-2 w-full",
            type: "submit",
            children: "Apply",
          }),
        ],
      }),
    }),
  });
}
function kh() {
  const [e, t] = k.useState([]);
  k.useEffect(() => {
    (async () => {
      const l = localStorage.getItem("token"),
        o = await fetch("/admin/users", {
          headers: { Authorization: `Bearer ${l}` },
        });
      if (o.ok) {
        const i = await o.json();
        t(i);
      }
    })();
  }, []);
  const n = async (r, l) => {
    const o = localStorage.getItem("token");
    (
      await fetch(`/admin/loan/${r}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${o}`,
        },
        body: JSON.stringify({ decision: l }),
      })
    ).ok &&
      (alert(`Loan ${l === "approved" ? "approved" : "rejected"}`),
      t((u) =>
        u.map((s) =>
          s.loans.map((a) => (a._id === r ? { ...a, status: l } : a))
        )
      ));
  };
  return x.jsxs("div", {
    className: "p-6",
    children: [
      x.jsx("h1", {
        className: "text-2xl font-bold mb-4",
        children: "Admin Dashboard",
      }),
      e.length === 0
        ? x.jsx("p", { children: "No registered users" })
        : x.jsx("div", {
            className: "grid grid-cols-1 gap-4",
            children: e.map((r) =>
              x.jsxs(
                "div",
                {
                  className: "p-4 border rounded",
                  children: [
                    x.jsx("h2", {
                      className: "text-xl font-semibold",
                      children: r.email,
                    }),
                    x.jsxs("h3", { children: ["ID: ", r.idNumber] }),
                    x.jsxs("div", {
                      children: [
                        x.jsx("h3", {
                          className: "font-semibold",
                          children: "Loans",
                        }),
                        r.loans.length === 0
                          ? x.jsx("p", { children: "No loans" })
                          : x.jsx("ul", {
                              children: r.loans.map((l) =>
                                x.jsxs(
                                  "li",
                                  {
                                    className: "p-2",
                                    children: [
                                      x.jsxs("span", {
                                        children: ["Amount: $", l.amount],
                                      }),
                                      " |",
                                      x.jsxs("span", {
                                        children: ["Status: ", l.status],
                                      }),
                                      l.status === "pending" &&
                                        x.jsxs("div", {
                                          className: "mt-2",
                                          children: [
                                            x.jsx("button", {
                                              onClick: () =>
                                                n(l._id, "approved"),
                                              className:
                                                "bg-green-500 text-white px-3 py-1 rounded mr-2",
                                              children: "Approve",
                                            }),
                                            x.jsx("button", {
                                              onClick: () =>
                                                n(l._id, "rejected"),
                                              className:
                                                "bg-red-500 text-white px-3 py-1 rounded",
                                              children: "Reject",
                                            }),
                                          ],
                                        }),
                                    ],
                                  },
                                  l._id
                                )
                              ),
                            }),
                      ],
                    }),
                  ],
                },
                r._id
              )
            ),
          }),
    ],
  });
}
function Eh() {
  const e = Ut(),
    t = () => {
      localStorage.removeItem("token"), localStorage.removeItem("role"), e("/");
    },
    n = localStorage.getItem("role");
  return x.jsx("nav", {
    className: "bg-gray-800 p-4 text-white",
    children: x.jsxs("div", {
      className: "container mx-auto flex justify-between",
      children: [
        x.jsx("h1", {
          className: "text-2xl font-bold",
          children: "Gammaridge",
        }),
        x.jsxs("ul", {
          className: "flex space-x-4",
          children: [
            n === "user" &&
              x.jsx("li", {
                children: x.jsx(ms, {
                  to: "/dashboard",
                  children: "Dashboard",
                }),
              }),
            n === "admin" &&
              x.jsx("li", {
                children: x.jsx(ms, {
                  to: "/admin",
                  children: "Admin Dashboard",
                }),
              }),
            x.jsx("li", {
              children: x.jsx("button", { onClick: t, children: "Logout" }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Ch() {
  const [e, t] = k.useState(""),
    [n, r] = k.useState(""),
    [l, o] = k.useState(""),
    [i, u] = k.useState(""),
    s = Ut(),
    a = async (h) => {
      h.preventDefault();
      const p = localStorage.getItem("token");
      try {
        (
          await fetch("/admin/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${p}`,
            },
            body: JSON.stringify({ email: e, password: n, idNumber: l }),
          })
        ).ok
          ? s("/admin")
          : u("Error registering admin");
      } catch (m) {
        u("Error registering admin"), console.log(m);
      }
    };
  return x.jsx("div", {
    className: "min-h-screen flex items-center justify-center",
    children: x.jsx("div", {
      className: "w-full max-w-md",
      children: x.jsxs("form", {
        className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
        onSubmit: a,
        children: [
          x.jsx("h2", {
            className: "text-2xl font-bold mb-4 text-center",
            children: "Register Admin",
          }),
          x.jsx("input", {
            className: "border p-2 mb-4 w-full",
            type: "email",
            placeholder: "Email",
            value: e,
            onChange: (h) => t(h.target.value),
            required: !0,
          }),
          x.jsx("input", {
            className: "border p-2 mb-4 w-full",
            type: "text",
            placeholder: "ID Number",
            value: l,
            onChange: (h) => o(h.target.value),
            required: !0,
          }),
          x.jsx("input", {
            className: "border p-2 mb-4 w-full",
            type: "password",
            placeholder: "Password",
            value: n,
            onChange: (h) => r(h.target.value),
            required: !0,
          }),
          i && x.jsx("p", { className: "text-red-500 mb-4", children: i }),
          x.jsx("button", {
            className: "bg-blue-500 text-white px-4 py-2 w-full",
            type: "submit",
            children: "Register Admin",
          }),
        ],
      }),
    }),
  });
}
function Nh() {
  return x.jsxs(hh, {
    children: [
      x.jsx(Eh, {}),
      x.jsxs(uh, {
        children: [
          x.jsx(Et, { path: "/", element: x.jsx(yh, {}) }),
          x.jsx(Et, { path: "/register", element: x.jsx(wh, {}) }),
          x.jsx(Et, { path: "/dashboard", element: x.jsx(Sh, {}) }),
          x.jsx(Et, { path: "/apply-loan", element: x.jsx(xh, {}) }),
          x.jsx(Et, { path: "/admin/register", element: x.jsx(Ch, {}) }),
          x.jsx(Et, { path: "/admin", element: x.jsx(kh, {}) }),
        ],
      }),
    ],
  });
}
Rc(document.getElementById("root")).render(
  x.jsx(k.StrictMode, { children: x.jsx(Nh, {}) })
);
