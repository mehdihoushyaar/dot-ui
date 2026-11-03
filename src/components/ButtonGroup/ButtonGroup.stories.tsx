import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        '1-button',
        '2-button-fill-border',
        '2-button-link-border',
        '2-button-fill-fill',
        '2-button-vertical',
        'shopping',
      ],
      description: 'DotOne ButtonGroup variant',
    },
    breakpoint: {
      control: 'select',
      options: ['desktop', 'mobile'],
      description: 'Desktop (size xl / 48px, width 512px) vs Mobile (size lg / 40px, width 312px)',
    },
    buttonType: {
      control: 'select',
      options: ['primary', 'brand', 'error', 'neutral'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

// Full visual overview matching Figma DotOne Button Group spec
export const AllVariantsOverview: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-[600px] p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
      <h3 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">
        Desktop Variants (xl / 48px, max-w 512px)
      </h3>

      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-semibold text-neutral-500 block mb-2">1 Button:</span>
          <ButtonGroup variant="1-button" firstButtonText="Button" firstButtonIcon={<CheckIcon />} />
        </div>

        <div>
          <span className="text-xs font-semibold text-neutral-500 block mb-2">2 Button (Fill & Border):</span>
          <ButtonGroup
            variant="2-button-fill-border"
            firstButtonText="Primary"
            firstButtonIcon={<CheckIcon />}
            secondButtonText="Secondary"
            secondButtonIcon={<CheckIcon />}
          />
        </div>

        <div>
          <span className="text-xs font-semibold text-neutral-500 block mb-2">2 Button (Link & Border):</span>
          <ButtonGroup
            variant="2-button-link-border"
            firstButtonText="Border Action"
            firstButtonIcon={<CheckIcon />}
            secondButtonText="Link Action"
            secondButtonIcon={<CheckIcon />}
          />
        </div>

        <div>
          <span className="text-xs font-semibold text-neutral-500 block mb-2">2 Button Vertical:</span>
          <ButtonGroup
            variant="2-button-vertical"
            firstButtonText="Top Action"
            firstButtonIcon={<CheckIcon />}
            secondButtonText="Bottom Action"
            secondButtonIcon={<CheckIcon />}
          />
        </div>

        <div>
          <span className="text-xs font-semibold text-neutral-500 block mb-2">Shopping (Price + Action):</span>
          <ButtonGroup
            variant="shopping"
            firstButtonText="Checkout"
            firstButtonIcon={<CheckIcon />}
            priceSubtitle="Pay with cash"
            priceText="$255.00"
          />
        </div>
      </div>

      <h3 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2 mt-6">
        Mobile Variants (lg / 40px, max-w 312px)
      </h3>

      <div className="flex flex-col gap-5">
        <div>
          <span className="text-xs font-semibold text-neutral-500 block mb-2">Mobile 1 Button:</span>
          <ButtonGroup breakpoint="mobile" variant="1-button" firstButtonText="Button" firstButtonIcon={<CheckIcon />} />
        </div>

        <div>
          <span className="text-xs font-semibold text-neutral-500 block mb-2">Mobile 2 Button:</span>
          <ButtonGroup
            breakpoint="mobile"
            variant="2-button-fill-border"
            firstButtonText="Confirm"
            firstButtonIcon={<CheckIcon />}
            secondButtonText="Cancel"
            secondButtonIcon={<CheckIcon />}
          />
        </div>

        <div>
          <span className="text-xs font-semibold text-neutral-500 block mb-2">Mobile Shopping:</span>
          <ButtonGroup
            breakpoint="mobile"
            variant="shopping"
            firstButtonText="Order Now"
            firstButtonIcon={<CheckIcon />}
            priceSubtitle="Total amount"
            priceText="$255.00"
          />
        </div>
      </div>
    </div>
  ),
};
