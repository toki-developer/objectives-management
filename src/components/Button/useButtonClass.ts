import { useMemo } from "react";
import type { ButtonVariant } from "src/components/Button/type";

export const useButtonClass = (
  className?: string,
  variant?: ButtonVariant,
  loading?: boolean
) => {
  const classes = useMemo(() => {
    return `cursor-pointer px-2 py-1 rounded-md font-bold transition duration-100 ease-in-out focus:outline-none
      ${
        variant === "solid-green"
          ? "bg-green-600 text-white hover:bg-green-500"
          : variant === "solid-white"
          ? "bg-white text-black hover:bg-themeGray-1"
          : ""
      }
      ${className}
      ${loading ? "bg-opacity-50 text-opacity-50 cursor-not-allowed" : null}
      `;
  }, [className, variant, loading]);

  return classes;
};
