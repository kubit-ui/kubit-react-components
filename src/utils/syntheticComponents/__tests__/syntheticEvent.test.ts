import { dispatchSyntheticEvent } from '../syntheticEvent/syntheticEvent';

describe('syntheticEvent tests', () => {
  it('Should return a valid synthetic event', () => {
    const element = document.createElement('input');
    const eventType = 'change';
    const event = dispatchSyntheticEvent({ element, eventType });

    expect(event.type).toBe(eventType);
    expect(event.target).toBe(element);
  });
});
