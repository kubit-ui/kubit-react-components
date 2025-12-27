import { forwardRef } from 'react';

import { Link } from '@/components/link/link';
import { Text } from '@/components/text/text';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import type { CardImageStandAloneProps } from './types/cardImage';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

/**
 * Standalone card image component for displaying an image with title, description, and optional link.
 *
 * This component renders a card layout with a responsive background image, a title, a description,
 * and an optional link. It is useful for presenting visual content in a card format, adapting to
 * different devices and supporting custom styling via CSS classes.
 *
 * Internally, it uses {@link CustomComponent} for flexible rendering and accessibility.
 *
 * @example
 * ```tsx
 * <CardImageStandAlone
 *   image={{ desktop: "img.jpg", mobile: "img-mobile.jpg" }}
 *   title="Card title"
 *   description="Short description"
 *   link={{ href: "/details", content: "Read more" }}
 * />
 * ```
 */
export const CardImageStandAlone = forwardRef<
  HTMLDivElement,
  CardImageStandAloneProps
>(
  (
    {
      component = 'div',
      cssClasses,
      description,
      device,
      image,
      imageAltText,
      link,
      onClick,
      title,
      ...props
    },
    ref,
  ) => {
    const customProps = pickCustomAttributes(props);

    return (
      <CustomComponent
        ref={ref}
        className={cssClasses?.card_image}
        component={component}
        tabIndex={0}
        onClick={onClick}
        {...customProps}
      >
        <div
          aria-label={imageAltText || undefined}
          className={cssClasses?.imagecontainer}
          role={imageAltText ? 'img' : undefined}
          style={
            image?.[device]
              ? { backgroundImage: `url(${image[device]})` }
              : undefined
          }
        />
        <div className={cssClasses?.content}>
          <div className={cssClasses?.textcontainer}>
            <Text
              additionalClasses={{ text: cssClasses?.title }}
              component="h3"
              {...processText(title)}
            />
            <Text
              additionalClasses={{ text: cssClasses?.description }}
              {...processText(description)}
            />
          </div>
          {link?.url && (
            <div className={cssClasses?.linkcontainer}>
              <Link iconPosition="right" {...link}>
                {link.content || ''}
              </Link>
            </div>
          )}
        </div>
      </CustomComponent>
    );
  },
);
