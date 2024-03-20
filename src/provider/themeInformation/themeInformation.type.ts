export type ThemeInformation = {
  name: string;
};

export interface IThemeInformationProvider {
  value: ThemeInformation;
}

export type IUseThemeInformation = () => ThemeInformation;
