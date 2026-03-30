import { isContentVisibleEnough } from '../contentVisibility';

describe('isContentVisibleEnough', () => {
  let container: HTMLDivElement;
  let content: HTMLDivElement;
  const minVisibleHeight = 100;

  beforeEach(() => {
    container = document.createElement('div');
    content = document.createElement('div');

    container.appendChild(content);

    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('returns true if content is scrolling but scrolling surface is greater than minVisibleHeight', () => {
    Object.defineProperty(content, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(content, 'clientHeight', {
      value: 150,
    });

    expect(
      isContentVisibleEnough({ container, content, minVisibleHeight }),
    ).toBe(true);
  });

  it('returns false if content is scrolling but scrolling surface is not greater than minVisibleHeight', () => {
    Object.defineProperty(content, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(content, 'clientHeight', {
      value: 50,
    });

    expect(
      isContentVisibleEnough({ container, content, minVisibleHeight }),
    ).toBe(false);
  });

  it('returns true if content is not scrolling but content with minVisibleHeight fits in the container scroll surface', () => {
    Object.defineProperty(content, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(content, 'clientHeight', {
      value: 200,
    });

    Object.defineProperty(container, 'scrollHeight', {
      value: 300,
    });
    Object.defineProperty(container, 'clientHeight', {
      value: 300,
    });

    expect(
      isContentVisibleEnough({ container, content, minVisibleHeight }),
    ).toBe(true);
  });

  it('returns false if content is not scrolling but content with minVisibleHeight does not fit in the container scroll surface', () => {
    Object.defineProperty(content, 'scrollHeight', {
      value: 200,
    });
    Object.defineProperty(content, 'clientHeight', {
      value: 200,
    });

    Object.defineProperty(container, 'scrollHeight', {
      value: 250,
    });
    Object.defineProperty(container, 'clientHeight', {
      value: 100,
    });

    expect(
      isContentVisibleEnough({ container, content, minVisibleHeight }),
    ).toBe(false);
  });
});
