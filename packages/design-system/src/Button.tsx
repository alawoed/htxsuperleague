import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "outline-inverse" | "ghost-inverse";
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export function Button({
  children,
  className = "",
  href,
  variant = "primary",
  size = "medium",
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = `htx-button htx-button--${variant} htx-button--${size} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      {...props}
    >
      {children}
    </button>
  );
}

