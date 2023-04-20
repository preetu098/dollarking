/*!
 * AdminLTE v3.0.2 (https://adminlte.io)
 * Copyright 2014-2020 Colorlib <http://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).adminlte = {})
}(this, (function (t) {
    "use strict";
    var e = function (t) {
        var e = "ControlSidebar",
                i = "lte.controlsidebar",
                n = t.fn[e],
                s = {
                    COLLAPSED: "collapsed.lte.controlsidebar",
                    EXPANDED: "expanded.lte.controlsidebar"
                },
                o = ".control-sidebar",
                a = ".control-sidebar-content",
                r = '[data-widget="control-sidebar"]',
                l = ".main-header",
                d = ".main-footer",
                c = "control-sidebar-animate",
                h = "control-sidebar-open",
                f = "control-sidebar-slide-open",
                u = "layout-fixed",
                g = "layout-navbar-fixed",
                p = "layout-sm-navbar-fixed",
                _ = "layout-md-navbar-fixed",
                m = "layout-lg-navbar-fixed",
                C = "layout-xl-navbar-fixed",
                v = "layout-footer-fixed",
                y = "layout-sm-footer-fixed",
                b = "layout-md-footer-fixed",
                D = "layout-lg-footer-fixed",
                E = "layout-xl-footer-fixed",
                w = {
                    controlsidebarSlide: !0,
                    scrollbarTheme: "os-theme-light",
                    scrollbarAutoHide: "l"
                },
                A = function () {
                    function e(t, e) {
                        this._element = t, this._config = e, this._init()
                    }
                    var n = e.prototype;
                    return n.collapse = function () {
                        this._config.controlsidebarSlide ? (t("html").addClass(c), t("body").removeClass(f).delay(300).queue((function () {
                            t(o).hide(), t("html").removeClass(c), t(this).dequeue()
                        }))) : t("body").removeClass(h);
                        var e = t.Event(s.COLLAPSED);
                        t(this._element).trigger(e)
                    }, n.show = function () {
                        this._config.controlsidebarSlide ? (t("html").addClass(c), t(o).show().delay(10).queue((function () {
                            t("body").addClass(f).delay(300).queue((function () {
                                t("html").removeClass(c), t(this).dequeue()
                            })), t(this).dequeue()
                        }))) : t("body").addClass(h);
                        var e = t.Event(s.EXPANDED);
                        t(this._element).trigger(e)
                    }, n.toggle = function () {
                        t("body").hasClass(h) || t("body").hasClass(f) ? this.collapse() : this.show()
                    }, n._init = function () {
                        var e = this;
                        this._fixHeight(), this._fixScrollHeight(), t(window).resize((function () {
                            e._fixHeight(), e._fixScrollHeight()
                        })), t(window).scroll((function () {
                            (t("body").hasClass(h) || t("body").hasClass(f)) && e._fixScrollHeight()
                        }))
                    }, n._fixScrollHeight = function () {
                        var e = {
                            scroll: t(document).height(),
                            window: t(window).height(),
                            header: t(l).outerHeight(),
                            footer: t(d).outerHeight()
                        },
                                i = Math.abs(e.window + t(window).scrollTop() - e.scroll),
                                n = t(window).scrollTop(),
                                s = !1,
                                r = !1;
                        t("body").hasClass(u) && ((t("body").hasClass(g) || t("body").hasClass(p) || t("body").hasClass(_) || t("body").hasClass(m) || t("body").hasClass(C)) && "fixed" === t(l).css("position") && (s = !0), (t("body").hasClass(v) || t("body").hasClass(y) || t("body").hasClass(b) || t("body").hasClass(D) || t("body").hasClass(E)) && "fixed" === t(d).css("position") && (r = !0), 0 === n && 0 === i ? (t(o).css("bottom", e.footer), t(o).css("top", e.header), t(o + ", " + o + " " + a).css("height", e.window - (e.header + e.footer))) : i <= e.footer ? !1 === r ? (t(o).css("bottom", e.footer - i), t(o + ", " + o + " " + a).css("height", e.window - (e.footer - i))) : t(o).css("bottom", e.footer) : n <= e.header ? !1 === s ? (t(o).css("top", e.header - n), t(o + ", " + o + " " + a).css("height", e.window - (e.header - n))) : t(o).css("top", e.header) : !1 === s ? (t(o).css("top", 0), t(o + ", " + o + " " + a).css("height", e.window)) : t(o).css("top", e.header))
                    }, n._fixHeight = function () {
                        var e = t(window).height(),
                                i = t(l).outerHeight(),
                                n = t(d).outerHeight();
                        if (t("body").hasClass(u)) {
                            var s = e - i;
                            (t("body").hasClass(v) || t("body").hasClass(y) || t("body").hasClass(b) || t("body").hasClass(D) || t("body").hasClass(E)) && "fixed" === t(d).css("position") && (s = e - i - n), t(o + " " + a).css("height", s), "undefined" != typeof t.fn.overlayScrollbars && t(o + " " + a).overlayScrollbars({
                                className: this._config.scrollbarTheme,
                                sizeAutoCapable: !0,
                                scrollbars: {
                                    autoHide: this._config.scrollbarAutoHide,
                                    clickScrolling: !0
                                }
                            })
                        }
                    }, e._jQueryInterface = function (n) {
                        return this.each((function () {
                            var s = t(this).data(i),
                                    o = t.extend({}, w, t(this).data());
                            if (s || (s = new e(this, o), t(this).data(i, s)), "undefined" === s[n])
                                throw new Error(n + " is not a function");
                            s[n]()
                        }))
                    }, e
                }();
        return t(document).on("click", r, (function (e) {
            e.preventDefault(), A._jQueryInterface.call(t(this), "toggle")
        })), t.fn[e] = A._jQueryInterface, t.fn[e].Constructor = A, t.fn[e].noConflict = function () {
            return t.fn[e] = n, A._jQueryInterface
        }, A
    }(jQuery),
            i = function (t) {
                var e = "Layout",
                        i = t.fn[e],
                        n = ".main-header",
                        s = ".main-sidebar",
                        o = ".main-sidebar .sidebar",
                        a = ".content-wrapper",
                        r = ".control-sidebar-content",
                        l = '[data-widget="control-sidebar"]',
                        d = ".main-footer",
                        c = '[data-widget="pushmenu"]',
                        h = ".login-box",
                        f = ".register-box",
                        u = "sidebar-focused",
                        g = "layout-fixed",
                        p = "login-page",
                        _ = "register-page",
                        m = "control-sidebar-slide-open",
                        C = "control-sidebar-open",
                        v = {
                            scrollbarTheme: "os-theme-light",
                            scrollbarAutoHide: "l"
                        },
                        y = function () {
                            function e(t, e) {
                                this._config = e, this._element = t, this._init()
                            }
                            var i = e.prototype;
                            return i.fixLayoutHeight = function (e) {
                                void 0 === e && (e = null);
                                var i = 0;
                                (t("body").hasClass(m) || t("body").hasClass(C) || "control_sidebar" == e) && (i = t(r).height());
                                var s = {
                                    window: t(window).height(),
                                    header: 0 !== t(n).length ? t(n).outerHeight() : 0,
                                    footer: 0 !== t(d).length ? t(d).outerHeight() : 0,
                                    sidebar: 0 !== t(o).length ? t(o).height() : 0,
                                    control_sidebar: i
                                },
                                        l = this._max(s);
                                l == s.control_sidebar ? t(a).css("min-height", l) : l == s.window ? t(a).css("min-height", l - s.header - s.footer) : t(a).css("min-height", l - s.header), t("body").hasClass(g) && (t(a).css("min-height", l - s.header - s.footer), "undefined" != typeof t.fn.overlayScrollbars && t(o).overlayScrollbars({
                                    className: this._config.scrollbarTheme,
                                    sizeAutoCapable: !0,
                                    scrollbars: {
                                        autoHide: this._config.scrollbarAutoHide,
                                        clickScrolling: !0
                                    }
                                }))
                            }, i._init = function () {
                                var e = this;
                                if (this.fixLayoutHeight(), t(o).on("collapsed.lte.treeview expanded.lte.treeview", (function () {
                                    e.fixLayoutHeight()
                                })), t(c).on("collapsed.lte.pushmenu shown.lte.pushmenu", (function () {
                                    e.fixLayoutHeight()
                                })), t(l).on("collapsed.lte.controlsidebar", (function () {
                                    e.fixLayoutHeight()
                                })).on("expanded.lte.controlsidebar", (function () {
                                    e.fixLayoutHeight("control_sidebar")
                                })), t(window).resize((function () {
                                    e.fixLayoutHeight()
                                })), t("body").hasClass(p) || t("body").hasClass(_)) {
                                    if (t("body").hasClass(p) || t("body").hasClass(_)) {
                                        var i = t(h + ", " + f).height();
                                        t("body").css("min-height", i)
                                    }
                                } else
                                    t("body, html").css("height", "auto");
                                t("body.hold-transition").removeClass("hold-transition")
                            }, i._max = function (t) {
                                var e = 0;
                                return Object.keys(t).forEach((function (i) {
                                    t[i] > e && (e = t[i])
                                })), e
                            }, e._jQueryInterface = function (i) {
                                return void 0 === i && (i = ""), this.each((function () {
                                    var n = t(this).data("lte.layout"),
                                            s = t.extend({}, v, t(this).data());
                                    n || (n = new e(t(this), s), t(this).data("lte.layout", n)), "init" !== i && "" !== i || n._init()
                                }))
                            }, e
                        }();
                return t(window).on("load", (function () {
                    y._jQueryInterface.call(t("body"))
                })), t(o + " a").on("focusin", (function () {
                    t(s).addClass(u)
                })), t(o + " a").on("focusout", (function () {
                    t(s).removeClass(u)
                })), t.fn[e] = y._jQueryInterface, t.fn[e].Constructor = y, t.fn[e].noConflict = function () {
                    return t.fn[e] = i, y._jQueryInterface
                }, y
            }(jQuery),
            n = function (t) {
                var e = "PushMenu",
                        i = ".lte.pushmenu",
                        n = t.fn[e],
                        s = {
                            COLLAPSED: "collapsed" + i,
                            SHOWN: "shown" + i
                        },
                        o = {
                            autoCollapseSize: 992,
                            enableRemember: !1,
                            noTransitionAfterReload: !0
                        },
                        a = {
                            TOGGLE_BUTTON: '[data-widget="pushmenu"]',
                            SIDEBAR_MINI: ".sidebar-mini",
                            SIDEBAR_COLLAPSED: ".sidebar-collapse",
                            BODY: "body",
                            OVERLAY: "#sidebar-overlay",
                            WRAPPER: ".wrapper"
                        },
                        r = "sidebar-collapse",
                        l = "sidebar-open",
                        d = function () {
                            function e(e, i) {
                                this._element = e, this._options = t.extend({}, o, i), t(a.OVERLAY).length || this._addOverlay(), this._init()
                            }
                            var n = e.prototype;
                            return n.expand = function () {
                                this._options.autoCollapseSize && t(window).width() <= this._options.autoCollapseSize && t(a.BODY).addClass(l), t(a.BODY).removeClass(r), this._options.enableRemember && localStorage.setItem("remember" + i, l);
                                var e = t.Event(s.SHOWN);
                                t(this._element).trigger(e)
                            }, n.collapse = function () {
                                this._options.autoCollapseSize && t(window).width() <= this._options.autoCollapseSize && t(a.BODY).removeClass(l), t(a.BODY).addClass(r), this._options.enableRemember && localStorage.setItem("remember" + i, r);
                                var e = t.Event(s.COLLAPSED);
                                t(this._element).trigger(e)
                            }, n.toggle = function () {
                                t(a.BODY).hasClass(r) ? this.expand() : this.collapse()
                            }, n.autoCollapse = function (e) {
                                void 0 === e && (e = !1), this._options.autoCollapseSize && (t(window).width() <= this._options.autoCollapseSize ? t(a.BODY).hasClass(l) || this.collapse() : 1 == e && t(a.BODY).hasClass(l) && t(a.BODY).removeClass(l))
                            }, n.remember = function () {
                                this._options.enableRemember && (localStorage.getItem("remember" + i) == r ? this._options.noTransitionAfterReload ? t("body").addClass("hold-transition").addClass(r).delay(50).queue((function () {
                                    t(this).removeClass("hold-transition"), t(this).dequeue()
                                })) : t("body").addClass(r) : this._options.noTransitionAfterReload ? t("body").addClass("hold-transition").removeClass(r).delay(50).queue((function () {
                                    t(this).removeClass("hold-transition"), t(this).dequeue()
                                })) : t("body").removeClass(r))
                            }, n._init = function () {
                                var e = this;
                                this.remember(), this.autoCollapse(), t(window).resize((function () {
                                    e.autoCollapse(!0)
                                }))
                            }, n._addOverlay = function () {
                                var e = this,
                                        i = t("<div />", {
                                            id: "sidebar-overlay"
                                        });
                                i.on("click", (function () {
                                    e.collapse()
                                })), t(a.WRAPPER).append(i)
                            }, e._jQueryInterface = function (i) {
                                return this.each((function () {
                                    var n = t(this).data("lte.pushmenu"),
                                            s = t.extend({}, o, t(this).data());
                                    n || (n = new e(this, s), t(this).data("lte.pushmenu", n)), "string" == typeof i && i.match(/collapse|expand|toggle/) && n[i]()
                                }))
                            }, e
                        }();
                return t(document).on("click", a.TOGGLE_BUTTON, (function (e) {
                    e.preventDefault();
                    var i = e.currentTarget;
                    "pushmenu" !== t(i).data("widget") && (i = t(i).closest(a.TOGGLE_BUTTON)), d._jQueryInterface.call(t(i), "toggle")
                })), t(window).on("load", (function () {
                    d._jQueryInterface.call(t(a.TOGGLE_BUTTON))
                })), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
                    return t.fn[e] = n, d._jQueryInterface
                }, d
            }(jQuery),
            s = function (t) {
                var e = "Treeview",
                        i = t.fn[e],
                        n = {
                            SELECTED: "selected.lte.treeview",
                            EXPANDED: "expanded.lte.treeview",
                            COLLAPSED: "collapsed.lte.treeview",
                            LOAD_DATA_API: "load.lte.treeview"
                        },
                        s = ".nav-item",
                        o = ".nav-treeview",
                        a = ".menu-open",
                        r = '[data-widget="treeview"]',
                        l = "menu-open",
                        d = "sidebar-collapse",
                        c = {
                            trigger: r + " " + ".nav-link",
                            animationSpeed: 300,
                            accordion: !0,
                            expandSidebar: !1,
                            sidebarButtonSelector: '[data-widget="pushmenu"]'
                        },
                        h = function () {
                            function e(t, e) {
                                this._config = e, this._element = t
                            }
                            var i = e.prototype;
                            return i.init = function () {
                                this._setupListeners()
                            }, i.expand = function (e, i) {
                                var s = this,
                                        r = t.Event(n.EXPANDED);
                                if (this._config.accordion) {
                                    var d = i.siblings(a).first(),
                                            c = d.find(o).first();
                                    this.collapse(c, d)
                                }
                                e.stop().slideDown(this._config.animationSpeed, (function () {
                                    i.addClass(l), t(s._element).trigger(r)
                                })), this._config.expandSidebar && this._expandSidebar()
                            }, i.collapse = function (e, i) {
                                var s = this,
                                        r = t.Event(n.COLLAPSED);
                                e.stop().slideUp(this._config.animationSpeed, (function () {
                                    i.removeClass(l), t(s._element).trigger(r), e.find(a + " > " + o).slideUp(), e.find(a).removeClass(l)
                                }))
                            }, i.toggle = function (e) {
                                var i = t(e.currentTarget),
                                        n = i.parent(),
                                        a = n.find("> " + o);
                                if (a.is(o) || (n.is(s) || (a = n.parent().find("> " + o)), a.is(o))) {
                                    e.preventDefault();
                                    var r = i.parents(s).first();
                                    r.hasClass(l) ? this.collapse(t(a), r) : this.expand(t(a), r)
                                }
                            }, i._setupListeners = function () {
                                var e = this;
                                t(document).on("click", this._config.trigger, (function (t) {
                                    e.toggle(t)
                                }))
                            }, i._expandSidebar = function () {
                                t("body").hasClass(d) && t(this._config.sidebarButtonSelector).PushMenu("expand")
                            }, e._jQueryInterface = function (i) {
                                return this.each((function () {
                                    var n = t(this).data("lte.treeview"),
                                            s = t.extend({}, c, t(this).data());
                                    n || (n = new e(t(this), s), t(this).data("lte.treeview", n)), "init" === i && n[i]()
                                }))
                            }, e
                        }();
                return t(window).on(n.LOAD_DATA_API, (function () {
                    t(r).each((function () {
                        h._jQueryInterface.call(t(this), "init")
                    }))
                })), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
                    return t.fn[e] = i, h._jQueryInterface
                }, h
            }(jQuery),
            o = function (t) {
                var e = "DirectChat",
                        i = t.fn[e],
                        n = "toggled{EVENT_KEY}",
                        s = '[data-widget="chat-pane-toggle"]',
                        o = ".direct-chat",
                        a = "direct-chat-contacts-open",
                        r = function () {
                            function e(t, e) {
                                this._element = t
                            }
                            return e.prototype.toggle = function () {
                                t(this._element).parents(o).first().toggleClass(a);
                                var e = t.Event(n);
                                t(this._element).trigger(e)
                            }, e._jQueryInterface = function (i) {
                                return this.each((function () {
                                    var n = t(this).data("lte.directchat");
                                    n || (n = new e(t(this)), t(this).data("lte.directchat", n)), n[i]()
                                }))
                            }, e
                        }();
                return t(document).on("click", s, (function (e) {
                    e && e.preventDefault(), r._jQueryInterface.call(t(this), "toggle")
                })), t.fn[e] = r._jQueryInterface, t.fn[e].Constructor = r, t.fn[e].noConflict = function () {
                    return t.fn[e] = i, r._jQueryInterface
                }, r
            }(jQuery),
            a = function (t) {
                var e = "TodoList",
                        i = t.fn[e],
                        n = '[data-widget="todo-list"]',
                        s = "done",
                        o = {
                            onCheck: function (t) {
                                return t
                            },
                            onUnCheck: function (t) {
                                return t
                            }
                        },
                        a = function () {
                            function e(t, e) {
                                this._config = e, this._element = t, this._init()
                            }
                            var i = e.prototype;
                            return i.toggle = function (e) {
                                e.parents("li").toggleClass(s), t(e).prop("checked") ? this.check(e) : this.unCheck(t(e))
                            }, i.check = function (t) {
                                this._config.onCheck.call(t)
                            }, i.unCheck = function (t) {
                                this._config.onUnCheck.call(t)
                            }, i._init = function () {
                                var e = this;
                                t(n).find("input:checkbox:checked").parents("li").toggleClass(s), t(n).on("change", "input:checkbox", (function (i) {
                                    e.toggle(t(i.target))
                                }))
                            }, e._jQueryInterface = function (i) {
                                return this.each((function () {
                                    var n = t(this).data("lte.todolist"),
                                            s = t.extend({}, o, t(this).data());
                                    n || (n = new e(t(this), s), t(this).data("lte.todolist", n)), "init" === i && n[i]()
                                }))
                            }, e
                        }();
                return t(window).on("load", (function () {
                    a._jQueryInterface.call(t(n))
                })), t.fn[e] = a._jQueryInterface, t.fn[e].Constructor = a, t.fn[e].noConflict = function () {
                    return t.fn[e] = i, a._jQueryInterface
                }, a
            }(jQuery),
            r = function (t) {
                var e = "CardWidget",
                        i = ".lte.cardwidget",
                        n = t.fn[e],
                        s = {
                            EXPANDED: "expanded" + i,
                            COLLAPSED: "collapsed" + i,
                            MAXIMIZED: "maximized" + i,
                            MINIMIZED: "minimized" + i,
                            REMOVED: "removed" + i
                        },
                        o = {
                            CARD: "card",
                            COLLAPSED: "collapsed-card",
                            WAS_COLLAPSED: "was-collapsed",
                            MAXIMIZED: "maximized-card"
                        },
                        a = {
                            DATA_REMOVE: '[data-card-widget="remove"]',
                            DATA_COLLAPSE: '[data-card-widget="collapse"]',
                            DATA_MAXIMIZE: '[data-card-widget="maximize"]',
                            CARD: "." + o.CARD,
                            CARD_HEADER: ".card-header",
                            CARD_BODY: ".card-body",
                            CARD_FOOTER: ".card-footer",
                            COLLAPSED: "." + o.COLLAPSED
                        },
                        r = {
                            animationSpeed: "normal",
                            collapseTrigger: a.DATA_COLLAPSE,
                            removeTrigger: a.DATA_REMOVE,
                            maximizeTrigger: a.DATA_MAXIMIZE,
                            collapseIcon: "fa-minus",
                            expandIcon: "fa-plus",
                            maximizeIcon: "fa-expand",
                            minimizeIcon: "fa-compress"
                        },
                        l = function () {
                            function e(e, i) {
                                this._element = e, this._parent = e.parents(a.CARD).first(), e.hasClass(o.CARD) && (this._parent = e), this._settings = t.extend({}, r, i)
                            }
                            var i = e.prototype;
                            return i.collapse = function () {
                                var e = this;
                                this._parent.children(a.CARD_BODY + ", " + a.CARD_FOOTER).slideUp(this._settings.animationSpeed, (function () {
                                    e._parent.addClass(o.COLLAPSED)
                                })), this._parent.find("> " + a.CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);
                                var i = t.Event(s.COLLAPSED);
                                this._element.trigger(i, this._parent)
                            }, i.expand = function () {
                                var e = this;
                                this._parent.children(a.CARD_BODY + ", " + a.CARD_FOOTER).slideDown(this._settings.animationSpeed, (function () {
                                    e._parent.removeClass(o.COLLAPSED)
                                })), this._parent.find("> " + a.CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);
                                var i = t.Event(s.EXPANDED);
                                this._element.trigger(i, this._parent)
                            }, i.remove = function () {
                                this._parent.slideUp();
                                var e = t.Event(s.REMOVED);
                                this._element.trigger(e, this._parent)
                            }, i.toggle = function () {
                                this._parent.hasClass(o.COLLAPSED) ? this.expand() : this.collapse()
                            }, i.maximize = function () {
                                this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon), this._parent.css({
                                    height: this._parent.height(),
                                    width: this._parent.width(),
                                    transition: "all .15s"
                                }).delay(150).queue((function () {
                                    t(this).addClass(o.MAXIMIZED), t("html").addClass(o.MAXIMIZED), t(this).hasClass(o.COLLAPSED) && t(this).addClass(o.WAS_COLLAPSED), t(this).dequeue()
                                }));
                                var e = t.Event(s.MAXIMIZED);
                                this._element.trigger(e, this._parent)
                            }, i.minimize = function () {
                                this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon), this._parent.css("cssText", "height:" + this._parent[0].style.height + " !important;width:" + this._parent[0].style.width + " !important; transition: all .15s;").delay(10).queue((function () {
                                    t(this).removeClass(o.MAXIMIZED), t("html").removeClass(o.MAXIMIZED), t(this).css({
                                        height: "inherit",
                                        width: "inherit"
                                    }), t(this).hasClass(o.WAS_COLLAPSED) && t(this).removeClass(o.WAS_COLLAPSED), t(this).dequeue()
                                }));
                                var e = t.Event(s.MINIMIZED);
                                this._element.trigger(e, this._parent)
                            }, i.toggleMaximize = function () {
                                this._parent.hasClass(o.MAXIMIZED) ? this.minimize() : this.maximize()
                            }, i._init = function (e) {
                                var i = this;
                                this._parent = e, t(this).find(this._settings.collapseTrigger).click((function () {
                                    i.toggle()
                                })), t(this).find(this._settings.maximizeTrigger).click((function () {
                                    i.toggleMaximize()
                                })), t(this).find(this._settings.removeTrigger).click((function () {
                                    i.remove()
                                }))
                            }, e._jQueryInterface = function (i) {
                                var n = t(this).data("lte.cardwidget"),
                                        s = t.extend({}, r, t(this).data());
                                n || (n = new e(t(this), s), t(this).data("lte.cardwidget", "string" == typeof i ? n : i)), "string" == typeof i && i.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/) ? n[i]() : "object" == typeof i && n._init(t(this))
                            }, e
                        }();
                return t(document).on("click", a.DATA_COLLAPSE, (function (e) {
                    e && e.preventDefault(), l._jQueryInterface.call(t(this), "toggle")
                })), t(document).on("click", a.DATA_REMOVE, (function (e) {
                    e && e.preventDefault(), l._jQueryInterface.call(t(this), "remove")
                })), t(document).on("click", a.DATA_MAXIMIZE, (function (e) {
                    e && e.preventDefault(), l._jQueryInterface.call(t(this), "toggleMaximize")
                })), t.fn[e] = l._jQueryInterface, t.fn[e].Constructor = l, t.fn[e].noConflict = function () {
                    return t.fn[e] = n, l._jQueryInterface
                }, l
            }(jQuery),
            l = function (t) {
                var e = "CardRefresh",
                        i = t.fn[e],
                        n = {
                            LOADED: "loaded.lte.cardrefresh",
                            OVERLAY_ADDED: "overlay.added.lte.cardrefresh",
                            OVERLAY_REMOVED: "overlay.removed.lte.cardrefresh"
                        },
                        s = {
                            CARD: "card"
                        },
                        o = {
                            CARD: "." + s.CARD,
                            DATA_REFRESH: '[data-card-widget="card-refresh"]'
                        },
                        a = {
                            source: "",
                            sourceSelector: "",
                            params: {},
                            trigger: o.DATA_REFRESH,
                            content: ".card-body",
                            loadInContent: !0,
                            loadOnInit: !0,
                            responseType: "",
                            overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
                            onLoadStart: function () {},
                            onLoadDone: function (t) {
                                return t
                            }
                        },
                        r = function () {
                            function e(e, i) {
                                if (this._element = e, this._parent = e.parents(o.CARD).first(), this._settings = t.extend({}, a, i), this._overlay = t(this._settings.overlayTemplate), e.hasClass(s.CARD) && (this._parent = e), "" === this._settings.source)
                                    throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.");
                                this._init(), this._settings.loadOnInit && this.load()
                            }
                            var i = e.prototype;
                            return i.load = function () {
                                this._addOverlay(), this._settings.onLoadStart.call(t(this)), t.get(this._settings.source, this._settings.params, function (e) {
                                    this._settings.loadInContent && ("" != this._settings.sourceSelector && (e = t(e).find(this._settings.sourceSelector).html()), this._parent.find(this._settings.content).html(e)), this._settings.onLoadDone.call(t(this), e), this._removeOverlay()
                                }.bind(this), "" !== this._settings.responseType && this._settings.responseType);
                                var e = t.Event(n.LOADED);
                                t(this._element).trigger(e)
                            }, i._addOverlay = function () {
                                this._parent.append(this._overlay);
                                var e = t.Event(n.OVERLAY_ADDED);
                                t(this._element).trigger(e)
                            }, i._removeOverlay = function () {
                                this._parent.find(this._overlay).remove();
                                var e = t.Event(n.OVERLAY_REMOVED);
                                t(this._element).trigger(e)
                            }, i._init = function (e) {
                                var i = this;
                                t(this).find(this._settings.trigger).on("click", (function () {
                                    i.load()
                                }))
                            }, e._jQueryInterface = function (i) {
                                var n = t(this).data("lte.cardrefresh"),
                                        s = t.extend({}, a, t(this).data());
                                n || (n = new e(t(this), s), t(this).data("lte.cardrefresh", "string" == typeof i ? n : i)), "string" == typeof i && i.match(/load/) ? n[i]() : "object" == typeof i && n._init(t(this))
                            }, e
                        }();
                return t(document).on("click", o.DATA_REFRESH, (function (e) {
                    e && e.preventDefault(), r._jQueryInterface.call(t(this), "load")
                })), t.fn[e] = r._jQueryInterface, t.fn[e].Constructor = r, t.fn[e].noConflict = function () {
                    return t.fn[e] = i, r._jQueryInterface
                }, r
            }(jQuery),
            d = function (t) {
                var e = "Dropdown",
                        i = t.fn[e],
                        n = "ul.dropdown-menu",
                        s = '[data-toggle="dropdown"]',
                        o = {},
                        a = function () {
                            function e(t, e) {
                                this._config = e, this._element = t
                            }
                            return e.prototype.toggleSubmenu = function () {
                                this._element.siblings().show().toggleClass("show"), this._element.next().hasClass("show") || this._element.parents(".dropdown-menu").first().find(".show").removeClass("show").hide(), this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", (function (e) {
                                    t(".dropdown-submenu .show").removeClass("show").hide()
                                }))
                            }, e._jQueryInterface = function (i) {
                                return this.each((function () {
                                    var n = t(this).data("lte.dropdown"),
                                            s = t.extend({}, o, t(this).data());
                                    n || (n = new e(t(this), s), t(this).data("lte.dropdown", n)), "toggleSubmenu" === i && n[i]()
                                }))
                            }, e
                        }();
                return t(n + " " + s).on("click", (function (e) {
                    e.preventDefault(), e.stopPropagation(), a._jQueryInterface.call(t(this), "toggleSubmenu")
                })), t.fn[e] = a._jQueryInterface, t.fn[e].Constructor = a, t.fn[e].noConflict = function () {
                    return t.fn[e] = i, a._jQueryInterface
                }, a
            }(jQuery),
            c = function (t) {
                var e = "Toasts",
                        i = t.fn[e],
                        n = {
                            INIT: "init.lte.toasts",
                            CREATED: "created.lte.toasts",
                            REMOVED: "removed.lte.toasts"
                        },
                        s = "#toastsContainerTopRight",
                        o = "#toastsContainerTopLeft",
                        a = "#toastsContainerBottomRight",
                        r = "#toastsContainerBottomLeft",
                        l = "toasts-top-right",
                        d = "toasts-top-left",
                        c = "toasts-bottom-right",
                        h = "toasts-bottom-left",
                        f = "topRight",
                        u = "topLeft",
                        g = "bottomRight",
                        p = "bottomLeft",
                        _ = {
                            position: f,
                            fixed: !0,
                            autohide: !1,
                            autoremove: !0,
                            delay: 1e3,
                            fade: !0,
                            icon: null,
                            image: null,
                            imageAlt: null,
                            imageHeight: "25px",
                            title: null,
                            subtitle: null,
                            close: !0,
                            body: null,
                            class: null
                        },
                        m = function () {
                            function e(e, i) {
                                this._config = i, this._prepareContainer();
                                var s = t.Event(n.INIT);
                                t("body").trigger(s)
                            }
                            var i = e.prototype;
                            return i.create = function () {
                                var e = t('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
                                e.data("autohide", this._config.autohide), e.data("animation", this._config.fade), this._config.class && e.addClass(this._config.class), this._config.delay && 500 != this._config.delay && e.data("delay", this._config.delay);
                                var i = t('<div class="toast-header">');
                                if (null != this._config.image) {
                                    var s = t("<img />").addClass("rounded mr-2").attr("src", this._config.image).attr("alt", this._config.imageAlt);
                                    null != this._config.imageHeight && s.height(this._config.imageHeight).width("auto"), i.append(s)
                                }
                                if (null != this._config.icon && i.append(t("<i />").addClass("mr-2").addClass(this._config.icon)), null != this._config.title && i.append(t("<strong />").addClass("mr-auto").html(this._config.title)), null != this._config.subtitle && i.append(t("<small />").html(this._config.subtitle)), 1 == this._config.close) {
                                    var o = t('<button data-dismiss="toast" />').attr("type", "button").addClass("ml-2 mb-1 close").attr("aria-label", "Close").append('<span aria-hidden="true">&times;</span>');
                                    null == this._config.title && o.toggleClass("ml-2 ml-auto"), i.append(o)
                                }
                                e.append(i), null != this._config.body && e.append(t('<div class="toast-body" />').html(this._config.body)), t(this._getContainerId()).prepend(e);
                                var a = t.Event(n.CREATED);
                                t("body").trigger(a), e.toast("show"), this._config.autoremove && e.on("hidden.bs.toast", (function () {
                                    t(this).delay(200).remove();
                                    var e = t.Event(n.REMOVED);
                                    t("body").trigger(e)
                                }))
                            }, i._getContainerId = function () {
                                return this._config.position == f ? s : this._config.position == u ? o : this._config.position == g ? a : this._config.position == p ? r : void 0
                            }, i._prepareContainer = function () {
                                if (0 === t(this._getContainerId()).length) {
                                    var e = t("<div />").attr("id", this._getContainerId().replace("#", ""));
                                    this._config.position == f ? e.addClass(l) : this._config.position == u ? e.addClass(d) : this._config.position == g ? e.addClass(c) : this._config.position == p && e.addClass(h), t("body").append(e)
                                }
                                this._config.fixed ? t(this._getContainerId()).addClass("fixed") : t(this._getContainerId()).removeClass("fixed")
                            }, e._jQueryInterface = function (i, n) {
                                return this.each((function () {
                                    var s = t.extend({}, _, n),
                                            o = new e(t(this), s);
                                    "create" === i && o[i]()
                                }))
                            }, e
                        }();
                return t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
                    return t.fn[e] = i, m._jQueryInterface
                }, m
            }(jQuery);
    t.CardRefresh = l, t.CardWidget = r, t.ControlSidebar = e, t.DirectChat = o, t.Dropdown = d, t.Layout = i, t.PushMenu = n, t.Toasts = c, t.TodoList = a, t.Treeview = s, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));
!function (t, r) {
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return r(t, t.document, undefined, n)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = r(t, t.document, undefined, require("jquery")) : r(t, t.document, undefined, t.jQuery)
}("undefined" != typeof window ? window : this, function (gt, mt, bi, n) {
    "use strict";
    var o, f, c, a, yt = "object",
            wt = "function",
            xt = "array",
            _t = "string",
            St = "boolean",
            zt = "number",
            t = "null",
            gi = {
                c: "class",
                s: "style",
                i: "id",
                l: "length",
                p: "prototype",
                ti: "tabindex",
                oH: "offsetHeight",
                cH: "clientHeight",
                sH: "scrollHeight",
                oW: "offsetWidth",
                cW: "clientWidth",
                sW: "scrollWidth",
                hOP: "hasOwnProperty",
                bCR: "getBoundingClientRect"
            },
            Tt = (o = {}, f = {}, {
                e: c = ["-webkit-", "-moz-", "-o-", "-ms-"],
                o: a = ["WebKit", "Moz", "O", "MS"],
                u: function (n) {
                    var t = f[n];
                    if (f[gi.hOP](n))
                        return t;
                    for (var r, e, i, o = l(n), a = mt.createElement("div")[gi.s], u = 0; u < c.length; u++)
                        for (i = c[u].replace(/-/g, ""), r = [n, c[u] + n, i + o, l(i) + o], e = 0; e < r[gi.l]; e++)
                            if (a[r[e]] !== bi) {
                                t = r[e];
                                break
                            }
                    return f[n] = t
                },
                v: function (n, t, r) {
                    var e = 0,
                            i = o[n];
                    if (!o[gi.hOP](n)) {
                        for (i = gt[n]; e < a[gi.l]; e++)
                            i = i || gt[(t ? a[e] : a[e].toLowerCase()) + l(n)];
                        o[n] = i
                    }
                    return i || r
                }
            });
    function l(n) {
        return n.charAt(0).toUpperCase() + n.slice(1)
    }
    var mi = {
        wW: e(r, 0, !0),
        wH: e(r, 0),
        mO: e(Tt.v, 0, "MutationObserver", !0),
        rO: e(Tt.v, 0, "ResizeObserver", !0),
        rAF: e(Tt.v, 0, "requestAnimationFrame", !1, function (n) {
            return gt.setTimeout(n, 1e3 / 60)
        }),
        cAF: e(Tt.v, 0, "cancelAnimationFrame", !1, function (n) {
            return gt.clearTimeout(n)
        }),
        now: function () {
            return Date.now && Date.now() || (new Date).getTime()
        },
        stpP: function (n) {
            n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0
        },
        prvD: function (n) {
            n.preventDefault && n.cancelable ? n.preventDefault() : n.returnValue = !1
        },
        page: function (n) {
            var t = "page",
                    r = "client",
                    e = "X",
                    i = ((n = n.originalEvent || n).target || n.srcElement || mt).ownerDocument || mt,
                    o = i.documentElement,
                    a = i.body;
            if (n.touches === bi)
                return !n[t + e] && n[r + e] && null != n[r + e] ? {
                    x: n[r + e] + (o && o.scrollLeft || a && a.scrollLeft || 0) - (o && o.clientLeft || a && a.clientLeft || 0),
                    y: n[r + "Y"] + (o && o.scrollTop || a && a.scrollTop || 0) - (o && o.clientTop || a && a.clientTop || 0)
                } : {
                    x: n[t + e],
                    y: n.pageY
                };
            var u = n.touches[0];
            return {
                x: u[t + e],
                y: u.pageY
            }
        },
        mBtn: function (n) {
            var t = n.button;
            return n.which || t === bi ? n.which : 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0
        },
        inA: function (n, t) {
            for (var r = 0; r < t[gi.l]; r++)
                try {
                    if (t[r] === n)
                        return r
                } catch (e) {
                }
            return -1
        },
        isA: function (n) {
            var t = Array.isArray;
            return t ? t(n) : this.type(n) == xt
        },
        type: function (n) {
            return n === bi || null === n ? n + "" : Object[gi.p].toString.call(n).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        },
        bind: e
    };
    function r(n) {
        return n ? gt.innerWidth || mt.documentElement[gi.cW] || mt.body[gi.cW] : gt.innerHeight || mt.documentElement[gi.cH] || mt.body[gi.cH]
    }

    function e(n, t) {
        if (typeof n != wt)
            throw "Can't bind function!";
        var r = gi.p,
                e = Array[r].slice.call(arguments, 2),
                i = function () {},
                o = function () {
                    return n.apply(this instanceof i ? this : t, e.concat(Array[r].slice.call(arguments)))
                };
        return n[r] && (i[r] = n[r]), o[r] = new i, o
    }
    var i, u, yi, s, v, R, L, d, h, p, b, g, m, y, wi, xi = Math,
            _i = n,
            Si = (n.easing, n),
            zi = (i = [], u = "__overlayScrollbars__", function (n, t) {
                var r = arguments[gi.l];
                if (r < 1)
                    return i;
                if (t)
                    n[u] = t, i.push(n);
                else {
                    var e = mi.inA(n, i);
                    if (-1 < e) {
                        if (!(1 < r))
                            return i[e][u];
                        delete n[u], i.splice(e, 1)
                    }
                }
            }),
            w = (y = [], R = mi.type, g = {
                className: ["os-theme-dark", [t, _t]],
                resize: ["none", "n:none b:both h:horizontal v:vertical"],
                sizeAutoCapable: d = [!0, St],
                clipAlways: d,
                normalizeRTL: d,
                paddingAbsolute: h = [!(L = [St, zt, _t, xt, yt, wt, t]), St],
                autoUpdate: [null, [t, St]],
                autoUpdateInterval: [33, zt],
                nativeScrollbarsOverlaid: {
                    showNativeScrollbars: h,
                    initialize: d
                },
                overflowBehavior: {
                    x: ["scroll", b = "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"],
                    y: ["scroll", b]
                },
                scrollbars: {
                    visibility: ["auto", "v:visible h:hidden a:auto"],
                    autoHide: ["never", "n:never s:scroll l:leave m:move"],
                    autoHideDelay: [800, zt],
                    dragScrolling: d,
                    clickScrolling: h,
                    touchSupport: d,
                    snapHandle: h
                },
                textarea: {
                    dynWidth: h,
                    dynHeight: h,
                    inheritedAttrs: [
                        ["style", "class"],
                        [_t, xt, t]
                    ]
                },
                callbacks: {
                    onInitialized: p = [null, [t, wt]],
                    onInitializationWithdrawn: p,
                    onDestroyed: p,
                    onScrollStart: p,
                    onScroll: p,
                    onScrollStop: p,
                    onOverflowChanged: p,
                    onOverflowAmountChanged: p,
                    onDirectionChanged: p,
                    onContentSizeChanged: p,
                    onHostSizeChanged: p,
                    onUpdated: p
                }
            }, wi = {
                d: (m = function (i) {
                    var o = function (n) {
                        var t, r, e;
                        for (t in n)
                            n[gi.hOP](t) && (r = n[t], (e = R(r)) == xt ? n[t] = r[i ? 1 : 0] : e == yt && (n[t] = o(r)));
                        return n
                    };
                    return o(Si.extend(!0, {}, g))
                })(),
                g: m(!0),
                m: function (n, t, C, r) {
                    var e = {},
                            i = {},
                            o = Si.extend(!0, {}, n),
                            A = Si.inArray,
                            H = Si.isEmptyObject,
                            N = function (n, t, r, e, i, o) {
                                for (var a in t)
                                    if (t[gi.hOP](a) && n[gi.hOP](a)) {
                                        var u, f, c, l, s, v, d, h, p = !1,
                                                b = !1,
                                                g = t[a],
                                                m = R(g),
                                                y = m == yt,
                                                w = R(g) != xt ? [g] : g,
                                                x = r[a],
                                                _ = n[a],
                                                S = R(_),
                                                z = o ? o + "." : "",
                                                T = 'The option "' + z + a + "\" wasn't set, because",
                                                k = [],
                                                O = [];
                                        if (x = x === bi ? {} : x, y && S == yt)
                                            e[a] = {}, i[a] = {}, N(_, g, x, e[a], i[a], z + a), Si.each([n, e, i], function (n, t) {
                                                H(t[a]) && delete t[a]
                                            });
                                        else if (!y) {
                                            for (v = 0; v < w[gi.l]; v++)
                                                if (s = w[v], c = (m = R(s)) == _t && -1 === A(s, L))
                                                    for (k.push(_t), u = s.split(" "), O = O.concat(u), d = 0; d < u[gi.l]; d++) {
                                                        for (l = (f = u[d].split(":"))[0], h = 0; h < f[gi.l]; h++)
                                                            if (_ === f[h]) {
                                                                p = !0;
                                                                break
                                                            }
                                                        if (p)
                                                            break
                                                    }
                                                else if (k.push(s), S === s) {
                                                    p = !0;
                                                    break
                                                }
                                            p ? ((b = _ !== x) && (e[a] = _), (c ? A(x, f) < 0 : b) && (i[a] = c ? l : _)) : C && console.warn(T + " it doesn't accept the type [ " + S.toUpperCase() + ' ] with the value of "' + _ + '".\r\nAccepted types are: [ ' + k.join(", ").toUpperCase() + " ]." + (0 < O[length] ? "\r\nValid strings are: [ " + O.join(", ").split(":").join(", ") + " ]." : "")), delete n[a]
                                        }
                                    }
                            };
                    return N(o, t, r || {}, e, i), !H(o) && C && console.warn("The following options are discarded due to invalidity:\r\n" + gt.JSON.stringify(o, null, 2)), {
                        _: e,
                        S: i
                    }
                }
            }, (yi = gt.OverlayScrollbars = function (n, r, e) {
                if (0 === arguments[gi.l])
                    return this;
                var i, t, o = [],
                        a = Si.isPlainObject(r);
                return n ? (n = n[gi.l] != bi ? n : [n[0] || n], x(), 0 < n[gi.l] && (a ? Si.each(n, function (n, t) {
                    (i = t) !== bi && o.push(z(i, r, e, s, v))
                }) : Si.each(n, function (n, t) {
                    i = zi(t), ("!" === r && yi.valid(i) || mi.type(r) == wt && r(t, i) || r === bi) && o.push(i)
                }), t = 1 === o[gi.l] ? o[0] : o), t) : a || !r ? t : o
            }).globals = function () {
                x();
                var n = Si.extend(!0, {}, s);
                return delete n.msie, n
            }, yi.defaultOptions = function (n) {
                x();
                var t = s.defaultOptions;
                if (n === bi)
                    return Si.extend(!0, {}, t);
                s.defaultOptions = Si.extend(!0, {}, t, wi.m(n, wi.g, !0, t)._)
            }, yi.valid = function (n) {
                return n instanceof yi && !n.getState().destroyed
            }, yi.extension = function (n, t, r) {
                var e = mi.type(n) == _t,
                        i = arguments[gi.l],
                        o = 0;
                if (i < 1 || !e)
                    return Si.extend(!0, {
                        length: y[gi.l]
                    }, y);
                if (e)
                    if (mi.type(t) == wt)
                        y.push({
                            name: n,
                            extensionFactory: t,
                            defaultOptions: r
                        });
                    else
                        for (; o < y[gi.l]; o++)
                            if (y[o].name === n) {
                                if (!(1 < i))
                                    return Si.extend(!0, {}, y[o]);
                                y.splice(o, 1)
                            }
            }, yi);
    function x() {
        s = s || new _(wi.d), v = v || new S(s)
    }

    function _(n) {
        var _ = this,
                i = "overflow",
                S = Si("body"),
                z = Si('<div id="os-dummy-scrollbar-size"><div></div></div>'),
                o = z[0],
                e = Si(z.children("div").eq(0));
        S.append(z), z.hide().show();
        var t, r, a, u, f, c, l, s, v, d = T(o),
                h = {
                    x: 0 === d.x,
                    y: 0 === d.y
                },
                p = (r = gt.navigator.userAgent, u = "substring", f = r[a = "indexOf"]("MSIE "), c = r[a]("Trident/"), l = r[a]("Edge/"), s = r[a]("rv:"), v = parseInt, 0 < f ? t = v(r[u](f + 5, r[a](".", f)), 10) : 0 < c ? t = v(r[u](s + 3, r[a](".", s)), 10) : 0 < l && (t = v(r[u](l + 5, r[a](".", l)), 10)), t);
        function T(n) {
            return {
                x: n[gi.oH] - n[gi.cH],
                y: n[gi.oW] - n[gi.cW]
            }
        }
        Si.extend(_, {
            defaultOptions: n,
            msie: p,
            autoUpdateLoop: !1,
            autoUpdateRecommended: !mi.mO(),
            nativeScrollbarSize: d,
            nativeScrollbarIsOverlaid: h,
            nativeScrollbarStyling: function () {
                var n = !1;
                z.addClass("os-viewport-native-scrollbars-invisible");
                try {
                    n = "none" === z.css("scrollbar-width") && (9 < p || !p) || "none" === gt.getComputedStyle(o, "::-webkit-scrollbar").getPropertyValue("display")
                } catch (t) {
                }
                return n
            }(),
            overlayScrollbarDummySize: {
                x: 30,
                y: 30
            },
            cssCalc: function () {
                for (var n, t = mt.createElement("div")[gi.s], r = -1; r < Tt.e[gi.l]; r++)
                    if (n = r < 0 ? "calc" : Tt.e[r] + "calc", t.cssText = "width:" + n + "(1px);", t[gi.l])
                        return n;
                return null
            }(),
            restrictedMeasuring: function () {
                z.css(i, "hidden");
                var n = o[gi.sW],
                        t = o[gi.sH];
                z.css(i, "visible");
                var r = o[gi.sW],
                        e = o[gi.sH];
                return n - r != 0 || t - e != 0
            }(),
            rtlScrollBehavior: function () {
                z.css({
                    "overflow-y": "hidden",
                    "overflow-x": "scroll",
                    direction: "rtl"
                }).scrollLeft(0);
                var n = z.offset(),
                        t = e.offset();
                z.scrollLeft(-999);
                var r = e.offset();
                return {
                    i: n.left === t.left,
                    n: t.left !== r.left
                }
            }(),
            supportTransform: Tt.u("transform") !== bi,
            supportTransition: Tt.u("transition") !== bi,
            supportPassiveEvents: function () {
                var n = !1;
                try {
                    gt.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function () {
                            n = !0
                        }
                    }))
                } catch (t) {
                }
                return n
            }(),
            supportResizeObserver: !!mi.rO(),
            supportMutationObserver: !!mi.mO()
        }), z.removeAttr(gi.s).remove(),
                function () {
                    if (!h.x || !h.y) {
                        var g = xi.abs,
                                m = mi.wW(),
                                y = mi.wH(),
                                w = x();
                        Si(gt).on("resize", function () {
                            if (0 < zi().length) {
                                var n = mi.wW(),
                                        t = mi.wH(),
                                        r = n - m,
                                        e = t - y;
                                if (0 == r && 0 == e)
                                    return;
                                var i, o = xi.round(n / (m / 100)),
                                        a = xi.round(t / (y / 100)),
                                        u = g(r),
                                        f = g(e),
                                        c = g(o),
                                        l = g(a),
                                        s = x(),
                                        v = 2 < u && 2 < f,
                                        d = !function b(n, t) {
                                            var r = g(n),
                                                    e = g(t);
                                            return r !== e && r + 1 !== e && r - 1 !== e
                                        }(c, l),
                                        h = v && d && (s !== w && 0 < w),
                                        p = _.nativeScrollbarSize;
                                h && (S.append(z), i = _.nativeScrollbarSize = T(z[0]), z.remove(), p.x === i.x && p.y === i.y || Si.each(zi(), function () {
                                    zi(this) && zi(this).update("zoom")
                                })), m = n, y = t, w = s
                            }
                        })
                    }

                    function x() {
                        var n = gt.screen.deviceXDPI || 0,
                                t = gt.screen.logicalXDPI || 1;
                        return gt.devicePixelRatio || n / t
                    }
                }()
    }

    function S(r) {
        var c, e = Si.inArray,
                l = mi.now,
                s = "autoUpdate",
                v = gi.l,
                d = [],
                h = [],
                p = !1,
                b = 33,
                g = l(),
                m = function () {
                    if (0 < d[v] && p) {
                        c = mi.rAF()(function () {
                            m()
                        });
                        var n, t, r, e, i, o, a = l(),
                                u = a - g;
                        if (b < u) {
                            g = a - u % b, n = 33;
                            for (var f = 0; f < d[v]; f++)
                                (t = d[f]) !== bi && (e = (r = t.options())[s], i = xi.max(1, r.autoUpdateInterval), o = l(), (!0 === e || null === e) && o - h[f] > i && (t.update("auto"), h[f] = new Date(o += i)), n = xi.max(1, xi.min(n, i)));
                            b = n
                        }
                    } else
                        b = 33
                };
        this.add = function (n) {
            -1 === e(n, d) && (d.push(n), h.push(l()), 0 < d[v] && !p && (p = !0, r.autoUpdateLoop = p, m()))
        }, this.remove = function (n) {
            var t = e(n, d);
            -1 < t && (h.splice(t, 1), d.splice(t, 1), 0 === d[v] && p && (p = !1, r.autoUpdateLoop = p, c !== bi && (mi.cAF()(c), c = -1)))
        }
    }

    function z(r, n, t, kt, Ot) {
        var cn = mi.type,
                ln = Si.inArray,
                c = Si.each,
                Ct = new yi,
                e = Si[gi.p];
        if (lt(r)) {
            if (zi(r)) {
                var i = zi(r);
                return i.options(n), i
            }
            var At, Ht, Nt, Rt, D, Lt, Wt, Dt, I, sn, m, A, s, It, Mt, Et, jt, y, v, Ft, Pt, Ut, qt, Bt, Vt, Xt, Yt, $t, Kt, o, a, Gt, Jt, Qt, u, M, d, E, Zt, nr, tr, rr, er, ir, or, ar, ur, fr, cr, f, l, h, p, b, g, w, H, lr, sr, vr, N, dr, hr, pr, br, gr, mr, yr, wr, xr, _r, Sr, zr, Tr, kr, Or, Cr, R, Ar, Hr, Nr, Rr, Lr, Wr, Dr, Ir, x, _, Mr, Er, jr, Fr, Pr, Ur, qr, Br, Vr, Xr, Yr, $r, Kr, Gr, Jr, S, z, T, k, Qr, Zr, O, C, ne, te, re, ee, ie, j, F, oe, ae, ue, fe, ce = {},
                    vn = {},
                    dn = {},
                    le = {},
                    se = {},
                    L = "-hidden",
                    ve = "margin-",
                    de = "padding-",
                    he = "border-",
                    pe = "top",
                    be = "right",
                    ge = "bottom",
                    me = "left",
                    ye = "min-",
                    we = "max-",
                    xe = "width",
                    _e = "height",
                    Se = "float",
                    ze = "",
                    Te = "auto",
                    hn = "sync",
                    ke = "scroll",
                    Oe = "100%",
                    pn = "x",
                    bn = "y",
                    W = ".",
                    Ce = " ",
                    P = "scrollbar",
                    U = "-horizontal",
                    q = "-vertical",
                    Ae = ke + "Left",
                    He = ke + "Top",
                    B = "mousedown touchstart",
                    V = "mouseup touchend touchcancel",
                    X = "mousemove touchmove",
                    Y = "mouseenter",
                    $ = "mouseleave",
                    K = "keydown",
                    G = "keyup",
                    J = "selectstart",
                    Q = "transitionend webkitTransitionEnd oTransitionEnd",
                    Z = "__overlayScrollbarsRO__",
                    nn = "os-",
                    tn = "os-html",
                    rn = "os-host",
                    en = rn + "-textarea",
                    on = rn + "-" + P + U + L,
                    an = rn + "-" + P + q + L,
                    un = rn + "-transition",
                    Ne = rn + "-rtl",
                    Re = rn + "-resize-disabled",
                    Le = rn + "-scrolling",
                    We = rn + "-overflow",
                    De = We + "-x",
                    Ie = We + "-y",
                    fn = "os-textarea",
                    gn = fn + "-cover",
                    mn = "os-padding",
                    yn = "os-viewport",
                    Me = yn + "-native-scrollbars-invisible",
                    wn = yn + "-native-scrollbars-overlaid",
                    xn = "os-content",
                    Ee = "os-content-arrange",
                    je = "os-content-glue",
                    Fe = "os-size-auto-observer",
                    _n = "os-resize-observer",
                    Sn = "os-resize-observer-item",
                    zn = Sn + "-final",
                    Tn = "os-text-inherit",
                    kn = nn + P,
                    On = kn + "-track",
                    Cn = On + "-off",
                    An = kn + "-handle",
                    Hn = An + "-off",
                    Nn = kn + "-unusable",
                    Rn = kn + "-" + Te + L,
                    Ln = kn + "-corner",
                    Pe = Ln + "-resize",
                    Ue = Pe + "-both",
                    qe = Pe + U,
                    Be = Pe + q,
                    Wn = kn + U,
                    Dn = kn + q,
                    In = "os-dragging",
                    Ve = "os-theme-none",
                    Mn = [Me, wn, Cn, Hn, Nn, Rn, Pe, Ue, qe, Be, In].join(Ce),
                    En = [],
                    jn = [gi.ti],
                    Fn = {},
                    Xe = {},
                    Ye = 42,
                    Pn = [],
                    Un = {},
                    qn = ["wrap", "cols", "rows"],
                    Bn = [gi.i, gi.c, gi.s, "open"].concat(jn),
                    Vn = [];
            return Ct.sleep = function () {
                Kt = !0
            }, Ct.update = function (n) {
                if (!Mt) {
                    var t, r, e, i, o, a = cn(n) == _t;
                    return a ? n === Te ? (t = function u() {
                        if (!Kt && !Qr) {
                            var r, e, i, o = [],
                                    n = [{
                                            z: nr,
                                            T: Bn.concat(":visible")
                                        }, {
                                            z: Et ? Zt : bi,
                                            T: qn
                                        }];
                            return c(n, function (n, t) {
                                (r = t.z) && c(t.T, function (n, t) {
                                    e = ":" === t.charAt(0) ? r.is(t) : r.attr(t), i = Un[t], vi(e, i) && o.push(t), Un[t] = e
                                })
                            }), rt(o), 0 < o[gi.l]
                        }
                    }(), r = function f() {
                        if (Kt)
                            return !1;
                        var n, t, r, e, i = li(),
                                o = Et && xr && !Vr ? Zt.val().length : 0,
                                a = !Qr && xr && !Et,
                                u = {};
                        return a && (n = or.css(Se), u[Se] = $t ? be : me, u[xe] = Te, or.css(u)), e = {
                            w: i[gi.sW] + o,
                            h: i[gi.sH] + o
                        }, a && (u[Se] = n, u[xe] = Oe, or.css(u)), t = Qe(), r = vi(e, x), x = e, r || t
                    }(), (e = t || r) && ni({
                        k: r,
                        O: It ? bi : Gt
                    })) : n === hn ? Qr ? (i = T(S.takeRecords()), o = k(z.takeRecords())) : i = Ct.update(Te) : "zoom" === n && ni({
                        C: !0,
                        k: !0
                    }) : (n = Kt || n, Kt = !1, Ct.update(hn) && !n || ni({
                        A: n
                    })), Et || or.find("img").each(function (n, t) {
                        -1 === mi.inA(t, Pn) && Si(t).off("load", nt).on("load", nt)
                    }), e || i || o
                }
            }, Ct.options = function (n, t) {
                var r, e = {};
                if (Si.isEmptyObject(n) || !Si.isPlainObject(n)) {
                    if (cn(n) != _t)
                        return a;
                    if (!(1 < arguments.length))
                        return dt(a, n);
                    !function f(n, t, r) {
                        for (var e = t.split(W), i = e.length, o = 0, a = {}, u = a; o < i; o++)
                            a = a[e[o]] = o + 1 < i ? {} : r;
                        Si.extend(n, u, !0)
                    }(e, n, t), r = et(e)
                } else
                    r = et(n);
                Si.isEmptyObject(r) || ni({
                    O: r
                })
            }, Ct.destroy = function () {
                if (!Mt) {
                    for (var n in Ot.remove(Ct), Ge(), $e(rr), $e(tr), Fn)
                        Ct.removeExt(n);
                    for (; 0 < Vn[gi.l]; )
                        Vn.pop()();
                    Je(!0), ur && ht(ur), ar && ht(ar), Pt && ht(tr), at(!0), ft(!0), it(!0);
                    for (var t = 0; t < Pn[gi.l]; t++)
                        Si(Pn[t]).off("load", nt);
                    Pn = bi, Kt = Mt = !0, zi(r, 0), ui("onDestroyed")
                }
            }, Ct.scroll = function (n, t, r, e) {
                if (0 === arguments.length || n === bi) {
                    var i = Ur && $t && Nt.i,
                            o = Ur && $t && Nt.n,
                            a = vn.H,
                            u = vn.N,
                            f = vn.R;
                    return u = i ? 1 - u : u, a = i ? f - a : a, f *= o ? -1 : 1, {
                        position: {
                            x: a *= o ? -1 : 1,
                            y: dn.H
                        },
                        ratio: {
                            x: u,
                            y: dn.N
                        },
                        max: {
                            x: f,
                            y: dn.R
                        },
                        handleOffset: {
                            x: vn.L,
                            y: dn.L
                        },
                        handleLength: {
                            x: vn.W,
                            y: dn.W
                        },
                        handleLengthRatio: {
                            x: vn.D,
                            y: dn.D
                        },
                        trackLength: {
                            x: vn.I,
                            y: dn.I
                        },
                        snappedHandleOffset: {
                            x: vn.M,
                            y: dn.M
                        },
                        isRTL: $t,
                        isRTLNormalized: Ur
                    }
                }
                Ct.update(hn);
                var c, l, s, v, d, m, y, h, p, w = Ur,
                        b = [pn, me, "l"],
                        g = [bn, pe, "t"],
                        x = ["+=", "-=", "*=", "/="],
                        _ = cn(t) == yt,
                        S = _ ? t.complete : e,
                        z = {},
                        T = {},
                        k = "begin",
                        O = "nearest",
                        C = "never",
                        A = "ifneeded",
                        H = gi.l,
                        N = [pn, bn, "xy", "yx"],
                        R = [k, "end", "center", O],
                        L = ["always", C, A],
                        W = n[gi.hOP]("el"),
                        D = W ? n.el : n,
                        I = !!(D instanceof Si || _i) && D instanceof _i,
                        M = !I && lt(D),
                        E = function () {
                            l && ii(!0), s && ii(!1)
                        },
                        j = cn(S) != wt ? bi : function () {
                    E(), S()
                };
                function F(n, t) {
                    for (c = 0; c < t[H]; c++)
                        if (n === t[c])
                            return 1
                }

                function P(n, t) {
                    var r = n ? b : g;
                    if (t = cn(t) == _t || cn(t) == zt ? [t, t] : t, cn(t) == xt)
                        return n ? t[0] : t[1];
                    if (cn(t) == yt)
                        for (c = 0; c < r[H]; c++)
                            if (r[c] in t)
                                return t[r[c]]
                }

                function U(n, t) {
                    var r, e, i, o, a = cn(t) == _t,
                            u = n ? vn : dn,
                            f = u.H,
                            c = u.R,
                            l = $t && n,
                            s = l && Nt.n && !w,
                            v = "replace",
                            d = eval;
                    if ((e = a ? (2 < t[H] && (o = t.substr(0, 2), -1 < ln(o, x) && (r = o)), t = (t = r ? t.substr(2) : t)[v](/min/g, 0)[v](/</g, 0)[v](/max/g, (s ? "-" : ze) + Oe)[v](/>/g, (s ? "-" : ze) + Oe)[v](/px/g, ze)[v](/%/g, " * " + c * (l && Nt.n ? -1 : 1) / 100)[v](/vw/g, " * " + le.w)[v](/vh/g, " * " + le.h), ci(isNaN(t) ? ci(d(t), !0).toFixed() : t)) : t) !== bi && !isNaN(e) && cn(e) == zt) {
                        var h = w && l,
                                p = f * (h && Nt.n ? -1 : 1),
                                b = h && Nt.i,
                                g = h && Nt.n;
                        switch (p = b ? c - p : p, r) {
                            case "+=":
                                i = p + e;
                                break;
                            case "-=":
                                i = p - e;
                                break;
                            case "*=":
                                i = p * e;
                                break;
                            case "/=":
                                i = p / e;
                                break;
                            default:
                                i = e
                        }
                        i = b ? c - i : i, i *= g ? -1 : 1, i = l && Nt.n ? xi.min(0, xi.max(c, i)) : xi.max(0, xi.min(c, i))
                    }
                    return i === f ? bi : i
                }

                function q(n, t, r, e) {
                    var i, o, a = [r, r],
                            u = cn(n);
                    if (u == t)
                        n = [n, n];
                    else if (u == xt) {
                        if (2 < (i = n[H]) || i < 1)
                            n = a;
                        else
                            for (1 === i && (n[1] = r), c = 0; c < i; c++)
                                if (o = n[c], cn(o) != t || !F(o, e)) {
                                    n = a;
                                    break
                                }
                    } else
                        n = u == yt ? [n[pn] || r, n[bn] || r] : a;
                    return {
                        x: n[0],
                        y: n[1]
                    }
                }

                function B(n) {
                    var t, r, e = [],
                            i = [pe, be, ge, me];
                    for (c = 0; c < n[H] && c !== i[H]; c++)
                        t = n[c], (r = cn(t)) == St ? e.push(t ? ci(p.css(ve + i[c])) : 0) : e.push(r == zt ? t : 0);
                    return e
                }
                if (I || M) {
                    var V, X = W ? n.margin : 0,
                            Y = W ? n.axis : 0,
                            $ = W ? n.scroll : 0,
                            K = W ? n.block : 0,
                            G = [0, 0, 0, 0],
                            J = cn(X);
                    if (0 < (p = I ? D : Si(D))[H]) {
                        X = J == zt || J == St ? B([X, X, X, X]) : J == xt ? 2 === (V = X[H]) ? B([X[0], X[1], X[0], X[1]]) : 4 <= V ? B(X) : G : J == yt ? B([X[pe], X[be], X[ge], X[me]]) : G, d = F(Y, N) ? Y : "xy", m = q($, _t, "always", L), y = q(K, _t, k, R), h = X;
                        var Q = vn.H,
                                Z = dn.H,
                                nn = er.offset(),
                                tn = p.offset(),
                                rn = {
                                    x: m.x == C || d == bn,
                                    y: m.y == C || d == pn
                                };
                        tn[pe] -= h[0], tn[me] -= h[3];
                        var en = {
                            x: xi.round(tn[me] - nn[me] + Q),
                            y: xi.round(tn[pe] - nn[pe] + Z)
                        };
                        if ($t && (Nt.n || Nt.i || (en.x = xi.round(nn[me] - tn[me] + Q)), Nt.n && w && (en.x *= -1), Nt.i && w && (en.x = xi.round(nn[me] - tn[me] + (vn.R - Q)))), y.x != k || y.y != k || m.x == A || m.y == A || $t) {
                            var on = p[0],
                                    an = sn ? on[gi.bCR]() : {
                                width: on[gi.oW],
                                height: on[gi.oH]
                            },
                                    un = {
                                        w: an[xe] + h[3] + h[1],
                                        h: an[_e] + h[0] + h[2]
                                    },
                                    fn = function (n) {
                                        var t = ai(n),
                                                r = t.j,
                                                e = t.F,
                                                i = t.P,
                                                o = y[i] == (n && $t ? k : "end"),
                                                a = "center" == y[i],
                                                u = y[i] == O,
                                                f = m[i] == C,
                                                c = m[i] == A,
                                                l = le[r],
                                                s = nn[e],
                                                v = un[r],
                                                d = tn[e],
                                                h = a ? 2 : 1,
                                                p = d + v / 2,
                                                b = s + l / 2,
                                                g = v <= l && s <= d && d + v <= s + l;
                                        f ? rn[i] = !0 : rn[i] || ((u || c) && (rn[i] = c && g, o = v < l ? b < p : p < b), en[i] -= o || a ? (l / h - v / h) * (n && $t && w ? -1 : 1) : 0)
                                    };
                            fn(!0), fn(!1)
                        }
                        rn.y && delete en.y, rn.x && delete en.x, n = en
                    }
                }
                z[Ae] = U(!0, P(!0, n)), z[He] = U(!1, P(!1, n)), l = z[Ae] !== bi, s = z[He] !== bi, (l || s) && (0 < t || _) ? _ ? (t.complete = j, ir.animate(z, t)) : (v = {
                    duration: t,
                    complete: j
                }, cn(r) == xt || Si.isPlainObject(r) ? (T[Ae] = r[0] || r.x, T[He] = r[1] || r.y, v.specialEasing = T) : v.easing = r, ir.animate(z, v)) : (l && ir[Ae](z[Ae]), s && ir[He](z[He]), E())
            }, Ct.scrollStop = function (n, t, r) {
                return ir.stop(n, t, r), Ct
            }, Ct.getElements = function (n) {
                var t = {
                    target: lr,
                    host: sr,
                    padding: dr,
                    viewport: hr,
                    content: pr,
                    scrollbarHorizontal: {
                        scrollbar: f[0],
                        track: l[0],
                        handle: h[0]
                    },
                    scrollbarVertical: {
                        scrollbar: p[0],
                        track: b[0],
                        handle: g[0]
                    },
                    scrollbarCorner: cr[0]
                };
                return cn(n) == _t ? dt(t, n) : t
            }, Ct.getState = function (n) {
                function t(n) {
                    if (!Si.isPlainObject(n))
                        return n;
                    var r = di({}, n),
                            t = function (n, t) {
                                r[gi.hOP](n) && (r[t] = r[n], delete r[n])
                            };
                    return t("w", xe), t("h", _e), delete r.c, r
                }
                var r = {
                    destroyed: !!t(Mt),
                    sleeping: !!t(Kt),
                    autoUpdate: t(!Qr),
                    widthAuto: t(xr),
                    heightAuto: t(_r),
                    padding: t(Tr),
                    overflowAmount: t(Lr),
                    hideOverflow: t(wr),
                    hasOverflow: t(yr),
                    contentScrollSize: t(gr),
                    viewportSize: t(le),
                    hostSize: t(br),
                    documentMixed: t(y)
                };
                return cn(n) == _t ? dt(r, n) : r
            }, Ct.ext = function (n) {
                var t, r = "added removed on contract".split(" "),
                        e = 0;
                if (cn(n) == _t) {
                    if (Fn[gi.hOP](n))
                        for (t = di({}, Fn[n]); e < r.length; e++)
                            delete t[r[e]]
                } else
                    for (e in t = {}, Fn)
                        t[e] = di({}, Ct.ext(e));
                return t
            }, Ct.addExt = function (n, t) {
                var r, e, i, o, a = yi.extension(n),
                        u = !0;
                if (a) {
                    if (Fn[gi.hOP](n))
                        return Ct.ext(n);
                    if ((r = a.extensionFactory.call(Ct, di({}, a.defaultOptions), Si, mi)) && (i = r.contract, cn(i) == wt && (o = i(gt), u = cn(o) == St ? o : u), u))
                        return e = (Fn[n] = r).added, cn(e) == wt && e(t), Ct.ext(n)
                } else
                    console.warn('A extension with the name "' + n + "\" isn't registered.")
            }, Ct.removeExt = function (n) {
                var t, r = Fn[n];
                return !!r && (delete Fn[n], t = r.removed, cn(t) == wt && t(), !0)
            }, yi.valid(function bt(n, t, r) {
                var e, i;
                return o = kt.defaultOptions, Lt = kt.nativeScrollbarStyling, Dt = di({}, kt.nativeScrollbarSize), At = di({}, kt.nativeScrollbarIsOverlaid), Ht = di({}, kt.overlayScrollbarDummySize), Nt = di({}, kt.rtlScrollBehavior), et(di({}, o, t)), Wt = kt.cssCalc, D = kt.msie, Rt = kt.autoUpdateRecommended, I = kt.supportTransition, sn = kt.supportTransform, m = kt.supportPassiveEvents, A = kt.supportResizeObserver, s = kt.supportMutationObserver, kt.restrictedMeasuring, M = Si(n.ownerDocument), H = M[0], u = Si(H.defaultView || H.parentWindow), w = u[0], d = pt(M, "html"), E = pt(d, "body"), Zt = Si(n), lr = Zt[0], Et = Zt.is("textarea"), jt = Zt.is("body"), y = H !== mt, v = Et ? Zt.hasClass(fn) && Zt.parent().hasClass(xn) : Zt.hasClass(rn) && Zt.children(W + mn)[gi.l], At.x && At.y && !Gt.nativeScrollbarsOverlaid.initialize ? (ui("onInitializationWithdrawn"), v && (it(!0), at(!0), ft(!0)), Kt = Mt = !0) : (jt && ((e = {}).l = xi.max(Zt[Ae](), d[Ae](), u[Ae]()), e.t = xi.max(Zt[He](), d[He](), u[He]()), i = function () {
                    ir.removeAttr(gi.ti), Xn(ir, B, i, !0, !0)
                }), it(), at(), ft(), ot(), ut(!0), ut(!1), function l() {
                    var r, t = w.top !== w,
                            e = {},
                            i = {},
                            o = {};
                    function a(n) {
                        if (f(n)) {
                            var t = c(n),
                                    r = {};
                            (ue || ae) && (r[xe] = i.w + (t.x - e.x) * o.x), (fe || ae) && (r[_e] = i.h + (t.y - e.y) * o.y), nr.css(r), mi.stpP(n)
                        } else
                            u(n)
                    }

                    function u(n) {
                        var t = n !== bi;
                        Xn(M, [J, X, V], [Zn, a, u], !0), pi(E, In), cr.releaseCapture && cr.releaseCapture(), t && (r && Ke(), Ct.update(Te)), r = !1
                    }

                    function f(n) {
                        var t = (n.originalEvent || n).touches !== bi;
                        return !Kt && !Mt && (1 === mi.mBtn(n) || t)
                    }

                    function c(n) {
                        return D && t ? {
                            x: n.screenX,
                            y: n.screenY
                        } : mi.page(n)
                    }
                    Yn(cr, B, function (n) {
                        f(n) && !oe && (Qr && (r = !0, Ge()), e = c(n), i.w = sr[gi.oW] - (Ft ? 0 : Ut), i.h = sr[gi.oH] - (Ft ? 0 : qt), o = ct(), Xn(M, [J, X, V], [Zn, a, u]), hi(E, In), cr.setCapture && cr.setCapture(), mi.prvD(n), mi.stpP(n))
                    })
                }(), $n(), $e(rr, Kn), jt && (ir[Ae](e.l)[He](e.t), mt.activeElement == n && hr.focus && (ir.attr(gi.ti, "-1"), hr.focus(), Xn(ir, B, i, !1, !0))), Ct.update(Te), It = !0, ui("onInitialized"), c(En, function (n, t) {
                    ui(t.n, t.a)
                }), En = [], cn(r) == _t && (r = [r]), mi.isA(r) ? c(r, function (n, t) {
                    Ct.addExt(t)
                }) : Si.isPlainObject(r) && c(r, function (n, t) {
                    Ct.addExt(n, t)
                }), setTimeout(function () {
                    I && !Mt && hi(nr, un)
                }, 333)), Ct
            }(r, n, t)) && zi(r, Ct), Ct
        }

        function Xn(n, t, r, e, i) {
            var o = cn(t) == xt && cn(r) == xt,
                    a = e ? "removeEventListener" : "addEventListener",
                    u = e ? "off" : "on",
                    f = !o && t.split(Ce),
                    c = 0;
            if (o)
                for (; c < t[gi.l]; c++)
                    Xn(n, t[c], r[c], e);
            else
                for (; c < f[gi.l]; c++)
                    m ? n[0][a](f[c], r, {
                        passive: i || !1
                    }) : n[u](f[c], r)
        }

        function Yn(n, t, r, e) {
            Xn(n, t, r, !1, e), Vn.push(mi.bind(Xn, 0, n, t, r, !0, e))
        }

        function $e(n, t) {
            if (n) {
                var r = mi.rO(),
                        e = "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart",
                        i = "childNodes",
                        o = 3333333,
                        a = function () {
                            n[He](o)[Ae]($t ? Nt.n ? -o : Nt.i ? 0 : o : o), t()
                        };
                if (t) {
                    if (A)
                        ((O = n.addClass("observed").append(si(_n)).contents()[0])[Z] = new r(a)).observe(O);
                    else if (9 < D || !Rt) {
                        n.prepend(si(_n, si({
                            c: Sn,
                            dir: "ltr"
                        }, si(Sn, si(zn)) + si(Sn, si({
                            c: zn,
                            style: "width: 200%; height: 200%"
                        })))));
                        var u, f, c, l, s = n[0][i][0][i][0],
                                v = Si(s[i][1]),
                                d = Si(s[i][0]),
                                h = Si(d[0][i][0]),
                                p = s[gi.oW],
                                b = s[gi.oH],
                                g = kt.nativeScrollbarSize,
                                m = function () {
                                    d[Ae](o)[He](o), v[Ae](o)[He](o)
                                },
                                y = function () {
                                    f = 0, u && (p = c, b = l, a())
                                },
                                w = function (n) {
                                    return c = s[gi.oW], l = s[gi.oH], u = c != p || l != b, n && u && !f ? (mi.cAF()(f), f = mi.rAF()(y)) : n || y(), m(), n && (mi.prvD(n), mi.stpP(n)), !1
                                },
                                x = {},
                                _ = {};
                        fi(_, ze, [-2 * (g.y + 1), -2 * g.x, -2 * g.y, -2 * (g.x + 1)]), Si(s).css(_), d.on(ke, w), v.on(ke, w), n.on(e, function () {
                            w(!1)
                        }), x[xe] = o, x[_e] = o, h.css(x), m()
                    } else {
                        var S = H.attachEvent,
                                z = D !== bi;
                        if (S)
                            n.prepend(si(_n)), pt(n, W + _n)[0].attachEvent("onresize", a);
                        else {
                            var T = H.createElement(yt);
                            T.setAttribute(gi.ti, "-1"), T.setAttribute(gi.c, _n), T.onload = function () {
                                var n = this.contentDocument.defaultView;
                                n.addEventListener("resize", a), n.document.documentElement.style.display = "none"
                            }, T.type = "text/html", z && n.prepend(T), T.data = "about:blank", z || n.prepend(T), n.on(e, a)
                        }
                    }
                    if (n[0] === N) {
                        var k = function () {
                            var n = nr.css("direction"),
                                    t = {},
                                    r = 0,
                                    e = !1;
                            return n !== R && (r = "ltr" === n ? (t[me] = 0, t[be] = Te, o) : (t[me] = Te, t[be] = 0, Nt.n ? -o : Nt.i ? 0 : o), rr.children().eq(0).css(t), rr[Ae](r)[He](o), R = n, e = !0), e
                        };
                        k(), Yn(n, ke, function (n) {
                            return k() && ni(), mi.prvD(n), mi.stpP(n), !1
                        })
                    }
                } else if (A) {
                    var O, C = (O = n.contents()[0])[Z];
                    C && (C.disconnect(), delete O[Z])
                } else
                    ht(n.children(W + _n).eq(0))
            }
        }

        function $n() {
            if (s) {
                var i, o, r, e, a, u, n = mi.mO(),
                        f = mi.now();
                k = function (n) {
                    var t = !1;
                    return It && !Kt && (c(n, function () {
                        return !(t = function o(n) {
                            var t = n.attributeName,
                                    r = n.target,
                                    e = n.type,
                                    i = "closest";
                            if (r === pr)
                                return null === t;
                            if ("attributes" === e && (t === gi.c || t === gi.s) && !Et) {
                                if (t === gi.c && Si(r).hasClass(rn))
                                    return tt(n.oldValue, r.getAttribute(gi.c));
                                if (typeof r[i] != wt)
                                    return !0;
                                if (null !== r[i](W + _n) || null !== r[i](W + kn) || null !== r[i](W + Ln))
                                    return !1
                            }
                            return !0
                        }(this))
                    }), t && (e = mi.now(), a = _r || xr, u = function () {
                        Mt || (f = e, Et && Ze(), a ? ni() : Ct.update(Te))
                    }, clearTimeout(r), 11 < e - f || !a ? u() : r = setTimeout(u, 11))), t
                }, S = new n(T = function (n) {
                    var t, r = !1,
                            e = [];
                    return It && !Kt && (c(n, function () {
                        i = (t = this).target, o = t.attributeName, r = r || (o === gi.c ? tt(t.oldValue, i.className) : o !== gi.s || t.oldValue !== i[gi.s].cssText), e.push(o)
                    }), rt(e), r && Ct.update(Te)), r
                }), z = new n(k)
            }
        }

        function Ke() {
            s && !Qr && (S.observe(sr, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: Bn
            }), z.observe(Et ? lr : pr, {
                attributes: !0,
                attributeOldValue: !0,
                subtree: !Et,
                childList: !Et,
                characterData: !Et,
                attributeFilter: Et ? qn : Bn
            }), Qr = !0)
        }

        function Ge() {
            s && Qr && (S.disconnect(), z.disconnect(), Qr = !1)
        }

        function Kn() {
            if (!Kt) {
                var n, t = {
                    w: N[gi.sW],
                    h: N[gi.sH]
                };
                n = vi(t, _), _ = t, n && ni({
                    C: !0
                })
            }
        }

        function Gn() {
            ie && ri(!0)
        }

        function Jn() {
            ie && !E.hasClass(In) && ri(!1)
        }

        function Qn() {
            ee && (ri(!0), clearTimeout(C), C = setTimeout(function () {
                ee && !Mt && ri(!1)
            }, 100))
        }

        function Zn(n) {
            return mi.prvD(n), !1
        }

        function nt() {
            ni({
                k: !0
            })
        }

        function Je(n) {
            Xn(nr, X, Qn, !ee || n, !0), Xn(nr, [Y, $], [Gn, Jn], !!ee || n, !0), It || n || nr.one("mouseover", Gn)
        }

        function Qe() {
            var n = {};
            return jt && ar && (n.w = ci(ar.css(ye + xe)), n.h = ci(ar.css(ye + _e)), n.c = vi(n, Gr), n.f = !0), !!(Gr = n).c
        }

        function tt(n, t) {
            var r = t !== bi && null !== t ? t.split(Ce) : ze,
                    e = n !== bi && null !== n ? n.split(Ce) : ze;
            if (r === ze && e === ze)
                return !1;
            var i, o, a, u, f, c = function h(n, t) {
                var r, e, i = [],
                        o = [];
                for (r = 0; r < n.length; r++)
                    i[n[r]] = !0;
                for (r = 0; r < t.length; r++)
                    i[t[r]] ? delete i[t[r]] : i[t[r]] = !0;
                for (e in i)
                    o.push(e);
                return o
            }(e, r),
                    l = !1,
                    s = Br !== bi && null !== Br ? Br.split(Ce) : [ze],
                    v = qr !== bi && null !== qr ? qr.split(Ce) : [ze],
                    d = ln(Ve, c);
            for ( - 1 < d && c.splice(d, 1), o = 0; o < c.length; o++)
                if (0 !== (i = c[o]).indexOf(rn)) {
                    for (f = u = !0, a = 0; a < s.length; a++)
                        if (i === s[a]) {
                            u = !1;
                            break
                        }
                    for (a = 0; a < v.length; a++)
                        if (i === v[a]) {
                            f = !1;
                            break
                        }
                    if (u && f) {
                        l = !0;
                        break
                    }
                }
            return l
        }

        function rt(n) {
            c(n = n || jn, function (n, t) {
                if (-1 < mi.inA(t, jn)) {
                    var r = Zt.attr(t);
                    cn(r) == _t ? ir.attr(t, r) : ir.removeAttr(t)
                }
            })
        }

        function Ze() {
            if (!Kt) {
                var n, t, r, e, i = !Vr,
                        o = le.w,
                        a = le.h,
                        u = {},
                        f = xr || i;
                return u[ye + xe] = ze, u[ye + _e] = ze, u[xe] = Te, Zt.css(u), n = lr[gi.oW], t = f ? xi.max(n, lr[gi.sW] - 1) : 1, u[xe] = xr ? Te : Oe, u[ye + xe] = Oe, u[_e] = Te, Zt.css(u), r = lr[gi.oH], e = xi.max(r, lr[gi.sH] - 1), u[xe] = t, u[_e] = e, fr.css(u), u[ye + xe] = o, u[ye + _e] = a, Zt.css(u), {
                    U: n,
                    q: r,
                    B: t,
                    V: e
                }
            }
        }

        function ni(n) {
            clearTimeout(Qt), n = n || {}, Xe.C |= n.C, Xe.k |= n.k, Xe.A |= n.A;
            var t, r = mi.now(),
                    e = !!Xe.C,
                    i = !!Xe.k,
                    o = !!Xe.A,
                    a = n.O,
                    u = 0 < Ye && It && !Mt && !o && !a && r - Jt < Ye && !_r && !xr;
            if (u && (Qt = setTimeout(ni, Ye)), !(Mt || u || Kt && !a || It && !o && (t = nr.is(":hidden")) || "inline" === nr.css("display"))) {
                Jt = r, Xe = {}, !Lt || At.x && At.y ? Dt = di({}, kt.nativeScrollbarSize) : (Dt.x = 0, Dt.y = 0), se = {
                    x: 3 * (Dt.x + (At.x ? 0 : 3)),
                    y: 3 * (Dt.y + (At.y ? 0 : 3))
                };
                var f = function () {
                    return vi.apply(this, [].slice.call(arguments).concat([o]))
                },
                        c = {
                            x: ir[Ae](),
                            y: ir[He]()
                        },
                        l = Gt.scrollbars,
                        s = Gt.textarea,
                        v = l.visibility,
                        d = f(v, Mr),
                        h = l.autoHide,
                        p = f(h, Er),
                        b = l.clickScrolling,
                        g = f(b, jr),
                        m = l.dragScrolling,
                        y = f(m, Fr),
                        w = Gt.className,
                        x = f(w, qr),
                        _ = Gt.resize,
                        S = f(_, Pr) && !jt,
                        z = Gt.paddingAbsolute,
                        T = f(z, Ar),
                        k = Gt.clipAlways,
                        O = f(k, Hr),
                        C = Gt.sizeAutoCapable && !jt,
                        A = f(C, Ir),
                        H = Gt.nativeScrollbarsOverlaid.showNativeScrollbars,
                        N = f(H, Wr),
                        R = Gt.autoUpdate,
                        L = f(R, Dr),
                        W = Gt.overflowBehavior,
                        D = f(W, Rr, o),
                        I = s.dynWidth,
                        M = f(Kr, I),
                        E = s.dynHeight,
                        j = f($r, E);
                if (te = "n" === h, re = "s" === h, ee = "m" === h, ie = "l" === h, ne = l.autoHideDelay, Br = qr, oe = "n" === _, ae = "b" === _, ue = "h" === _, fe = "v" === _, Ur = Gt.normalizeRTL, H = H && At.x && At.y, Mr = v, Er = h, jr = b, Fr = m, qr = w, Pr = _, Ar = z, Hr = k, Ir = C, Wr = H, Dr = R, Rr = di({}, W), Kr = I, $r = E, yr = yr || {
                    x: !1,
                    y: !1
                }, x && (pi(nr, Br + Ce + Ve), hi(nr, w !== bi && null !== w && 0 < w.length ? w : Ve)), L && (!0 === R || null === R && Rt ? (Ge(), Ot.add(Ct)) : (Ot.remove(Ct), Ke())), A)
                    if (C)
                        if (ur ? ur.show() : (ur = Si(si(je)), er.before(ur)), Pt)
                            tr.show();
                        else {
                            tr = Si(si(Fe)), vr = tr[0], ur.before(tr);
                            var F = {
                                w: -1,
                                h: -1
                            };
                            $e(tr, function () {
                                var n = {
                                    w: vr[gi.oW],
                                    h: vr[gi.oH]
                                };
                                vi(n, F) && (It && _r && 0 < n.h || xr && 0 < n.w || It && !_r && 0 === n.h || !xr && 0 === n.w) && ni(), F = n
                            }), Pt = !0, null !== Wt && tr.css(_e, Wt + "(100% + 1px)")
                        }
                    else
                        Pt && tr.hide(), ur && ur.hide();
                o && (rr.find("*").trigger(ke), Pt && tr.find("*").trigger(ke));
                f(t = t === bi ? nr.is(":hidden") : t, Jr);
                var P, U = !!Et && "off" !== Zt.attr("wrap"),
                        q = f(U, Vr),
                        B = nr.css("direction"),
                        V = f(B, Cr),
                        X = nr.css("box-sizing"),
                        Y = f(X, zr),
                        $ = {
                            c: o,
                            t: ci(nr.css(de + pe)),
                            r: ci(nr.css(de + be)),
                            b: ci(nr.css(de + ge)),
                            l: ci(nr.css(de + me))
                        };
                try {
                    P = Pt ? vr[gi.bCR]() : null
                } catch (zt) {
                    return
                }
                Ft = "border-box" === X;
                var K = ($t = "rtl" === B) ? me : be,
                        G = $t ? be : me,
                        J = !1,
                        Q = !(!Pt || "none" === nr.css(Se)) && (0 === xi.round(P.right - P.left) && (!!z || 0 < sr[gi.cW] - Ut));
                if (C && !Q) {
                    var Z = sr[gi.oW],
                            nn = ur.css(xe);
                    ur.css(xe, Te);
                    var tn = sr[gi.oW];
                    ur.css(xe, nn), (J = Z !== tn) || (ur.css(xe, Z + 1), tn = sr[gi.oW], ur.css(xe, nn), J = Z !== tn)
                }
                var rn = (Q || J) && C && !t,
                        en = f(rn, xr),
                        on = !rn && xr,
                        an = !(!Pt || !C || t) && 0 === xi.round(P.bottom - P.top),
                        un = f(an, _r),
                        fn = !an && _r,
                        cn = "-" + xe,
                        ln = rn && Ft || !Ft,
                        sn = an && Ft || !Ft,
                        vn = {
                            c: o,
                            t: sn ? ci(nr.css(he + pe + cn), !0) : 0,
                            r: ln ? ci(nr.css(he + be + cn), !0) : 0,
                            b: sn ? ci(nr.css(he + ge + cn), !0) : 0,
                            l: ln ? ci(nr.css(he + me + cn), !0) : 0
                        },
                        dn = {
                            c: o,
                            t: ci(nr.css(ve + pe)),
                            r: ci(nr.css(ve + be)),
                            b: ci(nr.css(ve + ge)),
                            l: ci(nr.css(ve + me))
                        },
                        hn = {
                            h: String(nr.css(we + _e)),
                            w: String(nr.css(we + xe))
                        },
                        pn = {},
                        bn = {},
                        gn = function () {
                            return {
                                w: sr[gi.cW],
                                h: sr[gi.cH]
                            }
                        },
                        mn = function () {
                            return {
                                w: dr[gi.oW] + xi.max(0, pr[gi.cW] - pr[gi.sW]),
                                h: dr[gi.oH] + xi.max(0, pr[gi.cH] - pr[gi.sH])
                            }
                        },
                        yn = Ut = $.l + $.r,
                        wn = qt = $.t + $.b;
                if (yn *= z ? 1 : 0, wn *= z ? 1 : 0, $.c = f($, Tr), Bt = vn.l + vn.r, Vt = vn.t + vn.b, vn.c = f(vn, kr), Xt = dn.l + dn.r, Yt = dn.t + dn.b, dn.c = f(dn, Or), hn.ih = ci(hn.h), hn.iw = ci(hn.w), hn.ch = -1 < hn.h.indexOf("px"), hn.cw = -1 < hn.w.indexOf("px"), hn.c = f(hn, Sr), Jr = t, Vr = U, Cr = B, zr = X, xr = rn, _r = an, Tr = $, kr = vn, Or = dn, Sr = hn, V && Pt && tr.css(Se, G), $.c || V || T || en || un || Y || A) {
                    var xn = {},
                            _n = {};
                    fi(bn, ve, [-$.t, -$.r, -$.b, -$.l]), z ? (fi(xn, ze, [$.t, $.r, $.b, $.l]), fi(Et ? _n : pn, de)) : (fi(xn, ze), fi(Et ? _n : pn, de, [$.t, $.r, $.b, $.l])), er.css(xn), Zt.css(_n)
                }
                le = mn();
                var Sn = !!Et && Ze(),
                        zn = Et && f(Sn, Yr),
                        Tn = Et && Sn ? {
                            w: I ? Sn.B : Sn.U,
                            h: E ? Sn.V : Sn.q
                        } : {};
                if (Yr = Sn, an && (un || T || Y || hn.c || $.c || vn.c) ? pn[_e] = Te : (un || T) && (pn[we + _e] = ze, pn[_e] = Oe), rn && (en || T || Y || hn.c || $.c || vn.c || V) ? (pn[xe] = Te, bn[we + xe] = Oe) : (en || T) && (pn[we + xe] = ze, pn[xe] = Oe, pn[Se] = ze, bn[we + xe] = ze), rn ? (hn.cw || (pn[we + xe] = ze), bn[xe] = Te, pn[xe] = Te, pn[Se] = G) : bn[xe] = ze, an ? (hn.ch || (pn[we + _e] = ze), bn[_e] = Tn.h || pr[gi.cH]) : bn[_e] = ze, C && ur.css(bn), or.css(pn), pn = {}, bn = {}, e || i || zn || V || Y || T || en || rn || un || an || hn.c || N || D || O || S || d || p || y || g || M || j || q) {
                    var kn = "overflow",
                            On = kn + "-x",
                            Cn = kn + "-y";
                    if (!Lt) {
                        var An = {},
                                Hn = yr.y && wr.ys && !H ? At.y ? ir.css(K) : -Dt.y : 0,
                                Nn = yr.x && wr.xs && !H ? At.x ? ir.css(ge) : -Dt.x : 0;
                        fi(An, ze), ir.css(An)
                    }
                    var Rn = li(),
                            Ln = {
                                w: Tn.w || Rn[gi.cW],
                                h: Tn.h || Rn[gi.cH]
                            },
                            Wn = Rn[gi.sW],
                            Dn = Rn[gi.sH];
                    Lt || (An[ge] = fn ? ze : Nn, An[K] = on ? ze : Hn, ir.css(An)), le = mn();
                    var In = gn(),
                            Mn = {
                                w: xi.max((rn ? Ln.w : Wn) + yn, In.w),
                                h: xi.max((an ? Ln.h : Dn) + wn, In.h)
                            };
                    if (Mn.c = f(Mn, Nr), Nr = Mn, C) {
                        (Mn.c || an || rn) && (bn[xe] = Mn.w, bn[_e] = Mn.h, Et || (Ln = {
                            w: Rn[gi.cW],
                            h: Rn[gi.cH]
                        }));
                        var En = {},
                                jn = function (n) {
                                    var t = ai(n),
                                            r = t.j,
                                            e = t.X,
                                            i = n ? rn : an,
                                            o = n ? Bt : Vt,
                                            a = n ? Ut : qt,
                                            u = n ? Xt : Yt,
                                            f = bn[e] + (Ft ? o : -a);
                                    i && (i || !vn.c) || (bn[e] = In[r] - (Ft ? 0 : a + o) - 1 - u), i && hn["c" + r] && hn["i" + r] === f && (bn[e] = f + (Ft ? 0 : a) + 1), !(i && Ln[r] < le[r]) || n && Et && U || (Et && (En[e] = ci(fr.css(e)) - 1), --bn[e]), 0 < Ln[r] && (bn[e] = xi.max(1, bn[e]))
                                };
                        jn(!0), jn(!1), Et && fr.css(En), ur.css(bn)
                    }
                    rn && (pn[xe] = Oe), !rn || Ft || Qr || (pn[Se] = "none"), or.css(pn), pn = {};
                    var Fn = {
                        w: Rn[gi.sW],
                        h: Rn[gi.sH]
                    };
                    Fn.c = i = f(Fn, gr), gr = Fn, le = mn(), e = f(In = gn(), br), br = In;
                    var Pn = Et && (0 === le.w || 0 === le.h),
                            Un = Lr,
                            qn = {},
                            Bn = {},
                            Vn = {},
                            Xn = {},
                            Yn = {},
                            $n = {},
                            Kn = {},
                            Gn = dr[gi.bCR](),
                            Jn = function (n) {
                                var t = ai(n),
                                        r = ai(!n).P,
                                        e = t.P,
                                        i = t.j,
                                        o = t.X,
                                        a = ke + t.Y + "Max",
                                        u = Gn[o] ? xi.abs(Gn[o] - le[i]) : 0,
                                        f = Un && 0 < Un[e] && 0 === hr[a];
                                qn[e] = "v-s" === W[e], Bn[e] = "v-h" === W[e], Vn[e] = "s" === W[e], Xn[e] = xi.max(0, xi.round(100 * (Fn[i] - le[i])) / 100), Xn[e] *= Pn || f && 0 < u && u < 1 ? 0 : 1, Yn[e] = 0 < Xn[e], $n[e] = qn[e] || Bn[e] ? Yn[r] && !qn[r] && !Bn[r] : Yn[e], $n[e + "s"] = !!$n[e] && (Vn[e] || qn[e]), Kn[e] = Yn[e] && $n[e + "s"]
                            };
                    if (Jn(!0), Jn(!1), Xn.c = f(Xn, Lr), Lr = Xn, Yn.c = f(Yn, yr), yr = Yn, $n.c = f($n, wr), wr = $n, At.x || At.y) {
                        var Qn, Zn = {},
                                nt = {},
                                tt = o;
                        (Yn.x || Yn.y) && (nt.w = At.y && Yn.y ? Fn.w + Ht.y : ze, nt.h = At.x && Yn.x ? Fn.h + Ht.x : ze, tt = f(nt, mr), mr = nt), (Yn.c || $n.c || Fn.c || V || en || un || rn || an || N) && (pn[ve + G] = pn[he + G] = ze, Qn = function (n) {
                            var t = ai(n),
                                    r = ai(!n),
                                    e = t.P,
                                    i = n ? ge : K,
                                    o = n ? an : rn;
                            At[e] && Yn[e] && $n[e + "s"] ? (pn[ve + i] = !o || H ? ze : Ht[e], pn[he + i] = n && o || H ? ze : Ht[e] + "px solid transparent") : (nt[r.j] = pn[ve + i] = pn[he + i] = ze, tt = !0)
                        }, Lt ? (H ? pi : hi)(ir, Me) : (Qn(!0), Qn(!1))), H && (nt.w = nt.h = ze, tt = !0), tt && !Lt && (Zn[xe] = $n.y ? nt.w : ze, Zn[_e] = $n.x ? nt.h : ze, ar || (ar = Si(si(Ee)), ir.prepend(ar)), ar.css(Zn)), or.css(pn)
                    }
                    var rt, et = {};
                    xn = {};
                    if ((e || Yn.c || $n.c || Fn.c || D || Y || N || V || O || un) && (et[G] = ze, (rt = function (n) {
                        var t = ai(n),
                                r = ai(!n),
                                e = t.P,
                                i = t.$,
                                o = n ? ge : K,
                                a = function () {
                                    et[o] = ze, ce[r.j] = 0
                                };
                        Yn[e] && $n[e + "s"] ? (et[kn + i] = ke, H || Lt ? a() : (et[o] = -(At[e] ? Ht[e] : Dt[e]), ce[r.j] = At[e] ? Ht[r.P] : 0)) : (et[kn + i] = ze, a())
                    })(!0), rt(!1), !Lt && (le.h < se.x || le.w < se.y) && (Yn.x && $n.x && !At.x || Yn.y && $n.y && !At.y) ? (et[de + pe] = se.x, et[ve + pe] = -se.x, et[de + G] = se.y, et[ve + G] = -se.y) : et[de + pe] = et[ve + pe] = et[de + G] = et[ve + G] = ze, et[de + K] = et[ve + K] = ze, Yn.x && $n.x || Yn.y && $n.y || Pn ? Et && Pn && (xn[On] = xn[Cn] = "hidden") : (!k || Bn.x || qn.x || Bn.y || qn.y) && (Et && (xn[On] = xn[Cn] = ze), et[On] = et[Cn] = "visible"), er.css(xn), ir.css(et), et = {}, (Yn.c || Y || en || un) && (!At.x || !At.y))) {
                        var it = pr[gi.s];
                        it.webkitTransform = "scale(1)", it.display = "run-in", pr[gi.oH], it.display = ze, it.webkitTransform = ze
                    }
                    if (pn = {}, V || en || un)
                        if ($t && rn) {
                            var ot = or.css(Se),
                                    at = xi.round(or.css(Se, ze).css(me, ze).position().left);
                            or.css(Se, ot), at !== xi.round(or.position().left) && (pn[me] = at)
                        } else
                            pn[me] = ze;
                    if (or.css(pn), Et && i) {
                        var ut = function Tt() {
                            var n = lr.selectionStart;
                            if (n === bi)
                                return;
                            var t, r, e = Zt.val(),
                                    i = e[gi.l],
                                    o = e.split("\n"),
                                    a = o[gi.l],
                                    u = e.substr(0, n).split("\n"),
                                    f = 0,
                                    c = 0,
                                    l = u[gi.l],
                                    s = u[u[gi.l] - 1][gi.l];
                            for (r = 0; r < o[gi.l]; r++)
                                t = o[r][gi.l], c < t && (f = r + 1, c = t);
                            return {
                                K: l,
                                G: s,
                                J: a,
                                Q: c,
                                Z: f,
                                nn: n,
                                tn: i
                            }
                        }();
                        if (ut) {
                            var ft = Xr === bi || ut.J !== Xr.J,
                                    ct = ut.K,
                                    lt = ut.G,
                                    st = ut.Z,
                                    vt = ut.J,
                                    dt = ut.Q,
                                    ht = ut.nn,
                                    pt = ut.tn <= ht && Zr,
                                    bt = {
                                        x: U || lt !== dt || ct !== st ? -1 : Lr.x,
                                        y: (U ? pt || ft && Un && c.y === Un.y : (pt || ft) && ct === vt) ? Lr.y : -1
                                    };
                            c.x = -1 < bt.x ? $t && Ur && Nt.i ? 0 : bt.x : c.x, c.y = -1 < bt.y ? bt.y : c.y
                        }
                        Xr = ut
                    }
                    $t && Nt.i && At.y && Yn.x && Ur && (c.x += ce.w || 0), rn && nr[Ae](0), an && nr[He](0), ir[Ae](c.x)[He](c.y);
                    var gt = "v" === v,
                            mt = "h" === v,
                            yt = "a" === v,
                            wt = mi.bind(ti, 0, !0, !0, Kn.x),
                            xt = mi.bind(ti, 0, !1, !0, Kn.y),
                            _t = mi.bind(ti, 0, !0, !1, Kn.x),
                            St = mi.bind(ti, 0, !1, !1, Kn.y);
                    ($n.x || $n.y ? hi : pi)(nr, We), ($n.x ? hi : pi)(nr, De), ($n.y ? hi : pi)(nr, Ie), V && ($t ? hi : pi)(nr, Ne), jt && hi(nr, Re), S && (pi(cr, [Pe, Ue, qe, Be].join(Ce)), oe ? hi(nr, Re) : (pi(nr, Re), hi(cr, Pe), ae ? hi(cr, Ue) : ue ? hi(cr, qe) : fe && hi(cr, Be))), (d || D || $n.c || Yn.c || N) && (H ? N && (pi(nr, Le), H && (_t(), St())) : yt ? ((Kn.x ? wt : _t)(), (Kn.y ? xt : St)()) : gt ? (wt(), xt()) : mt && (_t(), St())), (p || N) && (ie || ee ? (Je(!0), Je()) : Je(!0), te ? ri(!0) : ri(!1, !0)), (e || Xn.c || un || en || S || Y || T || N || V) && (ei(!0), ii(!0), ei(!1), ii(!1)), g && oi(!0, b), y && oi(!1, m), V && ui("onDirectionChanged", {
                        isRTL: $t,
                        dir: B
                    }), e && ui("onHostSizeChanged", {
                        width: br.w,
                        height: br.h
                    }), i && ui("onContentSizeChanged", {
                        width: gr.w,
                        height: gr.h
                    }), (Yn.c || $n.c) && ui("onOverflowChanged", {
                        x: Yn.x,
                        y: Yn.y,
                        xScrollable: $n.xs,
                        yScrollable: $n.ys,
                        clipped: $n.x || $n.y
                    }), Xn.c && ui("onOverflowAmountChanged", {
                        x: Xn.x,
                        y: Xn.y
                    })
                }
                jt && Gr && (yr.c || Gr.c) && (Gr.f || Qe(), At.y && yr.x && or.css(ye + xe, Gr.w + Ht.y), At.x && yr.y && or.css(ye + _e, Gr.h + Ht.x), Gr.c = !1), ui("onUpdated", {
                    forced: o
                })
            }
        }

        function et(n) {
            var t = wi.m(n, wi.g, !0, a);
            return a = di({}, a, t._), Gt = di({}, Gt, t.S), t.S
        }

        function it(e) {
            var n = "parent",
                    t = fn + Ce + Tn,
                    r = Et ? Ce + Tn : ze,
                    i = Gt.textarea.inheritedAttrs,
                    o = {},
                    a = function () {
                        var r = e ? Zt : nr;
                        c(o, function (n, t) {
                            cn(t) == _t && (n == gi.c ? r.addClass(t) : r.attr(n, t))
                        })
                    },
                    u = [rn, en, Re, Ne, on, an, un, Le, We, De, Ie, Ve, fn, Tn, qr].join(Ce),
                    f = {};
            nr = nr || (Et ? v ? Zt[n]()[n]()[n]()[n]() : Si(si(en)) : Zt), or = or || vt(xn + r), ir = ir || vt(yn + r), er = er || vt(mn + r), rr = rr || vt("os-resize-observer-host"), fr = fr || (Et ? vt(gn) : bi), e && pi(nr, u), i = cn(i) == _t ? i.split(Ce) : i, cn(i) == xt && Et && c(i, function (n, t) {
                cn(t) == _t && (o[t] = e ? nr.attr(t) : Zt.attr(t))
            }), e ? (v && It ? (rr.children().remove(), c([er, ir, or, fr], function (n, t) {
                t && pi(t.removeAttr(gi.s), Mn)
            }), hi(nr, Et ? en : rn)) : (ht(rr), or.contents().unwrap().unwrap().unwrap(), Et && (Zt.unwrap(), ht(nr), ht(fr), a())), Et && Zt.removeAttr(gi.s), jt && pi(d, tn)) : (Et && (Gt.sizeAutoCapable || (f[xe] = Zt.css(xe), f[_e] = Zt.css(_e)), v || Zt.addClass(Tn).wrap(nr), nr = Zt[n]().css(f)), v || (hi(Zt, Et ? t : rn), nr.wrapInner(or).wrapInner(ir).wrapInner(er).prepend(rr), or = pt(nr, W + xn), ir = pt(nr, W + yn), er = pt(nr, W + mn), Et && (or.prepend(fr), a())), Lt && hi(ir, Me), At.x && At.y && hi(ir, wn), jt && hi(d, tn), N = rr[0], sr = nr[0], dr = er[0], hr = ir[0], pr = or[0], rt())
        }

        function ot() {
            var r, t, e = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38, 39, 40, 16, 17, 18, 19, 20, 144],
                    i = [],
                    n = "focus";
            function o(n) {
                Ze(), Ct.update(Te), n && Rt && clearInterval(r)
            }
            Et ? (9 < D || !Rt ? Yn(Zt, "input", o) : Yn(Zt, [K, G], [function a(n) {
                    var t = n.keyCode;
                    ln(t, e) < 0 && (i[gi.l] || (o(), r = setInterval(o, 1e3 / 60)), ln(t, i) < 0 && i.push(t))
                }, function u(n) {
                    var t = n.keyCode,
                            r = ln(t, i);
                    ln(t, e) < 0 && (-1 < r && i.splice(r, 1), i[gi.l] || o(!0))
                }]), Yn(Zt, [ke, "drop", n, n + "out"], [function f(n) {
                    return Zt[Ae](Nt.i && Ur ? 9999999 : 0), Zt[He](0), mi.prvD(n), mi.stpP(n), !1
                }, function c(n) {
                    setTimeout(function () {
                        Mt || o()
                    }, 50)
                }, function l() {
                    Zr = !0, hi(nr, n)
                }, function s() {
                    Zr = !1, i = [], pi(nr, n), o(!0)
                }])) : Yn(or, Q, function v(n) {
                !0 !== Dr && function s(n) {
                    if (!It)
                        return 1;
                    var t = "flex-grow",
                            r = "flex-shrink",
                            e = "flex-basis",
                            i = [xe, ye + xe, we + xe, ve + me, ve + be, me, be, "font-weight", "word-spacing", t, r, e],
                            o = [de + me, de + be, he + me + xe, he + be + xe],
                            a = [_e, ye + _e, we + _e, ve + pe, ve + ge, pe, ge, "line-height", t, r, e],
                            u = [de + pe, de + ge, he + pe + xe, he + ge + xe],
                            f = "s" === Rr.x || "v-s" === Rr.x,
                            c = !1,
                            l = function (n, t) {
                                for (var r = 0; r < n[gi.l]; r++)
                                    if (n[r] === t)
                                        return !0;
                                return !1
                            };
                    return ("s" === Rr.y || "v-s" === Rr.y) && ((c = l(a, n)) || Ft || (c = l(u, n))), f && !c && ((c = l(i, n)) || Ft || (c = l(o, n))), c
                }((n = n.originalEvent || n).propertyName) && Ct.update(Te)
            }), Yn(ir, ke, function d(n) {
                Kt || (t !== bi ? clearTimeout(t) : ((re || ee) && ri(!0), st() || hi(nr, Le), ui("onScrollStart", n)), F || (ii(!0), ii(!1)), ui("onScroll", n), t = setTimeout(function () {
                    Mt || (clearTimeout(t), t = bi, (re || ee) && ri(!1), st() || pi(nr, Le), ui("onScrollStop", n))
                }, 175))
            }, !0)
        }

        function at(i) {
            var n, t, o = function (n) {
                var t = vt(kn + Ce + (n ? Wn : Dn), !0),
                        r = vt(On, t),
                        e = vt(An, t);
                return v || i || (t.append(r), r.append(e)), {
                    rn: t,
                    en: r,
                    "in": e
                }
            };
            function r(n) {
                var t = ai(n),
                        r = t.rn,
                        e = t.en,
                        i = t["in"];
                v && It ? c([r, e, i], function (n, t) {
                    pi(t.removeAttr(gi.s), Mn)
                }) : ht(r || o(n).rn)
            }
            i ? (r(!0), r()) : (n = o(!0), t = o(), f = n.rn, l = n.en, h = n["in"], p = t.rn, b = t.en, g = t["in"], v || (er.after(p), er.after(f)))
        }

        function ut(_) {
            var S, i, z, T, r = ai(_),
                    k = r.an,
                    t = w.top !== w,
                    O = r.P,
                    e = r.$,
                    C = ke + r.Y,
                    o = "active",
                    a = "snapHandle",
                    A = 1,
                    u = [16, 17];
            function f(n) {
                return D && t ? n["screen" + e] : mi.page(n)[O]
            }

            function c(n) {
                return Gt.scrollbars[n]
            }

            function l() {
                A = .5
            }

            function s() {
                A = 1
            }

            function v(n) {
                -1 < ln(n.keyCode, u) && l()
            }

            function H(n) {
                -1 < ln(n.keyCode, u) && s()
            }

            function N(n) {
                var t = (n.originalEvent || n).touches !== bi;
                return !(Kt || Mt || st() || !Fr || t && !c("touchSupport")) && (1 === mi.mBtn(n) || t)
            }

            function d(n) {
                if (N(n)) {
                    var t = k.I,
                            r = k.W,
                            e = k.R * ((f(n) - z) * T / (t - r));
                    e = isFinite(e) ? e : 0, $t && _ && !Nt.i && (e *= -1), ir[C](xi.round(i + e)), F && ii(_, i + e), m || mi.prvD(n)
                } else
                    R(n)
            }

            function R(n) {
                if (n = n || n.originalEvent, Xn(M, [X, V, K, G, J], [d, R, v, H, Zn], !0), F && ii(_, !0), F = !1, pi(E, In), pi(r["in"], o), pi(r.en, o), pi(r.rn, o), T = 1, s(), S !== (z = i = bi) && (Ct.scrollStop(), clearTimeout(S), S = bi), n) {
                    var t = sr[gi.bCR]();
                    n.clientX >= t.left && n.clientX <= t.right && n.clientY >= t.top && n.clientY <= t.bottom || Jn(), (re || ee) && ri(!1)
                }
            }

            function L(n) {
                i = ir[C](), i = isNaN(i) ? 0 : i, ($t && _ && !Nt.n || !$t) && (i = i < 0 ? 0 : i), T = ct()[O], z = f(n), F = !c(a), hi(E, In), hi(r["in"], o), hi(r.rn, o), Xn(M, [X, V, J], [d, R, Zn]), !D && y || mi.prvD(n), mi.stpP(n)
            }
            Yn(r["in"], B, function h(n) {
                N(n) && L(n)
            }), Yn(r.en, [B, Y, $], [function W(n) {
                    if (N(n)) {
                        var d, h = xi.round(le[r.j]),
                                p = r.en.offset()[r.F],
                                t = n.ctrlKey,
                                b = n.shiftKey,
                                g = b && t,
                                m = !0,
                                y = function (n) {
                                    F && ii(_, n)
                                },
                                w = function () {
                                    y(), L(n)
                                },
                                x = function () {
                                    if (!Mt) {
                                        var n = (z - p) * T,
                                                t = k.L,
                                                r = k.I,
                                                e = k.W,
                                                i = k.R,
                                                o = k.H,
                                                a = 270 * A,
                                                u = m ? xi.max(400, a) : a,
                                                f = i * ((n - e / 2) / (r - e)),
                                                c = $t && _ && (!Nt.i && !Nt.n || Ur),
                                                l = c ? t < n : n < t,
                                                s = {},
                                                v = {
                                                    easing: "linear",
                                                    step: function (n) {
                                                        F && (ir[C](n), ii(_, n))
                                                    }
                                                };
                                        f = isFinite(f) ? f : 0, f = $t && _ && !Nt.i ? i - f : f, b ? (ir[C](f), g ? (f = ir[C](), ir[C](o), f = c && Nt.i ? i - f : f, f = c && Nt.n ? -f : f, s[O] = f, Ct.scroll(s, di(v, {
                                            duration: 130,
                                            complete: w
                                        }))) : w()) : (d = m ? l : d, (c ? d ? n <= t + e : t <= n : d ? t <= n : n <= t + e) ? (clearTimeout(S), Ct.scrollStop(), S = bi, y(!0)) : (S = setTimeout(x, u), s[O] = (d ? "-=" : "+=") + h, Ct.scroll(s, di(v, {
                                            duration: a
                                        }))), m = !1)
                                    }
                                };
                        t && l(), T = ct()[O], z = mi.page(n)[O], F = !c(a), hi(E, In), hi(r.en, o), hi(r.rn, o), Xn(M, [V, K, G, J], [R, v, H, Zn]), x(), mi.prvD(n), mi.stpP(n)
                    }
                }, function p(n) {
                    j = !0, (re || ee) && ri(!0)
                }, function b(n) {
                    j = !1, (re || ee) && ri(!1)
                }]), Yn(r.rn, B, function g(n) {
                mi.stpP(n)
            }), I && Yn(r.rn, Q, function (n) {
                n.target === r.rn[0] && (ei(_), ii(_))
            })
        }

        function ti(n, t, r) {
            var e = n ? on : an,
                    i = n ? f : p;
            (t ? pi : hi)(nr, e), (r ? pi : hi)(i, Nn)
        }

        function ri(n, t) {
            if (clearTimeout(O), n)
                pi(f, Rn), pi(p, Rn);
            else {
                var r, e = function () {
                    j || Mt || (!(r = h.hasClass("active") || g.hasClass("active")) && (re || ee || ie) && hi(f, Rn), !r && (re || ee || ie) && hi(p, Rn))
                };
                0 < ne && !0 !== t ? O = setTimeout(e, ne) : e()
            }
        }

        function ei(n) {
            var t = {},
                    r = ai(n),
                    e = r.an,
                    i = xi.min(1, (br[r.j] - (Ar ? n ? Ut : qt : 0)) / gr[r.j]);
            t[r.X] = xi.floor(100 * i * 1e6) / 1e6 + "%", st() || r["in"].css(t), e.W = r["in"][0]["offset" + r.un], e.D = i
        }

        function ii(n, t) {
            var r, e, i = cn(t) == St,
                    o = $t && n,
                    a = ai(n),
                    u = a.an,
                    f = "translate(",
                    c = Tt.u("transform"),
                    l = Tt.u("transition"),
                    s = n ? ir[Ae]() : ir[He](),
                    v = t === bi || i ? s : t,
                    d = u.W,
                    h = a.en[0]["offset" + a.un],
                    p = h - d,
                    b = {},
                    g = (hr[ke + a.un] - hr["client" + a.un]) * (Nt.n && o ? -1 : 1),
                    m = function (n) {
                        return isNaN(n / g) ? 0 : xi.max(0, xi.min(1, n / g))
                    },
                    y = function (n) {
                        var t = p * n;
                        return t = isNaN(t) ? 0 : t, t = o && !Nt.i ? h - d - t : t, t = xi.max(0, t)
                    },
                    w = m(s),
                    x = y(m(v)),
                    _ = y(w);
            u.R = g, u.H = s, u.N = w, sn ? (r = o ? -(h - d - x) : x, e = n ? f + r + "px, 0)" : f + "0, " + r + "px)", b[c] = e, I && (b[l] = i && 1 < xi.abs(x - u.L) ? function S(n) {
                var t = Tt.u("transition"),
                        r = n.css(t);
                if (r)
                    return r;
                for (var e, i, o, a = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*", u = new RegExp(a), f = new RegExp("^(" + a + ")+$"), c = "property duration timing-function delay".split(" "), l = [], s = 0, v = function (n) {
                    if (e = [], !n.match(f))
                        return n;
                    for (; n.match(u); )
                        e.push(RegExp.$1), n = n.replace(u, ze);
                    return e
                }; s < c[gi.l]; s++)
                    for (i = v(n.css(t + "-" + c[s])), o = 0; o < i[gi.l]; o++)
                        l[o] = (l[o] ? l[o] + Ce : ze) + i[o];
                return l.join(", ")
            }(a["in"]) + ", " + (c + Ce + 250) + "ms" : ze)) : b[a.F] = x, st() || (a["in"].css(b), sn && I && i && a["in"].one(Q, function () {
                Mt || a["in"].css(l, ze)
            })), u.L = x, u.M = _, u.I = h
        }

        function oi(n, t) {
            var r = t ? "removeClass" : "addClass",
                    e = n ? b : g,
                    i = n ? Cn : Hn;
            (n ? l : h)[r](i), e[r](i)
        }

        function ai(n) {
            return {
                X: n ? xe : _e,
                un: n ? "Width" : "Height",
                F: n ? me : pe,
                Y: n ? "Left" : "Top",
                P: n ? pn : bn,
                $: n ? "X" : "Y",
                j: n ? "w" : "h",
                cn: n ? "l" : "t",
                en: n ? l : b,
                "in": n ? h : g,
                rn: n ? f : p,
                an: n ? vn : dn
            }
        }

        function ft(n) {
            cr = cr || vt(Ln, !0), n ? v && It ? pi(cr.removeAttr(gi.s), Mn) : ht(cr) : v || nr.append(cr)
        }

        function ui(n, t) {
            if (It) {
                var r, e = Gt.callbacks[n],
                        i = n;
                "on" === i.substr(0, 2) && (i = i.substr(2, 1).toLowerCase() + i.substr(3)), cn(e) == wt && e.call(Ct, t), c(Fn, function () {
                    cn((r = this).on) == wt && r.on(i, t)
                })
            } else
                Mt || En.push({
                    n: n,
                    a: t
                })
        }

        function fi(n, t, r) {
            r === bi && (r = [ze, ze, ze, ze]), n[t + pe] = r[0], n[t + be] = r[1], n[t + ge] = r[2], n[t + me] = r[3]
        }

        function ct() {
            var n = dr[gi.bCR]();
            return {
                x: sn && 1 / (xi.round(n.width) / dr[gi.oW]) || 1,
                y: sn && 1 / (xi.round(n.height) / dr[gi.oH]) || 1
            }
        }

        function lt(n) {
            var t = "ownerDocument",
                    r = "HTMLElement",
                    e = n && n[t] && n[t].parentWindow || gt;
            return typeof e[r] == yt ? n instanceof e[r] : n && typeof n == yt && null !== n && 1 === n.nodeType && typeof n.nodeName == _t
        }

        function ci(n, t) {
            var r = t ? parseFloat(n) : parseInt(n, 10);
            return isNaN(r) ? 0 : r
        }

        function st() {
            return Wr && At.x && At.y
        }

        function li() {
            return Et ? fr[0] : pr
        }

        function si(r, n) {
            return "<div " + (r ? cn(r) == _t ? 'class="' + r + '"' : function () {
                var n, t = ze;
                if (Si.isPlainObject(r))
                    for (n in r)
                        t += ("c" === n ? "class" : n) + '="' + r[n] + '" ';
                return t
            }() : ze) + ">" + (n || ze) + "</div>"
        }

        function vt(n, t) {
            var r = cn(t) == St,
                    e = !r && t || nr;
            return v && !e[gi.l] ? null : v ? e[r ? "children" : "find"](W + n.replace(/\s/g, W)).eq(0) : Si(si(n))
        }

        function dt(n, t) {
            for (var r, e = t.split(W), i = 0; i < e.length; i++) {
                if (!n[gi.hOP](e[i]))
                    return;
                r = n[e[i]], i < e.length && cn(r) == yt && (n = r)
            }
            return r
        }

        function vi(n, t, r) {
            if (r)
                return r;
            if (cn(n) != yt || cn(t) != yt)
                return n !== t;
            for (var e in n)
                if ("c" !== e) {
                    if (!n[gi.hOP](e) || !t[gi.hOP](e))
                        return !0;
                    if (vi(n[e], t[e]))
                        return !0
                }
            return !1
        }

        function di() {
            return Si.extend.apply(this, [!0].concat([].slice.call(arguments)))
        }

        function hi(n, t) {
            return e.addClass.call(n, t)
        }

        function pi(n, t) {
            return e.removeClass.call(n, t)
        }

        function ht(n) {
            return e.remove.call(n)
        }

        function pt(n, t) {
            return e.find.call(n, t).eq(0)
        }
    }
    return _i && _i.fn && (_i.fn.overlayScrollbars = function (n, t) {
        return _i.isPlainObject(n) ? (_i.each(this, function () {
            w(this, n, t)
        }), this) : w(this, n)
    }), w
});
function loadIframe(a, b)
{
    $(b).attr('src', a);
}

function _init() {
    "use strict";
    $.AdminLTE.layout = {activate: function () {
            var a = this;
            a.fix(), a.fixSidebar(), $(window, ".wrapper").resize(function () {
                a.fix(), a.fixSidebar()
            })
        }, fix: function () {
            var a = $(".main-header").outerHeight() + $(".main-footer").outerHeight(), b = $(window).height(), c = $(".sidebar").height();
            if ($("body").hasClass("fixed"))
                $(".content-wrapper, .right-side").css("min-height", b - $(".main-footer").outerHeight());
            else {
                var d;
                b >= c ? ($(".content-wrapper, .right-side").css("min-height", b - a), d = b - a) : ($(".content-wrapper, .right-side").css("min-height", c), d = c);
                var e = $($.AdminLTE.options.controlSidebarOptions.selector);
                "undefined" != typeof e && e.height() > d && $(".content-wrapper, .right-side").css("min-height", e.height())
            }
        }, fixSidebar: function () {
            return $("body").hasClass("fixed") ? ("undefined" == typeof $.fn.slimScroll && window.console && window.console.error("Error: the fixed layout requires the slimscroll plugin!"), void($.AdminLTE.options.sidebarSlimScroll && "undefined" != typeof $.fn.slimScroll && ($(".sidebar").slimScroll({destroy: !0}).height("auto"), $(".sidebar").slimscroll({height: $(window).height() - $(".main-header").height() + "px", color: "rgba(0,0,0,0.2)", size: "3px"})))) : void("undefined" != typeof $.fn.slimScroll && $(".sidebar").slimScroll({destroy: !0}).height("auto"))
        }}, $.AdminLTE.pushMenu = {activate: function (a) {
            var b = $.AdminLTE.options.screenSizes;
            $(document).on("click", a, function (a) {
                a.preventDefault(), $(window).width() > b.sm - 1 ? $("body").hasClass("sidebar-collapse") ? $("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu") : $("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").hasClass("sidebar-open") ? $("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").addClass("sidebar-open").trigger("expanded.pushMenu")
            }), $(".content-wrapper").click(function () {
                $(window).width() <= b.sm - 1 && $("body").hasClass("sidebar-open") && $("body").removeClass("sidebar-open")
            }), ($.AdminLTE.options.sidebarExpandOnHover || $("body").hasClass("fixed") && $("body").hasClass("sidebar-mini")) && this.expandOnHover()
        }, expandOnHover: function () {
            var a = this, b = $.AdminLTE.options.screenSizes.sm - 1;
            $(".main-sidebar").hover(function () {
                $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-collapse") && $(window).width() > b && a.expand()
            }, function () {
                $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-expanded-on-hover") && $(window).width() > b && a.collapse()
            })
        }, expand: function () {
            $("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")
        }, collapse: function () {
            $("body").hasClass("sidebar-expanded-on-hover") && $("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")
        }}, $.AdminLTE.tree = function (a) {
        var b = this, c = $.AdminLTE.options.animationSpeed;
        $(document).off("click", a + " li a").on("click", a + " li a", function (a) {
            var d = $(this), e = d.next();
            if (e.is(".treeview-menu") && e.is(":visible") && !$("body").hasClass("sidebar-collapse"))
                e.slideUp(c, function () {
                    e.removeClass("menu-open")
                }), e.parent("li").removeClass("active");
            else if (e.is(".treeview-menu") && !e.is(":visible")) {
                var f = d.parents("ul").first(), g = f.find("ul:visible").slideUp(c);
                g.removeClass("menu-open");
                var h = d.parent("li");
                e.slideDown(c, function () {
                    e.addClass("menu-open"), f.find("li.active").removeClass("active"), h.addClass("active"), b.layout.fix()
                })
            }
            e.is(".treeview-menu") && a.preventDefault()
        })
    }, $.AdminLTE.controlSidebar = {activate: function () {
            var a = this, b = $.AdminLTE.options.controlSidebarOptions, c = $(b.selector), d = $(b.toggleBtnSelector);
            d.on("click", function (d) {
                d.preventDefault(), c.hasClass("control-sidebar-open") || $("body").hasClass("control-sidebar-open") ? a.close(c, b.slide) : a.open(c, b.slide)
            });
            var e = $(".control-sidebar-bg");
            a._fix(e), $("body").hasClass("fixed") ? a._fixForFixed(c) : $(".content-wrapper, .right-side").height() < c.height() && a._fixForContent(c)
        }, open: function (a, b) {
            b ? a.addClass("control-sidebar-open") : $("body").addClass("control-sidebar-open")
        }, close: function (a, b) {
            b ? a.removeClass("control-sidebar-open") : $("body").removeClass("control-sidebar-open")
        }, _fix: function (a) {
            var b = this;
            if ($("body").hasClass("layout-boxed")) {
                if (a.css("position", "absolute"), a.height($(".wrapper").height()), b.hasBindedResize)
                    return;
                $(window).resize(function () {
                    b._fix(a)
                }), b.hasBindedResize = !0
            } else
                a.css({position: "fixed", height: "auto"})
        }, _fixForFixed: function (a) {
            a.css({position: "fixed", "max-height": "100%", overflow: "auto", "padding-bottom": "50px"})
        }, _fixForContent: function (a) {
            $(".content-wrapper, .right-side").css("min-height", a.height())
        }}, $.AdminLTE.boxWidget = {selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors, icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons, animationSpeed: $.AdminLTE.options.animationSpeed, activate: function (a) {
            var b = this;
            a || (a = document), $(a).on("click", b.selectors.collapse, function (a) {
                a.preventDefault(), b.collapse($(this))
            }), $(a).on("click", b.selectors.remove, function (a) {
                a.preventDefault(), b.remove($(this))
            })
        }, collapse: function (a) {
            var b = this, c = a.parents(".box").first(), d = c.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
            c.hasClass("collapsed-box") ? (a.children(":first").removeClass(b.icons.open).addClass(b.icons.collapse), d.slideDown(b.animationSpeed, function () {
                c.removeClass("collapsed-box")
            })) : (a.children(":first").removeClass(b.icons.collapse).addClass(b.icons.open), d.slideUp(b.animationSpeed, function () {
                c.addClass("collapsed-box")
            }))
        }, remove: function (a) {
            var b = a.parents(".box").first();
            b.slideUp(this.animationSpeed)
        }}
}
if ("undefined" == typeof jQuery)
    throw new Error("AdminLTE requires jQuery");
$.AdminLTE = {}, $.AdminLTE.options = {navbarMenuSlimscroll: !0, navbarMenuSlimscrollWidth: "3px", navbarMenuHeight: "200px", animationSpeed: 500, sidebarToggleSelector: "[data-toggle='offcanvas']", sidebarPushMenu: !0, sidebarSlimScroll: !0, sidebarExpandOnHover: !1, enableBoxRefresh: !0, enableBSToppltip: !0, BSTooltipSelector: "[data-toggle='tooltip']", enableFastclick: !1, enableControlSidebar: !0, controlSidebarOptions: {toggleBtnSelector: "[data-toggle='control-sidebar']", selector: ".control-sidebar", slide: !0}, enableBoxWidget: !0, boxWidgetOptions: {boxWidgetIcons: {collapse: "fa-minus", open: "fa-plus", remove: "fa-times"}, boxWidgetSelectors: {remove: '[data-widget="remove"]', collapse: '[data-widget="collapse"]'}}, directChat: {enable: !0, contactToggleSelector: '[data-widget="chat-pane-toggle"]'}, colors: {lightBlue: "#3c8dbc", red: "#f56954", green: "#00a65a", aqua: "#00c0ef", yellow: "#f39c12", blue: "#0073b7", navy: "#001F3F", teal: "#39CCCC", olive: "#3D9970", lime: "#01FF70", orange: "#FF851B", fuchsia: "#F012BE", purple: "#8E24AA", maroon: "#D81B60", black: "#222222", gray: "#d2d6de"}, screenSizes: {xs: 480, sm: 768, md: 992, lg: 1200}}, $(function () {
    "use strict";
    $("body").removeClass("hold-transition"), "undefined" != typeof AdminLTEOptions && $.extend(!0, $.AdminLTE.options, AdminLTEOptions);
    var a = $.AdminLTE.options;
    _init(), $.AdminLTE.layout.activate(), $.AdminLTE.tree(".sidebar"), a.enableControlSidebar && $.AdminLTE.controlSidebar.activate(), a.navbarMenuSlimscroll && "undefined" != typeof $.fn.slimscroll && $(".navbar .menu").slimscroll({height: a.navbarMenuHeight, alwaysVisible: !1, size: a.navbarMenuSlimscrollWidth}).css("width", "100%"), a.sidebarPushMenu && $.AdminLTE.pushMenu.activate(a.sidebarToggleSelector), a.enableBSToppltip && $("body").tooltip({selector: a.BSTooltipSelector}), a.enableBoxWidget && $.AdminLTE.boxWidget.activate(), a.enableFastclick && "undefined" != typeof FastClick && FastClick.attach(document.body), a.directChat.enable && $(document).on("click", a.directChat.contactToggleSelector, function () {
        var a = $(this).parents(".direct-chat").first();
        a.toggleClass("direct-chat-contacts-open")
    }), $('.btn-group[data-toggle="btn-toggle"]').each(function () {
        var a = $(this);
        $(this).find(".btn").on("click", function (b) {
            a.find(".btn.active").removeClass("active"), $(this).addClass("active"), b.preventDefault()
        })
    })
}), function (a) {
    "use strict";
    a.fn.boxRefresh = function (b) {
        function c(a) {
            a.append(f), e.onLoadStart.call(a)
        }
        function d(a) {
            a.find(f).remove(), e.onLoadDone.call(a)
        }
        var e = a.extend({trigger: ".refresh-btn", source: "", onLoadStart: function (a) {
                return a
            }, onLoadDone: function (a) {
                return a
            }}, b), f = a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
        return this.each(function () {
            if ("" === e.source)
                return void(window.console && window.console.log("Please specify a source first - boxRefresh()"));
            var b = a(this), f = b.find(e.trigger).first();
            f.on("click", function (a) {
                a.preventDefault(), c(b), b.find(".box-body").load(e.source, function () {
                    d(b)
                })
            })
        })
    }
}(jQuery), function (a) {
    "use strict";
    a.fn.activateBox = function () {
        a.AdminLTE.boxWidget.activate(this)
    }, a.fn.toggleBox = function () {
        var b = a(a.AdminLTE.boxWidget.selectors.collapse, this);
        a.AdminLTE.boxWidget.collapse(b)
    }, a.fn.removeBox = function () {
        var b = a(a.AdminLTE.boxWidget.selectors.remove, this);
        a.AdminLTE.boxWidget.remove(b)
    }
}(jQuery), function (a) {
    "use strict";
    a.fn.todolist = function (b) {
        var c = a.extend({onCheck: function (a) {
                return a
            }, onUncheck: function (a) {
                return a
            }}, b);
        return this.each(function () {
            "undefined" != typeof a.fn.iCheck ? (a("input", this).on("ifChecked", function () {
                var b = a(this).parents("li").first();
                b.toggleClass("done"), c.onCheck.call(b)
            }), a("input", this).on("ifUnchecked", function () {
                var b = a(this).parents("li").first();
                b.toggleClass("done"), c.onUncheck.call(b)
            })) : a("input", this).on("change", function () {
                var b = a(this).parents("li").first();
                b.toggleClass("done"), a("input", b).is(":checked") ? c.onCheck.call(b) : c.onUncheck.call(b)
            })
        })
    }
}(jQuery);
//    var elem_iframe = document.getElementById("iframe");
//    function openFullscreen_iframe() {
//        if (elem_iframe.requestFullscreen) {
//            elem_iframe.requestFullscreen();
//        } else if (elem_iframe.mozRequestFullScreen) { /* Firefox */
//            elem_iframe.mozRequestFullScreen();
//        } else if (elem_iframe.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//            elem_iframe.webkitRequestFullscreen();
//        } else if (elem_iframe.msRequestFullscreen) { /* IE/Edge */
//            elem_iframe.msRequestFullscreen();
//        }
//    }
//
var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function callAjaxIframe(f, g, a) {
    var e = new FormData($("#" + f)[0]);
    $.ajax({
        url: g,
        type: "POST",
        data: e,
        async: true,
        beforeSend: function () {
//            $('.loader').fadeIn();
//            $('.loader-text').fadeIn();
//            $('.page-loader').delay(100).fadeIn('slow');
            $("#" + a).html('<div class="text-center text-bold">Please Wait. Loading...</div><div class="loader"></div>');
        },
        success: function (b) {
            $(document).ready(function () {
//                $('.loader').fadeOut();
//                $('.loader-text').fadeOut();
//                $('.page-loader').delay(100).fadeOut('slow');
                $('#' + a).attr('src', g);
            });
        },
        complete: function () {
            return false
        },
        error: function (b) {
            console.error(b);
            throw b
        },
        cache: false,
        contentType: false,
        processData: false
    });
    return false;
}

function callAjax(f, g, a) {
    var e = new FormData($("#" + f)[0]);
    $.ajax({
        url: g,
        type: "POST",
        data: e,
        async: true,
        beforeSend: function () {
//            $('.loader').fadeIn();
//            $('.loader-text').fadeIn();
//            $('.page-loader').delay(100).fadeIn('slow');
//                        $("#" + a).html('<div class="ajax-overlay d-flex justify-content-center align-items-center"><i class="fas fa-2x fa-sync fa-spin"></i></div>');
            $("#" + a).html('<i class="fas fa-sync fa-spin text-maroon"></i>');
        },
        success: function (b) {
//            $('.loader').fadeOut();
//            $('.loader-text').fadeOut();
//            $('.page-loader').delay(100).fadeOut('slow');
            $("#" + a).html(b)
        },
        complete: function () {
            return false
        },
        error: function (b) {
            console.error(b);
            throw b
        },
        cache: false,
        contentType: false,
        processData: false
    });
    return false;
}

function callNormalAjax(f, g, a) {
    var e = new FormData($("#" + f)[0]);
    $.ajax({
        url: g,
        type: "POST",
        data: e,
//        async: false,
        beforeSend: function () {
            $("#" + a).html('<i class="fas fa-sync fa-spin text-maroon"></i>');
        },
        success: function (b) {
            $("#" + a).html(b);
            document.getElementById(a).value = b;
            document.getElementById(a).text = b;
        },
        complete: function () {
            return false
        },
        error: function (b) {
            console.error(b);
            throw b
        },
        cache: false,
        contentType: false,
        processData: false
    });
    return false;
}


$(function () {
    //Initialize Select2 Elements
    $('.select2').select2({
        tags: true,
//        placeholder: "Please Select",
        allowClear: true,
        width: '100%'
    })

    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    })

    //Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd-mm-yyyy', {'placeholder': 'dd-mm-yyyy'})
    //Datemask2 mm/dd/yyyy
    $('#datemask2').inputmask('mm/dd/yyyy', {'placeholder': 'mm/dd/yyyy'})
    //Money Euro
    $('[data-mask]').inputmask()

    //Date range picker
//    $('#reservation').daterangepicker()
    //Date range picker with time picker
//    $('#reservationtime').daterangepicker({
//        timePicker: true,
//        timePickerIncrement: 30,
//        locale: {
//            format: 'MM/DD/YYYY hh:mm A'
//        }
//    })

//    $('.datepicker').datepicker({
//        format: "dd-mm-yyyy",
//        todayBtn: "linked",
//        autoclose: true,
//        todayHighlight: true,
//        clearBtn: true
//    }).attr("readonly", true);

    $('.datepicker').datepicker({
        format: "dd-mm-yyyy",
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true,
        clearBtn: true
    });

    $('.datepickerWithoutSunday').datepicker({
        format: "dd-mm-yyyy",
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true,
        clearBtn: true,
        daysOfWeekDisabled: [0]
    });

    //Date range as a button
//    $('#daterange-btn').daterangepicker(
//            {
//                ranges: {
//                    'Today': [moment(), moment()],
//                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//                    'This Month': [moment().startOf('month'), moment().endOf('month')],
//                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//                },
//                startDate: moment().subtract(29, 'days'),
//                endDate: moment()
//            },
//            function (start, end) {
//                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
//            }
//    )

    //Timepicker
//    $('#timepicker').datetimepicker({
//        format: 'LT'
//    })

    //Bootstrap Duallistbox
    $('.duallistbox').bootstrapDualListbox()

    //Colorpicker
    $('.my-colorpicker1').colorpicker()
    //color picker with addon
    $('.my-colorpicker2').colorpicker()

    $('.my-colorpicker2').on('colorpickerChange', function (event) {
        $('.my-colorpicker2 .fa-square').css('color', event.color.toString());
    });
    $("input[data-bootstrap-switch]").each(function () {
        $(this).bootstrapSwitch('state', $(this).prop('checked'));
    });
})

$(document).ready(function () {
//    document.title = '<h6>Simple DataTable</h6>';
    $('#table-admiral').DataTable(
            {
                "dom": '<"dt-buttons"B<"toolbar">lf<t>ip>',
                "autoWidth": false,
                "buttons": [
                    'colvis',
                    'copyHtml5',
//                    'csvHtml5',
                    'excelHtml5',
                    'pdfHtml5',
                    'print',
                ],
                "paging": true,
                "lengthChange": true,
                "searching": true,
                "ordering": true,
                "info": true,
                "deferRender": true,
//                "scrollY": 455,
                "scrollCollapse": false,
                "scroller": true,
//                "scrollX": true,                
            });
    $("div.toolbar").html('<a class="btn buttons-collection buttons-colvis" style="color: black;" tabindex="0" aria-controls="table-admiral" href="#"><span><i class="fas fa-arrows-alt" onclick="openFullscreen();" style="cursor: pointer;"></i></span></a><a class="btn buttons-collection buttons-colvis" style="color: black;" tabindex="0" aria-controls="table-admiral" href="#"><span><i class="fas fa-compress-arrows-alt" onclick="closeFullscreen();" style="cursor: pointer;"></i></span></a><a class="btn buttons-collection buttons-colvis" style="color: black;" tabindex="0" aria-controls="table-admiral" href="#"><span><i class="fas fa-sync" onclick="window.location.reload();" style="cursor: pointer;"></i></span></a>');
});
$(document).ready(function () {
    $('#table-admiral-continues').DataTable(
//            ,
            {
                "dom": '<"dt-buttons"B<"toolbar">lf<t>ip>',
                "autoWidth": false,
                "buttons": [{
//                extend: 'print',
//                customize: function (win) {
//                    $(win.document.body)
//                            .css('font-size', '10pt')
//                            .prepend(
//                                    '<img src="http://datatables.net/media/images/logo-fade.png" style="position:absolute; top:0; left:0;" />'
//                                    );
//
//                    $(win.document.body).find('table')
//                            .addClass('compact')
//                            .css('font-size', 'inherit');
//                }
                    },
                    'colvis',
                    'copyHtml5',
//            'csvHtml5',
                    'excelHtml5',
                    'pdfHtml5', {
                        extend: 'print',
                        text: '<i class="fas fa-print" style="color:#0073b7 !important;"></i>',
//                title: $(".table-header").text(),
                        title: function () {
                            return "<div style='font-size: 24px;'>" + $(".table-header").text() + "</div>";
                        },
                        exportOptions: {
                            columns: ':not(.no-print)'
                        },
                        footer: true,
                    }, {
                        extend: "print",
                        title: $(".table-header").text(),
                        customize: function (win) {
                            var last = null;
                            var current = null;
                            var bod = [];
                            var css = '@page { size: landscape; }',
                                    head = win.document.head || win.document.getElementsByTagName('head')[0],
                                    style = win.document.createElement('style');
                            style.type = 'text/css';
                            style.media = 'print';
                            if (style.styleSheet) {
                                style.styleSheet.cssText = css;
                            } else {
                                style.appendChild(win.document.createTextNode(css));
                            }
                            head.appendChild(style);
                        },
                        footer: true,
                    }
                ],
                "paging": false,
                "lengthChange": true,
                "searching": true,
                "ordering": true,
                "info": false,
                "deferRender": true,
//                "scrollY": 800,
                "scrollCollapse": false,
                "scroller": true,
            });
    $("div.toolbar").html('<a class="btn buttons-collection buttons-colvis" style="color: black;" tabindex="0" aria-controls="table-admiral-continues" href="#"><span><i class="fas fa-sync" onclick="window.location.reload();" style="cursor: pointer;"></i></span></a>');
});
$(document).ready(function () {
//    document.title = '<h6>Simple DataTable</h6>';
    $('#table-admiral-search-only').DataTable({
        "dom": '<<"toolbar">lf<t>ip>',
        "autoWidth": false,
//        "buttons": [
//            'colvis',
//            'copyHtml5',
////            'csvHtml5',
//            'excelHtml5',
//            'pdfHtml5',
//            'print',
//        ],
//        "printHeader": "<h1>THIS IS MY COOL TABLE</h1>",
        "paging": false,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "deferRender": true,
//                "scrollY": 455,
        "scrollCollapse": false,
        "scroller": true,
//        responsive: true
//        "scrollX": true,
    });
//    $("div.toolbar").html('<a class="btn buttons-collection buttons-colvis" style="color: black;" tabindex="0" aria-controls="table-admiral-continues" href="#"><span><i class="fas fa-sync" onclick="window.location.reload();" style="cursor: pointer;"></i></span></a>');
});
$(document).ready(function () {
//    document.title = '<h6>Simple DataTable</h6>';
    $('#table-admiral-without-search').DataTable(
            {
                "dom": '<"dt-buttons"B<"toolbar">lf<t>ip>',
                "autoWidth": false,
                "buttons": [
//                    'colvis',
//                    'copyHtml5',
//                    'csvHtml5',
//                    'excelHtml5',
//                    'pdfHtml5',
//                    'print',
                ],
                "paging": false,
                "lengthChange": true,
                "searching": false,
                "ordering": true,
                "info": false,
                "deferRender": true,
//                "scrollY": 455,
                "scrollCollapse": false,
                "scroller": true,
//                "scrollX": true,
            });
    $("div.toolbar").html('<a class="btn buttons-collection buttons-colvis" style="color: black;" tabindex="0" aria-controls="table-admiral-without-search" href="#"><span><i class="fas fa-sync" onclick="window.location.reload();" style="cursor: pointer;"></i></span></a>');
});
$(document).ready(function () {
    var table = $('#table-admiral-custom-01').DataTable({
        "dom": '<"dt-buttons"B<"toolbar">lf<t>ip>',
        "buttons": [
            'colvis',
            'copyHtml5',
            'excelHtml5',
            'pdfHtml5',
            'print',
        ],
        "autoWidth": false,
        "paging": false,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": false,
        "deferRender": true,
        "scrollCollapse": false,
        "scroller": true,
        "columnDefs": [{
                "searchable": false,
                "orderable": false,
                "targets": 0
            }],
//        "order": [[3, 'asc'], [2, 'asc']]
    });
    table.on('order.dt search.dt', function () {
        table.column(0, {search: 'applied', order: 'applied'}).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();

    $("div.toolbar").html('<a class="btn buttons-collection buttons-colvis" style="color: black;" tabindex="0" aria-controls="table-admiral" href="#"><span><i class="fas fa-arrows-alt" onclick="openFullscreen();" style="cursor: pointer;"></i></span></a><a class="btn buttons-collection buttons-colvis" style="color: black;" tabindex="0" aria-controls="table-admiral" href="#"><span><i class="fas fa-compress-arrows-alt" onclick="closeFullscreen();" style="cursor: pointer;"></i></span></a><a class="btn buttons-collection buttons-colvis" style="color: black;" tabindex="0" aria-controls="table-admiral" href="#"><span><i class="fas fa-sync" onclick="window.location.reload();" style="cursor: pointer;"></i></span></a>');
});
function clone(c, d) {
    $("#" + c).clone().appendTo("#" + d).attr("id", c + cloneIndex).find("input,select,span").each(function () {
        var a = this.id || "";
        var b = a.match(regex) || [];
        this.id = this.id.replace(/\[.*\]/g, "") + cloneIndex;
        if (b.length == 3) {
            this.id = b[1] + (cloneIndex)
        }
    }).on("click", "i.clone", clone).on("click", "i.remove", remove);
    cloneIndex++
}
function remove(b) {
    $("tr[id^=" + b + "]:nth-child(2)").remove();
    $("div[id^=" + b + "]:nth-child(2)").remove()
}
function AddRow(c, d) {
    clone(c, d)
}
function RemoveRow(c, d) {
    remove(c)
}