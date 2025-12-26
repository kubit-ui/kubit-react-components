import { forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { STATES } from '@/lib/types/states/states';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { buildAriaCurrent } from './helpers/aria';
import { buildScreenReaderText } from './helpers/screnReader';
import { mapToStepState } from './helpers/stepState';
import type { StepperNumberStandAloneProps } from './types/stepperNumber';

const defaultStep = 0;

export const StepperNumberStandAlone = forwardRef<
  HTMLDivElement,
  StepperNumberStandAloneProps
>(
  (
    {
      completedStepIcon,
      cssOrientationClasses,
      cssVariantClasses,
      currentStep = defaultStep,
      horizontalOrientationWidth,
      orientation,
      screenReaderCompletedStep,
      screenReaderTextBuilder,
      screenReaderTitle,
      stepMaxTruncatedLines,
      steps: stepsProp,
      ...props
    },
    ref,
  ) => {
    const steps = mapToStepState(stepsProp, currentStep);
    const isVertical = orientation === 'vertical';
    const usingScreenReaderTextBuilder = Boolean(screenReaderTitle);
    const dataTestId = props['data-testid'] || 'stepper-number';
    return (
      <div ref={ref} aria-hidden={!isVertical} data-testid={dataTestId}>
        {screenReaderTitle?.content && (
          <CustomComponent
            className="kbt-sr-only"
            component={screenReaderTitle.component}
          >
            {screenReaderTitle?.content}
          </CustomComponent>
        )}
        <ol
          className={classNames(
            cssOrientationClasses?.stepper_number,
            cssVariantClasses?.stepper_number,
          )}
          data-testid={`${dataTestId}-steps-container`}
        >
          {steps.map((step, index) => {
            const isLastStep = index === steps.length - 1;
            const customAttributes = {
              'data-state': step.state,
            };
            const customAttributesProps =
              pickCustomAttributes(customAttributes);
            return (
              <li
                key={`stepContainer-${index.toString()}`}
                aria-current={buildAriaCurrent(currentStep, index, orientation)}
                data-testid={`${dataTestId}-li-${index}`}
                style={{
                  display: isVertical ? 'flex' : 'block',
                  width:
                    !isVertical && isLastStep
                      ? 'auto'
                      : horizontalOrientationWidth,
                }}
              >
                {usingScreenReaderTextBuilder && (
                  <screen-reader-only>
                    {buildScreenReaderText(
                      index,
                      currentStep,
                      steps.length,
                      screenReaderTextBuilder,
                      step.name,
                      isVertical,
                    )}
                  </screen-reader-only>
                )}
                <span
                  aria-hidden={
                    !isVertical || usingScreenReaderTextBuilder
                      ? true
                      : undefined
                  }
                  className={classNames(
                    cssOrientationClasses?.stepcontainer,
                    cssVariantClasses?.stepcontainer,
                  )}
                  {...customAttributesProps}
                >
                  <span
                    // className="kbt-stepper-number__circle-bar-wrapper "
                    className={cssVariantClasses?.stepcirclecontainer}
                    data-testid={`${dataTestId}-step-${index}`}
                    style={{
                      flexDirection:
                        orientation === 'vertical' ? 'column' : 'row',
                    }}
                  >
                    <span
                      className={classNames(
                        cssOrientationClasses?.stepcircle,
                        cssVariantClasses?.stepcircle,
                      )}
                      {...customAttributesProps}
                    >
                      {step.state === STATES.COMPLETED ? (
                        <>
                          <ElementOrIcon
                            className={classNames(
                              cssOrientationClasses?.iconselected,
                              cssVariantClasses?.iconselected,
                            )}
                            customAttributes={customAttributes}
                            {...completedStepIcon}
                          />
                          <screen-reader-only>{index + 1}</screen-reader-only>
                        </>
                      ) : (
                        <Text
                          additionalClasses={{
                            text: classNames(
                              cssOrientationClasses?.stepindex,
                              cssVariantClasses?.stepindex,
                            ),
                          }}
                          component="span"
                          customAttributes={customAttributes}
                        >
                          {index + 1}
                        </Text>
                      )}
                    </span>
                    {!isLastStep && (
                      <span
                        className={classNames(
                          cssOrientationClasses?.stepbar,
                          cssVariantClasses?.stepbar,
                        )}
                        {...pickCustomAttributes({
                          'data-state': steps[index + 1].state,
                        })}
                      />
                    )}
                  </span>
                  {isVertical && (
                    <span
                      aria-hidden={
                        usingScreenReaderTextBuilder ? true : undefined
                      }
                      className={classNames(
                        cssOrientationClasses?.stepnamecontainer,
                        cssVariantClasses?.stepnamecontainer,
                      )}
                      data-islast={isLastStep}
                      data-testid={`${dataTestId}-step-description-${index}`}
                      {...customAttributesProps}
                    >
                      <Text
                        additionalClasses={{
                          text: classNames(
                            cssOrientationClasses?.stepname,
                            cssVariantClasses?.stepname,
                          ),
                        }}
                        component="span"
                        customAttributes={customAttributes}
                        maxTruncatedLines={stepMaxTruncatedLines}
                      >
                        {step.name}
                      </Text>
                      {!usingScreenReaderTextBuilder &&
                        step.state === STATES.COMPLETED &&
                        screenReaderCompletedStep?.content && (
                          <CustomComponent
                            className="kbt-sr-only"
                            component={screenReaderCompletedStep.component}
                            data-testid={
                              screenReaderCompletedStep['data-testid']
                            }
                          >
                            &nbsp;{screenReaderCompletedStep.content}
                          </CustomComponent>
                        )}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  },
);
