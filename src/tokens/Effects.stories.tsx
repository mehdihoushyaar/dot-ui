import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Effects',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

// 1. Shadows Showcase (matching Figma screenshot)
export const Shadows: Story = {
  render: () => {
    const shadowItems = [
      { name: 'Shadow xs', token: 'shadow-xs', css: '0 1px 2px 0 rgba(10, 10, 10, 0.05)', desc: 'Micro components, subtle buttons' },
      { name: 'Shadow sm', token: 'shadow-sm', css: '0 1px 2px 0 rgba(10, 10, 10, 0.10)', desc: 'Standard buttons, interactive badges' },
      { name: 'Shadow md', token: 'shadow-md', css: '0 4px 6px -2px rgba(10, 10, 10, 0.10)', desc: 'Dropdown menus, hover cards' },
      { name: 'Shadow lg', token: 'shadow-lg', css: '0 12px 15px -4px rgba(10, 10, 10, 0.10)', desc: 'Floating cards, drawer panels' },
      { name: 'Shadow xl', token: 'shadow-xl', css: '0 20px 25px -4px rgba(10, 10, 10, 0.10)', desc: 'Modal windows, popovers' },
      { name: 'Shadow 2xl', token: 'shadow-2xl', css: '0 25px 45px -12px rgba(10, 10, 10, 0.20)', desc: 'Top-level dialogs, lightboxes' },
    ];

    return (
      <div className="flex flex-col gap-8 max-w-6xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Shadow Tokens</h2>
          <p className="text-sm text-neutral-500 mt-1">
            Layered box-shadow tokens based on the 4% to 20% alpha scale for clean visual elevation and hierarchy.
          </p>
        </div>

        {/* Visual Cards Row matching Figma */}
        <div className="p-8 rounded-lg bg-neutral-100/70 border border-neutral-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {shadowItems.map((item) => (
              <div
                key={item.token}
                className={`h-36 bg-white rounded-md flex flex-col items-center justify-center p-4 transition-transform hover:-translate-y-1 ${item.token}`}
              >
                <span className="text-xs font-semibold text-neutral-700 text-center">{item.name}</span>
                <span className="text-[10px] text-neutral-400 mt-1 font-mono">{item.token}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications Table */}
        <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white shadow-xs">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-600 font-semibold">
                <th className="py-3 px-4">Level</th>
                <th className="py-3 px-4">Tailwind Utility</th>
                <th className="py-3 px-4">CSS Formula</th>
                <th className="py-3 px-4">Recommended Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-normal text-neutral-700">
              {shadowItems.map((item) => (
                <tr key={item.token} className="hover:bg-neutral-50/50">
                  <td className="py-3 px-4 font-bold text-neutral-900">{item.name}</td>
                  <td className="py-3 px-4 font-mono text-xs text-brand-700 bg-brand-50/50 px-2 py-0.5 rounded-2xs inline-block my-2">
                    {item.token}
                  </td>
                  <td className="py-3 px-4 font-mono text-xs text-neutral-500">{item.css}</td>
                  <td className="py-3 px-4 text-xs text-neutral-600">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};

// 2. Focus Rings Showcase (matching Figma screenshot)
export const FocusRings: Story = {
  render: () => {
    const focusItems = [
      {
        name: 'Focus ring primary',
        token: 'focus/primary',
        ringClass: 'ring-4 ring-neutral-700/20 border-neutral-900',
        colorValue: 'neutral/700 · 12%',
        usage: 'Default interactive elements, primary buttons',
      },
      {
        name: 'Focus ring gray',
        token: 'focus/neutral',
        ringClass: 'ring-4 ring-slate-500/30 border-slate-500',
        colorValue: 'slate/500 (#64748B)',
        usage: 'Secondary buttons, neutral interactive items',
      },
      {
        name: 'Focus ring success',
        token: 'focus/success',
        ringClass: 'ring-4 ring-success-500/30 border-success-600',
        colorValue: 'success/600 (#16A34A)',
        usage: 'Success confirmations, verified inputs',
      },
      {
        name: 'Focus ring warning',
        token: 'focus/warning',
        ringClass: 'ring-4 ring-warning-500/30 border-warning-600',
        colorValue: 'warning/600 (#D97706)',
        usage: 'Cautionary inputs, warning confirmations',
      },
      {
        name: 'Focus ring error',
        token: 'focus/error',
        ringClass: 'ring-4 ring-error-500/30 border-error-600',
        colorValue: 'error/600 (#DC2626)',
        usage: 'Invalid form inputs, destructive button actions',
      },
    ];

    return (
      <div className="flex flex-col gap-8 max-w-6xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Focus Ring Tokens</h2>
          <p className="text-sm text-neutral-500 mt-1">
            Accessible, high-visibility focus indicators for keyboard navigation compliance (WCAG 2.1 AA).
          </p>
        </div>

        {/* Visual Cards Row matching Figma screenshot */}
        <div className="p-8 rounded-lg bg-neutral-100/70 border border-neutral-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {focusItems.map((item) => (
              <div
                key={item.token}
                className={`h-40 bg-white rounded-md flex flex-col items-center justify-center p-4 transition-all ${item.ringClass}`}
              >
                <span className="text-xs font-semibold text-neutral-800 text-center">{item.name}</span>
                <span className="text-[10px] text-neutral-400 mt-2 font-mono">{item.token}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Element Demo */}
        <div className="p-6 rounded-md border border-neutral-200 bg-white space-y-4 shadow-xs">
          <h3 className="text-base font-bold text-neutral-900">Interactive Focus Preview</h3>
          <p className="text-xs text-neutral-500">
            Click into or Tab through the sample inputs below to preview the live browser focus rings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">Standard Field</label>
              <input
                type="text"
                placeholder="Tab into me (Primary Focus)"
                className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-xs outline-none focus:ring-4 focus:ring-neutral-700/20 focus:border-neutral-900 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-success-700 mb-1">Valid Field</label>
              <input
                type="text"
                defaultValue="Valid entry"
                className="w-full px-3 py-2 text-sm border border-success-500 rounded-xs outline-none focus:ring-4 focus:ring-success-500/30 focus:border-success-600 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-error-700 mb-1">Error Field</label>
              <input
                type="text"
                defaultValue="Invalid input"
                className="w-full px-3 py-2 text-sm border border-error-500 rounded-xs outline-none focus:ring-4 focus:ring-error-500/30 focus:border-error-600 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// 3. Blur Showcase (matching Figma screenshot)
export const BlurTokens: Story = {
  render: () => {
    const blurSteps = [
      { name: 'Blur xs', token: 'blur-xs', value: '4px', desc: 'Subtle frosted surface' },
      { name: 'Blur sm', token: 'blur-sm', value: '8px', desc: 'Soft background soften' },
      { name: 'Blur md', token: 'blur-md', value: '16px', desc: 'Standard glass effect' },
      { name: 'Blur lg', token: 'blur-lg', value: '24px', desc: 'Header blur overlay' },
      { name: 'Blur xl', token: 'blur-xl', value: '32px', desc: 'Modal backdrop filter' },
      { name: 'Blur 2xl', token: 'blur-2xl', value: '40px', desc: 'Heavy background obfuscation' },
    ];

    return (
      <div className="flex flex-col gap-8 max-w-6xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Blur Tokens</h2>
          <p className="text-sm text-neutral-500 mt-1">
            Backdrop filter blur specifications for modern frosted glass, modal overlays, and sticky navigation bars.
          </p>
        </div>

        {/* Visual Cards Row matching Figma screenshot */}
        <div className="p-8 rounded-lg bg-neutral-100/70 border border-neutral-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {blurSteps.map((step) => (
              <div
                key={step.token}
                className="relative h-44 rounded-md overflow-hidden bg-[#0D1527] flex flex-col justify-between p-3 border border-slate-800"
              >
                {/* Background glowing brand pill / circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-brand-500 shadow-[0_0_24px_rgba(0,166,147,0.8)] flex items-center justify-center">
                    <span className="w-3.5 h-6 rounded-full bg-white block"></span>
                  </div>
                </div>

                {/* Overlaid horizontal frosted glass strip matching Figma */}
                <div
                  className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-14 rounded-xs border border-white/20 bg-white/10"
                  style={{
                    backdropFilter: `blur(${step.value})`,
                    WebkitBackdropFilter: `blur(${step.value})`,
                  }}
                />

                {/* Top Label */}
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-slate-400 block">{step.value}</span>
                </div>

                {/* Bottom Label */}
                <div className="relative z-10 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-white block">{step.name}</span>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5">{step.token}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications Table */}
        <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white shadow-xs">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-600 font-semibold">
                <th className="py-3 px-4">Level</th>
                <th className="py-3 px-4">Value (Pixels)</th>
                <th className="py-3 px-4">CSS Variable</th>
                <th className="py-3 px-4">Tailwind Utility</th>
                <th className="py-3 px-4">Typical Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-normal text-neutral-700">
              {blurSteps.map((step) => (
                <tr key={step.token} className="hover:bg-neutral-50/50">
                  <td className="py-3 px-4 font-bold text-neutral-900">{step.name}</td>
                  <td className="py-3 px-4 font-mono font-medium">{step.value}</td>
                  <td className="py-3 px-4 font-mono text-xs text-brand-700 bg-brand-50/50 px-2 py-0.5 rounded-2xs inline-block my-2">
                    --{step.token}
                  </td>
                  <td className="py-3 px-4 font-mono text-xs text-neutral-600">
                    backdrop-{step.token}
                  </td>
                  <td className="py-3 px-4 text-xs text-neutral-600">{step.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};

// 4. DotOne Effect Tokens Full Table (Light / Midnight / Dark Modes)
export const EffectTokensTable: Story = {
  render: () => {
    const tableData = [
      { token: 'shadow/04', light: 'shared-neutral/950 · 4%', midnight: 'slate/950 · 4%', dark: 'base/black · 4%' },
      { token: 'shadow/05', light: 'shared-neutral/950 · 5%', midnight: 'slate/950 · 5%', dark: 'base/black · 5%' },
      { token: 'shadow/06', light: 'shared-neutral/950 · 6%', midnight: 'slate/950 · 6%', dark: 'base/black · 6%' },
      { token: 'shadow/10', light: 'shared-neutral/950 · 10%', midnight: 'slate/950 · 10%', dark: 'base/black · 10%' },
      { token: 'shadow/20', light: 'shared-neutral/950 · 20%', midnight: 'slate/950 · 20%', dark: 'base/black · 20%' },
      { token: 'focus/primary', light: 'neutral/700 · 12%', midnight: 'slate/300 · 12%', dark: 'neutral/200 · 12%' },
      { token: 'focus/neutral', light: 'slate/500', midnight: 'slate/400', dark: 'slate/400' },
      { token: 'focus/success', light: 'success/600', midnight: 'success/400', dark: 'success/400' },
      { token: 'focus/warning', light: 'warning/600', midnight: 'warning/400', dark: 'warning/400' },
      { token: 'focus/error', light: 'error/600', midnight: 'error/400', dark: 'error/400' },
      { token: 'highlight/20', light: 'base/white · 20%', midnight: 'base/white · 20%', dark: 'base/white · 20%' },
    ];

    return (
      <div className="flex flex-col gap-8 max-w-6xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Theme Effect Tokens Specification</h2>
          <p className="text-sm text-neutral-500 mt-1">
            Exact multi-theme effect token mappings for Light mode, Midnight mode, and Dark mode.
          </p>
        </div>

        <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white shadow-xs">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-600 font-semibold">
                <th className="py-3 px-4">Token</th>
                <th className="py-3 px-4">Light Mode</th>
                <th className="py-3 px-4">Midnight Mode</th>
                <th className="py-3 px-4">Dark Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-normal text-neutral-700">
              {tableData.map((row) => (
                <tr key={row.token} className="hover:bg-neutral-50/50">
                  <td className="py-3 px-4 font-mono font-bold text-neutral-900">{row.token}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-2 font-mono text-xs">
                      <span className="w-3 h-3 rounded-2xs border border-neutral-300 bg-neutral-900 inline-block"></span>
                      {row.light}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-2 font-mono text-xs">
                      <span className="w-3 h-3 rounded-2xs border border-neutral-300 bg-slate-800 inline-block"></span>
                      {row.midnight}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-2 font-mono text-xs">
                      <span className="w-3 h-3 rounded-2xs border border-neutral-300 bg-black inline-block"></span>
                      {row.dark}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};

