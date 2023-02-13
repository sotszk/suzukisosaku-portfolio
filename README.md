# SUZUKI SOSAKU (仮) ポートフォリオ

フリーランスとして活動を始めるにあたり、ポートフォリオサイトを実装しています。  
基本的に、自分のウェブサイトやサービスなどを実装する際は、ソースコードは GitHub 上でオープンにしようと思います。どういったコードを書くのか外部から評価できるようにしたいためです。

## Getting Started

このサイトは [Astro](https://astro.build) という MPA フレームワークを使っています。MPA とはマルチページアプリケーションのことです。要するに普通のページ遷移したら HTML を
ロードし直すウェブサイトですね。

MPA と SPA の違いについては [Astro のドキュメント](https://docs.astro.build/ja/concepts/mpa-vs-spa/)に詳しく書いてあります。

### Node.js のバージョンをあわせる

`.node-version` にて Node.js のバージョンを固定しております。

[Nodenv](https://github.com/nodenv/nodenv) などの Node のバージョンマネージャーを使っている場合は、そちらで同バージョンをインストールしてください。使っていない場合は直接 Node.js の同バージョンを PC にインストールしてください。

### パッケージのインストール

```
$ yarn install
```

yarn が入っていない場合は、先に `npm i -g yarn` を行います。

### 開発の開始

```
$ yarn dev
```

ビルドなどは [Astro のドキュメント](https://docs.astro.build/en/getting-started/)を参照。

### 型チェック

```
$ yarn typecheck
```

### コードフォーマット

```
$ yarn prettify
```

## 使用技術/ライブラリ

外部ライブラリは使っていませんでした…。

- JS
  - なし
- CSS
  - PostCSS
  - SCSS
- HTML

## 実装のポイント

### グラデーション

Remix だったり Nuxt.js などのいまどきのフレームワークのドキュメントで、さりげないグラデーション（テキストまわりやボタンなどで）が多用されているが気になっていたので、自分でも使ってみました。

ポイントで使うだけで結構今っぽさが出るものですね。

### CSS Variables

今さら感あるのかもしれませんが、CSS Variables を活用してみました（ずっと SASS 変数使ってたんです…ゆるちて…）。

Media Queries と併用するには [postcss-custom-media](https://github.com/csstools/postcss-custom-media) という PostCSS プラグインを使う必要があるようでした。

### 日本語の Web フォント

Adobe フォントや Google フォントであっても、フルセットだと 1.6MB とかいっちゃうのでさすがに無理があった（表示までが遅すぎる）。

サブセット（第一水準、常用漢字くらいまで）をセルフホストする形であれば preload をしておけばほぼガクッとなることなく表示できるので、十分実用可能と思われる。

## 蛇足

ちなみに、SUZUKI SOSAKU というのは、フリーランスの屋号にしようと思っている（た）名称です。

・・・たぶん変わります。
