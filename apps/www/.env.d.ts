interface ImportMetaEnv {
  readonly VITE_WWW_URL: string;
  readonly VITE_DOCS_URL: string;
  readonly VITE_DEV_URL: string;
  readonly VITE_ADMIN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly WWW_URL: string;
    readonly DOCS_URL: string;
    readonly DEV_URL: string;
    readonly ADMIN_URL: string;
    readonly BETTER_AUTH_SECRET: string;
    readonly DATABASE_URL: string;
    readonly SMTP_HOST: string;
    readonly SMTP_USER: string;
    readonly SMTP_PASS: string;
    readonly MNEMONIC: string;
  }
}
