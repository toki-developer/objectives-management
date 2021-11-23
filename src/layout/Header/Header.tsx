import { useReactiveVar } from "@apollo/client";
import { userVar } from "src/apollo/cache";
import { supabase } from "src/utils/libs/initSupabase";

export const Header = () => {
  const handleSignIn = () => {
    supabase.auth.signIn({ provider: "google" });
  };
  const handleSignOut = () => {
    supabase.auth.signOut();
  };
  const loginUser = useReactiveVar(userVar);
  return (
    <header className="text-right">
      {loginUser ? (
        <button onClick={handleSignOut}>ログアウト</button>
      ) : (
        <button onClick={handleSignIn}>ログイン</button>
      )}
    </header>
  );
};
