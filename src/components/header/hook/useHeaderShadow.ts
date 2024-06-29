import { ForwardedRef, Ref, useEffect, useImperativeHandle, useRef } from 'react';

type HeaderShadowType = {
  boxShadow?: string;
  showShadowFrom?: number;
};

type HeaderShadowProps = {
  ref: ForwardedRef<HTMLDivElement> | undefined;
  shadow?: HeaderShadowType;
};

type HeaderShadowReturnValues = {
  headerRef: Ref<HTMLDivElement> | undefined;
};

export const useHeaderShadow = ({ ref, shadow }: HeaderShadowProps): HeaderShadowReturnValues => {
  const headerRef = useRef<HTMLElement | null>(null);

  useImperativeHandle(
    ref,
    () => {
      return headerRef?.current as HTMLDivElement;
    },
    []
  );

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }
    if (!shadow?.showShadowFrom || !shadow.boxShadow) {
      headerRef.current.style.removeProperty('top');
      headerRef.current.style.removeProperty('position');
      return;
    }

    const header = headerRef.current;
    const { showShadowFrom, boxShadow } = shadow;
    header.style.setProperty('top', '0');
    header.style.setProperty('position', 'sticky');

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;
      if (scrollPercentage >= showShadowFrom) {
        header.style.setProperty('box-shadow', boxShadow);
      } else {
        header.style.removeProperty('box-shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shadow]);

  return { headerRef: headerRef as Ref<HTMLDivElement> | undefined };
};
