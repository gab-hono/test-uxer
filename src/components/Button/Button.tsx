import type React from "react";
import "./Button.css"

interface ButtonProps {
    variant?: "primary" | "secondary" | "ghost" | "destructive" | "alpha-dark" | "alpha-light";
    size?: "m" | "s" | "xs";
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    badge?: number;
    iconOnly?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Button({
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
        iconOnly ? "btn--icon-only" : "btn",
        iconOnly ? `btn--icon-only-${variant}` : `btn--${variant}`,
        !iconOnly && `btn--${size}`,
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