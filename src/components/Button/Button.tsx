import type React from "react";

interface ButtonProps {
    variant: "primary" | "secondary" | "ghost" | "destructive" | "alpha-dark" | "alpha-light";
    size: "m" | "s" | "xs";
    disabled: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    badge?: number;
    iconOnly: boolean;
    onClick: () => void;
    children?: React.ReactNode;
}

export default function Button ({
    variant = "primary",
    size = "m",
    disabled = false,
    leftIcon,
    rightIcon,
    badge,
    iconOnly = false,
    onClick,
    children,
}: ButtonProps) {

    const buttonClass = [
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        iconOnly? "btn--icon-only" : ""
    ].filter(Boolean).join(" ")

    return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon && <span className="btn_icon">{leftIcon}</span>}
      {!iconOnly && children}
      {rightIcon && <span className="btn_icon">{rightIcon}</span>}
      {badge !== undefined && <span className="btn_badge">{badge}</span>}
    </button>
    )
}