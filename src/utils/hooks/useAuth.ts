import { supabase } from "src/utils/libs/initSupabase";

export const useAuth = () => {
  const handleSignIn = () => {
    supabase.auth.signIn({ provider: "google" });
  };
  const handleSignOut = () => {
    supabase.auth.signOut();
  };
  return { handleSignIn, handleSignOut };
};
