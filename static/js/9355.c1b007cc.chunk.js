"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [9355], {
        39355: (e, t, n) => {
            n.r(t), n.d(t, {
                Banner: () => C,
                default: () => C
            });
            var o = n(56666),
                r = n(76854),
                a = n(2784),
                l = n(72779),
                c = n.n(l),
                p = n(37149),
                i = n.n(p),
                s = n(42191),
                u = n(1966),
                _ = n(84238),
                d = n(14863),
                f = n(51301),
                b = n(53646),
                y = n(91782),
                m = n(52322);

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = (0, a.lazy)((function() {
                    return n.e(4009).then(n.bind(n, 44009))
                })),
                v = (0, a.lazy)((function() {
                    return Promise.all([n.e(7229), n.e(7136)]).then(n.bind(n, 67229))
                })),
                P = (0, a.lazy)((function() {
                    return n.e(9458).then(n.bind(n, 39458))
                })),
                S = (0, a.lazy)((function() {
                    return n.e(9651).then(n.bind(n, 49651))
                })),
                g = (0, a.lazy)((function() {
                    return n.e(8856).then(n.bind(n, 88856))
                })),
                x = (0, a.lazy)((function() {
                    return Promise.all([n.e(7499), n.e(4602), n.e(8177), n.e(8392)]).then(n.bind(n, 38392))
                })),
                k = (0, a.lazy)((function() {
                    return Promise.all([n.e(7499), n.e(4602), n.e(8915), n.e(5737)]).then(n.bind(n, 38331))
                }));
            i().setAppElement("#mf-root");
            var C = function(e) {
                var t = e.initEvent,
                    n = e.listenFor,
                    l = (0, a.useState)({
                        modalIsOpen: !1,
                        componentList: []
                    }),
                    p = (0, r.Z)(l, 2),
                    i = p[0],
                    O = p[1],
                    C = function(e) {
                        var t = e.title,
                            n = e.body,
                            o = e.name,
                            r = e.style,
                            a = e.pageOffsetStyles,
                            l = e.animate,
                            c = (0, s.f5)(E, e);
                        O(h(h({}, i), {}, {
                            modalIsOpen: !0,
                            title: t,
                            body: n,
                            name: o,
                            pageOffsetStyles: a,
                            style: r,
                            animate: l,
                            componentList: c
                        })), (0, b.Kz)("Popup", o, "open"), (0, b.k8)("popup", {
                            action: "open",
                            name: o
                        })
                    };
                (0, a.useEffect)((function() {
                    return n && (0, b.sf)(n)
                }), [n, i]);
                var w = function() {
                        var e = i.name;
                        ! function() {
                            if (document.getElementById("nextPageStyles")) {
                                var e = document.getElementById("nextPageStyles");
                                e.parentNode.removeChild(e)
                            }
                        }(), O(h(h({}, i), {}, {
                            modalIsOpen: !1
                        })), (0, b.Kz)("Popup", e, "close"), (0, b.k8)("popup", {
                            action: "close",
                            name: e
                        })
                    },
                    E = {
                        shareButtons: (0, m.jsx)(j, {}),
                        shareModal: (0, m.jsx)(v, {}),
                        link: (0, m.jsx)(d.Gt, {}),
                        dismissButton: (0, m.jsx)(_.z, {
                            color: "red",
                            type: "thin",
                            onClick: w
                        }),
                        closeButton: (0, m.jsx)(P, {
                            onClick: w
                        }),
                        acceptCookie: (0, m.jsx)(S, {
                            onClick: w
                        }),
                        acceptAllCookie: (0, m.jsx)(S, {
                            onClick: w,
                            acceptAll: !0
                        }),
                        acceptCloseButton: (0, m.jsx)(S, {
                            onClick: w,
                            closeButton: !0
                        }),
                        addToHomeScreen: (0, m.jsx)(g, {
                            onClick: w
                        }),
                        newsletterForm: (0, m.jsx)(x, {
                            location: "Banner"
                        }),
                        signupForm: (0, m.jsx)(k, {
                            location: "Banner"
                        })
                    };
                (0, a.useEffect)((function() {
                    t && C(t)
                }), []);
                var B = i.modalIsOpen,
                    R = i.name,
                    z = i.title,
                    N = i.animate,
                    M = i.componentList;
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(f.hX, {
                        eventName: n,
                        onEvent: C
                    }), B && (0, m.jsxs)("div", h(h({}, R && {
                        id: (0, u.U)(R)
                    }), {}, {
                        className: c()(y.Z.banner, (0, o.Z)({}, y.Z.banner__animate, N)),
                        style: function() {
                            var e = i.style,
                                t = i.pageOffsetStyles;
                            return e = e ? h({}, e) : {}, t && function() {
                                var e = !!document.getElementById("nextPageStyles"),
                                    t = i.pageOffsetStyles;
                                if (!e && t) {
                                    var n = document.createElement("style");
                                    n.id = "nextPageStyles", n.innerHTML = ".page ".concat(t), document.body.appendChild(n)
                                }
                            }(), e.boxShadow = e.boxShadow || "0 1px 3px 2px rgba(0,0,0,.15)", e.background = e.background || "#4062bb", e.color = e.color || "#fff", e.fontSize = e.fontSize || "1.5rem", e.fontWeight = e.fontWeight || "500", e.fontFamily = e.fontFamily || "Nunito Sans,-apple-system,blinkmacsystemfont,Segoe UI,roboto,Helvetica Neue,arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji", e
                        }(),
                        children: [z && (0, m.jsx)("div", {
                            className: y.Z.banner__title,
                            dangerouslySetInnerHTML: {
                                __html: z.text
                            },
                            style: z.style
                        }), (0, m.jsx)("div", {
                            className: y.Z.banner__cta,
                            style: z.ctaStyle,
                            children: (0, s.OQ)(M, ["closeButton", "acceptCloseButton"], !0)
                        }), (0, s.OQ)(M, ["closeButton", "acceptCloseButton"], !1)]
                    }))]
                })
            }
        },
        42191: (e, t, n) => {
            n.d(t, {
                OQ: () => i,
                f5: () => p
            });
            var o = n(56666),
                r = n(2784);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var c = function(e) {
                    return delete e.component, delete e.componentName, e
                },
                p = function(e, t) {
                    var n = Object.keys(e);
                    return Object.keys(t).map((function(o) {
                        var r = n.find((function(e) {
                            return o.startsWith(e)
                        }));
                        if (r) {
                            var a = t[o];
                            return a.component = e[r], a.componentName = r, a
                        }
                    })).filter(Boolean)
                },
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return t && (e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? e.filter((function(e) {
                        return !t.includes(e.componentName)
                    })) : e.filter((function(e) {
                        return t.includes(e.componentName)
                    }))), e.map((function(e, t) {
                        return (0, r.cloneElement)(e.component, c(l(l({}, e), {}, {
                            label: null === e || void 0 === e ? void 0 : e.text,
                            key: t
                        })))
                    }))
                }
        },
        91782: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            const o = {
                ReactModal__Overlay: "PopupShared_ReactModal__Overlay__AzRuJ",
                "ReactModal__Overlay--after-open": "PopupShared_ReactModal__Overlay--after-open__8Q4o8",
                "ReactModal__Overlay--before-close": "PopupShared_ReactModal__Overlay--before-close__KeiBx",
                ReactModal__Content: "PopupShared_ReactModal__Content__MGaVO",
                "popup-body": "PopupShared_popup-body__-hujZ",
                "popup-body__close": "PopupShared_popup-body__close__+7RRg",
                "popup-body__title": "PopupShared_popup-body__title__6XL5r",
                "popup-body__content": "PopupShared_popup-body__content__7-7tR",
                "modal-body": "PopupShared_modal-body__P4RTh",
                "modal-body__close": "PopupShared_modal-body__close__Fyot3",
                "modal-body__title": "PopupShared_modal-body__title__5CaRk",
                "modal-body__content": "PopupShared_modal-body__content__eNO6b",
                banner: "PopupShared_banner__J9i6C",
                banner__animate: "PopupShared_banner__animate__pbEA8",
                banner__title: "PopupShared_banner__title__wRThi",
                banner__close: "PopupShared_banner__close__GOH9o",
                banner__cta: "PopupShared_banner__cta__tzgc1"
            }
        }
    }
]);
//# sourceMappingURL=9355.c1b007cc.chunk.js.map