import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

interface SpacingStep {
  token: number;
  px: number;
  rem: string;
  tailwind: string;
  usage: string;
}

const spacingSteps: SpacingStep[] = [
  { token: 0, px: 0, rem: '0rem', tailwind: 'p-0 / gap-0', usage: 'Zero spacing / reset' },
  { token: 4, px: 4, rem: '0.25rem', tailwind: 'p-1 / gap-1', usage: 'Micro spacing: inline icon & text, badges' },
  { token: 8, px: 8, rem: '0.5rem', tailwind: 'p-2 / gap-2', usage: 'Tight element gap: button icon & text, dot badges' },
  { token: 12, px: 12, rem: '0.75rem', tailwind: 'p-3 / gap-3', usage: 'Small control padding, label to input gap' },
  { token: 16, px: 16, rem: '1rem', tailwind: 'p-4 / gap-4', usage: 'Default control padding, standard field gap' },
  { token: 20, px: 20, rem: '1.25rem', tailwind: 'p-5 / gap-5', usage: 'Gap between larger input controls' },
  { token: 24, px: 24, rem: '1.5rem', tailwind: 'p-6 / gap-6', usage: 'Card padding, component group spacing' },
  { token: 28, px: 28, rem: '1.75rem', tailwind: 'p-7 / gap-7', usage: 'Card padding, extended component gap' },
  { token: 32, px: 32, rem: '2rem', tailwind: 'p-8 / gap-8', usage: 'Small section gap, modular cards' },
  { token: 36, px: 36, rem: '2.25rem', tailwind: 'p-9 / gap-9', usage: 'Component block spacing' },
  { token: 40, px: 40, rem: '2.5rem', tailwind: 'p-10 / gap-10', usage: 'Medium section spacing, tablet margins' },
  { token: 44, px: 44, rem: '2.75rem', tailwind: 'p-11 / gap-11', usage: 'Section separation' },
  { token: 48, px: 48, rem: '3rem', tailwind: 'p-12 / gap-12', usage: 'Major content section gap' },
  { token: 56, px: 56, rem: '3.5rem', tailwind: 'p-14 / gap-14', usage: 'Large section spacing' },
  { token: 64, px: 64, rem: '4rem', tailwind: 'p-16 / gap-16', usage: 'Major page section separation' },
  { token: 72, px: 72, rem: '4.5rem', tailwind: 'p-18 / gap-18', usage: 'Extended block gap' },
  { token: 80, px: 80, rem: '5rem', tailwind: 'p-20 / gap-20', usage: 'Landing page block gap' },
  { token: 88, px: 88, rem: '5.5rem', tailwind: 'p-22 / gap-22', usage: 'Large layout spacing' },
  { token: 96, px: 96, rem: '6rem', tailwind: 'p-24 / gap-24', usage: 'Landing page section gap' },
  { token: 112, px: 112, rem: '7rem', tailwind: 'p-28 / gap-28', usage: 'Desktop page margins & hero spacing' },
  { token: 128, px: 128, rem: '8rem', tailwind: 'p-32 / gap-32', usage: 'Wide layout containers' },
  { token: 144, px: 144, rem: '9rem', tailwind: 'p-36 / gap-36', usage: 'Extended hero spacing' },
  { token: 160, px: 160, rem: '10rem', tailwind: 'p-40 / gap-40', usage: 'Wide page blocks' },
  { token: 192, px: 192, rem: '12rem', tailwind: 'p-48 / gap-48', usage: 'Major landing sections' },
  { token: 208, px: 208, rem: '13rem', tailwind: 'p-52 / gap-52', usage: 'Ultra-wide hero spacing' },
  { token: 224, px: 224, rem: '14rem', tailwind: 'p-56 / gap-56', usage: 'Ultra-wide hero spacing' },
  { token: 240, px: 240, rem: '15rem', tailwind: 'p-60 / gap-60', usage: 'Large container boundary' },
  { token: 256, px: 256, rem: '16rem', tailwind: 'p-64 / gap-64', usage: 'Full-bleed layout spacing' },
  { token: 288, px: 288, rem: '18rem', tailwind: 'p-72 / gap-72', usage: 'Large background spacing' },
  { token: 320, px: 320, rem: '20rem', tailwind: 'p-80 / gap-80', usage: 'Extended page bounds' },
  { token: 384, px: 384, rem: '24rem', tailwind: 'p-96 / gap-96', usage: 'Maximum layout boundary' },
];

// 1. All 31 Spacing Steps
export const AllSpacingSteps: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-6xl">
      <div className="border-b border-neutral-200 pb-3">
        <h2 className="text-2xl font-bold text-neutral-900">Spacing Scale (4px Grid - 31 Steps)</h2>
        <p className="text-sm text-neutral-600 mt-1">
          DotOne spacing is strictly based on a 4-pixel grid system. All values are direct multiples of 4px.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-semibold">
              <th className="py-3 px-4 w-28">Token</th>
              <th className="py-3 px-4 w-24">Pixels</th>
              <th className="py-3 px-4 w-24">Rem</th>
              <th className="py-3 px-4 w-32">Tailwind</th>
              <th className="py-3 px-4">Visual Scale</th>
              <th className="py-3 px-4">Recommended Usage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {spacingSteps.map((s) => (
              <tr key={s.token} className="hover:bg-neutral-50/50">
                <td className="py-3 px-4 font-mono font-bold text-neutral-900">Spacing/{s.token}</td>
                <td className="py-3 px-4 font-mono text-neutral-700">{s.px}px</td>
                <td className="py-3 px-4 font-mono text-brand-600">{s.rem}</td>
                <td className="py-3 px-4 font-mono text-xs text-neutral-500">{s.tailwind}</td>
                <td className="py-3 px-4 min-w-[200px]">
                  <div
                    className="h-4 rounded bg-brand-600/80 transition-all hover:bg-brand-600"
                    style={{ width: `${Math.min(s.px, 240)}px`, minWidth: s.px > 0 ? '4px' : '0' }}
                    title={`${s.px}px`}
                  />
                </td>
                <td className="py-3 px-4 text-xs text-neutral-600">{s.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
};

// 2. Core Spacings
export const CoreSpacings: Story = {
  render: () => {
    const core = [
      { token: 4, px: 4, label: 'Micro (4px)', desc: 'Inline badges & icon-text micro offsets' },
      { token: 8, px: 8, label: 'Tight (8px)', desc: 'Button icon-text gap & badge dot spacing' },
      { token: 12, px: 12, label: 'Compact (12px)', desc: 'Small control padding & input label offsets' },
      { token: 16, px: 16, label: 'Default (16px)', desc: 'Standard control padding & form field gap' },
      { token: 20, px: 20, label: 'Medium (20px)', desc: 'Large input padding & control offsets' },
      { token: 24, px: 24, label: 'Large (24px)', desc: 'Card body padding & component groups' },
      { token: 32, px: 32, label: 'Section (32px)', desc: 'Card separation & small section gap' },
      { token: 48, px: 48, label: 'Major (48px)', desc: 'Major page section & layout block gap' },
    ];

    return (
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900">Core Spacing Tokens</h2>
          <p className="text-sm text-neutral-600 mt-1">
            The most frequently used spacing increments in UI layout and component architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {core.map((c) => (
            <div key={c.token} className="p-4 bg-white rounded-xl border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono font-bold text-base text-neutral-900">{c.px}px</span>
                  <span className="text-xs font-mono text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded">
                    Spacing/{c.token}
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-800">{c.label}</p>
                <p className="text-[11px] text-neutral-500 mt-1">{c.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2">
                <div className="bg-brand-600 rounded" style={{ width: `${c.px}px`, height: `${c.px}px` }} />
                <span className="text-[10px] font-mono text-neutral-400">scale {c.px}×{c.px}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// 3. Layout Grid & Page Breakpoints
export const LayoutGridAndBreakpoints: Story = {
  render: () => {
    const breakpoints = [
      {
        name: 'Mobile',
        width: '360px',
        columns: 4,
        gutter: '16px (Spacing/16)',
        margin: '24px (Spacing/24)',
        desc: 'Single-column mobile viewports',
      },
      {
        name: 'Tablet',
        width: '768px',
        columns: 6,
        gutter: '24px (Spacing/24)',
        margin: '40px (Spacing/40)',
        desc: 'Tablet & medium portrait viewports',
      },
      {
        name: 'Desktop',
        width: '1440px',
        columns: 12,
        gutter: '32px (Spacing/32)',
        margin: '112px (Spacing/112)',
        desc: 'Standard desktop screens & wide dashboards',
      },
    ];

    return (
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900">Layout Grid & Page Margins</h2>
          <p className="text-sm text-neutral-600 mt-1">
            Exact layout grid columns, gutters, and page margins defined for each viewport size in DotOne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {breakpoints.map((b) => (
            <div key={b.name} className="p-5 bg-white rounded-xl border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2 mb-3">
                  <h4 className="font-bold text-lg text-neutral-900">{b.name}</h4>
                  <span className="text-xs font-mono font-bold text-brand-600">{b.width}</span>
                </div>
                <div className="flex flex-col gap-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-50">
                    <span className="text-neutral-500">Columns:</span>
                    <span className="font-bold text-neutral-900">{b.columns} Columns</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-50">
                    <span className="text-neutral-500">Column Gutter:</span>
                    <span className="font-mono font-semibold text-neutral-800">{b.gutter}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-500">Page Margin:</span>
                    <span className="font-mono font-semibold text-neutral-800">{b.margin}</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-neutral-400 mt-4 pt-2 border-t border-neutral-100">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// 4. Framework Comparison
export const FrameworkComparison: Story = {
  render: () => {
    const comparisons = [
      { spacing: 'Spacing/0', bootstrap: '0', tailwind: 'p-0 / m-0', material: '0dp', px: '0px' },
      { spacing: 'Spacing/4', bootstrap: '1 (0.25rem)', tailwind: 'p-1 / m-1', material: '4dp', px: '4px' },
      { spacing: 'Spacing/8', bootstrap: '2 (0.5rem)', tailwind: 'p-2 / m-2', material: '8dp', px: '8px' },
      { spacing: 'Spacing/16', bootstrap: '3 (1rem)', tailwind: 'p-4 / m-4', material: '16dp', px: '16px' },
      { spacing: 'Spacing/24', bootstrap: '4 (1.5rem)', tailwind: 'p-6 / m-6', material: '24dp', px: '24px' },
      { spacing: 'Spacing/48', bootstrap: '5 (3rem)', tailwind: 'p-12 / m-12', material: '48dp', px: '48px' },
    ];

    return (
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900">Framework Mapping Comparison</h2>
          <p className="text-sm text-neutral-600 mt-1">
            How DotOne 4px spacing maps directly to standard Bootstrap, Tailwind CSS, and Material Design systems.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-semibold">
                <th className="py-3 px-4">DotOne Spacing</th>
                <th className="py-3 px-4">Pixels</th>
                <th className="py-3 px-4">Tailwind CSS</th>
                <th className="py-3 px-4">Bootstrap</th>
                <th className="py-3 px-4">Material Design</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {comparisons.map((c) => (
                <tr key={c.spacing} className="hover:bg-neutral-50/50">
                  <td className="py-3 px-4 font-mono font-bold text-neutral-900">{c.spacing}</td>
                  <td className="py-3 px-4 font-mono text-brand-600">{c.px}</td>
                  <td className="py-3 px-4 font-mono text-neutral-700">{c.tailwind}</td>
                  <td className="py-3 px-4 text-neutral-600">{c.bootstrap}</td>
                  <td className="py-3 px-4 text-neutral-600">{c.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};

