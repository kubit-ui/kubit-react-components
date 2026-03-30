import './divider.css';

export const DividerStory = ({
  children,
}: {
  children?: string;
}): JSX.Element => {
  return <div className="storybook-divider">{children}</div>;
};
