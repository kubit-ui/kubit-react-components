const template = document.createElement('template');
template.innerHTML = `
  <style>
    .kbt-screen-reader-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  </style>
  <span class="kbt-screen-reader-only" aria-live="off" data-testid="screen-reader"></span>
`;

export class ScreenReaderOnly extends HTMLElement {
  static observedAttributes = ['id', 'aria-live', 'data-testid'];
  private validAttributes = ['id', 'aria-live', 'data-testid'];

  private span: HTMLSpanElement | null = null;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    this.span =
      this.shadowRoot?.querySelector('.kbt-screen-reader-only') || null;

    if (!this.span) {
      return;
    }

    this.applyAttributes();
    this.moveContentToSpan();
  }

  setAttribute(name: string, value: string): void {
    // Solo permitir atributos válidos
    if (this.validAttributes.includes(name)) {
      super.setAttribute(name, value);
    }
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (oldValue !== newValue && this.span) {
      this.span.setAttribute(name, newValue || '');
    }
  }

  private applyAttributes(): void {
    if (!this.span) {
      return;
    }

    const id = this.getAttribute('id') || '';
    const ariaLive = this.getAttribute('aria-live') || 'off';
    const dataTestId = this.getAttribute('data-testid') || 'screen-reader';

    this.span.id = id;
    this.span.setAttribute('aria-live', ariaLive);
    this.span.setAttribute('data-testid', dataTestId);
  }

  private moveContentToSpan(): void {
    if (!this.span) {
      return;
    }

    while (this.firstChild) {
      this.span.appendChild(this.firstChild);
    }
  }
}

// Register the custom element if not already defined
if (!customElements.get('screen-reader-only')) {
  customElements.define('screen-reader-only', ScreenReaderOnly);
}
