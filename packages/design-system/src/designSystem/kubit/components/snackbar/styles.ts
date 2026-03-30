import { BORDERS, RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SHADOW } from '../../foundations/shadow';
import { SPACINGS } from '../../foundations/spacings';
import { SnackbarV2Variant } from './variants';

const commonStyles = (TOKENS) => ({
  ...TOKENS,
  _container: {
    ...TOKENS.container,
    alignItems: 'flex-start',
    border_radius: RADIUS.radius_50,
    border_style: 'solid',
    border_width: BORDERS.border_50,
    box_shadow: SHADOW.shadow_10,
    display: 'flex',
    gap: SPACINGS.spacing_100,
    padding: SPACINGS.spacing_300,
  },
});

export const SNACKBAR = {
  [SnackbarV2Variant.ERROR]: {
    ...commonStyles({
      container: {
        background_color: COLORS.FEEDBACK.color_feedback_error_bg_50,
        border_color: COLORS.FEEDBACK.color_feedbackError_border_100,
      },
    }),
  },
  [SnackbarV2Variant.PRIMARY]: {
    ...commonStyles({
      container: {
        background_color: COLORS.FEEDBACK.color_feedback_info_bg_50,
        border_color: COLORS.FEEDBACK.color_feedbackInfo_border_100,
      },
    }),
  },
  [SnackbarV2Variant.SUCCESS]: {
    ...commonStyles({
      container: {
        background_color: COLORS.FEEDBACK.color_feedback_success_bg_50,
        border_color: COLORS.FEEDBACK.color_feedbackSuccess_border_100,
      },
    }),
  },
  [SnackbarV2Variant.WARNING]: {
    ...commonStyles({
      container: {
        background_color: COLORS.FEEDBACK.color_feedback_warning_bg_50,
        border_color: COLORS.FEEDBACK.color_feedbackWarning_border_100,
      },
    }),
  },
};
