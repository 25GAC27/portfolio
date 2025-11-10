'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (
                !relatedTarget ||
                (relatedTarget.tagName !== 'A' &&
                    relatedTarget.tagName !== 'BUTTON' &&
                    !relatedTarget.closest('a') &&
                    !relatedTarget.closest('button'))
            ) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    // ESCキーでメニューを閉じる
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscape);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* カスタムカーソル */}
            <div
                className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference will-change-transform"
                style={{
                    transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
                    transition: 'transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
            >
                <div
                    className={`h-6 w-6 rounded-full bg-white transition-all duration-300 ease-out ${
                        isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-100'
                    }`}
                />
            </div>

            {/* メインレイアウト */}
            <div className="flex min-h-screen flex-col">
                {/* ヘッダー */}
                <header className="fixed left-0 right-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-sm">
                    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                        <div className="text-lg font-medium tracking-tight">
                            Portfolio
                        </div>
                        {/* デスクトップナビゲーション */}
                        <nav className="hidden items-center gap-8 md:flex">
                            <a
                                href="#work"
                                className="text-sm font-medium tracking-wide transition-colors hover:text-foreground/60"
                            >
                                Work
                            </a>
                            <a
                                href="#about"
                                className="text-sm font-medium tracking-wide transition-colors hover:text-foreground/60"
                            >
                                About
                            </a>
                            <a
                                href="#contact"
                                className="text-sm font-medium tracking-wide transition-colors hover:text-foreground/60"
                            >
                                Contact
                            </a>
                        </nav>
                        {/* ハンバーガーメニューボタン（モバイル） */}
                        <button
                            onClick={toggleMenu}
                            className="relative z-[60] flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
                            aria-label="メニューを開く"
                            aria-expanded={isMenuOpen}
                        >
                            <span
                                className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                                }`}
                            />
                            <span
                                className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
                                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                            />
                            <span
                                className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ${
                                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                                }`}
                            />
                        </button>
                    </div>
                </header>

                {/* モバイルメニュー（上からスライド） */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* オーバーレイ */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={closeMenu}
                                className="fixed inset-0 z-[55] bg-background/60 backdrop-blur-sm md:hidden"
                            />
                            {/* メニューコンテンツ */}
                            <motion.nav
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '-100%' }}
                                transition={{
                                    type: 'spring',
                                    damping: 25,
                                    stiffness: 200,
                                }}
                                className="fixed left-0 right-0 top-0 z-[56] bg-background/95 backdrop-blur-xl md:hidden"
                            >
                                <div className="mx-auto max-w-7xl px-6 pt-20 pb-8">
                                    <div className="flex flex-col gap-1">
                                        <a
                                            href="#work"
                                            onClick={closeMenu}
                                            className="py-4 text-2xl font-light tracking-tight text-foreground transition-colors hover:text-foreground/60"
                                        >
                                            Work
                                        </a>
                                        <a
                                            href="#about"
                                            onClick={closeMenu}
                                            className="py-4 text-2xl font-light tracking-tight text-foreground transition-colors hover:text-foreground/60"
                                        >
                                            About
                                        </a>
                                        <a
                                            href="#contact"
                                            onClick={closeMenu}
                                            className="py-4 text-2xl font-light tracking-tight text-foreground transition-colors hover:text-foreground/60"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </motion.nav>
                        </>
                    )}
                </AnimatePresence>

                {/* メインコンテンツ */}
                <main className="flex-1">{children}</main>

                {/* フッター */}
                <footer className="border-t border-foreground/10 bg-background">
                    <div className="mx-auto max-w-7xl px-6 py-8">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <p className="text-sm tracking-wide text-foreground/60">
                                © {new Date().getFullYear()} Portfolio. All rights reserved.
                            </p>
                            <div className="flex gap-6">
                                <a
                                    href="#"
                                    className="text-sm tracking-wide text-foreground/60 transition-colors hover:text-foreground"
                                >
                                    Twitter
                                </a>
                                <a
                                    href="#"
                                    className="text-sm tracking-wide text-foreground/60 transition-colors hover:text-foreground"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="#"
                                    className="text-sm tracking-wide text-foreground/60 transition-colors hover:text-foreground"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

