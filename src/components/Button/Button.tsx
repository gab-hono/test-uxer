import type { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost" | "destructive";
  size: "m" | "s" | "xs";
  disabled: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  badge?: number;
  iconOnly: boolean;
  onClick?: () => void;
  children?: ReactNode;
}
