import { calcFirstLastVisiblePosition } from '../helper';
import { PageControlDirectionType } from '../types';

describe('Page Control Position', () => {
  it('No bullet. When currentPosition < dots, then firstVisiblePosition = 1 and lastVisiblePosition depends on firstVisiblePosition', () => {
    const currentPosition = 1;
    const dots = 5;
    const { firstVisiblePosition, lastVisiblePosition } = calcFirstLastVisiblePosition({
      isBullet: false,
      direction: PageControlDirectionType.FORTH,
      currentPosition,
      pages: 10,
      dots,
    });
    expect(firstVisiblePosition).toBe(0);
    expect(lastVisiblePosition).toBe(firstVisiblePosition + dots - 1);
  });
  it('No bullet. When position >= dots, then lastVisiblePosition = currentPosition and firstVisiblePosition depends on lastVisiblePosition', () => {
    const currentPosition = 5;
    const dots = 5;
    const { firstVisiblePosition, lastVisiblePosition } = calcFirstLastVisiblePosition({
      isBullet: false,
      direction: PageControlDirectionType.FORTH,
      currentPosition,
      pages: 10,
      dots,
    });
    expect(lastVisiblePosition).toBe(currentPosition);
    expect(firstVisiblePosition).toBe(lastVisiblePosition - (dots - 1));
  });
  it('Bullet. When direction FORTH and currentPosition < dots, then firstVisiblePosition = 1 and lastVisiblePosition depends on firstVisiblePosition', () => {
    const currentPosition = 1;
    const dots = 5;
    const { firstVisiblePosition, lastVisiblePosition } = calcFirstLastVisiblePosition({
      isBullet: true,
      direction: PageControlDirectionType.FORTH,
      currentPosition,
      pages: 10,
      dots,
    });
    expect(firstVisiblePosition).toBe(0);
    expect(lastVisiblePosition).toBe(firstVisiblePosition + dots - 1);
  });
  it('Bullet. When direction FORTH and position >= dots, then lastVisiblePosition = currentPosition and firstVisiblePosition depends on lastVisiblePosition', () => {
    const currentPosition = 5;
    const dots = 5;
    const { firstVisiblePosition, lastVisiblePosition } = calcFirstLastVisiblePosition({
      isBullet: true,
      direction: PageControlDirectionType.FORTH,
      currentPosition,
      pages: 10,
      dots,
    });
    expect(lastVisiblePosition).toBe(currentPosition);
    expect(firstVisiblePosition).toBe(lastVisiblePosition - (dots - 1));
  });
  it('Bullet. When direction BACK and pages - dots <= currentPosition, then lastVisiblePosition = pages - 1 and firstVisiblePosition depends on lastVisiblePosition', () => {
    const currentPosition = 8;
    const dots = 5;
    const pages = 10;
    const { firstVisiblePosition, lastVisiblePosition } = calcFirstLastVisiblePosition({
      isBullet: true,
      direction: PageControlDirectionType.BACK,
      currentPosition,
      pages,
      dots,
    });
    expect(lastVisiblePosition).toBe(pages - 1);
    expect(firstVisiblePosition).toBe(lastVisiblePosition - (dots - 1));
  });
  it('Bullet. When direction BACK and pages - dots > currentPosition, then firstVisiblePosition = currentPosition and lastVisiblePosition depends on firstVisiblePosition', () => {
    const currentPosition = 4;
    const dots = 5;
    const pages = 10;
    const { firstVisiblePosition, lastVisiblePosition } = calcFirstLastVisiblePosition({
      isBullet: true,
      direction: PageControlDirectionType.BACK,
      currentPosition,
      pages,
      dots,
    });
    expect(firstVisiblePosition).toBe(currentPosition);
    expect(lastVisiblePosition).toBe(firstVisiblePosition + dots - 1);
  });
});
