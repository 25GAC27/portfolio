'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // パララックス効果: スクロールに応じてテキストを上に移動
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    // フェードアウト効果: スクロールに応じて透明度を下げる
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
    // スケール効果: 微細な拡大効果
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            <motion.div
                style={{ y, opacity, scale }}
                className="flex flex-col items-center justify-center text-center"
            >
                {/* 肩書き */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-6 text-sm font-medium tracking-widest text-foreground/60 uppercase"
                >
                    Designer
                </motion.p>

                {/* 名前 */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl font-light tracking-tight text-foreground md:text-8xl lg:text-9xl"
                    style={{
                        letterSpacing: '-0.02em',
                        lineHeight: '1.1',
                    }}
                >
                    Your Name
                </motion.h1>

                {/* サブタイトル（オプション） */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-8 max-w-2xl px-6 text-lg font-light leading-relaxed tracking-wide text-foreground/70 md:text-xl"
                >
                    Creating meaningful experiences through thoughtful design
                </motion.p>
            </motion.div>

            {/* 装飾的な背景要素（オプション） */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/5 blur-3xl" />
            </div>
        </section>
    );
}

