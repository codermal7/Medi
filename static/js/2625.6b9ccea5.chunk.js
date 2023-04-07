"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [2625], {
        73522: (e, t, o) => {
            o.d(t, {
                $: () => l
            });
            var r = o(54645),
                i = o(52322),
                l = function(e) {
                    var t, o = e.color,
                        l = e.width,
                        n = void 0 === l ? 14 : l,
                        a = e.height,
                        u = void 0 === a ? 14 : a,
                        p = null !== (t = (0, r.G)(o)) && void 0 !== t ? t : (0, r.G)("blue");
                    return (0, i.jsxs)("svg", {
                        width: n,
                        height: u,
                        viewBox: "0 0 15 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsx)("path", {
                            d: "M7.48529 13C10.799 13 13.4853 10.3137 13.4853 7C13.4853 3.68629 10.799 1 7.48529 1C4.17158 1 1.48529 3.68629 1.48529 7C1.48529 10.3137 4.17158 13 7.48529 13Z",
                            stroke: p,
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M9.28506 5.19983L5.68506 8.79983",
                            stroke: p,
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M5.68506 5.19983L9.28506 8.79983",
                            stroke: p,
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }
        },
        22625: (e, t, o) => {
            o.r(t), o.d(t, {
                default: () => r.J
            });
            var r = o(20988)
        },
        20988: (e, t, o) => {
            o.d(t, {
                J: () => v
            });
            var r = o(56666),
                i = o(76854),
                l = o(2784),
                n = o(72779),
                a = o.n(n),
                u = o(13980),
                p = o.n(u),
                s = o(97315),
                c = o(73522),
                d = o(51301),
                f = o(84238);
            const h = {
                "popover-tooltip": "Popover_popover-tooltip__MfBOI",
                "popover-tooltip--top": "Popover_popover-tooltip--top__a+KMN",
                "popover-tooltip--bottom": "Popover_popover-tooltip--bottom__d2Dsg",
                "popover-tooltip--left": "Popover_popover-tooltip--left__L9-WX",
                "popover-tooltip--right": "Popover_popover-tooltip--right__axAu4",
                "popover-tooltip--active": "Popover_popover-tooltip--active__oM-8w",
                text: "Popover_text__Y4o9+",
                close: "Popover_close__9wlq4"
            };
            var b = o(52322),
                v = function(e) {
                    var t, o = e.text,
                        n = e.timeout,
                        u = e.eventName,
                        p = e.debounceTimeout,
                        v = e.className,
                        g = e.classes,
                        x = e.type,
                        m = e.maxWidth,
                        k = (0, s.N)(p).predebounce,
                        w = (0, l.useState)(!1),
                        _ = (0, i.Z)(w, 2),
                        y = _[0],
                        B = _[1];
                    return (0, l.useEffect)((function() {
                        y && n > 0 && setTimeout((function() {
                            B(!1)
                        }), n)
                    }), [y, n]), (0, b.jsxs)("div", {
                        className: a()(h["popover-tooltip"], h["popover-tooltip--".concat(x)], v, (t = {}, (0, r.Z)(t, h["popover-tooltip--active"], y), (0, r.Z)(t, g.show, y && g.show), t)),
                        style: {
                            maxWidth: m
                        },
                        children: [(0, b.jsx)(d.hX, {
                            eventName: u,
                            onEvent: function(e) {
                                var t = e.show,
                                    o = void 0 === t || t;
                                return k((function() {
                                    return B(o)
                                }))
                            }
                        }), (0, b.jsx)("div", {
                            className: h.text,
                            children: o
                        }), 0 == n && (0, b.jsx)(f.z, {
                            onClick: function() {
                                return B(!1)
                            },
                            classes: {
                                container: h.close
                            },
                            focus: "outline",
                            screenReaderText: "Click to close",
                            icon: (0, b.jsx)(c.$, {
                                color: "lightblue",
                                width: 32,
                                height: 32
                            })
                        })]
                    })
                };
            v.defaultProps = {
                classes: {},
                timeout: 0,
                debounceTimeout: 0,
                maxWidth: 200,
                type: "bottom"
            }, v.propTypes = {
                text: p().string.isRequired,
                eventName: p().string,
                timeout: p().number,
                debounceTimeout: p().number,
                className: p().string,
                classes: p().shape({
                    show: p().bool
                }),
                type: p().oneOf(["top", "bottom", "left", "right"]),
                maxWidth: p().number
            }
        },
        54645: (e, t, o) => {
            o.d(t, {
                G: () => a
            });
            var r, i = o(56666),
                l = ["DEV", "LOCAL"].includes("PROD"),
                n = (r = {
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
                }, (0, i.Z)(r, "white", "#fff"), (0, i.Z)(r, "black", "#000"), (0, i.Z)(r, "transparent", "#0000"), r),
                a = function e(t) {
                    var o, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = n[t];
                    if (!i) return t && !r && l && 0 !== t.indexOf("#") && console.warn("Missing color in lookup '".concat(t, "', function will use '").concat(t, "' as a color")), "" == t ? null : t;
                    for (; o = i.match(/\$([a-zA-Z0-9]+)/);) {
                        var a = e(i.slice(1), !0);
                        if (a) i = i.replace(o[0], a);
                        else if (l) {
                            console.warn("Missing '".concat(o[0], "' in '").concat(i, "'"));
                            break
                        }
                    }
                    return i
                }
        }
    }
]);
//# sourceMappingURL=2625.6b9ccea5.chunk.js.map