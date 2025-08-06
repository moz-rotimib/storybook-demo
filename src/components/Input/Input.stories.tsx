// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'user@example.com',
    type: 'email',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password must be at least 8 characters',
    value: '123',
  },
};

export const Disabled: Story = {
  args: {
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input type="text" label="Text" placeholder="Enter text" />
      <Input type="email" label="Email" placeholder="user@example.com" />
      <Input type="password" label="Password" placeholder="••••••••" />
      <Input type="number" label="Age" placeholder="25" />
    </div>
  ),
};

// Interaction test
export const WithTyping: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter username');

    await userEvent.type(input, 'johndoe');
    await expect(input).toHaveValue('johndoe');
  },
};
