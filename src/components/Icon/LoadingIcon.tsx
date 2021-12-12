type Props = {
  center?: boolean;
};

export const LoadingIcon = ({ center }: Props) => {
  return (
    <div className={` ${center ? "w-full flex justify-center" : ""} `}>
      <svg
        className="mr-3 -ml-1 w-10 h-10 text-green-500 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export const CenterFiexdLoadingIcon = () => {
  return (
    <div className="fixed left-0 top-0 items-center h-screen">
      <LoadingIcon center />
    </div>
  );
};
