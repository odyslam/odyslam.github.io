!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        t = t || te;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length, n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? he.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function (e) {
            return se.call(t, e) > -1 !== n
        }) : ke.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function s(e) {
        var t = {};
        return he.each(e.match(je) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a(e) {
        return e
    }

    function u(e) {
        throw e
    }

    function l(e, t, n) {
        var i;
        try {
            e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.call(undefined, e)
        } catch (e) {
            n.call(undefined, e)
        }
    }

    function c() {
        te.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), he.ready()
    }

    function f() {
        this.expando = he.expando + f.uid++
    }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ie.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, n) {
        var i;
        if (n === undefined && 1 === e.nodeType) if (i = "data-" + t.replace(Oe, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = d(n)
            } catch (e) {
            }
            He.set(e, t, n)
        } else n = undefined;
        return n
    }

    function h(e, t, n, i) {
        var r, o = 1, s = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return he.css(e, t, "")
            }, u = a(), l = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            c = (he.cssNumber[t] || "px" !== l && +u) && Pe.exec(he.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, he.style(e, t, c + l)
            } while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r
    }

    function g(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = Be[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = he.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Be[i] = r, r)
    }

    function m(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = Fe.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Me(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none", Fe.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], t === undefined || t && he.nodeName(e, t) ? he.merge([e], n) : n
    }

    function v(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
    }

    function x(e, t, n, i, r) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === he.type(o)) he.merge(d, o.nodeType ? [o] : o); else if (Ve.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Ue.exec(o) || ["", ""])[1].toLowerCase(), u = Ye[a] || Ye._default, s.innerHTML = u[1] + he.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
            he.merge(d, s.childNodes), s = f.firstChild, s.textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];) if (i && he.inArray(o, i) > -1) r && r.push(o); else if (l = he.contains(o.ownerDocument, o), s = y(f.appendChild(o), "script"), l && v(s), n) for (c = 0; o = s[c++];) Xe.test(o.type || "") && n.push(o);
        return f
    }

    function b() {
        return !0
    }

    function w() {
        return !1
    }

    function T() {
        try {
            return te.activeElement
        } catch (e) {
        }
    }

    function C(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = undefined);
            for (a in t) C(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = w; else if (!r) return e;
        return 1 === o && (s = r, r = function (e) {
            return he().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = he.guid++)), e.each(function () {
            he.event.add(this, t, r, i, n)
        })
    }

    function k(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function D(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function N(e, t) {
        var n, i, r, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (Fe.hasData(e) && (o = Fe.access(e), s = Fe.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (r in l) for (n = 0, i = l[r].length; n < i; n++) he.event.add(t, r, l[r][n])
            }
            He.hasData(e) && (a = He.access(e), u = he.extend({}, a), He.set(t, u))
        }
    }

    function S(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && $e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function j(e, t, i, r) {
        t = re.apply([], t);
        var o, s, a, u, l, c, f = 0, d = e.length, p = d - 1, h = t[0], g = he.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !de.checkClone && tt.test(h)) return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), j(o, t, i, r)
        });
        if (d && (o = x(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (a = he.map(y(o, "script"), E), u = a.length; f < d; f++) l = o, f !== p && (l = he.clone(l, !0, !0), u && he.merge(a, y(l, "script"))), i.call(e[f], l, f);
            if (u) for (c = a[a.length - 1].ownerDocument, he.map(a, D), f = 0; f < u; f++) l = a[f], Xe.test(l.type || "") && !Fe.access(l, "globalEval") && he.contains(c, l) && (l.src ? he._evalUrl && he._evalUrl(l.src) : n(l.textContent.replace(it, ""), c))
        }
        return e
    }

    function A(e, t, n) {
        for (var i, r = t ? he.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || he.cleanData(y(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && v(y(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function q(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || st(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !de.pixelMarginRight() && ot.test(s) && rt.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), s !== undefined ? s + "" : s
    }

    function L(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function _(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--;) if ((e = ct[n] + t) in ft) return e
    }

    function F(e, t, n) {
        var i = Pe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function H(e, t, n, i, r) {
        var o, s = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += he.css(e, n + We[o], !0, r)), i ? ("content" === n && (s -= he.css(e, "padding" + We[o], !0, r)), "margin" !== n && (s -= he.css(e, "border" + We[o] + "Width", !0, r))) : (s += he.css(e, "padding" + We[o], !0, r), "padding" !== n && (s += he.css(e, "border" + We[o] + "Width", !0, r)));
        return s
    }

    function I(e, t, n) {
        var i, r = !0, o = st(e), s = "border-box" === he.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (i = q(e, t, o), (i < 0 || null == i) && (i = e.style[t]), ot.test(i)) return i;
            r = s && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + H(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function O(e, t, n, i, r) {
        return new O.prototype.init(e, t, n, i, r)
    }

    function R() {
        pt && (e.requestAnimationFrame(R), he.fx.tick())
    }

    function P() {
        return e.setTimeout(function () {
            dt = undefined
        }), dt = he.now()
    }

    function W(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = We[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var i, r = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i
    }

    function z(e, t, n) {
        var i, r, o, s, a, u, l, c, f = "width" in t || "height" in t, d = this, p = {}, h = e.style,
            g = e.nodeType && Me(e), y = Fe.get(e, "fxshow");
        n.queue || (s = he._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, he.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (i in t) if (r = t[i], ht.test(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                if ("show" !== r || !y || y[i] === undefined) continue;
                g = !0
            }
            p[i] = y && y[i] || he.style(e, i)
        }
        if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(p)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = y && y.display, null == l && (l = Fe.get(e, "display")), c = he.css(e, "display"), "none" === c && (l ? c = l : (m([e], !0), l = e.style.display || l, c = he.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === he.css(e, "float") && (u || (d.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (i in p) u || (y ? "hidden" in y && (g = y.hidden) : y = Fe.access(e, "fxshow", {display: l}), o && (y.hidden = !g), g && m([e], !0), d.done(function () {
                g || m([e]), Fe.remove(e, "fxshow");
                for (i in p) he.style(e, i, p[i])
            })), u = M(g ? y[i] : 0, i, d), i in y || (y[i] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function B(e, t) {
        var n, i, r, o, s;
        for (n in e) if (i = he.camelCase(n), r = t[i], o = e[n], he.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = he.cssHooks[i]) && "expand" in s) {
            o = s.expand(o), delete e[i];
            for (n in o) n in e || (e[n] = o[n], t[n] = r)
        } else t[i] = r
    }

    function $(e, t, n) {
        var i, r, o = 0, s = $.prefilters.length, a = he.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (r) return !1;
            for (var t = dt || P(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]), o < 1 && u ? n : (a.resolveWith(e, [l]), !1)
        }, l = a.promise({
            elem: e,
            props: he.extend({}, t),
            opts: he.extend(!0, {specialEasing: {}, easing: he.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: dt || P(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? l.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) l.tweens[n].run(1);
                return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (B(c, l.opts.specialEasing); o < s; o++) if (i = $.prefilters[o].call(l, e, c, l.opts)) return he.isFunction(i.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(i.stop, i)), i;
        return he.map(c, M, l), he.isFunction(l.opts.start) && l.opts.start.call(e, l), he.fx.timer(he.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function U(e) {
        return (e.match(je) || []).join(" ")
    }

    function X(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Y(e, t, n, i) {
        var r;
        if (he.isArray(t)) he.each(t, function (t, r) {
            n || Et.test(e) ? i(e, r) : Y(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== he.type(t)) i(e, t); else for (r in t) Y(e + "[" + r + "]", t[r], n, i)
    }

    function V(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(je) || [];
            if (he.isFunction(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Q(e, t, n, i) {
        function r(a) {
            var u;
            return o[a] = !0, he.each(e[a] || [], function (e, a) {
                var l = a(t, n, i);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
            }), u
        }

        var o = {}, s = e === Ot;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function G(e, t) {
        var n, i, r = he.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && he.extend(!0, e, i), e
    }

    function J(e, t, n) {
        for (var i, r, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (r in a) if (a[r] && a[r].test(i)) {
            u.unshift(r);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (r in n) {
                if (!u[0] || e.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function K(e, t, n, i) {
        var r, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o])) for (r in l) if (a = r.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                !0 === s ? s = l[r] : !0 !== l[r] && (o = a[0], c.unshift(a[1]));
                break
            }
            if (!0 !== s) if (s && e["throws"]) t = s(t); else try {
                t = s(t)
            } catch (e) {
                return {state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function Z(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var ee = [], te = e.document, ne = Object.getPrototypeOf, ie = ee.slice, re = ee.concat, oe = ee.push,
        se = ee.indexOf, ae = {}, ue = ae.toString, le = ae.hasOwnProperty, ce = le.toString, fe = ce.call(Object),
        de = {}, pe = "3.1.1", he = function (e, t) {
            return new he.fn.init(e, t)
        }, ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, me = /^-ms-/, ye = /-([a-z])/g, ve = function (e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: pe, constructor: he, length: 0, toArray: function () {
            return ie.call(this)
        }, get: function (e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return he.each(this, e)
        }, map: function (e) {
            return this.pushStack(he.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: oe, sort: ee.sort, splice: ee.splice
    }, he.extend = he.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], i = e[t], s !== i && (l && i && (he.isPlainObject(i) || (r = he.isArray(i))) ? (r ? (r = !1, o = n && he.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, s[t] = he.extend(l, o, i)) : i !== undefined && (s[t] = i));
        return s
    }, he.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === he.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e)) && (!(t = ne(e)) || "function" == typeof (n = le.call(t, "constructor") && t.constructor) && ce.call(n) === fe)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[ue.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            n(e)
        }, camelCase: function (e) {
            return e.replace(me, "ms-").replace(ye, ve)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var n, r = 0;
            if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ge, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        }, map: function (e, t, n) {
            var r, o, s = 0, a = [];
            if (i(e)) for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o); else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return re.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e) ? (i = ie.call(arguments, 2), r = function () {
                return e.apply(t || this, i.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || he.guid++, r) : undefined
        }, now: Date.now, support: de
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ae["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function (e) {
        function t(e, t, n, i) {
            var r, o, s, a, u, l, c, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : M) !== _ && L(t), t = t || _, H)) {
                if (11 !== h && (u = ye.exec(e))) if (r = u[1]) {
                    if (9 === h) {
                        if (!(s = t.getElementById(r))) return n;
                        if (s.id === r) return n.push(s), n
                    } else if (d && (s = d.getElementById(r)) && P(t, s) && s.id === r) return n.push(s), n
                } else {
                    if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                }
                if (T.qsa && !X[e + " "] && (!I || !I.test(e))) {
                    if (1 !== h) d = t, c = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(we, Te) : t.setAttribute("id", a = W), l = D(e), o = l.length; o--;) l[o] = "#" + a + " " + p(l[o]);
                        c = l.join(","), d = ve.test(e) && f(t.parentNode) || t
                    }
                    if (c) try {
                        return K.apply(n, d.querySelectorAll(c)), n
                    } catch (e) {
                    } finally {
                        a === W && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[W] = !0, e
        }

        function r(e) {
            var t = _.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {
        }

        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir, r = t.next, o = r || i, s = n && "parentNode" === o, a = B++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function (t, n, u) {
                var l, c, f, d = [z, a];
                if (u) {
                    for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || s) if (f = t[W] || (t[W] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((l = c[o]) && l[0] === z && l[1] === a) return d[2] = l[2];
                    if (c[o] = d, d[2] = e(t, n, u)) return !0
                }
                return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function y(e, t, n, i, r) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), l && t.push(a)));
            return s
        }

        function v(e, t, n, r, o, s) {
            return r && !r[W] && (r = v(r)), o && !o[W] && (o = v(o, s)), i(function (i, s, a, u) {
                var l, c, f, d = [], p = [], h = s.length, g = i || m(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !i && t ? g : y(g, d, e, a, u), x = n ? o || (i ? e : h || r) ? [] : s : v;
                if (n && n(v, x, a, u), r) for (l = y(x, p), r(l, [], a, u), c = l.length; c--;) (f = l[c]) && (x[p[c]] = !(v[p[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;) (f = x[c]) && l.push(v[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;) (f = x[c]) && (l = o ? ee(i, f) : d[c]) > -1 && (i[l] = !(s[l] = f))
                    }
                } else x = y(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
            })
        }

        function x(e) {
            for (var t, n, i, r = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, u = h(function (e) {
                return e === t
            }, s, !0), l = h(function (e) {
                return ee(t, e) > -1
            }, s, !0), c = [function (e, n, i) {
                var r = !o && (i || n !== j) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));
                return t = null, r
            }]; a < r; a++) if (n = C.relative[e[a].type]) c = [h(g(c), n)]; else {
                if (n = C.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                    for (i = ++a; i < r && !C.relative[e[i].type]; i++) ;
                    return v(a > 1 && g(c), a > 1 && p(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ae, "$1"), n, a < i && x(e.slice(a, i)), i < r && x(e = e.slice(i)), i < r && p(e))
                }
                c.push(n)
            }
            return g(c)
        }

        function b(e, n) {
            var r = n.length > 0, o = e.length > 0, s = function (i, s, a, u, l) {
                var c, f, d, p = 0, h = "0", g = i && [], m = [], v = j, x = i || o && C.find.TAG("*", l),
                    b = z += null == v ? 1 : Math.random() || .1, w = x.length;
                for (l && (j = s === _ || s || l); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0, s || c.ownerDocument === _ || (L(c), a = !H); d = e[f++];) if (d(c, s || _, a)) {
                            u.push(c);
                            break
                        }
                        l && (z = b)
                    }
                    r && ((c = !d && c) && p--, i && g.push(c))
                }
                if (p += h, r && h !== p) {
                    for (f = 0; d = n[f++];) d(g, m, s, a);
                    if (i) {
                        if (p > 0) for (; h--;) g[h] || m[h] || (m[h] = G.call(u));
                        m = y(m)
                    }
                    K.apply(u, m), l && !i && m.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                }
                return l && (z = b, j = v), g
            };
            return r ? i(s) : s
        }

        var w, T, C, k, E, D, N, S, j, A, q, L, _, F, H, I, O, R, P, W = "sizzle" + 1 * new Date, M = e.document, z = 0,
            B = 0, $ = n(), U = n(), X = n(), Y = function (e, t) {
                return e === t && (q = !0), 0
            }, V = {}.hasOwnProperty, Q = [], G = Q.pop, J = Q.push, K = Q.push, Z = Q.slice, ee = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe),
            de = new RegExp("^" + ie + "$"), pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), be = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Te = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, Ce = function () {
                L()
            }, ke = h(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            K.apply(Q = Z.call(M.childNodes), M.childNodes), Q[M.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: Q.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, E = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : M;
            return i !== _ && 9 === i.nodeType && i.documentElement ? (_ = i, F = _.documentElement, H = !E(_), M !== _ && (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = r(function (e) {
                return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = me.test(_.getElementsByClassName), T.getById = r(function (e) {
                return F.appendChild(e).id = W, !_.getElementsByName || !_.getElementsByName(W).length
            }), T.getById ? (C.filter.ID = function (e) {
                var t = e.replace(xe, be);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function (e) {
                var t = e.replace(xe, be);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), C.find.TAG = T.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = T.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && H) return t.getElementsByClassName(e)
            }, O = [], I = [], (T.qsa = me.test(_.querySelectorAll)) && (r(function (e) {
                F.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || I.push(".#.+[+~]")
            }), r(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = _.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), F.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (T.matchesSelector = me.test(R = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && r(function (e) {
                T.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), O.push("!=", oe)
            }), I = I.length && new RegExp(I.join("|")), O = O.length && new RegExp(O.join("|")), t = me.test(F.compareDocumentPosition), P = t || me.test(F.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, Y = t ? function (e, t) {
                if (e === t) return q = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === M && P(M, e) ? -1 : t === _ || t.ownerDocument === M && P(M, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return q = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], u = [t];
                if (!r || !o) return e === _ ? -1 : t === _ ? 1 : r ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[i] === u[i];) i++;
                return i ? s(a[i], u[i]) : a[i] === M ? -1 : u[i] === M ? 1 : 0
            }, _) : _
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== _ && L(e), n = n.replace(ce, "='$1']"), T.matchesSelector && H && !X[n + " "] && (!O || !O.test(n)) && (!I || !I.test(n))) try {
                var i = R.call(e, n);
                if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return t(n, _, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== _ && L(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== _ && L(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : undefined;
            return i !== undefined ? i : T.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function (e) {
            return (e + "").replace(we, Te)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, r = 0;
            if (q = !T.detectDuplicates, A = !T.sortStable && e.slice(0), e.sort(Y), q) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, k = t.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i++];) n += k(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = D(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, be).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, d, p, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
                            y = a && t.nodeName.toLowerCase(), v = !u && !a, x = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];) if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && v) {
                                for (d = m, f = d[W] || (d[W] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === z && l[1], x = p && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();) if (1 === d.nodeType && ++x && d === t) {
                                    c[e] = [z, p, x];
                                    break
                                }
                            } else if (v && (d = t, f = d[W] || (d[W] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === z && l[1], x = p), !1 === x) for (; (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++x || (v && (f = d[W] || (d[W] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [z, x]), d !== t));) ;
                            return (x -= r) === i || x % i == 0 && x / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = N(e.replace(ae, "$1"));
                    return r[W] ? i(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return e = e.replace(xe, be), function (t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === F
                }, focus: function (e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: l(!1), disabled: l(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !C.pseudos.empty(e)
                }, header: function (e) {
                    return ge.test(e.nodeName)
                }, input: function (e) {
                    return he.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (w in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) C.pseudos[w] = a(w);
        for (w in {submit: !0, reset: !0}) C.pseudos[w] = u(w);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, D = t.tokenize = function (e, n) {
            var i, r, o, s, a, u, l, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = C.preFilter; a;) {
                i && !(r = ue.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = le.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in C.filter) !(r = pe[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : U(e, u).slice(0)
        }, N = t.compile = function (e, t) {
            var n, i = [], r = [], o = X[e + " "];
            if (!o) {
                for (t || (t = D(e)), n = t.length; n--;) o = x(t[n]), o[W] ? i.push(o) : r.push(o);
                o = X(e, b(r, i)), o.selector = e
            }
            return o
        }, S = t.select = function (e, t, n, i) {
            var r, o, s, a, u, l = "function" == typeof e && e, c = !i && D(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && H && C.relative[o[1].type]) {
                    if (!(t = (C.find.ID(s.matches[0].replace(xe, be), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !C.relative[a = s.type]);) if ((u = C.find[a]) && (i = u(s.matches[0].replace(xe, be), ve.test(o[0].type) && f(t.parentNode) || t))) {
                    if (o.splice(r, 1), !(e = i.length && p(o))) return K.apply(n, i), n;
                    break
                }
            }
            return (l || N(e, c))(i, t, !H, n, !t || ve.test(e) && f(t.parentNode) || t), n
        }, T.sortStable = W.split("").sort(Y).join("") === W, T.detectDuplicates = !!q, L(), T.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(_.createElement("fieldset"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    he.find = xe, he.expr = xe.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = xe.uniqueSort, he.text = xe.getText, he.isXMLDoc = xe.isXML, he.contains = xe.contains, he.escapeSelector = xe.escape;
    var be = function (e, t, n) {
            for (var i = [], r = n !== undefined; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (r && he(e).is(n)) break;
                i.push(e)
            }
            return i
        }, we = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, Te = he.expr.match.needsContext, Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        ke = /^.[^:#\[\.,]*$/;
    he.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function (e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
                for (t = 0; t < i; t++) if (he.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, r[t], n);
            return i > 1 ? he.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
        }
    });
    var Ee, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || Ee, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : De.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(i[1]) && he.isPlainObject(t)) for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return r = te.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? n.ready !== undefined ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, Ee = he(te);
    var Ne = /^(?:parents|prev(?:Until|All))/, Se = {children: !0, contents: !0, next: !0, prev: !0};
    he.fn.extend({
        has: function (e) {
            var t = he(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (he.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && he(e);
            if (!Te.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return be(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return be(e, "parentNode", n)
        }, next: function (e) {
            return o(e, "nextSibling")
        }, prev: function (e) {
            return o(e, "previousSibling")
        }, nextAll: function (e) {
            return be(e, "nextSibling")
        }, prevAll: function (e) {
            return be(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return be(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return be(e, "previousSibling", n)
        }, siblings: function (e) {
            return we((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return we(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || he.merge([], e.childNodes)
        }
    }, function (e, t) {
        he.fn[e] = function (n, i) {
            var r = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = he.filter(i, r)), this.length > 1 && (Se[e] || he.uniqueSort(r), Ne.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var je = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function (e) {
        e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, i, r, o = [], a = [], u = -1, l = function () {
            for (r = e.once, i = t = !0; a.length; u = -1) for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
            e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
        }, c = {
            add: function () {
                return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
                    he.each(n, function (n, i) {
                        he.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== he.type(i) && t(i)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return he.each(arguments, function (e, t) {
                    for (var n; (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                }), this
            }, has: function (e) {
                return e ? he.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return r = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return r = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (e, n) {
                return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return c
    }, he.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", r = {
                    state: function () {
                        return i
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return r.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return he.Deferred(function (t) {
                            he.each(n, function (n, i) {
                                var r = he.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, i, r) {
                        function o(t, n, i, r) {
                            return function () {
                                var l = this, c = arguments, f = function () {
                                    var e, f;
                                    if (!(t < s)) {
                                        if ((e = i.apply(l, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? r ? f.call(e, o(s, n, a, r), o(s, n, u, r)) : (s++, f.call(e, o(s, n, a, r), o(s, n, u, r), o(s, n, a, n.notifyWith))) : (i !== a && (l = undefined, c = [e]), (r || n.resolveWith)(l, c))
                                    }
                                }, d = r ? f : function () {
                                    try {
                                        f()
                                    } catch (e) {
                                        he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== u && (l = undefined, c = [e]), n.rejectWith(l, c))
                                    }
                                };
                                t ? d() : (he.Deferred.getStackHook && (d.stackTrace = he.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }

                        var s = 0;
                        return he.Deferred(function (e) {
                            n[0][3].add(o(0, e, he.isFunction(r) ? r : a, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : a)), n[2][3].add(o(0, e, he.isFunction(i) ? i : u))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? he.extend(e, r) : r
                    }
                }, o = {};
            return he.each(n, function (e, t) {
                var s = t[2], a = t[5];
                r[t[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? undefined : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), r = ie.call(arguments), o = he.Deferred(), s = function (e) {
                return function (n) {
                    i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r)
                }
            };
            if (t <= 1 && (l(e, o.done(s(n)).resolve, o.reject), "pending" === o.state() || he.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) l(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, he.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var qe = he.Deferred();
    he.fn.ready = function (e) {
        return qe.then(e)["catch"](function (e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? he.readyWait++ : he.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || qe.resolveWith(te, [he]))
        }
    }), he.ready.then = qe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var Le = function (e, t, n, i, r, o, s) {
        var a = 0, u = e.length, l = null == n;
        if ("object" === he.type(n)) {
            r = !0;
            for (a in n) Le(e, t, a, n[a], !0, o, s)
        } else if (i !== undefined && (r = !0, he.isFunction(i) || (s = !0), l && (s ? (t.call(e, i), t = null) : (l = t, t = function (e, t, n) {
            return l.call(he(e), n)
        })), t)) for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, _e = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    f.uid = 1, f.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, _e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[he.camelCase(t)] = n; else for (i in t) r[he.camelCase(i)] = t[i];
            return r
        }, get: function (e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        }, access: function (e, t, n) {
            return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (i !== undefined) {
                if (t !== undefined) {
                    he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(je) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }
                (t === undefined || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return t !== undefined && !he.isEmptyObject(t)
        }
    };
    var Fe = new f, He = new f, Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Oe = /[A-Z]/g;
    he.extend({
        hasData: function (e) {
            return He.hasData(e) || Fe.hasData(e)
        }, data: function (e, t, n) {
            return He.access(e, t, n)
        }, removeData: function (e, t) {
            He.remove(e, t)
        }, _data: function (e, t, n) {
            return Fe.access(e, t, n)
        }, _removeData: function (e, t) {
            Fe.remove(e, t)
        }
    }), he.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (e === undefined) {
                if (this.length && (r = He.get(o), 1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), p(o, i, r[i])));
                    Fe.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                He.set(this, e)
            }) : Le(this, function (t) {
                var n;
                if (o && t === undefined) {
                    if ((n = He.get(o, e)) !== undefined) return n;
                    if ((n = p(o, e)) !== undefined) return n
                } else this.each(function () {
                    He.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                He.remove(this, e)
            })
        }
    }), he.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Fe.get(e, t), n && (!i || he.isArray(n) ? i = Fe.access(e, t, he.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = he.queue(e, t), i = n.length, r = n.shift(), o = he._queueHooks(e, t), s = function () {
                he.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Fe.get(e, n) || Fe.access(e, n, {
                empty: he.Callbacks("once memory").add(function () {
                    Fe.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : t === undefined ? this : this.each(function () {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                he.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = he.Deferred(), o = this, s = this.length, a = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;) (n = Fe.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
        We = ["Top", "Right", "Bottom", "Left"], Me = function (e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        }, ze = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        }, Be = {};
    he.fn.extend({
        show: function () {
            return m(this, !0)
        }, hide: function () {
            return m(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Me(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var $e = /^(?:checkbox|radio)$/i, Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Xe = /^$|\/(?:java|ecma)script/i, Ye = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
    var Ve = /<|&#?\w+;/;
    !function () {
        var e = te.createDocumentFragment(), t = e.appendChild(te.createElement("div")), n = te.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Qe = te.documentElement, Ge = /^key/, Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {}, add: function (e, t, n, i, r) {
            var o, s, a, u, l, c, f, d, p, h, g, m = Fe.get(e);
            if (m) for (n.handler && (o = n, n = o.handler, r = o.selector), r && he.find.matchesSelector(Qe, r), n.guid || (n.guid = he.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : undefined
            }), t = (t || "").match(je) || [""], l = t.length; l--;) a = Ke.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = he.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = he.event.special[p] || {}, c = he.extend({
                type: p,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && he.expr.match.needsContext.test(r),
                namespace: h.join(".")
            }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), he.event.global[p] = !0)
        }, remove: function (e, t, n, i, r) {
            var o, s, a, u, l, c, f, d, p, h, g, m = Fe.hasData(e) && Fe.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(je) || [""], l = t.length; l--;) if (a = Ke.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                    for (f = he.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || he.removeEvent(e, p, m.handle), delete u[p])
                } else for (p in u) he.event.remove(e, p + t[l], n, i, !0);
                he.isEmptyObject(u) && Fe.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, r, o, s, a = he.event.fix(e), u = new Array(arguments.length),
                l = (Fe.get(this, "events") || {})[a.type] || [], c = he.event.special[a.type] || {};
            for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = he.event.handlers.call(this, a, l), t = 0; (r = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, (i = ((he.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, u)) !== undefined && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        }, handlers: function (e, t) {
            var n, i, r, o, s, a = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], s = {}, n = 0; n < u; n++) i = t[n], r = i.selector + " ", s[r] === undefined && (s[r] = i.needsContext ? he(r, this).index(l) > -1 : he.find(r, this, null, [l]).length), s[r] && o.push(i);
                o.length && a.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && a.push({elem: l, handlers: t.slice(u)}), a
        }, addProp: function (e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[he.expando] ? e : new he.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== T() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === T() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return he.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function (e, t) {
        if (!(this instanceof he.Event)) return new he.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? b : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && t !== undefined && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        he.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || he.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function (e, t, n, i) {
            return C(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return C(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = w), this.each(function () {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ze, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), u = he.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e))) for (s = y(a), o = y(e), i = 0, r = o.length; i < r; i++) S(o[i], s[i]);
            if (t) if (n) for (o = o || y(e), s = s || y(a), i = 0, r = o.length; i < r; i++) N(o[i], s[i]); else N(e, a);
            return s = y(a, "script"), s.length > 0 && v(s, !u && y(e, "script")), a
        }, cleanData: function (e) {
            for (var t, n, i, r = he.event.special, o = 0; (n = e[o]) !== undefined; o++) if (_e(n)) {
                if (t = n[Fe.expando]) {
                    if (t.events) for (i in t.events) r[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                    n[Fe.expando] = undefined
                }
                n[He.expando] && (n[He.expando] = undefined)
            }
        }
    }), he.fn.extend({
        detach: function (e) {
            return A(this, e, !0)
        }, remove: function (e) {
            return A(this, e)
        }, text: function (e) {
            return Le(this, function (e) {
                return e === undefined ? he.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return j(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    k(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return j(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return j(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return j(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return he.clone(this, e, t)
            })
        }, html: function (e) {
            return Le(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Ye[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return j(this, arguments, function (t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        he.fn[e] = function (e) {
            for (var n, i = [], r = he(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), he(r[s])[t](n), oe.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var rt = /^margin/, ot = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"), st = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    };
    !function () {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Qe.removeChild(s), a = null
            }
        }

        var n, i, r, o, s = te.createElement("div"), a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(de, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return t(), i
            }, pixelMarginRight: function () {
                return t(), r
            }, reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/, ut = {position: "absolute", visibility: "hidden", display: "block"},
        lt = {letterSpacing: "0", fontWeight: "400"}, ct = ["Webkit", "Moz", "ms"], ft = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = q(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = he.camelCase(t), u = e.style;
                if (t = he.cssProps[a] || (he.cssProps[a] = _(a) || a), s = he.cssHooks[t] || he.cssHooks[a], n === undefined) return s && "get" in s && (r = s.get(e, !1, i)) !== undefined ? r : u[t];
                o = typeof n, "string" === o && (r = Pe.exec(n)) && r[1] && (n = h(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (he.cssNumber[a] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, i)) === undefined || (u[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = he.camelCase(t);
            return t = he.cssProps[a] || (he.cssProps[a] = _(a) || a), s = he.cssHooks[t] || he.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), r === undefined && (r = q(e, t, i)), "normal" === r && t in lt && (r = lt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), he.each(["height", "width"], function (e, t) {
        he.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !at.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? I(e, t, i) : ze(e, ut, function () {
                    return I(e, t, i)
                })
            }, set: function (e, n, i) {
                var r, o = i && st(e), s = i && H(e, t, i, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return s && (r = Pe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = he.css(e, t)), F(e, n, s)
            }
        }
    }), he.cssHooks.marginLeft = L(de.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        he.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + We[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, rt.test(e) || (he.cssHooks[e + t].set = F)
    }), he.fn.extend({
        css: function (e, t) {
            return Le(this, function (e, t, n) {
                var i, r, o = {}, s = 0;
                if (he.isArray(t)) {
                    for (i = st(e), r = t.length; s < r; s++) o[t[s]] = he.css(e, t[s], !1, i);
                    return o
                }
                return n !== undefined ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = O, O.prototype = {
        constructor: O, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (he.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, he.fx = O.prototype.init, he.fx.step = {};
    var dt, pt, ht = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    he.Animation = he.extend($, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, Pe.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
        }, prefilters: [z], prefilter: function (e, t) {
            t ? $.prefilters.unshift(e) : $.prefilters.push(e)
        }
    }), he.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return he.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
        }, i
    }, he.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Me).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = he.isEmptyObject(e), o = he.speed(t, n, i), s = function () {
                var t = $(this, he.extend({}, e), o);
                (r || Fe.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = he.timers, s = Fe.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && gt.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || he.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Fe.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = he.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), he.each(["toggle", "show", "hide"], function (e, t) {
        var n = he.fn[t];
        he.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, r)
        }
    }), he.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        he.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), he.timers = [], he.fx.tick = function () {
        var e, t = 0, n = he.timers;
        for (dt = he.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(), dt = undefined
    }, he.fx.timer = function (e) {
        he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
    }, he.fx.interval = 13, he.fx.start = function () {
        pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setInterval(he.fx.tick, he.fx.interval))
    }, he.fx.stop = function () {
        e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt), pt = null
    }, he.fx.speeds = {slow: 600, fast: 200, _default: 400}, he.fn.delay = function (t, n) {
        return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, function () {
        var e = te.createElement("input"), t = te.createElement("select"),
            n = t.appendChild(te.createElement("option"));
        e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", de.radioValue = "t" === e.value
    }();
    var mt, yt = he.expr.attrHandle;
    he.fn.extend({
        attr: function (e, t) {
            return Le(this, he.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : undefined)), n !== undefined ? null === n ? void he.removeAttr(e, t) : r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? undefined : i))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, r = t && t.match(je);
            if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
        }
    }), mt = {
        set: function (e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function (e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = yt[s], yt[s] = r, r = null != n(e, t, i) ? s : null, yt[s] = o), r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i, xt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function (e, t) {
            return Le(this, he.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, r = he.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), de.optSelected || (he.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, u = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).addClass(e.call(this, t, X(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(je) || []; n = this[u++];) if (r = X(n), i = 1 === n.nodeType && " " + U(r) + " ") {
                for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                a = U(i), r !== a && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, s, a, u = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).removeClass(e.call(this, t, X(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(je) || []; n = this[u++];) if (r = X(n), i = 1 === n.nodeType && " " + U(r) + " ") {
                for (s = 0; o = t[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                a = U(i), r !== a && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
                he(this).toggleClass(e.call(this, n, X(this), t), t)
            }) : this.each(function () {
                var t, i, r, o;
                if ("string" === n) for (i = 0, r = he(this), o = e.match(je) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else e !== undefined && "boolean" !== n || (t = X(this), t && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + U(X(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    he.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length) return i = he.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, he(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : he.isArray(r) && (r = he.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, r, "value") !== undefined || (this.value = r))
                });
                if (r) return (t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()]) && "get" in t && (n = t.get(r, "value")) !== undefined ? n : (n = r.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
            }
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : U(he.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [],
                        u = s ? o + 1 : r.length;
                    for (i = o < 0 ? u : s ? o : 0; i < u; i++) if (n = r[i], (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                        if (t = he(n).val(), s) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = he.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = he.inArray(he.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), he.each(["radio", "checkbox"], function () {
        he.valHooks[this] = {
            set: function (e, t) {
                if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
            }
        }, de.checkOn || (he.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function (t, n, i, r) {
            var o, s, a, u, l, c, f, d = [i || te], p = le.call(t, "type") ? t.type : t,
                h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[p] || {}, r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!r && !f.noBubble && !he.isWindow(i)) {
                    for (u = f.delegateType || p, wt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (i.ownerDocument || te) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (Fe.get(s, "events") || {})[t.type] && Fe.get(s, "handle"), c && c.apply(s, n), (c = l && s[l]) && c.apply && _e(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !_e(i) || l && he.isFunction(i[p]) && !he.isWindow(i) && (a = i[l], a && (i[l] = null), he.event.triggered = p, i[p](), he.event.triggered = undefined, a && (i[l] = a)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = he.extend(new he.Event, n, {type: e, isSimulated: !0});
            he.event.trigger(i, null, t)
        }
    }), he.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                he.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        he.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), de.focusin = "onfocusin" in e, de.focusin || he.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = Fe.access(i, t);
                r || i.addEventListener(e, n, !0), Fe.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = Fe.access(i, t) - 1;
                r ? Fe.access(i, t, r) : (i.removeEventListener(e, n, !0), Fe.remove(i, t))
            }
        }
    });
    var Tt = e.location, Ct = he.now(), kt = /\?/;
    he.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = undefined
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var Et = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
    he.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            var n = he.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e) Y(n, e[n], t, r);
        return i.join("&")
    }, he.fn.extend({
        serialize: function () {
            return he.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && St.test(this.nodeName) && !Nt.test(e) && (this.checked || !$e.test(e))
            }).map(function (e, t) {
                var n = he(this).val();
                return null == n ? null : he.isArray(n) ? he.map(n, function (e) {
                    return {name: t.name, value: e.replace(Dt, "\r\n")}
                }) : {name: t.name, value: n.replace(Dt, "\r\n")}
            }).get()
        }
    });
    var jt = /%20/g, At = /#.*$/, qt = /([?&])_=[^&]*/, Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ft = /^(?:GET|HEAD)$/, Ht = /^\/\//, It = {},
        Ot = {}, Rt = "*/".concat("*"), Pt = te.createElement("a");
    Pt.href = Tt.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: _t.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? G(G(e, he.ajaxSettings), t) : G(he.ajaxSettings, e)
        },
        ajaxPrefilter: V(It),
        ajaxTransport: V(Ot),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var l, d, p, b, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), r = undefined, s = a || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (b = J(h, C, i)), b = K(h, b, C, l), l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (he.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (he.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, p = b.error, l = !p)) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? y.resolveWith(g, [d, T, C]) : y.rejectWith(g, [C, T, p]), C.statusCode(x), x = undefined, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? d : p]), v.fireWith(g, [C, T]), f && (m.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = undefined), n = n || {};
            var r, o, s, a, u, l, c, f, d, p, h = he.ajaxSetup({}, n), g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? he(g) : he.event, y = he.Deferred(),
                v = he.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!a) for (a = {}; t = Lt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? s : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) C.always(e[C.status]); else for (t in e) x[t] = [x[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (y.promise(C), h.url = ((t || h.url || Tt.href) + "").replace(Ht, Tt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(je) || [""], null == h.crossDomain) {
                l = te.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Pt.protocol + "//" + Pt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Q(It, h, n, C), c) return C;
            f = he.event && h.global, f && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ft.test(h.type), o = h.url.replace(At, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+")) : (p = h.url.slice(o.length), h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(qt, "$1"), p = (kt.test(o) ? "&" : "?") + "_=" + Ct++ + p), h.url = o + p), h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
            if (T = "abort", v.add(h.complete), C.done(h.success), C.fail(h.error), r = Q(Ot, h, n, C)) {
                if (C.readyState = 1, f && m.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, r.send(b, i)
                } catch (e) {
                    if (c) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return he.get(e, undefined, t, "script")
        }
    }), he.each(["get", "post"], function (e, t) {
        he[t] = function (e, n, i, r) {
            return he.isFunction(n) && (r = r || i, i = n, n = undefined), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function (e) {
        return he.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, he.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return he.isFunction(e) ? this.each(function (t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = he(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = he.isFunction(e);
            return this.each(function (n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function (e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Wt = {0: 200, 1223: 204}, Mt = he.ajaxSettings.xhr();
    de.cors = !!Mt && "withCredentials" in Mt, de.ajax = Mt = !!Mt, he.ajaxTransport(function (t) {
        var n, i;
        if (de.cors || Mt && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), a.onabort !== undefined ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), he.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, r) {
                    t = he("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var zt = [], Bt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = zt.pop() || he.expando + "_" + Ct++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, s,
            a = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Bt, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || he.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always(function () {
            o === undefined ? he(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, zt.push(r)), s && he.isFunction(o) && o(s[0]), s = o = undefined
        }), "script"
    }), de.createHTMLDocument = function () {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (de.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Ce.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, o), o && o.length && he(o).remove(), he.merge([], r.childNodes))
    }, he.fn.load = function (e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = U(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), s.length > 0 && he.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        he.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function (e) {
        return he.grep(he.timers, function (t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, u, l, c = he.css(e, "position"), f = he(e), d = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = he.css(e, "top"), u = he.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, he.fn.extend({
        offset: function (e) {
            if (arguments.length) return e === undefined ? this : this.each(function (t) {
                he.offset.setOffset(this, e, t)
            });
            var t, n, i, r, o = this[0];
            if (o) return o.getClientRects().length ? (i = o.getBoundingClientRect(), i.width || i.height ? (r = o.ownerDocument, n = Z(r), t = r.documentElement, {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + he.css(e[0], "borderTopWidth", !0),
                    left: i.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - he.css(n, "marginTop", !0),
                    left: t.left - i.left - he.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Qe
            })
        }
    }), he.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function (i) {
            return Le(this, function (e, i, r) {
                var o = Z(e);
                if (r === undefined) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), he.each(["top", "left"], function (e, t) {
        he.cssHooks[t] = L(de.pixelPosition, function (e, n) {
            if (n) return n = q(e, t), ot.test(n) ? he(e).position()[t] + "px" : n
        })
    }), he.each({Height: "height", Width: "width"}, function (e, t) {
        he.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            he.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return Le(this, function (t, n, r) {
                    var o;
                    return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : r === undefined ? he.css(t, n, a) : he.style(t, n, r, a)
                }, t, s ? r : undefined, s)
            }
        })
    }), he.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return he
    });
    var $t = e.jQuery, Ut = e.$;
    return he.noConflict = function (t) {
        return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = $t), he
    }, t || (e.jQuery = e.$ = he), he
}), function (e, t) {
    var n, i = e.jQuery || e.Cowboy || (e.Cowboy = {});
    i.throttle = n = function (e, n, r, o) {
        function s() {
            function i() {
                u = +new Date, r.apply(l, f)
            }

            function s() {
                a = t
            }

            var l = this, c = +new Date - u, f = arguments;
            o && !a && i(), a && clearTimeout(a), o === t && c > e ? i() : !0 !== n && (a = setTimeout(o ? s : i, o === t ? e - c : e))
        }

        var a, u = 0;
        return "boolean" != typeof n && (o = r, r = n, n = t), i.guid && (s.guid = r.guid = r.guid || i.guid++), s
    }, i.debounce = function (e, i, r) {
        return r === t ? n(e, i, !1) : n(e, r, !1 !== i)
    }
}(this), function (e, t, n, i) {
    "use strict";

    function r(t, n) {
        this.element = t;
        var i = {};
        e.each(e(this.element).data(), function (e, t) {
            var n = function (e) {
                return e && e[0].toLowerCase() + e.slice(1)
            }, r = n(e.replace("fluidbox", ""));
            ("" !== r || null !== r) && (t = "false" != t, i[r] = t)
        }), this.settings = e.extend({}, a, n, i), this.settings.viewportFill = Math.max(Math.min(parseFloat(this.settings.viewportFill), 1), 0), this.settings.stackIndex < this.settings.stackIndexDelta && (settings.stackIndexDelta = settings.stackIndex), this._name = s, this.init()
    }

    var o = e(t), s = (e(n), "fluidbox"), a = {
        immediateOpen: !1,
        loader: !1,
        maxWidth: 0,
        maxHeight: 0,
        resizeThrottle: 500,
        stackIndex: 1e3,
        stackIndexDelta: 10,
        viewportFill: .95
    }, u = {}, l = 0;
    ("undefined" == typeof console || "undefined" === console.warn) && (console = {}, console.warn = function () {
    }), e.isFunction(e.throttle) || console.warn("Fluidbox: The jQuery debounce/throttle plugin is not found/loaded. Even though Fluidbox works without it, the window resize event will fire extremely rapidly in browsers, resulting in significant degradation in performance upon viewport resize.");
    var c = function () {
        var e, t = n.createElement("fakeelement"), r = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (e in r) if (t.style[e] !== i) return r[e]
    }, f = c(), d = {
        dom: function () {
            var t = e("<div />", {
                "class": "fluidbox__wrap",
                css: {zIndex: this.settings.stackIndex - this.settings.stackIndexDelta}
            });
            if (e(this.element).addClass("fluidbox--closed").wrapInner(t).find("img").first().css({opacity: 1}).addClass("fluidbox__thumb").after('<div class="fluidbox__ghost" />'), this.settings.loader) {
                var n = e("<div />", {"class": "fluidbox__loader", css: {zIndex: 2}});
                e(this.element).find(".fluidbox__wrap").append(n)
            }
        }, prepareFb: function () {
            var t = this, n = e(this.element);
            n.trigger("thumbloaddone.fluidbox"), d.measure.fbElements.call(this), t.bindEvents(), n.addClass("fluidbox--ready"), t.bindListeners(), n.trigger("ready.fluidbox")
        }, measure: {
            viewport: function () {
                u.viewport = {w: o.width(), h: o.height()}
            }, fbElements: function () {
                var t = this, n = e(this.element), i = n.find("img").first(), r = n.find(".fluidbox__ghost"),
                    o = n.find(".fluidbox__wrap");
                t.instanceData.thumb = {
                    natW: i[0].naturalWidth,
                    natH: i[0].naturalHeight,
                    w: i.width(),
                    h: i.height()
                }, r.css({
                    width: i.width(),
                    height: i.height(),
                    top: i.offset().top - o.offset().top + parseInt(i.css("borderTopWidth")) + parseInt(i.css("paddingTop")),
                    left: i.offset().left - o.offset().left + parseInt(i.css("borderLeftWidth")) + parseInt(i.css("paddingLeft"))
                })
            }
        }, checkURL: function (e) {
            var t = 0;
            return /[\s+]/g.test(e) ? (console.warn("Fluidbox: Fluidbox opening is halted because it has detected characters in your URL string that need to be properly encoded/escaped. Whitespace(s) have to be escaped manually. See RFC3986 documentation."), t = 1) : /[\"\'\(\)]/g.test(e) && (console.warn("Fluidbox: Fluidbox opening will proceed, but it has detected characters in your URL string that need to be properly encoded/escaped. These will be escaped for you. See RFC3986 documentation."), t = 0), t
        }, formatURL: function (e) {
            return e.replace(/"/g, "%22").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")
        }
    };
    e.extend(r.prototype, {
        init: function () {
            var t = this, n = e(this.element), i = n.find("img").first();
            if (d.measure.viewport(), (!t.instanceData || !t.instanceData.initialized) && n.is("a") && 1 === n.children().length && (n.children().is("img") || n.children().is("picture") && 1 === n.find("img").length) && "none" !== n.css("display") && "none" !== n.children().css("display") && "none" !== n.parents().css("display")) {
                n.removeClass("fluidbox--destroyed"), t.instanceData = {}, t.instanceData.initialized = !0, t.instanceData.originalNode = n.html(), l += 1, t.instanceData.id = l, n.addClass("fluidbox__instance-" + l), n.addClass("fluidbox--initialized"), d.dom.call(t), n.trigger("init.fluidbox");
                var r = new Image;
                i.width() > 0 && i.height() > 0 ? d.prepareFb.call(t) : (r.onload = function () {
                    d.prepareFb.call(t)
                }, r.onerror = function () {
                    n.trigger("thumbloadfail.fluidbox")
                }, r.src = i.attr("src"))
            }
        }, open: function () {
            var t = this, n = e(this.element), i = n.find("img").first(), r = n.find(".fluidbox__ghost"),
                o = n.find(".fluidbox__wrap");
            t.instanceData.state = 1, r.off(f), e(".fluidbox--opened").fluidbox("close");
            var s = e("<div />", {"class": "fluidbox__overlay", css: {zIndex: -1}});
            if (o.append(s), n.removeClass("fluidbox--closed").addClass("fluidbox--loading"), d.checkURL(i.attr("src"))) return t.close(), !1;
            r.css({
                "background-image": "url(" + d.formatURL(i.attr("src")) + ")",
                opacity: 1
            }), d.measure.fbElements.call(t);
            var a;
            t.settings.immediateOpen ? (n.addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({zIndex: t.settings.stackIndex + t.settings.stackIndexDelta}), n.trigger("openstart.fluidbox"), t.compute(), i.css({opacity: 0}), e(".fluidbox__overlay").css({opacity: 1}), r.one(f, function () {
                n.trigger("openend.fluidbox")
            }), a = new Image, a.onload = function () {
                if (1 === t.instanceData.state) {
                    if (t.instanceData.thumb.natW = a.naturalWidth, t.instanceData.thumb.natH = a.naturalHeight, n.removeClass("fluidbox--loading"), d.checkURL(a.src)) return t.close(), !1;
                    r.css({"background-image": "url(" + d.formatURL(a.src) + ")"}), t.compute()
                }
            }, a.onerror = function () {
                t.close(), n.trigger("imageloadfail.fluidbox"), n.trigger("delayedloadfail.fluidbox")
            }, a.src = n.attr("href")) : (a = new Image, a.onload = function () {
                return n.removeClass("fluidbox--loading").addClass("fluidbox--opened fluidbox--loaded").find(".fluidbox__wrap").css({zIndex: t.settings.stackIndex + t.settings.stackIndexDelta}), n.trigger("openstart.fluidbox"), d.checkURL(a.src) ? (t.close(), !1) : (r.css({"background-image": "url(" + d.formatURL(a.src) + ")"}), t.instanceData.thumb.natW = a.naturalWidth, t.instanceData.thumb.natH = a.naturalHeight, t.compute(), i.css({opacity: 0}), e(".fluidbox__overlay").css({opacity: 1}), void r.one(f, function () {
                    n.trigger("openend.fluidbox")
                }))
            }, a.onerror = function () {
                t.close(), n.trigger("imageloadfail.fluidbox")
            }, a.src = n.attr("href"))
        }, compute: function () {
            var t = this, n = e(this.element), i = n.find("img").first(), r = n.find(".fluidbox__ghost"),
                s = n.find(".fluidbox__wrap"), a = t.instanceData.thumb.natW, l = t.instanceData.thumb.natH,
                c = t.instanceData.thumb.w, f = t.instanceData.thumb.h, d = a / l, p = u.viewport.w / u.viewport.h;
            t.settings.maxWidth > 0 ? (a = t.settings.maxWidth, l = a / d) : t.settings.maxHeight > 0 && (l = t.settings.maxHeight, a = l * d);
            var h, g, m, y, v;
            p > d ? (h = l < u.viewport.h ? l : u.viewport.h * t.settings.viewportFill, m = h / f, y = a * (f * m / l) / c, v = m) : (g = a < u.viewport.w ? a : u.viewport.w * t.settings.viewportFill, y = g / c, m = l * (c * y / a) / f, v = y), t.settings.maxWidth && t.settings.maxHeight && console.warn("Fluidbox: Both maxHeight and maxWidth are specified. You can only specify one. If both are specified, only the maxWidth property will be respected. This will not generate any error, but may cause unexpected sizing behavior.");
            var x = o.scrollTop() - i.offset().top + f * (v - 1) * .5 + .5 * (o.height() - f * v),
                b = c * (v - 1) * .5 + .5 * (o.width() - c * v) - i.offset().left,
                w = parseInt(100 * y) / 100 + "," + parseInt(100 * m) / 100;
            r.css({
                transform: "translate(" + parseInt(100 * b) / 100 + "px," + parseInt(100 * x) / 100 + "px) scale(" + w + ")",
                top: i.offset().top - s.offset().top,
                left: i.offset().left - s.offset().left
            }), n.find(".fluidbox__loader").css({transform: "translate(" + parseInt(100 * b) / 100 + "px," + parseInt(100 * x) / 100 + "px) scale(" + w + ")"}), n.trigger("computeend.fluidbox")
        }, recompute: function () {
            this.compute()
        }, close: function () {
            var t = this, n = e(this.element), r = n.find("img").first(), o = n.find(".fluidbox__ghost"),
                s = n.find(".fluidbox__wrap"), a = n.find(".fluidbox__overlay");
            return null !== t.instanceData.state && typeof t.instanceData.state != typeof i && 0 !== t.instanceData.state && (t.instanceData.state = 0, n.trigger("closestart.fluidbox"), n.removeClass(function (e, t) {
                return (t.match(/(^|\s)fluidbox--(opened|loaded|loading)+/g) || []).join(" ")
            }).addClass("fluidbox--closed"), o.css({
                transform: "translate(0,0) scale(1,1)",
                top: r.offset().top - s.offset().top + parseInt(r.css("borderTopWidth")) + parseInt(r.css("paddingTop")),
                left: r.offset().left - s.offset().left + parseInt(r.css("borderLeftWidth")) + parseInt(r.css("paddingLeft"))
            }), n.find(".fluidbox__loader").css({transform: "none"}), o.one(f, function () {
                o.css({opacity: 0}), r.css({opacity: 1}), a.remove(), s.css({zIndex: t.settings.stackIndex - t.settings.stackIndexDelta}), n.trigger("closeend.fluidbox")
            }), void a.css({opacity: 0}))
        }, bindEvents: function () {
            var t = this;
            e(this.element).on("click.fluidbox", function (e) {
                e.preventDefault(), t.instanceData.state && 0 !== t.instanceData.state ? t.close() : t.open()
            })
        }, bindListeners: function () {
            var t = this, n = e(this.element), i = function () {
                d.measure.viewport(), d.measure.fbElements.call(t), n.hasClass("fluidbox--opened") && t.compute()
            };
            e.isFunction(e.throttle) ? o.on("resize.fluidbox" + t.instanceData.id, e.throttle(t.settings.resizeThrottle, i)) : o.on("resize.fluidbox" + t.instanceData.id, i), n.on("reposition.fluidbox", function () {
                t.reposition()
            }), n.on("recompute.fluidbox, compute.fluidbox", function () {
                t.compute()
            }), n.on("destroy.fluidbox", function () {
                t.destroy()
            }), n.on("close.fluidbox", function () {
                t.close()
            })
        }, unbind: function () {
            e(this.element).off("click.fluidbox reposition.fluidbox recompute.fluidbox compute.fluidbox destroy.fluidbox close.fluidbox"), o.off("resize.fluidbox" + this.instanceData.id)
        }, reposition: function () {
            d.measure.fbElements.call(this)
        }, destroy: function () {
            var t = this.instanceData.originalNode;
            this.unbind(), e.data(this.element, "plugin_" + s, null), e(this.element).removeClass(function (e, t) {
                return (t.match(/(^|\s)fluidbox[--|__]\S+/g) || []).join(" ")
            }).empty().html(t).addClass("fluidbox--destroyed").trigger("destroyed.fluidbox")
        }, getMetadata: function () {
            return this.instanceData
        }
    }), e.fn[s] = function (t) {
        var n = arguments;
        if (t === i || "object" == typeof t) return this.each(function () {
            e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new r(this, t))
        });
        if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
            var o;
            return this.each(function () {
                var i = e.data(this, "plugin_" + s);
                i instanceof r && "function" == typeof i[t] ? o = i[t].apply(i, Array.prototype.slice.call(n, 1)) : console.warn('Fluidbox: The method "' + t + '" used is not defined in Fluidbox. Please make sure you are calling the correct public method.')
            }), o !== i ? o : this
        }
        return this
    }
}(jQuery, window, document), function () {
    "use strict";

    function e(n) {
        return void 0 === this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (k = this, k.version = "3.3.2", k.tools = new C, k.isSupported() ? (k.tools.extend(k.defaults, n || {}), k.defaults.container = t(k.defaults), k.store = {
            elements: {},
            containers: []
        }, k.sequences = {}, k.history = [], k.uid = 0,
            k.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), k)
    }

    function t(e) {
        if (e && e.container) {
            if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
            if (k.tools.isNode(e.container)) return e.container;
            console.log('ScrollReveal: invalid container "' + e.container + '" provided.'), console.log("ScrollReveal: falling back to default container.")
        }
        return k.defaults.container
    }

    function n(e, t) {
        return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : k.tools.isNode(e) ? [e] : k.tools.isNodeList(e) ? Array.prototype.slice.call(e) : []
    }

    function i() {
        return ++k.uid
    }

    function r(e, t, n) {
        t.container && (t.container = n), e.config ? e.config = k.tools.extendClone(e.config, t) : e.config = k.tools.extendClone(k.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
    }

    function o(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = {
            transition: {},
            transform: {},
            computed: {}
        }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) {
        var n = e.config;
        return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
    }

    function a(e) {
        var t, n = e.config, i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function u(e) {
        var t = e.config.container;
        t && -1 === k.store.containers.indexOf(t) && k.store.containers.push(e.config.container), k.store.elements[e.id] = e
    }

    function l(e, t, n) {
        var i = {target: e, config: t, interval: n};
        k.history.push(i)
    }

    function c() {
        if (k.isSupported()) {
            p();
            for (var e = 0; e < k.store.containers.length; e++) k.store.containers[e].addEventListener("scroll", f), k.store.containers[e].addEventListener("resize", f);
            k.initialized || (window.addEventListener("scroll", f), window.addEventListener("resize", f), k.initialized = !0)
        }
        return k
    }

    function f() {
        E(p)
    }

    function d() {
        var e, t, n, i;
        k.tools.forOwn(k.sequences, function (r) {
            i = k.sequences[r], e = !1;
            for (var o = 0; o < i.elemIds.length; o++) n = i.elemIds[o], t = k.store.elements[n], T(t) && !e && (e = !0);
            i.active = e
        })
    }

    function p() {
        var e, t;
        d(), k.tools.forOwn(k.store.elements, function (n) {
            t = k.store.elements[n], e = y(t), m(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), g("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && h(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), g("reset", t), t.revealing = !1)
        })
    }

    function h(e, t) {
        var n = 0, i = 0, r = k.sequences[e.sequence.id];
        r.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {started: new Date}, e.sequence.timer.clock = window.setTimeout(function () {
            r.blocked = !1, e.sequence.timer = null, f()
        }, Math.abs(r.interval) + i - n)
    }

    function g(e, t, n) {
        var i = 0, r = 0, o = "after";
        switch (e) {
            case"reveal":
                r = t.config.duration, n && (r += t.config.delay), o += "Reveal";
                break;
            case"reset":
                r = t.config.duration, o += "Reset"
        }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {started: new Date}, t.timer.clock = window.setTimeout(function () {
            t.config[o](t.domEl), t.timer = null
        }, r - i)
    }

    function m(e) {
        if (e.sequence) {
            var t = k.sequences[e.sequence.id];
            return t.active && !t.blocked && !e.revealing && !e.disabled
        }
        return T(e) && !e.revealing && !e.disabled
    }

    function y(e) {
        var t = e.config.useDelay;
        return "always" === t || "onload" === t && !k.initialized || "once" === t && !e.seen
    }

    function v(e) {
        if (e.sequence) {
            return !k.sequences[e.sequence.id].active && e.config.reset && e.revealing && !e.disabled
        }
        return !T(e) && e.config.reset && e.revealing && !e.disabled
    }

    function x(e) {
        return {width: e.clientWidth, height: e.clientHeight}
    }

    function b(e) {
        if (e && e !== window.document.documentElement) {
            var t = w(e);
            return {x: e.scrollLeft + t.left, y: e.scrollTop + t.top}
        }
        return {x: window.pageXOffset, y: window.pageYOffset}
    }

    function w(e) {
        var t = 0, n = 0, i = e.offsetHeight, r = e.offsetWidth;
        do {
            isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent
        } while (e);
        return {top: t, left: n, height: i, width: r}
    }

    function T(e) {
        function t() {
            var t = l + a * s, n = c + u * s, i = f - a * s, p = d - u * s, h = o.y + e.config.viewOffset.top,
                g = o.x + e.config.viewOffset.left, m = o.y - e.config.viewOffset.bottom + r.height,
                y = o.x - e.config.viewOffset.right + r.width;
            return t < m && i > h && n > g && p < y
        }

        function n() {
            return "fixed" === window.getComputedStyle(e.domEl).position
        }

        var i = w(e.domEl), r = x(e.config.container), o = b(e.config.container), s = e.config.viewFactor, a = i.height,
            u = i.width, l = i.top, c = i.left, f = l + a, d = c + u;
        return t() || n()
    }

    function C() {
    }

    var k, E;
    e.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {x: 0, y: 0, z: 0},
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
        beforeReveal: function () {
        },
        beforeReset: function () {
        },
        afterReveal: function () {
        },
        afterReset: function () {
        }
    }, e.prototype.isSupported = function () {
        var e = document.documentElement.style;
        return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
    }, e.prototype.reveal = function (e, s, a, f) {
        var d, p, h, g, m, y;
        if (s !== undefined && "number" == typeof s ? (a = s, s = {}) : s !== undefined && null !== s || (s = {}), d = t(s), p = n(e, d), !p.length) return console.log('ScrollReveal: reveal on "' + e + '" failed, no elements found.'), k;
        a && "number" == typeof a && (y = i(), m = k.sequences[y] = {id: y, interval: a, elemIds: [], active: !1});
        for (var v = 0; v < p.length; v++) g = p[v].getAttribute("data-sr-id"), g ? h = k.store.elements[g] : (h = {
            id: i(),
            domEl: p[v],
            seen: !1,
            revealing: !1
        }, h.domEl.setAttribute("data-sr-id", h.id)), m && (h.sequence = {
            id: m.id,
            index: m.elemIds.length
        }, m.elemIds.push(h.id)), r(h, s, d), o(h), u(h), k.tools.isMobile() && !h.config.mobile || !k.isSupported() ? (h.domEl.setAttribute("style", h.styles.inline), h.disabled = !0) : h.revealing || h.domEl.setAttribute("style", h.styles.inline + h.styles.transform.initial);
        return !f && k.isSupported() && (l(e, s, a), k.initTimeout && window.clearTimeout(k.initTimeout), k.initTimeout = window.setTimeout(c, 0)), k
    }, e.prototype.sync = function () {
        if (k.history.length && k.isSupported()) {
            for (var e = 0; e < k.history.length; e++) {
                var t = k.history[e];
                k.reveal(t.target, t.config, t.interval, !0)
            }
            c()
        } else console.log("ScrollReveal: sync failed, no reveals found.");
        return k
    }, C.prototype.isObject = function (e) {
        return null !== e && "object" == typeof e && e.constructor === Object
    }, C.prototype.isNode = function (e) {
        return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }, C.prototype.isNodeList = function (e) {
        var t = Object.prototype.toString.call(e), n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, C.prototype.forOwn = function (e, t) {
        if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
        for (var n in e) e.hasOwnProperty(n) && t(n)
    }, C.prototype.extend = function (e, t) {
        return this.forOwn(t, function (n) {
            this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
        }.bind(this)), e
    }, C.prototype.extendClone = function (e, t) {
        return this.extend(this.extend({}, e), t)
    }, C.prototype.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, E = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}(), function () {
    function e() {
    }

    function t(e) {
        return o.retinaImageSuffix + e
    }

    function n(e, n) {
        if (this.path = e || "", void 0 !== n && null !== n) this.at_2x_path = n, this.perform_check = !1; else {
            if (undefined !== document.createElement) {
                var i = document.createElement("a");
                i.href = this.path, i.pathname = i.pathname.replace(s, t), this.at_2x_path = i.href
            } else {
                var r = this.path.split("?");
                r[0] = r[0].replace(s, t), this.at_2x_path = r.join("?")
            }
            this.perform_check = !0
        }
    }

    function i(e) {
        this.el = e, this.path = new n(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var t = this;
        this.path.check_2x_variant(function (e) {
            e && t.swap()
        })
    }

    var r = "undefined" == typeof exports ? window : exports,
        o = {retinaImageSuffix: "@2x", check_mime_type: !0, force_original_dimensions: !1};
    r.Retina = e, e.configure = function (e) {
        null === e && (e = {});
        for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t])
    }, e.init = function (e) {
        null === e && (e = r);
        var t = e.onload || function () {
        };
        e.onload = function () {
            var e, n, r = document.getElementsByTagName("img"), o = [];
            for (e = 0; e < r.length; e += 1) n = r[e], n.getAttributeNode("data-no-retina") || o.push(new i(n));
            t()
        }
    }, e.isRetina = function () {
        return r.devicePixelRatio > 1 || !(!r.matchMedia || !r.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)").matches)
    };
    var s = /\.\w+$/;
    r.RetinaImagePath = n, n.confirmed_paths = [], n.prototype.is_external = function () {
        return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
    }, n.prototype.check_2x_variant = function (e) {
        var t, i = this;
        return this.is_external() ? e(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in n.confirmed_paths ? e(!0) : (t = new XMLHttpRequest, t.open("HEAD", this.at_2x_path), t.onreadystatechange = function () {
            if (4 !== t.readyState) return e(!1);
            if (t.status >= 200 && t.status <= 399) {
                if (o.check_mime_type) {
                    var r = t.getResponseHeader("Content-Type");
                    if (null === r || !r.match(/^image/i)) return e(!1)
                }
                return n.confirmed_paths.push(i.at_2x_path), e(!0)
            }
            return e(!1)
        }, t.send(), void 0) : e(!0)
    }, r.RetinaImage = i, i.prototype.swap = function (e) {
        function t() {
            n.el.complete ? (o.force_original_dimensions && (n.el.setAttribute("width", n.el.offsetWidth), n.el.setAttribute("height", n.el.offsetHeight)), n.el.setAttribute("src", e)) : setTimeout(t, 5)
        }

        void 0 === e && (e = this.path.at_2x_path);
        var n = this;
        t()
    }, e.isRetina() && e.init(r)
}();