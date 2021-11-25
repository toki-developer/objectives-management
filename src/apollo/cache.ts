import type { ReactiveVar } from "@apollo/client";
import { makeVar } from "@apollo/client";
import { supabase } from "src/utils/libs/initSupabase";

export const userVar: ReactiveVar<string | undefined> = makeVar(
  supabase.auth.session()?.access_token
);
