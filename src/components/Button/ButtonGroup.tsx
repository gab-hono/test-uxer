import type React from "react";
import './ButtonGroup.css'
import './Button.css'

interface ButtonGroupProps {
    variant: "primary" | "secondary" | "destructive";
    size: "m" | "s" | "xs";
    addonIcon: React.ReactNode;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    badge?: number;
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function ButtonGroup({
    variant = "primary",
    size = "m",
    addonIcon,
    disabled = false,
    leadingIcon,
    trailingIcon,
    badge,
    onClick,
    children,
}: ButtonGroupProps) {
    return (
        <div className= {`
            btn-group
            btn-group--${variant}
            ${disabled ? "btn-group--disabled" : ""}`}>
                <button
                    className={`
                        btn
                        btn--${variant}
                        btn--${size}
                        `}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {leadingIcon && <span className="leading-icon">{leadingIcon}</span>}
                    {children}
                    {trailingIcon && <span className="trailing-icon">{trailingIcon}</span>}
                    {badge !== undefined && <span className="badge">{badge}</span>}
                </button>
                <button
                    className="btn-group__addon"
                    disabled={disabled}
                >
                    {addonIcon}
                </button>
        </div>
    )
}