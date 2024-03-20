import * as React from 'react';

import { axe } from 'jest-axe';

import { Button } from '@/components/button';
import { DecorativeType } from '@/components/decorativeElement';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { FooterPositionType } from '@/components/footer';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { ConfirmationMessage } from '../confirmationMessage';

const decorativeIcon: IElementOrIcon = {
  icon: 'SUCCESS',
  altText: 'icon altText',
};

const mockProps = {
  title: { content: 'title' },
  description: { content: 'description' },
  variant: 'DEFAULT',
  decorativeElement: {
    element: { [DecorativeType.ICON]: decorativeIcon },
  },
  footer: {
    content: [
      <Button key={0} data-position={FooterPositionType.CENTER} size="LARGE" variant="PRIMARY">
        Primary
      </Button>,
    ],
  },
};

describe('ConfirmationMessage component', () => {
  it('Should render ConfirmationMessage', async () => {
    const { container } = renderProvider(<ConfirmationMessage {...mockProps} />);

    expect(ConfirmationMessage).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show the title', async () => {
    const { getByRole, container } = renderProvider(<ConfirmationMessage {...mockProps} />);
    const title = getByRole('heading', { name: 'title' });
    expect(title).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show the icon', async () => {
    const { getByRole, container } = renderProvider(<ConfirmationMessage {...mockProps} />);

    const icon = getByRole('img', { name: 'icon altText' });
    expect(icon).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show footer', async () => {
    const { getByRole, container } = renderProvider(<ConfirmationMessage {...mockProps} />);

    const footer = getByRole('contentinfo', { name: '' });
    expect(footer).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show footer icons', async () => {
    const { container, getByText } = renderProvider(<ConfirmationMessage {...mockProps} />);

    const button1 = getByText('Primary');
    expect(button1).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show the description as string', async () => {
    const { getByText, container } = renderProvider(<ConfirmationMessage {...mockProps} />);
    const description = getByText('description');
    expect(description).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show the description as element', async () => {
    const { getByText, container } = renderProvider(
      <ConfirmationMessage {...mockProps} description={{ content: <div>Description</div> }} />
    );
    const description = getByText('Description');
    expect(description).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show the secondary description', async () => {
    const { getByText, container } = renderProvider(
      <ConfirmationMessage
        {...mockProps}
        secondaryDescription={{ content: 'secondary description' }}
      />
    );
    const secondaryDescription = getByText('secondary description');
    expect(secondaryDescription).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show the optional content', async () => {
    const { getByText, container } = renderProvider(
      <ConfirmationMessage {...mockProps} content={'optional content'} />
    );
    const secondaryDescription = getByText('optional content');
    expect(secondaryDescription).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
