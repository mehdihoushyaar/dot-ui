import React from 'react';
import { Button, ButtonType } from '../Button';

export type ButtonGroupVariant =
  | '1-button'
  | '2-button-fill-border'
  | '2-button-link-border'
  | '2-button-fill-fill'
  | '2-button-vertical'
  | 'shopping';

export type ButtonGroupBreakpoint = 'desktop' | 'mobile';

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

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant = '2-button-fill-border',
  breakpoint = 'desktop',
  buttonType = 'primary',
  firstButtonText = 'دکمه',
  onFirstButtonClick,
  firstButtonIcon,
  secondButtonText = 'دکمه',
  onSecondButtonClick,
  secondButtonIcon,
  priceText = '۲۵۵،۰۰۰ تومان',
  priceSubtitle = 'نقدی پرداخت کنید',
  children,
  className = '',
}) => {
  // DotOne spec: Desktop uses xl (48px) and max-w-[512px]; Mobile uses lg (40px) and max-w-[312px]
  const buttonSize = breakpoint === 'desktop' ? 'xl' : 'lg';
  const containerWidth = breakpoint === 'desktop' ? 'max-w-[512px]' : 'max-w-[312px]';

  if (children) {
    return (
      <div className={`flex w-full ${containerWidth} gap-2 ${className}`}>
        {children}
      </div>
    );
  }

  // 1 Button
  if (variant === '1-button') {
    return (
      <div className={`flex w-full ${containerWidth} ${className}`}>
        <Button
          buttonType={buttonType}
          buttonStyle="fill"
          size={buttonSize}
          fullWidth
          icon={firstButtonIcon}
          onClick={onFirstButtonClick}
        >
          {firstButtonText}
        </Button>
      </div>
    );
  }

  // 2 Button (Fill & Border)
  if (variant === '2-button-fill-border') {
    return (
      <div className={`flex w-full ${containerWidth} gap-2 ${className}`}>
        <Button
          buttonType={buttonType}
          buttonStyle="fill"
          size={buttonSize}
          className="flex-1"
          icon={firstButtonIcon}
          onClick={onFirstButtonClick}
        >
          {firstButtonText}
        </Button>
        <Button
          buttonType={buttonType}
          buttonStyle="border"
          size={buttonSize}
          className="flex-1"
          icon={secondButtonIcon}
          onClick={onSecondButtonClick}
        >
          {secondButtonText}
        </Button>
      </div>
    );
  }

  // 2 Button Low (Link & Border)
  if (variant === '2-button-link-border') {
    return (
      <div className={`flex w-full ${containerWidth} gap-2 ${className}`}>
        <Button
          buttonType={buttonType}
          buttonStyle="border"
          size={buttonSize}
          className="flex-1"
          icon={firstButtonIcon}
          onClick={onFirstButtonClick}
        >
          {firstButtonText}
        </Button>
        <Button
          buttonType={buttonType}
          buttonStyle="link"
          size={buttonSize}
          className="flex-1"
          icon={secondButtonIcon}
          onClick={onSecondButtonClick}
        >
          {secondButtonText}
        </Button>
      </div>
    );
  }

  // 2 Button (2 Fill)
  if (variant === '2-button-fill-fill') {
    return (
      <div className={`flex w-full ${containerWidth} gap-2 ${className}`}>
        <Button
          buttonType={buttonType}
          buttonStyle="fill"
          size={buttonSize}
          className="flex-1"
          icon={firstButtonIcon}
          onClick={onFirstButtonClick}
        >
          {firstButtonText}
        </Button>
        <Button
          buttonType="neutral"
          buttonStyle="fill"
          size={buttonSize}
          className="flex-1"
          icon={secondButtonIcon}
          onClick={onSecondButtonClick}
        >
          {secondButtonText}
        </Button>
      </div>
    );
  }

  // 2 Button Vertical
  if (variant === '2-button-vertical') {
    return (
      <div className={`flex flex-col w-full ${containerWidth} gap-2 ${className}`}>
        <Button
          buttonType={buttonType}
          buttonStyle="border"
          size={buttonSize}
          fullWidth
          icon={firstButtonIcon}
          onClick={onFirstButtonClick}
        >
          {firstButtonText}
        </Button>
        <Button
          buttonType={buttonType}
          buttonStyle="fill"
          size={buttonSize}
          fullWidth
          icon={secondButtonIcon}
          onClick={onSecondButtonClick}
        >
          {secondButtonText}
        </Button>
      </div>
    );
  }

  // Shopping (Link & Fill or Price Info + Action Button)
  if (variant === 'shopping') {
    return (
      <div className={`flex items-center justify-between w-full ${containerWidth} gap-3 p-3 bg-white border border-neutral-200 rounded-lg shadow-04 ${className}`}>
        <Button
          buttonType={buttonType}
          buttonStyle="fill"
          size={buttonSize}
          className="min-w-[120px]"
          icon={firstButtonIcon}
          onClick={onFirstButtonClick}
        >
          {firstButtonText}
        </Button>
        <div className="flex items-center gap-2.5 text-right">
          <div className="flex flex-col">
            <span className="text-[11px] text-neutral-500 font-medium">{priceSubtitle}</span>
            <span className="text-sm font-bold text-neutral-900">{priceText}</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

ButtonGroup.displayName = 'ButtonGroup';

