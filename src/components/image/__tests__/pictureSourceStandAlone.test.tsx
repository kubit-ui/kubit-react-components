import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { PictureSourceStandAlone } from '../components/pictureSourceStandAlone';

const mockProps = {
  mediaSource: { media: 'media', src: 'src' },
  dataTestId: 'dataTestId',
};

test('Picture Source Component', async () => {
  const { container, getByTestId } = renderProvider(
    <picture>
      <PictureSourceStandAlone {...mockProps} />
    </picture>
  );
  const source = getByTestId(mockProps.dataTestId);

  expect(source).toBeDefined();
  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Picture Source Component - should not render if mediaSource is null', async () => {
  const { container } = renderProvider(<PictureSourceStandAlone />);

  expect(container).toBeEmptyDOMElement();
  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});
