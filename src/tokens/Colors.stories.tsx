import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

// Helper component for interactive color swatches
interface SwatchProps {
  shade: string | number;
  hex: string;
  name?: string;
  textColor?: string;
}

const ColorSwatch: React.FC<SwatchProps> = ({ shade, hex, name, textColor }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Auto determine text contrast if not provided
  const isDark =
    typeof shade === 'number'
      ? shade >= 500
      : ['800', '900', '950', 'black'].includes(String(shade).toLowerCase());
  const contrastText = textColor || (isDark ? '#FFFFFF' : '#1A1A1A');

  return (
    <div
      onClick={handleCopy}
      title="Click to copy HEX"
      className="group relative flex flex-col justify-between p-2.5 rounded-lg border border-black/5 cursor-pointer transition-all hover:scale-105 hover:shadow-md select-none h-24 min-w-[76px] flex-1"
      style={{ backgroundColor: hex }}
    >
      <div className="flex justify-between items-start" style={{ color: contrastText }}>
        <span className="text-xs font-bold opacity-90">{shade}</span>
        {copied && (
          <span className="text-[10px] font-bold bg-white text-neutral-900 px-1 py-0.5 rounded shadow-sm">
            Copied!
          </span>
        )}
      </div>
      <div className="flex flex-col" style={{ color: contrastText }}>
        {name && <span className="text-[10px] font-medium opacity-80 truncate">{name}</span>}
        <span className="text-[11px] font-mono tracking-tighter uppercase">{hex}</span>
      </div>
    </div>
  );
};

interface PaletteRowProps {
  title: string;
  description?: string;
  colors: Array<{ shade: number | string; hex: string }>;
}

const PaletteRow: React.FC<PaletteRowProps> = ({ title, description, colors }) => (
  <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <div className="flex items-baseline justify-between border-b border-neutral-100 pb-2">
      <h4 className="font-bold text-base text-neutral-900">{title}</h4>
      {description && <span className="text-xs text-neutral-500">{description}</span>}
    </div>
    <div className="flex flex-wrap gap-2 pt-1">
      {colors.map((c) => (
        <ColorSwatch key={c.shade} shade={c.shade} hex={c.hex} />
      ))}
    </div>
  </div>
);

// 1. Core Palettes
export const CorePalettes: Story = {
  render: () => {
    const neutral = [
      { shade: 50, hex: '#FAFAFA' },
      { shade: 100, hex: '#F5F5F5' },
      { shade: 200, hex: '#E6E6E6' },
      { shade: 300, hex: '#D3D3D3' },
      { shade: 400, hex: '#A3A3A3' },
      { shade: 500, hex: '#727272' },
      { shade: 600, hex: '#535353' },
      { shade: 700, hex: '#404040' },
      { shade: 800, hex: '#272727' },
      { shade: 900, hex: '#1A1A1A' },
      { shade: 950, hex: '#0A0A0A' },
    ];

    const brand = [
      { shade: 50, hex: '#E5FCFF' },
      { shade: 100, hex: '#CCFAFF' },
      { shade: 200, hex: '#99F5FF' },
      { shade: 300, hex: '#66F0FF' },
      { shade: 400, hex: '#33EBFF' },
      { shade: 500, hex: '#00E5FF' },
      { shade: 600, hex: '#00BBCC' },
      { shade: 700, hex: '#008A99' },
      { shade: 800, hex: '#005C66' },
      { shade: 900, hex: '#002E33' },
      { shade: 950, hex: '#002024' },
    ];

    const success = [
      { shade: 50, hex: '#F0FDF4' },
      { shade: 100, hex: '#DCFCE7' },
      { shade: 200, hex: '#BBF7D0' },
      { shade: 300, hex: '#86EFAC' },
      { shade: 400, hex: '#4ADE80' },
      { shade: 500, hex: '#22C55E' },
      { shade: 600, hex: '#16A34A' },
      { shade: 700, hex: '#15803D' },
      { shade: 800, hex: '#166534' },
      { shade: 900, hex: '#14532D' },
      { shade: 950, hex: '#052A1F' },
    ];

    const warning = [
      { shade: 50, hex: '#FFFBEE' },
      { shade: 100, hex: '#FEF3C7' },
      { shade: 200, hex: '#FDE68A' },
      { shade: 300, hex: '#FCD34D' },
      { shade: 400, hex: '#FBBF24' },
      { shade: 500, hex: '#F59E0B' },
      { shade: 600, hex: '#D97706' },
      { shade: 700, hex: '#B45309' },
      { shade: 800, hex: '#92400E' },
      { shade: 900, hex: '#78350F' },
      { shade: 950, hex: '#45220A' },
    ];

    const error = [
      { shade: 50, hex: '#FEF2F2' },
      { shade: 100, hex: '#FEE2E2' },
      { shade: 200, hex: '#FECACA' },
      { shade: 300, hex: '#FCA5A5' },
      { shade: 400, hex: '#F87171' },
      { shade: 500, hex: '#EF4444' },
      { shade: 600, hex: '#DC2626' },
      { shade: 700, hex: '#B91C1C' },
      { shade: 800, hex: '#991B1B' },
      { shade: 900, hex: '#7F1D1D' },
      { shade: 950, hex: '#451616' },
    ];

    const slate = [
      { shade: 50, hex: '#F8FAFC' },
      { shade: 100, hex: '#F1F5F9' },
      { shade: 200, hex: '#E2E8F0' },
      { shade: 300, hex: '#CBD5E1' },
      { shade: 400, hex: '#94A3B8' },
      { shade: 500, hex: '#64748B' },
      { shade: 600, hex: '#475569' },
      { shade: 700, hex: '#334155' },
      { shade: 800, hex: '#1E293B' },
      { shade: 900, hex: '#0F172A' },
      { shade: 950, hex: '#020617' },
    ];

    const info = [
      { shade: 50, hex: '#EFF6FF' },
      { shade: 100, hex: '#DBEAFE' },
      { shade: 200, hex: '#BFDBFE' },
      { shade: 300, hex: '#93C5FD' },
      { shade: 400, hex: '#60A5FA' },
      { shade: 500, hex: '#3B82F6' },
      { shade: 600, hex: '#2563EB' },
      { shade: 700, hex: '#1D4ED8' },
      { shade: 800, hex: '#1E40AF' },
      { shade: 900, hex: '#1E3A8A' },
      { shade: 950, hex: '#172554' },
    ];

    return (
      <div className="flex flex-col gap-6 max-w-6xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900">Core Palettes</h2>
          <p className="text-sm text-neutral-600 mt-1">
            Complete 50 to 950 tonal scale for the DotOne design system. Click on any color swatch to copy its HEX value.
          </p>
        </div>

        <div className="flex gap-4 p-4 rounded-xl bg-white border border-neutral-200">
          <div className="flex-1">
            <span className="text-xs font-bold text-neutral-500 mb-1 block">Black</span>
            <ColorSwatch shade="Black" hex="#000000" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold text-neutral-500 mb-1 block">White</span>
            <ColorSwatch shade="White" hex="#FFFFFF" />
          </div>
        </div>

        <PaletteRow title="Neutral" colors={neutral} description="Foundation, background, and neutral text elements" />
        <PaletteRow title="Brand (Trip)" colors={brand} description="Hero brand color for highlighted interactions" />
        <PaletteRow title="Success" colors={success} description="Positive confirmations, success states, and badges" />
        <PaletteRow title="Warning" colors={warning} description="Cautionary notices, alerts, and pending states" />
        <PaletteRow title="Error" colors={error} description="Critical alerts and destructive actions" />
        <PaletteRow title="Slate" colors={slate} description="Tech-forward slate palette for neutral surfaces" />
        <PaletteRow title="Info" colors={info} description="Informative banners and neutral guidance" />
      </div>
    );
  },
};

// 2. Sub-Brand Palettes
export const SubBrandPalettes: Story = {
  render: () => {
    const brands = [
      {
        id: 'trip',
        name: 'Trip',
        desc: 'Cyan / Teal Palette',
        colors: [
          { shade: 50, hex: '#E5FCFF' },
          { shade: 100, hex: '#CCFAFF' },
          { shade: 200, hex: '#99F5FF' },
          { shade: 300, hex: '#66F0FF' },
          { shade: 400, hex: '#33EBFF' },
          { shade: 500, hex: '#00E5FF' },
          { shade: 600, hex: '#00BBCC' },
          { shade: 700, hex: '#008A99' },
          { shade: 800, hex: '#005C66' },
          { shade: 900, hex: '#002E33' },
          { shade: 950, hex: '#002024' },
        ],
      },
      {
        id: 'gold',
        name: 'Gold',
        desc: 'Gold / Amber Palette',
        colors: [
          { shade: 50, hex: '#FAF6EB' },
          { shade: 100, hex: '#F5ECD5' },
          { shade: 200, hex: '#EAD9AE' },
          { shade: 300, hex: '#EDC685' },
          { shade: 400, hex: '#DBB35D' },
          { shade: 500, hex: '#CBA034' },
          { shade: 600, hex: '#A2822A' },
          { shade: 700, hex: '#7A601F' },
          { shade: 800, hex: '#514015' },
          { shade: 900, hex: '#29200A' },
          { shade: 950, hex: '#1C1607' },
        ],
      },
      {
        id: 'superapp',
        name: 'SuperApp',
        desc: 'Charcoal / Cool Gray Palette',
        colors: [
          { shade: 50, hex: '#F3F1F2' },
          { shade: 100, hex: '#E7E4E5' },
          { shade: 200, hex: '#CFC9CA' },
          { shade: 300, hex: '#B7AEB0' },
          { shade: 400, hex: '#9F9396' },
          { shade: 500, hex: '#87787C' },
          { shade: 600, hex: '#6C6063' },
          { shade: 700, hex: '#51484A' },
          { shade: 800, hex: '#363031' },
          { shade: 900, hex: '#1B1819' },
          { shade: 950, hex: '#131111' },
        ],
      },
      {
        id: 'sell',
        name: 'Sell',
        desc: 'Coral / Orange Palette',
        colors: [
          { shade: 50, hex: '#FEF4EE' },
          { shade: 100, hex: '#FDE6D7' },
          { shade: 200, hex: '#FBC9AD' },
          { shade: 300, hex: '#F7A47A' },
          { shade: 400, hex: '#F37444' },
          { shade: 500, hex: '#F05323' },
          { shade: 600, hex: '#E13715' },
          { shade: 700, hex: '#BB2613' },
          { shade: 800, hex: '#942118' },
          { shade: 900, hex: '#781E16' },
          { shade: 950, hex: '#400A0A' },
        ],
      },
      {
        id: 'media',
        name: 'Media',
        desc: 'Crimson / Red Palette',
        colors: [
          { shade: 50, hex: '#FDE7EC' },
          { shade: 100, hex: '#FCCFD8' },
          { shade: 200, hex: '#F99FB1' },
          { shade: 300, hex: '#F66F8A' },
          { shade: 400, hex: '#F33F63' },
          { shade: 500, hex: '#F00F3C' },
          { shade: 600, hex: '#C00C30' },
          { shade: 700, hex: '#900924' },
          { shade: 800, hex: '#600618' },
          { shade: 900, hex: '#30030C' },
          { shade: 950, hex: '#220208' },
        ],
      },
      {
        id: 'logistics',
        name: 'Logistics',
        desc: 'Green / Mint Palette',
        colors: [
          { shade: 50, hex: '#E5FCEF' },
          { shade: 100, hex: '#D2F9E0' },
          { shade: 200, hex: '#A5F3C0' },
          { shade: 300, hex: '#78EDA1' },
          { shade: 400, hex: '#4BE782' },
          { shade: 500, hex: '#1FE062' },
          { shade: 600, hex: '#18B44F' },
          { shade: 700, hex: '#12873B' },
          { shade: 800, hex: '#0C5A27' },
          { shade: 900, hex: '#062D14' },
          { shade: 950, hex: '#041F0E' },
        ],
      },
      {
        id: 'trading',
        name: 'Trading',
        desc: 'Navy / Slate Palette',
        colors: [
          { shade: 50, hex: '#ECEFF4' },
          { shade: 100, hex: '#D9DFE9' },
          { shade: 200, hex: '#B3BFD3' },
          { shade: 300, hex: '#8D9FBD' },
          { shade: 400, hex: '#677FA7' },
          { shade: 500, hex: '#415F91' },
          { shade: 600, hex: '#344C74' },
          { shade: 700, hex: '#273957' },
          { shade: 800, hex: '#1A263A' },
          { shade: 900, hex: '#0D131D' },
          { shade: 950, hex: '#090D14' },
        ],
      },
      {
        id: 'systems',
        name: 'Systems',
        desc: 'Lime / Olive Palette',
        colors: [
          { shade: 50, hex: '#F9FBE9' },
          { shade: 100, hex: '#F4F8D3' },
          { shade: 200, hex: '#E9F0A8' },
          { shade: 300, hex: '#DEE97C' },
          { shade: 400, hex: '#D3E151' },
          { shade: 500, hex: '#C8DA25' },
          { shade: 600, hex: '#A0AE1E' },
          { shade: 700, hex: '#788316' },
          { shade: 800, hex: '#50570F' },
          { shade: 900, hex: '#282C07' },
          { shade: 950, hex: '#1C1F05' },
        ],
      },
    ];

    return (
      <div className="flex flex-col gap-6 max-w-6xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900">Sub-Brand Palettes</h2>
          <p className="text-sm text-neutral-600 mt-1">
            8 distinct sub-brand palettes for DotOne applications. Activate any theme using <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded">data-brand=&quot;id&quot;</code> or importing <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded">brands.css</code>.
          </p>
        </div>

        {brands.map((b) => (
          <PaletteRow
            key={b.id}
            title={b.name}
            description={b.desc}
            colors={b.colors}
          />
        ))}
      </div>
    );
  },
};

// 3. Semantic Button Tokens
export const SemanticButtonTokens: Story = {
  render: () => {
    const buttonTokens = [
      {
        category: 'Primary Button Tokens',
        items: [
          { token: 'Bt-primary-default', role: 'Default State', hex: '#1A1A1A', scale: 'neutral/900' },
          { token: 'Bt-primary-hover', role: 'Hover State', hex: '#535353', scale: 'neutral/600' },
          { token: 'Bt-primary-click', role: 'Click / Active', hex: '#1A1A1A', scale: 'neutral/900' },
          { token: 'Bt-primary-Focus', role: 'Focus Ring', hex: '#404040', scale: 'neutral/700' },
          { token: 'Bt-primary-disabled', role: 'Disabled State', hex: '#D3D3D3', scale: 'neutral/300' },
          { token: 'Bt-on-fill', role: 'Text / Icon on Fill', hex: '#FFFFFF', scale: 'base/white' },
        ],
      },
      {
        category: 'Brand Button Tokens (Default Trip)',
        items: [
          { token: 'Bt-brand-default', role: 'Default State', hex: '#00BBCC', scale: 'brand/600' },
          { token: 'Bt-brand-Hover', role: 'Hover State', hex: '#005C66', scale: 'brand/800' },
          { token: 'Bt-brand-click', role: 'Click / Active', hex: '#00BBCC', scale: 'brand/600' },
          { token: 'Bt-brand-Focus', role: 'Focus Ring', hex: '#005C66', scale: 'brand/800' },
          { token: 'Bt-brand-disable', role: 'Disabled State', hex: '#E5FCFF', scale: 'brand/50' },
        ],
      },
      {
        category: 'Error (Destructive) Button Tokens',
        items: [
          { token: 'Bt-Error-default', role: 'Default State', hex: '#DC2626', scale: 'error/600' },
          { token: 'Bt-Error-Hover', role: 'Hover State', hex: '#991B1B', scale: 'error/800' },
          { token: 'Bt-Error-click', role: 'Click / Active', hex: '#DC2626', scale: 'error/600' },
          { token: 'Bt-Error-Focus', role: 'Focus Ring', hex: '#991B1B', scale: 'error/800' },
          { token: 'Bt-Error-disable', role: 'Disabled State', hex: '#FEF2F2', scale: 'error/50' },
        ],
      },
    ];

    return (
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900">Semantic Button Tokens</h2>
          <p className="text-sm text-neutral-600 mt-1">
            Exact 5-state token mapping for each button type according to DotOne design specifications.
          </p>
        </div>

        {buttonTokens.map((section) => (
          <div key={section.category} className="flex flex-col gap-3 p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
            <h4 className="font-bold text-neutral-900 border-b border-neutral-100 pb-2">{section.category}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {section.items.map((item) => (
                <div key={item.token} className="flex items-center gap-3 p-2.5 rounded-lg border border-neutral-100 bg-neutral-50/50">
                  <div
                    className="w-10 h-10 rounded-md border border-black/10 shrink-0 shadow-sm"
                    style={{ backgroundColor: item.hex }}
                  />
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-mono text-xs font-bold text-neutral-900 truncate">{item.token}</span>
                    <span className="text-[11px] text-neutral-500">{item.role}</span>
                    <span className="text-[10px] text-brand-600 font-semibold">{item.scale} ({item.hex})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
