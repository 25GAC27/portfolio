import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // 8px グリッドシステムに基づくSpacing設定
            spacing: {
                // 0.5rem = 8px, 1rem = 16px, 1.5rem = 24px, 2rem = 32px...
                // 8pxの倍数で定義
                '0.5': '0.5rem', // 8px
                '1': '1rem', // 16px
                '1.5': '1.5rem', // 24px
                '2': '2rem', // 32px
                '2.5': '2.5rem', // 40px
                '3': '3rem', // 48px
                '3.5': '3.5rem', // 56px
                '4': '4rem', // 64px
                '5': '5rem', // 80px
                '6': '6rem', // 96px
                '7': '7rem', // 112px
                '8': '8rem', // 128px
                '9': '9rem', // 144px
                '10': '10rem', // 160px
                '11': '11rem', // 176px
                '12': '12rem', // 192px
                '14': '14rem', // 224px
                '16': '16rem', // 256px
                '20': '20rem', // 320px
                '24': '24rem', // 384px
                '28': '28rem', // 448px
                '32': '32rem', // 512px
            },
            // カスタムフォント設定（Apple風）
            fontFamily: {
                sans: [
                    // 欧文フォント（Apple風）
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'SF Pro Display',
                    'SF Pro Text',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    // 日本語フォント（Apple風）
                    'Hiragino Sans',
                    'Hiragino Kaku Gothic ProN',
                    'Hiragino Kaku Gothic Pro',
                    '游ゴシック体',
                    'Yu Gothic',
                    'YuGothic',
                    'メイリオ',
                    'Meiryo',
                    'MS PGothic',
                    'sans-serif',
                ],
                mono: [
                    'SF Mono',
                    'Monaco',
                    'Inconsolata',
                    'Fira Code',
                    'Fira Mono',
                    'Droid Sans Mono',
                    'Source Code Pro',
                    'Menlo',
                    'Consolas',
                    'DejaVu Sans Mono',
                    'monospace',
                ],
            },
            // Letter Spacing設定（タイポグラフィの美しさを追求）
            letterSpacing: {
                tighter: '-0.05em', // -0.8px (16px基準)
                tight: '-0.025em', // -0.4px (16px基準)
                normal: '0em', // 0px
                wide: '0.025em', // 0.4px (16px基準)
                wider: '0.05em', // 0.8px (16px基準)
                widest: '0.1em', // 1.6px (16px基準)
                // カスタム値
                xs: '0.0125em', // 0.2px (16px基準)
                sm: '0.01875em', // 0.3px (16px基準)
                md: '0.03125em', // 0.5px (16px基準)
                lg: '0.0625em', // 1px (16px基準)
                xl: '0.125em', // 2px (16px基準)
            },
            // Line Height設定（タイポグラフィの美しさを追求）
            lineHeight: {
                none: '1',
                tight: '1.25', // 1.25倍
                snug: '1.375', // 1.375倍
                normal: '1.5', // 1.5倍（デフォルト）
                relaxed: '1.625', // 1.625倍
                loose: '2', // 2倍
                // カスタム値（8pxグリッドに基づく）
                '3': '0.75rem', // 12px
                '4': '1rem', // 16px
                '5': '1.25rem', // 20px
                '6': '1.5rem', // 24px
                '7': '1.75rem', // 28px
                '8': '2rem', // 32px
                '9': '2.25rem', // 36px
                '10': '2.5rem', // 40px
                '11': '2.75rem', // 44px
                '12': '3rem', // 48px
                '14': '3.5rem', // 56px
                '16': '4rem', // 64px
                '20': '5rem', // 80px
                '24': '6rem', // 96px
                '28': '7rem', // 112px
                '32': '8rem', // 128px
                // 相対値（タイポグラフィ用）
                body: '1.6', // 本文用
                heading: '1.2', // 見出し用
                caption: '1.4', // キャプション用
            },
        },
    },
    plugins: [],
};

export default config;
