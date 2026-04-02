import type React from "react";

interface ButtonProps {
    variant: "primary" | "secondary" | "ghost" | "destructive" | "alpha-dark" | "alpha-light";
    size: "m" | "s" | "xs";
    disabled: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    badge?: number;
    iconOnly: boolean;
    onClick: () => void;
    children?: React.ReactNode;
}

export default function Button ({
    variant = "primary",
    size = "m",
    disabled = false,
    leadingIcon,
    trailingIcon,
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
      {leadingIcon && <span className="leading-icon">{leadingIcon}</span>}
      {!iconOnly && children}
      {trailingIcon && <span className="trailing-icon">{trailingIcon}</span>}
      {badge !== undefined && <span className="badge">{badge}</span>}
    </button>
    )
}