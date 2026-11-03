import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Sample SVG icons for stories
const PlusIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const TrashIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

const CheckIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      control: 'select',
      options: ['primary', 'brand', 'error', 'neutral'],
      description: 'Button color / intent type',
    },
    buttonStyle: {
      control: 'select',
      options: ['fill', 'border', 'link'],
      description: 'Button visual style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Button sizing',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'clicked', 'focus', 'disabled'],
      description: 'Simulated visual state for previewing',
    },
    disabled: {
      control: 'boolean',
    },
    onlyIcon: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Interactive Playground
export const Playground: Story = {
  args: {
    buttonType: 'brand',
    buttonStyle: 'fill',
    size: 'md',
    children: 'Action Button',
    icon: <PlusIcon />,
  },
};

// 4 Types × Fill
export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button buttonType="primary" buttonStyle="fill">Primary Fill</Button>
      <Button buttonType="brand" buttonStyle="fill">Brand Fill</Button>
      <Button buttonType="error" buttonStyle="fill">Error Fill</Button>
      <Button buttonType="neutral" buttonStyle="fill">Neutral Fill</Button>
    </div>
  ),
};

// 3 Styles (Fill, Border, Link)
export const AllStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4 items-center">
        <span className="w-20 font-bold text-sm text-neutral-500">Brand:</span>
        <Button buttonType="brand" buttonStyle="fill">Fill</Button>
        <Button buttonType="brand" buttonStyle="border">Border</Button>
        <Button buttonType="brand" buttonStyle="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <span className="w-20 font-bold text-sm text-neutral-500">Primary:</span>
        <Button buttonType="primary" buttonStyle="fill">Fill</Button>
        <Button buttonType="primary" buttonStyle="border">Border</Button>
        <Button buttonType="primary" buttonStyle="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <span className="w-20 font-bold text-sm text-neutral-500">Error:</span>
        <Button buttonType="error" buttonStyle="fill">Fill</Button>
        <Button buttonType="error" buttonStyle="border">Border</Button>
        <Button buttonType="error" buttonStyle="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <span className="w-20 font-bold text-sm text-neutral-500">Neutral:</span>
        <Button buttonType="neutral" buttonStyle="fill">Fill</Button>
        <Button buttonType="neutral" buttonStyle="border">Border</Button>
        <Button buttonType="neutral" buttonStyle="link">Link</Button>
      </div>
    </div>
  ),
};

// 5 Sizes: xxl, xl, lg, md, sm
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button buttonType="brand" size="xxl">Size XXL (64px)</Button>
      <Button buttonType="brand" size="xl">Size XL (56px)</Button>
      <Button buttonType="brand" size="lg">Size LG (48px)</Button>
      <Button buttonType="brand" size="md">Size MD (40px)</Button>
      <Button buttonType="brand" size="sm">Size SM (32px)</Button>
    </div>
  ),
};

// 5 States: default, hover, clicked, focus, disabled
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h4 className="font-semibold text-neutral-700">Simulated / Fixed States:</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button buttonType="brand" state="default">Default</Button>
        <Button buttonType="brand" state="hover">Hover</Button>
        <Button buttonType="brand" state="clicked">Clicked (Active)</Button>
        <Button buttonType="brand" state="focus">Focus</Button>
        <Button buttonType="brand" state="disabled">Disabled</Button>
      </div>
      <h4 className="font-semibold text-neutral-700 mt-4">Border Style States:</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button buttonType="brand" buttonStyle="border" state="default">Default</Button>
        <Button buttonType="brand" buttonStyle="border" state="hover">Hover</Button>
        <Button buttonType="brand" buttonStyle="border" state="clicked">Clicked</Button>
        <Button buttonType="brand" buttonStyle="border" state="focus">Focus</Button>
        <Button buttonType="brand" buttonStyle="border" state="disabled">Disabled</Button>
      </div>
      <h4 className="font-semibold text-neutral-700 mt-4">Link Style States:</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button buttonType="brand" buttonStyle="link" state="default">Default</Button>
        <Button buttonType="brand" buttonStyle="link" state="hover">Hover</Button>
        <Button buttonType="brand" buttonStyle="link" state="clicked">Clicked</Button>
        <Button buttonType="brand" buttonStyle="link" state="focus">Focus</Button>
        <Button buttonType="brand" buttonStyle="link" state="disabled">Disabled</Button>
      </div>
    </div>
  ),
};

// Buttons with Icons (leading, trailing, both)
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button buttonType="brand" icon={<PlusIcon />}>Leading Icon</Button>
      <Button buttonType="brand" icon={<ArrowRightIcon />} iconPosition="right">Trailing Icon</Button>
      <Button buttonType="brand" icon={<CheckIcon />} trailingIcon={<ArrowRightIcon />}>Both Icons</Button>
      <Button buttonType="error" buttonStyle="border" icon={<TrashIcon />}>Delete Item</Button>
    </div>
  ),
};

// Icon-Only Buttons across all 5 sizes
export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <Button buttonType="brand" size="xxl" icon={<PlusIcon />} onlyIcon aria-label="Add XXL" />
        <Button buttonType="brand" size="xl" icon={<PlusIcon />} onlyIcon aria-label="Add XL" />
        <Button buttonType="brand" size="lg" icon={<PlusIcon />} onlyIcon aria-label="Add LG" />
        <Button buttonType="brand" size="md" icon={<PlusIcon />} onlyIcon aria-label="Add MD" />
        <Button buttonType="brand" size="sm" icon={<PlusIcon />} onlyIcon aria-label="Add SM" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button buttonType="brand" buttonStyle="border" size="lg" icon={<CheckIcon />} onlyIcon aria-label="Confirm" />
        <Button buttonType="error" buttonStyle="border" size="lg" icon={<TrashIcon />} onlyIcon aria-label="Delete" />
        <Button buttonType="neutral" buttonStyle="border" size="lg" icon={<ArrowRightIcon />} onlyIcon aria-label="Next" />
      </div>
    </div>
  ),
};
