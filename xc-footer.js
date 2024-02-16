import XCBaseMixin from './xc-base';
import markup from './xc-footer.ejs.html';

export default class XCFooter extends XCBaseMixin(HTMLElement) {
    static get cssMarkup() {
        return '';
    }

    static get htmlMarkup() {
        return markup;
    }

    static get is() {
        return 'xc-footer';
    }

    connectedCallback() {
        super.connectedCallback();
        this.nodesForEach('.xc-footer--toggle', function(toggle) {
            toggle.addEventListener('click', this._toggleOpened);
        });
        this._setCopyrightDate();
        this._setLanguageUrl();
    }

    static get observedAttributes() {
        return [
            'client-id',
            'language-toggle-url'
        ];
    }

    languageToggleUrlChanged(_, url) {
        const currentUrl = window.location.href;
        const currentLanguage = currentUrl.includes('es.') ? 'ES' : 'EN';

        if (currentLanguage === 'EN') {
            this.$('language-spanish').href = url;
        } else {
            this.$('language-english').href = url;
        }
    }

    _setLanguageUrl() {
        const currentUrl = window.location.href;

        const currentLanguage = currentUrl.includes('es.') ? 'ES' : 'EN';
        const englishLink = this.$('language-english');
        const spanishLink = this.$('language-spanish');

        if (currentLanguage === 'EN') {
            englishLink.href = '';
            englishLink.setAttribute('aria-disabled', 'true');

            const hasLanguageToggleUrl = spanishLink.getAttribute('href') !== '#';

            if (!hasLanguageToggleUrl) {
                spanishLink.href = currentUrl.replace('www.', 'es.');
            }
        } else {
            spanishLink.href = '';
            spanishLink.setAttribute('aria-disabled', 'true');
            englishLink.classList.remove('xc-current');
            spanishLink.classList.add('xc-current');

            const hasLanguageToggleUrl = englishLink.getAttribute('href') !== '#';

            if (!hasLanguageToggleUrl) {
                englishLink.href = currentUrl.replace('es.', 'www.');
            }
        }
    }

    _setCopyrightDate() {
        const year = (new Date()).getFullYear();
        this.$('copyright-year').textContent = year;
    }

    _toggleOpened(event) {
        const button = event.currentTarget;
        const content = button.closest('.xc-footer--accordion').querySelector('.xc-footer--toggle-container');

        button.lastChild.classList.toggle('xc-rotate-180');
        content.firstChild.classList.toggle('xc-hidden');
        const opened = content.classList.toggle('xc-opacity-100');

        button.setAttribute('aria-expanded', opened);
    }
}

window.customElements.define(XCFooter.is, XCFooter);