import { useReactiveVar } from "@apollo/client";
import { userVar } from "src/apollo/cache";
import { useAuth } from "src/utils/hooks/useAuth";

export const Header = () => {
  const { handleSignOut, handleSignIn } = useAuth();
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
