import { useEffect, useState } from 'react';

const MAX_PERCENTAGE = 100;

export const useChangeDimension = (
  scrollableRef: React.MutableRefObject<HTMLElement | null>,
  decorativeRef: React.MutableRefObject<HTMLElement | null>,
  conditional = true,
  proportion = 4
): boolean | void => {
  const [gone, setGone] = useState<boolean>(false);
  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    const decorativeElement = decorativeRef.current;
    if (!conditional || !scrollableElement || !decorativeElement) {
      return;
    }
    // get decorative element original size
    const decorativeHeight = decorativeElement.clientHeight;
    const decorativeWidth = decorativeElement.clientWidth;

    // Funtion to resize the decorative element
    const getHeight = () => {
      const percentage =
        ((scrollableElement.scrollTop * MAX_PERCENTAGE) / scrollableElement.scrollHeight) *
        proportion;
      const subPercentage = percentage < MAX_PERCENTAGE ? percentage : MAX_PERCENTAGE;
      const subHeight = (decorativeHeight * subPercentage) / MAX_PERCENTAGE;
      const subWidth = (decorativeWidth * subPercentage) / MAX_PERCENTAGE;

      // Set custom height
      decorativeElement.style.setProperty(
        'min-height',
        `calc(${decorativeHeight}px - ${subHeight}px)`
      );
      decorativeElement.style.setProperty('height', `calc(${decorativeHeight}px - ${subHeight}px)`);
      // Set custom width
      decorativeElement.style.setProperty('min-width', `calc(${decorativeWidth}px - ${subWidth})`);
      decorativeElement.style.setProperty('width', `calc(${decorativeWidth}px - ${subWidth})`);

      if (subPercentage > 95) {
        setGone(true);
      } else {
        setGone(false);
      }
    };

    scrollableElement.addEventListener('scroll', getHeight);
    return () => {
      scrollableElement.removeEventListener('scroll', getHeight);
    };
  }, [conditional]);
  return gone;
};
