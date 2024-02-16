/*!
 * (@prism-ui/core) design-system - v7.11.3 - made with ❤️ in Philadelphia
 */
import {
    r as i,
    c as t,
    h as r,
    H as s,
    g as e
} from "./p-e173c275.js";
import {
    g as o,
    m as a
} from "./p-c277c41f.js";
const n = class {
    constructor(r) {
        i(this, r), this.prismClick = t(this, "prismClick", 7), this.uid = o(), this.sibling = !1, this.slots = {
            leading: !1,
            trailing: !1,
            tags: !1
        }, this._itemClicked = i => {
            const {
                currentTarget: t
            } = i, {
                id: r
            } = t;
            this.prismClick.emit({
                id: r,
                name: "lineitem-clicked",
                target: t
            }).defaultPrevented && i.preventDefault()
        }, this.prismId = `prism-lineitem-${this.uid}`, this.attr = {}, this.label = void 0, this.split = void 0, this.arrow = !0, this.eyebrow = void 0, this.labelSecondary = void 0, this.description = void 0, this.descriptionSecondary = void 0, this.spacing = "standard", this.leadingAlign = "center", this.tag = "section", this.type = "button", this.download = void 0, this.href = void 0, this.rel = void 0, this.target = void 0, this.direction = "right"
    }
    componentWillLoad() {
        var i;
        "PRISM-LINEITEM" === (null === (i = this.el.nextElementSibling) || void 0 === i ? void 0 : i.tagName) && (this.sibling = !0)
    }
    connectedCallback() {
        var i;
        this.slots.leading = !!this.el.querySelector('[slot="asset-leading"]'), this.slots.trailing = !!this.el.querySelector('[slot="asset-trailing"]'), this.slots.tags = !!this.el.querySelector('[slot="tags"]'), this.slots.leading && (null === (i = this.el.querySelector('[slot="asset-leading"]')) || void 0 === i || i.classList.add(`psm-justify-${this.leadingAlign}`)), this.slots.trailing && (this.split = !0), a("prism-lineitem")
    }
    render() {
        const i = "a" === this.tag || "button" === this.tag,
            t = !0 === i && this.arrow;
        return r(s, {
            class: {
                divide: this.sibling, action: i, [this.spacing]: !0
            }
        }, r(this.tag, Object.assign({
            id: this.prismId,
            href: "a" === this.tag ? this.href : void 0,
            target: "a" === this.tag ? this.target : void 0,
            download: "a" === this.tag ? this.download : void 0,
            rel: "a" === this.tag ? this.rel : void 0,
            type: "button" === this.tag ? "button" : void 0,
            class: {
                "li-wrapper": !0, line: t && !0 === this.split
            }
        }, this.attr, {
            onClick: i ? i => {
                this._itemClicked(i)
            } : void 0
        }), r("slot", {
            name: "asset-leading"
        }), r("span", {
            class: "middle"
        }, r("span", {
            class: "upper-row"
        }, this.eyebrow && r("prism-text", {
            priority: "secondary",
            display: "caption"
        }, this.eyebrow), this.label && r("prism-text", {
            display: "body1"
        }, this.label)), r("span", {
            class: "middle-row"
        }, this.description && r("prism-text", {
            class: "description",
            priority: "secondary",
            display: "caption"
        }, this.description), r("slot", {
            name: "tags"
        }))), r("span", {
            class: "right"
        }, this.labelSecondary && r("prism-text", {
            display: "body1"
        }, this.labelSecondary), this.descriptionSecondary && r("prism-text", {
            class: "description",
            priority: "secondary",
            display: "caption"
        }, this.descriptionSecondary)), t && r("prism-icon", {
            theme: "outline",
            priority: "secondary",
            class: "last-item",
            name: `caret_button_${this.direction}`
        })), r("slot", {
            name: "asset-trailing"
        }))
    }
    get el() {
        return e(this)
    }
};
n.style = ".sc-prism-lineitem-h{display:inline-flex;outline:0.0625rem solid transparent;box-sizing:border-box;width:100%;align-items:center;transition:all 200ms ease-in;transition-property:outline-color}.sc-prism-lineitem-h:not(.hydrated){transition-duration:0ms}.divide.sc-prism-lineitem-h{margin-top:1px;margin-bottom:1px;border-top-width:0px;border-right-width:0px;border-left-width:0px;border-bottom-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-neutral-base) / var(--tw-border-opacity));--tw-border-opacity:var(--border-opacity-tertiary, 0.15)}.li-wrapper.sc-prism-lineitem{display:flex;width:100%;flex:1 1 auto;-webkit-appearance:none;-moz-appearance:none;appearance:none;align-items:center;border-width:0px;--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral-base) / var(--tw-bg-opacity));padding:1rem;text-align:left;outline:2px solid transparent;outline-offset:2px;--shadow-color:var(--material-neutral-base-shadow)}.compact.sc-prism-lineitem-h .li-wrapper.sc-prism-lineitem{padding:0.5rem}button.li-wrapper.sc-prism-lineitem:hover,a.li-wrapper.sc-prism-lineitem:hover{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral-hover) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral-hover-shadow)}button.li-wrapper.sc-prism-lineitem:focus,a.li-wrapper.sc-prism-lineitem:focus{--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral-focus) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral-focus-shadow)}.action[focus-within].sc-prism-lineitem-h{outline-color:rgb(var(--border-color-stroke-theme1-base))}.action.sc-prism-lineitem-h:focus-within{outline-color:rgb(var(--border-color-stroke-theme1-base))}a.li-wrapper.sc-prism-lineitem{color:inherit;text-decoration-line:none}.li-wrapper.line.sc-prism-lineitem{margin-right:0.5rem;border-right-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-neutral-base) / var(--tw-border-opacity));--tw-border-opacity:var(--border-opacity-tertiary, 0.15);padding-right:0.5rem}.li-wrapper.sc-prism-lineitem *.sc-prism-lineitem:last-child{margin-left:auto}.last-item.sc-prism-lineitem{padding-left:0.5rem}.li-wrapper.sc-prism-lineitem .description.sc-prism-lineitem{margin-top:0.25rem}.li-wrapper.sc-prism-lineitem .right.sc-prism-lineitem{flex:1 1 auto;text-align:right}.li-wrapper.sc-prism-lineitem .right.sc-prism-lineitem:not(:empty){margin-left:1rem}.sc-prism-lineitem-s>[slot='asset-leading']{margin-right:1rem}.sc-prism-lineitem-s>[slot='asset-leading'].psm-justify-top{align-self:flex-start}@media (prefers-reduced-motion){.sc-prism-lineitem-h{transition:none}}";
export {
    n as prism_lineitem
}