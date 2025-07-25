import { openBlock as p, createElementBlock as g, createElementVNode as v, withDirectives as be, vModelCheckbox as Dt, createCommentVNode as _, Fragment as E, renderList as J, normalizeClass as F, normalizeStyle as ye, toDisplayString as H, createVNode as me, Transition as Ue, withCtx as We, withModifiers as L, vModelSelect as dl, withKeys as At, vModelText as Vt, resolveComponent as xe, renderSlot as _t, createBlock as ul } from "vue";
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oe = { exports: {} };
Oe.exports;
(function(e, s) {
  var t = 200, l = "__lodash_hash_undefined__", n = 9007199254740991, o = "[object Arguments]", r = "[object Array]", c = "[object Boolean]", a = "[object Date]", d = "[object Error]", m = "[object Function]", f = "[object GeneratorFunction]", y = "[object Map]", S = "[object Number]", T = "[object Object]", M = "[object Promise]", A = "[object RegExp]", w = "[object Set]", N = "[object String]", j = "[object Symbol]", I = "[object WeakMap]", pe = "[object ArrayBuffer]", Y = "[object DataView]", $ = "[object Float32Array]", B = "[object Float64Array]", z = "[object Int8Array]", de = "[object Int16Array]", ne = "[object Int32Array]", W = "[object Uint8Array]", De = "[object Uint8ClampedArray]", V = "[object Uint16Array]", ee = "[object Uint32Array]", Ce = /[\\^$.*+?()[\]{}|]/g, zt = /\w*$/, Ut = /^\[object .+?Constructor\]$/, Wt = /^(?:0|[1-9]\d*)$/, k = {};
  k[o] = k[r] = k[pe] = k[Y] = k[c] = k[a] = k[$] = k[B] = k[z] = k[de] = k[ne] = k[y] = k[S] = k[T] = k[A] = k[w] = k[N] = k[j] = k[W] = k[De] = k[V] = k[ee] = !0, k[d] = k[m] = k[I] = !1;
  var xt = typeof Me == "object" && Me && Me.Object === Object && Me, qt = typeof self == "object" && self && self.Object === Object && self, x = xt || qt || Function("return this")(), Qe = s && !s.nodeType && s, et = Qe && !0 && e && !e.nodeType && e, Gt = et && et.exports === Qe;
  function It(i, h) {
    return i.set(h[0], h[1]), i;
  }
  function Yt(i, h) {
    return i.add(h), i;
  }
  function Xt(i, h) {
    for (var u = -1, b = i ? i.length : 0; ++u < b && h(i[u], u, i) !== !1; )
      ;
    return i;
  }
  function Zt(i, h) {
    for (var u = -1, b = h.length, O = i.length; ++u < b; )
      i[O + u] = h[u];
    return i;
  }
  function tt(i, h, u, b) {
    var O = -1, D = i ? i.length : 0;
    for (b && D && (u = i[++O]); ++O < D; )
      u = h(u, i[O], O, i);
    return u;
  }
  function Jt(i, h) {
    for (var u = -1, b = Array(i); ++u < i; )
      b[u] = h(u);
    return b;
  }
  function Qt(i, h) {
    return i == null ? void 0 : i[h];
  }
  function st(i) {
    var h = !1;
    if (i != null && typeof i.toString != "function")
      try {
        h = !!(i + "");
      } catch {
      }
    return h;
  }
  function lt(i) {
    var h = -1, u = Array(i.size);
    return i.forEach(function(b, O) {
      u[++h] = [O, b];
    }), u;
  }
  function Ae(i, h) {
    return function(u) {
      return i(h(u));
    };
  }
  function it(i) {
    var h = -1, u = Array(i.size);
    return i.forEach(function(b) {
      u[++h] = b;
    }), u;
  }
  var es = Array.prototype, ts = Function.prototype, ge = Object.prototype, Ve = x["__core-js_shared__"], nt = function() {
    var i = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }(), ot = ts.toString, X = ge.hasOwnProperty, Te = ge.toString, ss = RegExp(
    "^" + ot.call(X).replace(Ce, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), rt = Gt ? x.Buffer : void 0, at = x.Symbol, ct = x.Uint8Array, ls = Ae(Object.getPrototypeOf, Object), is = Object.create, ns = ge.propertyIsEnumerable, os = es.splice, ht = Object.getOwnPropertySymbols, rs = rt ? rt.isBuffer : void 0, as = Ae(Object.keys, Object), Pe = ae(x, "DataView"), ue = ae(x, "Map"), Le = ae(x, "Promise"), Re = ae(x, "Set"), He = ae(x, "WeakMap"), fe = ae(Object, "create"), cs = le(Pe), hs = le(ue), ds = le(Le), us = le(Re), fs = le(He), dt = at ? at.prototype : void 0, ut = dt ? dt.valueOf : void 0;
  function te(i) {
    var h = -1, u = i ? i.length : 0;
    for (this.clear(); ++h < u; ) {
      var b = i[h];
      this.set(b[0], b[1]);
    }
  }
  function ms() {
    this.__data__ = fe ? fe(null) : {};
  }
  function bs(i) {
    return this.has(i) && delete this.__data__[i];
  }
  function ys(i) {
    var h = this.__data__;
    if (fe) {
      var u = h[i];
      return u === l ? void 0 : u;
    }
    return X.call(h, i) ? h[i] : void 0;
  }
  function ps(i) {
    var h = this.__data__;
    return fe ? h[i] !== void 0 : X.call(h, i);
  }
  function Cs(i, h) {
    var u = this.__data__;
    return u[i] = fe && h === void 0 ? l : h, this;
  }
  te.prototype.clear = ms, te.prototype.delete = bs, te.prototype.get = ys, te.prototype.has = ps, te.prototype.set = Cs;
  function q(i) {
    var h = -1, u = i ? i.length : 0;
    for (this.clear(); ++h < u; ) {
      var b = i[h];
      this.set(b[0], b[1]);
    }
  }
  function gs() {
    this.__data__ = [];
  }
  function Ts(i) {
    var h = this.__data__, u = Se(h, i);
    if (u < 0)
      return !1;
    var b = h.length - 1;
    return u == b ? h.pop() : os.call(h, u, 1), !0;
  }
  function Ss(i) {
    var h = this.__data__, u = Se(h, i);
    return u < 0 ? void 0 : h[u][1];
  }
  function vs(i) {
    return Se(this.__data__, i) > -1;
  }
  function ks(i, h) {
    var u = this.__data__, b = Se(u, i);
    return b < 0 ? u.push([i, h]) : u[b][1] = h, this;
  }
  q.prototype.clear = gs, q.prototype.delete = Ts, q.prototype.get = Ss, q.prototype.has = vs, q.prototype.set = ks;
  function oe(i) {
    var h = -1, u = i ? i.length : 0;
    for (this.clear(); ++h < u; ) {
      var b = i[h];
      this.set(b[0], b[1]);
    }
  }
  function _s() {
    this.__data__ = {
      hash: new te(),
      map: new (ue || q)(),
      string: new te()
    };
  }
  function Ms(i) {
    return ve(this, i).delete(i);
  }
  function ws(i) {
    return ve(this, i).get(i);
  }
  function Os(i) {
    return ve(this, i).has(i);
  }
  function Es(i, h) {
    return ve(this, i).set(i, h), this;
  }
  oe.prototype.clear = _s, oe.prototype.delete = Ms, oe.prototype.get = ws, oe.prototype.has = Os, oe.prototype.set = Es;
  function re(i) {
    this.__data__ = new q(i);
  }
  function $s() {
    this.__data__ = new q();
  }
  function Ds(i) {
    return this.__data__.delete(i);
  }
  function As(i) {
    return this.__data__.get(i);
  }
  function Vs(i) {
    return this.__data__.has(i);
  }
  function Ps(i, h) {
    var u = this.__data__;
    if (u instanceof q) {
      var b = u.__data__;
      if (!ue || b.length < t - 1)
        return b.push([i, h]), this;
      u = this.__data__ = new oe(b);
    }
    return u.set(i, h), this;
  }
  re.prototype.clear = $s, re.prototype.delete = Ds, re.prototype.get = As, re.prototype.has = Vs, re.prototype.set = Ps;
  function Ls(i, h) {
    var u = Fe(i) || il(i) ? Jt(i.length, String) : [], b = u.length, O = !!b;
    for (var D in i)
      (h || X.call(i, D)) && !(O && (D == "length" || el(D, b))) && u.push(D);
    return u;
  }
  function ft(i, h, u) {
    var b = i[h];
    (!(X.call(i, h) && pt(b, u)) || u === void 0 && !(h in i)) && (i[h] = u);
  }
  function Se(i, h) {
    for (var u = i.length; u--; )
      if (pt(i[u][0], h))
        return u;
    return -1;
  }
  function Rs(i, h) {
    return i && mt(h, Ne(h), i);
  }
  function je(i, h, u, b, O, D, K) {
    var P;
    if (b && (P = D ? b(i, O, D, K) : b(i)), P !== void 0)
      return P;
    if (!ke(i))
      return i;
    var Tt = Fe(i);
    if (Tt) {
      if (P = Zs(i), !h)
        return Is(i, P);
    } else {
      var ce = se(i), St = ce == m || ce == f;
      if (ol(i))
        return Bs(i, h);
      if (ce == T || ce == o || St && !D) {
        if (st(i))
          return D ? i : {};
        if (P = Js(St ? {} : i), !h)
          return Ys(i, Rs(P, i));
      } else {
        if (!k[ce])
          return D ? i : {};
        P = Qs(i, ce, je, h);
      }
    }
    K || (K = new re());
    var vt = K.get(i);
    if (vt)
      return vt;
    if (K.set(i, P), !Tt)
      var kt = u ? Xs(i) : Ne(i);
    return Xt(kt || i, function(Be, _e) {
      kt && (_e = Be, Be = i[_e]), ft(P, _e, je(Be, h, u, b, _e, i, K));
    }), P;
  }
  function Hs(i) {
    return ke(i) ? is(i) : {};
  }
  function js(i, h, u) {
    var b = h(i);
    return Fe(i) ? b : Zt(b, u(i));
  }
  function Ks(i) {
    return Te.call(i);
  }
  function Fs(i) {
    if (!ke(i) || sl(i))
      return !1;
    var h = gt(i) || st(i) ? ss : Ut;
    return h.test(le(i));
  }
  function Ns(i) {
    if (!yt(i))
      return as(i);
    var h = [];
    for (var u in Object(i))
      X.call(i, u) && u != "constructor" && h.push(u);
    return h;
  }
  function Bs(i, h) {
    if (h)
      return i.slice();
    var u = new i.constructor(i.length);
    return i.copy(u), u;
  }
  function Ke(i) {
    var h = new i.constructor(i.byteLength);
    return new ct(h).set(new ct(i)), h;
  }
  function zs(i, h) {
    var u = h ? Ke(i.buffer) : i.buffer;
    return new i.constructor(u, i.byteOffset, i.byteLength);
  }
  function Us(i, h, u) {
    var b = h ? u(lt(i), !0) : lt(i);
    return tt(b, It, new i.constructor());
  }
  function Ws(i) {
    var h = new i.constructor(i.source, zt.exec(i));
    return h.lastIndex = i.lastIndex, h;
  }
  function xs(i, h, u) {
    var b = h ? u(it(i), !0) : it(i);
    return tt(b, Yt, new i.constructor());
  }
  function qs(i) {
    return ut ? Object(ut.call(i)) : {};
  }
  function Gs(i, h) {
    var u = h ? Ke(i.buffer) : i.buffer;
    return new i.constructor(u, i.byteOffset, i.length);
  }
  function Is(i, h) {
    var u = -1, b = i.length;
    for (h || (h = Array(b)); ++u < b; )
      h[u] = i[u];
    return h;
  }
  function mt(i, h, u, b) {
    u || (u = {});
    for (var O = -1, D = h.length; ++O < D; ) {
      var K = h[O], P = b ? b(u[K], i[K], K, u, i) : void 0;
      ft(u, K, P === void 0 ? i[K] : P);
    }
    return u;
  }
  function Ys(i, h) {
    return mt(i, bt(i), h);
  }
  function Xs(i) {
    return js(i, Ne, bt);
  }
  function ve(i, h) {
    var u = i.__data__;
    return tl(h) ? u[typeof h == "string" ? "string" : "hash"] : u.map;
  }
  function ae(i, h) {
    var u = Qt(i, h);
    return Fs(u) ? u : void 0;
  }
  var bt = ht ? Ae(ht, Object) : cl, se = Ks;
  (Pe && se(new Pe(new ArrayBuffer(1))) != Y || ue && se(new ue()) != y || Le && se(Le.resolve()) != M || Re && se(new Re()) != w || He && se(new He()) != I) && (se = function(i) {
    var h = Te.call(i), u = h == T ? i.constructor : void 0, b = u ? le(u) : void 0;
    if (b)
      switch (b) {
        case cs:
          return Y;
        case hs:
          return y;
        case ds:
          return M;
        case us:
          return w;
        case fs:
          return I;
      }
    return h;
  });
  function Zs(i) {
    var h = i.length, u = i.constructor(h);
    return h && typeof i[0] == "string" && X.call(i, "index") && (u.index = i.index, u.input = i.input), u;
  }
  function Js(i) {
    return typeof i.constructor == "function" && !yt(i) ? Hs(ls(i)) : {};
  }
  function Qs(i, h, u, b) {
    var O = i.constructor;
    switch (h) {
      case pe:
        return Ke(i);
      case c:
      case a:
        return new O(+i);
      case Y:
        return zs(i, b);
      case $:
      case B:
      case z:
      case de:
      case ne:
      case W:
      case De:
      case V:
      case ee:
        return Gs(i, b);
      case y:
        return Us(i, b, u);
      case S:
      case N:
        return new O(i);
      case A:
        return Ws(i);
      case w:
        return xs(i, b, u);
      case j:
        return qs(i);
    }
  }
  function el(i, h) {
    return h = h ?? n, !!h && (typeof i == "number" || Wt.test(i)) && i > -1 && i % 1 == 0 && i < h;
  }
  function tl(i) {
    var h = typeof i;
    return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? i !== "__proto__" : i === null;
  }
  function sl(i) {
    return !!nt && nt in i;
  }
  function yt(i) {
    var h = i && i.constructor, u = typeof h == "function" && h.prototype || ge;
    return i === u;
  }
  function le(i) {
    if (i != null) {
      try {
        return ot.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  function ll(i) {
    return je(i, !0, !0);
  }
  function pt(i, h) {
    return i === h || i !== i && h !== h;
  }
  function il(i) {
    return nl(i) && X.call(i, "callee") && (!ns.call(i, "callee") || Te.call(i) == o);
  }
  var Fe = Array.isArray;
  function Ct(i) {
    return i != null && rl(i.length) && !gt(i);
  }
  function nl(i) {
    return al(i) && Ct(i);
  }
  var ol = rs || hl;
  function gt(i) {
    var h = ke(i) ? Te.call(i) : "";
    return h == m || h == f;
  }
  function rl(i) {
    return typeof i == "number" && i > -1 && i % 1 == 0 && i <= n;
  }
  function ke(i) {
    var h = typeof i;
    return !!i && (h == "object" || h == "function");
  }
  function al(i) {
    return !!i && typeof i == "object";
  }
  function Ne(i) {
    return Ct(i) ? Ls(i) : Ns(i);
  }
  function cl() {
    return [];
  }
  function hl() {
    return !1;
  }
  e.exports = ll;
})(Oe, Oe.exports);
var ml = Oe.exports;
const Z = /* @__PURE__ */ fl(ml), bl = {
  data() {
    return {
      storeCopyDatas: [],
      storeRectangleSelection: [],
      rectangleSelectedCell: null,
      selectedCoordCopyCells: null,
      selectedCoordCells: null
    };
  },
  mounted() {
    document.addEventListener("copy", (e) => {
      this.actualElement && (e.preventDefault(), this.storeCopyDatas = [], this.copyStoreData("copy"));
    }), document.addEventListener("paste", (e) => {
      this.storeCopyDatas.length > 0 && (e.preventDefault(), this.pasteReplaceData());
    });
  },
  methods: {
    disabledEvent(e, s) {
      return e.disabled === void 0 ? this.disableCells.some((t) => t === s) : e.disabled;
    },
    copyStoreData(e) {
      const s = Z(this.modelValue);
      if (this.removeClass(["stateCopy"]), this.selectedCoordCells && this.selectedMultipleCell && e === "copy" && (this.selectedCell.row !== this.selectedCoordCells.rowEnd || this.selectedCell.col !== this.selectedCoordCells.colEnd) && (this.selectedCell.row = this.selectedCoordCells.rowEnd, this.selectedCell.col = this.selectedCoordCells.colEnd), this.selectedCoordCells && this.selectedCell.col === this.selectedCoordCells.colEnd && this.selectedCell.row === this.selectedCoordCells.rowEnd && e === "copy" ? this.selectedCoordCopyCells = this.selectedCoordCells : this.selectedCoordCopyCells = null, this.selectedMultipleCell && this.selectedCoordCells) {
        let t = Math.min(this.selectedCoordCells.rowStart, this.selectedCoordCells.rowEnd);
        const l = Math.max(this.selectedCoordCells.rowStart, this.selectedCoordCells.rowEnd);
        let n = Math.min(this.selectedCoordCells.colStart, this.selectedCoordCells.colEnd);
        const o = Math.max(this.selectedCoordCells.colStart, this.selectedCoordCells.colEnd), r = this.headerKeys[n];
        let c = {};
        for (e === "copy" && (this.modelValue[t][r].stateCopy = !0, this.removeClass(["rectangleSelection"]), this.cleanPropertyOnCell("copy")); t <= l; ) {
          const a = s[t][this.headerKeys[n]];
          a.active = !1, a.selected = !1, a.stateCopy = !1, c[this.headerKeys[n]] = a, n += 1, n > o && (this.storeCopyDatas.push(c), n = Math.min(this.selectedCoordCells.colStart, this.selectedCoordCells.colEnd), t += 1, c = {});
        }
        this.copyMultipleCell = !0;
      } else {
        e === "copy" && this.selectedCell ? (this.cleanPropertyOnCell("copy"), this.modelValue[this.selectedCell.row][this.selectedCell.header].stateCopy = !0) : this.storeCopyDatas = [];
        const t = s[this.selectedCell.row][this.selectedCell.header];
        t.active = !1, t.selected = !1, t.stateCopy = !1, t.rectangleSelection = !1, this.storeCopyDatas.push(t), this.copyMultipleCell = !1;
      }
    },
    pasteReplaceData() {
      const e = this.modelValue.length, s = this.modelValue[this.selectedCell.row][this.selectedCell.header];
      if (this.cleanPropertyOnCell("paste"), this.storeCopyDatas[0].value && !this.copyMultipleCell && !this.selectedMultipleCell && !this.eventDrag && !this.disabledEvent(s, this.selectedCell.header)) {
        const [t] = Z(this.storeCopyDatas);
        t.duplicate = s, t.active = !0, this.modelValue[this.selectedCell.row][this.selectedCell.header] = t, this.$emit("tbody-paste-data", this.selectedCell.row, this.selectedCell.header, t), this.changeData(this.selectedCell.row, this.selectedCell.header);
      } else if (!this.disabledEvent(s, this.selectedCell.header) && this.selectedCoordCells) {
        const t = this.selectedCoordCopyCells !== null && this.selectedCoordCells !== this.selectedCoordCopyCells, l = this.storeCopyDatas.length === 1 && !this.storeCopyDatas[0].type && this.selectedCoordCopyCells !== null && Object.values(this.storeCopyDatas[0]).length > 1 && this.selectedCoordCells.rowStart < this.selectedCoordCells.rowEnd;
        let n = Math.min(this.selectedCoordCells.rowStart, this.selectedCoordCells.rowEnd), o = Math.max(this.selectedCoordCells.rowStart, this.selectedCoordCells.rowEnd), r = Math.min(this.selectedCoordCells.colStart, this.selectedCoordCells.colEnd), c = Math.max(this.selectedCoordCells.colStart, this.selectedCoordCells.colEnd);
        t && (n = Math.min(
          this.selectedCoordCopyCells.rowStart,
          this.selectedCoordCopyCells.rowEnd
        ), o = Math.max(
          this.selectedCoordCopyCells.rowStart,
          this.selectedCoordCopyCells.rowEnd
        )), l && (n = Math.min(this.selectedCoordCells.rowStart, this.selectedCoordCells.rowEnd), o = Math.max(this.selectedCoordCells.rowStart, this.selectedCoordCells.rowEnd)), (t || l) && (r = Math.min(
          this.selectedCoordCopyCells.colStart,
          this.selectedCoordCopyCells.colEnd
        ), c = Math.max(
          this.selectedCoordCopyCells.colStart,
          this.selectedCoordCopyCells.colEnd
        ));
        let a = 0, d = 0;
        for (; n <= o; ) {
          const m = this.headerKeys[r], f = Z(this.storeCopyDatas);
          if (this.eventDrag) {
            const { duplicate: y } = this.modelValue[n][m];
            f[0][m] ? (f[0][m].duplicate = y, this.modelValue[n][m] = f[0][m], this.$emit("tbody-paste-data", n, m, f[0][m])) : (f[0].duplicate = y, [this.modelValue[n][m]] = f, this.$emit("tbody-paste-data", n, m, f)), this.changeData(n, m);
          } else {
            let y = this.selectedCell.row + a, S = this.selectedCell.col + d;
            this.selectedCoordCells !== this.selectedCoordCopyCells && (y = this.selectedCoordCells.rowStart + a, S = this.selectedCoordCells.colStart + d);
            let T = this.headerKeys[S];
            const M = Object.values(f[0]).length === 1, A = f.length === 1 && Object.values(f).length === 1 && f[0].type, w = f.length === 1 && Object.values(f[0]).length > 1 && !f[0].type && this.selectedCoordCells.rowStart === this.selectedCoordCells.rowEnd, N = f.length === 1 && Object.values(f[0]).length > 1 && this.selectedCoordCells.rowStart < this.selectedCoordCells.rowEnd && this.selectedCoordCells.colStart !== this.selectedCoordCells.colEnd, j = f.length > 1 && Object.values(f[0]).length > 1;
            M && (T = this.headerKeys[this.selectedCell.col], y < e && (this.replacePasteData(d, m, y, T), d += 1)), N ? (this.replacePasteData(0, m, y, T), r < c ? d += 1 : d = 0) : A && (this.selectedCoordCells.colStart === this.selectedCoordCells.colEnd ? (T = this.selectedCell.header, f[0].duplicate = this.modelValue[n][T].duplicate, [this.modelValue[n][T]] = f, this.$emit("tbody-paste-data", n, T, f[0]), this.changeData(n, T)) : this.replacePasteData(d, m, this.selectedCell.row, m)), w && (this.replacePasteData(0, m, this.selectedCell.row, T), d += 1), j && (this.modelValue[y][T] && (f[a][m].duplicate = this.modelValue[y][T].duplicate), this.replacePasteData(a, m, y, T), r < c ? d += 1 : d = 0), this.modelValue[this.selectedCell.row][this.selectedCell.header].selected = !0, this.modelValue[this.selectedCell.row][this.selectedCell.header].rectangleSelection = !0, this.modelValue[this.selectedCell.row][this.selectedCell.header].active = !0;
          }
          r += 1, r > c && (this.selectedCoordCopyCells !== null && this.selectedCoordCells !== this.selectedCoordCopyCells ? r = Math.min(
            this.selectedCoordCopyCells.colStart,
            this.selectedCoordCopyCells.colEnd
          ) : r = Math.min(this.selectedCoordCells.colStart, this.selectedCoordCells.colEnd), n += 1, a += 1);
        }
        this.modifyMultipleCell();
      }
    },
    cleanPropertyOnCell(e) {
      this.storeRectangleSelection.length > 0 && this.storeRectangleSelection.forEach((s) => {
        e === "paste" && !s.classList.value.includes("rectangleSelection") && !s.classList.value.includes("copy") ? this.cleanProperty(s) : e === "copy" && !s.classList.value.includes("selected") && this.cleanProperty(s);
      });
    },
    cleanProperty(e) {
      e.style.setProperty("--rectangleWidth", "100%"), e.style.setProperty("--rectangleHeight", "40px"), e.style.setProperty("--rectangleTop", 0), e.style.setProperty("--rectangleBottom", 0);
    },
    replacePasteData(e, s, t, l) {
      const n = Z(this.storeCopyDatas);
      let o;
      this.copyMultipleCell ? o = n[e][s] : o = n[e], o.duplicate = this.modelValue[t][l], this.modelValue[t][l] = o, this.$emit("tbody-paste-data", t, l, o), this.changeData(t, l);
    },
    modifyMultipleCell(e) {
      let s = Math.min(this.selectedCoordCells.rowStart, this.selectedCoordCells.rowEnd);
      const t = Math.max(this.selectedCoordCells.rowStart, this.selectedCoordCells.rowEnd);
      let l = Math.min(this.selectedCoordCells.colStart, this.selectedCoordCells.colEnd);
      const n = Math.max(this.selectedCoordCells.colStart, this.selectedCoordCells.colEnd);
      for (; s <= t; ) {
        const o = this.headerKeys[l], r = this.modelValue[s][o];
        e === "removeValue" && !this.disabledEvent(r, o) && r.value && (this.changeData(s, o), r.value = "", r.selected = !1, this.$emit("tbody-nav-backspace", s, l, o, r)), e === "selected" && (r.selected = !0, this.selectedMultipleCellActive = !0, l === n && s === t && (this.removeClass(["active"]), r.active = !0)), l += 1, l > n && (l = Math.min(this.selectedCoordCells.colStart, this.selectedCoordCells.colEnd), s += 1);
      }
      this.setRectangleSelection(l, n, s, t);
    },
    setRectangleSelection(e, s, t, l) {
      var r;
      let n = 100, o = 40;
      e === 0 && s === 0 ? n = 100 * (e + 1) : e === 0 && s > 0 ? n = 100 * (s + 1) : n = 100 * (s - e + 1), t === 0 && l === 0 || t === 0 && l > 0 ? o = 40 * (t + 1) : this.selectedCoordCells.rowEnd > this.selectedCoordCells.rowStart ? o = 40 * (this.selectedCoordCells.rowEnd - this.selectedCoordCells.rowStart + 1) : o = 40 * (this.selectedCoordCells.rowStart - this.selectedCoordCells.rowEnd + 1), (r = this.$refs[`${this.customTable}-vueTbody`]) != null && r.$refs && ([this.rectangleSelectedCell] = this.$refs[`${this.customTable}-vueTbody`].$refs[`td-${this.customTable}-${this.selectedCoordCells.colStart}-${this.selectedCoordCells.rowStart}`], this.selectedMultipleCellActive || ([this.rectangleSelectedCell] = this.$refs[`${this.customTable}-vueTbody`].$refs[`td-${this.customTable}-${this.selectedCell.col}-${this.selectedCell.row}`])), this.rectangleSelectedCell.style.setProperty("--rectangleWidth", `${n + 1}%`), this.rectangleSelectedCell.style.setProperty("--rectangleHeight", `${o}px`), this.selectedCoordCells.rowStart >= this.selectedCoordCells.rowEnd ? (this.rectangleSelectedCell.style.setProperty("--rectangleTop", "auto"), this.rectangleSelectedCell.style.setProperty("--rectangleBottom", 0)) : (this.rectangleSelectedCell.style.setProperty("--rectangleTop", 0), this.rectangleSelectedCell.style.setProperty("--rectangleBottom", "auto")), this.selectedCoordCells.colStart >= this.selectedCoordCells.colEnd ? (this.rectangleSelectedCell.style.setProperty("--rectangleLeft", "auto"), this.rectangleSelectedCell.style.setProperty("--rectangleRight", 0)) : this.rectangleSelectedCell.style.setProperty("--rectangleLeft", 0), this.storeRectangleSelection.includes(this.rectangleSelectedCell) || this.storeRectangleSelection.push(this.rectangleSelectedCell);
    }
  }
}, yl = {
  data() {
    return {
      eventDrag: !1
    };
  },
  methods: {
    handleDownDragToFill(e, s, t, l) {
      this.storeCopyDatas = [], this.$set(this.modelValue[l][s], "active", !0), this.eventDrag = !0, !this.selectedCoordCells && !this.selectedMultipleCell ? this.selectedCoordCells = {
        rowStart: this.selectedCell.row,
        colStart: this.selectedCell.col,
        keyStart: this.selectedCell.header,
        rowEnd: l,
        colEnd: this.selectedCell.col,
        keyEnd: this.selectedCell.header
      } : this.selectedMultipleCell ? this.selectedCoordCells.rowStart = l : this.selectedCoordCells = {
        rowStart: this.selectedCell.row,
        colStart: this.selectedCell.col,
        keyStart: this.selectedCell.header,
        rowEnd: l,
        colEnd: this.selectedCell.col,
        keyEnd: this.selectedCell.header
      }, this.copyStoreData("drag");
    },
    handleMoveDragToFill(e, s, t, l, n) {
      this.eventDrag === !0 && this.selectedCoordCells && this.selectedCoordCells.rowEnd !== l && (this.selectedCoordCells.rowEnd = l, this.modifyMultipleCell("selected"), this.$emit(
        "tbody-move-dragtofill",
        this.selectedCoordCells,
        s,
        t,
        l,
        n
      ));
    },
    handleUpDragToFill(e, s, t, l) {
      this.eventDrag === !0 && this.selectedCoordCells && (this.selectedCoordCells.rowEnd = t, this.pasteReplaceData(), this.removeClass(["selected", "rectangleSelection", "active", "show"]), this.$emit("tbody-up-dragtofill", this.selectedCoordCells, s, t, l), this.eventDrag = !1, this.storeCopyDatas = [], this.selectedCoordCells = null);
    }
  }
}, pl = {
  methods: {
    callbackCheckedAll(e) {
      this.$emit("tbody-all-checked-row", e), this.customOptions.tbodyCheckbox && this.modelValue.forEach((s) => {
        s.vuetable_checked = e;
      });
    },
    callbackSort(e, s, t) {
      this.$emit("thead-td-sort", e, s, t);
    },
    callbackSubmenuThead(e, s, t, l, n) {
      this.submenuStatusThead = !1, n ? this.$emit(
        `thead-submenu-click-${l}`,
        e,
        s,
        t,
        n
      ) : this.$emit(`thead-submenu-click-${l}`, e, s, t);
    },
    callbackSubmenuTbody(e, s, t, l, n, o) {
      this.calculPosition(e, t, l, "submenu"), this.$emit(
        `tbody-submenu-click-${o}`,
        e,
        s,
        t,
        l,
        n,
        o
      );
    }
  }
}, Cl = {
  data() {
    return {
      oldTdActive: null,
      oldTdShow: null
    };
  },
  methods: {
    bindClassActiveOnTd(e, s, t) {
      this.removeClass(["active", "show"]), this.modelValue[s][e].active = !0, this.oldTdActive = {
        key: e,
        row: s,
        col: t
      };
    },
    handleTBodyContextMenu(e, s, t, l) {
      this.lastSubmenuOpen = {
        event: e,
        header: s,
        rowIndex: t,
        colIndex: l
      };
    },
    handleTbodyTdClick(e, s, t, l, n, o) {
      const r = s;
      this.selectedMultipleCell && (this.selectedMultipleCell = !1), r.active || (this.keys[16] || this.removeClass(["selected", "rectangleSelection"]), this.removeClass(["search"]), this.lastSelectOpen = null), this.bindClassActiveOnTd(t, l, n), this.updateSelectedCell(t, l, n), this.enableSubmenu(), this.oldTdShow && this.oldTdShow.col !== n && (this.modelValue[this.oldTdShow.row][this.oldTdShow.key].show = !1), o === "select" && r.handleSearch && this.activeSelectSearch(e, l, n, t);
    },
    handleSearchInputSelect(e, s, t, l, n, o) {
      const r = !(s === "" && e.keyCode === 8);
      if ((!this.keys.cmd || !this.keys.ctrl) && r && ![13, 16, 17, 27, 37, 38, 39, 40, 91].includes(e.keyCode)) {
        if (this.lastSelectOpen ? this.lastSelectOpen.searchValue = s : this.lastSelectOpen = {
          event: e,
          header: l,
          col: t,
          rowIndex: n,
          colIndex: o,
          searchValue: s
        }, e.keyCode !== 8) {
          const c = this.modelValue[n][l];
          c.search = !0, c.show = !0, this.showDropdown(o, n);
        }
        this.incrementOption = 0;
      }
    },
    handleSelectMultipleCell(e, s, t, l) {
      this.selectedMultipleCellActive || (this.selectedMultipleCell = !0, this.selectedCell && (this.selectedCoordCells = {
        rowStart: this.selectedCell.row,
        colStart: this.selectedCell.col,
        keyStart: this.selectedCell.header,
        rowEnd: t,
        colEnd: l,
        keyEnd: s
      }), this.modifyMultipleCell("selected"), this.highlightTdAndThead(t, l));
    },
    handleTbodyInputChange(e, s, t, l) {
      this.oldTdShow && (this.modelValue[this.oldTdShow.row][this.oldTdShow.key].show = !1), this.enableSubmenu(), this.$emit("tbody-input-change", e, s, t, l), this.changeData(t, s);
    },
    handleTbodyInputKeydown(e, s, t, l) {
      this.$emit("tbody-input-keydown", e, s, t, l);
    },
    handleTbodyTdDoubleClick(e, s, t, l, n) {
      t.handleSearch || (this.oldTdShow && (this.modelValue[this.oldTdShow.row][this.oldTdShow.key].show = !1), this.modelValue[l][s].show = !0, e.currentTarget.lastElementChild.focus(), this.oldTdShow = {
        key: s,
        row: l,
        col: n
      }, this.enableSubmenu());
    }
  }
}, gl = {
  methods: {
    handleUpDragSizeHeader(e, s) {
      this.$emit("handle-up-drag-size-header", e, s);
    },
    handleTheadContextMenu() {
      this.submenuStatusTbody = !1;
    }
  }
};
function Tl(e) {
  let { style: s } = e;
  s || (s = {}), s.setProperty("--rectangleWidth", "100%"), s.setProperty("--rectangleHeight", "40px"), s.setProperty("--rectangleTop", 0), s.setProperty("--rectangleBottom", 0);
}
const Sl = {
  data() {
    return {
      disableKeyTimeout: null,
      incrementCol: 0,
      incrementRow: null,
      pressedShift: 0,
      keys: {}
    };
  },
  mounted() {
    window.addEventListener("keydown", this.moveKeydown), window.addEventListener("keyup", this.moveKeyup);
  },
  methods: {
    moveOnTable(e, s, t) {
      const l = this.$refs[`${this.customTable}-vueTable`], n = Math.max(...this.colHeaderWidths);
      if (l) {
        const o = l.clientHeight - l.firstElementChild.clientHeight - this.$refs[`${this.customTable}-vueThead`].$el.clientHeight, r = l.clientWidth - 40, c = Math.round(o / 40), a = Math.round(r / n);
        e.keyCode === 38 && (e.preventDefault(), c >= t && (l.scrollTop -= 40)), e.keyCode === 40 && (e.preventDefault(), c - 1 <= t && (l.scrollTop += 40)), e.keyCode === 37 && (e.preventDefault(), a + 1 >= s && (l.scrollLeft -= n)), e.keyCode === 39 && (e.preventDefault(), a - 1 <= s && (l.scrollLeft += n));
      }
    },
    moveKeydown(e) {
      if ([this.actualElement] = document.getElementsByClassName("active_td"), e.keyCode === 16 && (this.keys[e.keyCode] = !0), (e.keyCode === 91 || e.keyCode === 17) && (this.keys.cmd = !0, this.keys.ctrl = !0), (this.keys.cmd && e.keyCode === 90 || this.keys.ctrl && e.keyCode === 90) && this.rollBackUndo(), this.lastSelectOpen && this.moveOnSelect(e), this.actualElement && this.actualElement.getAttribute("current-table") === this.customTable.toString() && [37, 39, 40, 38, 13, 27, 8].includes(e.keyCode)) {
        this.removeClass(["selected"]);
        const s = Number(this.actualElement.getAttribute("data-col-index")), t = Number(this.actualElement.getAttribute("data-row-index")), l = this.actualElement.getAttribute("data-type"), n = this.actualElement.getAttribute("data-header");
        if (!this.modelValue[t][n].show) {
          this.setFirstCell || (this.modelValue[t][n].rectangleSelection = !0, this.setFirstCell = !0);
          const r = this.modelValue.length, c = this.headers.length;
          if (this.moveOnTable(e, s, t), this.keys[16])
            this.pressShiftMultipleCell(e, n, r, t, c, s);
          else if (!this.lastSelectOpen && e.keyCode !== 8) {
            if (this.selectedMultipleCell && (this.selectedMultipleCell = !1), this.modelValue[t][n].active = !1, this.removeClass(["rectangleSelection"]), e.keyCode === 37) {
              const a = Object.values(this.headerKeys)[s - 1];
              a ? (this.modelValue[t][a].active = !0, l === "select" && this.activeSelectSearch(e, t, s, a), this.updateSelectedCell(a, t, s - 1)) : (this.modelValue[t][n].active = !0, l === "select" && this.activeSelectSearch(e, t, s, n), this.updateSelectedCell(n, t, s));
            }
            if (e.keyCode === 38 && (t !== 0 ? (this.modelValue[t - 1][n].active = !0, l === "select" && this.activeSelectSearch(e, t - 1, s, n), this.updateSelectedCell(n, t - 1, s)) : (this.modelValue[t][n].active = !0, l === "select" && this.activeSelectSearch(e, t, s, n), this.updateSelectedCell(n, t, s))), e.keyCode === 39) {
              const a = Object.values(this.headerKeys)[s + 1];
              a ? (this.modelValue[t][a].active = !0, l === "select" && this.activeSelectSearch(e, t, s, a), this.updateSelectedCell(a, t, s + 1)) : (this.modelValue[t][n].active = !0, l === "select" && this.activeSelectSearch(e, t, s, n), this.updateSelectedCell(n, t, s));
            }
            e.keyCode === 40 && (t + 1 !== r ? (this.modelValue[t + 1][n].active = !0, l === "select" && this.activeSelectSearch(e, t + 1, s, n), this.updateSelectedCell(n, t + 1, s)) : (this.modelValue[t][n].active = !0, l === "select" && this.activeSelectSearch(e, t, s, n), this.updateSelectedCell(n, t, s)));
          }
          e.keyCode === 8 && !this.lastSelectOpen && this.handleTbodyNavBackspace(t, s, n), e.keyCode === 13 && (this.$refs[`input-${this.customTable}-${s}-${t}`] && (this.modelValue[t][n].show = !0, this.$refs[`input-${this.customTable}-${s}-${t}`][0].focus()), this.$emit(
            "tbody-nav-enter",
            e,
            e.keyCode,
            this.actualElement,
            t,
            s
          )), e.keyCode === 27 && (this.modelValue[t][n].active = !1, this.storeCopyDatas = [], this.removeClass(["stateCopy"]));
        }
      }
    },
    moveKeyup(e) {
      e.keyCode === 16 && (this.keys[e.keyCode] = !1, this.incrementCol = null, this.incrementRow = null, this.selectedMultipleCell = !0, this.pressedShift = 0), (e.keyCode === 91 || e.keyCode === 17) && (!this.disableKeyTimeout === null && clearTimeout(this.disableKeyTimeout), this.disableKeyTimeout = setTimeout(() => {
        this.keys.cmd = !1, this.keys.ctrl = !1, this.disableKeyTimeout = null;
      }, 400));
    },
    moveOnSelect(e) {
      if (this.incrementOption <= this.filteredList.length) {
        const s = this.$refs[`${this.customTable}-vueTbody`].$refs[`vsSelect-${this.customTable}-${this.lastSelectOpen.colIndex}-${this.lastSelectOpen.rowIndex}`][0].$refs[`dropdown-${this.customTable}-${this.lastSelectOpen.colIndex}-${this.lastSelectOpen.rowIndex}`], t = 45;
        if (e.keyCode === 38) {
          const n = (s.children[this.incrementOption].offsetTop - s.scrollTop) / t < 1;
          this.incrementOption <= this.filteredList.length && this.incrementOption > 0 && (this.filteredList[this.incrementOption] ? (this.filteredList[this.incrementOption].active = !1, this.incrementOption -= 1, this.filteredList[this.incrementOption].active = !0) : (this.incrementOption -= 1, this.filteredList[this.incrementOption].active = !1, this.incrementOption -= 1, this.filteredList[this.incrementOption].active = !0), n && (s.scrollTop -= t));
        }
        if (e.keyCode === 40) {
          const n = -(s.children[this.incrementOption].offsetTop + t - (s.offsetHeight + s.scrollTop)) / t < 1;
          this.incrementOption < this.filteredList.length - 1 && (this.incrementOption === 0 || this.incrementOption === 1 ? (this.filteredList[this.incrementOption].active = !0, this.incrementOption += 1, this.filteredList[this.incrementOption].active = !0, this.filteredList[this.incrementOption - 1].active = !1) : this.incrementOption > 1 && (this.filteredList[this.incrementOption].active = !1, this.incrementOption += 1, this.filteredList[this.incrementOption].active = !0)), n && (s.scrollTop += t);
        }
      }
      if (e.keyCode === 13) {
        const s = this.lastSelectOpen, t = this.modelValue[s.rowIndex][s.header];
        this.handleTbodySelectChange(
          e,
          s.header,
          t,
          this.filteredList[this.incrementOption],
          s.rowIndex,
          s.colIndex
        );
      }
    },
    pressShiftMultipleCell(e, s, t, l, n, o) {
      e.preventDefault();
      let r = s;
      this.modelValue[l][r].active = !1, this.incrementCol = this.incrementCol ? this.incrementCol : o, this.incrementRow = this.incrementRow ? this.incrementRow : l, this.pressedShift >= 0 && (this.pressedShift += 1), this.pressedShift === 0 && (this.selectedCell = {
        header: r,
        row: l,
        col: o
      }), e.keyCode === 37 && (this.incrementCol -= 1, this.incrementCol < 0 && (this.incrementCol = 0), this.removeClass(["selected"])), e.keyCode === 38 && (this.incrementRow -= 1, this.incrementRow < 0 && (this.incrementRow = 0), this.removeClass(["selected"])), e.keyCode === 39 && (n >= this.incrementCol + 2 ? this.incrementCol += 1 : this.modelValue[l][r].active = !0), e.keyCode === 40 && (t >= this.incrementRow + 2 ? this.incrementRow += 1 : this.modelValue[l][r].active = !0), r = Object.values(this.headerKeys)[this.incrementCol], this.modelValue[this.incrementRow][r].active = !0, this.handleSelectMultipleCell(e, r, this.incrementRow, this.incrementCol);
    },
    handleTbodyNavBackspace(e, s, t) {
      if (this.selectedMultipleCell)
        this.modifyMultipleCell("removeValue");
      else {
        const l = this.modelValue[e][t];
        (!l.disabled || l.value) && (l.value = "", this.$emit("tbody-nav-backspace", e, s, t, l), this.changeData(e, t));
      }
    },
    handleTbodySelectChange(e, s, t, l, n, o) {
      const r = this.modelValue[n][s];
      r.selectOptions.forEach((a) => {
        const d = a;
        d.active = !1;
      });
      const c = l.value || l.item.value;
      r.selectOptions.find((a) => a.value === c).active = !0, r.search = !1, r.show = !1, r.value = c, this.lastSelectOpen = null, this.oldTdShow && (this.modelValue[this.oldTdShow.row][this.oldTdShow.key].show = !1), this.enableSubmenu(), this.$emit("tbody-select-change", e, s, t, l, n, o), this.changeData(n, s);
    },
    updateSelectedCell(e, s, t) {
      const l = this.$refs[`${this.customTable}-vueTbody`].$refs[`td-${this.customTable}-${t}-${s}`][0];
      this.modelValue[s][e].stateCopy = !1, Tl(l), this.setFirstCell || (this.modelValue[s][e].rectangleSelection = !0, this.setFirstCell = !0), this.selectedCell = {
        header: e,
        row: s,
        col: t
      }, this.highlightTdAndThead(s, t);
    }
  }
}, vl = {
  data() {
    return {
      headerTop: 0,
      lastSubmenuOpen: null
    };
  },
  mounted() {
    document.addEventListener("scroll", (e) => {
      this.scrollTopDocument(e);
    });
  },
  methods: {
    scrollFunction(e) {
      this.affixHeader(e, "vueTable"), this.lastSelectOpen ? this.calculPosition(
        this.lastSelectOpen.event,
        this.lastSelectOpen.rowIndex,
        this.lastSelectOpen.colIndex,
        "dropdown"
      ) : this.lastSubmenuOpen && this.calculPosition(
        this.lastSubmenuOpen.event,
        this.lastSubmenuOpen.rowIndex,
        this.lastSubmenuOpen.colIndex,
        "contextMenu"
      );
    },
    scrollTopDocument(e) {
      this.affixHeader(e, "document"), this.lastSelectOpen ? this.calculPosition(
        e,
        this.lastSelectOpen.rowIndex,
        this.lastSelectOpen.colIndex,
        "dropdown"
      ) : this.lastSubmenuOpen && this.calculPosition(
        e,
        this.lastSubmenuOpen.rowIndex,
        this.lastSubmenuOpen.colIndex,
        "contextMenu"
      );
    },
    affixHeader(e, s) {
      if (this.$refs && this.$refs[`${this.customTable}-table`] && this.$refs[`${this.customTable}-table`].offsetTop) {
        this.scrollDocument = document.querySelector(
          `${this.parentScrollElement.attribute}`
        ).scrollTop;
        const t = this.$refs[`${this.customTable}-table`].offsetTop, l = this.scrollDocument || s === "document", n = l ? this.scrollDocument : e.target.scrollTop;
        n > t ? this.headerTop = l ? n - t : n - 18 : this.headerTop = 0;
      }
    }
  }
}, kl = {
  data() {
    return {
      storeUndoData: []
    };
  },
  methods: {
    changeData(e, s) {
      const t = this.modelValue[e][s];
      this.storeUndoData.push({ rowIndex: e, header: s, cell: t }), this.$emit("tbody-change-data", e, s);
    },
    rollBackUndo() {
      if (this.storeUndoData.length) {
        const e = this.storeUndoData.pop(), s = this.modelValue[e.rowIndex][e.header].value;
        this.modelValue[e.rowIndex][e.header] = e.cell.duplicate, this.$emit("tbody-undo-data", e.rowIndex, e.header, s);
      }
    },
    clearStoreUndo() {
      this.storeUndoData = [];
    }
  }
};
function G(e) {
  return Array.isArray ? Array.isArray(e) : Rt(e) === "[object Array]";
}
const _l = 1 / 0;
function Ml(e) {
  if (typeof e == "string")
    return e;
  let s = e + "";
  return s == "0" && 1 / e == -_l ? "-0" : s;
}
function wl(e) {
  return e == null ? "" : Ml(e);
}
function U(e) {
  return typeof e == "string";
}
function Pt(e) {
  return typeof e == "number";
}
function Ol(e) {
  return e === !0 || e === !1 || El(e) && Rt(e) == "[object Boolean]";
}
function Lt(e) {
  return typeof e == "object";
}
function El(e) {
  return Lt(e) && e !== null;
}
function R(e) {
  return e != null;
}
function ze(e) {
  return !e.trim().length;
}
function Rt(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const $l = "Incorrect 'index' type", Dl = (e) => `Invalid value for key ${e}`, Al = (e) => `Pattern length exceeds max of ${e}.`, Vl = (e) => `Missing ${e} property in key`, Pl = (e) => `Property 'weight' in key '${e}' must be a positive integer`, Mt = Object.prototype.hasOwnProperty;
class Ll {
  constructor(s) {
    this._keys = [], this._keyMap = {};
    let t = 0;
    s.forEach((l) => {
      let n = Ht(l);
      t += n.weight, this._keys.push(n), this._keyMap[n.id] = n, t += n.weight;
    }), this._keys.forEach((l) => {
      l.weight /= t;
    });
  }
  get(s) {
    return this._keyMap[s];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Ht(e) {
  let s = null, t = null, l = null, n = 1, o = null;
  if (U(e) || G(e))
    l = e, s = wt(e), t = qe(e);
  else {
    if (!Mt.call(e, "name"))
      throw new Error(Vl("name"));
    const r = e.name;
    if (l = r, Mt.call(e, "weight") && (n = e.weight, n <= 0))
      throw new Error(Pl(r));
    s = wt(r), t = qe(r), o = e.getFn;
  }
  return { path: s, id: t, weight: n, src: l, getFn: o };
}
function wt(e) {
  return G(e) ? e : e.split(".");
}
function qe(e) {
  return G(e) ? e.join(".") : e;
}
function Rl(e, s) {
  let t = [], l = !1;
  const n = (o, r, c) => {
    if (R(o))
      if (!r[c])
        t.push(o);
      else {
        let a = r[c];
        const d = o[a];
        if (!R(d))
          return;
        if (c === r.length - 1 && (U(d) || Pt(d) || Ol(d)))
          t.push(wl(d));
        else if (G(d)) {
          l = !0;
          for (let m = 0, f = d.length; m < f; m += 1)
            n(d[m], r, c + 1);
        } else
          r.length && n(d, r, c + 1);
      }
  };
  return n(e, U(s) ? s.split(".") : s, 0), l ? t : t[0];
}
const Hl = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, jl = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (e, s) => e.score === s.score ? e.idx < s.idx ? -1 : 1 : e.score < s.score ? -1 : 1
}, Kl = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, Fl = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: Rl,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var C = {
  ...jl,
  ...Hl,
  ...Kl,
  ...Fl
};
const Nl = /[^ ]+/g;
function Bl(e = 1, s = 3) {
  const t = /* @__PURE__ */ new Map(), l = Math.pow(10, s);
  return {
    get(n) {
      const o = n.match(Nl).length;
      if (t.has(o))
        return t.get(o);
      const r = 1 / Math.pow(o, 0.5 * e), c = parseFloat(Math.round(r * l) / l);
      return t.set(o, c), c;
    },
    clear() {
      t.clear();
    }
  };
}
class Je {
  constructor({
    getFn: s = C.getFn,
    fieldNormWeight: t = C.fieldNormWeight
  } = {}) {
    this.norm = Bl(t, 3), this.getFn = s, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(s = []) {
    this.docs = s;
  }
  setIndexRecords(s = []) {
    this.records = s;
  }
  setKeys(s = []) {
    this.keys = s, this._keysMap = {}, s.forEach((t, l) => {
      this._keysMap[t.id] = l;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, U(this.docs[0]) ? this.docs.forEach((s, t) => {
      this._addString(s, t);
    }) : this.docs.forEach((s, t) => {
      this._addObject(s, t);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(s) {
    const t = this.size();
    U(s) ? this._addString(s, t) : this._addObject(s, t);
  }
  // Removes the doc at the specified index of the index
  removeAt(s) {
    this.records.splice(s, 1);
    for (let t = s, l = this.size(); t < l; t += 1)
      this.records[t].i -= 1;
  }
  getValueForItemAtKeyId(s, t) {
    return s[this._keysMap[t]];
  }
  size() {
    return this.records.length;
  }
  _addString(s, t) {
    if (!R(s) || ze(s))
      return;
    let l = {
      v: s,
      i: t,
      n: this.norm.get(s)
    };
    this.records.push(l);
  }
  _addObject(s, t) {
    let l = { i: t, $: {} };
    this.keys.forEach((n, o) => {
      let r = n.getFn ? n.getFn(s) : this.getFn(s, n.path);
      if (R(r)) {
        if (G(r)) {
          let c = [];
          const a = [{ nestedArrIndex: -1, value: r }];
          for (; a.length; ) {
            const { nestedArrIndex: d, value: m } = a.pop();
            if (R(m))
              if (U(m) && !ze(m)) {
                let f = {
                  v: m,
                  i: d,
                  n: this.norm.get(m)
                };
                c.push(f);
              } else
                G(m) && m.forEach((f, y) => {
                  a.push({
                    nestedArrIndex: y,
                    value: f
                  });
                });
          }
          l.$[o] = c;
        } else if (U(r) && !ze(r)) {
          let c = {
            v: r,
            n: this.norm.get(r)
          };
          l.$[o] = c;
        }
      }
    }), this.records.push(l);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function jt(e, s, { getFn: t = C.getFn, fieldNormWeight: l = C.fieldNormWeight } = {}) {
  const n = new Je({ getFn: t, fieldNormWeight: l });
  return n.setKeys(e.map(Ht)), n.setSources(s), n.create(), n;
}
function zl(e, { getFn: s = C.getFn, fieldNormWeight: t = C.fieldNormWeight } = {}) {
  const { keys: l, records: n } = e, o = new Je({ getFn: s, fieldNormWeight: t });
  return o.setKeys(l), o.setIndexRecords(n), o;
}
function we(e, {
  errors: s = 0,
  currentLocation: t = 0,
  expectedLocation: l = 0,
  distance: n = C.distance,
  ignoreLocation: o = C.ignoreLocation
} = {}) {
  const r = s / e.length;
  if (o)
    return r;
  const c = Math.abs(l - t);
  return n ? r + c / n : c ? 1 : r;
}
function Ul(e = [], s = C.minMatchCharLength) {
  let t = [], l = -1, n = -1, o = 0;
  for (let r = e.length; o < r; o += 1) {
    let c = e[o];
    c && l === -1 ? l = o : !c && l !== -1 && (n = o - 1, n - l + 1 >= s && t.push([l, n]), l = -1);
  }
  return e[o - 1] && o - l >= s && t.push([l, o - 1]), t;
}
const ie = 32;
function Wl(e, s, t, {
  location: l = C.location,
  distance: n = C.distance,
  threshold: o = C.threshold,
  findAllMatches: r = C.findAllMatches,
  minMatchCharLength: c = C.minMatchCharLength,
  includeMatches: a = C.includeMatches,
  ignoreLocation: d = C.ignoreLocation
} = {}) {
  if (s.length > ie)
    throw new Error(Al(ie));
  const m = s.length, f = e.length, y = Math.max(0, Math.min(l, f));
  let S = o, T = y;
  const M = c > 1 || a, A = M ? Array(f) : [];
  let w;
  for (; (w = e.indexOf(s, T)) > -1; ) {
    let $ = we(s, {
      currentLocation: w,
      expectedLocation: y,
      distance: n,
      ignoreLocation: d
    });
    if (S = Math.min($, S), T = w + m, M) {
      let B = 0;
      for (; B < m; )
        A[w + B] = 1, B += 1;
    }
  }
  T = -1;
  let N = [], j = 1, I = m + f;
  const pe = 1 << m - 1;
  for (let $ = 0; $ < m; $ += 1) {
    let B = 0, z = I;
    for (; B < z; )
      we(s, {
        errors: $,
        currentLocation: y + z,
        expectedLocation: y,
        distance: n,
        ignoreLocation: d
      }) <= S ? B = z : I = z, z = Math.floor((I - B) / 2 + B);
    I = z;
    let de = Math.max(1, y - z + 1), ne = r ? f : Math.min(y + z, f) + m, W = Array(ne + 2);
    W[ne + 1] = (1 << $) - 1;
    for (let V = ne; V >= de; V -= 1) {
      let ee = V - 1, Ce = t[e.charAt(ee)];
      if (M && (A[ee] = +!!Ce), W[V] = (W[V + 1] << 1 | 1) & Ce, $ && (W[V] |= (N[V + 1] | N[V]) << 1 | 1 | N[V + 1]), W[V] & pe && (j = we(s, {
        errors: $,
        currentLocation: ee,
        expectedLocation: y,
        distance: n,
        ignoreLocation: d
      }), j <= S)) {
        if (S = j, T = ee, T <= y)
          break;
        de = Math.max(1, 2 * y - T);
      }
    }
    if (we(s, {
      errors: $ + 1,
      currentLocation: y,
      expectedLocation: y,
      distance: n,
      ignoreLocation: d
    }) > S)
      break;
    N = W;
  }
  const Y = {
    isMatch: T >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, j)
  };
  if (M) {
    const $ = Ul(A, c);
    $.length ? a && (Y.indices = $) : Y.isMatch = !1;
  }
  return Y;
}
function xl(e) {
  let s = {};
  for (let t = 0, l = e.length; t < l; t += 1) {
    const n = e.charAt(t);
    s[n] = (s[n] || 0) | 1 << l - t - 1;
  }
  return s;
}
class Kt {
  constructor(s, {
    location: t = C.location,
    threshold: l = C.threshold,
    distance: n = C.distance,
    includeMatches: o = C.includeMatches,
    findAllMatches: r = C.findAllMatches,
    minMatchCharLength: c = C.minMatchCharLength,
    isCaseSensitive: a = C.isCaseSensitive,
    ignoreLocation: d = C.ignoreLocation
  } = {}) {
    if (this.options = {
      location: t,
      threshold: l,
      distance: n,
      includeMatches: o,
      findAllMatches: r,
      minMatchCharLength: c,
      isCaseSensitive: a,
      ignoreLocation: d
    }, this.pattern = a ? s : s.toLowerCase(), this.chunks = [], !this.pattern.length)
      return;
    const m = (y, S) => {
      this.chunks.push({
        pattern: y,
        alphabet: xl(y),
        startIndex: S
      });
    }, f = this.pattern.length;
    if (f > ie) {
      let y = 0;
      const S = f % ie, T = f - S;
      for (; y < T; )
        m(this.pattern.substr(y, ie), y), y += ie;
      if (S) {
        const M = f - ie;
        m(this.pattern.substr(M), M);
      }
    } else
      m(this.pattern, 0);
  }
  searchIn(s) {
    const { isCaseSensitive: t, includeMatches: l } = this.options;
    if (t || (s = s.toLowerCase()), this.pattern === s) {
      let T = {
        isMatch: !0,
        score: 0
      };
      return l && (T.indices = [[0, s.length - 1]]), T;
    }
    const {
      location: n,
      distance: o,
      threshold: r,
      findAllMatches: c,
      minMatchCharLength: a,
      ignoreLocation: d
    } = this.options;
    let m = [], f = 0, y = !1;
    this.chunks.forEach(({ pattern: T, alphabet: M, startIndex: A }) => {
      const { isMatch: w, score: N, indices: j } = Wl(s, T, M, {
        location: n + A,
        distance: o,
        threshold: r,
        findAllMatches: c,
        minMatchCharLength: a,
        includeMatches: l,
        ignoreLocation: d
      });
      w && (y = !0), f += N, w && j && (m = [...m, ...j]);
    });
    let S = {
      isMatch: y,
      score: y ? f / this.chunks.length : 1
    };
    return y && l && (S.indices = m), S;
  }
}
class Q {
  constructor(s) {
    this.pattern = s;
  }
  static isMultiMatch(s) {
    return Ot(s, this.multiRegex);
  }
  static isSingleMatch(s) {
    return Ot(s, this.singleRegex);
  }
  search() {
  }
}
function Ot(e, s) {
  const t = e.match(s);
  return t ? t[1] : null;
}
class ql extends Q {
  constructor(s) {
    super(s);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(s) {
    const t = s === this.pattern;
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class Gl extends Q {
  constructor(s) {
    super(s);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(s) {
    const l = s.indexOf(this.pattern) === -1;
    return {
      isMatch: l,
      score: l ? 0 : 1,
      indices: [0, s.length - 1]
    };
  }
}
class Il extends Q {
  constructor(s) {
    super(s);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(s) {
    const t = s.startsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class Yl extends Q {
  constructor(s) {
    super(s);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(s) {
    const t = !s.startsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, s.length - 1]
    };
  }
}
class Xl extends Q {
  constructor(s) {
    super(s);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(s) {
    const t = s.endsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [s.length - this.pattern.length, s.length - 1]
    };
  }
}
class Zl extends Q {
  constructor(s) {
    super(s);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(s) {
    const t = !s.endsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, s.length - 1]
    };
  }
}
class Ft extends Q {
  constructor(s, {
    location: t = C.location,
    threshold: l = C.threshold,
    distance: n = C.distance,
    includeMatches: o = C.includeMatches,
    findAllMatches: r = C.findAllMatches,
    minMatchCharLength: c = C.minMatchCharLength,
    isCaseSensitive: a = C.isCaseSensitive,
    ignoreLocation: d = C.ignoreLocation
  } = {}) {
    super(s), this._bitapSearch = new Kt(s, {
      location: t,
      threshold: l,
      distance: n,
      includeMatches: o,
      findAllMatches: r,
      minMatchCharLength: c,
      isCaseSensitive: a,
      ignoreLocation: d
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(s) {
    return this._bitapSearch.searchIn(s);
  }
}
class Nt extends Q {
  constructor(s) {
    super(s);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(s) {
    let t = 0, l;
    const n = [], o = this.pattern.length;
    for (; (l = s.indexOf(this.pattern, t)) > -1; )
      t = l + o, n.push([l, t - 1]);
    const r = !!n.length;
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: n
    };
  }
}
const Ge = [
  ql,
  Nt,
  Il,
  Yl,
  Zl,
  Xl,
  Gl,
  Ft
], Et = Ge.length, Jl = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Ql = "|";
function ei(e, s = {}) {
  return e.split(Ql).map((t) => {
    let l = t.trim().split(Jl).filter((o) => o && !!o.trim()), n = [];
    for (let o = 0, r = l.length; o < r; o += 1) {
      const c = l[o];
      let a = !1, d = -1;
      for (; !a && ++d < Et; ) {
        const m = Ge[d];
        let f = m.isMultiMatch(c);
        f && (n.push(new m(f, s)), a = !0);
      }
      if (!a)
        for (d = -1; ++d < Et; ) {
          const m = Ge[d];
          let f = m.isSingleMatch(c);
          if (f) {
            n.push(new m(f, s));
            break;
          }
        }
    }
    return n;
  });
}
const ti = /* @__PURE__ */ new Set([Ft.type, Nt.type]);
class si {
  constructor(s, {
    isCaseSensitive: t = C.isCaseSensitive,
    includeMatches: l = C.includeMatches,
    minMatchCharLength: n = C.minMatchCharLength,
    ignoreLocation: o = C.ignoreLocation,
    findAllMatches: r = C.findAllMatches,
    location: c = C.location,
    threshold: a = C.threshold,
    distance: d = C.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: t,
      includeMatches: l,
      minMatchCharLength: n,
      findAllMatches: r,
      ignoreLocation: o,
      location: c,
      threshold: a,
      distance: d
    }, this.pattern = t ? s : s.toLowerCase(), this.query = ei(this.pattern, this.options);
  }
  static condition(s, t) {
    return t.useExtendedSearch;
  }
  searchIn(s) {
    const t = this.query;
    if (!t)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: l, isCaseSensitive: n } = this.options;
    s = n ? s : s.toLowerCase();
    let o = 0, r = [], c = 0;
    for (let a = 0, d = t.length; a < d; a += 1) {
      const m = t[a];
      r.length = 0, o = 0;
      for (let f = 0, y = m.length; f < y; f += 1) {
        const S = m[f], { isMatch: T, indices: M, score: A } = S.search(s);
        if (T) {
          if (o += 1, c += A, l) {
            const w = S.constructor.type;
            ti.has(w) ? r = [...r, ...M] : r.push(M);
          }
        } else {
          c = 0, o = 0, r.length = 0;
          break;
        }
      }
      if (o) {
        let f = {
          isMatch: !0,
          score: c / o
        };
        return l && (f.indices = r), f;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Ie = [];
function li(...e) {
  Ie.push(...e);
}
function Ye(e, s) {
  for (let t = 0, l = Ie.length; t < l; t += 1) {
    let n = Ie[t];
    if (n.condition(e, s))
      return new n(e, s);
  }
  return new Kt(e, s);
}
const Ee = {
  AND: "$and",
  OR: "$or"
}, Xe = {
  PATH: "$path",
  PATTERN: "$val"
}, Ze = (e) => !!(e[Ee.AND] || e[Ee.OR]), ii = (e) => !!e[Xe.PATH], ni = (e) => !G(e) && Lt(e) && !Ze(e), $t = (e) => ({
  [Ee.AND]: Object.keys(e).map((s) => ({
    [s]: e[s]
  }))
});
function Bt(e, s, { auto: t = !0 } = {}) {
  const l = (n) => {
    let o = Object.keys(n);
    const r = ii(n);
    if (!r && o.length > 1 && !Ze(n))
      return l($t(n));
    if (ni(n)) {
      const a = r ? n[Xe.PATH] : o[0], d = r ? n[Xe.PATTERN] : n[a];
      if (!U(d))
        throw new Error(Dl(a));
      const m = {
        keyId: qe(a),
        pattern: d
      };
      return t && (m.searcher = Ye(d, s)), m;
    }
    let c = {
      children: [],
      operator: o[0]
    };
    return o.forEach((a) => {
      const d = n[a];
      G(d) && d.forEach((m) => {
        c.children.push(l(m));
      });
    }), c;
  };
  return Ze(e) || (e = $t(e)), l(e);
}
function oi(e, { ignoreFieldNorm: s = C.ignoreFieldNorm }) {
  e.forEach((t) => {
    let l = 1;
    t.matches.forEach(({ key: n, norm: o, score: r }) => {
      const c = n ? n.weight : null;
      l *= Math.pow(
        r === 0 && c ? Number.EPSILON : r,
        (c || 1) * (s ? 1 : o)
      );
    }), t.score = l;
  });
}
function ri(e, s) {
  const t = e.matches;
  s.matches = [], R(t) && t.forEach((l) => {
    if (!R(l.indices) || !l.indices.length)
      return;
    const { indices: n, value: o } = l;
    let r = {
      indices: n,
      value: o
    };
    l.key && (r.key = l.key.src), l.idx > -1 && (r.refIndex = l.idx), s.matches.push(r);
  });
}
function ai(e, s) {
  s.score = e.score;
}
function ci(e, s, {
  includeMatches: t = C.includeMatches,
  includeScore: l = C.includeScore
} = {}) {
  const n = [];
  return t && n.push(ri), l && n.push(ai), e.map((o) => {
    const { idx: r } = o, c = {
      item: s[r],
      refIndex: r
    };
    return n.length && n.forEach((a) => {
      a(o, c);
    }), c;
  });
}
class he {
  constructor(s, t = {}, l) {
    this.options = { ...C, ...t }, this.options.useExtendedSearch, this._keyStore = new Ll(this.options.keys), this.setCollection(s, l);
  }
  setCollection(s, t) {
    if (this._docs = s, t && !(t instanceof Je))
      throw new Error($l);
    this._myIndex = t || jt(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(s) {
    R(s) && (this._docs.push(s), this._myIndex.add(s));
  }
  remove(s = () => !1) {
    const t = [];
    for (let l = 0, n = this._docs.length; l < n; l += 1) {
      const o = this._docs[l];
      s(o, l) && (this.removeAt(l), l -= 1, n -= 1, t.push(o));
    }
    return t;
  }
  removeAt(s) {
    this._docs.splice(s, 1), this._myIndex.removeAt(s);
  }
  getIndex() {
    return this._myIndex;
  }
  search(s, { limit: t = -1 } = {}) {
    const {
      includeMatches: l,
      includeScore: n,
      shouldSort: o,
      sortFn: r,
      ignoreFieldNorm: c
    } = this.options;
    let a = U(s) ? U(this._docs[0]) ? this._searchStringList(s) : this._searchObjectList(s) : this._searchLogical(s);
    return oi(a, { ignoreFieldNorm: c }), o && a.sort(r), Pt(t) && t > -1 && (a = a.slice(0, t)), ci(a, this._docs, {
      includeMatches: l,
      includeScore: n
    });
  }
  _searchStringList(s) {
    const t = Ye(s, this.options), { records: l } = this._myIndex, n = [];
    return l.forEach(({ v: o, i: r, n: c }) => {
      if (!R(o))
        return;
      const { isMatch: a, score: d, indices: m } = t.searchIn(o);
      a && n.push({
        item: o,
        idx: r,
        matches: [{ score: d, value: o, norm: c, indices: m }]
      });
    }), n;
  }
  _searchLogical(s) {
    const t = Bt(s, this.options), l = (c, a, d) => {
      if (!c.children) {
        const { keyId: f, searcher: y } = c, S = this._findMatches({
          key: this._keyStore.get(f),
          value: this._myIndex.getValueForItemAtKeyId(a, f),
          searcher: y
        });
        return S && S.length ? [
          {
            idx: d,
            item: a,
            matches: S
          }
        ] : [];
      }
      const m = [];
      for (let f = 0, y = c.children.length; f < y; f += 1) {
        const S = c.children[f], T = l(S, a, d);
        if (T.length)
          m.push(...T);
        else if (c.operator === Ee.AND)
          return [];
      }
      return m;
    }, n = this._myIndex.records, o = {}, r = [];
    return n.forEach(({ $: c, i: a }) => {
      if (R(c)) {
        let d = l(t, c, a);
        d.length && (o[a] || (o[a] = { idx: a, item: c, matches: [] }, r.push(o[a])), d.forEach(({ matches: m }) => {
          o[a].matches.push(...m);
        }));
      }
    }), r;
  }
  _searchObjectList(s) {
    const t = Ye(s, this.options), { keys: l, records: n } = this._myIndex, o = [];
    return n.forEach(({ $: r, i: c }) => {
      if (!R(r))
        return;
      let a = [];
      l.forEach((d, m) => {
        a.push(
          ...this._findMatches({
            key: d,
            value: r[m],
            searcher: t
          })
        );
      }), a.length && o.push({
        idx: c,
        item: r,
        matches: a
      });
    }), o;
  }
  _findMatches({ key: s, value: t, searcher: l }) {
    if (!R(t))
      return [];
    let n = [];
    if (G(t))
      t.forEach(({ v: o, i: r, n: c }) => {
        if (!R(o))
          return;
        const { isMatch: a, score: d, indices: m } = l.searchIn(o);
        a && n.push({
          score: d,
          key: s,
          value: o,
          idx: r,
          norm: c,
          indices: m
        });
      });
    else {
      const { v: o, n: r } = t, { isMatch: c, score: a, indices: d } = l.searchIn(o);
      c && n.push({ score: a, key: s, value: o, norm: r, indices: d });
    }
    return n;
  }
}
he.version = "6.6.2";
he.createIndex = jt;
he.parseIndex = zl;
he.config = C;
he.parseQuery = Bt;
li(si);
const $e = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [l, n] of s)
    t[l] = n;
  return t;
}, hi = {
  name: "vue-thead",
  props: {
    theadHighlight: {
      type: Array,
      required: !0
    },
    headerTop: {
      type: Number,
      required: !0
    },
    headers: {
      type: Array,
      required: !0
    },
    currentTable: {
      type: Number,
      required: !0
    },
    submenuThead: {
      type: Array,
      required: !0
    },
    disableSortThead: {
      type: Array,
      required: !0
    },
    sortHeader: {
      type: Boolean,
      required: !1
    },
    tbodyIndex: {
      type: Boolean,
      required: !1
    },
    tbodyCheckbox: {
      type: Boolean,
      required: !1
    },
    submenuStatusThead: {
      type: Boolean,
      required: !1
    }
  },
  data() {
    return {
      checkedAll: !1,
      beforeChangeSize: {},
      eventDrag: !1,
      newSize: "",
      submenuEnableCol: null,
      vueTableHeight: 0
    };
  },
  mounted() {
    window.addEventListener("mousemove", this.handleMoveChangeSize);
  },
  methods: {
    checkedAllRow() {
      this.$emit("thead-checked-all-callback", this.checkedAll);
    },
    removeClass(e, s) {
      this.headers.forEach((t, l) => {
        l !== s && (this.headers[l].activeSort = "");
      });
    },
    handleDownChangeSize(e, s, t) {
      this.eventDrag = !0, this.$parent && this.$parent.$refs && this.$parent.$refs[`${this.currentTable}-table`] && (this.vueTableHeight = this.$parent.$refs[`${this.currentTable}-table`].offsetHeight), this.beforeChangeSize = {
        col: t,
        offset: e.clientX,
        width: parseInt(s.style.width, 10)
      };
      const [l] = this.$refs[`resize-${this.beforeChangeSize.col}`];
      l.style.top = `${l.parentElement.offsetTop}px`;
    },
    handleMoveChangeSize(e) {
      if (this.eventDrag) {
        const s = this.$refs[`resize-${this.beforeChangeSize.col}`][0], t = s.offsetTop, l = t + s.offsetHeight;
        if (t <= e.clientY && l >= e.clientY) {
          const n = this.$refs[`resize-${this.beforeChangeSize.col}`][0];
          n.style.left = `${e.clientX}px`, n.style.setProperty("--dragHeaderHeight", `${this.vueTableHeight}px`);
        } else
          this.handleUpDragToFill(e);
      }
    },
    handleUpDragToFill(e) {
      if (this.eventDrag) {
        this.eventDrag = !1;
        const s = this.beforeChangeSize.offset, t = e.clientX, l = Math.max(t, s) - Math.min(t, s);
        t > s ? this.newSize = this.beforeChangeSize.width + l : this.newSize = this.beforeChangeSize.width - l;
        const [n] = this.$refs[`resize-${this.beforeChangeSize.col}`];
        n.style.left = "auto", n.style.top = "0", n.style.setProperty("--dragHeaderHeight", "100%"), this.headers[this.beforeChangeSize.col].style.width = `${this.newSize}px`, this.headers[this.beforeChangeSize.col].style.minWidth = `${this.newSize}px`, this.headers[this.beforeChangeSize.col].active = !1, this.beforeChangeSize = {}, this.$emit("handle-up-drag-size-header", e, this.headers);
      }
    },
    handleSort(e, s, t) {
      const l = s;
      !l.activeSort || l.activeSort === "Z" ? this.headers[t].activeSort = "A" : this.headers[t].activeSort = "Z", this.removeClass("activeSort", t), this.$emit("thead-td-sort", e, l, t);
    },
    handleContextMenuTd(e, s, t) {
      this.submenuEnableCol = t, this.submenuStatusThead === !0 ? this.$emit("submenu-enable", "tbody") : this.$emit("submenu-enable", "thead"), this.$emit("thead-td-context-menu", e, s, t);
    },
    handleClickSubmenu(e, s, t, l, n) {
      n ? this.$emit(
        "thead-submenu-click-callback",
        e,
        s,
        t,
        l,
        n
      ) : this.$emit("thead-submenu-click-callback", e, s, t, l);
    }
  }
}, di = {
  key: 0,
  class: "index"
}, ui = ["id"], fi = ["for"], mi = {
  class: "index",
  key: "th-index"
}, bi = ["onClick"], yi = ["onClick"], pi = ["onClick"], Ci = { key: 0 }, gi = ["onUpdate:modelValue"], Ti = ["value"], Si = ["onClick"], vi = ["onMousedown", "onMouseup"];
function ki(e, s, t, l, n, o) {
  return p(), g("thead", {
    class: "thead",
    onMouseup: s[2] || (s[2] = (r) => o.handleUpDragToFill(r))
  }, [
    v("tr", null, [
      t.tbodyCheckbox ? (p(), g("th", di, [
        be(v("input", {
          type: "checkbox",
          id: `checkbox-all-${t.currentTable}`,
          "onUpdate:modelValue": s[0] || (s[0] = (r) => n.checkedAll = r),
          onChange: s[1] || (s[1] = (...r) => o.checkedAllRow && o.checkedAllRow(...r))
        }, null, 40, ui), [
          [Dt, n.checkedAll]
        ]),
        v("label", {
          for: `checkbox-all-${t.currentTable}`
        }, null, 8, fi)
      ])) : _("", !0),
      t.tbodyIndex ? (p(), g("th", mi)) : _("", !0),
      (p(!0), g(E, null, J(t.headers, (r, c) => (p(), g("th", {
        key: r.headerKey,
        class: F(["th", {
          disabled: r.disabled,
          highlight_spreadsheet: t.theadHighlight.includes(c),
          dragged: n.beforeChangeSize.col === c
        }]),
        ref_for: !0,
        ref: "th-" + c,
        style: ye([r.style, r.style.top = t.headerTop > 0 ? t.headerTop + "px" : "auto"])
      }, [
        v("span", null, H(r.headerName), 1),
        t.submenuThead && t.submenuThead.find((a) => a.disabled.includes(r.headerKey) == 0) ? (p(), g("button", {
          key: 0,
          onClick: (a) => o.handleContextMenuTd(a, r.headerKey, c),
          class: F([{
            active: t.submenuThead && t.submenuStatusThead && c === n.submenuEnableCol
          }, "button_submenu button_submenu-2"])
        }, s[3] || (s[3] = [
          v("span", { class: "icon icon_menu" }, [
            v("i", { class: "bullet bullet-1" }),
            v("i", { class: "bullet bullet-2" }),
            v("i", { class: "bullet bullet-3" })
          ], -1)
        ]), 10, bi)) : _("", !0),
        t.sortHeader && t.disableSortThead.indexOf(r.headerKey) === -1 ? (p(), g("button", {
          key: 1,
          onClick: (a) => o.handleSort(a, r, c),
          class: F([{
            sort_A: r.activeSort === "A",
            sort_Z: r.activeSort === "Z"
          }, "button_submenu"])
        }, s[4] || (s[4] = [
          v("i", { class: "icon sort" }, null, -1),
          v("i", { class: "icon sort" }, null, -1)
        ]), 10, yi)) : _("", !0),
        me(Ue, { name: "fade" }, {
          default: We(() => [
            t.submenuThead && t.submenuStatusThead && c === n.submenuEnableCol && t.submenuThead.find((a) => a.disabled.includes(r.headerKey) == 0) ? (p(), g("div", {
              key: "submenu-" + r.headerKey,
              class: "submenu_wrap"
            }, [
              (p(!0), g(E, null, J(t.submenuThead, (a, d) => (p(), g(E, null, [
                a.type === "button" ? (p(), g(E, { key: 0 }, [
                  a.disabled.includes(r.headerKey) == 0 ? (p(), g("button", {
                    key: d,
                    onClick: L((m) => o.handleClickSubmenu(m, r, c, a.function), ["stop"])
                  }, H(a.value), 9, pi)) : _("", !0)
                ], 64)) : _("", !0),
                a.type === "select" ? (p(), g(E, { key: 1 }, [
                  a.disabled.includes(r.headerKey) == 0 ? (p(), g("div", {
                    class: "menu_option",
                    key: d
                  }, [
                    a.subtitle ? (p(), g("h3", Ci, H(a.subtitle), 1)) : _("", !0),
                    be(v("select", {
                      "onUpdate:modelValue": (m) => a.value = m
                    }, [
                      (p(!0), g(E, null, J(a.selectOptions, (m, f) => (p(), g("option", {
                        value: m.value,
                        key: f
                      }, H(m.label), 9, Ti))), 128))
                    ], 8, gi), [
                      [dl, a.value]
                    ]),
                    v("button", {
                      style: ye(a.buttonOption.style),
                      onClick: L((m) => o.handleClickSubmenu(
                        m,
                        r,
                        c,
                        a.buttonOption.function,
                        a.value
                      ), ["stop"])
                    }, H(a.buttonOption.value), 13, Si)
                  ])) : _("", !0)
                ], 64)) : _("", !0)
              ], 64))), 256))
            ])) : _("", !0)
          ]),
          _: 2
        }, 1024),
        v("button", {
          ref_for: !0,
          ref: "resize-" + c,
          onMousedown: (a) => o.handleDownChangeSize(a, r, c),
          onMouseup: (a) => o.handleUpDragToFill(a, r, c),
          class: F(["resize", { active: r.active }])
        }, null, 42, vi)
      ], 6))), 128))
    ])
  ], 32);
}
const _i = /* @__PURE__ */ $e(hi, [["render", ki], ["__scopeId", "data-v-f03aa588"]]);
const Mi = {
  name: "VsSelect",
  props: {
    colIndex: {
      type: Number,
      require: !0
    },
    currentTable: {
      type: Number,
      required: !0
    },
    disabledEvent: {
      type: Function,
      required: !0
    },
    filteredList: {
      type: Array,
      default: () => []
    },
    header: {
      type: String,
      default: ""
    },
    value: {
      type: Object,
      default: () => ({})
    },
    rowIndex: {
      type: Number,
      require: !0
    },
    trad: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    enableSelect(e, s, t, l, n) {
      if (!this.disabledEvent(t, s)) {
        this.searchInput = "";
        const o = t.selectOptions.find((r) => r.value === t.value);
        o && (o.active = !0), this.$emit("tbody-handle-to-open-select", e, s, t, l, n);
      }
    },
    selectHandleChange(e, s, t, l, n, o) {
      this.$emit("input", e.target.value), this.$emit("tbody-handle-select-change", e, s, t, l, n, o);
    },
    handleSearchInputSelect(e, s, t, l, n) {
      this.disabledEvent(s, t) || this.$emit(
        "tbody-handle-search-input-select",
        e,
        t,
        s,
        this.searchInput,
        l,
        n
      );
    }
  }
}, wi = { key: 0 }, Oi = {
  key: 0,
  class: "dropdown"
}, Ei = ["placeholder"], $i = ["value", "onClick"], Di = ["value"], Ai = ["value"];
function Vi(e, s, t, l, n, o) {
  return t.value[t.header] && t.value[t.header].type === "select" ? (p(), g("div", wi, [
    v("span", {
      ref: `span-${t.currentTable}-${t.colIndex}-${t.rowIndex}`
    }, H(t.value[t.header].value), 513),
    t.value[t.header].handleSearch ? (p(), g(E, { key: 0 }, [
      v("i", {
        class: F(["glass_icon", { show: t.value[t.header].search }])
      }, null, 2),
      v("button", {
        class: "select_btn",
        onClick: s[0] || (s[0] = L((r) => o.enableSelect(r, t.header, t.value[t.header], t.rowIndex, t.colIndex), ["stop"]))
      }, [
        v("i", {
          class: F(["select_icon", { active: t.value[t.header].search === !0 }])
        }, null, 2)
      ]),
      t.value[t.header].search === !0 ? (p(), g("div", Oi, [
        be(v("input", {
          ref: `input-${t.currentTable}-${t.colIndex}-${t.rowIndex}`,
          "onUpdate:modelValue": s[1] || (s[1] = (r) => n.searchInput = r),
          placeholder: t.trad[t.trad.lang].select.placeholder,
          onKeyup: [
            s[2] || (s[2] = At((r) => e.escKeyup(t.value[t.header], t.rowIndex, t.header, t.colIndex, t.value[t.header].type), ["esc"])),
            s[3] || (s[3] = L((r) => o.handleSearchInputSelect(r, t.value[t.header], t.header, t.rowIndex, t.colIndex), ["exact"]))
          ]
        }, null, 40, Ei), [
          [Vt, n.searchInput]
        ]),
        v("ul", {
          ref: `dropdown-${t.currentTable}-${t.colIndex}-${t.rowIndex}`,
          class: F({ show: t.value[t.header].search })
        }, [
          (p(!0), g(E, null, J(t.filteredList, (r, c) => (p(), g("li", {
            key: c,
            class: F({ active: r.active }),
            value: r.value || r.item.value,
            onClick: L((a) => o.selectHandleChange(a, t.header, t.value[t.header], r, t.rowIndex, t.colIndex), ["stop"])
          }, H(r.label || r.item.label), 11, $i))), 128))
        ], 2)
      ])) : _("", !0)
    ], 64)) : (p(), g("select", {
      key: 1,
      value: t.value[t.header].value,
      onChange: s[4] || (s[4] = (r) => o.selectHandleChange(r, t.header, t.value[t.header], e.option, t.rowIndex, t.colIndex))
    }, [
      (p(!0), g(E, null, J(t.value[t.header].selectOptions, (r, c) => (p(), g("option", {
        key: c,
        value: r.value
      }, H(r.label), 9, Ai))), 128))
    ], 40, Di))
  ])) : _("", !0);
}
const Pi = /* @__PURE__ */ $e(Mi, [["render", Vi], ["__scopeId", "data-v-890055f2"]]), Li = {
  name: "vue-tbody",
  components: {
    VSelect: Pi
  },
  props: {
    tbodyHighlight: {
      type: Array,
      required: !0
    },
    filteredList: {
      type: Array,
      required: !0
    },
    headers: {
      type: Array,
      required: !0
    },
    currentTable: {
      type: Number,
      required: !0
    },
    tbodyData: {
      type: Array,
      required: !0
    },
    trad: {
      type: Object,
      required: !0
    },
    disableCells: {
      type: Array,
      required: !1
    },
    tbodyIndex: {
      type: Boolean,
      required: !1
    },
    tbodyCheckbox: {
      type: Boolean,
      required: !1
    },
    submenuStatusTbody: {
      type: Boolean,
      required: !1
    },
    submenuTbody: {
      type: Array,
      required: !1
    }
  },
  data() {
    return {
      emptyCell: "",
      eventDrag: !1,
      submenuEnableCol: null,
      submenuEnableRow: null,
      vuetableTooltip: {},
      vueTableComment: {}
    };
  },
  computed: {
    headerKeys() {
      return this.headers.map((e) => e.headerKey);
    }
  },
  methods: {
    checkedRow(e) {
      this.$emit("tbody-checked-row", e);
    },
    handleHoverTriangleComment(e, s) {
      this.vueTableComment[s] || (this.vueTableComment[s] = e);
    },
    handleOutTriangleComment() {
      this.vueTableComment = {};
    },
    handleHoverTooltip(e, s, t, l) {
      if (this.$refs[`span-${this.currentTable}-${t}-${s}`] && l !== "img") {
        const n = this.$refs[`span-${this.currentTable}-${t}-${s}`][0];
        !this.vuetableTooltip[s] && n && n.scrollWidth > n.clientWidth && (this.vuetableTooltip[s] = e);
      }
    },
    handleOutTooltip() {
      this.vuetableTooltip = {}, this.handleOutTriangleComment();
    },
    disabledEvent(e, s) {
      return e.disabled === void 0 ? this.disableCells.some((t) => t === s) : e.disabled;
    },
    escKeyup(e, s, t, l, n) {
      this.disabledEvent(e, t) || this.$emit("tbody-handle-set-oldvalue", e, s, t, l, n);
    },
    // select
    tbodyOpenSelect(e, s, t, l, n) {
      this.$emit("handle-to-open-select", e, s, t, l, n);
    },
    tbodySelectChange(e, s, t, l, n, o) {
      this.$emit("tbody-select-change", e, s, t, l, n, o);
    },
    tbodySearchInputSelect(e, s, t, l, n, o) {
      this.$emit(
        "tbody-handle-search-input-select",
        e,
        l,
        t,
        s,
        n,
        o
      );
    },
    handleSelectMultipleCell(e, s, t, l, n) {
      this.$emit("tbody-select-multiple-cell", e, s, t, l, n);
    },
    handleDownDragToFill(e, s, t, l, n) {
      this.disabledEvent(t, s) || (this.eventDrag = !0, this.$emit("tbody-down-dragtofill", e, s, t, l, n));
    },
    handleMoveDragToFill(e, s, t, l, n) {
      this.eventDrag && !this.disabledEvent(t, s) && this.$emit("tbody-move-dragtofill", e, s, t, l, n);
    },
    handleUpDragToFill(e, s, t, l, n, o) {
      this.eventDrag && !this.disabledEvent(t, s) && (this.eventDrag = !1, this.$emit("tbody-up-dragtofill", e, s, l, n, o));
    },
    handleClickTd(e, s, t, l, n, o) {
      this.$emit("tbody-td-click", e, s, t, l, n, o);
    },
    handleDoubleClickTd(e, s, t, l, n) {
      this.disabledEvent(t, s) || this.$emit("tbody-td-double-click", e, s, t, l, n);
    },
    handleContextMenuTd(e, s, t, l, n) {
      this.submenuEnableCol = l, this.submenuEnableRow = t, this.$emit("submenu-enable", "tbody"), this.$emit("tbody-td-context-menu", e, s, t, l, n), this.$emit("handle-to-calculate-position", e, t, l, "contextMenu");
    },
    inputHandleChange(e, s, t, l) {
      this.$emit("tbody-input-change", e, s, t, l);
    },
    handleClickSubmenu(e, s, t, l, n, o) {
      this.$emit(
        "tbody-submenu-click-callback",
        e,
        s,
        t,
        l,
        n,
        o
      );
    },
    autorizeOnlyNumericValue(e) {
      const s = e.which;
      return s !== 8 && s !== 13 && s !== 27 && e.key !== "0" && !Number(e.key);
    },
    inputHandleKeydow(e, s, t, l) {
      this.tbodyData[t][s].numeric && this.autorizeOnlyNumericValue(e) && e.preventDefault(), this.$emit("tbody-input-keydown", e, s, t, l);
    }
  }
};
const Ri = ["id", "onChange", "onUpdate:modelValue"], Hi = ["for"], ji = ["data-header", "data-col-index", "data-row-index", "data-type", "onMouseover", "onClick", "onContextmenu", "onDblclick", "onMousemove", "onMouseup", "current-table"], Ki = {
  key: 0,
  class: "vuetable_tooltip"
}, Fi = ["onMouseover"], Ni = ["onMousedown", "onMouseup"], Bi = {
  key: 0,
  class: "submenu_wrap"
}, zi = ["onClick"], Ui = { key: 1 }, Wi = ["src", "title"], xi = ["onUpdate:modelValue", "onKeydown", "onChange", "onKeyup"];
function qi(e, s, t, l, n, o) {
  const r = xe("v-select");
  return p(), g("tbody", null, [
    (p(!0), g(E, null, J(e.tbodyData, (c, a) => (p(), g("tr", {
      key: `row${a}`,
      class: F(["table_row", {
        checked_row: "vuetable_checked" in e.tbodyData[a] && e.tbodyData[a].vuetable_checked === !0
      }])
    }, [
      e.tbodyCheckbox && "vuetable_checked" in e.tbodyData[a] ? (p(), g("td", {
        class: F([{ highlight_spreadsheet: e.tbodyHighlight.includes(a) }, "vs_checkbox index"]),
        key: `checkbox-${e.currentTable}-${a}`
      }, [
        be(v("input", {
          type: "checkbox",
          id: `checkbox-${e.currentTable}-${a}`,
          onChange: (d) => e.checkedRow(e.tbodyData[a]),
          "onUpdate:modelValue": (d) => e.tbodyData[a].vuetable_checked = d
        }, null, 40, Ri), [
          [Dt, e.tbodyData[a].vuetable_checked]
        ]),
        v("label", {
          for: `checkbox-${e.currentTable}-${a}`
        }, null, 8, Hi)
      ], 2)) : _("", !0),
      e.tbodyIndex ? (p(), g("td", {
        class: F(["index", { highlight_spreadsheet: e.tbodyHighlight.includes(a) }]),
        key: `td-${e.currentTable}-index-${a}`
      }, H(a + 1), 3)) : _("", !0),
      (p(!0), g(E, null, J(e.headerKeys, (d, m) => (p(), g(E, null, [
        c[d] ? (p(), g("td", {
          class: F(["td", {
            active_td: c[d].active,
            show: c[d].show,
            selected: c[d].selected,
            copy: c[d].stateCopy,
            disabled: c[d].disabled || e.disableCells.find((f) => f === d),
            rectangleSelection: c[d].rectangleSelection
          }]),
          "data-header": d,
          "data-col-index": m,
          "data-row-index": a,
          "data-type": c[d].type,
          onMouseover: L((f) => e.handleHoverTooltip(d, a, m, c[d].type), ["stop"]),
          onMouseout: s[2] || (s[2] = L((...f) => e.handleOutTooltip && e.handleOutTooltip(...f), ["stop"])),
          onClick: [
            L((f) => e.handleSelectMultipleCell(f, d, a, m, c[d].type), ["shift", "exact"]),
            L((f) => e.handleClickTd(f, c[d], d, a, m, c[d].type), ["exact"])
          ],
          onContextmenu: (f) => e.handleContextMenuTd(f, d, a, m, c[d].type),
          onDblclick: (f) => e.handleDoubleClickTd(f, d, c[d], a, m, c[d].type),
          onMousemove: (f) => e.handleMoveDragToFill(f, d, c[d], a, m),
          onMouseup: (f) => e.handleUpDragToFill(f, d, c[d], a, m, c[d].type),
          "current-table": e.currentTable,
          ref_for: !0,
          ref: `td-${e.currentTable}-${m}-${a}`,
          key: d,
          style: ye(c[d].style)
        }, [
          me(Ue, { name: "transitionTooltip" }, {
            default: We(() => [
              c[d].value !== "" && !c[d].search && !c[d].active && c[d].type !== "img" && !c[d].selected && e.vuetableTooltip[a] === d ? (p(), g("div", Ki, H(c[d].value), 1)) : _("", !0)
            ]),
            _: 2
          }, 1024),
          c[d].value !== "" && !c[d].search && c[d].comment ? (p(), g("span", {
            key: 0,
            class: "vuetable_triange",
            style: ye([
              c[d].comment.borderColor ? { borderTopColor: c[d].comment.borderColor } : {}
            ]),
            onMouseover: L((f) => e.handleHoverTriangleComment(d, a), ["stop"]),
            onMouseout: s[1] || (s[1] = L((...f) => e.handleOutTriangleComment && e.handleOutTriangleComment(...f), ["stop"]))
          }, [
            me(Ue, { name: "transitionComment" }, {
              default: We(() => [
                e.vueTableComment[a] === d && c[d].comment.value ? (p(), g("div", {
                  key: 0,
                  class: "vuetable_triange_comment",
                  onMouseout: s[0] || (s[0] = L((...f) => e.handleOutTriangleComment && e.handleOutTriangleComment(...f), ["stop"]))
                }, H(c[d].comment.value), 33)) : _("", !0)
              ]),
              _: 2
            }, 1024)
          ], 44, Fi)) : _("", !0),
          v("button", {
            class: "drag_to_fill",
            onMousedown: (f) => e.handleDownDragToFill(f, d, c[d], a, m),
            onMouseup: (f) => e.handleUpDragToFill(
              f,
              d,
              c[d],
              a,
              m,
              c[d].type
            )
          }, null, 40, Ni),
          v("div", {
            class: "submenu",
            ref_for: !0,
            ref: `contextMenu-${e.currentTable}-${m}-${a}`
          }, [
            e.submenuTbody && e.submenuStatusTbody && a === e.submenuEnableRow && m === e.submenuEnableCol && e.submenuTbody.find((f) => f.disabled.includes(d) == 0) ? (p(), g("div", Bi, [
              (p(!0), g(E, null, J(e.submenuTbody, (f, y) => (p(), g(E, null, [
                f.type === "button" ? (p(), g(E, { key: 0 }, [
                  f.disabled.includes(d) == 0 ? (p(), g("button", {
                    key: y,
                    onClick: L((S) => e.handleClickSubmenu(
                      S,
                      d,
                      a,
                      m,
                      c[d].type,
                      f.function
                    ), ["stop"])
                  }, H(f.value), 9, zi)) : _("", !0)
                ], 64)) : _("", !0)
              ], 64))), 256))
            ])) : _("", !0)
          ], 512),
          c[d].type === "img" ? (p(), g("span", Ui, [
            v("img", {
              src: c[d].value,
              title: c[d].value
            }, null, 8, Wi)
          ])) : _("", !0),
          c[d].type === "input" ? (p(), g(E, { key: 2 }, [
            v("span", {
              ref_for: !0,
              ref: `span-${e.currentTable}-${m}-${a}`
            }, H(c[d].value), 513),
            be(v("textarea", {
              "onUpdate:modelValue": (f) => c[d].value = f,
              onKeydown: (f) => e.inputHandleKeydow(f, d, a, m),
              onChange: (f) => e.inputHandleChange(f, d, a, m),
              onKeyup: At((f) => e.escKeyup(c[d], a, d, m, c[d].type), ["esc"]),
              ref_for: !0,
              ref: `textarea-${e.currentTable}-${m}-${a}`
            }, "              ", 40, xi), [
              [Vt, c[d].value]
            ])
          ], 64)) : _("", !0),
          me(r, {
            value: c,
            ref_for: !0,
            ref: `vsSelect-${e.currentTable}-${m}-${a}`,
            colIndex: m,
            currentTable: e.currentTable,
            disabledEvent: e.disabledEvent,
            filteredList: e.filteredList,
            header: d,
            rowIndex: a,
            trad: e.trad,
            onTbodyHandleToOpenSelect: e.tbodyOpenSelect,
            onTbodyHandleSelectChange: e.tbodySelectChange,
            onTbodyHandleSearchInputSelect: e.tbodySearchInputSelect
          }, null, 8, ["value", "colIndex", "currentTable", "disabledEvent", "filteredList", "header", "rowIndex", "trad", "onTbodyHandleToOpenSelect", "onTbodyHandleSelectChange", "onTbodyHandleSearchInputSelect"])
        ], 46, ji)) : _("", !0)
      ], 64))), 256))
    ], 2))), 128))
  ]);
}
const Gi = /* @__PURE__ */ $e(Li, [["render", qi]]);
const Ii = {
  name: "VueTable",
  components: {
    VueThead: _i,
    VueTbody: Gi
  },
  mixins: [
    pl,
    bl,
    yl,
    Cl,
    gl,
    Sl,
    vl,
    kl
  ],
  props: {
    headers: {
      type: Array,
      required: !0
    },
    modelValue: {
      type: Array,
      required: !0
    },
    customOptions: {
      type: Object,
      required: !0
    },
    styleWrapVueTable: {
      type: Object,
      required: !0
    },
    submenuThead: {
      type: Array,
      required: !0
    },
    disableSortThead: {
      type: Array,
      required: !0
    },
    loading: {
      type: Boolean,
      required: !0
    },
    selectPosition: {
      type: Object,
      required: !0
    },
    parentScrollElement: {
      type: Object,
      required: !0
    },
    disableCells: {
      type: Array,
      required: !1
    },
    submenuTbody: {
      type: Array,
      required: !1
    }
  },
  data() {
    return {
      customTable: 0,
      highlight: {
        tbody: [],
        thead: []
      },
      incrementOption: null,
      lastSelectOpen: null,
      scrollDocument: null,
      scrollToSelectTimeout: null,
      selectedCell: null,
      selectedMultipleCell: !1,
      selectedMultipleCellActive: !1,
      setFirstCell: !1,
      submenuStatusTbody: !1,
      submenuStatusThead: !1
    };
  },
  computed: {
    checkedRows() {
      return this.modelValue.filter((e) => e.checked);
    },
    colHeaderWidths() {
      return this.headers.map((e) => parseInt(e.style.width, 10));
    },
    filteredList() {
      if (this.lastSelectOpen) {
        const { selectOptions: e } = this.lastSelectOpen.col, { searchValue: s } = this.lastSelectOpen || "", t = new he(e, this.customOptions.fuseOptions);
        return s && s.length > 1 ? t.search(s) : this.sorter(e);
      }
      return [];
    },
    headerKeys() {
      return this.headers.map((e) => e.headerKey);
    }
  },
  watch: {
    modelValue() {
      this.createdCell();
    },
    headers() {
      this.createdCell();
    }
  },
  created() {
    this.customTable = Date.now();
  },
  mounted() {
    this.createdCell(), this.setPropertyStyleOfComment();
  },
  methods: {
    activeSelectSearch(e, s, t) {
      this.calculPosition(e, s, t, "dropdown");
    },
    calculPosition(e, s, t, l) {
      if (l === "dropdown" && !this.modelValue[s][this.headers[t].headerKey].search)
        return;
      const n = 40, { scrollLeft: o } = this.$refs[`${this.customTable}-vueTable`], { scrollTop: r } = this.$refs[`${this.customTable}-vueTable`], c = this.$refs[`${this.customTable}-vueTbody`].$refs[`td-${this.customTable}-0-0`][0].offsetTop, a = this.$refs[`${this.customTable}-vueTbody`].$refs[`td-${this.customTable}-${t}-${s}`][0], d = this.$refs[`${this.customTable}-vueTable`].offsetHeight, m = a.offsetWidth;
      let f = a.offsetTop - r + n - this.parentScrollElement.positionTop, y = a.offsetLeft - o;
      this.selectPosition && (f += this.selectPosition.top, y += this.selectPosition.left), this.scrollDocument && (f = a.offsetTop - r + n - this.parentScrollElement.positionTop - this.scrollDocument);
      const S = this.$refs[`${this.customTable}-vueTbody`].$refs[`vsSelect-${this.customTable}-${t}-${s}`][0].$refs[`dropdown-${this.customTable}-${t}-${s}`], T = this.$refs[`${this.customTable}-vueTbody`].$refs[`contextMenu-${this.customTable}-${t}-${s}`][0], M = S || T;
      M && (M.style.setProperty("--selectWidth", `${m}px`), M.style.setProperty("--selectLeft", `${y}px`), this.$nextTick(() => {
        const A = M.offsetHeight || 180, w = n + A;
        d + c < a.offsetTop + 250 ? M.style.setProperty("--selectTop", `${f - w}px`) : M.style.setProperty("--selectTop", `${f}px`);
      }));
    },
    checkedRow(e) {
      this.$emit("tbody-checked-row", e), this.$refs[`${this.customTable}-vueThead`].checkedAll = !1;
    },
    createdCell() {
      var e;
      (e = this.modelValue) == null || e.forEach((s, t) => {
        this.customOptions.tbodyCheckbox && !s.vuetable_checked && (this.modelValue[t].vuetable_checked = !1), this.headerKeys.forEach((l) => {
          if (s[l]) {
            if (!s[l].type && "value" in s[l]) {
              const o = Z(this.customOptions.newData), r = Z(s[l]);
              r.type = o.type, this.modelValue[t][l] = r;
            }
          } else {
            const o = Z(this.customOptions.newData);
            this.modelValue[t][l] = o;
          }
          const n = Z(this.modelValue[t][l]);
          (!this.modelValue[t][l].duplicate || this.modelValue[t][l].duplicate && this.modelValue[t][l].duplicate === n) && (this.modelValue[t][l].duplicate = n);
        });
      });
    },
    enableSubmenu(e) {
      e === "thead" ? (this.submenuStatusThead = !0, this.submenuStatusTbody = !1) : e === "tbody" ? (this.submenuStatusThead = !1, this.submenuStatusTbody = !0) : (this.submenuStatusThead = !1, this.submenuStatusTbody = !1);
    },
    enableSelect(e, s, t, l, n) {
      const o = this.modelValue[l][s];
      t.search ? (o.search = !1, o.show = !1, this.lastSelectOpen = null) : (this.removeClass(["search", "show"]), this.lastSelectOpen = {
        col: t,
        colIndex: n,
        event: e,
        header: s,
        rowIndex: l
      }, o.search = !0, o.show = !0, this.$nextTick(() => {
        if (this.$refs[`${this.customTable}-vueTbody`].$refs[`vsSelect-${this.customTable}-${n}-${l}`][0].$refs[`input-${this.customTable}-${n}-${l}`].focus(), this.calculPosition(e, l, n, "dropdown"), o.value !== "") {
          this.showDropdown(n, l);
          const r = o.selectOptions.map((c) => c.value).indexOf(o.value);
          this.incrementOption = r;
        } else
          this.incrementOption = 0;
      }));
    },
    highlightTdAndThead(e, s) {
      this.highlight.tbody = [], this.highlight.thead = [], this.highlight.tbody = [
        ...this.range(
          Math.min(this.selectedCell.row, e),
          Math.max(this.selectedCell.row, e)
        )
      ], this.highlight.thead = [
        ...this.range(
          Math.min(this.selectedCell.col, s),
          Math.max(this.selectedCell.col, s)
        )
      ];
    },
    range(e, s) {
      return new Array(s - e + 1).fill(void 0).map((t, l) => l + e);
    },
    removeClass(e) {
      e.includes("selected") && (this.selectedMultipleCellActive = !1), e.forEach((s) => {
        this.modelValue.forEach((t, l) => {
          Object.keys(t).forEach((n) => {
            this.modelValue[l] && this.modelValue[l][n] && this.modelValue[l][n][s] === !0 && (this.modelValue[l][n][s] = !1);
          }), s === "rectangleSelection" && (this.setFirstCell = !1);
        });
      });
    },
    showDropdown(e, s) {
      const t = this.$refs[`${this.customTable}-vueTbody`].$refs[`vsSelect-${this.customTable}-${e}-${s}`][0].$refs[`dropdown-${this.customTable}-${e}-${s}`];
      t && (!this.scrollToSelectTimeout === null && clearTimeout(this.scrollToSelectTimeout), this.scrollToSelectTimeout = setTimeout(() => {
        t.scrollTop = 45 * this.incrementOption, this.scrollToSelectTimeout = null;
      }, 100));
    },
    setPropertyStyleOfComment() {
      var e, s, t, l;
      (e = this.styleWrapVueTable.comment) != null && e.borderColor && this.$refs[`${this.customTable}-vueTable`].style.setProperty(
        "--borderCommentColor",
        this.styleWrapVueTable.comment.borderColor
      ), (s = this.styleWrapVueTable.comment) != null && s.borderSize && this.$refs[`${this.customTable}-vueTable`].style.setProperty(
        "--borderCommentSize",
        this.styleWrapVueTable.comment.borderSize
      ), (t = this.styleWrapVueTable.comment) != null && t.widthBox && this.$refs[`${this.customTable}-vueTable`].style.setProperty(
        "--boxCommentWidth",
        this.styleWrapVueTable.comment.widthBox
      ), (l = this.styleWrapVueTable.comment) != null && l.heightBox && this.$refs[`${this.customTable}-vueTable`].style.setProperty(
        "--BoxCommentHeight",
        this.styleWrapVueTable.comment.heightBox
      );
    },
    sorter(e) {
      return e.sort((s, t) => {
        const l = s.value, n = t.value;
        return l === void 0 && n ? 1 : l && n === void 0 || l < n ? -1 : l > n ? 1 : 0;
      });
    },
    setOldValueOnInputSelect(e, s, t, l, n) {
      const o = e;
      o.show = !1, n === "select" && (o.search = !1);
    }
  }
};
function Yi(e, s, t, l, n, o) {
  const r = xe("vue-thead"), c = xe("vue-tbody");
  return p(), g("div", {
    ref: `${n.customTable}-vueTable`,
    style: ye(t.styleWrapVueTable),
    class: "vue-spreadsheet",
    onScroll: s[0] || (s[0] = (...a) => e.scrollFunction && e.scrollFunction(...a))
  }, [
    _t(e.$slots, "header"),
    v("table", {
      class: "vue_table",
      oncontextmenu: "return false;",
      ref: `${n.customTable}-table`
    }, [
      me(r, {
        ref: `${n.customTable}-vueThead`,
        "disable-sort-thead": t.disableSortThead,
        "header-top": e.headerTop,
        headers: t.headers,
        "sort-header": t.customOptions.sortHeader,
        "submenu-status-thead": n.submenuStatusThead,
        "submenu-thead": t.submenuThead,
        "tbody-index": t.customOptions.tbodyIndex,
        "tbody-checkbox": t.customOptions.tbodyCheckbox,
        "thead-highlight": n.highlight.thead,
        "current-table": n.customTable,
        onHandleUpDragSizeHeader: e.handleUpDragSizeHeader,
        onHandleUpDragToFill: e.handleUpDragToFill,
        onSubmenuEnable: o.enableSubmenu,
        onTheadCheckedAllCallback: e.callbackCheckedAll,
        onTheadSubmenuClickCallback: e.callbackSubmenuThead,
        onTheadTdContextMenu: e.handleTheadContextMenu,
        onTheadTdSort: e.callbackSort
      }, null, 8, ["disable-sort-thead", "header-top", "headers", "sort-header", "submenu-status-thead", "submenu-thead", "tbody-index", "tbody-checkbox", "thead-highlight", "current-table", "onHandleUpDragSizeHeader", "onHandleUpDragToFill", "onSubmenuEnable", "onTheadCheckedAllCallback", "onTheadSubmenuClickCallback", "onTheadTdContextMenu", "onTheadTdSort"]),
      t.loading ? _t(e.$slots, "loader", { key: 0 }) : _("", !0),
      t.loading ? _("", !0) : (p(), ul(c, {
        key: 1,
        ref: `${n.customTable}-vueTbody`,
        "tbody-data": t.modelValue,
        headers: t.headers,
        "tbody-checkbox": t.customOptions.tbodyCheckbox,
        "tbody-index": t.customOptions.tbodyIndex,
        trad: t.customOptions.trad,
        "disable-cells": t.disableCells,
        "submenu-tbody": t.submenuTbody,
        "filtered-list": o.filteredList,
        "submenu-status-tbody": n.submenuStatusTbody,
        "tbody-highlight": n.highlight.tbody,
        "current-table": n.customTable,
        onHandleToCalculatePosition: o.calculPosition,
        onHandleToOpenSelect: o.enableSelect,
        onSubmenuEnable: o.enableSubmenu,
        onTbodyCheckedRow: o.checkedRow,
        onTbodyDownDragtofill: e.handleDownDragToFill,
        onTbodyHandleSearchInputSelect: e.handleSearchInputSelect,
        onTbodyHandleSetOldvalue: o.setOldValueOnInputSelect,
        onTbodyInputChange: e.handleTbodyInputChange,
        onTbodyInputKeydown: e.handleTbodyInputKeydown,
        onTbodyMoveDragtofill: e.handleMoveDragToFill,
        onTbodySelectChange: e.handleTbodySelectChange,
        onTbodySelectMultipleCell: e.handleSelectMultipleCell,
        onTbodySubmenuClickCallback: e.callbackSubmenuTbody,
        onTbodyTdClick: e.handleTbodyTdClick,
        onTbodyTdContextMenu: e.handleTBodyContextMenu,
        onTbodyTdDoubleClick: e.handleTbodyTdDoubleClick,
        onTbodyUpDragtofill: e.handleUpDragToFill
      }, null, 8, ["tbody-data", "headers", "tbody-checkbox", "tbody-index", "trad", "disable-cells", "submenu-tbody", "filtered-list", "submenu-status-tbody", "tbody-highlight", "current-table", "onHandleToCalculatePosition", "onHandleToOpenSelect", "onSubmenuEnable", "onTbodyCheckedRow", "onTbodyDownDragtofill", "onTbodyHandleSearchInputSelect", "onTbodyHandleSetOldvalue", "onTbodyInputChange", "onTbodyInputKeydown", "onTbodyMoveDragtofill", "onTbodySelectChange", "onTbodySelectMultipleCell", "onTbodySubmenuClickCallback", "onTbodyTdClick", "onTbodyTdContextMenu", "onTbodyTdDoubleClick", "onTbodyUpDragtofill"]))
    ], 512)
  ], 36);
}
const Zi = /* @__PURE__ */ $e(Ii, [["render", Yi]]);
export {
  Zi as default
};
