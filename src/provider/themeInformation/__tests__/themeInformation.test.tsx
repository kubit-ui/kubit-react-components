import { render, screen } from '@testing-library/react';
import * as React from 'react';

import { ThemeInformationProvider, useThemeInformation } from '../themeInformation';

const ExampleComponent = () => {
  const themeInformation = useThemeInformation();

  return <h1>{themeInformation.name}</h1>;
};

describe('Testing Theme information', () => {
  it('Should render children with theme information', () => {
    render(
      <ThemeInformationProvider
        value={{
          name: 'sb',
        }}
      >
        <ExampleComponent />
      </ThemeInformationProvider>
    );

    const element = screen.findByText('sb');

    expect(element).toBeDefined();
  });

  it('Should throw if components uses useThemeInformation out of ThemeInformationProvider', () => {
    // Avoid console.error when it's expected to catch an exception
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    expect(() => {
      render(<ExampleComponent />);
    }).toThrow('should use useThemeInformation into ThemeInformationProvider');
  });
});
