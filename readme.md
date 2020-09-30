# node game practice

Phaserでお試しで作ったブロック崩し

https://irokaru.github.io/node-game-practice/

## 環境

- node 14.12.0
- npm 6.14.8
- yarn 1.22.5

## はじめに

とりあえずパッケージインストール

```bash
# node でやる場合
yarn

# docker-compose でやる場合
docker-compose build
```

## 開発を始める

```bash
# node でやる場合
yarn dev

# docker-compose でやる場合
docker-compose up -d
```

## Githubにデプロイする

```bash
# node でやる場合
yarn deploy

# docker-compose でやる場合
docker-compose exec app bash
cd app
yarn deploy
```
