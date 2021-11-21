import { supabase } from "src/utils/libs/initSupabase";

export const Header = () => {
  const handleSignIn = () => {
    supabase.auth.signIn({ provider: "google" });
  };
  const handleSignOut = () => {
    supabase.auth.signOut();
  };
  const user = supabase.auth.user();
  return (
    <header className="text-right">
      {user ? (
        <button onClick={handleSignOut}>ログアウト</button>
      ) : (
        <button onClick={handleSignIn}>ログイン</button>
      )}
    </header>
  );
};
