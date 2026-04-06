import type React from "react";

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