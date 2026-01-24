import './note.css';

// eslint-disable-next-line no-restricted-imports
import React from 'react';

type NoteVariant = 'information' | 'success' | 'warning' | 'error';

interface INote {
  variant?: NoteVariant;
  heading?: React.ReactNode;
  text?: React.ReactNode[];
}

export const Note = ({
  heading,
  text,
  variant = 'information',
}: INote): JSX.Element => {
  return (
    <div className={`kbt-note-container kbt-note-${variant}`}>
      {<div className="kbt-note-heading">{heading || variant}</div>}
      {text && (
        <div className="kbt-note-text">
          {text.map((t, idx) => (
            <div key={idx}>{t}</div>
          ))}
        </div>
      )}
    </div>
  );
};
