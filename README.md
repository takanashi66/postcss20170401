# PostCSSデモ

## Node.jsのインストール
[Node.jsインストーラ](https://nodejs.org/ja/)

## gulpのインストール

```
npm install -g gulp
```

## プラグイン

+ gulp
+ gulp-postcss
+ postcss-cssnext
+ postcss-import
+ css-mqpacker
+ csswring


### プラグインのインストール

```
npm install
```


## cssnext

次期CSS(Selectors Level 4)の標準仕様を使えるようにするプラグインパック
[cssnext](http://cssnext.io/)
[cssnext 機能一覧](http://cssnext.io/features/)


## このデモのディレクトリマップ

```
project/
  ├ htdocs/
  │  ├ common/
  │  │  ├ postcss/
  │  │  └ css/
  │  └index.html
  │
  ├ .git/
  ├ node_modules/
  ├ gulpfile.js
  └ package.json

```


## もしプラグインが壊れていた場合

```
npm rebuild [壊れてたプラグイン名]
```
