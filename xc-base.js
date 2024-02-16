// eslint-disable-next-line
export default function XCBaseMixin(base) {
    return class XCBase extends base {
        constructor() {
            super();
            this._properties = {};
            this._connected = false;
            this._createSetters();
            this._injectStyles();
        }

        connectedCallback() {
            this.innerHTML = this.constructor.htmlMarkup;
            this._connected = true;
            this._loadProperties();
        }

        _addStyleTag(id, markup) {
            var style;

            if (!document.head.querySelector('#' + id)) {
                style = document.createElement('style');
                style.innerHTML = markup;
                style.setAttribute('id', id);
                document.head.appendChild(style);
            }
        }

        _injectStyles() {
            const styleId = this.constructor.is + '-styles';
            const markup = this.constructor.cssMarkup;

            if (markup) {
                this._addStyleTag(styleId, markup);
            }
        }

        attributeChangedCallback(name, oldValue, newValue) {
            var handler = this[this._attrToCamel(name) + 'Changed'];

            this._properties[name] = newValue === '' || newValue === 'true' || newValue;
            if (handler && this._connected) {
                handler.call(this, oldValue, this._properties[name]);
            }
        }

        _createSetter(name) {
            Object.defineProperty(this, this._attrToCamel(name), {
                get: function() {
                    return this._properties[name];
                },
                set: function(value) {
                    var oldValue = this._properties[name];

                    this._properties[name] = value;

                    if (typeof value === 'string') {
                        this.setAttribute(name, value);
                    } else if (typeof value === 'boolean') {
                        value ? this.setAttribute(name, value) : this.removeAttribute(name);
                    } else if (this._connected) {
                        this.attributeChangedCallback(name, oldValue, value);
                    }
                }
            });
        }

        $(selector) {
            return this.querySelector('.' + this.constructor.is + '--' + selector);
        }

        nodesForEach(selector, callback) {
            var items = this.querySelectorAll(selector);

            Array.prototype.forEach.call(items, callback, this);
        }

        _loadProperties() {
            this.constructor.observedAttributes.forEach(function(name) {
                var value = this._properties[name];

                if (value) {
                    this.attributeChangedCallback(name, undefined, value);
                }
            }, this);
        }

        _createSetters() {
            this.constructor.observedAttributes.forEach(this._createSetter, this);
        }

        _attrToCamel(name) {
            return name.replace(/-(\w)/g, function(_, ltr) {
                return ltr.toUpperCase();
            });
        }

        _showSiblings(siblings) {
            siblings.forEach(function(sibling) {
                sibling.removeAttribute('aria-hidden');
            });
        }

        _hideSiblings() {
            var hidden = [];

            function hideSiblingsUpToBody(element) {
                const parent = element.parentNode;
                const children = parent.children;
                Array.prototype.forEach.call(children, function(child) {
                    if (child !== element && (!child.hasAttribute('aria-hidden') || child.getAttribute('aria-hidden') !== 'true')) {
                        child.setAttribute('aria-hidden', 'true');
                        hidden.push(child);
                    }
                });
                if (parent !== document.body) {
                    hideSiblingsUpToBody(parent);
                }
            }

            hideSiblingsUpToBody(this);

            return hidden;
        }

        _captureFocus(container, firstLink, event) {
            if (this.opened && !container.contains(event.target)) {
                event.stopPropagation();
                firstLink.focus();
            }
        }

        _toggleClass(node, name, add) {
            // Thanks IE11 for not implementing this correctly
            if (node) {
                if (add) {
                    node.classList.add(name);
                } else {
                    node.classList.remove(name);
                }
            }
        }

        redirectFocus() {
            this.focus();
        }

        fire(eventName, detail, target) {
            var customEventInit = {
                detail: detail
            };

            target = target || this;
            target.dispatchEvent(new CustomEvent(eventName, customEventInit), {
                bubbles: true
            });
        }

        _onEscape(callback, event) {
            var ESCAPE = 27;

            if (event.keyCode === ESCAPE) {
                callback(event);
                event.preventDefault();
            }
        }

        // eslint-disable-next-line complexity
        _getLinkInfo(el) {
            var linkInfo = {};

            linkInfo.url = el.href;
            linkInfo.target = el.target ? el.target : '_top';
            linkInfo.class = el.className;
            linkInfo.id = el.id ? el.id : '';
            linkInfo.text = el.text;
            linkInfo.en = el.data ? el.data.en : 'navigation';
            linkInfo.main = el.data ? el.data.main : '';
            linkInfo.sub = el.data ? el.data.sub : '';
            linkInfo.messageType = el.data ? el.data.messageType : '';
            linkInfo.notificationType = el.data ? el.data.notificationType : '';
            linkInfo.viewType = el.data ? el.data.viewType : '';
            linkInfo.views = el.data ? el.data.views : '';

            return linkInfo;
        }

        _trackableLink(event) {
            var header = document.querySelector('xc-header');
            var el;
            var linkInfo;

            if (header.orcEnabled) {
                el = event.target;

                while (el.tagName !== 'A') {
                    el = el.parentNode;
                }
                if (el.target !== '_blank') {
                    event.preventDefault();
                }
                linkInfo = this._getLinkInfo(el);
                header.fire('polaris-trackable-clicked', {
                    en: linkInfo.en,
                    link: linkInfo
                });
            }
        }
    };
}