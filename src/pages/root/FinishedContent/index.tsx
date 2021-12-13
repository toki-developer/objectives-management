import { useReactiveVar } from "@apollo/client";
import { useCallback, useState } from "react";
import { userVar } from "src/apollo/cache";
import { FinishedObjectiveList } from "src/pages/root/FinishedContent/FinishedObjectiveList";

export const FinishedContent = () => {
  const loginUser = useReactiveVar(userVar);
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleShow = useCallback(() => {
    setIsShow((isShow) => {
      return !isShow;
    });
  }, []);
  if (!loginUser) {
    return null;
  }
  return (
    <div className="mt-2 p-2 space-y-4">
      <button className="w-full flex justify-between" onClick={handleShow}>
        <span>過去の目標</span>
        <span>
          {isShow ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>
      {isShow ? <FinishedObjectiveList /> : null}
    </div>
  );
};
