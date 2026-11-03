import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Grid Layout',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

interface BreakpointSpec {
  name: string;
  minWidth: number;
  columns: number;
  gutterPx: number;
  gutterToken: string;
  marginPx: number;
  marginToken: string;
  contentWidthPx: number;
  columnWidthPx: string;
  description: string;
}

const gridSpecs: BreakpointSpec[] = [
  {
    name: 'Mobile',
    minWidth: 360,
    columns: 4,
    gutterPx: 16,
    gutterToken: 'Spacing/16',
    marginPx: 24,
    marginToken: 'Spacing/24',
    contentWidthPx: 312,
    columnWidthPx: '66px',
    description: 'Compact viewports for mobile phones. Single column content flows with 4-column sub-layout.',
  },
  {
    name: 'Tablet',
    minWidth: 768,
    columns: 6,
    gutterPx: 24,
    gutterToken: 'Spacing/24',
    marginPx: 40,
    marginToken: 'Spacing/40',
    contentWidthPx: 688,
    columnWidthPx: '94.67px',
    description: 'Medium portrait & tablet devices. 6-column flexible layout grid.',
  },
  {
    name: 'Desktop',
    minWidth: 1440,
    columns: 12,
    gutterPx: 32,
    gutterToken: 'Spacing/32',
    marginPx: 112,
    marginToken: 'Spacing/112',
    contentWidthPx: 1216,
    columnWidthPx: '72px',
    description: 'Large desktop screens & high-resolution monitors. 12-column standard modular grid.',
  },
];

// Visual Grid Renderer Component
const VisualGrid: React.FC<{ spec: BreakpointSpec }> = ({ spec }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm overflow-hidden">
      <div className="flex flex-wrap items-center justify-between border-b border-neutral-100 pb-3 gap-2">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-neutral-900">{spec.name} Grid</h3>
          <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
            {spec.minWidth}px
          </span>
          <span className="text-xs text-neutral-500 font-medium">
            {spec.columns} Columns · Margin: {spec.marginPx}px · Gutter: {spec.gutterPx}px
          </span>
        </div>

        <button
          onClick={() => setShowOverlay(!showOverlay)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer select-none"
        >
          <span className={`w-2 h-2 rounded-full ${showOverlay ? 'bg-error-500' : 'bg-neutral-300'}`} />
          {showOverlay ? 'Hide Columns' : 'Show Columns (Shift + G)'}
        </button>
      </div>

      <p className="text-xs text-neutral-600">{spec.description}</p>

      {/* Grid Canvas Container */}
      <div className="relative w-full rounded-xl bg-neutral-100 p-4 border border-dashed border-neutral-300 overflow-x-auto">
        <div
          className="relative mx-auto bg-neutral-50 border border-neutral-300 rounded-lg min-h-[220px] transition-all flex flex-col justify-between"
          style={{ width: `${Math.min(spec.minWidth, 900)}px` }}
        >
          {/* Header indicator */}
          <div className="flex justify-between items-center px-4 py-2 text-[11px] font-mono text-neutral-400 border-b border-neutral-200/60 bg-white/70">
            <span>Margin Left: {spec.marginPx}px</span>
            <span>Content Width: {spec.contentWidthPx}px</span>
            <span>Margin Right: {spec.marginPx}px</span>
          </div>

          {/* Grid Columns Overlay */}
          <div
            className="flex-1 grid h-full items-stretch py-3"
            style={{
              paddingLeft: `${(spec.marginPx / spec.minWidth) * 100}%`,
              paddingRight: `${(spec.marginPx / spec.minWidth) * 100}%`,
              gap: `${(spec.gutterPx / spec.minWidth) * 100}%`,
              gridTemplateColumns: `repeat(${spec.columns}, 1fr)`,
            }}
          >
            {Array.from({ length: spec.columns }).map((_, i) => (
              <div
                key={i}
                className={`relative flex items-center justify-center rounded transition-all min-h-[140px] text-[10px] font-mono font-bold ${
                  showOverlay
                    ? 'bg-error-500/15 border border-error-500/30 text-error-700'
                    : 'bg-white/80 border border-neutral-200 text-neutral-400'
                }`}
              >
                Col {i + 1}
              </div>
            ))}
          </div>

          {/* Dimension ruler */}
          <div className="flex justify-between items-center px-4 py-1.5 text-[10px] font-mono text-neutral-500 border-t border-neutral-200/60 bg-white/70">
            <span>Each Column: ~{spec.columnWidthPx}</span>
            <span>Gutter: {spec.gutterPx}px ({spec.gutterToken})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. All Breakpoints Overview
export const AllBreakpointsOverview: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-6xl">
      <div className="border-b border-neutral-200 pb-3">
        <h2 className="text-2xl font-bold text-neutral-900">Grid Layout Specification</h2>
        <p className="text-sm text-neutral-600 mt-1">
          DotOne responsive layout grid follows a mobile-first philosophy with 3 distinct breakpoint tiers: Mobile (4 columns), Tablet (6 columns), and Desktop (12 columns).
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-semibold">
              <th className="py-3 px-4">Breakpoint</th>
              <th className="py-3 px-4">Width</th>
              <th className="py-3 px-4">Columns</th>
              <th className="py-3 px-4">Gutter</th>
              <th className="py-3 px-4">Margin (Left/Right)</th>
              <th className="py-3 px-4">Content Width</th>
              <th className="py-3 px-4">Column Width</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {gridSpecs.map((s) => (
              <tr key={s.name} className="hover:bg-neutral-50/50">
                <td className="py-3.5 px-4 font-bold text-neutral-900">{s.name}</td>
                <td className="py-3.5 px-4 font-mono text-brand-600 font-semibold">{s.minWidth}px</td>
                <td className="py-3.5 px-4 font-bold text-neutral-800">{s.columns} Cols</td>
                <td className="py-3.5 px-4 font-mono text-neutral-700">{s.gutterPx}px ({s.gutterToken})</td>
                <td className="py-3.5 px-4 font-mono text-neutral-700">{s.marginPx}px ({s.marginToken})</td>
                <td className="py-3.5 px-4 font-mono text-neutral-900 font-semibold">{s.contentWidthPx}px</td>
                <td className="py-3.5 px-4 font-mono text-neutral-600">{s.columnWidthPx}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-6">
        {gridSpecs.map((spec) => (
          <VisualGrid key={spec.name} spec={spec} />
        ))}
      </div>
    </div>
  ),
};

// 2. Desktop Grid
export const DesktopGrid: Story = {
  render: () => <VisualGrid spec={gridSpecs[2]} />,
};

// 3. Tablet Grid
export const TabletGrid: Story = {
  render: () => <VisualGrid spec={gridSpecs[1]} />,
};

// 4. Mobile Grid
export const MobileGrid: Story = {
  render: () => <VisualGrid spec={gridSpecs[0]} />,
};

// 5. Implementation Code Reference
export const CodeReference: Story = {
  render: () => {
    const cssCode = `/* CSS Grid Implementation */
.container {
  padding-inline: 24px; /* Mobile margin */
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px; /* Mobile gutter */
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
  .container {
    padding-inline: 40px; /* Tablet margin */
  }
  .grid {
    grid-template-columns: repeat(6, 1fr);
    gap: 24px; /* Tablet gutter */
  }
}

/* Desktop (1440px and up) */
@media (min-width: 1440px) {
  .container {
    padding-inline: 112px; /* Desktop margin */
    max-width: 1440px;
    margin-inline: auto;
  }
  .grid {
    grid-template-columns: repeat(12, 1fr);
    gap: 32px; /* Desktop gutter */
  }
}`;

    const tailwindCode = `<!-- Tailwind CSS Utility Classes -->
<div class="px-6 md:px-10 2xl:px-28 max-w-[1440px] mx-auto">
  <div class="grid grid-cols-4 md:grid-cols-6 2xl:grid-cols-12 gap-4 md:gap-6 2xl:gap-8">
    <div class="col-span-4 md:col-span-3 2xl:col-span-4 p-6 bg-white rounded-xl shadow-04">
      Card 1
    </div>
    <div class="col-span-4 md:col-span-3 2xl:col-span-8 p-6 bg-white rounded-xl shadow-04">
      Card 2
    </div>
  </div>
</div>`;

    return (
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="text-2xl font-bold text-neutral-900">Developer Implementation</h2>
          <p className="text-sm text-neutral-600 mt-1">
            Standard CSS Grid and Tailwind CSS implementation examples based on DotOne guidelines.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-neutral-800">1. Plain CSS Grid</h4>
          <pre className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
            {cssCode}
          </pre>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          <h4 className="font-bold text-sm text-neutral-800">2. Tailwind CSS Utilities</h4>
          <pre className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
            {tailwindCode}
          </pre>
        </div>
      </div>
    );
  },
};

