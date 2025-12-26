import { render } from '@/lib/tests/render/render';

import { RenderIf } from '../renderIf';

describe('RenderIf Component', () => {
  test('renders children when condition is true', () => {
    const { getByText } = render(
      <RenderIf condition={true}>
        <div>Conditional content</div>
      </RenderIf>,
    );
    expect(getByText('Conditional content')).not.toBeNull();
  });

  test('does not render children when condition is false', () => {
    const { queryByText } = render(
      <RenderIf condition={false}>
        <div>Conditional content</div>
      </RenderIf>,
    );
    expect(queryByText('Conditional content')).toBeNull();
  });
});
