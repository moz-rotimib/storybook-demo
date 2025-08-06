// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Card } from '../components/Card/Card';

const meta = {
  title: 'Pages/Visual Regression Demo',
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      delay: 300,
      diffThreshold: 0.2,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BeforeChanges: Story = {
  render: () => (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#f3f4f6',
        minHeight: '100vh',
      }}
    >
      <h1>Visual Regression Test Page - Before</h1>
      <p>This page demonstrates how Storybook can catch visual regressions</p>

      <div style={{ display: 'grid', gap: '24px', marginTop: '32px' }}>
        {/* Button Examples */}
        <Card title="Button States">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </Card>

        {/* Form Example */}
        <Card title="Form Elements">
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Input label="Name" placeholder="John Doe" />
            <Input label="Email" type="email" placeholder="john@example.com" />
            <Input
              label="Password"
              type="password"
              error="Password too short"
              value="123"
            />
          </div>
        </Card>

        {/* Layout Example */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '16px',
          }}
        >
          <Card variant="highlighted">
            <h3 style={{ margin: '0 0 8px 0' }}>Card 1</h3>
            <p style={{ margin: 0 }}>Highlighted card with correct spacing</p>
          </Card>
          <Card>
            <h3 style={{ margin: '0 0 8px 0' }}>Card 2</h3>
            <p style={{ margin: 0 }}>Default card style</p>
          </Card>
          <Card>
            <h3 style={{ margin: '0 0 8px 0' }}>Card 3</h3>
            <p style={{ margin: 0 }}>Another default card</p>
          </Card>
        </div>
      </div>
    </div>
  ),
};

// This story shows what happens when regressions are introduced
export const AfterChanges_WithRegressions: Story = {
  render: () => (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#f3f4f6',
        minHeight: '100vh',
      }}
    >
      <h1>Visual Regression Test Page - After (With Issues)</h1>
      <p>This shows common regressions that visual testing catches</p>

      <div style={{ display: 'grid', gap: '24px', marginTop: '32px' }}>
        {/* Button Regressions */}
        <Card title="Button States">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {/* Regression: Wrong color */}
            <Button variant="primary" style={{ backgroundColor: '#10b981' }}>
              Primary
            </Button>
            {/* Regression: Wrong size */}
            <Button variant="secondary" style={{ padding: '6px 12px' }}>
              Secondary
            </Button>
            {/* Regression: Missing hover state */}
            <Button variant="danger">Danger</Button>
            <Button disabled>Disabled</Button>
            {/* Regression: Loading spinner not showing */}
            <Button>Loading</Button>
          </div>
        </Card>

        {/* Form Regressions */}
        <Card title="Form Elements">
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Input label="Name" placeholder="John Doe" />
            {/* Regression: Missing label */}
            <Input type="email" placeholder="john@example.com" />
            {/* Regression: Error styling broken */}
            <Input
              label="Password"
              type="password"
              error="Password too short"
              value="123"
              style={{ borderColor: '#e5e7eb' }}
            />
          </div>
        </Card>

        {/* Layout Regression */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          {/* Regression: Wrong grid layout (2 columns instead of 3) */}
          <Card variant="highlighted">
            <h3 style={{ margin: '0 0 8px 0' }}>Card 1</h3>
            <p style={{ margin: 0 }}>Highlighted card</p>
          </Card>
          <Card>
            <h3 style={{ margin: '0 0 8px 0' }}>Card 2</h3>
            <p style={{ margin: 0 }}>Default card style</p>
          </Card>
        </div>
      </div>
    </div>
  ),
};
