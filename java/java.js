!function(ie, Q) {
    "object" == typeof exports && typeof module < "u" ? module.exports = Q() : "function" == typeof define && define.amd ? define(Q) : (ie = typeof globalThis < "u" ? globalThis : ie || self).Swiper = Q()
}(this, function() {
    "use strict";
    function ie(t) {
        return null !== t && "object" == typeof t && "constructor"in t && t.constructor === Object
    }
    function Q(t, e) {
        void 0 === t && (t = {}),
        void 0 === e && (e = {}),
        Object.keys(e).forEach(s=>{
            typeof t[s] > "u" ? t[s] = e[s] : ie(e[s]) && ie(t[s]) && Object.keys(e[s]).length > 0 && Q(t[s], e[s])
        }
        )
    }
    const $e = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: ()=>null,
        querySelectorAll: ()=>[],
        getElementById: ()=>null,
        createEvent: ()=>({
            initEvent() {}
        }),
        createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: ()=>[]
        }),
        createElementNS: ()=>({}),
        importNode: ()=>null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function R() {
        const t = typeof document < "u" ? document : {};
        return Q(t, $e),
        t
    }
    const We = {
        document: $e,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: ()=>({}),
        requestAnimationFrame: t=>typeof setTimeout > "u" ? (t(),
        null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
            typeof setTimeout > "u" || clearTimeout(t)
        }
    };
    function Y() {
        const t = typeof window < "u" ? window : {};
        return Q(t, We),
        t
    }
    function J(t, e) {
        return void 0 === e && (e = 0),
        setTimeout(t, e)
    }
    function q() {
        return Date.now()
    }
    function we(t, e) {
        void 0 === e && (e = "x");
        const s = Y();
        let i, r, a;
        const f = function _e(t) {
            const e = Y();
            let s;
            return e.getComputedStyle && (s = e.getComputedStyle(t, null)),
            !s && t.currentStyle && (s = t.currentStyle),
            s || (s = t.style),
            s
        }(t);
        return s.WebKitCSSMatrix ? (r = f.transform || f.webkitTransform,
        r.split(",").length > 6 && (r = r.split(", ").map(d=>d.replace(",", ".")).join(", ")),
        a = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (a = f.MozTransform || f.OTransform || f.MsTransform || f.msTransform || f.transform || f.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        i = a.toString().split(",")),
        "x" === e && (r = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
        "y" === e && (r = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
        r || 0
    }
    function ne(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
    }
    function je(t) {
        return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (1 === t.nodeType || 11 === t.nodeType)
    }
    function V() {
        const t = Object(arguments.length <= 0 ? void 0 : arguments[0])
          , e = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != i && !je(i)) {
                const r = Object.keys(Object(i)).filter(a=>e.indexOf(a) < 0);
                for (let a = 0, f = r.length; a < f; a += 1) {
                    const d = r[a]
                      , n = Object.getOwnPropertyDescriptor(i, d);
                    void 0 !== n && n.enumerable && (ne(t[d]) && ne(i[d]) ? i[d].__swiper__ ? t[d] = i[d] : V(t[d], i[d]) : !ne(t[d]) && ne(i[d]) ? (t[d] = {},
                    i[d].__swiper__ ? t[d] = i[d] : V(t[d], i[d])) : t[d] = i[d])
                }
            }
        }
        return t
    }
    function le(t, e, s) {
        t.style.setProperty(e, s)
    }
    function Oe(t) {
        let {swiper: e, targetPosition: s, side: i} = t;
        const r = Y()
          , a = -e.translate;
        let d, f = null;
        const n = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none",
        r.cancelAnimationFrame(e.cssModeFrameID);
        const p = s > a ? "next" : "prev"
          , c = (o,u)=>"next" === p && o >= u || "prev" === p && o <= u
          , l = ()=>{
            d = (new Date).getTime(),
            null === f && (f = d);
            const o = Math.max(Math.min((d - f) / n, 1), 0)
              , u = .5 - Math.cos(o * Math.PI) / 2;
            let y = a + u * (s - a);
            if (c(y, s) && (y = s),
            e.wrapperEl.scrollTo({
                [i]: y
            }),
            c(y, s))
                return e.wrapperEl.style.overflow = "hidden",
                e.wrapperEl.style.scrollSnapType = "",
                setTimeout(()=>{
                    e.wrapperEl.style.overflow = "",
                    e.wrapperEl.scrollTo({
                        [i]: y
                    })
                }
                ),
                void r.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = r.requestAnimationFrame(l)
        }
        ;
        l()
    }
    function ee(t) {
        return t.querySelector(".swiper-slide-transform") || t.shadowEl && t.shadowEl.querySelector(".swiper-slide-transform") || t
    }
    function N(t, e) {
        return void 0 === e && (e = ""),
        [...t.children].filter(s=>s.matches(e))
    }
    function _(t, e) {
        void 0 === e && (e = []);
        const s = document.createElement(t);
        return s.classList.add(...Array.isArray(e) ? e : [e]),
        s
    }
    function ue(t) {
        const e = Y()
          , s = R()
          , i = t.getBoundingClientRect()
          , r = s.body;
        return {
            top: i.top + (t === e ? e.scrollY : t.scrollTop) - (t.clientTop || r.clientTop || 0),
            left: i.left + (t === e ? e.scrollX : t.scrollLeft) - (t.clientLeft || r.clientLeft || 0)
        }
    }
    function K(t, e) {
        return Y().getComputedStyle(t, null).getPropertyValue(e)
    }
    function oe(t) {
        let s, e = t;
        if (e) {
            for (s = 0; null !== (e = e.previousSibling); )
                1 === e.nodeType && (s += 1);
            return s
        }
    }
    function te(t, e) {
        const s = [];
        let i = t.parentElement;
        for (; i; )
            e ? i.matches(e) && s.push(i) : s.push(i),
            i = i.parentElement;
        return s
    }
    function de(t, e) {
        e && t.addEventListener("transitionend", function s(i) {
            i.target === t && (e.call(t, i),
            t.removeEventListener("transitionend", s))
        })
    }
    function ye(t, e, s) {
        const i = Y();
        return s ? t["width" === e ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-left" : "margin-bottom")) : t.offsetWidth
    }
    let be, Se, xe;
    function De() {
        return be || (be = function Ze() {
            const t = Y()
              , e = R();
            return {
                smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
                touch: !!("ontouchstart"in t || t.DocumentTouch && e instanceof t.DocumentTouch)
            }
        }()),
        be
    }
    var at = {
        on(t, e, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed || "function" != typeof e)
                return i;
            const r = s ? "unshift" : "push";
            return t.split(" ").forEach(a=>{
                i.eventsListeners[a] || (i.eventsListeners[a] = []),
                i.eventsListeners[a][r](e)
            }
            ),
            i
        },
        once(t, e, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed || "function" != typeof e)
                return i;
            function r() {
                i.off(t, r),
                r.__emitterProxy && delete r.__emitterProxy;
                for (var a = arguments.length, f = new Array(a), d = 0; d < a; d++)
                    f[d] = arguments[d];
                e.apply(i, f)
            }
            return r.__emitterProxy = e,
            i.on(t, r, s)
        },
        onAny(t, e) {
            const s = this;
            if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                return s;
            const i = e ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(t) < 0 && s.eventsAnyListeners[i](t),
            s
        },
        offAny(t) {
            const e = this;
            if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
                return e;
            const s = e.eventsAnyListeners.indexOf(t);
            return s >= 0 && e.eventsAnyListeners.splice(s, 1),
            e
        },
        off(t, e) {
            const s = this;
            return !s.eventsListeners || s.destroyed || !s.eventsListeners || t.split(" ").forEach(i=>{
                typeof e > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((r,a)=>{
                    (r === e || r.__emitterProxy && r.__emitterProxy === e) && s.eventsListeners[i].splice(a, 1)
                }
                )
            }
            ),
            s
        },
        emit() {
            const t = this;
            if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
                return t;
            let e, s, i;
            for (var r = arguments.length, a = new Array(r), f = 0; f < r; f++)
                a[f] = arguments[f];
            return "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0],
            s = a.slice(1, a.length),
            i = t) : (e = a[0].events,
            s = a[0].data,
            i = a[0].context || t),
            s.unshift(i),
            (Array.isArray(e) ? e : e.split(" ")).forEach(n=>{
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(p=>{
                    p.apply(i, [n, ...s])
                }
                ),
                t.eventsListeners && t.eventsListeners[n] && t.eventsListeners[n].forEach(p=>{
                    p.apply(i, s)
                }
                )
            }
            ),
            t
        }
    };
    const me = (t,e)=>{
        if (!t || t.destroyed || !t.params)
            return;
        const i = e.closest(t.isElement ? "swiper-slide" : `.${t.params.slideClass}`);
        if (i) {
            const r = i.querySelector(`.${t.params.lazyPreloaderClass}`);
            r && r.remove()
        }
    }
      , Ee = (t,e)=>{
        if (!t.slides[e])
            return;
        const s = t.slides[e].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading")
    }
      , Te = t=>{
        if (!t || t.destroyed || !t.params)
            return;
        let e = t.params.lazyPreloadPrevNext;
        const s = t.slides.length;
        if (!s || !e || e < 0)
            return;
        e = Math.min(e, s);
        const i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView)
          , r = t.activeIndex;
        if (t.params.grid && t.params.grid.rows > 1) {
            const f = r
              , d = [f - e];
            return d.push(...Array.from({
                length: e
            }).map((n,p)=>f + i + p)),
            void t.slides.forEach((n,p)=>{
                d.includes(n.column) && Ee(t, p)
            }
            )
        }
        const a = r + i - 1;
        if (t.params.rewind || t.params.loop)
            for (let f = r - e; f <= a + e; f += 1) {
                const d = (f % s + s) % s;
                (d < r || d > a) && Ee(t, d)
            }
        else
            for (let f = Math.max(r - e, 0); f <= Math.min(a + e, s - 1); f += 1)
                f !== r && (f > a || f < r) && Ee(t, f)
    }
    ;
    function ke(t) {
        let {swiper: e, runCallbacks: s, direction: i, step: r} = t;
        const {activeIndex: a, previousIndex: f} = e;
        let d = i;
        if (d || (d = a > f ? "next" : a < f ? "prev" : "reset"),
        e.emit(`transition ${r}`),
        s && a !== f) {
            if ("reset" === d)
                return void e.emit(`slideResetTransition ${r}`);
            e.emit(`slideChangeTransition ${r}`),
            e.emit("next" === d ? `slideNextTransition ${r}` : `slidePrevTransition ${r}`)
        }
    }
    function Nt(t) {
        const e = this
          , s = R()
          , i = Y()
          , r = e.touchEventsData;
        r.evCache.push(t);
        const {params: a, touches: f, enabled: d} = e;
        if (!d || !a.simulateTouch && "mouse" === t.pointerType || e.animating && a.preventInteractionOnTransition)
            return;
        !e.animating && a.cssMode && a.loop && e.loopFix();
        let n = t;
        n.originalEvent && (n = n.originalEvent);
        let p = n.target;
        if ("wrapper" === a.touchEventsTarget && !e.wrapperEl.contains(p) || "which"in n && 3 === n.which || "button"in n && n.button > 0 || r.isTouched && r.isMoved)
            return;
        const c = !!a.noSwipingClass && "" !== a.noSwipingClass
          , l = t.composedPath ? t.composedPath() : t.path;
        c && n.target && n.target.shadowRoot && l && (p = l[0]);
        const o = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`;
        if (a.noSwiping && (n.target && n.target.shadowRoot ? function Rt(t, e) {
            return void 0 === e && (e = this),
            function s(i) {
                if (!i || i === R() || i === Y())
                    return null;
                i.assignedSlot && (i = i.assignedSlot);
                const r = i.closest(t);
                return r || i.getRootNode ? r || s(i.getRootNode().host) : null
            }(e)
        }(o, p) : p.closest(o)))
            return void (e.allowClick = !0);
        if (a.swipeHandler && !p.closest(a.swipeHandler))
            return;
        f.currentX = n.pageX,
        f.currentY = n.pageY;
        const y = f.currentX
          , g = f.currentY
          , v = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection
          , b = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (v && (y <= b || y >= i.innerWidth - b)) {
            if ("prevent" !== v)
                return;
            t.preventDefault()
        }
        Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        f.startX = y,
        f.startY = g,
        r.touchStartTime = q(),
        e.allowClick = !0,
        e.updateSize(),
        e.swipeDirection = void 0,
        a.threshold > 0 && (r.allowThresholdMove = !1);
        let h = !0;
        p.matches(r.focusableElements) && (h = !1,
        "SELECT" === p.nodeName && (r.isTouched = !1)),
        s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== p && s.activeElement.blur(),
        (a.touchStartForcePreventDefault || h && e.allowTouchMove && a.touchStartPreventDefault) && !p.isContentEditable && n.preventDefault(),
        a.freeMode && a.freeMode.enabled && e.freeMode && e.animating && !a.cssMode && e.freeMode.onTouchStart(),
        e.emit("touchStart", n)
    }
    function Vt(t) {
        const e = R()
          , s = this
          , i = s.touchEventsData
          , {params: r, touches: a, rtlTranslate: f, enabled: d} = s;
        if (!d || !r.simulateTouch && "mouse" === t.pointerType)
            return;
        let n = t;
        if (n.originalEvent && (n = n.originalEvent),
        !i.isTouched)
            return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", n));
        const p = i.evCache.findIndex(I=>I.pointerId === n.pointerId);
        p >= 0 && (i.evCache[p] = n);
        const c = i.evCache.length > 1 ? i.evCache[0] : n
          , l = c.pageX
          , o = c.pageY;
        if (n.preventedByNestedSwiper)
            return a.startX = l,
            void (a.startY = o);
        if (!s.allowTouchMove)
            return n.target.matches(i.focusableElements) || (s.allowClick = !1),
            void (i.isTouched && (Object.assign(a, {
                startX: l,
                startY: o,
                prevX: s.touches.currentX,
                prevY: s.touches.currentY,
                currentX: l,
                currentY: o
            }),
            i.touchStartTime = q()));
        if (r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (o < a.startY && s.translate <= s.maxTranslate() || o > a.startY && s.translate >= s.minTranslate())
                    return i.isTouched = !1,
                    void (i.isMoved = !1)
            } else if (l < a.startX && s.translate <= s.maxTranslate() || l > a.startX && s.translate >= s.minTranslate())
                return;
        if (e.activeElement && n.target === e.activeElement && n.target.matches(i.focusableElements))
            return i.isMoved = !0,
            void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", n),
        n.targetTouches && n.targetTouches.length > 1)
            return;
        a.currentX = l,
        a.currentY = o;
        const u = a.currentX - a.startX
          , y = a.currentY - a.startY;
        if (s.params.threshold && Math.sqrt(u ** 2 + y ** 2) < s.params.threshold)
            return;
        if (typeof i.isScrolling > "u") {
            let I;
            s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : u * u + y * y >= 25 && (I = 180 * Math.atan2(Math.abs(y), Math.abs(u)) / Math.PI,
            i.isScrolling = s.isHorizontal() ? I > r.touchAngle : 90 - I > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", n),
        typeof i.startMoving > "u" && (a.currentX !== a.startX || a.currentY !== a.startY) && (i.startMoving = !0),
        i.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1)
            return void (i.isTouched = !1);
        if (!i.startMoving)
            return;
        s.allowClick = !1,
        !r.cssMode && n.cancelable && n.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && n.stopPropagation();
        let g = s.isHorizontal() ? u : y
          , v = s.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
        r.oneWayMovement && (g = Math.abs(g) * (f ? 1 : -1),
        v = Math.abs(v) * (f ? 1 : -1)),
        a.diff = g,
        g *= r.touchRatio,
        f && (g = -g,
        v = -v);
        const b = s.touchesDirection;
        s.swipeDirection = g > 0 ? "prev" : "next",
        s.touchesDirection = v > 0 ? "prev" : "next";
        const h = s.params.loop && !r.cssMode;
        if (!i.isMoved) {
            if (h && s.loopFix({
                direction: s.swipeDirection
            }),
            i.startTranslate = s.getTranslate(),
            s.setTransition(0),
            s.animating) {
                const I = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                s.wrapperEl.dispatchEvent(I)
            }
            i.allowMomentumBounce = !1,
            r.grabCursor && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!0),
            s.emit("sliderFirstMove", n)
        }
        let m;
        i.isMoved && b !== s.touchesDirection && h && Math.abs(g) >= 1 && (s.loopFix({
            direction: s.swipeDirection,
            setTranslate: !0
        }),
        m = !0),
        s.emit("sliderMove", n),
        i.isMoved = !0,
        i.currentTranslate = g + i.startTranslate;
        let S = !0
          , C = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (C = 0),
        g > 0 ? (h && !m && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }),
        i.currentTranslate > s.minTranslate() && (S = !1,
        r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** C))) : g < 0 && (h && !m && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
        }),
        i.currentTranslate < s.maxTranslate() && (S = !1,
        r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** C))),
        S && (n.preventedByNestedSwiper = !0),
        !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev && !s.allowSlideNext && (i.currentTranslate = i.startTranslate),
        r.threshold > 0) {
            if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
                return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return i.allowThresholdMove = !0,
                a.startX = a.currentX,
                a.startY = a.currentY,
                i.currentTranslate = i.startTranslate,
                void (a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
        }
        !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(),
        s.updateSlidesClasses()),
        r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate))
    }
    function Ft(t) {
        const e = this
          , s = e.touchEventsData
          , i = s.evCache.findIndex(m=>m.pointerId === t.pointerId);
        if (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(t.type) && ("pointercancel" !== t.type || !e.browser.isSafari && !e.browser.isWebView))
            return;
        const {params: r, touches: a, rtlTranslate: f, slidesGrid: d, enabled: n} = e;
        if (!n || !r.simulateTouch && "mouse" === t.pointerType)
            return;
        let p = t;
        if (p.originalEvent && (p = p.originalEvent),
        s.allowTouchCallbacks && e.emit("touchEnd", p),
        s.allowTouchCallbacks = !1,
        !s.isTouched)
            return s.isMoved && r.grabCursor && e.setGrabCursor(!1),
            s.isMoved = !1,
            void (s.startMoving = !1);
        r.grabCursor && s.isMoved && s.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
        const c = q()
          , l = c - s.touchStartTime;
        if (e.allowClick) {
            const m = p.path || p.composedPath && p.composedPath();
            e.updateClickedSlide(m && m[0] || p.target),
            e.emit("tap click", p),
            l < 300 && c - s.lastClickTime < 300 && e.emit("doubleTap doubleClick", p)
        }
        if (s.lastClickTime = q(),
        J(()=>{
            e.destroyed || (e.allowClick = !0)
        }
        ),
        !s.isTouched || !s.isMoved || !e.swipeDirection || 0 === a.diff || s.currentTranslate === s.startTranslate)
            return s.isTouched = !1,
            s.isMoved = !1,
            void (s.startMoving = !1);
        let o;
        if (s.isTouched = !1,
        s.isMoved = !1,
        s.startMoving = !1,
        o = r.followFinger ? f ? e.translate : -e.translate : -s.currentTranslate,
        r.cssMode)
            return;
        if (r.freeMode && r.freeMode.enabled)
            return void e.freeMode.onTouchEnd({
                currentPos: o
            });
        let u = 0
          , y = e.slidesSizesGrid[0];
        for (let m = 0; m < d.length; m += m < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            const S = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            typeof d[m + S] < "u" ? o >= d[m] && o < d[m + S] && (u = m,
            y = d[m + S] - d[m]) : o >= d[m] && (u = m,
            y = d[d.length - 1] - d[d.length - 2])
        }
        let g = null
          , v = null;
        r.rewind && (e.isBeginning ? v = r.virtual && r.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
        const b = (o - d[u]) / y
          , h = u < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (l > r.longSwipesMs) {
            if (!r.longSwipes)
                return void e.slideTo(e.activeIndex);
            "next" === e.swipeDirection && e.slideTo(b >= r.longSwipesRatio ? r.rewind && e.isEnd ? g : u + h : u),
            "prev" === e.swipeDirection && (b > 1 - r.longSwipesRatio ? e.slideTo(u + h) : null !== v && b < 0 && Math.abs(b) > r.longSwipesRatio ? e.slideTo(v) : e.slideTo(u))
        } else {
            if (!r.shortSwipes)
                return void e.slideTo(e.activeIndex);
            !e.navigation || p.target !== e.navigation.nextEl && p.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(null !== g ? g : u + h),
            "prev" === e.swipeDirection && e.slideTo(null !== v ? v : u)) : e.slideTo(p.target === e.navigation.nextEl ? u + h : u)
        }
    }
    function He() {
        const t = this
          , {params: e, el: s} = t;
        if (s && 0 === s.offsetWidth)
            return;
        e.breakpoints && t.setBreakpoint();
        const {allowSlideNext: i, allowSlidePrev: r, snapGrid: a} = t
          , f = t.virtual && t.params.virtual.enabled;
        t.allowSlideNext = !0,
        t.allowSlidePrev = !0,
        t.updateSize(),
        t.updateSlides(),
        t.updateSlidesClasses(),
        !("auto" === e.slidesPerView || e.slidesPerView > 1) || !t.isEnd || t.isBeginning || t.params.centeredSlides || f && e.loop ? t.params.loop && !f ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0) : t.slideTo(t.slides.length - 1, 0, !1, !0),
        t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout),
        t.autoplay.resizeTimeout = setTimeout(()=>{
            t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
        }
        , 500)),
        t.allowSlidePrev = r,
        t.allowSlideNext = i,
        t.params.watchOverflow && a !== t.snapGrid && t.checkOverflow()
    }
    function Wt(t) {
        const e = this;
        e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(),
        e.params.preventClicksPropagation && e.animating && (t.stopPropagation(),
        t.stopImmediatePropagation())))
    }
    function qt() {
        const t = this
          , {wrapperEl: e, rtlTranslate: s, enabled: i} = t;
        if (!i)
            return;
        let r;
        t.previousTranslate = t.translate,
        t.translate = t.isHorizontal() ? -e.scrollLeft : -e.scrollTop,
        0 === t.translate && (t.translate = 0),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
        const a = t.maxTranslate() - t.minTranslate();
        r = 0 === a ? 0 : (t.translate - t.minTranslate()) / a,
        r !== t.progress && t.updateProgress(s ? -t.translate : t.translate),
        t.emit("setTranslate", t.translate, !1)
    }
    function _t(t) {
        const e = this;
        me(e, t.target),
        !e.params.cssMode && ("auto" === e.params.slidesPerView || e.params.autoHeight) && e.update()
    }
    let Ge = !1;
    function jt() {}
    const Be = (t,e)=>{
        const s = R()
          , {params: i, el: r, wrapperEl: a, device: f} = t
          , d = !!i.nested
          , n = "on" === e ? "addEventListener" : "removeEventListener"
          , p = e;
        r[n]("pointerdown", t.onTouchStart, {
            passive: !1
        }),
        s[n]("pointermove", t.onTouchMove, {
            passive: !1,
            capture: d
        }),
        s[n]("pointerup", t.onTouchEnd, {
            passive: !0
        }),
        s[n]("pointercancel", t.onTouchEnd, {
            passive: !0
        }),
        s[n]("pointerout", t.onTouchEnd, {
            passive: !0
        }),
        s[n]("pointerleave", t.onTouchEnd, {
            passive: !0
        }),
        (i.preventClicks || i.preventClicksPropagation) && r[n]("click", t.onClick, !0),
        i.cssMode && a[n]("scroll", t.onScroll),
        t[p](i.updateOnWindowResize ? f.ios || f.android ? "resize orientationchange observerUpdate" : "resize observerUpdate" : "observerUpdate", He, !0),
        r[n]("load", t.onLoad, {
            capture: !0
        })
    }
      , Xe = (t,e)=>t.grid && e.grid && e.grid.rows > 1;
    var Ye = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function ls(t, e) {
        return function(i) {
            void 0 === i && (i = {});
            const r = Object.keys(i)[0]
              , a = i[r];
            "object" == typeof a && null !== a ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === t[r] && (t[r] = {
                auto: !0
            }),
            r in t && "enabled"in a ? (!0 === t[r] && (t[r] = {
                enabled: !0
            }),
            "object" == typeof t[r] && !("enabled"in t[r]) && (t[r].enabled = !0),
            t[r] || (t[r] = {
                enabled: !1
            }),
            V(e, i)) : V(e, i)) : V(e, i)
        }
    }
    const Me = {
        eventsEmitter: at,
        update: {
            updateSize: function rt() {
                const t = this;
                let e, s;
                const i = t.el;
                e = typeof t.params.width < "u" && null !== t.params.width ? t.params.width : i.clientWidth,
                s = typeof t.params.height < "u" && null !== t.params.height ? t.params.height : i.clientHeight,
                !(0 === e && t.isHorizontal() || 0 === s && t.isVertical()) && (e = e - parseInt(K(i, "padding-left") || 0, 10) - parseInt(K(i, "padding-right") || 0, 10),
                s = s - parseInt(K(i, "padding-top") || 0, 10) - parseInt(K(i, "padding-bottom") || 0, 10),
                Number.isNaN(e) && (e = 0),
                Number.isNaN(s) && (s = 0),
                Object.assign(t, {
                    width: e,
                    height: s,
                    size: t.isHorizontal() ? e : s
                }))
            },
            updateSlides: function nt() {
                const t = this;
                function e(P) {
                    return t.isHorizontal() ? P : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[P]
                }
                function s(P, M) {
                    return parseFloat(P.getPropertyValue(e(M)) || 0)
                }
                const i = t.params
                  , {wrapperEl: r, slidesEl: a, size: f, rtlTranslate: d, wrongRTL: n} = t
                  , p = t.virtual && i.virtual.enabled
                  , c = p ? t.virtual.slides.length : t.slides.length
                  , l = N(a, `.${t.params.slideClass}, swiper-slide`)
                  , o = p ? t.virtual.slides.length : l.length;
                let u = [];
                const y = []
                  , g = [];
                let v = i.slidesOffsetBefore;
                "function" == typeof v && (v = i.slidesOffsetBefore.call(t));
                let b = i.slidesOffsetAfter;
                "function" == typeof b && (b = i.slidesOffsetAfter.call(t));
                const h = t.snapGrid.length
                  , m = t.slidesGrid.length;
                let S = i.spaceBetween
                  , C = -v
                  , I = 0
                  , A = 0;
                if (typeof f > "u")
                    return;
                "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * f : "string" == typeof S && (S = parseFloat(S)),
                t.virtualSize = -S,
                l.forEach(P=>{
                    d ? P.style.marginLeft = "" : P.style.marginRight = "",
                    P.style.marginBottom = "",
                    P.style.marginTop = ""
                }
                ),
                i.centeredSlides && i.cssMode && (le(r, "--swiper-centered-offset-before", ""),
                le(r, "--swiper-centered-offset-after", ""));
                const D = i.grid && i.grid.rows > 1 && t.grid;
                let L;
                D && t.grid.initSlides(o);
                const k = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(P=>typeof i.breakpoints[P].slidesPerView < "u").length > 0;
                for (let P = 0; P < o; P += 1) {
                    let M;
                    if (L = 0,
                    l[P] && (M = l[P]),
                    D && t.grid.updateSlide(P, M, o, e),
                    !l[P] || "none" !== K(M, "display")) {
                        if ("auto" === i.slidesPerView) {
                            k && (l[P].style[e("width")] = "");
                            const E = getComputedStyle(M)
                              , w = M.style.transform
                              , x = M.style.webkitTransform;
                            if (w && (M.style.transform = "none"),
                            x && (M.style.webkitTransform = "none"),
                            i.roundLengths)
                                L = t.isHorizontal() ? ye(M, "width", !0) : ye(M, "height", !0);
                            else {
                                const O = s(E, "width")
                                  , T = s(E, "padding-left")
                                  , $ = s(E, "padding-right")
                                  , z = s(E, "margin-left")
                                  , G = s(E, "margin-right")
                                  , X = E.getPropertyValue("box-sizing");
                                if (X && "border-box" === X)
                                    L = O + z + G;
                                else {
                                    const {clientWidth: W, offsetWidth: H} = M;
                                    L = O + T + $ + z + G + (H - W)
                                }
                            }
                            w && (M.style.transform = w),
                            x && (M.style.webkitTransform = x),
                            i.roundLengths && (L = Math.floor(L))
                        } else
                            L = (f - (i.slidesPerView - 1) * S) / i.slidesPerView,
                            i.roundLengths && (L = Math.floor(L)),
                            l[P] && (l[P].style[e("width")] = `${L}px`);
                        l[P] && (l[P].swiperSlideSize = L),
                        g.push(L),
                        i.centeredSlides ? (C = C + L / 2 + I / 2 + S,
                        0 === I && 0 !== P && (C = C - f / 2 - S),
                        0 === P && (C = C - f / 2 - S),
                        Math.abs(C) < .001 && (C = 0),
                        i.roundLengths && (C = Math.floor(C)),
                        A % i.slidesPerGroup == 0 && u.push(C),
                        y.push(C)) : (i.roundLengths && (C = Math.floor(C)),
                        (A - Math.min(t.params.slidesPerGroupSkip, A)) % t.params.slidesPerGroup == 0 && u.push(C),
                        y.push(C),
                        C = C + L + S),
                        t.virtualSize += L + S,
                        I = L,
                        A += 1
                    }
                }
                if (t.virtualSize = Math.max(t.virtualSize, f) + b,
                d && n && ("slide" === i.effect || "coverflow" === i.effect) && (r.style.width = `${t.virtualSize + S}px`),
                i.setWrapperSize && (r.style[e("width")] = `${t.virtualSize + S}px`),
                D && t.grid.updateWrapperSize(L, u, e),
                !i.centeredSlides) {
                    const P = [];
                    for (let M = 0; M < u.length; M += 1) {
                        let E = u[M];
                        i.roundLengths && (E = Math.floor(E)),
                        u[M] <= t.virtualSize - f && P.push(E)
                    }
                    u = P,
                    Math.floor(t.virtualSize - f) - Math.floor(u[u.length - 1]) > 1 && u.push(t.virtualSize - f)
                }
                if (p && i.loop) {
                    const P = g[0] + S;
                    if (i.slidesPerGroup > 1) {
                        const M = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup)
                          , E = P * i.slidesPerGroup;
                        for (let w = 0; w < M; w += 1)
                            u.push(u[u.length - 1] + E)
                    }
                    for (let M = 0; M < t.virtual.slidesBefore + t.virtual.slidesAfter; M += 1)
                        1 === i.slidesPerGroup && u.push(u[u.length - 1] + P),
                        y.push(y[y.length - 1] + P),
                        t.virtualSize += P
                }
                if (0 === u.length && (u = [0]),
                0 !== S) {
                    const P = t.isHorizontal() && d ? "marginLeft" : e("marginRight");
                    l.filter((M,E)=>!(i.cssMode && !i.loop) || E !== l.length - 1).forEach(M=>{
                        M.style[P] = `${S}px`
                    }
                    )
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                    let P = 0;
                    g.forEach(E=>{
                        P += E + (S || 0)
                    }
                    ),
                    P -= S;
                    const M = P - f;
                    u = u.map(E=>E <= 0 ? -v : E > M ? M + b : E)
                }
                if (i.centerInsufficientSlides) {
                    let P = 0;
                    if (g.forEach(M=>{
                        P += M + (S || 0)
                    }
                    ),
                    P -= S,
                    P < f) {
                        const M = (f - P) / 2;
                        u.forEach((E,w)=>{
                            u[w] = E - M
                        }
                        ),
                        y.forEach((E,w)=>{
                            y[w] = E + M
                        }
                        )
                    }
                }
                if (Object.assign(t, {
                    slides: l,
                    snapGrid: u,
                    slidesGrid: y,
                    slidesSizesGrid: g
                }),
                i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                    le(r, "--swiper-centered-offset-before", -u[0] + "px"),
                    le(r, "--swiper-centered-offset-after", t.size / 2 - g[g.length - 1] / 2 + "px");
                    const P = -t.snapGrid[0]
                      , M = -t.slidesGrid[0];
                    t.snapGrid = t.snapGrid.map(E=>E + P),
                    t.slidesGrid = t.slidesGrid.map(E=>E + M)
                }
                if (o !== c && t.emit("slidesLengthChange"),
                u.length !== h && (t.params.watchOverflow && t.checkOverflow(),
                t.emit("snapGridLengthChange")),
                y.length !== m && t.emit("slidesGridLengthChange"),
                i.watchSlidesProgress && t.updateSlidesOffset(),
                !(p || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                    const P = `${i.containerModifierClass}backface-hidden`
                      , M = t.el.classList.contains(P);
                    o <= i.maxBackfaceHiddenSlides ? M || t.el.classList.add(P) : M && t.el.classList.remove(P)
                }
            },
            updateAutoHeight: function lt(t) {
                const e = this
                  , s = []
                  , i = e.virtual && e.params.virtual.enabled;
                let a, r = 0;
                "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
                const f = d=>i ? e.slides[e.getSlideIndexByData(d)] : e.slides[d];
                if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
                    if (e.params.centeredSlides)
                        (e.visibleSlides || []).forEach(d=>{
                            s.push(d)
                        }
                        );
                    else
                        for (a = 0; a < Math.ceil(e.params.slidesPerView); a += 1) {
                            const d = e.activeIndex + a;
                            if (d > e.slides.length && !i)
                                break;
                            s.push(f(d))
                        }
                else
                    s.push(f(e.activeIndex));
                for (a = 0; a < s.length; a += 1)
                    if (typeof s[a] < "u") {
                        const d = s[a].offsetHeight;
                        r = d > r ? d : r
                    }
                (r || 0 === r) && (e.wrapperEl.style.height = `${r}px`)
            },
            updateSlidesOffset: function ot() {
                const t = this
                  , e = t.slides
                  , s = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
                for (let i = 0; i < e.length; i += 1)
                    e[i].swiperSlideOffset = (t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - s - t.cssOverflowAdjustment()
            },
            updateSlidesProgress: function dt(t) {
                void 0 === t && (t = this && this.translate || 0);
                const e = this
                  , s = e.params
                  , {slides: i, rtlTranslate: r, snapGrid: a} = e;
                if (0 === i.length)
                    return;
                typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
                let f = -t;
                r && (f = t),
                i.forEach(n=>{
                    n.classList.remove(s.slideVisibleClass)
                }
                ),
                e.visibleSlidesIndexes = [],
                e.visibleSlides = [];
                let d = s.spaceBetween;
                "string" == typeof d && d.indexOf("%") >= 0 ? d = parseFloat(d.replace("%", "")) / 100 * e.size : "string" == typeof d && (d = parseFloat(d));
                for (let n = 0; n < i.length; n += 1) {
                    const p = i[n];
                    let c = p.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (c -= i[0].swiperSlideOffset);
                    const l = (f + (s.centeredSlides ? e.minTranslate() : 0) - c) / (p.swiperSlideSize + d)
                      , o = (f - a[0] + (s.centeredSlides ? e.minTranslate() : 0) - c) / (p.swiperSlideSize + d)
                      , u = -(f - c)
                      , y = u + e.slidesSizesGrid[n];
                    (u >= 0 && u < e.size - 1 || y > 1 && y <= e.size || u <= 0 && y >= e.size) && (e.visibleSlides.push(p),
                    e.visibleSlidesIndexes.push(n),
                    i[n].classList.add(s.slideVisibleClass)),
                    p.progress = r ? -l : l,
                    p.originalProgress = r ? -o : o
                }
            },
            updateProgress: function ct(t) {
                const e = this;
                typeof t > "u" && (t = e && e.translate && e.translate * (e.rtlTranslate ? -1 : 1) || 0);
                const s = e.params
                  , i = e.maxTranslate() - e.minTranslate();
                let {progress: r, isBeginning: a, isEnd: f, progressLoop: d} = e;
                const n = a
                  , p = f;
                if (0 === i)
                    r = 0,
                    a = !0,
                    f = !0;
                else {
                    r = (t - e.minTranslate()) / i;
                    const c = Math.abs(t - e.minTranslate()) < 1
                      , l = Math.abs(t - e.maxTranslate()) < 1;
                    a = c || r <= 0,
                    f = l || r >= 1,
                    c && (r = 0),
                    l && (r = 1)
                }
                if (s.loop) {
                    const c = e.getSlideIndexByData(0)
                      , l = e.getSlideIndexByData(e.slides.length - 1)
                      , o = e.slidesGrid[c]
                      , u = e.slidesGrid[l]
                      , y = e.slidesGrid[e.slidesGrid.length - 1]
                      , g = Math.abs(t);
                    d = g >= o ? (g - o) / y : (g + y - u) / y,
                    d > 1 && (d -= 1)
                }
                Object.assign(e, {
                    progress: r,
                    progressLoop: d,
                    isBeginning: a,
                    isEnd: f
                }),
                (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && e.updateSlidesProgress(t),
                a && !n && e.emit("reachBeginning toEdge"),
                f && !p && e.emit("reachEnd toEdge"),
                (n && !a || p && !f) && e.emit("fromEdge"),
                e.emit("progress", r)
            },
            updateSlidesClasses: function ft() {
                const t = this
                  , {slides: e, params: s, slidesEl: i, activeIndex: r} = t
                  , a = t.virtual && s.virtual.enabled
                  , f = n=>N(i, `.${s.slideClass}${n}, swiper-slide ${n}`)[0];
                let d;
                if (e.forEach(n=>{
                    n.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
                }
                ),
                a)
                    if (s.loop) {
                        let n = r - t.virtual.slidesBefore;
                        n < 0 && (n = t.virtual.slides.length + n),
                        n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
                        d = f(`[data-swiper-slide-index="${n}"]`)
                    } else
                        d = f(`[data-swiper-slide-index="${r}"]`);
                else
                    d = e[r];
                if (d) {
                    d.classList.add(s.slideActiveClass);
                    let n = function Ke(t, e) {
                        const s = [];
                        for (; t.nextElementSibling; ) {
                            const i = t.nextElementSibling;
                            e ? i.matches(e) && s.push(i) : s.push(i),
                            t = i
                        }
                        return s
                    }(d, `.${s.slideClass}, swiper-slide`)[0];
                    s.loop && !n && (n = e[0]),
                    n && n.classList.add(s.slideNextClass);
                    let p = function Ue(t, e) {
                        const s = [];
                        for (; t.previousElementSibling; ) {
                            const i = t.previousElementSibling;
                            e ? i.matches(e) && s.push(i) : s.push(i),
                            t = i
                        }
                        return s
                    }(d, `.${s.slideClass}, swiper-slide`)[0];
                    s.loop && 0 === !p && (p = e[e.length - 1]),
                    p && p.classList.add(s.slidePrevClass)
                }
                t.emitSlidesClasses()
            },
            updateActiveIndex: function ut(t) {
                const e = this
                  , s = e.rtlTranslate ? e.translate : -e.translate
                  , {snapGrid: i, params: r, activeIndex: a, realIndex: f, snapIndex: d} = e;
                let p, n = t;
                const c = o=>{
                    let u = o - e.virtual.slidesBefore;
                    return u < 0 && (u = e.virtual.slides.length + u),
                    u >= e.virtual.slides.length && (u -= e.virtual.slides.length),
                    u
                }
                ;
                if (typeof n > "u" && (n = function pt(t) {
                    const {slidesGrid: e, params: s} = t
                      , i = t.rtlTranslate ? t.translate : -t.translate;
                    let r;
                    for (let a = 0; a < e.length; a += 1)
                        typeof e[a + 1] < "u" ? i >= e[a] && i < e[a + 1] - (e[a + 1] - e[a]) / 2 ? r = a : i >= e[a] && i < e[a + 1] && (r = a + 1) : i >= e[a] && (r = a);
                    return s.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0),
                    r
                }(e)),
                i.indexOf(s) >= 0)
                    p = i.indexOf(s);
                else {
                    const o = Math.min(r.slidesPerGroupSkip, n);
                    p = o + Math.floor((n - o) / r.slidesPerGroup)
                }
                if (p >= i.length && (p = i.length - 1),
                n === a)
                    return p !== d && (e.snapIndex = p,
                    e.emit("snapIndexChange")),
                    void (e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = c(n)));
                let l;
                l = e.virtual && r.virtual.enabled && r.loop ? c(n) : e.slides[n] ? parseInt(e.slides[n].getAttribute("data-swiper-slide-index") || n, 10) : n,
                Object.assign(e, {
                    previousSnapIndex: d,
                    snapIndex: p,
                    previousRealIndex: f,
                    realIndex: l,
                    previousIndex: a,
                    activeIndex: n
                }),
                e.initialized && Te(e),
                e.emit("activeIndexChange"),
                e.emit("snapIndexChange"),
                f !== l && e.emit("realIndexChange"),
                (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
            },
            updateClickedSlide: function mt(t) {
                const e = this
                  , s = e.params
                  , i = t.closest(`.${s.slideClass}, swiper-slide`);
                let a, r = !1;
                if (i)
                    for (let f = 0; f < e.slides.length; f += 1)
                        if (e.slides[f] === i) {
                            r = !0,
                            a = f;
                            break
                        }
                if (!i || !r)
                    return e.clickedSlide = void 0,
                    void (e.clickedIndex = void 0);
                e.clickedSlide = i,
                e.clickedIndex = e.virtual && e.params.virtual.enabled ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : a,
                s.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
            }
        },
        translate: {
            getTranslate: function gt(t) {
                void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                const {params: s, rtlTranslate: i, translate: r, wrapperEl: a} = this;
                if (s.virtualTranslate)
                    return i ? -r : r;
                if (s.cssMode)
                    return r;
                let f = we(a, t);
                return f += this.cssOverflowAdjustment(),
                i && (f = -f),
                f || 0
            },
            setTranslate: function vt(t, e) {
                const s = this
                  , {rtlTranslate: i, params: r, wrapperEl: a, progress: f} = s;
                let c, d = 0, n = 0;
                s.isHorizontal() ? d = i ? -t : t : n = t,
                r.roundLengths && (d = Math.floor(d),
                n = Math.floor(n)),
                s.previousTranslate = s.translate,
                s.translate = s.isHorizontal() ? d : n,
                r.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -n : r.virtualTranslate || (s.isHorizontal() ? d -= s.cssOverflowAdjustment() : n -= s.cssOverflowAdjustment(),
                a.style.transform = `translate3d(${d}px, ${n}px, 0px)`);
                const l = s.maxTranslate() - s.minTranslate();
                c = 0 === l ? 0 : (t - s.minTranslate()) / l,
                c !== f && s.updateProgress(t),
                s.emit("setTranslate", s.translate, e)
            },
            minTranslate: function wt() {
                return -this.snapGrid[0]
            },
            maxTranslate: function yt() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function bt(t, e, s, i, r) {
                void 0 === t && (t = 0),
                void 0 === e && (e = this.params.speed),
                void 0 === s && (s = !0),
                void 0 === i && (i = !0);
                const a = this
                  , {params: f, wrapperEl: d} = a;
                if (a.animating && f.preventInteractionOnTransition)
                    return !1;
                const n = a.minTranslate()
                  , p = a.maxTranslate();
                let c;
                if (c = i && t > n ? n : i && t < p ? p : t,
                a.updateProgress(c),
                f.cssMode) {
                    const l = a.isHorizontal();
                    if (0 === e)
                        d[l ? "scrollLeft" : "scrollTop"] = -c;
                    else {
                        if (!a.support.smoothScroll)
                            return Oe({
                                swiper: a,
                                targetPosition: -c,
                                side: l ? "left" : "top"
                            }),
                            !0;
                        d.scrollTo({
                            [l ? "left" : "top"]: -c,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === e ? (a.setTransition(0),
                a.setTranslate(c),
                s && (a.emit("beforeTransitionStart", e, r),
                a.emit("transitionEnd"))) : (a.setTransition(e),
                a.setTranslate(c),
                s && (a.emit("beforeTransitionStart", e, r),
                a.emit("transitionStart")),
                a.animating || (a.animating = !0,
                a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(o) {
                    !a || a.destroyed || o.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                    a.onTranslateToWrapperTransitionEnd = null,
                    delete a.onTranslateToWrapperTransitionEnd,
                    s && a.emit("transitionEnd"))
                }
                ),
                a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))),
                !0
            }
        },
        transition: {
            setTransition: function xt(t, e) {
                const s = this;
                s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${t}ms`),
                s.emit("setTransition", t, e)
            },
            transitionStart: function Et(t, e) {
                void 0 === t && (t = !0);
                const s = this
                  , {params: i} = s;
                i.cssMode || (i.autoHeight && s.updateAutoHeight(),
                ke({
                    swiper: s,
                    runCallbacks: t,
                    direction: e,
                    step: "Start"
                }))
            },
            transitionEnd: function Tt(t, e) {
                void 0 === t && (t = !0);
                const s = this
                  , {params: i} = s;
                s.animating = !1,
                !i.cssMode && (s.setTransition(0),
                ke({
                    swiper: s,
                    runCallbacks: t,
                    direction: e,
                    step: "End"
                }))
            }
        },
        slide: {
            slideTo: function Ct(t, e, s, i, r) {
                void 0 === t && (t = 0),
                void 0 === e && (e = this.params.speed),
                void 0 === s && (s = !0),
                "string" == typeof t && (t = parseInt(t, 10));
                const a = this;
                let f = t;
                f < 0 && (f = 0);
                const {params: d, snapGrid: n, slidesGrid: p, previousIndex: c, activeIndex: l, rtlTranslate: o, wrapperEl: u, enabled: y} = a;
                if (a.animating && d.preventInteractionOnTransition || !y && !i && !r)
                    return !1;
                const g = Math.min(a.params.slidesPerGroupSkip, f);
                let v = g + Math.floor((f - g) / a.params.slidesPerGroup);
                v >= n.length && (v = n.length - 1);
                const b = -n[v];
                if (d.normalizeSlideIndex)
                    for (let m = 0; m < p.length; m += 1) {
                        const S = -Math.floor(100 * b)
                          , C = Math.floor(100 * p[m])
                          , I = Math.floor(100 * p[m + 1]);
                        typeof p[m + 1] < "u" ? S >= C && S < I - (I - C) / 2 ? f = m : S >= C && S < I && (f = m + 1) : S >= C && (f = m)
                    }
                if (a.initialized && f !== l && (!a.allowSlideNext && (o ? b > a.translate && b > a.minTranslate() : b < a.translate && b < a.minTranslate()) || !a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (l || 0) !== f))
                    return !1;
                let h;
                if (f !== (c || 0) && s && a.emit("beforeSlideChangeStart"),
                a.updateProgress(b),
                h = f > l ? "next" : f < l ? "prev" : "reset",
                o && -b === a.translate || !o && b === a.translate)
                    return a.updateActiveIndex(f),
                    d.autoHeight && a.updateAutoHeight(),
                    a.updateSlidesClasses(),
                    "slide" !== d.effect && a.setTranslate(b),
                    "reset" !== h && (a.transitionStart(s, h),
                    a.transitionEnd(s, h)),
                    !1;
                if (d.cssMode) {
                    const m = a.isHorizontal()
                      , S = o ? b : -b;
                    if (0 === e) {
                        const C = a.virtual && a.params.virtual.enabled;
                        C && (a.wrapperEl.style.scrollSnapType = "none",
                        a._immediateVirtual = !0),
                        C && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0,
                        requestAnimationFrame(()=>{
                            u[m ? "scrollLeft" : "scrollTop"] = S
                        }
                        )) : u[m ? "scrollLeft" : "scrollTop"] = S,
                        C && requestAnimationFrame(()=>{
                            a.wrapperEl.style.scrollSnapType = "",
                            a._immediateVirtual = !1
                        }
                        )
                    } else {
                        if (!a.support.smoothScroll)
                            return Oe({
                                swiper: a,
                                targetPosition: S,
                                side: m ? "left" : "top"
                            }),
                            !0;
                        u.scrollTo({
                            [m ? "left" : "top"]: S,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return a.setTransition(e),
                a.setTranslate(b),
                a.updateActiveIndex(f),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", e, i),
                a.transitionStart(s, h),
                0 === e ? a.transitionEnd(s, h) : a.animating || (a.animating = !0,
                a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(S) {
                    !a || a.destroyed || S.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                    a.onSlideToWrapperTransitionEnd = null,
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(s, h))
                }
                ),
                a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)),
                !0
            },
            slideToLoop: function Pt(t, e, s, i) {
                void 0 === t && (t = 0),
                void 0 === e && (e = this.params.speed),
                void 0 === s && (s = !0),
                "string" == typeof t && (t = parseInt(t, 10));
                const r = this;
                let a = t;
                return r.params.loop && (r.virtual && r.params.virtual.enabled ? a += r.virtual.slidesBefore : a = r.getSlideIndexByData(a)),
                r.slideTo(a, e, s, i)
            },
            slideNext: function Lt(t, e, s) {
                void 0 === t && (t = this.params.speed),
                void 0 === e && (e = !0);
                const i = this
                  , {enabled: r, params: a, animating: f} = i;
                if (!r)
                    return i;
                let d = a.slidesPerGroup;
                "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (d = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const n = i.activeIndex < a.slidesPerGroupSkip ? 1 : d;
                if (a.loop) {
                    if (f && (!i.virtual || !a.virtual.enabled) && a.loopPreventsSliding)
                        return !1;
                    i.loopFix({
                        direction: "next"
                    }),
                    i._clientLeft = i.wrapperEl.clientLeft
                }
                return i.slideTo(a.rewind && i.isEnd ? 0 : i.activeIndex + n, t, e, s)
            },
            slidePrev: function It(t, e, s) {
                void 0 === t && (t = this.params.speed),
                void 0 === e && (e = !0);
                const i = this
                  , {params: r, snapGrid: a, slidesGrid: f, rtlTranslate: d, enabled: n, animating: p} = i;
                if (!n)
                    return i;
                if (r.loop) {
                    if (p && (!i.virtual || !r.virtual.enabled) && r.loopPreventsSliding)
                        return !1;
                    i.loopFix({
                        direction: "prev"
                    }),
                    i._clientLeft = i.wrapperEl.clientLeft
                }
                function o(b) {
                    return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b)
                }
                const u = o(d ? i.translate : -i.translate)
                  , y = a.map(b=>o(b));
                let g = a[y.indexOf(u) - 1];
                if (typeof g > "u" && r.cssMode) {
                    let b;
                    a.forEach((h,m)=>{
                        u >= h && (b = m)
                    }
                    ),
                    typeof b < "u" && (g = a[b > 0 ? b - 1 : b])
                }
                let v = 0;
                return typeof g < "u" && (v = f.indexOf(g),
                v < 0 && (v = i.activeIndex - 1),
                "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", !0) + 1,
                v = Math.max(v, 0))),
                i.slideTo(r.rewind && i.isBeginning ? i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : v, t, e, s)
            },
            slideReset: function zt(t, e, s) {
                return void 0 === t && (t = this.params.speed),
                void 0 === e && (e = !0),
                this.slideTo(this.activeIndex, t, e, s)
            },
            slideToClosest: function At(t, e, s, i) {
                void 0 === t && (t = this.params.speed),
                void 0 === e && (e = !0),
                void 0 === i && (i = .5);
                const r = this;
                let a = r.activeIndex;
                const f = Math.min(r.params.slidesPerGroupSkip, a)
                  , d = f + Math.floor((a - f) / r.params.slidesPerGroup)
                  , n = r.rtlTranslate ? r.translate : -r.translate;
                if (n >= r.snapGrid[d]) {
                    const p = r.snapGrid[d];
                    n - p > (r.snapGrid[d + 1] - p) * i && (a += r.params.slidesPerGroup)
                } else {
                    const p = r.snapGrid[d - 1];
                    n - p <= (r.snapGrid[d] - p) * i && (a -= r.params.slidesPerGroup)
                }
                return a = Math.max(a, 0),
                a = Math.min(a, r.slidesGrid.length - 1),
                r.slideTo(a, t, e, s)
            },
            slideToClickedSlide: function $t() {
                const t = this
                  , {params: e, slidesEl: s} = t
                  , i = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
                let a, r = t.clickedIndex;
                const f = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
                if (e.loop) {
                    if (t.animating)
                        return;
                    a = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                    e.centeredSlides ? r < t.loopedSlides - i / 2 || r > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(),
                    r = t.getSlideIndex(N(s, `${f}[data-swiper-slide-index="${a}"]`)[0]),
                    J(()=>{
                        t.slideTo(r)
                    }
                    )) : t.slideTo(r) : r > t.slides.length - i ? (t.loopFix(),
                    r = t.getSlideIndex(N(s, `${f}[data-swiper-slide-index="${a}"]`)[0]),
                    J(()=>{
                        t.slideTo(r)
                    }
                    )) : t.slideTo(r)
                } else
                    t.slideTo(r)
            }
        },
        loop: {
            loopCreate: function Dt(t) {
                const e = this
                  , {params: s, slidesEl: i} = e;
                !s.loop || e.virtual && e.params.virtual.enabled || (N(i, `.${s.slideClass}, swiper-slide`).forEach((a,f)=>{
                    a.setAttribute("data-swiper-slide-index", f)
                }
                ),
                e.loopFix({
                    slideRealIndex: t,
                    direction: s.centeredSlides ? void 0 : "next"
                }))
            },
            loopFix: function kt(t) {
                let {slideRealIndex: e, slideTo: s=!0, direction: i, setTranslate: r, activeSlideIndex: a, byController: f, byMousewheel: d} = void 0 === t ? {} : t;
                const n = this;
                if (!n.params.loop)
                    return;
                n.emit("beforeLoopFix");
                const {slides: p, allowSlidePrev: c, allowSlideNext: l, slidesEl: o, params: u} = n;
                if (n.allowSlidePrev = !0,
                n.allowSlideNext = !0,
                n.virtual && u.virtual.enabled)
                    return s && (u.centeredSlides || 0 !== n.snapIndex ? u.centeredSlides && n.snapIndex < u.slidesPerView ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0) : n.snapIndex === n.snapGrid.length - 1 && n.slideTo(n.virtual.slidesBefore, 0, !1, !0) : n.slideTo(n.virtual.slides.length, 0, !1, !0)),
                    n.allowSlidePrev = c,
                    n.allowSlideNext = l,
                    void n.emit("loopFix");
                const y = "auto" === u.slidesPerView ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(u.slidesPerView, 10));
                let g = u.loopedSlides || y;
                g % u.slidesPerGroup != 0 && (g += u.slidesPerGroup - g % u.slidesPerGroup),
                n.loopedSlides = g;
                const v = []
                  , b = [];
                let h = n.activeIndex;
                typeof a > "u" ? a = n.getSlideIndex(n.slides.filter(A=>A.classList.contains(u.slideActiveClass))[0]) : h = a;
                const m = "next" === i || !i
                  , S = "prev" === i || !i;
                let C = 0
                  , I = 0;
                if (a < g) {
                    C = Math.max(g - a, u.slidesPerGroup);
                    for (let A = 0; A < g - a; A += 1) {
                        const D = A - Math.floor(A / p.length) * p.length;
                        v.push(p.length - D - 1)
                    }
                } else if (a > n.slides.length - 2 * g) {
                    I = Math.max(a - (n.slides.length - 2 * g), u.slidesPerGroup);
                    for (let A = 0; A < I; A += 1) {
                        const D = A - Math.floor(A / p.length) * p.length;
                        b.push(D)
                    }
                }
                if (S && v.forEach(A=>{
                    n.slides[A].swiperLoopMoveDOM = !0,
                    o.prepend(n.slides[A]),
                    n.slides[A].swiperLoopMoveDOM = !1
                }
                ),
                m && b.forEach(A=>{
                    n.slides[A].swiperLoopMoveDOM = !0,
                    o.append(n.slides[A]),
                    n.slides[A].swiperLoopMoveDOM = !1
                }
                ),
                n.recalcSlides(),
                "auto" === u.slidesPerView && n.updateSlides(),
                u.watchSlidesProgress && n.updateSlidesOffset(),
                s)
                    if (v.length > 0 && S)
                        if (typeof e > "u") {
                            const L = n.slidesGrid[h + C] - n.slidesGrid[h];
                            d ? n.setTranslate(n.translate - L) : (n.slideTo(h + C, 0, !1, !0),
                            r && (n.touches[n.isHorizontal() ? "startX" : "startY"] += L))
                        } else
                            r && n.slideToLoop(e, 0, !1, !0);
                    else if (b.length > 0 && m)
                        if (typeof e > "u") {
                            const L = n.slidesGrid[h - I] - n.slidesGrid[h];
                            d ? n.setTranslate(n.translate - L) : (n.slideTo(h - I, 0, !1, !0),
                            r && (n.touches[n.isHorizontal() ? "startX" : "startY"] += L))
                        } else
                            n.slideToLoop(e, 0, !1, !0);
                if (n.allowSlidePrev = c,
                n.allowSlideNext = l,
                n.controller && n.controller.control && !f) {
                    const A = {
                        slideRealIndex: e,
                        slideTo: !1,
                        direction: i,
                        setTranslate: r,
                        activeSlideIndex: a,
                        byController: !0
                    };
                    Array.isArray(n.controller.control) ? n.controller.control.forEach(D=>{
                        !D.destroyed && D.params.loop && D.loopFix(A)
                    }
                    ) : n.controller.control instanceof n.constructor && n.controller.control.params.loop && n.controller.control.loopFix(A)
                }
                n.emit("loopFix")
            },
            loopDestroy: function Ht() {
                const t = this
                  , {params: e, slidesEl: s} = t;
                if (!e.loop || t.virtual && t.params.virtual.enabled)
                    return;
                t.recalcSlides();
                const i = [];
                t.slides.forEach(r=>{
                    const a = typeof r.swiperSlideIndex > "u" ? 1 * r.getAttribute("data-swiper-slide-index") : r.swiperSlideIndex;
                    i[a] = r
                }
                ),
                t.slides.forEach(r=>{
                    r.removeAttribute("data-swiper-slide-index")
                }
                ),
                i.forEach(r=>{
                    s.append(r)
                }
                ),
                t.recalcSlides(),
                t.slideTo(t.realIndex, 0)
            }
        },
        grabCursor: {
            setGrabCursor: function Bt(t) {
                const e = this;
                if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
                    return;
                const s = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
                e.isElement && (e.__preventObserver__ = !0),
                s.style.cursor = "move",
                s.style.cursor = t ? "grabbing" : "grab",
                e.isElement && requestAnimationFrame(()=>{
                    e.__preventObserver__ = !1
                }
                )
            },
            unsetGrabCursor: function Xt() {
                const t = this;
                t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0),
                t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                t.isElement && requestAnimationFrame(()=>{
                    t.__preventObserver__ = !1
                }
                ))
            }
        },
        events: {
            attachEvents: function Ut() {
                const t = this
                  , e = R()
                  , {params: s} = t;
                t.onTouchStart = Nt.bind(t),
                t.onTouchMove = Vt.bind(t),
                t.onTouchEnd = Ft.bind(t),
                s.cssMode && (t.onScroll = qt.bind(t)),
                t.onClick = Wt.bind(t),
                t.onLoad = _t.bind(t),
                Ge || (e.addEventListener("touchstart", jt),
                Ge = !0),
                Be(t, "on")
            },
            detachEvents: function Kt() {
                Be(this, "off")
            }
        },
        breakpoints: {
            setBreakpoint: function Qt() {
                const t = this
                  , {realIndex: e, initialized: s, params: i, el: r} = t
                  , a = i.breakpoints;
                if (!a || a && 0 === Object.keys(a).length)
                    return;
                const f = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
                if (!f || t.currentBreakpoint === f)
                    return;
                const n = (f in a ? a[f] : void 0) || t.originalParams
                  , p = Xe(t, i)
                  , c = Xe(t, n)
                  , l = i.enabled;
                p && !c ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
                t.emitContainerClasses()) : !p && c && (r.classList.add(`${i.containerModifierClass}grid`),
                (n.grid.fill && "column" === n.grid.fill || !n.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`),
                t.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach(g=>{
                    if (typeof n[g] > "u")
                        return;
                    const v = i[g] && i[g].enabled
                      , b = n[g] && n[g].enabled;
                    v && !b && t[g].disable(),
                    !v && b && t[g].enable()
                }
                );
                const o = n.direction && n.direction !== i.direction
                  , u = i.loop && (n.slidesPerView !== i.slidesPerView || o);
                o && s && t.changeDirection(),
                V(t.params, n);
                const y = t.params.enabled;
                Object.assign(t, {
                    allowTouchMove: t.params.allowTouchMove,
                    allowSlideNext: t.params.allowSlideNext,
                    allowSlidePrev: t.params.allowSlidePrev
                }),
                l && !y ? t.disable() : !l && y && t.enable(),
                t.currentBreakpoint = f,
                t.emit("_beforeBreakpoint", n),
                u && s && (t.loopDestroy(),
                t.loopCreate(e),
                t.updateSlides()),
                t.emit("breakpoint", n)
            },
            getBreakpoint: function Jt(t, e, s) {
                if (void 0 === e && (e = "window"),
                !t || "container" === e && !s)
                    return;
                let i = !1;
                const r = Y()
                  , a = "window" === e ? r.innerHeight : s.clientHeight
                  , f = Object.keys(t).map(d=>{
                    if ("string" == typeof d && 0 === d.indexOf("@")) {
                        const n = parseFloat(d.substr(1));
                        return {
                            value: a * n,
                            point: d
                        }
                    }
                    return {
                        value: d,
                        point: d
                    }
                }
                );
                f.sort((d,n)=>parseInt(d.value, 10) - parseInt(n.value, 10));
                for (let d = 0; d < f.length; d += 1) {
                    const {point: n, value: p} = f[d];
                    "window" === e ? r.matchMedia(`(min-width: ${p}px)`).matches && (i = n) : p <= s.clientWidth && (i = n)
                }
                return i || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function rs() {
                const t = this
                  , {isLocked: e, params: s} = t
                  , {slidesOffsetBefore: i} = s;
                if (i) {
                    const r = t.slides.length - 1;
                    t.isLocked = t.size > t.slidesGrid[r] + t.slidesSizesGrid[r] + 2 * i
                } else
                    t.isLocked = 1 === t.snapGrid.length;
                !0 === s.allowSlideNext && (t.allowSlideNext = !t.isLocked),
                !0 === s.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
                e && e !== t.isLocked && (t.isEnd = !1),
                e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
            }
        },
        classes: {
            addClasses: function ss() {
                const t = this
                  , {classNames: e, params: s, rtl: i, el: r, device: a} = t
                  , f = function ts(t, e) {
                    const s = [];
                    return t.forEach(i=>{
                        "object" == typeof i ? Object.keys(i).forEach(r=>{
                            i[r] && s.push(e + r)
                        }
                        ) : "string" == typeof i && s.push(e + i)
                    }
                    ),
                    s
                }(["initialized", s.direction, {
                    "free-mode": t.params.freeMode && s.freeMode.enabled
                }, {
                    autoheight: s.autoHeight
                }, {
                    rtl: i
                }, {
                    grid: s.grid && s.grid.rows > 1
                }, {
                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                    android: a.android
                }, {
                    ios: a.ios
                }, {
                    "css-mode": s.cssMode
                }, {
                    centered: s.cssMode && s.centeredSlides
                }, {
                    "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
                e.push(...f),
                r.classList.add(...e),
                t.emitContainerClasses()
            },
            removeClasses: function is() {
                const {el: e, classNames: s} = this;
                e.classList.remove(...s),
                this.emitContainerClasses()
            }
        }
    }
      , Ce = {};
    class F {
        constructor() {
            let e, s;
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                r[a] = arguments[a];
            1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? s = r[0] : [e,s] = r,
            s || (s = {}),
            s = V({}, s),
            e && !s.el && (s.el = e);
            const f = R();
            if (s.el && "string" == typeof s.el && f.querySelectorAll(s.el).length > 1) {
                const c = [];
                return f.querySelectorAll(s.el).forEach(l=>{
                    const o = V({}, s, {
                        el: l
                    });
                    c.push(new F(o))
                }
                ),
                c
            }
            const d = this;
            d.__swiper__ = !0,
            d.support = De(),
            d.device = function Je(t) {
                return void 0 === t && (t = {}),
                Se || (Se = function Qe(t) {
                    let {userAgent: e} = void 0 === t ? {} : t;
                    const s = De()
                      , i = Y()
                      , r = i.navigator.platform
                      , a = e || i.navigator.userAgent
                      , f = {
                        ios: !1,
                        android: !1
                    }
                      , d = i.screen.width
                      , n = i.screen.height
                      , p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let c = a.match(/(iPad).*OS\s([\d_]+)/);
                    const l = a.match(/(iPod)(.*OS\s([\d_]+))?/)
                      , o = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                      , u = "Win32" === r;
                    let y = "MacIntel" === r;
                    return !c && y && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${d}x ${n}`) >= 0 && (c = a.match(/(Version)\/([\d.]+)/),
                    c || (c = [0, 1, "13_0_0"]),
                    y = !1),
                    p && !u && (f.os = "android",
                    f.android = !0),
                    (c || o || l) && (f.os = "ios",
                    f.ios = !0),
                    f
                }(t)),
                Se
            }({
                userAgent: s.userAgent
            }),
            d.browser = function tt() {
                return xe || (xe = function et() {
                    const t = Y();
                    let e = !1;
                    function s() {
                        const i = t.navigator.userAgent.toLowerCase();
                        return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
                    }
                    if (s()) {
                        const i = String(t.navigator.userAgent);
                        if (i.includes("Version/")) {
                            const [r,a] = i.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));
                            e = r < 16 || 16 === r && a < 2
                        }
                    }
                    return {
                        isSafari: e || s(),
                        needPerspectiveFix: e,
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                    }
                }()),
                xe
            }(),
            d.eventsListeners = {},
            d.eventsAnyListeners = [],
            d.modules = [...d.__modules__],
            s.modules && Array.isArray(s.modules) && d.modules.push(...s.modules);
            const n = {};
            d.modules.forEach(c=>{
                c({
                    params: s,
                    swiper: d,
                    extendParams: ls(s, n),
                    on: d.on.bind(d),
                    once: d.once.bind(d),
                    off: d.off.bind(d),
                    emit: d.emit.bind(d)
                })
            }
            );
            const p = V({}, Ye, n);
            return d.params = V({}, p, Ce, s),
            d.originalParams = V({}, d.params),
            d.passedParams = V({}, s),
            d.params && d.params.on && Object.keys(d.params.on).forEach(c=>{
                d.on(c, d.params.on[c])
            }
            ),
            d.params && d.params.onAny && d.onAny(d.params.onAny),
            Object.assign(d, {
                enabled: d.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === d.params.direction,
                isVertical: ()=>"vertical" === d.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: d.params.allowSlideNext,
                allowSlidePrev: d.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: d.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    evCache: []
                },
                allowClick: !0,
                allowTouchMove: d.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            d.emit("_swiper"),
            d.params.init && d.init(),
            d
        }
        getSlideIndex(e) {
            const {slidesEl: s, params: i} = this
              , a = oe(N(s, `.${i.slideClass}, swiper-slide`)[0]);
            return oe(e) - a
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter(s=>1 * s.getAttribute("data-swiper-slide-index") === e)[0])
        }
        recalcSlides() {
            const {slidesEl: s, params: i} = this;
            this.slides = N(s, `.${i.slideClass}, swiper-slide`)
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, s) {
            const i = this;
            e = Math.min(Math.max(e, 0), 1);
            const r = i.minTranslate()
              , f = (i.maxTranslate() - r) * e + r;
            i.translateTo(f, typeof s > "u" ? 0 : s),
            i.updateActiveIndex(),
            i.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const s = e.el.className.split(" ").filter(i=>0 === i.indexOf("swiper") || 0 === i.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", s.join(" "))
        }
        getSlideClasses(e) {
            const s = this;
            return s.destroyed ? "" : e.className.split(" ").filter(i=>0 === i.indexOf("swiper-slide") || 0 === i.indexOf(s.params.slideClass)).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const s = [];
            e.slides.forEach(i=>{
                const r = e.getSlideClasses(i);
                s.push({
                    slideEl: i,
                    classNames: r
                }),
                e.emit("_slideClass", i, r)
            }
            ),
            e.emit("_slideClasses", s)
        }
        slidesPerViewDynamic(e, s) {
            void 0 === e && (e = "current"),
            void 0 === s && (s = !1);
            const {params: r, slides: a, slidesGrid: f, slidesSizesGrid: d, size: n, activeIndex: p} = this;
            let c = 1;
            if (r.centeredSlides) {
                let o, l = a[p] ? a[p].swiperSlideSize : 0;
                for (let u = p + 1; u < a.length; u += 1)
                    a[u] && !o && (l += a[u].swiperSlideSize,
                    c += 1,
                    l > n && (o = !0));
                for (let u = p - 1; u >= 0; u -= 1)
                    a[u] && !o && (l += a[u].swiperSlideSize,
                    c += 1,
                    l > n && (o = !0))
            } else if ("current" === e)
                for (let l = p + 1; l < a.length; l += 1)
                    (s ? f[l] + d[l] - f[p] < n : f[l] - f[p] < n) && (c += 1);
            else
                for (let l = p - 1; l >= 0; l -= 1)
                    f[p] - f[l] < n && (c += 1);
            return c
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: s, params: i} = e;
            function r() {
                const d = Math.min(Math.max(e.rtlTranslate ? -1 * e.translate : e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(d),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let a;
            i.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach(f=>{
                f.complete && me(e, f)
            }
            ),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            i.freeMode && i.freeMode.enabled && !i.cssMode ? (r(),
            i.autoHeight && e.updateAutoHeight()) : (a = e.slideTo(("auto" === i.slidesPerView || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides ? (e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides).length - 1 : e.activeIndex, 0, !1, !0),
            a || r()),
            i.watchOverflow && s !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, s) {
            void 0 === s && (s = !0);
            const i = this
              , r = i.params.direction;
            return e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r || "horizontal" !== e && "vertical" !== e || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
            i.el.classList.add(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            i.params.direction = e,
            i.slides.forEach(a=>{
                "vertical" === e ? a.style.width = "" : a.style.height = ""
            }
            ),
            i.emit("changeDirection"),
            s && i.update()),
            i
        }
        changeLanguageDirection(e) {
            const s = this;
            s.rtl && "rtl" === e || !s.rtl && "ltr" === e || (s.rtl = "rtl" === e,
            s.rtlTranslate = "horizontal" === s.params.direction && s.rtl,
            s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`),
            s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`),
            s.el.dir = "ltr"),
            s.update())
        }
        mount(e) {
            const s = this;
            if (s.mounted)
                return !0;
            let i = e || s.params.el;
            if ("string" == typeof i && (i = document.querySelector(i)),
            !i)
                return !1;
            i.swiper = s,
            i.shadowEl && (s.isElement = !0);
            const r = ()=>`.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let f = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : N(i, r())[0];
            return !f && s.params.createElements && (f = _("div", s.params.wrapperClass),
            i.append(f),
            N(i, `.${s.params.slideClass}`).forEach(d=>{
                f.append(d)
            }
            )),
            Object.assign(s, {
                el: i,
                wrapperEl: f,
                slidesEl: s.isElement ? i : f,
                mounted: !0,
                rtl: "rtl" === i.dir.toLowerCase() || "rtl" === K(i, "direction"),
                rtlTranslate: "horizontal" === s.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === K(i, "direction")),
                wrongRTL: "-webkit-box" === K(f, "display")
            }),
            !0
        }
        init(e) {
            const s = this;
            return s.initialized || !1 === s.mount(e) || (s.emit("beforeInit"),
            s.params.breakpoints && s.setBreakpoint(),
            s.addClasses(),
            s.updateSize(),
            s.updateSlides(),
            s.params.watchOverflow && s.checkOverflow(),
            s.params.grabCursor && s.enabled && s.setGrabCursor(),
            s.slideTo(s.params.loop && s.virtual && s.params.virtual.enabled ? s.params.initialSlide + s.virtual.slidesBefore : s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0),
            s.params.loop && s.loopCreate(),
            s.attachEvents(),
            [...s.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{
                r.complete ? me(s, r) : r.addEventListener("load", a=>{
                    me(s, a.target)
                }
                )
            }
            ),
            Te(s),
            s.initialized = !0,
            Te(s),
            s.emit("init"),
            s.emit("afterInit")),
            s
        }
        destroy(e, s) {
            void 0 === e && (e = !0),
            void 0 === s && (s = !0);
            const i = this
              , {params: r, el: a, wrapperEl: f, slides: d} = i;
            return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            r.loop && i.loopDestroy(),
            s && (i.removeClasses(),
            a.removeAttribute("style"),
            f.removeAttribute("style"),
            d && d.length && d.forEach(n=>{
                n.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
                n.removeAttribute("style"),
                n.removeAttribute("data-swiper-slide-index")
            }
            )),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(n=>{
                i.off(n)
            }
            ),
            !1 !== e && (i.el.swiper = null,
            function qe(t) {
                const e = t;
                Object.keys(e).forEach(s=>{
                    try {
                        e[s] = null
                    } catch {}
                    try {
                        delete e[s]
                    } catch {}
                }
                )
            }(i)),
            i.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            V(Ce, e)
        }
        static get extendedDefaults() {
            return Ce
        }
        static get defaults() {
            return Ye
        }
        static installModule(e) {
            F.prototype.__modules__ || (F.prototype.__modules__ = []);
            const s = F.prototype.__modules__;
            "function" == typeof e && s.indexOf(e) < 0 && s.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach(s=>F.installModule(s)),
            F) : (F.installModule(e),
            F)
        }
    }
    function Pe(t, e, s, i) {
        return t.params.createElements && Object.keys(i).forEach(r=>{
            if (!s[r] && !0 === s.auto) {
                let a = N(t.el, `.${i[r]}`)[0];
                a || (a = _("div", i[r]),
                a.className = i[r],
                t.el.append(a)),
                s[r] = a,
                e[r] = a
            }
        }
        ),
        s
    }
    function Z(t) {
        return void 0 === t && (t = ""),
        `.${t.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function Ts(t) {
        const e = this
          , {params: s, slidesEl: i} = e;
        s.loop && e.loopDestroy();
        const r = a=>{
            if ("string" == typeof a) {
                const f = document.createElement("div");
                f.innerHTML = a,
                i.append(f.children[0]),
                f.innerHTML = ""
            } else
                i.append(a)
        }
        ;
        if ("object" == typeof t && "length"in t)
            for (let a = 0; a < t.length; a += 1)
                t[a] && r(t[a]);
        else
            r(t);
        e.recalcSlides(),
        s.loop && e.loopCreate(),
        (!s.observer || e.isElement) && e.update()
    }
    function Ms(t) {
        const e = this
          , {params: s, activeIndex: i, slidesEl: r} = e;
        s.loop && e.loopDestroy();
        let a = i + 1;
        const f = d=>{
            if ("string" == typeof d) {
                const n = document.createElement("div");
                n.innerHTML = d,
                r.prepend(n.children[0]),
                n.innerHTML = ""
            } else
                r.prepend(d)
        }
        ;
        if ("object" == typeof t && "length"in t) {
            for (let d = 0; d < t.length; d += 1)
                t[d] && f(t[d]);
            a = i + t.length
        } else
            f(t);
        e.recalcSlides(),
        s.loop && e.loopCreate(),
        (!s.observer || e.isElement) && e.update(),
        e.slideTo(a, 0, !1)
    }
    function Cs(t, e) {
        const s = this
          , {params: i, activeIndex: r, slidesEl: a} = s;
        let f = r;
        i.loop && (f -= s.loopedSlides,
        s.loopDestroy(),
        s.recalcSlides());
        const d = s.slides.length;
        if (t <= 0)
            return void s.prependSlide(e);
        if (t >= d)
            return void s.appendSlide(e);
        let n = f > t ? f + 1 : f;
        const p = [];
        for (let c = d - 1; c >= t; c -= 1) {
            const l = s.slides[c];
            l.remove(),
            p.unshift(l)
        }
        if ("object" == typeof e && "length"in e) {
            for (let c = 0; c < e.length; c += 1)
                e[c] && a.append(e[c]);
            n = f > t ? f + e.length : f
        } else
            a.append(e);
        for (let c = 0; c < p.length; c += 1)
            a.append(p[c]);
        s.recalcSlides(),
        i.loop && s.loopCreate(),
        (!i.observer || s.isElement) && s.update(),
        s.slideTo(i.loop ? n + s.loopedSlides : n, 0, !1)
    }
    function Ps(t) {
        const e = this
          , {params: s, activeIndex: i} = e;
        let r = i;
        s.loop && (r -= e.loopedSlides,
        e.loopDestroy());
        let f, a = r;
        if ("object" == typeof t && "length"in t) {
            for (let d = 0; d < t.length; d += 1)
                f = t[d],
                e.slides[f] && e.slides[f].remove(),
                f < a && (a -= 1);
            a = Math.max(a, 0)
        } else
            f = t,
            e.slides[f] && e.slides[f].remove(),
            f < a && (a -= 1),
            a = Math.max(a, 0);
        e.recalcSlides(),
        s.loop && e.loopCreate(),
        (!s.observer || e.isElement) && e.update(),
        e.slideTo(s.loop ? a + e.loopedSlides : a, 0, !1)
    }
    function Ls() {
        const t = this
          , e = [];
        for (let s = 0; s < t.slides.length; s += 1)
            e.push(s);
        t.removeSlide(e)
    }
    function ae(t) {
        const {effect: e, swiper: s, on: i, setTranslate: r, setTransition: a, overwriteParams: f, perspective: d, recreateShadows: n, getEffectParams: p} = t;
        let c;
        i("beforeInit", ()=>{
            if (s.params.effect !== e)
                return;
            s.classNames.push(`${s.params.containerModifierClass}${e}`),
            d && d() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const l = f ? f() : {};
            Object.assign(s.params, l),
            Object.assign(s.originalParams, l)
        }
        ),
        i("setTranslate", ()=>{
            s.params.effect === e && r()
        }
        ),
        i("setTransition", (l,o)=>{
            s.params.effect === e && a(o)
        }
        ),
        i("transitionEnd", ()=>{
            if (s.params.effect === e && n) {
                if (!p || !p().slideShadows)
                    return;
                s.slides.forEach(l=>{
                    l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(o=>o.remove())
                }
                ),
                n()
            }
        }
        ),
        i("virtualUpdate", ()=>{
            s.params.effect === e && (s.slides.length || (c = !0),
            requestAnimationFrame(()=>{
                c && s.slides && s.slides.length && (r(),
                c = !1)
            }
            ))
        }
        )
    }
    function ce(t, e) {
        const s = ee(e);
        return s !== e && (s.style.backfaceVisibility = "hidden",
        s.style["-webkit-backface-visibility"] = "hidden"),
        s
    }
    function he(t) {
        let {swiper: e, duration: s, transformElements: i, allSlides: r} = t;
        const {activeIndex: a} = e;
        if (e.params.virtualTranslate && 0 !== s) {
            let n, d = !1;
            n = r ? i : i.filter(p=>{
                const c = p.classList.contains("swiper-slide-transform") ? (d=>d.parentElement ? d.parentElement : e.slides.filter(p=>p.shadowEl && p.shadowEl === d.parentNode)[0])(p) : p;
                return e.getSlideIndex(c) === a
            }
            ),
            n.forEach(p=>{
                de(p, ()=>{
                    if (d || !e || e.destroyed)
                        return;
                    d = !0,
                    e.animating = !1;
                    const c = new window.CustomEvent("transitionend",{
                        bubbles: !0,
                        cancelable: !0
                    });
                    e.wrapperEl.dispatchEvent(c)
                }
                )
            }
            )
        }
    }
    function re(t, e, s) {
        const i = "swiper-slide-shadow" + (s ? `-${s}` : "")
          , r = ee(e);
        let a = r.querySelector(`.${i}`);
        return a || (a = _("div", "swiper-slide-shadow" + (s ? `-${s}` : "")),
        r.append(a)),
        a
    }
    return Object.keys(Me).forEach(t=>{
        Object.keys(Me[t]).forEach(e=>{
            F.prototype[e] = Me[t][e]
        }
        )
    }
    ),
    F.use([function st(t) {
        let {swiper: e, on: s, emit: i} = t;
        const r = Y();
        let a = null
          , f = null;
        const d = ()=>{
            !e || e.destroyed || !e.initialized || (i("beforeResize"),
            i("resize"))
        }
          , c = ()=>{
            !e || e.destroyed || !e.initialized || i("orientationchange")
        }
        ;
        s("init", ()=>{
            e.params.resizeObserver && typeof r.ResizeObserver < "u" ? !e || e.destroyed || !e.initialized || (a = new ResizeObserver(l=>{
                f = r.requestAnimationFrame(()=>{
                    const {width: o, height: u} = e;
                    let y = o
                      , g = u;
                    l.forEach(v=>{
                        let {contentBoxSize: b, contentRect: h, target: m} = v;
                        m && m !== e.el || (y = h ? h.width : (b[0] || b).inlineSize,
                        g = h ? h.height : (b[0] || b).blockSize)
                    }
                    ),
                    (y !== o || g !== u) && d()
                }
                )
            }
            ),
            a.observe(e.el)) : (r.addEventListener("resize", d),
            r.addEventListener("orientationchange", c))
        }
        ),
        s("destroy", ()=>{
            f && r.cancelAnimationFrame(f),
            a && a.unobserve && e.el && (a.unobserve(e.el),
            a = null),
            r.removeEventListener("resize", d),
            r.removeEventListener("orientationchange", c)
        }
        )
    }
    , function it(t) {
        let {swiper: e, extendParams: s, on: i, emit: r} = t;
        const a = []
          , f = Y()
          , d = function(c, l) {
            void 0 === l && (l = {});
            const u = new (f.MutationObserver || f.WebkitMutationObserver)(y=>{
                if (e.__preventObserver__)
                    return;
                if (1 === y.length)
                    return void r("observerUpdate", y[0]);
                const g = function() {
                    r("observerUpdate", y[0])
                };
                f.requestAnimationFrame ? f.requestAnimationFrame(g) : f.setTimeout(g, 0)
            }
            );
            u.observe(c, {
                attributes: typeof l.attributes > "u" || l.attributes,
                childList: typeof l.childList > "u" || l.childList,
                characterData: typeof l.characterData > "u" || l.characterData
            }),
            a.push(u)
        };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        i("init", ()=>{
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const c = te(e.el);
                    for (let l = 0; l < c.length; l += 1)
                        d(c[l])
                }
                d(e.el, {
                    childList: e.params.observeSlideChildren
                }),
                d(e.wrapperEl, {
                    attributes: !1
                })
            }
        }
        ),
        i("destroy", ()=>{
            a.forEach(c=>{
                c.disconnect()
            }
            ),
            a.splice(0, a.length)
        }
        )
    }
    ]),
    F.use([function os(t) {
        let a, {swiper: e, extendParams: s, on: i, emit: r} = t;
        s({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        const f = R();
        e.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const d = f.createElement("div");
        function n(y, g) {
            const v = e.params.virtual;
            if (v.cache && e.virtual.cache[g])
                return e.virtual.cache[g];
            let b;
            return v.renderSlide ? (b = v.renderSlide.call(e, y, g),
            "string" == typeof b && (d.innerHTML = b,
            b = d.children[0])) : b = e.isElement ? _("swiper-slide") : _("div", e.params.slideClass),
            b.setAttribute("data-swiper-slide-index", g),
            v.renderSlide || (b.innerHTML = y),
            v.cache && (e.virtual.cache[g] = b),
            b
        }
        function p(y) {
            const {slidesPerView: g, slidesPerGroup: v, centeredSlides: b, loop: h} = e.params
              , {addSlidesBefore: m, addSlidesAfter: S} = e.params.virtual
              , {from: C, to: I, slides: A, slidesGrid: D, offset: L} = e.virtual;
            e.params.cssMode || e.updateActiveIndex();
            const k = e.activeIndex || 0;
            let P, M, E;
            P = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top",
            b ? (M = Math.floor(g / 2) + v + S,
            E = Math.floor(g / 2) + v + m) : (M = g + (v - 1) + S,
            E = (h ? g : v) + m);
            let w = k - E
              , x = k + M;
            h || (w = Math.max(w, 0),
            x = Math.min(x, A.length - 1));
            let O = (e.slidesGrid[w] || 0) - (e.slidesGrid[0] || 0);
            function T() {
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                r("virtualUpdate")
            }
            if (h && k >= E ? (w -= E,
            b || (O += e.slidesGrid[0])) : h && k < E && (w = -E,
            b && (O += e.slidesGrid[0])),
            Object.assign(e.virtual, {
                from: w,
                to: x,
                offset: O,
                slidesGrid: e.slidesGrid,
                slidesBefore: E,
                slidesAfter: M
            }),
            C === w && I === x && !y)
                return e.slidesGrid !== D && O !== L && e.slides.forEach(H=>{
                    H.style[P] = O - Math.abs(e.cssOverflowAdjustment()) + "px"
                }
                ),
                e.updateProgress(),
                void r("virtualUpdate");
            if (e.params.virtual.renderExternal)
                return e.params.virtual.renderExternal.call(e, {
                    offset: O,
                    from: w,
                    to: x,
                    slides: function() {
                        const B = [];
                        for (let j = w; j <= x; j += 1)
                            B.push(A[j]);
                        return B
                    }()
                }),
                void (e.params.virtual.renderExternalUpdate ? T() : r("virtualUpdate"));
            const $ = []
              , z = []
              , G = H=>{
                let B = H;
                return H < 0 ? B = A.length + H : B >= A.length && (B -= A.length),
                B
            }
            ;
            if (y)
                e.slidesEl.querySelectorAll(`.${e.params.slideClass}, swiper-slide`).forEach(H=>{
                    H.remove()
                }
                );
            else
                for (let H = C; H <= I; H += 1)
                    if (H < w || H > x) {
                        const B = G(H);
                        e.slidesEl.querySelectorAll(`.${e.params.slideClass}[data-swiper-slide-index="${B}"], swiper-slide[data-swiper-slide-index="${B}"]`).forEach(j=>{
                            j.remove()
                        }
                        )
                    }
            const W = h ? 2 * A.length : A.length;
            for (let H = h ? -A.length : 0; H < W; H += 1)
                if (H >= w && H <= x) {
                    const B = G(H);
                    typeof I > "u" || y ? z.push(B) : (H > I && z.push(B),
                    H < C && $.push(B))
                }
            if (z.forEach(H=>{
                e.slidesEl.append(n(A[H], H))
            }
            ),
            h)
                for (let H = $.length - 1; H >= 0; H -= 1) {
                    const B = $[H];
                    e.slidesEl.prepend(n(A[B], B))
                }
            else
                $.sort((H,B)=>B - H),
                $.forEach(H=>{
                    e.slidesEl.prepend(n(A[H], H))
                }
                );
            N(e.slidesEl, ".swiper-slide, swiper-slide").forEach(H=>{
                H.style[P] = O - Math.abs(e.cssOverflowAdjustment()) + "px"
            }
            ),
            T()
        }
        i("beforeInit", ()=>{
            if (!e.params.virtual.enabled)
                return;
            let y;
            if (typeof e.passedParams.virtual.slides > "u") {
                const g = [...e.slidesEl.children].filter(v=>v.matches(`.${e.params.slideClass}, swiper-slide`));
                g && g.length && (e.virtual.slides = [...g],
                y = !0,
                g.forEach((v,b)=>{
                    v.setAttribute("data-swiper-slide-index", b),
                    e.virtual.cache[b] = v,
                    v.remove()
                }
                ))
            }
            y || (e.virtual.slides = e.params.virtual.slides),
            e.classNames.push(`${e.params.containerModifierClass}virtual`),
            e.params.watchSlidesProgress = !0,
            e.originalParams.watchSlidesProgress = !0,
            e.params.initialSlide || p()
        }
        ),
        i("setTranslate", ()=>{
            e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a),
            a = setTimeout(()=>{
                p()
            }
            , 100)) : p())
        }
        ),
        i("init update resize", ()=>{
            e.params.virtual.enabled && e.params.cssMode && le(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
        }
        ),
        Object.assign(e.virtual, {
            appendSlide: function c(y) {
                if ("object" == typeof y && "length"in y)
                    for (let g = 0; g < y.length; g += 1)
                        y[g] && e.virtual.slides.push(y[g]);
                else
                    e.virtual.slides.push(y);
                p(!0)
            },
            prependSlide: function l(y) {
                const g = e.activeIndex;
                let v = g + 1
                  , b = 1;
                if (Array.isArray(y)) {
                    for (let h = 0; h < y.length; h += 1)
                        y[h] && e.virtual.slides.unshift(y[h]);
                    v = g + y.length,
                    b = y.length
                } else
                    e.virtual.slides.unshift(y);
                if (e.params.virtual.cache) {
                    const h = e.virtual.cache
                      , m = {};
                    Object.keys(h).forEach(S=>{
                        const C = h[S]
                          , I = C.getAttribute("data-swiper-slide-index");
                        I && C.setAttribute("data-swiper-slide-index", parseInt(I, 10) + b),
                        m[parseInt(S, 10) + b] = C
                    }
                    ),
                    e.virtual.cache = m
                }
                p(!0),
                e.slideTo(v, 0)
            },
            removeSlide: function o(y) {
                if (typeof y > "u" || null === y)
                    return;
                let g = e.activeIndex;
                if (Array.isArray(y))
                    for (let v = y.length - 1; v >= 0; v -= 1)
                        e.virtual.slides.splice(y[v], 1),
                        e.params.virtual.cache && delete e.virtual.cache[y[v]],
                        y[v] < g && (g -= 1),
                        g = Math.max(g, 0);
                else
                    e.virtual.slides.splice(y, 1),
                    e.params.virtual.cache && delete e.virtual.cache[y],
                    y < g && (g -= 1),
                    g = Math.max(g, 0);
                p(!0),
                e.slideTo(g, 0)
            },
            removeAllSlides: function u() {
                e.virtual.slides = [],
                e.params.virtual.cache && (e.virtual.cache = {}),
                p(!0),
                e.slideTo(0, 0)
            },
            update: p
        })
    }
    , function ds(t) {
        let {swiper: e, extendParams: s, on: i, emit: r} = t;
        const a = R()
          , f = Y();
        function d(c) {
            if (!e.enabled)
                return;
            const {rtlTranslate: l} = e;
            let o = c;
            o.originalEvent && (o = o.originalEvent);
            const u = o.keyCode || o.charCode
              , y = e.params.keyboard.pageUpDown
              , g = y && 33 === u
              , v = y && 34 === u
              , b = 37 === u
              , h = 39 === u
              , m = 38 === u
              , S = 40 === u;
            if (!e.allowSlideNext && (e.isHorizontal() && h || e.isVertical() && S || v) || !e.allowSlidePrev && (e.isHorizontal() && b || e.isVertical() && m || g))
                return !1;
            if (!(o.shiftKey || o.altKey || o.ctrlKey || o.metaKey || a.activeElement && a.activeElement.nodeName && ("input" === a.activeElement.nodeName.toLowerCase() || "textarea" === a.activeElement.nodeName.toLowerCase()))) {
                if (e.params.keyboard.onlyInViewport && (g || v || b || h || m || S)) {
                    let C = !1;
                    if (te(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && 0 === te(e.el, `.${e.params.slideActiveClass}`).length)
                        return;
                    const I = e.el
                      , A = I.clientWidth
                      , D = I.clientHeight
                      , L = f.innerWidth
                      , k = f.innerHeight
                      , P = ue(I);
                    l && (P.left -= I.scrollLeft);
                    const M = [[P.left, P.top], [P.left + A, P.top], [P.left, P.top + D], [P.left + A, P.top + D]];
                    for (let E = 0; E < M.length; E += 1) {
                        const w = M[E];
                        if (w[0] >= 0 && w[0] <= L && w[1] >= 0 && w[1] <= k) {
                            if (0 === w[0] && 0 === w[1])
                                continue;
                            C = !0
                        }
                    }
                    if (!C)
                        return
                }
                e.isHorizontal() ? ((g || v || b || h) && (o.preventDefault ? o.preventDefault() : o.returnValue = !1),
                ((v || h) && !l || (g || b) && l) && e.slideNext(),
                ((g || b) && !l || (v || h) && l) && e.slidePrev()) : ((g || v || m || S) && (o.preventDefault ? o.preventDefault() : o.returnValue = !1),
                (v || S) && e.slideNext(),
                (g || m) && e.slidePrev()),
                r("keyPress", u)
            }
        }
        function n() {
            e.keyboard.enabled || (a.addEventListener("keydown", d),
            e.keyboard.enabled = !0)
        }
        function p() {
            e.keyboard.enabled && (a.removeEventListener("keydown", d),
            e.keyboard.enabled = !1)
        }
        e.keyboard = {
            enabled: !1
        },
        s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }),
        i("init", ()=>{
            e.params.keyboard.enabled && n()
        }
        ),
        i("destroy", ()=>{
            e.keyboard.enabled && p()
        }
        ),
        Object.assign(e.keyboard, {
            enable: n,
            disable: p
        })
    }
    , function cs(t) {
        let {swiper: e, extendParams: s, on: i, emit: r} = t;
        const a = Y();
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel"
            }
        }),
        e.mousewheel = {
            enabled: !1
        };
        let f, n, d = q();
        const p = [];
        function l() {
            e.enabled && (e.mouseEntered = !0)
        }
        function o() {
            e.enabled && (e.mouseEntered = !1)
        }
        function u(m) {
            return !(e.params.mousewheel.thresholdDelta && m.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && q() - d < e.params.mousewheel.thresholdTime) && (m.delta >= 6 && q() - d < 60 || (m.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(),
            r("scroll", m.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(),
            r("scroll", m.raw)),
            d = (new a.Date).getTime(),
            !1))
        }
        function g(m) {
            let S = m
              , C = !0;
            if (!e.enabled || m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))
                return;
            const I = e.params.mousewheel;
            e.params.cssMode && S.preventDefault();
            let A = e.el;
            "container" !== e.params.mousewheel.eventsTarget && (A = document.querySelector(e.params.mousewheel.eventsTarget));
            const D = A && A.contains(S.target);
            if (!e.mouseEntered && !D && !I.releaseOnEdges)
                return !0;
            S.originalEvent && (S = S.originalEvent);
            let L = 0;
            const k = e.rtlTranslate ? -1 : 1
              , P = function c(m) {
                let A = 0
                  , D = 0
                  , L = 0
                  , k = 0;
                return "detail"in m && (D = m.detail),
                "wheelDelta"in m && (D = -m.wheelDelta / 120),
                "wheelDeltaY"in m && (D = -m.wheelDeltaY / 120),
                "wheelDeltaX"in m && (A = -m.wheelDeltaX / 120),
                "axis"in m && m.axis === m.HORIZONTAL_AXIS && (A = D,
                D = 0),
                L = 10 * A,
                k = 10 * D,
                "deltaY"in m && (k = m.deltaY),
                "deltaX"in m && (L = m.deltaX),
                m.shiftKey && !L && (L = k,
                k = 0),
                (L || k) && m.deltaMode && (1 === m.deltaMode ? (L *= 40,
                k *= 40) : (L *= 800,
                k *= 800)),
                L && !A && (A = L < 1 ? -1 : 1),
                k && !D && (D = k < 1 ? -1 : 1),
                {
                    spinX: A,
                    spinY: D,
                    pixelX: L,
                    pixelY: k
                }
            }(S);
            if (I.forceToAxis)
                if (e.isHorizontal()) {
                    if (!(Math.abs(P.pixelX) > Math.abs(P.pixelY)))
                        return !0;
                    L = -P.pixelX * k
                } else {
                    if (!(Math.abs(P.pixelY) > Math.abs(P.pixelX)))
                        return !0;
                    L = -P.pixelY
                }
            else
                L = Math.abs(P.pixelX) > Math.abs(P.pixelY) ? -P.pixelX * k : -P.pixelY;
            if (0 === L)
                return !0;
            I.invert && (L = -L);
            let M = e.getTranslate() + L * I.sensitivity;
            if (M >= e.minTranslate() && (M = e.minTranslate()),
            M <= e.maxTranslate() && (M = e.maxTranslate()),
            C = !!e.params.loop || !(M === e.minTranslate() || M === e.maxTranslate()),
            C && e.params.nested && S.stopPropagation(),
            e.params.freeMode && e.params.freeMode.enabled) {
                const E = {
                    time: q(),
                    delta: Math.abs(L),
                    direction: Math.sign(L)
                }
                  , w = n && E.time < n.time + 500 && E.delta <= n.delta && E.direction === n.direction;
                if (!w) {
                    n = void 0;
                    let x = e.getTranslate() + L * I.sensitivity;
                    const O = e.isBeginning
                      , T = e.isEnd;
                    if (x >= e.minTranslate() && (x = e.minTranslate()),
                    x <= e.maxTranslate() && (x = e.maxTranslate()),
                    e.setTransition(0),
                    e.setTranslate(x),
                    e.updateProgress(),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    (!O && e.isBeginning || !T && e.isEnd) && e.updateSlidesClasses(),
                    e.params.loop && e.loopFix({
                        direction: E.direction < 0 ? "next" : "prev",
                        byMousewheel: !0
                    }),
                    e.params.freeMode.sticky) {
                        clearTimeout(f),
                        f = void 0,
                        p.length >= 15 && p.shift();
                        const $ = p.length ? p[p.length - 1] : void 0
                          , z = p[0];
                        if (p.push(E),
                        $ && (E.delta > $.delta || E.direction !== $.direction))
                            p.splice(0);
                        else if (p.length >= 15 && E.time - z.time < 500 && z.delta - E.delta >= 1 && E.delta <= 6) {
                            const G = L > 0 ? .8 : .2;
                            n = E,
                            p.splice(0),
                            f = J(()=>{
                                e.slideToClosest(e.params.speed, !0, void 0, G)
                            }
                            , 0)
                        }
                        f || (f = J(()=>{
                            n = E,
                            p.splice(0),
                            e.slideToClosest(e.params.speed, !0, void 0, .5)
                        }
                        , 500))
                    }
                    if (w || r("scroll", S),
                    e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
                    x === e.minTranslate() || x === e.maxTranslate())
                        return !0
                }
            } else {
                const E = {
                    time: q(),
                    delta: Math.abs(L),
                    direction: Math.sign(L),
                    raw: m
                };
                p.length >= 2 && p.shift();
                const w = p.length ? p[p.length - 1] : void 0;
                if (p.push(E),
                w ? (E.direction !== w.direction || E.delta > w.delta || E.time > w.time + 150) && u(E) : u(E),
                function y(m) {
                    const S = e.params.mousewheel;
                    if (m.direction < 0) {
                        if (e.isEnd && !e.params.loop && S.releaseOnEdges)
                            return !0
                    } else if (e.isBeginning && !e.params.loop && S.releaseOnEdges)
                        return !0;
                    return !1
                }(E))
                    return !0
            }
            return S.preventDefault ? S.preventDefault() : S.returnValue = !1,
            !1
        }
        function v(m) {
            let S = e.el;
            "container" !== e.params.mousewheel.eventsTarget && (S = document.querySelector(e.params.mousewheel.eventsTarget)),
            S[m]("mouseenter", l),
            S[m]("mouseleave", o),
            S[m]("wheel", g)
        }
        function b() {
            return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g),
            !0) : !e.mousewheel.enabled && (v("addEventListener"),
            e.mousewheel.enabled = !0,
            !0)
        }
        function h() {
            return e.params.cssMode ? (e.wrapperEl.addEventListener(event, g),
            !0) : !!e.mousewheel.enabled && (v("removeEventListener"),
            e.mousewheel.enabled = !1,
            !0)
        }
        i("init", ()=>{
            !e.params.mousewheel.enabled && e.params.cssMode && h(),
            e.params.mousewheel.enabled && b()
        }
        ),
        i("destroy", ()=>{
            e.params.cssMode && b(),
            e.mousewheel.enabled && h()
        }
        ),
        Object.assign(e.mousewheel, {
            enable: b,
            disable: h
        })
    }
    , function fs(t) {
        let {swiper: e, extendParams: s, on: i, emit: r} = t;
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }),
        e.navigation = {
            nextEl: null,
            prevEl: null
        };
        const a = g=>(Array.isArray(g) || (g = [g].filter(v=>!!v)),
        g);
        function f(g) {
            let v;
            return g && "string" == typeof g && e.isElement && (v = e.el.shadowRoot.querySelector(g),
            v) ? v : (g && ("string" == typeof g && (v = [...document.querySelectorAll(g)]),
            e.params.uniqueNavElements && "string" == typeof g && v.length > 1 && 1 === e.el.querySelectorAll(g).length && (v = e.el.querySelector(g))),
            g && !v ? g : v)
        }
        function d(g, v) {
            const b = e.params.navigation;
            (g = a(g)).forEach(h=>{
                h && (h.classList[v ? "add" : "remove"](...b.disabledClass.split(" ")),
                "BUTTON" === h.tagName && (h.disabled = v),
                e.params.watchOverflow && e.enabled && h.classList[e.isLocked ? "add" : "remove"](b.lockClass))
            }
            )
        }
        function n() {
            const {nextEl: g, prevEl: v} = e.navigation;
            if (e.params.loop)
                return d(v, !1),
                void d(g, !1);
            d(v, e.isBeginning && !e.params.rewind),
            d(g, e.isEnd && !e.params.rewind)
        }
        function p(g) {
            g.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(),
            r("navigationPrev"))
        }
        function c(g) {
            g.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(),
            r("navigationNext"))
        }
        function l() {
            const g = e.params.navigation;
            if (e.params.navigation = Pe(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !g.nextEl && !g.prevEl)
                return;
            let v = f(g.nextEl)
              , b = f(g.prevEl);
            Object.assign(e.navigation, {
                nextEl: v,
                prevEl: b
            }),
            v = a(v),
            b = a(b);
            const h = (m,S)=>{
                m && m.addEventListener("click", "next" === S ? c : p),
                !e.enabled && m && m.classList.add(...g.lockClass.split(" "))
            }
            ;
            v.forEach(m=>h(m, "next")),
            b.forEach(m=>h(m, "prev"))
        }
        function o() {
            let {nextEl: g, prevEl: v} = e.navigation;
            g = a(g),
            v = a(v);
            const b = (h,m)=>{
                h.removeEventListener("click", "next" === m ? c : p),
                h.classList.remove(...e.params.navigation.disabledClass.split(" "))
            }
            ;
            g.forEach(h=>b(h, "next")),
            v.forEach(h=>b(h, "prev"))
        }
        i("init", ()=>{
            !1 === e.params.navigation.enabled ? y() : (l(),
            n())
        }
        ),
        i("toEdge fromEdge lock unlock", ()=>{
            n()
        }
        ),
        i("destroy", ()=>{
            o()
        }
        ),
        i("enable disable", ()=>{
            let {nextEl: g, prevEl: v} = e.navigation;
            g = a(g),
            v = a(v),
            [...g, ...v].filter(b=>!!b).forEach(b=>b.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass))
        }
        ),
        i("click", (g,v)=>{
            let {nextEl: b, prevEl: h} = e.navigation;
            b = a(b),
            h = a(h);
            const m = v.target;
            if (e.params.navigation.hideOnClick && !h.includes(m) && !b.includes(m)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === m || e.pagination.el.contains(m)))
                    return;
                let S;
                b.length ? S = b[0].classList.contains(e.params.navigation.hiddenClass) : h.length && (S = h[0].classList.contains(e.params.navigation.hiddenClass)),
                r(!0 === S ? "navigationShow" : "navigationHide"),
                [...b, ...h].filter(C=>!!C).forEach(C=>C.classList.toggle(e.params.navigation.hiddenClass))
            }
        }
        );
        const y = ()=>{
            e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
            o()
        }
        ;
        Object.assign(e.navigation, {
            enable: ()=>{
                e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
                l(),
                n()
            }
            ,
            disable: y,
            update: n,
            init: l,
            destroy: o
        })
    }
    , function ps(t) {
        let {swiper: e, extendParams: s, on: i, emit: r} = t;
        const a = "swiper-pagination";
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: h=>h,
                formatFractionTotal: h=>h,
                bulletClass: `${a}-bullet`,
                bulletActiveClass: `${a}-bullet-active`,
                modifierClass: `${a}-`,
                currentClass: `${a}-current`,
                totalClass: `${a}-total`,
                hiddenClass: `${a}-hidden`,
                progressbarFillClass: `${a}-progressbar-fill`,
                progressbarOppositeClass: `${a}-progressbar-opposite`,
                clickableClass: `${a}-clickable`,
                lockClass: `${a}-lock`,
                horizontalClass: `${a}-horizontal`,
                verticalClass: `${a}-vertical`,
                paginationDisabledClass: `${a}-disabled`
            }
        }),
        e.pagination = {
            el: null,
            bullets: []
        };
        let f, d = 0;
        const n = h=>(Array.isArray(h) || (h = [h].filter(m=>!!m)),
        h);
        function p() {
            return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
        }
        function c(h, m) {
            const {bulletActiveClass: S} = e.params.pagination;
            h && (h = h[("prev" === m ? "previous" : "next") + "ElementSibling"]) && (h.classList.add(`${S}-${m}`),
            (h = h[("prev" === m ? "previous" : "next") + "ElementSibling"]) && h.classList.add(`${S}-${m}-${m}`))
        }
        function l(h) {
            const m = h.target.closest(Z(e.params.pagination.bulletClass));
            if (!m)
                return;
            h.preventDefault();
            const S = oe(m) * e.params.slidesPerGroup;
            if (e.params.loop) {
                if (e.realIndex === S)
                    return;
                const C = e.getSlideIndexByData(S)
                  , I = e.getSlideIndexByData(e.realIndex);
                C > e.slides.length - e.loopedSlides && e.loopFix({
                    direction: C > I ? "next" : "prev",
                    activeSlideIndex: C,
                    slideTo: !1
                }),
                e.slideToLoop(S)
            } else
                e.slideTo(S)
        }
        function o() {
            const h = e.rtl
              , m = e.params.pagination;
            if (p())
                return;
            let C, I, S = e.pagination.el;
            S = n(S);
            const D = e.params.loop ? Math.ceil((e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (I = e.previousRealIndex || 0,
            C = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (C = e.snapIndex,
            I = e.previousSnapIndex) : (I = e.previousIndex || 0,
            C = e.activeIndex || 0),
            "bullets" === m.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const L = e.pagination.bullets;
                let k, P, M;
                if (m.dynamicBullets && (f = ye(L[0], e.isHorizontal() ? "width" : "height", !0),
                S.forEach(E=>{
                    E.style[e.isHorizontal() ? "width" : "height"] = f * (m.dynamicMainBullets + 4) + "px"
                }
                ),
                m.dynamicMainBullets > 1 && void 0 !== I && (d += C - (I || 0),
                d > m.dynamicMainBullets - 1 ? d = m.dynamicMainBullets - 1 : d < 0 && (d = 0)),
                k = Math.max(C - d, 0),
                P = k + (Math.min(L.length, m.dynamicMainBullets) - 1),
                M = (P + k) / 2),
                L.forEach(E=>{
                    const w = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(x=>`${m.bulletActiveClass}${x}`)].map(x=>"string" == typeof x && x.includes(" ") ? x.split(" ") : x).flat();
                    E.classList.remove(...w)
                }
                ),
                S.length > 1)
                    L.forEach(E=>{
                        const w = oe(E);
                        w === C ? E.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && E.setAttribute("part", "bullet"),
                        m.dynamicBullets && (w >= k && w <= P && E.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),
                        w === k && c(E, "prev"),
                        w === P && c(E, "next"))
                    }
                    );
                else {
                    const E = L[C];
                    if (E && E.classList.add(...m.bulletActiveClass.split(" ")),
                    e.isElement && L.forEach((w,x)=>{
                        w.setAttribute("part", x === C ? "bullet-active" : "bullet")
                    }
                    ),
                    m.dynamicBullets) {
                        const w = L[k]
                          , x = L[P];
                        for (let O = k; O <= P; O += 1)
                            L[O] && L[O].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
                        c(w, "prev"),
                        c(x, "next")
                    }
                }
                if (m.dynamicBullets) {
                    const E = Math.min(L.length, m.dynamicMainBullets + 4)
                      , w = (f * E - f) / 2 - M * f
                      , x = h ? "right" : "left";
                    L.forEach(O=>{
                        O.style[e.isHorizontal() ? x : "top"] = `${w}px`
                    }
                    )
                }
            }
            S.forEach((L,k)=>{
                if ("fraction" === m.type && (L.querySelectorAll(Z(m.currentClass)).forEach(P=>{
                    P.textContent = m.formatFractionCurrent(C + 1)
                }
                ),
                L.querySelectorAll(Z(m.totalClass)).forEach(P=>{
                    P.textContent = m.formatFractionTotal(D)
                }
                )),
                "progressbar" === m.type) {
                    let P;
                    P = m.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    const M = (C + 1) / D;
                    let E = 1
                      , w = 1;
                    "horizontal" === P ? E = M : w = M,
                    L.querySelectorAll(Z(m.progressbarFillClass)).forEach(x=>{
                        x.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${w})`,
                        x.style.transitionDuration = `${e.params.speed}ms`
                    }
                    )
                }
                "custom" === m.type && m.renderCustom ? (L.innerHTML = m.renderCustom(e, C + 1, D),
                0 === k && r("paginationRender", L)) : (0 === k && r("paginationRender", L),
                r("paginationUpdate", L)),
                e.params.watchOverflow && e.enabled && L.classList[e.isLocked ? "add" : "remove"](m.lockClass)
            }
            )
        }
        function u() {
            const h = e.params.pagination;
            if (p())
                return;
            const m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
            let S = e.pagination.el;
            S = n(S);
            let C = "";
            if ("bullets" === h.type) {
                let I = e.params.loop ? Math.ceil(m / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && I > m && (I = m);
                for (let A = 0; A < I; A += 1)
                    C += h.renderBullet ? h.renderBullet.call(e, A, h.bulletClass) : `<${h.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`
            }
            "fraction" === h.type && (C = h.renderFraction ? h.renderFraction.call(e, h.currentClass, h.totalClass) : `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),
            "progressbar" === h.type && (C = h.renderProgressbar ? h.renderProgressbar.call(e, h.progressbarFillClass) : `<span class="${h.progressbarFillClass}"></span>`),
            e.pagination.bullets = [],
            S.forEach(I=>{
                "custom" !== h.type && (I.innerHTML = C || ""),
                "bullets" === h.type && e.pagination.bullets.push(...I.querySelectorAll(Z(h.bulletClass)))
            }
            ),
            "custom" !== h.type && r("paginationRender", S[0])
        }
        function y() {
            e.params.pagination = Pe(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const h = e.params.pagination;
            if (!h.el)
                return;
            let m;
            "string" == typeof h.el && e.isElement && (m = e.el.shadowRoot.querySelector(h.el)),
            !m && "string" == typeof h.el && (m = [...document.querySelectorAll(h.el)]),
            m || (m = h.el),
            m && 0 !== m.length && (e.params.uniqueNavElements && "string" == typeof h.el && Array.isArray(m) && m.length > 1 && (m = [...e.el.querySelectorAll(h.el)],
            m.length > 1 && (m = m.filter(S=>te(S, ".swiper")[0] === e.el)[0])),
            Array.isArray(m) && 1 === m.length && (m = m[0]),
            Object.assign(e.pagination, {
                el: m
            }),
            m = n(m),
            m.forEach(S=>{
                "bullets" === h.type && h.clickable && S.classList.add(h.clickableClass),
                S.classList.add(h.modifierClass + h.type),
                S.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
                "bullets" === h.type && h.dynamicBullets && (S.classList.add(`${h.modifierClass}${h.type}-dynamic`),
                d = 0,
                h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
                "progressbar" === h.type && h.progressbarOpposite && S.classList.add(h.progressbarOppositeClass),
                h.clickable && S.addEventListener("click", l),
                e.enabled || S.classList.add(h.lockClass)
            }
            ))
        }
        function g() {
            const h = e.params.pagination;
            if (p())
                return;
            let m = e.pagination.el;
            m && (m = n(m),
            m.forEach(S=>{
                S.classList.remove(h.hiddenClass),
                S.classList.remove(h.modifierClass + h.type),
                S.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
                h.clickable && S.removeEventListener("click", l)
            }
            )),
            e.pagination.bullets && e.pagination.bullets.forEach(S=>S.classList.remove(...h.bulletActiveClass.split(" ")))
        }
        i("changeDirection", ()=>{
            if (!e.pagination || !e.pagination.el)
                return;
            const h = e.params.pagination;
            let {el: m} = e.pagination;
            m = n(m),
            m.forEach(S=>{
                S.classList.remove(h.horizontalClass, h.verticalClass),
                S.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass)
            }
            )
        }
        ),
        i("init", ()=>{
            !1 === e.params.pagination.enabled ? b() : (y(),
            u(),
            o())
        }
        ),
        i("activeIndexChange", ()=>{
            typeof e.snapIndex > "u" && o()
        }
        ),
        i("snapIndexChange", ()=>{
            o()
        }
        ),
        i("snapGridLengthChange", ()=>{
            u(),
            o()
        }
        ),
        i("destroy", ()=>{
            g()
        }
        ),
        i("enable disable", ()=>{
            let {el: h} = e.pagination;
            h && (h = n(h),
            h.forEach(m=>m.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
        }
        ),
        i("lock unlock", ()=>{
            o()
        }
        ),
        i("click", (h,m)=>{
            const S = m.target;
            let {el: C} = e.pagination;
            if (Array.isArray(C) || (C = [C].filter(I=>!!I)),
            e.params.pagination.el && e.params.pagination.hideOnClick && C && C.length > 0 && !S.classList.contains(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && S === e.navigation.nextEl || e.navigation.prevEl && S === e.navigation.prevEl))
                    return;
                const I = C[0].classList.contains(e.params.pagination.hiddenClass);
                r(!0 === I ? "paginationShow" : "paginationHide"),
                C.forEach(A=>A.classList.toggle(e.params.pagination.hiddenClass))
            }
        }
        );
        const b = ()=>{
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let {el: h} = e.pagination;
            h && (h = n(h),
            h.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),
            g()
        }
        ;
        Object.assign(e.pagination, {
            enable: ()=>{
                e.el.classList.remove(e.params.pagination.paginationDisabledClass);
                let {el: h} = e.pagination;
                h && (h = n(h),
                h.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),
                y(),
                u(),
                o()
            }
            ,
            disable: b,
            render: u,
            update: o,
            init: y,
            destroy: g
        })
    }
    , function us(t) {
        let {swiper: e, extendParams: s, on: i, emit: r} = t;
        const a = R();
        let p, c, l, o, f = !1, d = null, n = null;
        function u() {
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: M, rtlTranslate: E} = e
              , {dragEl: w, el: x} = M
              , O = e.params.scrollbar;
            let $ = c
              , z = (l - c) * (e.params.loop ? e.progressLoop : e.progress);
            E ? (z = -z,
            z > 0 ? ($ = c - z,
            z = 0) : -z + c > l && ($ = l + z)) : z < 0 ? ($ = c + z,
            z = 0) : z + c > l && ($ = l - z),
            e.isHorizontal() ? (w.style.transform = `translate3d(${z}px, 0, 0)`,
            w.style.width = `${$}px`) : (w.style.transform = `translate3d(0px, ${z}px, 0)`,
            w.style.height = `${$}px`),
            O.hide && (clearTimeout(d),
            x.style.opacity = 1,
            d = setTimeout(()=>{
                x.style.opacity = 0,
                x.style.transitionDuration = "400ms"
            }
            , 1e3))
        }
        function g() {
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: M} = e
              , {dragEl: E, el: w} = M;
            E.style.width = "",
            E.style.height = "",
            l = e.isHorizontal() ? w.offsetWidth : w.offsetHeight,
            o = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)),
            c = "auto" === e.params.scrollbar.dragSize ? l * o : parseInt(e.params.scrollbar.dragSize, 10),
            e.isHorizontal() ? E.style.width = `${c}px` : E.style.height = `${c}px`,
            w.style.display = o >= 1 ? "none" : "",
            e.params.scrollbar.hide && (w.style.opacity = 0),
            e.params.watchOverflow && e.enabled && M.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass)
        }
        function v(M) {
            return e.isHorizontal() ? M.clientX : M.clientY
        }
        function b(M) {
            const {scrollbar: E, rtlTranslate: w} = e
              , {el: x} = E;
            let O;
            O = (v(M) - ue(x)[e.isHorizontal() ? "left" : "top"] - (null !== p ? p : c / 2)) / (l - c),
            O = Math.max(Math.min(O, 1), 0),
            w && (O = 1 - O);
            const T = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * O;
            e.updateProgress(T),
            e.setTranslate(T),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        function h(M) {
            const E = e.params.scrollbar
              , {scrollbar: w, wrapperEl: x} = e
              , {el: O, dragEl: T} = w;
            f = !0,
            p = M.target === T ? v(M) - M.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null,
            M.preventDefault(),
            M.stopPropagation(),
            x.style.transitionDuration = "100ms",
            T.style.transitionDuration = "100ms",
            b(M),
            clearTimeout(n),
            O.style.transitionDuration = "0ms",
            E.hide && (O.style.opacity = 1),
            e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
            r("scrollbarDragStart", M)
        }
        function m(M) {
            const {scrollbar: E, wrapperEl: w} = e
              , {el: x, dragEl: O} = E;
            f && (M.preventDefault ? M.preventDefault() : M.returnValue = !1,
            b(M),
            w.style.transitionDuration = "0ms",
            x.style.transitionDuration = "0ms",
            O.style.transitionDuration = "0ms",
            r("scrollbarDragMove", M))
        }
        function S(M) {
            const E = e.params.scrollbar
              , {scrollbar: w, wrapperEl: x} = e
              , {el: O} = w;
            f && (f = !1,
            e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "",
            x.style.transitionDuration = ""),
            E.hide && (clearTimeout(n),
            n = J(()=>{
                O.style.opacity = 0,
                O.style.transitionDuration = "400ms"
            }
            , 1e3)),
            r("scrollbarDragEnd", M),
            E.snapOnRelease && e.slideToClosest())
        }
        function C(M) {
            const {scrollbar: E, params: w} = e
              , x = E.el;
            if (!x)
                return;
            const T = !!w.passiveListeners && {
                passive: !1,
                capture: !1
            }
              , $ = !!w.passiveListeners && {
                passive: !0,
                capture: !1
            };
            if (!x)
                return;
            const z = "on" === M ? "addEventListener" : "removeEventListener";
            x[z]("pointerdown", h, T),
            a[z]("pointermove", m, T),
            a[z]("pointerup", S, $)
        }
        function D() {
            const {scrollbar: M, el: E} = e;
            e.params.scrollbar = Pe(e, e.originalParams.scrollbar, e.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const w = e.params.scrollbar;
            if (!w.el)
                return;
            let x, O;
            "string" == typeof w.el && e.isElement && (x = e.el.shadowRoot.querySelector(w.el)),
            x || "string" != typeof w.el ? x || (x = w.el) : x = a.querySelectorAll(w.el),
            e.params.uniqueNavElements && "string" == typeof w.el && x.length > 1 && 1 === E.querySelectorAll(w.el).length && (x = E.querySelector(w.el)),
            x.length > 0 && (x = x[0]),
            x.classList.add(e.isHorizontal() ? w.horizontalClass : w.verticalClass),
            x && (O = x.querySelector(`.${e.params.scrollbar.dragClass}`),
            O || (O = _("div", e.params.scrollbar.dragClass),
            x.append(O))),
            Object.assign(M, {
                el: x,
                dragEl: O
            }),
            w.draggable && function I() {
                !e.params.scrollbar.el || !e.scrollbar.el || C("on")
            }(),
            x && x.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass)
        }
        function L() {
            const M = e.params.scrollbar
              , E = e.scrollbar.el;
            E && E.classList.remove(e.isHorizontal() ? M.horizontalClass : M.verticalClass),
            function A() {
                !e.params.scrollbar.el || !e.scrollbar.el || C("off")
            }()
        }
        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }),
        e.scrollbar = {
            el: null,
            dragEl: null
        },
        i("init", ()=>{
            !1 === e.params.scrollbar.enabled ? P() : (D(),
            g(),
            u())
        }
        ),
        i("update resize observerUpdate lock unlock", ()=>{
            g()
        }
        ),
        i("setTranslate", ()=>{
            u()
        }
        ),
        i("setTransition", (M,E)=>{
            !function y(M) {
                !e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${M}ms`)
            }(E)
        }
        ),
        i("enable disable", ()=>{
            const {el: M} = e.scrollbar;
            M && M.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass)
        }
        ),
        i("destroy", ()=>{
            L()
        }
        );
        const P = ()=>{
            e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),
            e.scrollbar.el && e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),
            L()
        }
        ;
        Object.assign(e.scrollbar, {
            enable: ()=>{
                e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),
                e.scrollbar.el && e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),
                D(),
                g(),
                u()
            }
            ,
            disable: P,
            updateSize: g,
            setTranslate: u,
            init: D,
            destroy: L
        })
    }
    , function ms(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            parallax: {
                enabled: !1
            }
        });
        const r = (d,n)=>{
            const {rtl: p} = e
              , c = p ? -1 : 1
              , l = d.getAttribute("data-swiper-parallax") || "0";
            let o = d.getAttribute("data-swiper-parallax-x")
              , u = d.getAttribute("data-swiper-parallax-y");
            const y = d.getAttribute("data-swiper-parallax-scale")
              , g = d.getAttribute("data-swiper-parallax-opacity")
              , v = d.getAttribute("data-swiper-parallax-rotate");
            if (o || u ? (o = o || "0",
            u = u || "0") : e.isHorizontal() ? (o = l,
            u = "0") : (u = l,
            o = "0"),
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * n * c + "%" : o * n * c + "px",
            u = u.indexOf("%") >= 0 ? parseInt(u, 10) * n + "%" : u * n + "px",
            typeof g < "u" && null !== g) {
                const h = g - (g - 1) * (1 - Math.abs(n));
                d.style.opacity = h
            }
            let b = `translate3d(${o}, ${u}, 0px)`;
            typeof y < "u" && null !== y && (b += ` scale(${y - (y - 1) * (1 - Math.abs(n))})`),
            v && typeof v < "u" && null !== v && (b += ` rotate(${v * n * -1}deg)`),
            d.style.transform = b
        }
          , a = ()=>{
            const {el: d, slides: n, progress: p, snapGrid: c} = e;
            N(d, "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(l=>{
                r(l, p)
            }
            ),
            n.forEach((l,o)=>{
                let u = l.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (u += Math.ceil(o / 2) - p * (c.length - 1)),
                u = Math.min(Math.max(u, -1), 1),
                l.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach(y=>{
                    r(y, u)
                }
                )
            }
            )
        }
        ;
        i("beforeInit", ()=>{
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
            e.originalParams.watchSlidesProgress = !0)
        }
        ),
        i("init", ()=>{
            e.params.parallax.enabled && a()
        }
        ),
        i("setTranslate", ()=>{
            e.params.parallax.enabled && a()
        }
        ),
        i("setTransition", (d,n)=>{
            e.params.parallax.enabled && function(d) {
                void 0 === d && (d = e.params.speed);
                const {el: n} = e;
                n.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(p=>{
                    let c = parseInt(p.getAttribute("data-swiper-parallax-duration"), 10) || d;
                    0 === d && (c = 0),
                    p.style.transitionDuration = `${c}ms`
                }
                )
            }(n)
        }
        )
    }
    , function hs(t) {
        let {swiper: e, extendParams: s, on: i, emit: r} = t;
        const a = Y();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }),
        e.zoom = {
            enabled: !1
        };
        let n, p, f = 1, d = !1;
        const c = []
          , l = {
            originX: 0,
            originY: 0,
            slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            imageEl: void 0,
            imageWrapEl: void 0,
            maxRatio: 3
        }
          , o = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }
          , u = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
        let y = 1;
        function g() {
            return c.length < 2 ? 1 : Math.sqrt((c[1].pageX - c[0].pageX) ** 2 + (c[1].pageY - c[0].pageY) ** 2)
        }
        function h(T) {
            const $ = function b() {
                return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
            }();
            return !!(T.target.matches($) || e.slides.filter(z=>z.contains(T.target)).length > 0)
        }
        function S(T) {
            if ("mouse" === T.pointerType && c.splice(0, c.length),
            !h(T))
                return;
            const $ = e.params.zoom;
            if (n = !1,
            p = !1,
            c.push(T),
            !(c.length < 2)) {
                if (n = !0,
                l.scaleStart = g(),
                !l.slideEl) {
                    l.slideEl = T.target.closest(`.${e.params.slideClass}, swiper-slide`),
                    l.slideEl || (l.slideEl = e.slides[e.activeIndex]);
                    let z = l.slideEl.querySelector(`.${$.containerClass}`);
                    if (z && (z = z.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                    l.imageEl = z,
                    l.imageWrapEl = z ? te(l.imageEl, `.${$.containerClass}`)[0] : void 0,
                    !l.imageWrapEl)
                        return void (l.imageEl = void 0);
                    l.maxRatio = l.imageWrapEl.getAttribute("data-swiper-zoom") || $.maxRatio
                }
                if (l.imageEl) {
                    const [z,G] = function v() {
                        if (c.length < 2)
                            return {
                                x: null,
                                y: null
                            };
                        const T = l.imageEl.getBoundingClientRect();
                        return [(c[0].pageX + (c[1].pageX - c[0].pageX) / 2 - T.x) / f, (c[0].pageY + (c[1].pageY - c[0].pageY) / 2 - T.y) / f]
                    }();
                    l.originX = z,
                    l.originY = G,
                    l.imageEl.style.transitionDuration = "0ms"
                }
                d = !0
            }
        }
        function C(T) {
            if (!h(T))
                return;
            const $ = e.params.zoom
              , z = e.zoom
              , G = c.findIndex(X=>X.pointerId === T.pointerId);
            G >= 0 && (c[G] = T),
            !(c.length < 2) && (p = !0,
            l.scaleMove = g(),
            l.imageEl && (z.scale = l.scaleMove / l.scaleStart * f,
            z.scale > l.maxRatio && (z.scale = l.maxRatio - 1 + (z.scale - l.maxRatio + 1) ** .5),
            z.scale < $.minRatio && (z.scale = $.minRatio + 1 - ($.minRatio - z.scale + 1) ** .5),
            l.imageEl.style.transform = `translate3d(0,0,0) scale(${z.scale})`))
        }
        function I(T) {
            if (!h(T) || "mouse" === T.pointerType && "pointerout" === T.type)
                return;
            const $ = e.params.zoom
              , z = e.zoom
              , G = c.findIndex(X=>X.pointerId === T.pointerId);
            G >= 0 && c.splice(G, 1),
            n && p && (n = !1,
            p = !1,
            l.imageEl && (z.scale = Math.max(Math.min(z.scale, l.maxRatio), $.minRatio),
            l.imageEl.style.transitionDuration = `${e.params.speed}ms`,
            l.imageEl.style.transform = `translate3d(0,0,0) scale(${z.scale})`,
            f = z.scale,
            d = !1,
            z.scale > 1 && l.slideEl ? l.slideEl.classList.add(`${$.zoomedSlideClass}`) : z.scale <= 1 && l.slideEl && l.slideEl.classList.remove(`${$.zoomedSlideClass}`),
            1 === z.scale && (l.originX = 0,
            l.originY = 0,
            l.slideEl = void 0)))
        }
        function D(T) {
            if (!h(T) || !function m(T) {
                const $ = `.${e.params.zoom.containerClass}`;
                return !!(T.target.matches($) || [...e.el.querySelectorAll($)].filter(z=>z.contains(T.target)).length > 0)
            }(T))
                return;
            const $ = e.zoom;
            if (!l.imageEl || !o.isTouched || !l.slideEl)
                return;
            o.isMoved || (o.width = l.imageEl.offsetWidth,
            o.height = l.imageEl.offsetHeight,
            o.startX = we(l.imageWrapEl, "x") || 0,
            o.startY = we(l.imageWrapEl, "y") || 0,
            l.slideWidth = l.slideEl.offsetWidth,
            l.slideHeight = l.slideEl.offsetHeight,
            l.imageWrapEl.style.transitionDuration = "0ms");
            const z = o.width * $.scale
              , G = o.height * $.scale;
            if (z < l.slideWidth && G < l.slideHeight)
                return;
            if (o.minX = Math.min(l.slideWidth / 2 - z / 2, 0),
            o.maxX = -o.minX,
            o.minY = Math.min(l.slideHeight / 2 - G / 2, 0),
            o.maxY = -o.minY,
            o.touchesCurrent.x = c.length > 0 ? c[0].pageX : T.pageX,
            o.touchesCurrent.y = c.length > 0 ? c[0].pageY : T.pageY,
            Math.max(Math.abs(o.touchesCurrent.x - o.touchesStart.x), Math.abs(o.touchesCurrent.y - o.touchesStart.y)) > 5 && (e.allowClick = !1),
            !o.isMoved && !d) {
                if (e.isHorizontal() && (Math.floor(o.minX) === Math.floor(o.startX) && o.touchesCurrent.x < o.touchesStart.x || Math.floor(o.maxX) === Math.floor(o.startX) && o.touchesCurrent.x > o.touchesStart.x))
                    return void (o.isTouched = !1);
                if (!e.isHorizontal() && (Math.floor(o.minY) === Math.floor(o.startY) && o.touchesCurrent.y < o.touchesStart.y || Math.floor(o.maxY) === Math.floor(o.startY) && o.touchesCurrent.y > o.touchesStart.y))
                    return void (o.isTouched = !1)
            }
            T.cancelable && T.preventDefault(),
            T.stopPropagation(),
            o.isMoved = !0;
            const W = ($.scale - f) / (l.maxRatio - e.params.zoom.minRatio)
              , {originX: H, originY: B} = l;
            o.currentX = o.touchesCurrent.x - o.touchesStart.x + o.startX + W * (o.width - 2 * H),
            o.currentY = o.touchesCurrent.y - o.touchesStart.y + o.startY + W * (o.height - 2 * B),
            o.currentX < o.minX && (o.currentX = o.minX + 1 - (o.minX - o.currentX + 1) ** .8),
            o.currentX > o.maxX && (o.currentX = o.maxX - 1 + (o.currentX - o.maxX + 1) ** .8),
            o.currentY < o.minY && (o.currentY = o.minY + 1 - (o.minY - o.currentY + 1) ** .8),
            o.currentY > o.maxY && (o.currentY = o.maxY - 1 + (o.currentY - o.maxY + 1) ** .8),
            u.prevPositionX || (u.prevPositionX = o.touchesCurrent.x),
            u.prevPositionY || (u.prevPositionY = o.touchesCurrent.y),
            u.prevTime || (u.prevTime = Date.now()),
            u.x = (o.touchesCurrent.x - u.prevPositionX) / (Date.now() - u.prevTime) / 2,
            u.y = (o.touchesCurrent.y - u.prevPositionY) / (Date.now() - u.prevTime) / 2,
            Math.abs(o.touchesCurrent.x - u.prevPositionX) < 2 && (u.x = 0),
            Math.abs(o.touchesCurrent.y - u.prevPositionY) < 2 && (u.y = 0),
            u.prevPositionX = o.touchesCurrent.x,
            u.prevPositionY = o.touchesCurrent.y,
            u.prevTime = Date.now(),
            l.imageWrapEl.style.transform = `translate3d(${o.currentX}px, ${o.currentY}px,0)`
        }
        function k() {
            const T = e.zoom;
            l.slideEl && e.activeIndex !== e.slides.indexOf(l.slideEl) && (l.imageEl && (l.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            l.imageWrapEl && (l.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            l.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
            T.scale = 1,
            f = 1,
            l.slideEl = void 0,
            l.imageEl = void 0,
            l.imageWrapEl = void 0,
            l.originX = 0,
            l.originY = 0)
        }
        function P(T) {
            const $ = e.zoom
              , z = e.params.zoom;
            if (!l.slideEl) {
                T && T.target && (l.slideEl = T.target.closest(`.${e.params.slideClass}, swiper-slide`)),
                l.slideEl || (l.slideEl = e.params.virtual && e.params.virtual.enabled && e.virtual ? N(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : e.slides[e.activeIndex]);
                let pe = l.slideEl.querySelector(`.${z.containerClass}`);
                pe && (pe = pe.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                l.imageEl = pe,
                l.imageWrapEl = pe ? te(l.imageEl, `.${z.containerClass}`)[0] : void 0
            }
            if (!l.imageEl || !l.imageWrapEl)
                return;
            let G, X, W, H, B, j, U, se, Re, Ne, Ve, Fe, ge, ve, Le, Ie, ze, Ae;
            e.params.cssMode && (e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.touchAction = "none"),
            l.slideEl.classList.add(`${z.zoomedSlideClass}`),
            typeof o.touchesStart.x > "u" && T ? (G = T.pageX,
            X = T.pageY) : (G = o.touchesStart.x,
            X = o.touchesStart.y);
            const fe = "number" == typeof T ? T : null;
            1 === f && fe && (G = void 0,
            X = void 0),
            $.scale = fe || l.imageWrapEl.getAttribute("data-swiper-zoom") || z.maxRatio,
            f = fe || l.imageWrapEl.getAttribute("data-swiper-zoom") || z.maxRatio,
            !T || 1 === f && fe ? (U = 0,
            se = 0) : (ze = l.slideEl.offsetWidth,
            Ae = l.slideEl.offsetHeight,
            W = ue(l.slideEl).left + a.scrollX,
            H = ue(l.slideEl).top + a.scrollY,
            B = W + ze / 2 - G,
            j = H + Ae / 2 - X,
            Re = l.imageEl.offsetWidth,
            Ne = l.imageEl.offsetHeight,
            Ve = Re * $.scale,
            Fe = Ne * $.scale,
            ge = Math.min(ze / 2 - Ve / 2, 0),
            ve = Math.min(Ae / 2 - Fe / 2, 0),
            Le = -ge,
            Ie = -ve,
            U = B * $.scale,
            se = j * $.scale,
            U < ge && (U = ge),
            U > Le && (U = Le),
            se < ve && (se = ve),
            se > Ie && (se = Ie)),
            fe && 1 === $.scale && (l.originX = 0,
            l.originY = 0),
            l.imageWrapEl.style.transitionDuration = "300ms",
            l.imageWrapEl.style.transform = `translate3d(${U}px, ${se}px,0)`,
            l.imageEl.style.transitionDuration = "300ms",
            l.imageEl.style.transform = `translate3d(0,0,0) scale(${$.scale})`
        }
        function M() {
            const T = e.zoom
              , $ = e.params.zoom;
            if (!l.slideEl) {
                l.slideEl = e.params.virtual && e.params.virtual.enabled && e.virtual ? N(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : e.slides[e.activeIndex];
                let z = l.slideEl.querySelector(`.${$.containerClass}`);
                z && (z = z.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                l.imageEl = z,
                l.imageWrapEl = z ? te(l.imageEl, `.${$.containerClass}`)[0] : void 0
            }
            !l.imageEl || !l.imageWrapEl || (e.params.cssMode && (e.wrapperEl.style.overflow = "",
            e.wrapperEl.style.touchAction = ""),
            T.scale = 1,
            f = 1,
            l.imageWrapEl.style.transitionDuration = "300ms",
            l.imageWrapEl.style.transform = "translate3d(0,0,0)",
            l.imageEl.style.transitionDuration = "300ms",
            l.imageEl.style.transform = "translate3d(0,0,0) scale(1)",
            l.slideEl.classList.remove(`${$.zoomedSlideClass}`),
            l.slideEl = void 0,
            l.originX = 0,
            l.originY = 0)
        }
        function E(T) {
            const $ = e.zoom;
            $.scale && 1 !== $.scale ? M() : P(T)
        }
        function w() {
            return {
                passiveListener: !!e.params.passiveListeners && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.params.passiveListeners || {
                    passive: !1,
                    capture: !0
                }
            }
        }
        function x() {
            const T = e.zoom;
            if (T.enabled)
                return;
            T.enabled = !0;
            const {passiveListener: $, activeListenerWithCapture: z} = w();
            e.wrapperEl.addEventListener("pointerdown", S, $),
            e.wrapperEl.addEventListener("pointermove", C, z),
            ["pointerup", "pointercancel", "pointerout"].forEach(G=>{
                e.wrapperEl.addEventListener(G, I, $)
            }
            ),
            e.wrapperEl.addEventListener("pointermove", D, z)
        }
        function O() {
            const T = e.zoom;
            if (!T.enabled)
                return;
            T.enabled = !1;
            const {passiveListener: $, activeListenerWithCapture: z} = w();
            e.wrapperEl.removeEventListener("pointerdown", S, $),
            e.wrapperEl.removeEventListener("pointermove", C, z),
            ["pointerup", "pointercancel", "pointerout"].forEach(G=>{
                e.wrapperEl.removeEventListener(G, I, $)
            }
            ),
            e.wrapperEl.removeEventListener("pointermove", D, z)
        }
        Object.defineProperty(e.zoom, "scale", {
            get: ()=>y,
            set(T) {
                y !== T && r("zoomChange", T, l.imageEl, l.slideEl),
                y = T
            }
        }),
        i("init", ()=>{
            e.params.zoom.enabled && x()
        }
        ),
        i("destroy", ()=>{
            O()
        }
        ),
        i("touchStart", (T,$)=>{
            e.zoom.enabled && function A(T) {
                if (!l.imageEl || o.isTouched)
                    return;
                e.device.android && T.cancelable && T.preventDefault(),
                o.isTouched = !0;
                const z = c.length > 0 ? c[0] : T;
                o.touchesStart.x = z.pageX,
                o.touchesStart.y = z.pageY
            }($)
        }
        ),
        i("touchEnd", (T,$)=>{
            e.zoom.enabled && function L() {
                const T = e.zoom;
                if (!l.imageEl)
                    return;
                if (!o.isTouched || !o.isMoved)
                    return o.isTouched = !1,
                    void (o.isMoved = !1);
                o.isTouched = !1,
                o.isMoved = !1;
                let $ = 300
                  , z = 300;
                const X = o.currentX + u.x * $
                  , H = o.currentY + u.y * z;
                0 !== u.x && ($ = Math.abs((X - o.currentX) / u.x)),
                0 !== u.y && (z = Math.abs((H - o.currentY) / u.y));
                const B = Math.max($, z);
                o.currentX = X,
                o.currentY = H;
                const U = o.height * T.scale;
                o.minX = Math.min(l.slideWidth / 2 - o.width * T.scale / 2, 0),
                o.maxX = -o.minX,
                o.minY = Math.min(l.slideHeight / 2 - U / 2, 0),
                o.maxY = -o.minY,
                o.currentX = Math.max(Math.min(o.currentX, o.maxX), o.minX),
                o.currentY = Math.max(Math.min(o.currentY, o.maxY), o.minY),
                l.imageWrapEl.style.transitionDuration = `${B}ms`,
                l.imageWrapEl.style.transform = `translate3d(${o.currentX}px, ${o.currentY}px,0)`
            }()
        }
        ),
        i("doubleTap", (T,$)=>{
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && E($)
        }
        ),
        i("transitionEnd", ()=>{
            e.zoom.enabled && e.params.zoom.enabled && k()
        }
        ),
        i("slideChange", ()=>{
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && k()
        }
        ),
        Object.assign(e.zoom, {
            enable: x,
            disable: O,
            in: P,
            out: M,
            toggle: E
        })
    }
    , function gs(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        function r(p, c) {
            const l = function() {
                let g, v, b;
                return (h,m)=>{
                    for (v = -1,
                    g = h.length; g - v > 1; )
                        b = g + v >> 1,
                        h[b] <= m ? v = b : g = b;
                    return g
                }
            }();
            let o, u;
            return this.x = p,
            this.y = c,
            this.lastIndex = p.length - 1,
            this.interpolate = function(g) {
                return g ? (u = l(this.x, g),
                o = u - 1,
                (g - this.x[o]) * (this.y[u] - this.y[o]) / (this.x[u] - this.x[o]) + this.y[o]) : 0
            }
            ,
            this
        }
        function n() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0,
            delete e.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        e.controller = {
            control: void 0
        },
        i("beforeInit", ()=>{
            if (typeof window < "u" && ("string" == typeof e.params.controller.control || e.params.controller.control instanceof HTMLElement)) {
                const p = document.querySelector(e.params.controller.control);
                if (p && p.swiper)
                    e.controller.control = p.swiper;
                else if (p) {
                    const c = l=>{
                        e.controller.control = l.detail[0],
                        e.update(),
                        p.removeEventListener("init", c)
                    }
                    ;
                    p.addEventListener("init", c)
                }
            } else
                e.controller.control = e.params.controller.control
        }
        ),
        i("update", ()=>{
            n()
        }
        ),
        i("resize", ()=>{
            n()
        }
        ),
        i("observerUpdate", ()=>{
            n()
        }
        ),
        i("setTranslate", (p,c,l)=>{
            !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(c, l)
        }
        ),
        i("setTransition", (p,c,l)=>{
            !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(c, l)
        }
        ),
        Object.assign(e.controller, {
            setTranslate: function f(p, c) {
                const l = e.controller.control;
                let o, u;
                const y = e.constructor;
                function g(v) {
                    if (v.destroyed)
                        return;
                    const b = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (function a(p) {
                        e.controller.spline = e.params.loop ? new r(e.slidesGrid,p.slidesGrid) : new r(e.snapGrid,p.snapGrid)
                    }(v),
                    u = -e.controller.spline.interpolate(-b)),
                    (!u || "container" === e.params.controller.by) && (o = (v.maxTranslate() - v.minTranslate()) / (e.maxTranslate() - e.minTranslate()),
                    (Number.isNaN(o) || !Number.isFinite(o)) && (o = 1),
                    u = (b - e.minTranslate()) * o + v.minTranslate()),
                    e.params.controller.inverse && (u = v.maxTranslate() - u),
                    v.updateProgress(u),
                    v.setTranslate(u, e),
                    v.updateActiveIndex(),
                    v.updateSlidesClasses()
                }
                if (Array.isArray(l))
                    for (let v = 0; v < l.length; v += 1)
                        l[v] !== c && l[v]instanceof y && g(l[v]);
                else
                    l instanceof y && c !== l && g(l)
            },
            setTransition: function d(p, c) {
                const l = e.constructor
                  , o = e.controller.control;
                let u;
                function y(g) {
                    g.destroyed || (g.setTransition(p, e),
                    0 !== p && (g.transitionStart(),
                    g.params.autoHeight && J(()=>{
                        g.updateAutoHeight()
                    }
                    ),
                    de(g.wrapperEl, ()=>{
                        o && g.transitionEnd()
                    }
                    )))
                }
                if (Array.isArray(o))
                    for (u = 0; u < o.length; u += 1)
                        o[u] !== c && o[u]instanceof l && y(o[u]);
                else
                    o instanceof l && c !== o && y(o)
            }
        })
    }
    , function vs(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }),
        e.a11y = {
            clicked: !1
        };
        let r = null;
        function a(w) {
            const x = r;
            0 !== x.length && (x.innerHTML = "",
            x.innerHTML = w)
        }
        const f = w=>(Array.isArray(w) || (w = [w].filter(x=>!!x)),
        w);
        function n(w) {
            (w = f(w)).forEach(x=>{
                x.setAttribute("tabIndex", "0")
            }
            )
        }
        function p(w) {
            (w = f(w)).forEach(x=>{
                x.setAttribute("tabIndex", "-1")
            }
            )
        }
        function c(w, x) {
            (w = f(w)).forEach(O=>{
                O.setAttribute("role", x)
            }
            )
        }
        function l(w, x) {
            (w = f(w)).forEach(O=>{
                O.setAttribute("aria-roledescription", x)
            }
            )
        }
        function u(w, x) {
            (w = f(w)).forEach(O=>{
                O.setAttribute("aria-label", x)
            }
            )
        }
        function v(w) {
            (w = f(w)).forEach(x=>{
                x.setAttribute("aria-disabled", !0)
            }
            )
        }
        function b(w) {
            (w = f(w)).forEach(x=>{
                x.setAttribute("aria-disabled", !1)
            }
            )
        }
        function h(w) {
            if (13 !== w.keyCode && 32 !== w.keyCode)
                return;
            const x = e.params.a11y
              , O = w.target;
            e.pagination && e.pagination.el && (O === e.pagination.el || e.pagination.el.contains(w.target)) && !w.target.matches(Z(e.params.pagination.bulletClass)) || (e.navigation && e.navigation.nextEl && O === e.navigation.nextEl && (e.isEnd && !e.params.loop || e.slideNext(),
            a(e.isEnd ? x.lastSlideMessage : x.nextSlideMessage)),
            e.navigation && e.navigation.prevEl && O === e.navigation.prevEl && (e.isBeginning && !e.params.loop || e.slidePrev(),
            a(e.isBeginning ? x.firstSlideMessage : x.prevSlideMessage)),
            e.pagination && O.matches(Z(e.params.pagination.bulletClass)) && O.click())
        }
        function S() {
            return e.pagination && e.pagination.bullets && e.pagination.bullets.length
        }
        function C() {
            return S() && e.params.pagination.clickable
        }
        const A = (w,x,O)=>{
            n(w),
            "BUTTON" !== w.tagName && (c(w, "button"),
            w.addEventListener("keydown", h)),
            u(w, O),
            function o(w, x) {
                (w = f(w)).forEach(O=>{
                    O.setAttribute("aria-controls", x)
                }
                )
            }(w, x)
        }
          , D = ()=>{
            e.a11y.clicked = !0
        }
          , L = ()=>{
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>{
                    e.destroyed || (e.a11y.clicked = !1)
                }
                )
            }
            )
        }
          , k = w=>{
            if (e.a11y.clicked)
                return;
            const x = w.target.closest(`.${e.params.slideClass}, swiper-slide`);
            if (!x || !e.slides.includes(x))
                return;
            const O = e.slides.indexOf(x) === e.activeIndex
              , T = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(x);
            O || T || w.sourceCapabilities && w.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0,
            e.slideTo(e.slides.indexOf(x), 0))
        }
          , P = ()=>{
            const w = e.params.a11y;
            w.itemRoleDescriptionMessage && l(e.slides, w.itemRoleDescriptionMessage),
            w.slideRole && c(e.slides, w.slideRole);
            const x = e.slides.length;
            w.slideLabelMessage && e.slides.forEach((O,T)=>{
                const $ = e.params.loop ? parseInt(O.getAttribute("data-swiper-slide-index"), 10) : T;
                u(O, w.slideLabelMessage.replace(/\{\{index\}\}/, $ + 1).replace(/\{\{slidesLength\}\}/, x))
            }
            )
        }
        ;
        i("beforeInit", ()=>{
            r = _("span", e.params.a11y.notificationClass),
            r.setAttribute("aria-live", "assertive"),
            r.setAttribute("aria-atomic", "true")
        }
        ),
        i("afterInit", ()=>{
            e.params.a11y.enabled && (()=>{
                const w = e.params.a11y;
                e.isElement ? e.el.shadowEl.append(r) : e.el.append(r);
                const x = e.el;
                w.containerRoleDescriptionMessage && l(x, w.containerRoleDescriptionMessage),
                w.containerMessage && u(x, w.containerMessage);
                const O = e.wrapperEl
                  , T = w.id || O.getAttribute("id") || `swiper-wrapper-${function d(w) {
                    return void 0 === w && (w = 16),
                    "x".repeat(w).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16))
                }(16)}`
                  , $ = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                (function y(w, x) {
                    (w = f(w)).forEach(O=>{
                        O.setAttribute("id", x)
                    }
                    )
                }
                )(O, T),
                function g(w, x) {
                    (w = f(w)).forEach(O=>{
                        O.setAttribute("aria-live", x)
                    }
                    )
                }(O, $),
                P();
                let {nextEl: z, prevEl: G} = e.navigation ? e.navigation : {};
                z = f(z),
                G = f(G),
                z && z.forEach(X=>A(X, T, w.nextSlideMessage)),
                G && G.forEach(X=>A(X, T, w.prevSlideMessage)),
                C() && (Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el]).forEach(W=>{
                    W.addEventListener("keydown", h)
                }
                ),
                e.el.addEventListener("focus", k, !0),
                e.el.addEventListener("pointerdown", D, !0),
                e.el.addEventListener("pointerup", L, !0)
            }
            )()
        }
        ),
        i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
            e.params.a11y.enabled && P()
        }
        ),
        i("fromEdge toEdge afterInit lock unlock", ()=>{
            e.params.a11y.enabled && function m() {
                if (e.params.loop || e.params.rewind || !e.navigation)
                    return;
                const {nextEl: w, prevEl: x} = e.navigation;
                x && (e.isBeginning ? (v(x),
                p(x)) : (b(x),
                n(x))),
                w && (e.isEnd ? (v(w),
                p(w)) : (b(w),
                n(w)))
            }()
        }
        ),
        i("paginationUpdate", ()=>{
            e.params.a11y.enabled && function I() {
                const w = e.params.a11y;
                S() && e.pagination.bullets.forEach(x=>{
                    e.params.pagination.clickable && (n(x),
                    e.params.pagination.renderBullet || (c(x, "button"),
                    u(x, w.paginationBulletMessage.replace(/\{\{index\}\}/, oe(x) + 1)))),
                    x.matches(Z(e.params.pagination.bulletActiveClass)) ? x.setAttribute("aria-current", "true") : x.removeAttribute("aria-current")
                }
                )
            }()
        }
        ),
        i("destroy", ()=>{
            e.params.a11y.enabled && function E() {
                r && r.remove();
                let {nextEl: w, prevEl: x} = e.navigation ? e.navigation : {};
                w = f(w),
                x = f(x),
                w && w.forEach(O=>O.removeEventListener("keydown", h)),
                x && x.forEach(O=>O.removeEventListener("keydown", h)),
                C() && (Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el]).forEach(T=>{
                    T.removeEventListener("keydown", h)
                }
                ),
                e.el.removeEventListener("focus", k, !0),
                e.el.removeEventListener("pointerdown", D, !0),
                e.el.removeEventListener("pointerup", L, !0)
            }()
        }
        )
    }
    , function ws(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let r = !1
          , a = {};
        const f = u=>u.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
          , d = u=>{
            const y = Y();
            let g;
            g = u ? new URL(u) : y.location;
            const v = g.pathname.slice(1).split("/").filter(S=>"" !== S)
              , b = v.length;
            return {
                key: v[b - 2],
                value: v[b - 1]
            }
        }
          , n = (u,y)=>{
            const g = Y();
            if (!r || !e.params.history.enabled)
                return;
            let v;
            v = e.params.url ? new URL(e.params.url) : g.location;
            let h = f(e.slides[y].getAttribute("data-history"));
            if (e.params.history.root.length > 0) {
                let S = e.params.history.root;
                "/" === S[S.length - 1] && (S = S.slice(0, S.length - 1)),
                h = `${S}/${u ? `${u}/` : ""}${h}`
            } else
                v.pathname.includes(u) || (h = `${u ? `${u}/` : ""}${h}`);
            e.params.history.keepQuery && (h += v.search);
            const m = g.history.state;
            m && m.value === h || (e.params.history.replaceState ? g.history.replaceState({
                value: h
            }, null, h) : g.history.pushState({
                value: h
            }, null, h))
        }
          , p = (u,y,g)=>{
            if (y)
                for (let v = 0, b = e.slides.length; v < b; v += 1) {
                    const h = e.slides[v];
                    if (f(h.getAttribute("data-history")) === y) {
                        const S = e.getSlideIndex(h);
                        e.slideTo(S, u, g)
                    }
                }
            else
                e.slideTo(0, u, g)
        }
          , c = ()=>{
            a = d(e.params.url),
            p(e.params.speed, a.value, !1)
        }
        ;
        i("init", ()=>{
            e.params.history.enabled && (()=>{
                const u = Y();
                if (e.params.history) {
                    if (!u.history || !u.history.pushState)
                        return e.params.history.enabled = !1,
                        void (e.params.hashNavigation.enabled = !0);
                    if (r = !0,
                    a = d(e.params.url),
                    !a.key && !a.value)
                        return void (e.params.history.replaceState || u.addEventListener("popstate", c));
                    p(0, a.value, e.params.runCallbacksOnInit),
                    e.params.history.replaceState || u.addEventListener("popstate", c)
                }
            }
            )()
        }
        ),
        i("destroy", ()=>{
            e.params.history.enabled && (()=>{
                const u = Y();
                e.params.history.replaceState || u.removeEventListener("popstate", c)
            }
            )()
        }
        ),
        i("transitionEnd _freeModeNoMomentumRelease", ()=>{
            r && n(e.params.history.key, e.activeIndex)
        }
        ),
        i("slideChange", ()=>{
            r && e.params.cssMode && n(e.params.history.key, e.activeIndex)
        }
        )
    }
    , function ys(t) {
        let {swiper: e, extendParams: s, emit: i, on: r} = t
          , a = !1;
        const f = R()
          , d = Y();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
                getSlideIndex(o, u) {
                    if (e.virtual && e.params.virtual.enabled) {
                        const y = e.slides.filter(v=>v.getAttribute("data-hash") === u)[0];
                        return y ? parseInt(y.getAttribute("data-swiper-slide-index"), 10) : 0
                    }
                    return e.getSlideIndex(N(e.slidesEl, `.${e.params.slideClass}[data-hash="${u}"], swiper-slide[data-hash="${u}"]`)[0])
                }
            }
        });
        const n = ()=>{
            i("hashChange");
            const o = f.location.hash.replace("#", "")
              , u = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex];
            if (o !== (u ? u.getAttribute("data-hash") : "")) {
                const g = e.params.hashNavigation.getSlideIndex(e, o);
                if (typeof g > "u" || Number.isNaN(g))
                    return;
                e.slideTo(g)
            }
        }
          , p = ()=>{
            if (!a || !e.params.hashNavigation.enabled)
                return;
            const o = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex]
              , u = o ? o.getAttribute("data-hash") || o.getAttribute("data-history") : "";
            e.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${u}` || ""),
            i("hashSet")) : (f.location.hash = u || "",
            i("hashSet"))
        }
        ;
        r("init", ()=>{
            e.params.hashNavigation.enabled && (()=>{
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                    return;
                a = !0;
                const o = f.location.hash.replace("#", "");
                if (o) {
                    const y = e.params.hashNavigation.getSlideIndex(e, o);
                    e.slideTo(y || 0, 0, e.params.runCallbacksOnInit, !0)
                }
                e.params.hashNavigation.watchState && d.addEventListener("hashchange", n)
            }
            )()
        }
        ),
        r("destroy", ()=>{
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d.removeEventListener("hashchange", n)
        }
        ),
        r("transitionEnd _freeModeNoMomentumRelease", ()=>{
            a && p()
        }
        ),
        r("slideChange", ()=>{
            a && e.params.cssMode && p()
        }
        )
    }
    , function bs(t) {
        let {swiper: e, extendParams: s, on: i, emit: r, params: a} = t;
        e.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        },
        s({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let f, d, c, o, u, y, g, v, b, n = a && a.autoplay ? a.autoplay.delay : 3e3, p = a && a.autoplay ? a.autoplay.delay : 3e3, l = (new Date).getTime;
        function h(T) {
            !e || e.destroyed || !e.wrapperEl || T.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", h),
            L())
        }
        const m = ()=>{
            if (e.destroyed || !e.autoplay.running)
                return;
            e.autoplay.paused ? o = !0 : o && (p = c,
            o = !1);
            const T = e.autoplay.paused ? c : l + p - (new Date).getTime();
            e.autoplay.timeLeft = T,
            r("autoplayTimeLeft", T, T / n),
            d = requestAnimationFrame(()=>{
                m()
            }
            )
        }
          , C = T=>{
            if (e.destroyed || !e.autoplay.running)
                return;
            cancelAnimationFrame(d),
            m();
            let $ = typeof T > "u" ? e.params.autoplay.delay : T;
            n = e.params.autoplay.delay,
            p = e.params.autoplay.delay;
            const z = (()=>{
                let T;
                return T = e.virtual && e.params.virtual.enabled ? e.slides.filter(z=>z.classList.contains("swiper-slide-active"))[0] : e.slides[e.activeIndex],
                T ? parseInt(T.getAttribute("data-swiper-autoplay"), 10) : void 0
            }
            )();
            !Number.isNaN(z) && z > 0 && typeof T > "u" && ($ = z,
            n = z,
            p = z),
            c = $;
            const G = e.params.speed
              , X = ()=>{
                !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(G, !0, !0),
                r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, G, !0, !0),
                r("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(G, !0, !0),
                r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, G, !0, !0),
                r("autoplay")),
                e.params.cssMode && (l = (new Date).getTime(),
                requestAnimationFrame(()=>{
                    C()
                }
                )))
            }
            ;
            return $ > 0 ? (clearTimeout(f),
            f = setTimeout(()=>{
                X()
            }
            , $)) : requestAnimationFrame(()=>{
                X()
            }
            ),
            $
        }
          , I = ()=>{
            e.autoplay.running = !0,
            C(),
            r("autoplayStart")
        }
          , A = ()=>{
            e.autoplay.running = !1,
            clearTimeout(f),
            cancelAnimationFrame(d),
            r("autoplayStop")
        }
          , D = (T,$)=>{
            if (e.destroyed || !e.autoplay.running)
                return;
            clearTimeout(f),
            T || (b = !0);
            const z = ()=>{
                r("autoplayPause"),
                e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", h) : L()
            }
            ;
            if (e.autoplay.paused = !0,
            $)
                return v && (c = e.params.autoplay.delay),
                v = !1,
                void z();
            c = (c || e.params.autoplay.delay) - ((new Date).getTime() - l),
            (!(e.isEnd && c < 0) || e.params.loop) && (c < 0 && (c = 0),
            z())
        }
          , L = ()=>{
            e.isEnd && c < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (l = (new Date).getTime(),
            b ? (b = !1,
            C(c)) : C(),
            e.autoplay.paused = !1,
            r("autoplayResume"))
        }
          , k = ()=>{
            if (e.destroyed || !e.autoplay.running)
                return;
            const T = R();
            "hidden" === T.visibilityState && (b = !0,
            D(!0)),
            "visible" === T.visibilityState && L()
        }
          , P = T=>{
            "mouse" === T.pointerType && (b = !0,
            D(!0))
        }
          , M = T=>{
            "mouse" === T.pointerType && e.autoplay.paused && L()
        }
        ;
        i("init", ()=>{
            e.params.autoplay.enabled && (e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", P),
            e.el.addEventListener("pointerleave", M)),
            R().addEventListener("visibilitychange", k),
            l = (new Date).getTime(),
            I())
        }
        ),
        i("destroy", ()=>{
            e.el.removeEventListener("pointerenter", P),
            e.el.removeEventListener("pointerleave", M),
            R().removeEventListener("visibilitychange", k),
            e.autoplay.running && A()
        }
        ),
        i("beforeTransitionStart", (T,$,z)=>{
            e.destroyed || !e.autoplay.running || (z || !e.params.autoplay.disableOnInteraction ? D(!0, !0) : A())
        }
        ),
        i("sliderFirstMove", ()=>{
            if (!e.destroyed && e.autoplay.running) {
                if (e.params.autoplay.disableOnInteraction)
                    return void A();
                u = !0,
                y = !1,
                b = !1,
                g = setTimeout(()=>{
                    b = !0,
                    y = !0,
                    D(!0)
                }
                , 200)
            }
        }
        ),
        i("touchEnd", ()=>{
            if (!e.destroyed && e.autoplay.running && u) {
                if (clearTimeout(g),
                clearTimeout(f),
                e.params.autoplay.disableOnInteraction)
                    return y = !1,
                    void (u = !1);
                y && e.params.cssMode && L(),
                y = !1,
                u = !1
            }
        }
        ),
        i("slideChange", ()=>{
            e.destroyed || !e.autoplay.running || (v = !0)
        }
        ),
        Object.assign(e.autoplay, {
            start: I,
            stop: A,
            pause: D,
            resume: L
        })
    }
    , function Ss(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let r = !1
          , a = !1;
        function f() {
            const p = e.thumbs.swiper;
            if (!p || p.destroyed)
                return;
            const c = p.clickedIndex
              , l = p.clickedSlide;
            if (l && l.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof c > "u" || null === c)
                return;
            let o;
            o = p.params.loop ? parseInt(p.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : c,
            e.params.loop ? e.slideToLoop(o) : e.slideTo(o)
        }
        function d() {
            const {thumbs: p} = e.params;
            if (r)
                return !1;
            r = !0;
            const c = e.constructor;
            if (p.swiper instanceof c)
                e.thumbs.swiper = p.swiper,
                Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                e.thumbs.swiper.update();
            else if (ne(p.swiper)) {
                const l = Object.assign({}, p.swiper);
                Object.assign(l, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                e.thumbs.swiper = new c(l),
                a = !0
            }
            return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", f),
            !0
        }
        function n(p) {
            const c = e.thumbs.swiper;
            if (!c || c.destroyed)
                return;
            const l = "auto" === c.params.slidesPerView ? c.slidesPerViewDynamic() : c.params.slidesPerView;
            let o = 1;
            const u = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (o = e.params.slidesPerView),
            e.params.thumbs.multipleActiveThumbs || (o = 1),
            o = Math.floor(o),
            c.slides.forEach(v=>v.classList.remove(u)),
            c.params.loop || c.params.virtual && c.params.virtual.enabled)
                for (let v = 0; v < o; v += 1)
                    N(c.slidesEl, `[data-swiper-slide-index="${e.realIndex + v}"]`).forEach(b=>{
                        b.classList.add(u)
                    }
                    );
            else
                for (let v = 0; v < o; v += 1)
                    c.slides[e.realIndex + v] && c.slides[e.realIndex + v].classList.add(u);
            const y = e.params.thumbs.autoScrollOffset
              , g = y && !c.params.loop;
            if (e.realIndex !== c.realIndex || g) {
                const v = c.activeIndex;
                let b, h;
                if (c.params.loop) {
                    const m = c.slides.filter(S=>S.getAttribute("data-swiper-slide-index") === `${e.realIndex}`)[0];
                    b = c.slides.indexOf(m),
                    h = e.activeIndex > e.previousIndex ? "next" : "prev"
                } else
                    b = e.realIndex,
                    h = b > e.previousIndex ? "next" : "prev";
                g && (b += "next" === h ? y : -1 * y),
                c.visibleSlidesIndexes && c.visibleSlidesIndexes.indexOf(b) < 0 && (c.params.centeredSlides && (b = b > v ? b - Math.floor(l / 2) + 1 : b + Math.floor(l / 2) - 1),
                c.slideTo(b, p ? 0 : void 0))
            }
        }
        e.thumbs = {
            swiper: null
        },
        i("beforeInit", ()=>{
            const {thumbs: p} = e.params;
            if (p && p.swiper)
                if ("string" == typeof p.swiper || p.swiper instanceof HTMLElement) {
                    const c = R()
                      , l = ()=>{
                        const u = "string" == typeof p.swiper ? c.querySelector(p.swiper) : p.swiper;
                        if (u && u.swiper)
                            p.swiper = u.swiper,
                            d(),
                            n(!0);
                        else if (u) {
                            const y = g=>{
                                p.swiper = g.detail[0],
                                u.removeEventListener("init", y),
                                d(),
                                n(!0),
                                p.swiper.update(),
                                e.update()
                            }
                            ;
                            u.addEventListener("init", y)
                        }
                        return u
                    }
                      , o = ()=>{
                        e.destroyed || l() || requestAnimationFrame(o)
                    }
                    ;
                    requestAnimationFrame(o)
                } else
                    d(),
                    n(!0)
        }
        ),
        i("slideChange update resize observerUpdate", ()=>{
            n()
        }
        ),
        i("setTransition", (p,c)=>{
            const l = e.thumbs.swiper;
            !l || l.destroyed || l.setTransition(c)
        }
        ),
        i("beforeDestroy", ()=>{
            const p = e.thumbs.swiper;
            !p || p.destroyed || a && p.destroy()
        }
        ),
        Object.assign(e.thumbs, {
            init: d,
            update: n
        })
    }
    , function xs(t) {
        let {swiper: e, extendParams: s, emit: i, once: r} = t;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }),
        Object.assign(e, {
            freeMode: {
                onTouchStart: function a() {
                    if (e.params.cssMode)
                        return;
                    const n = e.getTranslate();
                    e.setTranslate(n),
                    e.setTransition(0),
                    e.touchEventsData.velocities.length = 0,
                    e.freeMode.onTouchEnd({
                        currentPos: e.rtl ? e.translate : -e.translate
                    })
                },
                onTouchMove: function f() {
                    if (e.params.cssMode)
                        return;
                    const {touchEventsData: n, touches: p} = e;
                    0 === n.velocities.length && n.velocities.push({
                        position: p[e.isHorizontal() ? "startX" : "startY"],
                        time: n.touchStartTime
                    }),
                    n.velocities.push({
                        position: p[e.isHorizontal() ? "currentX" : "currentY"],
                        time: q()
                    })
                },
                onTouchEnd: function d(n) {
                    let {currentPos: p} = n;
                    if (e.params.cssMode)
                        return;
                    const {params: c, wrapperEl: l, rtlTranslate: o, snapGrid: u, touchEventsData: y} = e
                      , v = q() - y.touchStartTime;
                    if (p < -e.minTranslate())
                        e.slideTo(e.activeIndex);
                    else if (p > -e.maxTranslate())
                        e.slideTo(e.slides.length < u.length ? u.length - 1 : e.slides.length - 1);
                    else {
                        if (c.freeMode.momentum) {
                            if (y.velocities.length > 1) {
                                const D = y.velocities.pop()
                                  , L = y.velocities.pop()
                                  , P = D.time - L.time;
                                e.velocity = (D.position - L.position) / P,
                                e.velocity /= 2,
                                Math.abs(e.velocity) < c.freeMode.minimumVelocity && (e.velocity = 0),
                                (P > 150 || q() - D.time > 300) && (e.velocity = 0)
                            } else
                                e.velocity = 0;
                            e.velocity *= c.freeMode.momentumVelocityRatio,
                            y.velocities.length = 0;
                            let b = 1e3 * c.freeMode.momentumRatio
                              , m = e.translate + e.velocity * b;
                            o && (m = -m);
                            let C, S = !1;
                            const I = 20 * Math.abs(e.velocity) * c.freeMode.momentumBounceRatio;
                            let A;
                            if (m < e.maxTranslate())
                                c.freeMode.momentumBounce ? (m + e.maxTranslate() < -I && (m = e.maxTranslate() - I),
                                C = e.maxTranslate(),
                                S = !0,
                                y.allowMomentumBounce = !0) : m = e.maxTranslate(),
                                c.loop && c.centeredSlides && (A = !0);
                            else if (m > e.minTranslate())
                                c.freeMode.momentumBounce ? (m - e.minTranslate() > I && (m = e.minTranslate() + I),
                                C = e.minTranslate(),
                                S = !0,
                                y.allowMomentumBounce = !0) : m = e.minTranslate(),
                                c.loop && c.centeredSlides && (A = !0);
                            else if (c.freeMode.sticky) {
                                let D;
                                for (let L = 0; L < u.length; L += 1)
                                    if (u[L] > -m) {
                                        D = L;
                                        break
                                    }
                                m = Math.abs(u[D] - m) < Math.abs(u[D - 1] - m) || "next" === e.swipeDirection ? u[D] : u[D - 1],
                                m = -m
                            }
                            if (A && r("transitionEnd", ()=>{
                                e.loopFix()
                            }
                            ),
                            0 !== e.velocity) {
                                if (b = o ? Math.abs((-m - e.translate) / e.velocity) : Math.abs((m - e.translate) / e.velocity),
                                c.freeMode.sticky) {
                                    const D = Math.abs((o ? -m : m) - e.translate)
                                      , L = e.slidesSizesGrid[e.activeIndex];
                                    b = D < L ? c.speed : D < 2 * L ? 1.5 * c.speed : 2.5 * c.speed
                                }
                            } else if (c.freeMode.sticky)
                                return void e.slideToClosest();
                            c.freeMode.momentumBounce && S ? (e.updateProgress(C),
                            e.setTransition(b),
                            e.setTranslate(m),
                            e.transitionStart(!0, e.swipeDirection),
                            e.animating = !0,
                            de(l, ()=>{
                                !e || e.destroyed || !y.allowMomentumBounce || (i("momentumBounce"),
                                e.setTransition(c.speed),
                                setTimeout(()=>{
                                    e.setTranslate(C),
                                    de(l, ()=>{
                                        !e || e.destroyed || e.transitionEnd()
                                    }
                                    )
                                }
                                , 0))
                            }
                            )) : e.velocity ? (i("_freeModeNoMomentumRelease"),
                            e.updateProgress(m),
                            e.setTransition(b),
                            e.setTranslate(m),
                            e.transitionStart(!0, e.swipeDirection),
                            e.animating || (e.animating = !0,
                            de(l, ()=>{
                                !e || e.destroyed || e.transitionEnd()
                            }
                            ))) : e.updateProgress(m),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses()
                        } else {
                            if (c.freeMode.sticky)
                                return void e.slideToClosest();
                            c.freeMode && i("_freeModeNoMomentumRelease")
                        }
                        (!c.freeMode.momentum || v >= c.longSwipesMs) && (e.updateProgress(),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses())
                    }
                }
            }
        })
    }
    , function Es(t) {
        let i, r, a, {swiper: e, extendParams: s} = t;
        s({
            grid: {
                rows: 1,
                fill: "column"
            }
        });
        const f = ()=>{
            let c = e.params.spaceBetween;
            return "string" == typeof c && c.indexOf("%") >= 0 ? c = parseFloat(c.replace("%", "")) / 100 * e.size : "string" == typeof c && (c = parseFloat(c)),
            c
        }
        ;
        e.grid = {
            initSlides: c=>{
                const {slidesPerView: l} = e.params
                  , {rows: o, fill: u} = e.params.grid;
                a = Math.floor(c / o),
                i = Math.floor(c / o) === c / o ? c : Math.ceil(c / o) * o,
                "auto" !== l && "row" === u && (i = Math.max(i, l * o)),
                r = i / o
            }
            ,
            updateSlide: (c,l,o,u)=>{
                const {slidesPerGroup: y} = e.params
                  , g = f()
                  , {rows: v, fill: b} = e.params.grid;
                let h, m, S;
                if ("row" === b && y > 1) {
                    const C = Math.floor(c / (y * v))
                      , I = c - v * y * C
                      , A = 0 === C ? y : Math.min(Math.ceil((o - C * v * y) / v), y);
                    S = Math.floor(I / A),
                    m = I - S * A + C * y,
                    h = m + S * i / v,
                    l.style.order = h
                } else
                    "column" === b ? (m = Math.floor(c / v),
                    S = c - m * v,
                    (m > a || m === a && S === v - 1) && (S += 1,
                    S >= v && (S = 0,
                    m += 1))) : (S = Math.floor(c / r),
                    m = c - S * r);
                l.row = S,
                l.column = m,
                l.style[u("margin-top")] = 0 !== S ? g && `${g}px` : ""
            }
            ,
            updateWrapperSize: (c,l,o)=>{
                const {centeredSlides: u, roundLengths: y} = e.params
                  , g = f()
                  , {rows: v} = e.params.grid;
                if (e.virtualSize = (c + g) * i,
                e.virtualSize = Math.ceil(e.virtualSize / v) - g,
                e.wrapperEl.style[o("width")] = `${e.virtualSize + g}px`,
                u) {
                    const b = [];
                    for (let h = 0; h < l.length; h += 1) {
                        let m = l[h];
                        y && (m = Math.floor(m)),
                        l[h] < e.virtualSize + l[0] && b.push(m)
                    }
                    l.splice(0, l.length),
                    l.push(...b)
                }
            }
        }
    }
    , function Is(t) {
        let {swiper: e} = t;
        Object.assign(e, {
            appendSlide: Ts.bind(e),
            prependSlide: Ms.bind(e),
            addSlide: Cs.bind(e),
            removeSlide: Ps.bind(e),
            removeAllSlides: Ls.bind(e)
        })
    }
    , function zs(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            fadeEffect: {
                crossFade: !1
            }
        }),
        ae({
            effect: "fade",
            swiper: e,
            on: i,
            setTranslate: ()=>{
                const {slides: f} = e;
                for (let n = 0; n < f.length; n += 1) {
                    const p = e.slides[n];
                    let l = -p.swiperSlideOffset;
                    e.params.virtualTranslate || (l -= e.translate);
                    let o = 0;
                    e.isHorizontal() || (o = l,
                    l = 0);
                    const u = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(p.progress), 0) : 1 + Math.min(Math.max(p.progress, -1), 0)
                      , y = ce(0, p);
                    y.style.opacity = u,
                    y.style.transform = `translate3d(${l}px, ${o}px, 0px)`
                }
            }
            ,
            setTransition: f=>{
                const d = e.slides.map(n=>ee(n));
                d.forEach(n=>{
                    n.style.transitionDuration = `${f}ms`
                }
                ),
                he({
                    swiper: e,
                    duration: f,
                    transformElements: d,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }
    , function As(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const r = (n,p,c)=>{
            let l = n.querySelector(c ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top")
              , o = n.querySelector(c ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
            l || (l = _("div", "swiper-slide-shadow-" + (c ? "left" : "top")),
            n.append(l)),
            o || (o = _("div", "swiper-slide-shadow-" + (c ? "right" : "bottom")),
            n.append(o)),
            l && (l.style.opacity = Math.max(-p, 0)),
            o && (o.style.opacity = Math.max(p, 0))
        }
        ;
        ae({
            effect: "cube",
            swiper: e,
            on: i,
            setTranslate: ()=>{
                const {el: n, wrapperEl: p, slides: c, width: l, height: o, rtlTranslate: u, size: y, browser: g} = e
                  , v = e.params.cubeEffect
                  , b = e.isHorizontal()
                  , h = e.virtual && e.params.virtual.enabled;
                let S, m = 0;
                v.shadow && (b ? (S = e.slidesEl.querySelector(".swiper-cube-shadow"),
                S || (S = _("div", "swiper-cube-shadow"),
                e.slidesEl.append(S)),
                S.style.height = `${l}px`) : (S = n.querySelector(".swiper-cube-shadow"),
                S || (S = _("div", "swiper-cube-shadow"),
                n.append(S))));
                for (let I = 0; I < c.length; I += 1) {
                    const A = c[I];
                    let D = I;
                    h && (D = parseInt(A.getAttribute("data-swiper-slide-index"), 10));
                    let L = 90 * D
                      , k = Math.floor(L / 360);
                    u && (L = -L,
                    k = Math.floor(-L / 360));
                    const P = Math.max(Math.min(A.progress, 1), -1);
                    let M = 0
                      , E = 0
                      , w = 0;
                    D % 4 == 0 ? (M = 4 * -k * y,
                    w = 0) : (D - 1) % 4 == 0 ? (M = 0,
                    w = 4 * -k * y) : (D - 2) % 4 == 0 ? (M = y + 4 * k * y,
                    w = y) : (D - 3) % 4 == 0 && (M = -y,
                    w = 3 * y + 4 * y * k),
                    u && (M = -M),
                    b || (E = M,
                    M = 0),
                    P <= 1 && P > -1 && (m = 90 * D + 90 * P,
                    u && (m = 90 * -D - 90 * P)),
                    A.style.transform = `rotateX(${b ? 0 : -L}deg) rotateY(${b ? L : 0}deg) translate3d(${M}px, ${E}px, ${w}px)`,
                    v.slideShadows && r(A, P, b)
                }
                if (p.style.transformOrigin = `50% 50% -${y / 2}px`,
                p.style["-webkit-transform-origin"] = `50% 50% -${y / 2}px`,
                v.shadow)
                    if (b)
                        S.style.transform = `translate3d(0px, ${l / 2 + v.shadowOffset}px, ${-l / 2}px) rotateX(90deg) rotateZ(0deg) scale(${v.shadowScale})`;
                    else {
                        const I = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90)
                          , A = 1.5 - (Math.sin(2 * I * Math.PI / 360) / 2 + Math.cos(2 * I * Math.PI / 360) / 2)
                          , L = v.shadowScale / A;
                        S.style.transform = `scale3d(${v.shadowScale}, 1, ${L}) translate3d(0px, ${o / 2 + v.shadowOffset}px, ${-o / 2 / L}px) rotateX(-90deg)`
                    }
                const C = (g.isSafari || g.isWebView) && g.needPerspectiveFix ? -y / 2 : 0;
                p.style.transform = `translate3d(0px,0,${C}px) rotateX(${e.isHorizontal() ? 0 : m}deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`,
                p.style.setProperty("--swiper-cube-translate-z", `${C}px`)
            }
            ,
            setTransition: n=>{
                const {el: p, slides: c} = e;
                if (c.forEach(l=>{
                    l.style.transitionDuration = `${n}ms`,
                    l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(o=>{
                        o.style.transitionDuration = `${n}ms`
                    }
                    )
                }
                ),
                e.params.cubeEffect.shadow && !e.isHorizontal()) {
                    const l = p.querySelector(".swiper-cube-shadow");
                    l && (l.style.transitionDuration = `${n}ms`)
                }
            }
            ,
            recreateShadows: ()=>{
                const n = e.isHorizontal();
                e.slides.forEach(p=>{
                    const c = Math.max(Math.min(p.progress, 1), -1);
                    r(p, c, n)
                }
                )
            }
            ,
            getEffectParams: ()=>e.params.cubeEffect,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }
    , function $s(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        });
        const r = (n,p,c)=>{
            let l = e.isHorizontal() ? n.querySelector(".swiper-slide-shadow-left") : n.querySelector(".swiper-slide-shadow-top")
              , o = e.isHorizontal() ? n.querySelector(".swiper-slide-shadow-right") : n.querySelector(".swiper-slide-shadow-bottom");
            l || (l = re(0, n, e.isHorizontal() ? "left" : "top")),
            o || (o = re(0, n, e.isHorizontal() ? "right" : "bottom")),
            l && (l.style.opacity = Math.max(-p, 0)),
            o && (o.style.opacity = Math.max(p, 0))
        }
        ;
        ae({
            effect: "flip",
            swiper: e,
            on: i,
            setTranslate: ()=>{
                const {slides: n, rtlTranslate: p} = e
                  , c = e.params.flipEffect;
                for (let l = 0; l < n.length; l += 1) {
                    const o = n[l];
                    let u = o.progress;
                    e.params.flipEffect.limitRotation && (u = Math.max(Math.min(o.progress, 1), -1));
                    const y = o.swiperSlideOffset;
                    let v = -180 * u
                      , b = 0
                      , h = e.params.cssMode ? -y - e.translate : -y
                      , m = 0;
                    e.isHorizontal() ? p && (v = -v) : (m = h,
                    h = 0,
                    b = -v,
                    v = 0),
                    o.style.zIndex = -Math.abs(Math.round(u)) + n.length,
                    c.slideShadows && r(o, u);
                    const S = `translate3d(${h}px, ${m}px, 0px) rotateX(${b}deg) rotateY(${v}deg)`;
                    ce(0, o).style.transform = S
                }
            }
            ,
            setTransition: n=>{
                const p = e.slides.map(c=>ee(c));
                p.forEach(c=>{
                    c.style.transitionDuration = `${n}ms`,
                    c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(l=>{
                        l.style.transitionDuration = `${n}ms`
                    }
                    )
                }
                ),
                he({
                    swiper: e,
                    duration: n,
                    transformElements: p
                })
            }
            ,
            recreateShadows: ()=>{
                e.slides.forEach(p=>{
                    let c = p.progress;
                    e.params.flipEffect.limitRotation && (c = Math.max(Math.min(p.progress, 1), -1)),
                    r(p, c)
                }
                )
            }
            ,
            getEffectParams: ()=>e.params.flipEffect,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }
    , function Os(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        }),
        ae({
            effect: "coverflow",
            swiper: e,
            on: i,
            setTranslate: ()=>{
                const {width: f, height: d, slides: n, slidesSizesGrid: p} = e
                  , c = e.params.coverflowEffect
                  , l = e.isHorizontal()
                  , o = e.translate
                  , u = l ? f / 2 - o : d / 2 - o
                  , y = l ? c.rotate : -c.rotate
                  , g = c.depth;
                for (let v = 0, b = n.length; v < b; v += 1) {
                    const h = n[v]
                      , m = p[v]
                      , C = (u - h.swiperSlideOffset - m / 2) / m
                      , I = "function" == typeof c.modifier ? c.modifier(C) : C * c.modifier;
                    let A = l ? y * I : 0
                      , D = l ? 0 : y * I
                      , L = -g * Math.abs(I)
                      , k = c.stretch;
                    "string" == typeof k && -1 !== k.indexOf("%") && (k = parseFloat(c.stretch) / 100 * m);
                    let P = l ? 0 : k * I
                      , M = l ? k * I : 0
                      , E = 1 - (1 - c.scale) * Math.abs(I);
                    Math.abs(M) < .001 && (M = 0),
                    Math.abs(P) < .001 && (P = 0),
                    Math.abs(L) < .001 && (L = 0),
                    Math.abs(A) < .001 && (A = 0),
                    Math.abs(D) < .001 && (D = 0),
                    Math.abs(E) < .001 && (E = 0);
                    const w = `translate3d(${M}px,${P}px,${L}px)  rotateX(${D}deg) rotateY(${A}deg) scale(${E})`;
                    if (ce(0, h).style.transform = w,
                    h.style.zIndex = 1 - Math.abs(Math.round(I)),
                    c.slideShadows) {
                        let O = h.querySelector(l ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top")
                          , T = h.querySelector(l ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                        O || (O = re(0, h, l ? "left" : "top")),
                        T || (T = re(0, h, l ? "right" : "bottom")),
                        O && (O.style.opacity = I > 0 ? I : 0),
                        T && (T.style.opacity = -I > 0 ? -I : 0)
                    }
                }
            }
            ,
            setTransition: f=>{
                e.slides.map(n=>ee(n)).forEach(n=>{
                    n.style.transitionDuration = `${f}ms`,
                    n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>{
                        p.style.transitionDuration = `${f}ms`
                    }
                    )
                }
                )
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0
            })
        })
    }
    , function Ds(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const r = d=>"string" == typeof d ? d : `${d}px`;


        
        ae({
            effect: "creative",
            swiper: e,
            on: i,
            setTranslate: ()=>{
                const {slides: d, wrapperEl: n, slidesSizesGrid: p} = e
                  , c = e.params.creativeEffect
                  , {progressMultiplier: l} = c
                  , o = e.params.centeredSlides;
                o && (n.style.transform = `translateX(calc(50% - ${p[0] / 2 - e.params.slidesOffsetBefore || 0}px))`);
                for (let u = 0; u < d.length; u += 1) {
                    const y = d[u]
                      , g = y.progress
                      , v = Math.min(Math.max(y.progress, -c.limitProgress), c.limitProgress);
                    let b = v;
                    o || (b = Math.min(Math.max(y.originalProgress, -c.limitProgress), c.limitProgress));
                    const h = y.swiperSlideOffset
                      , m = [e.params.cssMode ? -h - e.translate : -h, 0, 0]
                      , S = [0, 0, 0];
                    let C = !1;
                    e.isHorizontal() || (m[1] = m[0],
                    m[0] = 0);
                    let I = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    v < 0 ? (I = c.next,
                    C = !0) : v > 0 && (I = c.prev,
                    C = !0),
                    m.forEach((E,w)=>{
                        m[w] = `calc(${E}px + (${r(I.translate[w])} * ${Math.abs(v * l)}))`
                    }
                    ),
                    S.forEach((E,w)=>{
                        S[w] = I.rotate[w] * Math.abs(v * l)
                    }
                    ),
                    y.style.zIndex = -Math.abs(Math.round(g)) + d.length;
                    const A = m.join(", ")
                      , k = b < 0 ? 1 + (1 - I.opacity) * b * l : 1 - (1 - I.opacity) * b * l
                      , P = `translate3d(${A}) rotateX(${S[0]}deg) rotateY(${S[1]}deg) rotateZ(${S[2]}deg) ${b < 0 ? `scale(${1 + (1 - I.scale) * b * l})` : `scale(${1 - (1 - I.scale) * b * l})`}`;
                    if (C && I.shadow || !C) {
                        let E = y.querySelector(".swiper-slide-shadow");
                        !E && I.shadow && (E = re(0, y)),
                        E && (E.style.opacity = Math.min(Math.max(Math.abs(c.shadowPerProgress ? v * (1 / c.limitProgress) : v), 0), 1))
                    }
                    const M = ce(0, y);
                    M.style.transform = P,
                    M.style.opacity = k,
                    I.origin && (M.style.transformOrigin = I.origin)
                }
            }
            ,
            setTransition: d=>{
                const n = e.slides.map(p=>ee(p));
                n.forEach(p=>{
                    p.style.transitionDuration = `${d}ms`,
                    p.querySelectorAll(".swiper-slide-shadow").forEach(c=>{
                        c.style.transitionDuration = `${d}ms`
                    }
                    )
                }
                ),
                he({
                    swiper: e,
                    duration: d,
                    transformElements: n,
                    allSlides: !0
                })
            }
            ,
            perspective: ()=>e.params.creativeEffect.perspective,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }
    , function ks(t) {
        let {swiper: e, extendParams: s, on: i} = t;
        s({
            cardsEffect: {
                slideShadows: !0,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }),
        ae({
            effect: "cards",
            swiper: e,
            on: i,
            setTranslate: ()=>{
                const {slides: f, activeIndex: d, rtlTranslate: n} = e
                  , p = e.params.cardsEffect
                  , {startTranslate: c, isTouched: l} = e.touchEventsData
                  , o = n ? -e.translate : e.translate;
                for (let u = 0; u < f.length; u += 1) {
                    const y = f[u]
                      , g = y.progress
                      , v = Math.min(Math.max(g, -4), 4);
                    let b = y.swiperSlideOffset;
                    e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
                    e.params.centeredSlides && e.params.cssMode && (b -= f[0].swiperSlideOffset);
                    let h = e.params.cssMode ? -b - e.translate : -b
                      , m = 0;
                    const S = -100 * Math.abs(v);
                    let C = 1
                      , I = -p.perSlideRotate * v
                      , A = p.perSlideOffset - .75 * Math.abs(v);
                    const D = e.virtual && e.params.virtual.enabled ? e.virtual.from + u : u;
                    if ((D === d || D === d - 1) && v > 0 && v < 1 && (l || e.params.cssMode) && o < c || (D === d || D === d + 1) && v < 0 && v > -1 && (l || e.params.cssMode) && o > c) {
                        const w = (1 - Math.abs((Math.abs(v) - .5) / .5)) ** .5;
                        I += -28 * v * w,
                        C += -.5 * w,
                        A += 96 * w,
                        m = -25 * w * Math.abs(v) + "%"
                    }
                    if (h = v < 0 ? `calc(${h}px ${n ? "-" : "+"} (${A * Math.abs(v)}%))` : v > 0 ? `calc(${h}px ${n ? "-" : "+"} (-${A * Math.abs(v)}%))` : `${h}px`,
                    !e.isHorizontal()) {
                        const w = m;
                        m = h,
                        h = w
                    }
                    const M = `\n        translate3d(${h}, ${m}, ${S}px)\n        rotateZ(${p.rotate ? n ? -I : I : 0}deg)\n        scale(${v < 0 ? "" + (1 + (1 - C) * v) : "" + (1 - (1 - C) * v)})\n      `;
                    if (p.slideShadows) {
                        let w = y.querySelector(".swiper-slide-shadow");
                        w || (w = re(0, y)),
                        w && (w.style.opacity = Math.min(Math.max((Math.abs(v) - .5) / .5, 0), 1))
                    }
                    y.style.zIndex = -Math.abs(Math.round(g)) + f.length,
                    ce(0, y).style.transform = M
                }
            }
            ,
            setTransition: f=>{
                const d = e.slides.map(n=>ee(n));
                d.forEach(n=>{
                    n.style.transitionDuration = `${f}ms`,
                    n.querySelectorAll(".swiper-slide-shadow").forEach(p=>{
                        p.style.transitionDuration = `${f}ms`
                    }
                    )
                }
                ),
                he({
                    swiper: e,
                    duration: f,
                    transformElements: d
                })
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }
    ]),
    F
});
