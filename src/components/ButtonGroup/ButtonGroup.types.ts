import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { buttonGroupVariants } from './ButtonGroup.variants';
import type { ButtonType } from '../Button';

export type ButtonGroupVariant =
  | '1-button'
  | '2-button-fill-border'
  | '2-button-link-border'
  | '2-button-fill-fill'
  | '2-button-vertical'
  | 'shopping';

export type ButtonGroupBreakpoint = 'desktop' | 'mobile';

export type ButtonGroupCvaVariants = VariantProps<typeof buttonGroupVariants>;

export interface ButtonGroupProps {
  /** Variant of the group per DotOne spec */
  variant?: ButtonGroupVariant;
  /** Breakpoint: 'desktop' (size xl / 48px, width 512px) or 'mobile' (size lg / 40px, width 312px) */
  breakpoint?: ButtonGroupBreakpoint;
  /** Primary / brand color type for buttons */
  buttonType?: ButtonType;
  /** First button label / content */
  firstButtonText?: React.ReactNode;
  /** First button onClick handler */
  onFirstButtonClick?: () => void;
  /** First button icon */
  firstButtonIcon?: React.ReactNode;
  /** Second button label / content */
  secondButtonText?: React.ReactNode;
  /** Second button onClick handler */
  onSecondButtonClick?: () => void;
  /** Second button icon */
  secondButtonIcon?: React.ReactNode;
  /** Third button label / content (optional) */
  thirdButtonText?: React.ReactNode;
  /** Third button onClick handler */
  onThirdButtonClick?: () => void;
  /** Shopping variant details: price text */
  priceText?: React.ReactNode;
  /** Shopping variant details: price subtitle */
  priceSubtitle?: React.ReactNode;
  /** Custom children (if custom layout is desired) */
  children?: React.ReactNode;
  className?: string;
}

