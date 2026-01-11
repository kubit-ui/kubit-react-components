import { type CSSProperties } from 'react';

import REPLACE_SVG from '../../assets/icons/replace.svg';

interface ReplaceContentProps {
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  placeholder?: string;
  margin?: string;
  role?: string;
  tabIndex?: number;
  id?: string;
  children?: React.ReactNode;
  height?: number | string;
}

export const ReplaceContent = ({
  children,
  height,
  iconHeight = 48,
  iconSrc = REPLACE_SVG,
  iconWidth = 48,
  id,
  margin = '0',
  placeholder = 'Replace here your Content',
  role,
  tabIndex,
}: ReplaceContentProps): JSX.Element => {
  const hasContent = Boolean(children);

  const containerStyle: CSSProperties = {
    alignItems: 'center',
    backgroundColor: 'rgb(234 240 254)',
    borderRadius: '6px',
    color: '#236df6',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    height: height || '200px',
    justifyContent: 'center',
    margin,
    padding: '20px',
    width: 'auto',
  };

  const placeholderStyle: CSSProperties = {
    display: hasContent ? 'none' : 'inline',
  };

  return (
    <div id={id} role={role} style={containerStyle} tabIndex={tabIndex}>
      <img alt="" height={iconHeight} src={iconSrc} width={iconWidth} />
      <span style={placeholderStyle}>{placeholder}</span>
      {children}
    </div>
  );
};
