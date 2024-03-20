// mock hooks
import * as styledComponents from 'styled-components';

import { useStyles } from '../useStyles';

describe('useStyles', () => {
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
      useStyles('styleName');
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
      useStyles('styleName', 'typeName');
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
    const styles = useStyles('styleName');
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
    const styles = useStyles('styleName', 'typeName');
    expect(styles).toBe('typeName');
  });
});
