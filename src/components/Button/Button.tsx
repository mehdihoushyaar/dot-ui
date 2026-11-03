import React, { forwardRef } from 'react';

export type ButtonType = 'primary' | 'brand' | 'error' | 'neutral' | 'secondary';
export type ButtonStyle = 'fill' | 'border' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type ButtonState = 'default' | 'hover' | 'clicked' | 'focus' | 'disabled';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'type'> {
  /** The color theme/type: 'primary' | 'brand' | 'error' | 'neutral' */
  buttonType?: ButtonType;
  /** Alias for buttonType (also supports native button types if specified) */
  type?: ButtonType | 'button' | 'submit' | 'reset';
  /** The visual style: 'fill' (solid) | 'border' (outline) | 'link' (ghost/text) */
  buttonStyle?: ButtonStyle;
  /** Alias for buttonStyle */
  variant?: ButtonStyle;
  /** Button sizing: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' */
  size?: ButtonSize;
  /** Leading icon or solitary icon */
  icon?: React.ReactNode;
  /** Trailing icon (displayed after text) */
  trailingIcon?: React.ReactNode;
  /** Icon position relative to children */
  iconPosition?: 'left' | 'right';
  /** Renders the button as a square icon-only button */
  onlyIcon?: boolean;
  /** Explicit state override for visual testing: 'default' | 'hover' | 'clicked' | 'focus' | 'disabled' */
  state?: ButtonState;
  /** Native HTML button type attribute ('button' | 'submit' | 'reset') */
  htmlType?: 'button' | 'submit' | 'reset';
  /** Inline styles */
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  buttonType,
  type,
  buttonStyle,
  variant,
  size = 'md',
  icon,
  trailingIcon,
  iconPosition = 'left',
  onlyIcon,
  state,
  htmlType,
  children,
  className = '',
  disabled: propDisabled,
  ...rest
}, ref) => {
  // Resolve buttonType: prioritize buttonType prop, then type if it matches our ButtonType
  let resolvedType: ButtonType = 'primary';
  if (buttonType) {
    resolvedType = buttonType;
  } else if (type && ['primary', 'brand', 'error', 'neutral', 'secondary'].includes(type)) {
    resolvedType = type as ButtonType;
  }
  // Map secondary to neutral
  const normalizedType: 'primary' | 'brand' | 'error' | 'neutral' =
    resolvedType === 'secondary' ? 'neutral' : resolvedType;

  // Resolve buttonStyle: prioritize buttonStyle, then variant
  const resolvedStyle: ButtonStyle = buttonStyle || variant || 'fill';

  // Determine native HTML type attribute
  const resolvedHtmlType: 'button' | 'submit' | 'reset' =
    htmlType || (type && ['button', 'submit', 'reset'].includes(type) ? (type as 'button' | 'submit' | 'reset') : 'button');

  // Determine disabled state
  const isDisabled = propDisabled || state === 'disabled';

  // Determine if icon-only button
  const isIconOnly = onlyIcon || (icon && !children && !trailingIcon);

  // Base shared styles
  const baseClasses =
    "inline-flex items-center justify-center font-medium font-inherit transition-all duration-150 select-none cursor-pointer outline-none focus-visible:ring-offset-2";

  // Size mappings (token-based typography, radiuses, padding, and min sizes)
  const sizeClasses: Record<ButtonSize, { standard: string; iconOnly: string; iconSize: string }> = {
    sm: {
      standard: "px-3 py-1.5 text-btn-sm rounded-sm gap-1.5 min-h-[32px]",
      iconOnly: "p-1.5 text-btn-sm rounded-sm h-8 w-8 min-w-[32px]",
      iconSize: "[&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:shrink-0",
    },
    md: {
      standard: "px-4 py-2 text-btn-md rounded-md gap-2 min-h-[40px]",
      iconOnly: "p-2 text-btn-md rounded-md h-10 w-10 min-w-[40px]",
      iconSize: "[&>svg]:w-4 [&>svg]:h-4 [&>svg]:shrink-0",
    },
    lg: {
      standard: "px-5 py-2.5 text-btn-lg rounded-lg gap-2 min-h-[48px]",
      iconOnly: "p-2.5 text-btn-lg rounded-lg h-12 w-12 min-w-[48px]",
      iconSize: "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:shrink-0",
    },
    xl: {
      standard: "px-6 py-3.5 text-btn-xl rounded-xl gap-2.5 min-h-[56px]",
      iconOnly: "p-3.5 text-btn-xl rounded-xl h-14 w-14 min-w-[56px]",
      iconSize: "[&>svg]:w-6 [&>svg]:h-6 [&>svg]:shrink-0",
    },
    xxl: {
      standard: "px-8 py-4 text-btn-xxl rounded-xxl gap-3 min-h-[64px]",
      iconOnly: "p-4 text-btn-xxl rounded-xxl h-16 w-16 min-w-[64px]",
      iconSize: "[&>svg]:w-7 [&>svg]:h-7 [&>svg]:shrink-0",
    },
  };

  // Type + Style interactive mappings (default, hover, clicked/active, focus, disabled)
  const styleMatrix: Record<'primary' | 'brand' | 'error' | 'neutral', Record<ButtonStyle, {
    base: string;
    states: {
      default?: string;
      hover?: string;
      clicked?: string;
      focus?: string;
      disabled?: string;
    };
  }>> = {
    primary: {
      fill: {
        base: "bg-primary-main text-white shadow-xs hover:bg-primary-hover active:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary-main disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "bg-primary-hover text-white",
          clicked: "bg-primary-dark text-white scale-[0.98]",
          focus: "ring-2 ring-primary-main ring-offset-2",
          disabled: "bg-neutral-200 text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      border: {
        base: "border border-primary-main text-primary-main bg-transparent shadow-xs hover:bg-primary-light active:bg-neutral-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary-main disabled:border-neutral-300 disabled:text-neutral-400 disabled:bg-transparent disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "bg-primary-light text-primary-main",
          clicked: "bg-neutral-200 text-primary-main scale-[0.98]",
          focus: "ring-2 ring-primary-main ring-offset-2",
          disabled: "border-neutral-300 text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none bg-transparent",
        },
      },
      link: {
        base: "border border-transparent text-primary-main bg-transparent hover:underline hover:bg-primary-light/50 active:opacity-75 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary-main disabled:text-neutral-400 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "underline bg-primary-light/50 text-primary-main",
          clicked: "opacity-75 text-primary-main scale-[0.98]",
          focus: "ring-2 ring-primary-main ring-offset-2",
          disabled: "text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none no-underline bg-transparent",
        },
      },
    },
    brand: {
      fill: {
        base: "bg-brand-main text-white shadow-xs hover:bg-brand-dark active:bg-brand-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-main disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "bg-brand-dark text-white",
          clicked: "bg-brand-dark text-white scale-[0.98]",
          focus: "ring-2 ring-brand-main ring-offset-2",
          disabled: "bg-neutral-200 text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      border: {
        base: "border border-brand-main text-brand-main bg-transparent shadow-xs hover:bg-brand-light hover:text-brand-dark active:bg-brand-light active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-main disabled:border-neutral-300 disabled:text-neutral-400 disabled:bg-transparent disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "bg-brand-light text-brand-dark",
          clicked: "bg-brand-light text-brand-dark scale-[0.98]",
          focus: "ring-2 ring-brand-main ring-offset-2",
          disabled: "border-neutral-300 text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none bg-transparent",
        },
      },
      link: {
        base: "border border-transparent text-brand-main bg-transparent hover:underline hover:bg-brand-light/50 active:opacity-75 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-main disabled:text-neutral-400 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "underline bg-brand-light/50 text-brand-main",
          clicked: "opacity-75 text-brand-main scale-[0.98]",
          focus: "ring-2 ring-brand-main ring-offset-2",
          disabled: "text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none no-underline bg-transparent",
        },
      },
    },
    error: {
      fill: {
        base: "bg-error-main text-white shadow-xs hover:bg-error-dark active:bg-error-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-error-main disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "bg-error-dark text-white",
          clicked: "bg-error-dark text-white scale-[0.98]",
          focus: "ring-2 ring-error-main ring-offset-2",
          disabled: "bg-neutral-200 text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      border: {
        base: "border border-error-main text-error-main bg-transparent shadow-xs hover:bg-error-light hover:text-error-dark active:bg-error-light active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-error-main disabled:border-neutral-300 disabled:text-neutral-400 disabled:bg-transparent disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "bg-error-light text-error-dark",
          clicked: "bg-error-light text-error-dark scale-[0.98]",
          focus: "ring-2 ring-error-main ring-offset-2",
          disabled: "border-neutral-300 text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none bg-transparent",
        },
      },
      link: {
        base: "border border-transparent text-error-main bg-transparent hover:underline hover:bg-error-light/50 active:opacity-75 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-error-main disabled:text-neutral-400 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "underline bg-error-light/50 text-error-main",
          clicked: "opacity-75 text-error-main scale-[0.98]",
          focus: "ring-2 ring-error-main ring-offset-2",
          disabled: "text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none no-underline bg-transparent",
        },
      },
    },
    neutral: {
      fill: {
        base: "bg-neutral-900 text-white shadow-xs hover:bg-neutral-700 active:bg-neutral-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-900 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "bg-neutral-700 text-white",
          clicked: "bg-neutral-800 text-white scale-[0.98]",
          focus: "ring-2 ring-neutral-900 ring-offset-2",
          disabled: "bg-neutral-200 text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      border: {
        base: "border border-neutral-300 text-neutral-900 bg-transparent shadow-xs hover:bg-neutral-100 hover:border-neutral-400 active:bg-neutral-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-500 disabled:border-neutral-200 disabled:text-neutral-400 disabled:bg-transparent disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "bg-neutral-100 border-neutral-400 text-neutral-900",
          clicked: "bg-neutral-200 text-neutral-900 scale-[0.98]",
          focus: "ring-2 ring-neutral-500 ring-offset-2",
          disabled: "border-neutral-200 text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none bg-transparent",
        },
      },
      link: {
        base: "border border-transparent text-neutral-700 bg-transparent hover:underline hover:text-neutral-900 hover:bg-neutral-100/60 active:opacity-75 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-500 disabled:text-neutral-400 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-50",
        states: {
          hover: "underline text-neutral-900 bg-neutral-100/60",
          clicked: "opacity-75 text-neutral-900 scale-[0.98]",
          focus: "ring-2 ring-neutral-500 ring-offset-2",
          disabled: "text-neutral-400 opacity-50 cursor-not-allowed pointer-events-none no-underline bg-transparent",
        },
      },
    },
  };

  const selectedSize = sizeClasses[size];
  const sizeClass = isIconOnly ? selectedSize.iconOnly : selectedSize.standard;
  const iconSizeClass = selectedSize.iconSize;

  const typeConfig = styleMatrix[normalizedType][resolvedStyle];
  // If an explicit preview state is passed, use that specific state's classes
  const stateClass = state && state !== 'default' ? typeConfig.states[state] || '' : typeConfig.base;

  const classes = [
    baseClasses,
    sizeClass,
    iconSizeClass,
    stateClass,
    className,
  ].filter(Boolean).join(' ').trim();

  // Handle icon rendering
  const renderIcon = (iconElement: React.ReactNode, extraClass?: string) => {
    if (!iconElement) return null;
    return (
      <span className={`inline-flex items-center justify-center shrink-0 ${extraClass || ''}`}>
        {iconElement}
      </span>
    );
  };

  return (
    <button
      ref={ref}
      type={resolvedHtmlType}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={classes}
      {...rest}
    >
      {/* If icon-only, only render the icon */}
      {isIconOnly ? (
        renderIcon(icon || children)
      ) : (
        <>
          {icon && iconPosition === 'left' && renderIcon(icon)}
          {children && <span>{children}</span>}
          {icon && iconPosition === 'right' && renderIcon(icon)}
          {trailingIcon && renderIcon(trailingIcon)}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';
