import * as React from 'react';

export interface IGenericComponent {
  aria?: React.AriaAttributes;
  id?: string;
  role?: React.AriaRole;
  htmlFor?: string;
}

export interface IInputComponent {
  errorMessageId?: string;
  id?: string;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  value?: string | number;
}

export type ClickableType<T> = {
  onClick?: React.MouseEventHandler<T>;
};

export type HoverableType<T> = {
  onMouseEnter?: React.MouseEventHandler<T>;
  onMouseLeave?: React.MouseEventHandler<T>;
};

export type AriaType = React.AriaAttributes;

export type JSONType =
  | string
  | number
  | boolean
  | null
  | undefined
  | JSONType[]
  | { [key: string]: JSONType };

export type CursorType = {
  start: number;
  end: number;
};

export type EventKeyPressRefType = {
  cursor: CursorType;
  key: string;
};

export type InputWrapperProps = {
  children: React.ReactNode;
};

export type ArgTypesReturn = {
  [key: string]: {
    description?: string;
    options?: (string | null | undefined | JSX.Element)[];
    defaultValue?: string | boolean | number | object;
    type?: { name?: string; required?: boolean };
    control?:
      | {
          type?: string;
          max?: number;
          min?: number;
          step?: number;
          labels?: { [option: string]: string | null };
        }
      | boolean;
    table?: {
      type?: {
        summary: string;
        detail?: string | (string | undefined)[];
      };
      defaultValue?: { summary: string | boolean | number | object | null; detail?: string };
      category?: string;
      disable?: boolean;
    };
  };
};
