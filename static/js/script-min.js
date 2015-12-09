/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.3", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return n.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), 
            b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
            } else if (g) {
                for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), 
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, eb = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fb) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function hb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ib(a) {
            return a[u] = !0, a;
        }
        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function kb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function lb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = gb.support = {}, f = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), 
            p = !f(g), c.attributes = jb(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = jb(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return lb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, gb.matches = function(a, b) {
            return gb(a, null, null, b);
        }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return gb(b, n, null, [ a ]).length > 0;
        }, gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, gb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, gb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = gb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0;
                    };
                }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: ob(function() {
                    return [ 0 ];
                }),
                last: ob(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: ob(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: ob(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: ob(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = mb(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = nb(b);
        function qb() {}
        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb(), g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
        };
        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);
            return c;
        }
        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                return a === b;
            }, h, !0), l = sb(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sb(tb(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a));
                }
                m.push(c);
            }
            return tb(m);
        }
        function yb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                        s = vb(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ib(f) : f;
        }
        return h = gb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a;
            }
            return f;
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), jb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || kb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && jb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || kb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), jb(function(a) {
            return null == a.getAttribute("disabled");
        }) || kb(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), gb;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, 
    n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0));
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), 
                v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = l, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), n.makeArray(a, this));
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a;
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return n.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return n.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
            this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                        });
                    }(arguments), d ? f = h.length : b && (e = c, j(b));
                }
                return this;
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                }), this;
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], f = 0, this;
            },
            disable: function() {
                return h = i = b = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, b || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, b) {
                return !h || c && !i || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? i.push(b) : j(b)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return k;
    }, n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [ n ]), 
            n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), 
        n.ready();
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), 
        a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = n.expando + K.uid++;
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}
            M.set(a, b, c);
        } else c = void 0;
        return c;
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function(a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function(a, b) {
            M.remove(a, b);
        },
        _data: function(a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function(a, b) {
            L.remove(a, b);
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                    P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a);
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a);
            });
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [ "Top", "Right", "Bottom", "Left" ], S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    }, T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), 
                (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(E) || [ "" ], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, 
                l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), 
                l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
                n.event.global[o] = !0);
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [ "" ], j = b.length;
                while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), 
                    delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [ d || l ], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), 
            q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
            o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), 
                    h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, 
                m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), 
                m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], 
                h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                    a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                    void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, 
        b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            }
        };
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), 
            this.each(function() {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, 
    ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = ob(h), 
            f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
            if (b) if (c) for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]); else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [ e ] : e); else if (cb.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], 
                j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), 
            f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                j = 0;
                while (e = f[j++]) fb.test(e.type || "") && c.push(e);
            }
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), 
            c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), 
                g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], 
                fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")));
            }
            return this;
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), 
            n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var qb, rb = {};
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f;
    }
    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), 
        c;
    }
    var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
        vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function() {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
            k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
            e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
                f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b;
                },
                boxSizingReliable: function() {
                    return null == c && g(), c;
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), 
                    b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), 
                    b;
                }
            });
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Eb = [ "Webkit", "O", "Moz", "ms" ];
    function Fb(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--) if (b = Eb[e] + c, b in a) return b;
        return d;
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), 
        d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), 
        "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g;
    }
    function Ib(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), 
        "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
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
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        }
    }), n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d);
                }) : Ib(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [ a, "marginRight" ]) : void 0;
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Jb(this, !0);
        },
        hide: function() {
            return Jb(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide();
            });
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e);
    }
    n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [ Vb ], Rb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    function Sb() {
        return setTimeout(function() {
            Lb = void 0;
        }), Lb = n.now();
    }
    function Tb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
        j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, 
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), 
        c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], Nb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), 
            p ? n(a).show() : l.done(function() {
                n(a).hide();
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b]);
            });
            for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++) if (d = Qb[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a);
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0;
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
        clearInterval(Mb), Mb = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, 
        k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", 
        k.radioValue = "t" === a.value;
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void n.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            $b[b] = f), e;
        };
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, 
            e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c);
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), 
        b;
    };
    var ec = /#.*$/, fc = /([?&])_=[^&]*/, gc = /^(.*?):[ \t]*([^\r\n]*)$/gm, hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ic = /^(?:GET|HEAD)$/, jc = /^\/\//, kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lc = {}, mc = {}, nc = "*/".concat("*"), oc = a.location.href, pc = kc.exec(oc.toLowerCase()) || [];
    function qc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function rc(a, b, c, d) {
        var e = {}, f = a === mc;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function sc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function tc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function uc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
        i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oc,
            type: "GET",
            isLocal: hc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a);
        },
        ajaxPrefilter: qc(lc),
        ajaxTransport: qc(mc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = gc.exec(e)) f[b[1].toLowerCase()] = b[2];
                        }
                        b = f[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), 
            rc(lc, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), 
            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), 
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rc(mc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), 
                w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), i && (m.trigger("ajaxComplete", [ v, k ]), --n.active || n.event.trigger("ajaxStop")));
            }
            return v;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script");
        }
    }), n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b));
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a);
    };
    var vc = /%20/g, wc = /\[\]$/, xc = /\r?\n/g, yc = /^(?:submit|button|image|reset|file)$/i, zc = /^(?:input|select|textarea|keygen)/i;
    function Ac(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ac(a + "[" + e + "]", b[e], c, d);
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Ac(c, a[c], b, e);
        return d.join("&").replace(vc, "+");
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xc, "\r\n")
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Bc = 0, Cc = {}, Dc = {
        0: 200,
        1223: 204
    }, Ec = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cc) Cc[a]();
    }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Ec && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Bc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Fc = [], Gc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = n.buildFragment([ a ], b, e), e && e.length && n(e).remove(), 
        n.merge([], d.childNodes));
    };
    var Hc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hc) return Hc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Ic = a.document.documentElement;
    function Jc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
            i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), 
            c = Jc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ic;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ic;
            });
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jc(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function() {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
    });
    var Kc = a.jQuery, Lc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
});

/*!
 * Flickity PACKAGED v0.1.0
 * Touch, responsive, flickable galleries
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */
/**
 * Bridget makes jQuery widgets
 * v1.1.0
 * MIT license
 */
(function(window) {
    // -------------------------- utils -------------------------- //
    var slice = Array.prototype.slice;
    function noop() {}
    // -------------------------- definition -------------------------- //
    function defineBridget($) {
        // bail if no jQuery
        if (!$) {
            return;
        }
        // -------------------------- addOptionMethod -------------------------- //
        /**
 * adds option method -> $().plugin('option', {...})
 * @param {Function} PluginClass - constructor class
 */
        function addOptionMethod(PluginClass) {
            // don't overwrite original option method
            if (PluginClass.prototype.option) {
                return;
            }
            // option setter
            PluginClass.prototype.option = function(opts) {
                // bail out if not an object
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            };
        }
        // -------------------------- plugin bridge -------------------------- //
        // helper function for logging errors
        // $.error breaks jQuery chaining
        var logError = typeof console === "undefined" ? noop : function(message) {
            console.error(message);
        };
        /**
 * jQuery plugin bridge, access methods like $elem.plugin('method')
 * @param {String} namespace - plugin name
 * @param {Function} PluginClass - constructor class
 */
        function bridge(namespace, PluginClass) {
            // add to jQuery fn namespace
            $.fn[namespace] = function(options) {
                if (typeof options === "string") {
                    // call plugin method when first argument is a string
                    // get arguments for method
                    var args = slice.call(arguments, 1);
                    for (var i = 0, len = this.length; i < len; i++) {
                        var elem = this[i];
                        var instance = $.data(elem, namespace);
                        if (!instance) {
                            logError("cannot call methods on " + namespace + " prior to initialization; " + "attempted to call '" + options + "'");
                            continue;
                        }
                        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                            logError("no such method '" + options + "' for " + namespace + " instance");
                            continue;
                        }
                        // trigger method with arguments
                        var returnValue = instance[options].apply(instance, args);
                        // break look and return first value if provided
                        if (returnValue !== undefined) {
                            return returnValue;
                        }
                    }
                    // return this if no return value
                    return this;
                } else {
                    return this.each(function() {
                        var instance = $.data(this, namespace);
                        if (instance) {
                            // apply options & init
                            instance.option(options);
                            instance._init();
                        } else {
                            // initialize new instance
                            instance = new PluginClass(this, options);
                            $.data(this, namespace, instance);
                        }
                    });
                }
            };
        }
        // -------------------------- bridget -------------------------- //
        /**
 * converts a Prototypical class into a proper jQuery plugin
 *   the class must have a ._init method
 * @param {String} namespace - plugin name, used in $().pluginName
 * @param {Function} PluginClass - constructor class
 */
        $.bridget = function(namespace, PluginClass) {
            addOptionMethod(PluginClass);
            bridge(namespace, PluginClass);
        };
        return $.bridget;
    }
    // transport
    if (typeof define === "function" && define.amd) {
        // AMD
        define("jquery-bridget/jquery.bridget", [ "jquery" ], defineBridget);
    } else if (typeof exports === "object") {
        defineBridget(require("jquery"));
    } else {
        // get jquery from browser global
        defineBridget(window.jQuery);
    }
})(window);

/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */
(function(window) {
    // class helper functions from bonzo https://github.com/ded/bonzo
    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;
    if ("classList" in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + " " + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), " ");
        };
    }
    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }
    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    // transport
    if (typeof define === "function" && define.amd) {
        // AMD
        define("classie/classie", classie);
    } else if (typeof exports === "object") {
        // CommonJS
        module.exports = classie;
    } else {
        // browser global
        window.classie = classie;
    }
})(window);

(function() {
    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}
    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;
    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }
        return -1;
    }
    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }
    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;
        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        } else {
            response = events[evt] || (events[evt] = []);
        }
        return response;
    };
    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;
        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }
        return flatListeners;
    };
    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;
        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }
        return response || listeners;
    };
    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === "object";
        var key;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }
        return this;
    };
    /**
     * Alias of addListener
     */
    proto.on = alias("addListener");
    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };
    /**
     * Alias of addOnceListener.
     */
    proto.once = alias("addOnceListener");
    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };
    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };
    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);
                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }
        return this;
    };
    /**
     * Alias of removeListener
     */
    proto.off = alias("removeListener");
    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };
    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };
    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;
        // If evt is an object then pass each of its properties to this method
        if (typeof evt === "object" && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === "function") {
                        single.call(this, i, value);
                    } else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        } else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }
        return this;
    };
    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;
        // Remove different things depending on the state of evt
        if (type === "string") {
            // Remove all listeners for the specified event
            delete events[evt];
        } else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        } else {
            // Remove all listeners in all events
            delete this._events;
        }
        return this;
    };
    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias("removeEvent");
    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;
                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];
                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }
                    response = listener.listener.apply(this, args || []);
                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }
        return this;
    };
    /**
     * Alias of emitEvent
     */
    proto.trigger = alias("emitEvent");
    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };
    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };
    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty("_onceReturnValue")) {
            return this._onceReturnValue;
        } else {
            return true;
        }
    };
    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };
    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };
    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === "function" && define.amd) {
        define("eventEmitter/EventEmitter", [], function() {
            return EventEmitter;
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = EventEmitter;
    } else {
        exports.EventEmitter = EventEmitter;
    }
}).call(this);

/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */
(function(window) {
    var docElem = document.documentElement;
    var bind = function() {};
    function getIEEvent(obj) {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement || obj;
        return event;
    }
    if (docElem.addEventListener) {
        bind = function(obj, type, fn) {
            obj.addEventListener(type, fn, false);
        };
    } else if (docElem.attachEvent) {
        bind = function(obj, type, fn) {
            obj[type + fn] = fn.handleEvent ? function() {
                var event = getIEEvent(obj);
                fn.handleEvent.call(fn, event);
            } : function() {
                var event = getIEEvent(obj);
                fn.call(obj, event);
            };
            obj.attachEvent("on" + type, obj[type + fn]);
        };
    }
    var unbind = function() {};
    if (docElem.removeEventListener) {
        unbind = function(obj, type, fn) {
            obj.removeEventListener(type, fn, false);
        };
    } else if (docElem.detachEvent) {
        unbind = function(obj, type, fn) {
            obj.detachEvent("on" + type, obj[type + fn]);
            try {
                delete obj[type + fn];
            } catch (err) {
                // can't delete window object properties
                obj[type + fn] = undefined;
            }
        };
    }
    var eventie = {
        bind: bind,
        unbind: unbind
    };
    // ----- module definition ----- //
    if (typeof define === "function" && define.amd) {
        // AMD
        define("eventie/eventie", eventie);
    } else if (typeof exports === "object") {
        // CommonJS
        module.exports = eventie;
    } else {
        // browser global
        window.eventie = eventie;
    }
})(this);

/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */
(function(window) {
    var prefixes = "Webkit Moz ms Ms O".split(" ");
    var docElemStyle = document.documentElement.style;
    function getStyleProperty(propName) {
        if (!propName) {
            return;
        }
        // test standard property first
        if (typeof docElemStyle[propName] === "string") {
            return propName;
        }
        // capitalize
        propName = propName.charAt(0).toUpperCase() + propName.slice(1);
        // test vendor specific properties
        var prefixed;
        for (var i = 0, len = prefixes.length; i < len; i++) {
            prefixed = prefixes[i] + propName;
            if (typeof docElemStyle[prefixed] === "string") {
                return prefixed;
            }
        }
    }
    // transport
    if (typeof define === "function" && define.amd) {
        // AMD
        define("get-style-property/get-style-property", [], function() {
            return getStyleProperty;
        });
    } else if (typeof exports === "object") {
        // CommonJS for Component
        module.exports = getStyleProperty;
    } else {
        // browser global
        window.getStyleProperty = getStyleProperty;
    }
})(window);

/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false, console: false */
(function(window, undefined) {
    // -------------------------- helpers -------------------------- //
    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf("%") === -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console === "undefined" ? noop : function(message) {
        console.error(message);
    };
    // -------------------------- measurements -------------------------- //
    var measurements = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ];
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0, len = measurements.length; i < len; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    function defineGetSize(getStyleProperty) {
        // -------------------------- setup -------------------------- //
        var isSetup = false;
        var getStyle, boxSizingProp, isBoxSizeOuter;
        /**
 * setup vars and functions
 * do it on initial getSize(), rather than on script load
 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
        function setup() {
            // setup once
            if (isSetup) {
                return;
            }
            isSetup = true;
            var getComputedStyle = window.getComputedStyle;
            getStyle = function() {
                var getStyleFn = getComputedStyle ? function(elem) {
                    return getComputedStyle(elem, null);
                } : function(elem) {
                    return elem.currentStyle;
                };
                return function getStyle(elem) {
                    var style = getStyleFn(elem);
                    if (!style) {
                        logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1");
                    }
                    return style;
                };
            }();
            // -------------------------- box sizing -------------------------- //
            boxSizingProp = getStyleProperty("boxSizing");
            /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox measures the inner-width
   */
            if (boxSizingProp) {
                var div = document.createElement("div");
                div.style.width = "200px";
                div.style.padding = "1px 2px 3px 4px";
                div.style.borderStyle = "solid";
                div.style.borderWidth = "1px 2px 3px 4px";
                div.style[boxSizingProp] = "border-box";
                var body = document.body || document.documentElement;
                body.appendChild(div);
                var style = getStyle(div);
                isBoxSizeOuter = getStyleSize(style.width) === 200;
                body.removeChild(div);
            }
        }
        // -------------------------- getSize -------------------------- //
        function getSize(elem) {
            setup();
            // use querySeletor if elem is string
            if (typeof elem === "string") {
                elem = document.querySelector(elem);
            }
            // do not proceed on non-objects
            if (!elem || typeof elem !== "object" || !elem.nodeType) {
                return;
            }
            var style = getStyle(elem);
            // if hidden, everything is 0
            if (style.display === "none") {
                return getZeroSize();
            }
            var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight;
            var isBorderBox = size.isBorderBox = !!(boxSizingProp && style[boxSizingProp] && style[boxSizingProp] === "border-box");
            // get all measurements
            for (var i = 0, len = measurements.length; i < len; i++) {
                var measurement = measurements[i];
                var value = style[measurement];
                value = mungeNonPixel(elem, value);
                var num = parseFloat(value);
                // any 'auto', 'medium' value will be 0
                size[measurement] = !isNaN(num) ? num : 0;
            }
            var paddingWidth = size.paddingLeft + size.paddingRight;
            var paddingHeight = size.paddingTop + size.paddingBottom;
            var marginWidth = size.marginLeft + size.marginRight;
            var marginHeight = size.marginTop + size.marginBottom;
            var borderWidth = size.borderLeftWidth + size.borderRightWidth;
            var borderHeight = size.borderTopWidth + size.borderBottomWidth;
            var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
            // overwrite width and height if we can get it from style
            var styleWidth = getStyleSize(style.width);
            if (styleWidth !== false) {
                size.width = styleWidth + (// add padding and border unless it's already including it
                isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
            }
            var styleHeight = getStyleSize(style.height);
            if (styleHeight !== false) {
                size.height = styleHeight + (// add padding and border unless it's already including it
                isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
            }
            size.innerWidth = size.width - (paddingWidth + borderWidth);
            size.innerHeight = size.height - (paddingHeight + borderHeight);
            size.outerWidth = size.width + marginWidth;
            size.outerHeight = size.height + marginHeight;
            return size;
        }
        // IE8 returns percent values, not pixels
        // taken from jQuery's curCSS
        function mungeNonPixel(elem, value) {
            // IE8 and has percent value
            if (window.getComputedStyle || value.indexOf("%") === -1) {
                return value;
            }
            var style = elem.style;
            // Remember the original values
            var left = style.left;
            var rs = elem.runtimeStyle;
            var rsLeft = rs && rs.left;
            // Put in the new values to get a computed value out
            if (rsLeft) {
                rs.left = elem.currentStyle.left;
            }
            style.left = value;
            value = style.pixelLeft;
            // Revert the changed values
            style.left = left;
            if (rsLeft) {
                rs.left = rsLeft;
            }
            return value;
        }
        return getSize;
    }
    // transport
    if (typeof define === "function" && define.amd) {
        // AMD for RequireJS
        define("get-size/get-size", [ "get-style-property/get-style-property" ], defineGetSize);
    } else if (typeof exports === "object") {
        // CommonJS for Component
        module.exports = defineGetSize(require("desandro-get-style-property"));
    } else {
        // browser global
        window.getSize = defineGetSize(window.getStyleProperty);
    }
})(window);

/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false, require: false, module: false */
(function(window) {
    var document = window.document;
    // collection of functions to be triggered on ready
    var queue = [];
    function docReady(fn) {
        // throw out non-functions
        if (typeof fn !== "function") {
            return;
        }
        if (docReady.isReady) {
            // ready now, hit it
            fn();
        } else {
            // queue function when ready
            queue.push(fn);
        }
    }
    docReady.isReady = false;
    // triggered on various doc ready events
    function onReady(event) {
        // bail if already triggered or IE8 document is not ready just yet
        var isIE8NotReady = event.type === "readystatechange" && document.readyState !== "complete";
        if (docReady.isReady || isIE8NotReady) {
            return;
        }
        trigger();
    }
    function trigger() {
        docReady.isReady = true;
        // process queue
        for (var i = 0, len = queue.length; i < len; i++) {
            var fn = queue[i];
            fn();
        }
    }
    function defineDocReady(eventie) {
        // trigger ready if page is ready
        if (document.readyState === "complete") {
            trigger();
        } else {
            // listen for events
            eventie.bind(document, "DOMContentLoaded", onReady);
            eventie.bind(document, "readystatechange", onReady);
            eventie.bind(window, "load", onReady);
        }
        return docReady;
    }
    // transport
    if (typeof define === "function" && define.amd) {
        // AMD
        define("doc-ready/doc-ready", [ "eventie/eventie" ], defineDocReady);
    } else if (typeof exports === "object") {
        module.exports = defineDocReady(require("eventie"));
    } else {
        // browser global
        window.docReady = defineDocReady(window.eventie);
    }
})(window);

/**
 * matchesSelector v1.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */
(function(ElemProto) {
    var matchesMethod = function() {
        // check un-prefixed
        if (ElemProto.matchesSelector) {
            return "matchesSelector";
        }
        // check vendor prefixes
        var prefixes = [ "webkit", "moz", "ms", "o" ];
        for (var i = 0, len = prefixes.length; i < len; i++) {
            var prefix = prefixes[i];
            var method = prefix + "MatchesSelector";
            if (ElemProto[method]) {
                return method;
            }
        }
    }();
    // ----- match ----- //
    function match(elem, selector) {
        return elem[matchesMethod](selector);
    }
    // ----- appendToFragment ----- //
    function checkParent(elem) {
        // not needed if already has parent
        if (elem.parentNode) {
            return;
        }
        var fragment = document.createDocumentFragment();
        fragment.appendChild(elem);
    }
    // ----- query ----- //
    // fall back to using QSA
    // thx @jonathantneal https://gist.github.com/3062955
    function query(elem, selector) {
        // append to fragment if no parent
        checkParent(elem);
        // match elem with all selected elems of parent
        var elems = elem.parentNode.querySelectorAll(selector);
        for (var i = 0, len = elems.length; i < len; i++) {
            // return true if match
            if (elems[i] === elem) {
                return true;
            }
        }
        // otherwise return false
        return false;
    }
    // ----- matchChild ----- //
    function matchChild(elem, selector) {
        checkParent(elem);
        return match(elem, selector);
    }
    // ----- matchesSelector ----- //
    var matchesSelector;
    if (matchesMethod) {
        // IE9 supports matchesSelector, but doesn't work on orphaned elems
        // check for that
        var div = document.createElement("div");
        var supportsOrphans = match(div, "div");
        matchesSelector = supportsOrphans ? match : matchChild;
    } else {
        matchesSelector = query;
    }
    // transport
    if (typeof define === "function" && define.amd) {
        // AMD
        define("matches-selector/matches-selector", [], function() {
            return matchesSelector;
        });
    } else if (typeof exports === "object") {
        module.exports = matchesSelector;
    } else {
        // browser global
        window.matchesSelector = matchesSelector;
    }
})(Element.prototype);

/**
 * utils
 */
(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define("flickity/js/utils", [ "doc-ready/doc-ready", "matches-selector/matches-selector" ], function(docReady, matchesSelector) {
            return factory(window, docReady, matchesSelector);
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(window, require("doc-ready"), require("desandro-matches-selector"));
    } else {
        // browser global
        window.utils = factory(window, window.docReady, window.matchesSelector);
    }
})(window, function factory(window, docReady, matchesSelector) {
    var U = {};
    // ----- extend ----- //
    // extends objects
    U.extend = function(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    };
    // ----- modulo ----- //
    U.modulo = function(num, div) {
        return (num % div + div) % div;
    };
    // ----- isArray ----- //
    var objToString = Object.prototype.toString;
    U.isArray = function(obj) {
        return objToString.call(obj) == "[object Array]";
    };
    // ----- makeArray ----- //
    // turn element or nodeList into an array
    U.makeArray = function(obj) {
        var ary = [];
        if (U.isArray(obj)) {
            // use object if already an array
            ary = obj;
        } else if (obj && typeof obj.length == "number") {
            // convert nodeList to array
            for (var i = 0, len = obj.length; i < len; i++) {
                ary.push(obj[i]);
            }
        } else {
            // array of single index
            ary.push(obj);
        }
        return ary;
    };
    // ----- indexOf ----- //
    // index of helper cause IE8
    U.indexOf = Array.prototype.indexOf ? function(ary, obj) {
        return ary.indexOf(obj);
    } : function(ary, obj) {
        for (var i = 0, len = ary.length; i < len; i++) {
            if (ary[i] === obj) {
                return i;
            }
        }
        return -1;
    };
    // ----- removeFrom ----- //
    U.removeFrom = function(obj, ary) {
        var index = U.indexOf(ary, obj);
        if (index != -1) {
            ary.splice(index, 1);
        }
    };
    // ----- isElement ----- //
    // http://stackoverflow.com/a/384380/182183
    U.isElement = typeof HTMLElement == "function" || typeof HTMLElement == "object" ? function isElementDOM2(obj) {
        return obj instanceof HTMLElement;
    } : function isElementQuirky(obj) {
        return obj && typeof obj == "object" && obj.nodeType == 1 && typeof obj.nodeName == "string";
    };
    // ----- setText ----- //
    U.setText = function() {
        var setTextProperty;
        function setText(elem, text) {
            // only check setTextProperty once
            setTextProperty = setTextProperty || (document.documentElement.textContent !== undefined ? "textContent" : "innerText");
            elem[setTextProperty] = text;
        }
        return setText;
    }();
    // ----- getParent ----- //
    U.getParent = function(elem, selector) {
        while (elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
                return elem;
            }
        }
    };
    // ----- getQueryElement ----- //
    // use element as selector string
    U.getQueryElement = function(elem) {
        if (typeof elem == "string") {
            return document.querySelector(elem);
        }
        return elem;
    };
    // ----- filterFindElements ----- //
    U.filterFindElements = function(elems, selector) {
        // make array of elems
        elems = U.makeArray(elems);
        var ffElems = [];
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems[i];
            // check that elem is an actual element
            if (!U.isElement(elem)) {
                continue;
            }
            // filter & find items if we have a selector
            if (selector) {
                // filter siblings
                if (matchesSelector(elem, selector)) {
                    ffElems.push(elem);
                }
                // find children
                var childElems = elem.querySelectorAll(selector);
                // concat childElems to filterFound array
                for (var j = 0, jLen = childElems.length; j < jLen; j++) {
                    ffElems.push(childElems[j]);
                }
            } else {
                ffElems.push(elem);
            }
        }
        return ffElems;
    };
    // ----- debounceMethod ----- //
    U.debounceMethod = function(_class, methodName, threshold) {
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            if (timeout) {
                clearTimeout(timeout);
            }
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold || 100);
        };
    };
    // ----- htmlInit ----- //
    var jQuery = window.jQuery;
    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    function toDashed(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + "-" + $2;
        }).toLowerCase();
    }
    /**
 * allow user to initialize classes via .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-option attribute
 */
    U.htmlInit = function(WidgetClass, namespace) {
        docReady(function() {
            var dashedNamespace = toDashed(namespace);
            var elems = document.querySelectorAll(".js-" + dashedNamespace);
            var dataAttr = "data-" + dashedNamespace + "-options";
            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems[i];
                var attr = elem.getAttribute(dataAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) {
                        console.error("Error parsing " + dataAttr + " on " + elem.nodeName.toLowerCase() + (elem.id ? "#" + elem.id : "") + ": " + error);
                    }
                    continue;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('layoutname')
                if (jQuery) {
                    jQuery.data(elem, namespace, instance);
                }
            }
        });
    };
    // -----  ----- //
    return U;
});

(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define("flickity/js/cell", [ "get-size/get-size" ], function(getSize) {
            return factory(window, getSize);
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(window, require("get-size"));
    } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.Cell = factory(window, window.getSize);
    }
})(window, function factory(window, getSize) {
    function Cell(elem, parent) {
        this.element = elem;
        this.parent = parent;
        this.create();
    }
    Cell.prototype.create = function() {
        this.element.style.position = "absolute";
        this.x = 0;
        this.shift = 0;
    };
    Cell.prototype.destroy = function() {
        // reset style
        this.element.style.position = "";
        var side = this.parent.originSide;
        this.element.style[side] = "";
    };
    Cell.prototype.getSize = function() {
        this.size = getSize(this.element);
    };
    Cell.prototype.setPosition = function(x) {
        this.x = x;
        this.setDefaultTarget();
        this.renderPosition(x);
    };
    Cell.prototype.setDefaultTarget = function() {
        var marginProperty = this.parent.originSide == "left" ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
    };
    Cell.prototype.renderPosition = function(x) {
        // render position of cell with in slider
        var side = this.parent.originSide;
        this.element.style[side] = this.parent.getPositionValue(x);
    };
    /**
 * @param {Integer} factor - 0, 1, or -1
**/
    Cell.prototype.wrapShift = function(shift) {
        this.shift = shift;
        this.renderPosition(this.x + this.parent.slideableWidth * shift);
    };
    Cell.prototype.remove = function() {
        this.element.parentNode.removeChild(this.element);
    };
    return Cell;
});

// -------------------------- prev/next button -------------------------- //
(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define("flickity/js/prev-next-button", [ "./utils" ], function(utils) {
            return factory(window, utils);
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(window, require("./utils"));
    } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.PrevNextButton = factory(window, window.utils);
    }
})(window, function factory(window, utils) {
    var svgURI = "http://www.w3.org/2000/svg";
    // -------------------------- inline SVG support -------------------------- //
    // only check on demand, not on script load
    var supportsInlineSVG = function() {
        var supports;
        function checkSupport() {
            if (supports !== undefined) {
                return supports;
            }
            var div = document.createElement("div");
            div.innerHTML = "<svg/>";
            supports = (div.firstChild && div.firstChild.namespaceURI) == svgURI;
            return supports;
        }
        return checkSupport;
    }();
    function PrevNextButton(direction, parent) {
        this.direction = direction;
        this.parent = parent;
        this._create();
    }
    PrevNextButton.prototype._create = function() {
        // properties
        this.isEnabled = true;
        this.isPrevious = this.direction == -1;
        var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == leftDirection;
        this.element = document.createElement("button");
        this.element.className = "flickity-prev-next-button";
        this.element.className += this.isPrevious ? " previous" : " next";
        // create arrow
        if (supportsInlineSVG()) {
            var svg = this.createSVG();
            this.element.appendChild(svg);
        } else {
            // SVG not supported, set button text
            this.setArrowText();
            this.element.className += " no-svg";
        }
        // update on select
        var _this = this;
        this.onselect = function() {
            _this.update();
        };
        this.parent.on("select", this.onselect);
        // listen to click event
        this.element.onclick = function() {
            _this.onclick();
        };
    };
    PrevNextButton.prototype.activate = function() {
        // add to DOM
        this.parent.element.appendChild(this.element);
    };
    PrevNextButton.prototype.deactivate = function() {
        // remove from DOM
        this.parent.element.removeChild(this.element);
    };
    PrevNextButton.prototype.createSVG = function() {
        var svg = document.createElementNS(svgURI, "svg");
        svg.setAttribute("viewBox", "0 0 100 100");
        var path = document.createElementNS(svgURI, "path");
        path.setAttribute("d", "M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z");
        path.setAttribute("class", "arrow");
        // adjust arrow
        var arrowTransform = this.isLeft ? "translate(15,0)" : "translate(85,100) rotate(180)";
        path.setAttribute("transform", arrowTransform);
        svg.appendChild(path);
        return svg;
    };
    PrevNextButton.prototype.setArrowText = function() {
        var parentOptions = this.parent.options;
        var arrowText = this.isLeft ? parentOptions.leftArrowText : parentOptions.rightArrowText;
        utils.setText(this.element, arrowText);
    };
    PrevNextButton.prototype.onclick = function() {
        if (!this.isEnabled) {
            return;
        }
        this.parent.uiChange();
        var method = this.isPrevious ? "previous" : "next";
        this.parent[method]();
    };
    PrevNextButton.prototype.enable = function() {
        if (this.isEnabled) {
            return;
        }
        this.element.disabled = false;
        this.isEnabled = true;
    };
    PrevNextButton.prototype.disable = function() {
        if (!this.isEnabled) {
            return;
        }
        this.element.disabled = true;
        this.isEnabled = false;
    };
    PrevNextButton.prototype.update = function() {
        if (this.parent.options.wrapAround) {
            this.enable();
            return;
        }
        // index of first or last cell, if previous or next
        var boundIndex = this.isPrevious ? 0 : this.parent.cells.length - 1;
        var method = this.parent.selectedIndex == boundIndex ? "disable" : "enable";
        this[method]();
    };
    return PrevNextButton;
});

(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define("flickity/js/page-dots", [ "eventie/eventie", "./utils" ], function(eventie, utils) {
            return factory(window, eventie, utils);
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(window, require("eventie"), require("./utils"));
    } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.PageDots = factory(window, window.eventie, window.utils);
    }
})(window, function factory(window, eventie, U) {
    // -------------------------- PageDots -------------------------- //
    function PageDots(parent) {
        this.parent = parent;
        this._create();
    }
    PageDots.prototype._create = function() {
        // create holder element
        this.holder = document.createElement("ol");
        this.holder.className = "flickity-page-dots";
        // create dots, array of elements
        this.dots = [];
        // update on select
        var _this = this;
        this.onselect = function() {
            _this.updateSelected();
        };
        this.parent.on("select", this.onselect);
        eventie.bind(this.holder, "click", this);
    };
    PageDots.prototype.activate = function() {
        this.setDots();
        this.updateSelected();
        // add to DOM
        this.parent.element.appendChild(this.holder);
    };
    PageDots.prototype.deactivate = function() {
        // remove from DOM
        this.parent.element.removeChild(this.holder);
    };
    PageDots.prototype.setDots = function() {
        // get difference between number of cells and number of dots
        var delta = this.parent.cells.length - this.dots.length;
        if (delta > 0) {
            this.addDots(delta);
        } else if (delta < 0) {
            this.removeDots(-delta);
        }
    };
    PageDots.prototype.addDots = function(count) {
        var fragment = document.createDocumentFragment();
        var newDots = [];
        while (count) {
            var dot = document.createElement("li");
            dot.className = "dot";
            fragment.appendChild(dot);
            newDots.push(dot);
            count--;
        }
        this.holder.appendChild(fragment);
        this.dots = this.dots.concat(newDots);
    };
    PageDots.prototype.removeDots = function(count) {
        // remove from this.dots collection
        var removeDots = this.dots.splice(this.dots.length - count, count);
        // remove from DOM
        for (var i = 0, len = removeDots.length; i < len; i++) {
            var dot = removeDots[i];
            this.holder.removeChild(dot);
        }
    };
    PageDots.prototype.updateSelected = function() {
        // remove selected class on previous
        if (this.selectedDot) {
            this.selectedDot.className = "dot";
        }
        this.selectedDot = this.dots[this.parent.selectedIndex];
        this.selectedDot.className = "dot is-selected";
    };
    // trigger handler methods for events
    PageDots.prototype.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    PageDots.prototype.onclick = function(event) {
        var target = event.target;
        // only care about dot clicks
        if (target.nodeName != "LI") {
            return;
        }
        this.parent.uiChange();
        var index = U.indexOf(this.dots, target);
        this.parent.select(index);
    };
    return PageDots;
});

(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define("flickity/js/player", [], function() {
            return factory();
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.Player = factory();
    }
})(window, function factory() {
    function Player(parent) {
        this.isPlaying = false;
        this.parent = parent;
    }
    // start play
    Player.prototype.play = function() {
        this.isPlaying = true;
        // playing kills pauses
        delete this.isPaused;
        // start ticking
        this.tick();
    };
    Player.prototype.tick = function() {
        // do not tick if paused or not playing
        if (!this.isPlaying || this.isPaused) {
            return;
        }
        var time = this.parent.options.autoPlay;
        // default to 3 seconds
        time = typeof time == "number" ? time : 3e3;
        var _this = this;
        this.timeout = setTimeout(function() {
            _this.parent.next(true);
            _this.tick();
        }, time);
    };
    Player.prototype.stop = function() {
        this.isPlaying = false;
        // stopping kills pauses
        delete this.isPaused;
        this.clear();
    };
    Player.prototype.clear = function() {
        clearTimeout(this.timeout);
    };
    Player.prototype.pause = function() {
        if (this.isPlaying) {
            this.isPaused = true;
            this.clear();
        }
    };
    Player.prototype.unpause = function() {
        // re-start play if in unpaused state
        if (this.isPaused) {
            this.play();
        }
    };
    return Player;
});

(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define("flickity/js/unipointer", [ "eventie/eventie" ], function(eventie) {
            return factory(window, eventie);
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(window, require("eventie"));
    } else {
        // browser global
        window.Unipointer = factory(window, window.eventie);
    }
})(window, function factory(window, eventie) {
    // -----  ----- //
    function noop() {}
    // -------------------------- Unipointer -------------------------- //
    function Unipointer() {}
    // trigger handler methods for events
    Unipointer.prototype.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    // returns the touch that we're keeping track of
    Unipointer.prototype.getTouch = function(touches) {
        for (var i = 0, len = touches.length; i < len; i++) {
            var touch = touches[i];
            if (touch.identifier == this.pointerIdentifier) {
                return touch;
            }
        }
    };
    // ----- bind start ----- //
    // works as unbinder, as you can .bindHandles( false ) to unbind
    /**
 * @param {Boolean} isBind - will unbind if falsey
 */
    Unipointer.prototype.bindHandles = function(isBind) {
        var binder;
        if (window.navigator.pointerEnabled) {
            binder = this.bindPointer;
        } else if (window.navigator.msPointerEnabled) {
            binder = this.bindMSPointer;
        } else {
            binder = this.bindMouseTouch;
        }
        // munge isBind, default to true
        isBind = isBind === undefined ? true : !!isBind;
        for (var i = 0, len = this.handles.length; i < len; i++) {
            var handle = this.handles[i];
            binder.call(this, handle, isBind);
        }
    };
    Unipointer.prototype.bindPointer = function(handle, isBind) {
        // W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
        var bindMethod = isBind ? "bind" : "unbind";
        eventie[bindMethod](handle, "pointerdown", this);
        // disable scrolling on the element
        handle.style.touchAction = isBind ? "none" : "";
    };
    Unipointer.prototype.bindMSPointer = function(handle, isBind) {
        // IE10 Pointer Events
        var bindMethod = isBind ? "bind" : "unbind";
        eventie[bindMethod](handle, "MSPointerDown", this);
        // disable scrolling on the element
        handle.style.msTouchAction = isBind ? "none" : "";
    };
    Unipointer.prototype.bindMouseTouch = function(handle, isBind) {
        // listen for both, for devices like Chrome Pixel
        //   which has touch and mouse events
        var bindMethod = isBind ? "bind" : "unbind";
        eventie[bindMethod](handle, "mousedown", this);
        eventie[bindMethod](handle, "touchstart", this);
        // TODO re-enable img.ondragstart when unbinding
        if (isBind) {
            disableImgOndragstart(handle);
        }
    };
    // remove default dragging interaction on all images in IE8
    // IE8 does its own drag thing on images, which messes stuff up
    function noDragStart() {
        return false;
    }
    // TODO replace this with a IE8 test
    var isIE8 = "attachEvent" in document.documentElement;
    // IE8 only
    var disableImgOndragstart = !isIE8 ? noop : function(handle) {
        if (handle.nodeName == "IMG") {
            handle.ondragstart = noDragStart;
        }
        var images = handle.querySelectorAll("img");
        for (var i = 0, len = images.length; i < len; i++) {
            var img = images[i];
            img.ondragstart = noDragStart;
        }
    };
    // ----- start event ----- //
    Unipointer.prototype.onmousedown = function(event) {
        // dismiss clicks from right or middle buttons
        var button = event.button;
        if (button && (button !== 0 && button !== 1)) {
            return;
        }
        this._pointerDown(event, event);
    };
    Unipointer.prototype.ontouchstart = function(event) {
        this._pointerDown(event, event.changedTouches[0]);
    };
    Unipointer.prototype.onMSPointerDown = Unipointer.prototype.onpointerdown = function(event) {
        this._pointerDown(event, event);
    };
    // hash of events to be bound after start event
    var postStartEvents = {
        mousedown: [ "mousemove", "mouseup" ],
        touchstart: [ "touchmove", "touchend", "touchcancel" ],
        pointerdown: [ "pointermove", "pointerup", "pointercancel" ],
        MSPointerDown: [ "MSPointerMove", "MSPointerUp", "MSPointerCancel" ]
    };
    /**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
    Unipointer.prototype._pointerDown = function(event, pointer) {
        // dismiss other pointers
        if (this.isPointerDown) {
            return;
        }
        this.isPointerDown = true;
        // save pointer identifier to match up touch events
        this.pointerIdentifier = pointer.pointerId !== undefined ? // pointerId for pointer events, touch.indentifier for touch events
        pointer.pointerId : pointer.identifier;
        // bind move and end events
        this._bindPostStartEvents({
            // get proper events to match start event
            events: postStartEvents[event.type],
            // IE8 needs to be bound to document
            node: event.preventDefault ? window : document
        });
        this.pointerDown(event, pointer);
        this.emitEvent("pointerDown", [ this, event, pointer ]);
    };
    Unipointer.prototype.pointerDown = noop;
    // ----- bind/unbind ----- //
    Unipointer.prototype._bindPostStartEvents = function(args) {
        for (var i = 0, len = args.events.length; i < len; i++) {
            var event = args.events[i];
            eventie.bind(args.node, event, this);
        }
        // save these arguments
        this._boundPointerEvents = args;
    };
    Unipointer.prototype._unbindPostStartEvents = function() {
        var args = this._boundPointerEvents;
        // IE8 can trigger dragEnd twice, check for _boundEvents
        if (!args || !args.events) {
            return;
        }
        for (var i = 0, len = args.events.length; i < len; i++) {
            var event = args.events[i];
            eventie.unbind(args.node, event, this);
        }
        delete this._boundPointerEvents;
    };
    // ----- move event ----- //
    Unipointer.prototype.onmousemove = function(event) {
        this._pointerMove(event, event);
    };
    Unipointer.prototype.onMSPointerMove = Unipointer.prototype.onpointermove = function(event) {
        if (event.pointerId == this.pointerIdentifier) {
            this._pointerMove(event, event);
        }
    };
    Unipointer.prototype.ontouchmove = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) {
            this._pointerMove(event, touch);
        }
    };
    /**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
    Unipointer.prototype._pointerMove = function(event, pointer) {
        this.pointerMove(event, pointer);
        this.emitEvent("pointerMove", [ this, event, pointer ]);
    };
    Unipointer.prototype.pointerMove = noop;
    // ----- end event ----- //
    Unipointer.prototype.onmouseup = function(event) {
        this._pointerUp(event, event);
    };
    Unipointer.prototype.onMSPointerUp = Unipointer.prototype.onpointerup = function(event) {
        if (event.pointerId == this.pointerIdentifier) {
            this._pointerUp(event, event);
        }
    };
    Unipointer.prototype.ontouchend = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) {
            this._pointerUp(event, touch);
        }
    };
    /**
 * drag end
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
    Unipointer.prototype._pointerUp = function(event, pointer) {
        this.isPointerDown = false;
        delete this.pointerIdentifier;
        // remove events
        this._unbindPostStartEvents();
        this.pointerUp(event, pointer);
        this.emitEvent("pointerUp", [ this, event, pointer ]);
    };
    Unipointer.prototype.pointerUp = noop;
    // ----- cancel event ----- //
    // coerce to end event
    Unipointer.prototype.onMSPointerCancel = Unipointer.prototype.onpointercancel = function(event) {
        if (event.pointerId == this.pointerIdentifier) {
            this._pointerUp(event, event);
        }
    };
    Unipointer.prototype.ontouchcancel = function(event) {
        var touch = this.getTouch(event.changedTouches);
        this._pointerUp(event, touch);
    };
    // -----  ----- //
    Unipointer.getPointerPoint = function(pointer) {
        return {
            x: pointer.pageX !== undefined ? pointer.pageX : pointer.clientX,
            y: pointer.pageY !== undefined ? pointer.pageY : pointer.clientY
        };
    };
    // fix for IE8
    Unipointer.setPointerPoint = function(point, pointer) {
        point.x = pointer.pageX !== undefined ? pointer.pageX : pointer.clientX;
        point.y = pointer.pageY !== undefined ? pointer.pageY : pointer.clientY;
    };
    // -----  ----- //
    return Unipointer;
});

(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define("flickity/js/drag", [ "./unipointer", "classie/classie", "eventie/eventie", "./utils" ], function(Unipointer, eventie, utils) {
            return factory(window, Unipointer, eventie, utils);
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(window, require("./unipointer"), require("desandro-classie"), require("eventie"), require("./utils"));
    } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.dragPrototype = factory(window, window.Unipointer, window.classie, window.eventie, window.utils);
    }
})(window, function factory(window, Unipointer, classie, eventie, U) {
    // handle IE8 prevent default
    function preventDefaultEvent(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
    // -------------------------- drag prototype -------------------------- //
    var proto = {};
    U.extend(proto, Unipointer.prototype);
    // --------------------------  -------------------------- //
    proto.bindDrag = function() {
        if (!this.options.draggable) {
            return;
        }
        this.handles = [ this.viewport ];
        this.bindHandles();
        // bind click handler
        eventie.bind(this.viewport, "click", this);
    };
    proto.unbindDrag = function() {
        if (!this.options.draggable) {
            return;
        }
        this.bindHandles(false);
        // unbind click handler
        eventie.unbind(this.viewport, "click", this);
    };
    // -------------------------- pointer events -------------------------- //
    var allowTouchstartNodes = {
        INPUT: true,
        A: true,
        BUTTON: true
    };
    proto.pointerDown = function(event, pointer) {
        var targetNodeName = event.target.nodeName;
        // HACK iOS, allow clicks on buttons, inputs, and links
        var isTouchstart = event.type == "touchstart";
        var isTouchstartNode = allowTouchstartNodes[targetNodeName];
        if (!isTouchstart || isTouchstart && !isTouchstartNode) {
            preventDefaultEvent(event);
        }
        // kludge to blur focused inputs in dragger
        var focused = document.activeElement;
        if (focused && focused.blur && focused != this.element) {
            focused.blur();
        }
        // focus element, if its not an input
        if (this.options.accessibility && targetNodeName != "INPUT") {
            this.element.focus();
        }
        // stop if it was moving
        this.velocity = 0;
        // track to see when dragging starts
        this.pointerDownPoint = Unipointer.getPointerPoint(pointer);
        // stop auto play
        this.player.stop();
        classie.add(this.viewport, "is-pointer-down");
    };
    proto.pointerMove = function(event, pointer) {
        var movePoint = Unipointer.getPointerPoint(pointer);
        var dragMove = movePoint.x - this.pointerDownPoint.x;
        // start drag
        if (!this.isDragging && Math.abs(dragMove) > 3) {
            this.dragStart(event, pointer);
        }
        this.dragMove(movePoint, event, pointer);
    };
    proto.pointerUp = function(event, pointer) {
        if (this.isDragging) {
            this.dragEnd(event, pointer);
        } else {
            // pointer didn't move enough for drag to start
            this.staticClick(event, pointer);
        }
        classie.remove(this.viewport, "is-pointer-down");
    };
    // -------------------------- dragging -------------------------- //
    proto.dragStart = function(event, pointer) {
        this.isDragging = true;
        this.dragStartPoint = Unipointer.getPointerPoint(pointer);
        this.dragStartPosition = this.x;
        this.startAnimation();
        // prevent clicks
        this.isPreventingClicks = true;
        this.dispatchEvent("dragStart", event, [ pointer ]);
    };
    proto.dragMove = function(movePoint, event, pointer) {
        // do not drag if not dragging yet
        if (!this.isDragging) {
            return;
        }
        this.previousDragX = this.x;
        var movedX = movePoint.x - this.dragStartPoint.x;
        // reverse if right-to-left
        var direction = this.options.rightToLeft ? -1 : 1;
        this.x = this.dragStartPosition + movedX * direction;
        if (!this.options.wrapAround && this.cells.length) {
            // slow drag
            var originBound = Math.max(-this.cells[0].target, this.dragStartPosition);
            this.x = this.x > originBound ? (this.x - originBound) * .5 + originBound : this.x;
            var endBound = Math.min(-this.getLastCell().target, this.dragStartPosition);
            this.x = this.x < endBound ? (this.x - endBound) * .5 + endBound : this.x;
        }
        this.previousDragMoveTime = this.dragMoveTime;
        this.dragMoveTime = new Date();
        this.dispatchEvent("dragMove", event, [ pointer ]);
    };
    proto.dragEnd = function(event, pointer) {
        this.dragEndFlick();
        if (this.options.freeScroll) {
            this.isFreeScrolling = true;
        }
        // set selectedIndex based on where flick will end up
        var index = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            // if free-scroll & not wrap around
            // do not free-scroll if going outside of bounding cells
            // so bounding cells can attract slider, and keep it in bounds
            var restingX = this.getRestingPosition();
            this.isFreeScrolling = -restingX > this.cells[0].target && -restingX < this.getLastCell().target;
        } else if (!this.options.freeScroll && index == this.selectedIndex) {
            // boost selection if selected index has not changed
            index += this.dragEndBoostSelect();
        }
        // apply selection
        // TODO refactor this, selecting here feels weird
        this.select(index);
        // set flags
        this.isDragging = false;
        // re-enable clicking async
        var _this = this;
        setTimeout(function() {
            delete _this.isPreventingClicks;
        });
        this.dispatchEvent("dragEnd", event, [ pointer ]);
    };
    // apply velocity after dragging
    proto.dragEndFlick = function() {
        if (!isFinite(this.previousDragX)) {
            return;
        }
        // set slider velocity
        var timeDelta = this.dragMoveTime - this.previousDragMoveTime;
        // 60 frames per second, ideally
        // TODO, velocity should be in pixels per millisecond
        // currently in pixels per frame
        timeDelta /= 1e3 / 60;
        var xDelta = this.x - this.previousDragX;
        this.velocity = xDelta / timeDelta;
        // reset
        delete this.previousDragX;
    };
    proto.dragEndRestingSelect = function() {
        var restingX = this.getRestingPosition();
        // how far away from selected cell
        var distance = Math.abs(this.getCellDistance(-restingX, this.selectedIndex));
        // get closet resting going up and going down
        var positiveResting = this._getClosestResting(restingX, distance, 1);
        var negativeResting = this._getClosestResting(restingX, distance, -1);
        // use closer resting for wrap-around
        var index = positiveResting.distance < negativeResting.distance ? positiveResting.index : negativeResting.index;
        return index;
    };
    /**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
    proto._getClosestResting = function(restingX, distance, increment) {
        var index = this.selectedIndex;
        var minDistance = Infinity;
        var condition = this.options.contain && !this.options.wrapAround ? // if fit-content, keep going if distance is equal to minDistance
        function(d, md) {
            return d <= md;
        } : function(d, md) {
            return d < md;
        };
        while (condition(distance, minDistance)) {
            // measure distance to next cell
            index += increment;
            minDistance = distance;
            distance = this.getCellDistance(-restingX, index);
            if (distance === null) {
                break;
            }
            distance = Math.abs(distance);
        }
        return {
            distance: minDistance,
            // selected was previous index
            index: index - increment
        };
    };
    /**
 * measure distance between x and a cell target
 * @param {Number} x
 * @param {Integer} index - cell index
 */
    proto.getCellDistance = function(x, index) {
        var len = this.cells.length;
        var cellIndex = this.options.wrapAround ? U.modulo(index, len) : index;
        var cell = this.cells[cellIndex];
        if (!cell) {
            return null;
        }
        // add distance for wrap-around cells
        var wrap = this.options.wrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
        return x - (cell.target + wrap);
    };
    proto.dragEndBoostSelect = function() {
        var distance = this.getCellDistance(-this.x, this.selectedIndex);
        if (distance > 0 && this.velocity < -1) {
            // if moving towards the right, and positive velocity, and the next attractor
            return 1;
        } else if (distance < 0 && this.velocity > 1) {
            // if moving towards the left, and negative velocity, and previous attractor
            return -1;
        }
        return 0;
    };
    // ----- onclick ----- //
    // handle all clicks and prevent clicks when dragging
    proto.onclick = function(event) {
        if (this.isPreventingClicks) {
            preventDefaultEvent(event);
        }
    };
    // ----- staticClick ----- //
    // triggered after pointer down & up with no/tiny movement
    proto.staticClick = function(event, pointer) {
        // allow click in text input
        if (event.target.nodeName == "INPUT" && event.target.type == "text") {
            event.target.focus();
        }
        this.dispatchEvent("staticClick", event, [ pointer ]);
    };
    // -----  ----- //
    return proto;
});

(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define("flickity/js/animate", [ "get-style-property/get-style-property", "./utils" ], function(getStyleProperty, utils) {
            return factory(window, getStyleProperty, utils);
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(window, require("desandro-get-style-property"), require("./utils"));
    } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.animatePrototype = factory(window, window.getStyleProperty, window.utils);
    }
})(window, function factory(window, getStyleProperty, U) {
    // -------------------------- requestAnimationFrame -------------------------- //
    // https://gist.github.com/1866474
    var lastTime = 0;
    var prefixes = "webkit moz ms o".split(" ");
    // get unprefixed rAF and cAF, if present
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;
    // loop through vendor prefixes and get prefixed rAF and cAF
    var prefix;
    for (var i = 0; i < prefixes.length; i++) {
        if (requestAnimationFrame && cancelAnimationFrame) {
            break;
        }
        prefix = prefixes[i];
        requestAnimationFrame = requestAnimationFrame || window[prefix + "RequestAnimationFrame"];
        cancelAnimationFrame = cancelAnimationFrame || window[prefix + "CancelAnimationFrame"] || window[prefix + "CancelRequestAnimationFrame"];
    }
    // fallback to setTimeout and clearTimeout if either request/cancel is not supported
    if (!requestAnimationFrame || !cancelAnimationFrame) {
        requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
        cancelAnimationFrame = function(id) {
            window.clearTimeout(id);
        };
    }
    // -------------------------- animate -------------------------- //
    var proto = {};
    proto.startAnimation = function() {
        if (this.isAnimating) {
            return;
        }
        this.isAnimating = true;
        this.restingFrames = 0;
        this.animate();
    };
    proto.animate = function() {
        this.applySelectedAttraction();
        var previousX = this.x;
        this.updatePhysics();
        this.positionSlider();
        this.settle(previousX);
        // animate next frame
        if (this.isAnimating) {
            var _this = this;
            requestAnimationFrame(function animateFrame() {
                _this.animate();
            });
        }
    };
    var transformProperty = getStyleProperty("transform");
    var is3d = !!getStyleProperty("perspective");
    proto.positionSlider = function() {
        var x = this.x;
        // wrap position around
        if (this.options.wrapAround) {
            x = U.modulo(x, this.slideableWidth);
            x = x - this.slideableWidth;
            this.shiftWrapCells(x);
        }
        x = x + this.cursorPosition;
        // reverse if right-to-left and using transform
        x = this.options.rightToLeft && transformProperty ? -x : x;
        var value = this.getPositionValue(x);
        if (transformProperty) {
            // use 3D tranforms for hardware acceleration on iOS
            // but use 2D when settled, for better font-rendering
            this.slider.style[transformProperty] = is3d && this.isAnimating ? "translate3d(" + value + ",0,0)" : "translateX(" + value + ")";
        } else {
            this.slider.style[this.originSide] = value;
        }
    };
    proto.positionSliderAtSelected = function() {
        var selectedCell = this.cells[this.selectedIndex];
        this.x = -selectedCell.target;
        this.positionSlider();
    };
    proto.getPositionValue = function(position) {
        if (this.options.percentPosition) {
            // percent position, round to 2 digits, like 12.34%
            return Math.round(position / this.size.innerWidth * 1e4) * .01 + "%";
        } else {
            // pixel positioning
            return Math.round(position) + "px";
        }
    };
    proto.settle = function(previousX) {
        // keep track of frames where x hasn't moved
        if (!this.isPointerDown && Math.round(this.x * 100) == Math.round(previousX * 100)) {
            this.restingFrames++;
        }
        // stop animating if resting for 3 or more frames
        if (this.restingFrames > 2) {
            this.isAnimating = false;
            delete this.isFreeScrolling;
            // render position with translateX when settled
            if (is3d) {
                this.positionSlider();
            }
            this.dispatchEvent("settle");
        }
    };
    proto.shiftWrapCells = function(x) {
        // shift before cells
        var beforeGap = this.cursorPosition + x;
        this._shiftCells(this.beforeShiftCells, beforeGap, -1);
        // shift after cells
        var afterGap = this.size.innerWidth - (x + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, afterGap, 1);
    };
    proto._shiftCells = function(cells, gap, shift) {
        for (var i = 0, len = cells.length; i < len; i++) {
            var cell = cells[i];
            var cellShift = gap > 0 ? shift : 0;
            cell.wrapShift(cellShift);
            gap -= cell.size.outerWidth;
        }
    };
    proto._unshiftCells = function(cells) {
        if (!cells || !cells.length) {
            return;
        }
        for (var i = 0, len = cells.length; i < len; i++) {
            cells[i].wrapShift(0);
        }
    };
    // -------------------------- physics -------------------------- //
    proto.updatePhysics = function() {
        this.velocity += this.accel;
        this.x += this.velocity;
        this.velocity *= this.getFrictionFactor();
        // reset acceleration
        this.accel = 0;
    };
    proto.applyForce = function(force) {
        this.accel += force;
    };
    proto.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
    };
    proto.getRestingPosition = function() {
        // my thanks to Steven Wittens, who simplified this math greatly
        return this.x + this.velocity / (1 - this.getFrictionFactor());
    };
    proto.applySelectedAttraction = function() {
        // do not attract if pointer down or no cells
        if (this.isPointerDown || this.isFreeScrolling || !this.cells.length) {
            return;
        }
        var cell = this.cells[this.selectedIndex];
        var wrap = this.options.wrapAround ? this.slideableWidth * Math.floor(this.selectedIndex / this.cells.length) : 0;
        var distance = (cell.target + wrap) * -1 - this.x;
        var force = distance * this.options.selectedAttraction;
        this.applyForce(force);
    };
    return proto;
});

(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define("flickity/js/cell-change", [ "./utils" ], function(utils) {
            return factory(window, utils);
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(window, require("./utils"));
    } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.cellChangePrototype = factory(window, window.utils);
    }
})(window, function factory(window, U) {
    // append cells to a document fragment
    function getCellsFragment(cells) {
        var fragment = document.createDocumentFragment();
        for (var i = 0, len = cells.length; i < len; i++) {
            var cell = cells[i];
            fragment.appendChild(cell.element);
        }
        return fragment;
    }
    // -------------------------- cell change prototype -------------------------- //
    var proto = {};
    /**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
    proto.insert = function(elems, index) {
        var cells = this._makeCells(elems);
        if (!cells || !cells.length) {
            return;
        }
        var len = this.cells.length;
        // default to append
        index = index === undefined ? len : index;
        // add cells with document fragment
        var fragment = getCellsFragment(cells);
        // append to slider
        var isAppend = index == len;
        if (isAppend) {
            this.slider.appendChild(fragment);
        } else {
            var insertCellElement = this.cells[index].element;
            this.slider.insertBefore(fragment, insertCellElement);
        }
        // add to this.cells
        if (index === 0) {
            // prepend, add to start
            this.cells = cells.concat(this.cells);
        } else if (isAppend) {
            // append, add to end
            this.cells = this.cells.concat(cells);
        } else {
            // insert in this.cells
            var endCells = this.cells.splice(index, len - index);
            this.cells = this.cells.concat(cells).concat(endCells);
        }
        this._sizeCells(cells);
        this._cellAddedRemoved(index);
    };
    proto.append = function(elems) {
        this.insert(elems, this.cells.length);
    };
    proto.prepend = function(elems) {
        this.insert(elems, 0);
    };
    /**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
    proto.remove = function(elems) {
        var cells = this.getCells(elems);
        for (var i = 0, len = cells.length; i < len; i++) {
            var cell = cells[i];
            cell.remove();
            // remove item from collection
            U.removeFrom(cell, this.cells);
        }
        if (cells.length) {
            // update stuff
            this._cellAddedRemoved(0);
        }
    };
    // updates when cells are added or removed
    proto._cellAddedRemoved = function(index) {
        // update page dots
        if (this.pageDots) {
            this.pageDots.setDots();
        }
        // TODO cell is removed before the selected cell, adjust selectedIndex by -1
        this.selectedIndex = Math.max(0, Math.min(this.cells.length - 1, this.selectedIndex));
        this.cellChange(index);
    };
    /**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
    proto.cellSizeChange = function(elem) {
        var cell = this.getCell(elem);
        if (!cell) {
            return;
        }
        cell.getSize();
        var index = U.indexOf(this.cells, cell);
        this.cellChange(index);
    };
    /**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} index - index of the changed cell, optional
 */
    proto.cellChange = function(index) {
        // TODO maybe always size all cells unless isSkippingSizing
        // size all cells if necessary
        // if ( !isSkippingSizing ) {
        //   this._sizeCells( this.cells );
        // }
        index = index || 0;
        this._positionCells(index);
        this._getWrapShiftCells();
        this.setContainerSize();
        // position slider
        if (this.options.freeScroll) {
            this.positionSlider();
        } else {
            this.select(this.selectedIndex);
        }
    };
    // -----  ----- //
    return proto;
});

/*!
 * Flickity v0.1.0
 * Touch, responsive, flickable galleries
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */
(function(window, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) {
        // AMD
        define([ "classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-size/get-size", "flickity/js/utils", "flickity/js/cell", "flickity/js/prev-next-button", "flickity/js/page-dots", "flickity/js/player", "flickity/js/drag", "flickity/js/animate", "flickity/js/cell-change" ], function(classie, EventEmitter, eventie, getSize, U, Cell, PrevNextButton, PageDots, Player, dragPrototype, animatePrototype, cellChangePrototype) {
            return factory(window, classie, EventEmitter, eventie, getSize, U, Cell, PrevNextButton, PageDots, Player, dragPrototype, animatePrototype, cellChangePrototype);
        });
    } else if (typeof exports == "object") {
        // CommonJS
        module.exports = factory(window, require("desandro-classie"), require("wolfy87-eventemitter"), require("eventie"), require("get-size"), require("./utils"), require("./cell"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./drag"), require("./animate"), require("./cell-change"));
    } else {
        // browser global
        var _Flickity = window.Flickity;
        window.Flickity = factory(window, window.classie, window.EventEmitter, window.eventie, window.getSize, window.utils, _Flickity.Cell, _Flickity.PrevNextButton, _Flickity.PageDots, _Flickity.Player, _Flickity.dragPrototype, _Flickity.animatePrototype, _Flickity.cellChangePrototype);
    }
})(window, function factory(window, classie, EventEmitter, eventie, getSize, U, Cell, PrevNextButton, PageDots, Player, dragPrototype, animatePrototype, cellChangePrototype) {
    // vars
    var jQuery = window.jQuery;
    var getComputedStyle = window.getComputedStyle;
    var console = window.console;
    var imagesLoaded = window.imagesLoaded;
    function moveChildren(fromElem, toElem) {
        while (fromElem.children.length) {
            toElem.appendChild(fromElem.children[0]);
        }
    }
    // -------------------------- Flickity -------------------------- //
    // globally unique identifiers
    var GUID = 0;
    // internal store of all Flickity intances
    var instances = {};
    function Flickity(element, options) {
        var queryElement = U.getQueryElement(element);
        if (!queryElement) {
            if (console) {
                console.error("Bad element for Flickity: " + (queryElement || element));
            }
            return;
        }
        this.element = queryElement;
        // add jQuery
        if (jQuery) {
            this.$element = jQuery(this.element);
        }
        // options
        this.options = U.extend({}, this.constructor.defaults);
        this.option(options);
        // kick things off
        this._create();
    }
    Flickity.defaults = {
        accessibility: true,
        // autoPlay: undefined,
        freeScrollFriction: .075,
        // friction when free-scrolling
        friction: .28,
        // friction when selecting
        cellAlign: "center",
        // cellSelector: undefined,
        // contain: false,
        draggable: true,
        // initialIndex: 0,
        // imagesLoaded: false,
        percentPosition: true,
        pageDots: true,
        prevNextButtons: true,
        resizeBound: true,
        // watcCSS: false,
        // wrapAround: false,
        selectedAttraction: .025,
        leftArrowText: "←",
        // text for prev/next button when no SVG support
        rightArrowText: "→"
    };
    // inherit EventEmitter
    U.extend(Flickity.prototype, EventEmitter.prototype);
    Flickity.prototype._create = function() {
        // add id for Flickity.data
        var id = this.guid = ++GUID;
        this.element.flickityGUID = id;
        // expando
        instances[id] = this;
        // associate via id
        // initial properties
        this.selectedIndex = this.options.initialIndex || 0;
        // how many frames slider has been in same position
        this.restingFrames = 0;
        // initial physics properties
        this.x = 0;
        this.velocity = 0;
        this.accel = 0;
        this.originSide = this.options.rightToLeft ? "right" : "left";
        // create viewport & slider
        this.viewport = document.createElement("div");
        this.viewport.className = "flickity-viewport";
        this._createSlider();
        // create prev/next buttons, page dots, and player
        if (this.options.prevNextButtons) {
            this.prevButton = new PrevNextButton(-1, this);
            this.nextButton = new PrevNextButton(1, this);
        }
        if (this.options.pageDots) {
            this.pageDots = new PageDots(this);
        }
        this.player = new Player(this);
        if (this.options.resizeBound || this.options.watchCSS) {
            eventie.bind(window, "resize", this);
        }
        if (this.options.watchCSS) {
            this.watchCSS();
        } else {
            this.activate();
        }
    };
    /**
 * set options
 * @param {Object} opts
 */
    Flickity.prototype.option = function(opts) {
        U.extend(this.options, opts);
    };
    Flickity.prototype.activate = function() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        classie.add(this.element, "flickity-enabled");
        // move children to slider
        moveChildren(this.element, this.slider);
        this.viewport.appendChild(this.slider);
        this.element.appendChild(this.viewport);
        this.getSize();
        // get cells from children
        this.reloadCells();
        this.setContainerSize();
        // activate prev/next buttons, page dots
        if (this.prevButton) {
            this.prevButton.activate();
        }
        if (this.nextButton) {
            this.nextButton.activate();
        }
        if (this.pageDots) {
            this.pageDots.activate();
        }
        // player
        if (this.options.autoPlay) {
            this.player.play();
            // add hover listeners
            eventie.bind(this.element, "mouseenter", this);
        }
        this.positionSliderAtSelected();
        this.select(this.selectedIndex);
        this.imagesLoaded();
        // events
        this.bindDrag();
        if (this.options.accessibility) {
            // allow element to focusable
            this.element.tabIndex = 0;
            // listen for key presses
            eventie.bind(this.element, "keydown", this);
        }
    };
    // slider positions the cells
    Flickity.prototype._createSlider = function() {
        // slider element does all the positioning
        var slider = document.createElement("div");
        slider.className = "flickity-slider";
        slider.style[this.originSide] = 0;
        this.slider = slider;
    };
    // goes through all children
    Flickity.prototype.reloadCells = function() {
        // collection of item elements
        this.cells = this._makeCells(this.slider.children);
        this.positionCells(this.cells);
        this._getWrapShiftCells();
        this.setContainerSize();
    };
    /**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
    Flickity.prototype._makeCells = function(elems) {
        var cellElems = U.filterFindElements(elems, this.options.cellSelector);
        // create new Flickity for collection
        var cells = [];
        for (var i = 0, len = cellElems.length; i < len; i++) {
            var elem = cellElems[i];
            var cell = new Cell(elem, this);
            cells.push(cell);
        }
        return cells;
    };
    Flickity.prototype.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    };
    // positions all cells
    Flickity.prototype.positionCells = function() {
        // size all cells
        this._sizeCells(this.cells);
        // position all cells
        this._positionCells(0);
    };
    /**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
    Flickity.prototype._positionCells = function(index) {
        // also measure maxCellHeight
        // start 0 if positioning all cells
        this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
        var cellX = 0;
        // get cellX
        if (index > 0) {
            var startCell = this.cells[index - 1];
            cellX = startCell.x + startCell.size.outerWidth;
        }
        var cell;
        for (var len = this.cells.length, i = index; i < len; i++) {
            cell = this.cells[i];
            cell.setPosition(cellX);
            cellX += cell.size.outerWidth;
            this.maxCellHeight = Math.max(cell.size.outerHeight, this.maxCellHeight);
        }
        // keep track of cellX for wrap-around
        this.slideableWidth = cellX;
        // contain cell target
        this._containCells();
    };
    /**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
    Flickity.prototype._sizeCells = function(cells) {
        for (var i = 0, len = cells.length; i < len; i++) {
            var cell = cells[i];
            cell.getSize();
        }
    };
    Flickity.prototype.getSize = function() {
        this.size = getSize(this.element);
        this.setCellAlign();
        this.cursorPosition = this.size.innerWidth * this.cellAlign;
    };
    var cellAlignShorthands = {
        // cell align, then based on origin side
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    Flickity.prototype.setCellAlign = function() {
        var shorthand = cellAlignShorthands[this.options.cellAlign];
        this.cellAlign = shorthand ? shorthand[this.originSide] : this.options.cellAlign;
    };
    Flickity.prototype.setContainerSize = function() {
        this.viewport.style.height = this.maxCellHeight + "px";
    };
    Flickity.prototype._getWrapShiftCells = function() {
        // only for wrap-around
        if (!this.options.wrapAround) {
            return;
        }
        // unshift previous cells
        this._unshiftCells(this.beforeShiftCells);
        this._unshiftCells(this.afterShiftCells);
        // get before cells
        // initial gap
        var gapX = this.cursorPosition;
        var cellIndex = this.cells.length - 1;
        this.beforeShiftCells = this._getGapCells(gapX, cellIndex, -1);
        // get after cells
        // ending gap between last cell and end of gallery viewport
        gapX = this.size.innerWidth - this.cursorPosition;
        // start cloning at first cell, working forwards
        this.afterShiftCells = this._getGapCells(gapX, 0, 1);
    };
    Flickity.prototype._getGapCells = function(gapX, cellIndex, increment) {
        // keep adding cells until the cover the initial gap
        var cells = [];
        while (gapX > 0) {
            var cell = this.cells[cellIndex];
            if (!cell) {
                break;
            }
            cells.push(cell);
            cellIndex += increment;
            gapX -= cell.size.outerWidth;
        }
        return cells;
    };
    // ----- contain ----- //
    // contain cell targets so no excess sliding
    Flickity.prototype._containCells = function() {
        if (!this.options.contain || this.options.wrapAround) {
            return;
        }
        // end limit
        var lastCell = this.getLastCell();
        var endMargin = this.options.rightToLeft ? "marginLeft" : "marginRight";
        var contentWidth = this.slideableWidth - lastCell.size[endMargin];
        var endLimit = contentWidth - this.size.innerWidth * (1 - this.cellAlign);
        // contain each cell target
        for (var i = 0, len = this.cells.length; i < len; i++) {
            var cell = this.cells[i];
            // reset default target
            cell.setDefaultTarget();
            cell.target = Math.max(cell.target, this.cursorPosition);
            cell.target = Math.min(cell.target, endLimit);
        }
    };
    // -----  ----- //
    /**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
    Flickity.prototype.dispatchEvent = function(type, event, args) {
        var emitArgs = [ event ].concat(args);
        this.emitEvent(type, emitArgs);
        if (jQuery && this.$element) {
            if (event) {
                // create jQuery event
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                // just trigger with type if no event available
                this.$element.trigger(type, args);
            }
        }
    };
    // -------------------------- select -------------------------- //
    /**
 * @param {Integer} index - index of the cell
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 */
    Flickity.prototype.select = function(index, isWrap) {
        if (!this.isActive) {
            return;
        }
        // wrap position so slider is within normal area
        if (this.options.wrapAround) {
            if (index < 0) {
                this.x -= this.slideableWidth;
            } else if (index >= this.cells.length) {
                this.x += this.slideableWidth;
            }
        }
        if (this.options.wrapAround || isWrap) {
            index = U.modulo(index, this.cells.length);
        }
        if (this.cells[index]) {
            this.selectedIndex = index;
            this.setSelectedCell();
            this.startAnimation();
            this.dispatchEvent("select");
        }
    };
    Flickity.prototype.previous = function(isWrap) {
        this.select(this.selectedIndex - 1, isWrap);
    };
    Flickity.prototype.next = function(isWrap) {
        this.select(this.selectedIndex + 1, isWrap);
    };
    Flickity.prototype.updatePrevNextButtons = function() {
        if (this.prevButton) {
            this.prevButton.update();
        }
        if (this.nextButton) {
            this.nextButton.update();
        }
    };
    Flickity.prototype.setSelectedCell = function() {
        this._removeSelectedCellClass();
        this.selectedCell = this.cells[this.selectedIndex];
        classie.add(this.selectedCell.element, "is-selected");
    };
    Flickity.prototype._removeSelectedCellClass = function() {
        if (this.selectedCell) {
            classie.remove(this.selectedCell.element, "is-selected");
        }
    };
    // on button clicks and ui changes
    // stop player and stop free scrolling
    Flickity.prototype.uiChange = function() {
        this.player.stop();
        delete this.isFreeScrolling;
    };
    // -------------------------- images -------------------------- //
    // TODO move out this repo to avoid problems with imagesLoaded dependency
    Flickity.prototype.imagesLoaded = function() {
        if (!this.options.imagesLoaded || !imagesLoaded) {
            return;
        }
        var _this = this;
        function onImagesLoadedProgress(instance, image) {
            // check if image is a cell
            var cell = _this.getCell(image.img);
            // otherwise get its parents
            var cellElem = cell.element || U.getParent(image.img, ".flickity-slider > *");
            _this.cellSizeChange(cellElem);
        }
        imagesLoaded(this.slider).on("progress", onImagesLoadedProgress);
    };
    // -------------------------- get cells -------------------------- //
    /**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
    Flickity.prototype.getCell = function(elem) {
        // loop through cells to get the one that matches
        for (var i = 0, len = this.cells.length; i < len; i++) {
            var cell = this.cells[i];
            if (cell.element == elem) {
                return cell;
            }
        }
    };
    /**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
    Flickity.prototype.getCells = function(elems) {
        elems = U.makeArray(elems);
        var cells = [];
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems[i];
            var cell = this.getCell(elem);
            if (cell) {
                cells.push(cell);
            }
        }
        return cells;
    };
    // -------------------------- events -------------------------- //
    // ----- resize ----- //
    Flickity.prototype.onresize = function() {
        this.watchCSS();
        this.resize();
    };
    U.debounceMethod(Flickity, "onresize", 150);
    Flickity.prototype.resize = function() {
        if (!this.isActive) {
            return;
        }
        this.getSize();
        // wrap values
        if (this.options.wrapAround) {
            this.x = U.modulo(this.x, this.slideableWidth);
        }
        this.positionCells();
        this._getWrapShiftCells();
        this.setContainerSize();
        this.positionSliderAtSelected();
    };
    var supportsConditionalCSS = Flickity.supportsConditionalCSS = function() {
        var supports;
        return function checkSupport() {
            if (supports !== undefined) {
                return supports;
            }
            if (!getComputedStyle) {
                supports = false;
                return;
            }
            // style body's :after and check that
            var style = document.createElement("style");
            var cssText = document.createTextNode('body:after { content: "foo"; display: none; }');
            style.appendChild(cssText);
            document.head.appendChild(style);
            var afterContent = getComputedStyle(document.body, ":after").content;
            // check if able to get :after content
            supports = afterContent.indexOf("foo") != -1;
            document.head.removeChild(style);
            return supports;
        };
    }();
    // watches the :after property, activates/deactivates
    Flickity.prototype.watchCSS = function() {
        var watchOption = this.options.watchCSS;
        if (!watchOption) {
            return;
        }
        var supports = supportsConditionalCSS();
        if (!supports) {
            // activate if watch option is fallbackOn
            var method = watchOption == "fallbackOn" ? "activate" : "deactivate";
            this[method]();
            return;
        }
        var afterContent = getComputedStyle(this.element, ":after").content;
        // activate if :after { content: 'flickity' }
        if (afterContent.indexOf("flickity") != -1) {
            this.activate();
        } else {
            this.deactivate();
        }
    };
    // ----- keydown ----- //
    // go previous/next if left/right keys pressed
    Flickity.prototype.onkeydown = function(event) {
        // only work if element is in focus
        if (!this.options.accessibility || document.activeElement && document.activeElement != this.element) {
            return;
        }
        if (event.keyCode == 37) {
            // go left
            var leftMethod = this.options.rightToLeft ? "next" : "previous";
            this.uiChange();
            this[leftMethod]();
        } else if (event.keyCode == 39) {
            // go right
            var rightMethod = this.options.rightToLeft ? "previous" : "next";
            this.uiChange();
            this[rightMethod]();
        }
    };
    // ----- mouseenter/leave ----- //
    // pause auto-play on hover
    Flickity.prototype.onmouseenter = function() {
        this.player.pause();
        eventie.bind(this.element, "mouseleave", this);
    };
    // resume auto-play on hover off
    Flickity.prototype.onmouseleave = function() {
        this.player.unpause();
        eventie.unbind(this.element, "mouseleave", this);
    };
    // -------------------------- destroy -------------------------- //
    // deactivate all Flickity functionality, but keep stuff available
    Flickity.prototype.deactivate = function() {
        if (!this.isActive) {
            return;
        }
        classie.remove(this.element, "flickity-enabled");
        // destroy cells
        for (var i = 0, len = this.cells.length; i < len; i++) {
            var cell = this.cells[i];
            cell.destroy();
        }
        this._removeSelectedCellClass();
        this.element.removeChild(this.viewport);
        // move child elements back into element
        moveChildren(this.slider, this.element);
        // deactivate prev/next buttons, page dots; stop player
        if (this.prevButton) {
            this.prevButton.deactivate();
        }
        if (this.nextButton) {
            this.nextButton.deactivate();
        }
        if (this.pageDots) {
            this.pageDots.deactivate();
        }
        this.player.stop();
        // unbind events
        this.unbindDrag();
        if (this.options.accessibility) {
            this.element.removeAttribute("tabIndex");
            eventie.unbind(this.element, "keydown", this);
        }
        // set flags
        this.isActive = false;
        this.isAnimating = false;
    };
    Flickity.prototype.destroy = function() {
        this.deactivate();
        if (this.options.resizeBound || this.options.watch) {
            eventie.unbind(window, "resize", this);
        }
        delete this.element.flickityGUID;
        delete instances[this.guid];
    };
    // -------------------------- prototype -------------------------- //
    U.extend(Flickity.prototype, dragPrototype);
    U.extend(Flickity.prototype, animatePrototype);
    U.extend(Flickity.prototype, cellChangePrototype);
    // -------------------------- extras -------------------------- //
    /**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
    Flickity.data = function(elem) {
        elem = U.getQueryElement(elem);
        var id = elem && elem.flickityGUID;
        return id && instances[id];
    };
    U.htmlInit(Flickity, "flickity");
    if (jQuery && jQuery.bridget) {
        jQuery.bridget("flickity", Flickity);
    }
    // make classes accessible
    Flickity.Cell = Cell;
    Flickity.PrevNextButton = PrevNextButton;
    Flickity.PageDots = PageDots;
    Flickity.Player = Player;
    return Flickity;
});

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
(function() {
    /**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
    function EventEmitter() {}
    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;
    /**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }
        return -1;
    }
    /**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }
    /**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;
        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (typeof evt === "object") {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        } else {
            response = events[evt] || (events[evt] = []);
        }
        return response;
    };
    /**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;
        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }
        return flatListeners;
    };
    /**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;
        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }
        return response || listeners;
    };
    /**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === "object";
        var key;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }
        return this;
    };
    /**
	 * Alias of addListener
	 */
    proto.on = alias("addListener");
    /**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };
    /**
	 * Alias of addOnceListener.
	 */
    proto.once = alias("addOnceListener");
    /**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };
    /**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };
    /**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);
                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }
        return this;
    };
    /**
	 * Alias of removeListener
	 */
    proto.off = alias("removeListener");
    /**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };
    /**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };
    /**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;
        // If evt is an object then pass each of it's properties to this method
        if (typeof evt === "object" && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === "function") {
                        single.call(this, i, value);
                    } else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        } else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }
        return this;
    };
    /**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;
        // Remove different things depending on the state of evt
        if (type === "string") {
            // Remove all listeners for the specified event
            delete events[evt];
        } else if (type === "object") {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        } else {
            // Remove all listeners in all events
            delete this._events;
        }
        return this;
    };
    /**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
    proto.removeAllListeners = alias("removeEvent");
    /**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;
                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];
                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }
                    response = listener.listener.apply(this, args || []);
                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }
        return this;
    };
    /**
	 * Alias of emitEvent
	 */
    proto.trigger = alias("emitEvent");
    /**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };
    /**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };
    /**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty("_onceReturnValue")) {
            return this._onceReturnValue;
        } else {
            return true;
        }
    };
    /**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };
    /**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };
    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === "function" && define.amd) {
        define("eventEmitter/EventEmitter", [], function() {
            return EventEmitter;
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = EventEmitter;
    } else {
        this.EventEmitter = EventEmitter;
    }
}).call(this);

/*!
 * eventie v1.0.4
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */
/*jshint browser: true, undef: true, unused: true */
/*global define: false */
(function(window) {
    var docElem = document.documentElement;
    var bind = function() {};
    function getIEEvent(obj) {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement || obj;
        return event;
    }
    if (docElem.addEventListener) {
        bind = function(obj, type, fn) {
            obj.addEventListener(type, fn, false);
        };
    } else if (docElem.attachEvent) {
        bind = function(obj, type, fn) {
            obj[type + fn] = fn.handleEvent ? function() {
                var event = getIEEvent(obj);
                fn.handleEvent.call(fn, event);
            } : function() {
                var event = getIEEvent(obj);
                fn.call(obj, event);
            };
            obj.attachEvent("on" + type, obj[type + fn]);
        };
    }
    var unbind = function() {};
    if (docElem.removeEventListener) {
        unbind = function(obj, type, fn) {
            obj.removeEventListener(type, fn, false);
        };
    } else if (docElem.detachEvent) {
        unbind = function(obj, type, fn) {
            obj.detachEvent("on" + type, obj[type + fn]);
            try {
                delete obj[type + fn];
            } catch (err) {
                // can't delete window object properties
                obj[type + fn] = undefined;
            }
        };
    }
    var eventie = {
        bind: bind,
        unbind: unbind
    };
    // transport
    if (typeof define === "function" && define.amd) {
        // AMD
        define("eventie/eventie", eventie);
    } else {
        // browser global
        window.eventie = eventie;
    }
})(this);

/*!
 * imagesLoaded v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(window, factory) {
    // universal module definition
    /*global define: false, module: false, require: false */
    if (typeof define === "function" && define.amd) {
        // AMD
        define([ "eventEmitter/EventEmitter", "eventie/eventie" ], function(EventEmitter, eventie) {
            return factory(window, EventEmitter, eventie);
        });
    } else if (typeof exports === "object") {
        // CommonJS
        module.exports = factory(window, require("wolfy87-eventemitter"), require("eventie"));
    } else {
        // browser global
        window.imagesLoaded = factory(window, window.EventEmitter, window.eventie);
    }
})(window, // --------------------------  factory -------------------------- //
function factory(window, EventEmitter, eventie) {
    var $ = window.jQuery;
    var console = window.console;
    var hasConsole = typeof console !== "undefined";
    // -------------------------- helpers -------------------------- //
    // extend objects
    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }
    var objToString = Object.prototype.toString;
    function isArray(obj) {
        return objToString.call(obj) === "[object Array]";
    }
    // turn element or nodeList into an array
    function makeArray(obj) {
        var ary = [];
        if (isArray(obj)) {
            // use object if already an array
            ary = obj;
        } else if (typeof obj.length === "number") {
            // convert nodeList to array
            for (var i = 0, len = obj.length; i < len; i++) {
                ary.push(obj[i]);
            }
        } else {
            // array of single index
            ary.push(obj);
        }
        return ary;
    }
    // -------------------------- imagesLoaded -------------------------- //
    /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
    function ImagesLoaded(elem, options, onAlways) {
        // coerce ImagesLoaded() without new, to be new ImagesLoaded()
        if (!(this instanceof ImagesLoaded)) {
            return new ImagesLoaded(elem, options);
        }
        // use elem as selector string
        if (typeof elem === "string") {
            elem = document.querySelectorAll(elem);
        }
        this.elements = makeArray(elem);
        this.options = extend({}, this.options);
        if (typeof options === "function") {
            onAlways = options;
        } else {
            extend(this.options, options);
        }
        if (onAlways) {
            this.on("always", onAlways);
        }
        this.getImages();
        if ($) {
            // add jQuery Deferred object
            this.jqDeferred = new $.Deferred();
        }
        // HACK check async to allow time to bind listeners
        var _this = this;
        setTimeout(function() {
            _this.check();
        });
    }
    ImagesLoaded.prototype = new EventEmitter();
    ImagesLoaded.prototype.options = {};
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        // filter & find items if we have an item selector
        for (var i = 0, len = this.elements.length; i < len; i++) {
            var elem = this.elements[i];
            // filter siblings
            if (elem.nodeName === "IMG") {
                this.addImage(elem);
            }
            // find children
            // no non-element nodes, #143
            var nodeType = elem.nodeType;
            if (!nodeType || !(nodeType === 1 || nodeType === 9 || nodeType === 11)) {
                continue;
            }
            var childElems = elem.querySelectorAll("img");
            // concat childElems to filterFound array
            for (var j = 0, jLen = childElems.length; j < jLen; j++) {
                var img = childElems[j];
                this.addImage(img);
            }
        }
    };
    /**
   * @param {Image} img
   */
    ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.check = function() {
        var _this = this;
        var checkedCount = 0;
        var length = this.images.length;
        this.hasAnyBroken = false;
        // complete if no images
        if (!length) {
            this.complete();
            return;
        }
        function onConfirm(image, message) {
            if (_this.options.debug && hasConsole) {
                console.log("confirm", image, message);
            }
            _this.progress(image);
            checkedCount++;
            if (checkedCount === length) {
                _this.complete();
            }
            return true;
        }
        for (var i = 0; i < length; i++) {
            var loadingImage = this.images[i];
            loadingImage.on("confirm", onConfirm);
            loadingImage.check();
        }
    };
    ImagesLoaded.prototype.progress = function(image) {
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        // HACK - Chrome triggers event before object properties have changed. #83
        var _this = this;
        setTimeout(function() {
            _this.emit("progress", _this, image);
            if (_this.jqDeferred && _this.jqDeferred.notify) {
                _this.jqDeferred.notify(_this, image);
            }
        });
    };
    ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = true;
        var _this = this;
        // HACK - another setTimeout so that confirm happens after progress
        setTimeout(function() {
            _this.emit(eventName, _this);
            _this.emit("always", _this);
            if (_this.jqDeferred) {
                var jqMethod = _this.hasAnyBroken ? "reject" : "resolve";
                _this.jqDeferred[jqMethod](_this);
            }
        });
    };
    // -------------------------- jquery -------------------------- //
    if ($) {
        $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this));
        };
    }
    // --------------------------  -------------------------- //
    function LoadingImage(img) {
        this.img = img;
    }
    LoadingImage.prototype = new EventEmitter();
    LoadingImage.prototype.check = function() {
        // first check cached any previous images that have same src
        var resource = cache[this.img.src] || new Resource(this.img.src);
        if (resource.isConfirmed) {
            this.confirm(resource.isLoaded, "cached was confirmed");
            return;
        }
        // If complete is true and browser supports natural sizes,
        // try to check for image status manually.
        if (this.img.complete && this.img.naturalWidth !== undefined) {
            // report based on naturalWidth
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            return;
        }
        // If none of the checks above matched, simulate loading on detached element.
        var _this = this;
        resource.on("confirm", function(resrc, message) {
            _this.confirm(resrc.isLoaded, message);
            return true;
        });
        resource.check();
    };
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emit("confirm", this, message);
    };
    // -------------------------- Resource -------------------------- //
    // Resource checks each src, only once
    // separate class from LoadingImage to prevent memory leaks. See #115
    var cache = {};
    function Resource(src) {
        this.src = src;
        // add to cache
        cache[src] = this;
    }
    Resource.prototype = new EventEmitter();
    Resource.prototype.check = function() {
        // only trigger checking once
        if (this.isChecked) {
            return;
        }
        // simulate loading on detached element
        var proxyImage = new Image();
        eventie.bind(proxyImage, "load", this);
        eventie.bind(proxyImage, "error", this);
        proxyImage.src = this.src;
        // set flag
        this.isChecked = true;
    };
    // ----- events ----- //
    // trigger specified handler for event type
    Resource.prototype.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    Resource.prototype.onload = function(event) {
        this.confirm(true, "onload");
        this.unbindProxyEvents(event);
    };
    Resource.prototype.onerror = function(event) {
        this.confirm(false, "onerror");
        this.unbindProxyEvents(event);
    };
    // ----- confirm ----- //
    Resource.prototype.confirm = function(isLoaded, message) {
        this.isConfirmed = true;
        this.isLoaded = isLoaded;
        this.emit("confirm", this, message);
    };
    Resource.prototype.unbindProxyEvents = function(event) {
        eventie.unbind(event.target, "load", this);
        eventie.unbind(event.target, "error", this);
    };
    // -----  ----- //
    return ImagesLoaded;
});

/*! PhotoSwipe Default UI - 4.0.8 - 2015-05-21
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.PhotoSwipeUI_Default = factory();
    }
})(this, function() {
    "use strict";
    var PhotoSwipeUI_Default = function(pswp, framework) {
        var ui = this;
        var _overlayUIUpdated = false, _controlsVisible = true, _fullscrenAPI, _controls, _captionContainer, _fakeCaptionContainer, _indexIndicator, _shareButton, _shareModal, _shareModalHidden = true, _initalCloseOnScrollValue, _isIdle, _listen, _loadingIndicator, _loadingIndicatorHidden, _loadingIndicatorTimeout, _galleryHasOneSlide, _options, _defaultUIOptions = {
            barsSize: {
                top: 44,
                bottom: "auto"
            },
            closeElClasses: [ "item", "caption", "zoom-wrap", "ui", "top-bar" ],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            // 2s
            addCaptionHTMLFn: function(item, captionEl) {
                if (!item.title) {
                    captionEl.children[0].innerHTML = "";
                    return false;
                }
                captionEl.children[0].innerHTML = item.title;
                return true;
            },
            closeEl: true,
            captionEl: true,
            fullscreenEl: true,
            zoomEl: true,
            shareEl: true,
            counterEl: true,
            arrowEl: true,
            preloaderEl: true,
            tapToClose: false,
            tapToToggleControls: true,
            clickToCloseNonZoomable: true,
            shareButtons: [ {
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/" + "?url={{url}}&media={{image_url}}&description={{text}}"
            }, {
                id: "download",
                label: "Download image",
                url: "{{raw_image_url}}",
                download: true
            } ],
            getImageURLForShare: function() {
                return pswp.currItem.src || "";
            },
            getPageURLForShare: function() {
                return window.location.href;
            },
            getTextForShare: function() {
                return pswp.currItem.title || "";
            },
            indexIndicatorSep: " / "
        }, _blockControlsTap, _blockControlsTapTimeout;
        var _onControlsTap = function(e) {
            if (_blockControlsTap) {
                return true;
            }
            e = e || window.event;
            if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
                // reset idle timer
                _onIdleMouseMove();
            }
            var target = e.target || e.srcElement, uiElement, clickedClass = target.className, found;
            for (var i = 0; i < _uiElements.length; i++) {
                uiElement = _uiElements[i];
                if (uiElement.onTap && clickedClass.indexOf("pswp__" + uiElement.name) > -1) {
                    uiElement.onTap();
                    found = true;
                }
            }
            if (found) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                _blockControlsTap = true;
                // Some versions of Android don't prevent ghost click event 
                // when preventDefault() was called on touchstart and/or touchend.
                // 
                // This happens on v4.3, 4.2, 4.1, 
                // older versions strangely work correctly, 
                // but just in case we add delay on all of them)	
                var tapDelay = framework.features.isOldAndroid ? 600 : 30;
                _blockControlsTapTimeout = setTimeout(function() {
                    _blockControlsTap = false;
                }, tapDelay);
            }
        }, _fitControlsInViewport = function() {
            return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
        }, _togglePswpClass = function(el, cName, add) {
            framework[(add ? "add" : "remove") + "Class"](el, "pswp__" + cName);
        }, // add class when there is just one item in the gallery
        // (by default it hides left/right arrows and 1ofX counter)
        _countNumItems = function() {
            var hasOneSlide = _options.getNumItemsFn() === 1;
            if (hasOneSlide !== _galleryHasOneSlide) {
                _togglePswpClass(_controls, "ui--one-slide", hasOneSlide);
                _galleryHasOneSlide = hasOneSlide;
            }
        }, _toggleShareModalClass = function() {
            _togglePswpClass(_shareModal, "share-modal--hidden", _shareModalHidden);
        }, _toggleShareModal = function() {
            _shareModalHidden = !_shareModalHidden;
            if (!_shareModalHidden) {
                _toggleShareModalClass();
                setTimeout(function() {
                    if (!_shareModalHidden) {
                        framework.addClass(_shareModal, "pswp__share-modal--fade-in");
                    }
                }, 30);
            } else {
                framework.removeClass(_shareModal, "pswp__share-modal--fade-in");
                setTimeout(function() {
                    if (_shareModalHidden) {
                        _toggleShareModalClass();
                    }
                }, 300);
            }
            if (!_shareModalHidden) {
                _updateShareURLs();
            }
            return false;
        }, _openWindowPopup = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            pswp.shout("shareLinkClick", e, target);
            if (!target.href) {
                return false;
            }
            if (target.hasAttribute("download")) {
                return true;
            }
            window.open(target.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no," + "location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100));
            if (!_shareModalHidden) {
                _toggleShareModal();
            }
            return false;
        }, _updateShareURLs = function() {
            var shareButtonOut = "", shareButtonData, shareURL, image_url, page_url, share_text;
            for (var i = 0; i < _options.shareButtons.length; i++) {
                shareButtonData = _options.shareButtons[i];
                image_url = _options.getImageURLForShare(shareButtonData);
                page_url = _options.getPageURLForShare(shareButtonData);
                share_text = _options.getTextForShare(shareButtonData);
                shareURL = shareButtonData.url.replace("{{url}}", encodeURIComponent(page_url)).replace("{{image_url}}", encodeURIComponent(image_url)).replace("{{raw_image_url}}", image_url).replace("{{text}}", encodeURIComponent(share_text));
                shareButtonOut += '<a href="' + shareURL + '" target="_blank" ' + 'class="pswp__share--' + shareButtonData.id + '"' + (shareButtonData.download ? "download" : "") + ">" + shareButtonData.label + "</a>";
                if (_options.parseShareButtonOut) {
                    shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
                }
            }
            _shareModal.children[0].innerHTML = shareButtonOut;
            _shareModal.children[0].onclick = _openWindowPopup;
        }, _hasCloseClass = function(target) {
            for (var i = 0; i < _options.closeElClasses.length; i++) {
                if (framework.hasClass(target, "pswp__" + _options.closeElClasses[i])) {
                    return true;
                }
            }
        }, _idleInterval, _idleTimer, _idleIncrement = 0, _onIdleMouseMove = function() {
            clearTimeout(_idleTimer);
            _idleIncrement = 0;
            if (_isIdle) {
                ui.setIdle(false);
            }
        }, _onMouseLeaveWindow = function(e) {
            e = e ? e : window.event;
            var from = e.relatedTarget || e.toElement;
            if (!from || from.nodeName === "HTML") {
                clearTimeout(_idleTimer);
                _idleTimer = setTimeout(function() {
                    ui.setIdle(true);
                }, _options.timeToIdleOutside);
            }
        }, _setupFullscreenAPI = function() {
            if (_options.fullscreenEl) {
                if (!_fullscrenAPI) {
                    _fullscrenAPI = ui.getFullscreenAPI();
                }
                if (_fullscrenAPI) {
                    framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
                    ui.updateFullscreen();
                    framework.addClass(pswp.template, "pswp--supports-fs");
                } else {
                    framework.removeClass(pswp.template, "pswp--supports-fs");
                }
            }
        }, _setupLoadingIndicator = function() {
            // Setup loading indicator
            if (_options.preloaderEl) {
                _toggleLoadingIndicator(true);
                _listen("beforeChange", function() {
                    clearTimeout(_loadingIndicatorTimeout);
                    // display loading indicator with delay
                    _loadingIndicatorTimeout = setTimeout(function() {
                        if (pswp.currItem && pswp.currItem.loading) {
                            if (!pswp.allowProgressiveImg() || pswp.currItem.img && !pswp.currItem.img.naturalWidth) {
                                // show preloader if progressive loading is not enabled, 
                                // or image width is not defined yet (because of slow connection)
                                _toggleLoadingIndicator(false);
                            }
                        } else {
                            _toggleLoadingIndicator(true);
                        }
                    }, _options.loadingIndicatorDelay);
                });
                _listen("imageLoadComplete", function(index, item) {
                    if (pswp.currItem === item) {
                        _toggleLoadingIndicator(true);
                    }
                });
            }
        }, _toggleLoadingIndicator = function(hide) {
            if (_loadingIndicatorHidden !== hide) {
                _togglePswpClass(_loadingIndicator, "preloader--active", !hide);
                _loadingIndicatorHidden = hide;
            }
        }, _applyNavBarGaps = function(item) {
            var gap = item.vGap;
            if (_fitControlsInViewport()) {
                var bars = _options.barsSize;
                if (_options.captionEl && bars.bottom === "auto") {
                    if (!_fakeCaptionContainer) {
                        _fakeCaptionContainer = framework.createEl("pswp__caption pswp__caption--fake");
                        _fakeCaptionContainer.appendChild(framework.createEl("pswp__caption__center"));
                        _controls.insertBefore(_fakeCaptionContainer, _captionContainer);
                        framework.addClass(_controls, "pswp__ui--fit");
                    }
                    if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {
                        var captionSize = _fakeCaptionContainer.clientHeight;
                        gap.bottom = parseInt(captionSize, 10) || 44;
                    } else {
                        gap.bottom = bars.top;
                    }
                } else {
                    gap.bottom = bars.bottom === "auto" ? 0 : bars.bottom;
                }
                // height of top bar is static, no need to calculate it
                gap.top = bars.top;
            } else {
                gap.top = gap.bottom = 0;
            }
        }, _setupIdle = function() {
            // Hide controls when mouse is used
            if (_options.timeToIdle) {
                _listen("mouseUsed", function() {
                    framework.bind(document, "mousemove", _onIdleMouseMove);
                    framework.bind(document, "mouseout", _onMouseLeaveWindow);
                    _idleInterval = setInterval(function() {
                        _idleIncrement++;
                        if (_idleIncrement === 2) {
                            ui.setIdle(true);
                        }
                    }, _options.timeToIdle / 2);
                });
            }
        }, _setupHidingControlsDuringGestures = function() {
            // Hide controls on vertical drag
            _listen("onVerticalDrag", function(now) {
                if (_controlsVisible && now < .95) {
                    ui.hideControls();
                } else if (!_controlsVisible && now >= .95) {
                    ui.showControls();
                }
            });
            // Hide controls when pinching to close
            var pinchControlsHidden;
            _listen("onPinchClose", function(now) {
                if (_controlsVisible && now < .9) {
                    ui.hideControls();
                    pinchControlsHidden = true;
                } else if (pinchControlsHidden && !_controlsVisible && now > .9) {
                    ui.showControls();
                }
            });
            _listen("zoomGestureEnded", function() {
                pinchControlsHidden = false;
                if (pinchControlsHidden && !_controlsVisible) {
                    ui.showControls();
                }
            });
        };
        var _uiElements = [ {
            name: "caption",
            option: "captionEl",
            onInit: function(el) {
                _captionContainer = el;
            }
        }, {
            name: "share-modal",
            option: "shareEl",
            onInit: function(el) {
                _shareModal = el;
            },
            onTap: function() {
                _toggleShareModal();
            }
        }, {
            name: "button--share",
            option: "shareEl",
            onInit: function(el) {
                _shareButton = el;
            },
            onTap: function() {
                _toggleShareModal();
            }
        }, {
            name: "button--zoom",
            option: "zoomEl",
            onTap: pswp.toggleDesktopZoom
        }, {
            name: "counter",
            option: "counterEl",
            onInit: function(el) {
                _indexIndicator = el;
            }
        }, {
            name: "button--close",
            option: "closeEl",
            onTap: pswp.close
        }, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: pswp.prev
        }, {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: pswp.next
        }, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
                if (_fullscrenAPI.isFullscreen()) {
                    _fullscrenAPI.exit();
                } else {
                    _fullscrenAPI.enter();
                }
            }
        }, {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(el) {
                _loadingIndicator = el;
            }
        } ];
        var _setupUIElements = function() {
            var item, classAttr, uiElement;
            var loopThroughChildElements = function(sChildren) {
                if (!sChildren) {
                    return;
                }
                var l = sChildren.length;
                for (var i = 0; i < l; i++) {
                    item = sChildren[i];
                    classAttr = item.className;
                    for (var a = 0; a < _uiElements.length; a++) {
                        uiElement = _uiElements[a];
                        if (classAttr.indexOf("pswp__" + uiElement.name) > -1) {
                            if (_options[uiElement.option]) {
                                // if element is not disabled from options
                                framework.removeClass(item, "pswp__element--disabled");
                                if (uiElement.onInit) {
                                    uiElement.onInit(item);
                                }
                            } else {
                                framework.addClass(item, "pswp__element--disabled");
                            }
                        }
                    }
                }
            };
            loopThroughChildElements(_controls.children);
            var topBar = framework.getChildByClass(_controls, "pswp__top-bar");
            if (topBar) {
                loopThroughChildElements(topBar.children);
            }
        };
        ui.init = function() {
            // extend options
            framework.extend(pswp.options, _defaultUIOptions, true);
            // create local link for fast access
            _options = pswp.options;
            // find pswp__ui element
            _controls = framework.getChildByClass(pswp.scrollWrap, "pswp__ui");
            // create local link
            _listen = pswp.listen;
            _setupHidingControlsDuringGestures();
            // update controls when slides change
            _listen("beforeChange", ui.update);
            // toggle zoom on double-tap
            _listen("doubleTap", function(point) {
                var initialZoomLevel = pswp.currItem.initialZoomLevel;
                if (pswp.getZoomLevel() !== initialZoomLevel) {
                    pswp.zoomTo(initialZoomLevel, point, 333);
                } else {
                    pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
                }
            });
            // Allow text selection in caption
            _listen("preventDragEvent", function(e, isDown, preventObj) {
                var t = e.target || e.srcElement;
                if (t && t.className && e.type.indexOf("mouse") > -1 && (t.className.indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(t.tagName))) {
                    preventObj.prevent = false;
                }
            });
            // bind events for UI
            _listen("bindEvents", function() {
                framework.bind(_controls, "pswpTap click", _onControlsTap);
                framework.bind(pswp.scrollWrap, "pswpTap", ui.onGlobalTap);
                if (!pswp.likelyTouchDevice) {
                    framework.bind(pswp.scrollWrap, "mouseover", ui.onMouseOver);
                }
            });
            // unbind events for UI
            _listen("unbindEvents", function() {
                if (!_shareModalHidden) {
                    _toggleShareModal();
                }
                if (_idleInterval) {
                    clearInterval(_idleInterval);
                }
                framework.unbind(document, "mouseout", _onMouseLeaveWindow);
                framework.unbind(document, "mousemove", _onIdleMouseMove);
                framework.unbind(_controls, "pswpTap click", _onControlsTap);
                framework.unbind(pswp.scrollWrap, "pswpTap", ui.onGlobalTap);
                framework.unbind(pswp.scrollWrap, "mouseover", ui.onMouseOver);
                if (_fullscrenAPI) {
                    framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
                    if (_fullscrenAPI.isFullscreen()) {
                        _options.hideAnimationDuration = 0;
                        _fullscrenAPI.exit();
                    }
                    _fullscrenAPI = null;
                }
            });
            // clean up things when gallery is destroyed
            _listen("destroy", function() {
                if (_options.captionEl) {
                    if (_fakeCaptionContainer) {
                        _controls.removeChild(_fakeCaptionContainer);
                    }
                    framework.removeClass(_captionContainer, "pswp__caption--empty");
                }
                if (_shareModal) {
                    _shareModal.children[0].onclick = null;
                }
                framework.removeClass(_controls, "pswp__ui--over-close");
                framework.addClass(_controls, "pswp__ui--hidden");
                ui.setIdle(false);
            });
            if (!_options.showAnimationDuration) {
                framework.removeClass(_controls, "pswp__ui--hidden");
            }
            _listen("initialZoomIn", function() {
                if (_options.showAnimationDuration) {
                    framework.removeClass(_controls, "pswp__ui--hidden");
                }
            });
            _listen("initialZoomOut", function() {
                framework.addClass(_controls, "pswp__ui--hidden");
            });
            _listen("parseVerticalMargin", _applyNavBarGaps);
            _setupUIElements();
            if (_options.shareEl && _shareButton && _shareModal) {
                _shareModalHidden = true;
            }
            _countNumItems();
            _setupIdle();
            _setupFullscreenAPI();
            _setupLoadingIndicator();
        };
        ui.setIdle = function(isIdle) {
            _isIdle = isIdle;
            _togglePswpClass(_controls, "ui--idle", isIdle);
        };
        ui.update = function() {
            // Don't update UI if it's hidden
            if (_controlsVisible && pswp.currItem) {
                ui.updateIndexIndicator();
                if (_options.captionEl) {
                    _options.addCaptionHTMLFn(pswp.currItem, _captionContainer);
                    _togglePswpClass(_captionContainer, "caption--empty", !pswp.currItem.title);
                }
                _overlayUIUpdated = true;
            } else {
                _overlayUIUpdated = false;
            }
            if (!_shareModalHidden) {
                _toggleShareModal();
            }
            _countNumItems();
        };
        ui.updateFullscreen = function(e) {
            if (e) {
                // some browsers change window scroll position during the fullscreen
                // so PhotoSwipe updates it just in case
                setTimeout(function() {
                    pswp.setScrollOffset(0, framework.getScrollY());
                }, 50);
            }
            // toogle pswp--fs class on root element
            framework[(_fullscrenAPI.isFullscreen() ? "add" : "remove") + "Class"](pswp.template, "pswp--fs");
        };
        ui.updateIndexIndicator = function() {
            if (_options.counterEl) {
                _indexIndicator.innerHTML = pswp.getCurrentIndex() + 1 + _options.indexIndicatorSep + _options.getNumItemsFn();
            }
        };
        ui.onGlobalTap = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (_blockControlsTap) {
                return;
            }
            if (e.detail && e.detail.pointerType === "mouse") {
                // close gallery if clicked outside of the image
                if (_hasCloseClass(target)) {
                    pswp.close();
                    return;
                }
                if (framework.hasClass(target, "pswp__img")) {
                    if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
                        if (_options.clickToCloseNonZoomable) {
                            pswp.close();
                        }
                    } else {
                        pswp.toggleDesktopZoom(e.detail.releasePoint);
                    }
                }
            } else {
                // tap anywhere (except buttons) to toggle visibility of controls
                if (_options.tapToToggleControls) {
                    if (_controlsVisible) {
                        ui.hideControls();
                    } else {
                        ui.showControls();
                    }
                }
                // tap to close gallery
                if (_options.tapToClose && (framework.hasClass(target, "pswp__img") || _hasCloseClass(target))) {
                    pswp.close();
                    return;
                }
            }
        };
        ui.onMouseOver = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            // add class when mouse is over an element that should close the gallery
            _togglePswpClass(_controls, "ui--over-close", _hasCloseClass(target));
        };
        ui.hideControls = function() {
            framework.addClass(_controls, "pswp__ui--hidden");
            _controlsVisible = false;
        };
        ui.showControls = function() {
            _controlsVisible = true;
            if (!_overlayUIUpdated) {
                ui.update();
            }
            framework.removeClass(_controls, "pswp__ui--hidden");
        };
        ui.supportsFullscreen = function() {
            var d = document;
            return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
        };
        ui.getFullscreenAPI = function() {
            var dE = document.documentElement, api, tF = "fullscreenchange";
            if (dE.requestFullscreen) {
                api = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: tF
                };
            } else if (dE.mozRequestFullScreen) {
                api = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + tF
                };
            } else if (dE.webkitRequestFullscreen) {
                api = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + tF
                };
            } else if (dE.msRequestFullscreen) {
                api = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                };
            }
            if (api) {
                api.enter = function() {
                    // disable close-on-scroll in fullscreen
                    _initalCloseOnScrollValue = _options.closeOnScroll;
                    _options.closeOnScroll = false;
                    if (this.enterK === "webkitRequestFullscreen") {
                        pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
                    } else {
                        return pswp.template[this.enterK]();
                    }
                };
                api.exit = function() {
                    _options.closeOnScroll = _initalCloseOnScrollValue;
                    return document[this.exitK]();
                };
                api.isFullscreen = function() {
                    return document[this.elementK];
                };
            }
            return api;
        };
    };
    return PhotoSwipeUI_Default;
});

/*! PhotoSwipe - v4.0.8 - 2015-05-21
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.PhotoSwipe = factory();
    }
})(this, function() {
    "use strict";
    var PhotoSwipe = function(template, UiClass, items, options) {
        /*>>framework-bridge*/
        /**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
        var framework = {
            features: null,
            bind: function(target, type, listener, unbind) {
                var methodName = (unbind ? "remove" : "add") + "EventListener";
                type = type.split(" ");
                for (var i = 0; i < type.length; i++) {
                    if (type[i]) {
                        target[methodName](type[i], listener, false);
                    }
                }
            },
            isArray: function(obj) {
                return obj instanceof Array;
            },
            createEl: function(classes, tag) {
                var el = document.createElement(tag || "div");
                if (classes) {
                    el.className = classes;
                }
                return el;
            },
            getScrollY: function() {
                var yOffset = window.pageYOffset;
                return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
            },
            unbind: function(target, type, listener) {
                framework.bind(target, type, listener, true);
            },
            removeClass: function(el, className) {
                var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
                el.className = el.className.replace(reg, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            },
            addClass: function(el, className) {
                if (!framework.hasClass(el, className)) {
                    el.className += (el.className ? " " : "") + className;
                }
            },
            hasClass: function(el, className) {
                return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
            },
            getChildByClass: function(parentEl, childClassName) {
                var node = parentEl.firstChild;
                while (node) {
                    if (framework.hasClass(node, childClassName)) {
                        return node;
                    }
                    node = node.nextSibling;
                }
            },
            arraySearch: function(array, value, key) {
                var i = array.length;
                while (i--) {
                    if (array[i][key] === value) {
                        return i;
                    }
                }
                return -1;
            },
            extend: function(o1, o2, preventOverwrite) {
                for (var prop in o2) {
                    if (o2.hasOwnProperty(prop)) {
                        if (preventOverwrite && o1.hasOwnProperty(prop)) {
                            continue;
                        }
                        o1[prop] = o2[prop];
                    }
                }
            },
            easing: {
                sine: {
                    out: function(k) {
                        return Math.sin(k * (Math.PI / 2));
                    },
                    inOut: function(k) {
                        return -(Math.cos(Math.PI * k) - 1) / 2;
                    }
                },
                cubic: {
                    out: function(k) {
                        return --k * k * k + 1;
                    }
                }
            },
            /**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
            detectFeatures: function() {
                if (framework.features) {
                    return framework.features;
                }
                var helperEl = framework.createEl(), helperStyle = helperEl.style, vendor = "", features = {};
                // IE8 and below
                features.oldIE = document.all && !document.addEventListener;
                features.touch = "ontouchstart" in window;
                if (window.requestAnimationFrame) {
                    features.raf = window.requestAnimationFrame;
                    features.caf = window.cancelAnimationFrame;
                }
                features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;
                // fix false-positive detection of old Android in new IE
                // (IE11 ua string contains "Android 4.0")
                if (!features.pointerEvent) {
                    var ua = navigator.userAgent;
                    // Detect if device is iPhone or iPod and if it's older than iOS 8
                    // http://stackoverflow.com/a/14223920
                    // 
                    // This detection is made because of buggy top/bottom toolbars
                    // that don't trigger window.resize event.
                    // For more info refer to _isFixedPosition variable in core.js
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        if (v && v.length > 0) {
                            v = parseInt(v[1], 10);
                            if (v >= 1 && v < 8) {
                                features.isOldIOSPhone = true;
                            }
                        }
                    }
                    // Detect old Android (before KitKat)
                    // due to bugs related to position:fixed
                    // http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
                    var match = ua.match(/Android\s([0-9\.]*)/);
                    var androidversion = match ? match[1] : 0;
                    androidversion = parseFloat(androidversion);
                    if (androidversion >= 1) {
                        if (androidversion < 4.4) {
                            features.isOldAndroid = true;
                        }
                        features.androidVersion = androidversion;
                    }
                    features.isMobileOpera = /opera mini|opera mobi/i.test(ua);
                }
                var styleChecks = [ "transform", "perspective", "animationName" ], vendors = [ "", "webkit", "Moz", "ms", "O" ], styleCheckItem, styleName;
                for (var i = 0; i < 4; i++) {
                    vendor = vendors[i];
                    for (var a = 0; a < 3; a++) {
                        styleCheckItem = styleChecks[a];
                        // uppercase first letter of property name, if vendor is present
                        styleName = vendor + (vendor ? styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : styleCheckItem);
                        if (!features[styleCheckItem] && styleName in helperStyle) {
                            features[styleCheckItem] = styleName;
                        }
                    }
                    if (vendor && !features.raf) {
                        vendor = vendor.toLowerCase();
                        features.raf = window[vendor + "RequestAnimationFrame"];
                        if (features.raf) {
                            features.caf = window[vendor + "CancelAnimationFrame"] || window[vendor + "CancelRequestAnimationFrame"];
                        }
                    }
                }
                if (!features.raf) {
                    var lastTime = 0;
                    features.raf = function(fn) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function() {
                            fn(currTime + timeToCall);
                        }, timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };
                    features.caf = function(id) {
                        clearTimeout(id);
                    };
                }
                // Detect SVG support
                features.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
                framework.features = features;
                return features;
            }
        };
        framework.detectFeatures();
        // Override addEventListener for old versions of IE
        if (framework.features.oldIE) {
            framework.bind = function(target, type, listener, unbind) {
                type = type.split(" ");
                var methodName = (unbind ? "detach" : "attach") + "Event", evName, _handleEv = function() {
                    listener.handleEvent.call(listener);
                };
                for (var i = 0; i < type.length; i++) {
                    evName = type[i];
                    if (evName) {
                        if (typeof listener === "object" && listener.handleEvent) {
                            if (!unbind) {
                                listener["oldIE" + evName] = _handleEv;
                            } else {
                                if (!listener["oldIE" + evName]) {
                                    return false;
                                }
                            }
                            target[methodName]("on" + evName, listener["oldIE" + evName]);
                        } else {
                            target[methodName]("on" + evName, listener);
                        }
                    }
                }
            };
        }
        /*>>framework-bridge*/
        /*>>core*/
        //function(template, UiClass, items, options)
        var self = this;
        /**
 * Static vars, don't change unless you know what you're doing.
 */
        var DOUBLE_TAP_RADIUS = 25, NUM_HOLDERS = 3;
        /**
 * Options
 */
        var _options = {
            allowPanToNext: true,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: false,
            loop: true,
            pinchToClose: true,
            closeOnScroll: true,
            closeOnVerticalDrag: true,
            verticalDragRange: .6,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: false,
            focus: true,
            escKey: true,
            arrowKeys: true,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function(el) {
                return el.tagName === "A";
            },
            getDoubleTapZoom: function(isMouseClick, item) {
                if (isMouseClick) {
                    return 1;
                } else {
                    return item.initialZoomLevel < .7 ? 1 : 1.5;
                }
            },
            maxSpreadZoom: 2,
            modal: true,
            // not fully implemented yet
            scaleMode: "fit",
            // TODO
            alwaysFadeIn: false
        };
        framework.extend(_options, options);
        /**
 * Private helper variables & functions
 */
        var _getEmptyPoint = function() {
            return {
                x: 0,
                y: 0
            };
        };
        var _isOpen, _isDestroying, _closedByScroll, _currentItemIndex, _containerStyle, _containerShiftIndex, _currPanDist = _getEmptyPoint(), _startPanOffset = _getEmptyPoint(), _panOffset = _getEmptyPoint(), _upMoveEvents, // drag move, drag end & drag cancel events array
        _downEvents, // drag start events array
        _globalEventHandlers, _viewportSize = {}, _currZoomLevel, _startZoomLevel, _translatePrefix, _translateSufix, _updateSizeInterval, _itemsNeedUpdate, _currPositionIndex = 0, _offset = {}, _slideSize = _getEmptyPoint(), // size of slide area, including spacing
        _itemHolders, _prevItemIndex, _indexDiff = 0, // difference of indexes since last content update
        _dragStartEvent, _dragMoveEvent, _dragEndEvent, _dragCancelEvent, _transformKey, _pointerEventEnabled, _isFixedPosition = true, _likelyTouchDevice, _modules = [], _requestAF, _cancelAF, _initalClassName, _initalWindowScrollY, _oldIE, _currentWindowScrollY, _features, _windowVisibleSize = {}, // Registers PhotoSWipe module (History, Controller ...)
        _registerModule = function(name, module) {
            framework.extend(self, module.publicMethods);
            _modules.push(name);
        }, _getLoopedId = function(index) {
            var numSlides = _getNumItems();
            if (index > numSlides - 1) {
                return index - numSlides;
            } else if (index < 0) {
                return numSlides + index;
            }
            return index;
        }, // Micro bind/trigger
        _listeners = {}, _listen = function(name, fn) {
            if (!_listeners[name]) {
                _listeners[name] = [];
            }
            return _listeners[name].push(fn);
        }, _shout = function(name) {
            var listeners = _listeners[name];
            if (listeners) {
                var args = Array.prototype.slice.call(arguments);
                args.shift();
                for (var i = 0; i < listeners.length; i++) {
                    listeners[i].apply(self, args);
                }
            }
        }, _getCurrentTime = function() {
            return new Date().getTime();
        }, _applyBgOpacity = function(opacity) {
            _bgOpacity = opacity;
            self.bg.style.opacity = opacity * _options.bgOpacity;
        }, _applyZoomTransform = function(styleObj, x, y, zoom) {
            styleObj[_transformKey] = _translatePrefix + x + "px, " + y + "px" + _translateSufix + " scale(" + zoom + ")";
        }, _applyCurrentZoomPan = function() {
            if (_currZoomElementStyle) {
                _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
            }
        }, _applyZoomPanToItem = function(item) {
            if (item.container) {
                _applyZoomTransform(item.container.style, item.initialPosition.x, item.initialPosition.y, item.initialZoomLevel);
            }
        }, _setTranslateX = function(x, elStyle) {
            elStyle[_transformKey] = _translatePrefix + x + "px, 0px" + _translateSufix;
        }, _moveMainScroll = function(x, dragging) {
            if (!_options.loop && dragging) {
                // if of current item during scroll (float)
                var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x;
                var delta = Math.round(x - _mainScrollPos.x);
                if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) {
                    x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
                }
            }
            _mainScrollPos.x = x;
            _setTranslateX(x, _containerStyle);
        }, _calculatePanOffset = function(axis, zoomLevel) {
            var m = _midZoomPoint[axis] - _offset[axis];
            return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
        }, _equalizePoints = function(p1, p2) {
            p1.x = p2.x;
            p1.y = p2.y;
            if (p2.id) {
                p1.id = p2.id;
            }
        }, _roundPoint = function(p) {
            p.x = Math.round(p.x);
            p.y = Math.round(p.y);
        }, _mouseMoveTimeout = null, _onFirstMouseMove = function() {
            // Wait until mouse move event is fired at least twice during 100ms
            // We do this, because some mobile browsers trigger it on touchstart
            if (_mouseMoveTimeout) {
                framework.unbind(document, "mousemove", _onFirstMouseMove);
                framework.addClass(template, "pswp--has_mouse");
                _options.mouseUsed = true;
                _shout("mouseUsed");
            }
            _mouseMoveTimeout = setTimeout(function() {
                _mouseMoveTimeout = null;
            }, 100);
        }, _bindEvents = function() {
            framework.bind(document, "keydown", self);
            if (_features.transform) {
                // don't bind click event in browsers that don't support transform (mostly IE8)
                framework.bind(self.scrollWrap, "click", self);
            }
            if (!_options.mouseUsed) {
                framework.bind(document, "mousemove", _onFirstMouseMove);
            }
            framework.bind(window, "resize scroll", self);
            _shout("bindEvents");
        }, _unbindEvents = function() {
            framework.unbind(window, "resize", self);
            framework.unbind(window, "scroll", _globalEventHandlers.scroll);
            framework.unbind(document, "keydown", self);
            framework.unbind(document, "mousemove", _onFirstMouseMove);
            if (_features.transform) {
                framework.unbind(self.scrollWrap, "click", self);
            }
            if (_isDragging) {
                framework.unbind(window, _upMoveEvents, self);
            }
            _shout("unbindEvents");
        }, _calculatePanBounds = function(zoomLevel, update) {
            var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);
            if (update) {
                _currPanBounds = bounds;
            }
            return bounds;
        }, _getMinZoomLevel = function(item) {
            if (!item) {
                item = self.currItem;
            }
            return item.initialZoomLevel;
        }, _getMaxZoomLevel = function(item) {
            if (!item) {
                item = self.currItem;
            }
            return item.w > 0 ? _options.maxSpreadZoom : 1;
        }, // Return true if offset is out of the bounds
        _modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
            if (destZoomLevel === self.currItem.initialZoomLevel) {
                destPanOffset[axis] = self.currItem.initialPosition[axis];
                return true;
            } else {
                destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);
                if (destPanOffset[axis] > destPanBounds.min[axis]) {
                    destPanOffset[axis] = destPanBounds.min[axis];
                    return true;
                } else if (destPanOffset[axis] < destPanBounds.max[axis]) {
                    destPanOffset[axis] = destPanBounds.max[axis];
                    return true;
                }
            }
            return false;
        }, _setupTransforms = function() {
            if (_transformKey) {
                // setup 3d transforms
                var allow3dTransform = _features.perspective && !_likelyTouchDevice;
                _translatePrefix = "translate" + (allow3dTransform ? "3d(" : "(");
                _translateSufix = _features.perspective ? ", 0px)" : ")";
                return;
            }
            // Override zoom/pan/move functions in case old browser is used (most likely IE)
            // (so they use left/top/width/height, instead of CSS transform)
            _transformKey = "left";
            framework.addClass(template, "pswp--ie");
            _setTranslateX = function(x, elStyle) {
                elStyle.left = x + "px";
            };
            _applyZoomPanToItem = function(item) {
                var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio, s = item.container.style, w = zoomRatio * item.w, h = zoomRatio * item.h;
                s.width = w + "px";
                s.height = h + "px";
                s.left = item.initialPosition.x + "px";
                s.top = item.initialPosition.y + "px";
            };
            _applyCurrentZoomPan = function() {
                if (_currZoomElementStyle) {
                    var s = _currZoomElementStyle, item = self.currItem, zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio, w = zoomRatio * item.w, h = zoomRatio * item.h;
                    s.width = w + "px";
                    s.height = h + "px";
                    s.left = _panOffset.x + "px";
                    s.top = _panOffset.y + "px";
                }
            };
        }, _onKeyDown = function(e) {
            var keydownAction = "";
            if (_options.escKey && e.keyCode === 27) {
                keydownAction = "close";
            } else if (_options.arrowKeys) {
                if (e.keyCode === 37) {
                    keydownAction = "prev";
                } else if (e.keyCode === 39) {
                    keydownAction = "next";
                }
            }
            if (keydownAction) {
                // don't do anything if special key pressed to prevent from overriding default browser actions
                // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
                if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                    self[keydownAction]();
                }
            }
        }, _onGlobalClick = function(e) {
            if (!e) {
                return;
            }
            // don't allow click event to pass through when triggering after drag or some other gesture
            if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, _updatePageScrollOffset = function() {
            self.setScrollOffset(0, framework.getScrollY());
        };
        // Micro animation engine
        var _animations = {}, _numAnimations = 0, _stopAnimation = function(name) {
            if (_animations[name]) {
                if (_animations[name].raf) {
                    _cancelAF(_animations[name].raf);
                }
                _numAnimations--;
                delete _animations[name];
            }
        }, _registerStartAnimation = function(name) {
            if (_animations[name]) {
                _stopAnimation(name);
            }
            if (!_animations[name]) {
                _numAnimations++;
                _animations[name] = {};
            }
        }, _stopAllAnimations = function() {
            for (var prop in _animations) {
                if (_animations.hasOwnProperty(prop)) {
                    _stopAnimation(prop);
                }
            }
        }, _animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
            var startAnimTime = _getCurrentTime(), t;
            _registerStartAnimation(name);
            var animloop = function() {
                if (_animations[name]) {
                    t = _getCurrentTime() - startAnimTime;
                    // time diff
                    //b - beginning (start prop)
                    //d - anim duration
                    if (t >= d) {
                        _stopAnimation(name);
                        onUpdate(endProp);
                        if (onComplete) {
                            onComplete();
                        }
                        return;
                    }
                    onUpdate((endProp - b) * easingFn(t / d) + b);
                    _animations[name].raf = _requestAF(animloop);
                }
            };
            animloop();
        };
        var publicMethods = {
            // make a few local variables and functions public
            shout: _shout,
            listen: _listen,
            viewportSize: _viewportSize,
            options: _options,
            isMainScrollAnimating: function() {
                return _mainScrollAnimating;
            },
            getZoomLevel: function() {
                return _currZoomLevel;
            },
            getCurrentIndex: function() {
                return _currentItemIndex;
            },
            isDragging: function() {
                return _isDragging;
            },
            isZooming: function() {
                return _isZooming;
            },
            setScrollOffset: function(x, y) {
                _offset.x = x;
                _currentWindowScrollY = _offset.y = y;
                _shout("updateScrollOffset", _offset);
            },
            applyZoomPan: function(zoomLevel, panX, panY) {
                _panOffset.x = panX;
                _panOffset.y = panY;
                _currZoomLevel = zoomLevel;
                _applyCurrentZoomPan();
            },
            init: function() {
                if (_isOpen || _isDestroying) {
                    return;
                }
                var i;
                self.framework = framework;
                // basic function
                self.template = template;
                // root DOM element of PhotoSwipe
                self.bg = framework.getChildByClass(template, "pswp__bg");
                _initalClassName = template.className;
                _isOpen = true;
                _features = framework.detectFeatures();
                _requestAF = _features.raf;
                _cancelAF = _features.caf;
                _transformKey = _features.transform;
                _oldIE = _features.oldIE;
                self.scrollWrap = framework.getChildByClass(template, "pswp__scroll-wrap");
                self.container = framework.getChildByClass(self.scrollWrap, "pswp__container");
                _containerStyle = self.container.style;
                // for fast access
                // Objects that hold slides (there are only 3 in DOM)
                self.itemHolders = _itemHolders = [ {
                    el: self.container.children[0],
                    wrap: 0,
                    index: -1
                }, {
                    el: self.container.children[1],
                    wrap: 0,
                    index: -1
                }, {
                    el: self.container.children[2],
                    wrap: 0,
                    index: -1
                } ];
                // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
                _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = "none";
                _setupTransforms();
                // Setup global events
                _globalEventHandlers = {
                    resize: self.updateSize,
                    scroll: _updatePageScrollOffset,
                    keydown: _onKeyDown,
                    click: _onGlobalClick
                };
                // disable show/hide effects on old browsers that don't support CSS animations or transforms, 
                // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
                var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
                if (!_features.animationName || !_features.transform || oldPhone) {
                    _options.showAnimationDuration = _options.hideAnimationDuration = 0;
                }
                // init modules
                for (i = 0; i < _modules.length; i++) {
                    self["init" + _modules[i]]();
                }
                // init
                if (UiClass) {
                    var ui = self.ui = new UiClass(self, framework);
                    ui.init();
                }
                _shout("firstUpdate");
                _currentItemIndex = _currentItemIndex || _options.index || 0;
                // validate index
                if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
                    _currentItemIndex = 0;
                }
                self.currItem = _getItemAt(_currentItemIndex);
                if (_features.isOldIOSPhone || _features.isOldAndroid) {
                    _isFixedPosition = false;
                }
                template.setAttribute("aria-hidden", "false");
                if (_options.modal) {
                    if (!_isFixedPosition) {
                        template.style.position = "absolute";
                        template.style.top = framework.getScrollY() + "px";
                    } else {
                        template.style.position = "fixed";
                    }
                }
                if (_currentWindowScrollY === undefined) {
                    _shout("initialLayout");
                    _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
                }
                // add classes to root element of PhotoSwipe
                var rootClasses = "pswp--open ";
                if (_options.mainClass) {
                    rootClasses += _options.mainClass + " ";
                }
                if (_options.showHideOpacity) {
                    rootClasses += "pswp--animate_opacity ";
                }
                rootClasses += _likelyTouchDevice ? "pswp--touch" : "pswp--notouch";
                rootClasses += _features.animationName ? " pswp--css_animation" : "";
                rootClasses += _features.svg ? " pswp--svg" : "";
                framework.addClass(template, rootClasses);
                self.updateSize();
                // initial update
                _containerShiftIndex = -1;
                _indexDiff = null;
                for (i = 0; i < NUM_HOLDERS; i++) {
                    _setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
                }
                if (!_oldIE) {
                    framework.bind(self.scrollWrap, _downEvents, self);
                }
                _listen("initialZoomInEnd", function() {
                    self.setContent(_itemHolders[0], _currentItemIndex - 1);
                    self.setContent(_itemHolders[2], _currentItemIndex + 1);
                    _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = "block";
                    if (_options.focus) {
                        // focus causes layout, 
                        // which causes lag during the animation, 
                        // that's why we delay it untill the initial zoom transition ends
                        template.focus();
                    }
                    _bindEvents();
                });
                // set content for center slide (first time)
                self.setContent(_itemHolders[1], _currentItemIndex);
                self.updateCurrItem();
                _shout("afterInit");
                if (!_isFixedPosition) {
                    // On all versions of iOS lower than 8.0, we check size of viewport every second.
                    // 
                    // This is done to detect when Safari top & bottom bars appear, 
                    // as this action doesn't trigger any events (like resize). 
                    // 
                    // On iOS8 they fixed this.
                    // 
                    // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
                    _updateSizeInterval = setInterval(function() {
                        if (!_numAnimations && !_isDragging && !_isZooming && _currZoomLevel === self.currItem.initialZoomLevel) {
                            self.updateSize();
                        }
                    }, 1e3);
                }
                framework.addClass(template, "pswp--visible");
            },
            // Closes the gallery, then destroy it
            close: function() {
                if (!_isOpen) {
                    return;
                }
                _isOpen = false;
                _isDestroying = true;
                _shout("close");
                _unbindEvents();
                _showOrHide(self.currItem, null, true, self.destroy);
            },
            // destroys gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
            destroy: function() {
                _shout("destroy");
                if (_showOrHideTimeout) {
                    clearTimeout(_showOrHideTimeout);
                }
                template.setAttribute("aria-hidden", "true");
                template.className = _initalClassName;
                if (_updateSizeInterval) {
                    clearInterval(_updateSizeInterval);
                }
                framework.unbind(self.scrollWrap, _downEvents, self);
                // we unbind lost event at the end, as closing animation may depend on it
                framework.unbind(window, "scroll", self);
                _stopDragUpdateLoop();
                _stopAllAnimations();
                _listeners = null;
            },
            /**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
            panTo: function(x, y, force) {
                if (!force) {
                    if (x > _currPanBounds.min.x) {
                        x = _currPanBounds.min.x;
                    } else if (x < _currPanBounds.max.x) {
                        x = _currPanBounds.max.x;
                    }
                    if (y > _currPanBounds.min.y) {
                        y = _currPanBounds.min.y;
                    } else if (y < _currPanBounds.max.y) {
                        y = _currPanBounds.max.y;
                    }
                }
                _panOffset.x = x;
                _panOffset.y = y;
                _applyCurrentZoomPan();
            },
            handleEvent: function(e) {
                e = e || window.event;
                if (_globalEventHandlers[e.type]) {
                    _globalEventHandlers[e.type](e);
                }
            },
            goTo: function(index) {
                index = _getLoopedId(index);
                var diff = index - _currentItemIndex;
                _indexDiff = diff;
                _currentItemIndex = index;
                self.currItem = _getItemAt(_currentItemIndex);
                _currPositionIndex -= diff;
                _moveMainScroll(_slideSize.x * _currPositionIndex);
                _stopAllAnimations();
                _mainScrollAnimating = false;
                self.updateCurrItem();
            },
            next: function() {
                self.goTo(_currentItemIndex + 1);
            },
            prev: function() {
                self.goTo(_currentItemIndex - 1);
            },
            // update current zoom/pan objects
            updateCurrZoomItem: function(emulateSetContent) {
                if (emulateSetContent) {
                    _shout("beforeChange", 0);
                }
                // itemHolder[1] is middle (current) item
                if (_itemHolders[1].el.children.length) {
                    var zoomElement = _itemHolders[1].el.children[0];
                    if (framework.hasClass(zoomElement, "pswp__zoom-wrap")) {
                        _currZoomElementStyle = zoomElement.style;
                    } else {
                        _currZoomElementStyle = null;
                    }
                } else {
                    _currZoomElementStyle = null;
                }
                _currPanBounds = self.currItem.bounds;
                _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
                _panOffset.x = _currPanBounds.center.x;
                _panOffset.y = _currPanBounds.center.y;
                if (emulateSetContent) {
                    _shout("afterChange");
                }
            },
            invalidateCurrItems: function() {
                _itemsNeedUpdate = true;
                for (var i = 0; i < NUM_HOLDERS; i++) {
                    if (_itemHolders[i].item) {
                        _itemHolders[i].item.needsUpdate = true;
                    }
                }
            },
            updateCurrItem: function(beforeAnimation) {
                if (_indexDiff === 0) {
                    return;
                }
                var diffAbs = Math.abs(_indexDiff), tempHolder;
                if (beforeAnimation && diffAbs < 2) {
                    return;
                }
                self.currItem = _getItemAt(_currentItemIndex);
                _shout("beforeChange", _indexDiff);
                if (diffAbs >= NUM_HOLDERS) {
                    _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
                    diffAbs = NUM_HOLDERS;
                }
                for (var i = 0; i < diffAbs; i++) {
                    if (_indexDiff > 0) {
                        tempHolder = _itemHolders.shift();
                        _itemHolders[NUM_HOLDERS - 1] = tempHolder;
                        // move first to last
                        _containerShiftIndex++;
                        _setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);
                        self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
                    } else {
                        tempHolder = _itemHolders.pop();
                        _itemHolders.unshift(tempHolder);
                        // move last to first
                        _containerShiftIndex--;
                        _setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);
                        self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
                    }
                }
                // reset zoom/pan on previous item
                if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {
                    var prevItem = _getItemAt(_prevItemIndex);
                    if (prevItem.initialZoomLevel !== _currZoomLevel) {
                        _calculateItemSize(prevItem, _viewportSize);
                        _applyZoomPanToItem(prevItem);
                    }
                }
                // reset diff after update
                _indexDiff = 0;
                self.updateCurrZoomItem();
                _prevItemIndex = _currentItemIndex;
                _shout("afterChange");
            },
            updateSize: function(force) {
                if (!_isFixedPosition && _options.modal) {
                    var windowScrollY = framework.getScrollY();
                    if (_currentWindowScrollY !== windowScrollY) {
                        template.style.top = windowScrollY + "px";
                        _currentWindowScrollY = windowScrollY;
                    }
                    if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                        return;
                    }
                    _windowVisibleSize.x = window.innerWidth;
                    _windowVisibleSize.y = window.innerHeight;
                    //template.style.width = _windowVisibleSize.x + 'px';
                    template.style.height = _windowVisibleSize.y + "px";
                }
                _viewportSize.x = self.scrollWrap.clientWidth;
                _viewportSize.y = self.scrollWrap.clientHeight;
                _updatePageScrollOffset();
                _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
                _slideSize.y = _viewportSize.y;
                _moveMainScroll(_slideSize.x * _currPositionIndex);
                _shout("beforeResize");
                // even may be used for example to switch image sources
                // don't re-calculate size on inital size update
                if (_containerShiftIndex !== undefined) {
                    var holder, item, hIndex;
                    for (var i = 0; i < NUM_HOLDERS; i++) {
                        holder = _itemHolders[i];
                        _setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);
                        hIndex = _currentItemIndex + i - 1;
                        if (_options.loop && _getNumItems() > 2) {
                            hIndex = _getLoopedId(hIndex);
                        }
                        // update zoom level on items and refresh source (if needsUpdate)
                        item = _getItemAt(hIndex);
                        // re-render gallery item if `needsUpdate`,
                        // or doesn't have `bounds` (entirely new slide object)
                        if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {
                            self.cleanSlide(item);
                            self.setContent(holder, hIndex);
                            // if "center" slide
                            if (i === 1) {
                                self.currItem = item;
                                self.updateCurrZoomItem(true);
                            }
                            item.needsUpdate = false;
                        } else if (holder.index === -1 && hIndex >= 0) {
                            // add content first time
                            self.setContent(holder, hIndex);
                        }
                        if (item && item.container) {
                            _calculateItemSize(item, _viewportSize);
                            _applyZoomPanToItem(item);
                        }
                    }
                    _itemsNeedUpdate = false;
                }
                _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
                _currPanBounds = self.currItem.bounds;
                if (_currPanBounds) {
                    _panOffset.x = _currPanBounds.center.x;
                    _panOffset.y = _currPanBounds.center.y;
                    _applyCurrentZoomPan();
                }
                _shout("resize");
            },
            // Zoom current item to
            zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
                /*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/
                if (centerPoint) {
                    _startZoomLevel = _currZoomLevel;
                    _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
                    _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;
                    _equalizePoints(_startPanOffset, _panOffset);
                }
                var destPanBounds = _calculatePanBounds(destZoomLevel, false), destPanOffset = {};
                _modifyDestPanOffset("x", destPanBounds, destPanOffset, destZoomLevel);
                _modifyDestPanOffset("y", destPanBounds, destPanOffset, destZoomLevel);
                var initialZoomLevel = _currZoomLevel;
                var initialPanOffset = {
                    x: _panOffset.x,
                    y: _panOffset.y
                };
                _roundPoint(destPanOffset);
                // _startZoomLevel = destZoomLevel;
                var onUpdate = function(now) {
                    if (now === 1) {
                        _currZoomLevel = destZoomLevel;
                        _panOffset.x = destPanOffset.x;
                        _panOffset.y = destPanOffset.y;
                    } else {
                        _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                        _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                        _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
                    }
                    if (updateFn) {
                        updateFn(now);
                    }
                    _applyCurrentZoomPan();
                };
                if (speed) {
                    _animateProp("customZoomTo", 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
                } else {
                    onUpdate(1);
                }
            }
        };
        /*>>core*/
        /*>>gestures*/
        /**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */
        var MIN_SWIPE_DISTANCE = 30, DIRECTION_CHECK_OFFSET = 10;
        // amount of pixels to drag to determine direction of swipe
        var _gestureStartTime, _gestureCheckSpeedTime, // pool of objects that are used during dragging of zooming
        p = {}, // first point
        p2 = {}, // second point (for zoom gesture)
        delta = {}, _currPoint = {}, _startPoint = {}, _currPointers = [], _startMainScrollPos = {}, _releaseAnimData, _posPoints = [], // array of points during dragging, used to determine type of gesture
        _tempPoint = {}, _isZoomingIn, _verticalDragInitiated, _oldAndroidTouchEndTimeout, _currZoomedItemIndex = 0, _centerPoint = _getEmptyPoint(), _lastReleaseTime = 0, _isDragging, // at least one pointer is down
        _isMultitouch, // at least two _pointers are down
        _zoomStarted, // zoom level changed during zoom gesture
        _moved, _dragAnimFrame, _mainScrollShifted, _currentPoints, // array of current touch points
        _isZooming, _currPointsDistance, _startPointsDistance, _currPanBounds, _mainScrollPos = _getEmptyPoint(), _currZoomElementStyle, _mainScrollAnimating, // true, if animation after swipe gesture is running
        _midZoomPoint = _getEmptyPoint(), _currCenterPoint = _getEmptyPoint(), _direction, _isFirstMove, _opacityChanged, _bgOpacity, _wasOverInitialZoom, _isEqualPoints = function(p1, p2) {
            return p1.x === p2.x && p1.y === p2.y;
        }, _isNearbyPoints = function(touch0, touch1) {
            return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
        }, _calculatePointsDistance = function(p1, p2) {
            _tempPoint.x = Math.abs(p1.x - p2.x);
            _tempPoint.y = Math.abs(p1.y - p2.y);
            return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
        }, _stopDragUpdateLoop = function() {
            if (_dragAnimFrame) {
                _cancelAF(_dragAnimFrame);
                _dragAnimFrame = null;
            }
        }, _dragUpdateLoop = function() {
            if (_isDragging) {
                _dragAnimFrame = _requestAF(_dragUpdateLoop);
                _renderMovement();
            }
        }, _canPan = function() {
            return !(_options.scaleMode === "fit" && _currZoomLevel === self.currItem.initialZoomLevel);
        }, // find the closest parent DOM element
        _closestElement = function(el, fn) {
            if (!el) {
                return false;
            }
            // don't search elements above pswp__scroll-wrap
            if (el.className && el.className.indexOf("pswp__scroll-wrap") > -1) {
                return false;
            }
            if (fn(el)) {
                return el;
            }
            return _closestElement(el.parentNode, fn);
        }, _preventObj = {}, _preventDefaultEventBehaviour = function(e, isDown) {
            _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);
            _shout("preventDragEvent", e, isDown, _preventObj);
            return _preventObj.prevent;
        }, _convertTouchToPoint = function(touch, p) {
            p.x = touch.pageX;
            p.y = touch.pageY;
            p.id = touch.identifier;
            return p;
        }, _findCenterOfPoints = function(p1, p2, pCenter) {
            pCenter.x = (p1.x + p2.x) * .5;
            pCenter.y = (p1.y + p2.y) * .5;
        }, _pushPosPoint = function(time, x, y) {
            if (time - _gestureCheckSpeedTime > 50) {
                var o = _posPoints.length > 2 ? _posPoints.shift() : {};
                o.x = x;
                o.y = y;
                _posPoints.push(o);
                _gestureCheckSpeedTime = time;
            }
        }, _calculateVerticalDragOpacityRatio = function() {
            var yOffset = _panOffset.y - self.currItem.initialPosition.y;
            // difference between initial and current position
            return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
        }, // points pool, reused during touch events
        _ePoint1 = {}, _ePoint2 = {}, _tempPointsArr = [], _tempCounter, _getTouchPoints = function(e) {
            // clean up previous points, without recreating array
            while (_tempPointsArr.length > 0) {
                _tempPointsArr.pop();
            }
            if (!_pointerEventEnabled) {
                if (e.type.indexOf("touch") > -1) {
                    if (e.touches && e.touches.length > 0) {
                        _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
                        if (e.touches.length > 1) {
                            _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                        }
                    }
                } else {
                    _ePoint1.x = e.pageX;
                    _ePoint1.y = e.pageY;
                    _ePoint1.id = "";
                    _tempPointsArr[0] = _ePoint1;
                }
            } else {
                _tempCounter = 0;
                // we can use forEach, as pointer events are supported only in modern browsers
                _currPointers.forEach(function(p) {
                    if (_tempCounter === 0) {
                        _tempPointsArr[0] = p;
                    } else if (_tempCounter === 1) {
                        _tempPointsArr[1] = p;
                    }
                    _tempCounter++;
                });
            }
            return _tempPointsArr;
        }, _panOrMoveMainScroll = function(axis, delta) {
            var panFriction, overDiff = 0, newOffset = _panOffset[axis] + delta[axis], startOverDiff, dir = delta[axis] > 0, newMainScrollPosition = _mainScrollPos.x + delta.x, mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x, newPanPos, newMainScrollPos;
            // calculate fdistance over the bounds and friction
            if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
                panFriction = _options.panEndFriction;
            } else {
                panFriction = 1;
            }
            newOffset = _panOffset[axis] + delta[axis] * panFriction;
            // move main scroll or start panning
            if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {
                if (!_currZoomElementStyle) {
                    newMainScrollPos = newMainScrollPosition;
                } else if (_direction === "h" && axis === "x" && !_zoomStarted) {
                    if (dir) {
                        if (newOffset > _currPanBounds.min[axis]) {
                            panFriction = _options.panEndFriction;
                            overDiff = _currPanBounds.min[axis] - newOffset;
                            startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                        }
                        // drag right
                        if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
                            newMainScrollPos = newMainScrollPosition;
                            if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                                newMainScrollPos = _startMainScrollPos.x;
                            }
                        } else {
                            if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                                newPanPos = newOffset;
                            }
                        }
                    } else {
                        if (newOffset < _currPanBounds.max[axis]) {
                            panFriction = _options.panEndFriction;
                            overDiff = newOffset - _currPanBounds.max[axis];
                            startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                        }
                        if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
                            newMainScrollPos = newMainScrollPosition;
                            if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                                newMainScrollPos = _startMainScrollPos.x;
                            }
                        } else {
                            if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                                newPanPos = newOffset;
                            }
                        }
                    }
                }
                if (axis === "x") {
                    if (newMainScrollPos !== undefined) {
                        _moveMainScroll(newMainScrollPos, true);
                        if (newMainScrollPos === _startMainScrollPos.x) {
                            _mainScrollShifted = false;
                        } else {
                            _mainScrollShifted = true;
                        }
                    }
                    if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                        if (newPanPos !== undefined) {
                            _panOffset.x = newPanPos;
                        } else if (!_mainScrollShifted) {
                            _panOffset.x += delta.x * panFriction;
                        }
                    }
                    return newMainScrollPos !== undefined;
                }
            }
            if (!_mainScrollAnimating) {
                if (!_mainScrollShifted) {
                    if (_currZoomLevel > self.currItem.fitRatio) {
                        _panOffset[axis] += delta[axis] * panFriction;
                    }
                }
            }
        }, // Pointerdown/touchstart/mousedown handler
        _onDragStart = function(e) {
            // Allow dragging only via left mouse button.
            // As this handler is not added in IE8 - we ignore e.which
            // 
            // http://www.quirksmode.org/js/events_properties.html
            // https://developer.mozilla.org/en-US/docs/Web/API/event.button
            if (e.type === "mousedown" && e.button > 0) {
                return;
            }
            if (_initialZoomRunning) {
                e.preventDefault();
                return;
            }
            if (_oldAndroidTouchEndTimeout && e.type === "mousedown") {
                return;
            }
            if (_preventDefaultEventBehaviour(e, true)) {
                e.preventDefault();
            }
            _shout("pointerDown");
            if (_pointerEventEnabled) {
                var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
                if (pointerIndex < 0) {
                    pointerIndex = _currPointers.length;
                }
                _currPointers[pointerIndex] = {
                    x: e.pageX,
                    y: e.pageY,
                    id: e.pointerId
                };
            }
            var startPointsList = _getTouchPoints(e), numPoints = startPointsList.length;
            _currentPoints = null;
            _stopAllAnimations();
            // init drag
            if (!_isDragging || numPoints === 1) {
                _isDragging = _isFirstMove = true;
                framework.bind(window, _upMoveEvents, self);
                _isZoomingIn = _wasOverInitialZoom = _opacityChanged = _verticalDragInitiated = _mainScrollShifted = _moved = _isMultitouch = _zoomStarted = false;
                _direction = null;
                _shout("firstTouchStart", startPointsList);
                _equalizePoints(_startPanOffset, _panOffset);
                _currPanDist.x = _currPanDist.y = 0;
                _equalizePoints(_currPoint, startPointsList[0]);
                _equalizePoints(_startPoint, _currPoint);
                //_equalizePoints(_startMainScrollPos, _mainScrollPos);
                _startMainScrollPos.x = _slideSize.x * _currPositionIndex;
                _posPoints = [ {
                    x: _currPoint.x,
                    y: _currPoint.y
                } ];
                _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();
                //_mainScrollAnimationEnd(true);
                _calculatePanBounds(_currZoomLevel, true);
                // Start rendering
                _stopDragUpdateLoop();
                _dragUpdateLoop();
            }
            // init zoom
            if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
                _startZoomLevel = _currZoomLevel;
                _zoomStarted = false;
                // true if zoom changed at least once
                _isZooming = _isMultitouch = true;
                _currPanDist.y = _currPanDist.x = 0;
                _equalizePoints(_startPanOffset, _panOffset);
                _equalizePoints(p, startPointsList[0]);
                _equalizePoints(p2, startPointsList[1]);
                _findCenterOfPoints(p, p2, _currCenterPoint);
                _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
                _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
                _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
            }
        }, // Pointermove/touchmove/mousemove handler
        _onDragMove = function(e) {
            e.preventDefault();
            if (_pointerEventEnabled) {
                var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
                if (pointerIndex > -1) {
                    var p = _currPointers[pointerIndex];
                    p.x = e.pageX;
                    p.y = e.pageY;
                }
            }
            if (_isDragging) {
                var touchesList = _getTouchPoints(e);
                if (!_direction && !_moved && !_isZooming) {
                    var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
                    // check the direction of movement
                    if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                        _direction = diff > 0 ? "h" : "v";
                        _currentPoints = touchesList;
                    }
                } else {
                    _currentPoints = touchesList;
                }
            }
        }, // 
        _renderMovement = function() {
            if (!_currentPoints) {
                return;
            }
            var numPoints = _currentPoints.length;
            if (numPoints === 0) {
                return;
            }
            _equalizePoints(p, _currentPoints[0]);
            delta.x = p.x - _currPoint.x;
            delta.y = p.y - _currPoint.y;
            if (_isZooming && numPoints > 1) {
                // Handle behaviour for more than 1 point
                _currPoint.x = p.x;
                _currPoint.y = p.y;
                // check if one of two points changed
                if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
                    return;
                }
                _equalizePoints(p2, _currentPoints[1]);
                if (!_zoomStarted) {
                    _zoomStarted = true;
                    _shout("zoomGestureStarted");
                }
                // Distance between two points
                var pointsDistance = _calculatePointsDistance(p, p2);
                var zoomLevel = _calculateZoomLevel(pointsDistance);
                // slightly over the of initial zoom level
                if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
                    _wasOverInitialZoom = true;
                }
                // Apply the friction if zoom level is out of the bounds
                var zoomFriction = 1, minZoomLevel = _getMinZoomLevel(), maxZoomLevel = _getMaxZoomLevel();
                if (zoomLevel < minZoomLevel) {
                    if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
                        // fade out background if zooming out
                        var minusDiff = minZoomLevel - zoomLevel;
                        var percent = 1 - minusDiff / (minZoomLevel / 1.2);
                        _applyBgOpacity(percent);
                        _shout("onPinchClose", percent);
                        _opacityChanged = true;
                    } else {
                        zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
                        if (zoomFriction > 1) {
                            zoomFriction = 1;
                        }
                        zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
                    }
                } else if (zoomLevel > maxZoomLevel) {
                    // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
                    zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);
                    if (zoomFriction > 1) {
                        zoomFriction = 1;
                    }
                    zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
                }
                if (zoomFriction < 0) {
                    zoomFriction = 0;
                }
                // distance between touch points after friction is applied
                _currPointsDistance = pointsDistance;
                // _centerPoint - The point in the middle of two pointers
                _findCenterOfPoints(p, p2, _centerPoint);
                // paning with two pointers pressed
                _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
                _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
                _equalizePoints(_currCenterPoint, _centerPoint);
                _panOffset.x = _calculatePanOffset("x", zoomLevel);
                _panOffset.y = _calculatePanOffset("y", zoomLevel);
                _isZoomingIn = zoomLevel > _currZoomLevel;
                _currZoomLevel = zoomLevel;
                _applyCurrentZoomPan();
            } else {
                // handle behaviour for one point (dragging or panning)
                if (!_direction) {
                    return;
                }
                if (_isFirstMove) {
                    _isFirstMove = false;
                    // subtract drag distance that was used during the detection direction  
                    if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                        delta.x -= _currentPoints[0].x - _startPoint.x;
                    }
                    if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                        delta.y -= _currentPoints[0].y - _startPoint.y;
                    }
                }
                _currPoint.x = p.x;
                _currPoint.y = p.y;
                // do nothing if pointers position hasn't changed
                if (delta.x === 0 && delta.y === 0) {
                    return;
                }
                if (_direction === "v" && _options.closeOnVerticalDrag) {
                    if (!_canPan()) {
                        _currPanDist.y += delta.y;
                        _panOffset.y += delta.y;
                        var opacityRatio = _calculateVerticalDragOpacityRatio();
                        _verticalDragInitiated = true;
                        _shout("onVerticalDrag", opacityRatio);
                        _applyBgOpacity(opacityRatio);
                        _applyCurrentZoomPan();
                        return;
                    }
                }
                _pushPosPoint(_getCurrentTime(), p.x, p.y);
                _moved = true;
                _currPanBounds = self.currItem.bounds;
                var mainScrollChanged = _panOrMoveMainScroll("x", delta);
                if (!mainScrollChanged) {
                    _panOrMoveMainScroll("y", delta);
                    _roundPoint(_panOffset);
                    _applyCurrentZoomPan();
                }
            }
        }, // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
        _onDragRelease = function(e) {
            if (_features.isOldAndroid) {
                if (_oldAndroidTouchEndTimeout && e.type === "mouseup") {
                    return;
                }
                // on Android (v4.1, 4.2, 4.3 & possibly older) 
                // ghost mousedown/up event isn't preventable via e.preventDefault,
                // which causes fake mousedown event
                // so we block mousedown/up for 600ms
                if (e.type.indexOf("touch") > -1) {
                    clearTimeout(_oldAndroidTouchEndTimeout);
                    _oldAndroidTouchEndTimeout = setTimeout(function() {
                        _oldAndroidTouchEndTimeout = 0;
                    }, 600);
                }
            }
            _shout("pointerUp");
            if (_preventDefaultEventBehaviour(e, false)) {
                e.preventDefault();
            }
            var releasePoint;
            if (_pointerEventEnabled) {
                var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
                if (pointerIndex > -1) {
                    releasePoint = _currPointers.splice(pointerIndex, 1)[0];
                    if (navigator.pointerEnabled) {
                        releasePoint.type = e.pointerType || "mouse";
                    } else {
                        var MSPOINTER_TYPES = {
                            4: "mouse",
                            // event.MSPOINTER_TYPE_MOUSE
                            2: "touch",
                            // event.MSPOINTER_TYPE_TOUCH 
                            3: "pen"
                        };
                        releasePoint.type = MSPOINTER_TYPES[e.pointerType];
                        if (!releasePoint.type) {
                            releasePoint.type = e.pointerType || "mouse";
                        }
                    }
                }
            }
            var touchList = _getTouchPoints(e), gestureType, numPoints = touchList.length;
            if (e.type === "mouseup") {
                numPoints = 0;
            }
            // Do nothing if there were 3 touch points or more
            if (numPoints === 2) {
                _currentPoints = null;
                return true;
            }
            // if second pointer released
            if (numPoints === 1) {
                _equalizePoints(_startPoint, touchList[0]);
            }
            // pointer hasn't moved, send "tap release" point
            if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
                if (!releasePoint) {
                    if (e.type === "mouseup") {
                        releasePoint = {
                            x: e.pageX,
                            y: e.pageY,
                            type: "mouse"
                        };
                    } else if (e.changedTouches && e.changedTouches[0]) {
                        releasePoint = {
                            x: e.changedTouches[0].pageX,
                            y: e.changedTouches[0].pageY,
                            type: "touch"
                        };
                    }
                }
                _shout("touchRelease", e, releasePoint);
            }
            // Difference in time between releasing of two last touch points (zoom gesture)
            var releaseTimeDiff = -1;
            // Gesture completed, no pointers left
            if (numPoints === 0) {
                _isDragging = false;
                framework.unbind(window, _upMoveEvents, self);
                _stopDragUpdateLoop();
                if (_isZooming) {
                    // Two points released at the same time
                    releaseTimeDiff = 0;
                } else if (_lastReleaseTime !== -1) {
                    releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
                }
            }
            _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
            if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
                gestureType = "zoom";
            } else {
                gestureType = "swipe";
            }
            if (_isZooming && numPoints < 2) {
                _isZooming = false;
                // Only second point released
                if (numPoints === 1) {
                    gestureType = "zoomPointerUp";
                }
                _shout("zoomGestureEnded");
            }
            _currentPoints = null;
            if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
                // nothing to animate
                return;
            }
            _stopAllAnimations();
            if (!_releaseAnimData) {
                _releaseAnimData = _initDragReleaseAnimationData();
            }
            _releaseAnimData.calculateSwipeSpeed("x");
            if (_verticalDragInitiated) {
                var opacityRatio = _calculateVerticalDragOpacityRatio();
                if (opacityRatio < _options.verticalDragRange) {
                    self.close();
                } else {
                    var initalPanY = _panOffset.y, initialBgOpacity = _bgOpacity;
                    _animateProp("verticalDrag", 0, 1, 300, framework.easing.cubic.out, function(now) {
                        _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;
                        _applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);
                        _applyCurrentZoomPan();
                    });
                    _shout("onVerticalDrag", 1);
                }
                return;
            }
            // main scroll 
            if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
                var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
                if (itemChanged) {
                    return;
                }
                gestureType = "zoomPointerUp";
            }
            // prevent zoom/pan animation when main scroll animation runs
            if (_mainScrollAnimating) {
                return;
            }
            // Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
            if (gestureType !== "swipe") {
                _completeZoomGesture();
                return;
            }
            // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
            if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
                _completePanGesture(_releaseAnimData);
            }
        }, // Returns object with data about gesture
        // It's created only once and then reused
        _initDragReleaseAnimationData = function() {
            // temp local vars
            var lastFlickDuration, tempReleasePos;
            // s = this
            var s = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function(axis) {
                    if (_posPoints.length > 1) {
                        lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                        tempReleasePos = _posPoints[_posPoints.length - 2][axis];
                    } else {
                        lastFlickDuration = _getCurrentTime() - _gestureStartTime;
                        // total gesture duration
                        tempReleasePos = _startPoint[axis];
                    }
                    s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
                    s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
                    if (s.lastFlickDist[axis] > 20) {
                        s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
                    } else {
                        s.lastFlickSpeed[axis] = 0;
                    }
                    if (Math.abs(s.lastFlickSpeed[axis]) < .1) {
                        s.lastFlickSpeed[axis] = 0;
                    }
                    s.slowDownRatio[axis] = .95;
                    s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                    s.speedDecelerationRatio[axis] = 1;
                },
                calculateOverBoundsAnimOffset: function(axis, speed) {
                    if (!s.backAnimStarted[axis]) {
                        if (_panOffset[axis] > _currPanBounds.min[axis]) {
                            s.backAnimDestination[axis] = _currPanBounds.min[axis];
                        } else if (_panOffset[axis] < _currPanBounds.max[axis]) {
                            s.backAnimDestination[axis] = _currPanBounds.max[axis];
                        }
                        if (s.backAnimDestination[axis] !== undefined) {
                            s.slowDownRatio[axis] = .7;
                            s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                            if (s.speedDecelerationRatioAbs[axis] < .05) {
                                s.lastFlickSpeed[axis] = 0;
                                s.backAnimStarted[axis] = true;
                                _animateProp("bounceZoomPan" + axis, _panOffset[axis], s.backAnimDestination[axis], speed || 300, framework.easing.sine.out, function(pos) {
                                    _panOffset[axis] = pos;
                                    _applyCurrentZoomPan();
                                });
                            }
                        }
                    }
                },
                // Reduces the speed by slowDownRatio (per 10ms)
                calculateAnimOffset: function(axis) {
                    if (!s.backAnimStarted[axis]) {
                        s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + s.slowDownRatioReverse[axis] - s.slowDownRatioReverse[axis] * s.timeDiff / 10);
                        s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                        s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                        _panOffset[axis] += s.distanceOffset[axis];
                    }
                },
                panAnimLoop: function() {
                    if (_animations.zoomPan) {
                        _animations.zoomPan.raf = _requestAF(s.panAnimLoop);
                        s.now = _getCurrentTime();
                        s.timeDiff = s.now - s.lastNow;
                        s.lastNow = s.now;
                        s.calculateAnimOffset("x");
                        s.calculateAnimOffset("y");
                        _applyCurrentZoomPan();
                        s.calculateOverBoundsAnimOffset("x");
                        s.calculateOverBoundsAnimOffset("y");
                        if (s.speedDecelerationRatioAbs.x < .05 && s.speedDecelerationRatioAbs.y < .05) {
                            // round pan position
                            _panOffset.x = Math.round(_panOffset.x);
                            _panOffset.y = Math.round(_panOffset.y);
                            _applyCurrentZoomPan();
                            _stopAnimation("zoomPan");
                            return;
                        }
                    }
                }
            };
            return s;
        }, _completePanGesture = function(animData) {
            // calculate swipe speed for Y axis (paanning)
            animData.calculateSwipeSpeed("y");
            _currPanBounds = self.currItem.bounds;
            animData.backAnimDestination = {};
            animData.backAnimStarted = {};
            // Avoid acceleration animation if speed is too low
            if (Math.abs(animData.lastFlickSpeed.x) <= .05 && Math.abs(animData.lastFlickSpeed.y) <= .05) {
                animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;
                // Run pan drag release animation. E.g. if you drag image and release finger without momentum.
                animData.calculateOverBoundsAnimOffset("x");
                animData.calculateOverBoundsAnimOffset("y");
                return true;
            }
            // Animation loop that controls the acceleration after pan gesture ends
            _registerStartAnimation("zoomPan");
            animData.lastNow = _getCurrentTime();
            animData.panAnimLoop();
        }, _finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
            var itemChanged;
            if (!_mainScrollAnimating) {
                _currZoomedItemIndex = _currentItemIndex;
            }
            var itemsDiff;
            if (gestureType === "swipe") {
                var totalShiftDist = _currPoint.x - _startPoint.x, isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;
                // if container is shifted for more than MIN_SWIPE_DISTANCE, 
                // and last flick gesture was in right direction
                if (totalShiftDist > MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20)) {
                    // go to prev item
                    itemsDiff = -1;
                } else if (totalShiftDist < -MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20)) {
                    // go to next item
                    itemsDiff = 1;
                }
            }
            var nextCircle;
            if (itemsDiff) {
                _currentItemIndex += itemsDiff;
                if (_currentItemIndex < 0) {
                    _currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
                    nextCircle = true;
                } else if (_currentItemIndex >= _getNumItems()) {
                    _currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
                    nextCircle = true;
                }
                if (!nextCircle || _options.loop) {
                    _indexDiff += itemsDiff;
                    _currPositionIndex -= itemsDiff;
                    itemChanged = true;
                }
            }
            var animateToX = _slideSize.x * _currPositionIndex;
            var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
            var finishAnimDuration;
            if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
                // "return to current" duration, e.g. when dragging from slide 0 to -1
                finishAnimDuration = 333;
            } else {
                finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 333;
                finishAnimDuration = Math.min(finishAnimDuration, 400);
                finishAnimDuration = Math.max(finishAnimDuration, 250);
            }
            if (_currZoomedItemIndex === _currentItemIndex) {
                itemChanged = false;
            }
            _mainScrollAnimating = true;
            _shout("mainScrollAnimStart");
            _animateProp("mainScroll", _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, _moveMainScroll, function() {
                _stopAllAnimations();
                _mainScrollAnimating = false;
                _currZoomedItemIndex = -1;
                if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
                    self.updateCurrItem();
                }
                _shout("mainScrollAnimComplete");
            });
            if (itemChanged) {
                self.updateCurrItem(true);
            }
            return itemChanged;
        }, _calculateZoomLevel = function(touchesDistance) {
            return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
        }, // Resets zoom if it's out of bounds
        _completeZoomGesture = function() {
            var destZoomLevel = _currZoomLevel, minZoomLevel = _getMinZoomLevel(), maxZoomLevel = _getMaxZoomLevel();
            if (_currZoomLevel < minZoomLevel) {
                destZoomLevel = minZoomLevel;
            } else if (_currZoomLevel > maxZoomLevel) {
                destZoomLevel = maxZoomLevel;
            }
            var destOpacity = 1, onUpdate, initialOpacity = _bgOpacity;
            if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
                //_closedByScroll = true;
                self.close();
                return true;
            }
            if (_opacityChanged) {
                onUpdate = function(now) {
                    _applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
                };
            }
            self.zoomTo(destZoomLevel, 0, 300, framework.easing.cubic.out, onUpdate);
            return true;
        };
        _registerModule("Gestures", {
            publicMethods: {
                initGestures: function() {
                    // helper function that builds touch/pointer/mouse events
                    var addEventNames = function(pref, down, move, up, cancel) {
                        _dragStartEvent = pref + down;
                        _dragMoveEvent = pref + move;
                        _dragEndEvent = pref + up;
                        if (cancel) {
                            _dragCancelEvent = pref + cancel;
                        } else {
                            _dragCancelEvent = "";
                        }
                    };
                    _pointerEventEnabled = _features.pointerEvent;
                    if (_pointerEventEnabled && _features.touch) {
                        // we don't need touch events, if browser supports pointer events
                        _features.touch = false;
                    }
                    if (_pointerEventEnabled) {
                        if (navigator.pointerEnabled) {
                            addEventNames("pointer", "down", "move", "up", "cancel");
                        } else {
                            // IE10 pointer events are case-sensitive
                            addEventNames("MSPointer", "Down", "Move", "Up", "Cancel");
                        }
                    } else if (_features.touch) {
                        addEventNames("touch", "start", "move", "end", "cancel");
                        _likelyTouchDevice = true;
                    } else {
                        addEventNames("mouse", "down", "move", "up");
                    }
                    _upMoveEvents = _dragMoveEvent + " " + _dragEndEvent + " " + _dragCancelEvent;
                    _downEvents = _dragStartEvent;
                    if (_pointerEventEnabled && !_likelyTouchDevice) {
                        _likelyTouchDevice = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1;
                    }
                    // make variable public
                    self.likelyTouchDevice = _likelyTouchDevice;
                    _globalEventHandlers[_dragStartEvent] = _onDragStart;
                    _globalEventHandlers[_dragMoveEvent] = _onDragMove;
                    _globalEventHandlers[_dragEndEvent] = _onDragRelease;
                    // the Kraken
                    if (_dragCancelEvent) {
                        _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
                    }
                    // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
                    if (_features.touch) {
                        _downEvents += " mousedown";
                        _upMoveEvents += " mousemove mouseup";
                        _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                        _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                        _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
                    }
                    if (!_likelyTouchDevice) {
                        // don't allow pan to next slide from zoomed state on Desktop
                        _options.allowPanToNext = false;
                    }
                }
            }
        });
        /*>>gestures*/
        /*>>show-hide-transition*/
        /**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */
        var _showOrHideTimeout, _showOrHide = function(item, img, out, completeFn) {
            if (_showOrHideTimeout) {
                clearTimeout(_showOrHideTimeout);
            }
            _initialZoomRunning = true;
            _initialContentSet = true;
            // dimensions of small thumbnail {x:,y:,w:}.
            // Height is optional, as calculated based on large image.
            var thumbBounds;
            if (item.initialLayout) {
                thumbBounds = item.initialLayout;
                item.initialLayout = null;
            } else {
                thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
            }
            var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;
            var onComplete = function() {
                _stopAnimation("initialZoom");
                if (!out) {
                    _applyBgOpacity(1);
                    if (img) {
                        img.style.display = "block";
                    }
                    framework.addClass(template, "pswp--animated-in");
                    _shout("initialZoom" + (out ? "OutEnd" : "InEnd"));
                } else {
                    self.template.removeAttribute("style");
                    self.bg.removeAttribute("style");
                }
                if (completeFn) {
                    completeFn();
                }
                _initialZoomRunning = false;
            };
            // if bounds aren't provided, just open gallery without animation
            if (!duration || !thumbBounds || thumbBounds.x === undefined) {
                var finishWithoutAnimation = function() {
                    _shout("initialZoom" + (out ? "Out" : "In"));
                    _currZoomLevel = item.initialZoomLevel;
                    _equalizePoints(_panOffset, item.initialPosition);
                    _applyCurrentZoomPan();
                    // no transition
                    template.style.opacity = out ? 0 : 1;
                    _applyBgOpacity(1);
                    onComplete();
                };
                finishWithoutAnimation();
                return;
            }
            var startAnimation = function() {
                var closeWithRaf = _closedByScroll, fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
                // apply hw-acceleration to image
                if (item.miniImg) {
                    item.miniImg.style.webkitBackfaceVisibility = "hidden";
                }
                if (!out) {
                    _currZoomLevel = thumbBounds.w / item.w;
                    _panOffset.x = thumbBounds.x;
                    _panOffset.y = thumbBounds.y - _initalWindowScrollY;
                    self[fadeEverything ? "template" : "bg"].style.opacity = .001;
                    _applyCurrentZoomPan();
                }
                _registerStartAnimation("initialZoom");
                if (out && !closeWithRaf) {
                    framework.removeClass(template, "pswp--animated-in");
                }
                if (fadeEverything) {
                    if (out) {
                        framework[(closeWithRaf ? "remove" : "add") + "Class"](template, "pswp--animate_opacity");
                    } else {
                        setTimeout(function() {
                            framework.addClass(template, "pswp--animate_opacity");
                        }, 30);
                    }
                }
                _showOrHideTimeout = setTimeout(function() {
                    _shout("initialZoom" + (out ? "Out" : "In"));
                    if (!out) {
                        // "in" animation always uses CSS transitions (instead of rAF).
                        // CSS transition work faster here, 
                        // as developer may also want to animate other things, 
                        // like ui on top of sliding area, which can be animated just via CSS
                        _currZoomLevel = item.initialZoomLevel;
                        _equalizePoints(_panOffset, item.initialPosition);
                        _applyCurrentZoomPan();
                        _applyBgOpacity(1);
                        if (fadeEverything) {
                            template.style.opacity = 1;
                        } else {
                            _applyBgOpacity(1);
                        }
                        _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                    } else {
                        // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
                        var destZoomLevel = thumbBounds.w / item.w, initialPanOffset = {
                            x: _panOffset.x,
                            y: _panOffset.y
                        }, initialZoomLevel = _currZoomLevel, initalBgOpacity = _bgOpacity, onUpdate = function(now) {
                            if (now === 1) {
                                _currZoomLevel = destZoomLevel;
                                _panOffset.x = thumbBounds.x;
                                _panOffset.y = thumbBounds.y - _currentWindowScrollY;
                            } else {
                                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                                _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                                _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                            }
                            _applyCurrentZoomPan();
                            if (fadeEverything) {
                                template.style.opacity = 1 - now;
                            } else {
                                _applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
                            }
                        };
                        if (closeWithRaf) {
                            _animateProp("initialZoom", 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                        } else {
                            onUpdate(1);
                            _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                        }
                    }
                }, out ? 25 : 90);
            };
            startAnimation();
        };
        /*>>show-hide-transition*/
        /*>>items-controller*/
        /**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/
        var _items, _tempPanAreaSize = {}, _imagesToAppendPool = [], _initialContentSet, _initialZoomRunning, _controllerDefaultOptions = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: false,
            // TODO
            preload: [ 1, 1 ],
            getNumItemsFn: function() {
                return _items.length;
            }
        };
        var _getItemAt, _getNumItems, _initialIsLoop, _getZeroBounds = function() {
            return {
                center: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            };
        }, _calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH) {
            var bounds = item.bounds;
            // position of element when it's centered
            bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
            bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;
            // maximum pan position
            bounds.max.x = realPanElementW > _tempPanAreaSize.x ? Math.round(_tempPanAreaSize.x - realPanElementW) : bounds.center.x;
            bounds.max.y = realPanElementH > _tempPanAreaSize.y ? Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : bounds.center.y;
            // minimum pan position
            bounds.min.x = realPanElementW > _tempPanAreaSize.x ? 0 : bounds.center.x;
            bounds.min.y = realPanElementH > _tempPanAreaSize.y ? item.vGap.top : bounds.center.y;
        }, _calculateItemSize = function(item, viewportSize, zoomLevel) {
            if (item.src && !item.loadError) {
                var isInitial = !zoomLevel;
                if (isInitial) {
                    if (!item.vGap) {
                        item.vGap = {
                            top: 0,
                            bottom: 0
                        };
                    }
                    // allows overriding vertical margin for individual items
                    _shout("parseVerticalMargin", item);
                }
                _tempPanAreaSize.x = viewportSize.x;
                _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;
                if (isInitial) {
                    var hRatio = _tempPanAreaSize.x / item.w;
                    var vRatio = _tempPanAreaSize.y / item.h;
                    item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
                    //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;
                    var scaleMode = _options.scaleMode;
                    if (scaleMode === "orig") {
                        zoomLevel = 1;
                    } else if (scaleMode === "fit") {
                        zoomLevel = item.fitRatio;
                    }
                    if (zoomLevel > 1) {
                        zoomLevel = 1;
                    }
                    item.initialZoomLevel = zoomLevel;
                    if (!item.bounds) {
                        // reuse bounds object
                        item.bounds = _getZeroBounds();
                    }
                }
                if (!zoomLevel) {
                    return;
                }
                _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);
                if (isInitial && zoomLevel === item.initialZoomLevel) {
                    item.initialPosition = item.bounds.center;
                }
                return item.bounds;
            } else {
                item.w = item.h = 0;
                item.initialZoomLevel = item.fitRatio = 1;
                item.bounds = _getZeroBounds();
                item.initialPosition = item.bounds.center;
                // if it's not image, we return zero bounds (content is not zoomable)
                return item.bounds;
            }
            return false;
        }, _appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
            if (item.loadError) {
                return;
            }
            var animate, isSwiping = self.isDragging() && !self.isZooming(), slideMightBeVisible = index === _currentItemIndex || self.isMainScrollAnimating() || isSwiping;
            // fade in loaded image only when current holder is active, or might be visible
            if (!preventAnimation && (_likelyTouchDevice || _options.alwaysFadeIn) && slideMightBeVisible) {
                animate = true;
            }
            if (img) {
                if (animate) {
                    img.style.opacity = 0;
                }
                item.imageAppended = true;
                _setImageSize(img, item.w, item.h);
                baseDiv.appendChild(img);
                if (animate) {
                    setTimeout(function() {
                        img.style.opacity = 1;
                        if (keepPlaceholder) {
                            setTimeout(function() {
                                // hide image placeholder "behind"
                                if (item && item.loaded && item.placeholder) {
                                    item.placeholder.style.display = "none";
                                    item.placeholder = null;
                                }
                            }, 500);
                        }
                    }, 50);
                }
            }
        }, _preloadImage = function(item) {
            item.loading = true;
            item.loaded = false;
            var img = item.img = framework.createEl("pswp__img", "img");
            var onComplete = function() {
                item.loading = false;
                item.loaded = true;
                if (item.loadComplete) {
                    item.loadComplete(item);
                } else {
                    item.img = null;
                }
                img.onload = img.onerror = null;
                img = null;
            };
            img.onload = onComplete;
            img.onerror = function() {
                item.loadError = true;
                onComplete();
            };
            img.src = item.src;
            // + '?a=' + Math.random();
            return img;
        }, _checkForError = function(item, cleanUp) {
            if (item.src && item.loadError && item.container) {
                if (cleanUp) {
                    item.container.innerHTML = "";
                }
                item.container.innerHTML = _options.errorMsg.replace("%url%", item.src);
                return true;
            }
        }, _setImageSize = function(img, w, h) {
            img.style.width = w + "px";
            img.style.height = h + "px";
        }, _appendImagesPool = function() {
            if (_imagesToAppendPool.length) {
                var poolItem;
                for (var i = 0; i < _imagesToAppendPool.length; i++) {
                    poolItem = _imagesToAppendPool[i];
                    if (poolItem.holder.index === poolItem.index) {
                        _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img);
                    }
                }
                _imagesToAppendPool = [];
            }
        };
        _registerModule("Controller", {
            publicMethods: {
                lazyLoadItem: function(index) {
                    index = _getLoopedId(index);
                    var item = _getItemAt(index);
                    if (!item || item.loaded || item.loading) {
                        return;
                    }
                    _shout("gettingData", index, item);
                    if (!item.src) {
                        return;
                    }
                    _preloadImage(item);
                },
                initController: function() {
                    framework.extend(_options, _controllerDefaultOptions, true);
                    self.items = _items = items;
                    _getItemAt = self.getItemAt;
                    _getNumItems = _options.getNumItemsFn;
                    //self.getNumItems;
                    _initialIsLoop = _options.loop;
                    if (_getNumItems() < 3) {
                        _options.loop = false;
                    }
                    _listen("beforeChange", function(diff) {
                        var p = _options.preload, isNext = diff === null ? true : diff > 0, preloadBefore = Math.min(p[0], _getNumItems()), preloadAfter = Math.min(p[1], _getNumItems()), i;
                        for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                            self.lazyLoadItem(_currentItemIndex + i);
                        }
                        for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                            self.lazyLoadItem(_currentItemIndex - i);
                        }
                    });
                    _listen("initialLayout", function() {
                        self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
                    });
                    _listen("mainScrollAnimComplete", _appendImagesPool);
                    _listen("initialZoomInEnd", _appendImagesPool);
                    _listen("destroy", function() {
                        var item;
                        for (var i = 0; i < _items.length; i++) {
                            item = _items[i];
                            // remove reference to DOM elements, for GC
                            if (item.container) {
                                item.container = null;
                            }
                            if (item.placeholder) {
                                item.placeholder = null;
                            }
                            if (item.img) {
                                item.img = null;
                            }
                            if (item.preloader) {
                                item.preloader = null;
                            }
                            if (item.loadError) {
                                item.loaded = item.loadError = false;
                            }
                        }
                        _imagesToAppendPool = null;
                    });
                },
                getItemAt: function(index) {
                    if (index >= 0) {
                        return _items[index] !== undefined ? _items[index] : false;
                    }
                    return false;
                },
                allowProgressiveImg: function() {
                    // 1. Progressive image loading isn't working on webkit/blink 
                    //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
                    //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
                    //    
                    // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
                    //    That's why it's disabled on touch devices (mainly because of swipe transition)
                    //    
                    // 3. Progressive image loading sometimes doesn't work in IE (up to 11).
                    // Don't allow progressive loading on non-large touch devices
                    return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
                },
                setContent: function(holder, index) {
                    if (_options.loop) {
                        index = _getLoopedId(index);
                    }
                    var prevItem = self.getItemAt(holder.index);
                    if (prevItem) {
                        prevItem.container = null;
                    }
                    var item = self.getItemAt(index), img;
                    if (!item) {
                        holder.el.innerHTML = "";
                        return;
                    }
                    // allow to override data
                    _shout("gettingData", index, item);
                    holder.index = index;
                    holder.item = item;
                    // base container DIV is created only once for each of 3 holders
                    var baseDiv = item.container = framework.createEl("pswp__zoom-wrap");
                    if (!item.src && item.html) {
                        if (item.html.tagName) {
                            baseDiv.appendChild(item.html);
                        } else {
                            baseDiv.innerHTML = item.html;
                        }
                    }
                    _checkForError(item);
                    if (item.src && !item.loadError && !item.loaded) {
                        item.loadComplete = function(item) {
                            // gallery closed before image finished loading
                            if (!_isOpen) {
                                return;
                            }
                            // Apply hw-acceleration only after image is loaded.
                            // This is webkit progressive image loading bugfix.
                            // https://bugs.webkit.org/show_bug.cgi?id=108630
                            // https://code.google.com/p/chromium/issues/detail?id=404547
                            if (item.img) {
                                item.img.style.webkitBackfaceVisibility = "hidden";
                            }
                            // check if holder hasn't changed while image was loading
                            if (holder && holder.index === index) {
                                if (_checkForError(item, true)) {
                                    item.loadComplete = item.img = null;
                                    _calculateItemSize(item, _viewportSize);
                                    _applyZoomPanToItem(item);
                                    if (holder.index === _currentItemIndex) {
                                        // recalculate dimensions
                                        self.updateCurrZoomItem();
                                    }
                                    return;
                                }
                                if (!item.imageAppended) {
                                    if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
                                        _imagesToAppendPool.push({
                                            item: item,
                                            baseDiv: baseDiv,
                                            img: item.img,
                                            index: index,
                                            holder: holder
                                        });
                                    } else {
                                        _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning);
                                    }
                                } else {
                                    // remove preloader & mini-img
                                    if (!_initialZoomRunning && item.placeholder) {
                                        item.placeholder.style.display = "none";
                                        item.placeholder = null;
                                    }
                                }
                            }
                            item.loadComplete = null;
                            item.img = null;
                            // no need to store image element after it's added
                            _shout("imageLoadComplete", index, item);
                        };
                        if (framework.features.transform) {
                            var placeholderClassName = "pswp__img pswp__img--placeholder";
                            placeholderClassName += item.msrc ? "" : " pswp__img--placeholder--blank";
                            var placeholder = framework.createEl(placeholderClassName, item.msrc ? "img" : "");
                            if (item.msrc) {
                                placeholder.src = item.msrc;
                            }
                            _setImageSize(placeholder, item.w, item.h);
                            baseDiv.appendChild(placeholder);
                            item.placeholder = placeholder;
                        }
                        if (!item.loading) {
                            _preloadImage(item);
                        }
                        if (self.allowProgressiveImg()) {
                            // just append image
                            if (!_initialContentSet && _features.transform) {
                                _imagesToAppendPool.push({
                                    item: item,
                                    baseDiv: baseDiv,
                                    img: item.img,
                                    index: index,
                                    holder: holder
                                });
                            } else {
                                _appendImage(index, item, baseDiv, item.img, true, true);
                            }
                        }
                    } else if (item.src && !item.loadError) {
                        // image object is created every time, due to bugs of image loading & delay when switching images
                        img = framework.createEl("pswp__img", "img");
                        img.style.webkitBackfaceVisibility = "hidden";
                        img.style.opacity = 1;
                        img.src = item.src;
                        _setImageSize(img, item.w, item.h);
                        _appendImage(index, item, baseDiv, img, true);
                    }
                    _calculateItemSize(item, _viewportSize);
                    if (!_initialContentSet && index === _currentItemIndex) {
                        _currZoomElementStyle = baseDiv.style;
                        _showOrHide(item, img || item.img);
                    } else {
                        _applyZoomPanToItem(item);
                    }
                    holder.el.innerHTML = "";
                    holder.el.appendChild(baseDiv);
                },
                cleanSlide: function(item) {
                    if (item.img) {
                        item.img.onload = item.img.onerror = null;
                    }
                    item.loaded = item.loading = item.img = item.imageAppended = false;
                }
            }
        });
        /*>>items-controller*/
        /*>>tap*/
        /**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */
        var tapTimer, tapReleasePoint = {}, _dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
            var e = document.createEvent("CustomEvent"), eDetail = {
                origEvent: origEvent,
                target: origEvent.target,
                releasePoint: releasePoint,
                pointerType: pointerType || "touch"
            };
            e.initCustomEvent("pswpTap", true, true, eDetail);
            origEvent.target.dispatchEvent(e);
        };
        _registerModule("Tap", {
            publicMethods: {
                initTap: function() {
                    _listen("firstTouchStart", self.onTapStart);
                    _listen("touchRelease", self.onTapRelease);
                    _listen("destroy", function() {
                        tapReleasePoint = {};
                        tapTimer = null;
                    });
                },
                onTapStart: function(touchList) {
                    if (touchList.length > 1) {
                        clearTimeout(tapTimer);
                        tapTimer = null;
                    }
                },
                onTapRelease: function(e, releasePoint) {
                    if (!releasePoint) {
                        return;
                    }
                    if (!_moved && !_isMultitouch && !_numAnimations) {
                        var p0 = releasePoint;
                        if (tapTimer) {
                            clearTimeout(tapTimer);
                            tapTimer = null;
                            // Check if taped on the same place
                            if (_isNearbyPoints(p0, tapReleasePoint)) {
                                _shout("doubleTap", p0);
                                return;
                            }
                        }
                        if (releasePoint.type === "mouse") {
                            _dispatchTapEvent(e, releasePoint, "mouse");
                            return;
                        }
                        var clickedTagName = e.target.tagName.toUpperCase();
                        // avoid double tap delay on buttons and elements that have class pswp__single-tap
                        if (clickedTagName === "BUTTON" || framework.hasClass(e.target, "pswp__single-tap")) {
                            _dispatchTapEvent(e, releasePoint);
                            return;
                        }
                        _equalizePoints(tapReleasePoint, p0);
                        tapTimer = setTimeout(function() {
                            _dispatchTapEvent(e, releasePoint);
                            tapTimer = null;
                        }, 300);
                    }
                }
            }
        });
        /*>>tap*/
        /*>>desktop-zoom*/
        /**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */
        var _wheelDelta;
        _registerModule("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    if (_oldIE) {
                        // no zoom for old IE (<=8)
                        return;
                    }
                    if (_likelyTouchDevice) {
                        // if detected hardware touch support, we wait until mouse is used,
                        // and only then apply desktop-zoom features
                        _listen("mouseUsed", function() {
                            self.setupDesktopZoom();
                        });
                    } else {
                        self.setupDesktopZoom(true);
                    }
                },
                setupDesktopZoom: function(onInit) {
                    _wheelDelta = {};
                    var events = "wheel mousewheel DOMMouseScroll";
                    _listen("bindEvents", function() {
                        framework.bind(template, events, self.handleMouseWheel);
                    });
                    _listen("unbindEvents", function() {
                        if (_wheelDelta) {
                            framework.unbind(template, events, self.handleMouseWheel);
                        }
                    });
                    self.mouseZoomedIn = false;
                    var hasDraggingClass, updateZoomable = function() {
                        if (self.mouseZoomedIn) {
                            framework.removeClass(template, "pswp--zoomed-in");
                            self.mouseZoomedIn = false;
                        }
                        if (_currZoomLevel < 1) {
                            framework.addClass(template, "pswp--zoom-allowed");
                        } else {
                            framework.removeClass(template, "pswp--zoom-allowed");
                        }
                        removeDraggingClass();
                    }, removeDraggingClass = function() {
                        if (hasDraggingClass) {
                            framework.removeClass(template, "pswp--dragging");
                            hasDraggingClass = false;
                        }
                    };
                    _listen("resize", updateZoomable);
                    _listen("afterChange", updateZoomable);
                    _listen("pointerDown", function() {
                        if (self.mouseZoomedIn) {
                            hasDraggingClass = true;
                            framework.addClass(template, "pswp--dragging");
                        }
                    });
                    _listen("pointerUp", removeDraggingClass);
                    if (!onInit) {
                        updateZoomable();
                    }
                },
                handleMouseWheel: function(e) {
                    if (_currZoomLevel <= self.currItem.fitRatio) {
                        if (_options.modal) {
                            if (!_options.closeOnScroll) {
                                e.preventDefault();
                            } else if (_transformKey && Math.abs(e.deltaY) > 2) {
                                // close PhotoSwipe
                                // if browser supports transforms & scroll changed enough
                                _closedByScroll = true;
                                self.close();
                            }
                        }
                        return true;
                    }
                    // allow just one event to fire
                    e.stopPropagation();
                    // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
                    _wheelDelta.x = 0;
                    if ("deltaX" in e) {
                        if (e.deltaMode === 1) {
                            // 18 - average line height
                            _wheelDelta.x = e.deltaX * 18;
                            _wheelDelta.y = e.deltaY * 18;
                        } else {
                            _wheelDelta.x = e.deltaX;
                            _wheelDelta.y = e.deltaY;
                        }
                    } else if ("wheelDelta" in e) {
                        if (e.wheelDeltaX) {
                            _wheelDelta.x = -.16 * e.wheelDeltaX;
                        }
                        if (e.wheelDeltaY) {
                            _wheelDelta.y = -.16 * e.wheelDeltaY;
                        } else {
                            _wheelDelta.y = -.16 * e.wheelDelta;
                        }
                    } else if ("detail" in e) {
                        _wheelDelta.y = e.detail;
                    } else {
                        return;
                    }
                    _calculatePanBounds(_currZoomLevel, true);
                    var newPanX = _panOffset.x - _wheelDelta.x, newPanY = _panOffset.y - _wheelDelta.y;
                    // only prevent scrolling in nonmodal mode when not at edges
                    if (_options.modal || newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x && newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y) {
                        e.preventDefault();
                    }
                    // TODO: use rAF instead of mousewheel?
                    self.panTo(newPanX, newPanY);
                },
                toggleDesktopZoom: function(centerPoint) {
                    centerPoint = centerPoint || {
                        x: _viewportSize.x / 2 + _offset.x,
                        y: _viewportSize.y / 2 + _offset.y
                    };
                    var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
                    var zoomOut = _currZoomLevel === doubleTapZoomLevel;
                    self.mouseZoomedIn = !zoomOut;
                    self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
                    framework[(!zoomOut ? "add" : "remove") + "Class"](template, "pswp--zoomed-in");
                }
            }
        });
        /*>>desktop-zoom*/
        /*>>history*/
        /**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */
        var _historyDefaultOptions = {
            history: true,
            galleryUID: 1
        };
        var _historyUpdateTimeout, _hashChangeTimeout, _hashAnimCheckTimeout, _hashChangedByScript, _hashChangedByHistory, _hashReseted, _initialHash, _historyChanged, _closedFromURL, _urlChangedOnce, _windowLoc, _supportsPushState, _getHash = function() {
            return _windowLoc.hash.substring(1);
        }, _cleanHistoryTimeouts = function() {
            if (_historyUpdateTimeout) {
                clearTimeout(_historyUpdateTimeout);
            }
            if (_hashAnimCheckTimeout) {
                clearTimeout(_hashAnimCheckTimeout);
            }
        }, // pid - Picture index
        // gid - Gallery index
        _parseItemIndexFromURL = function() {
            var hash = _getHash(), params = {};
            if (hash.length < 5) {
                // pid=1
                return params;
            }
            var i, vars = hash.split("&");
            for (i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split("=");
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }
            if (_options.galleryPIDs) {
                // detect custom pid in hash and search for it among the items collection
                var searchfor = params.pid;
                params.pid = 0;
                // if custom pid cannot be found, fallback to the first item
                for (i = 0; i < _items.length; i++) {
                    if (_items[i].pid === searchfor) {
                        params.pid = i;
                        break;
                    }
                }
            } else {
                params.pid = parseInt(params.pid, 10) - 1;
            }
            if (params.pid < 0) {
                params.pid = 0;
            }
            return params;
        }, _updateHash = function() {
            if (_hashAnimCheckTimeout) {
                clearTimeout(_hashAnimCheckTimeout);
            }
            if (_numAnimations || _isDragging) {
                // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
                // that's why we update hash only when no animations running
                _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
                return;
            }
            if (_hashChangedByScript) {
                clearTimeout(_hashChangeTimeout);
            } else {
                _hashChangedByScript = true;
            }
            var pid = _currentItemIndex + 1;
            var item = _getItemAt(_currentItemIndex);
            if (item.hasOwnProperty("pid")) {
                // carry forward any custom pid assigned to the item
                pid = item.pid;
            }
            var newHash = _initialHash + "&" + "gid=" + _options.galleryUID + "&" + "pid=" + pid;
            if (!_historyChanged) {
                if (_windowLoc.hash.indexOf(newHash) === -1) {
                    _urlChangedOnce = true;
                }
            }
            var newURL = _windowLoc.href.split("#")[0] + "#" + newHash;
            if (_supportsPushState) {
                if ("#" + newHash !== window.location.hash) {
                    history[_historyChanged ? "replaceState" : "pushState"]("", document.title, newURL);
                }
            } else {
                if (_historyChanged) {
                    _windowLoc.replace(newURL);
                } else {
                    _windowLoc.hash = newHash;
                }
            }
            _historyChanged = true;
            _hashChangeTimeout = setTimeout(function() {
                _hashChangedByScript = false;
            }, 60);
        };
        _registerModule("History", {
            publicMethods: {
                initHistory: function() {
                    framework.extend(_options, _historyDefaultOptions, true);
                    if (!_options.history) {
                        return;
                    }
                    _windowLoc = window.location;
                    _urlChangedOnce = false;
                    _closedFromURL = false;
                    _historyChanged = false;
                    _initialHash = _getHash();
                    _supportsPushState = "pushState" in history;
                    if (_initialHash.indexOf("gid=") > -1) {
                        _initialHash = _initialHash.split("&gid=")[0];
                        _initialHash = _initialHash.split("?gid=")[0];
                    }
                    _listen("afterChange", self.updateURL);
                    _listen("unbindEvents", function() {
                        framework.unbind(window, "hashchange", self.onHashChange);
                    });
                    var returnToOriginal = function() {
                        _hashReseted = true;
                        if (!_closedFromURL) {
                            if (_urlChangedOnce) {
                                history.back();
                            } else {
                                if (_initialHash) {
                                    _windowLoc.hash = _initialHash;
                                } else {
                                    if (_supportsPushState) {
                                        // remove hash from url without refreshing it or scrolling to top
                                        history.pushState("", document.title, _windowLoc.pathname + _windowLoc.search);
                                    } else {
                                        _windowLoc.hash = "";
                                    }
                                }
                            }
                        }
                        _cleanHistoryTimeouts();
                    };
                    _listen("unbindEvents", function() {
                        if (_closedByScroll) {
                            // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
                            // this is done to keep the scroll position
                            returnToOriginal();
                        }
                    });
                    _listen("destroy", function() {
                        if (!_hashReseted) {
                            returnToOriginal();
                        }
                    });
                    _listen("firstUpdate", function() {
                        _currentItemIndex = _parseItemIndexFromURL().pid;
                    });
                    var index = _initialHash.indexOf("pid=");
                    if (index > -1) {
                        _initialHash = _initialHash.substring(0, index);
                        if (_initialHash.slice(-1) === "&") {
                            _initialHash = _initialHash.slice(0, -1);
                        }
                    }
                    setTimeout(function() {
                        if (_isOpen) {
                            // hasn't destroyed yet
                            framework.bind(window, "hashchange", self.onHashChange);
                        }
                    }, 40);
                },
                onHashChange: function() {
                    if (_getHash() === _initialHash) {
                        _closedFromURL = true;
                        self.close();
                        return;
                    }
                    if (!_hashChangedByScript) {
                        _hashChangedByHistory = true;
                        self.goTo(_parseItemIndexFromURL().pid);
                        _hashChangedByHistory = false;
                    }
                },
                updateURL: function() {
                    // Delay the update of URL, to avoid lag during transition, 
                    // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
                    _cleanHistoryTimeouts();
                    if (_hashChangedByHistory) {
                        return;
                    }
                    if (!_historyChanged) {
                        _updateHash();
                    } else {
                        _historyUpdateTimeout = setTimeout(_updateHash, 800);
                    }
                }
            }
        });
        /*>>history*/
        framework.extend(self, publicMethods);
    };
    return PhotoSwipe;
});

/********************
		HEADER
*********************/
$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
        $("header").addClass("scroll-header");
        $(".menu").addClass("scroll-menu");
        $(".carrousel").addClass("remove-margin");
    } else {
        $("header").removeClass("scroll-header");
        $(".menu").removeClass("scroll-menu");
        $(".carrousel").removeClass("remove-margin");
    }
});

/********************
		MENU
*********************/
$(".menu-anchor").on("click touchstart", function(e) {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
    $("html").toggleClass("menu-active");
    e.preventDefault();
});

$(".menu menu ul li a").on("click touchstart", function(e) {
    $("html").removeClass("menu-active");
});

/********************
		MAPS
*********************/
$("#map").addClass("scrolloff");

// set the pointer events to none on doc ready
$(".place").on("click", function() {
    $("#map").removeClass("scrolloff");
});

// you want to disable pointer events when the mouse leave the canvas area;
$("#map").mouseleave(function() {
    $("#map").addClass("scrolloff");
});

/********************
	  GALLERY
*********************/
var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll(".pswp")[0];
    // build items array
    var items = [];
    var totalPhotos = 21;
    for (i = 1; i <= totalPhotos; i++) {
        photo = {
            src: "static/img/gallery/" + i + ".jpg",
            w: 800,
            h: 600
        };
        items.push(photo);
    }
    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0
    };
    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

$("#gallery").on("click", function() {
    openPhotoSwipe();
});

/********************
 SOCIAL SHARE LINKS
*********************/
$(".fb-link").on("click", function(e) {
    e.preventDefault();
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + window.location.href, "facebook_share", "height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no");
});

$(".tw-link").on("click", function(e) {
    e.preventDefault();
    window.open("http://twitter.com/share?url=" + window.location.href, "twitter_share", "height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no");
});

$(".gp-link").on("click", function(e) {
    e.preventDefault();
    window.open("https://plus.google.com/share?url=" + window.location.href, "twitter_share", "height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no");
});