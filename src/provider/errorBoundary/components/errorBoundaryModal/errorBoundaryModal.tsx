import React, { ReactNode } from 'react';

import { ErrorBoundaryErrors } from '../../types/errorBoundary';
import { CloseSvg } from './CloseSvg';
import {
  CloseButtonContainerStyled,
  CloseButtonStyled,
  DescriptionStyled,
  FooterButtonStyled,
  FooterPageStyled,
  FooterStyled,
  ModalStyled,
  OverlayStyled,
  TitleStyled,
} from './errorBoundaryModal.styled';

interface ModalProps {
  errors: Array<ErrorBoundaryErrors>;
  onClose: () => void;
  open?: boolean;
}

export const ErrorBoundaryModal = ({ errors, onClose, open = true }: ModalProps): ReactNode => {
  const [info, setInfo] = React.useState<number>(0);

  const onClickPrev = () => {
    const to = Math.max(0, info - 1);
    setInfo(to);
  };

  const onClickNext = () => {
    const to = Math.min(errors.length - 1, info + 1);
    setInfo(to);
  };

  if (!open) {
    return null;
  }

  const disableLeft = info <= 0;
  const disableRight = info >= errors.length - 1;

  return (
    <>
      <OverlayStyled />
      <ModalStyled>
        <CloseButtonContainerStyled>
          <CloseButtonStyled aria-label="Close Icon" onClick={onClose}>
            <CloseSvg />
          </CloseButtonStyled>
        </CloseButtonContainerStyled>
        <TitleStyled>{errors[info].error}</TitleStyled>
        <DescriptionStyled>{errors[info].errorInfo}</DescriptionStyled>
        <FooterStyled>
          <FooterButtonStyled disabled={disableLeft} onClick={onClickPrev}>
            prev
          </FooterButtonStyled>
          <FooterPageStyled>
            {info + 1}/{errors.length}
          </FooterPageStyled>
          <FooterButtonStyled disabled={disableRight} onClick={onClickNext}>
            next
          </FooterButtonStyled>
        </FooterStyled>
      </ModalStyled>
    </>
  );
};
