/*!
 * (@prism-ui/core) design-system - v7.11.3 - made with ❤️ in Philadelphia
 */
import {
    r as t,
    c as e,
    h as a,
    H as o,
    g as i,
    F as r
} from "./p-e173c275.js";
import {
    g as s,
    m as l
} from "./p-c277c41f.js";
import {
    d as n
} from "./p-21318cf8.js";
const c = class {
    constructor(a) {
        t(this, a), this.prismClick = e(this, "prismClick", 7), this.uid = s(), this.sendAction = t => {
            const {
                currentTarget: e
            } = t;
            this.prismClick.emit({
                id: this.prismId,
                name: "prism-badge",
                action: this.interactive,
                target: e
            })
        }, this.slots = {
            leading: !1,
            trailing: !1
        }, this.prismId = `prism-badge-${this.uid}`, this.size = "sm", this.tone = "neutral2", this.priority = "low", this.interactive = void 0, this.label = void 0
    }
    connectedCallback() {
        this.slots.leading = !!this.el.querySelector('[slot="asset-leading"]'), this.slots.trailing = !!this.el.querySelector('[slot="asset-trailing"]'), l("prism-badge")
    }
    render() {
        const t = () => a("button", {
            id: `action-badge-${this.uid}`,
            ref: t => this.actionButton = t,
            type: "button",
            onClick: t => this.sendAction(t),
            "aria-label": this.label,
            class: {
                action: !0, [this.interactive]: !0
            }
        }, a("slot", {
            name: `asset-${this.interactive}`
        }));
        return a(o, {
            class: {
                [this.tone]: !0,
                [this.size]: !0,
                [this.priority]: !0,
                interactive: !!this.interactive
            },
            id: this.prismId
        }, "leading" === this.interactive ? a(t, null) : a("slot", {
            name: "asset-leading"
        }), a("prism-text", {
            class: "text",
            tag: "span",
            display: "sm" === this.size ? "tag" : "caption"
        }, a("slot", null)), "trailing" === this.interactive ? a(t, null) : a("slot", {
            name: "asset-trailing"
        }))
    }
    get el() {
        return i(this)
    }
};
c.style = ":host{position:relative;display:inline-flex;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.text{line-height:1}:host(.sm){height:1rem;border-radius:8px;border-radius:var(--border-radius-medium, 8px);padding-left:0.5rem;padding-right:0.5rem}:host(.md){height:1.5rem;border-radius:16px;border-radius:var(--border-radius-large, 16px);padding-left:0.75rem;padding-right:0.75rem}:host(.high){--tw-text-opacity:1;color:rgb(var(--text-color-inverse-base) / var(--tw-text-opacity))}:host(.info){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-info-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-info-base-shadow)}:host(.info.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-info-down) / var(--tw-bg-opacity));--shadow-color:var(--fill-info-down-shadow)}:host(.theme1){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-theme1-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-theme1-base-shadow)}:host(.theme1.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-theme1-down) / var(--tw-bg-opacity));--shadow-color:var(--fill-theme1-down-shadow)}:host(.positive){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-positive-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-positive-base-shadow)}:host(.positive.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-positive-down) / var(--tw-bg-opacity));--shadow-color:var(--fill-positive-down-shadow)}:host(.caution),:host(.theme2){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-caution-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-caution-base-shadow)}:host(.caution.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-caution-down) / var(--tw-bg-opacity));--shadow-color:var(--fill-caution-down-shadow)}:host(.negative){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-negative-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-negative-base-shadow)}:host(.negative.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-negative-down) / var(--tw-bg-opacity));--shadow-color:var(--fill-negative-down-shadow)}:host(.neutral2){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-neutral2-base) / var(--tw-bg-opacity))}:host(.neutral2.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-neutral2-down) / var(--tw-bg-opacity))}:host(.low.info){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-info-base) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-info-base) / var(--tw-text-opacity));--shadow-color:var(--material-info-base-shadow)}:host(.low.info.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-info-down) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-info-down) / var(--tw-text-opacity));--shadow-color:var(--material-info-down-shadow)}:host(.low.theme1){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-theme1-base) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-theme1-base) / var(--tw-text-opacity));--shadow-color:var(--material-theme1-base-shadow)}:host(.low.theme1.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-theme1-down) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-theme1-down) / var(--tw-text-opacity));--shadow-color:var(--material-theme1-down-shadow)}:host(.low.positive){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-positive-base) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-positive-base) / var(--tw-text-opacity));--shadow-color:var(--material-positive-base-shadow)}:host(.low.positive.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-positive-down) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-positive-down) / var(--tw-text-opacity));--shadow-color:var(--material-positive-down-shadow)}:host(.low.caution),:host(.low.theme2){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-caution-base) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-caution-base) / var(--tw-text-opacity));--shadow-color:var(--material-caution-base-shadow)}:host(.low.caution.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-caution-down) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-caution-down) / var(--tw-text-opacity));--shadow-color:var(--material-caution-down-shadow)}:host(.low.negative){--tw-bg-opacity:1;background-color:rgba(242, 217, 225, var(--tw-bg-opacity));background-color:rgb(242 217 225 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-negative-base) / var(--tw-text-opacity));--shadow-color:var(--material-negative-shadow)}:host(.low.negative.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-negative-down) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-negative-down) / var(--tw-text-opacity));--shadow-color:var(--material-negative-down-shadow)}:host(.low.neutral2){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral2-base) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-neutral2-base) / var(--tw-text-opacity));--shadow-color:var(--material-neutral2-base-shadow)}:host(.low.neutral2.interactive:active){--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral2-down) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--text-color-neutral2-down) / var(--tw-text-opacity));--shadow-color:var(--material-neutral2-down-shadow)}::slotted([slot='asset-leading']),.action.leading{margin-right:0.25rem}::slotted([slot='asset-trailing']),.action.trailing{margin-left:0.25rem}:host([focus-within]){outline-style:solid;outline-width:1px;outline-offset:2px;outline-color:#35353B}:host(:focus-within){outline-style:solid;outline-width:1px;outline-offset:2px;outline-color:#35353B}.action{margin:0px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;outline:2px solid transparent;outline-offset:2px;color:inherit}";
const d = class {
    constructor(a) {
        t(this, a), this.prismLoad = e(this, "prismLoad", 7), this.cdn = "https://static.cimcontent.net/common-web-assets/xds_icons/svg/", this.svgIcon = void 0, this.svgContent = void 0, this.isVisible = !1, this.loaded = !1, this.contained = !1, this.containedTone = "neutral2", this.containedDisplay = "fill", this.containedPriority = "low", this.label = void 0, this.role = "img", this.notifications = !1, this.name = "", this.size = "sm", this.tone = "neutral", this.dotTone = "positive", this.priority = "primary", this.theme = "fill", this.path = "", this.lazy = !1
    }
    nameHandler() {
        this.loadIcon()
    }
    pathHandler() {
        this.loadIcon()
    }
    themeHandler() {
        this.loadIcon()
    }
    componentWillLoad() {
        this.waitUntilVisible(this.el, "25%", (() => {
            this.isVisible = !0, this.loadIcon()
        }))
    }
    connectedCallback() {
        l("prism-icon")
    }
    disconnectedCallback() {
        this.intobs && (this.intobs.disconnect(), this.intobs = void 0)
    }
    waitUntilVisible(t, e, a) {
        if (this.lazy && "undefined" != typeof window && window.IntersectionObserver) {
            const o = this.intobs = new window.IntersectionObserver((t => {
                t[0].isIntersecting && (o.disconnect(), this.intobs = void 0, a())
            }), {
                rootMargin: e
            });
            o.observe(t)
        } else a()
    }
    formatName(t) {
        return t.replace(" ", "_").toLocaleLowerCase()
    }
    async loadIcon() {
        if (this.isVisible && (this.name || this.path)) {
            const t = this.path ? this.path : `${this.cdn}${this.formatName(this.name)}/ic_${this.formatName(this.name)}_${this.theme}.svg`,
                e = await fetch(t);
            if (!e.ok) throw new Error(`PRISM-UI >>> The icon ${this.formatName(this.name)} doesn't exist in ${t}`);
            const a = await e.text();
            this.svgContent = a, this.loaded = !0
        }
    }
    componentDidRender() {
        if (this.svgContent) {
            const t = this.element.querySelector("svg"),
                e = [`size-${this.size}`, `${this.tone}`, `${this.priority}`, "icon"];
            this.path || (null == t || t.removeAttribute("style"), null == t || t.setAttribute("fill", "currentColor")), null == t || t.setAttribute("focusable", "false"), null == t || t.setAttribute("role", this.role), null == t || t.setAttribute("class", ""), null == t || t.classList.add(...e), void 0 === this.label ? null == t || t.setAttribute("aria-hidden", "true") : (null == t || t.removeAttribute("aria-hidden"), null == t || t.setAttribute("aria-label", this.label)), this.prismLoad.emit({
                name: this.name || this.path,
                target: this.element,
                loaded: this.loaded
            })
        }
    }
    render() {
        return a(o, {
            class: {
                loaded: this.loaded
            }
        }, a("section", {
            class: {
                contained: this.contained, [this.containedTone]: this.contained, [this.containedDisplay]: this.contained, [this.containedPriority]: this.contained, [this.size]: !0
            }
        }, this.svgContent ? a("div", {
            part: "container",
            ref: t => this.element = t,
            class: {
                notifications: this.notifications, [`dot-${this.dotTone}`]: !0, "icon-inner": !0, [`size-${this.size}`]: !0
            },
            innerHTML: this.svgContent
        }) : null))
    }
    get el() {
        return i(this)
    }
    static get watchers() {
        return {
            name: ["nameHandler"],
            path: ["pathHandler"],
            theme: ["themeHandler"]
        }
    }
};
d.style = ":host{--icon-width:1.5rem;--icon-height:1.5rem;--icon-color:inherit;position:relative;display:inline-block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:left;vertical-align:middle;opacity:0;transition:opacity 200ms ease-in;clip-rule:evenodd;fill:none;fill-rule:evenodd;line-height:0}@media (prefers-reduced-motion){:host{transition:none}.notifications::after{transition:none}}:host(.loaded){opacity:1}.info{--icon-color:rgb(var(--text-color-info-base))}.positive{--icon-color:rgb(var(--text-color-positive-base))}.caution{--icon-color:rgb(var(--text-color-caution-base))}.negative{--icon-color:rgb(var(--text-color-negative-base))}.neutral{--icon-color:rgb(var(--text-color-neutral-base))}.neutral2{--icon-color:rgb(var(--text-color-neutral2-base))}.neutral2-inverse{--icon-color:rgb(var(--text-color-inverse-base))}.neutral-inverse{--icon-color:rgb(var(--text-color-inverse-base))}.theme1{--icon-color:rgb(var(--text-color-theme1-base))}@media (forced-colors: active){.icon-inner svg{--icon-color:CanvasText}}.icon-inner{display:inline-block}.icon-inner svg{color:var(--icon-color)}.size-xs{--icon-width:1rem;--icon-height:1rem}.size-sm{--icon-width:1.5rem;--icon-height:1.5rem}.size-md{--icon-width:2rem;--icon-height:2rem}.size-lg{--icon-width:3rem;--icon-height:3rem}.size-xl{--icon-width:4.5rem;--icon-height:4.5rem}.size-xxl{--icon-width:6rem;--icon-height:6rem}.icon,.size-custom{width:var(--icon-width);height:var(--icon-height)}.notifications{position:relative}.notifications::after{content:'';position:absolute;right:-0.125rem;bottom:-0.125rem;display:block;border-radius:50%;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-inverse-base) / var(--tw-border-opacity));transition:background-color 200ms ease-in}.size-xs::after{right:0px;bottom:0px;height:0.375rem;width:0.375rem;border-width:0.0313rem}.size-sm::after{right:0px;bottom:0px;height:0.5rem;width:0.5rem;border-width:1px}.size-md::after{height:0.75rem;width:0.75rem;border-width:0.0938rem}.size-lg::after{height:1rem;width:1rem;border-width:2px}.size-xl::after{border-width:0.1875rem;height:1.5rem;width:1.5rem}.notifications.dot-neutral::after{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-neutral-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-neutral-base-shadow)}.notifications.dot-neutral2::after{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-neutral2-base) / var(--tw-bg-opacity))}.notifications.dot-positive::after{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-positive-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-positive-base-shadow)}.notifications.dot-negative::after{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-negative-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-negative-base-shadow)}.notifications.dot-theme1::after{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-theme1-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-theme1-base-shadow)}.notifications.dot-theme2::after{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-theme2-base) / var(--tw-bg-opacity))}.notifications.dot-info::after{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-info-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-info-base-shadow)}.notifications.dot-caution::after{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-caution-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-caution-base-shadow)}.secondary{opacity:0.6}.tertiary{opacity:0.15}.inactive{opacity:0.3}.contained{border-radius:2.5rem}.contained.outline{border-width:1px;border-style:solid}.contained.outline.caution{border-color:rgb(var(--border-color-stroke-caution-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.outline.info{border-color:rgb(var(--border-color-stroke-info-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.outline.negative{border-color:rgb(var(--border-color-stroke-negative-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.outline.neutral{border-color:rgb(var(--border-color-stroke-neutral-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.outline.neutral-inverse{border-color:rgb(var(--border-color-stroke-inverse-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.outline.neutral2{border-color:rgb(var(--border-color-stroke-neutral2-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.outline.neutral2-inverse{border-color:rgb(var(--border-color-stroke-inverse-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.outline.positive{border-color:rgb(var(--border-color-stroke-positive-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.outline.theme1{border-color:rgb(var(--border-color-stroke-theme1-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.outline.theme2{border-color:rgb(var(--border-color-stroke-caution-base) / var(--tw-border-opacity));--tw-border-opacity:0.15}.contained.fill.low.caution{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-caution-base) / var(--tw-bg-opacity));--shadow-color:var(--material-caution-base-shadow)}.contained.fill.low.info{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-info-base) / var(--tw-bg-opacity));--shadow-color:var(--material-info-base-shadow)}.contained.fill.low.negative{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-negative-base) / var(--tw-bg-opacity));--shadow-color:var(--material-negative-base-shadow)}.contained.fill.low.neutral{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral-base) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral-base-shadow)}.contained.fill.low.neutral-inverse{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral-inverse-base) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral-inverse-base-shadow)}.contained.fill.low.neutral2{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral2-base) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral2-base-shadow)}.contained.fill.low.neutral2-inverse{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral2-inverse-base) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral2-inverse-base-shadow)}.contained.fill.low.positive{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-positive-base) / var(--tw-bg-opacity));--shadow-color:var(--material-positive-base-shadow)}.contained.fill.low.theme1{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-theme1-base) / var(--tw-bg-opacity));--shadow-color:var(--material-theme1-base-shadow)}.contained.fill.low.theme2{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-caution-base) / var(--tw-bg-opacity));--shadow-color:var(--material-caution-base-shadow)}.contained.fill.high.caution{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-caution-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-caution-base-shadow)}.contained.fill.high.info{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-info-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-info-base-shadow)}.contained.fill.high.negative{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-negative-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-negative-base-shadow)}.contained.fill.high.neutral{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-neutral-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-neutral-base-shadow)}.contained.fill.high.neutral-inverse{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-inverse-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-inverse-base-shadow)}.contained.fill.high.neutral2{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-neutral2-base) / var(--tw-bg-opacity))}.contained.fill.high.neutral2-inverse{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-inverse-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-inverse-base-shadow)}.contained.fill.high.positive{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-positive-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-positive-base-shadow)}.contained.fill.high.theme1{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-theme1-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-theme1-base-shadow)}.contained.fill.high.theme2{--tw-bg-opacity:1;background-color:rgb(var(--background-color-fill-caution-base) / var(--tw-bg-opacity));--shadow-color:var(--fill-caution-base-shadow)}.xs.contained{padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.375rem;padding-right:0.375rem}.sm.contained{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem}.md.contained{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem}.lg.contained{padding-top:1rem;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}.xl.contained{padding-top:1.25rem;padding-bottom:1.25rem;padding-left:1.75rem;padding-right:1.75rem;border-radius:3.75rem}.xxl.contained{padding-top:1.5rem;padding-bottom:1.5rem;padding-left:2rem;padding-right:2rem;border-radius:5rem}";
const h = class {
    constructor(a) {
        t(this, a), this.prismChange = e(this, "prismChange", 7), this.prismInput = e(this, "prismInput", 7), this.prismBlur = e(this, "prismBlur", 7), this.prismFocus = e(this, "prismFocus", 7), this.prismWatch = e(this, "prismWatch", 7), this.uid = s(), this.isDirty = !1, this.debounceDelay = 500, this.appearFrom = "bottom", this._hostTag = "prism-select", this._setResultsPosition = t => {
            let e = window.innerHeight / 2;
            "top" === this.appearFrom && e > t.top && (this.resultsPosition = "bottom"), "bottom" === this.appearFrom && e < t.bottom && (this.resultsPosition = "top"), this.hostHeight = `${t.height}px`
        }, this.filterSelectedOptions = t => t.reduce(((t, e) => (e.selected ? t.push(e) : e.children && (t = [...t, ...this.filterSelectedOptions(e.children)]), t)), []), this._clearAllSelectedOptions = () => {
            this.customOptions.forEach((t => {
                var e;
                t.selected = t.selected = !1, null === (e = t.children) || void 0 === e || e.forEach((t => {
                    t.selected = t.selected = !1
                }))
            }))
        }, this._updateCustomSelections = t => {
            this.customOptions.map((e => {
                var a;
                "" !== e.value || 0 !== this.totalCustomOptions && void 0 !== this.totalCustomOptions || (e.selected = !1), e.value === t && (e.selected = void 0 === e.selected || !e.selected), null === (a = e.children) || void 0 === a || a.map((e => {
                    e.value === t && (e.selected = void 0 === e.selected || !e.selected)
                }))
            }))
        }, this.selectOption = t => {
            let e = t.currentTarget;
            if ("" === e.dataset.value && this._clearAllSelectedOptions(), this.multiple || (this.pseudoSelect.value = e.dataset.value, this.value = "" === e.dataset.value ? e.dataset.display : e.dataset.value, this.displayResults = !1, this._clearAllSelectedOptions(), this.pseudoSelect.focus()), this._updateCustomSelections(e.dataset.value), this.multiple) {
                if (this.hiddenValue = this.filterSelectedOptions(this.customOptions).map((t => t.value)).join(","), this.totalCustomOptions = "" !== this.hiddenValue ? this.hiddenValue.split(",").length : 0, this.totalCustomOptions <= 0) {
                    let t = this.customOptions.find((t => "" === t.value));
                    this.value = t.display, t.selected = !0, this.pseudoSelect.value = t.value
                } else this.value = "Selected " + (this.totalCustomOptions > 1 ? "options" : "option"), this.pseudoSelect.value = this.value;
                this.liveMessage = `${this.totalCustomOptions} ${this.value}`
            }
            this.prismChange.emit({
                name: "value-changed",
                value: this.multiple ? this.hiddenValue : this.value,
                data: this.customOptions,
                multiple: this.multiple
            })
        }, this.onBlur = t => {
            t.target.closest(this._hostTag) !== this.el && (this.displayResults = !1)
        }, this.openCustomOptions = () => {
            this.displayResults = !this.displayResults
        }, this.inputKeyListeners = t => {
            switch (t.key) {
                case "ArrowDown":
                    t.preventDefault(), this.resultsElement && this.resultsElement.querySelectorAll("button")[0].focus();
                    break;
                case "Escape":
                    this.displayResults = !1
            }
        }, this.resultsKeyListeners = t => {
            var e, a, o, i, r, s;
            let l = t.currentTarget,
                n = this.resultsElement.querySelectorAll("button"),
                c = n[0],
                d = n[n.length - 1];
            switch (t.key) {
                case "ArrowDown":
                    switch (t.preventDefault(), null === (e = l.nextElementSibling) || void 0 === e ? void 0 : e.role) {
                        case "option":
                            null === (a = l.nextElementSibling) || void 0 === a || a.focus();
                            break;
                        case "group":
                            let t = l.nextElementSibling.querySelector('[role="option"]');
                            null == t || t.focus();
                            break;
                        default:
                            let e = null === (o = l.closest('[role="group"]')) || void 0 === o ? void 0 : o.nextElementSibling;
                            e ? e.focus() : c.focus()
                    }
                    break;
                case "ArrowUp":
                    switch (t.preventDefault(), null === (i = l.previousElementSibling) || void 0 === i ? void 0 : i.role) {
                        case "option":
                            null === (r = l.previousElementSibling) || void 0 === r || r.focus();
                            break;
                        case "group":
                            let t = l.previousElementSibling.querySelectorAll('[role="option"]'),
                                e = t[t.length - 1];
                            null == e || e.focus();
                            break;
                        default:
                            let a = null === (s = l.closest('[role="group"]')) || void 0 === s ? void 0 : s.previousElementSibling;
                            a ? a.focus() : d.focus()
                    }
                    break;
                case "Home":
                    c.focus();
                    break;
                case "End":
                    d.focus();
                    break;
                case "Escape":
                    this.displayResults = !1, this.pseudoSelect.focus()
            }
        }, this.hintId = `${this.uid}-hint`, this.prismId = `prism-select-${this.uid}`, this.name = this.uid, this.label = this.name.charAt(0).toUpperCase() + this.name.replace(/-/g, " ").substring(1), this.required = !1, this.disabled = !1, this.hideLabel = !1, this.hideInvalid = !1, this.hint = void 0, this.multiple = !1, this.invalid = !1, this.invalidMessage = "This field is required", this.ariaDescribedby = "", this.value = void 0, this.options = void 0, this.readonly = !1, this.autoComplete = "off", this.variant = "contained", this.native = !0, this.describedBy = void 0, this.valid = !1, this.hostHeight = "83", this.resultsPosition = "bottom", this.displayResults = !1, this.customOptions = void 0, this.selectedOptions = [], this.hiddenValue = void 0, this.liveMessage = void 0, this.totalCustomOptions = void 0
    }
    async setFocus() {
        this.element && this.element.focus(), this.native || this.pseudoSelect.focus()
    }
    emitHiddenValue(t, e) {
        t !== e && this.prismWatch.emit({
            name: "multi-results-updated",
            value: this.hiddenValue
        })
    }
    onSubmit(t) {
        this.native || "submit" !== t.type || "true" !== this.pseudoSelect.ariaRequired || (this.invalid = "" === this.pseudoSelect.value)
    }
    valueChanged(t) {
        let e = [];
        Array.from(t.target.selectedOptions).forEach((t => e.push(t.value))), this.value = e.join(","), this.prismChange.emit({
            name: "value-changed",
            value: this.value
        })
    }
    inputChanged(t) {
        this.isDirty = !0;
        let e = t.currentTarget;
        this.prismInput.emit({
            name: "input-changed",
            id: e.id,
            invalid: this.invalid,
            target: e
        })
    }
    onCheckValidity(t) {
        t.preventDefault();
        const e = t.currentTarget;
        this.invalid = !e.validity.valid, this.valid = e.validity.valid, this.describedBy = `${this.hintId} ${this.ariaDescribedby}`.trim(), this.prismInput.emit({
            name: "check-validity",
            value: e.value,
            target: e,
            reason: e.validity
        })
    }
    inputState(t) {
        let e = t.currentTarget;
        switch (t.type) {
            case "blur":
                this.isDirty && (this.invalid = !e.validity.valid, this.valid = e.validity.valid), this.prismBlur.emit({
                    name: "input-blurred",
                    value: e.value,
                    target: e
                });
                break;
            case "focus":
                this.prismFocus.emit({
                    name: "input-focused",
                    value: e.value,
                    target: e
                })
        }
    }
    connectedCallback() {
        if (this.describedBy = this.hint ? `${this.hintId} ${this.ariaDescribedby}` : this.ariaDescribedby, !this.native) {
            this.customOptions = this.options, document.addEventListener("mousedown", this.onBlur), this.appearFrom ? this.resultsPosition = this.appearFrom : window.addEventListener("resize", n((() => {
                this._setResultsPosition(this.el.getBoundingClientRect())
            }), this.debounceDelay));
            const t = this.options.find((t => "" === t.value || !0 === t.selected));
            t && !this.native && (this.value = t.display)
        }
        l("prism-select")
    }
    disconnectedCallback() {
        document.removeEventListener("mousedown", this.onBlur)
    }
    componentDidLoad() {
        this._hostDimensions = this.el.getBoundingClientRect()
    }
    componentWillRender() {
        this._hostDimensions && this._setResultsPosition(this._hostDimensions)
    }
    render() {
        var t, e;
        const i = this.invalid || this.hint,
            s = t => {
                let e = t.selected;
                return a("button", {
                    role: "option",
                    type: "button",
                    "aria-selected": null == e ? void 0 : e.toString(),
                    key: t.value,
                    "data-value": t.value,
                    "data-display": t.display,
                    value: t.display || t.value,
                    name: t.display || t.value,
                    hidden: t.hidden,
                    disabled: t.disabled,
                    onClick: t => this.selectOption(t),
                    onKeyDown: t => this.resultsKeyListeners(t),
                    class: {
                        result: !0, selected: e
                    }
                }, (null == t ? void 0 : t.icon) && a("prism-icon", {
                    tone: "custom",
                    "aria-hidden": "true",
                    role: "presentation",
                    label: null == t ? void 0 : t.iconLabel,
                    theme: (null == t ? void 0 : t.iconTheme) || "fill",
                    name: null == t ? void 0 : t.icon
                }), a("span", {
                    class: "selection-content"
                }, t.display || t.value, (null == t ? void 0 : t.description) && a("prism-text", {
                    display: "body2",
                    priority: "secondary",
                    class: "selection-description"
                }, null == t ? void 0 : t.description)), e && a("prism-icon", {
                    class: {
                        "checked-icon": !0, "selected-icon": e, hide: !e
                    },
                    tone: "custom",
                    name: "check",
                    role: "presentation",
                    "aria-hidden": "true"
                }))
            };
        return a(o, {
            value: this.value,
            class: {
                [this.variant]: !0
            }
        }, this.multiple && !this.native && a("div", {
            class: "announcement",
            "aria-live": "polite",
            "aria-atomic": "true"
        }, this.liveMessage), a("label", {
            id: `labelfor-${this.prismId}`,
            htmlFor: this.prismId
        }, a("prism-text", {
            tag: "span",
            display: "caption",
            class: {
                "label-text": !0, "screen-reader-text": this.hideLabel
            }
        }, this.label)), a("div", {
            class: "select-container"
        }, this.native ? a("select", {
            autoComplete: this.autoComplete,
            multiple: this.multiple,
            onChange: t => this.valueChanged(t),
            onInput: t => this.inputChanged(t),
            onInvalid: t => this.onCheckValidity(t),
            onBlur: t => this.inputState(t),
            onFocus: t => this.inputState(t),
            id: this.prismId,
            ref: t => this.element = t,
            name: this.name,
            disabled: this.disabled,
            required: this.required,
            "aria-invalid": this.invalid.toString(),
            "aria-required": this.required.toString(),
            "aria-describedby": !!Boolean(this.describedBy) && this.describedBy,
            class: {
                select: !0, disabled: this.disabled, invalid: this.invalid, valid: this.valid
            }
        }, null === (t = this.options) || void 0 === t ? void 0 : t.map((t => {
            var e;
            let o = null === (e = this.value) || void 0 === e ? void 0 : e.split(",");
            return t.label ? a("optgroup", {
                label: t.label
            }, t.children.map((t => a("option", {
                selected: t.selected || (null == o ? void 0 : o.includes(t.value)),
                key: t.value,
                value: t.value,
                hidden: t.hidden,
                disabled: t.disabled
            }, t.display || t.value)))) : a("option", {
                selected: t.selected || (null == o ? void 0 : o.includes(t.value)),
                key: t.value,
                value: t.value,
                hidden: t.hidden,
                disabled: t.disabled
            }, t.display || t.value)
        })), a("slot", {
            name: "option"
        })) : a("button", {
            type: "button",
            onClick: t => this.openCustomOptions(t),
            onKeyDown: t => this.inputKeyListeners(t),
            "aria-controls": `custom-selections-${this.prismId}`,
            "aria-expanded": this.displayResults.toString(),
            "aria-haspopup": "listbox",
            "aria-labelledby": `labelfor-${this.prismId}`,
            role: "combobox",
            "aria-multiselectable": this.multiple.toString(),
            "aria-activedescendant": !0,
            id: this.prismId,
            name: this.name,
            disabled: this.disabled,
            ref: t => this.pseudoSelect = t,
            "aria-invalid": this.invalid.toString(),
            "aria-required": this.required.toString(),
            "aria-describedby": !!Boolean(this.describedBy) && this.describedBy,
            class: {
                select: !0, disabled: this.disabled, invalid: this.invalid, valid: this.valid
            }
        }, a(r, null, this.multiple && this.totalCustomOptions >= 1 && a("prism-badge", {
            class: "count-badge",
            tone: "theme1",
            size: "sm"
        }, this.totalCustomOptions), this.value)), a("prism-icon", {
            role: "presentation",
            "aria-hidden": "true",
            class: {
                arrow: !0
            },
            style: {
                "--icon-color": "inherit"
            },
            theme: "fill",
            size: "sm",
            name: this.displayResults ? "caret_button_up" : "caret_button_down"
        })), !this.native && a("section", {
            style: {
                "--bottom": this.hostHeight
            },
            class: {
                "results-container": !0
            },
            ref: t => this.resultsContainerElement = t
        }, a("section", {
            role: "listbox",
            id: `custom-selections-${this.prismId}`,
            tabindex: "-1",
            class: {
                results: !0, open: this.displayResults, [this.resultsPosition]: !0
            },
            ref: t => this.resultsElement = t
        }, null === (e = this.customOptions) || void 0 === e ? void 0 : e.map(((t, e) => {
            if (t.label && t.children) {
                let o = `${t.label.replaceAll(" ","-").toLowerCase()}-group`;
                return a("div", {
                    key: e,
                    role: "group",
                    "aria-labelledby": o
                }, a("div", {
                    class: "result-group-label",
                    "aria-hidden": "true",
                    id: o
                }, t.label), t.children.map((t => a(s, Object.assign({}, t)))))
            }
            return a(s, Object.assign({}, t))
        })))), i && a("span", {
            class: {
                "hint-container": !0, "screen-reader-text": this.invalid && this.hideInvalid
            }
        }, this.invalid && a("prism-icon", {
            theme: "fill",
            slot: "icon-trailing",
            size: "xs",
            tone: "negative",
            name: "alert"
        }), a("prism-text", {
            class: {
                "invalid-text": this.invalid, "hint-text": !0
            },
            display: "caption",
            id: this.hintId
        }, this.invalid ? this.invalidMessage : this.hint)), this.multiple && a("input", {
            type: "hidden",
            name: this.name,
            value: this.hiddenValue
        }))
    }
    get el() {
        return i(this)
    }
    static get watchers() {
        return {
            hiddenValue: ["emitHiddenValue"]
        }
    }
};
h.style = ".sc-prism-select-h{--select-margin-top:1rem;--select-margin-bottom:1rem;--select-padding-contained:1rem 3.5rem 1rem 1rem;--select-padding-minimal:0.75rem 1.5rem 0.5rem 0;position:relative;display:block;width:100%;margin-top:1rem;margin-top:var(--select-margin-top, 1rem);margin-bottom:1rem;margin-bottom:var(--select-margin-bottom, 1rem)}.screen-reader-text.sc-prism-select{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.label-text.sc-prism-select{margin-bottom:0.25rem;display:inline-block;cursor:pointer;--tw-text-opacity:1;color:rgb(var(--text-color-neutral-base) / var(--tw-text-opacity))}@media (prefers-reduced-motion){.select.sc-prism-select{transition:none}}.select.sc-prism-select{font-family:var(--text-body1-family);font-size:var(--text-body1-size);font-weight:var(--text-body1-weight);letter-spacing:var(--text-body1-letter-spacing);line-height:var(--text-body1-leading);text-transform:var(--text-body1-text-transform);--text-body1-leading:var(--text-body1-line-height);--text-body1-family:var(--text-family-default);box-sizing:border-box;display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;border-radius:var(--border-radius-small, 4px);border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-neutral-base) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral2-base) / var(--tw-bg-opacity));text-align:left;--tw-text-opacity:1;color:rgb(var(--text-color-neutral-base) / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;--shadow-color:var(--material-neutral2-base-shadow);padding:var(--select-padding-contained);font-family:inherit;transition:all 0.2s ease-in-out}.minimal.sc-prism-select-h .select.sc-prism-select{border-radius:0px;border-radius:var(--border-radius-none, 0px);background-color:transparent;border-bottom-width:1px;border-top-width:0px;border-left-width:0px;border-right-width:0px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-neutral2-base) / var(--tw-border-opacity));padding:var(--select-padding-minimal)}.select.sc-prism-select:invalid{--tw-text-opacity:1;color:rgb(var(--text-color-neutral2-base) / var(--tw-text-opacity))}.select.sc-prism-select:focus{outline:2px solid rgb(var(--border-color-stroke-theme1-base));outline-offset:0px;border-color:transparent}.minimal.sc-prism-select-h .select.sc-prism-select:focus{outline:2px solid transparent;outline-offset:2px;border-bottom-width:2px;--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-theme1-base) / var(--tw-border-opacity))}.hint-text.sc-prism-select{display:block;text-align:left}.invalid-text.sc-prism-select{--tw-text-opacity:1;color:rgb(var(--text-color-negative-base) / var(--tw-text-opacity))}.disabled.sc-prism-select{cursor:not-allowed;opacity:0.3;opacity:var(--opacity-inactive, 0.3)}.invalid.sc-prism-select{--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-negative-base) / var(--tw-border-opacity))}.invalid.sc-prism-select:focus{outline-color:rgb(var(--border-color-stroke-negative-base))}.minimal.sc-prism-select-h .invalid.sc-prism-select,.minimal.sc-prism-select-h .invalid.sc-prism-select:focus{--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-negative-base) / var(--tw-border-opacity))}.valid.sc-prism-select{--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-positive-base) / var(--tw-border-opacity))}.valid.sc-prism-select:focus{outline-color:rgb(var(--border-color-stroke-positive-base))}.minimal.sc-prism-select-h .valid.sc-prism-select,.minimal.sc-prism-select-h .valid.sc-prism-select:focus{--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-positive-base) / var(--tw-border-opacity))}.select-container.sc-prism-select{position:relative;display:flex;align-items:center}.arrow.sc-prism-select{pointer-events:none;position:absolute;right:1.5rem;z-index:10}.minimal.sc-prism-select-h .arrow.sc-prism-select{right:0px}.arrow.hidden.sc-prism-select{display:none}.hint-container.sc-prism-select{margin-top:0.25rem;display:flex;align-items:center}.hint-container.sc-prism-select>.sc-prism-select:not([hidden])~.sc-prism-select:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * (1 - var(--tw-space-x-reverse)));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.result.sc-prism-select{padding:1rem;font-family:var(--text-body1-family);font-size:var(--text-body1-size);font-weight:var(--text-body1-weight);letter-spacing:var(--text-body1-letter-spacing);line-height:var(--text-body1-leading);text-transform:var(--text-body1-text-transform);--text-body1-leading:var(--text-body1-line-height);--text-body1-family:var(--text-family-default);display:flex;width:100%;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;align-items:center;justify-content:space-between}.result.sc-prism-select>.sc-prism-select:not([hidden])~.sc-prism-select:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * (1 - var(--tw-space-x-reverse)));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.result.sc-prism-select{border-style:none;background-color:transparent;text-align:left}.result.sc-prism-select .selected-icon.sc-prism-select{--tw-text-opacity:1;color:rgb(var(--text-color-theme1-base) / var(--tw-text-opacity))}.result.sc-prism-select{transition:background-color ease-in-out 0.2s}.result.sc-prism-select:focus{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral-hover) / var(--tw-bg-opacity));outline-style:solid;outline-width:2px;outline-offset:-3px;outline-color:#6138F5;outline-color:var(--outline-color-theme1-base, #6138F5);--shadow-color:var(--material-neutral-hover-shadow)}.result.sc-prism-select:hover{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral-hover) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral-hover-shadow)}.result.sc-prism-select:active{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral-down) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral-down-shadow)}.result.selected.sc-prism-select{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-theme1-base) / var(--tw-bg-opacity));--shadow-color:var(--material-theme1-base-shadow)}.result.selected.sc-prism-select:hover{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-theme1-hover) / var(--tw-bg-opacity));--shadow-color:var(--material-theme1-hover-shadow)}.result.selected.sc-prism-select:active{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-theme1-hover) / var(--tw-bg-opacity));--shadow-color:var(--material-theme1-hover-shadow)}.result.selected.sc-prism-select:focus{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-theme1-hover) / var(--tw-bg-opacity));--shadow-color:var(--material-theme1-hover-shadow)}.result.selected.sc-prism-select:focus .selected-icon.sc-prism-select{--tw-text-opacity:1;color:rgb(var(--text-color-theme1-focus) / var(--tw-text-opacity))}.result.sc-prism-select:disabled{cursor:not-allowed}.result-group-label.sc-prism-select{padding:1rem;font-family:var(--text-callout2-family);font-size:var(--text-callout2-size);font-weight:var(--text-callout2-weight);letter-spacing:var(--text-callout2-letter-spacing);line-height:var(--text-callout2-leading);text-transform:var(--text-callout2-text-transform);--text-callout2-leading:var(--text-callout2-line-height);--text-callout2-family:var(--text-family-default);--tw-text-opacity:0.6}.results.sc-prism-select{position:absolute;left:0px;top:0px;z-index:500;margin-top:0.25rem;display:none;width:100%;overflow:auto;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-neutral-base) / var(--tw-border-opacity));--tw-border-opacity:var(--border-opacity-tertiary, 0.15);--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral-base) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral-base-shadow)}.arrow.results.sc-prism-select{display:none}.results.sc-prism-select{border-radius:8px;border-radius:var(--border-radius-medium, 8px);--tw-shadow:0px 4px 8px -4px var(--shadow-color);--tw-shadow-colored:0px 4px 8px -4px var(--tw-shadow-color);box-shadow:0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-height:50vh}.results.open.sc-prism-select{display:block}.selection-content.sc-prism-select{flex:1 1 auto}.results-container.sc-prism-select{position:relative}.announcement.sc-prism-select{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.count-badge.sc-prism-select{margin-right:0.25rem}";
const b = class {
    constructor(e) {
        t(this, e), this.tag = "p", this.display = "body2", this.ellipsis = !1, this.priority = "primary"
    }
    connectedCallback() {
        l("prism-text")
    }
    render() {
        return a(o, {
            class: {
                "text-block": "span" !== this.tag, [this.display]: !0
            }
        }, a(this.tag, {
            class: {
                text: !0, [this.priority]: !0, ellipsis: this.ellipsis
            }
        }, a("slot", null)))
    }
};
b.style = ":host{--line-height:inherit;--padding:var(--size-space-0);--margin:var(--size-space-0);--max:auto;color:inherit;display:inline-block;display:var(--display, inline-block)}:host(.text-block){display:block;display:var(--display, block)}:host(.display0){font-family:var(--text-display0-family);font-size:var(--text-display0-size);font-weight:var(--text-display0-weight);letter-spacing:var(--text-display0-letter-spacing);line-height:var(--text-display0-leading);text-transform:var(--text-display0-text-transform);--text-display0-leading:var(--text-display0-line-height);--text-display0-family:var(--text-family-brand)}:host(.display1){font-family:var(--text-display1-family);font-size:var(--text-display1-size);font-weight:var(--text-display1-weight);letter-spacing:var(--text-display1-letter-spacing);line-height:var(--text-display1-leading);text-transform:var(--text-display1-text-transform);--text-display1-leading:var(--text-display1-line-height);--text-display1-family:var(--text-family-brand)}:host(.display2){font-family:var(--text-display2-family);font-size:var(--text-display2-size);font-weight:var(--text-display2-weight);letter-spacing:var(--text-display2-letter-spacing);line-height:var(--text-display2-leading);text-transform:var(--text-display2-text-transform);--text-display2-leading:var(--text-display2-line-height);--text-display2-family:var(--text-family-brand)}:host(.heading1){font-family:var(--text-headline1-family);font-size:var(--text-headline1-size);font-weight:var(--text-headline1-weight);letter-spacing:var(--text-headline1-letter-spacing);line-height:var(--text-headline1-leading);text-transform:var(--text-headline1-text-transform);--text-headline1-leading:var(--text-headline1-line-height);--text-headline1-family:var(--text-family-brand)}:host(.heading2){font-family:var(--text-headline2-family);font-size:var(--text-headline2-size);font-weight:var(--text-headline2-weight);letter-spacing:var(--text-headline2-letter-spacing);line-height:var(--text-headline2-leading);text-transform:var(--text-headline2-text-transform);--text-headline2-leading:var(--text-headline2-line-height);--text-headline2-family:var(--text-family-brand)}:host(.heading3){font-family:var(--text-headline3-family);font-size:var(--text-headline3-size);font-weight:var(--text-headline3-weight);letter-spacing:var(--text-headline3-letter-spacing);line-height:var(--text-headline3-leading);text-transform:var(--text-headline3-text-transform);--text-headline3-leading:var(--text-headline3-line-height);--text-headline3-family:var(--text-family-brand)}:host(.body0){font-family:var(--text-body0-family);font-size:var(--text-body0-size);font-weight:var(--text-body0-weight);letter-spacing:var(--text-body0-letter-spacing);line-height:var(--text-body0-leading);text-transform:var(--text-body0-text-transform);--text-body0-leading:var(--text-body0-line-height);--text-body0-family:var(--text-family-default)}:host(.body1){font-family:var(--text-body1-family);font-size:var(--text-body1-size);font-weight:var(--text-body1-weight);letter-spacing:var(--text-body1-letter-spacing);line-height:var(--text-body1-leading);text-transform:var(--text-body1-text-transform);--text-body1-leading:var(--text-body1-line-height);--text-body1-family:var(--text-family-default)}:host(.body2){font-family:var(--text-body2-family);font-size:var(--text-body2-size);font-weight:var(--text-body2-weight);letter-spacing:var(--text-body2-letter-spacing);line-height:var(--text-body2-leading);text-transform:var(--text-body2-text-transform);--text-body2-leading:var(--text-body2-line-height);--text-body2-family:var(--text-family-default)}:host(.body3){font-family:var(--text-body3-family);font-size:var(--text-body3-size);font-weight:var(--text-body3-weight);letter-spacing:var(--text-body3-letter-spacing);line-height:var(--text-body3-leading);text-transform:var(--text-body3-text-transform);--text-body3-leading:var(--text-body3-line-height);--text-body3-family:var(--text-family-default)}:host(.body4){font-family:var(--text-body4-family);font-size:var(--text-body4-size);font-weight:var(--text-body4-weight);letter-spacing:var(--text-body4-letter-spacing);line-height:var(--text-body4-leading);text-transform:var(--text-body4-text-transform);--text-body4-leading:var(--text-body4-line-height);--text-body4-family:var(--text-family-default)}:host(.button){font-family:var(--text-button1-family);font-size:var(--text-button1-size);font-weight:var(--text-button1-weight);letter-spacing:var(--text-button1-letter-spacing);line-height:var(--text-button1-leading);text-transform:var(--text-button1-text-transform);--text-button1-leading:var(--text-button1-line-height);--text-button1-family:var(--text-family-brand)}:host(.button2){font-family:var(--text-button2-family);font-size:var(--text-button2-size);font-weight:var(--text-button2-weight);letter-spacing:var(--text-button2-letter-spacing);line-height:var(--text-button2-leading);text-transform:var(--text-button2-text-transform);--text-button2-leading:var(--text-button2-line-height);--text-button2-family:var(--text-family-brand)}:host(.callout1){font-family:var(--text-callout1-family);font-size:var(--text-callout1-size);font-weight:var(--text-callout1-weight);letter-spacing:var(--text-callout1-letter-spacing);line-height:var(--text-callout1-leading);text-transform:var(--text-callout1-text-transform);--text-callout1-leading:var(--text-callout1-line-height);--text-callout1-family:var(--text-family-default)}:host(.callout2){font-family:var(--text-callout2-family);font-size:var(--text-callout2-size);font-weight:var(--text-callout2-weight);letter-spacing:var(--text-callout2-letter-spacing);line-height:var(--text-callout2-leading);text-transform:var(--text-callout2-text-transform);--text-callout2-leading:var(--text-callout2-line-height);--text-callout2-family:var(--text-family-default)}:host(.caption){font-family:var(--text-caption-family);font-size:var(--text-caption-size);font-weight:var(--text-caption-weight);letter-spacing:var(--text-caption-letter-spacing);line-height:var(--text-caption-leading);text-transform:var(--text-caption-text-transform);--text-caption-leading:var(--text-caption-line-height);--text-caption-family:var(--text-family-default)}:host(.tag){font-family:var(--text-tag-family);font-size:var(--text-tag-size);font-weight:var(--text-tag-weight);letter-spacing:var(--text-tag-letter-spacing);line-height:var(--text-tag-leading);text-transform:var(--text-tag-text-transform);--text-tag-leading:var(--text-tag-line-height);--text-tag-family:var(--text-family-default)}.text{margin:var(--margin);padding:var(--padding);display:var(--display);color:inherit;font-size:inherit;font-weight:inherit;line-height:var(--line-height)}.ellipsis{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:var(--max)}.secondary{opacity:0.6}.inactive{opacity:0.3}.tertiary{opacity:0.15}";
export {
    c as prism_badge, d as prism_icon, h as prism_select, b as prism_text
}