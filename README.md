# DR Hair Transplante Capilar

[日本語のドキュメントへ](#dr-hair-ヘアトランスプラント)

DR Hair Transplante Capilar is a cutting-edge website dedicated to hair transplant procedures and hair loss treatments. Our specialists offer advanced FUE hair transplants along with treatments such as PRP, low-level laser therapy, photobiomodulation, and MMP. The site features a modern, responsive interface with internationalization support to cater to a diverse audience.

![DR Hair Preview](https://imgix.cosmicjs.com/302068e0-f4d0-11ef-b3e3-d17f92c625e7-readme-pic.png)

> **Notice**: This project is licensed under the MIT License. Unauthorized use or duplication of this code is prohibited.

## Getting Started

Clone the repository and run the following commands:

```bash
git clone https://github.com/yourusername/drhairtransplantecapilar.git
npm install
npm run dev
```

## Table of Contents

1. [Technologies](#technologies)
2. [Project Structure](#project-structure)
3. [Internationalization](#internationalization)
4. [Deployment](#deployment)
5. [License](#license)

## Technologies

### Core
- **[Next.js](https://nextjs.org)**: React framework for server-side rendered applications
- **[React](https://reactjs.org)**: JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com)**: Utility-first CSS framework for rapid UI development
- **[Next-intl](https://next-intl-docs.vercel.app/)**: Library for internationalization support

### UI and Animations
- **[Framer Motion](https://www.framer.com/motion/)**: Library for smooth animations and transitions
- **[Embla Carousel](https://www.embla-carousel.com)**: Interactive, responsive carousels with autoplay support

### Component Libraries
- **[@radix-ui/react-slot](https://www.radix-ui.com)**: For managing component slots
- **[@tabler/icons-react](https://tabler-icons.io/)**: Icon library for React

### Utilities
- **[class-variance-authority](https://cva.style/docs)**: Conditional class handling
- **[clsx](https://github.com/lukeed/clsx)**: Utility for conditionally concatenating CSS classes
- **[lucide-react](https://lucide.dev/)** and **[react-icons](https://react-icons.github.io/react-icons/)**: Scalable icon libraries

## Project Structure

```bash
project-root/
├── messages/         # Localization files
├── public/           # Static assets
└── src/
    ├── app/
    │   ├── [locale]/ # Locale-specific routes
    │   ├── pages/    # Application pages
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    ├── components/
    │   ├── ui/       # Reusable UI components
    │   └── view/     # Page-specific components
    ├── i18n/         # Internationalization configuration
    ├── lib/          # Utility functions
    └── middleware.ts # Request handlers and locale config
```

## Internationalization

The project uses **Next-intl** to provide a multilingual experience. Translation files are stored in the `messages` directory, with locale configuration managed through `middleware.ts` and the `[locale]` dynamic route structure. This allows content to be served in multiple languages, enhancing the user experience for our international audience.

## Deployment

The project is deployed and accessible at:

[drhairtransplantecapilar.com.br](https://drhairtransplantecapilar.com.br)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

# DR Hair ヘアトランスプラント

[English Documentation](#dr-hair-transplante-capilar)

**DR Hair ヘアトランスプラント**は、最先端のヘアトランスプラント施術と脱毛治療に特化したウェブサイトです。当院の専門家は、FUE技術を用いた高度な植毛手術に加え、PRP、低出力レーザー治療、フォトビオモジュレーション、MMPなどの治療法を提供しています。サイトは多様なユーザーに対応するため、モダンでレスポンシブなインターフェースと国際化サポートを備えています。

> **注意**: このプロジェクトはMITライセンスの下で提供されています。無断での使用や複製は禁止されています。

## 始め方

リポジトリをクローンし、以下のコマンドを実行してください：

```bash
git clone https://github.com/yourusername/drhairtransplantecapilar.git
npm install
npm run dev
```

## 目次

1. [使用技術](#使用技術)
2. [プロジェクト構造](#プロジェクト構造)
3. [国際化](#国際化)
4. [デプロイメント](#デプロイメント)
5. [ライセンス](#ライセンス)

## 使用技術

### コア
- **[Next.js](https://nextjs.org)**: サーバーサイドレンダリングをサポートするReactフレームワーク
- **[React](https://reactjs.org)**: ユーザーインターフェース構築のためのJavaScriptライブラリ
- **[Tailwind CSS](https://tailwindcss.com)**: 高速なUI開発のためのユーティリティファーストCSSフレームワーク
- **[Next-intl](https://next-intl-docs.vercel.app/)**: 国際化サポートのためのライブラリ

### UIとアニメーション
- **[Framer Motion](https://www.framer.com/motion/)**: スムーズなアニメーションと遷移のためのライブラリ
- **[Embla Carousel](https://www.embla-carousel.com)**: 自動再生機能を備えたインタラクティブなカルーセル

### コンポーネントライブラリ
- **[@radix-ui/react-slot](https://www.radix-ui.com)**: コンポーネントスロット管理
- **[@tabler/icons-react](https://tabler-icons.io/)**: React用アイコンライブラリ

### ユーティリティ
- **[class-variance-authority](https://cva.style/docs)**: 条件付きクラス管理
- **[clsx](https://github.com/lukeed/clsx)**: CSSクラスを条件付きで連結するユーティリティ
- **[lucide-react](https://lucide.dev/)** と **[react-icons](https://react-icons.github.io/react-icons/)**: スケーラブルなアイコンライブラリ

## プロジェクト構造

```bash
project-root/
├── messages/         # 翻訳ファイル
├── public/           # 静的アセット
└── src/
    ├── app/
    │   ├── [locale]/ # ロケール別ルート
    │   ├── pages/    # アプリケーションページ
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    ├── components/
    │   ├── ui/       # 再利用可能なUIコンポーネント
    │   └── view/     # ページ固有のコンポーネント
    ├── i18n/         # 国際化設定
    ├── lib/          # ユーティリティ関数
    └── middleware.ts # リクエストハンドラとロケール設定
```

## 国際化

このプロジェクトでは**Next-intl**を使用して多言語体験を提供しています。翻訳ファイルは`messages`ディレクトリに保存され、ロケール設定は`middleware.ts`と`[locale]`動的ルート構造を通じて管理されています。これにより、コンテンツは複数の言語で提供され、国際的なユーザーのエクスペリエンスを向上させます。

## デプロイメント

プロジェクトは以下のURLでデプロイされ、アクセス可能です：

[drhairtransplantecapilar.com.br](https://drhairtransplantecapilar.com.br)

## ライセンス

このプロジェクトは**MITライセンス**の下で提供されています。詳細については[LICENSE](LICENSE)ファイルを参照してください。