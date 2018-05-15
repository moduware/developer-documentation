! function(e, n, i, o) {
    e.fn.extend({
        scrollspy: function(i) {
            var o = {
                    min: 0,
                    max: 0,
                    mode: "vertical",
                    namespace: "scrollspy",
                    buffer: 0,
                    container: n,
                    onEnter: i.onEnter ? i.onEnter : [],
                    onLeave: i.onLeave ? i.onLeave : [],
                    onTick: i.onTick ? i.onTick : []
                },
                i = e.extend({}, o, i);
            return this.each(function(n) {
                var o = this,
                    t = i,
                    r = e(t.container),
                    s = t.mode,
                    c = t.buffer,
                    a = leaves = 0,
                    l = !1;
                r.bind("scroll." + t.namespace, function(n) {
                    var i = {
                            top: e(this).scrollTop(),
                            left: e(this).scrollLeft()
                        },
                        v = "vertical" == s ? i.top + c : i.left + c,
                        u = t.max,
                        m = t.min;
                    e.isFunction(t.max) && (u = t.max()), e.isFunction(t.min) && (m = t.min()), 0 == u && (u = "vertical" == s ? r.height() : r.outerWidth() + e(o).outerWidth()), v >= m && u >= v ? (l || (l = !0, a++, e(o).trigger("scrollEnter", {
                        position: i
                    }), e.isFunction(t.onEnter) && t.onEnter(o, i)), e(o).trigger("scrollTick", {
                        position: i,
                        inside: l,
                        enters: a,
                        leaves: leaves
                    }), e.isFunction(t.onTick) && t.onTick(o, i, l, a, leaves)) : l && (l = !1, leaves++, e(o).trigger("scrollLeave", {
                        position: i,
                        leaves: leaves
                    }), e.isFunction(t.onLeave) && t.onLeave(o, i))
                })
            })
        }
    })
}(jQuery, window, document, void 0);
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    "use strict";
    var t = {
            wheelSpeed: 10,
            wheelPropagation: !1,
            minScrollbarLength: null,
            useBothWheelAxes: !1,
            useKeyboard: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            includePadding: !1
        },
        n = function() {
            var e = 0;
            return function() {
                var t = e;
                return e += 1, ".perfect-scrollbar-" + t
            }
        }();
    e.fn.perfectScrollbar = function(o, l) {
        return this.each(function() {
            var r = e.extend(!0, {}, t),
                s = e(this);
            if ("object" == typeof o ? e.extend(!0, r, o) : l = o, "update" === l) return s.data("perfect-scrollbar-update") && s.data("perfect-scrollbar-update")(), s;
            if ("destroy" === l) return s.data("perfect-scrollbar-destroy") && s.data("perfect-scrollbar-destroy")(), s;
            if (s.data("perfect-scrollbar")) return s.data("perfect-scrollbar");
            s.addClass("ps-container");
            var a, i, c, u, d, f, p, h, v, g, m = e("<div class='ps-scrollbar-x-rail'></div>").appendTo(s),
                b = e("<div class='ps-scrollbar-y-rail'></div>").appendTo(s),
                w = e("<div class='ps-scrollbar-x'></div>").appendTo(m),
                L = e("<div class='ps-scrollbar-y'></div>").appendTo(b),
                T = parseInt(m.css("bottom"), 10),
                y = T === T,
                M = y ? null : parseInt(m.css("top"), 10),
                x = parseInt(b.css("right"), 10),
                S = x === x,
                D = S ? null : parseInt(b.css("left"), 10),
                I = "rtl" === s.css("direction"),
                P = n(),
                X = function(e, t) {
                    var n = e + t,
                        o = u - v;
                    g = 0 > n ? 0 : n > o ? o : n;
                    var l = parseInt(g * (f - u) / (u - v), 10);
                    s.scrollTop(l), y ? m.css({
                        bottom: T - l
                    }) : m.css({
                        top: M + l
                    })
                },
                Y = function(e, t) {
                    var n = e + t,
                        o = c - p;
                    h = 0 > n ? 0 : n > o ? o : n;
                    var l = parseInt(h * (d - c) / (c - p), 10);
                    s.scrollLeft(l), S ? b.css({
                        right: x - l
                    }) : b.css({
                        left: D + l
                    })
                },
                k = function(e) {
                    return r.minScrollbarLength && (e = Math.max(e, r.minScrollbarLength)), e
                },
                C = function() {
                    var e = {
                        width: c,
                        display: a ? "inherit" : "none"
                    };
                    e.left = I ? s.scrollLeft() + c - d : s.scrollLeft(), y ? e.bottom = T - s.scrollTop() : e.top = M + s.scrollTop(), m.css(e);
                    var t = {
                        top: s.scrollTop(),
                        height: u,
                        display: i ? "inherit" : "none"
                    };
                    S ? t.right = I ? d - s.scrollLeft() - x - L.outerWidth() : x - s.scrollLeft() : t.left = I ? s.scrollLeft() + 2 * c - d - D - L.outerWidth() : D + s.scrollLeft(), b.css(t), w.css({
                        left: h,
                        width: p
                    }), L.css({
                        top: g,
                        height: v
                    })
                },
                j = function() {
                    c = r.includePadding ? s.innerWidth() : s.width(), u = r.includePadding ? s.innerHeight() : s.height(), d = s.prop("scrollWidth"), f = s.prop("scrollHeight"), !r.suppressScrollX && d > c + r.scrollXMarginOffset ? (a = !0, p = k(parseInt(c * c / d, 10)), h = parseInt(s.scrollLeft() * (c - p) / (d - c), 10)) : (a = !1, p = 0, h = 0, s.scrollLeft(0)), !r.suppressScrollY && f > u + r.scrollYMarginOffset ? (i = !0, v = k(parseInt(u * u / f, 10)), g = parseInt(s.scrollTop() * (u - v) / (f - u), 10)) : (i = !1, v = 0, g = 0, s.scrollTop(0)), g >= u - v && (g = u - v), h >= c - p && (h = c - p), C()
                },
                H = function() {
                    var t, n;
                    w.bind("mousedown" + P, function(e) {
                        n = e.pageX, t = w.position().left, m.addClass("in-scrolling"), e.stopPropagation(), e.preventDefault()
                    }), e(document).bind("mousemove" + P, function(e) {
                        m.hasClass("in-scrolling") && (Y(t, e.pageX - n), e.stopPropagation(), e.preventDefault())
                    }), e(document).bind("mouseup" + P, function() {
                        m.hasClass("in-scrolling") && m.removeClass("in-scrolling")
                    }), t = n = null
                },
                O = function() {
                    var t, n;
                    L.bind("mousedown" + P, function(e) {
                        n = e.pageY, t = L.position().top, b.addClass("in-scrolling"), e.stopPropagation(), e.preventDefault()
                    }), e(document).bind("mousemove" + P, function(e) {
                        b.hasClass("in-scrolling") && (X(t, e.pageY - n), e.stopPropagation(), e.preventDefault())
                    }), e(document).bind("mouseup" + P, function() {
                        b.hasClass("in-scrolling") && b.removeClass("in-scrolling")
                    }), t = n = null
                },
                E = function(e, t) {
                    var n = s.scrollTop();
                    if (0 === e) {
                        if (!i) return !1;
                        if (0 === n && t > 0 || n >= f - u && 0 > t) return !r.wheelPropagation
                    }
                    var o = s.scrollLeft();
                    if (0 === t) {
                        if (!a) return !1;
                        if (0 === o && 0 > e || o >= d - c && e > 0) return !r.wheelPropagation
                    }
                    return !0
                },
                A = function() {
                    r.wheelSpeed /= 10;
                    var e = !1;
                    s.bind("mousewheel" + P, function(t, n, o, l) {
                        var c = t.deltaX * t.deltaFactor || o,
                            u = t.deltaY * t.deltaFactor || l;
                        e = !1, r.useBothWheelAxes ? i && !a ? (u ? s.scrollTop(s.scrollTop() - u * r.wheelSpeed) : s.scrollTop(s.scrollTop() + c * r.wheelSpeed), e = !0) : a && !i && (c ? s.scrollLeft(s.scrollLeft() + c * r.wheelSpeed) : s.scrollLeft(s.scrollLeft() - u * r.wheelSpeed), e = !0) : (s.scrollTop(s.scrollTop() - u * r.wheelSpeed), s.scrollLeft(s.scrollLeft() + c * r.wheelSpeed)), j(), e = e || E(c, u), e && (t.stopPropagation(), t.preventDefault())
                    }), s.bind("MozMousePixelScroll" + P, function(t) {
                        e && t.preventDefault()
                    })
                },
                W = function() {
                    var t = !1;
                    s.bind("mouseenter" + P, function() {
                        t = !0
                    }), s.bind("mouseleave" + P, function() {
                        t = !1
                    });
                    var n = !1;
                    e(document).bind("keydown" + P, function(o) {
                        if (t && !e(document.activeElement).is(":input,[contenteditable]")) {
                            var l = 0,
                                r = 0;
                            switch (o.which) {
                                case 37:
                                    l = -30;
                                    break;
                                case 38:
                                    r = 30;
                                    break;
                                case 39:
                                    l = 30;
                                    break;
                                case 40:
                                    r = -30;
                                    break;
                                case 33:
                                    r = 90;
                                    break;
                                case 32:
                                case 34:
                                    r = -90;
                                    break;
                                case 35:
                                    r = -u;
                                    break;
                                case 36:
                                    r = u;
                                    break;
                                default:
                                    return
                            }
                            s.scrollTop(s.scrollTop() - r), s.scrollLeft(s.scrollLeft() + l), n = E(l, r), n && o.preventDefault()
                        }
                    })
                },
                q = function() {
                    var e = function(e) {
                        e.stopPropagation()
                    };
                    L.bind("click" + P, e), b.bind("click" + P, function(e) {
                        var t = parseInt(v / 2, 10),
                            n = e.pageY - b.offset().top - t,
                            o = u - v,
                            l = n / o;
                        0 > l ? l = 0 : l > 1 && (l = 1), s.scrollTop((f - u) * l)
                    }), w.bind("click" + P, e), m.bind("click" + P, function(e) {
                        var t = parseInt(p / 2, 10),
                            n = e.pageX - m.offset().left - t,
                            o = c - p,
                            l = n / o;
                        0 > l ? l = 0 : l > 1 && (l = 1), s.scrollLeft((d - c) * l)
                    })
                },
                z = function() {
                    var t = function(e, t) {
                            s.scrollTop(s.scrollTop() - t), s.scrollLeft(s.scrollLeft() - e), j()
                        },
                        n = {},
                        o = 0,
                        l = {},
                        r = null,
                        a = !1;
                    e(window).bind("touchstart" + P, function() {
                        a = !0
                    }), e(window).bind("touchend" + P, function() {
                        a = !1
                    }), s.bind("touchstart" + P, function(e) {
                        var t = e.originalEvent.targetTouches[0];
                        n.pageX = t.pageX, n.pageY = t.pageY, o = (new Date).getTime(), null !== r && clearInterval(r), e.stopPropagation()
                    }), s.bind("touchmove" + P, function(e) {
                        if (!a && 1 === e.originalEvent.targetTouches.length) {
                            var r = e.originalEvent.targetTouches[0],
                                s = {};
                            s.pageX = r.pageX, s.pageY = r.pageY;
                            var i = s.pageX - n.pageX,
                                c = s.pageY - n.pageY;
                            t(i, c), n = s;
                            var u = (new Date).getTime(),
                                d = u - o;
                            d > 0 && (l.x = i / d, l.y = c / d, o = u), e.preventDefault()
                        }
                    }), s.bind("touchend" + P, function() {
                        clearInterval(r), r = setInterval(function() {
                            return .01 > Math.abs(l.x) && .01 > Math.abs(l.y) ? void clearInterval(r) : (t(30 * l.x, 30 * l.y), l.x *= .8, void(l.y *= .8))
                        }, 10)
                    })
                },
                F = function() {
                    s.bind("scroll" + P, function() {
                        j()
                    })
                },
                B = function() {
                    s.unbind(P), e(window).unbind(P), e(document).unbind(P), s.data("perfect-scrollbar", null), s.data("perfect-scrollbar-update", null), s.data("perfect-scrollbar-destroy", null), w.remove(), L.remove(), m.remove(), b.remove(), m = b = w = L = a = i = c = u = d = f = p = h = T = y = M = v = g = x = S = D = I = P = null
                },
                K = function(t) {
                    s.addClass("ie").addClass("ie" + t);
                    var n = function() {
                            var t = function() {
                                    e(this).addClass("hover")
                                },
                                n = function() {
                                    e(this).removeClass("hover")
                                };
                            s.bind("mouseenter" + P, t).bind("mouseleave" + P, n), m.bind("mouseenter" + P, t).bind("mouseleave" + P, n), b.bind("mouseenter" + P, t).bind("mouseleave" + P, n), w.bind("mouseenter" + P, t).bind("mouseleave" + P, n), L.bind("mouseenter" + P, t).bind("mouseleave" + P, n)
                        },
                        o = function() {
                            C = function() {
                                var e = {
                                    left: h + s.scrollLeft(),
                                    width: p
                                };
                                y ? e.bottom = T : e.top = M, w.css(e);
                                var t = {
                                    top: g + s.scrollTop(),
                                    height: v
                                };
                                S ? t.right = x : t.left = D, L.css(t), w.hide().show(), L.hide().show()
                            }
                        };
                    6 === t && (n(), o())
                },
                Q = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                N = function() {
                    var e = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
                    e && "msie" === e[1] && K(parseInt(e[2], 10)), j(), F(), H(), O(), q(), Q && z(), s.mousewheel && A(), r.useKeyboard && W(), s.data("perfect-scrollbar", s), s.data("perfect-scrollbar-update", j), s.data("perfect-scrollbar-destroy", B)
                };
            return N(), s
        })
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var s = t || window.event,
            a = i.call(arguments, 1),
            c = 0,
            u = 0,
            d = 0,
            f = 0;
        if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (d = -1 * s.detail), "wheelDelta" in s && (d = s.wheelDelta), "wheelDeltaY" in s && (d = s.wheelDeltaY), "wheelDeltaX" in s && (u = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (u = -1 * d, d = 0), c = 0 === d ? u : d, "deltaY" in s && (d = -1 * s.deltaY, c = d), "deltaX" in s && (u = s.deltaX, 0 === d && (c = -1 * u)), 0 !== d || 0 !== u) {
            if (1 === s.deltaMode) {
                var p = e.data(this, "mousewheel-line-height");
                c *= p, d *= p, u *= p
            } else if (2 === s.deltaMode) {
                var h = e.data(this, "mousewheel-page-height");
                c *= h, d *= h, u *= h
            }
            return f = Math.max(Math.abs(d), Math.abs(u)), (!r || r > f) && (r = f, o(s, f) && (r /= 40)), o(s, f) && (c /= 40, u /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), u = Math[u >= 1 ? "floor" : "ceil"](u / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), t.deltaX = u, t.deltaY = d, t.deltaFactor = r, t.deltaMode = 0, a.unshift(t, c, u, d), l && clearTimeout(l), l = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }

    function n() {
        r = null
    }

    function o(e, t) {
        return u.settings.adjustOldDeltas && "mousewheel" === e.type && 0 === t % 120
    }
    var l, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var c = s.length; c;) e.event.fixHooks[s[--c]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener)
                for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = a.length; e;) this.removeEventListener(a[--e], t, !1);
            else this.onmousewheel = null
        },
        getLineHeight: function(t) {
            return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});
jQuery(document).ready(function(t) {
    var e = !1;
    t(".pado-back-top a").click(function(e) {
        t("body,html").animate({
            scrollTop: pado_top_offset
        }, 800), e.preventDefault()
    }), t("#pado-sidebar").removeClass('fixed').css({
        //position: "relative",
        top: pado_offset
    });
    var i = function() {
        var e = (t("#pado-sidebar").offset().top, jQuery(window).width()),
            i = t(window).scrollTop(),
            o = parseInt(t("#pado-main").css("width")),
            a = t("#pado-main").offset().top,
            s = t(window).height(),
            d = document.getElementById("pado-sidebar").getBoundingClientRect().top;
        widthContent = o * ((98 - pado_sidebar_width) / 100), widthSidebar = o * (pado_sidebar_width / 100), 767 >= e ? (t("#pado-sidebar").perfectScrollbar("destroy"), t("#pado-sidebar").height("")) : (t("#pado-sidebar").perfectScrollbar(), t("#pado-sidebar").height(s - d).perfectScrollbar("update"), t("#pado-content").css({
            width: widthContent
        })), i > a ? 767 >= e ? (t("#pado-sidebar").removeClass('fixed').css({
            //position: "relative",
            top: pado_offset
        }), t("#pado-sidebar").css({
            width: widthSidebar
        })) : (t("#pado-sidebar").addClass('fixed').css({
            //position: "fixed",
            top: pado_offset
        }), t("#pado-sidebar").css({
            width: widthSidebar
        })) : (t("#pado-sidebar").removeClass('fixed').css({
            //osition: "relative",
            top: pado_offset
        }), t("#pado-sidebar").css({
            width: widthSidebar
        }))
    };
    t(window).scroll(i), t(window).resize(i), t(window).trigger("scroll"), t(".sidebar_cat_title").parent().find(".sidebar_doc_title").hide(), t(".sidebar_cat_title a").click(function() {
        $this = t(this), $this.parent().parent().hasClass("open_arrow") ? ($this.parent().parent().removeClass("open_arrow"), $this.parents("ul").find(".sidebar_doc_title").slideUp("fast")) : (t(".sidebar_doc_title").slideUp(), t(".open_arrow").removeClass("open_arrow"), $this.parent().parent().addClass("open_arrow"), $this.parents("ul").find(".sidebar_doc_title").slideDown("fast"))
    }).first().trigger("click"), t(".pado-section-enter").each(function(i) {
        var o = t(this).position(),
            a = t(this).attr("id");
        t(this).scrollspy({
            min: o.top,
            max: o.top + t(this).height(),
            onEnter: function(i, o) {
                if (!e) {
                    var s = t("." + a);
                    s.parent().hasClass("open_arrow") || (t(".sidebar_doc_title").slideUp(), t(".open_arrow").removeClass("open_arrow"), s.parent().addClass("open_arrow"), s.parents("ul").find(".sidebar_doc_title").slideDown("fast"))
                }
            },
            onLeave: function(t, e) {}
        })
    }), t(".type-pressapps_document").each(function(i) {
        var o = t(this).position(),
            a = t(this).data("count"),
            s = t(".pado-document-" + a).first();
        t(this).scrollspy({
            min: o.top,
            max: o.top + t(this).height(),
            onEnter: function(t, i) {
                e || s.addClass("sidebar_doc_active")
            },
            onLeave: function(t, e) {
                s.removeClass("sidebar_doc_active")
            }
        })
    }), t(".sidebar_doc_title a,.pado_sidebar_cat_title").each(function() {
        var i = "";
        t(this).click(function(o) {
            o.preventDefault(), e = !0;
            var a = t(this).attr("href"),
                s = jQuery("body").find(a).offset();

            i = s.top;
            if(this.className !== 'pado_sidebar_cat_title') {
              jQuery("html,body").animate({
                  scrollTop: i - pado_offset
              }, 300);
            }
            setTimeout(function() {
                e = !1
            }, 800);
        })
    }), t("a.pado-like-btn").click(function() {
        response_div = jQuery(this).parent().parent(), t.ajax({
            url: PADO.base_url,
            data: {
                vote_like: jQuery(this).attr("post_id")
            },
            beforeSend: function() {},
            success: function(t) {
                response_div.hide().html(t).fadeIn(400)
            },
            complete: function() {}
        })
    }), t("a.pado-dislike-btn").click(function() {
        response_div = jQuery(this).parent().parent(), t.ajax({
            url: PADO.base_url,
            data: {
                vote_dislike: jQuery(this).attr("post_id")
            },
            beforeSend: function() {},
            success: function(t) {
                response_div.hide().html(t).fadeIn(400)
            },
            complete: function() {}
        })
    }), t("p.pado-likes").tooltip({
        placement: "top"
    }), t("p.pado-dislikes").tooltip({
        placement: "top"
    })
}); +

function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.prototype.init = function(e, i, o) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o);
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var r = n[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var p = "hover" == r ? "mouseenter" : "focus",
                    h = "hover" == r ? "mouseleave" : "blur";
                this.$element.on(p + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(h + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show()
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var i = this.tip();
            this.setContent(), this.options.animation && i.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                n = /\s?auto?\s?/i,
                s = n.test(o);
            s && (o = o.replace(n, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var r = this.getPosition(),
                p = i[0].offsetWidth,
                h = i[0].offsetHeight;
            if (s) {
                var a = this.$element.parent(),
                    l = o,
                    f = document.documentElement.scrollTop || document.body.scrollTop,
                    c = "body" == this.options.container ? window.innerWidth : a.outerWidth(),
                    d = "body" == this.options.container ? window.innerHeight : a.outerHeight(),
                    u = "body" == this.options.container ? 0 : a.offset().left;
                o = "bottom" == o && r.top + r.height + h - f > d ? "top" : "top" == o && r.top - f - h < 0 ? "bottom" : "right" == o && r.right + p > c ? "left" : "left" == o && r.left - p < u ? "right" : o, i.removeClass(l).addClass(o)
            }
            var y = this.getCalculatedOffset(o, r, p, h);
            this.applyPlacement(y, o), this.$element.trigger("shown.bs." + this.type)
        }
    }, e.prototype.applyPlacement = function(t, e) {
        var i, o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            r = parseInt(o.css("margin-top"), 10),
            p = parseInt(o.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(p) && (p = 0), t.top = t.top + r, t.left = t.left + p, o.offset(t).addClass("in");
        var h = o[0].offsetWidth,
            a = o[0].offsetHeight;
        if ("top" == e && a != s && (i = !0, t.top = t.top + s - a), /bottom|top/.test(e)) {
            var l = 0;
            t.left < 0 && (l = -2 * t.left, t.left = 0, o.offset(t), h = o[0].offsetWidth, a = o[0].offsetHeight), this.replaceArrow(l - n + h, h, "left")
        } else this.replaceArrow(a - s, a, "top");
        i && o.offset(t)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function() {
        function e() {
            "in" != i.hoverState && o.detach()
        }
        var i = this,
            o = this.tip(),
            n = t.Event("hide.bs." + this.type);
        return this.$element.trigger(n), n.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? o.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.bs." + this.type), this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function() {
        var e = this.$element[0];
        return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, this.$element.offset())
    }, e.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, e.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof i && i;
            n || o.data("bs.tooltip", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(window.jQuery);


/* DEVHUB CUSTOM CODE */
jQuery(document).ready(function() {
  jQuery("#pado-content a[href$='.jpg']:not(.no-popup), #pado-content a[href$='.png']:not(.no-popup), #pado-content a[href$='.gif']:not(.no-popup), #pado-content a[href$='.svg']:not(.no-popup)")
    .fancybox({
        beforeLoad: function() {
            this.title = jQuery(this.element.children()[0]).attr('title');
        }
    });
});
