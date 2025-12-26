import REPLACE_SVG from '../../assets/icons/replace.svg';

const template = document.createElement('template');
template.innerHTML = `
  <div class="replace-content">
    <style>
      .replace-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: auto;
        height: 200px;
        margin: 0;
        padding: 20px;
        background-color: rgb(234 240 254);
        color: #236df6;
        border-radius: 6px;
      }

      @media (width <= 768px) {
        .replace-content {
          width: auto;
        }
      }
    </style>
    <img alt="" />
    <span class="placeholder">Replace here your Content</span>
    <slot></slot>
  </div>
`;

export class ReplaceContent extends HTMLElement {
  static observedAttributes = [
    'icon-src',
    'width',
    'height',
    'margin',
    'role',
    'tabindex',
    'id',
  ];

  private container: HTMLElement | null = null;
  private img: HTMLImageElement | null = null;
  private placeholder: HTMLElement | null = null;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    this.container = this.shadowRoot?.querySelector('.replace-content') || null;
    this.img = this.shadowRoot?.querySelector('img') || null;
    this.placeholder = this.shadowRoot?.querySelector('.placeholder') || null;

    if (!this.container || !this.img || !this.placeholder) {
      return;
    }

    this.setupSlotListener();
    this.applyAttributes();
  }

  attributeChangedCallback(): void {
    if (this.container) {
      this.applyAttributes();
    }
  }

  private setupSlotListener() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) {
      return;
    }

    slot.addEventListener('slotchange', () => {
      const hasContent = slot
        .assignedNodes()
        .some(
          (node) =>
            node.nodeType === Node.ELEMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE &&
              node.textContent?.trim() !== ''),
        );

      if (this.placeholder) {
        this.placeholder.style.display = hasContent ? 'none' : 'inline';
      }
    });
  }

  private applyAttributes() {
    if (!this.img || !this.container) {
      return;
    }

    const iconSrc = this.getAttribute('icon-src') || REPLACE_SVG;
    const width = this.getAttribute('width');
    const height = this.getAttribute('height');
    const margin = this.getAttribute('margin');
    const role = this.getAttribute('role');
    const tabindex = this.getAttribute('tabindex');
    const id = this.getAttribute('id');

    // Set image attributes
    this.img.src = iconSrc;
    this.img.width = width ? Number(width) || 48 : 48; // Default to 48 if invalid
    this.img.height = height ? Number(height) || 48 : 48; // Default to 48 if invalid

    // Set container styles and attributes
    if (margin) {
      this.container.style.margin = margin;
    }
    if (role) {
      this.container.setAttribute('role', role);
    }
    if (tabindex) {
      const tabIndexValue = Number(tabindex);
      if (!isNaN(tabIndexValue)) {
        this.container.tabIndex = tabIndexValue;
      }
    }
    if (id) {
      this.container.id = id;
    }
  }
}

// Register the custom element if not already defined
if (!customElements.get('replace-content')) {
  customElements.define('replace-content', ReplaceContent);
}
