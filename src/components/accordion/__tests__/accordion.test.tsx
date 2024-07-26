import userEvent from '@testing-library/user-event';

import { fireEvent } from '@testing-library/react';
import * as React from 'react';

import 'jest-styled-components';

import { axe } from 'jest-axe';

import { FooterPositionType } from '@/components/footer';
import { Link } from '@/components/link/link';
import { TextComponentType } from '@/components/text';

import { renderProvider } from '../../../tests/renderProvider/renderProvider.utility';
import { Accordion, AccordionControlled } from '../index';

const commonAccordionUncontrolledProps = {
  headerRightContent: 'Right content',
  subHeaderContent: 'Subheader content',
  title: { content: 'Accordion Title' },
  titleIcon: { icon: 'UNICORN' },
  triggerComponent: TextComponentType.H3,
  triggerIcon: { icon: '+' },
  variant: 'DEFAULT',
  footerContent: [
    <Link key={1} data-position={FooterPositionType.LEFT} url="#" variant={'DEFAULT'}>
      Tertiary
    </Link>,
    <Link key={2} data-position={FooterPositionType.LEFT} url="#" variant={'DEFAULT'}>
      Secondary
    </Link>,
    <Link key={3} data-position={FooterPositionType.LEFT} url="#" variant={'DEFAULT'}>
      Primary
    </Link>,
    <Link key={4} data-position={FooterPositionType.RIGHT} url="#" variant={'DEFAULT'}>
      Right
    </Link>,
  ],
};

const commonAccordionUncontrolledPropsTitleNode = {
  ...commonAccordionUncontrolledProps,
  title: { content: <span>Title</span> },
};

describe('Accordion Uncontrolled', () => {
  it('should render the title when recieved a node', () => {
    const { getByText } = renderProvider(
      <Accordion {...commonAccordionUncontrolledPropsTitleNode} />
    );

    const title = getByText('Title');
    expect(title).toBeInTheDocument();
  });
  it('should render Accordion closed by default with proper heading and button roles structure and hidden panel', async () => {
    const { getByRole, getByText, container } = renderProvider(
      <Accordion {...commonAccordionUncontrolledProps}>Accordion Content</Accordion>
    );

    expect(getByRole('heading').tagName.toLowerCase()).toEqual(TextComponentType.H3);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText(/Accordion Content/).parentElement).not.toHaveStyleRule('display', 'block');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('should render Accordion opened when defaultOpen prop is passed as "true"', async () => {
    const { getByText, container } = renderProvider(
      <Accordion {...commonAccordionUncontrolledProps} defaultOpen>
        Accordion Content
      </Accordion>
    );

    expect(getByText(/Accordion Content/).parentElement).toHaveStyleRule('display', 'block');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('should toggle visibility of Accordion panel content correctly', async () => {
    const { getByRole, getByText, container } = renderProvider(
      <Accordion {...commonAccordionUncontrolledProps}>Accordion Content</Accordion>
    );
    const triggerButton = getByRole('button');

    fireEvent.click(triggerButton);
    expect(getByText(/Accordion Content/).parentElement).toHaveStyleRule('display', 'block');

    fireEvent.click(triggerButton);
    expect(getByText(/Accordion Content/).parentElement).not.toHaveStyleRule('display', 'block');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});

const commonAccordionControlledProps = {
  title: { content: 'AccordionControlled Title', onClick: () => null },
  triggerComponent: TextComponentType.H2,
  triggerIcon: { icon: '+' },
  variant: 'DEFAULT',
};

describe('Accordion Controlled', () => {
  it('should render Accordion opened correctly when open prop is set to true', async () => {
    const { getByText, container } = renderProvider(
      <AccordionControlled {...commonAccordionControlledProps} open>
        Accordion Controlled Content
      </AccordionControlled>
    );

    expect(getByText(/Accordion Controlled Content/).parentElement).toHaveStyleRule(
      'display',
      'block'
    );

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('should render Accordion closed correctly when open prop is not defined (default set to false)', async () => {
    const { getByText, container } = renderProvider(
      <AccordionControlled {...commonAccordionControlledProps}>
        Accordion Controlled Content
      </AccordionControlled>
    );

    expect(getByText(/Accordion Controlled Content/).parentElement).not.toHaveStyleRule(
      'display',
      'block'
    );

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('should invoke onToggle callback when clicking trigger button', async () => {
    const mockTriggerButtonClick = jest.fn();
    const { getByRole, container } = renderProvider(
      <AccordionControlled
        {...commonAccordionControlledProps}
        triggerButton={{ onClick: mockTriggerButtonClick }}
      >
        Accordion Controlled Content
      </AccordionControlled>
    );

    fireEvent.click(getByRole('button'));

    expect(mockTriggerButtonClick).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});

describe('Accordion (a11y)- Navigation with keyboard', () => {
  it('should correctly handle focus with tab, and toggle content visibility with Enter/Space keys', async () => {
    const { getByRole, getByText, container } = renderProvider(
      <Accordion
        title={{ content: 'AccordionTitle' }}
        triggerIcon={{ icon: '+' }}
        variant="DEFAULT"
      >
        Accordion Content
      </Accordion>
    );

    await userEvent.tab();

    expect(getByRole('button')).toHaveFocus();

    expect(getByText(/Accordion Content/).parentElement).not.toHaveStyleRule('display', 'block');

    await userEvent.keyboard('{Enter}');

    expect(getByText(/Accordion Content/).parentElement).toHaveStyleRule('display', 'block');

    await userEvent.keyboard(' ');

    expect(getByText(/Accordion Content/).parentElement).not.toHaveStyleRule('display', 'block');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
