import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import { ContainerPropsStylesType } from './containerTheme';

export type ContainerTextType = Omit<IText<string>, 'children'> & {
  content?: React.ReactNode;
};

export interface IContainerStandAlone {
  styles: ContainerPropsStylesType;
  title?: ContainerTextType;
  dataTestId?: string;
}

/**
 * Represents the props for the Container component.
 * @interface IContainer
 * @category Components - Web
 * @param {object} styles - The styles for the container.
 * @param {string} dataTestId - The data-testid attribute for testing.
 * @param {string} variant - The variant of the container.
 * @extends {Omit<IContainerStandAlone, 'styles'>}
 */

export interface IContainer<V extends string | unknown>
  extends Omit<IContainerStandAlone, 'styles'>,
    Omit<CustomTokenTypes<ContainerPropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
