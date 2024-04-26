// mock hooks
import * as styledComponents from 'styled-components';

import { useStylesV2 } from '../useStylesV2';

describe('useStylesV2', () => {
  it('When no styleName in theme, we expect an exception', () => {
    const useThemeHock = () => ({
      MEDIA_QUERIES: {
        onlyDesktop: 'onlyDesktop',
        tabletAndDesktop: 'tabletAndDesktop',
        onlyTablet: 'onlyTablet',
        mobileAndTablet: 'mobileAndTablet',
        onlyMobile: 'onlyMobile',
        matchMedia: {
          onlyDesktop: 'onlyDesktop',
          onlyMobile: 'onlyMobile',
          onlyTablet: 'onlyTablet',
        },
      },
      SPACINGS: {},
    });
    jest.spyOn(styledComponents, 'useTheme').mockImplementation(useThemeHock);
    expect(() => {
      useStylesV2({ styleName: 'styleName' });
    }).toThrow('styles styleName does not exist');
  });

  it('When no typeName in styles, we expect an exception', () => {
    const useThemeHock = () => ({
      MEDIA_QUERIES: {
        onlyDesktop: 'onlyDesktop',
        tabletAndDesktop: 'tabletAndDesktop',
        onlyTablet: 'onlyTablet',
        mobileAndTablet: 'mobileAndTablet',
        onlyMobile: 'onlyMobile',
        matchMedia: {
          onlyDesktop: 'onlyDesktop',
          onlyMobile: 'onlyMobile',
          onlyTablet: 'onlyTablet',
        },
      },
      SPACINGS: {},
      styleName: {},
    });
    jest.spyOn(styledComponents, 'useTheme').mockImplementation(useThemeHock);
    expect(() => {
      useStylesV2({ styleName: 'styleName', variantName: 'typeName' });
    }).toThrow('type typeName does not exist');
  });

  it('When styleName in theme and no typeName, should return styles', () => {
    const useThemeHock = () => ({
      MEDIA_QUERIES: {
        onlyDesktop: 'onlyDesktop',
        tabletAndDesktop: 'tabletAndDesktop',
        onlyTablet: 'onlyTablet',
        mobileAndTablet: 'mobileAndTablet',
        onlyMobile: 'onlyMobile',
        matchMedia: {
          onlyDesktop: 'onlyDesktop',
          onlyMobile: 'onlyMobile',
          onlyTablet: 'onlyTablet',
        },
      },
      SPACINGS: {},
      styleName: 'styleName',
    });
    jest.spyOn(styledComponents, 'useTheme').mockImplementation(useThemeHock);
    const styles = useStylesV2({ styleName: 'styleName' });
    expect(styles).toBe('styleName');
  });
  it('When styleName in theme and typeName, should return typeName styles', () => {
    const useThemeHock = () => ({
      MEDIA_QUERIES: {
        onlyDesktop: 'onlyDesktop',
        tabletAndDesktop: 'tabletAndDesktop',
        onlyTablet: 'onlyTablet',
        mobileAndTablet: 'mobileAndTablet',
        onlyMobile: 'onlyMobile',
        matchMedia: {
          onlyDesktop: 'onlyDesktop',
          onlyMobile: 'onlyMobile',
          onlyTablet: 'onlyTablet',
        },
      },
      SPACINGS: {},
      styleName: {
        typeName: 'typeName',
      },
    });
    jest.spyOn(styledComponents, 'useTheme').mockImplementation(useThemeHock);
    const styles = useStylesV2({ styleName: 'styleName', variantName: 'typeName' });
    expect(styles).toBe('typeName');
  });
  it('return undefined when isOptional is true and variantName does not exist', () => {
    const useThemeHock = () => ({
      MEDIA_QUERIES: {
        onlyDesktop: 'onlyDesktop',
        tabletAndDesktop: 'tabletAndDesktop',
        onlyTablet: 'onlyTablet',
        mobileAndTablet: 'mobileAndTablet',
        onlyMobile: 'onlyMobile',
        matchMedia: {
          onlyDesktop: 'onlyDesktop',
          onlyMobile: 'onlyMobile',
          onlyTablet: 'onlyTablet',
        },
      },
      SPACINGS: {},
      styleName: {},
    });
    jest.spyOn(styledComponents, 'useTheme').mockImplementation(useThemeHock);
    const styles = useStylesV2({
      styleName: 'styleName',
      variantName: 'fakeTypeName',
      isOptional: true,
    });
    expect(styles).toBe(undefined);
  });
  it('return undefined when isOptional is true and styleName does not exist', () => {
    const useThemeHock = () => ({
      MEDIA_QUERIES: {
        onlyDesktop: 'onlyDesktop',
        tabletAndDesktop: 'tabletAndDesktop',
        onlyTablet: 'onlyTablet',
        mobileAndTablet: 'mobileAndTablet',
        onlyMobile: 'onlyMobile',
        matchMedia: {
          onlyDesktop: 'onlyDesktop',
          onlyMobile: 'onlyMobile',
          onlyTablet: 'onlyTablet',
        },
      },
      SPACINGS: {},
    });
    jest.spyOn(styledComponents, 'useTheme').mockImplementation(useThemeHock);
    const styles = useStylesV2({
      styleName: 'fakeStyleName',
      isOptional: true,
    });
    expect(styles).toBe(undefined);
  });
});
