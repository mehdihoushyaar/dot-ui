import { cva } from 'class-variance-authority';
import {
  BUTTON_BASE_CLASSES,
  BUTTON_SIZE_CLASSES,
  BUTTON_ICON_ONLY_CLASSES,
} from './Button.constants';

/**
 * DotOne Design System Button Variants powered by CVA & Tailwind CSS v4 design tokens
 */
export const buttonVariants = cva(
  BUTTON_BASE_CLASSES,
  {
    variants: {
      buttonType: {
        primary: "",
        brand: "",
        error: "",
        neutral: "",
      },
      buttonStyle: {
        fill: "",
        border: "",
        link: "",
      },
      size: BUTTON_SIZE_CLASSES,
      isIconOnly: {
        true: "",
        false: "",
      },
      state: {
        default: "",
        hover: "",
        clicked: "",
        focus: "",
        disabled: "",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      // Icon-only overrides using design tokens
      { size: "sm", isIconOnly: true, className: BUTTON_ICON_ONLY_CLASSES.sm },
      { size: "md", isIconOnly: true, className: BUTTON_ICON_ONLY_CLASSES.md },
      { size: "lg", isIconOnly: true, className: BUTTON_ICON_ONLY_CLASSES.lg },
      { size: "xl", isIconOnly: true, className: BUTTON_ICON_ONLY_CLASSES.xl },
      { size: "xxl", isIconOnly: true, className: BUTTON_ICON_ONLY_CLASSES.xxl },

      // --- PRIMARY VARIANTS ---
      {
        buttonType: "primary",
        buttonStyle: "fill",
        state: "default",
        className: "bg-neutral-900 text-white border-transparent shadow-xs hover:bg-neutral-700 active:bg-neutral-950 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:bg-neutral-300 disabled:text-neutral-500 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
      },
      {
        buttonType: "primary",
        buttonStyle: "border",
        state: "default",
        className: "border-neutral-300 bg-white text-neutral-900 shadow-xs hover:bg-neutral-100 hover:border-neutral-400 active:bg-neutral-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:border-neutral-200 disabled:bg-white disabled:text-neutral-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
      },
      {
        buttonType: "primary",
        buttonStyle: "link",
        state: "default",
        className: "border-transparent bg-transparent text-neutral-900 hover:underline hover:text-neutral-700 active:text-neutral-950 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:text-neutral-300 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-60",
      },

      // --- BRAND VARIANTS ---
      {
        buttonType: "brand",
        buttonStyle: "fill",
        state: "default",
        className: "bg-brand-600 text-white border-transparent shadow-xs hover:bg-brand-700 active:bg-brand-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:bg-brand-100 disabled:text-brand-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-70",
      },
      {
        buttonType: "brand",
        buttonStyle: "border",
        state: "default",
        className: "border-brand-600 bg-white text-brand-600 shadow-xs hover:bg-brand-50 hover:border-brand-700 hover:text-brand-700 active:bg-brand-100 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:border-brand-200 disabled:bg-white disabled:text-brand-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
      },
      {
        buttonType: "brand",
        buttonStyle: "link",
        state: "default",
        className: "border-transparent bg-transparent text-brand-600 hover:underline hover:text-brand-700 active:text-brand-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:text-brand-300 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-60",
      },

      // --- ERROR VARIANTS ---
      {
        buttonType: "error",
        buttonStyle: "fill",
        state: "default",
        className: "bg-error-600 text-white border-transparent shadow-xs hover:bg-error-700 active:bg-error-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-error-700 focus-visible:ring-offset-2 disabled:bg-error-100 disabled:text-error-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-70",
      },
      {
        buttonType: "error",
        buttonStyle: "border",
        state: "default",
        className: "border-error-600 bg-white text-error-600 shadow-xs hover:bg-error-50 hover:border-error-700 hover:text-error-700 active:bg-error-100 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-error-700 focus-visible:ring-offset-2 disabled:border-error-200 disabled:bg-white disabled:text-error-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
      },
      {
        buttonType: "error",
        buttonStyle: "link",
        state: "default",
        className: "border-transparent bg-transparent text-error-600 hover:underline hover:text-error-700 active:text-error-800 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-error-700 focus-visible:ring-offset-2 disabled:text-error-300 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-60",
      },

      // --- NEUTRAL VARIANTS ---
      {
        buttonType: "neutral",
        buttonStyle: "fill",
        state: "default",
        className: "bg-neutral-100 text-neutral-900 border-transparent shadow-xs hover:bg-neutral-200 active:bg-neutral-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:bg-neutral-50 disabled:text-neutral-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
      },
      {
        buttonType: "neutral",
        buttonStyle: "border",
        state: "default",
        className: "border-neutral-300 bg-white text-neutral-900 shadow-xs hover:bg-neutral-100 hover:border-neutral-400 active:bg-neutral-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:border-neutral-200 disabled:bg-white disabled:text-neutral-300 disabled:shadow-none disabled:pointer-events-none disabled:opacity-60",
      },
      {
        buttonType: "neutral",
        buttonStyle: "link",
        state: "default",
        className: "border-transparent bg-transparent text-neutral-700 hover:underline hover:text-neutral-900 active:text-neutral-950 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 disabled:text-neutral-300 disabled:no-underline disabled:bg-transparent disabled:pointer-events-none disabled:opacity-60",
      },

      // --- SIMULATED STATES ---
      // Primary States
      { buttonType: "primary", buttonStyle: "fill", state: "hover", className: "bg-neutral-700 text-white border-transparent shadow-xs" },
      { buttonType: "primary", buttonStyle: "border", state: "hover", className: "border-neutral-400 bg-neutral-100 text-neutral-900 shadow-xs" },
      { buttonType: "primary", buttonStyle: "link", state: "hover", className: "border-transparent bg-neutral-100 text-neutral-700 underline" },
      { buttonType: "primary", buttonStyle: "fill", state: "clicked", className: "bg-neutral-950 text-white border-transparent scale-[0.98]" },
      { buttonType: "primary", buttonStyle: "border", state: "clicked", className: "border-neutral-400 bg-neutral-200 text-neutral-900 scale-[0.98]" },
      { buttonType: "primary", buttonStyle: "link", state: "clicked", className: "border-transparent bg-neutral-200 text-neutral-950 scale-[0.98]" },
      { buttonType: "primary", buttonStyle: "fill", state: "focus", className: "bg-neutral-900 text-white border-transparent ring-2 ring-neutral-700 ring-offset-2 shadow-xs" },
      { buttonType: "primary", buttonStyle: "border", state: "focus", className: "border-neutral-300 bg-white text-neutral-900 ring-2 ring-neutral-700 ring-offset-2 shadow-xs" },
      { buttonType: "primary", buttonStyle: "link", state: "focus", className: "border-transparent bg-transparent text-neutral-900 ring-2 ring-neutral-700 ring-offset-2" },
      { buttonType: "primary", buttonStyle: "fill", state: "disabled", className: "bg-neutral-300 text-neutral-500 border-transparent opacity-60 cursor-not-allowed pointer-events-none shadow-none" },
      { buttonType: "primary", buttonStyle: "border", state: "disabled", className: "border-neutral-200 bg-white text-neutral-300 opacity-60 cursor-not-allowed pointer-events-none shadow-none" },
      { buttonType: "primary", buttonStyle: "link", state: "disabled", className: "border-transparent bg-transparent text-neutral-300 opacity-60 cursor-not-allowed pointer-events-none no-underline" },

      // Brand States
      { buttonType: "brand", buttonStyle: "fill", state: "hover", className: "bg-brand-700 text-white border-transparent shadow-xs" },
      { buttonType: "brand", buttonStyle: "border", state: "hover", className: "border-brand-700 bg-brand-50 text-brand-700 shadow-xs" },
      { buttonType: "brand", buttonStyle: "link", state: "hover", className: "border-transparent bg-brand-50 text-brand-700 underline" },
      { buttonType: "brand", buttonStyle: "fill", state: "clicked", className: "bg-brand-800 text-white border-transparent scale-[0.98]" },
      { buttonType: "brand", buttonStyle: "border", state: "clicked", className: "border-brand-800 bg-brand-100 text-brand-800 scale-[0.98]" },
      { buttonType: "brand", buttonStyle: "link", state: "clicked", className: "border-transparent bg-brand-100 text-brand-800 scale-[0.98]" },
      { buttonType: "brand", buttonStyle: "fill", state: "focus", className: "bg-brand-600 text-white border-transparent ring-2 ring-brand-700 ring-offset-2 shadow-xs" },
      { buttonType: "brand", buttonStyle: "border", state: "focus", className: "border-brand-600 bg-white text-brand-600 ring-2 ring-brand-700 ring-offset-2 shadow-xs" },
      { buttonType: "brand", buttonStyle: "link", state: "focus", className: "border-transparent bg-transparent text-brand-600 ring-2 ring-brand-700 ring-offset-2" },
      { buttonType: "brand", buttonStyle: "fill", state: "disabled", className: "bg-brand-100 text-brand-300 border-transparent opacity-70 cursor-not-allowed pointer-events-none shadow-none" },
      { buttonType: "brand", buttonStyle: "border", state: "disabled", className: "border-brand-200 bg-white text-brand-300 opacity-60 cursor-not-allowed pointer-events-none shadow-none" },
      { buttonType: "brand", buttonStyle: "link", state: "disabled", className: "border-transparent bg-transparent text-brand-300 opacity-60 cursor-not-allowed pointer-events-none no-underline" },

      // Error States
      { buttonType: "error", buttonStyle: "fill", state: "hover", className: "bg-error-700 text-white border-transparent shadow-xs" },
      { buttonType: "error", buttonStyle: "border", state: "hover", className: "border-error-700 bg-error-50 text-error-700 shadow-xs" },
      { buttonType: "error", buttonStyle: "link", state: "hover", className: "border-transparent bg-error-50 text-error-700 underline" },
      { buttonType: "error", buttonStyle: "fill", state: "clicked", className: "bg-error-800 text-white border-transparent scale-[0.98]" },
      { buttonType: "error", buttonStyle: "border", state: "clicked", className: "border-error-800 bg-error-100 text-error-800 scale-[0.98]" },
      { buttonType: "error", buttonStyle: "link", state: "clicked", className: "border-transparent bg-error-100 text-error-800 scale-[0.98]" },
      { buttonType: "error", buttonStyle: "fill", state: "focus", className: "bg-error-600 text-white border-transparent ring-2 ring-error-700 ring-offset-2 shadow-xs" },
      { buttonType: "error", buttonStyle: "border", state: "focus", className: "border-error-600 bg-white text-error-600 ring-2 ring-error-700 ring-offset-2 shadow-xs" },
      { buttonType: "error", buttonStyle: "link", state: "focus", className: "border-transparent bg-transparent text-error-600 ring-2 ring-error-700 ring-offset-2" },
      { buttonType: "error", buttonStyle: "fill", state: "disabled", className: "bg-error-100 text-error-300 border-transparent opacity-70 cursor-not-allowed pointer-events-none shadow-none" },
      { buttonType: "error", buttonStyle: "border", state: "disabled", className: "border-error-200 bg-white text-error-300 opacity-60 cursor-not-allowed pointer-events-none shadow-none" },
      { buttonType: "error", buttonStyle: "link", state: "disabled", className: "border-transparent bg-transparent text-error-300 opacity-60 cursor-not-allowed pointer-events-none no-underline" },

      // Neutral States
      { buttonType: "neutral", buttonStyle: "fill", state: "hover", className: "bg-neutral-200 text-neutral-900 border-transparent shadow-xs" },
      { buttonType: "neutral", buttonStyle: "border", state: "hover", className: "border-neutral-400 bg-neutral-100 text-neutral-900 shadow-xs" },
      { buttonType: "neutral", buttonStyle: "link", state: "hover", className: "border-transparent bg-neutral-100 text-neutral-900 underline" },
      { buttonType: "neutral", buttonStyle: "fill", state: "clicked", className: "bg-neutral-300 text-neutral-900 border-transparent scale-[0.98]" },
      { buttonType: "neutral", buttonStyle: "border", state: "clicked", className: "border-neutral-400 bg-neutral-200 text-neutral-900 scale-[0.98]" },
      { buttonType: "neutral", buttonStyle: "link", state: "clicked", className: "border-transparent bg-neutral-200 text-neutral-950 scale-[0.98]" },
      { buttonType: "neutral", buttonStyle: "fill", state: "focus", className: "bg-neutral-100 text-neutral-900 border-transparent ring-2 ring-neutral-700 ring-offset-2 shadow-xs" },
      { buttonType: "neutral", buttonStyle: "border", state: "focus", className: "border-neutral-300 bg-white text-neutral-900 ring-2 ring-neutral-700 ring-offset-2 shadow-xs" },
      { buttonType: "neutral", buttonStyle: "link", state: "focus", className: "border-transparent bg-transparent text-neutral-700 ring-2 ring-neutral-700 ring-offset-2" },
      { buttonType: "neutral", buttonStyle: "fill", state: "disabled", className: "bg-neutral-50 text-neutral-300 border-transparent opacity-60 cursor-not-allowed pointer-events-none shadow-none" },
      { buttonType: "neutral", buttonStyle: "border", state: "disabled", className: "border-neutral-200 bg-white text-neutral-300 opacity-60 cursor-not-allowed pointer-events-none shadow-none" },
      { buttonType: "neutral", buttonStyle: "link", state: "disabled", className: "border-transparent bg-transparent text-neutral-300 opacity-60 cursor-not-allowed pointer-events-none no-underline" },
    ],
    defaultVariants: {
      buttonType: "primary",
      buttonStyle: "fill",
      size: "md",
      isIconOnly: false,
      state: "default",
      fullWidth: false,
    },
  }
);
