# Maconari inside app
株式会社div代表まこさんが運営されている、サイトのシンプルなサイトに惹かれNode.jsで作成しました。
<img width="800" alt="スクリーンショット 2021-04-13 20 48 57" src="https://user-images.githubusercontent.com/69971834/114549512-0fde7300-9c9c-11eb-8be4-70e9db82e5c5.png">

# 概要

マコなり社長が運営している[Inside Stories](https://is.makonari.com/)のクローンサイトです。  
デザインとコンテンツは真似ず、中身のシステムだけ再現しました。

# 開発環境

- [Next.js](https://nextjs.org/)
- [PostCSS](https://postcss.org/)
- [Firebase](https://firebase.google.com/?hl=ja)
- [Netlify](https://www.netlify.com/)

# Version

- MacOS version 10.15.3
- Node.js version 14.7.0
- Next.js version 9.5.5
- Firebase version 7.0.0

# Firebaseの設定

ルートディレクトリに `.env` ファイルを作り、設定を以下のように変更してください。

```
FIREBASE_API_KEY=xxxxxx
FIREBASE_AUTH_DOMAIN=xxxxxx
FIREBASE_DATABASE_URL=xxxxxx
FIREBASE_PROJECT_ID=xxxxxx
FIREBASE_STORAGE_BUCKET=xxxxxx
FIREBASE_MESSEGING_SENDER_ID=xxxxxx
FIREBASE_APP_ID=xxxxxx
FIREBASE_MEASUREMENT_ID=xxxxxx
```

## 設定の確認方法

1. [Firebaseのコンソール](https://console.firebase.google.com/u/0/?hl=ja)にアクセスし、プロジェクトを作成します。
2. 「アプリを追加」>「ウェブ」を選択して、設定を完了させる。
3. 左上の歯車アイコンをクリックし「プロジェクトを設定」をクリック。
4. 表示されたページの「Firebase SDK snippet」を「構成」に変更する。

## Netlifyの設定方法

1. 「Site settings」>「Build & Deploy」
2. 「Environment」に、Firebaseの設定を書き込み保存する。

# 起動方法

`yarn install`でパッケージをインストールし、`yarn dev`で起動します。
