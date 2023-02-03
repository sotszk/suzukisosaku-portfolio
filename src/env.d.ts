/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_BASE_URL: string;
  // 環境変数が増えたら追加する
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
