import type { Meta, StoryObj } from '@storybook/react';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { ProgressBar as ProgressBarComponent } from '@kubit-ui-web/react-components';
import { useEffect, useState } from 'react';

const { ProgressBarSizeType, ProgressBarVariantType } = KUBIT_VARIANTS;

const meta = {
  argTypes: {
    barAriaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
    color: {
      control: 'object',
      description: 'Custom colors for bar and progress',
    },
    percentProgressCompleted: {
      control: { max: 100, min: 0, step: 1, type: 'range' },
      description: 'Progress percentage (0-100)',
    },
    progressAnimation: {
      control: 'object',
      description: 'Animation configuration',
    },
    size: {
      control: 'select',
      description: 'Size of the progress bar',
      options: Object.values(ProgressBarSizeType),
    },
    variant: {
      control: 'select',
      description: 'Visual variant of the progress bar',
      options: Object.values(ProgressBarVariantType),
    },
  },
  component: ProgressBarComponent,
  tags: ['resources'],
  title: 'Components/ProgressBar',
} satisfies Meta<typeof ProgressBarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '60px',
  width: '600px',
};

export const ProgressBar: Story = {
  args: {
    barAriaLabel: 'Loading progress',
    percentProgressCompleted: 50,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      source: {
        code: `<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={50}
  barAriaLabel="Loading progress"
  progressAnimation={{
    duration: '0.3s',
    timingFunction: 'ease-out',
  }}
/>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export const AtZero: Story = {
  args: {
    barAriaLabel: 'Not started',
    percentProgressCompleted: 0,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Progress bar at 0%, representing a task that has not yet started.',
      },
      source: {
        code: `<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={0}
  barAriaLabel="Not started"
/>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <p>No progress</p>
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export const AtTwentyFive: Story = {
  args: {
    barAriaLabel: 'Progress 25% complete',
    percentProgressCompleted: 25,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar at 25%, showing early progress.',
      },
      source: {
        code: `<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={25}
  barAriaLabel="Progress 25% complete"
/>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <p>25% complete</p>
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export const AtFifty: Story = {
  args: {
    barAriaLabel: 'Progress 50% complete',
    percentProgressCompleted: 50,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar at 50%, halfway through completion.',
      },
      source: {
        code: `<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={50}
  barAriaLabel="Progress 50% complete"
/>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <p>50% complete - Halfway there!</p>
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export const AtSeventyFive: Story = {
  args: {
    barAriaLabel: 'Progress 75% complete',
    percentProgressCompleted: 75,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar at 75%, nearing completion.',
      },
      source: {
        code: `<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={75}
  barAriaLabel="Progress 75% complete"
/>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <p>75% complete - Almost done!</p>
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export const AtHundred: Story = {
  args: {
    barAriaLabel: 'Complete',
    color: {
      bar: '#e8f5e9',
      progressBar: '#4caf50',
    },
    percentProgressCompleted: 100,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar at 100%, showing completion with success color.',
      },
      source: {
        code: `<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={100}
  barAriaLabel="Complete"
  color={{
    bar: '#e8f5e9',
    progressBar: '#4caf50',
  }}
/>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <p>✓ Complete!</p>
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export const SmallSize: Story = {
  args: {
    barAriaLabel: 'Small progress bar',
    percentProgressCompleted: 60,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.SMALL,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Small size progress bar, ideal for compact spaces like list items or inline progress indicators.',
      },
      source: {
        code: `<ProgressBar
  variant="DEFAULT"
  size="SMALL"
  percentProgressCompleted={60}
  barAriaLabel="Small progress bar"
/>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <p>Small size for compact spaces</p>
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export const MediumSize: Story = {
  args: {
    barAriaLabel: 'Medium progress bar',
    percentProgressCompleted: 60,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Medium size progress bar, the standard size for most use cases.',
      },
      source: {
        code: `<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={60}
  barAriaLabel="Medium progress bar"
/>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <p>Medium size (default)</p>
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available sizes: SMALL and MEDIUM.',
      },
      source: {
        code: `{/* Small */}
<ProgressBar
  variant="DEFAULT"
  size="SMALL"
  percentProgressCompleted={40}
  barAriaLabel="Small progress"
/>

{/* Medium */}
<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={60}
  barAriaLabel="Medium progress"
/>`,
      },
    },
  },
  render: () => (
    <div style={containerStyle}>
      <div>
        <p style={{ marginBottom: '10px' }}>Small</p>
        <ProgressBarComponent
          barAriaLabel="Small progress"
          percentProgressCompleted={40}
          progressAnimation={{ duration: '0s', timingFunction: 'ease-out' }}
          size={ProgressBarSizeType.SMALL}
          variant={ProgressBarVariantType.DEFAULT}
        />
      </div>

      <div>
        <p style={{ marginBottom: '10px' }}>Medium</p>
        <ProgressBarComponent
          barAriaLabel="Medium progress"
          percentProgressCompleted={60}
          progressAnimation={{ duration: '0s', timingFunction: 'ease-out' }}
          size={ProgressBarSizeType.MEDIUM}
          variant={ProgressBarVariantType.DEFAULT}
        />
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  args: {
    barAriaLabel: 'Custom colored progress',
    color: {
      bar: '#e1bee7',
      progressBar: '#9c27b0',
    },
    percentProgressCompleted: 65,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Progress bar with custom colors for both the bar background and progress fill.',
      },
      source: {
        code: `<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={65}
  barAriaLabel="Custom colored progress"
  color={{
    bar: '#e1bee7',
    progressBar: '#9c27b0',
  }}
/>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <p>Custom purple theme</p>
      <ProgressBarComponent {...args} />
    </div>
  ),
};

export const ThemedColors: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Progress bars with semantic color themes: success (green), warning (orange), and error (red).',
      },
      source: {
        code: `{/* Success - Green */}
<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={100}
  color={{
    bar: '#e8f5e9',
    progressBar: '#4caf50',
  }}
  barAriaLabel="Success"
/>

{/* Warning - Orange */}
<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={50}
  color={{
    bar: '#fff3e0',
    progressBar: '#ff9800',
  }}
  barAriaLabel="Warning"
/>

{/* Error - Red */}
<ProgressBar
  variant="DEFAULT"
  size="MEDIUM"
  percentProgressCompleted={30}
  color={{
    bar: '#ffebee',
    progressBar: '#f44336',
  }}
  barAriaLabel="Error"
/>`,
      },
    },
  },
  render: () => (
    <div style={containerStyle}>
      <div>
        <p style={{ marginBottom: '10px' }}>Success - Complete</p>
        <ProgressBarComponent
          barAriaLabel="Upload complete"
          color={{
            bar: '#e8f5e9',
            progressBar: '#4caf50',
          }}
          percentProgressCompleted={100}
          progressAnimation={{ duration: '0s', timingFunction: 'ease-out' }}
          size={ProgressBarSizeType.MEDIUM}
          variant={ProgressBarVariantType.DEFAULT}
        />
      </div>

      <div>
        <p style={{ marginBottom: '10px' }}>Warning - In Progress</p>
        <ProgressBarComponent
          barAriaLabel="Processing with warnings"
          color={{
            bar: '#fff3e0',
            progressBar: '#ff9800',
          }}
          percentProgressCompleted={50}
          progressAnimation={{ duration: '0s', timingFunction: 'ease-out' }}
          size={ProgressBarSizeType.MEDIUM}
          variant={ProgressBarVariantType.DEFAULT}
        />
      </div>

      <div>
        <p style={{ marginBottom: '10px' }}>Error - Failed</p>
        <ProgressBarComponent
          barAriaLabel="Upload failed"
          color={{
            bar: '#ffebee',
            progressBar: '#f44336',
          }}
          percentProgressCompleted={30}
          progressAnimation={{ duration: '0s', timingFunction: 'ease-out' }}
          size={ProgressBarSizeType.MEDIUM}
          variant={ProgressBarVariantType.DEFAULT}
        />
      </div>
    </div>
  ),
};

export const WithAnimation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Progress bar with smooth animation as the value increases over time.',
      },
      source: {
        code: `function AnimatedProgress() {
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
      barAriaLabel={\`Loading \${progress}% complete\`}
    />
  );
}`,
      },
    },
  },
  render: () => {
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
      <div style={containerStyle}>
        <p>Animating to 100% (watch it progress)</p>
        <ProgressBarComponent
          barAriaLabel={`Loading ${progress}% complete`}
          percentProgressCompleted={progress}
          progressAnimation={{
            duration: '0.3s',
            timingFunction: 'ease-out',
          }}
          size={ProgressBarSizeType.MEDIUM}
          variant={ProgressBarVariantType.DEFAULT}
        />
        <p>{progress}% complete</p>
      </div>
    );
  },
};

export const FileUpload: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Progress bar showing file upload progress with a button to start the upload simulation.',
      },
      source: {
        code: `function FileUploadProgress() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);

    const timer = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsUploading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <div>
      <button onClick={simulateUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload File'}
      </button>

      {isUploading && (
        <>
          <ProgressBar
            variant="DEFAULT"
            size="MEDIUM"
            percentProgressCompleted={uploadProgress}
            progressAnimation={{
              duration: '0.2s',
              timingFunction: 'linear',
            }}
            barAriaLabel={\`Upload progress: \${uploadProgress}%\`}
          />
          <p>{uploadProgress}% uploaded</p>
        </>
      )}
    </div>
  );
}`,
      },
    },
  },
  render: () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const simulateUpload = () => {
      setIsUploading(true);
      setUploadProgress(0);

      const timer = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setIsUploading(false), 500);
            return 100;
          }
          return prev + 5;
        });
      }, 200);
    };

    return (
      <div style={containerStyle}>
        <button
          disabled={isUploading}
          style={{
            cursor: isUploading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            opacity: isUploading ? 0.6 : 1,
            padding: '10px 20px',
          }}
          onClick={simulateUpload}
        >
          {isUploading ? 'Uploading...' : 'Upload File'}
        </button>

        {isUploading && (
          <>
            <ProgressBarComponent
              barAriaLabel={`Upload progress: ${uploadProgress}%`}
              percentProgressCompleted={uploadProgress}
              progressAnimation={{
                duration: '0.2s',
                timingFunction: 'linear',
              }}
              size={ProgressBarSizeType.MEDIUM}
              variant={ProgressBarVariantType.DEFAULT}
            />
            <p style={{ margin: '10px 0', textAlign: 'center' }}>
              {uploadProgress === 100
                ? '✓ Upload complete!'
                : `${uploadProgress}% uploaded`}
            </p>
          </>
        )}
      </div>
    );
  },
};

export const MultiStepForm: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Progress bar tracking completion of a multi-step form with navigation controls.',
      },
      source: {
        code: `function MultiStepProgress() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div>
      <h3>Step {currentStep} of {totalSteps}</h3>

      <ProgressBar
        variant="DEFAULT"
        size="MEDIUM"
        percentProgressCompleted={progress}
        progressAnimation={{
          duration: '0.4s',
          timingFunction: 'ease-in-out',
        }}
        barAriaLabel={\`Step \${currentStep} of \${totalSteps}\`}
      />

      <div>
        <button
          onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
          disabled={currentStep === totalSteps}
        >
          Next
        </button>
      </div>
    </div>
  );
}`,
      },
    },
  },
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;
    const progress = (currentStep / totalSteps) * 100;

    return (
      <div style={containerStyle}>
        <h3 style={{ margin: 0 }}>
          Step {currentStep} of {totalSteps}
        </h3>

        <ProgressBarComponent
          barAriaLabel={`Step ${currentStep} of ${totalSteps}`}
          percentProgressCompleted={progress}
          progressAnimation={{
            duration: '0.4s',
            timingFunction: 'ease-in-out',
          }}
          size={ProgressBarSizeType.MEDIUM}
          variant={ProgressBarVariantType.DEFAULT}
        />

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button
            disabled={currentStep === 1}
            style={{
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
              opacity: currentStep === 1 ? 0.5 : 1,
              padding: '8px 16px',
            }}
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
          >
            ← Previous
          </button>
          <button
            disabled={currentStep === totalSteps}
            style={{
              cursor: currentStep === totalSteps ? 'not-allowed' : 'pointer',
              opacity: currentStep === totalSteps ? 0.5 : 1,
              padding: '8px 16px',
            }}
            onClick={() =>
              setCurrentStep((prev) => Math.min(totalSteps, prev + 1))
            }
          >
            Next →
          </button>
        </div>

        <p style={{ margin: 0, textAlign: 'center' }}>{progress}% complete</p>
      </div>
    );
  },
};

export const TaskCompletion: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Progress bar tracking task completion with a checklist. Changes color when all tasks are complete.',
      },
      source: {
        code: `function TaskTracker() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: true },
    { id: 2, name: 'Task 2', completed: true },
    { id: 3, name: 'Task 3', completed: false },
    { id: 4, name: 'Task 4', completed: false },
    { id: 5, name: 'Task 5', completed: false },
  ]);

  const completedTasks = tasks.filter(t => t.completed).length;
  const progress = (completedTasks / tasks.length) * 100;

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h3>Task Completion</h3>
      <p>{completedTasks} of {tasks.length} tasks completed</p>

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
        barAriaLabel={\`\${completedTasks} of \${tasks.length} tasks completed\`}
      />

      <ul>
        {tasks.map(task => (
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
}`,
      },
    },
  },
  render: () => {
    const [tasks, setTasks] = useState([
      { completed: true, id: 1, name: 'Design mockups' },
      { completed: true, id: 2, name: 'Code implementation' },
      { completed: false, id: 3, name: 'Write tests' },
      { completed: false, id: 4, name: 'Code review' },
      { completed: false, id: 5, name: 'Deploy to production' },
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
      <div style={containerStyle}>
        <h3 style={{ margin: 0 }}>Project Tasks</h3>
        <p style={{ margin: '10px 0' }}>
          {completedTasks} of {tasks.length} tasks completed
        </p>

        <ProgressBarComponent
          barAriaLabel={`${completedTasks} of ${tasks.length} tasks completed`}
          color={{
            bar: '#f5f5f5',
            progressBar: progress === 100 ? '#4caf50' : '#2196f3',
          }}
          percentProgressCompleted={progress}
          progressAnimation={{
            duration: '0.3s',
            timingFunction: 'ease-out',
          }}
          size={ProgressBarSizeType.MEDIUM}
          variant={ProgressBarVariantType.DEFAULT}
        />

        <ul style={{ listStyle: 'none', margin: '20px 0', padding: 0 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ padding: '8px 0' }}>
              <label
                style={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <input
                  checked={task.completed}
                  type="checkbox"
                  onChange={() => toggleTask(task.id)}
                />
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  {task.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Progress bar indicating loading state, transitioning to completed content when finished.',
      },
      source: {
        code: `function LoadingProgress() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
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
            barAriaLabel={\`Loading: \${progress}%\`}
          />
        </>
      ) : (
        <div>Content loaded successfully!</div>
      )}
    </div>
  );
}`,
      },
    },
  },
  render: () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (!isLoading) {
        return undefined;
      }

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setIsLoading(false), 300);
            return 100;
          }
          return prev + 5;
        });
      }, 100);

      return () => clearInterval(timer);
    }, [isLoading]);

    const handleReload = () => {
      setIsLoading(true);
      setProgress(0);
    };

    return (
      <div style={containerStyle}>
        {isLoading ? (
          <>
            <p>Loading content...</p>
            <ProgressBarComponent
              barAriaLabel={`Loading: ${progress}%`}
              percentProgressCompleted={progress}
              progressAnimation={{
                duration: '0.1s',
                timingFunction: 'linear',
              }}
              size={ProgressBarSizeType.MEDIUM}
              variant={ProgressBarVariantType.DEFAULT}
            />
            <p style={{ margin: '10px 0', textAlign: 'center' }}>{progress}%</p>
          </>
        ) : (
          <>
            <div
              style={{
                background: '#f0f0f0',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: '18px', margin: 0 }}>
                ✓ Content loaded successfully!
              </p>
            </div>
            <button
              style={{ marginTop: '20px', padding: '8px 16px' }}
              onClick={handleReload}
            >
              Reload
            </button>
          </>
        )}
      </div>
    );
  },
};

export const DownloadProgress: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Progress bar tracking file download progress with smooth linear animation.',
      },
      source: {
        code: `function DownloadTracker() {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const startDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    const timer = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsDownloading(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
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
            barAriaLabel={\`Download progress: \${Math.round(downloadProgress)}%\`}
          />
          <p>{Math.round(downloadProgress)}% downloaded</p>
        </>
      )}
    </div>
  );
}`,
      },
    },
  },
  render: () => {
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [isDownloading, setIsDownloading] = useState(false);

    const startDownload = () => {
      setIsDownloading(true);
      setDownloadProgress(0);

      const timer = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setIsDownloading(false), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };

    return (
      <div style={containerStyle}>
        <button
          disabled={isDownloading}
          style={{
            cursor: isDownloading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            opacity: isDownloading ? 0.6 : 1,
            padding: '10px 20px',
          }}
          onClick={startDownload}
        >
          {isDownloading ? 'Downloading...' : '⬇ Start Download'}
        </button>

        {isDownloading && (
          <>
            <ProgressBarComponent
              barAriaLabel={`Download progress: ${Math.round(downloadProgress)}%`}
              percentProgressCompleted={downloadProgress}
              progressAnimation={{
                duration: '0.1s',
                timingFunction: 'linear',
              }}
              size={ProgressBarSizeType.MEDIUM}
              variant={ProgressBarVariantType.DEFAULT}
            />
            <p style={{ margin: '10px 0', textAlign: 'center' }}>
              {downloadProgress === 100
                ? '✓ Download complete!'
                : `${Math.round(downloadProgress)}% downloaded (${Math.round((downloadProgress * 100) / 100)} MB of 100 MB)`}
            </p>
          </>
        )}
      </div>
    );
  },
};

export const WithAccessibility: Story = {
  args: {
    barAriaLabel: 'Document upload progress: 70 percent complete',
    percentProgressCompleted: 70,
    progressAnimation: {
      duration: '0s',
      timingFunction: 'ease-out',
    },
    size: ProgressBarSizeType.MEDIUM,
    variant: ProgressBarVariantType.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Progress bar with full accessibility features including ARIA attributes, live region for screen reader announcements, and descriptive labels.',
      },
      source: {
        code: `<div>
  <div aria-live="polite" aria-atomic="true" className="sr-only">
    Upload progress: 70 percent complete
  </div>

  <ProgressBar
    variant="DEFAULT"
    size="MEDIUM"
    percentProgressCompleted={70}
    barAriaLabel="Document upload progress: 70 percent complete"
    progressAnimation={{
      duration: '0.3s',
      timingFunction: 'ease-out',
    }}
  />

  <p id="progress-description">
    Uploading document.pdf - 70% complete
  </p>
</div>`,
      },
    },
  },
  render: (args) => (
    <div style={containerStyle}>
      <div
        aria-atomic="true"
        aria-live="polite"
        style={{
          height: '1px',
          left: '-10000px',
          overflow: 'hidden',
          position: 'absolute',
          width: '1px',
        }}
      >
        Upload progress: {args.percentProgressCompleted} percent complete
      </div>

      <div style={{ marginBottom: '10px' }}>
        <strong>Accessibility features:</strong>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>ARIA role="progressbar"</li>
          <li>aria-valuenow, aria-valuemin, aria-valuemax attributes</li>
          <li>Descriptive aria-label</li>
          <li>Live region for screen reader announcements</li>
          <li>Visual percentage display</li>
        </ul>
      </div>

      <ProgressBarComponent {...args} />

      <p
        id="progress-description"
        style={{ marginTop: '10px', textAlign: 'center' }}
      >
        Uploading document.pdf - {args.percentProgressCompleted}% complete
      </p>
    </div>
  ),
};
