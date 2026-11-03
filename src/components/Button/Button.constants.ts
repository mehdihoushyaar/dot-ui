import type { ButtonType, ButtonStyle, ButtonSize, ButtonState } from './Button.types';

export const BUTTON_TYPES = ['primary', 'brand', 'error', 'neutral', 'secondary'] as const;
export const BUTTON_STYLES = ['fill', 'border', 'link'] as const;
export const BUTTON_SIZES = ['sm', 'md', 'lg', 'xl', 'xxl'] as const;
export const BUTTON_STATES = ['default', 'hover', 'clicked', 'focus', 'disabled'] as const;

/**
 * Base button classes adhering to 1px border baseline to prevent layout shift
 */
export const BUTTON_BASE_CLASSES =
  "inline-flex items-center justify-center font-semibold font-inherit transition-all duration-150 select-none cursor-pointer outline-none shrink-0 border border-solid";

/**
 * Standard button sizing using design tokens:
 * - sm:  h-6 (24px), min-w-16 (64px), px-3 (12px), text-btn-sm (10px/16px), rounded-xs (8px), gap-2 (8px), icon 12px (w-3 h-3)
 * - md:  h-8 (32px), min-w-20 (80px), px-4 (16px), text-btn-md (12px/20px), rounded-xs (8px), gap-2 (8px), icon 16px (w-4 h-4)
 * - lg:  h-10 (40px), min-w-28 (112px), px-4 (16px), text-btn-lg (14px/22px), rounded-sm (12px), gap-2 (8px), icon 16px (w-4 h-4)
 * - xl:  h-12 (48px), min-w-32 (128px), px-5 (20px), text-btn-xl (16px/26px), rounded-md (16px), gap-2 (8px), icon 20px (w-5 h-5)
 * - xxl: h-14 (56px), min-w-40 (160px), px-7 (28px), text-btn-xxl (18px/28px), rounded-md (16px), gap-2 (8px), icon 24px (w-6 h-6)
 */
export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-6 min-w-16 px-3 text-btn-sm rounded-xs gap-2 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:shrink-0",
  md: "h-8 min-w-20 px-4 text-btn-md rounded-xs gap-2 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:shrink-0",
  lg: "h-10 min-w-28 px-4 text-btn-lg rounded-sm gap-2 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:shrink-0",
  xl: "h-12 min-w-32 px-5 text-btn-xl rounded-md gap-2 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:shrink-0",
  xxl: "h-14 min-w-40 px-7 text-btn-xxl rounded-md gap-2 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:shrink-0",
};

/**
 * Square icon-only overrides (Just Icon per DotOne spec)
 */
export const BUTTON_ICON_ONLY_CLASSES: Record<ButtonSize, string> = {
  sm: "h-6 w-6 min-w-6 p-1 px-0 gap-0",
  md: "h-8 w-8 min-w-8 p-1.5 px-0 gap-0",
  lg: "h-10 w-10 min-w-10 p-2.5 px-0 gap-0",
  xl: "h-12 w-12 min-w-12 p-3 px-0 gap-0",
  xxl: "h-14 w-14 min-w-14 p-3.5 px-0 gap-0",
};

/**
 * Clean helper to resolve button type across aliases and legacy props
 */
export function resolveButtonType(
  buttonType?: ButtonType,
  type?: ButtonType | 'button' | 'submit' | 'reset',
  variant?: string,
  destructive?: boolean
): 'primary' | 'brand' | 'error' | 'neutral' {
  if (destructive) return 'error';

  const typeCandidates = [buttonType, type, variant];
  for (const candidate of typeCandidates) {
    if (candidate === 'secondary') return 'neutral';
    if (candidate === 'primary' || candidate === 'brand' || candidate === 'error' || candidate === 'neutral') {
      return candidate;
    }
  }

  return 'primary';
}

/**
 * Clean helper to resolve button style across aliases ('fill', 'border', 'link', 'outline', 'ghost', 'text')
 */
export function resolveButtonStyle(
  buttonStyle?: ButtonStyle,
  variant?: string
): ButtonStyle {
  if (buttonStyle && BUTTON_STYLES.includes(buttonStyle)) {
    return buttonStyle;
  }

  if (variant === 'border' || variant === 'outline') return 'border';
  if (variant === 'link' || variant === 'ghost' || variant === 'text') return 'link';
  if (variant === 'fill') return 'fill';

  return 'fill';
}

