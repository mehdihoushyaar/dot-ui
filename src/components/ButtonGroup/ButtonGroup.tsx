import React from 'react';
import { Button } from '../Button';
import { buttonGroupVariants } from './ButtonGroup.variants';
import type { ButtonGroupProps } from './ButtonGroup.types';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant = '2-button-fill-border',
  breakpoint = 'desktop',
  buttonType = 'primary',
  firstButtonText = 'Button',
  onFirstButtonClick,
  firstButtonIcon,
  secondButtonText = 'Button',
  onSecondButtonClick,
  secondButtonIcon,
  priceText = '$255.00',
  priceSubtitle = 'Pay via direct debit',
  children,
  className = '',
}) => {
  // DotOne spec: Desktop uses xl (48px) and max-w-[512px]; Mobile uses lg (40px) and max-w-[312px]
  const buttonSize = breakpoint === 'desktop' ? 'xl' : 'lg';
  const containerClasses = buttonGroupVariants({ breakpoint, variant, className });

  if (children) {
    return (
      <div className={containerClasses}>
        {children}
      </div>
    );
  }

  // 1 Button
  if (variant === '1-button') {
    return (
      <div className={containerClasses}>
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
      <div className={containerClasses}>
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

  // 2 Button (Link & Border)
  if (variant === '2-button-link-border') {
    return (
      <div className={containerClasses}>
        <Button
          buttonType={buttonType}
          buttonStyle="link"
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

  // 2 Button (Fill & Fill)
  if (variant === '2-button-fill-fill') {
    return (
      <div className={containerClasses}>
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
      <div className={containerClasses}>
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
        <Button
          buttonType={buttonType}
          buttonStyle="border"
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

  // Shopping (Fixed bottom bar / Cart Checkout with Price)
  if (variant === 'shopping') {
    return (
      <div className={containerClasses}>
        <div className="flex flex-col text-right justify-center">
          <span className="font-bold text-neutral-900 text-sm tracking-tight">{priceText}</span>
          <span className="text-xs text-neutral-500">{priceSubtitle}</span>
        </div>
        <Button
          buttonType={buttonType}
          buttonStyle="fill"
          size={buttonSize}
          icon={firstButtonIcon}
          onClick={onFirstButtonClick}
        >
          {firstButtonText}
        </Button>
      </div>
    );
  }

  return null;
};

ButtonGroup.displayName = 'ButtonGroup';

export * from './ButtonGroup.types';
export * from './ButtonGroup.variants';
