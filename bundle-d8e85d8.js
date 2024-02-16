! function() {
    "use strict";
    var t = {};
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var e = t.addHydrationListener = void 0;
    const n = {
        attributes: !0,
        attributeFilter: ["class"],
        childList: !1,
        characterData: !1
    };

    function i(t, e, n) {
        this.classList.contains("hydrated") && (n.disconnect(), t(this))
    }

    function r(t) {
        ! function(t, e) {
            if (function(t) {
                    return t && "_eventId" === t.name && "button" === t.type
                }(e) && !t.isSubmitting) {
                const n = document.createElement("input");
                n.type = "hidden", n.name = "_eventId", n.value = e.value, t.isSubmitting = !0, t.appendChild(n), t.submit()
            }
        }(t.target.closest("form"), t.detail.target)
    }

    function a(t) {
        const e = t.target;
        var n;
        !e.isSubmitting && (null !== (n = t.submitter) && void 0 !== n && n.hasAttribute("formnovalidate") || e.checkValidity()) ? (! function(t) {
            var e;
            const n = null === (e = t.submitter) || void 0 === e ? void 0 : e.closest("prism-button");
            n && "link" !== n.getAttribute("display") && n.setAttribute("loading", "true")
        }(t), e.isSubmitting = !0) : t.preventDefault()
    }

    function o() {
        const t = document.querySelector("main form");
        t && (t.addEventListener("submit", a), t.addEventListener("prismPress", r), t.addEventListener("prismClick", r))
    }
    e = t.addHydrationListener = function(t, e) {
        new MutationObserver(i.bind(t, e)).observe(t, n)
    };
    var s = {};
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), s.updateErrorMessage = u = s.handleValueChange = void 0;
    var u = s.handleValueChange = function(t) {
        var e;
        let n = null === (e = null == t ? void 0 : t.detail) || void 0 === e ? void 0 : e.target;
        n || (n = t.target.querySelector("input,select")), d(t.target, n)
    };

    function d(t, e) {
        const n = function(t) {
            let e;
            for (e in t.validity)
                if (t.validity[e]) return "valid" === e ? void 0 : e
        }(e);
        if (n) {
            const i = function(t, e, n) {
                let i;
                (function(t) {
                    const e = t._originalInvalidMessage;
                    void 0 === e && (t._originalInvalidMessage = t.getAttribute("invalid-message"))
                })(e), "customError" === t && (i = t + n.validationMessage.charAt(0).toUpperCase() + n.validationMessage.substring(1));
                const r = i && e.dataset[i] || e.dataset[t] || e._originalInvalidMessage;
                "string" != typeof r && console.warn(`No error message found for "${t}" constraint for "${e.getAttribute("name")}" field.`);
                return r || ""
            }(n, t, e);
            t.setAttribute("invalid-message", i)
        }
    }
    s.updateErrorMessage = d;
    const l = ["prism-input-text", "prism-select", "prism-checkbox"];

    function c(t) {
        const e = t.target;
        e && l.includes(e.nodeName.toLowerCase()) && u(t)
    }

    function m(t) {
        (function(t) {
            var e;
            const {
                name: n,
                value: i
            } = function(t) {
                const e = {
                        name: "",
                        value: ""
                    },
                    n = t.value.indexOf("="); - 1 === n ? e.name = t.value : (e.name = t.value.substring(0, n), e.value = t.value.substring(n + 1));
                return e
            }(t), r = document.createElement("button");
            return r.type = "submit", r.hidden = !0, r.formNoValidate = t.formNoValidate, r.name = n, r.value = i, null === (e = t.parentElement) || void 0 === e || e.insertBefore(r, t), r
        })(t.detail.target).click()
    }

    function v(t) {
        t.target.setAttribute("loading", "true")
    }

    function f(t) {
        const e = t.getAttribute("attr");
        e && (t.attr = JSON.parse(e))
    }

    function g(t) {
        const e = t.target.dataset.idRef,
            n = document.getElementById(e);
        null == n || n.setAttribute("open", "true")
    }(() => {
        const t = document.querySelector("prism-layout");
        t ? e(t, o) : o()
    })(), document.addEventListener("prismInvalid", c), document.addEventListener("prismChange", c), document.querySelectorAll("prism-button[name=_submit]:not([type=submit],[type=reset])").forEach((t => {
        t.addEventListener("prismPress", m)
    })), document.querySelectorAll("prism-input-text[data-trim-on-blur]").forEach((t => {
        t.addEventListener("prismChange", (t => {
            const e = t.target;
            e.value = e.value.trim()
        }))
    })), document.querySelectorAll("prism-button[data-loader]").forEach((t => {
        t.addEventListener("prismPress", v)
    })), document.querySelectorAll("prism-lineitem").forEach(f), document.querySelectorAll("button[data-id-ref],prism-button[data-id-ref]").forEach((t => {
        "prism-button" == t.localName ? t.addEventListener("prismPress", g) : t.addEventListener("click", g)
    })), async function() {
        const t = document.querySelector("form[name=signin]");
        if (t) {
            const e = function(t) {
                const e = document.createElement("input");
                return e.type = "hidden", e.name = "userVerifyingPlatformAuthenticatorAvailable", e.value = t.toString(), e
            }(await async function() {
                return !!window.PublicKeyCredential && await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
            }());
            t.appendChild(e)
        }
    }()
}();
//# sourceMappingURL=bundle.js.map