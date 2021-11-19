declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_SUPABASE_URL: string;
    readonly NEXT_PUBLIC_SUPABASE_PUBLIC_API_KEY: string;
    readonly NEXT_PUBLIC_GRAPHQL_API_URL: string;
  }
}
