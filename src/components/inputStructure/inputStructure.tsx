import * as React from 'react';

import { InputStructureStandAlone } from './inputStructureStandAlone';
import { IInputStructure } from './types/inputStructure';

/**
 * @description
 * InputStructure component to structure inputs
 * @param {IInputStructure} props
 * @returns {JSX.Element}
 */
export const InputStructure = (props: IInputStructure): JSX.Element => {
  return <InputStructureStandAlone {...props} />;
};
