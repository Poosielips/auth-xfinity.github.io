/*!
 * (@prism-ui/core) design-system - v7.11.3 - made with ❤️ in Philadelphia
 */
import {
    r as t,
    c as i,
    h as e,
    H as s,
    g as a
} from "./p-e173c275.js";
import {
    g as r,
    m as n
} from "./p-c277c41f.js";
const o = class {
    constructor(e) {
        t(this, e), this.prismChange = i(this, "prismChange", 7), this.prismInput = i(this, "prismInput", 7), this.prismKeyup = i(this, "prismKeyup", 7), this.prismBlur = i(this, "prismBlur", 7), this.prismFocus = i(this, "prismFocus", 7), this.prismInvalid = i(this, "prismInvalid", 7), this.uid = r(), this.formatCurrentPosition = 0, this.formatNextPosition = 0, this.isComposing = !1, this.isDirty = !1, this.slots = {
            "icon-leading": !1,
            "icon-trailing": !1
        }, this.onCompositionStart = () => {
            this.isComposing = !0
        }, this.onCompositionEnd = () => {
            this.isComposing = !1
        }, this.prismId = `prism-input-text-${this.uid}`, this.name = this.uid, this.label = this.name.charAt(0).toUpperCase() + this.name.replace(/-/g, " ").substring(1), this.disabled = !1, this.hideLabel = !1, this.hideInvalid = !1, this.invalid = !1, this.invalidMessage = "This field is required", this.ariaDescribedby = "", this.ariaActivedescendant = void 0, this.ariaControls = void 0, this.ariaExpanded = void 0, this.ariaAutocomplete = void 0, this.role = void 0, this.describedBy = void 0, this.autoCapitalize = "off", this.autocomplete = "off", this.autocorrect = "off", this.clearOnEdit = void 0, this.autoFocus = !1, this.hint = void 0, this.min = void 0, this.max = void 0, this.minlength = void 0, this.maxlength = void 0, this.pattern = void 0, this.placeholder = void 0, this.required = !1, this.readonly = !1, this.type = "text", this.value = "", this.obfuscate = !1, this.obfuscateLabel = "toggle password visibility", this.variant = "contained", this.textDisplay = "body1", this.inputmode = "text", this.format = void 0, this.hintId = `${this.prismId}-hint`, this.valid = !1, this.elementFocused = !1, this.ariaMessage = ""
    }
    getClipboardData(t) {
        let i = t.clipboardData.getData("text");
        this.prismChange.emit({
            name: "value-changed",
            value: i
        })
    }
    async setFocus() {
        this.nativeInput && this.nativeInput.focus()
    }
    getValue() {
        let t = "number" == typeof this.value ? this.value.toString() : (this.value || "").toString();
        if (this.format && t) {
            const [i, e] = this.formatValidCharacters(t);
            t = e
        }
        return t
    }
    valueWatchChanged() {
        const t = this.nativeInput,
            i = this.getValue();
        t && t.value !== i && !this.isComposing && (t.value = i), this.prismChange.emit({
            id: this.prismId,
            value: null == this.value ? this.value : this.value.toString()
        })
    }
    valueChanged(t) {
        var i;
        null === (i = this.el) || void 0 === i || i.setAttribute("value", t.target.value), this.prismChange.emit({
            name: "value-changed",
            value: t.target.value
        })
    }
    onCheckValidity(t) {
        t.preventDefault();
        let i = t.currentTarget;
        this.invalid = !i.validity.valid, this.valid = i.validity.valid, this.describedBy = `${this.hintId} ${this.ariaDescribedby}`.trim(), this.prismInvalid.emit({
            name: "check-validity",
            value: i.value,
            target: i,
            reason: i.validity
        }), this.prismInput.emit({
            name: "check-validity",
            value: i.value,
            target: i,
            reason: i.validity
        })
    }
    checkFormatValidity(t, i) {
        this.format && t.setCustomValidity(i.length > 0 && this.format.length !== i.length ? "formatting" : "")
    }
    inputChanged(t) {
        if (this.isDirty = !0, this.describedBy = `${this.hintId} ${this.ariaDescribedby}`.trim(), this.format) this.inputChangedWithFormatting(t);
        else {
            let i = t.currentTarget;
            this.prismInput.emit({
                name: "input-change",
                value: i.value,
                target: i
            })
        }
    }
    inputChangedWithFormatting(t) {
        const i = t.currentTarget,
            e = i.value,
            [s, a] = this.formatValidCharacters(e);
        if (-1 === this.formatNextPosition && (this.formatNextPosition = this.findNextPosition(this.formatCurrentPosition)), this.nativeInput.value = a, !this.keydownData.isBackspace && a === this.keydownData.value) return this.nativeInput.setSelectionRange(this.formatCurrentPosition, this.formatCurrentPosition), this.setAriaMessage("Invalid character"), !1;
        this.nativeInput.setSelectionRange(this.formatNextPosition, this.formatNextPosition), this.prismInput.emit({
            name: "input-change-format",
            value: s,
            formattedValue: a,
            target: i,
            dirty: this.isDirty,
            invalid: this.invalid
        })
    }
    onKeyup(t) {
        this.prismKeyup.emit({
            name: "input-keyup",
            type: t.type,
            key: t.key,
            code: t.code,
            target: t.target,
            valid: t.currentTarget.validity.valid
        })
    }
    onKeydown(t) {
        if (!this.format) return;
        const i = t.target;
        this.keydownData = {
            value: i.value,
            action: t.key,
            isBackspace: "Backspace" === t.key
        };
        const e = i.selectionStart !== i.selectionEnd;
        if (this.formatCurrentPosition = i.selectionStart, this.formatNextPosition = -1, !e || "Backspace" !== t.key && "Delete" !== t.key)
            if ("Backspace" === t.key) {
                if (0 === this.formatCurrentPosition) return void t.preventDefault();
                this.formatNextPosition = this.formatCurrentPosition - 1
            } else "Delete" === t.key && (this.formatNextPosition = this.findNextPosition(this.formatCurrentPosition, !0), "#" !== this.format[this.formatCurrentPosition] && (i.setSelectionRange(this.formatNextPosition, this.formatNextPosition), t.preventDefault()));
        else this.formatNextPosition = this.formatCurrentPosition
    }
    inputState(t) {
        let i = t.currentTarget;
        switch (t.type) {
            case "blur":
                this.checkFormatValidity(i, i.value), this.isDirty && (this.invalid = !i.validity.valid, this.valid = i.validity.valid), this.elementFocused = !1, this.prismBlur.emit({
                    name: "input-blurred",
                    value: i.value,
                    target: i,
                    valid: this.valid,
                    dirty: this.isDirty
                });
                break;
            case "focus":
                this.elementFocused = !0, this.prismFocus.emit({
                    name: "input-focused",
                    value: i.value,
                    target: i
                })
        }
    }
    connectedCallback() {
        this.describedBy = this.hint ? `${this.hintId} ${this.ariaDescribedby}`.trim() : this.ariaDescribedby, this.slots["icon-leading"] = !!this.el.querySelector('[slot="icon-leading"]'), this.slots["icon-trailing"] = !!this.el.querySelector('[slot="icon-trailing"]'), n("prism-input-text")
    }
    componentDidLoad() {
        const t = this.nativeInput;
        t && (t.addEventListener("compositionstart", this.onCompositionStart), t.addEventListener("compositionend", this.onCompositionEnd))
    }
    _revealToggle() {
        this.type = "password" === this.type ? "text" : "password"
    }
    componentDidRender() {
        this.checkFormatValidity(this.nativeInput, this.nativeInput.value)
    }
    formatValidCharacters(t = "") {
        if (!t) return ["", ""];
        let i = "",
            e = "",
            s = 0,
            a = 0;
        for (; s < t.length && a < this.format.length;) "#" === this.format[a] ? /\d/.test(t[s]) ? (e += t[s], i += t[s], s++, a++) : s++ : (this.format[a] === t[s] && s++, e += this.format[a], a++);
        return [i, e]
    }
    findNextPosition(t, i = !1) {
        let e = t;
        for (; e < this.format.length && "#" !== this.format[e];) e++;
        return i ? e : e + 1
    }
    findPreviousPosition(t) {
        if (0 === t) return t;
        let i = t - 1;
        if ("#" === this.format[i]) return i;
        for (; i > 0 && "#" !== this.format[i - 1];) i--;
        return i
    }
    setAriaMessage(t) {
        this.ariaMessage = t, setTimeout((() => {
            this.ariaMessage = ""
        }), 10)
    }
    render() {
        var t;
        const i = this.invalid || this.hint,
            a = this.getValue();
        return e(s, {
            class: {
                [this.variant]: !0
            }
        }, e("span", {
            class: "screen-reader-text",
            "aria-live": "assertive"
        }, this.ariaMessage), e("label", {
            class: {
                invalid: this.invalid
            },
            htmlFor: this.prismId
        }, e("prism-text", {
            tag: "span",
            display: "caption",
            class: {
                invalid: this.invalid, "label-text": !0, "screen-reader-text": this.hideLabel
            }
        }, this.label)), e("span", {
            class: {
                wrap: !0, invalid: this.invalid
            }
        }, "search" === this.type ? e("prism-icon", {
            class: {
                "icon-search": !0
            },
            name: "search"
        }) : e("slot", {
            name: "icon-leading"
        }), e("input", {
            class: {
                input: !0, disabled: this.disabled, invalid: this.invalid, valid: this.valid, "icon-leading": this.slots["icon-leading"] || "search" === this.type, "icon-trailing": this.slots["icon-trailing"] || this.obfuscate, [this.type]: !0, [this.variant]: !0, [this.textDisplay]: !0
            },
            ref: t => this.nativeInput = t,
            id: this.prismId,
            disabled: this.disabled,
            autocapitalize: this.autoCapitalize,
            autocomplete: this.autocomplete,
            autocorrect: this.autocorrect,
            autoFocus: this.autoFocus,
            inputmode: this.inputmode,
            min: this.min,
            max: this.max,
            minlength: this.minlength,
            maxlength: this.maxlength,
            name: this.name,
            pattern: this.pattern,
            placeholder: this.placeholder,
            required: this.required,
            role: this.role,
            readonly: this.readonly,
            type: this.type,
            value: a,
            "aria-invalid": this.invalid.toString(),
            "aria-required": this.required.toString(),
            "aria-describedby": !!Boolean(this.describedBy) && this.describedBy,
            "aria-activedescendant": this.ariaActivedescendant,
            "aria-controls": this.ariaControls,
            "aria-expanded": null === (t = this.ariaExpanded) || void 0 === t ? void 0 : t.toString(),
            "aria-autocomplete": this.ariaAutocomplete,
            onInput: t => this.inputChanged(t),
            onInvalid: t => this.onCheckValidity(t),
            onChange: t => this.valueChanged(t),
            onBlur: t => this.inputState(t),
            onFocus: t => this.inputState(t),
            onKeyDown: t => this.onKeydown(t),
            onKeyUp: t => this.onKeyup(t)
        }), this.obfuscate ? e("prism-button", {
            size: "xs",
            class: "icon-trailing-manual",
            label: this.obfuscateLabel,
            onPrismPress: () => this._revealToggle(),
            display: "ghost-icon"
        }, e("prism-icon", {
            name: "password" === this.type ? "eye" : "eye_hide"
        })) : e("slot", {
            name: "icon-trailing"
        })), i && e("span", {
            class: {
                "hint-container": !0, "screen-reader-text": this.invalid && this.hideInvalid
            }
        }, this.invalid && e("prism-icon", {
            theme: "fill",
            slot: "icon-trailing",
            size: "xs",
            tone: "negative",
            name: "alert"
        }), e("prism-text", {
            class: {
                "invalid-text": this.invalid, "hint-text": !0
            },
            display: "caption",
            id: this.hintId
        }, this.invalid ? this.invalidMessage : this.hint)))
    }
    get el() {
        return a(this)
    }
    static get watchers() {
        return {
            value: ["valueWatchChanged"]
        }
    }
};
o.style = ".sc-prism-input-text-h{--icon-offset-x:0.75rem;--icon-offset-y:0%;--input-margin-top:1rem;--input-margin-bottom:1rem;--text-align:left;--input-padding-minimal:var(--space-asym-1, 0.75rem 0 0.5rem 0);--input-padding-contained:var(--space-sym-1, 1rem);position:relative;box-sizing:border-box;display:block;width:100%;margin-top:var(--input-margin-top);margin-bottom:var(--input-margin-bottom)}.screen-reader-text.sc-prism-input-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.label-text.sc-prism-input-text{margin-bottom:0.25rem;display:inline-block;cursor:pointer;text-align:left;--tw-text-opacity:1;color:rgb(var(--text-color-neutral-base) / var(--tw-text-opacity))}.hint-container.sc-prism-input-text{margin-top:0.25rem;display:flex;align-items:center}.hint-container.sc-prism-input-text>.sc-prism-input-text:not([hidden])~.sc-prism-input-text:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * (1 - var(--tw-space-x-reverse)));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.hint-text.sc-prism-input-text{display:block;text-align:left}@media (prefers-reduced-motion){.input.sc-prism-input-text{transition:none}}.input.sc-prism-input-text{font-family:var(--text-body1-family);font-size:var(--text-body1-size);font-weight:var(--text-body1-weight);letter-spacing:var(--text-body1-letter-spacing);line-height:var(--text-body1-leading);text-transform:var(--text-body1-text-transform);--text-body1-leading:var(--text-body1-line-height);--text-body1-family:var(--text-family-default);box-sizing:border-box;width:100%;background-color:transparent;--tw-text-opacity:1;color:rgb(var(--text-color-neutral-base) / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;border-bottom-width:1px;border-top-width:0px;border-left-width:0px;border-right-width:0px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-neutral2-base) / var(--tw-border-opacity));text-align:left;text-align:var(--text-align, left);transition:border-color, box-shadow, border-radius, padding 0.2s ease-in-out}.input.body1.sc-prism-input-text{font-family:var(--text-body1-family);font-size:var(--text-body1-size);font-weight:var(--text-body1-weight);letter-spacing:var(--text-body1-letter-spacing);line-height:var(--text-body1-leading);text-transform:var(--text-body1-text-transform);--text-body1-leading:var(--text-body1-line-height);--text-body1-family:var(--text-family-default)}.input.heading1.sc-prism-input-text{font-family:var(--text-headline1-family);font-size:var(--text-headline1-size);font-weight:var(--text-headline1-weight);letter-spacing:var(--text-headline1-letter-spacing);line-height:var(--text-headline1-leading);text-transform:var(--text-headline1-text-transform);--text-headline1-leading:var(--text-headline1-line-height);--text-headline1-family:var(--text-family-brand)}.input.sc-prism-input-text::-ms-reveal{display:none}.input.minimal.sc-prism-input-text{padding:var(--input-padding-minimal)}.input.contained.sc-prism-input-text{border-radius:4px;border-radius:var(--border-radius-small, 4px);border-width:1px;--tw-bg-opacity:1;background-color:rgb(var(--background-color-material-neutral2-base) / var(--tw-bg-opacity));--shadow-color:var(--material-neutral2-base-shadow);padding:var(--input-padding-contained)}.input.sc-prism-input-text::-webkit-input-placeholder{--tw-text-opacity:1;color:rgb(var(--text-color-neutral2-base) / var(--tw-text-opacity))}.input.sc-prism-input-text::-moz-placeholder{--tw-text-opacity:1;color:rgb(var(--text-color-neutral2-base) / var(--tw-text-opacity))}.input.sc-prism-input-text::placeholder{--tw-text-opacity:1;color:rgb(var(--text-color-neutral2-base) / var(--tw-text-opacity))}.input.contained.sc-prism-input-text:focus{border-color:transparent;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(var(--ring-color-theme1-base) / var(--tw-ring-opacity))}.input.minimal.sc-prism-input-text:focus{border-bottom-width:2px;--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-theme1-base) / var(--tw-border-opacity))}.input.minimal.valid.sc-prism-input-text,.input.contained.valid.sc-prism-input-text,.input.minimal.valid.sc-prism-input-text:focus{--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-positive-base) / var(--tw-border-opacity))}.input.contained.valid.sc-prism-input-text:focus{border-color:transparent;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(var(--ring-color-positive-base) / var(--tw-ring-opacity))}.input.minimal.invalid.sc-prism-input-text,.input.contained.invalid.sc-prism-input-text,.input.minimal.invalid.sc-prism-input-text:focus{--tw-border-opacity:1;border-color:rgb(var(--border-color-stroke-negative-base) / var(--tw-border-opacity))}.input.contained.invalid.sc-prism-input-text:focus{border-color:transparent;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(var(--ring-color-negative-base) / var(--tw-ring-opacity))}.input.icon-leading.sc-prism-input-text{padding-left:3rem}.input.minimal.icon-leading.sc-prism-input-text{padding-left:2rem}.input.icon-trailing.sc-prism-input-text{padding-right:3.5rem}.input.minimal.icon-trailing.sc-prism-input-text{padding-right:2rem}.input.disabled.sc-prism-input-text::-webkit-input-placeholder{cursor:not-allowed;--tw-border-opacity:var(--border-opacity-inactive, 0.3);--tw-text-opacity:var(--text-opacity-inactive, 0.3)}.input.disabled.sc-prism-input-text::-moz-placeholder{cursor:not-allowed;--tw-border-opacity:var(--border-opacity-inactive, 0.3);--tw-text-opacity:var(--text-opacity-inactive, 0.3)}.input.disabled.sc-prism-input-text::placeholder,.input.disabled.sc-prism-input-text,.input.minimal.disabled.sc-prism-input-text,.input.contained.disabled.sc-prism-input-text{cursor:not-allowed;--tw-border-opacity:var(--border-opacity-inactive, 0.3);--tw-text-opacity:var(--text-opacity-inactive, 0.3)}.invalid-text.sc-prism-input-text{--tw-text-opacity:1;color:rgb(var(--text-color-negative-base) / var(--tw-text-opacity))}.valid-text.sc-prism-input-text{--tw-text-opacity:1;color:rgb(var(--text-color-positive-base) / var(--tw-text-opacity))}.wrap.sc-prism-input-text{position:relative;display:block}.icon-trailing-manual.sc-prism-input-text,.icon-search.sc-prism-input-text,.sc-prism-input-text-s>[slot^='icon-']{position:absolute;z-index:10;--button-padding-xs:0.375rem;--icon-color:inherit;top:calc(50% - var(--icon-offset-y));-webkit-transform:translateY(-50%);transform:translateY(-50%)}.icon-search.sc-prism-input-text{pointer-events:none}.contained.sc-prism-input-text-h .icon-search.sc-prism-input-text,.sc-prism-input-text-h.contained .sc-prism-input-text-s>[slot='icon-leading']{left:1rem}.minimal.sc-prism-input-text-h .icon-search.sc-prism-input-text,.sc-prism-input-text-h.minimal .sc-prism-input-text-s>[slot='icon-leading']{left:0px}.contained.sc-prism-input-text-h .icon-trailing-manual.sc-prism-input-text,.sc-prism-input-text-h.contained .sc-prism-input-text-s>[slot='icon-trailing']{right:1rem}.minimal.sc-prism-input-text-h .icon-trailing-manual.sc-prism-input-text,.sc-prism-input-text-h.minimal .sc-prism-input-text-s>[slot='icon-trailing']{right:0px}.sc-prism-input-text-s>button[slot^='icon-']{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;background:transparent}.sc-prism-input-text-s>button[slot^='icon-']:focus{outline-color:#141417}.invalid.month.contained.sc-prism-input-text,.valid.month.contained.sc-prism-input-text,.invalid.datetime-local.contained.sc-prism-input-text,.valid.datetime-local.contained.sc-prism-input-text,.invalid.date.contained.sc-prism-input-text,.valid.date.contained.sc-prism-input-text{padding-right:3.5rem}.invalid.month.sc-prism-input-text,.valid.month.sc-prism-input-text,.invalid.datetime-local.sc-prism-input-text,.valid.datetime-local.sc-prism-input-text,.invalid.date.sc-prism-input-text,.valid.date.sc-prism-input-text{padding-right:1.5rem}.number.sc-prism-input-text::-webkit-outer-spin-button,.number.sc-prism-input-text::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;-moz-appearance:textfield}";
export {
    o as prism_input_text
}