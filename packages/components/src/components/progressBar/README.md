# ProgressBar Component

## Overview

The **ProgressBar** component is a visual indicator that displays the progress of a task, process, or operation. It shows a horizontal bar that fills from left to right based on the completion percentage. The component supports customizable sizes, colors, animations, and ARIA attributes for accessibility.

## Features

- **Progress Visualization**: Clear visual representation of completion percentage
- **Size Variants**: Multiple size options (SMALL, MEDIUM)
- **Custom Colors**: Configurable bar and progress colors
- **Smooth Animations**: Customizable animation duration and timing function
- **Accessibility**: Full ARIA support for screen readers
- **Percentage Validation**: Automatically clamps values between 0-100
- **Flexible Styling**: Additional CSS classes for customization
- **Loading States**: Perfect for file uploads, downloads, and async operations
- **Responsive Design**: Adapts to container width

## Installation

```bash
npm install @kubit/web-ui-components
```

## Usage

### Basic Usage

```tsx
import { ProgressBar } from '@kubit/web-ui-components';

function App() {
  return (
    <ProgressBar
      variant="DEFAULT"
      size="MEDIUM"
      percentProgressCompleted={60}
      barAriaLabel="Loading progress"
    />
  );
}
```

### With Animation

```tsx
import { useEffect, useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function AnimatedProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <ProgressBar
      variant="DEFAULT"
      size="MEDIUM"
      percentProgressCompleted={progress}
      progressAnimation={{
        duration: '0.3s',
        timingFunction: 'ease-out',
      }}
      barAriaLabel={`Loading ${progress}% complete`}
    />
  );
}
```

### Custom Colors

```tsx
import { ProgressBar } from '@kubit/web-ui-components';

function CustomColorProgress() {
  return (
    <ProgressBar
      variant="DEFAULT"
      size="MEDIUM"
      percentProgressCompleted={75}
      color={{
        bar: '#e0e0e0',
        progressBar: '#4caf50',
      }}
      barAriaLabel="Task completion"
    />
  );
}
```

### File Upload Progress

```tsx
import { useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function FileUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = async (file: File) => {
    // Simulate file upload with progress tracking
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const percentComplete = (e.loaded / e.total) * 100;
        setUploadProgress(percentComplete);
      }
    });

    xhr.open('POST', '/api/upload');
    xhr.send(file);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => handleFileUpload(e.target.files[0])}
      />
      <ProgressBar
        variant="DEFAULT"
        size="MEDIUM"
        percentProgressCompleted={uploadProgress}
        progressAnimation={{
          duration: '0.2s',
          timingFunction: 'linear',
        }}
        barAriaLabel={`Upload progress: ${Math.round(uploadProgress)}%`}
      />
      <p>{Math.round(uploadProgress)}% uploaded</p>
    </div>
  );
}
```

### Different Sizes

```tsx
import { ProgressBar } from '@kubit/web-ui-components';

function ProgressSizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <p>Small</p>
        <ProgressBar
          variant="DEFAULT"
          size="SMALL"
          percentProgressCompleted={40}
          barAriaLabel="Small progress bar"
        />
      </div>

      <div>
        <p>Medium</p>
        <ProgressBar
          variant="DEFAULT"
          size="MEDIUM"
          percentProgressCompleted={60}
          barAriaLabel="Medium progress bar"
        />
      </div>
    </div>
  );
}
```

## Props

### ProgressBarProps

| Prop                       | Type                             | Required | Default          | Description                         |
| -------------------------- | -------------------------------- | -------- | ---------------- | ----------------------------------- |
| `variant`                  | `string`                         | No       | `'DEFAULT'`      | Visual variant for styling          |
| `size`                     | `'SMALL' \| 'MEDIUM'`            | No       | `'MEDIUM'`       | Size of the progress bar            |
| `percentProgressCompleted` | `number`                         | No       | `0`              | Progress percentage (0-100)         |
| `barAriaLabel`             | `string`                         | No       | -                | Accessible label for screen readers |
| `progressAnimation`        | `ProgressAnimation`              | No       | -                | Animation configuration object      |
| `color`                    | `ProgressBarColorProps`          | No       | -                | Custom colors for bar and progress  |
| `additionalVariantClasses` | `Partial<ProgressBarCssClasses>` | No       | -                | Additional CSS classes for variant  |
| `additionalSizeClasses`    | `Partial<ProgressBarCssClasses>` | No       | -                | Additional CSS classes for size     |
| `data-testid`              | `string`                         | No       | `'progress-bar'` | Test ID for component testing       |

### ProgressAnimation

Configuration for progress animation:

| Property         | Type     | Default      | Description                                                     |
| ---------------- | -------- | ------------ | --------------------------------------------------------------- |
| `duration`       | `string` | `'0.3s'`     | CSS transition duration (e.g., '0.3s', '300ms')                 |
| `timingFunction` | `string` | `'ease-out'` | CSS timing function (e.g., 'ease-out', 'linear', 'ease-in-out') |

### ProgressBarColorProps

Custom color configuration:

| Property      | Type     | Description                                             |
| ------------- | -------- | ------------------------------------------------------- |
| `bar`         | `string` | Background color of the bar container (e.g., '#e0e0e0') |
| `progressBar` | `string` | Color of the progress fill (e.g., '#007bff')            |

## Variants

### Available Variants

- **`DEFAULT`**: Standard progress bar styling

### Available Sizes

- **`SMALL`**: Compact progress bar for tight spaces
- **`MEDIUM`**: Standard size for most use cases

## Accessibility

The ProgressBar component implements WAI-ARIA progressbar pattern:

### ARIA Attributes

```tsx
<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={65}
  barAriaLabel="File download progress: 65% complete"
/>
```

The component automatically sets:

- `role="progressbar"`: Identifies the element as a progress bar
- `aria-valuenow`: Current progress value (0-100)
- `aria-valuemin`: Minimum value (0)
- `aria-valuemax`: Maximum value (100)
- `aria-label`: Descriptive label from `barAriaLabel` prop

### Screen Reader Support

```tsx
// ✅ Good: Descriptive and dynamic label
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={progress}
  barAriaLabel={`Uploading file: ${progress}% complete`}
/>

// ❌ Bad: Generic or missing label
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={progress}
  barAriaLabel="Progress"
/>
```

### Live Announcements

For dynamic progress updates:

```tsx
function AccessibleProgress() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {progress === 100 ? 'Upload complete' : `Upload progress: ${progress}%`}
      </div>
      <ProgressBar
        variant="DEFAULT"
        percentProgressCompleted={progress}
        barAriaLabel={`Uploading: ${progress}%`}
      />
    </>
  );
}
```

## Common Use Cases

### File Upload with Status

```tsx
import { useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function FileUploadWithStatus() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<
    'idle' | 'uploading' | 'complete' | 'error'
  >('idle');

  const handleUpload = async (file: File) => {
    setStatus('uploading');
    setProgress(0);

    try {
      // Upload logic with progress tracking
      for (let i = 0; i <= 100; i += 10) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setProgress(i);
      }
      setStatus('complete');
    } catch (error) {
      setStatus('error');
    }
  };

  const getBarColor = () => {
    switch (status) {
      case 'complete':
        return { bar: '#e8f5e9', progressBar: '#4caf50' };
      case 'error':
        return { bar: '#ffebee', progressBar: '#f44336' };
      default:
        return { bar: '#e3f2fd', progressBar: '#2196f3' };
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => e.target.files && handleUpload(e.target.files[0])}
        disabled={status === 'uploading'}
      />

      {status !== 'idle' && (
        <>
          <ProgressBar
            variant="DEFAULT"
            size="MEDIUM"
            percentProgressCompleted={progress}
            color={getBarColor()}
            progressAnimation={{
              duration: '0.3s',
              timingFunction: 'ease-out',
            }}
            barAriaLabel={`Upload ${progress}% complete`}
          />
          <p>
            {status === 'uploading' && `Uploading... ${progress}%`}
            {status === 'complete' && 'Upload complete!'}
            {status === 'error' && 'Upload failed'}
          </p>
        </>
      )}
    </div>
  );
}
```

### Multi-Step Form Progress

```tsx
import { useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div>
      <h2>
        Step {currentStep} of {totalSteps}
      </h2>

      <ProgressBar
        variant="DEFAULT"
        size="MEDIUM"
        percentProgressCompleted={progress}
        progressAnimation={{
          duration: '0.4s',
          timingFunction: 'ease-in-out',
        }}
        barAriaLabel={`Form progress: Step ${currentStep} of ${totalSteps}`}
      />

      <div style={{ marginTop: '20px' }}>
        {/* Form content for current step */}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button
          onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(totalSteps, prev + 1))
          }
          disabled={currentStep === totalSteps}
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

### Download Progress

```tsx
import { useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function DownloadProgress() {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const startDownload = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      const response = await fetch('/api/large-file');
      const reader = response.body?.getReader();
      const contentLength = +response.headers.get('Content-Length')!;

      let receivedLength = 0;

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        receivedLength += value.length;
        const percentComplete = (receivedLength / contentLength) * 100;
        setDownloadProgress(percentComplete);
      }

      setIsDownloading(false);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <div>
      <button onClick={startDownload} disabled={isDownloading}>
        {isDownloading ? 'Downloading...' : 'Start Download'}
      </button>

      {isDownloading && (
        <>
          <ProgressBar
            variant="DEFAULT"
            size="MEDIUM"
            percentProgressCompleted={downloadProgress}
            progressAnimation={{
              duration: '0.1s',
              timingFunction: 'linear',
            }}
            barAriaLabel={`Download progress: ${Math.round(downloadProgress)}%`}
          />
          <p>{Math.round(downloadProgress)}% downloaded</p>
        </>
      )}
    </div>
  );
}
```

### Loading State

```tsx
import { useEffect, useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function LoadingState() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <>
          <p>Loading content...</p>
          <ProgressBar
            variant="DEFAULT"
            size="MEDIUM"
            percentProgressCompleted={progress}
            progressAnimation={{
              duration: '0.1s',
              timingFunction: 'linear',
            }}
            barAriaLabel={`Loading: ${progress}%`}
          />
        </>
      ) : (
        <div>Content loaded successfully!</div>
      )}
    </div>
  );
}
```

### Task Completion Tracker

```tsx
import { useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function TaskTracker() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: true },
    { id: 2, name: 'Task 2', completed: true },
    { id: 3, name: 'Task 3', completed: false },
    { id: 4, name: 'Task 4', completed: false },
    { id: 5, name: 'Task 5', completed: false },
  ]);

  const completedTasks = tasks.filter((t) => t.completed).length;
  const progress = (completedTasks / tasks.length) * 100;

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div>
      <h3>Task Completion</h3>
      <p>
        {completedTasks} of {tasks.length} tasks completed
      </p>

      <ProgressBar
        variant="DEFAULT"
        size="MEDIUM"
        percentProgressCompleted={progress}
        color={{
          bar: '#f5f5f5',
          progressBar: progress === 100 ? '#4caf50' : '#2196f3',
        }}
        progressAnimation={{
          duration: '0.3s',
          timingFunction: 'ease-out',
        }}
        barAriaLabel={`${completedTasks} of ${tasks.length} tasks completed`}
      />

      <ul style={{ marginTop: '20px' }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {task.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Installation Progress

```tsx
import { useEffect, useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function InstallationProgress() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'Downloading files',
    'Extracting archive',
    'Installing dependencies',
    'Configuring settings',
    'Completing installation',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div>
      <h3>Installation Progress</h3>
      <p>{steps[currentStep]}...</p>

      <ProgressBar
        variant="DEFAULT"
        size="MEDIUM"
        percentProgressCompleted={progress}
        progressAnimation={{
          duration: '0.5s',
          timingFunction: 'ease-in-out',
        }}
        barAriaLabel={`Installation ${Math.round(progress)}% complete: ${steps[currentStep]}`}
      />

      <p style={{ marginTop: '10px' }}>
        Step {currentStep + 1} of {steps.length}
      </p>
    </div>
  );
}
```

### Quiz Progress

```tsx
import { useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function QuizProgress() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10;
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <h3>Quiz</h3>
        <span>
          Question {currentQuestion} of {totalQuestions}
        </span>
      </div>

      <ProgressBar
        variant="DEFAULT"
        size="SMALL"
        percentProgressCompleted={progress}
        progressAnimation={{
          duration: '0.3s',
          timingFunction: 'ease-out',
        }}
        barAriaLabel={`Quiz progress: Question ${currentQuestion} of ${totalQuestions}`}
      />

      <div style={{ marginTop: '30px' }}>
        {/* Quiz question content */}
        <p>Question {currentQuestion}: What is 2 + 2?</p>

        <button
          onClick={() =>
            setCurrentQuestion((prev) => Math.min(totalQuestions, prev + 1))
          }
          disabled={currentQuestion === totalQuestions}
          style={{ marginTop: '20px' }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
```

## Best Practices

### 1. Provide Descriptive ARIA Labels

```tsx
// ✅ Good: Descriptive and informative
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={progress}
  barAriaLabel={`Uploading ${fileName}: ${progress}% complete`}
/>

// ❌ Bad: Generic or missing
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={progress}
  barAriaLabel="Progress"
/>
```

### 2. Clamp Progress Values

```tsx
// ✅ Good: Component handles this automatically
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={progress} // Any value is automatically clamped to 0-100
/>

// ❌ Bad: Manual clamping is unnecessary
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={Math.max(0, Math.min(100, progress))}
/>
```

### 3. Use Appropriate Animation

```tsx
// ✅ Good: Smooth animation for user-initiated actions
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={progress}
  progressAnimation={{
    duration: '0.3s',
    timingFunction: 'ease-out',
  }}
/>

// ✅ Good: Linear for continuous updates
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={downloadProgress}
  progressAnimation={{
    duration: '0.1s',
    timingFunction: 'linear',
  }}
/>

// ❌ Bad: Too slow for rapid updates
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={streamProgress}
  progressAnimation={{
    duration: '2s',
    timingFunction: 'ease-in-out',
  }}
/>
```

### 4. Show Percentage Text

```tsx
// ✅ Good: Display percentage alongside progress bar
<div>
  <ProgressBar
    variant="DEFAULT"
    percentProgressCompleted={progress}
    barAriaLabel={`Upload ${progress}%`}
  />
  <p>{Math.round(progress)}% complete</p>
</div>
```

### 5. Use Color to Indicate Status

```tsx
// ✅ Good: Different colors for different states
const getProgressColor = (progress: number, hasError: boolean) => {
  if (hasError) {
    return { bar: '#ffebee', progressBar: '#f44336' }; // Red for error
  }
  if (progress === 100) {
    return { bar: '#e8f5e9', progressBar: '#4caf50' }; // Green for complete
  }
  return { bar: '#e3f2fd', progressBar: '#2196f3' }; // Blue for in-progress
};

<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={progress}
  color={getProgressColor(progress, hasError)}
/>;
```

### 6. Handle Completion

```tsx
// ✅ Good: Clear completion feedback
function ProgressWithCompletion() {
  const [progress, setProgress] = useState(0);
  const isComplete = progress === 100;

  return (
    <>
      <ProgressBar
        variant="DEFAULT"
        percentProgressCompleted={progress}
        color={isComplete ? { progressBar: '#4caf50' } : undefined}
      />
      {isComplete && <p>✓ Complete!</p>}
    </>
  );
}
```

### 7. Consider Size Context

```tsx
// ✅ Good: Appropriate size for context
// In a modal or prominent area
<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={progress}
/>

// In a list item or compact space
<ProgressBar
  variant="DEFAULT"
  size="SMALL"
  percentProgressCompleted={progress}
/>
```

## Styling

### Custom CSS Classes

```tsx
<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={75}
  additionalVariantClasses={{
    progress_bar: 'my-progress-container',
    barcontainer: 'my-bar-container',
    bar: 'my-bar',
    progressbar: 'my-progress',
  }}
  additionalSizeClasses={{
    bar: 'my-bar-size',
    progressbar: 'my-progress-size',
  }}
/>
```

### Custom Styles Example

```css
.my-progress-container {
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.my-bar {
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
}

.my-progress {
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

## Testing

### Unit Testing

```tsx
import { ProgressBar } from '@kubit/web-ui-components';
import { render, screen } from '@testing-library/react';

describe('ProgressBar', () => {
  it('renders with correct progress value', () => {
    render(
      <ProgressBar
        variant="DEFAULT"
        percentProgressCompleted={60}
        barAriaLabel="Test progress"
      />,
    );

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '60');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });

  it('clamps progress to 0-100 range', () => {
    const { rerender } = render(
      <ProgressBar
        variant="DEFAULT"
        percentProgressCompleted={150}
        barAriaLabel="Test"
      />,
    );

    let progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');

    rerender(
      <ProgressBar
        variant="DEFAULT"
        percentProgressCompleted={-10}
        barAriaLabel="Test"
      />,
    );

    progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('applies custom colors', () => {
    render(
      <ProgressBar
        variant="DEFAULT"
        percentProgressCompleted={50}
        color={{
          bar: 'lightblue',
          progressBar: 'darkblue',
        }}
      />,
    );

    const container = screen.getByTestId('progress-bar');
    expect(container).toBeInTheDocument();
  });

  it('renders with aria label', () => {
    render(
      <ProgressBar
        variant="DEFAULT"
        percentProgressCompleted={75}
        barAriaLabel="Upload progress"
      />,
    );

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-label', 'Upload progress');
  });
});
```

### Integration Testing

```tsx
import { useEffect, useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';
import { render, screen, waitFor } from '@testing-library/react';

function TestProgressAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressBar
      variant="DEFAULT"
      percentProgressCompleted={progress}
      barAriaLabel={`Progress ${progress}%`}
    />
  );
}

describe('ProgressBar Animation', () => {
  it('updates progress value', async () => {
    render(<TestProgressAnimation />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');

    await waitFor(() => {
      expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    });
  });
});
```

### Accessibility Testing

```tsx
import { ProgressBar } from '@kubit/web-ui-components';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('ProgressBar Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <ProgressBar
        variant="DEFAULT"
        size="MEDIUM"
        percentProgressCompleted={50}
        barAriaLabel="Loading content"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## Performance Considerations

### Throttle Rapid Updates

```tsx
import { useCallback, useState } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';
import { throttle } from 'lodash';

function ThrottledProgress() {
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(
    throttle((value: number) => {
      setProgress(value);
    }, 100), // Update at most every 100ms
    [],
  );

  return (
    <ProgressBar
      variant="DEFAULT"
      percentProgressCompleted={progress}
      progressAnimation={{
        duration: '0.1s',
        timingFunction: 'linear',
      }}
    />
  );
}
```

### Memoize Color Objects

```tsx
import { useMemo } from 'react';

import { ProgressBar } from '@kubit/web-ui-components';

function OptimizedProgress({ progress, isError }) {
  const colors = useMemo(() => {
    if (isError) {
      return { bar: '#ffebee', progressBar: '#f44336' };
    }
    if (progress === 100) {
      return { bar: '#e8f5e9', progressBar: '#4caf50' };
    }
    return { bar: '#e3f2fd', progressBar: '#2196f3' };
  }, [isError, progress]);

  return (
    <ProgressBar
      variant="DEFAULT"
      percentProgressCompleted={progress}
      color={colors}
    />
  );
}
```

## Related Components

- **Spinner**: For indeterminate loading states
- **Skeleton**: For content loading placeholders
- **Loader**: Alternative loading indicators

## Browser Support

The ProgressBar component is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Migration Guide

### From Previous Version

If migrating from an older version:

```tsx
// Old API
<ProgressBar
  progress={60}
  animated={true}
/>

// New API
<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={60}
  progressAnimation={{
    duration: '0.3s',
    timingFunction: 'ease-out',
  }}
  barAriaLabel="Progress 60%"
/>
```

### Key Changes

1. **Renamed Props**: `progress` → `percentProgressCompleted`
2. **Animation Configuration**: Use `progressAnimation` object
3. **Variants & Sizes**: Added variant and size system
4. **Accessibility**: Required `barAriaLabel` for better a11y
5. **Color Customization**: New `color` prop for custom colors

## Troubleshooting

### Progress Not Updating

**Problem**: Progress bar doesn't update when value changes.

**Solution**: Ensure state updates are properly triggered and component re-renders.

```tsx
// ✅ Correct: State updates trigger re-render
const [progress, setProgress] = useState(0);

<ProgressBar variant="DEFAULT" percentProgressCompleted={progress} />;
```

### Animation Too Fast/Slow

**Problem**: Animation duration doesn't match update frequency.

**Solution**: Adjust `duration` based on update frequency.

```tsx
// ✅ For rapid updates (streaming)
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={progress}
  progressAnimation={{
    duration: '0.1s',
    timingFunction: 'linear',
  }}
/>

// ✅ For slower updates (multi-step)
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={progress}
  progressAnimation={{
    duration: '0.5s',
    timingFunction: 'ease-out',
  }}
/>
```

### Color Not Applying

**Problem**: Custom colors don't appear.

**Solution**: Ensure color object has correct properties.

```tsx
// ✅ Correct: Both properties
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={50}
  color={{
    bar: '#e0e0e0',
    progressBar: '#007bff',
  }}
/>

// ❌ Incorrect: Typo in property names
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={50}
  color={{
    background: '#e0e0e0',
    fill: '#007bff',
  }}
/>
```

### Progress Over 100%

**Problem**: Progress value exceeds 100%.

**Solution**: Component automatically clamps values, but ensure your logic doesn't rely on values > 100.

```tsx
// ✅ Component handles this automatically
<ProgressBar
  variant="DEFAULT"
  percentProgressCompleted={150} // Will be clamped to 100
/>
```

## Additional Resources

- [WAI-ARIA Progressbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/meter/)
- [Progress Indicators UX](https://www.nngroup.com/articles/progress-indicators/)
- [CSS Transitions Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)

## Support

For bug reports, feature requests, or questions, please contact the development team or file an issue in the project repository.
