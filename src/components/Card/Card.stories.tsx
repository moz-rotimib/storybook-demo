// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is the card content. It can contain any React nodes.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'User Profile',
    children: (
      <div>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button size="small">Edit</Button>
        <Button size="small" variant="secondary">
          Cancel
        </Button>
      </div>
    ),
  },
};

export const Highlighted: Story = {
  args: {
    variant: 'highlighted',
    title: 'Featured Card',
    children: 'This card is highlighted to draw attention.',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Click Me',
    children: 'This entire card is clickable',
    onClick: () => alert('Card clicked!'),
  },
};
