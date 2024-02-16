import XCBaseMixin from '../xc-base';
import markup from './xc-toast.ejs.html';
import styles from './xc-toast.scss';

export default class XCToast extends XCBaseMixin(HTMLElement) {
    static get cssMarkup() {
        return styles;
    }

    static get cssFocusMarkup() {
        return '';
    }

    static get htmlMarkup() {
        return markup;
    }

    static get is() {
        return 'xc-toast';
    }

    static get observedAttributes() {
        return ['opened', 'data'];
    }

    connectedCallback() {
        super.connectedCallback();

        this._toggle = this._toggle.bind(this);
        this._open = this._open.bind(this);
        this._close = this._close.bind(this);
        this._handleEscape = super._onEscape.bind(this, this._close);
        this.$('close').addEventListener('click', this._close);
        this.$('focus-redirector').addEventListener('focus', this.redirectFocus.bind(this.$('close')));
        this.$('container').addEventListener('click', event => {
            if (event.target.classList.contains('xc-toast--action')) {
                this._trackableLink(event);
                this._close('action');
            }
        });
    }

    openedChanged(oldValue, newValue) {
        // Need to give it time to be added to DOM for CSS animation
        setTimeout(this._toggle.bind(this, newValue), 20);
    }

    _open() {
        document.addEventListener('keydown', this._handleEscape, true);
        document.addEventListener('focus', this._captureFocus, true);
        this.removeEventListener('transitionend', this._open);
    }

    _removeFocus() {
        if (this.contains(event.relatedTarget)) {
            return;
        }
        document.removeEventListener('focus', this._captureFocus, true);
    }

    _close(closeType) {
        let header = document.querySelector('xc-header');

        if (closeType === 'action') {
            header.fire('toast-action-clicked', {
                item: this.data
            });
        } else {
            header.fire('toast-close-clicked', {
                item: this.data
            });
        }
        this.opened = false;
    }

    _remove() {
        this.parentNode.removeChild(this);
    }

    _toggle(opened) {
        if (opened) {
            this._lastFocus = document.activeElement;
            this._firstLink = this.querySelector('a');
            this._closeButton = this.$('close');
            if (this._firstLink) {
                this._firstLink.focus();
                this._captureFocus = super._captureFocus.bind(this, this.$('container'), this._firstLink);
            } else {
                this._closeButton.focus();
                this._captureFocus = super._captureFocus.bind(this, this.$('container'), this._closeButton);
            }
            this._hiddenSiblings = this._hideSiblings();
            this.addEventListener('transitionend', this._open);
            this._toggleClass(this, 'opened', true);
            this.addEventListener('blur', this._removeFocus, true);
        } else {
            document.removeEventListener('keydown', this._handleEscape);
            document.removeEventListener('focus', this._captureFocus);
            this._lastFocus && this._lastFocus.focus();
            this._showSiblings(this._hiddenSiblings);
            this.remove();
        }
    }

    dataChanged(old, message) {
        if (message) {
            this.$('message-main').innerHTML = message.main;
            this.$('message-sub').innerHTML = message.sub;
            let iconNode = this.$('icon');
            let toastContainerNode = this.$('container');

            if (message.icon) {
                let xhr = new XMLHttpRequest();
                let polarisOrigin = 'POLARIS_ORIGIN';

                xhr.open('get', polarisOrigin + '/images/svgs/' + message.icon + '.svg', true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status !== 200) {
                            if (iconNode && iconNode.parentNode === toastContainerNode) {
                                toastContainerNode.removeChild(iconNode);
                            }

                            return;
                        }
                        let svg = xhr.responseXML.documentElement;

                        svg = document.importNode(svg, true);
                        iconNode.appendChild(svg);
                    }
                };
                xhr.send();
            } else {
                toastContainerNode.removeChild(iconNode);
            }

            if (message.link) {
                message.links = [message.link];
            }
            this._createButtons(message);
        }
    }

    _createButtons(message) {
        var buttonNode = document.createElement('a');
        var container = this.$('container');
        var close = this.$('close');

        buttonNode.className = 'xc-toast--action';
        buttonNode.setAttribute('data-dtm', 'click');

        message.links.forEach(link => {
            link.id = message.id;
            container.insertBefore(
                this._createButton(buttonNode.cloneNode(true), link),
                close
            );
        });
    }

    _createButton(buttonNode, link) {
        buttonNode.textContent = link.text || 'Click Here';
        buttonNode.href = link.url;
        buttonNode.id = link.id;
        buttonNode.message = link.message;
        buttonNode.data = this.data;
        buttonNode.setAttribute('data-dtm-level3', link.id + '-' + link.text);
        link.target && buttonNode.setAttribute('target', link.target);

        return buttonNode;
    }
}
window.customElements.define(XCToast.is, XCToast);