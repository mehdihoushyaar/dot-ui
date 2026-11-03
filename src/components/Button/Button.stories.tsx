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
      description: 'DotOne button type: primary (neutral/900), brand (brand/600), error (error/600), neutral',
    },
    buttonStyle: {
      control: 'select',
      options: ['fill', 'border', 'link'],
      description: 'Button visual style: fill, border, link',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Button sizing: sm (24px), md (32px), lg (40px), xl (48px), xxl (56px)',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'clicked', 'focus', 'disabled'],
      description: 'Simulated visual state for previewing',
    },
    disabled: {
      control: 'boolean',
    },
    justIcon: {
      control: 'boolean',
      description: 'Square icon-only button per DotOne specification',
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
        <span className="w-24 shrink-0 font-bold text-sm text-neutral-500">Brand:</span>
        <Button buttonType="brand" buttonStyle="fill">Fill</Button>
        <Button buttonType="brand" buttonStyle="border">Border</Button>
        <Button buttonType="brand" buttonStyle="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <span className="w-24 shrink-0 font-bold text-sm text-neutral-500">Primary:</span>
        <Button buttonType="primary" buttonStyle="fill">Fill</Button>
        <Button buttonType="primary" buttonStyle="border">Border</Button>
        <Button buttonType="primary" buttonStyle="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <span className="w-24 shrink-0 font-bold text-sm text-neutral-500">Error:</span>
        <Button buttonType="error" buttonStyle="fill">Fill</Button>
        <Button buttonType="error" buttonStyle="border">Border</Button>
        <Button buttonType="error" buttonStyle="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <span className="w-24 shrink-0 font-bold text-sm text-neutral-500">Neutral:</span>
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
      <Button buttonType="brand" size="xxl">Size XXL (56px)</Button>
      <Button buttonType="brand" size="xl">Size XL (48px)</Button>
      <Button buttonType="brand" size="lg">Size LG (40px)</Button>
      <Button buttonType="brand" size="md">Size MD (32px)</Button>
      <Button buttonType="brand" size="sm">Size SM (24px)</Button>
    </div>
  ),
};

// 5 States: default, hover, clicked, focus, disabled
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h4 className="font-semibold text-neutral-700">Brand Button States:</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button buttonType="brand" state="default">Default</Button>
        <Button buttonType="brand" state="hover">Hover</Button>
        <Button buttonType="brand" state="clicked">Clicked (Active)</Button>
        <Button buttonType="brand" state="focus">Focus</Button>
        <Button buttonType="brand" state="disabled">Disabled</Button>
      </div>

      <h4 className="font-semibold text-neutral-700 mt-4">Primary Button States:</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button buttonType="primary" state="default">Default</Button>
        <Button buttonType="primary" state="hover">Hover</Button>
        <Button buttonType="primary" state="clicked">Clicked</Button>
        <Button buttonType="primary" state="focus">Focus</Button>
        <Button buttonType="primary" state="disabled">Disabled</Button>
      </div>

      <h4 className="font-semibold text-neutral-700 mt-4">Error (Destructive) Button States:</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button buttonType="error" state="default">Default</Button>
        <Button buttonType="error" state="hover">Hover</Button>
        <Button buttonType="error" state="clicked">Clicked</Button>
        <Button buttonType="error" state="focus">Focus</Button>
        <Button buttonType="error" state="disabled">Disabled</Button>
      </div>
    </div>
  ),
};

// Sub-Brands (Trip, Gold, SuperApp, Sell, Media, Logistics, Trading, Systems)
export const SubBrandThemes: Story = {
  render: () => {
    const brands: Array<{ id: string; label: string }> = [
      { id: 'trip', label: 'Trip (Cyan / Teal)' },
      { id: 'gold', label: 'Gold (Amber / Ochre)' },
      { id: 'superapp', label: 'SuperApp (Charcoal / Gray)' },
      { id: 'sell', label: 'Sell (Coral / Orange)' },
      { id: 'media', label: 'Media (Crimson / Magenta)' },
      { id: 'logistics', label: 'Logistics (Green / Mint)' },
      { id: 'trading', label: 'Trading (Navy / Indigo)' },
      { id: 'systems', label: 'Systems (Lime / Olive)' },
    ];

    return (
      <div className="flex flex-col gap-5">
        {brands.map(({ id, label }) => (
          <div key={id} data-brand={id} className="flex items-center gap-4 p-3 rounded-lg border border-neutral-200">
            <span className="w-56 font-medium text-sm text-neutral-700">{label}</span>
            <Button buttonType="brand" buttonStyle="fill">Fill</Button>
            <Button buttonType="brand" buttonStyle="border">Border</Button>
            <Button buttonType="brand" buttonStyle="link">Link</Button>
            <Button buttonType="brand" size="sm" icon={<PlusIcon />} justIcon aria-label="Add" />
          </div>
        ))}
      </div>
    );
  },
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
        <Button buttonType="brand" size="xxl" icon={<PlusIcon />} justIcon aria-label="Add XXL" />
        <Button buttonType="brand" size="xl" icon={<PlusIcon />} justIcon aria-label="Add XL" />
        <Button buttonType="brand" size="lg" icon={<PlusIcon />} justIcon aria-label="Add LG" />
        <Button buttonType="brand" size="md" icon={<PlusIcon />} justIcon aria-label="Add MD" />
        <Button buttonType="brand" size="sm" icon={<PlusIcon />} justIcon aria-label="Add SM" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button buttonType="brand" buttonStyle="border" size="lg" icon={<CheckIcon />} justIcon aria-label="Confirm" />
        <Button buttonType="error" buttonStyle="border" size="lg" icon={<TrashIcon />} justIcon aria-label="Delete" />
        <Button buttonType="neutral" buttonStyle="border" size="lg" icon={<ArrowRightIcon />} justIcon aria-label="Next" />
      </div>
    </div>
  ),
};

// Full DotOne Design System Matrix matching Figma specification
export const DotOneMatrix: Story = {
  render: () => {
    const types: Array<'primary' | 'brand' | 'error' | 'neutral'> = ['primary', 'brand', 'error', 'neutral'];
    const styles: Array<'fill' | 'border' | 'link'> = ['fill', 'border', 'link'];
    const sizes: Array<'xxl' | 'xl' | 'lg' | 'md' | 'sm'> = ['xxl', 'xl', 'lg', 'md', 'sm'];
    const states: Array<'default' | 'hover' | 'focus' | 'clicked' | 'disabled'> = ['default', 'hover', 'focus', 'clicked', 'disabled'];

    return (
      <div className="p-4 bg-white overflow-x-auto space-y-12">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 mb-1">DotOne Button System Specification</h2>
          <p className="text-sm text-neutral-500 mb-6">Complete matrix showing all types, styles, sizes, and interactive states.</p>
        </div>

        {sizes.map((size) => (
          <div key={size} className="space-y-4 border-b border-neutral-100 pb-8">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-bold uppercase rounded-xs bg-neutral-900 text-white">Size: {size.toUpperCase()}</span>
              <span className="text-xs text-neutral-400">
                {size === 'xxl' && '56px height · 16px radius · 18px text'}
                {size === 'xl' && '48px height · 16px radius · 16px text'}
                {size === 'lg' && '40px height · 12px radius · 14px text'}
                {size === 'md' && '32px height · 8px radius · 12px text'}
                {size === 'sm' && '24px height · 8px radius · 10px text'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {types.map((t) => (
                <div key={t} className="p-4 rounded-sm border border-neutral-200 bg-neutral-50/50 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 border-b border-neutral-200 pb-2">{t}</h4>
                  
                  {styles.map((s) => (
                    <div key={s} className="space-y-2">
                      <div className="text-[11px] font-medium text-neutral-400 uppercase tracking-wide">{s}</div>
                      <div className="flex flex-wrap gap-2 items-center">
                        {states.map((st) => (
                          <Button
                            key={st}
                            buttonType={t}
                            buttonStyle={s}
                            size={size}
                            state={st}
                            icon={<CheckIcon />}
                          >
                            Button
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
