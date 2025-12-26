import { describe, expect, it } from 'vitest';

import { crumbMaxCharName } from '../crumbMaxCharName';

const baseCrumb = {
  name: 'LongBreadcrumbName',
  url: '/test',
};

describe('crumbMaxCharName', () => {
  it('trunca el nombre si supera el límite y no es el último crumb', () => {
    const result = crumbMaxCharName(baseCrumb, 5, false, false);
    expect(result.name).toBe('LongB...');
  });

  it('no trunca si el nombre está dentro del límite', () => {
    const crumb = { ...baseCrumb, name: 'Short' };
    const result = crumbMaxCharName(crumb, 10, false, false);
    expect(result.name).toBe('Short');
  });

  it('no trunca si es el último crumb y overflow es false', () => {
    const result = crumbMaxCharName(baseCrumb, 5, false, true);
    expect(result.name).toBe(baseCrumb.name);
  });

  it('trunca si es el último crumb y overflow es true', () => {
    const result = crumbMaxCharName(baseCrumb, 5, true, true);
    expect(result.name).toBe('LongB...');
  });

  it('devuelve un nuevo objeto si trunca', () => {
    const result = crumbMaxCharName(baseCrumb, 5, false, false);
    expect(result).not.toBe(baseCrumb);
  });

  it('devuelve el mismo objeto si no trunca', () => {
    const crumb = { ...baseCrumb, name: 'Short' };
    const result = crumbMaxCharName(crumb, 10, false, false);
    expect(result).toBe(crumb);
  });
});
