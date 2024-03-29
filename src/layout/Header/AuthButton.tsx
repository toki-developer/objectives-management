import { useReactiveVar } from "@apollo/client";
import { userVar } from "src/apollo/cache";
import { Button } from "src/components/Button";
import { useAuth } from "src/utils/hooks/useAuth";

const LoginIcon = () => {
  return (
    <svg
      className="w-6 h-6 inline-block"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5236 12.2755C23.5236 11.4598 23.4574 10.6397 23.3163 9.83716H11.9976V14.4581H18.4793C18.2103 15.9485 17.3461 17.2669 16.0806 18.1047V21.103H19.9476C22.2184 19.013 23.5236 15.9264 23.5236 12.2755Z"
        fill="#4285F4"
      />
      <path
        d="M11.9979 24C15.2344 24 17.9637 22.9373 19.9524 21.103L16.0854 18.1047C15.0095 18.8366 13.6206 19.2511 12.0023 19.2511C8.8717 19.2511 6.21728 17.139 5.26486 14.2994H1.27441V17.3904C3.31153 21.4426 7.46071 24 11.9979 24Z"
        fill="#34A853"
      />
      <path
        d="M5.2601 14.2995C4.75744 12.8091 4.75744 11.1953 5.2601 9.70496V6.61401H1.27406C-0.427942 10.0048 -0.427942 13.9996 1.27406 17.3904L5.2601 14.2995Z"
        fill="#FBBC04"
      />
      <path
        d="M11.9979 4.74881C13.7087 4.72235 15.3622 5.36611 16.6013 6.54781L20.0273 3.12176C17.8579 1.08465 14.9786 -0.0353205 11.9979 -4.58263e-05C7.46071 -4.58263e-05 3.31153 2.55737 1.27441 6.61395L5.26045 9.7049C6.20846 6.86088 8.86729 4.74881 11.9979 4.74881Z"
        fill="#EA4335"
      />
    </svg>
  );
};

const LogoutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
};

export const AuthButton = () => {
  const { handleSignOut, handleSignIn } = useAuth();
  const loginUser = useReactiveVar(userVar);
  return loginUser ? (
    <button onClick={handleSignOut} className="space-x-1 py-1 px-2">
      <LogoutIcon />
      <span className="align-middle">ログアウト</span>
    </button>
  ) : (
    <Button
      onClick={handleSignIn}
      className="space-x-1 flex"
      variant="solid-white"
    >
      <LoginIcon />
      <span className="align-middle">ログイン</span>
    </Button>
  );
};
