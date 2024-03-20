export interface IRegex {
  [key: string]: string | ((value: string) => boolean);
}

export interface IRegexCountry {
  [key: string]: IRegex | string;
}

export type ValidationsType = {
  country?: string;
  regex?: IRegex | IRegexCountry;
};

export interface IValidationsProvider {
  value: ValidationsType;
}

export interface IUseValidations {
  validationValue: (key: string, value: string) => boolean;
}
