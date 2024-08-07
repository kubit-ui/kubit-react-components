import React from 'react';

import { FooterPositionType } from '@/components/footer/types/position';
import { ModalControlled } from '@/components/modal/modalControlled';
import { PopoverPositionVariantType } from '@/components/popover/types/positionVariant';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import {
  ModalVariantType,
  PopoverVariantType,
  TextVariantType,
} from '@/designSystem/kubit/components/variants';
import { COLORS } from '@/designSystem/kubit/foundations';

import { ErrorBoundaryErrors } from '../../types/errorBoundary';
import ICON_CLOSE from './assets/icon_x_close.svg';
import { FooterButton } from './errorBoundaryModal.styled';

interface ModalProps {
  errors: Array<ErrorBoundaryErrors>;
  onClose: () => void;
  open?: boolean;
}

export const ErrorBoundaryModal = ({ errors, onClose, open = true }: ModalProps): JSX.Element => {
  const [info, setInfo] = React.useState<number>(0);

  const disableLeft = info <= 0;
  const disableRight = info >= errors.length - 1;

  const onClickPrev = () => {
    const to = Math.max(0, info - 1);
    setInfo(to);
  };
  const onClickNext = () => {
    const to = Math.min(errors.length - 1, info + 1);
    setInfo(to);
  };

  return (
    <ModalControlled
      closeIcon={{ icon: ICON_CLOSE, altText: 'closeIcon', onClick: onClose }}
      content={
        <Text
          color={COLORS.SECONDARY.color_secondary_font_50}
          variant={TextVariantType.PARAGRAPH_MEDIUM_EXTENDED}
        >
          {errors[info].errorInfo}
        </Text>
      }
      footer={{
        variant: 'MODAL',
        content: [
          <FooterButton
            key="footer_left_button"
            data-position={FooterPositionType.LEFT}
            disabled={disableLeft}
            onClick={onClickPrev}
          >
            prev
          </FooterButton>,
          <Text
            key="counter"
            component={TextComponentType.SPAN}
            data-position={FooterPositionType.CENTER}
            variant={TextVariantType.PARAGRAPH_CAPTION_EXTENDED}
          >
            {info + 1}/{errors.length}
          </Text>,
          <FooterButton
            key="footer_right_button"
            data-position={FooterPositionType.RIGHT}
            disabled={disableRight}
            onClick={onClickNext}
          >
            next
          </FooterButton>,
        ],
      }}
      maxHeight="80vh"
      maxWidth="60vw"
      open={open}
      popover={{
        positionVariant: PopoverPositionVariantType.FIXED,
        variant: PopoverVariantType.MODAL,
        onCloseInternally: onClose,
      }}
      title={{ content: errors[info].error }}
      variant={ModalVariantType.DEFAULT}
    />
  );
};
