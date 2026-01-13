import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';

import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { SelectorBoxFile } from '../selectorBoxFile';

const meta = {
  component: SelectorBoxFile,
  parameters: {
    layout: 'centered',
  },
  tags: ['forms', 'upload', 'file'],
  title: 'Components/Forms/SelectorBoxFile',
} satisfies Meta<typeof SelectorBoxFile>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic file selector with default state
 */
export const Basic: Story = {
  args: {
    containerBoxStateContent: {
      default: {
        actionText: 'Browse files',
        description: 'or drag and drop your files here',
        icon: { altText: 'Upload icon', icon: ICONS.PLACEHOLDER },
      },
      disabled: {
        actionText: 'Browse files',
        description: 'Upload is currently disabled',
        icon: { altText: 'Upload disabled', icon: ICONS.PLACEHOLDER },
      },
      error: {
        actionIcon: { altText: 'Refresh', icon: ICONS.PLACEHOLDER },
        actionText: 'Try again',
        description: 'Upload failed',
        icon: { altText: 'Error', icon: ICONS.PLACEHOLDER },
      },
      loading: {
        actionText: 'Cancel upload',
        description: 'Uploading your file...',
        icon: { altText: 'Loading', icon: ICONS.PLACEHOLDER },
      },
      success: {
        actionIcon: { altText: 'Delete', icon: ICONS.PLACEHOLDER },
        actionText: 'Delete file',
        description: 'File uploaded successfully',
        icon: { altText: 'Success', icon: ICONS.PLACEHOLDER },
      },
    },
    fileExtension: ['pdf', 'jpg', 'png'],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectorBoxFile
  variant="DEFAULT"
  fileExtension={['pdf', 'jpg', 'png']}
  containerBoxStateContent={{
    default: {
      icon: ICONS.PLACEHOLDER,
      actionText: 'Browse files',
      description: 'or drag and drop',
    },
    success: {
      icon: ICONS.PLACEHOLDER,
      actionText: 'Delete file',
      actionIcon: ICONS.PLACEHOLDER,
    },
    error: {
      icon: ICONS.PLACEHOLDER,
      actionText: 'Try again',
      actionIcon: ICONS.PLACEHOLDER,
    },
    loading: {
      icon: ICONS.PLACEHOLDER,
      actionText: 'Cancel upload',
    },
    disabled: {
      icon: ICONS.PLACEHOLDER,
      actionText: 'Browse files',
      description: 'Upload disabled',
    },
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [filename, setFilename] = useState<string | undefined>();
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFilename(file.name);
        setSuccess(true);
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      if (success) {
        e.preventDefault();
        (e.target as HTMLInputElement).value = '';
        setFilename(undefined);
        setSuccess(false);
      }
    };

    return (
      <SelectorBoxFile
        {...args}
        filename={filename}
        success={success}
        onChange={handleChange}
        onClick={handleClick}
      />
    );
  },
};

/**
 * File selector with size limit validation (5MB)
 */
export const WithSizeLimit: Story = {
  args: {
    containerBoxStateContent: {
      default: {
        actionText: 'Choose file',
        description: 'Maximum size: 5MB',
        icon: { altText: 'File icon', icon: ICONS.PLACEHOLDER },
      },
      disabled: {
        actionText: 'Choose file',
        description: 'Upload not available',
        icon: { altText: 'File disabled', icon: ICONS.PLACEHOLDER },
      },
      error: {
        actionIcon: { altText: 'Retry', icon: ICONS.PLACEHOLDER },
        actionText: 'Try again',
        description: 'File exceeds maximum size',
        icon: { altText: 'Warning', icon: ICONS.PLACEHOLDER },
      },
      loading: {
        actionText: 'Uploading...',
        description: 'Processing your document',
        icon: { altText: 'Loading', icon: ICONS.PLACEHOLDER },
      },
      success: {
        actionIcon: { altText: 'Remove', icon: ICONS.PLACEHOLDER },
        actionText: 'Remove',
        description: 'Document uploaded',
        icon: { altText: 'Document ready', icon: ICONS.PLACEHOLDER },
      },
    },
    errorMaxSizeMessage: 'File size exceeds 5MB limit',
    fileExtension: ['pdf', 'doc', 'docx'],
    maxSize: 5,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectorBoxFile
  variant="DEFAULT"
  maxSize={5}
  fileExtension={['pdf', 'doc', 'docx']}
  errorMaxSizeMessage="File size exceeds 5MB limit"
  containerBoxStateContent={{
    default: {
      icon: 'upload',
      actionText: 'Choose file',
      description: 'Max size: 5MB',
    },
    success: {
      icon: 'file',
      actionText: 'Remove',
      actionIcon: 'x',
    },
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [filename, setFilename] = useState<string | undefined>();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(false);
      const file = e.target.files?.[0];
      if (file) {
        setFilename(file.name);
        setSuccess(true);
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      if (success) {
        e.preventDefault();
        (e.target as HTMLInputElement).value = '';
        setFilename(undefined);
        setSuccess(false);
        setError(false);
      }
    };

    return (
      <SelectorBoxFile
        {...args}
        error={error}
        filename={filename}
        success={success}
        onChange={handleChange}
        onClick={handleClick}
        onSizeError={setError}
      />
    );
  },
};

/**
 * File selector with custom extension validation
 */
export const WithExtensionValidation: Story = {
  args: {
    containerBoxStateContent: {
      default: {
        actionText: 'Upload image',
        description: 'JPG, PNG or GIF only',
        icon: { altText: 'Image icon', icon: ICONS.PLACEHOLDER },
      },
      disabled: {
        actionText: 'Upload image',
        description: 'Image upload disabled',
        icon: { altText: 'Image disabled', icon: ICONS.PLACEHOLDER },
      },
      error: {
        actionIcon: { altText: 'Retry', icon: ICONS.PLACEHOLDER },
        actionText: 'Try again',
        description: 'Invalid format. Use JPG, PNG or GIF',
        icon: { altText: 'Invalid format', icon: ICONS.PLACEHOLDER },
      },
      loading: {
        actionText: 'Processing...',
        description: 'Optimizing your image',
        icon: { altText: 'Processing', icon: ICONS.PLACEHOLDER },
      },
      success: {
        actionIcon: { altText: 'Delete', icon: ICONS.PLACEHOLDER },
        actionText: 'Delete',
        description: 'Image uploaded',
        icon: { altText: 'Success', icon: ICONS.PLACEHOLDER },
      },
    },
    errorFileExtensionMessage: 'Invalid file type. Only images allowed.',
    fileExtension: ['jpg', 'jpeg', 'png', 'gif'],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectorBoxFile
  variant="DEFAULT"
  fileExtension={['jpg', 'jpeg', 'png', 'gif']}
  errorFileExtensionMessage="Invalid file type. Only images allowed."
  containerBoxStateContent={{
    default: {
      icon: 'image',
      actionText: 'Upload image',
      description: 'JPG, PNG or GIF only',
    },
  }}
  onFileError={(hasError) => console.log('Extension error:', hasError)}
/>`,
      },
    },
  },
  render: (args) => {
    const [filename, setFilename] = useState<string | undefined>();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(false);
      const file = e.target.files?.[0];
      if (file) {
        setFilename(file.name);
        setSuccess(true);
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      if (success || error) {
        e.preventDefault();
        (e.target as HTMLInputElement).value = '';
        setFilename(undefined);
        setSuccess(false);
        setError(false);
      }
    };

    return (
      <SelectorBoxFile
        {...args}
        error={error}
        filename={filename}
        success={success}
        onChange={handleChange}
        onClick={handleClick}
        onFileError={setError}
      />
    );
  },
};

/**
 * File selector in disabled state
 */
export const Disabled: Story = {
  args: {
    containerBoxStateContent: {
      default: {
        actionText: 'Browse files',
        description: 'File upload',
        icon: { altText: 'Upload', icon: ICONS.PLACEHOLDER },
      },
      disabled: {
        actionText: 'Upload unavailable',
        description: 'This feature is currently disabled',
        icon: { altText: 'Locked', icon: ICONS.PLACEHOLDER },
      },
      error: {
        actionIcon: { altText: 'Retry', icon: ICONS.PLACEHOLDER },
        actionText: 'Try again',
        description: 'Something went wrong',
        icon: { altText: 'Error', icon: ICONS.PLACEHOLDER },
      },
      loading: {
        actionText: 'Uploading...',
        description: 'Processing file',
        icon: { altText: 'Loading', icon: ICONS.PLACEHOLDER },
      },
      success: {
        actionIcon: { altText: 'Remove', icon: ICONS.PLACEHOLDER },
        actionText: 'Remove',
        description: 'Upload complete',
        icon: { altText: 'Complete', icon: ICONS.PLACEHOLDER },
      },
    },
    disabled: true,
    fileExtension: ['pdf'],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectorBoxFile
  variant="DEFAULT"
  disabled={true}
  fileExtension={['pdf']}
  containerBoxStateContent={{
    disabled: {
      icon: 'upload-off',
      actionText: 'Upload unavailable',
      description: 'Feature disabled',
    },
  }}
/>`,
      },
    },
  },
};

/**
 * File selector with loading state simulation
 */
export const WithLoading: Story = {
  args: {
    containerBoxStateContent: {
      default: {
        actionText: 'Select document',
        description: 'PDF files only',
        icon: { altText: 'Document', icon: ICONS.PLACEHOLDER },
      },
      disabled: {
        actionText: 'Select document',
        description: 'Upload disabled',
        icon: { altText: 'Document disabled', icon: ICONS.PLACEHOLDER },
      },
      error: {
        actionIcon: { altText: 'Retry', icon: ICONS.PLACEHOLDER },
        actionText: 'Retry upload',
        description: 'Upload interrupted',
        icon: { altText: 'Upload error', icon: ICONS.PLACEHOLDER },
      },
      loading: {
        actionText: 'Cancel',
        description: 'Uploading document...',
        icon: { altText: 'Uploading', icon: ICONS.PLACEHOLDER },
      },
      success: {
        actionIcon: { altText: 'Delete', icon: ICONS.PLACEHOLDER },
        actionText: 'Delete',
        description: 'PDF uploaded successfully',
        icon: { altText: 'PDF ready', icon: ICONS.PLACEHOLDER },
      },
    },
    fileExtension: ['pdf'],
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `const [loading, setLoading] = useState(false);
const [percentage, setPercentage] = useState(0);

<SelectorBoxFile
  variant="DEFAULT"
  loading={loading}
  percentage={percentage}
  fileExtension={['pdf']}
  containerBoxStateContent={{
    loading: {
      icon: 'loader',
      actionText: 'Cancel',
    },
  }}
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoading(true);
      // Simulate upload progress
      const interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 0;
          }
          return prev + 10;
        });
      }, 200);
    }
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [filename, setFilename] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFilename(file.name);
        setLoading(true);
        setPercentage(0);

        // Simulate upload progress
        const interval = setInterval(() => {
          setPercentage((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setLoading(false);
              setSuccess(true);
              return 100;
            }
            return prev + 10;
          });
        }, 200);
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      if (loading) {
        e.preventDefault();
        setLoading(false);
        setPercentage(0);
        (e.target as HTMLInputElement).value = '';
        setFilename(undefined);
      } else if (success) {
        e.preventDefault();
        (e.target as HTMLInputElement).value = '';
        setFilename(undefined);
        setSuccess(false);
        setPercentage(0);
      }
    };

    return (
      <SelectorBoxFile
        {...args}
        filename={filename}
        loading={loading}
        percentage={percentage}
        success={success}
        onChange={handleChange}
        onClick={handleClick}
      />
    );
  },
};

/**
 * File selector for multiple files
 */
export const MultipleFiles: Story = {
  args: {
    containerBoxStateContent: {
      default: {
        actionText: 'Select files',
        description: 'You can upload multiple files',
        icon: { altText: 'Multiple files', icon: ICONS.PLACEHOLDER },
      },
      disabled: {
        actionText: 'Select files',
        description: 'Multiple upload disabled',
        icon: { altText: 'Folder disabled', icon: ICONS.PLACEHOLDER },
      },
      error: {
        actionIcon: { altText: 'Retry', icon: ICONS.PLACEHOLDER },
        actionText: 'Try again',
        description: 'Some files failed',
        icon: { altText: 'Upload error', icon: ICONS.PLACEHOLDER },
      },
      loading: {
        actionText: 'Cancel',
        description: 'Uploading files...',
        icon: { altText: 'Uploading', icon: ICONS.PLACEHOLDER },
      },
      success: {
        actionIcon: { altText: 'Clear', icon: ICONS.PLACEHOLDER },
        actionText: 'Clear all',
        description: 'All files uploaded',
        icon: { altText: 'Files ready', icon: ICONS.PLACEHOLDER },
      },
    },
    fileExtension: ['pdf', 'doc', 'docx', 'txt'],
    multiple: true,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectorBoxFile
  variant="DEFAULT"
  multiple={true}
  fileExtension={['pdf', 'doc', 'docx', 'txt']}
  containerBoxStateContent={{
    default: {
      icon: 'files',
      actionText: 'Select files',
      description: 'Multiple files allowed',
    },
    success: {
      icon: 'check-circle',
      actionText: 'Clear all',
      actionIcon: 'x',
    },
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [filename, setFilename] = useState<string | undefined>();
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        const fileNames = Array.from(files)
          .map((f) => f.name)
          .join(', ');
        setFilename(fileNames);
        setSuccess(true);
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      if (success) {
        e.preventDefault();
        (e.target as HTMLInputElement).value = '';
        setFilename(undefined);
        setSuccess(false);
      }
    };

    return (
      <SelectorBoxFile
        {...args}
        filename={filename}
        success={success}
        onChange={handleChange}
        onClick={handleClick}
      />
    );
  },
};

/**
 * File selector for image uploads with preview
 */
export const ImageUpload: Story = {
  args: {
    containerBoxStateContent: {
      default: {
        actionText: 'Add photo',
        description: 'Click to browse (max 10MB)',
        icon: { altText: 'Camera', icon: ICONS.PLACEHOLDER },
      },
      disabled: {
        actionText: 'Add photo',
        description: 'Photo upload unavailable',
        icon: { altText: 'Camera off', icon: ICONS.PLACEHOLDER },
      },
      error: {
        actionIcon: { altText: 'Retry', icon: ICONS.PLACEHOLDER },
        actionText: 'Retry',
        description: 'Photo upload failed',
        icon: { altText: 'Upload failed', icon: ICONS.PLACEHOLDER },
      },
      loading: {
        actionText: 'Cancel',
        description: 'Processing photo...',
        icon: { altText: 'Processing', icon: ICONS.PLACEHOLDER },
      },
      success: {
        actionIcon: { altText: 'Change photo', icon: ICONS.PLACEHOLDER },
        actionText: 'Change',
        description: 'Click to change photo',
        icon: { altText: 'Photo ready', icon: ICONS.PLACEHOLDER },
      },
    },
    fileExtension: ['jpg', 'jpeg', 'png', 'webp'],
    maxSize: 10,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectorBoxFile
  variant="DEFAULT"
  fileExtension={['jpg', 'jpeg', 'png', 'webp']}
  maxSize={10}
  containerBoxStateContent={{
    default: {
      icon: 'camera',
      actionText: 'Add photo',
      description: 'Click to browse',
    },
    success: {
      icon: 'image',
      actionText: 'Change',
      actionIcon: 'edit',
    },
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [filename, setFilename] = useState<string | undefined>();
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFilename(file.name);
        setSuccess(true);
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      if (success) {
        // Allow changing the file without clearing
        (e.target as HTMLInputElement).value = '';
      }
    };

    return (
      <SelectorBoxFile
        {...args}
        filename={filename}
        success={success}
        onChange={handleChange}
        onClick={handleClick}
      />
    );
  },
};

/**
 * File selector for document uploads in a form
 */
export const InForm: Story = {
  parameters: {
    docs: {
      source: {
        code: `<form onSubmit={handleSubmit}>
  <div>
    <label>Upload Resume *</label>
    <SelectorBoxFile
      variant="DEFAULT"
      fileExtension={['pdf', 'doc', 'docx']}
      maxSize={5}
      errorMaxSizeMessage="Resume must be under 5MB"
      containerBoxStateContent={{
        default: {
          icon: 'upload',
          actionText: 'Choose file',
          description: 'PDF or DOC (max 5MB)',
        },
        success: {
          icon: 'file-text',
          actionText: 'Remove',
          actionIcon: 'trash-2',
        },
      }}
      onChange={(e) => {
        const file = e.target.files?.[0];
        setResume(file);
      }}
    />
  </div>

  <div>
    <label>Cover Letter</label>
    <SelectorBoxFile
      variant="DEFAULT"
      fileExtension={['pdf', 'doc', 'docx']}
      containerBoxStateContent={{
        default: {
          icon: 'file',
          actionText: 'Upload letter',
          description: 'Optional',
        },
      }}
    />
  </div>

  <button type="submit">Submit Application</button>
</form>`,
      },
    },
  },
  render: () => {
    const [resume, setResume] = useState<string | undefined>();
    const [resumeSuccess, setResumeSuccess] = useState(false);
    const [coverLetter, setCoverLetter] = useState<string | undefined>();
    const [coverLetterSuccess, setCoverLetterSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
    };

    return (
      <form style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '24px' }}>
          <span
            style={{
              color: '#155724',
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Upload Resume *
          </span>
          <SelectorBoxFile
            containerBoxStateContent={{
              default: {
                actionText: 'Choose file',
                description: 'PDF or DOC format (max 5MB)',
                icon: { altText: 'Upload', icon: ICONS.PLACEHOLDER },
              },
              disabled: {
                actionText: 'Choose file',
                description: 'Upload disabled',
                icon: { altText: 'Upload disabled', icon: ICONS.PLACEHOLDER },
              },
              error: {
                actionIcon: { altText: 'Retry', icon: ICONS.PLACEHOLDER },
                actionText: 'Try again',
                description: 'Upload failed',
                icon: { altText: 'Error', icon: ICONS.PLACEHOLDER },
              },
              loading: {
                actionText: 'Cancel',
                description: 'Uploading resume...',
                icon: { altText: 'Loading', icon: ICONS.PLACEHOLDER },
              },
              success: {
                actionIcon: { altText: 'Remove', icon: ICONS.PLACEHOLDER },
                actionText: 'Remove',
                description: 'Resume uploaded',
                icon: { altText: 'Resume ready', icon: ICONS.PLACEHOLDER },
              },
            }}
            errorMaxSizeMessage="Resume must be under 5MB"
            fileExtension={['pdf', 'doc', 'docx']}
            filename={resume}
            maxSize={5}
            success={resumeSuccess}
            variant="DEFAULT"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setResume(file.name);
                setResumeSuccess(true);
              }
            }}
            onClick={(e) => {
              if (resumeSuccess) {
                e.preventDefault();
                (e.target as HTMLInputElement).value = '';
                setResume(undefined);
                setResumeSuccess(false);
              }
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <span
            style={{
              color: '#155724',
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Cover Letter (Optional)
          </span>
          <SelectorBoxFile
            containerBoxStateContent={{
              default: {
                actionText: 'Upload letter',
                description: 'Optional document',
                icon: { altText: 'File', icon: ICONS.PLACEHOLDER },
              },
              disabled: {
                actionText: 'Upload letter',
                description: 'Upload disabled',
                icon: { altText: 'File disabled', icon: ICONS.PLACEHOLDER },
              },
              error: {
                actionIcon: { altText: 'Retry', icon: ICONS.PLACEHOLDER },
                actionText: 'Try again',
                description: 'Upload failed',
                icon: { altText: 'Error', icon: ICONS.PLACEHOLDER },
              },
              loading: {
                actionText: 'Cancel',
                description: 'Uploading letter...',
                icon: { altText: 'Loading', icon: ICONS.PLACEHOLDER },
              },
              success: {
                actionIcon: { altText: 'Remove', icon: ICONS.PLACEHOLDER },
                actionText: 'Remove',
                description: 'Cover letter uploaded',
                icon: { altText: 'Letter ready', icon: ICONS.PLACEHOLDER },
              },
            }}
            fileExtension={['pdf', 'doc', 'docx']}
            filename={coverLetter}
            success={coverLetterSuccess}
            variant="DEFAULT"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setCoverLetter(file.name);
                setCoverLetterSuccess(true);
              }
            }}
            onClick={(e) => {
              if (coverLetterSuccess) {
                e.preventDefault();
                (e.target as HTMLInputElement).value = '';
                setCoverLetter(undefined);
                setCoverLetterSuccess(false);
              }
            }}
          />
        </div>

        <button
          style={{
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
          type="submit"
        >
          Submit Application
        </button>

        {submitted && (
          <div
            style={{
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              borderRadius: '4px',
              marginTop: '16px',
              padding: '12px',
            }}
          >
            <p style={{ color: '#155724', fontWeight: 'bold', margin: 0 }}>
              Application Submitted!
            </p>
            <p
              style={{ color: '#155724', fontSize: '14px', margin: '8px 0 0' }}
            >
              Resume: {resume || 'Not uploaded'}
              <br />
              Cover Letter: {coverLetter || 'Not uploaded'}
            </p>
          </div>
        )}
      </form>
    );
  },
};

/**
 * Comparison of all component states
 */
export const AllStates: Story = {
  parameters: {
    docs: {
      source: {
        code: `// Default State
<SelectorBoxFile variant="DEFAULT" />

// Success State
<SelectorBoxFile
  variant="DEFAULT"
  success={true}
  filename="document.pdf"
/>

// Error State
<SelectorBoxFile
  variant="DEFAULT"
  error={true}
  errorFileExtensionMessage="Invalid file type"
/>

// Loading State
<SelectorBoxFile
  variant="DEFAULT"
  loading={true}
  percentage={65}
  filename="uploading.pdf"
/>

// Disabled State
<SelectorBoxFile
  variant="DEFAULT"
  disabled={true}
/>`,
      },
    },
  },
  render: () => {
    const [filename, setFilename] = useState<string | undefined>();
    const [state, setState] = useState<
      'default' | 'success' | 'error' | 'loading'
    >('default');

    const baseContent = {
      default: {
        actionText: 'Browse files',
        description: 'Click or drag and drop',
        icon: { altText: 'Upload', icon: ICONS.PLACEHOLDER },
      },
      disabled: {
        actionText: 'Browse files',
        description: 'Upload is disabled',
        icon: { altText: 'Locked', icon: ICONS.PLACEHOLDER },
      },
      error: {
        actionIcon: { altText: 'Retry', icon: ICONS.PLACEHOLDER },
        actionText: 'Try again',
        description: 'Upload failed',
        icon: { altText: 'Error', icon: ICONS.PLACEHOLDER },
      },
      loading: {
        actionText: 'Cancel',
        description: 'Uploading file...',
        icon: { altText: 'Loading', icon: ICONS.PLACEHOLDER },
      },
      success: {
        actionIcon: { altText: 'Delete', icon: ICONS.PLACEHOLDER },
        actionText: 'Delete',
        description: 'File uploaded',
        icon: { altText: 'Success', icon: ICONS.PLACEHOLDER },
      },
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: '600px',
        }}
      >
        <div>
          <h3 style={{ marginBottom: '12px' }}>Default State</h3>
          <SelectorBoxFile
            containerBoxStateContent={baseContent}
            fileExtension={['pdf']}
            variant="DEFAULT"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setFilename(file.name);
              }
            }}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '12px' }}>Success State</h3>
          <SelectorBoxFile
            containerBoxStateContent={baseContent}
            fileExtension={['pdf']}
            filename="document.pdf"
            success={true}
            variant="DEFAULT"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '12px' }}>Error State</h3>
          <SelectorBoxFile
            containerBoxStateContent={baseContent}
            error={true}
            errorFileExtensionMessage="Invalid file type"
            fileExtension={['pdf']}
            filename="image.jpg"
            variant="DEFAULT"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '12px' }}>Loading State</h3>
          <SelectorBoxFile
            containerBoxStateContent={baseContent}
            fileExtension={['pdf']}
            filename="uploading.pdf"
            loading={true}
            percentage={65}
            variant="DEFAULT"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '12px' }}>Disabled State</h3>
          <SelectorBoxFile
            containerBoxStateContent={baseContent}
            disabled={true}
            fileExtension={['pdf']}
            variant="DEFAULT"
          />
        </div>
      </div>
    );
  },
};
