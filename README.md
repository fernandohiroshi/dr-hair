# DR Hair Transplante Capilar

[日本語のドキュメントへ](#dr-hair-ヘアトランスプラント)

DR Hair Transplante Capilar is a cutting-edge website dedicated to hair transplant procedures and hair loss treatments. Our specialists offer advanced FUE hair transplants along with treatments such as PRP, low-level laser therapy, photobiomodulation, and MMP. The site is designed with a modern, responsive interface and internationalization support to cater to a diverse audience.

![DR Hair Preview](https://imgix.cosmicjs.com/302068e0-f4d0-11ef-b3e3-d17f92c625e7-readme-pic.png)

> **Notice**: This project is licensed under the MIT License. Unauthorized use or duplication of this code is prohibited.

To get started, clone the repository and run the following commands:

```bash
git clone https://github.com/yourusername/drhairtransplantecapilar.git
npm install
npm run dev
```

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Internationalization](#internationalization)
4. [Demo Components](#demo-components)
5. [Deployment](#deployment)
6. [License](#license)

## Technologies Used

The project is built with modern web technologies and libraries to ensure high performance and scalability.

### Front-end

- **Next.js**: React framework for building server-side rendered applications.
- **Next-intl**: Library for internationalization support.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework (with plugins like tailwind-merge and tailwindcss-animate) for rapid UI development.
- **Framer Motion**: For smooth animations and transitions.

### Additional Dependencies

- **@radix-ui/react-slot**: For managing component slots.
- **@tabler/icons-react**: Icon library for React.
- **class-variance-authority**: For conditional class handling.
- **clsx**: Utility for conditionally concatenating CSS classes.
- **embla-carousel, embla-carousel-autoplay, embla-carousel-react**: For creating interactive, responsive carousels.
- **lucide-react** and **react-icons**: For scalable and customizable icons.

## Project Structure

```bash
messages
public
src
├── app
│   ├── [locale]
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── pages/...
├── components
│   ├── ui
│   └── view
├── i18n
├── lib
└── middleware.ts
```

## Project Structure Details

- **messages**: Contains localization files for internationalization.
- **public**: Static assets and media files.
- **src/app**: Main application files including routing, layout, and global styles.
- **components**: Reusable UI and view components.
- **i18n**: Configuration and routing for internationalization.
- **lib**: Utility functions and helper libraries.
- **middleware.ts**: Middleware for handling requests and locale configuration.

## Internationalization

The project uses **Next-intl** for managing translations and locale settings. The localization files are stored in the `messages` folder, and the locale configuration is handled in the `middleware.ts` and `[locale]` directory within `src/app`. This ensures that the website can serve content in multiple languages, providing a better user experience for an international audience.

These components serve as examples of how the project leverages **Next.js**, **Tailwind CSS**, and various UI libraries to create a dynamic and engaging user interface.

## Deployment

The project is deployed live and can be accessed at:

[DR Hair Transplante Capilar](https://drhairtransplantecapilar.com.br)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

# DR Hair ヘアトランスプラント

**DR Hair ヘアトランスプラント**は、FUE技術を使用した高度なヘアトランスプラントや、PRP、低出力レーザー治療、フォトビオモジュレーション、MMPなどの脱毛治療を提供する最新のウェブサイトです。サイトはモダンでレスポンシブなインターフェースを持ち、ユーザーに優れた体験を提供します。また、国際化にも対応しており、さまざまな言語でアクセス可能です。

このプロジェクトは、パフォーマンスとスケーラビリティを確保するために、最新のWeb技術を使用して構築されています。主な技術は以下の通りです：

- **Next.js**: サーバーサイドレンダリング（SSR）をサポートするReactフレームワーク。
- **React**: インタラクティブなユーザーインターフェースを構築するためのJavaScriptライブラリ。
- **Tailwind CSS**: 高速なUI開発をサポートするユーティリティファーストのCSSフレームワーク（`tailwind-merge`や`tailwindcss-animate`などのプラグインを使用）。
- **Next-intl**: 翻訳とロケール設定を管理するための国際化サポートライブラリ。
- **Framer Motion**: スムーズなアニメーションと遷移を実現するライブラリ。

また、次のような追加の依存関係も使用しています：

- **@radix-ui/react-slot**: コンポーネントスロットを管理するためのライブラリ。
- **@tabler/icons-react**: React用のアイコンライブラリ。
- **class-variance-authority**: 条件付きでCSSクラスを管理するためのライブラリ。
- **clsx**: CSSクラスを条件付きで連結するユーティリティ。
- **embla-carousel, embla-carousel-autoplay, embla-carousel-react**: インタラクティブでレスポンシブなカルーセルを作成するためのライブラリ。
- **lucide-react, react-icons**: スケーラブルでカスタマイズ可能なアイコンライブラリ。

## プロジェクト構造

- **messages**: 翻訳とロケール設定のためのファイルが格納されています。
- **public**: 静的なアセットやメディアファイルが含まれています。
- **src/app**: アプリケーションの主要ファイル、ルーティング、レイアウト、グローバルスタイルが含まれています。
- **components**: 再利用可能なUIコンポーネントとビューコンポーネント。
- **i18n**: 国際化設定とルーティング。
- **lib**: ユーティリティ関数と補助ライブラリ。
- **middleware.ts**: リクエストの処理とロケール設定を管理するミドルウェア。

## 国際化

このプロジェクトでは、**Next-intl**を使用して翻訳とロケール設定を管理しています。翻訳ファイルは`messages`フォルダに保存されており、ロケール設定は`middleware.ts`と`[locale]`ディレクトリ内で管理されています。このアプローチにより、サイトは複数の言語に対応でき、国際的なユーザーにも優れた体験を提供します。

## ライセンス

このプロジェクトは**MITライセンス**のもとで提供されています。詳細については、[LICENSE](LICENSE)ファイルを参照してください。

## デプロイメント

プロジェクトはライブでデプロイされており、以下のリンクからアクセスできます：

[DR Hair Transplante Capilar](https://drhairtransplantecapilar.com.br)
