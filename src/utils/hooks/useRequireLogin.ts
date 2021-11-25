import { useReactiveVar } from "@apollo/client";
import toast from "react-hot-toast";
import { userVar } from "src/apollo/cache";

export const useRequireLogin = () => {
  const loginUser = useReactiveVar(userVar);
  const requireLogin = () => {
    if (!loginUser) {
      toast.error("ログインが必要です");
    }
    return !loginUser;
  };
  return requireLogin;
};
