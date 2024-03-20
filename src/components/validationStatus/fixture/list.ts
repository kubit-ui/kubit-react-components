import { ValidationStatusItemType, ValidationStatusState } from '../types';

export const items: ValidationStatusItemType[] = [
  {
    state: ValidationStatusState.SUCCESS,
    text: { content: 'This is the first requirement' },
  },
  {
    state: ValidationStatusState.ERROR,
    text: { content: 'This is the second requirement with a long text for testing purposes' },
  },
  {
    state: ValidationStatusState.SUCCESS,
    text: { content: 'This is the thrid requirement' },
  },
  {
    state: ValidationStatusState.DEFAULT,
    text: { content: 'This is the fourth requirement with a long text for testing purposes' },
  },
  {
    state: ValidationStatusState.DEFAULT,
    text: { content: 'This is the fifth requirement' },
  },
  {
    state: ValidationStatusState.ERROR,
    text: { content: 'This is the sixth requirement' },
  },
  {
    state: ValidationStatusState.DEFAULT,
    text: { content: 'This is the seventh requirement' },
  },
  {
    state: ValidationStatusState.DEFAULT,
    text: { content: 'This is the eighth requirement' },
  },
];
