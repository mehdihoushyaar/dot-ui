import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

interface TypoItem {
  name: string;
  className: string;
  sizePx: number;
  sizeRem: string;
  lineHeightPx: number;
  lineHeightRem: string;
  usage: string;
}

const typoScale: TypoItem[] = [
  {
    name: 'H1',
    className: 'text-h1',
    sizePx: 72,
    sizeRem: '4.5rem',
    lineHeightPx: 116,
    lineHeightRem: '7.25rem',
    usage: 'Hero title & landing page headers',
  },
  {
    name: 'H2',
    className: 'text-h2',
    sizePx: 60,
    sizeRem: '3.75rem',
    lineHeightPx: 96,
    lineHeightRem: '6rem',
    usage: 'Large section headings',
  },
  {
    name: 'H3',
    className: 'text-h3',
    sizePx: 48,
    sizeRem: '3rem',
    lineHeightPx: 76,
    lineHeightRem: '4.75rem',
    usage: 'Section headings',
  },
  {
    name: 'H4',
    className: 'text-h4',
    sizePx: 36,
    sizeRem: '2.25rem',
    lineHeightPx: 58,
    lineHeightRem: '3.625rem',
    usage: 'Large cards & modal headers',
  },
  {
    name: 'H5',
    className: 'text-h5',
    sizePx: 30,
    sizeRem: '1.875rem',
    lineHeightPx: 48,
    lineHeightRem: '3rem',
    usage: 'In-app page titles',
  },
  {
    name: 'H6',
    className: 'text-h6',
    sizePx: 24,
    sizeRem: '1.5rem',
    lineHeightPx: 38,
    lineHeightRem: '2.375rem',
    usage: 'Card titles & modal headers',
  },
  {
    name: 'Subheadline',
    className: 'text-subheadline',
    sizePx: 20,
    sizeRem: '1.25rem',
    lineHeightPx: 32,
    lineHeightRem: '2rem',
    usage: 'Subheadings and introductory text',
  },
  {
    name: 'Body large',
    className: 'text-body-lg',
    sizePx: 18,
    sizeRem: '1.125rem',
    lineHeightPx: 28,
    lineHeightRem: '1.75rem',
    usage: 'Readable long-form body content & XXL buttons',
  },
  {
    name: 'Body small',
    className: 'text-body-sm',
    sizePx: 16,
    sizeRem: '1rem',
    lineHeightPx: 26,
    lineHeightRem: '1.625rem',
    usage: 'Default interface body text & XL buttons',
  },
  {
    name: 'Caption large',
    className: 'text-caption-lg',
    sizePx: 14,
    sizeRem: '0.875rem',
    lineHeightPx: 22,
    lineHeightRem: '1.375rem',
    usage: 'Form labels, short descriptions & LG buttons',
  },
  {
    name: 'Caption small',
    className: 'text-caption-sm',
    sizePx: 12,
    sizeRem: '0.75rem',
    lineHeightPx: 20,
    lineHeightRem: '1.25rem',
    usage: 'Input hints, dense tables & MD buttons',
  },
  {
    name: 'Caption xs',
    className: 'text-caption-xs',
    sizePx: 10,
    sizeRem: '0.625rem',
    lineHeightPx: 16,
    lineHeightRem: '1rem',
    usage: 'Badges, counters & SM buttons',
  },
  {
    name: 'Caption xxs',
    className: 'text-caption-xxs',
    sizePx: 8,
    sizeRem: '0.5rem',
    lineHeightPx: 12,
    lineHeightRem: '0.75rem',
    usage: 'Micro counters and single symbols',
  },
];

// 1. Complete Typography Scale
export const AllTypographyStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-6xl">
      <div className="border-b border-neutral-200 pb-3">
        <h2 className="text-2xl font-bold text-neutral-900">Typography Scale (13 Styles)</h2>
        <p className="text-sm text-neutral-600 mt-1">
          Exact typography tokens from the DotOne design system. Each style features fixed pixel/rem sizes, line heights, and letter-spacing (0%).
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {typoScale.map((item) => (
          <div
            key={item.name}
            className="flex flex-col md:flex-row items-baseline justify-between p-5 rounded-xl bg-white border border-neutral-200 shadow-sm gap-4"
          >
            <div className="flex flex-col min-w-[200px] shrink-0">
              <span className="text-base font-bold text-neutral-900">{item.name}</span>
              <span className="text-xs font-mono text-brand-600">
                {item.sizePx}px ({item.sizeRem}) / {item.lineHeightPx}px ({item.lineHeightRem})
              </span>
              <span className="text-[11px] text-neutral-500 mt-1">{item.usage}</span>
            </div>

            <div className="flex-1 w-full overflow-hidden">
              <p className={`${item.className} font-semibold text-neutral-900 truncate`}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// 2. Font Weights
export const FontWeights: Story = {
  render: () => {
    const weights = [
      { name: 'Regular', weight: 400, className: 'font-normal' },
      { name: 'Medium', weight: 500, className: 'font-medium' },
      { name: 'SemiBold (DemiBold)', weight: 600, className: 'font-semibold' },
      { name: 'Bold', weight: 700, className: 'font-bold' },
      { name: 'Black', weight: 900, className: 'font-black' },
      { name: 'Heavy', weight: 1000, className: 'font-black tracking-tight' },
    ];

    return (
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900">Font Weights (6 Weights)</h2>
          <p className="text-sm text-neutral-600 mt-1">
            Available font weights for all 13 typography groups (13 groups × 6 weights = 78 total styles).
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {weights.map((w) => (
            <div
              key={w.name}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-neutral-200 shadow-sm"
            >
              <div className="flex flex-col w-48 shrink-0">
                <span className="text-sm font-bold text-neutral-900">{w.name}</span>
                <span className="text-xs font-mono text-neutral-500">Weight: {w.weight}</span>
              </div>
              <p className={`text-xl ${w.className} text-neutral-900 flex-1 truncate`}>
                Pack my box with five dozen liquor jugs ({w.weight})
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// 3. Button Typography Mapping
export const ButtonTypographyMapping: Story = {
  render: () => {
    const mappings = [
      {
        buttonSize: 'sm (24px height)',
        typoStyle: 'Caption xs / SemiBold',
        fontSize: '10px (0.625rem)',
        lineHeight: '16px (1rem)',
        weight: '600 (SemiBold)',
        exampleText: 'Action SM',
      },
      {
        buttonSize: 'md (32px height)',
        typoStyle: 'Caption small / SemiBold',
        fontSize: '12px (0.75rem)',
        lineHeight: '20px (1.25rem)',
        weight: '600 (SemiBold)',
        exampleText: 'Action MD',
      },
      {
        buttonSize: 'lg (40px height)',
        typoStyle: 'Caption large / SemiBold',
        fontSize: '14px (0.875rem)',
        lineHeight: '22px (1.375rem)',
        weight: '600 (SemiBold)',
        exampleText: 'Action LG',
      },
      {
        buttonSize: 'xl (48px height)',
        typoStyle: 'Body small / SemiBold',
        fontSize: '16px (1rem)',
        lineHeight: '26px (1.625rem)',
        weight: '600 (SemiBold)',
        exampleText: 'Action XL',
      },
      {
        buttonSize: 'xxl (56px height)',
        typoStyle: 'Body large / SemiBold',
        fontSize: '18px (1.125rem)',
        lineHeight: '28px (1.75rem)',
        weight: '600 (SemiBold)',
        exampleText: 'Action XXL',
      },
    ];

    return (
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900">Button Typography Mapping</h2>
          <p className="text-sm text-neutral-600 mt-1">
            Exact typography connections specified in the DotOne button component guidelines.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-semibold">
                <th className="py-3 px-4">Button Size</th>
                <th className="py-3 px-4">Typography Style</th>
                <th className="py-3 px-4">Font Size</th>
                <th className="py-3 px-4">Line Height</th>
                <th className="py-3 px-4">Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {mappings.map((m) => (
                <tr key={m.buttonSize} className="hover:bg-neutral-50/50">
                  <td className="py-3.5 px-4 font-bold text-neutral-900">{m.buttonSize}</td>
                  <td className="py-3.5 px-4 font-semibold text-brand-600">{m.typoStyle}</td>
                  <td className="py-3.5 px-4 font-mono text-neutral-700">{m.fontSize}</td>
                  <td className="py-3.5 px-4 font-mono text-neutral-700">{m.lineHeight}</td>
                  <td className="py-3.5 px-4 text-neutral-600">{m.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};

