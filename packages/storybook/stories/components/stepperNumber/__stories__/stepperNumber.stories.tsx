import type { Meta, StoryObj } from '@storybook/react';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { StepperNumber } from '@kubit-ui-web/react-components';
import { useState } from 'react';

import { Button } from '@/components/button/button';
import { ICONS } from '@/stories/assets/icons/icons';

const { ButtonSizeType, ButtonVariantType, StepperNumberVariantType } =
  KUBIT_VARIANTS;

const meta = {
  component: StepperNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['navigation', 'stepper', 'progress'],
  title: 'Components/Navigation/StepperNumber',
} satisfies Meta<typeof StepperNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic vertical stepper with 3 steps
 */
export const Basic: Story = {
  args: {
    completedStepIcon: { icon: ICONS.PLACEHOLDER },
    currentStep: 1,
    orientation: 'vertical',
    screenReaderCompletedStep: { content: 'Completed' },
    screenReaderTitle: { content: 'Process Steps' },
    steps: [
      {
        'aria-label': 'Step 1: Personal Information',
        name: 'Personal Information',
      },
      { 'aria-label': 'Step 2: Address Details', name: 'Address Details' },
      { 'aria-label': 'Step 3: Review and Submit', name: 'Review & Submit' },
    ],
    variant: StepperNumberVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<StepperNumber
  variant="DEFAULT"
  orientation="vertical"
  currentStep={1}
  steps={[
    { name: 'Personal Information', 'aria-label': 'Step 1: Personal Information' },
    { name: 'Address Details', 'aria-label': 'Step 2: Address Details' },
    { name: 'Review & Submit', 'aria-label': 'Step 3: Review and Submit' },
  ]}
  completedStepIcon={{ icon: ICONS.PLACEHOLDER }}
  screenReaderTitle={{ content: 'Process Steps' }}
  screenReaderCompletedStep={{ content: 'Completed' }}
/>`,
      },
    },
  },
};

/**
 * Horizontal stepper layout
 */
export const Horizontal: Story = {
  args: {
    completedStepIcon: { icon: ICONS.PLACEHOLDER },
    currentStep: 1,
    horizontalOrientationWidth: '150px',
    orientation: 'horizontal',
    screenReaderCompletedStep: { content: 'Completed' },
    screenReaderTitle: { content: 'Checkout Process' },
    steps: [
      { 'aria-label': 'Step 1: Shopping Cart', name: 'Cart' },
      { 'aria-label': 'Step 2: Shipping Information', name: 'Shipping' },
      { 'aria-label': 'Step 3: Payment Details', name: 'Payment' },
      { 'aria-label': 'Step 4: Order Confirmation', name: 'Confirmation' },
    ],
    variant: StepperNumberVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<StepperNumber
  variant="DEFAULT"
  orientation="horizontal"
  horizontalOrientationWidth="150px"
  currentStep={1}
  steps={[
    { name: 'Cart', 'aria-label': 'Step 1: Shopping Cart' },
    { name: 'Shipping', 'aria-label': 'Step 2: Shipping Information' },
    { name: 'Payment', 'aria-label': 'Step 3: Payment Details' },
    { name: 'Confirmation', 'aria-label': 'Step 4: Order Confirmation' },
  ]}
  completedStepIcon={{ icon: ICONS.PLACEHOLDER }}
/>`,
      },
    },
  },
};
