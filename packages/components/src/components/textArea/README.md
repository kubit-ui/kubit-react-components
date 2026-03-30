# TextArea Component

The TextArea component provides a multi-line text input field with comprehensive features including labels, error states, character counting, help messages, and various accessibility enhancements. It's designed for collecting longer form text input from users.

## Installation

```bash
npm install @kubit/web-ui-components
```

## Basic Usage

```tsx
import { TextArea } from '@kubit/web-ui-components';

function App() {
  const [value, setValue] = useState('');

  return (
    <TextArea
      variant="DEFAULT"
      label="Comments"
      placeholder="Enter your comments here..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      maxLength={500}
      counterVariant="DEFAULT"
      screenReaderTextCount="characters remaining"
    />
  );
}
```

## Variants

The TextArea component currently supports one variant:

### DEFAULT

Standard textarea styling:

```tsx
<TextArea
  variant="DEFAULT"
  label="Description"
  placeholder="Enter description"
  maxLength={300}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

## Advanced Usage

### TextArea with Title

Add a title above the label:

```tsx
<TextArea
  variant="DEFAULT"
  title="Feedback Form"
  label="Your Feedback"
  placeholder="Share your thoughts"
  maxLength={300}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### TextArea with Help Message

Provide guidance to users:

```tsx
<TextArea
  variant="DEFAULT"
  label="Description"
  placeholder="Enter description"
  helpMessage="Provide detailed information to help us understand your request"
  maxLength={500}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### TextArea with Error State

Display validation errors:

```tsx
<TextArea
  variant="DEFAULT"
  label="Message"
  placeholder="Enter your message"
  error={true}
  errorIcon={{ icon: ICONS.ERROR }}
  errorMessage="This field is required"
  maxLength={200}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### Required TextArea

Mark fields as required:

```tsx
<TextArea
  variant="DEFAULT"
  label="Required Field"
  placeholder="This field is required"
  required={true}
  maxLength={300}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### TextArea with Initial Value

Pre-populate with content:

```tsx
<TextArea
  variant="DEFAULT"
  label="Bio"
  placeholder="Tell us about yourself"
  value="This is some initial text content"
  maxLength={500}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### Disabled TextArea

Prevent user interaction:

```tsx
<TextArea
  variant="DEFAULT"
  label="Disabled TextArea"
  placeholder="This textarea is disabled"
  disabled={true}
  value="Cannot edit this text"
  maxLength={300}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### Custom Height TextArea

Adjust the textarea height:

```tsx
<TextArea
  variant="DEFAULT"
  label="Long Form Content"
  placeholder="Enter long form content"
  height="200px"
  maxLength={1000}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### TextArea with Spell Check

Enable browser spell checking:

```tsx
<TextArea
  variant="DEFAULT"
  label="Essay"
  placeholder="Write your essay"
  spellCheck={true}
  maxLength={1000}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### Label Inside TextArea

Place label inside the textarea container:

```tsx
<TextArea
  variant="DEFAULT"
  label="Internal Label"
  labelInsideTextArea={true}
  placeholder="Type here..."
  maxLength={300}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### Form with Validation

Complete form example with validation:

```tsx
function ContactForm() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim().length < 10) {
      setError('Message must be at least 10 characters');
      return;
    }
    setError('');
    // Submit form
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        variant="DEFAULT"
        label="Message"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={!!error}
        errorIcon={{ icon: ICONS.ERROR }}
        errorMessage={error}
        helpMessage="Please provide at least 10 characters"
        required={true}
        maxLength={500}
        counterVariant="DEFAULT"
        screenReaderTextCount="characters remaining"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Auto-Growing TextArea

TextArea that expands with content:

```tsx
function AutoGrowTextArea() {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    // Auto-adjust height based on content
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <TextArea
      ref={textareaRef}
      variant="DEFAULT"
      label="Auto Growing"
      placeholder="This textarea grows as you type"
      value={value}
      onChange={handleChange}
      maxLength={1000}
      counterVariant="DEFAULT"
      screenReaderTextCount="characters remaining"
    />
  );
}
```

### Character Counter Display

Show remaining characters:

```tsx
function TextAreaWithCounter() {
  const [value, setValue] = useState('');
  const maxLength = 200;

  return (
    <div>
      <TextArea
        variant='DEFAULT'
        label='Tweet'
        placeholder='What\'s happening?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        counterVariant='DEFAULT'
        screenReaderTextCount='characters remaining'
      />
      <p>
        {value.length} / {maxLength} characters
      </p>
    </div>
  );
}
```

### Multi-Field Form

Multiple textareas in a form:

```tsx
function SurveyForm() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAnswers({ ...answers, [field]: e.target.value });
    };

  return (
    <form>
      <TextArea
        variant="DEFAULT"
        title="Question 1"
        label="What do you like most?"
        placeholder="Your answer"
        value={answers.question1}
        onChange={handleChange('question1')}
        maxLength={300}
        counterVariant="DEFAULT"
        screenReaderTextCount="characters remaining"
      />

      <TextArea
        variant="DEFAULT"
        title="Question 2"
        label="What could be improved?"
        placeholder="Your answer"
        value={answers.question2}
        onChange={handleChange('question2')}
        maxLength={300}
        counterVariant="DEFAULT"
        screenReaderTextCount="characters remaining"
      />

      <TextArea
        variant="DEFAULT"
        title="Question 3"
        label="Additional comments"
        placeholder="Optional"
        value={answers.question3}
        onChange={handleChange('question3')}
        maxLength={500}
        counterVariant="DEFAULT"
        screenReaderTextCount="characters remaining"
      />
    </form>
  );
}
```

### Real-time Validation

Validate as user types:

```tsx
function ValidatedTextArea() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validateContent = (text: string) => {
    if (text.length < 20) {
      setError('Please enter at least 20 characters');
    } else if (text.length > 500) {
      setError('Maximum 500 characters allowed');
    } else {
      setError('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    validateContent(newValue);
  };

  return (
    <TextArea
      variant="DEFAULT"
      label="Description"
      placeholder="Enter description (20-500 characters)"
      value={value}
      onChange={handleChange}
      error={!!error}
      errorIcon={{ icon: ICONS.ERROR }}
      errorMessage={error}
      maxLength={500}
      counterVariant="DEFAULT"
      screenReaderTextCount="characters remaining"
    />
  );
}
```

### Controlled vs Uncontrolled

#### Controlled (Recommended)

```tsx
function ControlledTextArea() {
  const [value, setValue] = useState('');

  return (
    <TextArea
      variant="DEFAULT"
      label="Controlled"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      maxLength={300}
      counterVariant="DEFAULT"
      screenReaderTextCount="characters remaining"
    />
  );
}
```

#### Uncontrolled

```tsx
function UncontrolledTextArea() {
  const textareaRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    // Access value from ref
    const textarea = textareaRef.current?.querySelector('textarea');
    console.log(textarea?.value);
  };

  return (
    <TextArea
      ref={textareaRef}
      variant="DEFAULT"
      label="Uncontrolled"
      maxLength={300}
      counterVariant="DEFAULT"
      screenReaderTextCount="characters remaining"
    />
  );
}
```

### Markdown Editor Textarea

Textarea for markdown input:

```tsx
function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div>
      <TextArea
        variant="DEFAULT"
        label="Markdown Content"
        placeholder="# Heading\n\nWrite your **markdown** here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        height="300px"
        spellCheck={true}
        maxLength={5000}
        counterVariant="DEFAULT"
        screenReaderTextCount="characters remaining"
        helpMessage="Supports Markdown formatting"
      />
      <div>
        <h3>Preview</h3>
        {/* Render markdown preview */}
      </div>
    </div>
  );
}
```

### Comment System TextArea

TextArea for user comments:

```tsx
function CommentBox({ onSubmit }) {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (comment.trim().length < 3) return;

    setIsSubmitting(true);
    await onSubmit(comment);
    setComment('');
    setIsSubmitting(false);
  };

  return (
    <div>
      <TextArea
        variant="DEFAULT"
        label="Add a comment"
        placeholder="Share your thoughts..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        disabled={isSubmitting}
        maxLength={500}
        counterVariant="DEFAULT"
        screenReaderTextCount="characters remaining"
      />
      <button
        onClick={handleSubmit}
        disabled={comment.trim().length < 3 || isSubmitting}
      >
        {isSubmitting ? 'Posting...' : 'Post Comment'}
      </button>
    </div>
  );
}
```

## Props

| Prop                    | Type                               | Default     | Description                           |
| ----------------------- | ---------------------------------- | ----------- | ------------------------------------- |
| `variant`               | `string`                           | Required    | Visual variant of the textarea        |
| `label`                 | `string \| CommonTextProps`        | Required    | Label for the textarea                |
| `maxLength`             | `number`                           | Required    | Maximum character length              |
| `counterVariant`        | `string`                           | Required    | Variant for the character counter     |
| `screenReaderTextCount` | `string`                           | Required    | Accessibility text for screen readers |
| `placeholder`           | `string`                           | Required    | Placeholder text                      |
| `value`                 | `string`                           | `undefined` | Current value (controlled)            |
| `onChange`              | `(event) => void`                  | `undefined` | Change event handler                  |
| `title`                 | `string \| CommonTextProps`        | `undefined` | Title above the textarea              |
| `helpMessage`           | `string \| CommonTextProps`        | `undefined` | Help text below the textarea          |
| `error`                 | `boolean`                          | `false`     | Whether textarea is in error state    |
| `errorMessage`          | `string \| CommonTextProps`        | `undefined` | Error message to display              |
| `errorIcon`             | `ElementOrIconProps`               | `undefined` | Icon for error state                  |
| `errorAriaLiveType`     | `'off' \| 'polite' \| 'assertive'` | `undefined` | ARIA live region politeness           |
| `required`              | `boolean`                          | `false`     | Whether field is required             |
| `disabled`              | `boolean`                          | `false`     | Whether textarea is disabled          |
| `height`                | `string`                           | `undefined` | Custom height (e.g., '200px')         |
| `spellCheck`            | `boolean`                          | `undefined` | Enable browser spell checking         |
| `labelInsideTextArea`   | `boolean`                          | `false`     | Place label inside textarea container |
| `id`                    | `string`                           | `undefined` | HTML id attribute                     |
| `onFocus`               | `(event) => void`                  | `undefined` | Focus event handler                   |
| `onBlur`                | `(event) => void`                  | `undefined` | Blur event handler                    |
| `additionalInfo`        | `ReactNode`                        | `undefined` | Additional custom content             |
| `additionalClasses`     | `Partial<TextAreaCssClasses>`      | `undefined` | Additional CSS classes                |
| `data-testid`           | `string`                           | `undefined` | Test identifier                       |
| `data-*`                | `string`                           | `undefined` | Data attributes                       |

## Accessibility

- **Labels**: Always provide descriptive labels
- **Required Fields**: Use `required` prop and indicate visually
- **Error Messages**: Link errors to inputs with proper ARIA attributes
- **Character Counter**: Screen reader support via `screenReaderTextCount`
- **Focus Management**: Proper focus indicators and keyboard navigation
- **ARIA Live Regions**: Error messages announce dynamically
- **Keyboard Support**: Full keyboard interaction (Tab, Shift+Tab, Enter)
- **Placeholder**: Use as hint, not as replacement for label

## Best Practices

1. **Always Provide Labels**: Never rely solely on placeholders
2. **Clear Error Messages**: Be specific about what needs fixing
3. **Reasonable Max Length**: Set appropriate character limits
4. **Help Text**: Guide users with helpful instructions
5. **Required Indicators**: Clearly mark required fields
6. **Validation Timing**: Validate on blur or after user stops typing
7. **Responsive Width**: Ensure textarea is appropriately sized
8. **Character Counter**: Show remaining characters for limited inputs
9. **Accessible Errors**: Announce errors to screen readers
10. **Preserve User Input**: Maintain values during errors/validation

## Common Use Cases

### Comments

```tsx
<TextArea
  variant="DEFAULT"
  label="Comment"
  placeholder="Add a comment..."
  maxLength={500}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### Feedback Forms

```tsx
<TextArea
  variant="DEFAULT"
  title="Feedback"
  label="Your Feedback"
  placeholder="Tell us what you think"
  helpMessage="Help us improve by sharing your thoughts"
  required={true}
  maxLength={1000}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### Descriptions

```tsx
<TextArea
  variant="DEFAULT"
  label="Product Description"
  placeholder="Describe your product"
  maxLength={500}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### Messages

```tsx
<TextArea
  variant="DEFAULT"
  label="Message"
  placeholder="Type your message"
  maxLength={2000}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

### Notes

```tsx
<TextArea
  variant="DEFAULT"
  label="Notes"
  placeholder="Add notes"
  height="150px"
  maxLength={1000}
  counterVariant="DEFAULT"
  screenReaderTextCount="characters remaining"
/>
```

## When to Use TextArea

Use TextArea when:

- Need multi-line text input
- Collecting longer form responses (paragraphs)
- Users need to see multiple lines of text at once
- Content exceeds typical single-line input length
- Writing comments, descriptions, or messages

Don't use TextArea when:

- Single-line input is sufficient (use Input instead)
- Need formatted text editing (use rich text editor)
- Very short responses (name, email - use Input)
- Structured data entry (use specific form controls)

## Related Components

- **Input**: For single-line text input
- **InputSignature**: For signature capture
- **Label**: For standalone labels
- **Text**: For displaying text content
- **Form**: For complete form implementations

## Performance Considerations

- TextArea is lightweight with minimal overhead
- For forms with many textareas:
  - Use controlled components for better state management
  - Debounce onChange handlers for real-time validation
  - Avoid unnecessary re-renders with React.memo
- Character counting:
  - Use native maxLength for browser-level enforcement
  - Display counter for user feedback
- Large content:
  - Consider virtualization for very long content
  - Lazy load validation for better performance

## Styling Notes

- TextArea renders as native `<textarea>` element
- Height can be customized via `height` prop
- Variants control visual styling from design system
- Error state changes border color and displays icon
- Disabled state reduces opacity and prevents interaction
- Focus state shows outline for accessibility
- Custom styling via `additionalClasses` prop

## WCAG Guidelines

This component helps meet the following WCAG 2.1 criteria:

- **1.3.1 Info and Relationships (Level A)**: Proper label associations
- **1.3.5 Identify Input Purpose (Level AA)**: Clear input purpose
- **2.1.1 Keyboard (Level A)**: Full keyboard accessibility
- **2.4.6 Headings and Labels (Level AA)**: Descriptive labels
- **3.2.1 On Focus (Level A)**: No unexpected changes on focus
- **3.3.1 Error Identification (Level A)**: Clear error identification
- **3.3.2 Labels or Instructions (Level A)**: Labels and instructions provided
- **3.3.3 Error Suggestion (Level AA)**: Error correction suggestions
- **4.1.2 Name, Role, Value (Level A)**: Proper ARIA attributes
- **4.1.3 Status Messages (Level AA)**: ARIA live regions for errors

## Browser Support

TextArea component uses standard web technologies with full browser support:

- Chrome/Edge: ✅ All versions
- Firefox: ✅ All versions
- Safari: ✅ All versions
- Screen Readers: ✅ Full support with proper ARIA
- Mobile: ✅ Touch-optimized interactions
- Character Counter: ✅ All modern browsers
