import {
  CAROUSEL_BUILD_SCREEN_READER_CURRENT_PAGE_KEY,
  CAROUSEL_BUILD_SCREEN_READER_NUM_PAGES_KEY,
  type CarouselScreenReaderOnlyType,
} from '../types/carousel';

export const buildScreenReaderText = ({
  content,
  currentPage,
  numPages,
}: {
  currentPage: number;
  numPages: number;
  content: string;
}): string => {
  const currentPageRegExp = new RegExp(
    CAROUSEL_BUILD_SCREEN_READER_CURRENT_PAGE_KEY,
    'g',
  );
  const numPagesRegExp = new RegExp(
    CAROUSEL_BUILD_SCREEN_READER_NUM_PAGES_KEY,
    'g',
  );
  return content
    .replace(currentPageRegExp, String(currentPage + 1))
    .replace(numPagesRegExp, String(numPages));
};

export const buildScreenReaderOnly = ({
  currentPage,
  numPages,
  screenReaderOnly,
}: {
  currentPage: number;
  numPages: number;
  screenReaderOnly?: CarouselScreenReaderOnlyType;
}): CarouselScreenReaderOnlyType | undefined => {
  if (!screenReaderOnly?.content) {
    return undefined;
  }
  return {
    ...screenReaderOnly,
    content: buildScreenReaderText({
      content: screenReaderOnly.content,
      currentPage: currentPage,
      numPages: numPages,
    }),
  };
};
