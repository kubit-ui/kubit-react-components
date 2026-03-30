import type { Meta, StoryObj } from '@storybook/react';

import {
  SelectControlled,
  Select as SelectUnControlled,
} from '@kubit-ui-web/react-components';
import { useState } from 'react';

const meta: Meta<typeof SelectUnControlled> = {
  argTypes: {
    closePopoverOnScroll: {
      control: 'boolean',
      description: 'Close popover when scrolling',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state (uncontrolled)',
    },
    label: {
      control: 'text',
      description: 'Label text displayed on the button',
    },
    openAndCloseOnHover: {
      control: 'boolean',
      description: 'Open/close on hover instead of click',
    },
    variant: {
      control: 'select',
      description: 'Visual variant for styling',
      options: ['DEFAULT', 'SIDE_MENU', 'TOPBAR', 'TOPBAR_TAB'],
    },
  },
  component: SelectUnControlled,
  tags: ['forms', 'dropdown', 'interactive'],
  title: 'Components/Select',
};

export default meta;
type Story = StoryObj<typeof SelectUnControlled>;

/**
 * Basic select dropdown with default variant
 */
export const Basic: Story = {
  args: {
    icon: { altText: 'Toggle dropdown', icon: 'chevron-down' },
    label: 'Select an option',
    listOptions: {
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
      ],
      optionVariant: 'DEFAULT',
      type: 'selection',
      variant: 'DEFAULT',
    },
    popover: {
      placement: 'bottom-start',
    },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectUnControlled
  variant="DEFAULT"
  label="Select an option"
  icon={{ icon: 'chevron-down', altText: 'Toggle dropdown' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
    ],
  }}
  onOptionClick={(value) => console.log('Selected:', value)}
/>`,
      },
    },
  },
};

/**
 * Select with default selection
 */
export const WithDefaultSelection: Story = {
  args: {
    defaultOptionSelected: 'us',
    icon: { altText: 'Toggle country list', icon: 'chevron-down' },
    label: 'United States',
    listOptions: {
      options: [
        { label: 'United States', value: 'us' },
        { label: 'United Kingdom', value: 'uk' },
        { label: 'Canada', value: 'ca' },
        { label: 'Australia', value: 'au' },
        { label: 'Germany', value: 'de' },
      ],
      optionVariant: 'DEFAULT',
      type: 'selection',
      variant: 'DEFAULT',
    },
    popover: {
      placement: 'bottom-start',
    },
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectUnControlled
  variant="DEFAULT"
  label="United States"
  icon={{ icon: 'chevron-down', altText: 'Toggle country list' }}
  defaultOptionSelected="us"
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: [
      { label: 'United States', value: 'us' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Canada', value: 'ca' },
      { label: 'Australia', value: 'au' },
      { label: 'Germany', value: 'de' },
    ],
  }}
/>`,
      },
    },
  },
};

/**
 * Controlled select with state management
 */
export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [open, setOpen] = useState(false);
const [selected, setSelected] = useState('');

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const selectedOption = options.find((opt) => opt.value === selected);

<SelectControlled
  variant="DEFAULT"
  label={selectedOption?.label || 'Select an option'}
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  open={open}
  optionSelected={selected}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: options,
  }}
  onButtonClick={() => setOpen(!open)}
  onClosePopover={() => setOpen(false)}
  onOptionClick={(value) => {
    setSelected(value);
    setOpen(false);
  }}
/>`,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];

    const selectedOption = options.find((opt) => opt.value === selected);

    return (
      <div>
        <SelectControlled
          icon={{ altText: 'Toggle', icon: 'chevron-down' }}
          label={selectedOption?.label || 'Select an option'}
          listOptions={{
            options: options,
            optionVariant: 'DEFAULT',
            type: 'selection',
            variant: 'DEFAULT',
          }}
          open={open}
          optionSelected={selected}
          popover={{
            disableClickOverlayClose: false,
            disableEscapeClose: false,
            placement: 'bottom-start',
          }}
          variant="DEFAULT"
          onButtonClick={() => setOpen(!open)}
          onClosePopover={() => setOpen(false)}
          onOptionClick={(value) => {
            setSelected(value);
            setOpen(false);
          }}
        />
        <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>
          Selected: <strong>{selected || 'None'}</strong>
        </p>
      </div>
    );
  },
};

/**
 * Country selector with flags
 */
export const CountrySelector: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [selected, setSelected] = useState('us');

const countries = [
  { label: '🇺🇸 United States', value: 'us' },
  { label: '🇬🇧 United Kingdom', value: 'uk' },
  { label: '🇨🇦 Canada', value: 'ca' },
  { label: '🇦🇺 Australia', value: 'au' },
];

const selectedCountry = countries.find((c) => c.value === selected);

<SelectUnControlled
  variant="DEFAULT"
  label={selectedCountry?.label || 'Select a country'}
  icon={{ icon: 'globe', altText: 'Select country' }}
  defaultOptionSelected={selected}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: countries,
  }}
  onOptionClick={setSelected}
/>`,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState('us');

    const countries = [
      { label: '🇺🇸 United States', value: 'us' },
      { label: '🇬🇧 United Kingdom', value: 'uk' },
      { label: '🇨🇦 Canada', value: 'ca' },
      { label: '🇦🇺 Australia', value: 'au' },
      { label: '🇩🇪 Germany', value: 'de' },
      { label: '🇫🇷 France', value: 'fr' },
      { label: '🇯🇵 Japan', value: 'jp' },
      { label: '🇨🇳 China', value: 'cn' },
    ];

    const selectedCountry = countries.find((c) => c.value === selected);

    return (
      <div style={{ maxWidth: '300px' }}>
        <span
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}
        >
          Select your country
        </span>
        <SelectUnControlled
          defaultOptionSelected={selected}
          icon={{ altText: 'Select country', icon: 'globe' }}
          label={selectedCountry?.label || 'Select a country'}
          listOptions={{
            options: countries,
            optionVariant: 'DEFAULT',
            type: 'selection',
            variant: 'DEFAULT',
          }}
          popover={{
            placement: 'bottom-start',
          }}
          variant="DEFAULT"
          onOptionClick={setSelected}
        />
      </div>
    );
  },
};

/**
 * Language switcher
 */
export const LanguageSwitcher: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [language, setLanguage] = useState('en');

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Français', value: 'fr' },
];

const currentLanguage = languages.find((lang) => lang.value === language);

<SelectUnControlled
  variant="TOPBAR"
  label={currentLanguage?.label || 'Language'}
  icon={{ icon: 'globe', altText: 'Change language' }}
  defaultOptionSelected={language}
  listOptions={{
    type: 'selection',
    variant: 'TOPBAR',
    options: languages,
  }}
  onOptionClick={setLanguage}
/>`,
      },
    },
  },
  render: () => {
    const [language, setLanguage] = useState('en');

    const languages = [
      { label: 'English', value: 'en' },
      { label: 'Español', value: 'es' },
      { label: 'Français', value: 'fr' },
      { label: 'Deutsch', value: 'de' },
      { label: '日本語', value: 'ja' },
      { label: '中文', value: 'zh' },
    ];

    const currentLanguage = languages.find((lang) => lang.value === language);

    return (
      <div style={{ maxWidth: '250px' }}>
        <SelectUnControlled
          defaultOptionSelected={language}
          icon={{ altText: 'Change language', icon: 'globe' }}
          label={currentLanguage?.label || 'Language'}
          listOptions={{
            options: languages,
            optionVariant: 'TOPBAR',
            type: 'selection',
            variant: 'TOPBAR',
          }}
          popover={{
            disableClickOverlayClose: false,
            disableEscapeClose: false,
            placement: 'bottom-start',
          }}
          variant="TOPBAR"
          onOptionClick={setLanguage}
        />
      </div>
    );
  },
};

/**
 * Sort options dropdown
 */
export const SortOptions: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [sortBy, setSortBy] = useState('featured');

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

const currentSort = sortOptions.find((opt) => opt.value === sortBy);

<SelectUnControlled
  variant="DEFAULT"
  label={currentSort?.label || 'Select...'}
  icon={{ icon: 'arrow-up-down', altText: 'Sort options' }}
  defaultOptionSelected={sortBy}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: sortOptions,
  }}
  onOptionClick={setSortBy}
/>`,
      },
    },
  },
  render: () => {
    const [sortBy, setSortBy] = useState('featured');

    const sortOptions = [
      { label: 'Featured', value: 'featured' },
      { label: 'Price: Low to High', value: 'price-asc' },
      { label: 'Price: High to Low', value: 'price-desc' },
      { label: 'Newest First', value: 'date-desc' },
      { label: 'Best Rating', value: 'rating-desc' },
      { label: 'Most Popular', value: 'popularity-desc' },
    ];

    const currentSort = sortOptions.find((opt) => opt.value === sortBy);

    return (
      <div style={{ alignItems: 'center', display: 'flex', gap: '12px' }}>
        <span style={{ fontWeight: 'bold' }}>Sort by:</span>
        <SelectUnControlled
          defaultOptionSelected={sortBy}
          icon={{ altText: 'Sort options', icon: 'arrow-up-down' }}
          label={currentSort?.label || 'Select...'}
          listOptions={{
            options: sortOptions,
            optionVariant: 'DEFAULT',
            type: 'selection',
            variant: 'DEFAULT',
          }}
          popover={{
            disableClickOverlayClose: false,
            disableEscapeClose: false,
            placement: 'bottom-start',
          }}
          variant="DEFAULT"
          onOptionClick={setSortBy}
        />
      </div>
    );
  },
};

/**
 * User menu dropdown
 */
export const UserMenu: Story = {
  parameters: {
    docs: {
      source: {
        code: `const menuOptions = [
  { label: '👤 Profile', value: 'profile' },
  { label: '⚙️ Settings', value: 'settings' },
  { label: '💳 Billing', value: 'billing' },
  { label: '❓ Help', value: 'help' },
  { label: '🚪 Logout', value: 'logout' },
];

<SelectUnControlled
  variant="TOPBAR"
  label="John Doe"
  icon={{ icon: 'chevron-down', altText: 'User menu' }}
  listOptions={{
    type: 'navigation',
    variant: 'TOPBAR',
    options: menuOptions,
  }}
  onOptionClick={(value) => console.log('Menu action:', value)}
/>`,
      },
    },
  },
  render: () => {
    const menuOptions = [
      { label: '👤 Profile', value: 'profile' },
      { label: '⚙️ Settings', value: 'settings' },
      { label: '💳 Billing', value: 'billing' },
      { label: '❓ Help', value: 'help' },
      { label: '🚪 Logout', value: 'logout' },
    ];

    return (
      <div style={{ maxWidth: '200px' }}>
        <SelectUnControlled
          icon={{ altText: 'User menu', icon: 'chevron-down' }}
          label="John Doe"
          listOptions={{
            options: menuOptions,
            optionVariant: 'TOPBAR',
            type: 'navigation',
            variant: 'TOPBAR',
          }}
          popover={{
            disableClickOverlayClose: false,
            disableEscapeClose: false,
            placement: 'bottom-start',
          }}
          variant="TOPBAR"
          onOptionClick={(value) => {
            // eslint-disable-next-line no-alert
            alert(`Menu action: ${value}`);
          }}
        />
      </div>
    );
  },
};

/**
 * Category filter
 */
export const CategoryFilter: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [category, setCategory] = useState('all');

const categories = [
  { label: 'All Categories', value: 'all' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Clothing', value: 'clothing' },
];

const currentCategory = categories.find((cat) => cat.value === category);

<SelectUnControlled
  variant="DEFAULT"
  label={currentCategory?.label || 'Select category'}
  icon={{ icon: 'filter', altText: 'Filter by category' }}
  defaultOptionSelected={category}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: categories,
  }}
  onOptionClick={setCategory}
/>`,
      },
    },
  },
  render: () => {
    const [category, setCategory] = useState('all');

    const categories = [
      { label: 'All Categories', value: 'all' },
      { label: 'Electronics', value: 'electronics' },
      { label: 'Clothing', value: 'clothing' },
      { label: 'Home & Garden', value: 'home-garden' },
      { label: 'Sports & Outdoors', value: 'sports' },
      { label: 'Books', value: 'books' },
      { label: 'Toys & Games', value: 'toys' },
    ];

    const currentCategory = categories.find((cat) => cat.value === category);

    return (
      <div style={{ maxWidth: '300px' }}>
        <span
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}
        >
          Category
        </span>
        <SelectUnControlled
          defaultOptionSelected={category}
          icon={{ altText: 'Filter by category', icon: 'filter' }}
          label={currentCategory?.label || 'Select category'}
          listOptions={{
            options: categories,
            optionVariant: 'DEFAULT',
            type: 'selection',
            variant: 'DEFAULT',
          }}
          popover={{
            disableClickOverlayClose: false,
            disableEscapeClose: false,
            placement: 'bottom-start',
          }}
          variant="DEFAULT"
          onOptionClick={setCategory}
        />
      </div>
    );
  },
};

/**
 * Select with hover interaction
 */
export const WithHoverInteraction: Story = {
  args: {
    icon: { altText: 'Toggle', icon: 'chevron-down' },
    label: 'Hover me',
    listOptions: {
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
      optionVariant: 'TOPBAR',
      type: 'selection',
      variant: 'TOPBAR',
    },
    openAndCloseOnHover: true,
    popover: {
      disableClickOverlayClose: false,
      disableEscapeClose: false,
      placement: 'bottom-start',
    },
    variant: 'TOPBAR',
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectUnControlled
  variant="TOPBAR"
  label="Hover me"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  openAndCloseOnHover={true}
  listOptions={{
    type: 'selection',
    variant: 'TOPBAR',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  }}
/>`,
      },
    },
  },
};

/**
 * Select with close on scroll
 */
export const WithCloseOnScroll: Story = {
  parameters: {
    docs: {
      source: {
        code: `<SelectUnControlled
  variant="DEFAULT"
  label="Select with auto-close"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  closePopoverOnScroll={true}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  }}
/>`,
      },
    },
  },
  render: () => {
    return (
      <div>
        <p style={{ color: '#666', marginBottom: '16px' }}>
          Open the select and scroll the page - it will close automatically
        </p>
        <SelectUnControlled
          closePopoverOnScroll
          icon={{ altText: 'Toggle', icon: 'chevron-down' }}
          label="Select with auto-close"
          listOptions={{
            options: [
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ],
            optionVariant: 'DEFAULT',
            type: 'selection',
            variant: 'DEFAULT',
          }}
          popover={{
            disableClickOverlayClose: false,
            disableEscapeClose: false,
            placement: 'bottom-start',
          }}
          variant="DEFAULT"
        />
        <div style={{ height: '800px', marginTop: '20px' }}>
          <p>Scroll down...</p>
        </div>
      </div>
    );
  },
};

/**
 * Time zone selector
 */
export const TimeZoneSelector: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [timezone, setTimezone] = useState('UTC');

const timezones = [
  { label: 'UTC', value: 'UTC' },
  { label: 'EST (UTC-5)', value: 'America/New_York' },
  { label: 'PST (UTC-8)', value: 'America/Los_Angeles' },
];

const currentTimezone = timezones.find((tz) => tz.value === timezone);

<SelectUnControlled
  variant="DEFAULT"
  label={currentTimezone?.label || 'Select timezone'}
  icon={{ icon: 'clock', altText: 'Select timezone' }}
  defaultOptionSelected={timezone}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: timezones,
  }}
  onOptionClick={setTimezone}
/>`,
      },
    },
  },
  render: () => {
    const [timezone, setTimezone] = useState('UTC');

    const timezones = [
      { label: 'UTC', value: 'UTC' },
      { label: 'EST (UTC-5)', value: 'America/New_York' },
      { label: 'PST (UTC-8)', value: 'America/Los_Angeles' },
      { label: 'GMT (UTC+0)', value: 'Europe/London' },
      { label: 'CET (UTC+1)', value: 'Europe/Paris' },
      { label: 'JST (UTC+9)', value: 'Asia/Tokyo' },
      { label: 'AEST (UTC+10)', value: 'Australia/Sydney' },
    ];

    const currentTimezone = timezones.find((tz) => tz.value === timezone);

    return (
      <div style={{ maxWidth: '300px' }}>
        <span
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}
        >
          Time Zone
        </span>
        <SelectUnControlled
          defaultOptionSelected={timezone}
          icon={{ altText: 'Select timezone', icon: 'clock' }}
          label={currentTimezone?.label || 'Select timezone'}
          listOptions={{
            options: timezones,
            optionVariant: 'DEFAULT',
            type: 'selection',
            variant: 'DEFAULT',
          }}
          popover={{
            disableClickOverlayClose: false,
            disableEscapeClose: false,
            placement: 'bottom-start',
          }}
          variant="DEFAULT"
          onOptionClick={setTimezone}
        />
      </div>
    );
  },
};

/**
 * Form integration example
 */
export const InForm: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [formData, setFormData] = useState({
  country: '',
  language: '',
  timezone: '',
});

<form onSubmit={handleSubmit}>
  <div>
    <label>Country *</label>
    <SelectUnControlled
      variant="DEFAULT"
      label={selectedCountry?.label || 'Select country'}
      icon={{ icon: 'globe', altText: 'Select country' }}
      listOptions={{
        type: 'selection',
        variant: 'DEFAULT',
        options: countries,
      }}
      onOptionClick={(value) => setFormData({ ...formData, country: value })}
    />
  </div>

  <button type="submit">Submit</button>
</form>`,
      },
    },
  },
  render: () => {
    const [formData, setFormData] = useState({
      country: '',
      language: '',
      timezone: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
    };

    const countries = [
      { label: 'United States', value: 'us' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Canada', value: 'ca' },
    ];

    const languages = [
      { label: 'English', value: 'en' },
      { label: 'Spanish', value: 'es' },
      { label: 'French', value: 'fr' },
    ];

    const timezones = [
      { label: 'UTC', value: 'UTC' },
      { label: 'EST', value: 'EST' },
      { label: 'PST', value: 'PST' },
    ];

    const selectedCountry = countries.find((c) => c.value === formData.country);
    const selectedLanguage = languages.find(
      (l) => l.value === formData.language,
    );
    const selectedTimezone = timezones.find(
      (t) => t.value === formData.timezone,
    );

    return (
      <form style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Country *
          </span>
          <SelectUnControlled
            defaultOptionSelected={formData.country}
            icon={{ altText: 'Select country', icon: 'globe' }}
            label={selectedCountry?.label || 'Select country'}
            listOptions={{
              options: countries,
              optionVariant: 'DEFAULT',
              type: 'selection',
              variant: 'DEFAULT',
            }}
            popover={{
              disableClickOverlayClose: false,
              disableEscapeClose: false,
              placement: 'bottom-start',
            }}
            variant="DEFAULT"
            onOptionClick={(value) =>
              setFormData({ ...formData, country: value })
            }
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Language *
          </span>
          <SelectUnControlled
            defaultOptionSelected={formData.language}
            icon={{ altText: 'Select language', icon: 'message-square' }}
            label={selectedLanguage?.label || 'Select language'}
            listOptions={{
              options: languages,
              optionVariant: 'DEFAULT',
              type: 'selection',
              variant: 'DEFAULT',
            }}
            popover={{
              disableClickOverlayClose: false,
              disableEscapeClose: false,
              placement: 'bottom-start',
            }}
            variant="DEFAULT"
            onOptionClick={(value) =>
              setFormData({ ...formData, language: value })
            }
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Timezone *
          </span>
          <SelectUnControlled
            defaultOptionSelected={formData.timezone}
            icon={{ altText: 'Select timezone', icon: 'clock' }}
            label={selectedTimezone?.label || 'Select timezone'}
            listOptions={{
              options: timezones,
              optionVariant: 'DEFAULT',
              type: 'selection',
              variant: 'DEFAULT',
            }}
            popover={{
              disableClickOverlayClose: false,
              disableEscapeClose: false,
              placement: 'bottom-start',
            }}
            variant="DEFAULT"
            onOptionClick={(value) =>
              setFormData({ ...formData, timezone: value })
            }
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
          Submit
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
              Form Submitted!
            </p>
            <p
              style={{ color: '#155724', fontSize: '14px', margin: '8px 0 0' }}
            >
              Country: {formData.country || 'Not selected'}
              <br />
              Language: {formData.language || 'Not selected'}
              <br />
              Timezone: {formData.timezone || 'Not selected'}
            </p>
          </div>
        )}
      </form>
    );
  },
};

/**
 * All variants demonstration
 */
export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `// DEFAULT Variant
<SelectUnControlled
  variant="DEFAULT"
  label="Select an option"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  listOptions={{
    type: 'selection',
    variant: 'DEFAULT',
    options: options,
  }}
/>

// TOPBAR Variant
<SelectUnControlled
  variant="TOPBAR"
  label="Menu"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  listOptions={{
    type: 'selection',
    variant: 'TOPBAR',
    options: options,
  }}
/>

// SIDE_MENU Variant
<SelectUnControlled
  variant="SIDE_MENU"
  label="Navigation"
  icon={{ icon: 'menu', altText: 'Toggle' }}
  listOptions={{
    type: 'navigation',
    variant: 'SIDE_MENU',
    options: options,
  }}
/>

// TOPBAR_TAB Variant
<SelectUnControlled
  variant="TOPBAR_TAB"
  label="Tab Menu"
  icon={{ icon: 'chevron-down', altText: 'Toggle' }}
  listOptions={{
    type: 'selection',
    variant: 'TOPBAR_TAB',
    options: options,
  }}
/>`,
      },
    },
  },
  render: () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ marginBottom: '12px' }}>DEFAULT Variant</h4>
          <SelectUnControlled
            icon={{ altText: 'Toggle', icon: 'chevron-down' }}
            label="Select an option"
            listOptions={{
              options: options,
              optionVariant: 'DEFAULT',
              type: 'selection',
              variant: 'DEFAULT',
            }}
            popover={{
              disableClickOverlayClose: false,
              disableEscapeClose: false,
              placement: 'bottom-start',
            }}
            variant="DEFAULT"
          />
        </div>

        <div>
          <h4 style={{ marginBottom: '12px' }}>TOPBAR Variant</h4>
          <SelectUnControlled
            icon={{ altText: 'Toggle', icon: 'chevron-down' }}
            label="Menu"
            listOptions={{
              options: options,
              optionVariant: 'TOPBAR',
              type: 'selection',
              variant: 'TOPBAR',
            }}
            popover={{
              disableClickOverlayClose: false,
              disableEscapeClose: false,
              placement: 'bottom-start',
            }}
            variant="TOPBAR"
          />
        </div>

        <div>
          <h4 style={{ marginBottom: '12px' }}>SIDE_MENU Variant</h4>
          <SelectUnControlled
            icon={{ altText: 'Toggle', icon: 'menu' }}
            label="Navigation"
            listOptions={{
              options: options,
              optionVariant: 'SIDE_MENU',
              type: 'navigation',
              variant: 'SIDE_MENU',
            }}
            popover={{
              disableClickOverlayClose: false,
              disableEscapeClose: false,
              placement: 'bottom-start',
            }}
            variant="SIDE_MENU"
          />
        </div>

        <div>
          <h4 style={{ marginBottom: '12px' }}>TOPBAR_TAB Variant</h4>
          <SelectUnControlled
            icon={{ altText: 'Toggle', icon: 'chevron-down' }}
            label="Tab Menu"
            listOptions={{
              options: options,
              optionVariant: 'TOPBAR_TAB',
              type: 'selection',
              variant: 'TOPBAR_TAB',
            }}
            popover={{
              disableClickOverlayClose: false,
              disableEscapeClose: false,
              placement: 'bottom-start',
            }}
            variant="TOPBAR_TAB"
          />
        </div>
      </div>
    );
  },
};
