# 利用方法

**Volta**を使用してNode.jsとnpmのバージョンを固定している．
Voltaがインストール済みであることが前提．

## 初期セットアップ

### Node.js/npmのバージョンを同期

```bash
volta install node
volta install npm
```

### 依存関係のインストール

``` bash
npm ci
```

## ビルド方法

### 開発ビルド（Windows）

``` bash
npm run start
```

### 本番ビルド

成果物はbuild/ディレクトリに出力

``` bash
npm run build
```
