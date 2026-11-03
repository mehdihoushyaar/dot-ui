import React, { forwardRef } from 'react';
import { buttonVariants } from './Button.variants';
import { resolveButtonType, resolveButtonStyle } from './Button.constants';
import type { ButtonProps } from './Button.types';

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
  state = 'default',
  htmlType,
  children,
  className = '',
  disabled: propDisabled,
  ...rest
}, ref) => {
  // Clean resolution of type and style using pure helpers
  const resolvedType = resolveButtonType(buttonType, type, variant as string, destructive);
  const resolvedStyle = resolveButtonStyle(buttonStyle, variant as string);
  const resolvedHtmlType: 'button' | 'submit' | 'reset' =
    htmlType || (type && ['button', 'submit', 'reset'].includes(type) ? (type as 'button' | 'submit' | 'reset') : 'button');

  const isDisabled = propDisabled || state === 'disabled';
  const isIconOnly = Boolean(justIcon || onlyIcon || (icon && !children && !trailingIcon));

  // Compute classes with CVA using design tokens
  const classes = buttonVariants({
    buttonType: resolvedType,
    buttonStyle: resolvedStyle,
    size,
    isIconOnly,
    state,
    fullWidth,
    className,
  });

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

// Re-exports
export * from './Button.types';
export * from './Button.variants';
export * from './Button.constants';
