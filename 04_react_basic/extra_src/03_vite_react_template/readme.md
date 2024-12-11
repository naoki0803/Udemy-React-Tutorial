# プロジェクトの作成方法

[Vite](https://ja.vitejs.dev/) というモジュールバンドラーを使ったプロジェクトの作成

[vitejs-plugin-react](https://ja.vitejs.dev/plugins/#vitejs-plugin-react):esbuild と Babel を使用した従来の Vite + React の組み合わせ
[vitejs-plugin-react-swc](https://ja.vitejs.dev/plugins/#vitejs-plugin-react-swc)Babel の代わりに Verce 社が開発した swc を使用した次世代の Vite + React の組み合わせ

```bash
npm create vite@latest my-react-app -- --template react
npm create vite@latest my-react-app -- --template react-swc
```
