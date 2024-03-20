import { videoFormatTime } from '../time';

describe('utils - videoFormatTime', () => {
  it('format time with totalSeconds', () => {
    expect(videoFormatTime(2, 10)).toEqual('00:02 / 00:10');
  });
  it('format time without totalSeconds', () => {
    expect(videoFormatTime(2)).toBeNull();
  });
});
