import md5 from 'md5';
import XCBaseMixin from './xc-base';
import markup from './xc-header.ejs.html';
import xds from '../../../../dist/globalnav/xds.css';
import {
    _addAccountSwitcherListeners,
    _clearSaltedMd5Account,
    anHashSalt
} from './account-switcher';
import {
    getLocationOrigin,
    storage
} from '../../orc/lib';

/** xc-header web component */
export default class XCHeader extends XCBaseMixin(HTMLElement) {
    static get cssMarkup() {
        return xds;
    }

    static get htmlMarkup() {
        return markup;
    }

    static get is() {
        return 'xc-header';
    }

    /**
     * @class XCHeader
     * @extends XCBase
     * @example
     * // index.html
     * <xc-header
     *   tab="myxfinity"
     *   client-id="YOUR-CLIENT-ID"
     * ></xc-header>
     *
     * @example
     * // index.js
     * var header = document.querySelector('xc-header');
     * header.clientId;
     * //=> "YOUR-CLIENT-ID"
     * @property {string} [clientId] - A required unique identifier for your site. This is primarily used for tracking. (This is NOT the cima client id.) Please add to both header and footer!
     * @property {boolean} [autoAuth] - Makes polaris try to determine users authenticated state and perform auth as outlined in authentication section.
     * @property {boolean} [backHandler] - With [flownav][back-subnav], provides 'back-clicked' event on xc-header when a back button is clicked
     * @property {string} [backUrl] - With [flownav][back-subnav], sets the url for the back link
     * @property {boolean} [cartNotification] - Shows badge if user has any cart notifications
     * @property {string} [cartUrl] - Sets the url for the cart link
     * @property {string} [customerType] - Possible values: 'unauthenticated', 'authenticated-all', 'subscribed-HSD', 'unsubscribed-HSD', 'subscribed-VIDEO', 'unsubscribed-VIDEO', 'subscribed-CDV', 'unsubscribed-CDV', 'subscribed-HOMESECURITY', 'unsubscribed-HOMESECURITY', 'subscribed-MOBILE', 'unsubscribed-MOBILE'
     * @property {boolean} [disableController] - Prevents polaris from loading its controller iframe which gets user information, notifications, email count, etc.
     * @property {boolean} [dismissHandler] - With [flownav], provides 'dismiss-clicked' event on xc-header when a dismiss button is clicked
     * @property {string} [dismissLandingUrl] - With [flownav], sets the url for the landing link
     * @property {boolean} [enableAccountSelector] - When enabled, Polaris will check to see if the user has more than one account. If multiple accounts exist then a "Switch Accounts" link will appear in the avatar menu. The link will then open an account selector in the avatar menu that lists the available accounts to choose from. Polaris will try to include account context when authenticating user from CIMA.
     * @property {string} [firstName] - User's first name
     * @property {boolean} [hasEmail] - Shows badge if user has any unread emails
     * @property {string} [hideBack] - With [flownav], visually hides back icon
     * @property {string} [hideHeader] - Visually hides Polaris header from the site. This does not remove Polaris and does not disable its controller.
     * @property {boolean} [isAuthed] - User's current auth status
     * @property {string} [loyalty] - User's loyalty tier
     * @property {boolean} [orcEnabled] - Set by orchestration layer, indicates two-way communication is ready.
     * @property {string} [signInUrl] - Sets the url when a user clicks signin
     * @property {string} [signOutUrl]
     * @property {string} [state] - Required values: 'authenticated', 'recognized', 'unrecognized'. Users not signed in are considered recognized if they are on the Comcast network, otherwise they are unrecognized.
     * @property {string} [tab] - Required values: 'myxfinity', 'shop', 'support', 'myaccount', 'tv', 'email', 'home', 'internet', 'voice'. Sets the selected tab on polaris.
     * @property {string} [showDismiss] - With [flownav], visually displays the Close icon
     * @property {string} [skipTarget] - Polaris includes a skip-navigation link for accessibility. The value of this attribute will be used for the target of the skip link, ensuring it begins with a `#`.
     * @property {array} [toasts]
     * @property {string} [verifiedBy] - When using lite-auth methods, Polaris will display ${verifiedBy} Verified above a sign in link.
     */
    connectedCallback() {
        super.connectedCallback();
        this._toggleNavMenu = this._toggleNavMenu.bind(this);
        this._openSubNavMenu = this._openSubNavMenu.bind(this);
        this._openSubNavMenuDesktop = this._openSubNavMenuDesktop.bind(this);
        this._closeSubNavMenuDesktop = this._closeSubNavMenuDesktop.bind(this);
        this._closeSubNavMenu = this._closeSubNavMenu.bind(this);
        this._toggleAvatarMenu = this._toggleAvatarMenu.bind(this);
        this._handleNavMenuTab = this._handleNavMenuTab.bind(this);
        this._toggleAccountSwitcher = this._toggleAccountSwitcher.bind(this);
        this._toggleSearchBar = this._toggleSearchBar.bind(this);
        this._captureFocusSearch = super
            ._captureFocus.bind(this, this.$('fullnav'), this.$('search-input'));
        this._captureFocus = super._captureFocus
            .bind(this, this.$('menu-navigation'), this.$('nav-close'));
        this._captureAvatarMenuFocus = super._captureFocus
            .bind(this, this.$('account'), this.$('avatar-close'));
        this._captureAccountSwitcherFocus = super._captureFocus
            .bind(this, this.$('account-switcher'), this.$('account-switcher-back'));
        this._escapeToggleNavMenu = this._onEscape.bind(this, this._toggleNavMenu);
        this._escapeToggleAvatarMenu = this._onEscape.bind(this, this._toggleAvatarMenu);
        this._escapeToggleAccountSwitcher = this._onEscape.bind(this, this._toggleAccountSwitcher);
        this._setupListeners();
        this.fire('XCHeaderLoaded', {}, document);
        if (!this.hasAttribute('tab')) {
            this.selectActiveTab();
        }
    }

    static get observedAttributes() {
        return [
            'auto-auth',
            'back-url',
            'back-handler',
            'cart-notification',
            'cart-url',
            'clear-auth',
            'client-id',
            'customer-type',
            'disable-controller',
            'dismiss-handler',
            'dismiss-landing-url',
            'has-email',
            'enable-account-selector',
            'enable-notifications',
            'first-name',
            'hide-back',
            'is-authed',
            'language-switch',
            'linked-account-numbers',
            'linked-accounts',
            'logo-url',
            'loyalty',
            'select-billing-account',
            'sign-in-url',
            'sign-out-override',
            'sign-out-url',
            'skip-target',
            'state',
            'tab',
            'toasts',
            'width'
        ];
    }

    clearAuthChanged(_, minutes) {
        let clearAuthTimeout = parseInt(minutes) * 60 * 1000;

        if (clearAuthTimeout === 'NaN') {
            // Clear Auth is not a number, clearing now.
            this.fire('clear-auth');
        } else {
            // Clear Auth IS a number, TODO: clear in {clearAuthTimeout} minutes.
            setTimeout(() => {
                this.fire('clear-auth');
            }, clearAuthTimeout);
        }
    }

    backUrlChanged(_, url) {
        this.nodesForEach('.xc-header--back-link', function(link) {
            link.setAttribute('href', url);
        });
    }

    dismissLandingUrlChanged(_, url) {
        var link = this.$('flownav-dismiss');

        if (link) {
            link.href = url;
        }
    }

    stateChanged(_, state) {
        var isAuthenticated = state === 'authenticated';
        var isLiteAuthed = state === 'lite-authenticated';

        this._toggleClass(this.$('signin-container'), isLiteAuthed ? 'xc-lite-authed' : 'xc-unrecognized', !isAuthenticated);
        this._updateNavLinkTracking(state);
    }

    _updateNavLinkTracking(state) {
        var stateAbbr = state.slice(0, 2);

        this.nodesForEach('a.xc-header--navigation-link', function(link) {
            var linkQuery;
            var keyVals;
            var linkInfo = link.href.split('?');
            var linkQueryParams = '';
            var i;
            var CMP;

            if (linkInfo.length > 1) {
                linkQueryParams = link.href.substring(link.href.indexOf('?') + 1).replace(/\?/gi, '&');
            }
            linkQuery = '';
            keyVals = '';

            if (linkQueryParams.length > 1) {
                keyVals = linkQueryParams.split('&');
                for (i = 0; i < keyVals.length; i++) {
                    if (keyVals[i].indexOf('CMP=') === -1) { // remove any existing CMP codes
                        linkQuery += keyVals[i] + '&';
                    }
                }
            }
            CMP = 'CMP=' + [
                'ILC',
                link.getAttribute('name'),
                this.clientId,
                stateAbbr
            ].join('_');

            link.href = encodeURI(linkInfo[0] + '?' + linkQuery + CMP);
        });
    }

    isAuthedChanged(_, isAuthed) {
        this.setAttribute('state', isAuthed ? 'authenticated' : 'recognized');
        this.fire('authed-changed', {
            value: isAuthed
        });
    }

    backHandlerChanged() {
        this.nodesForEach('.xc-header--back-button', function(button) {
            button.removeAttribute('onclick');
            button.addEventListener('click', () => {
                this.fire('back-clicked');
            });
        });
    }

    dismissHandlerChanged() {
        const dismissBtn = this.$('flownav-dismiss-button');

        dismissBtn.addEventListener('click', () => {
            this.fire('dismiss-clicked');
        });
    }

    obfuscatedAccountNumber(accountNumber) {
        const lastDigitAccountNumber = accountNumber.slice(accountNumber.length - 4);

        return `****${lastDigitAccountNumber}`;
    }

    linkedAccountNumbersChanged(_, user) {
        const address = `${this._titlecase(user.serviceAddress.city)}, ${user.serviceAddress.state} ${user.serviceAddress.zipcode}`;

        let temp = document.querySelector('#multiple-accounts');
        let clon = temp.content.cloneNode(true);
        let container = this.$('signin-container--authenticated');

        container.appendChild(clon);

        this.$('multiple-accounts-address').textContent = address;
        this.$('multiple-accounts-number').textContent = this.obfuscatedAccountNumber(user.accountNumber);

        if (user.mobileAccountId) {
            this.$('multiple-accounts-mobile-number').textContent = this.obfuscatedAccountNumber(user.mobileAccountId);
            this.$('multiple-accounts-account-container').classList.remove('xc-mb-4');
            this.$('multiple-accounts-account-container').classList.add('xc-mb-2');
            this.$('multiple-accounts-mobile-account-container').classList.remove('xc-hidden');
        }

        let accountPickerForm = document.querySelector('.xc-header--account-switcher-form');

        accountPickerForm.data = accountPickerForm.data || {};
        accountPickerForm.data.currentAccount = user.accountNumber;
        accountPickerForm.data.linkedAccounts = user.linkedAccounts;

        this.$('account-switcher-open').addEventListener('click', this._toggleAccountSwitcher);

        // TODO: Remove when the Acct Switcher functionality returns
        let redirectUri;
        if (window.location.hostname.match(/local/) || window.location.hostname.match(/staging/)) {
            redirectUri = 'https://polaris.staging.xfinity.com/token.html';
        } else {
            redirectUri = 'https://polaris.xfinity.com/token.html';
        }

        this.$('account-switcher-open-link').href = "https://oauth.xfinity.com/oauth/authorize?client_id=polaris&response_type=token&redirect_uri=" +
            redirectUri + "&state=" + encodeURIComponent(location.href) + "&prompt=select_billing_account", "_self";
    }

    linkedAccountsChanged(_, account) {
        const accounts = account.accounts || [];
        const hasMatchingAccount = accounts
            .find(({
                accountNumber
            }) => storage.get('saltedMd5Account') === md5(`${accountNumber}${anHashSalt}`));
        const defaultAccount = account.defaultAccount;
        const currentAccount = hasMatchingAccount ? hasMatchingAccount.accountNumber : defaultAccount;
        let accountListParent = document.querySelector('.xc-header--account-switcher-list');

        accounts.forEach(accountItem => {
            let temp = document.querySelector('#accounts-list');
            let clon = temp.content.cloneNode(true);
            let hasMobileAccount =
                this.$('multiple-accounts-mobile-number').textContent;

            if (accountItem.alias) {
                clon.querySelector('.xc-header--account-switcher-account')
                    .insertAdjacentHTML('afterbegin', `<p class="xc-text-headline3 xc-mb-2">${accountItem.alias}</p>`);
            }

            clon.querySelector('.xc-header--account-switcher-address').textContent =
                `${this._titlecase(accountItem.serviceAddress.city)}, ${accountItem.serviceAddress.state} ${accountItem.serviceAddress.zip}`;
            clon.querySelector('.xc-header--account-switcher-number').textContent =
                this.obfuscatedAccountNumber(accountItem.accountNumber);

            clon.querySelector('.xc-header--account-switcher-anchor')
                .setAttribute('value', accountItem.accountNumber);

            if (accountItem.accountNumber === defaultAccount) {
                clon.querySelector('.xc-header--account-switcher-badge').classList.remove('xc-hidden');
            }

            if (accountItem.accountNumber === currentAccount) {
                clon.querySelector('.xc-header--account-switcher-check').classList.remove('xc-hidden');
                clon.querySelector('.xc-header--account-switcher-unchecked').classList.add('xc-hidden');

                if (hasMobileAccount) {
                    clon.querySelector('.xc-header--account-switcher-mobile-number').textContent = hasMobileAccount;
                    clon.querySelector('.xc-header--account-switcher-mobile').classList.remove('xc-hidden');
                }

                accountListParent.prepend(clon);

                return;
            }

            accountListParent.append(clon);
        });

        _addAccountSwitcherListeners();
    }

    _titlecase(text) {
        return text.toString().toLowerCase().replace(/\b([a-z])/g, (char) => char.toUpperCase());
    }

    skipTargetChanged(_, url) {
        this.$('skip[href="#xc-header--skip"]').setAttribute('href', url.indexOf('#') > -1 ? url : '#' + url);
    }

    _matchesUsersCustomerType(customerType, item) {
        return customerType.some(type => item.classList.contains(`xc-header--${type}`));
    }

    _filterIcons(selector, customerType) {
        const filter = Array.prototype.filter;
        const filteredIcons = filter.call(this.querySelectorAll(selector),
            icon => this._matchesUsersCustomerType(customerType, icon));

        return filteredIcons;
    }

    _getNavItemText(item) {
        return item.firstChild.textContent.trim();
    }

    customerTypeChanged(_, customerTypeString) {
        const servicesSectionMenu = this.$('navigation-section-services');
        const shopSectionMenu = this.$('navigation-section-shop');
        const current = [];
        const offered = [];
        let personalized;
        const customerType = customerTypeString.split(' ');

        // show menu nav in one single list if not logged in, or
        // if Sitecore data tells us to group them together
        if (customerType.includes('unauthenticated') || !servicesSectionMenu) {
            personalized = false;
            this.nodesForEach('.xc-header--navigation-li', item => {
                if (this._matchesUsersCustomerType(customerType, item)) {
                    this._toggleClass(item, 'xc-hidden', false);
                    offered.push(this._getNavItemText(item));
                } else {
                    this._toggleClass(item, 'xc-hidden', true);
                }
            });
        } else {
            this._toggleClass(servicesSectionMenu.parentNode, 'xc-hidden', false);
            this._toggleClass(shopSectionMenu.parentNode, 'xc-hidden', false);
            personalized = true;
            this.nodesForEach('.xc-header--navigation-li', item => {
                if (this._matchesUsersCustomerType(customerType, item)) {
                    this._toggleClass(item, 'xc-hidden', false);
                    if (item.classList.value.includes('xc-header--subscribed') ||
                        item.classList.value.includes('xc-header--services-section')) {
                        servicesSectionMenu.append(item);
                        current.push(this._getNavItemText(item));
                    } else {
                        shopSectionMenu.append(item);
                        offered.push(this._getNavItemText(item));
                    }
                } else {
                    this._toggleClass(item, 'xc-hidden', true);
                }
            });
        }

        const dataLayer = {
            current: current.join('|'),
            offered: offered.join('|'),
            version: '2.0',
            personalized
        };
        const dataLayerScript = document.createElement('script');
        dataLayerScript.type = 'tracking-data-globalNav';
        dataLayerScript.text = JSON.stringify(dataLayer);
        document.body.appendChild(dataLayerScript);

        this.nodesForEach('.xc-header--account-icons-li, .xc-header--account-li', item => {
            this._matchesUsersCustomerType(customerType, item) ?
                this._toggleClass(item, 'xc-hidden', false) : this._toggleClass(item, 'xc-hidden', true);
        });

        let maxMobileIconCount = 3;
        const header = document.querySelector('xc-header');
        // start out with all utility icons hidden, then we only show what's enabled
        this.nodesForEach('.xc-header--utility-li', item => {
            this._toggleClass(item, 'xl:xc-hidden', true);
            this._toggleClass(item, 'xc-hidden', true);
        });

        if (!header.hasAttribute('hide-avatar-menu')) maxMobileIconCount -= 1;
        if (!header.hasAttribute('hide-search')) maxMobileIconCount -= 1;

        // filter out icons that don't match customer type
        // on mobile, show a max of 3 icons in header top bar
        // i.e., if search and avatar icon are enabled, only one other icon should show
        // hide icons that aren't enabled for the top bar
        // then hide anything past the max count
        const filteredTopBarUtilityIcons = this._filterIcons('.xc-header--utility-li', customerType);
        let topBarUtilityIconCount = 1;

        filteredTopBarUtilityIcons.forEach(icon => {
            const enabledForTopBar = icon.classList.value.includes('xc-header--top-bar');

            this._toggleClass(icon, 'xl:xc-hidden', false);
            if (enabledForTopBar && maxMobileIconCount >= topBarUtilityIconCount) {
                this._toggleClass(icon, 'xc-hidden', false);
                topBarUtilityIconCount++;
            }
        });

        // filter out icons that don't match customer type
        // on mobile, show icons that aren't enabled for top bar in the nav menu
        // then show anything that was filtered out of the top bar
        const filteredNavMenuUtilityIcons = this._filterIcons('.xc-header--nav-menu-utility-li', customerType);
        let navMenuUtilityIconCount = 1;

        filteredNavMenuUtilityIcons.forEach(icon => {
            const enabledForTopBar = icon.classList.value.includes('xc-header--top-bar');

            if (!enabledForTopBar || navMenuUtilityIconCount > maxMobileIconCount) {
                this._toggleClass(icon, 'xc-hidden', false);
            }
            if (enabledForTopBar) {
                navMenuUtilityIconCount++;
            }
        });
    }

    firstNameChanged(_, name) {
        document.querySelector('.xc-header--first-name').textContent = name;
    }

    logoUrlChanged(_, url) {
        const link = this.$('xfinity-logo');

        if (link) {
            link.href = url;
        }
    }

    signInUrlChanged(_, url) {
        var link = this.$('signin-link');

        if (link) {
            link.href = url;
        }
    }

    signOutUrlChanged(_, url) {
        var link = this.$('signout-link');

        if (link) {
            link.href = url;
        }
    }

    hasEmailChanged(_, email) {
        if (email) {
            this._toggleClass(this.$('avatar-icon'), 'xc-notification-dot', true);
            this._toggleClass(this.$('email-icon'), 'xc-notification-dot', true);

            this.nodesForEach('a.xc-header--email-notification-text', function(text) {
                text.classList.remove('xc-hidden');
            });
        }
    }

    tabChanged(_, tab) {
        const tabSelector = '.xc-header--navigation-link[name="' + tab + '"]';

        if (document.querySelectorAll(tabSelector).length > 0) {
            this.nodesForEach('a.xc-header--active', link => link.classList.remove('xc-header--active'));
            this.nodesForEach(tabSelector, link => link.classList.add('xc-header--active'));
        } else {
            this.selectActiveTab();
        }
    }

    toastsChanged(oldValue, toasts) {
        toasts.forEach(function(toastData) {
            var toast = document.createElement('xc-toast');

            toast.data = toastData;
            toast.setAttribute('opened', true);
            document.body.appendChild(toast);
        }, this);
    }

    cartUrlChanged(_, url) {
        this.nodesForEach('.xc-header--cart-link', link => link.setAttribute('href', url));
    }

    cartNotificationChanged(_, notification) {
        if (notification) {
            this.nodesForEach('.xc-header--cart-notification-icon', icon => icon.classList.add('xc-notification-dot'));
        }
    }

    loyaltyChanged(_, tier) {
        if (tier) {
            this.$('loyalty').classList.remove('xc-hidden');
            this.$('loyalty-tier').textContent = tier;
            this.$('loyalty-badge').classList.add(tier.toLowerCase());
        }
    }

    _toggleSearchBar(event) {
        var searchContainer = this.$('search-nav');
        var opened = searchContainer.classList.toggle('xc-expanded');
        var searchIcon = this.$('search');
        var closeSearchIcon = this.$('close-search');
        var searchForm = this.$('search-form');
        var navBar = this.$('fullnav');
        const overlay = this.$('overlay');

        this.opened = opened;

        this._toggleClass(searchForm, 'xc-hidden', !opened);
        this._toggleClass(searchContainer, 'xc-scale-x-100', opened);
        this._toggleClass(searchContainer, 'xc-opacity-0', !opened);
        this._toggleClass(closeSearchIcon, 'xc-hidden', !opened);
        this._toggleClass(overlay, 'xc-opacity-0', !opened);
        this._toggleClass(overlay, 'xc--z-10', !opened);
        this._toggleClass(document.body, 'xc-overflow-hidden', opened);
        this._toggleClass(searchIcon, 'xc-hidden', opened);
        this._toggleClass(this.$('menu-navigation'), 'xc-hidden', opened);

        if (window.innerWidth < 1024) {
            this._toggleClass(this.$('nav-open'), 'xc-hidden', opened);
            this._toggleClass(this.$('logo'), 'xc-hidden', opened);
            this._toggleClass(this.$('avatar-menu-toggle'), 'xc-hidden', opened);
            this.nodesForEach('.xc-header--top-bar:not(.xc-hidden)', item => {
                opened ? item.firstChild.setAttribute('tabindex', '-1') : item.firstChild.removeAttribute('tabindex');
            });
        }

        searchIcon.setAttribute('aria-expanded', opened);
        document.querySelector('main') ? .setAttribute('aria-hidden', opened);

        const isOpened = opened ? 'addEventListener' : 'removeEventListener';

        document[isOpened]('focus', this._captureFocusSearch, true);
        opened ? overlay.style.top = navBar.getBoundingClientRect().height + 'px' : overlay.style.top = '';
        event.stopPropagation();
        overlay[isOpened]('click', this._toggleSearchBar);
        opened ? this.$('search-input').focus() : this.$('search').focus();
    }

    _openSubNavMenu(event) {
        const container = event.currentTarget.nextElementSibling;

        container.classList.add('opened');
        container.firstChild.classList.remove('xc-hidden');
        event.currentTarget.setAttribute('aria-expanded', true);

        this._captureSubMenuFocus = super._captureFocus
            .bind(this, container, container.querySelector('.xc-header--nav-back'));

        document.addEventListener('focus', this._captureSubMenuFocus, true);
    }

    _openSubNavMenuDesktop(event) {
        const container = event.currentTarget.nextElementSibling;
        const isMobile = this.$('menu-navigation').classList.contains('opened');
        const subNavIsOpen = event.currentTarget.getAttribute('aria-expanded') === 'true';

        if (isMobile) {
            return;
        }

        this.nodesForEach('.xc-header--sub-nav-open', subnav => subnav.setAttribute('aria-expanded', false));
        event.currentTarget.setAttribute('aria-expanded', !subNavIsOpen);
        if (!subNavIsOpen) {
            container.querySelectorAll('.xc-header--dropdown-link').forEach(link => link.addEventListener('keydown', this._handleNavMenuTab));
            document.addEventListener('click', this._closeSubNavMenuDesktop, true);
        }
    }

    _closeSubNavMenuDesktop(event) {
        const targetIsButton = event.target.classList ? .contains('xc-header--sub-nav-open');
        if (!targetIsButton) {
            this.nodesForEach('.xc-header--sub-nav-open', subnav => subnav.setAttribute('aria-expanded', false));
            document.removeEventListener('click', this._closeSubNavMenuDesktop, true);
        }
    }

    _handleNavMenuTab(event) {
        const currentTarget = event.currentTarget;
        const subNavLinkList = currentTarget.closest('ul').querySelectorAll('.xc-header--dropdown-link');
        const subNavOpenButton = currentTarget.closest('.xc-header--menu-subnavigation').previousElementSibling;

        const userPressedTabKey = event.keyCode === 9;
        const firstLink = subNavLinkList[0];
        const lastLink = subNavLinkList[subNavLinkList.length - 1];

        if ((!event.shiftKey && userPressedTabKey && lastLink === currentTarget) ||
            (event.shiftKey && userPressedTabKey && firstLink === currentTarget)) {
            subNavOpenButton.setAttribute('aria-expanded', false);
        }
    }

    _closeSubNavMenu(event) {
        const container = event.currentTarget.closest('.xc-header--menu-subnavigation-container');
        const openButton = container.parentNode.previousElementSibling;

        container.classList.add('xc-hidden');
        container.parentNode.classList.remove('opened');
        openButton.setAttribute('aria-expanded', false);

        document.removeEventListener('focus', this._captureSubMenuFocus, true);
    }

    _toggleNavMenu(event) {
        const menu = this.$('menu-navigation');
        const navOpened = menu.classList.toggle('opened');
        const hamburger = this.$('nav-open');
        const isSearchOpen = this.$('search-nav').classList.contains('xc-expanded');

        if (isSearchOpen) {
            this._toggleSearchBar(event);
        }

        this.opened = navOpened;

        this._toggleClass(this.$('overlay'), 'xc-opacity-0', !navOpened);
        this._toggleClass(this.$('overlay'), 'xc--z-10', !navOpened);
        this._toggleClass(this.$('menu-navigation-container'), 'xc-hidden', !navOpened);
        this._toggleClass(document.body, 'xc-overflow-hidden', navOpened);
        hamburger.setAttribute('aria-expanded', navOpened);

        if (!navOpened) {
            document.removeEventListener('focus', this._captureSubMenuFocus);
            this.nodesForEach('.xc-header--sub-nav-open', subnav => subnav.setAttribute('aria-expanded', false));
            this.nodesForEach('.xc-header--menu-subnavigation-container', subnav => subnav.classList.add('xc-hidden'));
            this.nodesForEach('.xc-header--menu-subnavigation', subnav => subnav.classList.remove('opened'));
        }

        event.stopPropagation();

        const focusElement = navOpened ? this.$('nav-close').focus() : this.$('nav-open').focus();
        const addOrRemove = navOpened ? 'addEventListener' : 'removeEventListener';

        this.$('overlay')[addOrRemove]('click', this._toggleNavMenu);
        document[addOrRemove]('focus', this._captureFocus, true);
        document[addOrRemove]('keydown', this._escapeToggleNavMenu, true);
        this.nodesForEach('.xc-header--sub-nav-open', (toggle) => {
            toggle[addOrRemove]('click', this._openSubNavMenu, true);
        });
    }

    _toggleAvatarMenu(event) {
        const avatarMenu = this.$('account');
        const avatarOpened = !avatarMenu.classList.toggle('xc-translate-x-full');
        const avatarIcon = this.$('avatar-open');
        const isSearchOpen = this.$('search-nav').classList.contains('xc-expanded');

        if (isSearchOpen) {
            this._toggleSearchBar(event);
        }
        if (avatarOpened && this.state === 'authenticated') {
            this.fireEvent('get-person');
            this.fireEvent('get-loyalty');
        }

        this.opened = avatarOpened;

        this._toggleClass(this.$('overlay'), 'xc-opacity-0', !avatarOpened);
        this._toggleClass(this.$('overlay'), 'xc--z-10', !avatarOpened);
        this._toggleClass(this.$('account-container'), 'xc-hidden', !avatarOpened);
        this._toggleClass(document.body, 'xc-overflow-hidden', avatarOpened);
        this._toggleClass(this.$('account-switcher'), 'xc-hidden', avatarOpened);
        avatarIcon.setAttribute('aria-expanded', avatarOpened);

        event.stopPropagation();

        const focusElement = avatarOpened ? this.$('avatar-close').focus() : this.$('avatar-open').focus();
        const addOrRemove = avatarOpened ? 'addEventListener' : 'removeEventListener';

        this.$('overlay')[addOrRemove]('click', this._toggleAvatarMenu);
        document[addOrRemove]('focus', this._captureAvatarMenuFocus, true);
        document[addOrRemove]('keydown', this._escapeToggleAvatarMenu, true);
    }

    _toggleAccountSwitcher(event) {
        let header = document.querySelector('xc-header');

        event.preventDefault();
        event.stopPropagation();
        header.fireEvent('get-linked-accounts');

        const switchAccountIcon = this.$('account-switcher-open');
        const accountSwitcher = this.$('account-switcher');
        const accountSwitcherOpened = !accountSwitcher.classList.toggle('xc-hidden');

        switchAccountIcon.setAttribute('aria-expanded', accountSwitcherOpened);

        const focusElement = accountSwitcherOpened ?
            this.$('account-switcher-back').focus() :
            this.$('account-switcher-open').focus();
        const addOrRemove = accountSwitcherOpened ?
            'addEventListener' :
            'removeEventListener';

        document[addOrRemove]('focus', this._captureAccountSwitcherFocus, true);
        document[addOrRemove]('keydown', this._escapeToggleAccountSwitcher, true);
    }

    fireEvent(name, details) {
        this.fire(name, details);
    }

    signOut() {
        _clearSaltedMd5Account();
        let header = document.querySelector('xc-header');

        header.fireEvent('signout-clicked');
    }

    selectActiveTab() {
        const currentPath = window.document.location.pathname;
        const activeTab = [];
        if (currentPath === '/') {
            return;
        }

        this.nodesForEach('.xc-header--navigation-li a', link => {
            if (link.href.includes(currentPath)) {
                const topLevelNavItem = link.closest('.xc-header--navigation-li');
                activeTab.push(topLevelNavItem.firstChild.textContent.trim());
            }
        });

        // determine if this highlights more than one top-level nav item
        const uniqueTopLevelNavItem = activeTab.filter((v, i, a) => a.indexOf(v) === i);
        if (uniqueTopLevelNavItem.length === 1) {
            const tabSelector = '.xc-header--navigation-link[name="' + uniqueTopLevelNavItem[0] + '"]';
            this.nodesForEach(tabSelector, link => link.classList.add('xc-header--active'));
        }
    }

    _setupListeners() {
        /* temporarily disable click tracking
        this.nodesForEach('.xc-header--navigation-link, .xc-header--icons-link, .xc-header--more-link',
          link => {
            link.addEventListener('click', this._trackableLink.bind(this));
          });
        */

        this.$('signout-link').addEventListener('click', this.signOut);
        this.$('nav-open').addEventListener('click', this._toggleNavMenu);
        this.$('nav-close').addEventListener('click', this._toggleNavMenu);
        this.nodesForEach('.xc-header--nav-back', function(toggle) {
            toggle.addEventListener('click', this._closeSubNavMenu);
        });
        this.nodesForEach('.xc-header--sub-nav-close', function(toggle) {
            toggle.addEventListener('click', this._toggleNavMenu);
        });
        this.$('avatar-open').addEventListener('click', this._toggleAvatarMenu);
        this.$('avatar-close').addEventListener('click', this._toggleAvatarMenu);
        this.$('search').addEventListener('click', this._toggleSearchBar);
        this.$('close-search').addEventListener('click', this._toggleSearchBar);
        this.$('account-switcher-back').addEventListener('click', this._toggleAccountSwitcher);
        this.$('account-switcher-close').addEventListener('click', this._toggleAvatarMenu);
        this.$('skip').addEventListener('click', this._linkToLocation.bind(this));
        this.nodesForEach('.xc-header--sub-nav-open', function(toggle) {
            toggle.addEventListener('click', this._openSubNavMenuDesktop);
        });
    }

    _linkToLocation(event) {
        var location = event.currentTarget.hash;
        var target = document.querySelector(location);

        event.preventDefault();
        target.scrollIntoView();
        target.focus();
    }
}

window.customElements.define(XCHeader.is, XCHeader);