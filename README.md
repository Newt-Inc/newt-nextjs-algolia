## 概要

[AlgoliaとNext.jsを利用して、高度な全文検索を実現する](https://www.newt.so/docs/tutorials/search-by-algolia) のチュートリアルで作成したコードを公開しています。
Static Site Generatorsの検索ページです。

Newt・Algolia・Next.jsを利用して、高度な全文検索機能を実現したい方は、ぜひご確認ください。

- デモ画面は [こちら](https://newt-nextjs-algolia.vercel.app/)
- チュートリアルのページは [こちら](https://www.newt.so/docs/tutorials/search-by-algolia)

## Newtスペースの設定

ジェネレーターのモデルを作成しています。

### ジェネレーター（`uid: generator`）モデル

| フィールド名 | フィールドID | フィールドタイプ | オプション |
| --- | --- | --- | --- |
| タイトル | title | テキスト | 必須フィールド, このフィールドをタイトルに使う |
| ロゴ | logo | 画像 | 必須フィールド |
| 説明 | description | マークダウン | 必須フィールド |
| URL | url | テキスト | 必須フィールド |
| タグ | tags | 選択（子要素: テキスト） | 必須フィールド, 複数値 |
| スター | star | 数字 | 必須フィールド |

## License

[MIT License](https://github.com/Newt-Inc/newt-nextjs-algolia/blob/main/LICENSE)
