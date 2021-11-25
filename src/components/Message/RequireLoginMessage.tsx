import { useAuth } from "src/utils/hooks/useAuth";

export const RequireLoginMessage = () => {
  const { handleSignIn } = useAuth();
  return (
    <div className="text-center space-y-2">
      <p>利用するにはログインが必要です</p>
      <p>
        Googleで
        <button onClick={handleSignIn} className="border-b border-current hover:text-green-400">
          ログイン
        </button>
        する
      </p>
    </div>
  );
};
