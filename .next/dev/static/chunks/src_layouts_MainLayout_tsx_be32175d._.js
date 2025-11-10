(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/layouts/MainLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function MainLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "02f8522087f7180f8a814e5a16e23158cc7f8a70d2efdbdddcf11e72a3b98fbf") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "02f8522087f7180f8a814e5a16e23158cc7f8a70d2efdbdddcf11e72a3b98fbf";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            x: 0,
            y: 0
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "MainLayout[useEffect()]": ()=>{
                const updateMousePosition = {
                    "MainLayout[useEffect() > updateMousePosition]": (e)=>{
                        setMousePosition({
                            x: e.clientX,
                            y: e.clientY
                        });
                    }
                }["MainLayout[useEffect() > updateMousePosition]"];
                const handleMouseOver = {
                    "MainLayout[useEffect() > handleMouseOver]": (e_0)=>{
                        const target = e_0.target;
                        if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
                            setIsHovering(true);
                        }
                    }
                }["MainLayout[useEffect() > handleMouseOver]"];
                const handleMouseOut = {
                    "MainLayout[useEffect() > handleMouseOut]": (e_1)=>{
                        const relatedTarget = e_1.relatedTarget;
                        if (!relatedTarget || relatedTarget.tagName !== "A" && relatedTarget.tagName !== "BUTTON" && !relatedTarget.closest("a") && !relatedTarget.closest("button")) {
                            setIsHovering(false);
                        }
                    }
                }["MainLayout[useEffect() > handleMouseOut]"];
                window.addEventListener("mousemove", updateMousePosition);
                document.addEventListener("mouseover", handleMouseOver);
                document.addEventListener("mouseout", handleMouseOut);
                return ()=>{
                    window.removeEventListener("mousemove", updateMousePosition);
                    document.removeEventListener("mouseover", handleMouseOver);
                    document.removeEventListener("mouseout", handleMouseOut);
                };
            }
        })["MainLayout[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[4] !== isMenuOpen) {
        t4 = ({
            "MainLayout[useEffect()]": ()=>{
                const handleEscape = {
                    "MainLayout[useEffect() > handleEscape]": (e_2)=>{
                        if (e_2.key === "Escape" && isMenuOpen) {
                            setIsMenuOpen(false);
                        }
                    }
                }["MainLayout[useEffect() > handleEscape]"];
                if (isMenuOpen) {
                    document.body.style.overflow = "hidden";
                    window.addEventListener("keydown", handleEscape);
                } else {
                    document.body.style.overflow = "";
                }
                return ()=>{
                    window.removeEventListener("keydown", handleEscape);
                    document.body.style.overflow = "";
                };
            }
        })["MainLayout[useEffect()]"];
        t5 = [
            isMenuOpen
        ];
        $[4] = isMenuOpen;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] !== isMenuOpen) {
        t6 = ({
            "MainLayout[toggleMenu]": ()=>{
                setIsMenuOpen(!isMenuOpen);
            }
        })["MainLayout[toggleMenu]"];
        $[7] = isMenuOpen;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const toggleMenu = t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "MainLayout[closeMenu]": ()=>{
                setIsMenuOpen(false);
            }
        })["MainLayout[closeMenu]"];
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const closeMenu = t7;
    const t8 = `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`;
    let t9;
    if ($[10] !== t8) {
        t9 = {
            transform: t8,
            transition: "transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)"
        };
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = `h-6 w-6 rounded-full bg-white transition-all duration-300 ease-out ${isHovering ? "scale-150 opacity-80" : "scale-100 opacity-100"}`;
    let t11;
    if ($[12] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t11 || $[15] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference will-change-transform",
            style: t9,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t9;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-lg font-medium tracking-tight",
            children: "Portfolio"
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden items-center gap-8 md:flex",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#work",
                    className: "text-sm font-medium tracking-wide transition-colors hover:text-foreground/60",
                    children: "Work"
                }, void 0, false, {
                    fileName: "[project]/src/layouts/MainLayout.tsx",
                    lineNumber: 177,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#about",
                    className: "text-sm font-medium tracking-wide transition-colors hover:text-foreground/60",
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/src/layouts/MainLayout.tsx",
                    lineNumber: 177,
                    columnNumber: 175
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#contact",
                    className: "text-sm font-medium tracking-wide transition-colors hover:text-foreground/60",
                    children: "Contact"
                }, void 0, false, {
                    fileName: "[project]/src/layouts/MainLayout.tsx",
                    lineNumber: 177,
                    columnNumber: 290
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    const t15 = `absolute h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`;
    let t16;
    if ($[19] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t15
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[19] = t15;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    const t17 = `h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`;
    let t18;
    if ($[21] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t17
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[21] = t17;
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    const t19 = `absolute h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`;
    let t20;
    if ($[23] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t19
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[23] = t19;
        $[24] = t20;
    } else {
        t20 = $[24];
    }
    let t21;
    if ($[25] !== isMenuOpen || $[26] !== t16 || $[27] !== t18 || $[28] !== t20 || $[29] !== toggleMenu) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed left-0 right-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
                children: [
                    t13,
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleMenu,
                        className: "relative z-[60] flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden",
                        "aria-label": "\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F",
                        "aria-expanded": isMenuOpen,
                        children: [
                            t16,
                            t18,
                            t20
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layouts/MainLayout.tsx",
                        lineNumber: 211,
                        columnNumber: 216
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/layouts/MainLayout.tsx",
                lineNumber: 211,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[25] = isMenuOpen;
        $[26] = t16;
        $[27] = t18;
        $[28] = t20;
        $[29] = toggleMenu;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== isMenuOpen) {
        t22 = isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    onClick: closeMenu,
                    className: "fixed inset-0 z-[55] bg-background/60 backdrop-blur-sm md:hidden"
                }, void 0, false, {
                    fileName: "[project]/src/layouts/MainLayout.tsx",
                    lineNumber: 223,
                    columnNumber: 27
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                    initial: {
                        y: "-100%"
                    },
                    animate: {
                        y: 0
                    },
                    exit: {
                        y: "-100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 200
                    },
                    className: "fixed left-0 right-0 top-0 z-[56] bg-background/95 backdrop-blur-xl md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-6 pt-20 pb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#work",
                                    onClick: closeMenu,
                                    className: "py-4 text-2xl font-light tracking-tight text-foreground transition-colors hover:text-foreground/60",
                                    children: "Work"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/MainLayout.tsx",
                                    lineNumber: 241,
                                    columnNumber: 188
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#about",
                                    onClick: closeMenu,
                                    className: "py-4 text-2xl font-light tracking-tight text-foreground transition-colors hover:text-foreground/60",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/MainLayout.tsx",
                                    lineNumber: 241,
                                    columnNumber: 343
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    onClick: closeMenu,
                                    className: "py-4 text-2xl font-light tracking-tight text-foreground transition-colors hover:text-foreground/60",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/MainLayout.tsx",
                                    lineNumber: 241,
                                    columnNumber: 500
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/layouts/MainLayout.tsx",
                            lineNumber: 241,
                            columnNumber: 151
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/MainLayout.tsx",
                        lineNumber: 241,
                        columnNumber: 100
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/layouts/MainLayout.tsx",
                    lineNumber: 231,
                    columnNumber: 109
                }, this)
            ]
        }, void 0, true);
        $[31] = isMenuOpen;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[33] = t22;
        $[34] = t23;
    } else {
        t23 = $[34];
    }
    let t24;
    if ($[35] !== children) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[35] = children;
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    let t25;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm tracking-wide text-foreground/60",
            children: [
                "© ",
                new Date().getFullYear(),
                " Portfolio. All rights reserved."
            ]
        }, void 0, true, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[37] = t25;
    } else {
        t25 = $[37];
    }
    let t26;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "border-t border-foreground/10 bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-between gap-4 md:flex-row",
                    children: [
                        t25,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-sm tracking-wide text-foreground/60 transition-colors hover:text-foreground",
                                    children: "Twitter"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/MainLayout.tsx",
                                    lineNumber: 272,
                                    columnNumber: 231
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-sm tracking-wide text-foreground/60 transition-colors hover:text-foreground",
                                    children: "LinkedIn"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/MainLayout.tsx",
                                    lineNumber: 272,
                                    columnNumber: 347
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-sm tracking-wide text-foreground/60 transition-colors hover:text-foreground",
                                    children: "GitHub"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/MainLayout.tsx",
                                    lineNumber: 272,
                                    columnNumber: 464
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/layouts/MainLayout.tsx",
                            lineNumber: 272,
                            columnNumber: 203
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/layouts/MainLayout.tsx",
                    lineNumber: 272,
                    columnNumber: 120
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/layouts/MainLayout.tsx",
                lineNumber: 272,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[38] = t26;
    } else {
        t26 = $[38];
    }
    let t27;
    if ($[39] !== t21 || $[40] !== t23 || $[41] !== t24) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen flex-col",
            children: [
                t21,
                t23,
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/layouts/MainLayout.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[39] = t21;
        $[40] = t23;
        $[41] = t24;
        $[42] = t27;
    } else {
        t27 = $[42];
    }
    let t28;
    if ($[43] !== t12 || $[44] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t12,
                t27
            ]
        }, void 0, true);
        $[43] = t12;
        $[44] = t27;
        $[45] = t28;
    } else {
        t28 = $[45];
    }
    return t28;
}
_s(MainLayout, "zAp7XJQjV7IVPa71u6s9frc1hTM=");
_c = MainLayout;
var _c;
__turbopack_context__.k.register(_c, "MainLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_layouts_MainLayout_tsx_be32175d._.js.map