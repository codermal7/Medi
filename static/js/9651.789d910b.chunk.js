"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [9651, 9458], {
        41028: (e, t, r) => {
            r.d(t, {
                y: () => l
            });
            var o = r(54645),
                n = r(52322),
                l = function(e) {
                    var t, r = e.color,
                        l = e.strokeWidth;
                    l || (l = "1.5");
                    var c = null !== (t = (0, o.G)(r)) && void 0 !== t ? t : (0, o.G)("blue");
                    return (0, n.jsxs)("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 15 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("path", {
                            d: "M7.48529 13C10.799 13 13.4853 10.3137 13.4853 7C13.4853 3.68629 10.799 1 7.48529 1C4.17158 1 1.48529 3.68629 1.48529 7C1.48529 10.3137 4.17158 13 7.48529 13Z",
                            stroke: c,
                            strokeWidth: l,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, n.jsx)("path", {
                            d: "M9.28506 5.19983L5.68506 8.79983",
                            stroke: c,
                            strokeWidth: l,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, n.jsx)("path", {
                            d: "M5.68506 5.19983L9.28506 8.79983",
                            stroke: c,
                            strokeWidth: l,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }
        },
        49651: (e, t, r) => {
            r.r(t), r.d(t, {
                AcceptCookieButton: () => f,
                default: () => f
            });
            var o = r(56666),
                n = r(84238),
                l = r(53646),
                c = r(39458),
                i = r(52322);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var f = function(e) {
                var t = e.onClick,
                    r = e.closeButton,
                    o = (e.style, e.text),
                    a = e.acceptAll,
                    f = void 0 !== a && a,
                    s = f ? "all" : "minimum",
                    b = function() {
                        f ? ((0, l.Kz)("Cookies", "Accept All"), (0, l.k8)("accept_cookies", {
                            type: s
                        })) : ((0, l.Kz)("Cookies", "Accept"), (0, l.k8)("accept_cookies", {
                            type: s
                        })), (0, l.A2)({
                            ad: "all" === s,
                            analytics: "all" === s
                        }), t && t()
                    };
                return r ? (0, i.jsx)(c.PopupCloseButton, u(u({}, e), {}, {
                    onClick: b
                })) : (0, i.jsx)(n.z, u(u({
                    color: "red",
                    type: "thin",
                    id: "accept-cookie-button"
                }, e), {}, {
                    label: o,
                    focus: o ? "underline" : "outline",
                    onClick: b
                }))
            }
        },
        39458: (e, t, r) => {
            r.r(t), r.d(t, {
                PopupCloseButton: () => s,
                default: () => s
            });
            var o = r(56666),
                n = r(41028),
                l = r(1966),
                c = r(84238),
                i = r(91782),
                a = r(52322);

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var s = function(e) {
                return (0, a.jsx)(c.z, f(f({
                    color: "transparent",
                    classes: {
                        container: i.Z.banner__close
                    },
                    type: "thin"
                }, e), {}, {
                    id: "".concat(e.name ? (0, l.U)(e.name) + "-" : "", "modal-close"),
                    icon: (0, a.jsx)(n.y, {
                        color: e.style && e.style.color ? e.style.color : "#fff"
                    })
                }))
            }
        },
        54645: (e, t, r) => {
            r.d(t, {
                G: () => i
            });
            var o, n = r(56666),
                l = ["DEV", "LOCAL"].includes("PROD"),
                c = (o = {
                    blue: "#4062bb",
                    blueAlt1: "#4461b7",
                    blueAlt2: "#4761b5",
                    blueHover: "#2c4482",
                    darkBlue: "#242a45",
                    darkBlueAlt1: "#112053",
                    darkBlueText: "rgba($darkBlue, 0.8)",
                    darkBlueAlt2: "#0b206e",
                    lightGray: "#ebebeb",
                    paleBlue: "#f7f8fe",
                    lightGrey: "#f7f7f7",
                    lightGreyAlt1: "#f7f8fc",
                    lightGreyBlue: "#f7f9ff",
                    highlightLightBlue: "#ebedff",
                    greyText: "#3a3f58",
                    blueText: "#2e4685",
                    mediumGreyText: "#636573",
                    lightGreyText: "#c4c4c4",
                    disabledGrey: "#9497a4",
                    red: "#e94156",
                    errorRed: "#e31818",
                    slightlyLightRed: "#e24352",
                    headerLightBlue: "#eff2ff",
                    headerLightBlue50Lighter: "#f7f8ff",
                    headerLightBlue50Lighter75Opacity: "#f4f6ffbf",
                    latestAdvanceColor: "#645da2",
                    white: "#fff",
                    hrColor: "#ddd",
                    buttonBlue: "$blue",
                    buttonDarkBlue: "#293f94",
                    buttonLightBlue: "#bdcaff",
                    buttonLightBlueAlt1: "#b3c1ff",
                    buttonSecondaryBlue: "$highlightLightBlue",
                    buttonGray: "#f4f4f4",
                    buttonTextBlue: "$blue",
                    buttonTextGray: "rgba(36, 42, 69, 0.5)",
                    microShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
                    tinyShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    smallShadow: "0 9px 20px rgba(0, 0, 0, 0.15), 0 2px 9px rgba(0, 0, 0, 0.1)",
                    bigShadow: "0 10px 20px 0 rgba(25, 36, 67, 0.08)",
                    tier1: "$blue",
                    tier2: "#022172",
                    tier3: "#810196",
                    tier4: "#f52e4d",
                    ebonyClay: "$darkBlue"
                }, (0, n.Z)(o, "white", "#fff"), (0, n.Z)(o, "black", "#000"), (0, n.Z)(o, "transparent", "#0000"), o),
                i = function e(t) {
                    var r, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = c[t];
                    if (!n) return t && !o && l && 0 !== t.indexOf("#") && console.warn("Missing color in lookup '".concat(t, "', function will use '").concat(t, "' as a color")), "" == t ? null : t;
                    for (; r = n.match(/\$([a-zA-Z0-9]+)/);) {
                        var i = e(n.slice(1), !0);
                        if (i) n = n.replace(r[0], i);
                        else if (l) {
                            console.warn("Missing '".concat(r[0], "' in '").concat(n, "'"));
                            break
                        }
                    }
                    return n
                }
        }
    }
]);
//# sourceMappingURL=9651.789d910b.chunk.js.map