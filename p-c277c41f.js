/*!
 * (@prism-ui/core) design-system - v7.11.3 - made with ❤️ in Philadelphia
 */
const x = x => [...Array.from(null == x ? void 0 : x.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'))].filter((x => !x.hasAttribute("disabled"))),
    t = x => {
        let t = x.getBoundingClientRect(),
            e = {};
        return e.top = t.top < 0, e.left = t.left < 0, e.bottom = t.bottom > (window.innerHeight || document.documentElement.clientHeight), e.right = t.right > (window.innerWidth || document.documentElement.clientWidth), e.any = e.top || e.left || e.bottom || e.right, e.all = e.top && e.left && e.bottom && e.right, e.values = t, e
    },
    e = x => {
        const t = new CustomEvent("prism-component-connected", {
            detail: {
                tag: x
            }
        });
        document.dispatchEvent(t)
    },
    n = {
        xs: {
            w: 16,
            h: 16
        },
        sm: {
            w: 24,
            h: 24
        },
        md: {
            w: 32,
            h: 32
        },
        lg: {
            w: 48,
            h: 48
        },
        xl: {
            w: 72,
            h: 72
        },
        custom: {
            w: 0,
            h: 0
        }
    },
    a = () => {
        let x = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
            const e = (x + 16 * Math.random()) % 16 | 0;
            return x = Math.floor(x / 16), ("x" === t ? e : 3 & e | 8).toString(16)
        }))
    };
export {
    x as a, n as b, a as g, t as i, e as m
}