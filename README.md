# ddd-example-aggregate-with-typescript
[こちらのDDDサンプルコード](https://github.com/little-hands/ddd-examples)の[集約サンプルコード](https://github.com/little-hands/ddd-examples/tree/master/src/main/java/com/littlehands/aggregate/good_example)をTypeScriptで実装しています

## プロジェクト構造
```
src/
├── domain/     # ドメイン層（集約ルート、値オブジェクト、リポジトリインターフェース）
└── usecase/    # ユースケース層（アプリケーションサービス）
```

## セットアップ
```
npm install
```

## テストの実行
```
npm test
```