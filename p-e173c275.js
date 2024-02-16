/*!
 * (@prism-ui/core) design-system - v7.11.3 - made with ❤️ in Philadelphia
 */
let e, t, n, l = !1,
    s = !1,
    o = !1,
    i = !1,
    r = null,
    c = !1;
const f = "s-id",
    u = "sty-id",
    a = "c-id",
    $ = "http://www.w3.org/1999/xlink",
    d = {},
    h = e => "object" == (e = typeof e) || "function" === e,
    m = (e, t, ...n) => {
        let l = null,
            s = null,
            o = null,
            i = !1,
            r = !1;
        const c = [],
            f = t => {
                for (let n = 0; n < t.length; n++) l = t[n], Array.isArray(l) ? f(l) : null != l && "boolean" != typeof l && ((i = "function" != typeof e && !h(l)) && (l += ""), i && r ? c[c.length - 1].t += l : c.push(i ? p(null, l) : l), r = i)
            };
        if (f(n), t) {
            t.key && (s = t.key), t.name && (o = t.name); {
                const e = t.className || t.class;
                e && (t.class = "object" != typeof e ? e : Object.keys(e).filter((t => e[t])).join(" "))
            }
        }
        if ("function" == typeof e) return e(null === t ? {} : t, c, b);
        const u = p(e, null);
        return u.l = t, c.length > 0 && (u.o = c), u.i = s, u.u = o, u
    },
    p = (e, t) => ({
        $: 0,
        h: e,
        t,
        m: null,
        o: null,
        l: null,
        i: null,
        u: null
    }),
    y = {},
    b = {
        forEach: (e, t) => e.map(w).forEach(t),
        map: (e, t) => e.map(w).map(t).map(g)
    },
    w = e => ({
        vattrs: e.l,
        vchildren: e.o,
        vkey: e.i,
        vname: e.u,
        vtag: e.h,
        vtext: e.t
    }),
    g = e => {
        if ("function" == typeof e.vtag) {
            const t = Object.assign({}, e.vattrs);
            return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), m(e.vtag, t, ...e.vchildren || [])
        }
        const t = p(e.vtag, e.vtext);
        return t.l = e.vattrs, t.o = e.vchildren, t.i = e.vkey, t.u = e.vname, t
    },
    v = (e, t, n, l, s, o, i) => {
        let r, c, f, u;
        if (1 === o.nodeType) {
            for (r = o.getAttribute(a), r && (c = r.split("."), c[0] !== i && "0" !== c[0] || (f = {
                    $: 0,
                    p: c[0],
                    g: c[1],
                    v: c[2],
                    k: c[3],
                    h: o.tagName.toLowerCase(),
                    m: o,
                    l: null,
                    o: null,
                    i: null,
                    u: null,
                    t: null
                }, t.push(f), o.removeAttribute(a), e.o || (e.o = []), e.o[f.k] = f, e = f, l && "0" === f.v && (l[f.k] = f.m))), u = o.childNodes.length - 1; u >= 0; u--) v(e, t, n, l, s, o.childNodes[u], i);
            if (o.shadowRoot)
                for (u = o.shadowRoot.childNodes.length - 1; u >= 0; u--) v(e, t, n, l, s, o.shadowRoot.childNodes[u], i)
        } else if (8 === o.nodeType) c = o.nodeValue.split("."), c[1] !== i && "0" !== c[1] || (r = c[0], f = {
            $: 0,
            p: c[1],
            g: c[2],
            v: c[3],
            k: c[4],
            m: o,
            l: null,
            o: null,
            i: null,
            u: null,
            h: null,
            t: null
        }, "t" === r ? (f.m = o.nextSibling, f.m && 3 === f.m.nodeType && (f.t = f.m.textContent, t.push(f), o.remove(), e.o || (e.o = []), e.o[f.k] = f, l && "0" === f.v && (l[f.k] = f.m))) : f.p === i && ("s" === r ? (f.h = "slot", o["s-sn"] = c[5] ? f.u = c[5] : "", o["s-sr"] = !0, l && (f.m = Pe.createElement(f.h), f.u && f.m.setAttribute("name", f.u), o.parentNode.insertBefore(f.m, o), o.remove(), "0" === f.v && (l[f.k] = f.m)), n.push(f), e.o || (e.o = []), e.o[f.k] = f) : "r" === r && (l ? o.remove() : (s["s-cr"] = o, o["s-cn"] = !0))));
        else if (e && "style" === e.h) {
            const t = p(null, o.textContent);
            t.m = o, t.k = "0", e.o = [t]
        }
    },
    k = (e, t) => {
        if (1 === e.nodeType) {
            let n = 0;
            for (; n < e.childNodes.length; n++) k(e.childNodes[n], t);
            if (e.shadowRoot)
                for (n = 0; n < e.shadowRoot.childNodes.length; n++) k(e.shadowRoot.childNodes[n], t)
        } else if (8 === e.nodeType) {
            const n = e.nodeValue.split(".");
            "o" === n[0] && (t.set(n[1] + "." + n[2], e), e.nodeValue = "", e["s-en"] = n[3])
        }
    },
    j = e => je(e).j,
    O = e => je(e).O,
    S = (e, t, n) => {
        const l = O(e);
        return {
            emit: e => x(l, t, {
                bubbles: !!(4 & n),
                composed: !!(2 & n),
                cancelable: !!(1 & n),
                detail: e
            })
        }
    },
    x = (e, t, n) => {
        const l = Te.ce(t, n);
        return e.dispatchEvent(l), l
    },
    C = new WeakMap,
    M = (e, t, n) => {
        let l = Ne.get(e);
        We && n ? (l = l || new CSSStyleSheet, "string" == typeof l ? l = t : l.replaceSync(t)) : l = t, Ne.set(e, l)
    },
    R = (e, t) => {
        let n = N(t);
        const l = Ne.get(n);
        if (e = 11 === e.nodeType ? e : Pe, l)
            if ("string" == typeof l) {
                let t, s = C.get(e = e.head || e);
                s || C.set(e, s = new Set), s.has(n) || (e.host && (t = e.querySelector(`[${u}="${n}"]`)) ? t.innerHTML = l : (t = Pe.createElement("style"), t.innerHTML = l, e.insertBefore(t, e.querySelector("link"))), s && s.add(n))
            } else e.adoptedStyleSheets.includes(l) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, l]);
        return n
    },
    N = e => "sc-" + e.S,
    E = e => e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{"),
    P = (e, t, n, l, s, o) => {
        if (n !== l) {
            let i = xe(e, t),
                r = t.toLowerCase();
            if ("class" === t) {
                const t = e.classList,
                    s = I(n),
                    o = I(l);
                t.remove(...s.filter((e => e && !o.includes(e)))), t.add(...o.filter((e => e && !s.includes(e))))
            } else if ("style" === t) {
                for (const t in n) l && null != l[t] || (t.includes("-") ? e.style.removeProperty(t) : e.style[t] = "");
                for (const t in l) n && l[t] === n[t] || (t.includes("-") ? e.style.setProperty(t, l[t]) : e.style[t] = l[t])
            } else if ("key" === t);
            else if ("ref" === t) l && l(e);
            else if (i || "o" !== t[0] || "n" !== t[1]) {
                const c = h(l);
                if ((i || c && null !== l) && !s) try {
                    if (e.tagName.includes("-")) e[t] = l;
                    else {
                        const s = null == l ? "" : l;
                        "list" === t ? i = !1 : null != n && e[t] == s || (e[t] = s)
                    }
                } catch (e) {}
                let f = !1;
                r !== (r = r.replace(/^xlink\:?/, "")) && (t = r, f = !0), null == l || !1 === l ? !1 === l && "" !== e.getAttribute(t) || (f ? e.removeAttributeNS($, t) : e.removeAttribute(t)) : (!i || 4 & o || s) && !c && (l = !0 === l ? "" : l, f ? e.setAttributeNS($, t, l) : e.setAttribute(t, l))
            } else t = "-" === t[2] ? t.slice(3) : xe(Ee, r) ? r.slice(2) : r[2] + t.slice(3), n && Te.rel(e, t, n, !1), l && Te.ael(e, t, l, !1)
        }
    },
    T = /\s/,
    I = e => e ? e.split(T) : [],
    L = (e, t, n, l) => {
        const s = 11 === t.m.nodeType && t.m.host ? t.m.host : t.m,
            o = e && e.l || d,
            i = t.l || d;
        for (l in o) l in i || P(s, l, o[l], void 0, n, t.$);
        for (l in i) P(s, l, o[l], i[l], n, t.$)
    },
    W = (s, r, c, f) => {
        const u = r.o[c];
        let a, $, d, h = 0;
        if (l || (o = !0, "slot" === u.h && (e && f.classList.add(e + "-s"), u.$ |= u.o ? 2 : 1)), null !== u.t) a = u.m = Pe.createTextNode(u.t);
        else if (1 & u.$) a = u.m = Pe.createTextNode("");
        else {
            if (i || (i = "svg" === u.h), a = u.m = Pe.createElementNS(i ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", 2 & u.$ ? "slot-fb" : u.h), i && "foreignObject" === u.h && (i = !1), L(null, u, i), null != e && a["s-si"] !== e && a.classList.add(a["s-si"] = e), u.o)
                for (h = 0; h < u.o.length; ++h) $ = W(s, u, h, a), $ && a.appendChild($);
            "svg" === u.h ? i = !1 : "foreignObject" === a.tagName && (i = !0)
        }
        return a["s-hn"] = n, 3 & u.$ && (a["s-sr"] = !0, a["s-cr"] = t, a["s-sn"] = u.u || "", d = s && s.o && s.o[c], d && d.h === u.h && s.m && A(s.m, !1)), a
    },
    A = (e, t) => {
        Te.$ |= 1;
        const l = e.childNodes;
        for (let e = l.length - 1; e >= 0; e--) {
            const s = l[e];
            s["s-hn"] !== n && s["s-ol"] && (q(s).insertBefore(s, H(s)), s["s-ol"].remove(), s["s-ol"] = void 0, o = !0), t && A(s, t)
        }
        Te.$ &= -2
    },
    D = (e, t, l, s, o, i) => {
        let r, c = e["s-cr"] && e["s-cr"].parentNode || e;
        for (c.shadowRoot && c.tagName === n && (c = c.shadowRoot); o <= i; ++o) s[o] && (r = W(null, l, o, e), r && (s[o].m = r, c.insertBefore(r, H(t))))
    },
    F = (e, t, n, l, o) => {
        for (; t <= n; ++t)(l = e[t]) && (o = l.m, J(l), s = !0, o["s-ol"] ? o["s-ol"].remove() : A(o, !0), o.remove())
    },
    U = (e, t) => e.h === t.h && ("slot" === e.h ? e.u === t.u : e.i === t.i),
    H = e => e && e["s-ol"] || e,
    q = e => (e["s-ol"] ? e["s-ol"] : e).parentNode,
    V = (e, t) => {
        const n = t.m = e.m,
            l = e.o,
            s = t.o,
            o = t.h,
            r = t.t;
        let c;
        null === r ? (i = "svg" === o || "foreignObject" !== o && i, "slot" === o || L(e, t, i), null !== l && null !== s ? ((e, t, n, l) => {
            let s, o, i = 0,
                r = 0,
                c = 0,
                f = 0,
                u = t.length - 1,
                a = t[0],
                $ = t[u],
                d = l.length - 1,
                h = l[0],
                m = l[d];
            for (; i <= u && r <= d;)
                if (null == a) a = t[++i];
                else if (null == $) $ = t[--u];
            else if (null == h) h = l[++r];
            else if (null == m) m = l[--d];
            else if (U(a, h)) V(a, h), a = t[++i], h = l[++r];
            else if (U($, m)) V($, m), $ = t[--u], m = l[--d];
            else if (U(a, m)) "slot" !== a.h && "slot" !== m.h || A(a.m.parentNode, !1), V(a, m), e.insertBefore(a.m, $.m.nextSibling), a = t[++i], m = l[--d];
            else if (U($, h)) "slot" !== a.h && "slot" !== m.h || A($.m.parentNode, !1), V($, h), e.insertBefore($.m, a.m), $ = t[--u], h = l[++r];
            else {
                for (c = -1, f = i; f <= u; ++f)
                    if (t[f] && null !== t[f].i && t[f].i === h.i) {
                        c = f;
                        break
                    }
                c >= 0 ? (o = t[c], o.h !== h.h ? s = W(t && t[r], n, c, e) : (V(o, h), t[c] = void 0, s = o.m), h = l[++r]) : (s = W(t && t[r], n, r, e), h = l[++r]), s && q(a.m).insertBefore(s, H(a.m))
            }
            i > u ? D(e, null == l[d + 1] ? null : l[d + 1].m, n, l, r, d) : r > d && F(t, i, u)
        })(n, l, t, s) : null !== s ? (null !== e.t && (n.textContent = ""), D(n, null, t, s, 0, s.length - 1)) : null !== l && F(l, 0, l.length - 1), i && "svg" === o && (i = !1)) : (c = n["s-cr"]) ? c.parentNode.textContent = r : e.t !== r && (n.data = r)
    },
    _ = e => {
        const t = e.childNodes;
        let n, l, s, o, i, r;
        for (l = 0, s = t.length; l < s; l++)
            if (n = t[l], 1 === n.nodeType) {
                if (n["s-sr"])
                    for (i = n["s-sn"], n.hidden = !1, o = 0; o < s; o++)
                        if (r = t[o].nodeType, t[o]["s-hn"] !== n["s-hn"] || "" !== i) {
                            if (1 === r && i === t[o].getAttribute("slot")) {
                                n.hidden = !0;
                                break
                            }
                        } else if (1 === r || 3 === r && "" !== t[o].textContent.trim()) {
                    n.hidden = !0;
                    break
                }
                _(n)
            }
    },
    z = [],
    B = e => {
        let t, n, l, o, i, r, c = 0;
        const f = e.childNodes,
            u = f.length;
        for (; c < u; c++) {
            if (t = f[c], t["s-sr"] && (n = t["s-cr"]) && n.parentNode)
                for (l = n.parentNode.childNodes, o = t["s-sn"], r = l.length - 1; r >= 0; r--) n = l[r], n["s-cn"] || n["s-nr"] || n["s-hn"] === t["s-hn"] || (G(n, o) ? (i = z.find((e => e.C === n)), s = !0, n["s-sn"] = n["s-sn"] || o, i ? i.M = t : z.push({
                    M: t,
                    C: n
                }), n["s-sr"] && z.map((e => {
                    G(e.C, n["s-sn"]) && (i = z.find((e => e.C === n)), i && !e.M && (e.M = i.M))
                }))) : z.some((e => e.C === n)) || z.push({
                    C: n
                }));
            1 === t.nodeType && B(t)
        }
    },
    G = (e, t) => 1 === e.nodeType ? null === e.getAttribute("slot") && "" === t || e.getAttribute("slot") === t : e["s-sn"] === t || "" === t,
    J = e => {
        e.l && e.l.ref && e.l.ref(null), e.o && e.o.map(J)
    },
    K = (e, t) => {
        t && !e.R && t["s-p"] && t["s-p"].push(new Promise((t => e.R = t)))
    },
    Q = (e, t) => {
        if (e.$ |= 16, !(4 & e.$)) return K(e, e.N), _e((() => X(e, t)));
        e.$ |= 512
    },
    X = (e, t) => {
        const n = e.P;
        let l;
        return t && (e.$ |= 256, e.T && (e.T.map((([e, t]) => se(n, e, t))), e.T = null), l = se(n, "componentWillLoad")), l = oe(l, (() => se(n, "componentWillRender"))), oe(l, (() => Y(e, n, t)))
    },
    Y = async (e, t, n) => {
        const l = e.O,
            s = l["s-rc"];
        n && (e => {
            const t = e.I,
                n = e.O,
                l = t.$,
                s = R(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
            10 & l && (n["s-sc"] = s, n.classList.add(s + "-h"), 2 & l && n.classList.add(s + "-s"))
        })(e);
        Z(e, t), s && (s.map((e => e())), l["s-rc"] = void 0); {
            const t = l["s-p"],
                n = () => te(e);
            0 === t.length ? n() : (Promise.all(t).then(n), e.$ |= 4, t.length = 0)
        }
    },
    Z = (i, c) => {
        try {
            r = c, c = c.render(), i.$ &= -17, i.$ |= 2, ((i, r) => {
                const c = i.O,
                    f = i.I,
                    u = i.L || p(null, null),
                    a = (e => e && e.h === y)(r) ? r : m(null, null, r);
                if (n = c.tagName, f.W && (a.l = a.l || {}, f.W.map((([e, t]) => a.l[t] = c[e]))), a.h = null, a.$ |= 4, i.L = a, a.m = u.m = c.shadowRoot || c, e = c["s-sc"], t = c["s-cr"], l = 0 != (1 & f.$), s = !1, V(u, a), Te.$ |= 1, o) {
                    let e, t, n, l, s, o;
                    B(a.m);
                    let i = 0;
                    for (; i < z.length; i++) e = z[i], t = e.C, t["s-ol"] || (n = Pe.createTextNode(""), n["s-nr"] = t, t.parentNode.insertBefore(t["s-ol"] = n, t));
                    for (i = 0; i < z.length; i++)
                        if (e = z[i], t = e.C, e.M) {
                            for (l = e.M.parentNode, s = e.M.nextSibling, n = t["s-ol"]; n = n.previousSibling;)
                                if (o = n["s-nr"], o && o["s-sn"] === t["s-sn"] && l === o.parentNode && (o = o.nextSibling, !o || !o["s-nr"])) {
                                    s = o;
                                    break
                                }(!s && l !== t.parentNode || t.nextSibling !== s) && t !== s && (!t["s-hn"] && t["s-ol"] && (t["s-hn"] = t["s-ol"].parentNode.nodeName), l.insertBefore(t, s))
                        } else 1 === t.nodeType && (t.hidden = !0)
                }
                s && _(a.m), Te.$ &= -2, z.length = 0
            })(i, c)
        } catch (e) {
            Ce(e, i.O)
        }
        return r = null, null
    },
    ee = () => r,
    te = e => {
        const t = e.O,
            n = e.P,
            l = e.N;
        se(n, "componentDidRender"), 64 & e.$ ? se(n, "componentDidUpdate") : (e.$ |= 64, ie(t), se(n, "componentDidLoad"), e.A(t), l || le()), e.D(t), e.R && (e.R(), e.R = void 0), 512 & e.$ && qe((() => Q(e, !1))), e.$ &= -517
    },
    ne = e => {
        {
            const t = je(e),
                n = t.O.isConnected;
            return n && 2 == (18 & t.$) && Q(t, !1), n
        }
    },
    le = () => {
        ie(Pe.documentElement), qe((() => x(Ee, "appload", {
            detail: {
                namespace: "prism-ui"
            }
        })))
    },
    se = (e, t, n) => {
        if (e && e[t]) try {
            return e[t](n)
        } catch (e) {
            Ce(e)
        }
    },
    oe = (e, t) => e && e.then ? e.then(t) : t(),
    ie = e => e.classList.add("hydrated"),
    re = (e, t, n) => {
        if (t.F) {
            e.watchers && (t.U = e.watchers);
            const l = Object.entries(t.F),
                s = e.prototype;
            if (l.map((([e, [l]]) => {
                    31 & l || 2 & n && 32 & l ? Object.defineProperty(s, e, {
                        get() {
                            return ((e, t) => je(this).H.get(t))(0, e)
                        },
                        set(n) {
                            ((e, t, n, l) => {
                                const s = je(e),
                                    o = s.O,
                                    i = s.H.get(t),
                                    r = s.$,
                                    c = s.P;
                                if (n = ((e, t) => null == e || h(e) ? e : 4 & t ? "false" !== e && ("" === e || !!e) : 2 & t ? parseFloat(e) : 1 & t ? e + "" : e)(n, l.F[t][0]), (!(8 & r) || void 0 === i) && n !== i && (!Number.isNaN(i) || !Number.isNaN(n)) && (s.H.set(t, n), c)) {
                                    if (l.U && 128 & r) {
                                        const e = l.U[t];
                                        e && e.map((e => {
                                            try {
                                                c[e](n, i, t)
                                            } catch (e) {
                                                Ce(e, o)
                                            }
                                        }))
                                    }
                                    2 == (18 & r) && Q(s, !1)
                                }
                            })(this, e, n, t)
                        },
                        configurable: !0,
                        enumerable: !0
                    }) : 1 & n && 64 & l && Object.defineProperty(s, e, {
                        value(...t) {
                            const n = je(this);
                            return n.q.then((() => n.P[e](...t)))
                        }
                    })
                })), 1 & n) {
                const n = new Map;
                s.attributeChangedCallback = function(e, t, l) {
                    Te.jmp((() => {
                        const t = n.get(e);
                        if (this.hasOwnProperty(t)) l = this[t], delete this[t];
                        else if (s.hasOwnProperty(t) && "number" == typeof this[t] && this[t] == l) return;
                        this[t] = (null !== l || "boolean" != typeof this[t]) && l
                    }))
                }, e.observedAttributes = l.filter((([e, t]) => 15 & t[0])).map((([e, l]) => {
                    const s = l[1] || e;
                    return n.set(s, e), 512 & l[0] && t.W.push([e, s]), s
                }))
            }
        }
        return e
    },
    ce = e => {
        se(e, "connectedCallback")
    },
    fe = e => {
        if (0 == (1 & Te.$)) {
            const t = je(e),
                n = t.I,
                l = () => {};
            if (1 & t.$) be(e, t, n.V), ce(t.P);
            else {
                let l;
                if (t.$ |= 1, l = e.getAttribute(f), l) {
                    if (1 & n.$) {
                        const t = R(e.shadowRoot, n);
                        e.classList.remove(t + "-h", t + "-s")
                    }((e, t, n, l) => {
                        const s = e.shadowRoot,
                            o = [],
                            i = s ? [] : null,
                            r = l.L = p(t, null);
                        Te._ || k(Pe.body, Te._ = new Map), e[f] = n, e.removeAttribute(f), v(r, o, [], i, e, e, n), o.map((e => {
                            const n = e.p + "." + e.g,
                                l = Te._.get(n),
                                o = e.m;
                            l && Ie && "" === l["s-en"] && l.parentNode.insertBefore(o, l.nextSibling), s || (o["s-hn"] = t, l && (o["s-ol"] = l, o["s-ol"]["s-nr"] = o)), Te._.delete(n)
                        })), s && i.map((e => {
                            e && s.appendChild(e)
                        }))
                    })(e, n.S, l, t)
                }
                l || 12 & n.$ && ue(e); {
                    let n = e;
                    for (; n = n.parentNode || n.host;)
                        if (1 === n.nodeType && n.hasAttribute("s-id") && n["s-p"] || n["s-p"]) {
                            K(t, t.N = n);
                            break
                        }
                }
                n.F && Object.entries(n.F).map((([t, [n]]) => {
                    if (31 & n && e.hasOwnProperty(t)) {
                        const n = e[t];
                        delete e[t], e[t] = n
                    }
                })), (async (e, t, n, l, s) => {
                    if (0 == (32 & t.$)) {
                        {
                            if (t.$ |= 32, (s = Re(n)).then) {
                                const e = () => {};
                                s = await s, e()
                            }
                            s.isProxied || (n.U = s.watchers, re(s, n, 2), s.isProxied = !0);
                            const e = () => {};
                            t.$ |= 8;
                            try {
                                new s(t)
                            } catch (e) {
                                Ce(e)
                            }
                            t.$ &= -9, t.$ |= 128, e(), ce(t.P)
                        }
                        if (s.style) {
                            let e = s.style;
                            const t = N(n);
                            if (!Ne.has(t)) {
                                const l = () => {};
                                M(t, e, !!(1 & n.$)), l()
                            }
                        }
                    }
                    const o = t.N,
                        i = () => Q(t, !0);
                    o && o["s-rc"] ? o["s-rc"].push(i) : i()
                })(0, t, n)
            }
            l()
        }
    },
    ue = e => {
        const t = e["s-cr"] = Pe.createComment("");
        t["s-cn"] = !0, e.insertBefore(t, e.firstChild)
    },
    ae = e => {
        e.__appendChild = e.appendChild, e.appendChild = function(e) {
            const t = e["s-sn"] = de(e),
                n = he(this.childNodes, t);
            if (n) {
                const l = me(n, t),
                    s = l[l.length - 1];
                return s.parentNode.insertBefore(e, s.nextSibling)
            }
            return this.__appendChild(e)
        }
    },
    $e = (e, t) => {
        class n extends Array {
            item(e) {
                return this[e]
            }
        }
        if (8 & t.$) {
            const t = e.__lookupGetter__("childNodes");
            Object.defineProperty(e, "children", {
                get() {
                    return this.childNodes.map((e => 1 === e.nodeType))
                }
            }), Object.defineProperty(e, "childElementCount", {
                get: () => e.children.length
            }), Object.defineProperty(e, "childNodes", {
                get() {
                    const e = t.call(this);
                    if (0 == (1 & Te.$) && 2 & je(this).$) {
                        const t = new n;
                        for (let n = 0; n < e.length; n++) {
                            const l = e[n]["s-nr"];
                            l && t.push(l)
                        }
                        return t
                    }
                    return n.from(e)
                }
            })
        }
    },
    de = e => e["s-sn"] || 1 === e.nodeType && e.getAttribute("slot") || "",
    he = (e, t) => {
        let n, l = 0;
        for (; l < e.length; l++) {
            if (n = e[l], n["s-sr"] && n["s-sn"] === t) return n;
            if (n = he(n.childNodes, t), n) return n
        }
        return null
    },
    me = (e, t) => {
        const n = [e];
        for (;
            (e = e.nextSibling) && e["s-sn"] === t;) n.push(e);
        return n
    },
    pe = (e, t = {}) => {
        const n = [],
            l = t.exclude || [],
            s = Ee.customElements,
            o = Pe.head,
            i = o.querySelector("meta[charset]"),
            r = Pe.createElement("style"),
            c = [],
            f = Pe.querySelectorAll(`[${u}]`);
        let a, $ = !0,
            d = 0;
        for (Object.assign(Te, t), Te.B = new URL(t.resourcesUrl || "./", Pe.baseURI).href, Te.$ |= 2; d < f.length; d++) M(f[d].getAttribute(u), E(f[d].innerHTML), !0);
        e.map((e => {
            e[1].map((t => {
                const o = {
                    $: t[0],
                    S: t[1],
                    F: t[2],
                    V: t[3]
                };
                o.F = t[2], o.V = t[3], o.W = [], o.U = {};
                const i = o.S,
                    r = class extends HTMLElement {
                        constructor(e) {
                            super(e), Se(e = this, o), 1 & o.$ && e.attachShadow({
                                mode: "open"
                            }), $e(e, o)
                        }
                        connectedCallback() {
                            a && (clearTimeout(a), a = null), $ ? c.push(this) : Te.jmp((() => fe(this)))
                        }
                        disconnectedCallback() {
                            Te.jmp((() => (() => {
                                if (0 == (1 & Te.$)) {
                                    const e = je(this),
                                        t = e.P;
                                    e.G && (e.G.map((e => e())), e.G = void 0), se(t, "disconnectedCallback")
                                }
                            })()))
                        }
                        componentOnReady() {
                            return je(this).J
                        }
                    };
                ae(r.prototype), o.K = e[0], l.includes(i) || s.get(i) || (n.push(i), s.define(i, re(r, o, 1)))
            }))
        })), r.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}", r.setAttribute("data-styles", ""), o.insertBefore(r, i ? i.nextSibling : o.firstChild), $ = !1, c.length ? c.map((e => e.connectedCallback())) : Te.jmp((() => a = setTimeout(le, 30)))
    },
    ye = (e, t) => t,
    be = (e, t, n) => {
        n && n.map((([n, l, s]) => {
            const o = ge(e, n),
                i = we(t, s),
                r = ve(n);
            Te.ael(o, l, i, r), (t.G = t.G || []).push((() => Te.rel(o, l, i, r)))
        }))
    },
    we = (e, t) => n => {
        try {
            256 & e.$ ? e.P[t](n) : (e.T = e.T || []).push([t, n])
        } catch (e) {
            Ce(e)
        }
    },
    ge = (e, t) => 4 & t ? Pe : 8 & t ? Ee : 16 & t ? Pe.body : e,
    ve = e => 0 != (2 & e),
    ke = new WeakMap,
    je = e => ke.get(e),
    Oe = (e, t) => ke.set(t.P = e, t),
    Se = (e, t) => {
        const n = {
            $: 0,
            O: e,
            I: t,
            H: new Map
        };
        return n.q = new Promise((e => n.D = e)), n.J = new Promise((e => n.A = e)), e["s-p"] = [], e["s-rc"] = [], be(e, n, t.V), ke.set(e, n)
    },
    xe = (e, t) => t in e,
    Ce = (e, t) => (0, console.error)(e, t),
    Me = new Map,
    Re = e => {
        const t = e.S.replace(/-/g, "_"),
            n = e.K,
            l = Me.get(n);
        return l ? l[t] : import (`./${n}.entry.js`).then((e => (Me.set(n, e), e[t])), Ce)
        /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
    },
    Ne = new Map,
    Ee = "undefined" != typeof window ? window : {},
    Pe = Ee.document || {
        head: {}
    },
    Te = {
        $: 0,
        B: "",
        jmp: e => e(),
        raf: e => requestAnimationFrame(e),
        ael: (e, t, n, l) => e.addEventListener(t, n, l),
        rel: (e, t, n, l) => e.removeEventListener(t, n, l),
        ce: (e, t) => new CustomEvent(e, t)
    },
    Ie = !0,
    Le = e => Promise.resolve(e),
    We = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replaceSync
        } catch (e) {}
        return !1
    })(),
    Ae = [],
    De = [],
    Fe = (e, t) => n => {
        e.push(n), c || (c = !0, t && 4 & Te.$ ? qe(He) : Te.raf(He))
    },
    Ue = e => {
        for (let t = 0; t < e.length; t++) try {
            e[t](performance.now())
        } catch (e) {
            Ce(e)
        }
        e.length = 0
    },
    He = () => {
        Ue(Ae), Ue(De), (c = Ae.length > 0) && Te.raf(He)
    },
    qe = e => Le().then(e),
    Ve = Fe(Ae, !1),
    _e = Fe(De, !0);
export {
    ye as F, y as H, ee as a, pe as b, S as c, j as d, Ve as e, ne as f, O as g, m as h, Le as p, Oe as r
}