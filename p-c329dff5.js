/*!
 * (@prism-ui/core) design-system - v7.11.3 - made with ❤️ in Philadelphia
 */
function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
const r = e(function(e, r, n) {
        return function(e) {
            e.exports = function(e) {
                var r = {};

                function n(t) {
                    if (r[t]) return r[t].exports;
                    var i = r[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                }
                return n.m = e, n.c = r, n.d = function(e, r, t) {
                    n.o(e, r) || Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, r) {
                    if (1 & r && (e = n(e)), 8 & r) return e;
                    if (4 & r && "object" == typeof e && e && e.__esModule) return e;
                    var t = Object.create(null);
                    if (n.r(t), Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & r && "string" != typeof e)
                        for (var i in e) n.d(t, i, function(r) {
                            return e[r]
                        }.bind(null, i));
                    return t
                }, n.n = function(e) {
                    var r = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(r, "a", r), r
                }, n.o = function(e, r) {
                    return Object.prototype.hasOwnProperty.call(e, r)
                }, n.p = "", n(n.s = 90)
            }({
                17: function(e, r, n) {
                    r.__esModule = !0, r.default = void 0;
                    var t = n(18),
                        i = function() {
                            function e() {}
                            return e.getFirstMatch = function(e, r) {
                                var n = r.match(e);
                                return n && n.length > 0 && n[1] || ""
                            }, e.getSecondMatch = function(e, r) {
                                var n = r.match(e);
                                return n && n.length > 1 && n[2] || ""
                            }, e.matchAndReturnConst = function(e, r, n) {
                                if (e.test(r)) return n
                            }, e.getWindowsVersionName = function(e) {
                                switch (e) {
                                    case "NT":
                                        return "NT";
                                    case "XP":
                                    case "NT 5.1":
                                        return "XP";
                                    case "NT 5.0":
                                        return "2000";
                                    case "NT 5.2":
                                        return "2003";
                                    case "NT 6.0":
                                        return "Vista";
                                    case "NT 6.1":
                                        return "7";
                                    case "NT 6.2":
                                        return "8";
                                    case "NT 6.3":
                                        return "8.1";
                                    case "NT 10.0":
                                        return "10";
                                    default:
                                        return
                                }
                            }, e.getMacOSVersionName = function(e) {
                                var r = e.split(".").splice(0, 2).map((function(e) {
                                    return parseInt(e, 10) || 0
                                }));
                                if (r.push(0), 10 === r[0]) switch (r[1]) {
                                    case 5:
                                        return "Leopard";
                                    case 6:
                                        return "Snow Leopard";
                                    case 7:
                                        return "Lion";
                                    case 8:
                                        return "Mountain Lion";
                                    case 9:
                                        return "Mavericks";
                                    case 10:
                                        return "Yosemite";
                                    case 11:
                                        return "El Capitan";
                                    case 12:
                                        return "Sierra";
                                    case 13:
                                        return "High Sierra";
                                    case 14:
                                        return "Mojave";
                                    case 15:
                                        return "Catalina";
                                    default:
                                        return
                                }
                            }, e.getAndroidVersionName = function(e) {
                                var r = e.split(".").splice(0, 2).map((function(e) {
                                    return parseInt(e, 10) || 0
                                }));
                                if (r.push(0), !(1 === r[0] && r[1] < 5)) return 1 === r[0] && r[1] < 6 ? "Cupcake" : 1 === r[0] && r[1] >= 6 ? "Donut" : 2 === r[0] && r[1] < 2 ? "Eclair" : 2 === r[0] && 2 === r[1] ? "Froyo" : 2 === r[0] && r[1] > 2 ? "Gingerbread" : 3 === r[0] ? "Honeycomb" : 4 === r[0] && r[1] < 1 ? "Ice Cream Sandwich" : 4 === r[0] && r[1] < 4 ? "Jelly Bean" : 4 === r[0] && r[1] >= 4 ? "KitKat" : 5 === r[0] ? "Lollipop" : 6 === r[0] ? "Marshmallow" : 7 === r[0] ? "Nougat" : 8 === r[0] ? "Oreo" : 9 === r[0] ? "Pie" : void 0
                            }, e.getVersionPrecision = function(e) {
                                return e.split(".").length
                            }, e.compareVersions = function(r, n, t) {
                                void 0 === t && (t = !1);
                                var i = e.getVersionPrecision(r),
                                    o = e.getVersionPrecision(n),
                                    s = Math.max(i, o),
                                    u = 0,
                                    a = e.map([r, n], (function(r) {
                                        var n = s - e.getVersionPrecision(r),
                                            t = r + Array(n + 1).join(".0");
                                        return e.map(t.split("."), (function(e) {
                                            return Array(20 - e.length).join("0") + e
                                        })).reverse()
                                    }));
                                for (t && (u = s - Math.min(i, o)), s -= 1; s >= u;) {
                                    if (a[0][s] > a[1][s]) return 1;
                                    if (a[0][s] === a[1][s]) {
                                        if (s === u) return 0;
                                        s -= 1
                                    } else if (a[0][s] < a[1][s]) return -1
                                }
                            }, e.map = function(e, r) {
                                var n, t = [];
                                if (Array.prototype.map) return Array.prototype.map.call(e, r);
                                for (n = 0; n < e.length; n += 1) t.push(r(e[n]));
                                return t
                            }, e.find = function(e, r) {
                                var n, t;
                                if (Array.prototype.find) return Array.prototype.find.call(e, r);
                                for (n = 0, t = e.length; n < t; n += 1) {
                                    var i = e[n];
                                    if (r(i, n)) return i
                                }
                            }, e.assign = function(e) {
                                for (var r, n, t = e, i = arguments.length, o = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
                                if (Object.assign) return Object.assign.apply(Object, [e].concat(o));
                                var u = function() {
                                    var e = o[r];
                                    "object" == typeof e && null !== e && Object.keys(e).forEach((function(r) {
                                        t[r] = e[r]
                                    }))
                                };
                                for (r = 0, n = o.length; r < n; r += 1) u();
                                return e
                            }, e.getBrowserAlias = function(e) {
                                return t.BROWSER_ALIASES_MAP[e]
                            }, e.getBrowserTypeByAlias = function(e) {
                                return t.BROWSER_MAP[e] || ""
                            }, e
                        }();
                    r.default = i, e.exports = r.default
                },
                18: function(e, r) {
                    r.__esModule = !0, r.ENGINE_MAP = r.OS_MAP = r.PLATFORMS_MAP = r.BROWSER_MAP = r.BROWSER_ALIASES_MAP = void 0, r.BROWSER_ALIASES_MAP = {
                        "Amazon Silk": "amazon_silk",
                        "Android Browser": "android",
                        Bada: "bada",
                        BlackBerry: "blackberry",
                        Chrome: "chrome",
                        Chromium: "chromium",
                        Electron: "electron",
                        Epiphany: "epiphany",
                        Firefox: "firefox",
                        Focus: "focus",
                        Generic: "generic",
                        "Google Search": "google_search",
                        Googlebot: "googlebot",
                        "Internet Explorer": "ie",
                        "K-Meleon": "k_meleon",
                        Maxthon: "maxthon",
                        "Microsoft Edge": "edge",
                        "MZ Browser": "mz",
                        "NAVER Whale Browser": "naver",
                        Opera: "opera",
                        "Opera Coast": "opera_coast",
                        PhantomJS: "phantomjs",
                        Puffin: "puffin",
                        QupZilla: "qupzilla",
                        QQ: "qq",
                        QQLite: "qqlite",
                        Safari: "safari",
                        Sailfish: "sailfish",
                        "Samsung Internet for Android": "samsung_internet",
                        SeaMonkey: "seamonkey",
                        Sleipnir: "sleipnir",
                        Swing: "swing",
                        Tizen: "tizen",
                        "UC Browser": "uc",
                        Vivaldi: "vivaldi",
                        "WebOS Browser": "webos",
                        WeChat: "wechat",
                        "Yandex Browser": "yandex",
                        Roku: "roku"
                    }, r.BROWSER_MAP = {
                        amazon_silk: "Amazon Silk",
                        android: "Android Browser",
                        bada: "Bada",
                        blackberry: "BlackBerry",
                        chrome: "Chrome",
                        chromium: "Chromium",
                        electron: "Electron",
                        epiphany: "Epiphany",
                        firefox: "Firefox",
                        focus: "Focus",
                        generic: "Generic",
                        googlebot: "Googlebot",
                        google_search: "Google Search",
                        ie: "Internet Explorer",
                        k_meleon: "K-Meleon",
                        maxthon: "Maxthon",
                        edge: "Microsoft Edge",
                        mz: "MZ Browser",
                        naver: "NAVER Whale Browser",
                        opera: "Opera",
                        opera_coast: "Opera Coast",
                        phantomjs: "PhantomJS",
                        puffin: "Puffin",
                        qupzilla: "QupZilla",
                        qq: "QQ Browser",
                        qqlite: "QQ Browser Lite",
                        safari: "Safari",
                        sailfish: "Sailfish",
                        samsung_internet: "Samsung Internet for Android",
                        seamonkey: "SeaMonkey",
                        sleipnir: "Sleipnir",
                        swing: "Swing",
                        tizen: "Tizen",
                        uc: "UC Browser",
                        vivaldi: "Vivaldi",
                        webos: "WebOS Browser",
                        wechat: "WeChat",
                        yandex: "Yandex Browser"
                    }, r.PLATFORMS_MAP = {
                        tablet: "tablet",
                        mobile: "mobile",
                        desktop: "desktop",
                        tv: "tv"
                    }, r.OS_MAP = {
                        WindowsPhone: "Windows Phone",
                        Windows: "Windows",
                        MacOS: "macOS",
                        iOS: "iOS",
                        Android: "Android",
                        WebOS: "WebOS",
                        BlackBerry: "BlackBerry",
                        Bada: "Bada",
                        Tizen: "Tizen",
                        Linux: "Linux",
                        ChromeOS: "Chrome OS",
                        PlayStation4: "PlayStation 4",
                        Roku: "Roku"
                    }, r.ENGINE_MAP = {
                        EdgeHTML: "EdgeHTML",
                        Blink: "Blink",
                        Trident: "Trident",
                        Presto: "Presto",
                        Gecko: "Gecko",
                        WebKit: "WebKit"
                    }
                },
                90: function(e, r, n) {
                    r.__esModule = !0, r.default = void 0;
                    var t, i = (t = n(91)) && t.__esModule ? t : {
                            default: t
                        },
                        o = n(18);

                    function s(e, r) {
                        for (var n = 0; n < r.length; n++) {
                            var t = r[n];
                            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
                        }
                    }
                    var u = function() {
                        function e() {}
                        var r, n, t;
                        return e.getParser = function(e, r) {
                            if (void 0 === r && (r = !1), "string" != typeof e) throw Error("UserAgent should be a string");
                            return new i.default(e, r)
                        }, e.parse = function(e) {
                            return new i.default(e).getResult()
                        }, r = e, t = [{
                            key: "BROWSER_MAP",
                            get: function() {
                                return o.BROWSER_MAP
                            }
                        }, {
                            key: "ENGINE_MAP",
                            get: function() {
                                return o.ENGINE_MAP
                            }
                        }, {
                            key: "OS_MAP",
                            get: function() {
                                return o.OS_MAP
                            }
                        }, {
                            key: "PLATFORMS_MAP",
                            get: function() {
                                return o.PLATFORMS_MAP
                            }
                        }], (n = null) && s(r.prototype, n), t && s(r, t), e
                    }();
                    r.default = u, e.exports = r.default
                },
                91: function(e, r, n) {
                    r.__esModule = !0, r.default = void 0;
                    var t = a(n(92)),
                        i = a(n(93)),
                        o = a(n(94)),
                        s = a(n(95)),
                        u = a(n(17));

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var c = function() {
                        function e(e, r) {
                            if (void 0 === r && (r = !1), null == e || "" === e) throw Error("UserAgent parameter can't be empty");
                            this._ua = e, this.parsedResult = {}, !0 !== r && this.parse()
                        }
                        var r = e.prototype;
                        return r.getUA = function() {
                            return this._ua
                        }, r.test = function(e) {
                            return e.test(this._ua)
                        }, r.parseBrowser = function() {
                            var e = this;
                            this.parsedResult.browser = {};
                            var r = u.default.find(t.default, (function(r) {
                                if ("function" == typeof r.test) return r.test(e);
                                if (r.test instanceof Array) return r.test.some((function(r) {
                                    return e.test(r)
                                }));
                                throw Error("Browser's test function is not valid")
                            }));
                            return r && (this.parsedResult.browser = r.describe(this.getUA())), this.parsedResult.browser
                        }, r.getBrowser = function() {
                            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                        }, r.getBrowserName = function(e) {
                            return e ? (this.getBrowser().name + "").toLowerCase() || "" : this.getBrowser().name || ""
                        }, r.getBrowserVersion = function() {
                            return this.getBrowser().version
                        }, r.getOS = function() {
                            return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                        }, r.parseOS = function() {
                            var e = this;
                            this.parsedResult.os = {};
                            var r = u.default.find(i.default, (function(r) {
                                if ("function" == typeof r.test) return r.test(e);
                                if (r.test instanceof Array) return r.test.some((function(r) {
                                    return e.test(r)
                                }));
                                throw Error("Browser's test function is not valid")
                            }));
                            return r && (this.parsedResult.os = r.describe(this.getUA())), this.parsedResult.os
                        }, r.getOSName = function(e) {
                            var r = this.getOS().name;
                            return e ? (r + "").toLowerCase() || "" : r || ""
                        }, r.getOSVersion = function() {
                            return this.getOS().version
                        }, r.getPlatform = function() {
                            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                        }, r.getPlatformType = function(e) {
                            void 0 === e && (e = !1);
                            var r = this.getPlatform().type;
                            return e ? (r + "").toLowerCase() || "" : r || ""
                        }, r.parsePlatform = function() {
                            var e = this;
                            this.parsedResult.platform = {};
                            var r = u.default.find(o.default, (function(r) {
                                if ("function" == typeof r.test) return r.test(e);
                                if (r.test instanceof Array) return r.test.some((function(r) {
                                    return e.test(r)
                                }));
                                throw Error("Browser's test function is not valid")
                            }));
                            return r && (this.parsedResult.platform = r.describe(this.getUA())), this.parsedResult.platform
                        }, r.getEngine = function() {
                            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                        }, r.getEngineName = function(e) {
                            return e ? (this.getEngine().name + "").toLowerCase() || "" : this.getEngine().name || ""
                        }, r.parseEngine = function() {
                            var e = this;
                            this.parsedResult.engine = {};
                            var r = u.default.find(s.default, (function(r) {
                                if ("function" == typeof r.test) return r.test(e);
                                if (r.test instanceof Array) return r.test.some((function(r) {
                                    return e.test(r)
                                }));
                                throw Error("Browser's test function is not valid")
                            }));
                            return r && (this.parsedResult.engine = r.describe(this.getUA())), this.parsedResult.engine
                        }, r.parse = function() {
                            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                        }, r.getResult = function() {
                            return u.default.assign({}, this.parsedResult)
                        }, r.satisfies = function(e) {
                            var r = this,
                                n = {},
                                t = 0,
                                i = {},
                                o = 0;
                            if (Object.keys(e).forEach((function(r) {
                                    var s = e[r];
                                    "string" == typeof s ? (i[r] = s, o += 1) : "object" == typeof s && (n[r] = s, t += 1)
                                })), t > 0) {
                                var s = Object.keys(n),
                                    a = u.default.find(s, (function(e) {
                                        return r.isOS(e)
                                    }));
                                if (a) {
                                    var c = this.satisfies(n[a]);
                                    if (void 0 !== c) return c
                                }
                                var d = u.default.find(s, (function(e) {
                                    return r.isPlatform(e)
                                }));
                                if (d) {
                                    var f = this.satisfies(n[d]);
                                    if (void 0 !== f) return f
                                }
                            }
                            if (o > 0) {
                                var l = u.default.find(Object.keys(i), (function(e) {
                                    return r.isBrowser(e, !0)
                                }));
                                if (void 0 !== l) return this.compareVersion(i[l])
                            }
                        }, r.isBrowser = function(e, r) {
                            void 0 === r && (r = !1);
                            var n = this.getBrowserName().toLowerCase(),
                                t = e.toLowerCase(),
                                i = u.default.getBrowserTypeByAlias(t);
                            return r && i && (t = i.toLowerCase()), t === n
                        }, r.compareVersion = function(e) {
                            var r = [0],
                                n = e,
                                t = !1,
                                i = this.getBrowserVersion();
                            if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (n = e.substr(1), "=" === e[1] ? (t = !0, n = e.substr(2)) : r = [], r.push(">" === e[0] ? 1 : -1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (t = !0, n = e.substr(1)), r.indexOf(u.default.compareVersions(i, n, t)) > -1
                        }, r.isOS = function(e) {
                            return this.getOSName(!0) === (e + "").toLowerCase()
                        }, r.isPlatform = function(e) {
                            return this.getPlatformType(!0) === (e + "").toLowerCase()
                        }, r.isEngine = function(e) {
                            return this.getEngineName(!0) === (e + "").toLowerCase()
                        }, r.is = function(e, r) {
                            return void 0 === r && (r = !1), this.isBrowser(e, r) || this.isOS(e) || this.isPlatform(e)
                        }, r.some = function(e) {
                            var r = this;
                            return void 0 === e && (e = []), e.some((function(e) {
                                return r.is(e)
                            }))
                        }, e
                    }();
                    r.default = c, e.exports = r.default
                },
                92: function(e, r, n) {
                    r.__esModule = !0, r.default = void 0;
                    var t, i = (t = n(17)) && t.__esModule ? t : {
                            default: t
                        },
                        o = /version\/(\d+(\.?_?\d+)+)/i,
                        s = [{
                            test: [/googlebot/i],
                            describe: function(e) {
                                var r = {
                                        name: "Googlebot"
                                    },
                                    n = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/opera/i],
                            describe: function(e) {
                                var r = {
                                        name: "Opera"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/opr\/|opios/i],
                            describe: function(e) {
                                var r = {
                                        name: "Opera"
                                    },
                                    n = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/SamsungBrowser/i],
                            describe: function(e) {
                                var r = {
                                        name: "Samsung Internet for Android"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/Whale/i],
                            describe: function(e) {
                                var r = {
                                        name: "NAVER Whale Browser"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/MZBrowser/i],
                            describe: function(e) {
                                var r = {
                                        name: "MZ Browser"
                                    },
                                    n = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/focus/i],
                            describe: function(e) {
                                var r = {
                                        name: "Focus"
                                    },
                                    n = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/swing/i],
                            describe: function(e) {
                                var r = {
                                        name: "Swing"
                                    },
                                    n = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/coast/i],
                            describe: function(e) {
                                var r = {
                                        name: "Opera Coast"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/opt\/\d+(?:.?_?\d+)+/i],
                            describe: function(e) {
                                var r = {
                                        name: "Opera Touch"
                                    },
                                    n = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/yabrowser/i],
                            describe: function(e) {
                                var r = {
                                        name: "Yandex Browser"
                                    },
                                    n = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/ucbrowser/i],
                            describe: function(e) {
                                var r = {
                                        name: "UC Browser"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/Maxthon|mxios/i],
                            describe: function(e) {
                                var r = {
                                        name: "Maxthon"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/epiphany/i],
                            describe: function(e) {
                                var r = {
                                        name: "Epiphany"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/puffin/i],
                            describe: function(e) {
                                var r = {
                                        name: "Puffin"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/sleipnir/i],
                            describe: function(e) {
                                var r = {
                                        name: "Sleipnir"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/k-meleon/i],
                            describe: function(e) {
                                var r = {
                                        name: "K-Meleon"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/micromessenger/i],
                            describe: function(e) {
                                var r = {
                                        name: "WeChat"
                                    },
                                    n = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/qqbrowser/i],
                            describe: function(e) {
                                var r = {
                                        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                    },
                                    n = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/msie|trident/i],
                            describe: function(e) {
                                var r = {
                                        name: "Internet Explorer"
                                    },
                                    n = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/\sedg\//i],
                            describe: function(e) {
                                var r = {
                                        name: "Microsoft Edge"
                                    },
                                    n = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/edg([ea]|ios)/i],
                            describe: function(e) {
                                var r = {
                                        name: "Microsoft Edge"
                                    },
                                    n = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/vivaldi/i],
                            describe: function(e) {
                                var r = {
                                        name: "Vivaldi"
                                    },
                                    n = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/seamonkey/i],
                            describe: function(e) {
                                var r = {
                                        name: "SeaMonkey"
                                    },
                                    n = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/sailfish/i],
                            describe: function(e) {
                                var r = {
                                        name: "Sailfish"
                                    },
                                    n = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/silk/i],
                            describe: function(e) {
                                var r = {
                                        name: "Amazon Silk"
                                    },
                                    n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/phantom/i],
                            describe: function(e) {
                                var r = {
                                        name: "PhantomJS"
                                    },
                                    n = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/slimerjs/i],
                            describe: function(e) {
                                var r = {
                                        name: "SlimerJS"
                                    },
                                    n = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function(e) {
                                var r = {
                                        name: "BlackBerry"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function(e) {
                                var r = {
                                        name: "WebOS Browser"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/bada/i],
                            describe: function(e) {
                                var r = {
                                        name: "Bada"
                                    },
                                    n = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/tizen/i],
                            describe: function(e) {
                                var r = {
                                        name: "Tizen"
                                    },
                                    n = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/qupzilla/i],
                            describe: function(e) {
                                var r = {
                                        name: "QupZilla"
                                    },
                                    n = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/firefox|iceweasel|fxios/i],
                            describe: function(e) {
                                var r = {
                                        name: "Firefox"
                                    },
                                    n = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/electron/i],
                            describe: function(e) {
                                var r = {
                                        name: "Electron"
                                    },
                                    n = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/MiuiBrowser/i],
                            describe: function(e) {
                                var r = {
                                        name: "Miui"
                                    },
                                    n = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/chromium/i],
                            describe: function(e) {
                                var r = {
                                        name: "Chromium"
                                    },
                                    n = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/chrome|crios|crmo/i],
                            describe: function(e) {
                                var r = {
                                        name: "Chrome"
                                    },
                                    n = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/GSA/i],
                            describe: function(e) {
                                var r = {
                                        name: "Google Search"
                                    },
                                    n = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: function(e) {
                                var r = !e.test(/like android/i),
                                    n = e.test(/android/i);
                                return r && n
                            },
                            describe: function(e) {
                                var r = {
                                        name: "Android Browser"
                                    },
                                    n = i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/playstation 4/i],
                            describe: function(e) {
                                var r = {
                                        name: "PlayStation 4"
                                    },
                                    n = i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/safari|applewebkit/i],
                            describe: function(e) {
                                var r = {
                                        name: "Safari"
                                    },
                                    n = i.default.getFirstMatch(o, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/.*/i],
                            describe: function(e) {
                                var r = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                return {
                                    name: i.default.getFirstMatch(r, e),
                                    version: i.default.getSecondMatch(r, e)
                                }
                            }
                        }];
                    r.default = s, e.exports = r.default
                },
                93: function(e, r, n) {
                    r.__esModule = !0, r.default = void 0;
                    var t, i = (t = n(17)) && t.__esModule ? t : {
                            default: t
                        },
                        o = n(18),
                        s = [{
                            test: [/Roku\/DVP/],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                                return {
                                    name: o.OS_MAP.Roku,
                                    version: r
                                }
                            }
                        }, {
                            test: [/windows phone/i],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                                return {
                                    name: o.OS_MAP.WindowsPhone,
                                    version: r
                                }
                            }
                        }, {
                            test: [/windows /i],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                    n = i.default.getWindowsVersionName(r);
                                return {
                                    name: o.OS_MAP.Windows,
                                    version: r,
                                    versionName: n
                                }
                            }
                        }, {
                            test: [/Macintosh(.*?) FxiOS(.*?)\//],
                            describe: function(e) {
                                var r = {
                                        name: o.OS_MAP.iOS
                                    },
                                    n = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/macintosh/i],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                    n = i.default.getMacOSVersionName(r),
                                    t = {
                                        name: o.OS_MAP.MacOS,
                                        version: r
                                    };
                                return n && (t.versionName = n), t
                            }
                        }, {
                            test: [/(ipod|iphone|ipad)/i],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                                return {
                                    name: o.OS_MAP.iOS,
                                    version: r
                                }
                            }
                        }, {
                            test: function(e) {
                                var r = !e.test(/like android/i),
                                    n = e.test(/android/i);
                                return r && n
                            },
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                    n = i.default.getAndroidVersionName(r),
                                    t = {
                                        name: o.OS_MAP.Android,
                                        version: r
                                    };
                                return n && (t.versionName = n), t
                            }
                        }, {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                    n = {
                                        name: o.OS_MAP.WebOS
                                    };
                                return r && r.length && (n.version = r), n
                            }
                        }, {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                                return {
                                    name: o.OS_MAP.BlackBerry,
                                    version: r
                                }
                            }
                        }, {
                            test: [/bada/i],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                                return {
                                    name: o.OS_MAP.Bada,
                                    version: r
                                }
                            }
                        }, {
                            test: [/tizen/i],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                                return {
                                    name: o.OS_MAP.Tizen,
                                    version: r
                                }
                            }
                        }, {
                            test: [/linux/i],
                            describe: function() {
                                return {
                                    name: o.OS_MAP.Linux
                                }
                            }
                        }, {
                            test: [/CrOS/],
                            describe: function() {
                                return {
                                    name: o.OS_MAP.ChromeOS
                                }
                            }
                        }, {
                            test: [/PlayStation 4/],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                                return {
                                    name: o.OS_MAP.PlayStation4,
                                    version: r
                                }
                            }
                        }];
                    r.default = s, e.exports = r.default
                },
                94: function(e, r, n) {
                    r.__esModule = !0, r.default = void 0;
                    var t, i = (t = n(17)) && t.__esModule ? t : {
                            default: t
                        },
                        o = n(18),
                        s = [{
                            test: [/googlebot/i],
                            describe: function() {
                                return {
                                    type: "bot",
                                    vendor: "Google"
                                }
                            }
                        }, {
                            test: [/huawei/i],
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                    n = {
                                        type: o.PLATFORMS_MAP.mobile,
                                        vendor: "Huawei"
                                    };
                                return r && (n.model = r), n
                            }
                        }, {
                            test: [/nexus\s*(?:7|8|9|10).*/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Nexus"
                                }
                            }
                        }, {
                            test: [/ipad/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Apple",
                                    model: "iPad"
                                }
                            }
                        }, {
                            test: [/Macintosh(.*?) FxiOS(.*?)\//],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Apple",
                                    model: "iPad"
                                }
                            }
                        }, {
                            test: [/kftt build/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Amazon",
                                    model: "Kindle Fire HD 7"
                                }
                            }
                        }, {
                            test: [/silk/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Amazon"
                                }
                            }
                        }, {
                            test: [/tablet(?! pc)/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet
                                }
                            }
                        }, {
                            test: function(e) {
                                var r = e.test(/ipod|iphone/i),
                                    n = e.test(/like (ipod|iphone)/i);
                                return r && !n
                            },
                            describe: function(e) {
                                var r = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                                return {
                                    type: o.PLATFORMS_MAP.mobile,
                                    vendor: "Apple",
                                    model: r
                                }
                            }
                        }, {
                            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile,
                                    vendor: "Nexus"
                                }
                            }
                        }, {
                            test: [/[^-]mobi/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(e) {
                                return "blackberry" === e.getBrowserName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile,
                                    vendor: "BlackBerry"
                                }
                            }
                        }, {
                            test: function(e) {
                                return "bada" === e.getBrowserName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(e) {
                                return "windows phone" === e.getBrowserName()
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile,
                                    vendor: "Microsoft"
                                }
                            }
                        }, {
                            test: function(e) {
                                var r = Number((e.getOSVersion() + "").split(".")[0]);
                                return "android" === e.getOSName(!0) && r >= 3
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet
                                }
                            }
                        }, {
                            test: function(e) {
                                return "android" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(e) {
                                return "macos" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.desktop,
                                    vendor: "Apple"
                                }
                            }
                        }, {
                            test: function(e) {
                                return "windows" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.desktop
                                }
                            }
                        }, {
                            test: function(e) {
                                return "linux" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.desktop
                                }
                            }
                        }, {
                            test: function(e) {
                                return "playstation 4" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tv
                                }
                            }
                        }, {
                            test: function(e) {
                                return "roku" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tv
                                }
                            }
                        }];
                    r.default = s, e.exports = r.default
                },
                95: function(e, r, n) {
                    r.__esModule = !0, r.default = void 0;
                    var t, i = (t = n(17)) && t.__esModule ? t : {
                            default: t
                        },
                        o = n(18),
                        s = [{
                            test: function(e) {
                                return "microsoft edge" === e.getBrowserName(!0)
                            },
                            describe: function(e) {
                                if (/\sedg\//i.test(e)) return {
                                    name: o.ENGINE_MAP.Blink
                                };
                                var r = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                                return {
                                    name: o.ENGINE_MAP.EdgeHTML,
                                    version: r
                                }
                            }
                        }, {
                            test: [/trident/i],
                            describe: function(e) {
                                var r = {
                                        name: o.ENGINE_MAP.Trident
                                    },
                                    n = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: function(e) {
                                return e.test(/presto/i)
                            },
                            describe: function(e) {
                                var r = {
                                        name: o.ENGINE_MAP.Presto
                                    },
                                    n = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: function(e) {
                                var r = e.test(/gecko/i),
                                    n = e.test(/like gecko/i);
                                return r && !n
                            },
                            describe: function(e) {
                                var r = {
                                        name: o.ENGINE_MAP.Gecko
                                    },
                                    n = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }, {
                            test: [/(apple)?webkit\/537\.36/i],
                            describe: function() {
                                return {
                                    name: o.ENGINE_MAP.Blink
                                }
                            }
                        }, {
                            test: [/(apple)?webkit/i],
                            describe: function(e) {
                                var r = {
                                        name: o.ENGINE_MAP.WebKit
                                    },
                                    n = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (r.version = n), r
                            }
                        }];
                    r.default = s, e.exports = r.default
                }
            })
        }(n = {
            path: void 0,
            exports: {},
            require: function() {
                return function() {
                    throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }()
            }
        }), n.exports
    }()),
    n = "@prism-ui/core",
    t = "7.11.3";
let i;
const o = "undefined" != typeof window ? r.getParser(window.navigator.userAgent).getResult() : {},
    s = "undefined" != typeof window ? window.location.href : "",
    u = new URLSearchParams(s),
    a = () => !(!u.has("disablePrismMetrics") || "true" !== u.get("disablePrismMetrics")) || !!document.querySelector('[prism-metrics="false"]'),
    c = () => {
        var e, r;
        return u.has("trackingDebug") && ((null === (e = u.get("trackingDebug")) || void 0 === e ? void 0 : e.includes("prism")) || (null === (r = u.get("trackingDebug")) || void 0 === r ? void 0 : r.includes("true")))
    },
    d = () => {
        a() || (localStorage.getItem("@prism-ui/metrics") && c() && (console.groupCollapsed(`@prism-ui/metrics | ${n}@${t} | getItem()`), console.info("@prism-ui/metrics was found in local storage"), console.groupEnd()), localStorage.removeItem("@prism-ui/metrics"), c() && (console.groupCollapsed(`@prism-ui/metrics | ${n}@${t} | removeItem()`), console.info("@prism-ui/metrics was removed in local storage"), console.groupEnd()))
    };
"undefined" != typeof window && window.addEventListener("unload", d), "undefined" != typeof document && (document.addEventListener("visibilitychange", d), document.addEventListener("prism-component-connected", (e => {
    (e => {
        var r, i;
        if (a()) return;
        const s = localStorage.getItem("@prism-ui/metrics");
        let u = [],
            d = "undefined" != typeof window ? {
                screen: {
                    availHeight: window.screen.availHeight,
                    availWidth: window.screen.availWidth,
                    height: window.screen.height,
                    width: window.screen.width,
                    orientation: {
                        type: null === (r = window.screen.orientation) || void 0 === r ? void 0 : r.type,
                        angle: null === (i = window.screen.orientation) || void 0 === i ? void 0 : i.angle
                    }
                },
                location: {
                    protocol: window.location.protocol,
                    host: window.location.host,
                    hostname: window.location.hostname,
                    port: window.location.port,
                    pathname: window.location.pathname,
                    origin: window.location.origin
                }
            } : {};
        s && (u = JSON.parse(s).prism.components);
        let f = {
            prism: Object.assign(Object.assign({}, o), {
                window: d,
                version: t,
                framework: n,
                components: u
            })
        };
        f.prism.components.push(e), localStorage.setItem("@prism-ui/metrics", JSON.stringify(f)), c() && (console.groupCollapsed(`@prism-ui/metrics | ${n}@${t}`), console.count(e.tag), console.table(f.prism.components), console.groupEnd())
    })(e.detail)
})));
const f = () => {
    if ("undefined" == typeof window) return;
    const e = window.document,
        n = window,
        t = r.getParser(n.navigator.userAgent).getResult().os.name;
    i = e.documentElement.getAttribute("mode") || "iOS" === t ? "ios" : "web", e.documentElement.setAttribute("mode", i), e.documentElement.classList.add(i)
};
export {
    f as g
}