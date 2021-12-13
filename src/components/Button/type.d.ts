import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "solid-green" | "solid-white" | "outline";

type ButtonType = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: ButtonVariant;
    loading?: boolean;
  }
>;
