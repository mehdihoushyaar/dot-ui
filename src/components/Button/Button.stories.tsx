import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: "Button",
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    size: 'md',
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: "Button",
  },
};