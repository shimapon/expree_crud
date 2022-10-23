# expree_crud

シンプルな CRUD アプリ

# Installation

## yarn

初期インストール

```bash
yarn
```

## MySQL

MySQL で ddl を読み込む

bash

```bash
mysql -u root -p
# パスワードを入力
```

MySQL

```sql
root@localhost> source /PATH/TO/express_api/movies-ddl.sql
```

## 環境変数の読み込み

`.env`を作成

```
# express
PORT=3001

# DB
DB_HOST="localhost"
DB_PORT="3306"
DB_USER="app-user"
DB_PASSWORD="PaAsW0rD"
DB_DATABASE="MOVIE
```

読み込み

```bash
export $(cat .env | grep -v ^# | xargs)
```

# Usage

## 実行

```
yarn start
```

```json例
[
  {
    "ID": 1,
    "NAME": "天気の子",
    "CREATED_AT": "2021-06-03T23:39:19.024Z",
    "UPDATED_AT": "2021-06-03T23:39:19.024Z"
  },
  {
    "ID": 2,
    "NAME": "サマーウォーズ",
    "CREATED_AT": "2021-06-03T23:39:19.026Z",
    "UPDATED_AT": "2021-06-03T23:39:19.026Z"
  },
  {
    "ID": 3,
    "NAME": "ジョゼと虎と魚たち",
    "CREATED_AT": "2021-06-03T23:39:19.026Z",
    "UPDATED_AT": "2021-06-03T23:39:19.026Z"
  }
]
```
