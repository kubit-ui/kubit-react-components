import * as React from 'react';

import { axe } from 'jest-axe';

import { ElementOrIllustration } from '@/components/elementOrIllustration/elementOrIllustration';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

const illustrationBaseMock = {
  width: '24px',
  height: '24px',
  illustration: 'ABIERTO',
  altText: 'text alternative',
};

const elementBaseMock = {
  illustration: <h1>hello world</h1>,
};

test('ElementOrillustration - illustration component', async () => {
  const { getByRole, container } = renderProvider(
    <ElementOrIllustration {...illustrationBaseMock} />
  );
  const illustration = getByRole('img');

  const results = await axe(container);
  expect(illustration).toBeDefined();
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('ElementOrillustration - Element component', async () => {
  const { getByRole, container } = renderProvider(<ElementOrIllustration {...elementBaseMock} />);
  const heading = getByRole('heading');

  const results = await axe(container);
  expect(heading).toBeDefined();
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('ElementOrillustration - Element component is null', async () => {
  const { container } = renderProvider(
    <ElementOrIllustration {...elementBaseMock} illustration={undefined} />
  );

  const div = container.querySelector('button');

  expect(div).toBeDefined();
});
