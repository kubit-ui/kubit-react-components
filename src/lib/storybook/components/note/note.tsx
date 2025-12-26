import './styles.css';

// Available themes for component
export type ThemeType =
  | 'blue'
  | 'green'
  | 'lightBlue'
  | 'orange'
  | 'purple'
  | 'red';

export const NOTE_COLORS: Record<string, ThemeType> = {
  BLUE: 'blue',
  GREEN: 'green',
  LIGHT_BLUE: 'lightBlue',
  ORANGE: 'orange',
  PURPLE: 'purple',
  RED: 'red',
};

interface INote {
  backgroundColor?: string;
  heading?: React.ReactNode;
  text?: React.ReactNode[];
  theme?: ThemeType;
}

export const Note = ({
  theme = NOTE_COLORS.BLUE,
  ...props
}: INote): JSX.Element => {
  const themeClass = `note-theme-${theme}`;

  return (
    <div className={`note-container ${themeClass}`}>
      {props.heading && (
        <strong className="note-heading">{props.heading}</strong>
      )}
      {props.text?.map((text, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={`note-text-${index}`} className="note-text">
          {text}
        </p>
      ))}
    </div>
  );
};
