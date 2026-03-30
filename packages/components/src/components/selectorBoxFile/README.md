# SelectorBoxFile

A comprehensive file upload component with drag-and-drop support, file validation, upload progress tracking, and multiple visual states. Perfect for handling file uploads with user-friendly feedback and error handling.

## Features

- 📁 **File Selection**: Click or drag-and-drop file selection
- ✅ **Validation**: Built-in file size and extension validation
- 📊 **Progress Tracking**: Visual upload progress with percentage
- 🎨 **Multiple States**: Default, Loading, Success, Error, Disabled
- 🔄 **State Management**: Automatic state transitions with animations
- ♿ **Accessible**: Full keyboard support and ARIA attributes
- 🎭 **Customizable**: Flexible content for each state
- 🔔 **Error Handling**: Custom error messages and callbacks

## Installation

```bash
npm install @kubit/web-ui-components
```

## Usage

### Basic Example

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function MyComponent() {
  const [filename, setFilename] = useState<string>();
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFilename(file.name);
      setSuccess(true);
    }
  };

  return (
    <SelectorBoxFile
      containerBoxStateContent={{
        default: {
          icon: 'upload',
          actionText: 'Browse and select a file',
          description: 'or drag and drop here',
        },
        success: {
          icon: 'check-circle',
          actionText: 'Delete file',
          actionIcon: 'trash',
        },
      }}
      filename={filename}
      success={success}
      onChange={handleChange}
    />
  );
}
```

### With File Validation

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function FileUploadWithValidation() {
  const [filename, setFilename] = useState<string>();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const file = e.target.files?.[0];

    if (file) {
      setFilename(file.name);
      // Validate file
      const validExtensions = ['pdf', 'jpg', 'png'];
      const extension = file.name.split('.').pop()?.toLowerCase();

      if (extension && validExtensions.includes(extension)) {
        setSuccess(true);
      } else {
        setError(true);
      }
    }
  };

  return (
    <SelectorBoxFile
      accept=".pdf,.jpg,.png"
      containerBoxStateContent={{
        default: {
          icon: 'upload',
          actionText: 'Select PDF, JPG or PNG',
          description: 'Maximum file size: 5MB',
        },
        error: {
          icon: 'alert-circle',
          actionText: 'Invalid file type',
          actionIcon: 'refresh',
        },
        success: {
          icon: 'check-circle',
          actionText: 'Delete file',
          actionIcon: 'trash',
        },
      }}
      error={error}
      errorFileExtensionMessage="Only PDF, JPG and PNG files are allowed"
      fileExtension={['pdf', 'jpeg', 'png']}
      filename={filename}
      maxSize={5}
      success={success}
      onChange={handleChange}
    />
  );
}
```

### With Upload Progress

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function FileUploadWithProgress() {
  const [filename, setFilename] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const simulateUpload = async (file: File) => {
    setLoading(true);
    setPercentage(0);

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setPercentage(i);
    }

    setLoading(false);
    setSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFilename(file.name);
      simulateUpload(file);
    }
  };

  return (
    <SelectorBoxFile
      containerBoxStateContent={{
        default: {
          icon: 'upload',
          actionText: 'Browse and select a file',
        },
        loading: {
          icon: 'loader',
          actionText: 'Cancel upload',
        },
        success: {
          icon: 'check-circle',
          actionText: 'Delete file',
          actionIcon: 'trash',
        },
      }}
      filename={filename}
      loader={<Spinner />}
      loading={loading}
      percentage={percentage}
      success={success}
      onChange={handleChange}
    />
  );
}
```

## Props

### SelectorBoxFile Props

| Prop                        | Type                                           | Default     | Description                                 |
| --------------------------- | ---------------------------------------------- | ----------- | ------------------------------------------- |
| `containerBoxStateContent`  | `SelectorBoxFileContainerBoxStateContentProps` | Required    | Content configuration for each state        |
| `variant`                   | `'DEFAULT'`                                    | `'DEFAULT'` | Visual variant of the component             |
| `filename`                  | `string`                                       | -           | Name of the selected file                   |
| `accept`                    | `string`                                       | -           | Accepted file types (HTML accept attribute) |
| `multiple`                  | `boolean`                                      | `false`     | Allow multiple file selection               |
| `disabled`                  | `boolean`                                      | `false`     | Whether the component is disabled           |
| `loading`                   | `boolean`                                      | `false`     | Whether file is being uploaded              |
| `success`                   | `boolean`                                      | `false`     | Whether upload was successful               |
| `error`                     | `boolean`                                      | `false`     | Whether there's an error                    |
| `percentage`                | `number`                                       | `0`         | Upload progress percentage (0-100)          |
| `maxSize`                   | `number`                                       | -           | Maximum file size in MB                     |
| `fileExtension`             | `string[]`                                     | -           | Allowed file extensions                     |
| `errorMaxSizeMessage`       | `string \| CommonTextProps`                    | -           | Error message for file size                 |
| `errorFileExtensionMessage` | `string \| CommonTextProps`                    | -           | Error message for file type                 |
| `loader`                    | `ReactNode`                                    | -           | Custom loader component                     |
| `id`                        | `string`                                       | -           | Input element ID                            |
| `name`                      | `string`                                       | -           | Input element name                          |
| `onChange`                  | `(e: ChangeEvent) => void`                     | -           | File selection change handler               |
| `onClick`                   | `(e: MouseEvent) => void`                      | -           | Click event handler                         |
| `onSizeError`               | `(status: boolean) => void`                    | -           | File size error callback                    |
| `onFileError`               | `(status: boolean) => void`                    | -           | File type error callback                    |
| `onAnimationCompleted`      | `() => void`                                   | -           | Animation completion callback               |
| `additionalClasses`         | `Partial<SelectorBoxFileCssClasses>`           | -           | Additional CSS classes                      |
| `dataTestId`                | `string`                                       | -           | Test ID for testing purposes                |

### ContainerBoxStateContent Type

```typescript
type SelectorBoxFileContainerBoxStateContentProps = {
  default: StateContent;
  loading: StateContent;
  success: StateContent;
  error: StateContent;
  disabled: StateContent;
};

type StateContent = {
  icon?: string | CommonIconProps;
  iconRight?: string | CommonIconProps;
  actionText?: string | CommonTextProps;
  actionIcon?: string | CommonIconProps;
  description?: string | CommonTextProps;
};
```

## States

### Default State

Initial state when no file is selected.

```tsx
<SelectorBoxFile
  containerBoxStateContent={{
    default: {
      icon: 'upload',
      actionText: 'Browse and select a file',
      description: 'or drag and drop here',
    },
  }}
/>
```

### Loading State

Shown during file upload with progress indicator.

```tsx
<SelectorBoxFile
  containerBoxStateContent={{
    loading: {
      icon: 'loader',
      actionText: 'Cancel upload',
    },
  }}
  loading
  percentage={45}
/>
```

### Success State

Displayed when upload completes successfully.

```tsx
<SelectorBoxFile
  containerBoxStateContent={{
    success: {
      icon: 'check-circle',
      actionText: 'Delete file',
      actionIcon: 'trash',
    },
  }}
  filename="document.pdf"
  success
/>
```

### Error State

Shown when validation fails or upload errors occur.

```tsx
<SelectorBoxFile
  containerBoxStateContent={{
    error: {
      icon: 'alert-circle',
      actionText: 'Try again',
      actionIcon: 'refresh',
    },
  }}
  error
  errorFileExtensionMessage="Invalid file type"
/>
```

### Disabled State

Component is not interactive.

```tsx
<SelectorBoxFile
  containerBoxStateContent={{
    disabled: {
      icon: 'upload',
      actionText: 'Upload disabled',
      description: 'Please enable to continue',
    },
  }}
  disabled
/>
```

## Variants

### DEFAULT

The standard file selector appearance.

```tsx
<SelectorBoxFile
  containerBoxStateContent={{
    default: {
      icon: 'upload',
      actionText: 'Select file',
    },
  }}
  variant="DEFAULT"
/>
```

## Common Use Cases

### 1. Image Upload

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function ImageUpload() {
  const [filename, setFilename] = useState<string>();
  const [preview, setPreview] = useState<string>();
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFilename(file.name);
      setSuccess(true);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <SelectorBoxFile
        accept="image/*"
        containerBoxStateContent={{
          default: {
            icon: 'image',
            actionText: 'Select an image',
            description: 'JPG, PNG or GIF',
          },
          success: {
            icon: 'check',
            actionText: 'Change image',
            actionIcon: 'edit',
          },
        }}
        fileExtension={['jpeg', 'png', 'gif']}
        filename={filename}
        maxSize={5}
        success={success}
        onChange={handleChange}
      />
      {preview && (
        <img
          alt="Preview"
          src={preview}
          style={{ marginTop: '16px', maxWidth: '200px' }}
        />
      )}
    </div>
  );
}
```

### 2. Document Upload with Validation

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function DocumentUpload() {
  const [filename, setFilename] = useState<string>();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateFile = (file: File) => {
    const validTypes = ['application/pdf', 'application/msword'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      setErrorMessage('Only PDF and DOC files are allowed');
      return false;
    }

    if (file.size > maxSize) {
      setErrorMessage('File size must not exceed 10MB');
      return false;
    }

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const file = e.target.files?.[0];

    if (file) {
      setFilename(file.name);

      if (validateFile(file)) {
        setSuccess(true);
      } else {
        setError(true);
      }
    }
  };

  return (
    <SelectorBoxFile
      accept=".pdf,.doc,.docx"
      containerBoxStateContent={{
        default: {
          icon: 'file-text',
          actionText: 'Select a document',
          description: 'PDF or DOC, max 10MB',
        },
        error: {
          icon: 'alert-circle',
          actionText: 'Try again',
          description: errorMessage,
        },
        success: {
          icon: 'check-circle',
          actionText: 'Remove file',
          actionIcon: 'x',
        },
      }}
      error={error}
      errorFileExtensionMessage={errorMessage}
      fileExtension={['pdf', 'msword']}
      filename={filename}
      maxSize={10}
      success={success}
      onChange={handleChange}
    />
  );
}
```

### 3. Multiple File Upload

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function MultipleFileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
    setSuccess(selectedFiles.length > 0);
  };

  const handleRemove = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    setSuccess(newFiles.length > 0);
  };

  return (
    <div>
      <SelectorBoxFile
        containerBoxStateContent={{
          default: {
            icon: 'upload',
            actionText: 'Select multiple files',
            description: 'You can select multiple files at once',
          },
          success: {
            icon: 'check',
            actionText: 'Add more files',
            actionIcon: 'plus',
          },
        }}
        multiple
        success={success}
        onChange={handleChange}
      />

      {files.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          <h4>Selected files ({files.length}):</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name}
                <button onClick={() => handleRemove(index)} type="button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
```

### 4. Upload with API Integration

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function UploadToServer() {
  const [filename, setFilename] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      setError(false);

      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = Math.round((e.loaded / e.total) * 100);
          setPercentage(percentComplete);
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          setSuccess(true);
        } else {
          setError(true);
        }
        setLoading(false);
      });

      xhr.addEventListener('error', () => {
        setError(true);
        setLoading(false);
      });

      xhr.open('POST', '/api/upload');
      xhr.send(formData);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFilename(file.name);
      uploadFile(file);
    }
  };

  return (
    <SelectorBoxFile
      containerBoxStateContent={{
        default: {
          icon: 'upload',
          actionText: 'Select file to upload',
        },
        loading: {
          icon: 'loader',
          actionText: 'Uploading...',
        },
        success: {
          icon: 'check-circle',
          actionText: 'Upload successful',
          actionIcon: 'check',
        },
        error: {
          icon: 'alert-circle',
          actionText: 'Upload failed',
          actionIcon: 'refresh',
        },
      }}
      error={error}
      filename={filename}
      loading={loading}
      percentage={percentage}
      success={success}
      onChange={handleChange}
    />
  );
}
```

### 5. CSV File Import

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function CSVImport() {
  const [filename, setFilename] = useState<string>();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const parseCSV = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result as string;
      const rows = text.split('\n').map((row) => row.split(','));
      setData(rows);
      setSuccess(true);
    };

    reader.readAsText(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFilename(file.name);
      parseCSV(file);
    }
  };

  return (
    <div>
      <SelectorBoxFile
        accept=".csv"
        containerBoxStateContent={{
          default: {
            icon: 'file-spreadsheet',
            actionText: 'Import CSV file',
            description: 'Upload your data',
          },
          success: {
            icon: 'check',
            actionText: 'File imported',
            description: `${data.length} rows loaded`,
          },
        }}
        fileExtension={['csv']}
        filename={filename}
        success={success}
        onChange={handleChange}
      />

      {data.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          <p>Preview (first 5 rows):</p>
          <table>
            <tbody>
              {data.slice(0, 5).map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
```

### 6. Profile Picture Upload

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function ProfilePictureUpload() {
  const [filename, setFilename] = useState<string>();
  const [preview, setPreview] = useState<string>();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const file = e.target.files?.[0];

    if (file) {
      // Validate image dimensions
      const img = new Image();
      img.onload = () => {
        if (img.width < 200 || img.height < 200) {
          setError(true);
        } else {
          setFilename(file.name);
          setSuccess(true);
          setPreview(URL.createObjectURL(file));
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleDelete = () => {
    setFilename(undefined);
    setPreview(undefined);
    setSuccess(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {preview && (
        <div style={{ marginBottom: '16px' }}>
          <img
            alt="Profile preview"
            src={preview}
            style={{
              borderRadius: '50%',
              height: '120px',
              objectFit: 'cover',
              width: '120px',
            }}
          />
        </div>
      )}

      <SelectorBoxFile
        accept="image/*"
        containerBoxStateContent={{
          default: {
            icon: 'user',
            actionText: 'Upload profile picture',
            description: 'Minimum 200x200px',
          },
          error: {
            icon: 'alert-circle',
            actionText: 'Image too small',
            description: 'Minimum 200x200px required',
          },
          success: {
            icon: 'check',
            actionText: 'Change picture',
            actionIcon: 'edit',
          },
        }}
        error={error}
        errorFileExtensionMessage="Image must be at least 200x200 pixels"
        fileExtension={['jpeg', 'png']}
        filename={filename}
        maxSize={2}
        success={success}
        onChange={handleChange}
        onClick={success ? handleDelete : undefined}
      />
    </div>
  );
}
```

### 7. Form Integration

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';

function FormWithFileUpload() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    file: null as File | null,
  });
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
      setSuccess(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form:', formData);
    // Submit form data including file
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          required
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          required
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label>Attachment:</label>
        <SelectorBoxFile
          containerBoxStateContent={{
            default: {
              icon: 'paperclip',
              actionText: 'Attach file',
              description: 'Optional',
            },
            success: {
              icon: 'check',
              actionText: 'Remove file',
              actionIcon: 'x',
            },
          }}
          filename={formData.file?.name}
          success={success}
          onChange={handleFileChange}
        />
      </div>

      <button type="submit">Submit Form</button>
    </form>
  );
}
```

## Best Practices

### 1. Always Provide Clear Instructions

```tsx
// ✅ Good - Clear what's expected
<SelectorBoxFile
  containerBoxStateContent={{
    default: {
      icon: 'upload',
      actionText: 'Select PDF file',
      description: 'Maximum 5MB',
    },
  }}
  fileExtension={['pdf']}
  maxSize={5}
/>

// ❌ Bad - Vague instructions
<SelectorBoxFile
  containerBoxStateContent={{
    default: {
      actionText: 'Upload',
    },
  }}
/>
```

### 2. Handle All States Properly

```tsx
// ✅ Good - All states covered
<SelectorBoxFile
  containerBoxStateContent={{
    default: { icon: 'upload', actionText: 'Select file' },
    loading: { icon: 'loader', actionText: 'Uploading...' },
    success: { icon: 'check', actionText: 'Delete file' },
    error: { icon: 'alert', actionText: 'Try again' },
    disabled: { icon: 'lock', actionText: 'Upload disabled' },
  }}
/>
```

### 3. Provide Meaningful Error Messages

```tsx
// ✅ Good - Specific error messages
<SelectorBoxFile
  errorFileExtensionMessage="Only PDF, JPG and PNG files are allowed"
  errorMaxSizeMessage="File size must not exceed 5MB"
  fileExtension={['pdf', 'jpeg', 'png']}
  maxSize={5}
/>

// ❌ Bad - Generic error
<SelectorBoxFile
  errorFileExtensionMessage="Invalid file"
/>
```

### 4. Show Upload Progress

```tsx
// ✅ Good - Shows progress
<SelectorBoxFile
  loading={loading}
  percentage={uploadProgress}
  containerBoxStateContent={{
    loading: {
      icon: 'loader',
      actionText: 'Uploading...',
    },
  }}
/>
```

### 5. Allow File Deletion

```tsx
// ✅ Good - Can remove uploaded file
const handleClick = (e) => {
  if (success) {
    e.preventDefault();
    e.target.value = '';
    setFilename(undefined);
    setSuccess(false);
  }
};

<SelectorBoxFile
  containerBoxStateContent={{
    success: {
      icon: 'check',
      actionText: 'Delete file',
      actionIcon: 'trash',
    },
  }}
  success={success}
  onClick={handleClick}
/>;
```

### 6. Use Appropriate Accept Attribute

```tsx
// ✅ Good - Specific file types
<SelectorBoxFile accept="image/*" />
<SelectorBoxFile accept=".pdf,.doc,.docx" />
<SelectorBoxFile accept="application/pdf" />

// ❌ Bad - Too restrictive without reason
<SelectorBoxFile accept=".jpg" /> // Excludes .jpeg
```

### 7. Validate File Size Early

```tsx
// ✅ Good - Client-side validation
<SelectorBoxFile
  maxSize={5}
  onSizeError={(error) => {
    if (error) {
      showNotification('File too large');
    }
  }}
/>
```

## Accessibility

The component is built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support for file selection
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators
- **State Announcements**: Status changes announced to screen readers
- **Error Messages**: Associated with input for screen reader context

### Accessibility Example

```tsx
<SelectorBoxFile
  containerBoxStateContent={{
    default: {
      icon: 'upload',
      actionText: 'Browse and select a file',
      description: 'Supported formats: PDF, JPG, PNG. Maximum size: 5MB',
    },
  }}
  id="file-upload"
  name="document"
  aria-label="Upload document"
  aria-describedby="file-instructions"
/>
```

## Styling

### Custom CSS Classes

```tsx
<SelectorBoxFile
  additionalClasses={{
    container: 'custom-container',
    input: 'custom-input',
    content: 'custom-content',
  }}
/>
```

### Style Override Example

```css
.custom-container {
  border-radius: 12px;
  padding: 32px;
}

.custom-container:hover {
  border-color: var(--color-primary);
  background-color: var(--color-background-hover);
}
```

## Testing

### Example Test

```tsx
import { SelectorBoxFile } from '@kubit/web-ui-components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SelectorBoxFile', () => {
  it('should handle file selection', () => {
    const handleChange = jest.fn();

    render(
      <SelectorBoxFile
        containerBoxStateContent={{
          default: {
            actionText: 'Select file',
          },
        }}
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox', { hidden: true });
    const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });

    fireEvent.change(input, { target: { files: [file] } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('should show error for invalid file type', () => {
    const handleFileError = jest.fn();

    render(
      <SelectorBoxFile
        containerBoxStateContent={{
          default: { actionText: 'Select file' },
          error: { actionText: 'Invalid file' },
        }}
        fileExtension={['pdf']}
        onFileError={handleFileError}
      />,
    );

    const input = screen.getByRole('textbox', { hidden: true });
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });

    fireEvent.change(input, { target: { files: [file] } });

    expect(handleFileError).toHaveBeenCalledWith(true);
  });
});
```

## Performance

### Optimization Tips

1. **Lazy Load Large Files**: Handle large files asynchronously
2. **Debounce Validation**: Avoid excessive validation calls
3. **Use Web Workers**: Process large files in background threads
4. **Optimize Images**: Compress images before upload
5. **Chunk Large Files**: Split large files for better UX

### Performance Example

```tsx
function OptimizedFileUpload() {
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    // Use Web Worker for heavy processing
    const worker = new Worker('/file-processor.js');
    worker.postMessage(file);

    worker.onmessage = (e) => {
      // Handle processed file
      setLoading(false);
    };
  };

  return <SelectorBoxFile loading={loading} onChange={handleChange} />;
}
```

## Related Components

- **Input**: For text-based file paths
- **Button**: For triggering file selection
- **ProgressBar**: For standalone progress tracking
- **Modal**: For file upload in overlays
- **Form**: For file uploads within forms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Migration Guide

### From Native Input

```tsx
// Before
<input
  accept="image/*"
  type="file"
  onChange={handleChange}
/>

// After
<SelectorBoxFile
  accept="image/*"
  containerBoxStateContent={{
    default: {
      icon: 'upload',
      actionText: 'Select image',
    },
  }}
  onChange={handleChange}
/>
```

## Troubleshooting

### File Not Uploading

**Problem**: File selection doesn't trigger onChange

**Solution**: Ensure onChange handler is properly defined

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    // Handle file
  }
};
```

### Validation Not Working

**Problem**: File validation doesn't trigger errors

**Solution**: Use both fileExtension and onFileError

```tsx
<SelectorBoxFile
  fileExtension={['pdf', 'jpeg']}
  onFileError={(hasError) => {
    if (hasError) {
      setError(true);
    }
  }}
/>
```

### Progress Not Showing

**Problem**: Upload progress doesn't update

**Solution**: Ensure loading and percentage props are set

```tsx
<SelectorBoxFile loading={true} percentage={uploadProgress} />
```

### State Not Changing

**Problem**: Component stays in default state

**Solution**: Update state props based on upload status

```tsx
const [success, setSuccess] = useState(false);

const handleChange = (e) => {
  // ... upload logic
  setSuccess(true);
};

<SelectorBoxFile success={success} />;
```
