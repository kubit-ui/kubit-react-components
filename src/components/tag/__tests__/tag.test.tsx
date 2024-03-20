import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { Tag } from '../tag';

const mockProps = {
  dataTestId: 'tagComponent',
  option: 'INFORMATIVE',
  variant: 'SQUARE',
  status: 'NORMAL',
  icon: { icon: 'CHEVRON' },
};

describe('Tag component', () => {
  it('Should render tag component', async () => {
    const { container, getByText } = renderProvider(<Tag {...mockProps}>Tag</Tag>);

    const tag = getByText('Tag');

    expect(tag).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should not crash when status does not exist', async () => {
    const { container } = renderProvider(
      <Tag {...mockProps} status="NOT_EXIST_STATUS">
        Tag
      </Tag>
    );

    const tag = screen.getByText('Tag');

    expect(tag).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When truncate, the component will not override the original text, truncate will be managed via css', () => {
    const longTagText = 'Tag with a very very large text';
    renderProvider(
      <Tag {...mockProps} truncateText>
        {longTagText}
      </Tag>
    );

    const tag = screen.getByText(longTagText);
    expect(tag).toBeInTheDocument();
  });

  it('Should render tag component with ARROW variant', async () => {
    const { container } = renderProvider(
      <Tag {...mockProps} variant={'ARROW'}>
        Tag
      </Tag>
    );

    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();

    const arrowSvg = screen.getByTestId(`${mockProps.dataTestId}ArrowSvg`);
    expect(arrowSvg).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render tag component with RIBBON variant', async () => {
    const { container } = renderProvider(
      <Tag {...mockProps} variant={'RIBBON'}>
        Tag
      </Tag>
    );

    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();

    const ribbonSvg = screen.getByTestId(`${mockProps.dataTestId}RibbonSvg`);
    expect(ribbonSvg).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Throught the right option is possible to add borders or not to the RibbonShape. TESTING_BORDER_TRANSPARENCY', async () => {
    renderProvider(
      <Tag {...mockProps} option="TESTING_BORDER_TRANSPARENCY" variant="RIBBON">
        Tag
      </Tag>
    );
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });

  it('Throught the right option is possible to add borders or not to the RibbonShape. TESTING_BORDER_NO_TRANSPARENCY', async () => {
    renderProvider(
      <Tag {...mockProps} option="TESTING_BORDER_NO_TRANSPARENCY" variant="RIBBON">
        Tag
      </Tag>
    );
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });

  it('Throught the right option is possible to add borders or not to the RibbonShape. TESTING_NO_BORDER_TRANSPARENCY', async () => {
    renderProvider(
      <Tag {...mockProps} option="TESTING_NO_BORDER_TRANSPARENCY" variant="RIBBON">
        Tag
      </Tag>
    );
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });

  it('Throught the right option is possible to add borders or not to the RibbonShape. TESTING_NO_BORDER_NO_TRANSPARENCY', async () => {
    renderProvider(
      <Tag {...mockProps} option="TESTING_NO_BORDER_NO_TRANSPARENCY" variant="RIBBON">
        Tag
      </Tag>
    );
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });

  it('Throught the right option is possible to add borders or not to the ArrowShape. TESTING_BORDER_TRANSPARENCY', async () => {
    renderProvider(
      <Tag {...mockProps} option="TESTING_BORDER_TRANSPARENCY" variant="ARROW">
        Tag
      </Tag>
    );
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });

  it('Throught the right option is possible to add borders or not to the ArrowShape. TESTING_BORDER_NO_TRANSPARENCY', async () => {
    renderProvider(
      <Tag {...mockProps} option="TESTING_BORDER_NO_TRANSPARENCY" variant="ARROW">
        Tag
      </Tag>
    );
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });

  it('Throught the right option is possible to add borders or not to the ArrowShape. TESTING_NO_BORDER_TRANSPARENCY', async () => {
    renderProvider(
      <Tag {...mockProps} option="TESTING_NO_BORDER_TRANSPARENCY" variant="ARROW">
        Tag
      </Tag>
    );
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });

  it('Throught the right option is possible to add borders or not to the ArrowShape. TESTING_NO_BORDER_NO_TRANSPARENCY', async () => {
    renderProvider(
      <Tag {...mockProps} option="TESTING_NO_BORDER_NO_TRANSPARENCY" variant="ARROW">
        Tag
      </Tag>
    );
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });
});
