import React, { forwardRef } from 'react';

export type ButtonType = 'primary' | 'brand' | 'error' | 'neutral' | 'secondary';
export type ButtonStyle = 'fill' | 'border' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type ButtonState = 'default' | 'hover' | 'clicked' | 'focus' | 'disabled';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'type'> {
  /** The color theme/type: 'primary' | 'brand' | 'error' | 'neutral' */
  buttonType?: ButtonType;
  /** Alias for buttonType (or native html type if button/submit/reset) */
  type?: ButtonType | 'button' | 'submit' | 'reset';
  /** Destructive action shortcut (maps to type="error") */
  destructive?: boolean;
  /** The visual style: 'fill' (solid) | 'border' (outline) | 'link' (ghost/text) */
  buttonStyle?: ButtonStyle;
  /** Alias for buttonStyle or legacy type */
  variant?: ButtonStyle | 'outline' | 'ghost' | 'text' | ButtonType;
  /** Button sizing: 'sm' (24px) | 'md' (32px) | 'lg' (40px) | 'xl' (48px) | 'xxl' (56px) */
  size?: ButtonSize;
  /** Leading icon or solitary icon */
  icon?: React.ReactNode;
  /** Trailing icon (displayed after text) */
  trailingIcon?: React.ReactNode;
  /** Icon position relative to children */
  iconPosition?: 'left' | 'right';
  /** Renders the button as a square icon-only button (Just Icon in DotOne spec) */
  justIcon?: boolean;
  /** Alias for justIcon */
  onlyIcon?: boolean;
  /** Stretch button to full container width (used in Button Groups & Modals) */
  fullWidth?: boolean;
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
  destructive,
  buttonStyle,
  variant,
  size = 'md',
  icon,
  trailingIcon,
  iconPosition = 'left',
  justIcon,
  onlyIcon,
  fullWidth = false,
  state,
  htmlType,
  children,
  className = '',
  disabled: propDisabled,
  ...rest
}, ref) => {
  // Resolve buttonType: destructive -> error, then buttonType, then type, then variant if it is a type
  let resolvedType: 'primary' | 'brand' | 'error' | 'neutral' = 'primary';
  const typeOptions: string[] = ['primary', 'brand', 'error', 'neutral', 'secondary'];

  if (destructive) {
    resolvedType = 'error';
  } else if (buttonType && typeOptions.includes(buttonType)) {
    resolvedType = buttonType === 'secondary' ? 'neutral' : (buttonType as 'primary' | 'brand' | 'error' | 'neutral');
  } else if (type && typeOptions.includes(type)) {
    resolvedType = type === 'secondary' ? 'neutral' : (type as 'primary' | 'brand' | 'error' | 'neutral');
  } else if (variant && typeOptions.includes(variant as string)) {
    resolvedType = variant === 'secondary' ? 'neutral' : (variant as 'primary' | 'brand' | 'error' | 'neutral');
  }

  // Resolve buttonStyle: prioritize buttonStyle, then variant aliases
  let resolvedStyle: ButtonStyle = 'fill';
  if (buttonStyle && ['fill', 'border', 'link'].includes(buttonStyle)) {
    resolvedStyle = buttonStyle;
  } else if (variant) {
    if (variant === 'border' || variant === 'outline') {
      resolvedStyle = 'border';
    } else if (variant === 'link' || variant === 'ghost' || variant === 'text') {
      resolvedStyle = 'link';
    } else if (variant === 'fill') {
      resolvedStyle = 'fill';
    }
  }

  // Determine native HTML type attribute
  const resolvedHtmlType: 'button' | 'submit' | 'reset' =
    htmlType || (type && ['button', 'submit', 'reset'].includes(type) ? (type as 'button' | 'submit' | 'reset') : 'button');

  // Determine disabled state
  const isDisabled = propDisabled || state === 'disabled';

  // Determine if icon-only button (Just Icon per DotOne spec)
  const isIconOnly = Boolean(justIcon || onlyIcon || (icon && !children && !trailingIcon));

  // Base shared styles (border ensures 1px border baseline on all variants to eliminate layout shift)
  const baseClasses =
    "inline-flex items-center justify-center font-semibold font-inherit transition-all duration-150 select-none cursor-pointer outline-none shrink-0 border border-solid";

  // DotOne Exact Dimensions:
  // sm:  h=24px, min-w=64px, px=12px, r=8px (rounded-xs), text=10px, icon=12px. Just Icon: 24x24, p=4px
  // md:  h=32px, min-w=80px, px=16px, r=8px (rounded-xs), text=12px, icon=16px. Just Icon: 32x32, p=6px
  // lg:  h=40px, min-w=112px, px=16px, r=12px (rounded-sm), text=14px, icon=16px. Just Icon: 40x40, p=10px
  // xl:  h=48px, min-w=128px, px=20px, r=16px (rounded-md), text=16px, icon=20px. Just Icon: 48x48, p=12px
  // xxl: h=56px, min-w=160px, px=28px, r=16px (rounded-md), text=18px, icon=24px. Just Icon: 56x56, p=14px
  const sizeClasses: Record<ButtonSize, { standard: string; iconOnly: string; iconSize: string }> = {
    sm: {
      standard: "h-[24px] min-w-[64px] px-[12px] text-[10px] leading-[16px] rounded-xs gap-[8px]",
      iconOnly: "h-[24px] w-[24px] min-w-[24px] p-[4px] text-[10px] rounded-xs",
      iconSize: "[&>svg]:w-[12px] [&>svg]:h-[12px] [&>svg]:shrink-0",
    },
    md: {
      standard: "h-[32px] min-w-[80px] px-[16px] text-[12px] leading-[20px] rounded-xs gap-[8px]",
      iconOnly: "h-[32px] w-[32px] min-w-[32px] p-[6px] text-[12px] rounded-xs",
      iconSize: "[&>svg]:w-[16px] [&>svg]:h-[16px] [&>svg]:shrink-0",
    },
    lg: {
      standard: "h-[40px] min-w-[112px] px-[16px] text-[14px] leading-[22px] rounded-sm gap-[8px]",
      iconOnly: "h-[40px] w-[40px] min-w-[40px] p-[10px] text-[14px] rounded-sm",
      iconSize: "[&>svg]:w-[16px] [&>svg]:h-[16px] [&>svg]:shrink-0",
    },
    xl: {
      standard: "h-[48px] min-w-[128px] px-[20px] text-[16px] leading-[26px] rounded-md gap-[8px]",
      iconOnly: "h-[48px] w-[48px] min-w-[48px] p-[12px] text-[16px] rounded-md",
      iconSize: "[&>svg]:w-[20px] [&>svg]:h-[20px] [&>svg]:shrink-0",
    },
    xxl: {
      standard: "h-[56px] min-w-[160px] px-[28px] text-[18px] leading-[28px] rounded-md gap-[8px]",
      iconOnly: "h-[56px] w-[56px] min-w-[56px] p-[14px] text-[18px] rounded-md",
      iconSize: "[&>svg]:w-[24px] [&>svg]:h-[24px] [&>svg]:shrink-0",
    },
  };

  // DotOne Button Semantic Style Matrix
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
    // Primary: default neutral/900, hover neutral/700, click neutral/950, focus neutral/700 ring
    primary: {
      fill: {
        base: "bg-neutral-900 text-white border-transparent shadow-xs hover:bg-neutral-700 active:bg-neutral-950 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:bg-neutral-300 disabled:text-neutral-500 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "bg-neutral-700 text-white border-transparent shadow-xs",
          clicked: "bg-neutral-950 text-white border-transparent scale-[0.98]",
          focus: "bg-neutral-900 text-white border-transparent ring-2 ring-neutral-700 ring-offset-2 shadow-xs",
          disabled: "bg-neutral-300 text-neutral-500 border-transparent opacity-60 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      border: {
        base: "border-neutral-300 bg-white text-neutral-900 shadow-xs hover:bg-neutral-100 hover:border-neutral-400 active:bg-neutral-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:border-neutral-200 disabled:bg-white disabled:text-neutral-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "border-neutral-400 bg-neutral-100 text-neutral-900 shadow-xs",
          clicked: "border-neutral-400 bg-neutral-200 text-neutral-900 scale-[0.98]",
          focus: "border-neutral-300 bg-white text-neutral-900 ring-2 ring-neutral-700 ring-offset-2 shadow-xs",
          disabled: "border-neutral-200 bg-white text-neutral-300 opacity-60 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      link: {
        base: "border-transparent bg-transparent text-neutral-900 hover:underline hover:text-neutral-700 active:text-neutral-950 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:text-neutral-300 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "border-transparent bg-neutral-100 text-neutral-700 underline",
          clicked: "border-transparent bg-neutral-200 text-neutral-950 scale-[0.98]",
          focus: "border-transparent bg-transparent text-neutral-900 ring-2 ring-neutral-700 ring-offset-2",
          disabled: "border-transparent bg-transparent text-neutral-300 opacity-60 cursor-not-allowed pointer-events-none no-underline",
        },
      },
    },

    // Brand: default brand/600, hover brand/700, click brand/800, focus brand/700 ring
    brand: {
      fill: {
        base: "bg-brand-600 text-white border-transparent shadow-xs hover:bg-brand-700 active:bg-brand-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:bg-brand-100 disabled:text-brand-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-70",
        states: {
          hover: "bg-brand-700 text-white border-transparent shadow-xs",
          clicked: "bg-brand-800 text-white border-transparent scale-[0.98]",
          focus: "bg-brand-600 text-white border-transparent ring-2 ring-brand-700 ring-offset-2 shadow-xs",
          disabled: "bg-brand-100 text-brand-300 border-transparent opacity-70 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      border: {
        base: "border-brand-600 bg-white text-brand-600 shadow-xs hover:bg-brand-50 hover:border-brand-700 hover:text-brand-700 active:bg-brand-100 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:border-brand-200 disabled:bg-white disabled:text-brand-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "border-brand-700 bg-brand-50 text-brand-700 shadow-xs",
          clicked: "border-brand-800 bg-brand-100 text-brand-800 scale-[0.98]",
          focus: "border-brand-600 bg-white text-brand-600 ring-2 ring-brand-700 ring-offset-2 shadow-xs",
          disabled: "border-brand-200 bg-white text-brand-300 opacity-60 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      link: {
        base: "border-transparent bg-transparent text-brand-600 hover:underline hover:text-brand-700 active:text-brand-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:text-brand-300 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "border-transparent bg-brand-50 text-brand-700 underline",
          clicked: "border-transparent bg-brand-100 text-brand-800 scale-[0.98]",
          focus: "border-transparent bg-transparent text-brand-600 ring-2 ring-brand-700 ring-offset-2",
          disabled: "border-transparent bg-transparent text-brand-300 opacity-60 cursor-not-allowed pointer-events-none no-underline",
        },
      },
    },

    // Error: default error/600, hover error/700, click error/800, focus error/700 ring
    error: {
      fill: {
        base: "bg-error-600 text-white border-transparent shadow-xs hover:bg-error-700 active:bg-error-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-error-700 focus-visible:ring-offset-2 disabled:bg-error-100 disabled:text-error-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-70",
        states: {
          hover: "bg-error-700 text-white border-transparent shadow-xs",
          clicked: "bg-error-800 text-white border-transparent scale-[0.98]",
          focus: "bg-error-600 text-white border-transparent ring-2 ring-error-700 ring-offset-2 shadow-xs",
          disabled: "bg-error-100 text-error-300 border-transparent opacity-70 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      border: {
        base: "border-error-600 bg-white text-error-600 shadow-xs hover:bg-error-50 hover:border-error-700 hover:text-error-700 active:bg-error-100 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-error-700 focus-visible:ring-offset-2 disabled:border-error-200 disabled:bg-white disabled:text-error-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "border-error-700 bg-error-50 text-error-700 shadow-xs",
          clicked: "border-error-800 bg-error-100 text-error-800 scale-[0.98]",
          focus: "border-error-600 bg-white text-error-600 ring-2 ring-error-700 ring-offset-2 shadow-xs",
          disabled: "border-error-200 bg-white text-error-300 opacity-60 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      link: {
        base: "border-transparent bg-transparent text-error-600 hover:underline hover:text-error-700 active:text-error-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-error-700 focus-visible:ring-offset-2 disabled:text-error-300 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "border-transparent bg-error-50 text-error-700 underline",
          clicked: "border-transparent bg-error-100 text-error-800 scale-[0.98]",
          focus: "border-transparent bg-transparent text-error-600 ring-2 ring-error-700 ring-offset-2",
          disabled: "border-transparent bg-transparent text-error-300 opacity-60 cursor-not-allowed pointer-events-none no-underline",
        },
      },
    },

    // Neutral: default neutral/100, hover neutral/200, click neutral/300
    neutral: {
      fill: {
        base: "bg-neutral-100 text-neutral-900 border-transparent shadow-xs hover:bg-neutral-200 active:bg-neutral-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:bg-neutral-50 disabled:text-neutral-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "bg-neutral-200 text-neutral-900 border-transparent shadow-xs",
          clicked: "bg-neutral-300 text-neutral-900 border-transparent scale-[0.98]",
          focus: "bg-neutral-100 text-neutral-900 border-transparent ring-2 ring-neutral-700 ring-offset-2 shadow-xs",
          disabled: "bg-neutral-50 text-neutral-300 border-transparent opacity-60 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      border: {
        base: "border-neutral-300 bg-white text-neutral-900 shadow-xs hover:bg-neutral-100 hover:border-neutral-400 active:bg-neutral-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:border-neutral-200 disabled:bg-white disabled:text-neutral-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "border-neutral-400 bg-neutral-100 text-neutral-900 shadow-xs",
          clicked: "border-neutral-400 bg-neutral-200 text-neutral-900 scale-[0.98]",
          focus: "border-neutral-300 bg-white text-neutral-900 ring-2 ring-neutral-700 ring-offset-2 shadow-xs",
          disabled: "border-neutral-200 bg-white text-neutral-300 opacity-60 cursor-not-allowed pointer-events-none shadow-none",
        },
      },
      link: {
        base: "border-transparent bg-transparent text-neutral-700 hover:underline hover:text-neutral-900 active:text-neutral-950 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:text-neutral-300 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-60",
        states: {
          hover: "border-transparent bg-neutral-100 text-neutral-900 underline",
          clicked: "border-transparent bg-neutral-200 text-neutral-950 scale-[0.98]",
          focus: "border-transparent bg-transparent text-neutral-700 ring-2 ring-neutral-700 ring-offset-2",
          disabled: "border-transparent bg-transparent text-neutral-300 opacity-60 cursor-not-allowed pointer-events-none no-underline",
        },
      },
    },
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;
  const sizeClass = isIconOnly ? selectedSize.iconOnly : selectedSize.standard;
  const iconSizeClass = selectedSize.iconSize;
  const widthClass = fullWidth ? "w-full" : "";

  const typeConfig = styleMatrix[resolvedType][resolvedStyle];
  // If an explicit preview state is passed and it's not default, use that specific state's classes
  const stateClass = state && state !== 'default' ? typeConfig.states[state] || typeConfig.base : typeConfig.base;

  const classes = [
    baseClasses,
    sizeClass,
    iconSizeClass,
    widthClass,
    stateClass,
    className,
  ].filter(Boolean).join(' ').trim();

  // Handle icon rendering
  const renderIcon = (iconElement: React.ReactNode, extraClass?: string) => {
    if (!iconElement) return null;
    return (
      <span className={`inline-flex items-center justify-center shrink-0 leading-none ${extraClass || ''}`}>
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
      {isIconOnly ? (
        renderIcon(icon || children)
      ) : (
        <>
          {icon && iconPosition === 'left' && renderIcon(icon)}
          {children && <span className="truncate">{children}</span>}
          {icon && iconPosition === 'right' && renderIcon(icon)}
          {trailingIcon && renderIcon(trailingIcon)}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';
