import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { PictureSourceStandAlone } from '../components/pictureSourceStandAlone';

const mockProps = {
  'data-testid': 'dataTestId',
  mediaSource: { media: 'media', src: 'src' },
};

describe('Picture Source Component', () => {
  it('should render Picture Source Component', async () => {
    const { container, getByTestId } = render(
      <picture>
        <PictureSourceStandAlone {...mockProps} />
      </picture>,
    );
    const source = getByTestId(mockProps['data-testid']);

    expect(source).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('should not render if mediaSource is null', async () => {
    const { container } = render(<PictureSourceStandAlone />);

    expect(container).toBeEmptyDOMElement();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
