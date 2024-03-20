export const transformShadow = (radius: string): object => ({
  transform_style: 'preserve-3d',
  transform: 'translateZ(1px)',
  position: 'relative',
  border_radius: radius,
});

export const shadowAfterStyles = (
  radius: string,
  color: string,
  width: string,
  height?: string
): object => ({
  before: {
    display: 'block',
    content: '',
    position: 'absolute',
    bottom: `calc(-${width} * 2)`,
    right: `calc(-${width} * 2)`,
    width: `calc(100% + ${width})`,
    height: height ? height : '100%',
    background_color: color,
    border_radius: radius,
    transform: 'translateZ(-1px)',
  },
});

export const shadowAfterStylesSpecificProps = (
  radius: string,
  color: string,
  pixelsTranslation: string,
  width?: string,
  height?: string,
  right?: string,
  top?: string
): object => ({
  before: {
    display: 'block',
    content: '',
    position: 'absolute',
    top: top,
    bottom: `calc(-${pixelsTranslation} * 2)`,
    right: right ? right : `calc(-${pixelsTranslation} * 2)`,
    width: width ? width : `calc(100% + ${width})`,
    height: height ? height : '100%',
    background_color: color,
    border_radius: radius,
    transform: 'translateZ(-1px)',
  },
});

export const shadowBeforeStyles = (radius: string, color: string, width: string): object => ({
  before: {
    display: 'block',
    content: '',
    position: 'absolute',
    bottom: `calc(-${width} * 2)`,
    right: `calc(-${width} * 2)`,
    width: `calc(100% + ${width})`,
    height: '100%',
    background_color: color,
    border_radius: radius,
    transform: 'translateZ(-1px)',
  },
});
