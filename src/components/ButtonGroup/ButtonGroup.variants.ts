import { cva } from 'class-variance-authority';

export const buttonGroupVariants = cva('w-full flex', {
  variants: {
    breakpoint: {
      desktop: 'max-w-[512px]',
      mobile: 'max-w-[312px]',
    },
    variant: {
      '1-button': 'flex-row',
      '2-button-fill-border': 'flex-row gap-2',
      '2-button-link-border': 'flex-row gap-2',
      '2-button-fill-fill': 'flex-row gap-2',
      '2-button-vertical': 'flex-col gap-2',
      shopping: 'flex-row items-center justify-between gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200',
    },
  },
  defaultVariants: {
    breakpoint: 'desktop',
    variant: '2-button-fill-border',
  },
});

