import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Radius',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

interface RadiusStep {
  token: string;
  px: number;
  rem: string;
  variable: string;
  tailwind: string;
  bootstrap: string;
  components: string;
  description: string;
}

const radiusSteps: RadiusStep[] = [
  {
    token: 'none',
    px: 0,
    rem: '0rem',
    variable: '--radius-none',
    tailwind: 'rounded-none',
    bootstrap: 'rounded-0',
    components: 'Square cards, flush layout borders',
    description: 'No border radius (sharp 90-degree corners)',
  },
  {
    token: '2xs',
    px: 4,
    rem: '0.25rem',
    variable: '--radius-2xs',
    tailwind: 'rounded-2xs',
    bootstrap: 'rounded-1',
    components: 'Checkbox, Radio (outer container), Micro indicators',
    description: 'Subtle rounding for micro components',
  },
  {
    token: 'xs',
    px: 8,
    rem: '0.5rem',
    variable: '--radius-xs',
    tailwind: 'rounded-xs',
    bootstrap: 'rounded-2',
    components: 'Small Buttons (sm 24px, md 32px), Alerts, Date picker dropdowns',
    description: 'Compact rounding for compact controls and alerts',
  },
  {
    token: 'sm',
    px: 12,
    rem: '0.75rem',
    variable: '--radius-sm',
    tailwind: 'rounded-sm',
    bootstrap: '-',
    components: 'Standard Buttons (lg 40px), Form Inputs, Dropdown Menus',
    description: 'Standard rounding for form inputs and default buttons',
  },
  {
    token: 'md',
    px: 16,
    rem: '1rem',
    variable: '--radius-md',
    tailwind: 'rounded-md',
    bootstrap: 'rounded-3',
    components: 'Large Buttons (xl 48px, xxl 56px), Tabs, Badges, Tooltips, Pagination',
    description: 'Moderate rounding for larger controls, badges, and tabs',
  },
  {
    token: 'lg',
    px: 32,
    rem: '2rem',
    variable: '--radius-lg',
    tailwind: 'rounded-lg',
    bootstrap: 'rounded-4',
    components: 'Cards, Modals, Floating Panels, Popovers',
    description: 'Prominent rounding for containers and card surfaces',
  },
  {
    token: 'xl',
    px: 40,
    rem: '2.5rem',
    variable: '--radius-xl',
    tailwind: 'rounded-xl',
    bootstrap: '-',
    components: 'Reserved for specialized large container overlays',
    description: 'Expressive large radius for featured elements',
  },
  {
    token: '2xl',
    px: 48,
    rem: '3rem',
    variable: '--radius-2xl',
    tailwind: 'rounded-2xl',
    bootstrap: '-',
    components: 'Reserved for major layout panels',
    description: 'Maximum container curvature',
  },
  {
    token: 'full',
    px: 9999,
    rem: '9999px',
    variable: '--radius-full',
    tailwind: 'rounded-full',
    bootstrap: 'rounded-pill',
    components: 'Pill Buttons, Circular Avatars, Radio Toggles, Status Dots',
    description: 'Complete pill capsule or circular geometry',
  },
];

// 1. All Radius Steps Table & Visual Curves
export const AllRadiusSteps: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-6xl">
      <div className="border-b border-neutral-200 pb-3">
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Border Radius Tokens</h2>
        <p className="text-sm text-neutral-500 mt-1">
          DotOne Design System corner radius specifications. Multiples of 4px designed for balanced, friendly UI geometry.
        </p>
      </div>

      <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white shadow-xs">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-600 font-semibold">
              <th className="py-3 px-4">Token</th>
              <th className="py-3 px-4">Pixels</th>
              <th className="py-3 px-4">REM</th>
              <th className="py-3 px-4">CSS Variable</th>
              <th className="py-3 px-4">Tailwind Utility</th>
              <th className="py-3 px-4 min-w-[200px]">Visual Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 font-normal text-neutral-700">
            {radiusSteps.map((step) => {
              const radiusStyle = step.token === 'full' ? '9999px' : `${step.px}px`;
              return (
                <tr key={step.token} className="hover:bg-neutral-50/50 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-neutral-900">{step.token}</td>
                  <td className="py-3 px-4 font-mono font-medium">{step.px === 9999 ? 'Full' : `${step.px}px`}</td>
                  <td className="py-3 px-4 font-mono text-neutral-500">{step.rem}</td>
                  <td className="py-3 px-4 font-mono text-xs text-brand-700 bg-brand-50/50 px-2 py-0.5 rounded-2xs inline-block my-2">
                    {step.variable}
                  </td>
                  <td className="py-3 px-4 font-mono text-xs text-neutral-600">{step.tailwind}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      {/* Visual top-right corner card matching Figma board */}
                      <div
                        className="w-16 h-12 bg-neutral-100 border-2 border-neutral-300 transition-all flex items-center justify-center"
                        style={{
                          borderTopRightRadius: radiusStyle,
                        }}
                      >
                        <span className="text-[10px] text-neutral-400 font-mono">Corner</span>
                      </div>
                      {/* Visual 4-corner pill/box */}
                      <div
                        className="w-14 h-8 bg-brand-50 border border-brand-300 transition-all flex items-center justify-center"
                        style={{
                          borderRadius: radiusStyle,
                        }}
                      >
                        <span className="text-[9px] text-brand-700 font-semibold">{step.token}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ),
};

// 2. Designer & Developer Guide Matrix
export const RadiusGuide: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-6xl">
      <div className="border-b border-neutral-200 pb-3">
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Radius Guidelines</h2>
        <p className="text-sm text-neutral-500 mt-1">
          Semantic component roles and framework alignment guide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-md border border-neutral-200 bg-white space-y-4 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
            <h3 className="text-base font-bold text-neutral-900">Component Applications</h3>
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Ensure consistent visual rhythm by adhering to proportional nesting rules (inner radius = outer radius - padding).
          </p>

          <div className="divide-y divide-neutral-100 text-sm">
            {radiusSteps.map((s) => (
              <div key={s.token} className="py-2.5 flex items-start justify-between gap-4">
                <span className="font-mono font-bold text-neutral-800 text-xs w-16 shrink-0">{s.token} ({s.px === 9999 ? 'Full' : `${s.px}px`})</span>
                <span className="text-neutral-600 text-xs flex-1">{s.components}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-md border border-neutral-200 bg-white space-y-4 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-800"></span>
            <h3 className="text-base font-bold text-neutral-900">Framework Mapping</h3>
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Direct mapping of DotOne tokens against Tailwind v4 and Bootstrap utility conventions.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-600 font-semibold">
                  <th className="py-2 px-3">DotOne Token</th>
                  <th className="py-2 px-3">Bootstrap</th>
                  <th className="py-2 px-3">Tailwind v4</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-700 font-mono">
                {radiusSteps.map((s) => (
                  <tr key={s.token} className="hover:bg-neutral-50/50">
                    <td className="py-2 px-3 font-bold">{s.token} ({s.px === 9999 ? 'Full' : `${s.px}px`})</td>
                    <td className="py-2 px-3 text-neutral-500">{s.bootstrap}</td>
                    <td className="py-2 px-3 text-brand-700 font-medium">{s.tailwind}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ),
};

// 3. Interactive Visual Card Sandbox
export const RadiusCardsVisual: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-6xl">
      <div className="border-b border-neutral-200 pb-3">
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Visual Radius Showcase</h2>
        <p className="text-sm text-neutral-500 mt-1">
          Comparison of container rounding across components and surfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {radiusSteps.map((step) => {
          const style = step.token === 'full' ? '9999px' : `${step.px}px`;
          return (
            <div
              key={step.token}
              className="p-5 border border-neutral-200 bg-white flex flex-col justify-between shadow-xs transition-shadow hover:shadow-md"
              style={{ borderRadius: style }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm font-bold text-neutral-900 uppercase">{step.token}</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                    {step.px === 9999 ? 'Full' : `${step.px}px`}
                  </span>
                </div>
                <p className="text-xs text-neutral-500">{step.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <code className="text-[11px] font-mono text-brand-700">{step.tailwind}</code>
                <div
                  className="w-6 h-6 bg-brand-600 shrink-0"
                  style={{ borderRadius: style }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
};

