import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
  size = "md",
}) => {
  const baseClasses = "rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses: Record<string, string> = {
    primary: "bg-teal-950 text-white hover:bg-teal-800",
    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-50",
    outline: "border border-gray-300 text-black hover:bg-gray-50",
  };

  const sizeClasses: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabledClass}`}
    >
      {children}
    </button>
  );
};
