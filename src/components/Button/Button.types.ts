import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from './Button.variants';

export type ButtonType = 'primary' | 'brand' | 'error' | 'neutral' | 'secondary';
export type ButtonStyle = 'fill' | 'border' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type ButtonState = 'default' | 'hover' | 'clicked' | 'focus' | 'disabled';

export type ButtonCvaVariants = VariantProps<typeof buttonVariants>;

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

