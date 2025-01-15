import * as React from "react";

const Button = React.forwardRef(({ 
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-violet-600 text-white hover:bg-violet-700",
    outline: "border border-violet-600 text-violet-600 hover:bg-violet-50",
    ghost: "hover:bg-violet-50 text-violet-600",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-8 text-lg",
    icon: "h-10 w-10",
  };

  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  return (
    <button
      type={type}
      className={classes}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };