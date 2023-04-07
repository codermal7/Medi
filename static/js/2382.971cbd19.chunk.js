"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [2382], {
        52290: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => k
            });
            var i = t(56666),
                o = t(85942),
                l = t(76854),
                a = t(2784),
                r = t(72779),
                s = t.n(r),
                c = t(13980),
                u = t.n(c),
                d = t(38164),
                g = t(18915),
                h = t(40290),
                p = t(15930),
                m = t(44498),
                f = t(1966),
                M = t(14863),
                j = t(80139),
                y = t(51301),
                b = t(19686),
                v = t(31869),
                L = t(66761),
                N = t(53646);
            const x = "AuthMenu_menu-wrapper__FdvH2",
                w = "AuthMenu_button-row__ZfR17";
            var S = t(52322),
                I = function() {
                    var e = (new Date).getHours();
                    return e < 12 ? "Good Morning" : e > 17 ? "Good Evening" : "Good Afternoon"
                },
                D = function(e) {
                    var n = e.isActive,
                        t = e.onClose,
                        r = e.event,
                        c = (0, m.tv)(),
                        u = (0, a.useState)(!0),
                        D = (0, l.Z)(u, 2),
                        k = D[0],
                        Z = D[1],
                        A = (0, a.useState)(null),
                        C = (0, l.Z)(A, 2),
                        P = C[0],
                        T = C[1],
                        z = (0, a.useState)(null),
                        B = (0, l.Z)(z, 2),
                        W = B[0],
                        _ = B[1],
                        G = (0, a.useState)(null),
                        U = (0, l.Z)(G, 2),
                        F = U[0],
                        O = U[1],
                        E = (0, b.JL)().profile,
                        J = (0, v.S7)().bookmarks,
                        R = void 0 === J ? {} : J,
                        Q = (0, L.lQ)().authRedirect;
                    (0, a.useEffect)((function() {
                        n || (T(null), _(null), Z(!0), E || (0, L.Mq)())
                    }), [!!E, n]);
                    var Y = [].concat((0, o.Z)((null === R || void 0 === R ? void 0 : R.condition) || []), (0, o.Z)((null === R || void 0 === R ? void 0 : R.procedure) || []));
                    (0, a.useEffect)((function() {
                        r && (r.errorMessage && T(r.errorMessage), r.errorTitle && _(r.errorTitle), r.icon && O(r.icon), Z("login" === r.authType))
                    }), [r]), (0, a.useEffect)((function() {
                        E && ("page" === (null === Q || void 0 === Q ? void 0 : Q.action) ? c.history.push(Q.data) : "bookmark" === (null === Q || void 0 === Q ? void 0 : Q.action) && (0, v.Rl)(Q.data), (0, L.Mq)())
                    }), [!!E, !(null === Q || void 0 === Q || !Q.action)]);
                    var H = function(e) {
                        t()
                    };
                    return (0, S.jsxs)("div", {
                        className: "AuthMenu_header__DCkcj",
                        children: [(0, S.jsx)(y.hX, {
                            eventName: "closeAuth",
                            onEvent: H
                        }), (0, S.jsx)("div", {
                            className: s()(x, (0, i.Z)({}, "AuthMenu_logged-in__0OkKg", !!E)),
                            children: E ? (0, S.jsxs)(S.Fragment, {
                                children: [(0, S.jsx)("img", {
                                    className: "AuthMenu_profile-image__dhL7-",
                                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI3IiBoZWlnaHQ9IjEyNyIgdmlld0JveD0iMCAwIDEyNyAxMjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYzLjUiIGN5PSI2My41IiByPSI2My41IiBmaWxsPSIjNDA2MmJiIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNNjMuNSA5Ny4wNTIxQzgyLjAzMDMgOTcuMDUyMSA5Ny4wNTIxIDgyLjAzMDMgOTcuMDUyMSA2My41Qzk3LjA1MjEgNDQuOTY5NiA4Mi4wMzAzIDI5Ljk0NzggNjMuNSAyOS45NDc4QzQ0Ljk2OTYgMjkuOTQ3OCAyOS45NDc4IDQ0Ljk2OTYgMjkuOTQ3OCA2My41QzI5Ljk0NzggODIuMDMwMyA0NC45Njk2IDk3LjA1MjEgNjMuNSA5Ny4wNTIxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNjMuNDk5OCA2OS45NDUyQzY5LjE1MzEgNjkuOTQ1MiA3My43MzYxIDY1LjM2MjMgNzMuNzM2MSA1OS43MDg5QzczLjczNjEgNTQuMDU1NiA2OS4xNTMxIDQ5LjQ3MjcgNjMuNDk5OCA0OS40NzI3QzU3Ljg0NjUgNDkuNDcyNyA1My4yNjM1IDU0LjA1NTYgNTMuMjYzNSA1OS43MDg5QzUzLjI2MzUgNjUuMzYyMyA1Ny44NDY1IDY5Ljk0NTIgNjMuNDk5OCA2OS45NDUyWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNODQuMTYyIDg0LjU0MTRDNzIuNzg4MyA3My4xNjc4IDU0LjQwMSA3My4xNjc4IDQzLjAyNzMgODQuNTQxNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjY5IiBoZWlnaHQ9IjY5IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkgMjkpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
                                    alt: "Profile"
                                }), (0, S.jsxs)("div", {
                                    className: "AuthMenu_greeting__gl7HN",
                                    children: [I(), E.givenName ? ", ".concat(E.givenName) : ""]
                                }), Y.length > 0 ? (0, S.jsxs)(S.Fragment, {
                                    children: [(0, S.jsx)("div", {
                                        className: s()("AuthMenu_heading__UkvfS", "AuthMenu_divider__FV3Yg"),
                                        children: "Condition/Procedure Bookmarks"
                                    }), (0, S.jsx)("ul", {
                                        className: "AuthMenu_saved-conditions__FaKZp",
                                        children: Y.map((function(e, n) {
                                            var i = e.data,
                                                o = e.name,
                                                l = e.type,
                                                a = (0, f.U)(o);
                                            return (0, S.jsx)("li", {
                                                children: (0, S.jsxs)(M.Gt, {
                                                    href: "/".concat(l, "s/").concat(a, "/").concat(i),
                                                    onClick: t,
                                                    children: [o, (0, S.jsx)(h.D, {
                                                        color: "lightGreyText"
                                                    })]
                                                })
                                            }, n)
                                        }))
                                    })]
                                }) : null, (0, S.jsx)(M.Gt, {
                                    className: w,
                                    href: "/profile/dashboard",
                                    onClick: t,
                                    children: "Bookmarks"
                                }), (0, S.jsx)(M.Gt, {
                                    className: w,
                                    href: "/profile",
                                    onClick: t,
                                    children: "Settings"
                                }), (0, S.jsx)(M.Gt, {
                                    className: w,
                                    onClick: function() {
                                        (0, b.xW)().then((function() {
                                            (0, N.fr)(), t(), c.history.push("/")
                                        }))
                                    },
                                    children: "Log Out"
                                })]
                            }) : (0, S.jsxs)(S.Fragment, {
                                children: [(P || W) && (0, S.jsxs)("div", {
                                    className: "AuthMenu_error-message__0iMME",
                                    children: [W ? (0, S.jsxs)("h4", {
                                        children: ["save" === F ? (0, S.jsx)(p.l, {}) : "next" === F ? (0, S.jsx)("img", {
                                            width: "20",
                                            alt: "Next",
                                            src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzEwMHB4JyB3aWR0aD0nMTAwcHgnICBmaWxsPSIjNDA2MmJiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOTggOTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk4IDk4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTgyLjcsNDYuOUw1Ni40LDIwLjZjLTEuMi0xLjItMy4xLTEuMi00LjIsMGMtMS4yLDEuMi0xLjIsMy4xLDAsNC4yTDc2LjQsNDlMNTIuMiw3My4yYy0xLjIsMS4yLTEuMiwzLjEsMCw0LjIgICBjMC42LDAuNiwxLjQsMC45LDIuMSwwLjlzMS41LTAuMywyLjEtMC45bDI2LjMtMjYuM0M4My45LDUwLDgzLjksNDguMSw4Mi43LDQ2Ljl6Ij48L3BhdGg+PHBhdGggZD0iTTE5LjUsMjAuNmMtMS4yLTEuMi0zLjEtMS4yLTQuMiwwYy0xLjIsMS4yLTEuMiwzLjEsMCw0LjJMMzkuNSw0OUwxNS4zLDczLjJjLTEuMiwxLjItMS4yLDMuMSwwLDQuMiAgIGMwLjYsMC42LDEuNCwwLjksMi4xLDAuOWMwLjgsMCwxLjUtMC4zLDIuMS0wLjlsMjYuMy0yNi4zYzAuNi0wLjYsMC45LTEuMywwLjktMi4xcy0wLjMtMS42LTAuOS0yLjFMMTkuNSwyMC42eiI+PC9wYXRoPjwvZz48L3N2Zz4="
                                        }) : "", " ", W]
                                    }) : null, P]
                                }), k ? (0, S.jsxs)(S.Fragment, {
                                    children: [(0, S.jsx)(d.U, {
                                        showLoginTitle: !0,
                                        showForgetPassword: !0
                                    }), (0, S.jsxs)("button", {
                                        className: s()(j.Z["btn--secondary"], j.Z.btn, j.Z["btn--inline"], j.Z["btn--mt-1"]),
                                        type: "submit",
                                        onClick: function() {
                                            return Z(!1)
                                        },
                                        children: ["New to MediFind? ", (0, S.jsx)("b", {
                                            children: "Create Account"
                                        })]
                                    })]
                                }) : (0, S.jsxs)(S.Fragment, {
                                    children: [(0, S.jsx)(g.C, {
                                        quickSignUp: !0,
                                        location: "Menu"
                                    }), (0, S.jsxs)("button", {
                                        className: s()(j.Z["btn--secondary"], j.Z.btn, j.Z["btn--inline"], j.Z["btn--mt-1"]),
                                        type: "submit",
                                        onClick: function() {
                                            return Z(!0)
                                        },
                                        children: ["Already have an account? ", (0, S.jsx)("b", {
                                            children: "Log In"
                                        })]
                                    })]
                                }), (0, S.jsxs)("div", {
                                    className: s()(x, "AuthMenu_menu-wrapper--tnc__jhuL7"),
                                    children: [(0, S.jsx)("span", {
                                        children: "By creating an account, you accept MediFind's"
                                    }), (0, S.jsxs)("span", {
                                        children: [(0, S.jsx)(M.Gt, {
                                            to: "/terms",
                                            onClick: H,
                                            children: "Terms & Conditions"
                                        }), " ", "and", " ", (0, S.jsx)(M.Gt, {
                                            to: "/privacy",
                                            onClick: H,
                                            children: "Privacy Policy"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                };
            D.propTypes = {
                isActive: u().bool,
                event: u().object,
                onClose: u().func.isRequired
            }, D.defaultProps = {
                isActive: !1
            };
            const k = D
        },
        38164: (e, n, t) => {
            t.d(n, {
                U: () => w
            });
            var i = t(76854),
                o = t(2784),
                l = t(72779),
                a = t.n(l),
                r = t(70134),
                s = t(13980),
                c = t.n(s),
                u = t(63990),
                d = t.n(u),
                g = t(51289),
                h = t(98510),
                p = t(44498),
                m = t(80139),
                f = t(86827),
                M = t(85427),
                j = t(51301),
                y = t(2431),
                b = t(53646),
                v = t(19686),
                L = t(70578),
                N = t(84290),
                x = t(52322),
                w = function(e) {
                    var n = M.sm.object().shape({
                            email: M.sm.string().label("Email").email("Valid email required.").required("Required"),
                            password: M.sm.string().label("Password").min(6).required("Required")
                        }),
                        t = e.signup,
                        l = e.showForgetPassword,
                        s = e.showLoginTitle,
                        c = (0, p.tv)(),
                        u = (0, o.useState)(""),
                        w = (0, i.Z)(u, 2),
                        S = w[0],
                        I = w[1],
                        D = (0, o.useState)(""),
                        k = (0, i.Z)(D, 2),
                        Z = k[0],
                        A = k[1],
                        C = (0, o.useState)(!1),
                        P = (0, i.Z)(C, 2),
                        T = P[0],
                        z = P[1],
                        B = (0, o.useState)(""),
                        W = (0, i.Z)(B, 2),
                        _ = W[0],
                        G = W[1];
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)("div", {
                            className: N.Z["social-login"],
                            children: (0, x.jsx)(L.J, {
                                title: s && "Log In",
                                email: Z,
                                defaultSocialLogin: _
                            })
                        }), (0, x.jsx)(r.J9, {
                            initialValues: {
                                email: "",
                                password: ""
                            },
                            validationSchema: n,
                            validateOnChange: "false",
                            validateOnBlur: "false",
                            onSubmit: function(e, n) {
                                var t = n.setFieldError,
                                    i = n.setSubmitting;
                                A(e.email), G(""), (0, h.SV)(e).then((function(e) {
                                    null != (null === e || void 0 === e ? void 0 : e.token) ? ((0, b.Kz)("Login Form", "Successful Login", "MediFind"), (0, b.k8)("login", {
                                        type: "MediFind",
                                        method: "MediFind"
                                    }), (0, v.x4)(e.token).then((function() {
                                        (0, j.W5)("closeAuth"), (0, b.fr)(), (0, y.Tn)(c.location.pathname) && c.history.push("/profile/dashboard")
                                    }))) : e.redirectSocialLogin && ["Google", "Facebook"].includes(e.redirectSocialLogin) && G(e.redirectSocialLogin)
                                })).catch((function(e) {
                                    (0, b.k8)("error", {
                                        type: "login"
                                    }), (0, b.Kz)("Login Form", "Login Error", e.message), I(e.message), t("general", e.message)
                                })).finally((function() {
                                    i(!1)
                                }))
                            },
                            children: function(e) {
                                var n = e.isSubmitting;
                                return (0, x.jsxs)(r.l0, {
                                    className: a()(f.Z.form, N.Z["auth-form"]),
                                    id: "login",
                                    children: [null, !t || n || S || T ? null : (0, x.jsx)(d(), {
                                        variant: "success",
                                        children: "Please check your email for a verification link before logging in."
                                    }), S && S.includes("verification pending") ? (0, x.jsxs)(d(), {
                                        variant: "danger",
                                        className: f.Z["alert-danger"],
                                        children: [S, ". Or ", (0, x.jsx)(d().Link, {
                                            onClick: function() {
                                                (0, h.hh)(Z).then((function(e) {
                                                    z(!0)
                                                })).catch((function(e) {
                                                    var n = e.message;
                                                    I(n)
                                                }))
                                            },
                                            children: "Click here"
                                        }), " to get a new verification link."]
                                    }) : null, S && !S.includes("verification pending") ? (0, x.jsx)(d(), {
                                        variant: "danger",
                                        className: f.Z["alert-danger"],
                                        children: S
                                    }) : null, T ? (0, x.jsx)(d(), {
                                        variant: "success",
                                        children: "Verification link sent to your email. Please verify your account and try to login."
                                    }) : null, (0, x.jsxs)("div", {
                                        className: a()(f.Z["form-group"], N.Z["form-group"]),
                                        children: [(0, x.jsx)("label", {
                                            className: f.Z["form-label"],
                                            htmlFor: "email",
                                            children: "Email"
                                        }), (0, x.jsx)(r.gN, {
                                            type: "email",
                                            name: "email",
                                            id: "email",
                                            className: f.Z["form-control"],
                                            placeholder: "Email",
                                            autoComplete: "email"
                                        }), (0, x.jsx)(r.Bc, {
                                            name: "email",
                                            component: "div",
                                            className: f.Z["invalid-feedback"]
                                        })]
                                    }), (0, x.jsxs)("div", {
                                        className: a()(f.Z["form-group"], N.Z["form-group"]),
                                        children: [(0, x.jsx)("label", {
                                            className: f.Z["form-label"],
                                            htmlFor: "password",
                                            children: "Password"
                                        }), (0, x.jsx)(r.gN, {
                                            type: "password",
                                            name: "password",
                                            id: "password",
                                            className: f.Z["form-control"],
                                            placeholder: "Password",
                                            autoComplete: "current-password"
                                        }), (0, x.jsx)(r.Bc, {
                                            name: "password",
                                            component: "div",
                                            className: f.Z["invalid-feedback"]
                                        })]
                                    }), (0, x.jsx)("button", {
                                        className: a()(m.Z["btn--primary"], m.Z.btn, m.Z["btn--inline"]),
                                        type: "submit",
                                        disabled: n && !S,
                                        children: n ? "Logging In..." : "Log In"
                                    }), l && (0, x.jsx)("span", {
                                        className: f.Z["extra-links"],
                                        children: (0, x.jsx)(g.rU, {
                                            to: "/recover",
                                            onClick: function() {
                                                return (0, j.W5)("closeAuth")
                                            },
                                            children: "Forgot Password?"
                                        })
                                    })]
                                })
                            }
                        })]
                    })
                };
            w.propTypes = {
                signup: c().bool,
                showForgetPassword: c().bool,
                showLoginTitle: c().bool
            }
        },
        15930: (e, n, t) => {
            t.d(n, {
                l: () => r
            });
            var i = t(13980),
                o = t.n(i),
                l = t(54645),
                a = t(52322),
                r = function(e) {
                    var n = e.color,
                        t = e.fill,
                        i = e.width,
                        o = void 0 === i ? 12 : i,
                        r = e.height,
                        s = void 0 === r ? 15 : r,
                        c = (0, l.G)(n),
                        u = "none";
                    return t && (u = c), (0, a.jsx)("svg", {
                        width: o,
                        height: s,
                        viewBox: "0 0 12 15",
                        fill: u,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.1111 14L6.05556 10.3889L1 14V2.44444C1 1.6467 1.6467 1 2.44444 1H9.66667C10.4644 1 11.1111 1.6467 11.1111 2.44444V14Z",
                            stroke: c,
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                };
            r.propTypes = {
                color: o().string,
                fill: o().bool,
                width: o().number,
                height: o().number
            }
        },
        40290: (e, n, t) => {
            t.d(n, {
                D: () => l
            });
            var i = t(54645),
                o = t(52322),
                l = function(e) {
                    var n, t = e.color,
                        l = null !== (n = (0, i.G)(t)) && void 0 !== n ? n : (0, i.G)("white");
                    return (0, o.jsx)("svg", {
                        width: "7",
                        height: "13",
                        viewBox: "0 0 7 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, o.jsx)("path", {
                            d: "M1 1.50696L6.01389 6.49303L1.02782 11.5069",
                            stroke: l,
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }
        },
        54645: (e, n, t) => {
            t.d(n, {
                G: () => r
            });
            var i, o = t(56666),
                l = ["DEV", "LOCAL"].includes("PROD"),
                a = (i = {
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
                }, (0, o.Z)(i, "white", "#fff"), (0, o.Z)(i, "black", "#000"), (0, o.Z)(i, "transparent", "#0000"), i),
                r = function e(n) {
                    var t, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = a[n];
                    if (!o) return n && !i && l && 0 !== n.indexOf("#") && console.warn("Missing color in lookup '".concat(n, "', function will use '").concat(n, "' as a color")), "" == n ? null : n;
                    for (; t = o.match(/\$([a-zA-Z0-9]+)/);) {
                        var r = e(o.slice(1), !0);
                        if (r) o = o.replace(t[0], r);
                        else if (l) {
                            console.warn("Missing '".concat(t[0], "' in '").concat(o, "'"));
                            break
                        }
                    }
                    return o
                }
        },
        69837: (e, n) => {
            function t() {
                var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
                null !== e && void 0 !== e && this.setState(e)
            }

            function i(e) {
                this.setState(function(n) {
                    var t = this.constructor.getDerivedStateFromProps(e, n);
                    return null !== t && void 0 !== t ? t : null
                }.bind(this))
            }

            function o(e, n) {
                try {
                    var t = this.props,
                        i = this.state;
                    this.props = e, this.state = n, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(t, i)
                } finally {
                    this.props = t, this.state = i
                }
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), t.__suppressDeprecationWarning = !0, i.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0, n.polyfill = function(e) {
                var n = e.prototype;
                if (!n || !n.isReactComponent) throw new Error("Can only polyfill class components");
                if ("function" !== typeof e.getDerivedStateFromProps && "function" !== typeof n.getSnapshotBeforeUpdate) return e;
                var l = null,
                    a = null,
                    r = null;
                if ("function" === typeof n.componentWillMount ? l = "componentWillMount" : "function" === typeof n.UNSAFE_componentWillMount && (l = "UNSAFE_componentWillMount"), "function" === typeof n.componentWillReceiveProps ? a = "componentWillReceiveProps" : "function" === typeof n.UNSAFE_componentWillReceiveProps && (a = "UNSAFE_componentWillReceiveProps"), "function" === typeof n.componentWillUpdate ? r = "componentWillUpdate" : "function" === typeof n.UNSAFE_componentWillUpdate && (r = "UNSAFE_componentWillUpdate"), null !== l || null !== a || null !== r) {
                    var s = e.displayName || e.name,
                        c = "function" === typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + s + " uses " + c + " but also contains the following legacy lifecycles:" + (null !== l ? "\n  " + l : "") + (null !== a ? "\n  " + a : "") + (null !== r ? "\n  " + r : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
                }
                if ("function" === typeof e.getDerivedStateFromProps && (n.componentWillMount = t, n.componentWillReceiveProps = i), "function" === typeof n.getSnapshotBeforeUpdate) {
                    if ("function" !== typeof n.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                    n.componentWillUpdate = o;
                    var u = n.componentDidUpdate;
                    n.componentDidUpdate = function(e, n, t) {
                        var i = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : t;
                        u.call(this, e, n, i)
                    }
                }
                return e
            }
        }
    }
]);
//# sourceMappingURL=2382.971cbd19.chunk.js.map