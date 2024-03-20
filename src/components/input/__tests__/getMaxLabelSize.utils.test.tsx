import { render } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { LabelStandAlone as Label } from '../components/label';
import { InputState, LABEL_TYPE } from '../types';
import { getMaxLabelSize } from '../utils';

const inputId = 'inputId';
const mockStyle = {
  [InputState.EMPTY]: {
    label: {
      type: LABEL_TYPE.STANDARD,
    },
  },
};

// mock components
const Input = () => <input id={inputId} width="200px" />;
const InputWithLabel = () => {
  return (
    <>
      <Label
        id={'labelId'}
        inputId={inputId}
        label={{ content: 'The label' }}
        state={InputState.EMPTY}
        styles={mockStyle}
      />
      <input id={inputId} />
    </>
  );
};

describe('getLabeSize test', () => {
  it('Should return the maximum width for the label, based on the characteristics of the input', () => {
    const procced = true;
    render(<Input />);

    const maxLabelSize = getMaxLabelSize(procced, inputId);

    expect(typeof maxLabelSize === 'string').toBeTruthy();
  });
  it('Should return undefined when the input is not valid', () => {
    const proceed = true;
    const fakeId = 'fakeId';
    render(<Input />);

    const maxLabelSize = getMaxLabelSize(proceed, fakeId);

    expect(maxLabelSize).toBeFalsy();
  });
  it('Should return undefined when the procced parameter is false', () => {
    const proceed = false;
    render(<Input />);

    const maxLabelSize = getMaxLabelSize(proceed, inputId);

    expect(maxLabelSize).toBeFalsy();
  });
  it('Should get the right input data', () => {
    const { getByText } = renderProvider(<InputWithLabel />);

    window.dispatchEvent(new Event('resize'));

    const label = getByText('The label');
    expect(label).toBeInTheDocument();
  });
});
